"use client";
// Dedicated /verbs interactive 8-Tense Year 9 Spanish Verb Conjugator & Reference.
import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  PERSONS,
  PERSON_LABEL,
  TENSES,
  TENSE_LABEL,
  VERBS,
  conjugate,
  gerund,
  participle,
  type Tense,
  type VerbInfo,
} from "@/lib/spanish/verbs";
import { speakSpanish, speechAvailable } from "@/lib/speech";

const FILTERS: { id: string; label: string; match: (v: VerbInfo) => boolean }[] = [
  { id: "all", label: "All Year 9 Verbs", match: () => true },
  { id: "dishes", label: "✨ Extension: DISHES", match: (v) => v.tags.includes("dishes") },
  { id: "future", label: "🚀 Irregular Future/Cond", match: (v) => v.tags.includes("irregular-future") },
  { id: "pret", label: "⏪ Irregular Preterite", match: (v) => v.tags.includes("irregular") || v.tags.includes("irregular-preterite") },
  { id: "boot", label: "🥾 Boot Stem-Changers", match: (v) => v.tags.some((t) => t.startsWith("stem-")) },
  { id: "yogo", label: "⚡ Yo-go & -zco", match: (v) => v.tags.includes("yo-go") || v.tags.includes("zco") },
  { id: "spell", label: "✏️ -car / -gar / -zar / y", match: (v) => v.tags.some((t) => t.startsWith("spelling-")) },
  { id: "part", label: "📌 Irregular Participles", match: (v) => v.tags.includes("irregular-participle") },
  { id: "refl", label: "🪞 Reflexive (-se)", match: (v) => v.reflexive },
];

const noop = () => () => {};
function useSpeech(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

export function VerbsReference() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedInf, setSelectedInf] = useState("tener");
  const speech = useSpeech();

  const list = useMemo(() => {
    const f = FILTERS.find((x) => x.id === filter) ?? FILTERS[0];
    const q = query.trim().toLowerCase();
    return VERBS.filter((v) => {
      if (!f.match(v)) return false;
      if (!q) return true;
      return v.inf.toLowerCase().includes(q) || v.en.toLowerCase().includes(q);
    });
  }, [filter, query]);

  const activeVerb = useMemo(
    () => list.find((v) => v.inf === selectedInf) ?? VERBS.find((v) => v.inf === selectedInf) ?? list[0] ?? VERBS[0],
    [list, selectedInf]
  );

  return (
    <div className="space-y-6">
      <header className="card space-y-3 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">🔤 {VERBS.length} Year 9 Spanish Verbs</span>
              <span className="chip border-0 bg-accent-soft text-warn">⏳ 4 Core Y9 Tenses + 4 Extension</span>
            </div>
            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Year 9 Spanish Verb Conjugator &amp; Reference
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-ink-2">
              Focus on Year 9&apos;s four core tenses — Present, Preterite, Immediate Future (ir a + inf.), and Simple Future — with Imperfect, Perfect, Conditional &amp; Subjunctive included as extension reference. Tap any form to hear it!
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/formulas" className="btn btn-secondary btn-sm">
              📋 Grammar Vault
            </Link>
            <Link href="/sprint" className="btn btn-primary btn-sm">
              ⚡ Verb Sprint
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 border-t border-line pt-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                const first = VERBS.find(f.match);
                if (first && !f.match(activeVerb)) setSelectedInf(first.inf);
              }}
              className={`chip text-xs ${filter === f.id ? "border-brand bg-brand-soft text-brand" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[17rem_1fr]">
        {/* Left Verb Selector */}
        <aside className="card flex max-h-[34rem] flex-col p-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find verb (e.g. hacer, to know)…"
            className="input text-sm"
            aria-label="Search verbs"
          />
          <div className="mt-2 text-xs font-bold text-ink-2">
            {list.length} verb{list.length === 1 ? "" : "s"}
          </div>
          <ul className="mt-1.5 flex-1 divide-y divide-line overflow-y-auto pr-1">
            {list.map((v) => {
              const on = v.inf === activeVerb.inf;
              return (
                <li key={v.inf}>
                  <button
                    type="button"
                    onClick={() => setSelectedInf(v.inf)}
                    className={`flex w-full items-baseline justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-sm ${
                      on ? "bg-brand text-brand-ink font-extrabold" : "hover:bg-surface-2"
                    }`}
                  >
                    <span lang="es" className="font-bold">
                      {v.inf}
                    </span>
                    <span className={`truncate text-xs ${on ? "text-brand-ink/80" : "text-ink-2"}`}>{v.en}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right 8-Tense Conjugation Matrix */}
        {activeVerb ? (
          <section className="space-y-4">
            <div className="card flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-black" lang="es">
                    {activeVerb.inf}
                  </h2>
                  <span className="text-base font-bold text-ink-2">— {activeVerb.en}</span>
                  {speech ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm px-2"
                        onClick={() => speakSpanish(activeVerb.inf)}
                        title="Hear infinitive"
                      >
                        🔊
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm px-2"
                        onClick={() => speakSpanish(activeVerb.inf, { slow: true })}
                        title="Hear slowly"
                      >
                        🐢
                      </button>
                    </>
                  ) : null}
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="chip">Group: -{activeVerb.group}</span>
                  <span className="chip border-0 bg-info-soft text-info">
                    Participle: <strong lang="es">{participle(activeVerb.inf)}</strong>
                  </span>
                  <span className="chip border-0 bg-good-soft text-good">
                    Gerund: <strong lang="es">{gerund(activeVerb.inf)}</strong>
                  </span>
                  {activeVerb.tags
                    .filter((t) => !t.startsWith("topic:"))
                    .map((t) => (
                      <span key={t} className="chip border-0 bg-accent-soft text-warn">
                        {t}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {TENSES.map((tense: Tense) => (
                <article
                  key={tense}
                  className={`card p-4 ${tense === "subjunctive" ? "border-brand/40 bg-brand-soft/20" : ""}`}
                >
                  <h3 className="text-sm font-black uppercase tracking-wide text-brand">{TENSE_LABEL[tense]}</h3>
                  <dl className="mt-2 divide-y divide-line text-sm">
                    {PERSONS.map((p) => {
                      const form = conjugate(activeVerb.inf, tense, p);
                      return (
                        <div key={p} className="flex items-center justify-between gap-2 py-1.5">
                          <dt className="text-xs font-semibold text-ink-2">{PERSON_LABEL[p].split(" (")[0]}</dt>
                          <dd className="flex items-center gap-1.5 font-extrabold" lang="es">
                            <span>{form}</span>
                            {speech ? (
                              <button
                                type="button"
                                onClick={() => speakSpanish(form)}
                                className="rounded px-1 text-xs hover:bg-surface-2"
                                aria-label={`Hear ${form}`}
                              >
                                🔊
                              </button>
                            ) : null}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
