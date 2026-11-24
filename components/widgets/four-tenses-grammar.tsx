"use client";
import { useState } from "react";
import { conjugate, englishGloss, PERSON_LABEL, type Person } from "../../lib/spanish/verbs";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Four-Tense Time-Machine Transformer
// ===========================================================================

type CatKey = "regular" | "boot" | "cgz" | "irreg";

interface VerbOption {
  inf: string;
  label: string;
  note: string;
}

const CATEGORIES: Record<CatKey, { label: string; verbs: readonly VerbOption[] }> = {
  regular: {
    label: "Regular",
    verbs: [
      { inf: "hablar", label: "hablar", note: "Regular -AR (watch hablo vs habló!)" },
      { inf: "comer", label: "comer", note: "Regular -ER (comemos vs comimos!)" },
      { inf: "vivir", label: "vivir", note: "Regular -IR (vivimos in Pres. & Pret.)" },
      { inf: "viajar", label: "viajar", note: "Regular -AR (viajé vs viajaré)" },
    ],
  },
  boot: {
    label: "Boot",
    verbs: [
      { inf: "preferir", label: "preferir", note: "Boot e→ie (nosotros preferimos; pret. él prefirió)" },
      { inf: "poder", label: "poder", note: "Boot o→ue · strong pret. pud- · future stem podr-" },
      { inf: "jugar", label: "jugar", note: "Only u→ue boot · pret. yo jugué (-gar)" },
      { inf: "pedir", label: "pedir", note: "Boot e→i · pret. sandal pidió / pidieron" },
    ],
  },
  cgz: {
    label: "-car/-gar/-zar",
    verbs: [
      { inf: "sacar", label: "sacar", note: "Preterite yo ONLY: -car → -qué (saqué)" },
      { inf: "llegar", label: "llegar", note: "Preterite yo ONLY: -gar → -gué (llegué)" },
      { inf: "empezar", label: "empezar", note: "Boot e→ie + pret. yo -zar → -cé (empecé)" },
      { inf: "almorzar", label: "almorzar", note: "Boot o→ue + pret. yo -zar → -cé (almorcé)" },
    ],
  },
  irreg: {
    label: "Irregulars",
    verbs: [
      { inf: "tener", label: "tener", note: "yo-go tengo · pret. tuve (0 accents) · future tendr-" },
      { inf: "hacer", label: "hacer", note: "yo-go hago · pret. hice/hizo · future har-" },
      { inf: "ir", label: "ir", note: "Pres. voy · pret. fui/fue · future REGULAR iré!" },
      { inf: "salir", label: "salir", note: "yo-go salgo · pret. salí · future Add-D saldr-" },
    ],
  },
};

const PERSON_SHORT: Record<Person, string> = {
  yo: "yo",
  tú: "tú",
  él: "él/ella",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos",
};

function FourTenseTimeMachine() {
  const [cat, setCat] = useState<CatKey>("irreg");
  const [verbIdx, setVerbIdx] = useState<number>(0);
  const [person, setPerson] = useState<Person>("yo");

  const verbList = CATEGORIES[cat].verbs;
  const activeVerb = verbList[verbIdx] ?? verbList[0];
  const inf = activeVerb.inf;

  const pres = conjugate(inf, "present", person);
  const pret = conjugate(inf, "preterite", person);
  const nearFut = conjugate(inf, "near-future", person);
  const simpFut = conjugate(inf, "future", person);

  const presEn = englishGloss(inf, "present", person);
  const pretEn = englishGloss(inf, "preterite", person);
  const nearEn = englishGloss(inf, "near-future", person);
  const simpEn = englishGloss(inf, "future", person);

  const handleCatChange = (next: CatKey) => {
    setCat(next);
    setVerbIdx(0);
  };

  const accentNote =
    person === "nosotros"
      ? `Notice Simple Future «${simpFut}» ends in -emos with ZERO written accent!`
      : `Notice Simple Future «${simpFut}» keeps a written accent on its ending (only -emos skips it!).`;

  return (
    <WidgetFrame
      title="Four-Tense Time-Machine Transformer"
      tryThis={[
        "Pick **Boot → preferir** or **jugar** and toggle between **yo** and **nosotros** — watch the stem change vanish outside the boot!",
        "Switch to **Irregulars → ir** and see how *ir* is wild in Present/Preterite (*voy / fui*) yet 100% regular in Simple Future (*iré*).",
      ]}
      caption={
        <>
          <strong>Spotlight ({inf}):</strong> {activeVerb.note}. {accentNote}
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Verb Family</div>
            <Segmented
              label="Verb family"
              value={cat}
              onChange={handleCatChange}
              options={[
                { value: "regular", label: "Regular" },
                { value: "boot", label: "Boot" },
                { value: "cgz", label: "-car/-gar/-zar" },
                { value: "irreg", label: "Irregulars" },
              ]}
            />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Infinitive</div>
            <Segmented
              label="Verb"
              value={String(verbIdx)}
              onChange={(v) => setVerbIdx(Number(v))}
              options={verbList.map((v, i) => ({ value: String(i), label: v.label }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Subject Person ({PERSON_LABEL[person]})</div>
          <Segmented
            label="Subject person"
            value={person}
            onChange={setPerson}
            options={(["yo", "tú", "él", "nosotros", "vosotros", "ellos"] as const).map((p) => ({
              value: p,
              label: PERSON_SHORT[p],
            }))}
          />
        </div>

        {/* Live SVG Timeline */}
        <svg viewBox="0 0 560 110" className="h-auto w-full" role="img" aria-label={`Four-tense timeline for ${inf} in ${person}`}>
          <rect x="2" y="2" width="556" height="106" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.2" />
          <line x1="42" y1="36" x2="516" y2="36" stroke="var(--brand)" strokeWidth="2.5" />
          <polygon points="516,31 527,36 516,41" fill="var(--brand)" />

          <circle cx="80" cy="36" r="7" fill="var(--brand)" />
          <text x="80" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">PRETERITE</text>
          <text x="80" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ink)">{pret}</text>
          <text x="80" y="84" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Ayer…</text>

          <circle cx="212" cy="36" r="7" fill="var(--good)" />
          <text x="212" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--good)">PRESENT</text>
          <text x="212" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ink)">{pres}</text>
          <text x="212" y="84" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Normalmente…</text>

          <circle cx="348" cy="36" r="7" fill="var(--brand)" />
          <text x="348" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">NEAR FUTURE</text>
          <text x="348" y="64" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">{nearFut}</text>
          <text x="348" y="84" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Mañana…</text>

          <circle cx="480" cy="36" r="7" fill="var(--ink)" />
          <text x="480" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">SIMPLE FUTURE</text>
          <text x="480" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ink)">{simpFut}</text>
          <text x="480" y="84" textAnchor="middle" fontSize="10" fill="var(--ink-2)">El próximo año…</text>
        </svg>

        {/* Four Tense Cards */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">Preterite · Ayer…</div>
            <div className="mt-1 text-xl font-extrabold text-ink">{pret}</div>
            <div className="text-xs text-ink-2">{pretEn}</div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-good">Present · Normalmente…</div>
            <div className="mt-1 text-xl font-extrabold text-ink">{pres}</div>
            <div className="text-xs text-ink-2">{presEn}</div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">Immediate Future · Mañana…</div>
            <div className="mt-1 text-xl font-extrabold text-ink">{nearFut}</div>
            <div className="text-xs text-ink-2">{nearEn}</div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Simple Future · El año que viene…</div>
            <div className="mt-1 text-xl font-extrabold text-ink">{simpFut}</div>
            <div className="text-xs text-ink-2">{simpEn}</div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Irregular Preterite & Simple Future Stem Lab
// ===========================================================================

type LabMode = "explore" | "quiz";
type StemGroup = "drop-e" | "add-d" | "short-2" | "pret-kings";

interface StemRow {
  inf: string;
  stem: string;
  en: string;
  isHaber?: boolean;
}

const STEM_GROUPS: Record<StemGroup, { title: string; rule: string; rows: readonly StemRow[] }> = {
  "drop-e": {
    title: "Future: Drop the «e»",
    rule: "Drop the theme vowel -e- from the infinitive, then add -é, -ás, -á, -emos, -éis, -án.",
    rows: [
      { inf: "poder", stem: "podr-", en: "will be able to" },
      { inf: "querer", stem: "querr-", en: "will want" },
      { inf: "saber", stem: "sabr-", en: "will know" },
      { inf: "haber", stem: "habr-", en: "there will be (habrá)", isHaber: true },
    ],
  },
  "add-d": {
    title: "Future: Swap Vowel → «d»",
    rule: "Swap the theme vowel (-e- or -i-) for a crisp -d-, then attach -é, -ás, -á, -emos, -éis, -án.",
    rows: [
      { inf: "tener", stem: "tendr-", en: "will have" },
      { inf: "salir", stem: "saldr-", en: "will go out" },
      { inf: "venir", stem: "vendr-", en: "will come" },
      { inf: "poner", stem: "pondr-", en: "will put" },
    ],
  },
  "short-2": {
    title: "Future: Shortened 2",
    rule: "Drop -ce- or -ec- to create sleek 3-letter stems har- and dir-.",
    rows: [
      { inf: "hacer", stem: "har-", en: "will do / make" },
      { inf: "decir", stem: "dir-", en: "will say / tell" },
    ],
  },
  "pret-kings": {
    title: "Preterite: Zero-Accent Kings",
    rule: "None of these high-frequency irregular preterites carry ANY written accent!",
    rows: [
      { inf: "ir", stem: "fu-", en: "went (fui / fue)" },
      { inf: "tener", stem: "tuv-", en: "had (tuve / tuvo)" },
      { inf: "hacer", stem: "hic- / hiz-", en: "did / made (hice / hizo)" },
      { inf: "estar", stem: "estuv-", en: "was (estuve / estuvo)" },
      { inf: "ver", stem: "v-", en: "saw (vi / vio)" },
    ],
  },
};

interface QuickItem {
  prompt: string;
  options: readonly [string, string, string, string];
  correct: number;
  why: string;
}

const QUICK_CHECKS: readonly QuickItem[] = [
  {
    prompt: "tener · yo · Simple Future",
    options: ["teneré", "tendré", "tuve", "tendre"],
    correct: 1,
    why: "Add-D stem tendr- + accented -é → tendré.",
  },
  {
    prompt: "hacer · él/ella · Preterite",
    options: ["hico", "hació", "hizo", "hará"],
    correct: 2,
    why: "c → z before o in él/ella preterite, zero accents → hizo.",
  },
  {
    prompt: "poder · nosotros · Simple Future",
    options: ["podremos", "podrémos", "poderemos", "pudimos"],
    correct: 0,
    why: "Drop-E stem podr- + unaccented -emos → podremos (never accent -emos!).",
  },
  {
    prompt: "ir · yo · Preterite",
    options: ["fuí", "fue", "iré", "fui"],
    correct: 3,
    why: "Monosyllable irregular preterites take zero written accents → fui.",
  },
  {
    prompt: "salir · ellos · Simple Future",
    options: ["salirán", "saldrán", "salieron", "saldran"],
    correct: 1,
    why: "Add-D stem saldr- + accented -án → saldrán.",
  },
  {
    prompt: "haber · there will be · Simple Future",
    options: ["haberá", "hay", "habrá", "hubo"],
    correct: 2,
    why: "Drop-E stem habr- + accented -á → habrá.",
  },
  {
    prompt: "estar · yo · Preterite",
    options: ["estuve", "estuvé", "estoy", "estuvo"],
    correct: 0,
    why: "Strong irregular preterite stem estuv- + -e with zero accents → estuve.",
  },
  {
    prompt: "querer · tú · Simple Future",
    options: ["quererás", "quisiste", "querras", "querrás"],
    correct: 3,
    why: "Drop-E stem querr- (double r!) + accented -ás → querrás.",
  },
];

function IrregularStemTrainer() {
  const [mode, setMode] = useState<LabMode>("explore");
  const [group, setGroup] = useState<StemGroup>("add-d");
  const [person, setPerson] = useState<Person>("yo");
  const [qIdx, setQIdx] = useState<number>(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answered, setAnswered] = useState<number>(0);

  const grp = STEM_GROUPS[group];
  const isPretGroup = group === "pret-kings";
  const currentQ = QUICK_CHECKS[qIdx];

  const handlePick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    setAnswered((n) => n + 1);
    if (idx === currentQ.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setPicked(null);
    setQIdx((i) => (i + 1) % QUICK_CHECKS.length);
  };

  return (
    <WidgetFrame
      title="Irregular Preterite & Simple Future Stem Lab"
      tryThis={[
        "In **Explore**, compare **Swap Vowel → d** (*tendr-, saldr-, vendr-, pondr-*) for **yo** vs **nosotros** — spot when the accent disappears!",
        "Switch to **Quick Check** and aim for 8/8 on the trickiest Year 9 irregular stems.",
      ]}
      caption={
        mode === "explore" ? (
          <>
            <strong>Pattern Rule:</strong> {grp.rule}
          </>
        ) : (
          <>
            <strong>Trainer Feedback:</strong>{" "}
            {picked === null ? "Pick the exact conjugated form above (watch every accent mark!)." : currentQ.why}
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Lab mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "explore", label: "Explore Stem Families" },
            { value: "quiz", label: "Quick Check (8 Traps)" },
          ]}
        />

        {mode === "explore" ? (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="min-w-0 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Stem Family</div>
                <Segmented
                  label="Stem family"
                  value={group}
                  onChange={setGroup}
                  options={[
                    { value: "drop-e", label: "Drop -e-" },
                    { value: "add-d", label: "Add -d-" },
                    { value: "short-2", label: "Short 2" },
                    { value: "pret-kings", label: "Preterite" },
                  ]}
                />
              </div>
              <div className="min-w-0 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Person</div>
                <Segmented
                  label="Person"
                  value={person}
                  onChange={setPerson}
                  options={(["yo", "tú", "él", "nosotros", "vosotros", "ellos"] as const).map((p) => ({
                    value: p,
                    label: PERSON_SHORT[p],
                  }))}
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-line bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-2 text-xs uppercase text-ink-2">
                  <tr>
                    <th className="px-3 py-2">Infinitive</th>
                    <th className="px-3 py-2">Stem</th>
                    <th className="px-3 py-2">{isPretGroup ? `Preterite (${PERSON_SHORT[person]})` : `Simple Future (${PERSON_SHORT[person]})`}</th>
                    <th className="px-3 py-2">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {grp.rows.map((r) => {
                    const form = r.isHaber
                      ? "habrá"
                      : conjugate(r.inf, isPretGroup ? "preterite" : "future", person);
                    return (
                      <tr key={r.inf}>
                        <td className="px-3 py-2 font-bold text-ink">{r.inf}</td>
                        <td className="px-3 py-2 font-mono font-bold text-brand">{r.stem}</td>
                        <td className="px-3 py-2 text-base font-extrabold text-good">{form}</td>
                        <td className="px-3 py-2 text-xs text-ink-2">{r.en}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="rounded-xl border border-line bg-surface-2 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
                Challenge {qIdx + 1} of {QUICK_CHECKS.length}
              </div>
              <div className="mt-1 text-lg font-extrabold text-ink">{currentQ.prompt}</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {currentQ.options.map((opt, idx) => {
                  const isCorrect = idx === currentQ.correct;
                  const isChosen = picked === idx;
                  let cls = "border-line bg-surface text-ink hover:border-brand";
                  if (picked !== null) {
                    if (isCorrect) cls = "border-good bg-good/15 text-good";
                    else if (isChosen) cls = "border-bad bg-bad/15 text-bad";
                    else cls = "border-line bg-surface text-ink-2 opacity-60";
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handlePick(idx)}
                      className={`min-h-11 rounded-xl border-2 px-3 py-2 text-base font-extrabold transition ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {picked !== null ? (
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className={`text-sm font-bold ${picked === currentQ.correct ? "text-good" : "text-bad"}`}>
                    {picked === currentQ.correct ? "Spot on!" : `Watch out — correct answer: ${currentQ.options[currentQ.correct]}`}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white shadow-sm hover:opacity-90"
                  >
                    Next →
                  </button>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Score" value={`${score} / ${answered}`} tone={score === answered && answered > 0 ? "good" : "brand"} />
              <Readout label="Accuracy" value={answered ? `${Math.round((score / answered) * 100)}%` : "—"} tone="ink" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "four-tense-time-machine",
    title: "Four-Tense Time-Machine Transformer",
    blurb: "Pick any verb family and person to see Present, Preterite, Immediate Future, and Simple Future side by side on a live timeline.",
    Component: FourTenseTimeMachine,
  },
  {
    id: "irregular-stem-trainer",
    title: "Irregular Preterite & Simple Future Stem Lab",
    blurb: "Explore the Drop-E, Add-D, Short-2 future stems and zero-accent irregular preterites, then test yourself on 8 classic exam traps.",
    Component: IrregularStemTrainer,
  },
];
