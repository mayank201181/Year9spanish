import type { Drill, Rng } from "./types.ts";
import { acceptedForms, conjugate, englishGloss, PERSON_LABEL, TENSE_LABEL, type Person, type Tense } from "../spanish/verbs.ts";

interface DietHabitItem {
  es: string;
  en: string;
  trapEs?: string;
  trapFeedback?: string;
  hint: string;
}

const DIET_PHRASES_T1: readonly DietHabitItem[] = [
  { es: "llevar una vida sana", en: "to lead a healthy life", hint: "Use *llevar* + *una vida sana*." },
  { es: "llevar una dieta equilibrada", en: "to follow a balanced diet", hint: "Use *llevar* + *una dieta equilibrada*." },
  { es: "beber mucha agua", en: "to drink lots of water", trapEs: "beber mucho agua", trapFeedback: "*Agua* is feminine, so write **mucha agua**!", hint: "Remember *agua* is feminine (*mucha agua*)." },
  { es: "evitar la comida basura", en: "to avoid junk food", hint: "'Junk food' = *la comida basura*." },
  { es: "evitar la comida rápida", en: "to avoid fast food", hint: "Check the accent on *rápida*." },
  { es: "comer cinco raciones de fruta", en: "to eat five portions of fruit", trapEs: "comer cinco raciónes de fruta", trapFeedback: "Plural *raciones* drops the written accent!", hint: "Plural *raciones* has no accent." },
  { es: "dormir ocho horas", en: "to sleep eight hours", hint: "*Dormir* + *ocho horas*." },
  { es: "hacer ejercicio regularmente", en: "to do exercise regularly", hint: "*Hacer ejercicio* + *regularmente*." },
  { es: "saltarse el desayuno", en: "to skip breakfast", hint: "Reflexive infinitive *saltarse* + *el desayuno*." },
  { es: "picar entre horas", en: "to snack between meals", hint: "Idiom: *picar entre horas*." },
  { es: "evitar los refrescos azucarados", en: "to avoid sugary fizzy drinks", hint: "Masculine plural: *los refrescos azucarados*." },
  { es: "evitar las bebidas energéticas", en: "to avoid energy drinks", hint: "Feminine plural with accent: *las bebidas energéticas*." },
  { es: "comer comida casera", en: "to eat home-cooked food", hint: "'Home-cooked food' = *comida casera*." },
  { es: "comer pescado azul", en: "to eat oily fish", hint: "'Oily fish' = *pescado azul*." },
  { es: "comer pan integral", en: "to eat wholemeal bread", hint: "'Wholemeal bread' = *pan integral*." },
  { es: "mantenerse en forma", en: "to keep fit", hint: "Reflexive verb *mantenerse* + *en forma*." },
  { es: "evitar demasiada grasa", en: "to avoid too much fat", trapEs: "evitar demasiado grasa", trapFeedback: "*La grasa* is feminine: **demasiada grasa**!", hint: "Agree *demasiada* with feminine *grasa*." },
  { es: "evitar demasiado azúcar", en: "to avoid too much sugar", trapEs: "evitar demasiada azúcar", trapFeedback: "*El azúcar* is masculine singular: **demasiado azúcar**!", hint: "Masculine *azúcar* takes *demasiado*." },
];

interface QuantifierItem {
  nounEs: string;
  nounEn: string;
  quantEs: "mucho" | "mucha" | "muchos" | "muchas" | "demasiado" | "demasiada" | "demasiados" | "demasiadas";
  quantEn: "lots of" | "too much" | "too many";
  wrongEs: string;
  verbEs: string;
  verbEn: string;
}

const QUANTIFIER_SENTENCES: readonly QuantifierItem[] = [
  { nounEs: "agua", nounEn: "water", quantEs: "mucha", quantEn: "lots of", wrongEs: "mucho", verbEs: "Bebo", verbEn: "I drink" },
  { nounEs: "fruta", nounEn: "fruit", quantEs: "mucha", quantEn: "lots of", wrongEs: "mucho", verbEs: "Como", verbEn: "I eat" },
  { nounEs: "verduras", nounEn: "vegetables", quantEs: "muchas", quantEn: "lots of", wrongEs: "muchos", verbEs: "Como", verbEn: "I eat" },
  { nounEs: "legumbres", nounEn: "pulses", quantEs: "muchas", quantEn: "lots of", wrongEs: "muchos", verbEs: "Como", verbEn: "I eat" },
  { nounEs: "pescado", nounEn: "fish", quantEs: "mucho", quantEn: "lots of", wrongEs: "mucha", verbEs: "Como", verbEn: "I eat" },
  { nounEs: "grasa", nounEn: "fat", quantEs: "demasiada", quantEn: "too much", wrongEs: "demasiado", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "sal", nounEn: "salt", quantEs: "demasiada", quantEn: "too much", wrongEs: "demasiado", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "comida basura", nounEn: "junk food", quantEs: "demasiada", quantEn: "too much", wrongEs: "demasiado", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "comida rápida", nounEn: "fast food", quantEs: "demasiada", quantEn: "too much", wrongEs: "demasiado", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "azúcar", nounEn: "sugar", quantEs: "demasiado", quantEn: "too much", wrongEs: "demasiada", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "dulces", nounEn: "sweets", quantEs: "demasiados", quantEn: "too many", wrongEs: "demasiadas", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "refrescos", nounEn: "fizzy drinks", quantEs: "demasiados", quantEn: "too many", wrongEs: "demasiadas", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "patatas fritas", nounEn: "crisps", quantEs: "demasiadas", quantEn: "too many", wrongEs: "demasiados", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "golosinas", nounEn: "sweets", quantEs: "demasiadas", quantEn: "too many", wrongEs: "demasiados", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "hamburguesas", nounEn: "hamburgers", quantEs: "demasiadas", quantEn: "too many", wrongEs: "demasiados", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "bebidas energéticas", nounEn: "energy drinks", quantEs: "demasiadas", quantEn: "too many", wrongEs: "demasiados", verbEs: "Evito", verbEn: "I avoid" },
  { nounEs: "proteínas", nounEn: "proteins", quantEs: "muchas", quantEn: "lots of", wrongEs: "muchos", verbEs: "Como", verbEn: "I eat" },
  { nounEs: "fibra", nounEn: "fibre", quantEs: "mucha", quantEn: "lots of", wrongEs: "mucho", verbEs: "Como", verbEn: "I eat" },
];

interface AdviceAction {
  inf: string;
  infTu?: string; // reflexive -te form for personal deberías / tienes que
  wrongConj: string;
  restEs: string;
  en: string;
  healthy: boolean;
}

const ADVICE_ACTIONS: readonly AdviceAction[] = [
  { inf: "comer", wrongConj: "comes", restEs: "fruta todos los días", en: "eat fruit every day", healthy: true },
  { inf: "beber", wrongConj: "bebes", restEs: "mucha agua", en: "drink lots of water", healthy: true },
  { inf: "dormir", wrongConj: "duermes", restEs: "ocho horas", en: "sleep eight hours", healthy: true },
  { inf: "hacer", wrongConj: "haces", restEs: "ejercicio regularmente", en: "do exercise regularly", healthy: true },
  { inf: "practicar", wrongConj: "practicas", restEs: "deporte", en: "play sport", healthy: true },
  { inf: "evitar", wrongConj: "evitas", restEs: "la comida basura", en: "avoid junk food", healthy: true },
  { inf: "llevar", wrongConj: "llevas", restEs: "una dieta equilibrada", en: "follow a balanced diet", healthy: true },
  { inf: "desayunar", wrongConj: "desayunas", restEs: "bien cada mañana", en: "have a good breakfast every morning", healthy: true },
  { inf: "acostarse", infTu: "acostarte", wrongConj: "te acuestas", restEs: "temprano", en: "go to bed early", healthy: true },
  { inf: "relajarse", infTu: "relajarte", wrongConj: "te relajas", restEs: "después del colegio", en: "relax after school", healthy: true },
  { inf: "comer", wrongConj: "comes", restEs: "comida rápida", en: "eat fast food", healthy: false },
  { inf: "beber", wrongConj: "bebes", restEs: "refrescos azucarados", en: "drink sugary fizzy drinks", healthy: false },
  { inf: "beber", wrongConj: "bebes", restEs: "bebidas energéticas", en: "drink energy drinks", healthy: false },
  { inf: "picar", wrongConj: "picas", restEs: "golosinas entre horas", en: "snack on sweets between meals", healthy: false },
  { inf: "pasar", wrongConj: "pasas", restEs: "demasiado tiempo delante de la pantalla", en: "spend too much time in front of the screen", healthy: false },
  { inf: "acostarse", infTu: "acostarte", wrongConj: "te acuestas", restEs: "tarde", en: "go to bed late", healthy: false },
  { inf: "saltarse", infTu: "saltarte", wrongConj: "te saltas", restEs: "el desayuno", en: "skip breakfast", healthy: false },
  { inf: "llevar", wrongConj: "llevas", restEs: "una vida sedentaria", en: "lead a sedentary lifestyle", healthy: false },
];

interface AdviceFrame {
  es: string;
  en: string;
  personalTu: boolean;
  positive: boolean;
}

const ADVICE_FRAMES: readonly AdviceFrame[] = [
  { es: "Se debe", en: "One should", personalTu: false, positive: true },
  { es: "Hay que", en: "One must", personalTu: false, positive: true },
  { es: "Deberías", en: "You should", personalTu: true, positive: true },
  { es: "Tienes que", en: "You have to", personalTu: true, positive: true },
  { es: "Es imprescindible", en: "It is essential to", personalTu: false, positive: true },
  { es: "Es importante", en: "It is important to", personalTu: false, positive: true },
  { es: "No se debe", en: "One must not", personalTu: false, positive: false },
  { es: "No hay que", en: "One should not", personalTu: false, positive: false },
  { es: "No deberías", en: "You should not", personalTu: true, positive: false },
];

const PURPOSES: readonly { es: string; en: string }[] = [
  { es: "para estar en forma", en: "in order to keep fit" },
  { es: "para reducir el estrés", en: "in order to reduce stress" },
  { es: "para cuidar la salud", en: "in order to look after health" },
  { es: "para dormir mejor", en: "in order to sleep better" },
  { es: "para tener más energía", en: "in order to have more energy" },
];

interface WellbeingPhrase {
  es: string;
  en: string;
  trapEs?: string;
  trapFeedback?: string;
  hint: string;
}

const WELLBEING_ITEMS: readonly WellbeingPhrase[] = [
  { es: "Me acuesto temprano", en: "I go to bed early", trapEs: "Acuesto temprano", trapFeedback: "Include reflexive **me**: *Me acuesto temprano.*", hint: "*Acostarse* is reflexive and *o → ue*." },
  { es: "Me acuesto tarde", en: "I go to bed late", trapEs: "Me acosto tarde", trapFeedback: "Apply *o → ue* stem change: **Me acuesto tarde.**", hint: "*Acostarse* changes *o → ue*." },
  { es: "Me levanto temprano", en: "I get up early", trapEs: "Levanto temprano", trapFeedback: "Include reflexive **me**: *Me levanto temprano.*", hint: "Reflexive *levantarse* → *me levanto*." },
  { es: "Me siento con energía", en: "I feel energetic", trapEs: "Me sento con energía", trapFeedback: "*Sentirse* shifts *e → ie*: **Me siento con energía.**", hint: "*Sentirse* is reflexive and *e → ie*." },
  { es: "Me relajo después del colegio", en: "I relax after school", trapEs: "Relajo después del colegio", trapFeedback: "*Relajarse* is reflexive: **Me relajo**.", hint: "Reflexive *relajarse* → *me relajo*." },
  { es: "Me desconecto del móvil", en: "I switch off from my phone", trapEs: "Desconecto del móvil", trapFeedback: "Include reflexive **me**: **Me desconecto del móvil.**", hint: "Check the accent on *móvil*." },
  { es: "Reduce el estrés", en: "It reduces stress", trapEs: "Reduce la estrés", trapFeedback: "*El estrés* is masculine with an accent on *é*.", hint: "Masculine noun with accent: *el estrés*." },
  { es: "Me da energía", en: "It gives me energy", hint: "*Dar* (3rd-person) = *da*; accent on *energía*." },
  { es: "Despeja la mente", en: "It clears the mind", hint: "*Despejar* + *la mente*." },
  { es: "Fortalece el corazón", en: "It strengthens the heart", hint: "Check the accent on *corazón*." },
  { es: "Mejora el sueño", en: "It improves sleep", hint: "*Mejorar* + *el sueño*." },
  { es: "Me ayuda a relajarme", en: "It helps me to relax", trapEs: "Me ayuda relajarme", trapFeedback: "Always include **a** after *ayudar*: **Me ayuda a relajarme.**", hint: "Mandatory *a* after *ayuda*!" },
  { es: "Salgo a correr", en: "I go out for a run", trapEs: "Salgo correr", trapFeedback: "Include **a** after *salir*: **Salgo a correr.**", hint: "*Salir* (*yo*: *salgo*) + *a correr*." },
  { es: "Juego al tenis", en: "I play tennis", trapEs: "Juego tenis", trapFeedback: "Include **al** (*a + el*) after *jugar*: **Juego al tenis.**", hint: "*Jugar a + el* = *al*." },
  { es: "Juego al baloncesto", en: "I play basketball", trapEs: "Juego baloncesto", trapFeedback: "Include **al** (*a + el*) after *jugar*: **Juego al baloncesto.**", hint: "*Jugar* (*u → ue*) + *al baloncesto*." },
  { es: "Hago natación", en: "I do swimming", trapEs: "Juego natación", trapFeedback: "Individual sport *natación* uses **hacer** (*Hago natación*), not *jugar*!", hint: "*Hacer* (*yo*: *hago*) + *natación*." },
  { es: "Hago ciclismo", en: "I do cycling", trapEs: "Juego ciclismo", trapFeedback: "Use **hacer** (*Hago ciclismo*) for cycling!", hint: "*Hacer* + *ciclismo*." },
  { es: "Paso demasiado tiempo delante de la pantalla", en: "I spend too much time in front of the screen", trapEs: "Gasto demasiado tiempo delante de la pantalla", trapFeedback: "Spending time uses **pasar**, not *gastar* (money)!", hint: "Use *pasar* + masculine *demasiado tiempo*." },
];

const FREQ_PHRASES: readonly { es: string; en: string }[] = [
  { es: "todos los días", en: "every day" },
  { es: "tres veces a la semana", en: "three times a week" },
  { es: "dos veces a la semana", en: "twice a week" },
  { es: "a menudo", en: "often" },
  { es: "regularmente", en: "regularly" },
  { es: "de vez en cuando", en: "from time to time" },
];

const HEALTH_VERBS_T1: readonly string[] = ["comer", "beber", "dormir", "practicar", "evitar", "mejorar", "descansar", "entrenar"];
const HEALTH_VERBS_T2: readonly string[] = ["hacer", "tener", "poder", "salir", "poner", "comer", "beber", "dormir", "evitar", "correr"];
const HEALTH_VERBS_T3: readonly string[] = ["hacer", "tener", "poder", "salir", "poner", "dormir", "acostarse", "levantarse", "relajarse", "sentirse", "jugar", "practicar"];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Balanced Diet & Quantifier Agreement
  // =========================================================================
  {
    id: "healthy-living-diet.diet-habits-vocab",
    topicId: "healthy-living-diet",
    title: "Balanced Diet & Quantifier Agreement",
    level: 1,
    guideRef: "balanced-diet-habits",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const item = rng.pick(DIET_PHRASES_T1);
        return {
          prompt: `Translate this lifestyle expression into Spanish: **${item.en}**`,
          answer: { type: "text", accept: [item.es], display: item.es },
          traps: item.trapEs && item.trapFeedback ? [{ spec: { type: "text", accept: [item.trapEs] }, feedback: item.trapFeedback }] : undefined,
          hint: item.hint,
          solution: [item.hint, `Spanish phrase: **${item.es}**`],
        };
      }

      if (tier === 2) {
        const q = rng.pick(QUANTIFIER_SENTENCES);
        const ans = `${q.verbEs} ${q.quantEs} ${q.nounEs}`;
        const bad = `${q.verbEs} ${q.wrongEs} ${q.nounEs}`;
        return {
          prompt: `Translate into Spanish with exact quantifier agreement: **${q.verbEn} ${q.quantEn} ${q.nounEn}.**`,
          answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
          traps: [
            {
              spec: { type: "text", accept: [bad, `${bad}.`] },
              feedback: `Check the gender and number of *${q.nounEs}*: use **${q.quantEs} ${q.nounEs}**!`,
            },
          ],
          hint: `Check whether *${q.nounEs}* is masculine/feminine and singular/plural to agree *${q.quantEs}*.`,
          solution: [
            `Verb: **${q.verbEs}**`,
            `Agreeing quantifier + noun: **${q.quantEs} ${q.nounEs}** → **${ans}.**`,
          ],
        };
      }

      // Tier 3: Healthy swap with "en lugar de"
      const healthyOptions = [
        { es: "fruta", en: "fruit" },
        { es: "verduras", en: "vegetables" },
        { es: "agua", en: "water" },
        { es: "comida casera", en: "home-cooked food" },
        { es: "pescado azul", en: "oily fish" },
        { es: "pan integral", en: "wholemeal bread" },
        { es: "frutos secos", en: "nuts" },
      ] as const;
      const junkOptions = [
        { es: "comida basura", en: "junk food" },
        { es: "comida rápida", en: "fast food" },
        { es: "dulces", en: "sweets" },
        { es: "golosinas", en: "candy" },
        { es: "patatas fritas", en: "crisps" },
        { es: "refrescos azucarados", en: "sugary fizzy drinks" },
      ] as const;
      const h = rng.pick(healthyOptions);
      const j = rng.pick(junkOptions);
      const ans = `Prefiero ${h.es} en lugar de ${j.es}`;
      return {
        prompt: `Translate this healthy lifestyle contrast (start with *Prefiero*): **I prefer ${h.en} instead of ${j.en}.**`,
        answer: { type: "text", accept: [ans, `${ans}.`, `Yo ${ans.toLowerCase()}`, `Yo ${ans.toLowerCase()}.`], display: `${ans}.` },
        hint: "Use **en lugar de** ('instead of') between the two food nouns.",
        solution: [
          `Healthy choice: *Prefiero ${h.es}*`,
          `Contrast phrase: **en lugar de** *${j.es}* → **${ans}.**`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Lifestyle Advice Builder (Se debe, Hay que, Deberías)
  // =========================================================================
  {
    id: "healthy-living-diet.advice-structures",
    topicId: "healthy-living-diet",
    title: "Lifestyle Advice (Se debe, Hay que, Deberías)",
    level: 1,
    guideRef: "giving-health-advice",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const action = rng.pick(ADVICE_ACTIONS);
      const matchingFrames = ADVICE_FRAMES.filter((f) => f.positive === action.healthy);
      const framePool =
        tier === 1
          ? matchingFrames.filter((f) => f.es === "Se debe" || f.es === "No se debe" || f.es === "Hay que" || f.es === "No hay que")
          : matchingFrames;
      const frame = rng.pick(framePool.length ? framePool : matchingFrames);
      const infForm = frame.personalTu && action.infTu ? action.infTu : action.inf;
      const baseAns = `${frame.es} ${infForm} ${action.restEs}`;
      const wrongConjAns = `${frame.es} ${action.wrongConj} ${action.restEs}`;

      if (tier < 3) {
        const acceptList = [baseAns, `${baseAns}.`];
        if (frame.personalTu && action.infTu) {
          // Also allow "Te deberías acostar..." front pronoun placement
          const bareInf = action.inf.slice(0, -2);
          const altFront = frame.es.startsWith("No ")
            ? `No te ${frame.es.slice(3).toLowerCase()} ${bareInf} ${action.restEs}`
            : `Te ${frame.es.toLowerCase()} ${bareInf} ${action.restEs}`;
          acceptList.push(altFront, `${altFront}.`);
        }
        return {
          prompt: `Translate this lifestyle advice using **${frame.es}**: **${frame.en} ${action.en}.**`,
          answer: { type: "text", accept: acceptList, display: `${baseAns}.` },
          traps: [
            {
              spec: { type: "text", accept: [wrongConjAns, `${wrongConjAns}.`] },
              feedback: `NEVER conjugate the verb after *${frame.es}* — keep the infinitive **${infForm}**!`,
            },
          ],
          hint: `Follow *${frame.es}* directly with the infinitive **${infForm}**${frame.personalTu && action.infTu ? " (reflexive -se → -te for tú!)" : ""}.`,
          solution: [
            `Advice frame: **${frame.es}**`,
            `Unconjugated infinitive: **${infForm}**`,
            `Complete advice: **${baseAns}.**`,
          ],
        };
      }

      // Tier 3: Advice + para + purpose clause
      const purpose = rng.pick(PURPOSES);
      const fullAns = `${baseAns} ${purpose.es}`;
      return {
        prompt: `Translate this extended advice using **${frame.es}**: **${frame.en} ${action.en} ${purpose.en}.**`,
        answer: { type: "text", accept: [fullAns, `${fullAns}.`], display: `${fullAns}.` },
        traps: [
          {
            spec: { type: "text", accept: [`${wrongConjAns} ${purpose.es}`, `${wrongConjAns} ${purpose.es}.`] },
            feedback: `Keep **${infForm}** in the infinitive after *${frame.es}*!`,
          },
        ],
        hint: `Combine *${frame.es}* + infinitive **${infForm}** + *${purpose.es}*.`,
        solution: [
          `Advice clause: **${baseAns}**`,
          `Purpose clause: **${purpose.es}**`,
          `Full sentence: **${fullAns}.**`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Sport, Sleep, Screens & Mental Wellbeing
  // =========================================================================
  {
    id: "healthy-living-diet.wellbeing-frequency",
    topicId: "healthy-living-diet",
    title: "Sport, Sleep, Screens & Mental Wellbeing",
    level: 2,
    guideRef: "sport-fitness-stress",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const w = rng.pick(WELLBEING_ITEMS);
        return {
          prompt: `Translate into Spanish: **${w.en}.**`,
          answer: { type: "text", accept: [w.es, `${w.es}.`], display: `${w.es}.` },
          traps: w.trapEs && w.trapFeedback ? [{ spec: { type: "text", accept: [w.trapEs, `${w.trapEs}.`] }, feedback: w.trapFeedback }] : undefined,
          hint: w.hint,
          solution: [w.hint, `Answer: **${w.es}.**`],
        };
      }

      if (tier === 2) {
        const sports = [
          { es: "Juego al tenis", en: "I play tennis" },
          { es: "Juego al baloncesto", en: "I play basketball" },
          { es: "Juego al fútbol", en: "I play football" },
          { es: "Hago natación", en: "I do swimming" },
          { es: "Hago ciclismo", en: "I do cycling" },
          { es: "Salgo a correr", en: "I go out for a run" },
          { es: "Entreno en el gimnasio", en: "I train at the gym" },
        ] as const;
        const sp = rng.pick(sports);
        const fr = rng.pick(FREQ_PHRASES);
        const ans = `${sp.es} ${fr.es}`;
        return {
          prompt: `Translate into Spanish: **${sp.en} ${fr.en}.**`,
          answer: { type: "text", accept: [ans, `${ans}.`, `${fr.es.charAt(0).toUpperCase() + fr.es.slice(1)} ${sp.es.toLowerCase()}`, `${fr.es.charAt(0).toUpperCase() + fr.es.slice(1)} ${sp.es.toLowerCase()}.`], display: `${ans}.` },
          hint: "Check *jugar al* vs *hacer* and remember *a la semana* for weekly frequencies.",
          solution: [
            `Activity: **${sp.es}**`,
            `Frequency: **${fr.es}** → **${ans}.**`,
          ],
        };
      }

      // Tier 3: Activity + frequency + mental wellbeing justification
      const sports = [
        { es: "Salgo a correr", en: "I go out for a run" },
        { es: "Juego al tenis", en: "I play tennis" },
        { es: "Hago natación", en: "I do swimming" },
        { es: "Hago ciclismo", en: "I do cycling" },
        { es: "Juego al baloncesto", en: "I play basketball" },
      ] as const;
      const benefits = [
        { es: "me ayuda a relajarme", en: "it helps me to relax" },
        { es: "reduce el estrés", en: "it reduces stress" },
        { es: "me da energía", en: "it gives me energy" },
        { es: "despeja la mente", en: "it clears the mind" },
        { es: "fortalece el corazón", en: "it strengthens the heart" },
        { es: "mejora el sueño", en: "it improves sleep" },
      ] as const;
      const sp = rng.pick(sports);
      const ben = rng.pick(benefits);
      const ans = `${sp.es} porque ${ben.es}`;
      return {
        prompt: `Translate this justified wellbeing statement: **${sp.en} because ${ben.en}.**`,
        answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
        hint: "Watch *jugar al* vs *hacer*, mandatory *a* in *me ayuda a relajarme*, and accents (*estrés, energía, corazón*).",
        solution: [
          `Sport clause: **${sp.es}**`,
          `Wellbeing benefit: **porque ${ben.es}** → **${ans}.**`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Future Health Resolutions (Immediate, Simple Future & Preterite)
  // =========================================================================
  {
    id: "healthy-living-diet.future-resolutions",
    topicId: "healthy-living-diet",
    title: "Future Health Resolutions & Irregular Stems",
    level: 3,
    guideRef: "future-health-resolutions",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const verbPool = tier === 1 ? HEALTH_VERBS_T1 : tier === 2 ? HEALTH_VERBS_T2 : HEALTH_VERBS_T3;
      const tensePool: readonly Tense[] =
        tier === 1
          ? ["near-future", "future"]
          : tier === 2
            ? ["future", "preterite"]
            : ["preterite", "near-future", "future", "present"];
      const personPool: readonly Person[] =
        tier === 1
          ? ["yo", "tú", "él", "nosotros"]
          : tier === 2
            ? ["yo", "tú", "él", "nosotros", "ellos"]
            : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

      const inf = rng.pick(verbPool);
      const tense = rng.pick(tensePool);
      const person = rng.pick(personPool);
      const canon = conjugate(inf, tense, person);
      const accept = acceptedForms(inf, tense, person);
      const gloss = englishGloss(inf, tense, person);

      const cue: Record<string, string> = {
        present: "Actualmente",
        preterite: "El mes pasado",
        "near-future": "Mañana",
        future: "El año que viene",
      };

      const irregHint =
        tense === "future" && ["hacer", "tener", "poder", "salir", "poner"].includes(inf)
          ? " Remember: irregular Simple Future stem (*har-, tendr-, podr-, saldr-, pondr-*), and NO accent on *-emos*!"
          : tense === "future"
            ? " Attach Simple Future endings to the full infinitive — accent on every ending except *-emos*."
            : "";

      return {
        prompt: `Conjugate **${inf}** in the **${TENSE_LABEL[tense]}** for **${PERSON_LABEL[person]}** *(cue: ${cue[tense]} — "${gloss}")*.`,
        answer: { type: "text", accept, display: canon },
        hint: `Check person (*${person}*), tense (${TENSE_LABEL[tense]}) and written accents.${irregHint}`,
        solution: [
          `Verb: **${inf}** · Tense: **${TENSE_LABEL[tense]}** · Person: **${person}**.`,
          `Conjugated form: **${canon}** (*${gloss}*).`,
        ],
      };
    },
  },
];
