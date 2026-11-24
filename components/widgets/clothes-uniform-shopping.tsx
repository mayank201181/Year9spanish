"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type GNum = "ms" | "fs" | "mp" | "fp";

interface GarmentOption {
  id: string;
  indef: "un" | "una" | "unos" | "unas";
  def: "el" | "la" | "los" | "las";
  noun: string;
  en: string;
  gn: GNum;
  shape: "dress" | "shirt" | "jacket" | "jeans" | "shoes" | "trainers";
  trapNote?: string;
}

const GARMENTS: readonly GarmentOption[] = [
  { id: "vestido", indef: "un", def: "el", noun: "vestido", en: "dress", gn: "ms", shape: "dress", trapNote: "GENDER TRAP: el vestido is MASCULINE singular!" },
  { id: "camiseta", indef: "una", def: "la", noun: "camiseta", en: "T-shirt", gn: "fs", shape: "shirt" },
  { id: "chaqueta", indef: "una", def: "la", noun: "chaqueta", en: "jacket", gn: "fs", shape: "jacket" },
  { id: "vaqueros", indef: "unos", def: "los", noun: "vaqueros", en: "jeans", gn: "mp", shape: "jeans" },
  { id: "zapatos", indef: "unos", def: "los", noun: "zapatos", en: "shoes", gn: "mp", shape: "shoes" },
  { id: "zapatillas", indef: "unas", def: "las", noun: "zapatillas", en: "trainers", gn: "fp", shape: "trainers" },
];

interface ColourOption {
  id: string;
  label: string;
  hex: string;
  forms: Record<GNum, string>;
  rule: string;
}

const COLOURS: readonly ColourOption[] = [
  { id: "rojo", label: "rojo", hex: "#dc2626", forms: { ms: "rojo", fs: "roja", mp: "rojos", fp: "rojas" }, rule: "4-form (-o / -a / -os / -as) colour adjective." },
  { id: "negro", label: "negro", hex: "#1f2937", forms: { ms: "negro", fs: "negra", mp: "negros", fp: "negras" }, rule: "4-form (-o / -a / -os / -as) colour adjective." },
  { id: "blanco", label: "blanco", hex: "#f1f5f9", forms: { ms: "blanco", fs: "blanca", mp: "blancos", fp: "blancas" }, rule: "4-form (-o / -a / -os / -as) colour adjective." },
  { id: "azul", label: "azul", hex: "#2563eb", forms: { ms: "azul", fs: "azul", mp: "azules", fp: "azules" }, rule: "2-form colour (ends in consonant): same m/f singular, +es in plural." },
  { id: "gris", label: "gris", hex: "#64748b", forms: { ms: "gris", fs: "gris", mp: "grises", fp: "grises" }, rule: "2-form colour (ends in consonant): gris → grises." },
  { id: "marron", label: "marrón", hex: "#854d0e", forms: { ms: "marrón", fs: "marrón", mp: "marrones", fp: "marrones" }, rule: "ACCENT RULE: marrón keeps its accent in singular, but DROPS it in plural (marrones)!" },
  { id: "marino", label: "azul marino", hex: "#1e3a8a", forms: { ms: "azul marino", fs: "azul marino", mp: "azul marino", fp: "azul marino" }, rule: "COMPOUND FREEZE: Two-word colour shades (azul marino) NEVER change for gender or plural!" },
];

type PatternKey = "liso" | "rayas" | "cuadros" | "lunares";
type TenseKey = "present" | "preterite" | "near" | "simple";

const PATTERN_LABEL: Record<PatternKey, (gn: GNum) => string> = {
  liso: (gn) => ({ ms: "liso", fs: "lisa", mp: "lisos", fp: "lisas" }[gn]),
  rayas: () => "de rayas",
  cuadros: () => "de cuadros",
  lunares: () => "de lunares",
};

const TENSE_LEAD: Record<TenseKey, { time: string; verb: string; en: string }> = {
  present: { time: "Normalmente", verb: "llevo", en: "Normally I wear" },
  preterite: { time: "Ayer", verb: "me puse", en: "Yesterday I put on" },
  near: { time: "Este sábado", verb: "voy a llevar", en: "This Saturday I am going to wear" },
  simple: { time: "Para la fiesta", verb: "me pondré", en: "For the party I will put on" },
};

function GarmentSvg({ shape, fill, pattern }: { shape: GarmentOption["shape"]; fill: string; pattern: PatternKey }) {
  const stroke = fill === "#f1f5f9" ? "#64748b" : "#0f172a";
  const patStroke = fill === "#f1f5f9" ? "#475569" : "rgba(255,255,255,0.55)";
  const patId = `garment-pat-${pattern}`;
  const actualFill = pattern === "liso" ? fill : `url(#${patId})`;

  return (
    <svg
      viewBox="0 0 220 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Live preview of selected Spanish garment, colour and pattern"
      className="w-full h-auto max-w-[200px] mx-auto"
    >
      <defs>
        <pattern id="garment-pat-rayas" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill={fill} />
          <line x1="0" y1="8" x2="16" y2="8" stroke={patStroke} strokeWidth="4" />
        </pattern>
        <pattern id="garment-pat-cuadros" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill={fill} />
          <line x1="0" y1="10" x2="20" y2="10" stroke={patStroke} strokeWidth="2.5" />
          <line x1="10" y1="0" x2="10" y2="20" stroke={patStroke} strokeWidth="2.5" />
        </pattern>
        <pattern id="garment-pat-lunares" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill={fill} />
          <circle cx="9" cy="9" r="3.2" fill={patStroke} />
        </pattern>
      </defs>
      <rect x="6" y="6" width="208" height="188" rx="16" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
      {shape === "shirt" ? (
        <path
          d="M72 34 L148 34 L182 68 L158 88 L144 74 L144 166 L76 166 L76 74 L62 88 L38 68 Z"
          fill={actualFill}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ) : null}
      {shape === "jacket" ? (
        <g>
          <path
            d="M70 30 L150 30 L184 74 L162 150 L146 146 L146 168 L74 168 L74 146 L58 150 L36 74 Z"
            fill={actualFill}
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <line x1="110" y1="54" x2="110" y2="168" stroke={stroke} strokeWidth="2" />
        </g>
      ) : null}
      {shape === "dress" ? (
        <path
          d="M84 32 L136 32 L144 68 L130 90 L166 172 L54 172 L90 90 L76 68 Z"
          fill={actualFill}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ) : null}
      {shape === "jeans" ? (
        <path
          d="M66 32 L154 32 L162 170 L122 170 L110 92 L98 170 L58 170 Z"
          fill={actualFill}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ) : null}
      {shape === "shoes" || shape === "trainers" ? (
        <g>
          <path
            d="M28 112 L54 88 L76 106 L104 114 Q112 118 106 130 L28 130 Z"
            fill={actualFill}
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M116 124 L142 100 L164 118 L192 126 Q200 130 194 142 L116 142 Z"
            fill={actualFill}
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {shape === "trainers" ? (
            <>
              <line x1="28" y1="130" x2="106" y2="130" stroke="#ffffff" strokeWidth="4" />
              <line x1="116" y1="142" x2="194" y2="142" stroke="#ffffff" strokeWidth="4" />
            </>
          ) : null}
        </g>
      ) : null}
    </svg>
  );
}

function OutfitAgreementWorkshop() {
  const [garmentId, setGarmentId] = useState<string>("vestido");
  const [colourId, setColourId] = useState<string>("rojo");
  const [pattern, setPattern] = useState<PatternKey>("rayas");
  const [tense, setTense] = useState<TenseKey>("present");

  const g = GARMENTS.find((x) => x.id === garmentId) ?? GARMENTS[0];
  const c = COLOURS.find((x) => x.id === colourId) ?? COLOURS[0];
  const agreedColour = c.forms[g.gn];
  const patText = PATTERN_LABEL[pattern](g.gn);
  const t = TENSE_LEAD[tense];
  const sentence = `${t.time} ${t.verb} ${g.indef} ${g.noun} ${agreedColour} ${patText}.`;

  const gnLabel =
    g.gn === "ms"
      ? "Masculine singular"
      : g.gn === "fs"
        ? "Feminine singular"
        : g.gn === "mp"
          ? "Masculine plural"
          : "Feminine plural";

  return (
    <WidgetFrame
      title="Outfit & Colour Agreement Workshop"
      tryThis={[
        "Pick **el vestido** (*dress*) + **rojo** — notice why it stays **un vestido rojo** (masculine!), NOT *una vestida roja*.",
        "Pick **los zapatos** + **marrón** — watch the accent vanish in **marrones**!",
        "Switch between **liso/a** (agrees!) and **de rayas / de cuadros / de lunares** (always invariable!), then test **azul marino**.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            {g.trapNote ? `${g.trapNote} ` : ""}
            {c.rule}
          </div>
          <div className="text-ink-2">
            Pattern rule:{" "}
            {pattern === "liso"
              ? `liso is a regular adjective so it agrees (${patText}).`
              : `${patText} starts with de + noun so it NEVER changes for gender or plural!`}
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-start">
        <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
          <GarmentSvg shape={g.shape} fill={c.hex} pattern={pattern} />
          <div className="flex flex-wrap gap-1.5 justify-center">
            {GARMENTS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setGarmentId(item.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  item.id === g.id
                    ? "bg-brand text-white"
                    : "border border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {item.def} {item.noun}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Colour (placed AFTER the noun)</div>
            <div className="flex flex-wrap gap-1.5">
              {COLOURS.map((col) => (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setColourId(col.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${
                    col.id === c.id
                      ? "bg-brand text-white"
                      : "border border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  <span
                    aria-hidden
                    className="inline-block h-3 w-3 rounded-full border border-ink/30"
                    style={{ backgroundColor: col.hex }}
                  />
                  {col.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Pattern</div>
            <Segmented
              label="Pattern"
              value={pattern}
              onChange={setPattern}
              options={[
                { value: "liso", label: "liso/a" },
                { value: "rayas", label: "de rayas" },
                { value: "cuadros", label: "de cuadros" },
                { value: "lunares", label: "de lunares" },
              ]}
            />
          </div>

          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Tense (4-Tense Switcher)</div>
            <Segmented
              label="Tense"
              value={tense}
              onChange={setTense}
              options={[
                { value: "present", label: "Present" },
                { value: "preterite", label: "Preterite" },
                { value: "near", label: "Near Fut." },
                { value: "simple", label: "Simple Fut." },
              ]}
            />
          </div>

          <Readout label="Live Spanish Outfit Sentence" value={sentence} tone="brand" />
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Noun Gender & Number" value={gnLabel} tone="ink" />
            <Readout label="Agreed Colour Form" value={agreedColour} tone="good" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type LabTab = "shop" | "debate";
type DistKey = "near" | "far";
type FitKey = "bien" | "grande" | "estrecho";

const DEM_TABLE: Record<DistKey, Record<GNum, string>> = {
  near: { ms: "este", fs: "esta", mp: "estos", fp: "estas" },
  far: { ms: "ese", fs: "esa", mp: "esos", fp: "esas" },
};
const DOP_TABLE: Record<GNum, string> = { ms: "lo", fs: "la", mp: "los", fp: "las" };

const PROS = [
  { id: "tiempo", label: "ahorra tiempo", es: "ahorra tiempo por la mañana e iguala a los alumnos" },
  { id: "acoso", label: "evita el acoso", es: "evita el acoso escolar y la presión de las marcas" },
  { id: "imagen", label: "buena imagen", es: "da una buena imagen del colegio y es práctico" },
] as const;

const CONS = [
  { id: "incomodo", label: "es incómodo", es: "es demasiado incómodo con el calor" },
  { id: "personalidad", label: "personalidad", es: "no permite expresar tu personalidad ni tu creatividad" },
  { id: "caro", label: "demasiado caro", es: "cuesta demasiado dinero y está pasado de moda" },
] as const;

const WISHES = [
  { id: "propia", label: "mi propia ropa", es: "Me gustaría llevar mi propia ropa de estilo deportivo." },
  { id: "vaqueros", label: "vaqueros y sudadera", es: "Me gustaría llevar vaqueros azules y una sudadera cómoda." },
  { id: "cortos", label: "pantalones cortos", es: "Me gustaría poder llevar pantalones cortos y zapatillas blancas." },
] as const;

function ShoppingAndUniformLab() {
  const [tab, setTab] = useState<LabTab>("shop");
  const [garmentId, setGarmentId] = useState<string>("vaqueros");
  const [dist, setDist] = useState<DistKey>("near");
  const [fit, setFit] = useState<FitKey>("bien");
  const [price, setPrice] = useState<number>(35);

  const [proId, setProId] = useState<string>("tiempo");
  const [conId, setConId] = useState<string>("personalidad");
  const [wishId, setWishId] = useState<string>("vaqueros");
  const [verdict, setVerdict] = useState<"favor" | "contra">("contra");

  const g = GARMENTS.find((x) => x.id === garmentId) ?? GARMENTS[3];
  const isPl = g.gn === "mp" || g.gn === "fp";
  const dem = DEM_TABLE[dist][g.gn];
  const capDem = dem[0].toUpperCase() + dem.slice(1);
  const dop = DOP_TABLE[g.gn];
  const costVerb = isPl ? "cuestan" : "cuesta";
  const fitVerb = isPl ? "quedan" : "queda";
  const fitAdj =
    fit === "bien"
      ? "genial"
      : fit === "grande"
        ? isPl
          ? "demasiado grandes"
          : "demasiado grande"
        : {
            ms: "demasiado estrecho",
            fs: "demasiado estrecha",
            mp: "demasiado estrechos",
            fp: "demasiado estrechas",
          }[g.gn];

  const decision = fit === "bien" ? `Me ${dop} llevo.` : `No me ${dop} llevo; ¿tiene otra talla?`;
  const priceTag = price <= 25 ? "¡Es una ganga!" : price >= 65 ? "Es demasiado caro." : "Tiene un buen precio.";

  const pro = PROS.find((p) => p.id === proId) ?? PROS[0];
  const con = CONS.find((c) => c.id === conId) ?? CONS[0];
  const wish = WISHES.find((w) => w.id === wishId) ?? WISHES[0];

  const debateParagraph = `Por un lado, el uniforme escolar ${pro.es}. Sin embargo, por otro lado, ${con.es}. En conclusión, estoy ${verdict === "favor" ? "a favor" : "en contra"} del uniforme. ${wish.es}`;

  return (
    <WidgetFrame
      title="Shopping Demonstratives (Este / Ese) & Uniform Debate Lab"
      tryThis={[
        "In **Shop Lab**, switch between **Near (Aquí)** and **Far (Allí)** — remember: *This & these have T’s (este/esta/estos/estas); that & those, no T goes (ese/esa/esos/esas)!*",
        "Compare **el vestido** (singular) vs **las zapatillas** (plural) and watch **cuesta → cuestan**, **queda → quedan**, and **probármelo → probármelas** echo together!",
        "Switch to **Uniform Debate** to assemble a balanced Top-Band Year 9 paragraph using *Por un lado… Sin embargo… Me gustaría…*.",
      ]}
      caption={
        tab === "shop" ? (
          <div className="space-y-1">
            <div className="font-bold text-ink">
              Four-way agreement chain for <strong>{g.def} {g.noun}</strong>: {dem} → {costVerb} → me {fitVerb} → probárme{dop} / me {dop} llevo!
            </div>
            <div className="text-ink-2">
              {g.gn === "ms"
                ? `Never write ${dist === "near" ? "esto" : "eso"} before a noun — masculine singular is ALWAYS ${dem} ${g.noun}!`
                : `Notice that demasiado stays invariable while ${fit === "estrecho" ? fitAdj : "the verb"} matches ${g.def} ${g.noun}.`}
            </div>
          </div>
        ) : (
          <div className="text-ink-2">
            Notice the higher-band details automatically built in: <strong>Por un lado… Sin embargo…</strong>, <strong>estoy a favor / en contra del uniforme</strong>, and <strong>e iguala a los alumnos</strong> (*y → e* + personal *a*).
          </div>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Lab mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "shop", label: "🛍️ Shop & Demonstratives Lab" },
            { value: "debate", label: "🏫 Uniform Debate Builder" },
          ]}
        />

        {tab === "shop" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
              <div className="flex flex-wrap gap-1.5">
                {GARMENTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGarmentId(item.id)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                      item.id === g.id
                        ? "bg-brand text-white"
                        : "border border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    {item.def} {item.noun}
                  </button>
                ))}
              </div>
              <Segmented
                label="Distance"
                value={dist}
                onChange={setDist}
                options={[
                  { value: "near", label: "Aquí (Near: este…)" },
                  { value: "far", label: "Allí (Far: ese…)" },
                ]}
              />
              <Segmented
                label="Fit"
                value={fit}
                onChange={setFit}
                options={[
                  { value: "bien", label: "Fits great" },
                  { value: "grande", label: "Too big" },
                  { value: "estrecho", label: "Too tight" },
                ]}
              />
              <Slider label="Price tag" value={price} min={15} max={90} step={5} onChange={setPrice} format={(v) => `${v} €`} />
            </div>

            <div className="min-w-0 space-y-2.5">
              <Readout label="Asking the Price" value={`¿Cuánto ${costVerb} ${dem} ${g.noun}?`} tone="brand" />
              <div className="rounded-xl border border-line bg-surface p-3 space-y-1 text-sm">
                <div>
                  <strong className="text-brand">Try on:</strong> ¿Puedo <strong>probárme{dop}</strong>?
                </div>
                <div>
                  <strong className="text-good">Fit:</strong> {capDem} {g.noun} me <strong>{fitVerb} {fitAdj}</strong>.
                </div>
                <div>
                  <strong className="text-ink">Price:</strong> {isPl ? "Cuestan" : "Cuesta"} <strong>{price} euros</strong>. {priceTag}
                </div>
                <div>
                  <strong className="text-brand">Decision:</strong> {decision}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="min-w-0 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
                <div className="text-xs font-bold uppercase tracking-wide text-good">1. Pick a PRO (Por un lado…)</div>
                <Segmented
                  label="Uniform pro"
                  value={proId}
                  onChange={setProId}
                  options={PROS.map((p) => ({ value: p.id, label: p.label }))}
                />
                <div className="text-xs font-bold uppercase tracking-wide text-bad pt-1">2. Pick a CON (Sin embargo…)</div>
                <Segmented
                  label="Uniform con"
                  value={conId}
                  onChange={setConId}
                  options={CONS.map((c) => ({ value: c.id, label: c.label }))}
                />
              </div>

              <div className="min-w-0 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
                <div className="text-xs font-bold uppercase tracking-wide text-brand">3. Your Verdict</div>
                <Segmented
                  label="Verdict"
                  value={verdict}
                  onChange={setVerdict}
                  options={[
                    { value: "favor", label: "Estoy a favor" },
                    { value: "contra", label: "Estoy en contra" },
                  ]}
                />
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2 pt-1">4. Ideal Outfit Wish</div>
                <Segmented
                  label="Wish"
                  value={wishId}
                  onChange={setWishId}
                  options={WISHES.map((w) => ({ value: w.id, label: w.label }))}
                />
              </div>
            </div>

            <div className="rounded-xl border border-brand/40 bg-surface p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-brand">Top-Band Balanced Uniform Paragraph</div>
              <p className="mt-1.5 text-base font-semibold leading-relaxed text-ink">{debateParagraph}</p>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "outfit-agreement-workshop",
    title: "Outfit & Colour Agreement Workshop",
    blurb: "Preview live garments while testing Spanish colour agreement, invariable patterns, and 4-tense fashion verbs.",
    Component: OutfitAgreementWorkshop,
  },
  {
    id: "shopping-uniform-lab",
    title: "Shopping Demonstratives (Este / Ese) & Uniform Debate Lab",
    blurb: "Master este/ese, quedar, costar and direct object pronouns in a shop, or assemble a balanced school uniform debate.",
    Component: ShoppingAndUniformLab,
  },
];
