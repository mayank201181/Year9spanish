"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: Healthy Lifestyle Advice Builder
// =============================================================================

interface AdviceOpener {
  id: string;
  es: string;
  en: string;
  polarity: "positive" | "negative";
  personalTu: boolean;
}

const OPENERS: readonly AdviceOpener[] = [
  { id: "se-debe", es: "Se debe", en: "One should", polarity: "positive", personalTu: false },
  { id: "hay-que", es: "Hay que", en: "One must", polarity: "positive", personalTu: false },
  { id: "deberias", es: "Deberías", en: "You should", polarity: "positive", personalTu: true },
  { id: "imprescindible", es: "Es imprescindible", en: "It is essential to", polarity: "positive", personalTu: false },
  { id: "no-se-debe", es: "No se debe", en: "One must not", polarity: "negative", personalTu: false },
  { id: "no-deberias", es: "No deberías", en: "You should not", polarity: "negative", personalTu: true },
];

interface HabitAction {
  id: string;
  label: string;
  infImp: string;
  infTu: string;
  wrongConj: string;
  restEs: string;
  en: string;
  healthy: boolean;
}

const HABITS: readonly HabitAction[] = [
  { id: "fruta", label: "5 portions fruit & veg", infImp: "comer", infTu: "comer", wrongConj: "comes", restEs: "cinco raciones de fruta y verdura", en: "eat five portions of fruit and vegetables", healthy: true },
  { id: "agua", label: "Drink lots of water", infImp: "beber", infTu: "beber", wrongConj: "bebes", restEs: "mucha agua todos los días", en: "drink lots of water every day", healthy: true },
  { id: "dormir", label: "Sleep 8 hours", infImp: "dormir", infTu: "dormir", wrongConj: "duermes", restEs: "ocho horas cada noche", en: "sleep eight hours every night", healthy: true },
  { id: "acostarse", label: "Go to bed early", infImp: "acostarse", infTu: "acostarte", wrongConj: "te acuestas", restEs: "temprano entre semana", en: "go to bed early on weekdays", healthy: true },
  { id: "basura", label: "Eat junk food", infImp: "comer", infTu: "comer", wrongConj: "comes", restEs: "demasiada comida basura", en: "eat too much junk food", healthy: false },
  { id: "refrescos", label: "Drink sugary drinks", infImp: "beber", infTu: "beber", wrongConj: "bebes", restEs: "refrescos azucarados", en: "drink sugary fizzy drinks", healthy: false },
  { id: "pantalla", label: "Screen time late", infImp: "pasar", infTu: "pasar", wrongConj: "pasas", restEs: "demasiado tiempo delante de la pantalla", en: "spend too much time in front of the screen", healthy: false },
  { id: "desayuno", label: "Skip breakfast", infImp: "saltarse", infTu: "saltarte", wrongConj: "te saltas", restEs: "el desayuno", en: "skip breakfast", healthy: false },
];

const PURPOSES = [
  { id: "forma", es: "para estar en forma", en: "in order to keep fit" },
  { id: "estres", es: "para reducir el estrés", en: "in order to reduce stress" },
  { id: "energia", es: "para tener más energía", en: "in order to have more energy" },
  { id: "sueno", es: "para dormir mejor", en: "in order to sleep better" },
] as const;

function AdviceBuilderWidget() {
  const [openerId, setOpenerId] = useState<string>("deberias");
  const [habitId, setHabitId] = useState<string>("acostarse");
  const [purposeId, setPurposeId] = useState<string>("energia");

  const opener = OPENERS.find((o) => o.id === openerId) ?? OPENERS[0];
  const habit = HABITS.find((h) => h.id === habitId) ?? HABITS[0];
  const purpose = PURPOSES.find((p) => p.id === purposeId) ?? PURPOSES[0];

  const inf = opener.personalTu ? habit.infTu : habit.infImp;
  const isSensible = (opener.polarity === "positive") === habit.healthy;
  const score = isSensible ? 100 : 20;
  const barWidth = isSensible ? 228 : 48;

  return (
    <WidgetFrame
      title="Healthy Lifestyle Advice Builder"
      tryThis={[
        "Pick **Go to bed early** and toggle between **Hay que** (*acostarse*) and **Deberías** (*acostarte*) to see the reflexive pronoun switch automatically.",
        "Pair **Se debe** with **Eat junk food** to see the lifestyle logic check warn you to switch to **No se debe** or **No deberías**!",
        "Check the red warning pill to see the #1 Year 9 mistake (conjugating the second verb).",
      ]}
      caption={
        <span>
          <strong>Golden Rule:</strong> After <em>{opener.es}</em>, ALWAYS keep the action in the <strong>infinitive</strong> (<em>{inf}</em>) — never write{" "}
          <span className="font-bold text-bad line-through">{opener.es} {habit.wrongConj}</span>!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Advice structure</div>
          <div className="flex flex-wrap gap-1.5">
            {OPENERS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setOpenerId(o.id)}
                className={`min-h-9 rounded-lg border px-3 py-1 text-xs font-bold transition ${
                  o.id === opener.id
                    ? "border-brand bg-brand text-surface"
                    : "border-line bg-surface-2 text-ink hover:border-brand"
                }`}
              >
                {o.es}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Lifestyle habit</div>
          <div className="flex flex-wrap gap-1.5">
            {HABITS.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setHabitId(h.id)}
                className={`min-h-9 rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  h.id === habit.id
                    ? h.healthy
                      ? "border-good bg-good text-surface"
                      : "border-bad bg-bad text-surface"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {h.healthy ? "✓ " : "✗ "}
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Purpose clause (para + infinitive)</div>
          <Segmented
            label="Purpose clause"
            value={purposeId}
            onChange={setPurposeId}
            options={PURPOSES.map((p) => ({ value: p.id, label: p.es }))}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Spanish Advice Sentence</div>
          <p className="text-base font-extrabold leading-relaxed text-ink">
            <span className="text-brand">{opener.es}</span>{" "}
            <span className="underline decoration-2 decoration-good">{inf}</span>{" "}
            {habit.restEs}{" "}
            <span className="text-good">{purpose.es}</span>.
          </p>
          <p className="text-xs text-ink-2">
            English: {opener.en} {habit.en} {purpose.en}.
          </p>
          {!isSensible ? (
            <p className="rounded-lg bg-surface p-2 text-xs font-bold text-bad">
              ⚠️ Meaning check: You are advising {opener.polarity === "positive" ? "FOR an unhealthy habit" : "AGAINST a healthy habit"}! Flip to{" "}
              {opener.polarity === "positive" ? "No se debe / No deberías" : "Se debe / Hay que / Deberías"}.
            </p>
          ) : null}
        </div>

        <div className="rounded-xl border border-line bg-surface p-2.5">
          <svg viewBox="0 0 320 56" className="w-full h-auto" role="img" aria-label="Healthy advice coherence meter">
            <text x="10" y="18" fontSize="11" fontWeight="700" fill="var(--ink-2)">Health Advice Logic Score</text>
            <text x="310" y="18" fontSize="11" fontWeight="800" textAnchor="end" fill={isSensible ? "var(--good)" : "var(--bad)"}>
              {isSensible ? "Sensible Advice ✓" : "Flipped Polarity ⚠️"}
            </text>
            <rect x="10" y="28" width="300" height="16" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
            <rect x="10" y="28" width={barWidth} height="16" rx="8" fill={isSensible ? "var(--good)" : "var(--bad)"} />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="2nd verb form" value={inf} tone="good" />
          <Readout label="Register" value={opener.personalTu ? "Personal (tú)" : "Impersonal"} tone="brand" />
          <Readout label="Logic score" value={`${score}%`} tone={isSensible ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Future Health Resolution Conjugator
// =============================================================================

type SubjKey = "yo" | "tu" | "el" | "nosotros" | "vosotros" | "ellos";
type TenseKey = "preterite" | "near" | "simple";

interface HealthVerbModel {
  id: string;
  inf: string;
  en: string;
  rest: string;
  irregularFuture: boolean;
  futureStem: string;
  preterite: Record<SubjKey, string>;
}

const RESOLUTION_VERBS: readonly HealthVerbModel[] = [
  {
    id: "comer",
    inf: "comer",
    en: "eat less sugar",
    rest: "menos azúcar",
    irregularFuture: false,
    futureStem: "comer",
    preterite: { yo: "comí", tu: "comiste", el: "comió", nosotros: "comimos", vosotros: "comisteis", ellos: "comieron" },
  },
  {
    id: "beber",
    inf: "beber",
    en: "drink more water",
    rest: "más agua",
    irregularFuture: false,
    futureStem: "beber",
    preterite: { yo: "bebí", tu: "bebiste", el: "bebió", nosotros: "bebimos", vosotros: "bebisteis", ellos: "bebieron" },
  },
  {
    id: "dormir",
    inf: "dormir",
    en: "sleep eight hours",
    rest: "ocho horas",
    irregularFuture: false,
    futureStem: "dormir",
    preterite: { yo: "dormí", tu: "dormiste", el: "durmió", nosotros: "dormimos", vosotros: "dormisteis", ellos: "durmieron" },
  },
  {
    id: "hacer",
    inf: "hacer",
    en: "do more sport",
    rest: "más deporte",
    irregularFuture: true,
    futureStem: "har",
    preterite: { yo: "hice", tu: "hiciste", el: "hizo", nosotros: "hicimos", vosotros: "hicisteis", ellos: "hicieron" },
  },
  {
    id: "tener",
    inf: "tener",
    en: "have more energy",
    rest: "más energía",
    irregularFuture: true,
    futureStem: "tendr",
    preterite: { yo: "tuve", tu: "tuviste", el: "tuvo", nosotros: "tuvimos", vosotros: "tuvisteis", ellos: "tuvieron" },
  },
  {
    id: "poder",
    inf: "poder",
    en: "concentrate better",
    rest: "concentrarme mejor",
    irregularFuture: true,
    futureStem: "podr",
    preterite: { yo: "pude", tu: "pudiste", el: "pudo", nosotros: "pudimos", vosotros: "pudisteis", ellos: "pudieron" },
  },
  {
    id: "salir",
    inf: "salir",
    en: "go out for a run",
    rest: "a correr",
    irregularFuture: true,
    futureStem: "saldr",
    preterite: { yo: "salí", tu: "saliste", el: "salió", nosotros: "salimos", vosotros: "salisteis", ellos: "salieron" },
  },
];

const SUBJECTS: readonly { key: SubjKey; label: string; ir: string; futEnd: string; refl: string }[] = [
  { key: "yo", label: "yo", ir: "voy", futEnd: "é", refl: "me" },
  { key: "tu", label: "tú", ir: "vas", futEnd: "ás", refl: "te" },
  { key: "el", label: "él / ella", ir: "va", futEnd: "á", refl: "se" },
  { key: "nosotros", label: "nosotros", ir: "vamos", futEnd: "emos", refl: "nos" },
  { key: "vosotros", label: "vosotros", ir: "vais", futEnd: "éis", refl: "os" },
  { key: "ellos", label: "ellos / as", ir: "van", futEnd: "án", refl: "se" },
];

function FutureResolutionConjugator() {
  const [verbId, setVerbId] = useState<string>("hacer");
  const [tense, setTense] = useState<TenseKey>("simple");
  const [subjKey, setSubjKey] = useState<SubjKey>("yo");

  const verb = RESOLUTION_VERBS.find((v) => v.id === verbId) ?? RESOLUTION_VERBS[0];
  const subj = SUBJECTS.find((s) => s.key === subjKey) ?? SUBJECTS[0];

  const restAgreed = verb.id === "poder" ? `concentrar${subj.refl} mejor` : verb.rest;
  const cue =
    tense === "preterite" ? "El mes pasado" : tense === "near" ? "Mañana" : "El año que viene";
  const form =
    tense === "preterite"
      ? verb.preterite[subj.key]
      : tense === "near"
        ? `${subj.ir} a ${verb.inf}`
        : `${verb.futureStem}${subj.futEnd}`;

  const noAccentNote =
    tense === "simple" && subj.key === "nosotros"
      ? "Notice: nosotros (-emos) is the ONLY Simple Future ending with NO written accent!"
      : tense === "simple" && verb.irregularFuture
        ? `Irregular Simple Future stem: ${verb.inf} → ${verb.futureStem}- + -${subj.futEnd}!`
        : tense === "near"
          ? "Immediate Future keeps the full infinitive right after ir + a!"
          : verb.id === "dormir" && (subj.key === "el" || subj.key === "ellos")
            ? "Sandal/sole shift in 3rd-person Preterite: dormir → durmió / durmieron!"
            : "Compare how time markers lock onto verb endings across all three tenses.";

  return (
    <WidgetFrame
      title="Future Health Resolution Conjugator"
      tryThis={[
        "Pick **hacer**, **tener**, **poder** or **salir** in **Simple Future** to inspect the irregular stems (*har-, tendr-, podr-, saldr-*).",
        "Click **nosotros** in Simple Future to verify the **Five Hats, One Bare Head** rule (*-emos* has NO written accent!).",
        "Switch **dormir** to **Preterite** and compare *él/ellos* (*durmió / durmieron*) against *Simple Future* (*dormirá / dormirán* — completely regular!).",
      ]}
      caption={
        <span>
          <strong>Grammar spotlight:</strong> {noAccentNote}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose health verb</div>
          <div className="flex flex-wrap gap-1.5">
            {RESOLUTION_VERBS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVerbId(v.id)}
                className={`min-h-9 rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  v.id === verb.id
                    ? "border-brand bg-brand text-surface"
                    : "border-line bg-surface-2 text-ink hover:border-brand"
                }`}
              >
                {v.inf}
                {v.irregularFuture ? " ★" : ""}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Time frame / tense</div>
            <Segmented
              label="Tense"
              value={tense}
              onChange={setTense}
              options={[
                { value: "preterite", label: "Preterite (Past)" },
                { value: "near", label: "Ir a + Inf." },
                { value: "simple", label: "Simple Future" },
              ]}
            />
          </div>

          <div className="space-y-1.5 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Subject person</div>
            <div className="flex flex-wrap gap-1">
              {SUBJECTS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSubjKey(s.key)}
                  className={`min-h-9 rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    s.key === subj.key
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Spanish Sentence</div>
          <p className="text-base font-extrabold text-ink">
            {cue},{" "}
            {tense === "simple" ? (
              <>
                <span className="text-brand">{verb.futureStem}</span>
                <span className="text-good underline decoration-2">{subj.futEnd}</span>
              </>
            ) : (
              <span className="text-brand">{form}</span>
            )}{" "}
            {restAgreed}.
          </p>
          <p className="text-xs text-ink-2">
            Full 6-person paradigm ({tense === "preterite" ? "Preterite" : tense === "near" ? "Immediate Future" : "Simple Future"}):
          </p>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 text-xs">
            {SUBJECTS.map((s) => {
              const cell =
                tense === "preterite"
                  ? verb.preterite[s.key]
                  : tense === "near"
                    ? `${s.ir} a ${verb.inf}`
                    : `${verb.futureStem}${s.futEnd}`;
              return (
                <div
                  key={s.key}
                  className={`rounded-lg border px-2 py-1.5 ${
                    s.key === subj.key ? "border-brand bg-surface font-extrabold text-brand" : "border-line bg-surface text-ink-2"
                  }`}
                >
                  <span className="opacity-70">{s.label}:</span> {cell}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Simple future stem" value={`${verb.futureStem}-`} tone={verb.irregularFuture ? "bad" : "good"} />
          <Readout label="Stem type" value={verb.irregularFuture ? "Irregular ★" : "Regular ✓"} tone={verb.irregularFuture ? "brand" : "good"} />
          <Readout label="Active form" value={form} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "health-advice-builder",
    title: "Healthy Lifestyle Advice Builder",
    blurb: "Combine se debe, hay que, deberías and es imprescindible with infinitives and purpose clauses while dodging double-conjugation errors.",
    Component: AdviceBuilderWidget,
  },
  {
    id: "future-resolution-conjugator",
    title: "Future Health Resolution Conjugator",
    blurb: "Compare Preterite past habits with Immediate Future and Simple Future health pledges across regular and H-T-P-S-P irregular verbs.",
    Component: FutureResolutionConjugator,
  },
];
