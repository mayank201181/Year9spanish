"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

interface Hotspot {
  id: string;
  art: "el" | "la" | "los" | "las";
  noun: string;
  en: string;
  plural: boolean;
  cx: number;
  cy: number;
  note: string;
}

const HOTSPOTS: readonly Hotspot[] = [
  { id: "cabeza", art: "la", noun: "cabeza", en: "head", plural: false, cx: 130, cy: 36, note: "Feminine singular → duele + la (never mi!)." },
  { id: "oidos", art: "los", noun: "oídos", en: "inner ears", plural: true, cx: 158, cy: 40, note: "Plural masculine → duelen + los. Always use oído (inner ear) for earache!" },
  { id: "garganta", art: "la", noun: "garganta", en: "throat", plural: false, cx: 130, cy: 66, note: "Feminine singular → duele + la." },
  { id: "estomago", art: "el", noun: "estómago", en: "stomach", plural: false, cx: 130, cy: 134, note: "Masculine singular with accent on ó → duele + el estómago." },
  { id: "espalda", art: "la", noun: "espalda", en: "back", plural: false, cx: 102, cy: 112, note: "Feminine singular → duele + la espalda." },
  { id: "brazo", art: "el", noun: "brazo", en: "arm", plural: false, cx: 80, cy: 118, note: "Masculine singular → duele + el brazo." },
  { id: "mano", art: "la", noun: "mano", en: "hand", plural: false, cx: 56, cy: 162, note: "GENDER TRAP! Mano ends in -o but is FEMININE → la mano!" },
  { id: "dientes", art: "los", noun: "dientes", en: "teeth", plural: true, cx: 104, cy: 46, note: "Masculine plural → duelen + los dientes." },
  { id: "rodillas", art: "las", noun: "rodillas", en: "knees", plural: true, cx: 114, cy: 224, note: "Feminine plural → duelen + las rodillas." },
  { id: "tobillo", art: "el", noun: "tobillo", en: "ankle", plural: false, cx: 148, cy: 266, note: "Masculine singular → duele + el tobillo." },
  { id: "pies", art: "los", noun: "pies", en: "feet", plural: true, cx: 116, cy: 286, note: "Masculine plural → duelen + los pies." },
];

type PersonKey = "me" | "te" | "sofia" | "nos" | "padres";
type TenseKey = "present" | "preterite";
type IntensityKey = "none" | "poco" | "mucho";

const PERSON_META: Record<PersonKey, { lead: string; iop: string; enPoss: string }> = {
  me: { lead: "", iop: "me", enPoss: "My" },
  te: { lead: "", iop: "te", enPoss: "Your (tú)" },
  sofia: { lead: "A Sofía ", iop: "le", enPoss: "Sofía’s" },
  nos: { lead: "", iop: "nos", enPoss: "Our" },
  padres: { lead: "A mis padres ", iop: "les", enPoss: "My parents’" },
};

function DolerBodyMapWidget() {
  const [partId, setPartId] = useState<string>("cabeza");
  const [person, setPerson] = useState<PersonKey>("me");
  const [tense, setTense] = useState<TenseKey>("present");
  const [intensity, setIntensity] = useState<IntensityKey>("none");

  const part = HOTSPOTS.find((h) => h.id === partId) ?? HOTSPOTS[0];
  const p = PERSON_META[person];
  const verb =
    tense === "present"
      ? part.plural
        ? "duelen"
        : "duele"
      : part.plural
        ? "dolieron"
        : "dolió";
  const intensEs = intensity === "mucho" ? " mucho" : intensity === "poco" ? " un poco" : "";
  const intensEn = intensity === "mucho" ? " a lot" : intensity === "poco" ? " a bit" : "";
  const rawSentence = `${tense === "preterite" ? "Ayer " : ""}${p.lead}${p.iop} ${verb}${intensEs} ${part.art} ${part.noun}.`;
  const sentence = rawSentence[0].toUpperCase() + rawSentence.slice(1);
  const enVerb = tense === "preterite" ? "hurt" : part.plural ? "hurt" : "hurts";
  const english = `${tense === "preterite" ? "Yesterday, " : ""}${p.enPoss} ${part.en} ${enVerb}${intensEn}.`;

  return (
    <WidgetFrame
      title="Interactive Body Map & Me duele(n) Builder"
      tryThis={[
        "Click **la mano** (left hand) — notice why it uses **la**, NOT *el*!",
        "Switch between **la cabeza** (singular) and **los oídos / los pies** (plural) and watch **duele** flip to **duelen**.",
        "Switch tense to **Preterite (Ayer)** and compare **dolió** vs **dolieron**.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">{part.note}</div>
          <div className="text-ink-2">
            Notice that Spanish NEVER uses <em>mi / tu / su</em> here — the pronoun <strong>{p.iop}</strong> already names the owner, and <strong>{intensity === "mucho" ? "mucho (never muy!)" : "the verb"}</strong> agrees strictly with the body part.
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
        <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 260 310"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive human figure for selecting Spanish body parts"
            className="w-full h-auto max-w-[240px] mx-auto"
          >
            <circle cx="130" cy="40" r="24" fill="var(--surface)" stroke="var(--line)" strokeWidth="2.5" />
            <rect x="118" y="62" width="24" height="14" rx="4" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
            <rect x="94" y="76" width="72" height="92" rx="18" fill="var(--surface)" stroke="var(--line)" strokeWidth="2.5" />
            <line x1="94" y1="88" x2="58" y2="156" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" />
            <line x1="166" y1="88" x2="202" y2="156" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" />
            <line x1="114" y1="168" x2="114" y2="278" stroke="var(--line)" strokeWidth="16" strokeLinecap="round" />
            <line x1="146" y1="168" x2="146" y2="278" stroke="var(--line)" strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="114" cy="288" rx="14" ry="8" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
            <ellipse cx="146" cy="288" rx="14" ry="8" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />

            {HOTSPOTS.map((h) => {
              const active = h.id === part.id;
              return (
                <g
                  key={h.id}
                  onClick={() => setPartId(h.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${h.art} ${h.noun} (${h.en})`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPartId(h.id);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={h.cx}
                    cy={h.cy}
                    r={active ? 11 : 7.5}
                    fill={active ? "var(--brand)" : "var(--surface)"}
                    stroke={active ? "var(--ink)" : "var(--brand)"}
                    strokeWidth={active ? 2.5 : 2}
                  />
                  {active ? <circle cx={h.cx} cy={h.cy} r={4} fill="var(--surface)" /> : null}
                </g>
              );
            })}
          </svg>
          <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setPartId(h.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  h.id === part.id
                    ? "bg-brand text-white"
                    : "border border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {h.art} {h.noun}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Who hurts?</div>
            <Segmented
              label="Person"
              value={person}
              onChange={setPerson}
              options={[
                { value: "me", label: "Me" },
                { value: "te", label: "Te" },
                { value: "sofia", label: "A Sofía le" },
                { value: "nos", label: "Nos" },
                { value: "padres", label: "A mis padres les" },
              ]}
            />
          </div>

          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Tense</div>
            <Segmented
              label="Tense"
              value={tense}
              onChange={setTense}
              options={[
                { value: "present", label: "Present (Ahora)" },
                { value: "preterite", label: "Preterite (Ayer)" },
              ]}
            />
          </div>

          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Intensity</div>
            <Segmented
              label="Intensity"
              value={intensity}
              onChange={setIntensity}
              options={[
                { value: "none", label: "None" },
                { value: "poco", label: "un poco" },
                { value: "mucho", label: "mucho" },
              ]}
            />
          </div>

          <Readout label="Built Spanish Sentence" value={sentence} tone="brand" />
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Number → Verb" value={`${part.plural ? "Plural" : "Singular"} → ${verb}`} tone="good" />
            <Readout label="Article (Not mi!)" value={`${part.art} ${part.noun}`} tone="ink" />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-sm text-ink-2">
            English meaning: <strong className="text-ink">{english}</strong>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

interface ClinicCase {
  id: string;
  label: string;
  patientSymptom: (fem: boolean) => string;
  extraState: (fem: boolean) => string;
  remedy: string;
  advice: string;
  grammarNote: string;
}

const CLINIC_CASES: readonly ClinicCase[] = [
  {
    id: "tos",
    label: "Sore throat & cough",
    patientSymptom: () => "Me duele la garganta",
    extraState: (fem) => `tengo tos y estoy ${fem ? "resfriada" : "resfriado"}`,
    remedy: "el jarabe para la tos",
    advice: "Tienes que tomar este jarabe dos veces al día y beber mucha agua.",
    grammarNote: "tener + tos (noun, no gender change) vs estar + resfriado/a (adjective agrees with speaker!).",
  },
  {
    id: "fiebre",
    label: "Fever & dizziness",
    patientSymptom: () => "Tengo fiebre",
    extraState: (fem) => `estoy ${fem ? "mareada y cansada" : "mareado y cansado"}`,
    remedy: "las pastillas (analgésicos)",
    advice: "Debes tomar una pastilla cada ocho horas y descansar en cama.",
    grammarNote: "tener fiebre drops una; estar mareado/a & cansado/a switch -o/-a for gender.",
  },
  {
    id: "quemadura",
    label: "Sunburn on back",
    patientSymptom: () => "Me duele la espalda",
    extraState: () => "tengo una quemadura de sol",
    remedy: "la crema / pomada calmante",
    advice: "Debes ponerte esta crema dos veces al día y evitar el sol.",
    grammarNote: "Countable injury keeps una (una quemadura); ponerse takes -te for informal tú.",
  },
  {
    id: "corte",
    label: "Cut finger",
    patientSymptom: () => "Me duele el dedo",
    extraState: () => "me he cortado el dedo cocinando",
    remedy: "una tirita y desinfectante",
    advice: "Hay que limpiar bien la herida y ponerse una tirita limpia.",
    grammarNote: "In me he cortado, the participle after haber NEVER changes to -a even for female speakers!",
  },
  {
    id: "tobillo",
    label: "Sprained ankle",
    patientSymptom: () => "Me duele el tobillo",
    extraState: () => "me he torcido el tobillo jugando al fútbol",
    remedy: "una venda y analgésicos",
    advice: "Tienes que llevar esta venda y no hacer deporte durante una semana.",
    grammarNote: "Me he torcido el tobillo uses definite article el (never mi) and invariable participle torcido.",
  },
  {
    id: "oidos",
    label: "Earache (both ears)",
    patientSymptom: () => "Me duelen los oídos",
    extraState: (fem) => `estoy ${fem ? "agotada" : "agotado"} y tengo escalofríos`,
    remedy: "las gotas para los oídos",
    advice: "Debes ponerte dos gotas en cada oído y pedir cita en el centro de salud.",
    grammarNote: "Los oídos (inner ears, plural) triggers duelen, and agotado/a agrees with the speaker.",
  },
];

type GenderKey = "m" | "f";
type UnitKey = "horas" | "días" | "semanas";
type FrameKey = "desde-hace" | "hace-que";

function FarmaciaSimulatorWidget() {
  const [caseId, setCaseId] = useState<string>("tos");
  const [gender, setGender] = useState<GenderKey>("f");
  const [count, setCount] = useState<number>(3);
  const [unit, setUnit] = useState<UnitKey>("días");
  const [frame, setFrame] = useState<FrameKey>("desde-hace");

  const c = CLINIC_CASES.find((x) => x.id === caseId) ?? CLINIC_CASES[0];
  const fem = gender === "f";
  const unitLabel =
    count === 1
      ? unit === "horas"
        ? "una hora"
        : unit === "días"
          ? "un día"
          : "una semana"
      : `${count} ${unit}`;

  const mainSymptom = c.patientSymptom(fem);
  const durationLine =
    frame === "desde-hace"
      ? `${mainSymptom} desde hace ${unitLabel}`
      : `Hace ${unitLabel} que ${mainSymptom.toLowerCase()}`;

  const patientFull = `${durationLine} y ${c.extraState(fem)}.`;

  return (
    <WidgetFrame
      title="Farmacia Simulator: Desde hace, Gender & Remedies"
      tryThis={[
        "Toggle **Male (-o)** vs **Female (-a)** on *Fever & dizziness* and on *Cut finger* — notice which words change and why *cortado* stays *-o*!",
        "Flip between **Present + desde hace** and **Hace … que + Present** — both lock the symptom verb into the Present tense!",
        "Set the stepper to **1** vs **3** and notice *un día / una semana* vs *3 días / 3 semanas*.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">Grammar spotlight: {c.grammarNote}</div>
          <div className="text-ink-2">
            Ongoing duration in Spanish ALWAYS stays in the <strong>Present tense</strong> — never translate <em>I have had</em> with the past tense here!
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {CLINIC_CASES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCaseId(item.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                item.id === c.id
                  ? "bg-brand text-white"
                  : "border border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Segmented
              label="Patient gender"
              value={gender}
              onChange={setGender}
              options={[
                { value: "m", label: "Patient: Male (-o)" },
                { value: "f", label: "Patient: Female (-a)" },
              ]}
            />
            <Stepper label="Duration number" value={count} min={1} max={7} onChange={setCount} />
            <Segmented
              label="Time unit"
              value={unit}
              onChange={setUnit}
              options={[
                { value: "horas", label: "hora(s)" },
                { value: "días", label: "día(s)" },
                { value: "semanas", label: "semana(s)" },
              ]}
            />
            <Segmented
              label="Duration grammar frame"
              value={frame}
              onChange={setFrame}
              options={[
                { value: "desde-hace", label: "Present + desde hace" },
                { value: "hace-que", label: "Hace … que + Present" },
              ]}
            />
          </div>

          <div className="min-w-0 space-y-3">
            <div className="rounded-xl border border-brand/40 bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-brand">Paciente (You)</div>
              <p className="mt-1 text-base font-bold text-ink">{patientFull}</p>
            </div>
            <div className="rounded-xl border border-good/40 bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-good">Farmacéutico/a (Advice)</div>
              <p className="mt-1 text-sm font-semibold text-ink">{c.advice}</p>
            </div>
            <Readout label="Recommended Spain-Standard Remedy" value={c.remedy} tone="good" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "doler-body-map",
    title: "Interactive Body Map & Me duele(n) Builder",
    blurb: "Click any body part and vary person, tense and intensity to master doler agreement and article traps.",
    Component: DolerBodyMapWidget,
  },
  {
    id: "farmacia-remedy-lab",
    title: "Farmacia Symptom-to-Remedy & Desde hace Simulator",
    blurb: "Build authentic pharmacy dialogues while testing gender agreement, Present + desde hace, and Spain-standard remedies.",
    Component: FarmaciaSimulatorWidget,
  },
];
