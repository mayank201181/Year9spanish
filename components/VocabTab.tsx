"use client";
// The Vocab tab: every word for the topic with Spanish audio, plus three ways to learn it —
// browse & listen, flip cards, and "listen & type" (dictation / translation) self-tests.
import { useMemo, useState, useSyncExternalStore } from "react";
import type { VocabItem } from "@/lib/types";
import { VOCAB } from "@/lib/generated/vocab";
import { speakSpanish, speechAvailable } from "@/lib/speech";
import { normSpanish, stripAccents } from "@/lib/answerCheck";
import { useStore } from "@/lib/store";
import { AnswerInput } from "./AnswerInput";

type Mode = "list" | "cards" | "test";
type TestKind = "en-es" | "listen";

const noop = () => () => {};
function useSpeech(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

function SpeakButton({ text, slow, label }: { text: string; slow?: boolean; label?: string }) {
  const ok = useSpeech();
  if (!ok) return null;
  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm min-h-10 min-w-10 px-2"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow });
      }}
      aria-label={label ?? `Hear “${text}”`}
      title={slow ? "Hear it slowly" : "Hear it"}
    >
      {slow ? "🐢" : "🔊"}
    </button>
  );
}

/** Strip a leading article for matching ("la cocina" → also accept "cocina"? No — articles matter; we accept with or without for en→es only). */
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

export function VocabTab({ topicId, topicTitle }: { topicId: string; topicTitle: string }) {
  const groups = useMemo(() => VOCAB[topicId] ?? [], [topicId]);
  const all = useMemo(() => groups.flatMap((g) => g.items.map((it) => ({ ...it, group: g.title }))), [groups]);
  const [mode, setMode] = useState<Mode>("list");
  const [groupFilter, setGroupFilter] = useState<string>("All");
  const pool = groupFilter === "All" ? all : all.filter((x) => x.group === groupFilter);
  const speech = useSpeech();

  if (!all.length) {
    return <p className="card p-6 text-ink-2">The word list for {topicTitle} is on its way.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="card flex flex-wrap items-center justify-between gap-3 p-4">
        <div>
          <h2 className="text-lg font-extrabold">🗣️ Vocabulario · {all.length} words &amp; phrases</h2>
          <p className="text-sm text-ink-2">
            {speech ? "Tap 🔊 to hear any word (🐢 for slow). " : "Audio needs a browser with Spanish speech — try Chrome or Safari. "}
            Learn them here, then test yourself.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Vocab mode">
          {(
            [
              ["list", "📋 Word list"],
              ["cards", "🃏 Flip cards"],
              ["test", "✍️ Test me"],
            ] as [Mode, string][]
          ).map(([m, label]) => (
            <button key={m} type="button" className={`btn btn-sm ${mode === m ? "btn-primary" : "btn-secondary"}`} onClick={() => setMode(m)} aria-pressed={mode === m}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Word group">
        {["All", ...groups.map((g) => g.title)].map((g) => (
          <button key={g} type="button" className={`chip ${groupFilter === g ? "border-brand bg-brand-soft text-brand" : ""}`} onClick={() => setGroupFilter(g)} aria-pressed={groupFilter === g}>
            {g}
          </button>
        ))}
      </div>

      {mode === "list" ? <WordList groups={groupFilter === "All" ? groups : groups.filter((g) => g.title === groupFilter)} /> : null}
      {mode === "cards" ? <FlipCards key={groupFilter} items={pool} /> : null}
      {mode === "test" ? <VocabTest key={groupFilter} items={pool} topicId={topicId} /> : null}
    </div>
  );
}

function WordList({ groups }: { groups: { title: string; items: VocabItem[] }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((g) => (
        <section key={g.title} className="card p-4">
          <h3 className="mb-2 font-extrabold text-brand">{g.title}</h3>
          <ul className="divide-y divide-line">
            {g.items.map((it) => (
              <li key={it.es} className="flex items-center gap-1.5 py-1.5">
                <SpeakButton text={it.es} />
                <SpeakButton text={it.es} slow />
                <div className="min-w-0 flex-1">
                  <div className="font-bold" lang="es">
                    {it.es}
                  </div>
                  <div className="text-sm text-ink-2">
                    {it.en}
                    {it.note ? <span className="text-ink-2/80"> · {it.note}</span> : null}
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

function FlipCards({ items }: { items: (VocabItem & { group: string })[] }) {
  const [seed, setSeed] = useState(1);
  const deck = useMemo(() => shuffle(items, seed), [items, seed]);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [enFirst, setEnFirst] = useState(false);
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
          Card {(i % deck.length) + 1} of {deck.length}
        </span>
        <label className="flex items-center gap-2 font-bold">
          <input type="checkbox" className="h-5 w-5" checked={enFirst} onChange={(e) => { setEnFirst(e.target.checked); setFlipped(false); }} />
          English first
        </label>
      </div>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="card flex min-h-48 w-full flex-col items-center justify-center gap-2 p-6 text-center hover:bg-surface-2"
        aria-label={flipped ? `Answer: ${back}. Tap to flip back.` : `${front}. Tap to see the answer.`}
      >
        <div className="text-xs font-bold uppercase tracking-wide text-ink-2">{flipped ? (enFirst ? "Español" : "English") : enFirst ? "English" : "Español"}</div>
        <div className="text-2xl font-black" lang={(flipped ? !enFirst : enFirst) ? "en" : "es"}>
          {flipped ? back : front}
        </div>
        {flipped && card.note ? <div className="text-sm text-ink-2">{card.note}</div> : null}
        <div className="text-xs text-ink-2">{flipped ? "" : "Tap to flip"}</div>
      </button>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button type="button" className="btn btn-secondary" onClick={() => go(-1)}>
          ← Back
        </button>
        <SpeakButton text={card.es} />
        <SpeakButton text={card.es} slow />
        <button type="button" className="btn btn-primary" onClick={() => go(1)}>
          Next →
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => { setSeed((s) => s + 1); setI(0); setFlipped(false); }}>
          🔀 Shuffle
        </button>
      </div>
    </div>
  );
}

function VocabTest({ items, topicId }: { items: (VocabItem & { group: string })[]; topicId: string }) {
  const speech = useSpeech();
  const [kind, setKind] = useState<TestKind>("en-es");
  const [seed, setSeed] = useState(7);
  const deck = useMemo(() => shuffle(items, seed).slice(0, 10), [items, seed]);
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
    if (ni >= deck.length) setBest(`vocab:${topicId}`, score);
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
        <button type="button" className={`btn btn-sm ${kind === "en-es" ? "btn-primary" : "btn-secondary"}`} onClick={() => restart("en-es")} aria-pressed={kind === "en-es"}>
          🇬🇧 → 🇪🇸 Translate
        </button>
        {speech ? (
          <button type="button" className={`btn btn-sm ${kind === "listen" ? "btn-primary" : "btn-secondary"}`} onClick={() => restart("listen")} aria-pressed={kind === "listen"}>
            👂 Listen &amp; type
          </button>
        ) : null}
      </div>
      {done ? (
        <div className="card p-6 text-center">
          <div className="text-4xl" aria-hidden>{score >= 8 ? "🏆" : score >= 5 ? "👍" : "💪"}</div>
          <h3 className="mt-2 text-xl font-extrabold">
            {score} / {deck.length}
          </h3>
          <p className="text-ink-2">{score >= 8 ? "¡Excelente! These words are sticking." : "Flip through the cards again, then have another go."}</p>
          <button type="button" className="btn btn-primary mt-4" onClick={() => restart()}>
            New set of 10
          </button>
        </div>
      ) : card ? (
        <div className="card space-y-3 p-5">
          <div className="flex items-center justify-between text-sm text-ink-2">
            <span>
              Word {i + 1} of {deck.length}
            </span>
            <span>Score {score}</span>
          </div>
          {kind === "en-es" ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Write in Spanish</div>
              <div className="text-2xl font-black">{card.en}</div>
              {card.es.match(/^(el|la|los|las) /) ? <div className="text-xs text-ink-2">Include the article (el / la / los / las).</div> : null}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button type="button" className="btn btn-primary" onClick={() => speakSpanish(card.es)}>
                🔊 Play
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => speakSpanish(card.es, { slow: true })}>
                🐢 Slow
              </button>
              <span className="text-sm text-ink-2">Type what you hear (in Spanish).</span>
            </div>
          )}
          <AnswerInput value={value} onChange={setValue} onSubmit={result && result !== "accent" ? next : check} type="text" disabled={!!result && result !== "accent"} autoFocus />
          {result ? (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl px-3 py-2 text-sm ${result === "right" ? "bg-good-soft" : result === "accent" ? "bg-warn-soft" : "bg-bad-soft"}`}
            >
              {result === "right" ? (
                <strong>✅ ¡Correcto! </strong>
              ) : result === "accent" ? (
                <strong>🟡 Almost — check your accents (á é í ó ú ñ ü) and press Check again!</strong>
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
              <button type="button" className="btn btn-ghost" onClick={() => { setResult("wrong"); }}>
                Show me
              </button>
            )}
            <SpeakButton text={card.es} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
