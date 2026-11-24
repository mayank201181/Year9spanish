// Usage:
//   npx tsx scripts/blind-export.ts                      → exports all topics + exam into .audit-tmp/questions/<id>.json
//   npx tsx scripts/blind-export.ts <topicId|exam> <dir> → exports one slice into <dir>/<id>.questions.json
// Strips answerIndex, answer values, explanations, hints and solutions for cold Layer 1 blind solving.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AnswerSpec, ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-r1", "exam-w1", "exam-r2", "exam-w2"] as const;

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

function form(a: AnswerSpec): string {
  switch (a.type) {
    case "number":
      return `a single number${a.allowFraction === false ? " (as a decimal, not a fraction)" : ""}${a.standardForm ? " in standard form like 3.2 x 10^4" : ""}`;
    case "fraction":
      return `a fraction${a.simplest ? " in simplest form" : ""}${a.form === "mixed" ? " written as a mixed number like 2 1/3" : a.form === "improper" ? " written as an improper fraction" : ""}`;
    case "list":
      return `${a.values.length} numbers separated by commas${a.ordered ? " IN THE ORDER THE QUESTION ASKS" : " (any order)"}`;
    case "ratio":
      return `a ratio with ${a.parts.length} parts like 3:4${a.simplest ? " in simplest form" : ""}`;
    case "expression":
      return `an algebraic expression in plain text${a.form && a.form !== "any" ? ` (${a.form})` : ""}`;
    case "text":
      return "short Spanish or English text (follow the language/form asked in the question; include accents á é í ó ú ñ ü)";
  }
}

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

function serialize(qs: Question[]) {
  return qs
    .filter((q) => q.kind !== "written")
    .map((q) =>
      q.kind === "mcq"
        ? { id: q.id, kind: "mcq", question: q.question, ...(q.diagram ? { hasDiagram: true, diagram: q.diagram } : {}), options: q.options.map((o, i) => ({ i, text: o })) }
        : { id: q.id, kind: "short", question: q.question, ...(q.diagram ? { hasDiagram: true, diagram: q.diagram } : {}), answerFormat: form(q.answer) }
    );
}

const [argId, argDir] = process.argv.slice(2);
if (argId && argDir) {
  const out = serialize(await questionsFor(argId));
  mkdirSync(argDir, { recursive: true });
  const target = path.join(argDir, `${argId}.questions.json`);
  writeFileSync(target, JSON.stringify(out, null, 2));
  console.log(`${out.length} questions → ${target}`);
} else {
  const qDir = path.join(root, ".audit-tmp", "questions");
  const bDir = path.join(root, ".audit-tmp", "blind");
  mkdirSync(qDir, { recursive: true });
  mkdirSync(bDir, { recursive: true });
  let total = 0;
  for (const id of [...TOPIC_META.map((t) => t.id), "exam"]) {
    const out = serialize(await questionsFor(id));
    total += out.length;
    const target = path.join(qDir, `${id}.json`);
    writeFileSync(target, JSON.stringify(out, null, 2));
    console.log(`${id}: ${out.length} questions → ${path.relative(root, target)}`);
  }
  console.log(`Total exported for cold blind solving: ${total} auto-marked questions`);
}
