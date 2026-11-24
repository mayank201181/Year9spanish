import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Destinations, Transport & Core Preterite
  // =========================================================================
  {
    id: "holidays-activities-m1",
    title: "MCQ Paper 1 — Destinations, Transport & Past Holidays",
    questions: [
      {
        id: "holidays-activities-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "destinations-transport",
        strategy: "Check contraction a + el = al",
        question:
          "Complete the sentence accurately: *Todos los años voy de vacaciones ___ campo con mis abuelos.*",
        options: ["a el", "al", "en el", "a la"],
        answerIndex: 1,
        hints: [
          "What is the gender of *el campo* (the countryside), and which preposition follows *ir*?",
          "In Spanish, *a + el* always fuses into a single word.",
        ],
        explanation:
          "*El campo* is masculine singular, so *ir a + el campo* contracts obligatorily to **al campo**. Writing *a el* is grammatically incorrect, and *en el* describes location rather than movement toward a destination.",
      },
      {
        id: "holidays-activities-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "destinations-transport",
        strategy: "Transport preposition en vs a",
        question:
          "Which phrase correctly translates *I travel by plane, and in the city I go on foot*?",
        options: [
          "Viajo en avión y en la ciudad voy a pie.",
          "Viajo a avión y en la ciudad voy en pie.",
          "Viajo por avión y en la ciudad voy con pie.",
          "Viajo en el avión y en la ciudad voy por pie.",
        ],
        answerIndex: 0,
        hints: [
          "Vehicles take **en** with no article.",
          "*On foot* is the key transport exception that uses **a** instead of *en*.",
        ],
        explanation:
          "Vehicles use **en** without an article (**en avión**), while *on foot* is always **a pie** (never *en pie* or *por pie*).",
      },
      {
        id: "holidays-activities-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "destinations-transport",
        strategy: "Match possessive adjective to plural noun",
        question:
          "Choose the grammatically accurate Spanish translation of *In summer I go to the coast with my parents.*",
        options: [
          "En Verano voy a la costa con mi padres.",
          "En verano voy al costa con mis padres.",
          "En verano voy a la costa con mis padres.",
          "En verano voy en la costa con mi padres.",
        ],
        answerIndex: 2,
        hints: [
          "Check three details: season capitalisation, the gender of *la costa*, and singular *mi* vs plural *mis*.",
        ],
        explanation:
          "Seasons start lowercase (*en verano*), *la costa* is feminine (**a la costa**), and *padres* is plural (**con mis padres**). Using *mi padres* fails to make the possessive plural.",
      },
      {
        id: "holidays-activities-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "holiday-activities-preterite",
        strategy: "Regular -AR yo preterite ending",
        question:
          "Which *yo* verb form completes this past holiday sentence ('I swam')? *El verano pasado ___ en el mar todos los días.*",
        options: ["nado", "nadé", "nadó", "nadí"],
        answerIndex: 1,
        hints: [
          "*El verano pasado* signals the preterite tense, and *nadar* is an **-AR** verb.",
        ],
        explanation:
          "The *yo* preterite ending for regular **-AR** verbs is **-é**: **nadé** (I swam). *Nado* is present tense, *nadó* means *he/she swam*, and *-í* belongs to -ER/-IR verbs.",
      },
      {
        id: "holidays-activities-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Spot accent shifts between present and preterite",
        question:
          "What does the sentence *Mi hermano tomó el sol en la playa ayer* mean in English?",
        options: [
          "My brother takes sun cream to the beach.",
          "I sunbathed on the beach yesterday.",
          "My brother sunbathes on the beach daily.",
          "My brother sunbathed on the beach yesterday.",
        ],
        answerIndex: 3,
        hints: [
          "Look closely at the subject (*mi hermano*) and the accent on **tomó**.",
          "*-ó* with an accent is the *él/ella* preterite ending, paired with *ayer* (yesterday).",
        ],
        explanation:
          "**Tomó** has an accent on the final **-ó**, showing *él/ella* preterite (*sunbathed*). Without an accent, *tomo* would mean *I take* in the present tense.",
      },
      {
        id: "holidays-activities-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Irregular preterite of ir/ser",
        question:
          "Select the correct preterite form of **ir**: *El año pasado mis amigos y yo ___ a Mallorca en barco.*",
        options: ["fuimos", "fui", "fueron", "vamos"],
        answerIndex: 0,
        hints: [
          "*Mis amigos y yo* is equivalent to **nosotros** (we).",
          "*Vamos* is present tense — you need the **nosotros** preterite of *ir*.",
        ],
        explanation:
          "*Mis amigos y yo* = **nosotros**, and the *nosotros* preterite of *ir* is **fuimos** (we went). *Fueron* means *they went*, while *vamos* is present tense (*we go*).",
      },
      {
        id: "holidays-activities-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Apply -car → -qué in yo preterite",
        question:
          "How do you write *I took lots of photos* in Spanish using **sacar**?",
        options: [
          "Sacé muchas fotos.",
          "Saqué muchas fotos.",
          "Saco muchas fotos.",
          "Saquí muchas fotos.",
        ],
        answerIndex: 1,
        hints: [
          "*Sacar* is an **-AR** verb whose stem ends in **-c**.",
          "Before **-é**, change **c** to **qu** to preserve the hard /k/ sound.",
        ],
        explanation:
          "Verbs ending in **-car** change to **-qué** in the *yo* preterite: **saqué**. *Sacé* changes the pronunciation to a soft *c*, and *-í* is only for -ER/-IR verbs.",
      },
      {
        id: "holidays-activities-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Regular -ER preterite endings",
        question:
          "Complete the past sentence: *En Valencia ___ paella deliciosa y ___ zumo de naranja.* (yo)",
        options: [
          "comé … bebé",
          "como … bebo",
          "comí … bebí",
          "comió … bebió",
        ],
        answerIndex: 2,
        hints: [
          "Both *comer* and *beber* are regular **-ER** verbs.",
          "The *yo* preterite ending for -ER and -IR verbs is **-í**.",
        ],
        explanation:
          "Regular -ER verbs take **-í** for *yo* in the preterite: **comí** (I ate) and **bebí** (I drank). *Comé/bebé* mistakenly uses -AR endings, and *comió/bebió* is *él/ella*.",
      },
      {
        id: "holidays-activities-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "future-holiday-plans",
        strategy: "Immediate future: ir + a + infinitive",
        question:
          "Choose the accurate immediate future sentence for *Next summer we are going to travel to Italy.*",
        options: [
          "El próximo verano vamos viajar a Italia.",
          "El próximo verano vamos a viajamos a Italia.",
          "El próximo verano fuimos a viajar a Italia.",
          "El próximo verano vamos a viajar a Italia.",
        ],
        answerIndex: 3,
        hints: [
          "The immediate future needs all three parts: present of *ir* + **a** + **infinitive**.",
        ],
        explanation:
          "**Vamos a viajar** keeps the essential **a** and leaves *viajar* in the infinitive. Dropping *a* (*vamos viajar*) or conjugating both verbs (*vamos a viajamos*) breaks the rule.",
      },
      {
        id: "holidays-activities-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Weather uses mucho with nouns",
        question:
          "Which phrase correctly says *Tomorrow it is going to be very hot*?",
        options: [
          "Mañana va a hacer mucho calor.",
          "Mañana va a hacer muy calor.",
          "Mañana va hacer mucho calor.",
          "Mañana hace mucho calor ayer.",
        ],
        answerIndex: 0,
        hints: [
          "Is *calor* (heat) a noun or an adjective in Spanish?",
          "Check both the **a** in *va a hacer* and whether *mucho* or *muy* fits before *calor*.",
        ],
        explanation:
          "*Calor* is a masculine noun, so it requires **mucho** (never *muy*), and immediate future requires **va a hacer**. Therefore **Mañana va a hacer mucho calor** is exact.",
      },
      {
        id: "holidays-activities-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Me gustaría + infinitive",
        question:
          "Complete the wish accurately: *En el futuro, me gustaría ___ los monumentos de México.*",
        options: ["visito", "visitar", "visité", "visitando"],
        answerIndex: 1,
        hints: [
          "What verb form ALWAYS follows *me gustaría* (I would like)?",
          "Just like in English (*would like **to visit***), Spanish uses the unconjugated infinitive.",
        ],
        explanation:
          "**Me gustaría** is always followed directly by an **infinitive**: **me gustaría visitar**. Conjugating the verb (*visito / visité*) after *me gustaría* is a classic exam slip.",
      },
      {
        id: "holidays-activities-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-opinions-narratives",
        strategy: "Agree verb & adjective with las vacaciones",
        question:
          "Which sentence has 100% accurate verb and adjective agreement?",
        options: [
          "Las vacaciones fue muy divertido.",
          "Las vacaciones fueron muy divertido.",
          "Las vacaciones fueron muy divertidas.",
          "Las vacaciones fue muy divertidas.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the article **las** in *las vacaciones*: singular or plural? Masculine or feminine?",
          "Both the verb (*ser* in the preterite) and the adjective must match feminine plural.",
        ],
        explanation:
          "*Las vacaciones* is **feminine plural**, so it takes **fueron** (they were) and **divertidas** (fem. pl.). Writing *fue* or *divertido* breaks number and gender agreement.",
      },
      {
        id: "holidays-activities-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-opinions-narratives",
        strategy: "Match connective to sentence meaning",
        question:
          "Choose the best connective to join these contrasting ideas: *Hizo mucho sol en Grecia, ___ perdí mi maleta en el aeropuerto.*",
        options: ["porque", "también", "además", "sin embargo"],
        answerIndex: 3,
        hints: [
          "One idea is positive (*it was very sunny*) and the second is negative (*I lost my suitcase*).",
          "Which connective introduces a contrast meaning *however*?",
        ],
        explanation:
          "**Sin embargo** means *however* and smoothly links a positive detail to a contrasting negative event. *También* and *además* add similar points, while *porque* gives a reason.",
      },
      {
        id: "holidays-activities-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Read carefully for negative & transport detail",
        question:
          "Read Lucas's note: *«Normalmente vamos al sur de Francia en coche, pero este año vamos a ir en tren porque es más ecológico.»* How is Lucas travelling this year?",
        options: [
          "By train, as it is greener.",
          "By car, as it is cheaper.",
          "By plane, as it is faster.",
          "By coach, as it is comfier.",
        ],
        answerIndex: 0,
        hints: [
          "Separate what Lucas *normally* does (*normalmente*) from what he is doing *this year* (*este año*).",
          "Look closely after the contrast word *pero* (but).",
        ],
        explanation:
          "Although Lucas usually goes *en coche*, **pero este año vamos a ir en tren porque es más ecológico** confirms he is going **by train** because it is more eco-friendly.",
      },
      {
        id: "holidays-activities-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-opinions-narratives",
        strategy: "Distinguish ser + adjective vs pasarlo + adverb",
        question:
          "Which Spanish expression accurately translates *I had a blast and the trip was incredible*?",
        options: [
          "Lo pasé bueno y el viaje fue bien.",
          "Lo pasé bomba y el viaje fue increíble.",
          "Lo pasé bomba y el viaje fui increíble.",
          "Lo paso bomba y el viaje fue increíble.",
        ],
        answerIndex: 1,
        hints: [
          "Check the tense of *pasarlo* (*had* = preterite) and the subject of *was* (*el viaje* = it).",
          "*Fui* means *I was*, whereas *fue* means *it was*.",
        ],
        explanation:
          "**Lo pasé bomba** (*I had a blast*) uses the *yo* preterite, and **el viaje fue increíble** uses third-person singular **fue** (*it was*) with an adjective. *Fue bien* and *fui increíble* are incorrect.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2: -car/-gar/-zar, Irregulars, Simple Future & Weather
  // =========================================================================
  {
    id: "holidays-activities-m2",
    title: "MCQ Paper 2 — Preterite Traps, Future Tenses & Weather",
    questions: [
      {
        id: "holidays-activities-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Apply -gar → -gué without present stem-change",
        question:
          "How do you say *I played volleyball on the beach* in the preterite?",
        options: [
          "Juegué al voleibol en la playa.",
          "Jugé al voleibol en la playa.",
          "Jugué al voleibol en la playa.",
          "Jugó al voleibol en la playa.",
        ],
        answerIndex: 2,
        hints: [
          "*Jugar* ends in **-gar**, so *g* changes to *gu* before *-é*.",
          "Does the present-tense *u→ue* boot change happen in the preterite?",
        ],
        explanation:
          "The *yo* preterite of *jugar* is **jugué** (-gar → -gué, with NO *ue* stem change). *Juegué* falsely mixes in the present stem, *jugé* alters the sound, and *jugó* means *he/she played*.",
      },
      {
        id: "holidays-activities-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Check where -car/-gar/-zar applies",
        question:
          "Complete the sentence for **ellos**: *Mis padres ___ tarde al aeropuerto por el tráfico.* (llegar)",
        options: ["lleguaron", "llegué", "llegaron", "llegó"],
        answerIndex: 2,
        hints: [
          "Does the *-gar → -gué* spelling change happen in all persons or ONLY in *yo*?",
          "*Mis padres* = *ellos*, so add the regular *-aron* ending to the stem *lleg-*.",
        ],
        explanation:
          "The **-gar → -gué** change ONLY happens before *-e* (the *yo* form). For *ellos*, *llegar* is completely regular: **llegaron**. *Lleguaron* is a very common over-correction.",
      },
      {
        id: "holidays-activities-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Irregular preterite of hacer (c → z in él/ella)",
        question:
          "Choose the accurate preterite forms of **hacer**: *Ayer yo ___ senderismo y mi amiga ___ turismo en el centro.*",
        options: [
          "hice … hizo",
          "hize … hico",
          "hace … hizo",
          "hice … hizó",
        ],
        answerIndex: 0,
        hints: [
          "*Hacer* has an irregular preterite stem *hic-*, and in *él/ella* the **c** becomes **z** before **o**.",
          "Strong irregular preterites (*hice, hizo*) NEVER take written accents.",
        ],
        explanation:
          "*Hacer* in the preterite is **hice** (yo) and **hizo** (él/ella), with **no accents**. Writing *hizó* adds an incorrect accent, and *hico* fails to keep the soft sound.",
      },
      {
        id: "holidays-activities-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Recognise -zar → -cé in yo preterite",
        question:
          "Which verb form completes *El sábado pasado ___ la frontera en coche con mi familia* (cruzar, yo)?",
        options: ["cruzé", "crucé", "cruzó", "cruzo"],
        answerIndex: 1,
        hints: [
          "Spanish spelling never allows *z* directly before *e*.",
          "Swap **z → c** before **-é** in the *yo* preterite.",
        ],
        explanation:
          "Verbs ending in **-zar** switch to **-cé** in the *yo* preterite: **crucé** (I crossed). *Cruzé* violates Spanish spelling rules, *cruzó* is *él/ella*, and *cruzo* is present.",
      },
      {
        id: "holidays-activities-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "No accents on monosyllabic preterites vi / fue",
        question:
          "Which sentence is spelled with 100% accurate Spanish accents?",
        options: [
          "En París ví muchos monumentos y fué genial.",
          "En París vi muchos monumentos y fué genial.",
          "En París ví muchos monumentos y fue genial.",
          "En París vi muchos monumentos y fue genial.",
        ],
        answerIndex: 3,
        hints: [
          "How many syllables do **vi** and **fue** have?",
          "Under modern Spanish spelling rules, monosyllabic preterites like *vi, vio, fui, fue* take NO written accent.",
        ],
        explanation:
          "**Vi** and **fue** are single-syllable words and NEVER carry written accents. Remember to keep the accent on **París** as well!",
      },
      {
        id: "holidays-activities-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Simple future = full infinitive + ending",
        question:
          "How do you write *Next year I will travel to Greece and I will eat fresh fish* in the **simple future**?",
        options: [
          "El año que viene viajaré a Grecia y comeré pescado fresco.",
          "El año que viene viajé a Grecia y comí pescado fresco.",
          "El año que viene viajáre a Grecia y comére pescado fresco.",
          "El año que viene viajará a Grecia y comerá pescado fresco.",
        ],
        answerIndex: 0,
        hints: [
          "For simple future, keep the **whole infinitive** (*viajar, comer*) and add the *yo* ending **-é**.",
          "Watch out for *-á*, which means *he/she will*, not *I will*.",
        ],
        explanation:
          "Simple future *yo* attaches **-é** directly to the full infinitive: **viajaré** and **comeré**. *Viajé/comí* is preterite (*travelled/ate*), and *viajará/comerá* is *él/ella*.",
      },
      {
        id: "holidays-activities-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Irregular simple future stems (har-, tendr-)",
        question:
          "Choose the accurate **simple future** forms of *hacer* and *tener*: *El verano que viene ___ deportes acuáticos y ___ unas vacaciones geniales.* (nosotros)",
        options: [
          "haceremos … teneremos",
          "haremos … tendremos",
          "harémos … tendrémos",
          "hicimos … tuvimos",
        ],
        answerIndex: 1,
        hints: [
          "Both *hacer* (**har-**) and *tener* (**tendr-**) have shortened stems in the simple future.",
          "Which simple future ending is the ONLY one WITHOUT a written accent?",
        ],
        explanation:
          "*Hacer* → **haremos** and *tener* → **tendremos**. The *-emos* ending is the only simple future ending with NO accent, while *hicimos/tuvimos* is the preterite.",
      },
      {
        id: "holidays-activities-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Shift weather verbs accurately into the past",
        question:
          "How do you translate *Last week the weather was bad and it rained every day*?",
        options: [
          "La semana pasada hace mal tiempo y llueve todos los días.",
          "La semana pasada hizo mal tiempo y llueva todos los días.",
          "La semana pasada hizo mal tiempo y llovió todos los días.",
          "La semana pasada va a hacer mal tiempo y llovió todos los días.",
        ],
        answerIndex: 2,
        hints: [
          "*La semana pasada* requires BOTH weather verbs in the **preterite**.",
          "*Hacer* → *hizo*; *llover* (regular -ER preterite, 3rd sg.) → *llovió*.",
        ],
        explanation:
          "In the preterite, *it was bad weather* is **hizo mal tiempo** and *it rained* is **llovió** (regular -ER preterite with accent on *-ó*). *Hace / llueve* stays in the present tense.",
      },
      {
        id: "holidays-activities-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Use infinitive after va a for weather",
        question:
          "Which weather forecast is grammatically accurate for *This weekend it is going to snow in the mountains*?",
        options: [
          "Este fin de semana va a nieva en la montaña.",
          "Este fin de semana va nevar en la montaña.",
          "Este fin de semana nevó en la montaña.",
          "Este fin de semana va a nevar en la montaña.",
        ],
        answerIndex: 3,
        hints: [
          "After **va a**, you MUST use the unconjugated **infinitive** of *to snow*.",
          "*Nieva* is conjugated present tense (*it snows*); what is its *-ar* infinitive?",
        ],
        explanation:
          "The infinitive of *nieva* is **nevar**, so the immediate future is **va a nevar**. Writing *va a nieva* wrongly puts a conjugated verb after *va a*.",
      },
      {
        id: "holidays-activities-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Plural destinations take a los / a las",
        question:
          "Complete the sentence: *En agosto siempre volamos ___ Islas Baleares porque nos encanta la playa.*",
        options: ["a las", "a los", "al", "en las"],
        answerIndex: 0,
        hints: [
          "Check the gender and number of *Islas Baleares* (*la isla → las islas*).",
          "Movement toward a place uses **a**, not *en*.",
        ],
        explanation:
          "*Islas* is feminine plural (*las islas*), so *to the Balearic Islands* is **a las Islas Baleares**. *Al* is masculine singular and *en las* shows static location.",
      },
      {
        id: "holidays-activities-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Identify tense via time marker when nosotros matches",
        question:
          "Read: *«El verano pasado visitamos Sevilla y salimos a cenar tapas cada noche.»* Which tense are **visitamos** and **salimos** in here?",
        options: [
          "Present tense, because -amos/-imos are present endings.",
          "Preterite tense, signalled by el verano pasado.",
          "Simple future tense, describing next summer's plan.",
          "Immediate future tense, describing an upcoming trip.",
        ],
        answerIndex: 1,
        hints: [
          "Regular -AR and -IR *nosotros* forms look identical in two tenses.",
          "Look at the opening time marker: *El verano pasado* (Last summer).",
        ],
        explanation:
          "Regular -AR and -IR *nosotros* forms (*visitamos, salimos*) share the same spelling in present and preterite, so the time marker **el verano pasado** confirms they are **preterite** (*we visited / we went out*).",
      },
      {
        id: "holidays-activities-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-opinions-narratives",
        strategy: "Spot subtle tense & preposition accuracy",
        question:
          "Read Sofía's postcard: *«Llegué a Valencia el lunes. Aunque llovió el primer día, lo mejor fue que probé la paella auténtica y compré recuerdos para mis amigos.»* Which statement is TRUE?",
        options: [
          "It stayed sunny from the very first day.",
          "Sofía regretted buying souvenirs for friends.",
          "The highlight was trying authentic paella.",
          "Sofía is travelling to Valencia next Monday.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the phrase *aunque llovió el primer día* and *lo mejor fue que…*.",
          "*Lo mejor fue que* introduces the highlight of the trip.",
        ],
        explanation:
          "*Aunque llovió el primer día* means it rained on day one, and **lo mejor fue que probé la paella auténtica** directly states that trying authentic paella was the highlight.",
      },
      {
        id: "holidays-activities-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-holiday-plans",
        strategy: "Distinguish simple future endings by person",
        question:
          "Who is doing the action in *El próximo año irán a los Pirineos y esquiarán todos los días*?",
        options: [
          "I (yo)",
          "We (nosotros)",
          "He or she (él / ella)",
          "They (ellos / ellas)",
        ],
        answerIndex: 3,
        hints: [
          "Check the simple future ending **-án** on both *irán* and *esquiarán*.",
          "Compare: *-é (yo), -ás (tú), -á (él/ella), -emos (nosotros), -éis (vosotros), -án (ellos/ellas)*.",
        ],
        explanation:
          "The simple future ending **-án** belongs to **ellos / ellas / ustedes**: *irán* (they will go) and *esquiarán* (they will ski).",
      },
      {
        id: "holidays-activities-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Distinguish autocar, barco, vuelo, equipaje",
        question:
          "Read the announcement: *«Atención pasajeros: el vuelo a Málaga tiene un retraso de dos horas por la tormenta.»* What is the problem?",
        options: [
          "The flight to Málaga is delayed by two hours due to a storm.",
          "The ferry to Málaga is cancelled because of heavy snow.",
          "The coach to Málaga leaves two hours early because of traffic.",
          "Passengers lost their suitcases at Málaga train station.",
        ],
        answerIndex: 0,
        hints: [
          "Break down the key nouns: *el vuelo*, *un retraso*, *la tormenta*.",
          "Notice *dos horas* (two hours) and *por* (because of).",
        ],
        explanation:
          "*El vuelo* = the flight, *tiene un retraso de dos horas* = has a two-hour delay, and *por la tormenta* = because of the storm.",
      },
      {
        id: "holidays-activities-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-opinions-narratives",
        strategy: "Check all four verbs in a 3-tense sentence",
        question:
          "Which sentence combines **present**, **preterite** and **immediate future** with ZERO grammar errors?",
        options: [
          "Normalmente voy a la playa, pero el verano pasado fui al campo y el próximo año voy visitar Japón.",
          "Normalmente voy a la playa, pero el verano pasado fui al campo y el próximo año voy a visitar Japón.",
          "Normalmente fui a la playa, pero el verano pasado voy al campo y el próximo año voy a visitar Japón.",
          "Normalmente voy a la playa, pero el verano pasado fuí a el campo y el próximo año voy a visitar Japón.",
        ],
        answerIndex: 1,
        hints: [
          "Check each of the three verbs: *normalmente* → present, *el verano pasado* → preterite, *el próximo año* → immediate future.",
          "Also check the contraction *al campo*, no accent on *fui*, and the **a** in *voy a visitar*.",
        ],
        explanation:
          "**Normalmente voy** (present) + **fui al campo** (preterite, no accent on *fui*, contracted *al*) + **voy a visitar** (immediate future with **a**) is 100% accurate in every detail.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Reading, Nuance & Multi-Tense Mastery
  // =========================================================================
  {
    id: "holidays-activities-m3",
    title: "MCQ Paper 3 — Reading Comprehension & Multi-Tense Mastery",
    questions: [
      {
        id: "holidays-activities-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Distinguish tú vs él/ella preterite",
        question:
          "You want to ask a friend *Did you visit the beach and did you swim in the sea?* Which question is accurate?",
        options: [
          "¿Visitaste la playa y nadaste en el mar?",
          "¿Visitó la playa y nadó en el mar?",
          "¿Visitastes la playa y nadastes en el mar?",
          "¿Visitas la playa y nadas en el mar?",
        ],
        answerIndex: 0,
        hints: [
          "The *tú* preterite ending for -AR verbs is **-aste** — NEVER add an extra *-s* at the end!",
          "Check that both verbs are in the preterite, not the present.",
        ],
        explanation:
          "The *tú* preterite ending for -AR verbs is **-aste** (**¿Visitaste… y nadaste…?**). Adding a final *-s* (*visitastes*) is a common error to avoid in formal Spanish.",
      },
      {
        id: "holidays-activities-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-activities-preterite",
        strategy: "Conjugate reflexive verb in preterite",
        question:
          "How do you say *I relaxed on the island* using the reflexive verb **relajarse**?",
        options: [
          "Se relajé en la isla.",
          "Me relajé en la isla.",
          "Me relajo en la isla.",
          "Nos relajé en la isla.",
        ],
        answerIndex: 1,
        hints: [
          "Which reflexive pronoun goes with **yo** (*me, te, se, nos*)?",
          "Pair the *yo* pronoun with the *yo* preterite ending **-é**.",
        ],
        explanation:
          "For *yo*, the reflexive pronoun is **me** and the regular -AR preterite of *relajar* is **relajé** → **Me relajé en la isla**. *Me relajo* is present tense.",
      },
      {
        id: "holidays-activities-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Read weather contrast across two time frames",
        question:
          "Read Diego's message: *«El invierno pasado nevó mucho en Andorra y esquié todos los días; sin embargo, este verano va a hacer mucho calor y voy a bucear en Menorca.»* Which activity is Diego planning for **this summer**?",
        options: [
          "Skiing in Andorra every day.",
          "Hiking in the Pyrenees with friends.",
          "Scuba diving or snorkelling in Menorca.",
          "Sailing around the Canary Islands.",
        ],
        answerIndex: 2,
        hints: [
          "Separate *el invierno pasado* (last winter) from *este verano* (this summer).",
          "Look at the verb after **voy a**.",
        ],
        explanation:
          "Last winter Diego skied in Andorra, whereas for this summer he writes **voy a bucear en Menorca** (*bucear* = to scuba dive / snorkel).",
      },
      {
        id: "holidays-activities-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Check Spanish transport vocabulary carefully",
        question:
          "Which sentence translates *We missed the flight because we arrived late at the airport*?",
        options: [
          "Perdemos el vuelo porque llegamos tarde al puerto.",
          "Perdimos el billete porque llegamos temprano al aeropuerto.",
          "Perdí el vuelo porque llegué tarde a la estación.",
          "Perdimos el vuelo porque llegamos tarde al aeropuerto.",
        ],
        answerIndex: 3,
        hints: [
          "Check the subject (*we* = *nosotros*), the tense (*missed/arrived* = preterite), and the place (*airport*).",
          "*Perder* (nosotros) in preterite is **perdimos** (present is *perdemos*!).",
        ],
        explanation:
          "**Perdimos** (we missed, -ER preterite) + **el vuelo** (the flight) + **llegamos tarde al aeropuerto** (we arrived late at the airport) matches every word accurately.",
      },
      {
        id: "holidays-activities-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-opinions-narratives",
        strategy: "Choose exact adjective agreement with el viaje",
        question:
          "Complete accurately: *El viaje en autocar fue muy ___ y ___, pero el destino fue ___.*",
        options: [
          "largo … aburrido … precioso",
          "larga … aburrida … preciosa",
          "largos … aburridos … preciosos",
          "largo … aburrida … precioso",
        ],
        answerIndex: 0,
        hints: [
          "Check the gender and number of BOTH nouns: **el viaje** and **el destino**.",
          "Both nouns are masculine singular (*el*).",
        ],
        explanation:
          "Both *el viaje* and *el destino* are **masculine singular**, so all three adjectives end in **-o**: **largo, aburrido, precioso**.",
      },
      {
        id: "holidays-activities-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Simple future of salir & ir",
        question:
          "Complete in the **simple future** (*yo*): *En Barcelona ___ con mis primos por la noche e ___ a la playa por la mañana.* (salir, ir)",
        options: [
          "saliré … iré",
          "saldré … iré",
          "salí … fui",
          "saldré … voy a ir",
        ],
        answerIndex: 1,
        hints: [
          "*Salir* has an irregular simple future stem (**saldr-**), whereas *ir* is regular (**ir-**).",
          "Both gaps ask specifically for the **simple future**.",
        ],
        explanation:
          "*Salir* uses the irregular stem **saldr-** → **saldré**, while *ir* simply adds **-é** → **iré**. (*Saliré* forgets the irregular stem, and *salí/fui* is preterite.)",
      },
      {
        id: "holidays-activities-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-activities-preterite",
        strategy: "Spot the ONLY sentence with a grammar error",
        question:
          "Three of these past-tense holiday sentences are 100% accurate. Which ONE contains an error?",
        options: [
          "El sábado pasado practiqué vela en la costa.",
          "Ayer mis padres compraron recuerdos en el pueblo.",
          "El verano pasado tuvé un problema con mi maleta.",
          "En agosto fuimos al norte de España en tren.",
        ],
        answerIndex: 2,
        hints: [
          "Check accents carefully on irregular preterites (*tener*, *ir*) versus regular verbs.",
          "Remember: strong irregular preterites (*tuve, hice, fui*) NEVER take written accents!",
        ],
        explanation:
          "*Tener* in the *yo* preterite is **tuve** with **no accent** (*tuvé* is wrong). All three other sentences (*practiqué, compraron, fuimos al norte*) are spotless.",
      },
      {
        id: "holidays-activities-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holiday-opinions-narratives",
        strategy: "Read for opinion and contrast in a short blog",
        question:
          "Read Carla's blog: *«Lo peor de las vacaciones fue que hubo una tormenta enorme y perdimos el ferri. Por eso llegamos de noche. Sin embargo, al día siguiente hizo un sol radiante y lo pasamos genial.»* How did Carla feel overall after the next day?",
        options: [
          "She decided never to take a ferry again.",
          "She stayed unhappy because the storm lasted all week.",
          "She missed the sun because it stayed cloudy.",
          "She had a great time once the sun came out.",
        ],
        answerIndex: 3,
        hints: [
          "Follow the turning point introduced by **Sin embargo** (However).",
          "What does *hizo un sol radiante y lo pasamos genial* mean?",
        ],
        explanation:
          "Despite the storm and missed ferry at first, **al día siguiente hizo un sol radiante y lo pasamos genial** shows that the next day was bright and sunny and they **had a great time**.",
      },
      {
        id: "holidays-activities-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Choose exact preposition for countries vs masculine regions",
        question:
          "Fill both gaps accurately: *El año pasado volamos ___ Grecia, pero este verano vamos ___ sur de Francia.*",
        options: [
          "a … al",
          "en … a el",
          "a la … al",
          "al … a",
        ],
        answerIndex: 0,
        hints: [
          "Countries like *Grecia* take bare **a** (no article).",
          "*El sur* is masculine singular, so *a + el* contracts.",
        ],
        explanation:
          "Use bare **a** before *Grecia* (**a Grecia**) and contract **a + el → al** before *sur* (**al sur de Francia**).",
      },
      {
        id: "holidays-activities-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-activities-preterite",
        strategy: "Match -ER/-IR preterite subject endings",
        question:
          "Read: *«Mis amigos subieron a la montaña y bebieron agua fría, pero yo descansé en el lago.»* Who climbed the mountain?",
        options: [
          "The narrator alone.",
          "The narrator's friends.",
          "The narrator and the friends together.",
          "The narrator's sister.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the verbs **subieron / bebieron** (*-ieron*) with **descansé** (*-é*).",
          "Notice the contrast word **pero yo…** (but I…).",
        ],
        explanation:
          "**Mis amigos subieron** (*ellos*, -ieron) shows that the friends climbed the mountain, while **pero yo descansé** confirms the narrator rested by the lake instead.",
      },
      {
        id: "holidays-activities-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-holiday-plans",
        strategy: "Recognise weather tense clues",
        question:
          "Which three weather phrases are in the order **Past → Present → Future**?",
        options: [
          "Hace viento → Hizo viento → Hará viento",
          "Hará viento → Hace viento → Hizo viento",
          "Hizo viento → Hace viento → Va a hacer viento",
          "Va a hacer viento → Hizo viento → Hace viento",
        ],
        answerIndex: 2,
        hints: [
          "Identify each tense of *hacer*: *hizo* (preterite), *hace* (present), *va a hacer / hará* (future).",
          "Check which option starts with the past (*hizo*) and finishes with the future (*va a hacer*).",
        ],
        explanation:
          "**Hizo viento** (it was windy — past) → **Hace viento** (it is windy — present) → **Va a hacer viento** (it is going to be windy — future) is the exact chronological order.",
      },
      {
        id: "holidays-activities-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-opinions-narratives",
        strategy: "Distinguish por eso (therefore) vs porque (because)",
        question:
          "Choose the connective that fits the cause-and-effect logic: *En agosto hace demasiado calor en la ciudad; ___ siempre vamos a la costa.*",
        options: ["aunque", "sin embargo", "porque", "por eso"],
        answerIndex: 3,
        hints: [
          "First comes the **cause** (it's too hot in the city); second comes the **result** (we always go to the coast).",
          "Which phrase means *therefore / that's why* rather than *because*?",
        ],
        explanation:
          "**Por eso** means *therefore / for that reason*, linking the cause (*it's too hot*) to the result (*we go to the coast*). *Porque* would reverse the logic.",
      },
      {
        id: "holidays-activities-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "destinations-transport",
        strategy: "Notice billete de ida y vuelta & pasaporte",
        question:
          "Before boarding an international flight, which pair of items do you definitely need at the airport?",
        options: [
          "El pasaporte y la tarjeta de embarque.",
          "La crema solar y el billete de autobús.",
          "Las gafas de sol y la bicicleta.",
          "El senderismo y los recuerdos típicos.",
        ],
        answerIndex: 0,
        hints: [
          "Focus on airport check-in vocabulary from the transport list.",
          "What are *el pasaporte* and *la tarjeta de embarque*?",
        ],
        explanation:
          "**El pasaporte** (passport) and **la tarjeta de embarque** (boarding pass) are required to board an international flight.",
      },
      {
        id: "holidays-activities-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-holiday-plans",
        strategy: "Contrast immediate future and simple future in reading",
        question:
          "Read Mateo's plan: *«En Semana Santa voy a descansar en el pueblo con mis abuelos, pero en el futuro viajaré a Perú porque me gustaría hacer senderismo en los Andes.»* Which trip is a longer-term future ambition?",
        options: [
          "Resting in the village with his grandparents.",
          "Travelling to Peru to go hiking in the Andes.",
          "Skiing in the Spanish Pyrenees this Easter.",
          "Swimming on the Mediterranean coast with cousins.",
        ],
        answerIndex: 1,
        hints: [
          "Compare *En Semana Santa voy a…* (this Easter) with *en el futuro viajaré…* (in the future I will…).",
          "Note the clue *me gustaría hacer senderismo*.",
        ],
        explanation:
          "Mateo's near plan for Easter is resting in the village (*voy a descansar*), whereas his longer-term ambition (*en el futuro viajaré…*) is **travelling to Peru to hike in the Andes**.",
      },
      {
        id: "holidays-activities-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holiday-opinions-narratives",
        strategy: "Evaluate full Year 9 multi-tense accuracy",
        question:
          "Which short paragraph uses **present**, **preterite** and **simple future** accurately without a single agreement or spelling error?",
        options: [
          "Normalmente voy a Italia. El año pasado saqué fotos y las vacaciones fue geniales. El año que viene viajaré a Grecia.",
          "Normalmente voy a Italia. El año pasado sacé fotos y las vacaciones fueron geniales. El año que viene viajaré a Grecia.",
          "Normalmente voy a Italia. El año pasado saqué fotos y las vacaciones fueron geniales. El año que viene viajaré a Grecia.",
          "Normalmente voy a Italia. El año pasado saqué fotos y las vacaciones fueron geniales. El año que viene viajará a Grecia.",
        ],
        answerIndex: 2,
        hints: [
          "Audit four checkpoints in every option: *saqué* (-car → -qué), *las vacaciones fueron* (plural verb), *geniales* (plural adj.), and *viajaré* (yo simple future).",
          "Watch out for *viajará* (él/ella) vs *viajaré* (yo)!",
        ],
        explanation:
          "**Normalmente voy** (present), **saqué fotos** (-car → -qué), **las vacaciones fueron geniales** (plural verb & adjective), and **viajaré** (*yo* simple future) is error-free from start to finish.",
      },
    ],
  },
];
