import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Year 9 Grammar & Mark-Savers Vault",
  description:
    "Every Tanglin Year 9 Spanish Year 9 Spanish grammar frame, four-tense pattern and mark-saver in one printable vault.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string }> = {
  "Term 1: Holidays": { text: "text-s-number", border: "border-s-number", dot: "bg-s-number" },
  "Term 2: Food & Health": { text: "text-s-ratio", border: "border-s-ratio", dot: "bg-s-ratio" },
  "Term 3: Style & Culture": { text: "text-s-geometry", border: "border-s-geometry", dot: "bg-s-geometry" },
  "Grammar Mastery": { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra" },
};

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];

const PAPER_BLUEPRINT = [
  {
    paper: "Reading & Listening Comprehension",
    wins: "Spot tense clues (*normalmente* = present, *el año pasado / ayer* = preterite, *voy a / el año que viene* = future) and negation/contrast words (*pero, sin embargo, ya no, nunca*).",
    trap: "Latching onto the first familiar noun you recognise without noticing *no* or a speaker changing their mind.",
  },
  {
    paper: "Grammar & Written Accuracy",
    wins: "Weave all 4 Year 9 tenses (Present, Preterite, Immediate Future, Simple Future), check written accents (*hablé, habló, comeré, iré*), and match adjective gender/number (*camisetas rojas*).",
    trap: "Writing *me gusta jugando*, *soy 14 años*, *me duele los ojos* (instead of *me duelen*), or dropping preterite/future accents.",
  },
  {
    paper: "Speaking, Role-Plays & Reviews",
    wins: "Use polite booking/ordering frames (*Quisiera…*, *Póngame…*, *¿Me puede ayudar?*), give justified opinions (*porque, dado que*), and structure reviews with both strengths and drawbacks.",
    trap: "Giving one-word answers or sticking only to the present tense when asked about a past holiday or future plans.",
  },
];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => t.strand === strand && formulasOf(t).length > 0),
  })).filter((g) => g.topics.length > 0);
  const formulaCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + formulasOf(t).length, 0), 0);
  const topicCount = groups.reduce((n, g) => n + g.topics.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="no-print mb-2 flex flex-wrap gap-2">
            <span className="chip border-0 bg-brand-soft text-brand">🏆 Tanglin Year 9 Spanish Year 9 Vault</span>
            <Link href="/verbs" className="chip hover:border-brand hover:text-brand">
              🔤 Open 8-Tense Verb Conjugator →
            </Link>
            <Link href="/cram" className="chip hover:border-brand hover:text-brand">
              🚨 Custom Exam Cram Sheet →
            </Link>
          </div>
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            Year 9 Grammar &amp; Mark-Saver Vault
          </h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Every high-scoring Tanglin Year 9 Spanish structure, four-tense frame, connective and exam mark-saver in one place. Print for iPad or desk revision!
          </p>
          {formulaCount ? (
            <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
              {formulaCount} Year 9 grammar patterns across {topicCount} unit{topicCount === 1 ? "" : "s"}
              <span className="hidden print:inline"> · Year 9 Spanish</span>
            </p>
          ) : null}
        </div>
        {formulaCount ? <PrintButton label="Print Vault" /> : null}
      </header>

      {/* Tanglin Year 9 Spanish Paper-by-Paper Marks-Saver Blueprint */}
      <section className="grid gap-3 md:grid-cols-3 print:grid-cols-3" aria-label="Tanglin Year 9 Spanish Paper Blueprint">
        {PAPER_BLUEPRINT.map((p) => (
          <div key={p.paper} className="card space-y-2 border-t-4 border-brand p-4">
            <h2 className="text-sm font-black text-brand">{p.paper}</h2>
            <p className="text-xs leading-relaxed">
              <strong className="text-good">✅ Earns Full Marks: </strong>
              <RichInline text={p.wins} />
            </p>
            <p className="text-xs leading-relaxed">
              <strong className="text-bad">❌ Loses Marks: </strong>
              <RichInline text={p.trap} />
            </p>
          </div>
        ))}
      </section>

      {groups.length > 1 ? (
        <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to a strand">
          {groups.map((g) => (
            <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
              <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
              {g.strand}
            </a>
          ))}
        </nav>
      ) : null}

      {!groups.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            📋
          </div>
          <h2 className="mt-2 text-xl font-extrabold">The grammar vault is loading</h2>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      ) : (
        groups.map((g) => {
          const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand" };
          return (
            <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20" aria-labelledby={`strand-${slug(g.strand)}-h`}>
              <h2 id={`strand-${slug(g.strand)}-h`} className={`mb-3 flex items-center gap-2 text-lg font-black break-after-avoid print:mb-2 print:text-base ${st.text}`}>
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                {g.strand}
              </h2>
              <div className="gap-4 md:columns-2 print:columns-2 print:gap-5">
                {g.topics.map((t) => (
                  <article
                    key={t.id}
                    className={`card mb-4 break-inside-avoid border-l-4 p-4 print:mb-3 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                    aria-labelledby={`f-${t.id}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 id={`f-${t.id}`} className="font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <Link href={`/topic/${t.id}?tab=learn`} className="no-print -my-2 inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 text-sm font-bold text-brand hover:bg-brand-soft" aria-label={`${t.title} lessons`}>
                        Lessons →
                      </Link>
                    </div>
                    <dl className="mt-2 divide-y divide-line">
                      {formulasOf(t).map((f, i) => (
                        <div key={`${t.id}-${i}`} className="py-2 first:pt-0 last:pb-0 print:py-1.5">
                          <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                            <RichInline text={f.name} />
                          </dt>
                          <dd className="mt-0.5">
                            <Rich text={f.formula} className="text-[1.05rem] font-semibold text-ink print:text-[10.5pt]" />
                            {f.note ? <Rich text={f.note} className="mt-0.5 text-sm text-ink-2 print:text-[8.5pt]" /> : null}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
