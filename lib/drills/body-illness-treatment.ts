import type { Drill } from "./types.ts";

interface BodyPart {
  art: "el" | "la" | "los" | "las";
  noun: string;
  en: string;
  plural: boolean;
  trapArt?: string;
}

const BODY_PARTS: readonly BodyPart[] = [
  { art: "la", noun: "cabeza", en: "head", plural: false },
  { art: "la", noun: "garganta", en: "throat", plural: false },
  { art: "el", noun: "estómago", en: "stomach", plural: false },
  { art: "la", noun: "espalda", en: "back", plural: false },
  { art: "el", noun: "brazo", en: "arm", plural: false },
  { art: "la", noun: "pierna", en: "leg", plural: false },
  { art: "la", noun: "mano", en: "hand", plural: false, trapArt: "el" },
  { art: "el", noun: "pie", en: "foot", plural: false, trapArt: "la" },
  { art: "el", noun: "tobillo", en: "ankle", plural: false },
  { art: "la", noun: "rodilla", en: "knee", plural: false },
  { art: "la", noun: "muñeca", en: "wrist", plural: false },
  { art: "el", noun: "cuello", en: "neck", plural: false },
  { art: "el", noun: "oído", en: "inner ear", plural: false },
  { art: "los", noun: "oídos", en: "inner ears", plural: true },
  { art: "los", noun: "pies", en: "feet", plural: true },
  { art: "los", noun: "dientes", en: "teeth", plural: true },
  { art: "los", noun: "ojos", en: "eyes", plural: true },
  { art: "las", noun: "piernas", en: "legs", plural: true },
  { art: "las", noun: "rodillas", en: "knees", plural: true },
  { art: "las", noun: "manos", en: "hands", plural: true, trapArt: "los" },
];

const POSSESSORS = [
  { en: "My", iop: "Me", lead: "", possEn: "my", possTrap: "mi", possTrapPl: "mis" },
  { en: "Your (tú)", iop: "Te", lead: "", possEn: "your", possTrap: "tu", possTrapPl: "tus" },
  { en: "Sofía's", iop: "le", lead: "A Sofía ", possEn: "her", possTrap: "su", possTrapPl: "sus" },
  { en: "Pablo's", iop: "le", lead: "A Pablo ", possEn: "his", possTrap: "su", possTrapPl: "sus" },
  { en: "Our", iop: "Nos", lead: "", possEn: "our", possTrap: "nuestro", possTrapPl: "nuestros" },
  { en: "My parents'", iop: "les", lead: "A mis padres ", possEn: "their", possTrap: "su", possTrapPl: "sus" },
] as const;

interface SymptomEntry {
  prompt: string;
  accept: string[];
  hint: string;
  steps: string[];
  trap?: { accept: string[]; feedback: string };
}

const SYMPTOMS_T1: readonly SymptomEntry[] = [
  { prompt: "I have a fever.", accept: ["Tengo fiebre", "Yo tengo fiebre"], hint: "Use *tener* + noun (no *una*).", steps: ["*Fiebre* is a noun → **Tengo fiebre**."], trap: { accept: ["Estoy fiebre"], feedback: "Use **tener** (not *estar*) with symptom nouns: **Tengo fiebre**." } },
  { prompt: "I have a cough.", accept: ["Tengo tos", "Yo tengo tos"], hint: "Use *tener* + noun (no *una*).", steps: ["*Tos* is a noun → **Tengo tos**."], trap: { accept: ["Estoy tos"], feedback: "Use **tener** with *tos*: **Tengo tos**." } },
  { prompt: "I have the flu.", accept: ["Tengo gripe", "Yo tengo gripe"], hint: "Use *tener* + *gripe*.", steps: ["Flu = *gripe* → **Tengo gripe**."] },
  { prompt: "I have a heavy cold (using *tener*).", accept: ["Tengo catarro", "Tengo un resfriado", "Yo tengo catarro", "Yo tengo un resfriado"], hint: "Use *tener catarro* or *tener un resfriado*.", steps: ["Heavy cold with *tener* → **Tengo catarro**."] },
  { prompt: "I feel nauseous (using *tener*).", accept: ["Tengo náuseas", "Yo tengo náuseas"], hint: "Use *tener* + plural noun with an accent on the first *a*.", steps: ["Nausea = *náuseas* (accent on **á**) → **Tengo náuseas**."] },
  { prompt: "I have the chills.", accept: ["Tengo escalofríos", "Yo tengo escalofríos"], hint: "Mind the accent on *í* inside *escalofríos*.", steps: ["Chills = *escalofríos* → **Tengo escalofríos**."] },
  { prompt: "I have a burn.", accept: ["Tengo una quemadura", "Yo tengo una quemadura"], hint: "Countable injuries keep *una* after *tengo*.", steps: ["Burn = *una quemadura* → **Tengo una quemadura**."] },
  { prompt: "I have a wound / cut (noun).", accept: ["Tengo una herida", "Yo tengo una herida"], hint: "Remember the silent *h* at the start of *herida*.", steps: ["Wound = *una herida* → **Tengo una herida**."] },
  { prompt: "I have sunstroke.", accept: ["Tengo una insolación", "Yo tengo una insolación"], hint: "Ends in *-ción* with an accent on *ó*.", steps: ["Sunstroke = *una insolación* → **Tengo una insolación**."] },
  { prompt: "I have a headache (using *tener*).", accept: ["Tengo dolor de cabeza", "Yo tengo dolor de cabeza"], hint: "Use *tener dolor de…*.", steps: ["Headache with *tener* → **Tengo dolor de cabeza**."] },
  { prompt: "I have a sore throat (using *tener*).", accept: ["Tengo dolor de garganta", "Yo tengo dolor de garganta"], hint: "Use *tener dolor de…*.", steps: ["Sore throat with *tener* → **Tengo dolor de garganta**."] },
  { prompt: "I have toothache (using *tener* + *muelas*).", accept: ["Tengo dolor de muelas", "Yo tengo dolor de muelas"], hint: "Spanish uses plural *muelas* for toothache.", steps: ["Toothache → **Tengo dolor de muelas**."] },
  { prompt: "I am tired (male speaker).", accept: ["Estoy cansado", "Yo estoy cansado"], hint: "Temporary state = *estar* + masculine adjective.", steps: ["Temporary condition uses *estar* → **Estoy cansado**."], trap: { accept: ["Soy cansado"], feedback: "Use **estar** (not *ser*) for temporary health states!" } },
  { prompt: "I am tired (female speaker).", accept: ["Estoy cansada", "Yo estoy cansada"], hint: "Temporary state = *estar* + feminine adjective.", steps: ["Female speaker → **Estoy cansada**."], trap: { accept: ["Estoy cansado"], feedback: "Match the adjective ending to a female speaker: **cansada**." } },
  { prompt: "I have a cold (male speaker, using *estar*).", accept: ["Estoy resfriado", "Estoy constipado", "Yo estoy resfriado", "Yo estoy constipado"], hint: "Use *estar* + *resfriado* (or *constipado*).", steps: ["Male speaker with *estar* → **Estoy resfriado**."] },
  { prompt: "I have a cold (female speaker, using *estar*).", accept: ["Estoy resfriada", "Estoy constipada", "Yo estoy resfriada", "Yo estoy constipada"], hint: "Remember feminine *-a* with *estar*.", steps: ["Female speaker → **Estoy resfriada**."] },
  { prompt: "I feel dizzy (male speaker).", accept: ["Estoy mareado", "Yo estoy mareado"], hint: "Use *estar* + masculine *mareado*.", steps: ["Dizzy (male) → **Estoy mareado**."] },
  { prompt: "I feel dizzy (female speaker).", accept: ["Estoy mareada", "Yo estoy mareada"], hint: "Use *estar* + feminine *mareada*.", steps: ["Dizzy (female) → **Estoy mareada**."] },
  { prompt: "I am ill (female speaker).", accept: ["Estoy enferma", "Yo estoy enferma"], hint: "Illness is a temporary state (*estar*), feminine *-a*.", steps: ["Female speaker → **Estoy enferma**."], trap: { accept: ["Soy enferma"], feedback: "Use **estar** (not *ser*) for being ill: **Estoy enferma**." } },
  { prompt: "I do not feel well (using *encontrarse*).", accept: ["No me encuentro bien", "Yo no me encuentro bien"], hint: "*Encontrar* is an *o → ue* stem-changer.", steps: ["Reflexive *encontrarse* (*yo*) → **No me encuentro bien**."] },
];

const SYMPTOMS_T2: readonly SymptomEntry[] = [
  { prompt: "I have broken my leg.", accept: ["Me he roto la pierna", "Yo me he roto la pierna"], hint: "*Romper* has an irregular past participle (*roto*).", steps: ["**Me he roto** + **la pierna**."], trap: { accept: ["Me he rompido la pierna"], feedback: "Irregular participle of *romper* is **roto**, never *rompido*!" } },
  { prompt: "I have broken my arm.", accept: ["Me he roto el brazo", "Yo me he roto el brazo"], hint: "Use reflexive perfect + irregular participle *roto*.", steps: ["**Me he roto** + **el brazo**."], trap: { accept: ["Me he rompido el brazo"], feedback: "Irregular participle of *romper* is **roto**!" } },
  { prompt: "I have broken my finger.", accept: ["Me he roto el dedo", "Yo me he roto el dedo"], hint: "Use *me he roto* + definite article *el*.", steps: ["**Me he roto el dedo**."] },
  { prompt: "I have broken my wrist.", accept: ["Me he roto la muñeca", "Yo me he roto la muñeca"], hint: "*Wrist* is feminine with *ñ*.", steps: ["**Me he roto la muñeca**."] },
  { prompt: "I have twisted my ankle.", accept: ["Me he torcido el tobillo", "Yo me he torcido el tobillo"], hint: "Use reflexive perfect of *torcerse* + *el tobillo*.", steps: ["**Me he torcido el tobillo**."] },
  { prompt: "I have twisted my wrist.", accept: ["Me he torcido la muñeca", "Yo me he torcido la muñeca"], hint: "Participle after *he* stays *-o* even before feminine *la muñeca*.", steps: ["**Me he torcido la muñeca**."], trap: { accept: ["Me he torcida la muñeca"], feedback: "Never change a participle after *haber*: keep **torcido**!" } },
  { prompt: "I have twisted my knee.", accept: ["Me he torcido la rodilla", "Yo me he torcido la rodilla"], hint: "Use *me he torcido* + *la rodilla*.", steps: ["**Me he torcido la rodilla**."] },
  { prompt: "I have cut my finger.", accept: ["Me he cortado el dedo", "Yo me he cortado el dedo"], hint: "Use *me he cortado* + definite article *el*.", steps: ["**Me he cortado el dedo**."] },
  { prompt: "I have cut my hand.", accept: ["Me he cortado la mano", "Yo me he cortado la mano"], hint: "Remember *mano* is feminine (*la mano*)!", steps: ["**Me he cortado la mano**."], trap: { accept: ["Me he cortado el mano"], feedback: "*Mano* is feminine → **la mano**!" } },
  { prompt: "I have burnt my hand.", accept: ["Me he quemado la mano", "Yo me he quemado la mano"], hint: "Use *quemarse* in the perfect + feminine *la mano*.", steps: ["**Me he quemado la mano**."] },
  { prompt: "I have burnt my arm.", accept: ["Me he quemado el brazo", "Yo me he quemado el brazo"], hint: "Use *me he quemado* + *el brazo*.", steps: ["**Me he quemado el brazo**."] },
  { prompt: "I have hurt my knee (using *hacerse daño*).", accept: ["Me he hecho daño en la rodilla", "Yo me he hecho daño en la rodilla"], hint: "*Hacer* has irregular past participle *hecho*.", steps: ["**Me he hecho daño en la rodilla**."], trap: { accept: ["Me he hacido daño en la rodilla"], feedback: "Irregular participle of *hacer* is **hecho**!" } },
  { prompt: "I have hurt my back (using *hacerse daño*).", accept: ["Me he hecho daño en la espalda", "Yo me he hecho daño en la espalda"], hint: "Use *me he hecho daño en* + *la espalda*.", steps: ["**Me he hecho daño en la espalda**."] },
  { prompt: "I am allergic to pollen.", accept: ["Tengo alergia al polen", "Yo tengo alergia al polen"], hint: "Use *tener alergia* + *al* (*a + el*).", steps: ["**Tengo alergia al polen**."], trap: { accept: ["Estoy alergia al polen"], feedback: "Use **tener alergia a…** (not *estar*)!" } },
  { prompt: "My sister is exhausted (use *agotada*).", accept: ["Mi hermana está agotada"], hint: "Remember the accent on *está* and feminine *-a*.", steps: ["**Mi hermana está agotada**."] },
  { prompt: "My brother looks pale (use *estar*).", accept: ["Mi hermano está pálido"], hint: "Mind the accents on *está* and *pálido*.", steps: ["**Mi hermano está pálido**."] },
  { prompt: "We are very tired (mixed group).", accept: ["Estamos muy cansados", "Nosotros estamos muy cansados"], hint: "Use *muy* before an adjective, and plural *-os*.", steps: ["**Estamos muy cansados**."] },
  { prompt: "Lucía has a cold (using *estar*).", accept: ["Lucía está resfriada", "Lucía está constipada"], hint: "Accent on *está* and feminine *-a*.", steps: ["**Lucía está resfriada**."] },
];

const SYMPTOMS_T3: readonly SymptomEntry[] = [
  { prompt: "My brother has broken his foot.", accept: ["Mi hermano se ha roto el pie"], hint: "Third person singular reflexive perfect: *se ha roto* + *el pie*.", steps: ["**Mi hermano se ha roto el pie**."] },
  { prompt: "Sofía has sprained her ankle.", accept: ["Sofía se ha torcido el tobillo"], hint: "Keep invariable participle *torcido* after *ha*.", steps: ["**Sofía se ha torcido el tobillo**."] },
  { prompt: "Elena has cut her hand.", accept: ["Elena se ha cortado la mano"], hint: "*Se ha cortado* + feminine *la mano*.", steps: ["**Elena se ha cortado la mano**."] },
  { prompt: "Carlos has hurt his shoulder (using *hacerse daño*).", accept: ["Carlos se ha hecho daño en el hombro"], hint: "*Se ha hecho daño en* + *el hombro*.", steps: ["**Carlos se ha hecho daño en el hombro**."] },
  { prompt: "My parents are tired and have colds (use *resfriados*).", accept: ["Mis padres están cansados y resfriados", "Mis padres están cansados y están resfriados"], hint: "Plural *están* + masculine plural *-os* on both adjectives.", steps: ["**Mis padres están cansados y resfriados**."] },
  { prompt: "I am allergic to nuts (use *los frutos secos*).", accept: ["Tengo alergia a los frutos secos", "Yo tengo alergia a los frutos secos"], hint: "Use *tener alergia a* + *los frutos secos*.", steps: ["**Tengo alergia a los frutos secos**."] },
  { prompt: "I have a fever and I feel dizzy (female speaker).", accept: ["Tengo fiebre y estoy mareada", "Yo tengo fiebre y estoy mareada"], hint: "Combine *tener* + noun with *estar* + feminine adjective.", steps: ["**Tengo fiebre y estoy mareada**."] },
  { prompt: "I have a cough and I am exhausted (female speaker).", accept: ["Tengo tos y estoy agotada", "Yo tengo tos y estoy agotada"], hint: "Combine *tengo tos* with *estoy agotada*.", steps: ["**Tengo tos y estoy agotada**."] },
  { prompt: "I have the flu and I have the chills.", accept: ["Tengo gripe y tengo escalofríos", "Tengo gripe y escalofríos"], hint: "Watch the accent on *escalofríos*.", steps: ["**Tengo gripe y tengo escalofríos**."] },
  { prompt: "I have sunburn on my back (use *una quemadura de sol*).", accept: ["Tengo una quemadura de sol en la espalda"], hint: "Use definite article *la espalda*, never *mi*.", steps: ["**Tengo una quemadura de sol en la espalda**."] },
  { prompt: "I have nausea and I look pale (male speaker).", accept: ["Tengo náuseas y estoy pálido", "Yo tengo náuseas y estoy pálido"], hint: "Watch accents on *náuseas* and *pálido*.", steps: ["**Tengo náuseas y estoy pálido**."] },
  { prompt: "My mother has burnt her finger.", accept: ["Mi madre se ha quemado el dedo"], hint: "Keep participle *quemado* invariable after *ha*.", steps: ["**Mi madre se ha quemado el dedo**."] },
  { prompt: "Have you broken your arm? (Ask a friend using *tú*.)", accept: ["¿Te has roto el brazo?", "Te has roto el brazo"], hint: "Use *te has roto* + definite article *el brazo*.", steps: ["**¿Te has roto el brazo?**"] },
  { prompt: "Have you cut your finger? (Ask a friend using *tú*.)", accept: ["¿Te has cortado el dedo?", "Te has cortado el dedo"], hint: "Use *te has cortado* + *el dedo*.", steps: ["**¿Te has cortado el dedo?**"] },
  { prompt: "My friend Ana is dizzy and has a stomach ache (use *tener dolor de*).", accept: ["Mi amiga Ana está mareada y tiene dolor de estómago"], hint: "Feminine *mareada* + *tiene dolor de estómago*.", steps: ["**Mi amiga Ana está mareada y tiene dolor de estómago**."] },
  { prompt: "I have a bruise on my leg.", accept: ["Tengo un moratón en la pierna", "Yo tengo un moratón en la pierna"], hint: "*Moratón* takes an accent on *ó*.", steps: ["**Tengo un moratón en la pierna**."] },
];

const DESDE_SYMPTOMS = [
  { en: "My head has hurt", es: "Me duele la cabeza", alt: "Tengo dolor de cabeza" },
  { en: "My throat has hurt", es: "Me duele la garganta", alt: "Tengo dolor de garganta" },
  { en: "My stomach has hurt", es: "Me duele el estómago", alt: "Tengo dolor de estómago" },
  { en: "My back has hurt", es: "Me duele la espalda", alt: "Tengo dolor de espalda" },
  { en: "My ears have hurt", es: "Me duelen los oídos", alt: "" },
  { en: "My eyes have hurt", es: "Me duelen los ojos", alt: "" },
  { en: "I have had a fever", es: "Tengo fiebre", alt: "" },
  { en: "I have had a cough", es: "Tengo tos", alt: "" },
  { en: "I have had a cold (male, estar)", es: "Estoy resfriado", alt: "Estoy constipado" },
  { en: "I have felt dizzy (female)", es: "Estoy mareada", alt: "" },
] as const;

const DURATIONS = [
  { en: "two hours", es: "dos horas" },
  { en: "four hours", es: "cuatro horas" },
  { en: "two days", es: "dos días" },
  { en: "three days", es: "tres días" },
  { en: "five days", es: "cinco días" },
  { en: "a week", es: "una semana" },
] as const;

const REMEDY_ADVICE: readonly SymptomEntry[] = [
  { prompt: "Translate (informal *tú*, using *debes*): **You must rest in bed.**", accept: ["Debes descansar en cama", "Debes descansar en la cama", "Tú debes descansar en cama"], hint: "Follow *debes* with an infinitive.", steps: ["**Debes descansar en cama**."] },
  { prompt: "Translate (informal *tú*, using *tienes que*): **You have to take these tablets.**", accept: ["Tienes que tomar estas pastillas", "Tú tienes que tomar estas pastillas"], hint: "*Las pastillas* is feminine plural → *estas*.", steps: ["**Tienes que tomar estas pastillas**."] },
  { prompt: "Translate (informal *tú*, using *debes*): **You must take this cough syrup.** (Use *jarabe*.)", accept: ["Debes tomar este jarabe", "Debes tomar este jarabe para la tos"], hint: "*El jarabe* is masculine singular → *este*.", steps: ["**Debes tomar este jarabe**."] },
  { prompt: "Translate (impersonal *hay que*): **You have to drink lots of water.**", accept: ["Hay que beber mucha agua", "Hay que tomar mucha agua"], hint: "*Agua* is feminine → *mucha agua*.", steps: ["**Hay que beber mucha agua**."] },
  { prompt: "Translate (informal *tú*, using *debes*): **You must put on this cream.** (Use *ponerte*.)", accept: ["Debes ponerte esta crema", "Te debes poner esta crema"], hint: "Match *-te* to *tú* and feminine *esta* to *la crema*.", steps: ["**Debes ponerte esta crema**."] },
  { prompt: "Translate (polite *usted*, using *tiene que*): **You have to take two pills every eight hours.**", accept: ["Tiene que tomar dos pastillas cada ocho horas", "Usted tiene que tomar dos pastillas cada ocho horas"], hint: "*Usted* takes *tiene que* + infinitive.", steps: ["**Tiene que tomar dos pastillas cada ocho horas**."] },
  { prompt: "Translate (polite *usted*, using *debe*): **You must avoid the sun.**", accept: ["Debe evitar el sol", "Usted debe evitar el sol"], hint: "*Usted* takes *debe* + infinitive *evitar*.", steps: ["**Debe evitar el sol**."] },
  { prompt: "Translate: **You need a prescription from the doctor.** (Use *tú* and *el médico*.)", accept: ["Necesitas una receta del médico", "Tú necesitas una receta del médico"], hint: "*de + el = del* and accent on *médico*.", steps: ["**Necesitas una receta del médico**."] },
  { prompt: "Translate (using *deberías*): **You should put on a plaster.** (Spain standard, *ponerte*.)", accept: ["Deberías ponerte una tirita", "Te deberías poner una tirita"], hint: "Spain standard plaster = *una tirita*; accent on *deberías*.", steps: ["**Deberías ponerte una tirita**."] },
  { prompt: "Translate (using *tienes que*): **You have to put a bandage on your ankle.** (Use *en el tobillo*.)", accept: ["Tienes que ponerte una venda en el tobillo", "Tienes que poner una venda en el tobillo"], hint: "Bandage = *una venda*; definite article *el tobillo*.", steps: ["**Tienes que ponerte una venda en el tobillo**."] },
  { prompt: "Translate: **How much do these tablets cost?**", accept: ["¿Cuánto cuestan estas pastillas?", "Cuánto cuestan estas pastillas"], hint: "Plural *pastillas* requires *cuestan* and *estas*.", steps: ["**¿Cuánto cuestan estas pastillas?**"] },
  { prompt: "Translate: **How much does this cream cost?**", accept: ["¿Cuánto cuesta esta crema?", "Cuánto cuesta esta crema"], hint: "Singular *la crema* requires *cuesta* and *esta*.", steps: ["**¿Cuánto cuesta esta crema?**"] },
  { prompt: "Translate: **Since when have you had a fever?** (Informal *tú*.)", accept: ["¿Desde cuándo tienes fiebre?", "Desde cuándo tienes fiebre"], hint: "Use Present tense *tienes* after *¿Desde cuándo…?*", steps: ["**¿Desde cuándo tienes fiebre?**"] },
  { prompt: "Translate (using *hay que*): **It is necessary to drink lots of fluids.** (Use *muchos líquidos*.)", accept: ["Hay que beber muchos líquidos", "Hay que tomar muchos líquidos"], hint: "Mind the accent on *líquidos*.", steps: ["**Hay que beber muchos líquidos**."] },
  { prompt: "Translate (using *deberías*): **You should not do sport this week.**", accept: ["No deberías hacer deporte esta semana"], hint: "Place *no* before *deberías* + infinitive *hacer*.", steps: ["**No deberías hacer deporte esta semana**."] },
];

const ACCIDENT_T1: readonly SymptomEntry[] = [
  { prompt: "Preterite (*yo*): **Yesterday I fell.**", accept: ["Ayer me caí", "Ayer yo me caí"], hint: "Accent on the final *í* of *caí*.", steps: ["**Ayer me caí**."], trap: { accept: ["Ayer me caigo"], feedback: "*Ayer* requires Preterite **me caí**, not present *me caigo*." } },
  { prompt: "Preterite (*yo*): **Yesterday I went to the hospital.**", accept: ["Ayer fui al hospital", "Ayer yo fui al hospital"], hint: "*Fui* has NO written accent; *a + el = al*.", steps: ["**Ayer fui al hospital**."], trap: { accept: ["Ayer fuí al hospital"], feedback: "**Fui** takes NO written accent!" } },
  { prompt: "Preterite (*yo*): **Yesterday I went to the pharmacy.**", accept: ["Ayer fui a la farmacia", "Ayer yo fui a la farmacia"], hint: "*Ir* (*yo* preterite) = *fui* (no accent).", steps: ["**Ayer fui a la farmacia**."] },
  { prompt: "Preterite (*yo*): **Yesterday I went to A&E.**", accept: ["Ayer fui a urgencias", "Ayer yo fui a urgencias"], hint: "A&E = *urgencias* (no article after *a*).", steps: ["**Ayer fui a urgencias**."] },
  { prompt: "Preterite (*yo*): **I broke my arm.**", accept: ["Me rompí el brazo", "Yo me rompí el brazo"], hint: "Regular *-er* Preterite *-í* + definite article *el*.", steps: ["**Me rompí el brazo**."] },
  { prompt: "Preterite (*yo*): **I broke my leg.**", accept: ["Me rompí la pierna", "Yo me rompí la pierna"], hint: "Accent on *rompí* + *la pierna*.", steps: ["**Me rompí la pierna**."] },
  { prompt: "Preterite (*yo*): **I twisted my ankle.**", accept: ["Me torcí el tobillo", "Yo me torcí el tobillo"], hint: "Regular *-er* Preterite *-í* + *el tobillo*.", steps: ["**Me torcí el tobillo**."] },
  { prompt: "Preterite (*yo*): **I twisted my wrist.**", accept: ["Me torcí la muñeca", "Yo me torcí la muñeca"], hint: "Accent on *torcí* + *la muñeca*.", steps: ["**Me torcí la muñeca**."] },
  { prompt: "Preterite (*yo*): **I cut my finger.**", accept: ["Me corté el dedo", "Yo me corté el dedo"], hint: "Regular *-ar* Preterite *-é* + *el dedo*.", steps: ["**Me corté el dedo**."] },
  { prompt: "Preterite (*yo*): **I burnt my hand.**", accept: ["Me quemé la mano", "Yo me quemé la mano"], hint: "Accent on *quemé* + feminine *la mano*.", steps: ["**Me quemé la mano**."] },
  { prompt: "Preterite (*yo*): **I took two tablets.**", accept: ["Tomé dos pastillas", "Yo tomé dos pastillas"], hint: "Regular *-ar* Preterite *-é*.", steps: ["**Tomé dos pastillas**."] },
  { prompt: "Preterite (*yo*): **I bought cough syrup.** (Use *jarabe*.)", accept: ["Compré jarabe", "Compré un jarabe", "Compré jarabe para la tos", "Yo compré jarabe"], hint: "Regular *-ar* Preterite *-é*.", steps: ["**Compré jarabe**."] },
  { prompt: "Preterite (*yo*): **I rested at home.**", accept: ["Descansé en casa", "Yo descansé en casa"], hint: "Regular *-ar* Preterite *-é*.", steps: ["**Descansé en casa**."] },
  { prompt: "Preterite (*yo*): **I drank lots of water.**", accept: ["Bebí mucha agua", "Yo bebí mucha agua"], hint: "Regular *-er* Preterite *-í* + feminine *mucha agua*.", steps: ["**Bebí mucha agua**."] },
  { prompt: "Preterite (*yo*): **I was ill yesterday.**", accept: ["Estuve enfermo ayer", "Estuve enferma ayer", "Ayer estuve enfermo", "Ayer estuve enferma"], hint: "Irregular Preterite of *estar* = *estuve* (no accent).", steps: ["**Estuve enfermo/a ayer**."] },
  { prompt: "Preterite (*yo*): **I had a fever yesterday.**", accept: ["Tuve fiebre ayer", "Ayer tuve fiebre", "Yo tuve fiebre ayer"], hint: "Irregular Preterite of *tener* = *tuve* (no accent).", steps: ["**Tuve fiebre ayer**."] },
  { prompt: "Preterite (*él*): **The doctor gave me pills.** (Use *el médico*.)", accept: ["El médico me dio pastillas", "El médico me dio unas pastillas"], hint: "*Dar* (*él* Preterite) = *dio* (NO accent!).", steps: ["**El médico me dio pastillas**."], trap: { accept: ["El médico me dió pastillas"], feedback: "**Dio** takes NO written accent!" } },
  { prompt: "Preterite (*él*): **The doctor examined me.** (Use *el médico*.)", accept: ["El médico me examinó"], hint: "Regular *-ar* *él* Preterite ends in accented *-ó*.", steps: ["**El médico me examinó**."] },
];

const ACCIDENT_T2: readonly SymptomEntry[] = [
  { prompt: "Preterite: **The doctor gave me an X-ray.** (Use *el médico* + *hacer*.)", accept: ["El médico me hizo una radiografía", "El médico me hizo la radiografía"], hint: "*Hacer* (*él* Preterite) = *hizo* (with *z*, no accent).", steps: ["**El médico me hizo una radiografía**."] },
  { prompt: "Preterite: **The doctor put a plaster cast on me.** (Use *el médico* + *poner*.)", accept: ["El médico me puso una escayola", "El médico me puso escayola"], hint: "*Poner* (*él* Preterite) = *puso* (no accent).", steps: ["**El médico me puso una escayola**."] },
  { prompt: "Preterite: **The nurse put a bandage on me.** (Use *la enfermera* + *poner*.)", accept: ["La enfermera me puso una venda"], hint: "*Poner* (*ella* Preterite) = *puso*.", steps: ["**La enfermera me puso una venda**."] },
  { prompt: "Preterite: **The doctor gave me a prescription.** (Use *el médico*.)", accept: ["El médico me dio una receta"], hint: "*Dar* (*él* Preterite) = *dio* (no accent).", steps: ["**El médico me dio una receta**."] },
  { prompt: "Preterite: **I had to stay in bed.** (Use *tuve que quedarme*.)", accept: ["Tuve que quedarme en cama", "Tuve que quedarme en la cama", "Me tuve que quedar en cama"], hint: "Irregular *tuve* (no accent) + *quedarme*.", steps: ["**Tuve que quedarme en cama**."] },
  { prompt: "Preterite: **I had to go to the health centre.**", accept: ["Tuve que ir al centro de salud", "Yo tuve que ir al centro de salud"], hint: "*Tuve que* + infinitive *ir* + *al centro de salud*.", steps: ["**Tuve que ir al centro de salud**."] },
  { prompt: "Preterite: **Yesterday I played football and I fell.**", accept: ["Ayer jugué al fútbol y me caí"], hint: "*-gar → -gué* (*jugué*) + accented *fútbol* + *me caí*.", steps: ["**Ayer jugué al fútbol y me caí**."], trap: { accept: ["Ayer jugé al fútbol y me caí"], feedback: "Remember *-gar → -gué* in the *yo* Preterite: **jugué**!" } },
  { prompt: "Preterite: **My brother fell off his bike.** (Use *de la bicicleta*.)", accept: ["Mi hermano se cayó de la bicicleta", "Mi hermano se cayó de su bicicleta", "Mi hermano se cayó de la bici"], hint: "*Caerse* (*él* Preterite) shifts *i → y* (*se cayó*).", steps: ["**Mi hermano se cayó de la bicicleta**."] },
  { prompt: "Preterite: **Sofía broke her leg skiing.** (Use *esquiando*.)", accept: ["Sofía se rompió la pierna esquiando"], hint: "*Romperse* (*ella* Preterite) = *se rompió*.", steps: ["**Sofía se rompió la pierna esquiando**."] },
  { prompt: "Preterite: **Pablo twisted his ankle playing rugby.** (Use *jugando al rugby*.)", accept: ["Pablo se torció el tobillo jugando al rugby"], hint: "*Torcerse* (*él* Preterite) = *se torció*.", steps: ["**Pablo se torció el tobillo jugando al rugby**."] },
  { prompt: "Preterite: **Last Saturday I fell in the park.**", accept: ["El sábado pasado me caí en el parque"], hint: "Accent on *sábado* and *caí*.", steps: ["**El sábado pasado me caí en el parque**."] },
  { prompt: "Preterite: **Yesterday my stomach hurt a lot.**", accept: ["Ayer me dolió mucho el estómago", "Ayer me dolió el estómago mucho"], hint: "Singular Preterite of *doler* = *dolió* + *mucho*.", steps: ["**Ayer me dolió mucho el estómago**."] },
  { prompt: "Preterite: **Yesterday my feet hurt a lot.**", accept: ["Ayer me dolieron mucho los pies", "Ayer me dolieron los pies mucho"], hint: "Plural Preterite of *doler* = *dolieron*.", steps: ["**Ayer me dolieron mucho los pies**."] },
  { prompt: "Preterite: **We went to the pharmacy yesterday.**", accept: ["Fuimos a la farmacia ayer", "Ayer fuimos a la farmacia", "Nosotros fuimos a la farmacia ayer"], hint: "*Ir* (*nosotros* Preterite) = *fuimos* (no accent).", steps: ["**Fuimos a la farmacia ayer**."] },
  { prompt: "Preterite: **I was in bed for three days.** (Use *estuve* + *tres días*.)", accept: ["Estuve en cama tres días", "Estuve en la cama tres días", "Estuve en cama durante tres días"], hint: "Irregular *estuve* + accented *días*.", steps: ["**Estuve en cama tres días**."] },
  { prompt: "Preterite: **The pharmacist gave me cream.** (Use *la farmacéutica*.)", accept: ["La farmacéutica me dio crema", "La farmacéutica me dio una crema"], hint: "Mind the accent on *farmacéutica* and unaccented *dio*.", steps: ["**La farmacéutica me dio crema**."] },
];

const ACCIDENT_T3: readonly SymptomEntry[] = [
  { prompt: "Simple Future (*yo*): **Tomorrow I will rest in bed.**", accept: ["Mañana descansaré en cama", "Mañana descansaré en la cama"], hint: "Infinitive + accented *-é*.", steps: ["**Mañana descansaré en cama**."] },
  { prompt: "Simple Future (*yo*): **Tomorrow I will drink lots of water.**", accept: ["Mañana beberé mucha agua"], hint: "Infinitive *beber* + *-é* + feminine *mucha agua*.", steps: ["**Mañana beberé mucha agua**."] },
  { prompt: "Simple Future (*yo*): **Tomorrow I will take the cough syrup.** (Use *el jarabe*.)", accept: ["Mañana tomaré el jarabe", "Mañana tomaré el jarabe para la tos"], hint: "Infinitive *tomar* + accented *-é*.", steps: ["**Mañana tomaré el jarabe**."] },
  { prompt: "Simple Future (*yo*): **Next week I will not do sport.** (Use *La semana que viene*.)", accept: ["La semana que viene no haré deporte"], hint: "Irregular Simple Future stem of *hacer* is *har-*.", steps: ["**La semana que viene no haré deporte**."], trap: { accept: ["La semana que viene no haceré deporte"], feedback: "*Hacer* uses irregular future stem **har-** → **haré**!" } },
  { prompt: "Simple Future (*yo*): **Soon I will be able to play football.** (Use *Pronto*.)", accept: ["Pronto podré jugar al fútbol"], hint: "Irregular Simple Future stem of *poder* is *podr-*.", steps: ["**Pronto podré jugar al fútbol**."], trap: { accept: ["Pronto poderé jugar al fútbol"], feedback: "*Poder* uses irregular future stem **podr-** → **podré**!" } },
  { prompt: "Simple Future (*yo*): **Tomorrow I will not have a fever.**", accept: ["Mañana no tendré fiebre"], hint: "Irregular Simple Future stem of *tener* is *tendr-*.", steps: ["**Mañana no tendré fiebre**."], trap: { accept: ["Mañana no teneré fiebre"], feedback: "*Tener* uses irregular future stem **tendr-** → **tendré**!" } },
  { prompt: "Simple Future (*yo*): **Next week I will return to the doctor.** (Use *La semana que viene*.)", accept: ["La semana que viene volveré al médico"], hint: "Regular Simple Future *volveré* + *al médico*.", steps: ["**La semana que viene volveré al médico**."] },
  { prompt: "Simple Future (*yo*): **Tomorrow I will stay at home.** (Use *me quedaré*.)", accept: ["Mañana me quedaré en casa"], hint: "Reflexive pronoun *me* before *quedaré*.", steps: ["**Mañana me quedaré en casa**."] },
  { prompt: "Immediate Future (*yo*): **Tomorrow I am going to rest at home.**", accept: ["Mañana voy a descansar en casa"], hint: "*Voy a* + infinitive *descansar*.", steps: ["**Mañana voy a descansar en casa**."] },
  { prompt: "Immediate Future (*yo*): **Tonight I am going to put on this cream.** (Use *Esta noche*.)", accept: ["Esta noche voy a ponerme esta crema", "Esta noche me voy a poner esta crema"], hint: "*Voy a ponerme* (or *me voy a poner*) + *esta crema*.", steps: ["**Esta noche voy a ponerme esta crema**."] },
  { prompt: "Immediate Future (*nosotros*): **Tomorrow we are going to go to the pharmacy.**", accept: ["Mañana vamos a ir a la farmacia"], hint: "*Vamos a* + infinitive *ir*.", steps: ["**Mañana vamos a ir a la farmacia**."] },
  { prompt: "Simple Future (*yo*): **I will not go out this weekend.** (Use *salir* + *este fin de semana*.)", accept: ["No saldré este fin de semana", "Este fin de semana no saldré"], hint: "Irregular Simple Future stem of *salir* is *saldr-*.", steps: ["**No saldré este fin de semana**."] },
  { prompt: "Simple Future (*yo*): **Soon I will get better.** (Use *mejorar*.)", accept: ["Pronto mejoraré", "Yo pronto mejoraré"], hint: "Full infinitive *mejorar* + accented *-é*.", steps: ["**Pronto mejoraré**."] },
  { prompt: "Simple Future (*yo*): **I will follow the doctor's advice.** (Use *seguiré los consejos del médico*.)", accept: ["Seguiré los consejos del médico"], hint: "Regular Simple Future *seguiré* + *del médico*.", steps: ["**Seguiré los consejos del médico**."] },
  { prompt: "Two tenses: **Yesterday I went to the doctor, and tomorrow I will rest.**", accept: ["Ayer fui al médico y mañana descansaré"], hint: "Preterite *fui* (no accent) + Simple Future *descansaré* (accent on *é*).", steps: ["**Ayer fui al médico y mañana descansaré**."] },
  { prompt: "Two tenses: **Yesterday I fell, so tomorrow I will not run.** (Use *así que*.)", accept: ["Ayer me caí, así que mañana no correré", "Ayer me caí así que mañana no correré"], hint: "Preterite *me caí* + *así que* + Simple Future *correré*.", steps: ["**Ayer me caí, así que mañana no correré**."] },
];

export const drills: Drill[] = [
  {
    id: "body-illness-treatment.doler-body",
    topicId: "body-illness-treatment",
    title: "Me duele / Me duelen + Body Parts",
    level: 1,
    guideRef: "body-parts-doler",
    generate(rng, tier) {
      if (tier === 1) {
        const bp = rng.pick(BODY_PARTS);
        const verb = bp.plural ? "duelen" : "duele";
        const canon = `Me ${verb} ${bp.art} ${bp.noun}`;
        const wrongVerb = bp.plural ? "duele" : "duelen";
        const traps = [
          {
            spec: { type: "text" as const, accept: [`Me ${wrongVerb} ${bp.art} ${bp.noun}`] },
            feedback: bp.plural
              ? `**${bp.art} ${bp.noun}** is plural, so use **duelen**!`
              : `**${bp.art} ${bp.noun}** is singular, so use **duele**!`,
          },
          {
            spec: { type: "text" as const, accept: [`Me ${verb} ${bp.plural ? "mis" : "mi"} ${bp.noun}`] },
            feedback: `Never use *mi/mis* with *doler* — use the definite article **${bp.art}**!`,
          },
        ];
        if (bp.trapArt) {
          traps.push({
            spec: { type: "text" as const, accept: [`Me ${verb} ${bp.trapArt} ${bp.noun}`] },
            feedback: `Watch the gender of *${bp.noun}* — the right article is **${bp.art} ${bp.noun}**!`,
          });
        }
        return {
          prompt: `Translate into Spanish (present tense): **My ${bp.en} ${bp.plural ? "hurt" : "hurts"}.**`,
          answer: { type: "text", accept: [canon, `A mí ${canon.toLowerCase()}`], display: canon },
          hint: `Count the body part (${bp.plural ? "plural → duelen" : "singular → duele"}) and use a definite article instead of *mi*.`,
          solution: [
            `Body part: **${bp.art} ${bp.noun}** (${bp.plural ? "plural" : "singular"}).`,
            `Match *doler*: **${verb}** → **${canon}**.`,
          ],
          traps,
        };
      }

      if (tier === 2) {
        const person = rng.pick(POSSESSORS);
        const bp = rng.pick(BODY_PARTS);
        const intense = rng.bool(0.45);
        const verb = bp.plural ? "duelen" : "duele";
        const intensEs = intense ? " mucho" : "";
        const intensEn = intense ? " a lot" : "";
        const base = `${person.lead}${person.iop} ${verb}${intensEs} ${bp.art} ${bp.noun}`;
        const alt = intense ? `${person.lead}${person.iop} ${verb} ${bp.art} ${bp.noun} mucho` : base;
        const cap = base[0].toUpperCase() + base.slice(1);
        const capAlt = alt[0].toUpperCase() + alt.slice(1);
        const accept = intense ? [cap, capAlt] : [cap];
        const traps = [
          {
            spec: { type: "text" as const, accept: [`${person.lead}${person.iop} ${bp.plural ? "duele" : "duelen"}${intensEs} ${bp.art} ${bp.noun}`] },
            feedback: `Match *duele/duelen* to **${bp.art} ${bp.noun}** (${bp.plural ? "plural → duelen" : "singular → duele"}).`,
          },
        ];
        if (intense) {
          traps.push({
            spec: { type: "text" as const, accept: [`${person.lead}${person.iop} ${verb} muy ${bp.art} ${bp.noun}`] },
            feedback: "After *doler*, always use **mucho** (never *muy*)!",
          });
        }
        return {
          prompt: `Translate into Spanish: **${person.en} ${bp.en} ${bp.plural ? "hurt" : "hurts"}${intensEn}.**`,
          answer: { type: "text", accept, display: cap },
          hint: `${person.lead ? `Start with *${person.lead.trim()}* + *${person.iop}*` : `Use indirect pronoun *${person.iop}*`} + *${verb}* + definite article.`,
          solution: [
            `Indirect pronoun: **${person.lead}${person.iop}**.`,
            `Body part **${bp.art} ${bp.noun}** (${bp.plural ? "plural" : "singular"}) → **${verb}**${intense ? " + **mucho**" : ""}.`,
            `Result: **${cap}**.`,
          ],
          traps,
        };
      }

      // Tier 3: Preterite dolió/dolieron OR compound subject (two singular body parts → duelen)
      if (rng.bool(0.5)) {
        const bp = rng.pick(BODY_PARTS);
        const person = rng.pick(POSSESSORS.slice(0, 4));
        const verb = bp.plural ? "dolieron" : "dolió";
        const core = `${person.lead ? person.lead : ""}${person.lead ? person.iop : person.iop.toLowerCase()} ${verb} ${bp.art} ${bp.noun}`;
        const canon = `Ayer ${core}`;
        const alt = `${core[0].toUpperCase() + core.slice(1)} ayer`;
        return {
          prompt: `Translate into Spanish (**Preterite**): **Yesterday, ${person.en.toLowerCase()} ${bp.en} hurt.**`,
          answer: { type: "text", accept: [canon, alt], display: canon },
          hint: `Use Preterite of *doler*: singular → *dolió*, plural → *dolieron*.`,
          solution: [
            `Past marker *Ayer* + Preterite **${verb}** to match **${bp.art} ${bp.noun}**.`,
            `Answer: **${canon}**.`,
          ],
          traps: [
            {
              spec: { type: "text", accept: [`Ayer ${person.lead ? person.lead : ""}${person.lead ? person.iop : person.iop.toLowerCase()} ${bp.plural ? "duelen" : "duele"} ${bp.art} ${bp.noun}`] },
              feedback: "*Ayer* calls for the Preterite (**dolió / dolieron**), not Present!",
            },
          ],
        };
      } else {
        const sgParts = BODY_PARTS.filter((b) => !b.plural);
        const a = rng.pick(sgParts);
        const b = rng.pick(sgParts.filter((x) => x.noun !== a.noun));
        const canon = `Me duelen ${a.art} ${a.noun} y ${b.art} ${b.noun}`;
        return {
          prompt: `Translate into Spanish (present tense, compound subject): **My ${a.en} and my ${b.en} hurt.**`,
          answer: { type: "text", accept: [canon, `A mí ${canon.toLowerCase()}`], display: canon },
          hint: "Two singular body parts joined by *y* form a **plural** subject — check *duele* vs *duelen*!",
          solution: [
            `Two body parts (**${a.art} ${a.noun} y ${b.art} ${b.noun}**) make a plural subject → **Me duelen**.`,
            `Use definite articles on both nouns → **${canon}**.`,
          ],
          traps: [
            {
              spec: { type: "text", accept: [`Me duele ${a.art} ${a.noun} y ${b.art} ${b.noun}`] },
              feedback: "Two body parts together are plural → use **Me duelen**!",
            },
          ],
        };
      }
    },
  },
  {
    id: "body-illness-treatment.symptoms-injuries",
    topicId: "body-illness-treatment",
    title: "Symptoms & Injuries (Tener, Estar & Me he…)",
    level: 1,
    guideRef: "illnesses-symptoms-injuries",
    generate(rng, tier) {
      const pool = tier === 1 ? SYMPTOMS_T1 : tier === 2 ? SYMPTOMS_T2 : SYMPTOMS_T3;
      const item = rng.pick(pool);
      return {
        prompt: `Translate into Spanish: **${item.prompt}**`,
        answer: { type: "text", accept: item.accept, display: item.accept[0] },
        hint: item.hint,
        solution: item.steps,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
      };
    },
  },
  {
    id: "body-illness-treatment.desde-hace-remedies",
    topicId: "body-illness-treatment",
    title: "Desde hace & Pharmacy Remedies",
    level: 2,
    guideRef: "pharmacy-doctor-remedies",
    generate(rng, tier) {
      if (tier === 1) {
        const s = rng.pick(DESDE_SYMPTOMS);
        const dur = rng.pick(DURATIONS);
        const canon = `${s.es} desde hace ${dur.es}`;
        const accept = [canon];
        if (s.alt) accept.push(`${s.alt} desde hace ${dur.es}`);
        accept.push(`Hace ${dur.es} que ${s.es.toLowerCase()}`);
        if (s.alt) accept.push(`Hace ${dur.es} que ${s.alt.toLowerCase()}`);
        return {
          prompt: `Translate into Spanish using *desde hace*: **${s.en} for ${dur.en}.**`,
          answer: { type: "text", accept, display: canon },
          hint: "Ongoing symptoms always use the **Present tense** + *desde hace* + duration.",
          solution: [
            `Present tense symptom: **${s.es}**.`,
            `Duration: **desde hace ${dur.es}** (watch accent on *días*).`,
            `Full answer: **${canon}**.`,
          ],
        };
      }
      if (tier === 2) {
        if (rng.bool(0.4)) {
          const s = rng.pick(DESDE_SYMPTOMS);
          const dur = rng.pick(DURATIONS);
          const canon = `${s.es} desde hace ${dur.es}`;
          const accept = [canon, `Hace ${dur.es} que ${s.es.toLowerCase()}`];
          if (s.alt) accept.push(`${s.alt} desde hace ${dur.es}`);
          return {
            prompt: `Translate into Spanish using *desde hace*: **${s.en} for ${dur.en}.**`,
            answer: { type: "text", accept, display: canon },
            hint: "Lock the main verb into the Present tense before *desde hace*.",
            solution: [`Present tense + duration: **${canon}**.`],
          };
        }
        const item = rng.pick(REMEDY_ADVICE);
        return {
          prompt: item.prompt,
          answer: { type: "text", accept: item.accept, display: item.accept[0] },
          hint: item.hint,
          solution: item.steps,
        };
      }
      // Tier 3: Rewrite desde hace -> Hace ... que ... OR higher pharmacy prompts
      if (rng.bool(0.55)) {
        const s = rng.pick(DESDE_SYMPTOMS);
        const dur = rng.pick(DURATIONS);
        const canon = `Hace ${dur.es} que ${s.es.toLowerCase()}`;
        const accept = [canon];
        if (s.alt) accept.push(`Hace ${dur.es} que ${s.alt.toLowerCase()}`);
        return {
          prompt: `Rewrite using **Hace… que…** (keep the Present tense): *${s.es} desde hace ${dur.es}.*`,
          answer: { type: "text", accept, display: canon },
          hint: "Formula: *Hace* + duration + *que* + Present tense clause.",
          solution: [
            `Move duration to the front: **Hace ${dur.es} que**…`,
            `Keep Present tense verb: **${canon}**.`,
          ],
          traps: [
            {
              spec: { type: "text", accept: [`Hizo ${dur.es} que ${s.es.toLowerCase()}`] },
              feedback: "Keep **Hace** in the Present tense (never *Hizo*) for an ongoing symptom!",
            },
          ],
        };
      }
      const item = rng.pick(REMEDY_ADVICE);
      return {
        prompt: item.prompt,
        answer: { type: "text", accept: item.accept, display: item.accept[0] },
        hint: item.hint,
        solution: item.steps,
      };
    },
  },
  {
    id: "body-illness-treatment.accident-tenses",
    topicId: "body-illness-treatment",
    title: "Past Accidents (Preterite) & Future Recovery",
    level: 3,
    guideRef: "health-dialogues-past",
    generate(rng, tier) {
      const pool = tier === 1 ? ACCIDENT_T1 : tier === 2 ? ACCIDENT_T2 : ACCIDENT_T3;
      const item = rng.pick(pool);
      return {
        prompt: `Translate into Spanish — ${item.prompt}`,
        answer: { type: "text", accept: item.accept, display: item.accept[0] },
        hint: item.hint,
        solution: item.steps,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
      };
    },
  },
];
