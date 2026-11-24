"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type ReceptionMode = "booking" | "complaint";
type RoomType = "individual" | "doble" | "familiar";
type BoardType = "desayuno" | "media" | "completa";
type FeatureType = "mar" | "montana" | "balcon";
type ProblemType = "ascensor" | "sucia" | "agua" | "toallas" | "aire";
type ActionType = "cambiar" | "reparar" | "director";

const ROOM_INFO: Record<RoomType, { label: string; es: string; en: string; baseEur: number }> = {
  individual: { label: "individual", es: "una habitación individual", en: "a single room", baseEur: 75 },
  doble: { label: "doble", es: "una habitación doble", en: "a double room", baseEur: 110 },
  familiar: { label: "familiar", es: "una habitación familiar", en: "a family room", baseEur: 155 },
};

const BOARD_INFO: Record<BoardType, { label: string; es: string; en: string; extraEur: number }> = {
  desayuno: { label: "B&B", es: "en alojamiento y desayuno", en: "on bed and breakfast", extraEur: 0 },
  media: { label: "media pensión", es: "en media pensión", en: "on half board", extraEur: 25 },
  completa: { label: "pensión completa", es: "en pensión completa", en: "on full board", extraEur: 45 },
};

const FEATURE_INFO: Record<FeatureType, { label: string; es: string; en: string; rule: string }> = {
  mar: { label: "vistas al mar", es: "con vistas al mar", en: "with sea views", rule: "a + el mar → al mar" },
  montana: { label: "vistas montaña", es: "con vistas a la montaña", en: "with mountain views", rule: "a la montaña (fem.)" },
  balcon: { label: "balcón", es: "con balcón y baño propio", en: "with a balcony and en-suite", rule: "balcón (accent on -ón)" },
};

const PROBLEM_INFO: Record<ProblemType, { label: string; es: string; en: string; replyEs: string; grammar: string }> = {
  ascensor: {
    label: "ascensor",
    es: "el ascensor no funciona",
    en: "the lift does not work",
    replyEs: "Lo siento mucho, el técnico va a reparar el ascensor hoy mismo.",
    grammar: "singular → no funciona",
  },
  sucia: {
    label: "sucia",
    es: "mi habitación está sucia y las sábanas están sucias",
    en: "my room is dirty and the sheets are dirty",
    replyEs: "Mil disculpas, voy a enviar al equipo de limpieza inmediatamente.",
    grammar: "estar (está sucia / están sucias)",
  },
  agua: {
    label: "agua caliente",
    es: "no hay agua caliente en la ducha",
    en: "there is no hot water in the shower",
    replyEs: "Qué pena, vamos a revisar la caldera en cinco minutos.",
    grammar: "no hay + noun (no ningún)",
  },
  toallas: {
    label: "toallas",
    es: "faltan dos toallas limpias en el baño",
    en: "two clean towels are missing in the bathroom",
    replyEs: "Enseguida le subimos dos toallas limpias a su habitación.",
    grammar: "plural → faltan (sg. = falta)",
  },
  aire: {
    label: "aire acond.",
    es: "el aire acondicionado está roto y hace mucho calor",
    en: "the air conditioning is broken and it is very hot",
    replyEs: "Lo lamento, puedo ofrecerle otra habitación más fresca.",
    grammar: "estar + masc. roto",
  },
};

const ACTION_INFO: Record<ActionType, { label: string; es: string; en: string }> = {
  cambiar: { label: "cambiar habitación", es: "Quiero cambiar de habitación, por favor.", en: "I want to change rooms, please." },
  reparar: { label: "reparar", es: "¿Puede solucionarlo hoy, por favor?", en: "Can you fix it today, please?" },
  director: { label: "hablar director", es: "Quiero hablar con el director y pedir una hoja de reclamaciones.", en: "I want to speak with the manager and ask for a complaint form." },
};

const NIGHT_WORDS = ["", "una noche", "dos noches", "tres noches", "cuatro noches", "cinco noches", "seis noches", "siete noches"];

function HotelReceptionStudio() {
  const [mode, setMode] = useState<ReceptionMode>("booking");
  const [room, setRoom] = useState<RoomType>("doble");
  const [nights, setNights] = useState<number>(3);
  const [board, setBoard] = useState<BoardType>("media");
  const [feature, setFeature] = useState<FeatureType>("mar");
  const [problem, setProblem] = useState<ProblemType>("sucia");
  const [action, setAction] = useState<ActionType>("cambiar");

  const r = ROOM_INFO[room];
  const b = BOARD_INFO[board];
  const f = FEATURE_INFO[feature];
  const p = PROBLEM_INFO[problem];
  const act = ACTION_INFO[action];

  const perNight = r.baseEur + b.extraEur;
  const total = perNight * nights;
  const nightWord = NIGHT_WORDS[nights] ?? `${nights} noches`;

  return (
    <WidgetFrame
      title="Hotel Booking & Complaint Role-Play Studio"
      tryThis={[
        "In **Booking**, change the number of nights and spot **para [X] noches** vs **por noche**.",
        "Switch to **Complaint** and cycle through **sucia**, **toallas** and **aire acond.** to compare *estar*, *faltan* and *no funciona*.",
        "Read both Guest and Receptionist lines aloud to rehearse Year 9 speaking intonation!",
      ]}
      caption={
        mode === "booking" ? (
          <>
            <strong>Key booking rule:</strong> Use <em>para</em> for the length of your stay (<em>para {nightWord}</em>)
            and <em>por</em> for the nightly rate (<em>por noche</em>).
          </>
        ) : (
          <>
            <strong>Key complaint rule:</strong> Open politely with <em>Perdone</em>, use <em>estar</em> for temporary
            states (<em>está sucia / está roto</em>), and finish with a clear request.
          </>
        )
      }
    >
      <div className="space-y-4 min-w-0">
        <Segmented
          label="Role-play mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "booking", label: "🛎️ Polite Booking" },
            { value: "complaint", label: "⚠️ Polite Complaint" },
          ]}
        />

        {mode === "booking" ? (
          <div className="space-y-3 min-w-0">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Room Type</div>
                <Segmented
                  label="Room type"
                  value={room}
                  onChange={setRoom}
                  options={[
                    { value: "individual", label: "individual" },
                    { value: "doble", label: "doble" },
                    { value: "familiar", label: "familiar" },
                  ]}
                />
              </div>
              <div className="rounded-xl border border-line bg-surface-2 px-3 py-2.5 flex items-center">
                <div className="w-full">
                  <Stepper label="Length of stay (nights)" value={nights} min={1} max={7} onChange={setNights} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Board Option</div>
                <Segmented
                  label="Board option"
                  value={board}
                  onChange={setBoard}
                  options={[
                    { value: "desayuno", label: "B&B" },
                    { value: "media", label: "media pensión" },
                    { value: "completa", label: "pensión completa" },
                  ]}
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Room Feature</div>
                <Segmented
                  label="Room feature"
                  value={feature}
                  onChange={setFeature}
                  options={[
                    { value: "mar", label: "vistas al mar" },
                    { value: "montana", label: "montaña" },
                    { value: "balcon", label: "balcón" },
                  ]}
                />
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="rounded-xl border-2 border-brand bg-brand-soft p-3.5">
                <div className="text-xs font-bold uppercase tracking-wide text-brand">Huésped (Guest)</div>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-ink">
                  Buenos días, quisiera reservar {r.es} {f.es} {b.es} para {nightWord}. ¿Cuánto cuesta por noche y está incluido el desayuno?
                </p>
                <p className="mt-1 text-xs sm:text-sm text-ink-2 italic">
                  Good morning, I would like to book {r.en} {f.en} {b.en} for {nights} {nights === 1 ? "night" : "nights"}. How much does it cost per night and is breakfast included?
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface-2 p-3.5">
                <div className="text-xs font-bold uppercase tracking-wide text-good">Recepcionista (Receptionist)</div>
                <p className="mt-1 text-sm sm:text-base font-bold text-ink">
                  ¡Por supuesto! Cuesta {perNight} euros por noche ({total} euros en total), y sí, el desayuno bufé y el wifi gratis están incluidos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Readout label="Duration vs Rate" value={<span className="text-sm">para {nightWord} · por noche</span>} tone="brand" />
              <Readout label="Feature Grammar" value={<span className="text-sm">{f.rule}</span>} tone="good" />
              <Readout label="Total Quote" value={`${total} €`} tone="ink" />
            </div>
          </div>
        ) : (
          <div className="space-y-3 min-w-0">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Choose Hotel Disaster</div>
              <Segmented
                label="Hotel problem"
                value={problem}
                onChange={setProblem}
                options={[
                  { value: "ascensor", label: "ascensor" },
                  { value: "sucia", label: "sucia" },
                  { value: "agua", label: "agua caliente" },
                  { value: "toallas", label: "toallas" },
                  { value: "aire", label: "aire acond." },
                ]}
              />
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Choose Requested Solution</div>
              <Segmented
                label="Requested solution"
                value={action}
                onChange={setAction}
                options={[
                  { value: "cambiar", label: "cambiar habitación" },
                  { value: "reparar", label: "solucionarlo" },
                  { value: "director", label: "director / reclamación" },
                ]}
              />
            </div>

            <div className="space-y-2.5">
              <div className="rounded-xl border-2 border-bad bg-surface p-3.5">
                <div className="text-xs font-bold uppercase tracking-wide text-bad">Huésped (Polite Complaint)</div>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-ink">
                  Perdone, tengo un problema grave: {p.es}. {act.es}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-ink-2 italic">
                  Excuse me, I have a serious problem: {p.en}. {act.en}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface-2 p-3.5">
                <div className="text-xs font-bold uppercase tracking-wide text-good">Recepcionista</div>
                <p className="mt-1 text-sm sm:text-base font-bold text-ink">{p.replyEs}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Readout label="Grammar Spotlight" value={<span className="text-sm">{p.grammar}</span>} tone="bad" />
              <Readout label="Polite Opener" value={<span className="text-sm">Perdone, tengo un problema (masc.!)</span>} tone="brand" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Balanced Trip Review Builder (Las reseñas)
// ---------------------------------------------------------------------------

type AccomKey = "hotel" | "casa" | "albergue" | "camping";
type ProKey = "piscina" | "vistas" | "personal" | "desayuno";
type ConKey = "wifi" | "habitaciones" | "ruido" | "precios";

const ACCOM_META: Record<AccomKey, { label: string; stayEs: string; pron: "lo" | "la"; genderNote: string; enName: string }> = {
  hotel: { label: "un hotel", stayEs: "en un hotel moderno", pron: "lo", genderNote: "el hotel (masc.) → lo recomiendo", enName: "a modern hotel" },
  casa: { label: "una casa rural", stayEs: "en una casa rural acogedora", pron: "la", genderNote: "la casa rural (fem.) → la recomiendo!", enName: "a cosy rural cottage" },
  albergue: { label: "un albergue", stayEs: "en un albergue juvenil céntrico", pron: "lo", genderNote: "el albergue (masc.) → lo recomiendo", enName: "a central youth hostel" },
  camping: { label: "un camping", stayEs: "en un camping tranquilo", pron: "lo", genderNote: "el camping (masc.) → lo recomiendo", enName: "a peaceful campsite" },
};

const PRO_META: Record<ProKey, { label: string; verb: "me encantó" | "me encantaron"; nounEs: string; en: string; numNote: string }> = {
  piscina: { label: "la piscina", verb: "me encantó", nounEs: "la piscina climatizada", en: "I loved the heated swimming pool", numNote: "singular → me encantó" },
  vistas: { label: "las vistas (pl.)", verb: "me encantaron", nounEs: "las vistas panorámicas al mar", en: "I loved the panoramic sea views", numNote: "plural → me encantaron!" },
  personal: { label: "el personal (sg.!)", verb: "me encantó", nounEs: "el personal porque fue muy amable", en: "I loved the staff because it was very kind", numNote: "el personal = SINGULAR!" },
  desayuno: { label: "el desayuno", verb: "me encantó", nounEs: "el desayuno bufé delicioso", en: "I loved the delicious buffet breakfast", numNote: "singular → me encantó" },
};

const CON_META: Record<ConKey, { label: string; verb: "me decepcionó" | "me decepcionaron"; nounEs: string; en: string; numNote: string }> = {
  wifi: { label: "el wifi", verb: "me decepcionó", nounEs: "el wifi porque era muy lento", en: "the Wi-Fi disappointed me because it was very slow", numNote: "singular → me decepcionó" },
  habitaciones: { label: "las habitaciones (pl.)", verb: "me decepcionaron", nounEs: "las habitaciones porque estaban sucias", en: "the rooms disappointed me because they were dirty", numNote: "plural → me decepcionaron!" },
  ruido: { label: "el ruido", verb: "me decepcionó", nounEs: "el ruido nocturno de la calle", en: "the night-time street noise disappointed me", numNote: "singular → me decepcionó" },
  precios: { label: "los precios (pl.)", verb: "me decepcionaron", nounEs: "los precios porque eran demasiado caros", en: "the prices disappointed me because they were too expensive", numNote: "plural → me decepcionaron!" },
};

const STAR_ES = ["", "una estrella", "dos estrellas", "tres estrellas", "cuatro estrellas", "cinco estrellas"];

function HotelReviewBuilder() {
  const [accom, setAccom] = useState<AccomKey>("casa");
  const [stars, setStars] = useState<number>(4);
  const [pro, setPro] = useState<ProKey>("vistas");
  const [con, setCon] = useState<ConKey>("wifi");

  const ac = ACCOM_META[accom];
  const pr = PRO_META[pro];
  const cn = CON_META[con];

  const positiveVerdict = stars >= 3;
  const verdictEs = positiveVerdict
    ? `En resumen, ${ac.pron} recomiendo y volveré sin duda el año que viene.`
    : `En resumen, no ${ac.pron} recomiendo y no volveré nunca.`;
  const verdictEn = positiveVerdict
    ? "Overall, I recommend it and I will definitely return next year."
    : "Overall, I do not recommend it and I will never return.";

  const reviewEs = `El verano pasado me alojé ${ac.stayEs} y le doy ${STAR_ES[stars]} de cinco. Por un lado, ${pr.verb} ${pr.nounEs}. Por otro lado, ${cn.verb} ${cn.nounEs}. ${verdictEs}`;
  const reviewEn = `Last summer I stayed in ${ac.enName} and I give it ${stars} out of five stars. On the one hand, ${pr.en}. On the other hand, ${cn.en}. ${verdictEn}`;

  return (
    <WidgetFrame
      title="Balanced Trip Review Builder (Las reseñas)"
      tryThis={[
        "Switch between **un hotel** and **una casa rural** and watch **lo recomiendo** flip to **la recomiendo**.",
        "Toggle **la piscina** vs **las vistas (pl.)** and **el wifi** vs **las habitaciones (pl.)** to spot *-ó* vs *-aron*!",
        "Lower the star rating below 3 to switch the simple future verdict from **volveré sin duda** to **no volveré nunca**.",
      ]}
      caption={
        <>
          <strong>Exam secret:</strong> Authentic Year 9 reviews pair <em>Por un lado…</em> with <em>Por otro lado…</em>,
          match past opinion verbs to the noun that follows, and close with a simple future verdict.
        </>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Accommodation (Gender Check!)</div>
            <Segmented
              label="Accommodation"
              value={accom}
              onChange={setAccom}
              options={[
                { value: "hotel", label: "un hotel" },
                { value: "casa", label: "una casa rural" },
                { value: "albergue", label: "un albergue" },
                { value: "camping", label: "un camping" },
              ]}
            />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 px-3 py-2.5 flex items-center">
            <div className="w-full">
              <Stepper label="2. Star Rating (1–5)" value={stars} min={1} max={5} onChange={setStars} format={(v) => `${v} ★`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-good">3. Highlight (Por un lado…)</div>
            <Segmented
              label="Positive highlight"
              value={pro}
              onChange={setPro}
              options={[
                { value: "piscina", label: "la piscina" },
                { value: "vistas", label: "las vistas (pl.)" },
                { value: "personal", label: "el personal" },
                { value: "desayuno", label: "el desayuno" },
              ]}
            />
          </div>
          <div className="space-y-1.5 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-bad">4. Drawback (Por otro lado…)</div>
            <Segmented
              label="Negative drawback"
              value={con}
              onChange={setCon}
              options={[
                { value: "wifi", label: "el wifi" },
                { value: "habitaciones", label: "las habitaciones (pl.)" },
                { value: "ruido", label: "el ruido" },
                { value: "precios", label: "los precios (pl.)" },
              ]}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 560 66"
          className="w-full h-auto"
          role="img"
          aria-label={`Star rating bar showing ${stars} out of 5 stars`}
        >
          <rect x="6" y="6" width="548" height="54" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth={1.2} />
          {[1, 2, 3, 4, 5].map((idx) => {
            const lit = idx <= stars;
            const x = 44 + (idx - 1) * 44;
            return (
              <text
                key={idx}
                x={x}
                y={42}
                textAnchor="middle"
                fontSize={26}
                fill={lit ? "var(--brand)" : "var(--line)"}
              >
                ★
              </text>
            );
          })}
          <text x="275" y="38" fontSize={13} fontWeight={700} fill={positiveVerdict ? "var(--good)" : "var(--bad)"}>
            {stars} / 5 — {positiveVerdict ? `${ac.pron} recomiendo · volveré sin duda` : `no ${ac.pron} recomiendo · no volveré nunca`}
          </text>
        </svg>

        <div className="rounded-xl border-2 border-brand bg-brand-soft p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-brand">Live Spanish Hotel Review (Reseña)</div>
          <p className="mt-1 text-sm sm:text-base font-extrabold text-ink leading-relaxed">{reviewEs}</p>
          <p className="mt-2 text-xs sm:text-sm text-ink-2 italic leading-relaxed">{reviewEn}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Pro Verb Agreement" value={<span className="text-sm">{pr.numNote}</span>} tone="good" />
          <Readout label="Con Verb Agreement" value={<span className="text-sm">{cn.numNote}</span>} tone="bad" />
          <Readout label="Pronoun Check" value={<span className="text-sm">{ac.genderNote}</span>} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hotel-reception-studio",
    title: "Hotel Booking & Complaint Role-Play Studio",
    blurb: "Build authentic reception dialogues for booking rooms and handling hotel disasters with live PARA/POR and SER/ESTAR checks.",
    Component: HotelReceptionStudio,
  },
  {
    id: "hotel-review-builder",
    title: "Balanced Trip Review Builder (Las reseñas)",
    blurb: "Assemble a 4-part Spanish hotel review and watch singular/plural past opinions, lo/la pronouns and future verdicts adapt automatically.",
    Component: HotelReviewBuilder,
  },
];
