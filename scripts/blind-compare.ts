// Usage:
//   npx tsx scripts/blind-compare.ts                      → compares all .audit-tmp/blind/*.json against all topics + exam
//   npx tsx scripts/blind-compare.ts <topicId|exam> <dir> → compares one slice in <dir>
// Accepts blind files formatted as:
//   - [{ "id": "...", "answer": 0 | "text" }, ...]
//   - { "answers": [{ "id": "...", "answer": ... }] }
//   - { "<question-id>": 0 | "text" | { "answer": ... }, ... }
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import { checkAnswer, displayAnswer } from "../lib/answerCheck.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-r1", "exam-w1", "exam-r2", "exam-w2"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

async function questionsFor(id: string): Promise<Question[]> {
  if (id === "exam") {
    const out: Question[] = [];
    for (const e of EXAM_IDS) out.push(...(((await load<ExamPaper>(`lib/exam/${e}.ts`, "paper"))?.questions) ?? []));
    return out;
  }
  if ((EXAM_IDS as readonly string[]).includes(id)) {
    return ((await load<ExamPaper>(`lib/exam/${id}.ts`, "paper"))?.questions) ?? [];
  }
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  return [
    ...(practice?.quiz ?? []),
    ...((await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.papers ?? []).flatMap((p) => p.questions),
    ...((await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.challenge ?? []),
  ];
}

interface BlindEntry {
  id: string;
  answer: unknown;
  note?: string;
}

function parseBlindJson(raw: unknown): BlindEntry[] {
  if (Array.isArray(raw)) {
    return raw.filter((x): x is BlindEntry => !!x && typeof x === "object" && "id" in x);
  }
  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.answers)) return parseBlindJson(obj.answers);
    if (Array.isArray(obj.solutions)) return parseBlindJson(obj.solutions);
    if (Array.isArray(obj.items)) return parseBlindJson(obj.items);
    const out: BlindEntry[] = [];
    for (const [k, v] of Object.entries(obj)) {
      if (v && typeof v === "object" && "answer" in (v as Record<string, unknown>)) {
        const rec = v as { answer: unknown; note?: string };
        out.push({ id: k, answer: rec.answer, note: rec.note });
      } else {
        out.push({ id: k, answer: v });
      }
    }
    return out;
  }
  return [];
}

function compareSlice(qs: Question[], byAns: Map<string, BlindEntry>) {
  const autoQs = qs.filter((q) => q.kind !== "written");
  const mismatches: unknown[] = [];
  const unanswered: string[] = [];
  let agree = 0;
  for (const q of autoQs) {
    const a = byAns.get(q.id);
    if (!a) {
      unanswered.push(q.id);
      continue;
    }
    if (q.kind === "mcq") {
      if (Number(a.answer) === q.answerIndex) agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "mcq",
          solver: { index: a.answer, text: q.options[Number(a.answer)] },
          key: { index: q.answerIndex, text: q.options[q.answerIndex] },
          solverNote: a.note,
        });
      }
    } else if (q.kind === "short") {
      const r = checkAnswer(q.answer, String(a.answer ?? ""));
      if (r.status === "correct") agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "short",
          solver: a.answer,
          checker: r,
          key: displayAnswer(q.answer),
          spec: q.answer,
          solverNote: a.note,
        });
      }
    }
  }
  const compared = autoQs.length - unanswered.length;
  return { total: autoQs.length, compared, agree, mismatches, unanswered };
}

const [argId, argDir] = process.argv.slice(2);
if (argId && argDir) {
  const qs = await questionsFor(argId);
  const byAns = new Map<string, BlindEntry>();
  if (existsSync(argDir)) {
    for (const f of readdirSync(argDir).filter((f) => (f.startsWith(`${argId}.answers`) || f === `${argId}.json`) && f.endsWith(".json"))) {
      for (const e of parseBlindJson(JSON.parse(readFileSync(path.join(argDir, f), "utf8")))) byAns.set(e.id, e);
    }
  }
  const res = compareSlice(qs, byAns);
  const pct = res.compared ? ((100 * res.agree) / res.compared).toFixed(1) + "%" : "0.0%";
  const report = { topic: argId, total: res.total, compared: res.compared, agree: res.agree, agreement: pct, mismatches: res.mismatches.length, unanswered: res.unanswered.length };
  writeFileSync(path.join(argDir, `${argId}.mismatches.json`), JSON.stringify({ report, mismatches: res.mismatches, unanswered: res.unanswered }, null, 2));
  console.log(JSON.stringify(report));
  if (res.mismatches.length > 0 || res.unanswered.length > 0) process.exitCode = 1;
} else {
  const bDir = path.join(root, ".audit-tmp", "blind");
  const byAns = new Map<string, BlindEntry>();
  if (existsSync(bDir)) {
    for (const f of readdirSync(bDir).filter((f) => f.endsWith(".json"))) {
      const parsed = parseBlindJson(JSON.parse(readFileSync(path.join(bDir, f), "utf8")));
      for (const e of parsed) byAns.set(e.id, e);
    }
  }
  let grandTotal = 0;
  let grandCompared = 0;
  let grandAgree = 0;
  const allMismatches: unknown[] = [];
  const allUnanswered: string[] = [];
  const slices: Record<string, unknown> = {};

  for (const id of [...TOPIC_META.map((t) => t.id), "exam"]) {
    const qs = await questionsFor(id);
    const res = compareSlice(qs, byAns);
    grandTotal += res.total;
    grandCompared += res.compared;
    grandAgree += res.agree;
    allMismatches.push(...res.mismatches);
    allUnanswered.push(...res.unanswered);
    const pct = res.compared ? ((100 * res.agree) / res.compared).toFixed(1) + "%" : "0.0%";
    slices[id] = { total: res.total, compared: res.compared, agree: res.agree, agreement: pct, mismatches: res.mismatches.length, unanswered: res.unanswered.length };
    console.log(`${id}: ${res.agree}/${res.total} agreed (${pct}), ${res.mismatches.length} mismatches, ${res.unanswered.length} unanswered`);
  }

  const overallPct = grandCompared ? ((100 * grandAgree) / grandCompared).toFixed(1) + "%" : "0.0%";
  const summary = {
    totalQuestions: grandTotal,
    compared: grandCompared,
    agree: grandAgree,
    agreement: overallPct,
    mismatches: allMismatches.length,
    unanswered: allUnanswered.length,
    slices,
  };
  if (existsSync(path.join(root, ".audit-tmp"))) {
    writeFileSync(path.join(root, ".audit-tmp", "mismatches.json"), JSON.stringify({ summary, mismatches: allMismatches, unanswered: allUnanswered }, null, 2));
  }
  console.log(`\nOVERALL BLIND AGREEMENT: ${grandAgree}/${grandTotal} (${overallPct}) · ${allMismatches.length} mismatches · ${allUnanswered.length} unanswered`);
  if (allMismatches.length > 0 || allUnanswered.length > 0) process.exitCode = 1;
}
