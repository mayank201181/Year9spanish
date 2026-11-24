"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: Mercado Quantities & Euros Checkout Lab
// =============================================================================

interface MarketProduct {
  id: string;
  label: string;
  esBare: string;
  badArt: string;
  unitKind: "weight" | "dozen" | "loaf" | "liquid";
  unitPriceCents: number; // per kg, per dozen, per loaf, or per litre/bottle
  stall: string;
}

const PRODUCTS: readonly MarketProduct[] = [
  { id: "manzanas", label: "Manzanas", esBare: "manzanas", badArt: "las", unitKind: "weight", unitPriceCents: 240, stall: "la frutería" },
  { id: "fresas", label: "Fresas", esBare: "fresas", badArt: "las", unitKind: "weight", unitPriceCents: 480, stall: "la frutería" },
  { id: "jamon", label: "Jamón serrano", esBare: "jamón serrano", badArt: "el", unitKind: "weight", unitPriceCents: 2400, stall: "la carnicería" },
  { id: "queso", label: "Queso manchego", esBare: "queso manchego", badArt: "el", unitKind: "weight", unitPriceCents: 1600, stall: "la quesería" },
  { id: "huevos", label: "Huevos", esBare: "huevos", badArt: "los", unitKind: "dozen", unitPriceCents: 320, stall: "la pollería" },
  { id: "pan", label: "Pan", esBare: "pan", badArt: "el", unitKind: "loaf", unitPriceCents: 90, stall: "la panadería" },
  { id: "aceite", label: "Aceite de oliva", esBare: "aceite de oliva", badArt: "el", unitKind: "liquid", unitPriceCents: 640, stall: "el mercado" },
];

interface QtyOption {
  id: string;
  label: string;
  phraseEs: string;
  factor: number; // fraction of base unit
  gramsEquiv: number; // for SVG scale visual (0..1000)
  note: string;
}

const QTY_BY_KIND: Record<MarketProduct["unitKind"], readonly QtyOption[]> = {
  weight: [
    { id: "100g", label: "100 g", phraseEs: "cien gramos de", factor: 0.1, gramsEquiv: 100, note: "Exactly 100 uses cien (never ciento!)." },
    { id: "200g", label: "200 g", phraseEs: "doscientos gramos de", factor: 0.2, gramsEquiv: 200, note: "200 g = one-fifth (0.2) of a kilo." },
    { id: "250g", label: "250 g (¼ kg)", phraseEs: "un cuarto de kilo de", factor: 0.25, gramsEquiv: 250, note: "cuarto = quarter (never cuatro = 4!)." },
    { id: "500g", label: "500 g (½ kg)", phraseEs: "medio kilo de", factor: 0.5, gramsEquiv: 500, note: "Drop un before medio: medio kilo de..." },
    { id: "1kg", label: "1 kg", phraseEs: "un kilo de", factor: 1, gramsEquiv: 1000, note: "Never add an article after de!" },
  ],
  dozen: [
    { id: "half-doz", label: "6 (½ docena)", phraseEs: "media docena de", factor: 0.5, gramsEquiv: 500, note: "Feminine docena → media docena (no una!)." },
    { id: "one-doz", label: "12 (1 docena)", phraseEs: "una docena de", factor: 1, gramsEquiv: 1000, note: "Spanish MUST include de before huevos." },
  ],
  loaf: [
    { id: "1-loaf", label: "1 barra", phraseEs: "una barra de", factor: 1, gramsEquiv: 350, note: "barra is feminine → una barra de pan." },
    { id: "2-loaves", label: "2 barras", phraseEs: "dos barras de", factor: 2, gramsEquiv: 700, note: "Plural container → dos barras de pan." },
  ],
  liquid: [
    { id: "bottle", label: "1 botella", phraseEs: "una botella de", factor: 1, gramsEquiv: 750, note: "botella is feminine → una botella de..." },
    { id: "litre", label: "1 litro", phraseEs: "un litro de", factor: 1, gramsEquiv: 1000, note: "litro is masculine → un litro de..." },
  ],
};

function euroSpeech(cents: number): string {
  const euros = Math.floor(cents / 100);
  const rem = cents % 100;
  if (rem === 0) return `Son ${euros} ${euros === 1 ? "euro" : "euros"}.`;
  return `Son ${euros} ${euros === 1 ? "euro" : "euros"} con ${String(rem).padStart(2, "0")}.`;
}

function MercadoCheckoutLab() {
  const [prodId, setProdId] = useState<string>("manzanas");
  const [qtyIndex, setQtyIndex] = useState<number>(3);
  const [opener, setOpener] = useState<"Póngame" | "Quisiera" | "Quiero">("Póngame");
  const [packs, setPacks] = useState<number>(1);

  const product = PRODUCTS.find((p) => p.id === prodId) ?? PRODUCTS[0];
  const qtyOptions = QTY_BY_KIND[product.unitKind];
  const safeIdx = Math.min(qtyIndex, qtyOptions.length - 1);
  const qty = qtyOptions[safeIdx];

  const singleCents = Math.round(product.unitPriceCents * qty.factor);
  const totalCents = singleCents * packs;
  const totalStr = `${(totalCents / 100).toFixed(2).replace(".", ",")} €`;
  const unitStr = `${(product.unitPriceCents / 100).toFixed(2).replace(".", ",")} €`;
  const gaugeAngle = -90 + Math.min(180, (qty.gramsEquiv / 1000) * 180);
  const needleRad = (gaugeAngle * Math.PI) / 180;
  const nx = 140 + Math.sin(needleRad) * 62;
  const ny = 108 - Math.cos(needleRad) * 62;

  const packPrefix = packs > 1 ? `${packs} × ` : "";
  const spokenOrder = `${opener} ${qty.phraseEs} ${product.esBare}, por favor.`;

  return (
    <WidgetFrame
      title="Mercado Quantities & Euros Checkout Lab"
      tryThis={[
        "Switch between **Jamón serrano** (100 g) and **Fresas** (¼ kg) and watch how the weight fraction scales the euro price.",
        "Pick **Huevos** and compare *media docena de huevos* vs *una docena de huevos* — spot why *de* never disappears.",
        "Check the red warning pill to see the exact article trap (*el/la/los/las*) you MUST leave out after *de*.",
      ]}
      caption={
        <span>
          <strong>Grammar check:</strong> {qty.note} Notice how <em>{qty.phraseEs} {product.esBare}</em> omits{" "}
          <span className="font-bold text-bad line-through">{product.badArt}</span> after <em>de</em>!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose market item</div>
          <div className="flex flex-wrap gap-1.5">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setProdId(p.id);
                  setQtyIndex(0);
                }}
                className={`min-h-9 rounded-lg border px-3 py-1.5 text-sm font-bold transition ${
                  p.id === product.id
                    ? "border-brand bg-brand text-surface shadow-sm"
                    : "border-line bg-surface-2 text-ink hover:border-brand"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Quantity / packaging</div>
            <div className="flex flex-wrap gap-1.5">
              {qtyOptions.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setQtyIndex(i)}
                  className={`min-h-9 rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    i === safeIdx
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Polite opener</div>
            <Segmented
              label="Polite opener"
              value={opener}
              onChange={setOpener}
              options={[
                { value: "Póngame", label: "Póngame…" },
                { value: "Quisiera", label: "Quisiera…" },
                { value: "Quiero", label: "Quiero…" },
              ]}
            />
          </div>
        </div>

        <Stepper label="Repeat same order (multiplier)" value={packs} min={1} max={4} onChange={setPacks} />

        <div className="grid gap-3 sm:grid-cols-2 items-center">
          <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Spanish Stall Dialogue ({product.stall})</div>
            <p className="text-sm text-ink-2">
              <strong className="text-ink">Dependiente:</strong> Buenos días, ¿qué desea?
            </p>
            <p className="text-sm text-ink">
              <strong className="text-brand">Tú:</strong>{" "}
              <span className="font-bold">{packPrefix}{spokenOrder}</span>
            </p>
            <p className="text-sm text-ink-2">
              <strong className="text-ink">Dependiente:</strong> {euroSpeech(totalCents)}
            </p>
            <div className="rounded-lg bg-surface p-2 text-xs text-ink-2">
              <span className="font-bold text-good">✓ {qty.phraseEs} {product.esBare}</span>
              {" · "}
              <span className="font-bold text-bad">✗ {qty.phraseEs} {product.badArt} {product.esBare}</span>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface p-2 min-w-0">
            <svg viewBox="0 0 280 148" className="w-full h-auto" role="img" aria-label="Digital Spanish market scale">
              <path d="M 48 112 A 92 92 0 0 1 232 112" fill="none" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 48 112 A 92 92 0 0 1 232 112" fill="none" stroke="var(--brand-soft)" strokeWidth="10" strokeLinecap="round" />
              <line x1="140" y1="108" x2={nx.toFixed(1)} y2={ny.toFixed(1)} stroke="var(--brand)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="140" cy="108" r="7" fill="var(--ink)" />
              <text x="48" y="132" fontSize="10" fill="var(--ink-2)" textAnchor="middle">0</text>
              <text x="140" y="14" fontSize="10" fontWeight="700" fill="var(--ink-2)" textAnchor="middle">½ unit</text>
              <text x="232" y="132" fontSize="10" fill="var(--ink-2)" textAnchor="middle">1 unit</text>
              <text x="140" y="136" fontSize="13" fontWeight="800" fill="var(--brand)" textAnchor="middle">{totalStr}</text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Base price" value={unitStr} tone="ink" />
          <Readout label="Scale portion" value={qty.label} tone="brand" />
          <Readout label="Total to pay" value={totalStr} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Restaurant Menu & Complaint Dialogue Studio
// =============================================================================

interface ComplaintTarget {
  id: string;
  label: string;
  noun: string;
  plural: boolean;
  fem: boolean;
  kind: "food" | "tableware";
}

const TARGETS: readonly ComplaintTarget[] = [
  { id: "sopa", label: "la sopa", noun: "La sopa", plural: false, fem: true, kind: "food" },
  { id: "pollo", label: "el pollo", noun: "El pollo", plural: false, fem: false, kind: "food" },
  { id: "patatas", label: "las patatas", noun: "Las patatas", plural: true, fem: true, kind: "food" },
  { id: "tenedor", label: "el tenedor", noun: "El tenedor", plural: false, fem: false, kind: "tableware" },
  { id: "cuchara", label: "la cuchara", noun: "La cuchara", plural: false, fem: true, kind: "tableware" },
  { id: "vasos", label: "dos vasos", noun: "dos vasos", plural: true, fem: false, kind: "tableware" },
];

type IssueKind = "cold" | "salty" | "dirty" | "missing";

function buildComplaint(target: ComplaintTarget, issue: IssueKind): { es: string; en: string; waiter: string; grammar: string } {
  if (issue === "missing") {
    const verb = target.plural ? "faltan" : "falta";
    const indef = target.plural
      ? target.noun
      : target.fem
        ? `una ${target.label.slice(3)}`
        : `un ${target.label.slice(3)}`;
    return {
      es: `Perdone, camarero, ${verb} ${indef}.`,
      en: `Excuse me, waiter, ${target.plural ? `${target.label} are` : `a ${target.label.slice(3)} is`} missing.`,
      waiter: `Lo siento mucho, ahora mismo le traigo ${indef}.`,
      grammar: `${target.plural ? "Plural" : "Singular"} missing item → use **${verb}** (${target.plural ? "faltan" : "falta"}).`,
    };
  }
  const estar = target.plural ? "están" : "está";
  const adjRoot: Record<Exclude<IssueKind, "missing">, [string, string, string, string, string]> = {
    cold: ["frío", "fría", "fríos", "frías", "cold"],
    salty: ["demasiado salado", "demasiado salada", "demasiado salados", "demasiado saladas", "too salty"],
    dirty: ["sucio", "sucia", "sucios", "sucias", "dirty"],
  };
  const [m, f, mp, fp, adjEn] = adjRoot[issue];
  const adj = target.plural ? (target.fem ? fp : mp) : target.fem ? f : m;
  const subj = target.id === "vasos" ? "Los vasos" : target.noun;
  return {
    es: `Perdone, camarero, ${subj.toLowerCase()} ${estar} ${adj}.`,
    en: `Excuse me, waiter, ${subj.toLowerCase()} ${target.plural ? "are" : "is"} ${adjEn}.`,
    waiter: "Disculpe las molestias, se lo cambio inmediatamente.",
    grammar: `Temporary state → **${estar}** (ESTAR, never ser!) + ${target.fem ? "feminine" : "masculine"} ${target.plural ? "plural" : "singular"} **${adj}**.`,
  };
}

function RestaurantDialogueStudio() {
  const [mode, setMode] = useState<"order" | "complain">("order");
  const [starter, setStarter] = useState<string>("la sopa de tomate");
  const [mainDish, setMainDish] = useState<string>("la paella de mariscos");
  const [dessert, setDessert] = useState<string>("el helado de fresa");
  const [drink, setDrink] = useState<string>("agua sin gas");
  const [targetId, setTargetId] = useState<string>("sopa");
  const [issue, setIssue] = useState<IssueKind>("cold");

  const target = TARGETS.find((t) => t.id === targetId) ?? TARGETS[0];
  const complaint = buildComplaint(target, issue);

  return (
    <WidgetFrame
      title="Restaurant Menu & Complaint Dialogue Studio"
      tryThis={[
        "In **Order Menú** mode, notice the colour-coded **3 De’s and a Para** pattern across all four courses.",
        "Switch to **Polite Complaint** mode and toggle *la sopa* → *las patatas* → *dos vasos* to watch **está/están**, **falta/faltan** and adjective endings lock in automatically.",
      ]}
      caption={
        mode === "order" ? (
          <span>
            <strong>3 De’s and a Para:</strong> Courses take <strong>de</strong> (<em>de primer plato, de segundo plato, de postre</em>), while drinks switch to <strong>para</strong> (<em>para beber</em>).
          </span>
        ) : (
          <span>
            <strong>Complaint rule:</strong> {complaint.grammar.replace(/\*\*/g, "")}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Restaurant studio mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "order", label: "🍽️ Order Menú del Día" },
            { value: "complain", label: "⚠️ Polite Complaint" },
          ]}
        />

        {mode === "order" ? (
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-brand">De primer plato</div>
                <Segmented
                  label="Starter"
                  value={starter}
                  onChange={setStarter}
                  options={[
                    { value: "la sopa de tomate", label: "Sopa" },
                    { value: "el gazpacho", label: "Gazpacho" },
                    { value: "la ensalada mixta", label: "Ensalada" },
                  ]}
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-brand">De segundo plato</div>
                <Segmented
                  label="Main course"
                  value={mainDish}
                  onChange={setMainDish}
                  options={[
                    { value: "la paella de mariscos", label: "Paella" },
                    { value: "el pollo asado", label: "Pollo" },
                    { value: "la tortilla española", label: "Tortilla" },
                  ]}
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-brand">De postre</div>
                <Segmented
                  label="Dessert"
                  value={dessert}
                  onChange={setDessert}
                  options={[
                    { value: "el helado de fresa", label: "Helado" },
                    { value: "los churros", label: "Churros" },
                    { value: "fruta fresca", label: "Fruta" },
                  ]}
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-good">Para beber</div>
                <Segmented
                  label="Drink"
                  value={drink}
                  onChange={setDrink}
                  options={[
                    { value: "agua sin gas", label: "Agua sin gas" },
                    { value: "zumo de naranja", label: "Zumo" },
                    { value: "agua con gas", label: "Con gas" },
                  ]}
                />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-2 text-sm">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Complete Spanish Order</div>
              <p className="text-ink leading-relaxed">
                <strong>Quisiera el menú del día, por favor.</strong>{" "}
                <span className="font-bold text-brand">De</span> primer plato, {starter}.{" "}
                <span className="font-bold text-brand">De</span> segundo plato, {mainDish}.{" "}
                <span className="font-bold text-brand">De</span> postre, {dessert}. Y{" "}
                <span className="font-bold text-good">para</span> beber, {drink}.
              </p>
              <p className="text-xs text-ink-2">
                <strong>Camarero:</strong> ¡Perfecto! Enseguida les traigo la bebida y el primer plato.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Select item at your table</div>
              <div className="flex flex-wrap gap-1.5">
                {TARGETS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTargetId(t.id)}
                    className={`min-h-9 rounded-lg border px-3 py-1 text-xs font-bold transition ${
                      t.id === target.id
                        ? "border-brand bg-brand text-surface"
                        : "border-line bg-surface-2 text-ink hover:border-brand"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Choose problem</div>
              <Segmented
                label="Problem type"
                value={issue}
                onChange={setIssue}
                options={[
                  { value: "cold", label: "Cold (frío/a)" },
                  { value: "salty", label: "Too salty (salado/a)" },
                  { value: "dirty", label: "Dirty (sucio/a)" },
                  { value: "missing", label: "Missing (falta/n)" },
                ]}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-2 text-sm">
              <p className="font-bold text-ink">🗣️ Cliente: {complaint.es}</p>
              <p className="text-xs text-ink-2">English: {complaint.en}</p>
              <p className="text-sm text-good">👨‍🍳 Camarero: {complaint.waiter}</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Key verb" value={issue === "missing" ? (target.plural ? "faltan" : "falta") : target.plural ? "están" : "está"} tone="brand" />
              <Readout label="Gender & number" value={`${target.fem ? "Fem." : "Masc."} ${target.plural ? "Plural" : "Singular"}`} tone="ink" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "mercado-checkout-lab",
    title: "Mercado Quantities & Euros Checkout Lab",
    blurb: "Build authentic Spanish market weights and containers, dodge the article trap after de, and check euro totals live.",
    Component: MercadoCheckoutLab,
  },
  {
    id: "restaurant-dialogue-studio",
    title: "Restaurant Menu & Complaint Dialogue Studio",
    blurb: "Practise ordering a 3-course menú del día and handling cold food, dirty cutlery or missing tableware with exact agreement.",
    Component: RestaurantDialogueStudio,
  },
];
