"use client";
// Dedicated /vocab hub: search, browse, listen (🔊 normal + 🐢 slow), flip cards,
// and test across the entire ~850-item Tanglin Year 9 Spanish vocabulary bank.
import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { VocabItem } from "@/lib/types";
import { VOCAB } from "@/lib/generated/vocab";
import { TOPIC_META } from "@/lib/topics/meta";
import { speakSpanish, speechAvailable } from "@/lib/speech";
import { normSpanish, stripAccents } from "@/lib/answerCheck";
import { useStore } from "@/lib/store";
import { AnswerInput } from "./AnswerInput";

type Mode = "browse" | "cards" | "test";
type TestKind = "en-es" | "listen";

interface EnrichedVocab extends VocabItem {
  topicId: string;
  topicTitle: string;
  topicIcon: string;
  group: string;
}

const noop = () => () => {};
function useSpeech(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

function SpeakBtns({ text }: { text: string }) {
  const ok = useSpeech();
  if (!ok) return null;
  return (
    <span className="inline-flex shrink-0 items-center gap-0.5">
      <button
        type="button"
        className="btn btn-ghost btn-sm min-h-9 min-w-9 px-1.5"
        onClick={(e) => {
          e.stopPropagation();
          speakSpanish(text);
        }}
        aria-label={`Hear “${text}”`}
        title="Hear normal speed (es-ES)"
      >
        🔊
      </button>
      <button
        type="button"
        className="btn btn-ghost btn-sm min-h-9 min-w-9 px-1.5"
        onClick={(e) => {
          e.stopPropagation();
          speakSpanish(text, { slow: true });
        }}
        aria-label={`Hear “${text}” slowly`}
        title="Hear slow speed (🐢)"
      >
        🐢
      </button>
    </span>
  );
}

function variants(es: string): string[] {
  const base = es.split(/\s*[/(]/)[0].trim();
  const out = new Set([es, base]);
  for (const part of es.split("/")) out.add(part.trim());
  return [...out].filter(Boolean);
}

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function GlobalVocabHub() {
  const [mode, setMode] = useState<Mode>("browse");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const speech = useSpeech();

  const allItems = useMemo<EnrichedVocab[]>(() => {
    const out: EnrichedVocab[] = [];
    for (const m of TOPIC_META) {
      const groups = VOCAB[m.id] ?? [];
      for (const g of groups) {
        for (const it of g.items) {
          out.push({
            ...it,
            topicId: m.id,
            topicTitle: m.title.split(" (")[0],
            topicIcon: m.icon,
            group: g.title,
          });
        }
      }
    }
    return out;
  }, []);

  const filtered = useMemo(() => {
    const q = stripAccents(query.trim().toLowerCase());
    return allItems.filter((it) => {
      if (topicFilter !== "all" && it.topicId !== topicFilter) return false;
      if (!q) return true;
      const hay = stripAccents(`${it.es} ${it.en} ${it.note ?? ""} ${it.group}`.toLowerCase());
      return hay.includes(q);
    });
  }, [allItems, topicFilter, query]);

  return (
    <div className="space-y-5">
      <header className="card space-y-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">
                🗣️ {allItems.length} Tanglin Year 9 Spanish Words &amp; Idioms
              </span>
              <span className="chip border-0 bg-good-soft text-good">
                🔊 Normal + 🐢 Slow Spanish Audio
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Year 9 Spanish Vocabulary Bank
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-ink-2">
              {speech
                ? "Tap 🔊 for native Spanish speed or 🐢 for slow listening practice. "
                : "Open in Safari or Chrome for built-in Spanish Web Speech audio. "}
              Every noun shows its article (<em lang="es">el / la</em>) — essential for Paper 2 Q3c agreement &amp; Q7 accuracy!
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Vocab study mode">
            {(
              [
                ["browse", "📋 Browse & Audio"],
                ["cards", "🃏 Flip Cards"],
                ["test", "✍️ Self-Test"],
              ] as [Mode, string][]
            ).map(([m, label]) => (
              <button
                key={m}
                type="button"
                className={`btn btn-sm ${mode === m ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Area Filter + Live Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by Tanglin Year 9 Spanish Area">
            <button
              type="button"
              onClick={() => setTopicFilter("all")}
              className={`chip text-xs ${topicFilter === "all" ? "border-brand bg-brand-soft text-brand" : ""}`}
            >
              All ({allItems.length})
            </button>
            {TOPIC_META.map((m) => {
              const count = (VOCAB[m.id] ?? []).reduce((n, g) => n + g.items.length, 0);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTopicFilter(m.id)}
                  className={`chip text-xs ${topicFilter === m.id ? "border-brand bg-brand-soft text-brand" : ""}`}
                >
                  <span aria-hidden>{m.icon}</span> {m.title.split(" — ")[0]} ({count})
                </button>
              );
            })}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Spanish or English (e.g. cambio, ojalá, work)…"
            className="input max-w-xs text-sm"
            aria-label="Search Year 9 Spanish vocabulary"
          />
        </div>
      </header>

      {!filtered.length ? (
        <div className="card p-6 text-center text-ink-2">
          No vocabulary items match &ldquo;{query}&rdquo;. Try clearing the search box or switching topic filters.
        </div>
      ) : mode === "browse" ? (
        <BrowseGrid items={filtered} />
      ) : mode === "cards" ? (
        <GlobalFlipCards key={`${topicFilter}:${query}`} items={filtered} />
      ) : (
        <GlobalVocabTest key={`${topicFilter}:${query}`} items={filtered} filterKey={topicFilter} />
      )}

      <div className="card flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
        <span className="text-ink-2">
          Want to practise 60-second rapid recall or check verb conjugations across 8 tenses?
        </span>
        <div className="flex flex-wrap gap-2">
          <Link href="/sprint" className="btn btn-secondary btn-sm">
            ⚡ 60s Vocab Sprint
          </Link>
          <Link href="/verbs" className="btn btn-secondary btn-sm">
            🔤 8-Tense Verb Sheet
          </Link>
          <Link href="/formulas" className="btn btn-ghost btn-sm">
            📋 Grammar Vault
          </Link>
        </div>
      </div>
    </div>
  );
}

function BrowseGrid({ items }: { items: EnrichedVocab[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, { title: string; topicId: string; icon: string; list: EnrichedVocab[] }>();
    for (const it of items) {
      const k = `${it.topicId}::${it.group}`;
      let entry = map.get(k);
      if (!entry) {
        entry = { title: `${it.topicTitle} · ${it.group}`, topicId: it.topicId, icon: it.topicIcon, list: [] };
        map.set(k, entry);
      }
      entry.list.push(it);
    }
    return [...map.values()];
  }, [items]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {grouped.map((g) => (
        <section key={`${g.topicId}:${g.title}`} className="card p-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="font-extrabold text-brand">
              <span aria-hidden>{g.icon} </span>
              {g.title}
            </h2>
            <Link href={`/topic/${g.topicId}?tab=vocab`} className="text-xs font-bold text-ink-2 hover:text-brand">
              Topic →
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {g.list.map((it) => (
              <li key={`${g.topicId}:${it.es}`} className="flex items-center gap-2 py-1.5">
                <SpeakBtns text={it.es} />
                <div className="min-w-0 flex-1">
                  <div className="font-bold" lang="es">
                    {it.es}
                  </div>
                  <div className="text-sm text-ink-2">
                    {it.en}
                    {it.note ? <span className="font-semibold text-warn"> · {it.note}</span> : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function GlobalFlipCards({ items }: { items: EnrichedVocab[] }) {
  const [seed, setSeed] = useState(1);
  const deck = useMemo(() => shuffle(items, seed), [items, seed]);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [enFirst, setEnFirst] = useState(true);
  const card = deck[i % deck.length];
  if (!card) return null;
  const front = enFirst ? card.en : card.es;
  const back = enFirst ? card.es : card.en;

  const go = (d: number) => {
    setFlipped(false);
    setI((x) => (x + d + deck.length) % deck.length);
  };

  return (
    <div className="mx-auto max-w-lg space-y-3">
      <div className="flex items-center justify-between text-sm text-ink-2">
        <span>
          Card {(i % deck.length) + 1} of {deck.length} · {card.topicIcon} {card.group}
        </span>
        <label className="flex items-center gap-2 font-bold">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={enFirst}
            onChange={(e) => {
              setEnFirst(e.target.checked);
              setFlipped(false);
            }}
          />
          English first
        </label>
      </div>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="card flex min-h-52 w-full flex-col items-center justify-center gap-2 p-6 text-center hover:bg-surface-2"
      >
        <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
          {flipped ? (enFirst ? "Español" : "English") : enFirst ? "English" : "Español"}
        </div>
        <div className="text-2xl font-black" lang={(flipped ? !enFirst : enFirst) ? "en" : "es"}>
          {flipped ? back : front}
        </div>
        {flipped && card.note ? <div className="text-sm font-semibold text-warn">{card.note}</div> : null}
        <div className="text-xs text-ink-2">{flipped ? "" : "Tap to flip"}</div>
      </button>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button type="button" className="btn btn-secondary" onClick={() => go(-1)}>
          ← Back
        </button>
        <SpeakBtns text={card.es} />
        <button type="button" className="btn btn-primary" onClick={() => go(1)}>
          Next →
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            setSeed((s) => s + 1);
            setI(0);
            setFlipped(false);
          }}
        >
          🔀 Shuffle
        </button>
      </div>
    </div>
  );
}

function GlobalVocabTest({ items, filterKey }: { items: EnrichedVocab[]; filterKey: string }) {
  const speech = useSpeech();
  const [kind, setKind] = useState<TestKind>("en-es");
  const [seed, setSeed] = useState(11);
  const deck = useMemo(() => shuffle(items, seed).slice(0, 12), [items, seed]);
  const [i, setI] = useState(0);
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | "right" | "accent" | "wrong">(null);
  const [score, setScore] = useState(0);
  const { setBest } = useStore();
  const done = i >= deck.length;
  const card = deck[i];

  function check() {
    if (!card || !value.trim()) return;
    const n = normSpanish(value);
    const ok = variants(card.es).some((v) => normSpanish(v) === n);
    const nearly = !ok && variants(card.es).some((v) => stripAccents(normSpanish(v)) === stripAccents(n));
    setResult(ok ? "right" : nearly ? "accent" : "wrong");
    if (ok) setScore((s) => s + 1);
  }

  function next() {
    const ni = i + 1;
    setI(ni);
    setValue("");
    setResult(null);
    if (ni >= deck.length) setBest(`vocab:${filterKey}`, score);
    else if (kind === "listen" && deck[ni]) speakSpanish(deck[ni].es);
  }

  function restart(k: TestKind = kind) {
    setKind(k);
    setSeed((s) => s + 1);
    setI(0);
    setScore(0);
    setValue("");
    setResult(null);
  }

  return (
    <div className="mx-auto max-w-lg space-y-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Test type">
        <button
          type="button"
          className={`btn btn-sm ${kind === "en-es" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => restart("en-es")}
          aria-pressed={kind === "en-es"}
        >
          🇬🇧 → 🇪🇸 Translate to Spanish
        </button>
        {speech ? (
          <button
            type="button"
            className={`btn btn-sm ${kind === "listen" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => restart("listen")}
            aria-pressed={kind === "listen"}
          >
            👂 Paper 1 Listen &amp; Type
          </button>
        ) : null}
      </div>

      {done ? (
        <div className="card p-6 text-center">
          <div className="text-4xl" aria-hidden>
            {score >= 10 ? "🏆" : score >= 7 ? "🌟" : "💪"}
          </div>
          <h2 className="mt-2 text-xl font-extrabold">
            {score} / {deck.length}
          </h2>
          <p className="text-ink-2">
            {score >= 10 ? "¡Sobresaliente! Top-Band vocabulary precision." : "Review any missed genders or accents, then try a fresh set."}
          </p>
          <button type="button" className="btn btn-primary mt-4" onClick={() => restart()}>
            New set of {deck.length}
          </button>
        </div>
      ) : card ? (
        <div className="card space-y-3 p-5">
          <div className="flex items-center justify-between text-sm text-ink-2">
            <span>
              Word {i + 1} of {deck.length} · {card.topicIcon} {card.group}
            </span>
            <span>Score {score}</span>
          </div>
          {kind === "en-es" ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Write in Spanish</div>
              <div className="text-2xl font-black">{card.en}</div>
              {/^(el|la|los|las) /.test(card.es) ? (
                <div className="text-xs text-ink-2">Include the article (el / la / los / las).</div>
              ) : null}
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" className="btn btn-primary" onClick={() => speakSpanish(card.es)}>
                🔊 Play normal
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => speakSpanish(card.es, { slow: true })}>
                🐢 Play slow
              </button>
              <span className="text-sm text-ink-2">Type what you hear in Spanish.</span>
            </div>
          )}
          <AnswerInput
            value={value}
            onChange={setValue}
            onSubmit={result && result !== "accent" ? next : check}
            type="text"
            disabled={!!result && result !== "accent"}
            autoFocus
          />
          {result ? (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl px-3 py-2 text-sm ${result === "right" ? "bg-good-soft" : result === "accent" ? "bg-warn-soft" : "bg-bad-soft"}`}
            >
              {result === "right" ? (
                <strong>✅ ¡Correcto! </strong>
              ) : result === "accent" ? (
                <strong>🟡 Almost — check your accents (á é í ó ú ñ ü) and press Check again! </strong>
              ) : (
                <strong>Not quite. </strong>
              )}
              {result !== "accent" ? (
                <>
                  <span lang="es" className="font-bold">
                    {card.es}
                  </span>{" "}
                  = {card.en}
                </>
              ) : null}
            </div>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {!result || result === "accent" ? (
              <button type="button" className="btn btn-primary" onClick={check} disabled={!value.trim()}>
                Check
              </button>
            ) : null}
            {result && result !== "accent" ? (
              <button type="button" className="btn btn-secondary" onClick={next}>
                Next →
              </button>
            ) : (
              <button type="button" className="btn btn-ghost" onClick={() => setResult("wrong")}>
                Show answer
              </button>
            )}
            <SpeakBtns text={card.es} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
