// ---------------------------------------------------------------------------
// Hardened Written Self-Grader for Tanglin Year 9 Spanish.
//
// Enforces all Layer 2 audit guarantees:
// - 0 marks on empty / "idk" / "I don't know" / "not sure" / "no sé" / filler
// - 0 marks on verbatim stem-copying AND contiguous >= 4-word spans copied
//   from q.question (prevents prompt copy-paste gaming)
// - Whole-word boundaries for short alphanumeric keywords (<= 3 chars) so
//   "now" never matches "I don't know" and "un" never matches "mundo"
// - Direct match for punctuation keywords ("¿", "¡")
// - Strips inline markdown (*, **, _, `) before matching
// - 100% of modelAnswers hit 100% of markScheme points
// ---------------------------------------------------------------------------

import type { WrittenQ } from "./types.ts";

function fold(x: string): string {
  return (x ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[*_`"'‘’“”]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}

const NON_ANSWER_RE =
  /^(?:|no\s+(?:lo\s+)?se|i\s+don\s*t\s+know|dont\s+know|do\s+not\s+know|not\s+sure|unsure|no\s+idea|idk|nada|ninguno|ninguna|pass|skip|n\s*a|makes\s+the\s+reader\s+want\s+to\s+read\s+on|it\s+is\s+good|es\s+bueno)$/;

const GENERIC_FILLER_PHRASES = [
  "en mi opinion este tema es muy interesante",
  "este tema es muy interesante",
  "es un tema muy importante",
  "tiene ventajas y desventajas",
  "makes the reader want to read on",
  "paints a picture in the reader s head",
  "spanish is very important in everyday life",
];

/** Scrub contiguous >= 4-word spans copied verbatim from a reference text. */
function scrubCopiedSpans(answerFolded: string, sourceRaw: string): string {
  const srcTokens = fold(sourceRaw)
    .replace(/[^a-z0-9\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (srcTokens.length < 4) return answerFolded;

  let out = ` ${answerFolded.replace(/[^a-z0-9¿¡\s]/g, " ").replace(/\s+/g, " ").trim()} `;
  // Remove longest matching windows (up to 12 words down to 4 words) from the question stem.
  for (let win = Math.min(12, srcTokens.length); win >= 4; win--) {
    for (let i = 0; i + win <= srcTokens.length; i++) {
      const phrase = srcTokens.slice(i, i + win).join(" ");
      if (phrase.replace(/\s+/g, "").length < 12) continue;
      const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "[^a-z0-9]+");
      out = out.replace(new RegExp(`(^|[^a-z0-9])${esc}(?=[^a-z0-9]|$)`, "g"), " ");
    }
  }
  return out.replace(/\s+/g, " ").trim();
}

/**
 * Suggest which mark-scheme points a written answer hits.
 */
export function suggestMarks(q: WrittenQ, text: string): boolean[] {
  const empty = () => q.markScheme.map(() => false);
  const rawFold = fold(text ?? "").trim();
  if (!rawFold) return empty();

  const alphaOnly = rawFold.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  if (NON_ANSWER_RE.test(alphaOnly)) return empty();

  const qFold = fold(q.question).trim();
  if (qFold && qFold.includes(rawFold)) return empty();
  const qAlpha = qFold.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  if (qAlpha && alphaOnly && qAlpha.includes(alphaOnly)) return empty();

  let cleaned = rawFold;
  for (const line of q.question.split("\n")) {
    const lf = fold(line).trim();
    if (lf.replace(/[^a-z0-9]/g, "").length >= 12) {
      cleaned = cleaned.split(lf).join(" ");
    }
  }
  let scrubbedAlpha = scrubCopiedSpans(cleaned, q.question);
  for (const gp of GENERIC_FILLER_PHRASES) {
    scrubbedAlpha = scrubbedAlpha.split(gp).join(" ").replace(/\s+/g, " ").trim();
  }
  if (!scrubbedAlpha.replace(/[^a-z0-9]/g, "").trim()) return empty();

  // Keep punctuation in `punctView` for ¿ / ¡ checks, but only if user added new text beyond the stem!
  const punctView = ` ${cleaned} `;
  const wordView = ` ${scrubbedAlpha} `;

  const hit = (k: string): boolean => {
    const f = fold(k).trim();
    if (!f) return false;
    // Pure punctuation keyword (e.g. "¿" or "¡")
    if (!/[a-z0-9]/.test(f)) {
      return punctView.includes(f);
    }
    const kf = f.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    if (!kf) return false;
    if (kf.length > 3) {
      return wordView.includes(kf);
    }
    const esc = kf.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${esc}([^a-z0-9]|$)`).test(wordView);
  };

  return q.markScheme.map((p) => p.keywords.some((k) => k && hit(k)));
}

/** Alias used by audit scripts: returns { marks, total, hits }. */
export function writtenCheck(q: WrittenQ, text: string): { marks: number; total: number; hits: boolean[] } {
  const hits = suggestMarks(q, text);
  return { marks: hits.filter(Boolean).length, total: q.marks, hits };
}
