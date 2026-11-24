// ---------------------------------------------------------------------------
// Auto-marking for typed Year 9 Spanish & numeric answers.
//
//   correct   — right value / Spanish or English form
//   close     — accent slip (hablo vs habló, ano vs año) or unsimplified form;
//               nudges learner to fix without counting as a wrong try
//   incorrect — wrong (with targeted feedback on ANTONYM_PAIRS / CONFUSABLE_GROUPS)
//   invalid   — unreadable format
// ---------------------------------------------------------------------------

import type { AnswerSpec } from "./types.ts";
import { suggestMarks, writtenCheck } from "./writtenCheck.ts";
import {
  countTerms,
  evalExpr,
  exprEquivalent,
  exprVars,
  extractNumbers,
  gcd,
  hasCommonFactorInBracket,
  hasGroup,
  hasLooseGroup,
  hasUncombinedTerm,
  isFactorised,
  normalizeInput,
  parseExpr,
  parseNumberAnswer,
  type Expr,
} from "./mathParse.ts";

export { suggestMarks, writtenCheck };

export type CheckStatus = "correct" | "close" | "incorrect" | "invalid";

export interface CheckResult {
  status: CheckStatus;
  /** Short, kind feedback for the learner. */
  feedback?: string;
}

// ---------------------------------------------------------------------------
// Spanish IGCSE Year 9 Antonym & Confusable Guards (Layer 2 Hardening)
// ---------------------------------------------------------------------------

export const ANTONYM_PAIRS: ReadonlyArray< readonly [string, string] > = [
  ["bueno", "malo"],
  ["buena", "mala"],
  ["mejor", "peor"],
  ["bien", "mal"],
  ["grande", "pequeño"],
  ["grande", "pequeña"],
  ["más", "menos"],
  ["mucho", "poco"],
  ["siempre", "nunca"],
  ["ayer", "mañana"],
  ["antes", "después"],
  ["limpio", "sucio"],
  ["sano", "malsano"],
  ["saludable", "poco saludable"],
  ["fácil", "difícil"],
  ["caro", "barato"],
  ["rico", "pobre"],
  ["subir", "bajar"],
  ["entrar", "salir"],
  ["encender", "apagar"],
  ["ahorrar", "malgastar"],
  ["ganar", "perder"],
  ["aprobar", "suspender"],
  ["ventaja", "desventaja"],
  ["justo", "injusto"],
  ["seguro", "peligroso"],
  ["tranquilo", "ruidoso"],
];

export interface ConfusableGroup {
  words: readonly string[];
  hint: string;
}

export const CONFUSABLE_GROUPS: readonly ConfusableGroup[] = [
  {
    words: ["por", "para"],
    hint: "Mind *por* vs *para*: *para* = purpose ('in order to'), recipient, destination or deadline; *por* = cause, duration, means or exchange.",
  },
  {
    words: ["ser", "estar", "soy", "estoy", "eres", "estás", "es", "está", "somos", "estamos", "son", "están", "era", "estaba", "fue", "estuvo", "sea", "esté"],
    hint: "Check *ser* vs *estar*: *ser* (DOCTOR) = identity, traits, origin & time; *estar* (PLACE) = location & temporary states.",
  },
  {
    words: ["saber", "conocer", "sé", "conozco", "sabes", "conoces", "sabe", "conoce", "sabemos", "conocemos", "saben", "conocen", "sepa", "conozca"],
    hint: "Check *saber* vs *conocer*: *saber* = facts or how to do something; *conocer* = people or places.",
  },
  {
    words: ["pedir", "preguntar", "pido", "pregunto", "pide", "pregunta", "pedí", "pregunté", "pidió", "preguntó"],
    hint: "Check *pedir* vs *preguntar*: *pedir* = to ask for / order an item; *preguntar* = to ask a question.",
  },
  {
    words: ["hablo", "habló", "trabajo", "trabajó", "compro", "compró", "estudio", "estudió", "viajo", "viajó", "jugo", "jugó", "paso", "pasó", "llego", "llegó"],
    hint: "Mind the final accent: *-o* (no accent) is *yo* present; *-ó* (accent) is *él/ella* preterite!",
  },
  {
    words: ["fui", "fue", "fuimos", "fueron"],
    hint: "Check the person in the preterite of *ir/ser*: *fui* = I went/was, *fue* = he/she/it went/was.",
  },
  {
    words: ["me gusta", "me gustan", "gusta", "gustan", "gustó", "gustaron", "encanta", "encantan", "encantó", "encantaron"],
    hint: "With *gustar / encantar*, the verb agrees with the thing liked: singular/infinitive → *gusta*, plural noun → *gustan*.",
  },
  {
    words: ["muy", "mucho", "mucha", "muchos", "muchas"],
    hint: "Check *muy* vs *mucho*: *muy* + adjective/adverb (*muy interesante*), *mucho/a/os/as* + noun or with *tener/hacer* (*hace mucho calor*).",
  },
  {
    words: ["había", "hubo", "hay"],
    hint: "Check the tense of *haber*: *hay* = there is/are (present), *había* = there was/were (background), *hubo* = there was/were (event).",
  },
  {
    words: ["habla", "hable", "tiene", "tenga", "va", "vaya", "hace", "haga", "viene", "venga", "puede", "pueda", "quiere", "quiera"],
    hint: "Check the mood: indicative (factual statement) vs present subjunctive (triggered by WEIRDO / future *cuando* / *para que*).",
  },
];

const EPS = 1e-9;

function near(a: number, b: number, tol?: number): boolean {
  const t = tol ?? EPS * Math.max(1, Math.abs(a), Math.abs(b));
  return Math.abs(a - b) <= t + 1e-12;
}

function fmt(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return String(parseFloat(n.toPrecision(10)));
}

export function displayAnswer(spec: AnswerSpec): string {
  if (spec.display) return spec.display;
  switch (spec.type) {
    case "number":
      return fmt(spec.value).replace(/^-/, "−");
    case "fraction": {
      const neg = spec.n * spec.d < 0;
      const n = Math.abs(spec.n), d = Math.abs(spec.d);
      if (spec.form === "mixed" && n > d) {
        const w = Math.floor(n / d), r = n % d;
        return `{{${neg ? "-" : ""}${w}${r ? ` ${r}/${d}` : ""}}}`;
      }
      return `{{${neg ? "-" : ""}${n}/${d}}}`;
    }
    case "list":
      return spec.values.map(fmt).join(", ").replace(/-/g, "−");
    case "ratio":
      return spec.parts.map(fmt).join(" : ");
    case "expression":
      return `{{${spec.expr}}}`;
    case "text":
      return spec.accept[0] ?? "";
  }
}

export function normText(s: string): string {
  return normalizeInput(s)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\.$/, "")
    .replace(/[“”"']/g, "");
}

export function checkAnswer(spec: AnswerSpec, raw: string): CheckResult {
  const input = (raw ?? "").trim();
  if (!input) return { status: "invalid", feedback: "Type an answer first." };
  try {
    switch (spec.type) {
      case "number":
        return checkNumber(spec, input);
      case "fraction":
        return checkFraction(spec, input);
      case "list":
        return checkList(spec, input);
      case "ratio":
        return checkRatio(spec, input);
      case "expression":
        return checkExpression(spec, input);
      case "text":
        return checkText(spec, input);
    }
  } catch {
    return { status: "invalid", feedback: "I couldn't read that — try writing it another way." };
  }
}

function withPi(e: Expr, pi: number): Expr {
  switch (e.t) {
    case "num": return e.v === Math.PI ? { t: "num", v: pi } : e;
    case "var": return e;
    case "neg": case "group": case "fn": return { ...e, a: withPi(e.a, pi) };
    default: return { ...e, a: withPi(e.a, pi), b: withPi(e.b, pi) };
  }
}

function piNumberValues(input: string): number[] | null {
  const s = stripEquation(input);
  if (!input.includes("π") && !/(?<![a-z])pi(?![a-z])/i.test(s)) return null;
  for (const text of [s, stripTrailingUnit(s, new Set())]) {
    const e = text === null ? null : parseExpr(text);
    if (e && exprVars(e).size === 0) return [Math.PI, 3.14, 22 / 7].map((pi) => evalExpr(withPi(e, pi), {}));
  }
  return null;
}

function roundsTo(v: number, target: number): boolean {
  const text = String(target);
  if (text.includes("e")) return false;
  const dp = text.split(".")[1]?.length ?? 0;
  return Math.abs(v - target) <= 0.5 * 10 ** -dp + 1e-9;
}

function checkNumber(spec: Extract<AnswerSpec, { type: "number" }>, input: string): CheckResult {
  const pi = piNumberValues(input);
  if (pi !== null) {
    if (pi.some((v) => near(v, spec.value, spec.tolerance) || roundsTo(v, spec.value))) {
      return { status: "close", feedback: "That's the exact value in terms of π — now work it out as a decimal, rounded as the question asks." };
    }
    return { status: "incorrect" };
  }
  const p = parseNumberAnswer(input);
  if (!p) {
    return { status: "invalid", feedback: "Type a single number, like 12, −3.5 or 3/4." };
  }
  const allowFraction = spec.allowFraction !== false;
  if (!allowFraction && p.frac) {
    if (near(p.value, spec.value, spec.tolerance)) {
      return { status: "close", feedback: "Right value — now write it as a decimal." };
    }
    return { status: "incorrect" };
  }
  if (spec.standardForm && near(p.value, spec.value, spec.tolerance ?? 1e-9 * Math.abs(spec.value))) {
    const m = p.standardForm ? Math.abs(p.standardForm.mantissa) : NaN;
    if (!(m >= 1 && m < 10)) {
      return { status: "close", feedback: "Right value — now write it in standard form, A × 10^n with 1 ≤ A < 10." };
    }
    return { status: "correct" };
  }
  if (near(p.value, spec.value, spec.tolerance)) return { status: "correct" };
  if (spec.value !== 0 && near(p.value, -spec.value, spec.tolerance)) {
    return { status: "incorrect", feedback: "Check the sign (+ or −)." };
  }
  const bothWhole = Number.isInteger(spec.value) && Number.isInteger(p.value);
  if (!bothWhole && spec.value !== 0 && Math.abs(p.value - spec.value) <= 0.01 * Math.abs(spec.value)) {
    return { status: "close", feedback: "Very close — check your rounding or the accuracy asked for." };
  }
  return { status: "incorrect" };
}

function checkFraction(spec: Extract<AnswerSpec, { type: "fraction" }>, input: string): CheckResult {
  const target = spec.n / spec.d;
  const p = parseNumberAnswer(input);
  if (!p) return { status: "invalid", feedback: "Type a fraction like 3/4 or a mixed number like 1 1/2." };
  if (!p.frac) {
    if (p.kind === "integer" && Number.isInteger(target) && near(p.value, target)) return { status: "correct" };
    if (near(p.value, target, 1e-9)) {
      if (spec.allowDecimal) return { status: "correct" };
      return { status: "close", feedback: "Right value — now write it as a fraction." };
    }
    return { status: "incorrect" };
  }
  const f = p.frac;
  const num = (f.whole * f.d + f.n) * (f.negative ? -1 : 1);
  const den = f.d;
  const equal = num * spec.d === spec.n * den;
  if (!equal) {
    if (spec.n !== 0 && num * spec.n === spec.d * den) {
      return { status: "incorrect", feedback: "That's the reciprocal — is it upside down?" };
    }
    if (num * spec.d === -spec.n * den && spec.n !== 0) {
      return { status: "incorrect", feedback: "Check the sign (+ or −)." };
    }
    return { status: "incorrect" };
  }
  if (spec.form === "mixed" && Math.abs(num) > den && p.kind !== "mixed") {
    return { status: "close", feedback: "Right value — now write it as a mixed number." };
  }
  if (spec.form === "improper" && p.kind === "mixed") {
    return { status: "close", feedback: "Right value — now write it as an improper (top-heavy) fraction." };
  }
  if (spec.simplest && gcd(f.n, f.d) !== 1) {
    return { status: "close", feedback: "Equivalent — but simplify it fully." };
  }
  if (spec.simplest && p.kind === "mixed" && f.n >= f.d) {
    return { status: "close", feedback: "Equivalent — tidy the mixed number (the fraction part should be less than 1)." };
  }
  return { status: "correct" };
}

function isPrimeInt(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
  return true;
}

function expandPowerProduct(input: string): number[] | null {
  const s = normalizeInput(input)
    .replace(/^\d+\s*=\s*/, "")
    .replace(/(\d)\s*[xX]\s*(?=\d)/g, "$1*");
  if (s.includes(",") || !/[*^]/.test(s)) return null;
  const out: number[] = [];
  for (const part of s.split("*")) {
    const m = part.trim().match(/^(\d+)(?:\s*\^\s*\(?\s*(\d+)\s*\)?)?$/);
    if (!m) return null;
    const e = m[2] === undefined ? 1 : Number(m[2]);
    if (e < 1 || e > 30) return null;
    for (let i = 0; i < e; i++) out.push(Number(m[1]));
  }
  return out;
}

function checkList(spec: Extract<AnswerSpec, { type: "list" }>, input: string): CheckResult {
  const product = !spec.ordered && spec.values.length > 1 && spec.values.every(isPrimeInt) ? expandPowerProduct(input) : null;
  let got = product ?? extractNumbers(input);
  if (!product && got?.length !== spec.values.length) {
    const alt = extractNumbers(input, true);
    if (alt?.length === spec.values.length) got = alt;
  }
  if (!got) return { status: "invalid", feedback: "Separate your answers with commas, e.g. 28, 35." };
  if (got.length !== spec.values.length) {
    const feedback = `I was expecting ${spec.values.length} value${spec.values.length === 1 ? "" : "s"}.`;
    const pool = [...spec.values];
    const partRight = got.length < spec.values.length && got.every((g) => {
      const i = pool.findIndex((v) => near(g, v, spec.tolerance));
      if (i >= 0) pool.splice(i, 1);
      return i >= 0;
    });
    return { status: partRight ? "close" : "incorrect", feedback };
  }
  if (spec.ordered) {
    const ok = spec.values.every((v, i) => near(got[i], v, spec.tolerance));
    if (ok) return { status: "correct" };
    const reversed = spec.values.every((v, i) => near(got[got.length - 1 - i], v, spec.tolerance));
    if (reversed && spec.values.length === 2) {
      return { status: "incorrect", feedback: "Right numbers, wrong order — (x, y): across first, then up/down." };
    }
    return { status: "incorrect" };
  }
  const remaining = [...got];
  for (const v of spec.values) {
    const i = remaining.findIndex((g) => near(g, v, spec.tolerance));
    if (i < 0) return { status: "incorrect" };
    remaining.splice(i, 1);
  }
  return { status: "correct" };
}

function checkRatio(spec: Extract<AnswerSpec, { type: "ratio" }>, input: string): CheckResult {
  const s = normalizeInput(input).replace(/\bto\b/gi, ":");
  const parts = s.split(":").map((x) => parseNumberAnswer(x.trim()));
  if (parts.length < 2 || parts.some((x) => !x)) {
    return { status: "invalid", feedback: "Write a ratio with colons, like 3 : 4." };
  }
  const got = parts.map((x) => x!.value);
  if (got.length !== spec.parts.length) return { status: "incorrect", feedback: `This ratio has ${spec.parts.length} parts.` };
  const exact = got.every((g, i) => near(g, spec.parts[i]));
  if (exact) return { status: "correct" };
  const k = got[0] / spec.parts[0];
  const proportional = Number.isFinite(k) && k !== 0 && got.every((g, i) => near(g, spec.parts[i] * k, 1e-9 * Math.max(1, Math.abs(g))));
  if (proportional) {
    if (spec.simplest) return { status: "close", feedback: "Equivalent — but simplify it fully." };
    return { status: "correct" };
  }
  const reversed = [...got].reverse();
  if (reversed.every((g, i) => near(g, spec.parts[i]))) {
    return { status: "incorrect", feedback: "Right numbers, wrong order — keep the order the question uses." };
  }
  return { status: "incorrect" };
}

function stripEquation(input: string): string {
  const s = normalizeInput(input);
  if (!s.includes("=")) return s;
  const sides = s.split("=");
  if (sides.length !== 2) return s;
  const [l, r] = sides.map((x) => x.trim());
  if (/^[a-z]$/i.test(l)) return r;
  if (/^[a-z]$/i.test(r)) return l;
  return s;
}

function stripTrailingUnit(input: string, vars: Set<string>): string | null {
  const m = normalizeInput(input).match(/^(.*?\S)\s*(mm|cm|km|m|ml|l|kg|g|units?|degrees|°)(\s*\^?\s*[23])?\.?$/i);
  if (!m) return null;
  for (const ch of m[2].toLowerCase()) if (vars.has(ch)) return null;
  return m[1];
}

function checkExpression(spec: Extract<AnswerSpec, { type: "expression" }>, input: string): CheckResult {
  const expected = parseExpr(stripEquation(spec.expr));
  if (!expected) return { status: "invalid", feedback: "This question's answer couldn't be checked automatically." };
  let got = parseExpr(stripEquation(input));
  if (!got || !exprEquivalent(expected, got)) {
    const unitless = stripTrailingUnit(input, exprVars(expected));
    const retry = unitless === null ? null : parseExpr(stripEquation(unitless));
    if (retry && exprEquivalent(expected, retry)) got = retry;
  }
  if (!got) {
    return { status: "invalid", feedback: "I couldn't read that expression. Use * or nothing for ×, ^ for powers, e.g. 3x^2 + 2(x − 1)." };
  }
  if (!exprEquivalent(expected, got)) return { status: "incorrect" };
  if (/pi/i.test(normalizeInput(spec.expr)) && !/pi/i.test(normalizeInput(input))) {
    return { status: "close", feedback: "Right value — but leave your answer in terms of π (keep π as a symbol)." };
  }
  const form = spec.form ?? "any";
  if (form === "factorised" && !isFactorised(got)) {
    return { status: "close", feedback: "That's equivalent — but it isn't factorised. Take out the common factor into a bracket." };
  }
  if (form === "factorised" && hasCommonFactorInBracket(got) && !hasCommonFactorInBracket(expected)) {
    return { status: "close", feedback: "Equivalent and factorised — but not fully. There's still a common factor inside the bracket." };
  }
  if (form === "expanded" && hasGroup(got)) {
    return { status: "close", feedback: "That's equivalent — now multiply out the brackets." };
  }
  if (form === "simplified") {
    if (hasLooseGroup(got) && !hasGroup(expected)) {
      return { status: "close", feedback: "That's equivalent — now remove the brackets and simplify." };
    }
    if (countTerms(got) > countTerms(expected)) {
      return { status: "close", feedback: "That's equivalent — but collect the like terms to simplify fully." };
    }
  }
  if ((form === "simplified" || form === "expanded") && hasUncombinedTerm(got) && !hasUncombinedTerm(expected)) {
    return { status: "close", feedback: "That's equivalent — now finish each term: multiply or cancel the numbers, and combine powers of the same letter." };
  }
  return { status: "correct" };
}

/** Normalise a Spanish/English free-text answer: case, spaces and punctuation don't matter. */
export function normSpanish(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/['‘’`´]/g, "")
    .replace(/[¿?¡!.,;:"“”()…–—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Strip accents/diacritics (á→a, ñ→n, ü→u) for the "check your accents" nudge. */
export function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC");
}

/** Normalise British/American English spelling equivalents (never alters Spanish). */
function normEnglishSpelling(s: string): string {
  return s
    .replace(/\btravell(ed|ing|er)\b/g, "travel$1")
    .replace(/\bcancell(ed|ing)\b/g, "cancel$1")
    .replace(/\b(organi|recogni|reali|apologi|critic|memor|priorit)s(e|ed|es|ing)\b/g, "$1z$2")
    .replace(/\bfavou?rite(s?)\b/g, "favorite$1")
    .replace(/\bneighbou?r(s?|hoods?)\b/g, "neighbor$1")
    .replace(/\bcent(re|er)(s?)\b/g, "center$2")
    .replace(/\btheat(re|er)(s?)\b/g, "theater$2")
    .replace(/\bprogram(me)?(s?)\b/g, "program$2")
    .replace(/\bpractis(e|ed|ing)\b/g, "practic$1");
}

/** Optional Spanish subject pronouns allowed before a standalone verb form. */
const OPT_SUBJECTS = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];

const NON_VERB_LEADS = new Set(["el", "la", "los", "las", "un", "una", "unos", "unas", "de", "del", "al", "por", "para", "con", "en", "sin", "a"]);
const CLITICS = new Set(["no", "nunca", "ya", "me", "te", "se", "nos", "os", "lo", "la", "los", "las", "le", "les"]);
const THIRD_SG_O_PRET = new Set(["hizo", "quiso", "vino", "pudo", "supo", "puso", "tuvo", "estuvo", "dijo", "trajo", "condujo", "produjo", "tradujo", "redujo", "dio", "vio"]);
const ONLY_THIRD_SG = new Set(["es", "está", "va", "da", "ha", "hay", "fue", ...THIRD_SG_O_PRET]);

const BARE_SUBJECT_MAP: Record<string, string> = {
  yo: "yo",
  tu: "tú",
  el: "él",
  ella: "ella",
  usted: "usted",
  nosotros: "nosotros",
  nosotras: "nosotras",
  vosotros: "vosotros",
  vosotras: "vosotras",
  ellos: "ellos",
  ellas: "ellas",
  ustedes: "ustedes",
};

function stripLeadingSubject(s: string): { pronoun: string; rest: string } | null {
  for (const p of OPT_SUBJECTS) {
    if (s.startsWith(p + " ")) return { pronoun: p, rest: s.slice(p.length + 1).trim() };
  }
  return null;
}

function stripLeadingSubjectBare(bare: string): { pronoun: string; rawPronoun: string; rest: string } | null {
  for (const [raw, canonical] of Object.entries(BARE_SUBJECT_MAP)) {
    if (bare.startsWith(raw + " ")) {
      return { pronoun: canonical, rawPronoun: raw, rest: bare.slice(raw.length + 1).trim() };
    }
  }
  return null;
}

/** Check whether leading subject pronoun `pronoun` agrees in person/number with Spanish verb phrase `rest`. */
function isPersonCompatible(pronoun: string, rest: string): boolean {
  const tokens = rest.split(/\s+/).filter(Boolean);
  if (!tokens.length || NON_VERB_LEADS.has(tokens[0])) return false;

  // Reflexive clitic agreement if present at the front (e.g. "me relajo", "nos levantamos", "se casa")
  const firstNonNeg = tokens[0] === "no" || tokens[0] === "nunca" || tokens[0] === "ya" ? tokens[1] : tokens[0];
  if (firstNonNeg === "me" && pronoun !== "yo") return false;
  if (firstNonNeg === "te" && pronoun !== "tú") return false;
  if (firstNonNeg === "nos" && pronoun !== "nosotros" && pronoun !== "nosotras") return false;
  if (firstNonNeg === "os" && pronoun !== "vosotros" && pronoun !== "vosotras") return false;
  if (firstNonNeg === "se" && (pronoun === "yo" || pronoun === "tú" || pronoun === "nosotros" || pronoun === "nosotras" || pronoun === "vosotros" || pronoun === "vosotras")) {
    // Exclude 1st-sg "yo sé" (accented sé, not clitic se!) — here `firstNonNeg === "se"` is unaccented clitic `se`.
    return false;
  }

  // Locate the finite verb token (first token after optional negations/clitics)
  let v = tokens[0];
  for (const tok of tokens) {
    if (!CLITICS.has(tok)) {
      v = tok;
      break;
    }
  }
  if (!v) return false;

  if (pronoun === "nosotros" || pronoun === "nosotras") {
    return v.endsWith("mos");
  }
  if (pronoun === "vosotros" || pronoun === "vosotras") {
    return v !== "seis" && v.endsWith("is");
  }
  if (pronoun === "ellos" || pronoun === "ellas" || pronoun === "ustedes") {
    return v.endsWith("n") && v !== "en" && v !== "con" && v !== "sin";
  }
  if (pronoun === "tú") {
    if (v === "es" || v.endsWith("mos") || (v.endsWith("is") && v !== "ois")) return false;
    return v.endsWith("s") || v.endsWith("ste");
  }
  if (pronoun === "yo") {
    if (ONLY_THIRD_SG.has(v)) return false;
    if (v.endsWith("s") || v.endsWith("ó") || v.endsWith("á") || v.endsWith("mos") || v.endsWith("is") || v.endsWith("n") || v.endsWith("ste")) {
      return false;
    }
    return /[oaéíey]$/.test(v);
  }
  // él / ella / usted
  if (v === "yo" || v.endsWith("oy") || v.endsWith("é") || v.endsWith("í") || v.endsWith("mos") || v.endsWith("is") || v.endsWith("n") || v.endsWith("ste")) {
    return false;
  }
  if (v.endsWith("s") && v !== "es") return false;
  if (v.endsWith("o") && !THIRD_SG_O_PRET.has(v)) return false;
  return /[aeoóá]$/.test(v) || v === "es";
}

function confusableFeedback(acceptedNorms: string[], gotNorm: string): string | undefined {
  for (const [a, b] of ANTONYM_PAIRS) {
    if ((acceptedNorms.includes(a) && gotNorm === b) || (acceptedNorms.includes(b) && gotNorm === a)) {
      return `Watch out — *${gotNorm}* is the opposite meaning!`;
    }
  }
  for (const grp of CONFUSABLE_GROUPS) {
    if (grp.words.includes(gotNorm) && acceptedNorms.some((acc) => acc !== gotNorm && grp.words.includes(acc))) {
      return grp.hint;
    }
  }
  return undefined;
}

function checkText(spec: Extract<AnswerSpec, { type: "text" }>, input: string): CheckResult {
  const n = normSpanish(input);
  const accNorms = spec.accept.map(normSpanish);

  // 1. Exact normalised Spanish/English match
  if (accNorms.includes(n)) return { status: "correct" };

  // 2. Harmless UK/US English spelling match (only when accents aren't involved)
  const nEn = normEnglishSpelling(n);
  if (!/[áéíóúñü]/.test(n) && accNorms.some((a) => !/[áéíóúñü]/.test(a) && normEnglishSpelling(a) === nEn)) {
    return { status: "correct" };
  }

  // 3. Optional Spanish subject pronoun ("yo hablo", "tú salgas", "nosotros comamos") when person-compatible with the verb
  const sub = stripLeadingSubject(n);
  if (sub) {
    if (accNorms.some((a) => {
      const aSub = stripLeadingSubject(a);
      return aSub !== null && aSub.rest === sub.rest && aSub.pronoun === sub.pronoun;
    })) {
      return { status: "correct" };
    }
    if (accNorms.includes(sub.rest) && isPersonCompatible(sub.pronoun, sub.rest)) {
      return { status: "correct" };
    }
  }

  // 4. Accent-only difference → "close" nudge (NEVER marked correct, because hablo ≠ habló in Paper 2 Q3c!)
  const bare = stripAccents(n);
  const subBare = stripLeadingSubjectBare(bare);
  const accentMatch =
    accNorms.some((a) => stripAccents(a) === bare) ||
    (subBare !== null &&
      accNorms.some((a) => {
        if (stripAccents(a) !== subBare.rest) return false;
        if (subBare.rawPronoun === "el" && !n.startsWith("él ") && !/[áéíóúñü]/.test(a)) return false;
        return isPersonCompatible(subBare.pronoun, a);
      }));
  if (accentMatch) {
    return {
      status: "close",
      feedback: "So close — the letters are right, but check your accents (á é í ó ú ñ ü). In Spanish, an accent can change the tense or meaning (e.g. *hablo* vs *habló*).",
    };
  }

  // 5. Targeted confusable / antonym guard feedback
  const hint = confusableFeedback(accNorms, n);
  if (hint) return { status: "incorrect", feedback: hint };

  return { status: "incorrect" };
}

/** Check an answer, then (if wrong) look for a matching trap to give targeted feedback. */
export function checkWithTraps(spec: AnswerSpec, raw: string, traps?: { spec: AnswerSpec; feedback: string }[]): CheckResult {
  const r = checkAnswer(spec, raw);
  if (r.status !== "incorrect" || !traps?.length) return r;
  for (const t of traps) {
    try {
      if (checkAnswer(t.spec, raw).status === "correct") return { status: "incorrect", feedback: t.feedback };
    } catch {
      /* ignore bad trap */
    }
  }
  return r;
}

/** A canonical typed string that should satisfy the spec (used by validators). */
export function specSample(spec: AnswerSpec): string {
  switch (spec.type) {
    case "number": {
      if (spec.standardForm) {
        const e = Math.floor(Math.log10(Math.abs(spec.value)));
        return `${parseFloat((spec.value / Math.pow(10, e)).toPrecision(12))} x 10^${e}`;
      }
      return String(spec.value);
    }
    case "fraction": {
      const g = gcd(spec.n, spec.d) || 1;
      const n = spec.n / g, d = spec.d / g;
      const neg = n * d < 0 ? "-" : "";
      const an = Math.abs(n), ad = Math.abs(d);
      if (spec.form === "mixed" && an > ad) {
        const w = Math.trunc(an / ad), r = an % ad;
        return `${neg}${w}${r ? ` ${r}/${ad}` : ""}`;
      }
      return `${neg}${an}/${ad}`;
    }
    case "list": return spec.values.join(", ");
    case "ratio": return spec.parts.join(":");
    case "expression": return spec.expr;
    case "text": return spec.accept[0] ?? "";
  }
}

/** Self-check used by tests and the content validator: does the canonical answer pass its own spec? */
export function specSelfCheck(spec: AnswerSpec): CheckResult {
  return checkAnswer(spec, specSample(spec));
}
