# Year 9 Edexcel IGCSE Spanish (`Year 9`) — Author Contract

All topic, vocab, drill, widget, extras, and mock-exam authors MUST follow every rule in this file so `validate-topic.ts`, `validate-drills.ts`, `validate-exam.ts`, `tests/content.test.ts`, and cold Layer-1 blind solving pass at **100.0% agreement** with **zero** issues.

## 1. Strict Workspace & Concurrency Rules
- Work **ONLY** on your assigned files inside `/Users/mayankrawat/Downloads/year9-workspace/Year11spanish`.
- **NEVER** touch any directory outside `/Users/mayankrawat/Downloads/year9-workspace/Year11spanish`.
- **NEVER** run `npm run gen`, `node scripts/gen-registry.mjs`, `npm run build`, `git`, or touch shared files (`lib/topics/meta.ts`, `lib/spanish/verbs.ts`, `lib/generated/*`, `components/widgets/registry.ts`).
- Do **NOT** create any strings mentioning `Vanshika`, `Year 8`, `year8`, or `y8` anywhere. Default learner name (if ever mentioned in examples) is **Vanshika** (Year 9 IGCSE Spanish `Year 9`).

## 2. Imports & TypeScript Rules
Because Node loads `lib/topics/*`, `lib/vocab/*`, `lib/drills/*`, `lib/extras/*`, and `lib/exam/*` directly via `node scripts/validate-*.ts`:
- Inside `lib/` files, import types with `import type { ... } from "../../types.ts"` (or `"../types.ts"`) WITH `.ts` extensions!
- Inside `components/widgets/<id>.tsx`, start line 1 with `"use client";` and use `@/components/widgets/kit`, `@/components/SpeakButton`, `@/lib/spanish/verbs` (standard Next.js imports without `.ts`).

## 3. Exact Per-Topic File Shapes & Quotas (`<id>` from `lib/topics/meta.ts`)

### A. `lib/vocab/<id>.ts` → `export const vocab: VocabGroup[]`
- **Quota**: `>= 5` groups (`VocabGroup`), **120–126 unique items** total (`validate-topic.ts` enforces `>= 115` items so 7 topics = ~850+ high-frequency Edexcel `Year 9` vocabulary items!).
- Every `es` string must be **plain Spanish text** (NO `*`, `{`, `}`, or backticks; include `el ` / `la ` / `los ` / `las ` for nouns so learners master gender, e.g. `"el problema"`, `"el cambio climático"`, `"la solicitud"`).
- Zero duplicate `es` strings within a file (case-insensitive).
- Keep `en` crisp and unambiguous (e.g. `"climate change"`, `"to apply for (a job)"`, `"customs (border)"`). Never leave bare `"he/she"` as an entire `en` gloss. Use `note?: string` for gender traps, irregular stems, or exam tips (e.g. `"masc. despite -a!"`, `"u→ue: juego"`).

### B. `lib/topics/<id>/guide.ts` → `export const guide: TopicGuide`
- `id`, `title`, `strand`, `icon` MUST match `lib/topics/meta.ts` (`TOPIC_META`) verbatim.
- `guide` array MUST contain the **exact 5 section `id`s** listed in `lib/topics/meta.ts` for `<id>` in **exact order**.
- Every `GuideSection` MUST include:
  - `id`, `heading`, `discovery: { problem, idea }`, `body` (rich AoPS explanation + Markdown tables + Tanglin Year 9 Spanish Paper 1/2/3 exam insights), `workedExamples` (`>= 1`, and at least 1 `workedExample` in EVERY section MUST have an auto-marked `yourTurn: { question, answer, solution }`), `keyPoints` (`>= 3`), `whyItWorks`, `strategies` (`>= 2`), `thinkDeeper`.
  - **Inline Accessible SVGs**: At least **3 of the 5 sections** (`validate-topic` requires `>= 2`, aim for 3) MUST include `diagram` + `diagramCaption`:
    - Must start with `<svg` and end with `</svg>`
    - Must include `viewBox="0 0 620 220"` (or similar), `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, `aria-label="..."`
    - **NO backticks or `${` inside the SVG string** (use plain single-line or concatenated string literals, or clean double-quoted strings; check text coordinates so labels never overlap!).
- `learn: LearnSmart` quotas (ALL enforced by `validate-topic.ts`):
  - `flashcards`: `>= 14` (min 12)
  - `mustKnow`: `>= 8` ("Can you…?" Grade-9 self-check items)
  - `misconceptions`: `>= 6` (min 5) — **User Priority: "Never Write This ❌ → Write This Instead ✅"** (`{ wrong: "*Soy dieciséis años.*", right: "*Tengo dieciséis años.* — Spanish uses *tener* for age, hunger, thirst, heat, cold and fear." }`)
  - `examMistakes`: `>= 6` (specific Tanglin Year 9 Spanish Paper 1 Listening traps, Paper 2 Q3c grammar gap-fill traps, Paper 2 Q6 60–75w & Q7 130–150w 3-time-frame checklist, Paper 3 Speaking spontaneous follow-ups)
  - `mnemonics`: `>= 2` (`{ topic, device, explanation }`, e.g. WEIRDO, DOCTOR/PLACE, DISHES, SAFE vs WATERS)
  - `realWorld`: `>= 4` (`{ title, detail, emoji }` — authentic Spain & Latin America culture)
  - `videos`: `>= 3` (`url` MUST start with `https://www.youtube.com/results?search_query=...`)
  - `formulas`: `>= 5` (min 4) (`{ name, formula, note }` — Grade-9 sentence frames, subjunctive triggers, tense formulas; feeds `/formulas` Vault!)

### C. `lib/topics/<id>/mcq.ts` → `export const mcqPapers: Paper[]`
- Exactly **3 papers**: `id: "<id>-m1"`, `"<id>-m2"`, `"<id>-m3"`, **15 questions each** (`<id>-m1-q01` .. `<id>-m1-q15`, etc. = 45 MCQs).
- Spread `answerIndex` evenly across `0, 1, 2, 3` (never all `0`!).
- Reference **every** section `id` from `guide.ts` across `guideRef`s so `sectionsNeverReferenced` is `[]`.
- **STRICT MCQ RULES**:
  - Exactly 4 distinct `options`.
  - **ZERO** `"All of the above"`, `"None of the above"`, or `"Both A and B"` (options are shuffled!).
  - **ZERO** positional references in `explanation` or `hints` (NEVER write `"Option A"`, `"Choice B"`, `"the first option"`, `"the last answer"` — always quote the Spanish words directly!).
  - `warmup` needs `>= 1` hint; `core` and `challenge` MUST have `2–3` hints!
  - Every MCQ must have **1 unambiguous Grade-9 correct option** and 3 genuine linguistic distractors (wrong gender, wrong tense, indicative instead of subjunctive, false friend, wrong preposition) — double-check that no distractor could also be valid Spanish for the prompt!

### D. `lib/topics/<id>/practice.ts` → `export const practice: TopicPractice`
- `quiz`: **10 questions** (`<id>-quiz-q01` .. `<id>-quiz-q10`, mixed `mcq` and `short`).
- `papers`: **2 papers** (`<id>-p1`, `<id>-p2`), **15 questions each** (`<id>-p1-q01` .. `<id>-p1-q15`, `<id>-p2-q01` .. `<id>-p2-q15`):
  - Mix Edexcel `Year 9` Paper 2 styles: Q3c-style grammar manipulation `short` Qs (e.g. *"Complete with the correct Preterite form of **hacer** (yo): Ayer _____ mis deberes."*), exact vocabulary/phrase `short` Qs, reading comprehension `mcq`/`short` Qs with short Spanish stimulus texts, and `2–3` `written` Qs per paper modelling Edexcel Paper 2 Q6 (short 4-point writing) / Q7 (3-time-frame + justified opinion writing) / Paper 3 Speaking role-play & picture-card prompts!
- `challenge`: **8 questions** (`<id>-ch-q01` .. `<id>-ch-q08`), EVERY one with `difficulty: "challenge"` and **`>= 3` hints** (`hints: [step1, step2, step3]`)!

### E. Cold Blind-Solver Rules for `ShortQ` & `WrittenQ` (CRITICAL!)
A cold blind-solver LLM will solve every question seeing **ONLY** `kind`, `question`, `options` (for MCQ), and `marks` (for written) — WITHOUT seeing `answer`, `solution`, or `hints`!
1. **Pin Expected Format in Every `ShortQ` Stem**:
   - NEVER write vague open translations like *"Translate 'I went to the beach yesterday' into Spanish."* where word order (*Ayer fui a la playa* vs *Fui a la playa ayer* vs *Yo fui...*) explodes!
   - Instead, either:
     - Give the Spanish sentence with a numbered gap and infinitive + person in brackets (exact Tanglin Year 9 Spanish Paper 2 Q3c format!):
       *"Complete the sentence with the **preterite** form of **ir** (*nosotros*): El verano pasado _______ a Mallorca."* → `accept: ["fuimos", "nosotros fuimos", "nosotras fuimos"]`
     - Or specify exact target: *"Write the Spanish noun (including definite article **el** or **la**) for **'unemployment'**."* → `accept: ["el paro", "el desempleo"]`
     - Or specify exact 2–4 word target phrase: *"Complete the subjunctive trigger phrase: **Es imprescindible que** + **tener** (*tú*, present subjunctive) → Es imprescindible que _______ cuidado. (Write ONLY the missing verb.)"* → `accept: ["tengas", "tú tengas"]`
2. **Generous `accept` Synonyms**:
   - Include optional Spanish subject pronouns (`yo`, `tú`, `él`, `ella`, `nosotros`, `ellos`) whenever a conjugated verb is requested, OR use `acceptedForms(inf, tense, person)` from `lib/spanish/verbs.ts`!
   - Include valid Castilian & Latin American equivalents where appropriate (`el ordenador` / `la computadora`, `el móvil` / `el celular`, `coger` / `tomar`, `el coche` / `el carro` / `el auto`, `el instituto` / `el colegio`).
   - Make sure `traps` do NOT match any accepted answer (`validate-topic.ts` checks this!).
3. **`WrittenQ` Anti-Gaming & Full-Mark Rules (`tests/content.test.ts` checks EVERY `WrittenQ`!)**:
   - `marks` MUST equal `markScheme.length` (typically 3 or 4 marks).
   - Every `markScheme[i].keywords` entry MUST be **all lowercase** strings!
   - `suggestMarks(q, q.modelAnswer)` MUST award **100% of marks** (`every(Boolean)`).
   - `suggestMarks(q, q.question)` MUST award **0 marks** (`!some(Boolean)`) — so NEVER put a word that appears in `q.question` into `markScheme[i].keywords`!
   - Also NEVER copy a verbatim `>= 4`-word phrase from `q.question` into `q.modelAnswer` around the keyword (`writtenCheck.ts` scrubs `>= 4`-word stem spans!). Write natural Spanish in `modelAnswer` while `q.question` frames the bullet points in English (just like real Tanglin Year 9 Spanish Paper 2 Q6/Q7 rubrics, or uses different wording!).

### F. `lib/extras/<id>.ts` → `export const extras: TopicExtras`
- Include `hook`, `didYouKnow` (4–5 fascinating facts about Spain/Hispanosphere + IGCSE exam insight), `activities` (2–3 practical speaking/study activities with `title`, `emoji`, `materials`, `steps`, `maths`), and `history: { title, story }`.

### G. `lib/drills/<id>.ts` → `export const drills: Drill[]`
- `3–5` drills per topic covering the topic's sections (`id: "<id>.<slug>"`, `topicId: "<id>"`, `level: 1 | 2 | 3`, `guideRef: "<section-id>"`).
- **CRITICAL**: `validate-drills.ts` runs 200 seeds per tier (`tier = 1, 2, 3`) and requires **`>= 15` distinct prompts per tier**! Never use a pool smaller than ~20 combinations per tier! You can import `conjugate`, `acceptedForms`, `PERSONS`, etc. from `../spanish/verbs.ts`.

### H. `components/widgets/<id>.tsx` → `export const widgets: WidgetDef[]`
- Line 1 MUST be `"use client";`.
- Export `widgets: WidgetDef[]` (1–2 genuinely interactive parameter-driven explorables using `WidgetFrame`, `Segmented`, `Slider`/`Stepper`, `Readout` from `./kit` and `SpeakButton` from `../SpeakButton` so Vanshika can hear every live Spanish sentence built in the widget with `🔊` normal + `🐢` slow audio!).

### I. `lib/exam/exam-{r1,w1,r2,w2}.ts` → `export const paper: ExamPaper` (for `esp-gram`)
- 4 cross-topic Edexcel `Year 9` Mock Papers, **30 questions each**:
  - `exam-r1`: Reading & Grammar Paper A (`calculator: false`, `minutes: 45`, `id: "exam-r1"`, Q IDs `exam-r1-q01..q30`)
  - `exam-w1`: Grammar Manipulation & Writing Paper A (`calculator: true`, `minutes: 50`, `id: "exam-w1"`, Q IDs `exam-w1-q01..q30`)
  - `exam-r2`: Reading & Grammar Paper B (`calculator: false`, `minutes: 45`, `id: "exam-r2"`, Q IDs `exam-r2-q01..q30`)
  - `exam-w2`: Grammar Manipulation & Writing Paper B (`calculator: true`, `minutes: 50`, `id: "exam-w2"`, Q IDs `exam-w2-q01..q30`)
- Every question in an exam paper MUST set BOTH `topicId` (covering all 7 topics across each 30-Q paper!) AND a valid `guideRef` belonging to that `topicId`!

## 4. Text Markup Safety (`checkText`)
- Never put literal tab `\t` characters or `undefined` / `NaN` in strings.
- Never use `{{ ... }}` math markup around Spanish words (`{{...}}` invokes the MathML parser and fails if not valid math!). Use `*italics*` and `**bold**` for Spanish phrases and emphasis.

## 5. Mandatory Self-Validation Commands Before Reporting Back
Run from `/Users/mayankrawat/Downloads/year9-workspace/Year11spanish`:
```bash
node scripts/validate-topic.ts <topicId>
node scripts/validate-drills.ts <topicId>
node scripts/typecheck-file.mjs components/widgets/<topicId>.tsx lib/extras/<topicId>.ts
# And for exam papers:
node scripts/validate-exam.ts <examId>
```
Fix **100%** of errors (and ensure `sectionsNeverReferenced` is `[]` and `issueCount` is `0`) before posting your summary back to `@spanish`!
