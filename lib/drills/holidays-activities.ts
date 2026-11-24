import type { Drill, DrillItem, Rng } from "./types.ts";
import { acceptedForms, conjugate, type Person } from "../spanish/verbs.ts";

const PERSON_PROMPT: Record<Person, string> = {
  yo: "yo (I)",
  tú: "tú (you)",
  él: "él / ella (he / she)",
  nosotros: "nosotros (we)",
  vosotros: "vosotros (you all)",
  ellos: "ellos / ellas (they)",
};

const DESTINATIONS: ReadonlyArray<{ en: string; es: string; trap?: string; note: string }> = [
  { en: "to Spain", es: "a España", trap: "en España", note: "Countries take bare *a* after *ir*." },
  { en: "to France", es: "a Francia", trap: "en Francia", note: "Countries take bare *a* after *ir*." },
  { en: "to Greece", es: "a Grecia", trap: "en Grecia", note: "Countries take bare *a* after *ir*." },
  { en: "to Italy", es: "a Italia", trap: "en Italia", note: "Countries take bare *a* after *ir*." },
  { en: "to Germany", es: "a Alemania", trap: "en Alemania", note: "Countries take bare *a* after *ir*." },
  { en: "to the coast", es: "a la costa", trap: "al costa", note: "*la costa* is feminine → *a la costa*." },
  { en: "to the beach", es: "a la playa", trap: "al playa", note: "*la playa* is feminine → *a la playa*." },
  { en: "to the mountains", es: "a la montaña", trap: "al montaña", note: "*la montaña* is feminine → *a la montaña*." },
  { en: "to the island", es: "a la isla", trap: "al isla", note: "*la isla* is feminine → *a la isla*." },
  { en: "to the countryside", es: "al campo", trap: "a el campo", note: "*a + el campo* contracts to **al campo**." },
  { en: "abroad", es: "al extranjero", trap: "a el extranjero", note: "*a + el extranjero* contracts to **al extranjero**." },
  { en: "to the north of Spain", es: "al norte de España", trap: "a el norte de España", note: "*a + el norte* contracts to **al norte**." },
  { en: "to the south of Spain", es: "al sur de España", trap: "a el sur de España", note: "*a + el sur* contracts to **al sur**." },
  { en: "to the village", es: "al pueblo", trap: "a el pueblo", note: "*a + el pueblo* contracts to **al pueblo**." },
  { en: "to the Balearic Islands", es: "a las Islas Baleares", trap: "a los Islas Baleares", note: "*las islas* is feminine plural → *a las*." },
  { en: "to the United States", es: "a los Estados Unidos", trap: "al Estados Unidos", note: "*los Estados Unidos* is masculine plural → *a los*." },
];

const TRANSPORTS: ReadonlyArray<{ en: string; es: string; trap: string; note: string }> = [
  { en: "by plane", es: "en avión", trap: "en el avión", note: "Drop the article after *en* for transport." },
  { en: "by train", es: "en tren", trap: "en el tren", note: "Vehicles use bare *en* + noun." },
  { en: "by boat", es: "en barco", trap: "a barco", note: "Vehicles use *en*, not *a*." },
  { en: "by ferry", es: "en ferri", trap: "a ferri", note: "Vehicles use *en*, not *a*." },
  { en: "by car", es: "en coche", trap: "en el coche", note: "Use bare *en coche*." },
  { en: "by coach", es: "en autocar", trap: "a autocar", note: "Use bare *en autocar*." },
  { en: "by bike", es: "en bicicleta", trap: "a bicicleta", note: "Use *en bicicleta* (or *en bici*)." },
  { en: "on foot", es: "a pie", trap: "en pie", note: "*On foot* is the key exception: **a pie**, never *en pie*!" },
];

const COMPANIONS: ReadonlyArray<{ en: string; es: string }> = [
  { en: "with my family", es: "con mi familia" },
  { en: "with my parents", es: "con mis padres" },
  { en: "with my friends", es: "con mis amigos" },
  { en: "with the school", es: "con el colegio" },
];

const REGULAR_PRETERITE_VERBS: ReadonlyArray<{ inf: string; en: string }> = [
  { inf: "visitar", en: "to visit" },
  { inf: "nadar", en: "to swim" },
  { inf: "tomar", en: "to take / sunbathe (tomar el sol)" },
  { inf: "comprar", en: "to buy" },
  { inf: "viajar", en: "to travel" },
  { inf: "descansar", en: "to rest" },
  { inf: "bailar", en: "to dance" },
  { inf: "esquiar", en: "to ski" },
  { inf: "comer", en: "to eat" },
  { inf: "beber", en: "to drink" },
  { inf: "salir", en: "to go out" },
  { inf: "subir", en: "to go up / climb" },
];

const TRICKY_PRETERITE_VERBS: ReadonlyArray<{ inf: string; en: string; tip: string }> = [
  { inf: "sacar", en: "to take (photos)", tip: "-car → -qué in *yo* only" },
  { inf: "practicar", en: "to practise", tip: "-car → -qué in *yo* only" },
  { inf: "buscar", en: "to look for", tip: "-car → -qué in *yo* only" },
  { inf: "jugar", en: "to play (sport)", tip: "-gar → -gué in *yo* only (NO *ue* stem change!)" },
  { inf: "llegar", en: "to arrive", tip: "-gar → -gué in *yo* only" },
  { inf: "pagar", en: "to pay", tip: "-gar → -gué in *yo* only" },
  { inf: "cruzar", en: "to cross", tip: "-zar → -cé in *yo* only" },
  { inf: "ir", en: "to go", tip: "irregular twin with *ser*: fui, fuiste, fue, fuimos, fuisteis, fueron (no accents)" },
  { inf: "ser", en: "to be", tip: "irregular twin with *ir*: fui, fuiste, fue, fuimos, fuisteis, fueron (no accents)" },
  { inf: "hacer", en: "to do / make", tip: "irregular stem *hic-* (*hizo* in él/ella, no accents)" },
  { inf: "ver", en: "to see", tip: "irregular short forms: vi, viste, vio, vimos, visteis, vieron (no accents)" },
  { inf: "tener", en: "to have", tip: "irregular stem *tuv-*: tuve, tuviste, tuvo, tuvimos… (no accents)" },
];

const CONTEXT_PRETERITE: ReadonlyArray<{
  inf: string;
  marker: string;
  tail: string;
  person: Person;
  subjLabel: string;
}> = [
  { inf: "sacar", marker: "El verano pasado", tail: "muchas fotos en la costa.", person: "yo", subjLabel: "yo" },
  { inf: "jugar", marker: "Ayer", tail: "al voleibol en la playa.", person: "yo", subjLabel: "yo" },
  { inf: "llegar", marker: "El lunes", tail: "tarde al aeropuerto.", person: "yo", subjLabel: "yo" },
  { inf: "practicar", marker: "En agosto", tail: "deportes acuáticos.", person: "yo", subjLabel: "yo" },
  { inf: "cruzar", marker: "El sábado pasado", tail: "la frontera en coche.", person: "yo", subjLabel: "yo" },
  { inf: "pagar", marker: "Ayer", tail: "los billetes de tren.", person: "yo", subjLabel: "yo" },
  { inf: "ir", marker: "El año pasado", tail: "a Grecia en avión.", person: "yo", subjLabel: "yo" },
  { inf: "ir", marker: "El verano pasado", tail: "a Mallorca en barco.", person: "nosotros", subjLabel: "nosotros" },
  { inf: "hacer", marker: "En Valencia", tail: "turismo por el centro.", person: "yo", subjLabel: "yo" },
  { inf: "hacer", marker: "Ayer", tail: "mucho sol en la isla.", person: "él", subjLabel: "él / impersonal" },
  { inf: "ver", marker: "En Granada", tail: "la Alhambra.", person: "yo", subjLabel: "yo" },
  { inf: "tener", marker: "En el aeropuerto", tail: "un retraso de dos horas.", person: "nosotros", subjLabel: "nosotros" },
  { inf: "nadar", marker: "Ayer mi hermana", tail: "en el mar.", person: "él", subjLabel: "ella" },
  { inf: "tomar", marker: "El domingo mis padres", tail: "el sol en la playa.", person: "ellos", subjLabel: "ellos" },
  { inf: "comer", marker: "Anoche", tail: "paella y helados.", person: "nosotros", subjLabel: "nosotros" },
  { inf: "beber", marker: "Ayer", tail: "zumo de naranja frío.", person: "yo", subjLabel: "yo" },
  { inf: "perder", marker: "El viernes pasado", tail: "el vuelo a Málaga.", person: "ellos", subjLabel: "ellos" },
  { inf: "relajarse", marker: "En Tenerife", tail: "junto al mar.", person: "yo", subjLabel: "yo" },
  { inf: "volver", marker: "El domingo", tail: "al pueblo en tren.", person: "nosotros", subjLabel: "nosotros" },
  { inf: "visitar", marker: "El mes pasado", tail: "dos museos famosos.", person: "tú", subjLabel: "tú" },
];

const FUTURE_VERBS: ReadonlyArray<{ inf: string; en: string; irregStem?: string }> = [
  { inf: "viajar", en: "to travel" },
  { inf: "visitar", en: "to visit" },
  { inf: "nadar", en: "to swim" },
  { inf: "descansar", en: "to rest" },
  { inf: "comprar", en: "to buy" },
  { inf: "esquiar", en: "to ski" },
  { inf: "bailar", en: "to dance" },
  { inf: "comer", en: "to eat" },
  { inf: "beber", en: "to drink" },
  { inf: "ir", en: "to go" },
  { inf: "ver", en: "to see" },
  { inf: "hacer", en: "to do / make", irregStem: "har-" },
  { inf: "tener", en: "to have", irregStem: "tendr-" },
  { inf: "salir", en: "to go out", irregStem: "saldr-" },
  { inf: "volver", en: "to return" },
];

const WEATHER_CARDS: ReadonlyArray<{
  en: string;
  tenseLabel: string;
  marker: string;
  accept: string[];
  trap?: string;
  trapMsg?: string;
  tip: string;
}> = [
  { en: "it was very sunny", tenseLabel: "preterite", marker: "Ayer", accept: ["hizo mucho sol"], trap: "hizo muy sol", trapMsg: "*Sol* is a noun — use **mucho sol**, never *muy sol*!", tip: "Preterite of *hacer* = *hizo* + *mucho sol*." },
  { en: "it was very hot", tenseLabel: "preterite", marker: "El verano pasado", accept: ["hizo mucho calor"], trap: "hizo muy calor", trapMsg: "*Calor* is a noun — use **mucho calor**, not *muy calor*!", tip: "Preterite weather: *hizo mucho calor*." },
  { en: "it was very cold", tenseLabel: "preterite", marker: "El invierno pasado", accept: ["hizo mucho frío"], trap: "hizo muy frío", trapMsg: "*Frío* is a noun here — use **mucho frío**!", tip: "Preterite weather: *hizo mucho frío*." },
  { en: "it was very windy", tenseLabel: "preterite", marker: "El sábado", accept: ["hizo mucho viento"], trap: "hizo muy viento", trapMsg: "Use **mucho viento**, never *muy viento*.", tip: "Preterite weather: *hizo mucho viento*." },
  { en: "the weather was good", tenseLabel: "preterite", marker: "En agosto", accept: ["hizo buen tiempo"], trap: "hace buen tiempo", trapMsg: "Shift *hace* into the preterite (**hizo**).", tip: "Preterite: *hizo buen tiempo*." },
  { en: "the weather was bad", tenseLabel: "preterite", marker: "La semana pasada", accept: ["hizo mal tiempo"], trap: "hace mal tiempo", trapMsg: "Use preterite **hizo mal tiempo**.", tip: "Preterite: *hizo mal tiempo*." },
  { en: "it rained", tenseLabel: "preterite", marker: "Ayer", accept: ["llovió"], trap: "llueve", trapMsg: "*Llueve* is present tense; preterite of *llover* is **llovió**.", tip: "Regular -ER preterite: *llover → llovió*." },
  { en: "it snowed", tenseLabel: "preterite", marker: "El invierno pasado", accept: ["nevó"], trap: "nieva", trapMsg: "*Nieva* is present tense; preterite of *nevar* is **nevó**.", tip: "Regular -AR preterite: *nevar → nevó*." },
  { en: "there was a storm", tenseLabel: "preterite", marker: "Anoche", accept: ["hubo tormenta", "hubo una tormenta"], trap: "hay tormenta", trapMsg: "*Hay* is present tense; preterite of *haber* is **hubo**.", tip: "Preterite of *hay* = *hubo*." },
  { en: "it is very sunny", tenseLabel: "present", marker: "En verano normalmente", accept: ["hace mucho sol"], trap: "hace muy sol", trapMsg: "Use **mucho sol** before the noun *sol*.", tip: "Present: *hace mucho sol*." },
  { en: "it is very hot", tenseLabel: "present", marker: "En julio siempre", accept: ["hace mucho calor"], trap: "hace muy calor", trapMsg: "Use **mucho calor**, never *muy calor*.", tip: "Present: *hace mucho calor*." },
  { en: "it is raining", tenseLabel: "present", marker: "Hoy", accept: ["llueve"], trap: "llovió", trapMsg: "*Llovió* is past tense; present tense is **llueve**.", tip: "Present stem-changer (o→ue): *llueve*." },
  { en: "it is snowing", tenseLabel: "present", marker: "En enero", accept: ["nieva"], trap: "nevó", trapMsg: "*Nevó* is past tense; present tense is **nieva**.", tip: "Present stem-changer (e→ie): *nieva*." },
  { en: "it is cloudy", tenseLabel: "present", marker: "Hoy", accept: ["está nublado"], trap: "es nublado", trapMsg: "Weather states use *estar*, not *ser*: **está nublado**.", tip: "Use *estar*: *está nublado*." },
  { en: "it is going to be sunny", tenseLabel: "immediate future", marker: "Mañana", accept: ["va a hacer sol"], trap: "va hacer sol", trapMsg: "Keep the **a** in *va **a** hacer sol*.", tip: "Immediate future: *va a hacer sol*." },
  { en: "it is going to be very hot", tenseLabel: "immediate future", marker: "El próximo verano", accept: ["va a hacer mucho calor"], trap: "va a hacer muy calor", trapMsg: "Use **mucho calor**, not *muy calor*.", tip: "Immediate future: *va a hacer mucho calor*." },
  { en: "it is going to be cold", tenseLabel: "immediate future", marker: "En diciembre", accept: ["va a hacer frío"], trap: "va hacer frío", trapMsg: "Don't drop **a** in *va a hacer frío*.", tip: "Immediate future: *va a hacer frío*." },
  { en: "it is going to rain", tenseLabel: "immediate future", marker: "Mañana", accept: ["va a llover"], trap: "va a llueve", trapMsg: "Use the infinitive **llover** after *va a*, never conjugated *llueve*.", tip: "Immediate future: *va a llover*." },
  { en: "it is going to snow", tenseLabel: "immediate future", marker: "Este fin de semana", accept: ["va a nevar"], trap: "va a nieva", trapMsg: "Use the infinitive **nevar** after *va a*, never *nieva*.", tip: "Immediate future: *va a nevar*." },
  { en: "it will be good weather", tenseLabel: "simple future", marker: "El año que viene", accept: ["hará buen tiempo"], trap: "hacerá buen tiempo", trapMsg: "*Hacer* uses irregular future stem **har-**: **hará**.", tip: "Simple future of *hacer* = *hará*." },
];

const NOUN_AGREE: ReadonlyArray<{ noun: string; verb: "fue" | "fueron"; gen: "ms" | "fs" | "mp" | "fp" }> = [
  { noun: "Las vacaciones", verb: "fueron", gen: "fp" },
  { noun: "El viaje", verb: "fue", gen: "ms" },
  { noun: "La playa", verb: "fue", gen: "fs" },
  { noun: "El vuelo", verb: "fue", gen: "ms" },
  { noun: "La isla", verb: "fue", gen: "fs" },
  { noun: "Los monumentos", verb: "fueron", gen: "mp" },
  { noun: "Las playas", verb: "fueron", gen: "fp" },
  { noun: "El destino", verb: "fue", gen: "ms" },
];

const ADJ_FORMS: ReadonlyArray<{ base: string; en: string; ms: string; fs: string; mp: string; fp: string }> = [
  { base: "divertido", en: "fun", ms: "divertido", fs: "divertida", mp: "divertidos", fp: "divertidas" },
  { base: "fantástico", en: "fantastic", ms: "fantástico", fs: "fantástica", mp: "fantásticos", fp: "fantásticas" },
  { base: "tranquilo", en: "quiet / peaceful", ms: "tranquilo", fs: "tranquila", mp: "tranquilos", fp: "tranquilas" },
  { base: "precioso", en: "gorgeous", ms: "precioso", fs: "preciosa", mp: "preciosos", fp: "preciosas" },
  { base: "aburrido", en: "boring", ms: "aburrido", fs: "aburrida", mp: "aburridos", fp: "aburridas" },
  { base: "inolvidable", en: "unforgettable", ms: "inolvidable", fs: "inolvidable", mp: "inolvidables", fp: "inolvidables" },
  { base: "relajante", en: "relaxing", ms: "relajante", fs: "relajante", mp: "relajantes", fp: "relajantes" },
  { base: "emocionante", en: "exciting", ms: "emocionante", fs: "emocionante", mp: "emocionantes", fp: "emocionantes" },
];

const NARRATIVE_CLOZE: ReadonlyArray<{
  prompt: string;
  accept: string[];
  trap?: string;
  trapMsg?: string;
  hint: string;
  sol: string;
}> = [
  { prompt: "Complete the contrast connective (*however*): *Hizo sol en Málaga; ___, perdí mi maleta.*", accept: ["sin embargo"], trap: "porque", trapMsg: "*Porque* gives a reason; you need a contrast connective (*however*).", hint: "Two-word connective meaning *however*.", sol: "**sin embargo** = however." },
  { prompt: "Complete the consequence phrase (*therefore / so*): *Llovió todos los días; ___, fuimos a muchos museos.*", accept: ["por eso", "así que"], trap: "sin embargo", trapMsg: "Here Clause 2 is the direct result of Clause 1 — use *por eso* or *así que*.", hint: "Means *for that reason / therefore*.", sol: "**por eso** (or **así que**) introduces a consequence." },
  { prompt: "Complete (*the best thing was that*): *___ nadé con delfines en el mar.*", accept: ["Lo mejor fue que"], trap: "Lo mejor fui que", trapMsg: "Use 3rd-person singular **fue** (*it was*), not *fui* (*I was*).", hint: "Four words starting with *Lo mejor…*", sol: "**Lo mejor fue que** = the best thing was that." },
  { prompt: "Complete (*the worst thing was that*): *___ el vuelo tuvo un retraso enorme.*", accept: ["Lo peor fue que"], trap: "Lo peor fui que", trapMsg: "Use **fue** (*it was*), not *fui*.", hint: "Four words starting with *Lo peor…*", sol: "**Lo peor fue que** = the worst thing was that." },
  { prompt: "Complete the wish (*I would like to visit*): *El año que viene ___ Japón.*", accept: ["me gustaría visitar"], trap: "me gustaría visito", trapMsg: "Follow *me gustaría* with the **infinitive** (*visitar*).", hint: "*Me gustaría* + infinitive.", sol: "**me gustaría visitar** = I would like to visit." },
  { prompt: "Complete the idiom (*I had a blast*): *En Mallorca ___ con mis amigos.* (Use *pasarlo bomba*.)", accept: ["lo pasé bomba"], trap: "lo paso bomba", trapMsg: "Put *pasar* in the *yo* preterite (**pasé**).", hint: "Pronoun *lo* + *yo* preterite of *pasar* + *bomba*.", sol: "**lo pasé bomba** = I had a blast." },
  { prompt: "Complete (*I had an awful time*): *Llovió cada día y ___.* (Use *pasarlo fatal*.)", accept: ["lo pasé fatal"], trap: "lo paso fatal", trapMsg: "Use preterite **lo pasé fatal**, not present *paso*.", hint: "*lo* + *yo* preterite of *pasar* + *fatal*.", sol: "**lo pasé fatal** = I had an awful time." },
  { prompt: "Complete with *although*: *___ hizo viento, fuimos a la playa.*", accept: ["Aunque"], trap: "Porque", trapMsg: "*Porque* means *because*; here we need *although*.", hint: "One-word connective meaning *although*.", sol: "**Aunque** = although." },
  { prompt: "Complete with *furthermore / moreover*: *Visité castillos; ___, probé platos típicos.*", accept: ["además"], trap: "sin embargo", trapMsg: "Both ideas are positive additions — use **además**.", hint: "One accented word meaning *furthermore*.", sol: "**además** = furthermore / also." },
  { prompt: "Translate (*Last summer I went abroad*): *___ al extranjero.*", accept: ["El verano pasado fui", "El verano pasado yo fui"], trap: "El verano pasado fuí", trapMsg: "No accent on *fui*!", hint: "*El verano pasado* + *yo* preterite of *ir*.", sol: "**El verano pasado fui** al extranjero." },
  { prompt: "Translate (*Next year we will travel*): *___ a Italia.* (Use simple future of *viajar*.)", accept: ["El año que viene viajaremos", "El próximo año viajaremos"], trap: "El año que viene vamos a viajar", trapMsg: "Use the **simple future** (**viajaremos**), not immediate future.", hint: "*El año que viene* + *nosotros* simple future of *viajar*.", sol: "**El año que viene viajaremos** (no accent on *-emos*)." },
  { prompt: "Complete the past verb (*I took photos*): *En Sevilla ___ muchas fotos.*", accept: ["saqué"], trap: "sacé", trapMsg: "Apply *-car → -qué*: **saqué**.", hint: "*sacar* in *yo* preterite (-car → -qué).", sol: "**saqué** (*sacar* → *saqué*)." },
  { prompt: "Complete the past verb (*I played*): *En el camping ___ al tenis.*", accept: ["jugué"], trap: "juegué", trapMsg: "No *ue* in preterite! Write **jugué**.", hint: "*jugar* in *yo* preterite (-gar → -gué, keep *u*).", sol: "**jugué** (*jugar* → *jugué*)." },
  { prompt: "Complete the simple future (*I will do sightseeing*): *En Roma ___ turismo.*", accept: ["haré"], trap: "haceré", trapMsg: "*Hacer* uses irregular stem **har-** → **haré**.", hint: "Irregular simple future stem of *hacer* + *-é*.", sol: "**haré** (*hacer* → *haré*)." },
  { prompt: "Complete the immediate future (*we are going to swim*): *Mañana ___ en el mar.*", accept: ["vamos a nadar"], trap: "vamos nadar", trapMsg: "Keep **a** between *vamos* and *nadar*!", hint: "*vamos* + *a* + infinitive.", sol: "**vamos a nadar** = we are going to swim." },
  { prompt: "Complete (*The holidays were fantastic*): *Las vacaciones ___.*", accept: ["fueron fantásticas"], trap: "fue fantástico", trapMsg: "*Las vacaciones* is feminine plural: **fueron fantásticas**.", hint: "Fem. pl. of *ser* (preterite) + *fantástico*.", sol: "**fueron fantásticas** agrees with feminine plural *las vacaciones*." },
];

export const drills: Drill[] = [
  // 1. Destinations, Contractions & Transport (Level 1)
  {
    id: "holidays-activities.destinations-prepositions",
    topicId: "holidays-activities",
    title: "Destinations, Contractions (al / a la) & Transport",
    level: 1,
    guideRef: "destinations-transport",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const dest = rng.pick(DESTINATIONS);
      const trans = rng.pick(TRANSPORTS);
      if (tier === 1) {
        if (rng.bool(0.55)) {
          return {
            prompt: `Translate the destination phrase into Spanish (use *a / al / a la / a los / a las*): **${dest.en}**`,
            answer: { type: "text", accept: [dest.es], display: dest.es },
            hint: "Check the noun's gender and number; remember *a + el* contracts to *al*.",
            traps: dest.trap ? [{ spec: { type: "text", accept: [dest.trap] }, feedback: dest.note }] : undefined,
            solution: [dest.note, `Answer: **${dest.es}**`],
          };
        }
        const subj = rng.pick(["Voy", "Vamos", "Viajo", "Viajamos"]);
        const subjEn = subj === "Voy" ? "I go" : subj === "Vamos" ? "We go" : subj === "Viajo" ? "I travel" : "We travel";
        const full = `${subj} ${trans.es}`;
        return {
          prompt: `Translate into Spanish: **${subjEn} ${trans.en}** (use *${subj.toLowerCase()}*)`,
          answer: { type: "text", accept: [full, `${full}.`], display: full },
          hint: "Vehicles use *en* with NO article; *on foot* uses *a*.",
          traps: [{ spec: { type: "text", accept: [`${subj} ${trans.trap}`] }, feedback: trans.note }],
          solution: [trans.note, `Answer: **${full}**`],
        };
      }

      if (tier === 2) {
        const subj = rng.pick([
          { es: "Voy", en: "I go" },
          { es: "Vamos", en: "We go" },
          { es: "Fui", en: "I went" },
          { es: "Fuimos", en: "We went" },
        ]);
        const full = `${subj.es} ${dest.es} ${trans.es}`;
        return {
          prompt: `Translate into Spanish: **${subj.en} ${dest.en} ${trans.en}.**`,
          answer: { type: "text", accept: [full, `${full}.`], display: `${full}.` },
          hint: "Combine the destination (*a / al / a la*) with the transport (*en* + vehicle, or *a pie*).",
          traps: [
            ...(dest.trap ? [{ spec: { type: "text" as const, accept: [`${subj.es} ${dest.trap} ${trans.es}`] }, feedback: dest.note }] : []),
            { spec: { type: "text" as const, accept: [`${subj.es} ${dest.es} ${trans.trap}`] }, feedback: trans.note },
          ],
          solution: [
            `Verb: **${subj.es}** (${subj.en}).`,
            `Destination: **${dest.es}** (${dest.note})`,
            `Transport: **${trans.es}** (${trans.note})`,
          ],
        };
      }

      // Tier 3: Full 4-slot sentence with season + companion
      const season = rng.pick([
        { es: "En verano", en: "In summer" },
        { es: "En invierno", en: "In winter" },
        { es: "Normalmente", en: "Normally" },
        { es: "Todos los años", en: "Every year" },
      ]);
      const comp = rng.pick(COMPANIONS);
      const verb = rng.bool(0.5) ? { es: "voy", en: "I go" } : { es: "vamos", en: "we go" };
      const full1 = `${season.es} ${verb.es} ${dest.es} ${trans.es} ${comp.es}`;
      const full2 = `${season.es} ${verb.es} ${dest.es} ${comp.es} ${trans.es}`;
      return {
        prompt: `Translate the complete 4-slot holiday sentence into Spanish:\n**${season.en} ${verb.en} ${dest.en} ${trans.en} ${comp.en}.**`,
        answer: { type: "text", accept: [full1, `${full1}.`, full2, `${full2}.`], display: `${full1}.` },
        hint: "Slot 1 (When) → Slot 2 (Destination with *a/al/a la*) → Slot 3 (Transport) → Slot 4 (Companions).",
        traps: [{ spec: { type: "text", accept: [`${season.es} ${verb.es} ${dest.es} ${trans.trap} ${comp.es}`] }, feedback: trans.note }],
        solution: [
          `Time: **${season.es}**`,
          `Verb + destination: **${verb.es} ${dest.es}** (${dest.note})`,
          `Transport + companions: **${trans.es} ${comp.es}**`,
        ],
      };
    },
  },

  // 2. Preterite Holiday Verbs & -car/-gar/-zar (Level 2)
  {
    id: "holidays-activities.preterite-activities",
    topicId: "holidays-activities",
    title: "Preterite Holiday Verbs (-AR/-ER/-IR, -car/-gar/-zar & Irregulars)",
    level: 2,
    guideRef: "holiday-activities-preterite",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const v = rng.pick(REGULAR_PRETERITE_VERBS);
        const p = rng.pick<Person>(["yo", "tú", "él", "nosotros", "ellos"]);
        const ans = conjugate(v.inf, "preterite", p);
        const acc = acceptedForms(v.inf, "preterite", p);
        const pres = conjugate(v.inf, "present", p);
        const traps = pres !== ans ? [{ spec: { type: "text" as const, accept: [pres] }, feedback: `*${pres}* is present tense! You need the preterite form **${ans}**.` }] : undefined;
        return {
          prompt: `Conjugate **${v.inf}** (${v.en}) in the **preterite** for **${PERSON_PROMPT[p]}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: "Check whether the verb is -AR (-é, -aste, -ó, -amos, -aron) or -ER/-IR (-í, -iste, -ió, -imos, -ieron).",
          traps,
          solution: [
            `Infinitive: *${v.inf}* → person: *${PERSON_PROMPT[p]}*.`,
            `Preterite form: **${ans}**.`,
          ],
        };
      }

      if (tier === 2) {
        const v = rng.pick(TRICKY_PRETERITE_VERBS);
        const p: Person = rng.bool(0.45) ? "yo" : rng.pick<Person>(["tú", "él", "nosotros", "ellos"]);
        const ans = conjugate(v.inf, "preterite", p);
        const acc = acceptedForms(v.inf, "preterite", p);
        const pres = conjugate(v.inf, "present", p);
        const traps = pres !== ans ? [{ spec: { type: "text" as const, accept: [pres] }, feedback: `*${pres}* is present tense — give the preterite (**${ans}**).` }] : undefined;
        return {
          prompt: `Conjugate **${v.inf}** (${v.en}) in the **preterite** for **${PERSON_PROMPT[p]}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: `Watch for spelling changes (-car/-gar/-zar in *yo* only) or irregular preterites (no accents!).`,
          traps,
          solution: [
            `Rule for *${v.inf}*: ${v.tip}.`,
            `Preterite (${p}): **${ans}**.`,
          ],
        };
      }

      // Tier 3: Contextual holiday sentences
      const item = rng.pick(CONTEXT_PRETERITE);
      const ans = conjugate(item.inf, "preterite", item.person);
      const acc = acceptedForms(item.inf, "preterite", item.person);
      const pres = conjugate(item.inf, "present", item.person);
      const traps = pres !== ans ? [{ spec: { type: "text" as const, accept: [pres] }, feedback: `*${pres}* is present tense; *${item.marker}* requires the preterite **${ans}**!` }] : undefined;
      return {
        prompt: `Fill the gap in the **preterite** (**${item.inf}**, *${item.subjLabel}*):\n*${item.marker} ___ ${item.tail}*`,
        answer: { type: "text", accept: acc, display: ans },
        hint: "Check the subject, check -car/-gar/-zar if *yo*, and check accents carefully.",
        traps,
        solution: [
          `Time marker *${item.marker}* signals the preterite.`,
          `*${item.inf}* (${item.subjLabel}, preterite) = **${ans}**.`,
        ],
      };
    },
  },

  // 3. Immediate Future, Simple Future & 3-Tense Weather (Level 2)
  {
    id: "holidays-activities.future-weather",
    topicId: "holidays-activities",
    title: "Immediate Future, Simple Future & 3-Tense Weather",
    level: 2,
    guideRef: "future-holiday-plans",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const v = rng.pick(FUTURE_VERBS);
        const p = rng.pick<Person>(["yo", "tú", "él", "nosotros", "ellos"]);
        const ans = conjugate(v.inf, "near-future", p);
        const acc = acceptedForms(v.inf, "near-future", p);
        const missingA = ans.replace(" a ", " ");
        return {
          prompt: `Form the **immediate future** (*ir a + infinitive*) of **${v.inf}** (${v.en}) for **${PERSON_PROMPT[p]}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: "Three bricks: present tense of *ir* + **a** + unconjugated **infinitive**.",
          traps: [{ spec: { type: "text", accept: [missingA] }, feedback: `Don't drop the **a**! Write **${ans}**.` }],
          solution: [
            `Present of *ir* (${p}) + **a** + infinitive *${v.inf}*.`,
            `Answer: **${ans}**.`,
          ],
        };
      }

      if (tier === 2) {
        const v = rng.pick(FUTURE_VERBS);
        const p = rng.pick<Person>(["yo", "tú", "él", "nosotros", "ellos"]);
        const ans = conjugate(v.inf, "future", p);
        const acc = acceptedForms(v.inf, "future", p);
        const traps = v.irregStem
          ? [{ spec: { type: "text" as const, accept: [v.inf + ans.slice(v.irregStem.length - 1)] }, feedback: `*${v.inf}* uses the irregular simple future stem **${v.irregStem}** → **${ans}**!` }]
          : undefined;
        return {
          prompt: `Form the **simple future** (*will…*) of **${v.inf}** (${v.en}) for **${PERSON_PROMPT[p]}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: "Keep the full infinitive (or irregular stem like *har-, tendr-, saldr-*) and add *-é, -ás, -á, -emos, -án*.",
          traps,
          solution: [
            v.irregStem ? `Irregular future stem of *${v.inf}*: **${v.irregStem}**.` : `Keep full infinitive: **${v.inf}**.`,
            `Add ${p} ending → **${ans}** (accent on every ending except *-emos*).`,
          ],
        };
      }

      // Tier 3: 3-Tense Weather Switch
      const w = rng.pick(WEATHER_CARDS);
      return {
        prompt: `Complete the weather phrase in the **${w.tenseLabel}** (*${w.en}*):\n*${w.marker} ___.*`,
        answer: { type: "text", accept: w.accept, display: w.accept[0] },
        hint: "Match *hacer / llover / nevar / haber* to the time marker, and use *mucho* (never *muy*) before weather nouns.",
        traps: w.trap && w.trapMsg ? [{ spec: { type: "text", accept: [w.trap] }, feedback: w.trapMsg }] : undefined,
        solution: [w.tip, `Answer: **${w.accept[0]}**`],
      };
    },
  },

  // 4. Agreement, Connectives & Multi-Tense Narrative Switch (Level 3)
  {
    id: "holidays-activities.tense-connectives",
    topicId: "holidays-activities",
    title: "Adjective Agreement, Connectives & Multi-Tense Mastery",
    level: 3,
    guideRef: "holiday-opinions-narratives",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const n = rng.pick(NOUN_AGREE);
        const adj = rng.pick(ADJ_FORMS);
        const correctAdj = adj[n.gen];
        const ans = `${n.verb} ${correctAdj}`;
        const wrongVerb = n.verb === "fue" ? "fueron" : "fue";
        return {
          prompt: `Complete with the preterite of **ser** + agreeing form of **${adj.base}** (*${adj.en}*):\n*${n.noun} ___ ___.*`,
          answer: { type: "text", accept: [ans], display: ans },
          hint: "Check whether the noun is singular (*fue*) or plural (*fueron*), and match masculine/feminine ending on the adjective.",
          traps: [{ spec: { type: "text", accept: [`${wrongVerb} ${adj.base}`] }, feedback: `Check number and gender agreement with *${n.noun}*: **${ans}**.` }],
          solution: [
            `*${n.noun}* takes **${n.verb}** (preterite of *ser*).`,
            `Agreeing adjective: **${correctAdj}** → **${ans}**.`,
          ],
        };
      }

      if (tier === 2) {
        const v = rng.pick(FUTURE_VERBS);
        const target = rng.pick<"preterite" | "near-future" | "future">(["preterite", "near-future", "future"]);
        const persons: Person[] = target === "preterite" ? ["yo", "tú", "él", "ellos"] : ["yo", "nosotros", "ellos"];
        const p = rng.pick<Person>(persons);
        const pres = conjugate(v.inf, "present", p);
        const ans = conjugate(v.inf, target, p);
        const acc = acceptedForms(v.inf, target, p);
        const marker =
          target === "preterite"
            ? "El verano pasado (preterite)"
            : target === "near-future"
              ? "El próximo año (immediate future)"
              : "En el futuro (simple future)";
        const traps =
          pres !== ans
            ? [{ spec: { type: "text" as const, accept: [pres] }, feedback: `*${pres}* is still in the present tense! Shift it to **${ans}**.` }]
            : undefined;
        return {
          prompt: `Tense Switch (**${v.inf}**, *${PERSON_PROMPT[p]}*):\nChange present **${pres}** to **${marker}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: `Keep the same person (${p}) and shift the verb cleanly into the requested time frame.`,
          traps,
          solution: [
            `Present (${p}): *${pres}* (from *${v.inf}*).`,
            `${marker}: **${ans}**.`,
          ],
        };
      }

      // Tier 3: Narrative cloze & connectives
      const c = rng.pick(NARRATIVE_CLOZE);
      return {
        prompt: c.prompt,
        answer: { type: "text", accept: c.accept, display: c.accept[0] },
        hint: c.hint,
        traps: c.trap && c.trapMsg ? [{ spec: { type: "text", accept: [c.trap] }, feedback: c.trapMsg }] : undefined,
        solution: [c.sol],
      };
    },
  },
];
