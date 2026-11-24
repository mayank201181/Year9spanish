import type { Drill } from "./types.ts";
import { acceptedForms, conjugate, PERSON_LABEL, verbInfo, type Person, type Tense } from "../spanish/verbs.ts";

const AR_PRES: Record<Person, string> = { yo: "o", tú: "as", él: "a", nosotros: "amos", vosotros: "áis", ellos: "an" };

function presentWrongForm(inf: string, person: Person): string {
  if (verbInfo(inf)) return conjugate(inf, "present", person);
  return inf.slice(0, -2) + AR_PRES[person];
}

// ---------------------------------------------------------------------------
// Data tables for Social Meetings, Films & Reviews drills
// ---------------------------------------------------------------------------

const HOURS: ReadonlyArray<{ h: number; word: string; nextWord: string; sg?: boolean; nextSg?: boolean }> = [
  { h: 1, word: "una", nextWord: "dos", sg: true },
  { h: 2, word: "dos", nextWord: "tres" },
  { h: 3, word: "tres", nextWord: "cuatro" },
  { h: 4, word: "cuatro", nextWord: "cinco" },
  { h: 5, word: "cinco", nextWord: "seis" },
  { h: 6, word: "seis", nextWord: "siete" },
  { h: 7, word: "siete", nextWord: "ocho" },
  { h: 8, word: "ocho", nextWord: "nueve" },
  { h: 9, word: "nueve", nextWord: "diez" },
  { h: 10, word: "diez", nextWord: "once" },
  { h: 11, word: "once", nextWord: "doce" },
  { h: 12, word: "doce", nextWord: "una", nextSg: true },
];

const MINUTES: ReadonlyArray<{ m: string; suffix: string; stepUp?: boolean; label: string }> = [
  { m: "00", suffix: "en punto", label: "on the dot" },
  { m: "15", suffix: "y cuarto", label: "quarter past" },
  { m: "30", suffix: "y media", label: "half past" },
  { m: "45", suffix: "menos cuarto", stepUp: true, label: "quarter to" },
];

const PREPS: ReadonlyArray<{ es: string; en: string }> = [
  { es: "delante de", en: "in front of" },
  { es: "enfrente de", en: "opposite" },
  { es: "detrás de", en: "behind" },
  { es: "al lado de", en: "next to" },
];

const PLACES: ReadonlyArray<{ art: "el" | "la"; noun: string; en: string }> = [
  { art: "el", noun: "cine", en: "the cinema" },
  { art: "el", noun: "centro comercial", en: "the shopping centre" },
  { art: "el", noun: "parque", en: "the park" },
  { art: "el", noun: "estadio", en: "the stadium" },
  { art: "la", noun: "estación", en: "the station" },
  { art: "la", noun: "bolera", en: "the bowling alley" },
  { art: "la", noun: "cafetería", en: "the café" },
  { art: "la", noun: "plaza mayor", en: "the main square" },
];

const DAYS: ReadonlyArray<{ es: string; en: string }> = [
  { es: "el lunes", en: "on Monday" },
  { es: "el martes", en: "on Tuesday" },
  { es: "el miércoles", en: "on Wednesday" },
  { es: "el jueves", en: "on Thursday" },
  { es: "el viernes", en: "on Friday" },
  { es: "el sábado", en: "on Saturday" },
  { es: "el domingo", en: "on Sunday" },
];

function formatSpanishTime(hIdx: number, minObj: (typeof MINUTES)[number]): { es: string; wrongPrep: string; wrongStep?: string } {
  const hr = HOURS[hIdx];
  const useNext = Boolean(minObj.stepUp);
  const isSg = useNext ? Boolean(hr.nextSg) : Boolean(hr.sg);
  const hWord = useNext ? hr.nextWord : hr.word;
  const art = isSg ? "a la" : "a las";
  const wrongArt = isSg ? "a las" : "a la";
  const es = `${art} ${hWord} ${minObj.suffix}`;
  const wrongPrep = `${wrongArt} ${hWord} ${minObj.suffix}`;
  const wrongStep = useNext ? `${hr.sg ? "a la" : "a las"} ${hr.word} menos cuarto` : undefined;
  return { es, wrongPrep, wrongStep };
}

function formatPlace(prep: (typeof PREPS)[number], place: (typeof PLACES)[number]): { es: string; uncontracted?: string } {
  if (place.art === "el") {
    const base = prep.es.slice(0, -3); // strip " de"
    return { es: `${base} del ${place.noun}`, uncontracted: `${prep.es} el ${place.noun}` };
  }
  return { es: `${prep.es} la ${place.noun}` };
}

// Modal excuses data
const MODAL_VERBS: ReadonlyArray<{ inf: "tener" | "poder" | "querer" | "deber"; needsQue: boolean; en: string }> = [
  { inf: "tener", needsQue: true, en: "have to" },
  { inf: "poder", needsQue: false, en: "can / be able to" },
  { inf: "querer", needsQue: false, en: "want to" },
  { inf: "deber", needsQue: false, en: "must / should" },
];

const EXCUSE_ACTIONS: ReadonlyArray<{ es: string; en: string; inf: string }> = [
  { es: "hacer los deberes", en: "do homework", inf: "hacer" },
  { es: "ordenar el dormitorio", en: "tidy the bedroom", inf: "ordenar" },
  { es: "estudiar para un examen", en: "study for an exam", inf: "estudiar" },
  { es: "ayudar en casa", en: "help at home", inf: "ayudar" },
  { es: "lavar los platos", en: "wash the dishes", inf: "lavar" },
  { es: "limpiar la cocina", en: "clean the kitchen", inf: "limpiar" },
  { es: "pasear al perro", en: "walk the dog", inf: "pasear" },
  { es: "cuidar a mi hermano", en: "look after my brother", inf: "cuidar" },
  { es: "repasar vocabulario", en: "revise vocabulary", inf: "repasar" },
  { es: "salir esta noche", en: "go out tonight", inf: "salir" },
  { es: "venir al cine", en: "come to the cinema", inf: "venir" },
  { es: "cocinar la cena", en: "cook dinner", inf: "cocinar" },
];

// Film agreement data
type GenderNum = "ms" | "fs" | "mp" | "fp";

const CINEMA_NOUNS: ReadonlyArray<{ es: string; en: string; gn: GenderNum }> = [
  { es: "el argumento", en: "the plot", gn: "ms" },
  { es: "el guion", en: "the script", gn: "ms" },
  { es: "el final", en: "the ending", gn: "ms" },
  { es: "el documental", en: "the documentary", gn: "ms" },
  { es: "el personaje principal", en: "the main character", gn: "ms" },
  { es: "la película", en: "the film", gn: "fs" },
  { es: "la banda sonora", en: "the soundtrack", gn: "fs" },
  { es: "la comedia", en: "the comedy", gn: "fs" },
  { es: "la escena final", en: "the final scene", gn: "fs" },
  { es: "la protagonista", en: "the lead actress", gn: "fs" },
  { es: "los efectos especiales", en: "the special effects", gn: "mp" },
  { es: "los actores", en: "the actors", gn: "mp" },
  { es: "los documentales", en: "documentaries", gn: "mp" },
  { es: "los dibujos animados", en: "cartoons", gn: "mp" },
  { es: "los personajes", en: "the characters", gn: "mp" },
  { es: "las películas de acción", en: "action films", gn: "fp" },
  { es: "las películas de terror", en: "horror films", gn: "fp" },
  { es: "las películas de ciencia ficción", en: "science-fiction films", gn: "fp" },
  { es: "las películas de animación", en: "animated films", gn: "fp" },
  { es: "las comedias románticas", en: "romantic comedies", gn: "fp" },
  { es: "las actrices", en: "the actresses", gn: "fp" },
];

const FILM_ADJS: ReadonlyArray<{ base: string; en: string; forms: Record<GenderNum, string> }> = [
  { base: "entretenido", en: "entertaining", forms: { ms: "entretenido", fs: "entretenida", mp: "entretenidos", fp: "entretenidas" } },
  { base: "divertido", en: "fun / funny", forms: { ms: "divertido", fs: "divertida", mp: "divertidos", fp: "divertidas" } },
  { base: "aburrido", en: "boring", forms: { ms: "aburrido", fs: "aburrida", mp: "aburridos", fp: "aburridas" } },
  { base: "lento", en: "slow", forms: { ms: "lento", fs: "lenta", mp: "lentos", fp: "lentas" } },
  { base: "espantoso", en: "terrifying / awful", forms: { ms: "espantoso", fs: "espantosa", mp: "espantosos", fp: "espantosas" } },
  { base: "fantástico", en: "fantastic", forms: { ms: "fantástico", fs: "fantástica", mp: "fantásticos", fp: "fantásticas" } },
  { base: "maravilloso", en: "marvellous", forms: { ms: "maravilloso", fs: "maravillosa", mp: "maravillosos", fp: "maravillosas" } },
  { base: "emocionante", en: "exciting", forms: { ms: "emocionante", fs: "emocionante", mp: "emocionantes", fp: "emocionantes" } },
  { base: "impresionante", en: "impressive", forms: { ms: "impresionante", fs: "impresionante", mp: "impresionantes", fp: "impresionantes" } },
  { base: "predecible", en: "predictable", forms: { ms: "predecible", fs: "predecible", mp: "predecibles", fp: "predecibles" } },
  { base: "decepcionante", en: "disappointing", forms: { ms: "decepcionante", fs: "decepcionante", mp: "decepcionantes", fp: "decepcionantes" } },
  { base: "inolvidable", en: "unforgettable", forms: { ms: "inolvidable", fs: "inolvidable", mp: "inolvidables", fp: "inolvidables" } },
  { base: "original", en: "original", forms: { ms: "original", fs: "original", mp: "originales", fp: "originales" } },
  { base: "conmovedor", en: "moving / touching", forms: { ms: "conmovedor", fs: "conmovedora", mp: "conmovedores", fp: "conmovedoras" } },
];

// Film review tense drill verbs (all confirmed present in lib/spanish/verbs.ts)
const REVIEW_VERBS: ReadonlyArray<{ inf: string; context: string; en: string }> = [
  { inf: "ver", context: "una película de ciencia ficción", en: "watch" },
  { inf: "ir", context: "al cine con amigos", en: "go" },
  { inf: "comprar", context: "las entradas por internet", en: "buy" },
  { inf: "comer", context: "palomitas en la sala", en: "eat" },
  { inf: "recomendar", context: "esta comedia romántica", en: "recommend" },
  { inf: "preferir", context: "las películas en versión original", en: "prefer" },
  { inf: "dar", context: "cuatro estrellas de cinco", en: "give" },
  { inf: "salir", context: "del cine a las diez", en: "leave" },
  { inf: "hablar", context: "del argumento con mi clase", en: "talk" },
  { inf: "escuchar", context: "la banda sonora otra vez", en: "listen to" },
  { inf: "escribir", context: "una crítica de cine", en: "write" },
  { inf: "leer", context: "las reseñas antes del estreno", en: "read" },
  { inf: "elegir", context: "una película de aventuras", en: "choose" },
  { inf: "volver", context: "al mismo cine el sábado", en: "return" },
];

const TENSE_MARKERS: Record<"present" | "preterite" | "near-future" | "future", { marker: string; label: string }> = {
  present: { marker: "Normalmente", label: "Present tense" },
  preterite: { marker: "El sábado pasado", label: "Preterite tense" },
  "near-future": { marker: "El próximo viernes", label: "Immediate future (ir a + inf.)" },
  future: { marker: "El mes que viene", label: "Simple future (-é, -ás, -á…)" },
};

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Meeting Time & Place Builder (Level 1)
  // =========================================================================
  {
    id: "social-plans-films.meeting-time-place",
    topicId: "social-plans-films",
    title: "Meeting Times & Places (a la/las & del)",
    level: 1,
    guideRef: "arranging-a-meeting",
    generate(rng, tier) {
      if (tier === 1) {
        const hIdx = rng.int(0, HOURS.length - 1);
        const minObj = rng.pick(MINUTES);
        const { es, wrongPrep, wrongStep } = formatSpanishTime(hIdx, minObj);
        const clock = `${HOURS[hIdx].h}:${minObj.m}`;
        const traps = [
          {
            spec: { type: "text" as const, accept: [wrongPrep] },
            feedback: "Check singular vs plural: use **a la una** ONLY for 1 o'clock and **a las** for 2–12!",
          },
        ];
        if (wrongStep) {
          traps.push({
            spec: { type: "text" as const, accept: [wrongStep] },
            feedback: "For quarter-to (:45), step UP to the next hour and subtract *menos cuarto*!",
          });
        }
        return {
          prompt: `Write the Spanish meeting time for **at ${clock}** (use *${minObj.suffix}*).`,
          answer: { type: "text", accept: [es], display: es },
          traps,
          hint: minObj.stepUp
            ? "For :45, step up to the next hour and subtract *menos cuarto*."
            : "Remember *a la* for 1 o'clock and *a las* for all other hours.",
          solution: [
            `Clock time **${clock}** (${minObj.label}).`,
            minObj.stepUp
              ? `Step up to the next hour (*${HOURS[hIdx].nextWord}*) and add *menos cuarto* → **${es}**.`
              : `Use *${HOURS[hIdx].sg ? "a la" : "a las"}* + *${HOURS[hIdx].word}* + *${minObj.suffix}* → **${es}**.`,
          ],
        };
      }

      if (tier === 2) {
        const prep = rng.pick(PREPS);
        const place = rng.pick(PLACES);
        const { es, uncontracted } = formatPlace(prep, place);
        const traps = uncontracted
          ? [
              {
                spec: { type: "text" as const, accept: [uncontracted] },
                feedback: "Always weld *de + el* into **del** before masculine singular nouns!",
              },
            ]
          : undefined;
        return {
          prompt: `Translate the meeting point into Spanish: **${prep.en} ${place.en}** (use *${prep.es}* + *${place.art} ${place.noun}*).`,
          answer: { type: "text", accept: [es], display: es },
          traps,
          hint: place.art === "el" ? "Check what happens when *de* sits directly before masculine *el*." : "*la* is feminine, so *de la* does NOT contract.",
          solution: [
            `Combine *${prep.es}* + *${place.art} ${place.noun}*.`,
            place.art === "el"
              ? `Contract *de + el* → **del** to get **${es}**.`
              : `Keep *de la* separate → **${es}**.`,
          ],
        };
      }

      // Tier 3: Full day + time + meeting point phrase
      const day = rng.pick(DAYS);
      const hIdx = rng.int(0, HOURS.length - 1);
      const minObj = rng.pick(MINUTES);
      const { es: timeEs } = formatSpanishTime(hIdx, minObj);
      const prep = rng.pick(PREPS);
      const place = rng.pick(PLACES);
      const { es: placeEs } = formatPlace(prep, place);
      const fullEs = `${day.es} ${timeEs} ${placeEs}`;
      const clock = `${HOURS[hIdx].h}:${minObj.m}`;
      return {
        prompt: `Translate the full meeting arrangement into Spanish: **${day.en} at ${clock} ${prep.en} ${place.en}** (use *${minObj.suffix}* and *${prep.es}*).`,
        answer: { type: "text", accept: [fullEs], display: fullEs },
        traps: [
          {
            spec: { type: "text", accept: [`en ${day.es.slice(3)} ${timeEs} ${placeEs}`] },
            feedback: "Never use *en* before days of the week — use **el** (*el sábado*, *el viernes*)!",
          },
        ],
        hint: "Order: *el [day]* (lowercase) + *a la / a las [time]* + place (remember *de + el → del*).",
        solution: [
          `Day: **${day.es}** (lowercase, no *en*).`,
          `Time: **${timeEs}** (${clock}).`,
          `Place: **${placeEs}** → **${fullEs}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Modal Excuses & Obligations (Level 1)
  // =========================================================================
  {
    id: "social-plans-films.modal-excuses",
    topicId: "social-plans-films",
    title: "Polite Excuses: Modal Verb + Infinitive",
    level: 1,
    guideRef: "accepting-making-excuses",
    generate(rng, tier) {
      const persons: readonly Person[] =
        tier === 1 ? ["yo", "tú"] : tier === 2 ? ["yo", "tú", "él", "nosotros", "ellos"] : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];
      const person = rng.pick(persons);
      const modal = tier === 1 ? rng.pick(MODAL_VERBS.slice(0, 3)) : rng.pick(MODAL_VERBS);
      const action = rng.pick(EXCUSE_ACTIONS);
      const conj = conjugate(modal.inf, "present", person);
      const connector = modal.needsQue ? " que " : " ";
      const answerStr = `${conj}${connector}${action.es}`;
      const acceptSet = acceptedForms(modal.inf, "present", person).map((f) => `${f}${connector}${action.es}`);

      const wrongNoQue = modal.needsQue ? `${conj} ${action.es}` : `${conj} que ${action.es}`;
      const wrongSecondVerb = `${conj}${connector}${presentWrongForm(action.inf, person)}${action.es.slice(action.inf.length)}`;

      const traps = [
        {
          spec: { type: "text" as const, accept: [wrongNoQue] },
          feedback: modal.needsQue
            ? "*tener que* ALWAYS requires **que** before the infinitive!"
            : `*${modal.inf}* goes straight to the infinitive with NO *que*!`,
        },
        {
          spec: { type: "text" as const, accept: [wrongSecondVerb] },
          feedback: `Keep the second verb (**${action.inf}**) in the infinitive — never conjugate both verbs!`,
        },
      ];

      if (tier === 3) {
        const neg = modal.inf === "poder" || modal.inf === "querer" ? "no " : "";
        const fullAns = `${neg}${answerStr}`;
        const fullAccept = acceptSet.map((a) => `${neg}${a}`);
        return {
          prompt: `Complete the excuse for **${PERSON_LABEL[person]}** using *${neg}${modal.inf}${modal.needsQue ? " que" : ""}* + *${action.es}* (${neg ? "not " : ""}${modal.en} ${action.en}):`,
          answer: { type: "text", accept: fullAccept, display: fullAns },
          traps: [
            {
              spec: { type: "text" as const, accept: [`${neg}${wrongNoQue}`] },
              feedback: modal.needsQue ? "Insert **que** after *tener*!" : `Drop *que* after *${modal.inf}*!`,
            },
          ],
          hint: `Conjugate *${modal.inf}* for *${person}*, check whether *que* is needed, and keep *${action.inf}* in the infinitive.`,
          solution: [
            `Conjugate *${modal.inf}* for *${person}* in the present → **${conj}**.`,
            modal.needsQue ? "Add mandatory **que**." : `No *que* after *${modal.inf}*.`,
            `Attach infinitive phrase *${action.es}* → **${fullAns}**.`,
          ],
        };
      }

      return {
        prompt: `Write the Spanish modal phrase for **${PERSON_LABEL[person]}**: *${modal.inf}${modal.needsQue ? " que" : ""}* + *${action.es}* (${modal.en} ${action.en}).`,
        answer: { type: "text", accept: acceptSet, display: answerStr },
        traps,
        hint: `Conjugate only the first verb (*${modal.inf}*) for *${person}*, and keep *${action.inf}* unchanged.`,
        solution: [
          `Present tense of *${modal.inf}* for *${person}* → **${conj}**.`,
          modal.needsQue ? "Follow *tener* with **que**." : `Follow *${modal.inf}* directly with the infinitive (no *que*).`,
          `Result: **${answerStr}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Cinema Agreement & Gustar/Encantar (Level 2)
  // =========================================================================
  {
    id: "social-plans-films.film-agreement",
    topicId: "social-plans-films",
    title: "Cinema Agreement: Me gusta(n) & Adjectives",
    level: 2,
    guideRef: "film-genres-opinions",
    generate(rng, tier) {
      const noun = rng.pick(CINEMA_NOUNS);
      const isPlural = noun.gn === "mp" || noun.gn === "fp";
      const adj = rng.pick(FILM_ADJS);
      const agreedAdj = adj.forms[noun.gn];

      if (tier === 1) {
        const verbObj = rng.pick([
          { inf: "gustar", sg: "gusta", pl: "gustan", en: "I like" },
          { inf: "encantar", sg: "encanta", pl: "encantan", en: "I love" },
          { inf: "interesar", sg: "interesa", pl: "interesan", en: "I am interested in" },
        ]);
        const form = isPlural ? verbObj.pl : verbObj.sg;
        const wrong = isPlural ? verbObj.sg : verbObj.pl;
        const full = `me ${form}`;
        return {
          prompt: `Complete with *me + ${verbObj.inf}* (present tense): «___ **${noun.es}**.» (*${verbObj.en} ${noun.en}*)`,
          answer: { type: "text", accept: [full, form], display: full },
          traps: [
            {
              spec: { type: "text" as const, accept: [`me ${wrong}`, wrong] },
              feedback: `*${noun.es}* is ${isPlural ? "plural" : "singular"}, so use **me ${form}**!`,
            },
          ],
          hint: `Check whether *${noun.es}* is singular (*-a*) or plural (*-an*).`,
          solution: [
            `*${noun.es}* is ${isPlural ? "plural" : "singular"}.`,
            `Agree *${verbObj.inf}* with the noun → **me ${form}**.`,
          ],
        };
      }

      if (tier === 2) {
        const serForm = isPlural ? "son" : "es";
        const wrongSer = isPlural ? "es" : "son";
        const answerStr = `${serForm} ${agreedAdj}`;
        const traps = [
          {
            spec: { type: "text" as const, accept: [`${wrongSer} ${agreedAdj}`] },
            feedback: `Match *ser* to ${isPlural ? "plural" : "singular"} *${noun.es}* (**${serForm}**)!`,
          },
        ];
        if (agreedAdj !== adj.base) {
          traps.push({
            spec: { type: "text" as const, accept: [`${serForm} ${adj.base}`] },
            feedback: `Remember to make *${adj.base}* agree with *${noun.es}* → **${agreedAdj}**!`,
          });
        }
        return {
          prompt: `Complete with *ser* + the agreeing form of **${adj.base}** (${adj.en}): «${noun.es.charAt(0).toUpperCase() + noun.es.slice(1)} ___ ___.»`,
          answer: { type: "text", accept: [answerStr], display: answerStr },
          traps,
          hint: `Check *es* vs *son*, and match *${adj.base}* to ${noun.gn.startsWith("f") ? "feminine" : "masculine"} ${isPlural ? "plural" : "singular"}.`,
          solution: [
            `*${noun.es}* is ${noun.gn.startsWith("f") ? "feminine" : "masculine"} ${isPlural ? "plural" : "singular"} → verb **${serForm}**.`,
            `Make *${adj.base}* agree → **${agreedAdj}**.`,
            `Combined answer: **${answerStr}**.`,
          ],
        };
      }

      // Tier 3: Full opinion clause with me encanta(n) + porque es/son + agreeing adjective
      const serForm = isPlural ? "son" : "es";
      const verb = rng.pick([
        { sg: "encanta", pl: "encantan", en: "love" },
        { sg: "gusta", pl: "gustan", en: "like" },
      ]);
      const gForm = isPlural ? verb.pl : verb.sg;
      const fullSentence = `Me ${gForm} ${noun.es} porque ${serForm} ${agreedAdj}`;
      return {
        prompt: `Write the complete Spanish opinion: "I ${verb.en} ${noun.en} because ${isPlural ? "they are" : "it is"} ${adj.en}" (use *${noun.es}* and *${adj.base}*).`,
        answer: { type: "text", accept: [fullSentence, `${fullSentence}.`], display: fullSentence },
        traps: [
          {
            spec: { type: "text" as const, accept: [`Me ${isPlural ? verb.sg : verb.pl} ${noun.es} porque ${serForm} ${agreedAdj}`] },
            feedback: `Check *me ${gForm}* — it must agree with ${isPlural ? "plural" : "singular"} *${noun.es}*!`,
          },
        ],
        hint: `Agree BOTH *me ${verb.sg}/${verb.pl}* AND *${serForm} + ${adj.base}* with *${noun.es}*.`,
        solution: [
          `Verb + noun: **Me ${gForm} ${noun.es}**.`,
          `Reason with agreeing *ser* + adjective: **porque ${serForm} ${agreedAdj}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Film Review Multi-Tense Conjugator (Level 3)
  // =========================================================================
  {
    id: "social-plans-films.review-tenses",
    topicId: "social-plans-films",
    title: "Film Review Tenses & Object Pronouns",
    level: 3,
    guideRef: "writing-film-reviews",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.35)) {
        // Direct object pronoun + review verb drill (la/lo + vi / recomiendo / veré / voy a ver)
        const target = rng.pick([
          { noun: "la película", pron: "la", wrongPron: "lo" },
          { noun: "la comedia", pron: "la", wrongPron: "lo" },
          { noun: "la segunda parte", pron: "la", wrongPron: "lo" },
          { noun: "la serie", pron: "la", wrongPron: "lo" },
          { noun: "el documental", pron: "lo", wrongPron: "la" },
          { noun: "el estreno", pron: "lo", wrongPron: "la" },
          { noun: "el tráiler", pron: "lo", wrongPron: "la" },
          { noun: "el cortometraje", pron: "lo", wrongPron: "la" },
        ]);
        const action = rng.pick([
          { inf: "ver", tense: "preterite" as Tense, person: "yo" as Person, en: "I watched it" },
          { inf: "ver", tense: "preterite" as Tense, person: "nosotros" as Person, en: "we watched it" },
          { inf: "recomendar", tense: "present" as Tense, person: "yo" as Person, en: "I recommend it" },
          { inf: "recomendar", tense: "present" as Tense, person: "nosotros" as Person, en: "we recommend it" },
          { inf: "ver", tense: "future" as Tense, person: "yo" as Person, en: "I will watch it" },
          { inf: "ver", tense: "future" as Tense, person: "nosotros" as Person, en: "we will watch it" },
        ]);
        const vForm = conjugate(action.inf, action.tense, action.person);
        const ans = `${target.pron} ${vForm}`;
        const wrongAns = `${target.wrongPron} ${vForm}`;
        return {
          prompt: `Referring to **${target.noun}**, translate into Spanish (2 words): **${action.en}** (use *${action.inf}*).`,
          answer: { type: "text", accept: [ans], display: ans },
          traps: [
            {
              spec: { type: "text" as const, accept: [wrongAns] },
              feedback: `*${target.noun}* is ${target.pron === "la" ? "feminine" : "masculine"}, so use direct object pronoun **${target.pron}**!`,
            },
          ],
          hint: `Pick **${target.pron}** for *${target.noun}* and place it right BEFORE the conjugated verb.`,
          solution: [
            `Direct object pronoun for *${target.noun}* → **${target.pron}**.`,
            `*${action.inf}* (${action.tense}, *${action.person}*) → **${vForm}**.`,
            `Result: **${ans}**.`,
          ],
        };
      }

      const verb = rng.pick(REVIEW_VERBS);
      const persons: readonly Person[] =
        tier === 1 ? ["yo", "nosotros"] : tier === 2 ? ["yo", "tú", "él", "nosotros", "ellos"] : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];
      const tenses: readonly ("present" | "preterite" | "near-future" | "future")[] =
        tier === 1 ? ["present", "preterite"] : tier === 2 ? ["present", "preterite", "near-future"] : ["present", "preterite", "near-future", "future"];
      const person = rng.pick(persons);
      const tense = rng.pick(tenses);
      const meta = TENSE_MARKERS[tense];
      const canonical = conjugate(verb.inf, tense, person);
      const accepted = acceptedForms(verb.inf, tense, person);

      const otherTense: "present" | "preterite" | "near-future" | "future" =
        tense === "preterite" ? "present" : tense === "future" ? "preterite" : "preterite";
      const trapForm = conjugate(verb.inf, otherTense, person);
      const traps =
        trapForm !== canonical
          ? [
              {
                spec: { type: "text" as const, accept: [trapForm] },
                feedback: `Check the time marker *${meta.marker}* — you need the **${meta.label}**, not *${trapForm}*!`,
              },
            ]
          : undefined;

      return {
        prompt: `${meta.label} — complete for **${PERSON_LABEL[person]}** using *${verb.inf}* (${verb.en}): «${meta.marker}, ___ ${verb.context}.»`,
        answer: { type: "text", accept: accepted, display: canonical },
        traps,
        hint: `Time cue *${meta.marker}* → **${meta.label}**. Conjugate *${verb.inf}* for *${person}*.`,
        solution: [
          `Time clue *${meta.marker}* calls for the **${meta.label}**.`,
          `Conjugate *${verb.inf}* for *${person}* → **${canonical}**.`,
        ],
      };
    },
  },
];
