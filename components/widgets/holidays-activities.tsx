"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type HolidayTense = "present" | "preterite" | "near-future" | "simple-future";
type SubjKey = "yo" | "nosotros" | "ellos";
type DestKey = "espana" | "costa" | "campo" | "extranjero" | "baleares";
type TransKey = "avion" | "tren" | "barco" | "pie";
type WeatherKey = "sol" | "calor" | "lluvia" | "nieve";

const TENSE_INFO: Record<
  HolidayTense,
  { label: string; markerEs: string; markerEn: string; ir: Record<SubjKey, string>; enSubj: Record<SubjKey, string>; color: string }
> = {
  present: {
    label: "Present",
    markerEs: "Normalmente",
    markerEn: "Normally",
    ir: { yo: "voy", nosotros: "vamos", ellos: "van" },
    enSubj: { yo: "I go", nosotros: "we go", ellos: "they go" },
    color: "var(--brand)",
  },
  preterite: {
    label: "Preterite",
    markerEs: "El verano pasado",
    markerEn: "Last summer",
    ir: { yo: "fui", nosotros: "fuimos", ellos: "fueron" },
    enSubj: { yo: "I went", nosotros: "we went", ellos: "they went" },
    color: "var(--good)",
  },
  "near-future": {
    label: "Near Future",
    markerEs: "El año que viene",
    markerEn: "Next year",
    ir: { yo: "voy a ir", nosotros: "vamos a ir", ellos: "van a ir" },
    enSubj: { yo: "I am going to go", nosotros: "we are going to go", ellos: "they are going to go" },
    color: "var(--brand)",
  },
  "simple-future": {
    label: "Simple Future",
    markerEs: "En el futuro",
    markerEn: "In the future",
    ir: { yo: "iré", nosotros: "iremos", ellos: "irán" },
    enSubj: { yo: "I will go", nosotros: "we will go", ellos: "they will go" },
    color: "var(--good)",
  },
};

const DEST_INFO: Record<DestKey, { label: string; es: string; en: string; rule: string }> = {
  espana: { label: "España", es: "a España", en: "to Spain", rule: "bare a + country" },
  costa: { label: "la costa", es: "a la costa", en: "to the coast", rule: "a la (fem. sg.)" },
  campo: { label: "el campo", es: "al campo", en: "to the countryside", rule: "a + el → al!" },
  extranjero: { label: "el extranjero", es: "al extranjero", en: "abroad", rule: "a + el → al!" },
  baleares: { label: "las Islas Baleares", es: "a las Islas Baleares", en: "to the Balearic Islands", rule: "a las (fem. pl.)" },
};

const TRANS_INFO: Record<TransKey, { label: string; es: string; en: string; rule: string }> = {
  avion: { label: "avión", es: "en avión", en: "by plane", rule: "en + vehicle (no article)" },
  tren: { label: "tren", es: "en tren", en: "by train", rule: "en + vehicle (no article)" },
  barco: { label: "barco", es: "en barco", en: "by boat", rule: "en + vehicle (no article)" },
  pie: { label: "pie (exception!)", es: "a pie", en: "on foot", rule: "a pie (NEVER en pie!)" },
};

const WEATHER_INFO: Record<WeatherKey, { label: string; es: Record<HolidayTense, string>; en: Record<HolidayTense, string>; rule: string }> = {
  sol: {
    label: "☀️ sun",
    es: { present: "hace mucho sol", preterite: "hizo mucho sol", "near-future": "va a hacer mucho sol", "simple-future": "hará mucho sol" },
    en: { present: "it is very sunny", preterite: "it was very sunny", "near-future": "it is going to be very sunny", "simple-future": "it will be very sunny" },
    rule: "mucho sol (noun, NOT muy!)",
  },
  calor: {
    label: "🌡️ heat",
    es: { present: "hace mucho calor", preterite: "hizo mucho calor", "near-future": "va a hacer mucho calor", "simple-future": "hará mucho calor" },
    en: { present: "it is very hot", preterite: "it was very hot", "near-future": "it is going to be very hot", "simple-future": "it will be very hot" },
    rule: "mucho calor (noun, NOT muy!)",
  },
  lluvia: {
    label: "🌧️ rain",
    es: { present: "llueve mucho", preterite: "llovió mucho", "near-future": "va a llover mucho", "simple-future": "lloverá mucho" },
    en: { present: "it rains a lot", preterite: "it rained a lot", "near-future": "it is going to rain a lot", "simple-future": "it will rain a lot" },
    rule: "llover → llueve / llovió / va a llover",
  },
  nieve: {
    label: "❄️ snow",
    es: { present: "nieva mucho", preterite: "nevó mucho", "near-future": "va a nevar mucho", "simple-future": "nevará mucho" },
    en: { present: "it snows a lot", preterite: "it snowed a lot", "near-future": "it is going to snow a lot", "simple-future": "it will snow a lot" },
    rule: "nevar → nieva / nevó / va a nevar",
  },
};

function HolidayNarrativeBuilder() {
  const [tense, setTense] = useState<HolidayTense>("preterite");
  const [subj, setSubj] = useState<SubjKey>("yo");
  const [dest, setDest] = useState<DestKey>("campo");
  const [trans, setTrans] = useState<TransKey>("tren");
  const [weather, setWeather] = useState<WeatherKey>("sol");

  const t = TENSE_INFO[tense];
  const d = DEST_INFO[dest];
  const tr = TRANS_INFO[trans];
  const w = WEATHER_INFO[weather];

  const connectorEs = weather === "lluvia" || weather === "nieve" ? "aunque" : "porque";
  const connectorEn = weather === "lluvia" || weather === "nieve" ? "although" : "because";

  const spanishSentence = `${t.markerEs}, ${t.ir[subj]} de vacaciones ${d.es} ${tr.es} ${connectorEs} ${w.es[tense]}.`;
  const englishSentence = `${t.markerEn}, ${t.enSubj[subj]} on holiday ${d.en} ${tr.en} ${connectorEn} ${w.en[tense]}.`;

  const timelineX: Record<HolidayTense, number> = {
    preterite: 105,
    present: 225,
    "near-future": 345,
    "simple-future": 465,
  };

  return (
    <WidgetFrame
      title="4-Tense Holiday Sentence & Weather Switchboard"
      tryThis={[
        "Switch between **el campo** and **la costa** to watch *a + el* fuse into **al**.",
        "Select **pie** and compare the preposition with **avión**, **tren** and **barco**.",
        "Flip the tense across all 4 frames and watch both **ir** and the **weather verb** transform together.",
      ]}
      caption={
        <>
          <strong>Grammar check:</strong> Notice how changing the time marker automatically locks BOTH the main verb (
          <em>{t.ir[subj]}</em>) and the weather verb (<em>{w.es[tense]}</em>) into the same time frame.
        </>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Time Frame (4 Year 9 Tenses)</div>
          <Segmented
            label="Time frame"
            value={tense}
            onChange={setTense}
            options={[
              { value: "preterite", label: "Preterite" },
              { value: "present", label: "Present" },
              { value: "near-future", label: "Ir a + inf." },
              { value: "simple-future", label: "Simple Future" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Subject</div>
            <Segmented
              label="Subject"
              value={subj}
              onChange={setSubj}
              options={[
                { value: "yo", label: "yo (I)" },
                { value: "nosotros", label: "nosotros (we)" },
                { value: "ellos", label: "ellos (they)" },
              ]}
            />
          </div>
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Transport</div>
            <Segmented
              label="Transport"
              value={trans}
              onChange={setTrans}
              options={[
                { value: "avion", label: "avión" },
                { value: "tren", label: "tren" },
                { value: "barco", label: "barco" },
                { value: "pie", label: "pie" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">4. Destination</div>
            <Segmented
              label="Destination"
              value={dest}
              onChange={setDest}
              options={[
                { value: "espana", label: "España" },
                { value: "costa", label: "la costa" },
                { value: "campo", label: "el campo" },
                { value: "extranjero", label: "el extranjero" },
                { value: "baleares", label: "las Islas" },
              ]}
            />
          </div>
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">5. Weather</div>
            <Segmented
              label="Weather"
              value={weather}
              onChange={setWeather}
              options={[
                { value: "sol", label: "☀️ sol" },
                { value: "calor", label: "🌡️ calor" },
                { value: "lluvia", label: "🌧️ lluvia" },
                { value: "nieve", label: "❄️ nieve" },
              ]}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 560 92"
          className="w-full h-auto"
          role="img"
          aria-label="Timeline highlighting the active Spanish tense"
        >
          <rect x="6" y="6" width="548" height="80" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth={1.2} />
          <line x1="60" y1="44" x2="500" y2="44" stroke="var(--line)" strokeWidth={3} strokeLinecap="round" />
          {(["preterite", "present", "near-future", "simple-future"] as HolidayTense[]).map((tk) => {
            const active = tk === tense;
            const cx = timelineX[tk];
            return (
              <g key={tk}>
                <circle
                  cx={cx}
                  cy={44}
                  r={active ? 11 : 6}
                  fill={active ? TENSE_INFO[tk].color : "var(--surface)"}
                  stroke={active ? TENSE_INFO[tk].color : "var(--ink-2)"}
                  strokeWidth={2}
                />
                <text
                  x={cx}
                  y={24}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={active ? 700 : 500}
                  fill={active ? "var(--ink)" : "var(--ink-2)"}
                >
                  {TENSE_INFO[tk].label}
                </text>
                <text x={cx} y={72} textAnchor="middle" fontSize={10} fill={active ? "var(--brand)" : "var(--ink-2)"}>
                  {TENSE_INFO[tk].markerEs}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="rounded-xl border-2 border-brand bg-brand-soft p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-brand">Live Spanish Output</div>
          <p className="mt-1 text-base sm:text-lg font-extrabold text-ink leading-snug">{spanishSentence}</p>
          <p className="mt-1 text-sm text-ink-2 italic">{englishSentence}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Destination Rule" value={<span className="text-sm">{d.rule}</span>} tone={dest === "campo" || dest === "extranjero" ? "good" : "brand"} />
          <Readout label="Transport Rule" value={<span className="text-sm">{tr.rule}</span>} tone={trans === "pie" ? "bad" : "brand"} />
          <Readout label="Weather Rule" value={<span className="text-sm">{w.rule}</span>} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Preterite -car / -gar / -zar & Irregular Sound-Shield Lab
// ---------------------------------------------------------------------------

type VerbKey = "sacar" | "practicar" | "jugar" | "llegar" | "cruzar" | "ir" | "hacer" | "ver";
type PersonKey = "yo" | "tu" | "el" | "nosotros" | "vosotros" | "ellos";

interface PreteriteSpec {
  inf: string;
  en: string;
  family: string;
  parts: Record<PersonKey, { stem: string; shield: string; end: string }>;
  exampleTail: string;
  why: string;
}

const PRET_VERBS: Record<VerbKey, PreteriteSpec> = {
  sacar: {
    inf: "sacar",
    en: "to take (photos)",
    family: "-car → -qué (yo only)",
    parts: {
      yo: { stem: "sa", shield: "qu", end: "é" },
      tu: { stem: "sac", shield: "", end: "aste" },
      el: { stem: "sac", shield: "", end: "ó" },
      nosotros: { stem: "sac", shield: "", end: "amos" },
      vosotros: { stem: "sac", shield: "", end: "asteis" },
      ellos: { stem: "sac", shield: "", end: "aron" },
    },
    exampleTail: "muchas fotos en la costa.",
    why: "Before -é, c would sound soft (like th). Swapping c → qu preserves the hard /k/ sound of sacar — only needed in yo!",
  },
  practicar: {
    inf: "practicar",
    en: "to practise (sports)",
    family: "-car → -qué (yo only)",
    parts: {
      yo: { stem: "practi", shield: "qu", end: "é" },
      tu: { stem: "practic", shield: "", end: "aste" },
      el: { stem: "practic", shield: "", end: "ó" },
      nosotros: { stem: "practic", shield: "", end: "amos" },
      vosotros: { stem: "practic", shield: "", end: "asteis" },
      ellos: { stem: "practic", shield: "", end: "aron" },
    },
    exampleTail: "deportes acuáticos en Mallorca.",
    why: "Just like sacar, practicar protects its hard /k/ sound before -é by changing c → qu ONLY in yo.",
  },
  jugar: {
    inf: "jugar",
    en: "to play (a sport)",
    family: "-gar → -gué (yo only, NO ue!)",
    parts: {
      yo: { stem: "ju", shield: "gu", end: "é" },
      tu: { stem: "jug", shield: "", end: "aste" },
      el: { stem: "jug", shield: "", end: "ó" },
      nosotros: { stem: "jug", shield: "", end: "amos" },
      vosotros: { stem: "jug", shield: "", end: "asteis" },
      ellos: { stem: "jug", shield: "", end: "aron" },
    },
    exampleTail: "al voleibol en la playa.",
    why: "Before -é, g would turn raspy (like h). Adding silent u (gu) keeps the hard /g/ sound, and notice the stem stays u (never juegué!).",
  },
  llegar: {
    inf: "llegar",
    en: "to arrive",
    family: "-gar → -gué (yo only)",
    parts: {
      yo: { stem: "lle", shield: "gu", end: "é" },
      tu: { stem: "lleg", shield: "", end: "aste" },
      el: { stem: "lleg", shield: "", end: "ó" },
      nosotros: { stem: "lleg", shield: "", end: "amos" },
      vosotros: { stem: "lleg", shield: "", end: "asteis" },
      ellos: { stem: "lleg", shield: "", end: "aron" },
    },
    exampleTail: "tarde al aeropuerto.",
    why: "Only yo has -é after g, so only yo adds u (llegué). Every other form (llegaste, llegó, llegaron) keeps plain g.",
  },
  cruzar: {
    inf: "cruzar",
    en: "to cross",
    family: "-zar → -cé (yo only)",
    parts: {
      yo: { stem: "cru", shield: "c", end: "é" },
      tu: { stem: "cruz", shield: "", end: "aste" },
      el: { stem: "cruz", shield: "", end: "ó" },
      nosotros: { stem: "cruz", shield: "", end: "amos" },
      vosotros: { stem: "cruz", shield: "", end: "asteis" },
      ellos: { stem: "cruz", shield: "", end: "aron" },
    },
    exampleTail: "la frontera en coche.",
    why: "Spanish spelling forbids z directly before e, so z swaps cleanly to c before -é in the yo preterite (crucé).",
  },
  ir: {
    inf: "ir / ser",
    en: "to go / to be",
    family: "Irregular twins (NO accents!)",
    parts: {
      yo: { stem: "fui", shield: "", end: "" },
      tu: { stem: "fui", shield: "", end: "ste" },
      el: { stem: "fue", shield: "", end: "" },
      nosotros: { stem: "fui", shield: "", end: "mos" },
      vosotros: { stem: "fui", shield: "", end: "steis" },
      ellos: { stem: "fue", shield: "", end: "ron" },
    },
    exampleTail: "a Valencia en tren.",
    why: "ir and ser share identical preterite forms, and NONE of them carry a written accent (fui, fue — never fuí/fué!).",
  },
  hacer: {
    inf: "hacer",
    en: "to do / make",
    family: "Irregular stem hic- (z in él/ella)",
    parts: {
      yo: { stem: "hic", shield: "", end: "e" },
      tu: { stem: "hic", shield: "", end: "iste" },
      el: { stem: "hi", shield: "z", end: "o" },
      nosotros: { stem: "hic", shield: "", end: "imos" },
      vosotros: { stem: "hic", shield: "", end: "isteis" },
      ellos: { stem: "hic", shield: "", end: "ieron" },
    },
    exampleTail: "turismo por el centro.",
    why: "hacer uses the strong stem hic- with NO written accents. In él/ella, c changes to z before o (hizo) to keep the soft sound!",
  },
  ver: {
    inf: "ver",
    en: "to see",
    family: "Short preterite (NO accents!)",
    parts: {
      yo: { stem: "v", shield: "", end: "i" },
      tu: { stem: "v", shield: "", end: "iste" },
      el: { stem: "v", shield: "", end: "io" },
      nosotros: { stem: "v", shield: "", end: "imos" },
      vosotros: { stem: "v", shield: "", end: "isteis" },
      ellos: { stem: "v", shield: "", end: "ieron" },
    },
    exampleTail: "la Alhambra en Granada.",
    why: "Because vi and vio are one-syllable words, Spanish spelling drops the written accent completely.",
  },
};

const PERSON_LABELS: Record<PersonKey, string> = {
  yo: "yo",
  tu: "tú",
  el: "él / ella",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos / ellas",
};

function PreteriteSoundShield() {
  const [verb, setVerb] = useState<VerbKey>("sacar");
  const [person, setPerson] = useState<PersonKey>("yo");

  const spec = PRET_VERBS[verb];
  const piece = spec.parts[person];
  const fullForm = `${piece.stem}${piece.shield}${piece.end}`;
  const hasShield = piece.shield.length > 0;
  const hasAccent = /[áéíóú]/.test(fullForm);

  return (
    <WidgetFrame
      title="Preterite Sound-Shield & Irregular Anatomy Lab"
      tryThis={[
        "Pick **sacar**, **jugar** or **cruzar** on **yo**, then click **tú** or **ellos** to see the Sound Shield switch off!",
        "Switch to **hacer** and tap **él / ella** to spot why *c* flips to **z** in **hizo**.",
        "Compare **sacar** (needs accent on *-é / -ó*) with **ir / ser**, **hacer** and **ver** (zero written accents).",
      ]}
      caption={
        <>
          <strong>Why it works:</strong> {spec.why}
        </>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Choose Holiday Verb</div>
          <Segmented
            label="Holiday verb"
            value={verb}
            onChange={setVerb}
            options={[
              { value: "sacar", label: "sacar" },
              { value: "practicar", label: "practicar" },
              { value: "jugar", label: "jugar" },
              { value: "llegar", label: "llegar" },
              { value: "cruzar", label: "cruzar" },
              { value: "ir", label: "ir / ser" },
              { value: "hacer", label: "hacer" },
              { value: "ver", label: "ver" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Choose Person</div>
          <Segmented
            label="Subject person"
            value={person}
            onChange={setPerson}
            options={[
              { value: "yo", label: "yo" },
              { value: "tu", label: "tú" },
              { value: "el", label: "él / ella" },
              { value: "nosotros", label: "nosotros" },
              { value: "vosotros", label: "vosotros" },
              { value: "ellos", label: "ellos" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            {spec.inf} ({spec.en}) · {PERSON_LABELS[person]}
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1 text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="rounded-lg bg-surface px-2.5 py-1 text-ink border border-line">{piece.stem}</span>
            {hasShield ? (
              <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-brand border-2 border-brand">{piece.shield}</span>
            ) : null}
            {piece.end ? (
              <span className="rounded-lg bg-surface px-2.5 py-1 text-good border border-line">{piece.end}</span>
            ) : null}
          </div>
          <p className="mt-3 text-sm font-semibold text-ink">
            El verano pasado ({PERSON_LABELS[person]}) <span className="text-brand font-extrabold">{fullForm}</span>{" "}
            {spec.exampleTail}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Verb Pattern" value={<span className="text-sm">{spec.family}</span>} tone="brand" />
          <Readout
            label="Spelling Shield"
            value={<span className="text-sm">{hasShield ? `ACTIVE (${piece.shield})` : "Off (regular stem)"}</span>}
            tone={hasShield ? "good" : "ink"}
          />
          <Readout
            label="Written Accent?"
            value={<span className="text-sm">{hasAccent ? "YES — required!" : "NO accent"}</span>}
            tone={hasAccent ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "holidays-narrative-builder",
    title: "4-Tense Holiday Sentence & Weather Switchboard",
    blurb: "Build authentic holiday sentences across Present, Preterite, Immediate Future and Simple Future while watching prepositions and weather verbs shift live.",
    Component: HolidayNarrativeBuilder,
  },
  {
    id: "preterite-sound-shield",
    title: "Preterite Sound-Shield & Irregular Anatomy Lab",
    blurb: "Inspect exactly when -car/-gar/-zar spelling shields activate and compare accented regular endings with unaccented irregulars.",
    Component: PreteriteSoundShield,
  },
];
