// Every topic, drill set and exam paper passes structural + answer-key self-checks,
// and question ids are unique across the whole app.
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";
import { validateExamPaper, validateTopic } from "../lib/validate.ts";
import type { Paper, Topic, TopicGuide, TopicPractice, ExamPaper, Question, VocabGroup } from "../lib/types.ts";
import type { Drill } from "../lib/drills/types.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer, displayAnswer, specSelfCheck, suggestMarks } from "../lib/answerCheck.ts";
import { SPRINT_MODES, setSprintVocab, sprintItem } from "../lib/sprint.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

test("all topics validate and ids are globally unique", async () => {
  const seen = new Set<string>();
  const problems: string[] = [];
  for (const m of TOPIC_META) {
    const guide = await load<TopicGuide>(`lib/topics/${m.id}/guide.ts`, "guide");
    if (!guide) continue;
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const topic: Topic = {
      ...guide,
      quiz: practice?.quiz ?? [],
      mcqPapers: (await load<Paper[]>(`lib/topics/${m.id}/mcq.ts`, "mcqPapers")) ?? [],
      practicePapers: [...(practice?.papers ?? []), ...((await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers")) ?? [])],
      challenge: practice?.challenge ?? [],
    };
    const { issues } = validateTopic(topic, seen);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
  }
  const sections = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.sections.map((s) => s.id)]));
  for (const e of ["exam-r1", "exam-w1", "exam-r2", "exam-w2"]) {
    const paper = await load<ExamPaper>(`lib/exam/${e}.ts`, "paper");
    if (!paper) continue;
    const { issues } = validateExamPaper(paper, sections, 30);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
    for (const q of paper.questions) {
      if (seen.has(q.id)) problems.push(`${q.id}: duplicate id`);
      seen.add(q.id);
    }
  }
  assert.deepEqual(problems.slice(0, 30), []);
});

test("all written questions score full marks on modelAnswer and 0 on stem-copy / non-answers", async () => {
  const problems: string[] = [];
  const allQs: Question[] = [];
  for (const m of TOPIC_META) {
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const more = (await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers")) ?? [];
    allQs.push(
      ...(practice?.quiz ?? []),
      ...(practice?.papers ?? []).flatMap((p) => p.questions),
      ...more.flatMap((p) => p.questions),
      ...(practice?.challenge ?? []),
    );
  }
  for (const e of ["exam-r1", "exam-w1", "exam-r2", "exam-w2"]) {
    const paper = await load<ExamPaper>(`lib/exam/${e}.ts`, "paper");
    if (paper) allQs.push(...paper.questions);
  }
  for (const q of allQs) {
    if (q.kind !== "written") continue;
    if (!suggestMarks(q, q.modelAnswer).every(Boolean)) problems.push(`${q.id}: modelAnswer does not score full marks`);
    if (suggestMarks(q, q.question).some(Boolean)) problems.push(`${q.id}: copying question stem scores marks`);
    if (suggestMarks(q, "no sé").some(Boolean)) problems.push(`${q.id}: 'no sé' scores marks`);
    if (suggestMarks(q, "I don't know").some(Boolean)) problems.push(`${q.id}: 'I don't know' scores marks`);
  }
  assert.deepEqual(problems, []);
});

test("sprint modes produce unambiguous, checkable items with no synonym collisions", async () => {
  const allVocab: Record<string, VocabGroup[]> = {};
  for (const m of TOPIC_META) {
    const v = await load<VocabGroup[]>(`lib/vocab/${m.id}.ts`, "vocab");
    if (v) allVocab[m.id] = v;
  }
  setSprintVocab(allVocab);
  const byPrompt = new Map<string, string>();
  const rng = makeRng(2026);
  for (const mode of SPRINT_MODES) {
    for (let i = 0; i < 200; i++) {
      const it = sprintItem(mode, rng);
      assert.ok(it.prompt.length > 0 && it.answer.length > 0);
      assert.doesNotMatch(it.prompt, /^(?:he|she|his|her)$/i, `truncated pronoun prompt: ${it.prompt} -> ${it.fact}`);
      assert.equal(checkAnswer(it.spec, displayAnswer(it.spec)).status, "correct");
      if (it.mode === "vocab") {
        const key = it.prompt.toLowerCase();
        const sig = [...it.answer].sort().join("|");
        const prev = byPrompt.get(key);
        if (prev) assert.equal(sig, prev, `vocab sprint collision on "${it.prompt}"`);
        else byPrompt.set(key, sig);
      }
    }
  }
});

test("all drills generate valid, self-consistent items", async () => {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const m of TOPIC_META) {
    const drills = await load<Drill[]>(`lib/drills/${m.id}.ts`, "drills");
    if (!drills) continue;
    for (const d of drills) {
      if (ids.has(d.id)) problems.push(`${d.id}: duplicate drill id`);
      ids.add(d.id);
      for (const tier of [1, 2, 3] as const) {
        for (let seed = 1; seed <= 200; seed++) {
          try {
            const item = d.generate(makeRng(seed * 104729 + tier), tier);
            const r = specSelfCheck(item.answer);
            if (r.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: answer fails self-check`);
            const dr = checkAnswer(item.answer, displayAnswer(item.answer));
            if (dr.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: displayAnswer fails checkAnswer`);
            if (!item.prompt || !item.solution?.length) problems.push(`${d.id} t${tier} s${seed}: empty prompt/solution`);
          } catch (e) {
            problems.push(`${d.id} t${tier} s${seed}: threw ${(e as Error).message}`);
          }
        }
      }
    }
  }
  assert.deepEqual(problems.slice(0, 30), []);
});
