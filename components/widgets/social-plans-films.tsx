"use client";
import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: ¿Quedamos? Invite, Time & Excuse Simulator
// ===========================================================================

type ActivityKey = "cine" | "bolera" | "centro" | "helado";
type DayKey = "viernes" | "sabado" | "domingo";
type QuarterKey = "00" | "15" | "30" | "45";
type PlaceKey = "cine" | "estacion" | "cafeteria" | "parque";
type ReplyKey = "accept" | "excuse" | "counter";
type ExcuseKey = "deberes" | "dormitorio" | "hermano" | "perro";

const ACTIVITIES: Record<ActivityKey, { label: string; es: string; en: string; note: string }> = {
  cine: { label: "Cinema", es: "ir al cine", en: "go to the cinema", note: "a + el → al cine" },
  bolera: { label: "Bowling", es: "ir a la bolera", en: "go bowling", note: "feminine la → a la bolera" },
  centro: { label: "Mall", es: "ir al centro comercial", en: "go to the shopping centre", note: "a + el → al centro" },
  helado: { label: "Ice cream", es: "tomar un helado", en: "get an ice cream", note: "infinitive after te gustaría" },
};

const DAYS: Record<DayKey, { label: string; es: string; en: string; altEs: string; altEn: string }> = {
  viernes: { label: "Friday", es: "el viernes", en: "on Friday", altEs: "el sábado", altEn: "Saturday" },
  sabado: { label: "Saturday", es: "el sábado", en: "on Saturday", altEs: "el domingo", altEn: "Sunday" },
  domingo: { label: "Sunday", es: "el domingo", en: "on Sunday", altEs: "el viernes que viene", altEn: "next Friday" },
};

const PLACES: Record<PlaceKey, { label: string; es: string; en: string; rule: string }> = {
  cine: { label: "Cinema", es: "delante del cine", en: "in front of the cinema", rule: "de + el → del" },
  estacion: { label: "Station", es: "enfrente de la estación", en: "opposite the station", rule: "feminine → de la" },
  cafeteria: { label: "Café", es: "al lado de la cafetería", en: "next to the café", rule: "a + el → al; de la" },
  parque: { label: "Park", es: "enfrente del parque", en: "opposite the park", rule: "de + el → del" },
};

const EXCUSES: Record<ExcuseKey, { label: string; es: string; en: string; grammar: string }> = {
  deberes: { label: "Homework", es: "hacer mis deberes", en: "do my homework", grammar: "tengo que + inf. hacer" },
  dormitorio: { label: "Bedroom", es: "ordenar mi dormitorio", en: "tidy my bedroom", grammar: "tengo que + inf. ordenar" },
  hermano: { label: "Brother", es: "cuidar a mi hermano pequeño", en: "look after my little brother", grammar: "personal «a» before person!" },
  perro: { label: "Dog", es: "pasear al perro", en: "walk the dog", grammar: "a + el → al perro" },
};

const HOUR_WORDS = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"] as const;

function buildSpanishTime(hour: number, quarter: QuarterKey): { es: string; en: string; rule: string } {
  const stepUp = quarter === "45";
  const targetHour = stepUp ? hour + 1 : hour;
  const isSg = targetHour === 1;
  const art = isSg ? "a la" : "a las";
  const hWord = HOUR_WORDS[targetHour];
  const suffixMap: Record<QuarterKey, string> = {
    "00": "en punto",
    "15": "y cuarto",
    "30": "y media",
    "45": "menos cuarto",
  };
  const partOfDay = hour >= 8 ? "de la noche" : "de la tarde";
  const es = `${art} ${hWord} ${suffixMap[quarter]} ${partOfDay}`;
  const en = `at ${hour}:${quarter} p.m.`;
  const rule = stepUp
    ? `Step UP from ${hour} → ${targetHour}, subtract menos cuarto`
    : isSg
      ? "Singular «a la una» (only 1 o’clock!)"
      : `Plural «a las ${hWord}» + ${suffixMap[quarter]}`;
  return { es, en, rule };
}

function QuedamosSimulator() {
  const [activity, setActivity] = useState<ActivityKey>("cine");
  const [day, setDay] = useState<DayKey>("sabado");
  const [hour, setHour] = useState<number>(6);
  const [quarter, setQuarter] = useState<QuarterKey>("45");
  const [place, setPlace] = useState<PlaceKey>("cine");
  const [reply, setReply] = useState<ReplyKey>("counter");
  const [excuse, setExcuse] = useState<ExcuseKey>("hermano");

  const act = ACTIVITIES[activity];
  const d = DAYS[day];
  const t = buildSpanishTime(hour, quarter);
  const p = PLACES[place];
  const ex = EXCUSES[excuse];

  const inviteEs = `¡Hola! ¿Te gustaría ${act.es} ${d.es}? Podemos quedar ${t.es} ${p.es}.`;
  const inviteEn = `Hi! Would you like to ${act.en} ${d.en}? We can meet ${t.en} ${p.en}.`;

  let replyEs: string;
  let replyEn: string;
  let replyGrammar: string;

  if (reply === "accept") {
    replyEs = `¡Sí, me encantaría! ¡Qué buena idea! Nos vemos ${d.es} ${p.es}.`;
    replyEn = `Yes, I would love to! What a great idea! See you ${d.en} ${p.en}.`;
    replyGrammar = "me encantaría (conditional) + ¡Qué buena idea!";
  } else if (reply === "excuse") {
    replyEs = `¡Qué pena! Lo siento, pero no puedo porque tengo que ${ex.es}. Quizá otro día.`;
    replyEn = `What a shame! I’m sorry, I can’t because I have to ${ex.en}. Perhaps another day.`;
    replyGrammar = ex.grammar;
  } else {
    replyEs = `Lo siento, ${d.es} no puedo porque tengo que ${ex.es}. ¿Qué tal ${d.altEs} a la misma hora?`;
    replyEn = `I’m sorry, I can’t ${d.en} because I have to ${ex.en}. How about ${d.altEn} at the same time?`;
    replyGrammar = `${ex.grammar} + counter-plan`;
  }

  return (
    <WidgetFrame
      title="¿Quedamos? Invite, Time & Excuse Simulator"
      tryThis={[
        "Set the time to **1:15** and then **6:45** — watch how *a la una* and *menos cuarto* change automatically.",
        "Switch the reply to **Polite Excuse** and pick **Brother** to see where the personal **a** appears.",
      ]}
      caption={
        <>
          <strong>Grammar Spotlight:</strong> {t.rule}. Meeting spot uses <strong>{p.rule}</strong>, and the reply highlights{" "}
          <strong>{replyGrammar}</strong>.
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Activity</div>
            <Segmented
              label="Activity"
              value={activity}
              onChange={setActivity}
              options={[
                { value: "cine", label: "Cinema" },
                { value: "bolera", label: "Bowling" },
                { value: "centro", label: "Mall" },
                { value: "helado", label: "Ice cream" },
              ]}
            />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Day</div>
            <Segmented
              label="Day"
              value={day}
              onChange={setDay}
              options={[
                { value: "viernes", label: "Fri" },
                { value: "sabado", label: "Sat" },
                { value: "domingo", label: "Sun" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-2">
          <div className="min-w-0">
            <Stepper label="3. Clock Hour (p.m.)" value={hour} min={1} max={9} onChange={setHour} format={(v) => `${v}:${quarter}`} />
          </div>
          <div className="min-w-0">
            <Segmented
              label="Quarter hour"
              value={quarter}
              onChange={setQuarter}
              options={[
                { value: "00", label: ":00" },
                { value: "15", label: ":15" },
                { value: "30", label: ":30" },
                { value: "45", label: ":45" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">4. Meeting Point</div>
            <Segmented
              label="Meeting place"
              value={place}
              onChange={setPlace}
              options={[
                { value: "cine", label: "Cinema" },
                { value: "estacion", label: "Station" },
                { value: "cafeteria", label: "Café" },
                { value: "parque", label: "Park" },
              ]}
            />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">5. Friend’s Response</div>
            <Segmented
              label="Reply mode"
              value={reply}
              onChange={setReply}
              options={[
                { value: "accept", label: "Accept" },
                { value: "excuse", label: "Excuse" },
                { value: "counter", label: "Counter-Plan" },
              ]}
            />
          </div>
        </div>

        {reply !== "accept" ? (
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">6. Obligation Excuse (tengo que + infinitive)</div>
            <Segmented
              label="Excuse"
              value={excuse}
              onChange={setExcuse}
              options={[
                { value: "deberes", label: "Homework" },
                { value: "dormitorio", label: "Bedroom" },
                { value: "hermano", label: "Brother" },
                { value: "perro", label: "Dog" },
              ]}
            />
          </div>
        ) : null}

        {/* Chat Preview */}
        <div className="space-y-3 rounded-2xl border border-line bg-surface-2 p-4">
          <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-brand/30 bg-surface p-3 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">Tú (Invitation)</div>
            <p className="mt-1 text-base font-bold text-ink">{inviteEs}</p>
            <p className="mt-1 text-xs text-ink-2">{inviteEn}</p>
          </div>
          <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm border border-line bg-surface p-3 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-good">Amigo/a (Reply)</div>
            <p className="mt-1 text-base font-bold text-ink">{replyEs}</p>
            <p className="mt-1 text-xs text-ink-2">{replyEn}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Time phrase" value={t.es.replace(/ de la (tarde|noche)$/, "")} tone="brand" />
          <Readout label="Contraction check" value={`${act.note}`} tone="ink" />
          <Readout label="Reply structure" value={reply === "accept" ? "Conditional" : "tengo que + inf."} tone={reply === "accept" ? "good" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Film Review Star-Rating Studio (La crítica de cine)
// ===========================================================================

type GenreKey = "scifi" | "accion" | "terror" | "comedia" | "doc";
type StrengthKey = "efectos" | "banda" | "argumento" | "actriz";
type FlawKey = "final" | "ritmo" | "guion";
type FutureMode = "near" | "simple";

const GENRES: Record<
  GenreKey,
  {
    label: string;
    nounEs: string;
    title: string;
    plotEs: string;
    isMasc: boolean;
    pronoun: "lo" | "la";
    adjGood: string;
    adjBad: string;
  }
> = {
  scifi: {
    label: "Sci-Fi",
    nounEs: "una película de ciencia ficción",
    title: "«Horizonte 2099»",
    plotEs: "Trata de una joven astronauta que descubre una señal misteriosa en Marte.",
    isMasc: false,
    pronoun: "la",
    adjGood: "emocionante",
    adjBad: "aburrida",
  },
  accion: {
    label: "Action",
    nounEs: "una película de acción",
    title: "«Persecución en Madrid»",
    plotEs: "Trata de un detective que tiene que resolver un robo imposible en veinticuatro horas.",
    isMasc: false,
    pronoun: "la",
    adjGood: "entretenida",
    adjBad: "predecible",
  },
  terror: {
    label: "Horror",
    nounEs: "una película de terror",
    title: "«La casa silenciosa»",
    plotEs: "Tiene lugar en un pueblo abandonado y trata de una familia rodeada de secretos.",
    isMasc: false,
    pronoun: "la",
    adjGood: "impresionante",
    adjBad: "espantosa",
  },
  comedia: {
    label: "Comedy",
    nounEs: "una comedia romántica",
    title: "«Verano en Sevilla»",
    plotEs: "Trata de dos estudiantes que se conocen por accidente en un festival de verano.",
    isMasc: false,
    pronoun: "la",
    adjGood: "divertida",
    adjBad: "tonta",
  },
  doc: {
    label: "Documentary (m.)",
    nounEs: "un documental sobre los océanos",
    title: "«Planeta Azul»",
    plotEs: "Trata de la vida marina y tiene lugar en el océano Pacífico.",
    isMasc: true,
    pronoun: "lo",
    adjGood: "impresionante",
    adjBad: "lento",
  },
};

const STRENGTHS: Record<StrengthKey, { label: string; es: string }> = {
  efectos: { label: "Special effects", es: "los efectos especiales fueron impresionantes" },
  banda: { label: "Soundtrack", es: "la banda sonora fue conmovedora" },
  argumento: { label: "Plot", es: "el argumento fue muy original" },
  actriz: { label: "Lead actress", es: "la protagonista estuvo brillante" },
};

const FLAWS: Record<FlawKey, { label: string; es: string }> = {
  final: { label: "Ending", es: "el final fue un poco predecible" },
  ritmo: { label: "Pace", es: "el ritmo me pareció algo lento" },
  guion: { label: "Script", es: "el guion fue bastante sencillo" },
};

function FilmReviewStudio() {
  const [genre, setGenre] = useState<GenreKey>("scifi");
  const [stars, setStars] = useState<number>(4);
  const [strength, setStrength] = useState<StrengthKey>("efectos");
  const [flaw, setFlaw] = useState<FlawKey>("final");
  const [futureMode, setFutureMode] = useState<FutureMode>("simple");

  const g = GENRES[genre];
  const st = STRENGTHS[strength];
  const fl = FLAWS[flaw];

  const starText = "★".repeat(stars) + "☆".repeat(5 - stars);
  const starWord = ["", "una estrella", "dos estrellas", "tres estrellas", "cuatro estrellas", "cinco estrellas"][stars];

  let verdictEs: string;
  let recEs: string;
  let futureEs: string;

  if (stars >= 4) {
    verdictEs = stars === 5 ? `Me encantó porque fue inolvidable y ${st.es}; además, apenas tuvo fallos.` : `Por un lado, me encantó porque ${st.es}; sin embargo, ${fl.es}.`;
    recEs = `Le doy ${starWord} de cinco y ${g.pronoun} recomiendo a todos los aficionados al género.`;
    futureEs =
      futureMode === "simple"
        ? `El mes que viene ${g.pronoun} volveré a ver con mi familia.`
        : `El mes que viene voy a ver otra obra del mismo director.`;
  } else if (stars === 3) {
    verdictEs = `Por un lado, ${st.es}; por otro lado, ${fl.es} y me pareció regular.`;
    recEs = `Le doy ${starWord} de cinco: ${g.pronoun} recomiendo solo si te gusta este género.`;
    futureEs =
      futureMode === "simple"
        ? `La próxima semana veré una comedia diferente en el cine.`
        : `La próxima semana voy a ver una comedia diferente en el cine.`;
  } else {
    verdictEs = `Aunque ${st.es}, en general me decepcionó mucho porque fue ${g.adjBad} y ${fl.es}.`;
    recEs = `Le doy ${starWord} de cinco y no ${g.pronoun} recomiendo en absoluto.`;
    futureEs =
      futureMode === "simple"
        ? `El fin de semana que viene elegiré otra película mucho más ${g.adjGood}.`
        : `El fin de semana que viene voy a elegir otra película mucho más ${g.adjGood}.`;
  }

  return (
    <WidgetFrame
      title="Film Review Star-Rating Studio (La crítica de cine)"
      tryThis={[
        "Toggle from **Sci-Fi** (*la película*) to **Documentary (m.)** (*un documental*) — spot how **la vi / la recomiendo** flips to **lo vi / lo recomiendo**!",
        "Slide the stars from **5 ★** down to **2 ★** and watch the past opinion, connective, and recommendation adapt.",
      ]}
      caption={
        <>
          <strong>Examiner Check:</strong> Your live review weaves <strong>Preterite</strong> (viewing + reaction),{" "}
          <strong>Present</strong> (<em>trata de</em> + recommendation), and{" "}
          <strong>{futureMode === "simple" ? "Simple Future" : "Immediate Future"}</strong> — with exact pronoun{" "}
          <strong>{g.pronoun}</strong> matching <em>{g.isMasc ? "el documental (m.)" : "la película (f.)"}</em>.
        </>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Genre &amp; Format</div>
          <Segmented
            label="Genre"
            value={genre}
            onChange={setGenre}
            options={[
              { value: "scifi", label: "Sci-Fi" },
              { value: "accion", label: "Action" },
              { value: "terror", label: "Horror" },
              { value: "comedia", label: "Comedy" },
              { value: "doc", label: "Documentary (m.)" },
            ]}
          />
        </div>

        <Slider
          label="2. Star Rating"
          value={stars}
          min={1}
          max={5}
          onChange={setStars}
          format={(v) => `${v}/5 ${"★".repeat(v)}${"☆".repeat(5 - v)}`}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Main Strength</div>
            <Segmented
              label="Strength"
              value={strength}
              onChange={setStrength}
              options={[
                { value: "efectos", label: "Effects" },
                { value: "banda", label: "Soundtrack" },
                { value: "argumento", label: "Plot" },
                { value: "actriz", label: "Lead" },
              ]}
            />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">4. Balanced Criticism</div>
            <Segmented
              label="Criticism"
              value={flaw}
              onChange={setFlaw}
              options={[
                { value: "final", label: "Ending" },
                { value: "ritmo", label: "Pace" },
                { value: "guion", label: "Script" },
              ]}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">5. Future Closing Tense</div>
          <Segmented
            label="Future tense"
            value={futureMode}
            onChange={setFutureMode}
            options={[
              { value: "simple", label: "Simple Future (veré / volveré)" },
              { value: "near", label: "Immediate Future (voy a + inf.)" },
            ]}
          />
        </div>

        {/* Live Review Card */}
        <div className="space-y-2.5 rounded-2xl border border-line bg-surface-2 p-4 text-sm leading-relaxed text-ink">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-ink">Crítica: {g.title}</span>
            <span className="font-extrabold text-brand">{starText}</span>
          </div>
          <p>
            <span className="mr-1.5 inline-block rounded bg-brand/15 px-1.5 py-0.5 text-[11px] font-extrabold text-brand">PRETERITE</span>
            El sábado pasado fui al cine con mis amigos y {g.pronoun} vi: es {g.nounEs}.
          </p>
          <p>
            <span className="mr-1.5 inline-block rounded bg-good/15 px-1.5 py-0.5 text-[11px] font-extrabold text-good">PRESENT</span>
            {g.plotEs}
          </p>
          <p>
            <span className="mr-1.5 inline-block rounded bg-brand/15 px-1.5 py-0.5 text-[11px] font-extrabold text-brand">VERDICT</span>
            {verdictEs} {recEs}
          </p>
          <p>
            <span className="mr-1.5 inline-block rounded bg-surface px-1.5 py-0.5 text-[11px] font-extrabold text-ink-2">FUTURE</span>
            {futureEs}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Object Pronoun" value={`${g.pronoun} vi · ${g.pronoun} recomiendo`} tone="brand" />
          <Readout label="Rating" value={starText} tone={stars >= 4 ? "good" : stars === 3 ? "ink" : "bad"} />
          <Readout label="Tenses Used" value="3 (Top Band)" tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "quedamos-simulator",
    title: "¿Quedamos? Invite, Time & Excuse Simulator",
    blurb: "Build natural Spanish invitations with live a la/las clock times, al/del contractions, and tengo que + infinitive excuses.",
    Component: QuedamosSimulator,
  },
  {
    id: "film-review-studio",
    title: "Film Review Star-Rating Studio",
    blurb: "Assemble a top-band multi-tense Spanish crítica de cine and see how direct object pronouns (la vs lo) and star ratings shift the grammar.",
    Component: FilmReviewStudio,
  },
];
