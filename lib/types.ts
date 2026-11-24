// ---------------------------------------------------------------------------
// Content data model for Year 9 Year 9 Spanish (Pearson Tanglin Year 9 Spanish).
//
// Audited exam content lives in lib/topics/<id>/{guide,mcq,practice}.ts.
// Engagement extras live in lib/extras/<id>.ts and never touch audited files.
// Procedural skill drills live in lib/drills/<id>.ts.
//
// TEXT FORMAT ("markdown-lite + maths markup") — used by every string field
// that is rendered as text (bodies, questions, options, steps, hints …):
//   **bold**   *italic*   `code`
//   blank line = new paragraph;  "- " bullet lines;  "1. " numbered lines
//   | a | b |  pipe tables (first row = header, second row may be |---|---|)
//   {{ … }}    inline maths, rendered as real maths (MathML)
// ---------------------------------------------------------------------------

export type Strand =
  | "Term 1: Holidays"
  | "Term 2: Food & Health"
  | "Term 3: Style & Culture"
  | "Grammar Mastery";

export type Difficulty = "warmup" | "core" | "challenge";

/** AoPS discovery opener: a problem to attempt BEFORE the idea is explained. */
export interface Discovery {
  problem: string;
  /** Revealed after the learner has had a go. */
  idea: string;
}

/** One illuminating method for a worked solution (AoPS: multiple paths). */
export interface SolutionMethod {
  label: string;
  steps: string[];
}

// ---------------------------------------------------------------------------
// Auto-marked answers
// ---------------------------------------------------------------------------

export type AnswerSpec =
  | {
      type: "number";
      value: number;
      tolerance?: number;
      allowFraction?: boolean;
      standardForm?: boolean;
      display?: string;
    }
  | {
      type: "fraction";
      n: number;
      d: number;
      simplest?: boolean;
      form?: "any" | "mixed" | "improper";
      allowDecimal?: boolean;
      display?: string;
    }
  | {
      type: "list";
      values: number[];
      ordered?: boolean;
      tolerance?: number;
      display?: string;
    }
  | {
      type: "ratio";
      parts: number[];
      simplest?: boolean;
      display?: string;
    }
  | {
      type: "expression";
      expr: string;
      form?: "any" | "factorised" | "expanded" | "simplified";
      display?: string;
    }
  /**
   * Free text matched against accepted alternatives. The checker ignores case,
   * spaces and punctuation (¿ ? ¡ ! . , ; :) — but NOT accents: an answer that
   * only matches once accents are stripped gets an "Almost — check your accents"
   * nudge (not marked correct). List every reasonable variant in `accept`
   * (with/without subject pronoun, alternative word order, Castilian/LatAm synonyms).
   */
  | {
      type: "text";
      accept: string[];
      display?: string;
    };

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

interface QuestionBase {
  /** Globally unique, e.g. "holidays-activities-m1-q01". */
  id: string;
  question: string;
  /** Optional inline SVG (viewBox, xmlns, role="img", aria-label; no backticks, no "${"). */
  diagram?: string;
  difficulty: Difficulty;
  /** id of the GuideSection this practises (for "back to the guide"). */
  guideRef?: string;
  /** AoPS hint ladder, revealed one at a time: nudge → bigger hint → key step. */
  hints: string[];
  /** Named problem-solving strategy, e.g. "Check time frame + person". */
  strategy?: string;
  /** Exam questions only: the topic id this question tests. */
  topicId?: string;
}

export interface MCQ extends QuestionBase {
  kind: "mcq";
  /** Exactly 4 options. Never refer to options by letter/position in text. */
  options: string[];
  answerIndex: number;
  /** Why the answer is right AND why a tempting distractor is wrong. */
  explanation: string;
}

export interface Trap {
  spec: AnswerSpec;
  feedback: string;
}

export interface ShortQ extends QuestionBase {
  kind: "short";
  answer: AnswerSpec;
  /** Optional common wrong answers with targeted feedback. */
  traps?: Trap[];
  /** Worked solution steps (shown after an attempt). */
  solution: string[];
  /** Optional extra methods (AoPS multiple paths). */
  solutions?: SolutionMethod[];
  commonError?: string;
}

/** One credit-worthy point in a written (Paper 2 Q6/Q7 / Paper 3) answer. */
export interface MarkPoint {
  point: string;
  /** Lower-case words/numbers a learner would write for this point (used to suggest ticks). */
  keywords: string[];
}

export interface WrittenQ extends QuestionBase {
  kind: "written";
  /** = markScheme.length */
  marks: number;
  modelAnswer: string;
  markScheme: MarkPoint[];
  commonError?: string;
  solutions?: SolutionMethod[];
}

export type Question = MCQ | ShortQ | WrittenQ;

export interface Paper {
  /** Globally unique, e.g. "holidays-activities-m1" / "holidays-activities-p1". */
  id: string;
  title: string;
  questions: Question[];
}

// ---------------------------------------------------------------------------
// Guide & learn-smart
// ---------------------------------------------------------------------------

export interface WorkedExample {
  title?: string;
  problem: string;
  steps: string[];
  answer: string;
  /** Faded follow-up: a near-identical problem the learner solves (auto-marked). */
  yourTurn?: {
    question: string;
    answer: AnswerSpec;
    /** Short worked solution shown after they try. */
    solution: string;
  };
}

export interface GuideSection {
  /** Stable kebab-case slug (deep-link target for guideRef). */
  id: string;
  heading: string;
  discovery?: Discovery;
  body: string;
  /** Inline SVG diagram. */
  diagram?: string;
  diagramCaption?: string;
  workedExamples?: WorkedExample[];
  keyPoints?: string[];
  /** "Why does this work?" — a short derivation / visual reason. */
  whyItWorks?: string;
  /** Named strategies relevant to this section. */
  strategies?: string[];
  /** AoPS-style extension prompt that makes them reason. */
  thinkDeeper?: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface Misconception {
  wrong: string;
  right: string;
}

export interface Mnemonic {
  topic: string;
  device: string;
  explanation: string;
}

export interface RealWorld {
  title: string;
  detail: string;
  emoji?: string;
}

export interface VideoLink {
  title: string;
  channel: string;
  /** Prefer YouTube search URLs so links never die. */
  url: string;
}

export interface FormulaFact {
  name: string;
  /** May use {{ }} maths markup or markdown-lite. */
  formula: string;
  note?: string;
}

/** One vocabulary item (lib/vocab/<topicId>.ts — client-safe, used by the Vocab tab and drills). */
export interface VocabItem {
  /** Spanish, with article for nouns: "el alojamiento", "la contaminación", "alojarse". */
  es: string;
  /** English meaning(s): "accommodation". */
  en: string;
  /** Optional note: gender/irregularity/usage, e.g. "masculine -ma noun! el problema". */
  note?: string;
}

export interface VocabGroup {
  /** e.g. "Accommodation & Booking", "Transport & Travel", "Top-Band Idioms". */
  title: string;
  items: VocabItem[];
}

export interface LearnSmart {
  flashcards: Flashcard[];
  /** "Can you…?" Top-Band Exam Checklist. */
  mustKnow: string[];
  /** "Never Write This ❌ → Write This Instead ✅" mark-savers. */
  misconceptions: Misconception[];
  examMistakes: string[];
  mnemonics: Mnemonic[];
  realWorld: RealWorld[];
  videos: VideoLink[];
  /** Key Top-Band grammar patterns / phrase frames (feeds the /formulas Vault). */
  formulas: FormulaFact[];
}

/** Written by the guide author: lib/topics/<id>/guide.ts */
export interface TopicGuide {
  id: string;
  title: string;
  strand: Strand;
  /** Short emoji or 1-3 character label. */
  icon: string;
  /** One-line hook for the topic card. */
  summary: string;
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
}

/** Written by the practice author: lib/topics/<id>/practice.ts */
export interface TopicPractice {
  /** Quick-check quiz (mixed kinds, 10 questions). */
  quiz: Question[];
  /** Practice papers: mostly short (auto-marked) with Edexcel Paper 2 Q3c / Q6 / Q7 written tasks. */
  papers: Paper[];
  /** AoPS-hard Top-Band challenge problems with full hint ladders. */
  challenge: Question[];
}

export interface Topic extends TopicGuide {
  quiz: Question[];
  /** MCQ papers then practice papers. */
  mcqPapers: Paper[];
  practicePapers: Paper[];
  challenge: Question[];
  /** Stretch / A-Level & IB HL look-ahead flag. */
  stretch?: boolean;
}

// ---------------------------------------------------------------------------
// Comprehensive cross-topic Tanglin Year 9 Spanish mock exams
// ---------------------------------------------------------------------------

export interface ExamPaper extends Paper {
  /** false = Reading & Grammar focus; true = Translation & Extended Writing focus. */
  calculator: boolean;
  /** Suggested minutes. */
  minutes: number;
}

// ---------------------------------------------------------------------------
// Engagement extras (separate from audited content)
// ---------------------------------------------------------------------------

export interface Activity {
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  /** The Spanish it practises / the language point behind it. */
  maths: string;
}

export interface BonusDiagram {
  title: string;
  svg: string;
  caption?: string;
}

export interface TopicExtras {
  /** 1-2 sentence curiosity hook shown at the top of the guide. */
  hook?: string;
  didYouKnow?: string[];
  activities?: Activity[];
  bonusDiagrams?: BonusDiagram[];
  /** A short true story/culture note from the Spanish-speaking world. */
  history?: { title: string; story: string };
}

// ---------------------------------------------------------------------------
// Global question index entry
// ---------------------------------------------------------------------------

export type QuestionSource = "quiz" | "mcq" | "practice" | "challenge" | "exam";

export interface IndexedQuestion {
  qid: string;
  topicId: string;
  source: QuestionSource;
  paperId?: string;
  question: Question;
}
