import type { ExamPaper } from "../types";

const HOTEL_REVIEW_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish hotel review card for Hotel Sol y Playa in Málaga showing three out of five stars, facilities, positive highlights and two complaints"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="48" rx="8" fill="var(--brand-soft)"/><text x="30" y="37" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="var(--ink)">Hotel Sol y Playa — Málaga (agosto)</text><text x="30" y="54" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink-2)">Reseña de Lucía M. · Habitación doble con vistas al mar · Media pensión</text><rect x="424" y="24" width="106" height="30" rx="15" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="477" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--ink)">★★★☆☆ 3/5</text><rect x="16" y="76" width="256" height="114" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="28" y="96" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--good)">LO MEJOR (Positivo)</text><text x="28" y="116" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Piscina climatizada muy limpia</text><text x="28" y="136" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Wifi gratis en todo el hotel</text><text x="28" y="156" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Desayuno delicioso con fruta fresca</text><text x="28" y="176" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Cerca de la playa y del castillo</text><rect x="288" y="76" width="256" height="114" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/><text x="300" y="96" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--bad)">LO PEOR (Problemas)</text><text x="300" y="116" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• El ascensor no funcionó dos días</text><text x="300" y="136" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Hacía demasiado ruido por la noche</text><text x="300" y="156" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• No había aire acondicionado</text><text x="300" y="176" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Recepción lenta al llegar</text><rect x="16" y="202" width="528" height="34" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="280" y="223" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">Veredicto: «Lo recomiendo para familias, pero no volveré en verano.»</text></svg>`;

const MARKET_RECEIPT_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish market stall receipt from Mercado Central listing weights, quantities and prices for groceries"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="18" y="16" width="524" height="44" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="280" y="36" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="var(--ink)">MERCADO CENTRAL — Puesto «La Huerta &amp; Pan»</text><text x="280" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Sábado 14 de marzo · Cliente: Señor Navarro</text><rect x="18" y="70" width="524" height="132" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="34" y="92" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--ink-2)">CANTIDAD</text><text x="220" y="92" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--ink-2)">PRODUCTO</text><text x="518" y="92" text-anchor="end" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--ink-2)">PRECIO</text><line x1="28" y1="100" x2="532" y2="100" stroke="var(--line)" stroke-width="1"/><text x="34" y="120" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Medio kilo de</text><text x="220" y="120" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">tomates maduros</text><text x="518" y="120" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">1,80 €</text><text x="34" y="142" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Doscientos gramos de</text><text x="220" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">queso manchego</text><text x="518" y="142" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">4,50 €</text><text x="34" y="164" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Una docena de</text><text x="220" y="164" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">huevos frescos</text><text x="518" y="164" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">3,20 €</text><text x="34" y="186" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Dos barras de</text><text x="220" y="186" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">pan integral</text><text x="518" y="186" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">2,40 €</text><rect x="18" y="210" width="524" height="28" rx="6" fill="var(--brand-soft)"/><text x="34" y="229" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--brand)">TOTAL A PAGAR (sin bolsas de plástico)</text><text x="518" y="229" text-anchor="end" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--brand)">11,90 €</text></svg>`;

const TENSE_TIMELINE_SVG = `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-tense Spanish timeline showing Preterite, Present, Immediate Future and Simple Future with time clues and example verbs"><rect x="0" y="0" width="560" height="240" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--ink)">Mapa de los cuatro tiempos (Año 9)</text><line x1="36" y1="62" x2="524" y2="62" stroke="var(--brand)" stroke-width="3"/><polygon points="524,56 538,62 524,68" fill="var(--brand)"/><circle cx="82" cy="62" r="8" fill="var(--bad)"/><circle cx="212" cy="62" r="8" fill="var(--good)"/><circle cx="344" cy="62" r="8" fill="var(--info)"/><circle cx="476" cy="62" r="8" fill="var(--brand)"/><rect x="18" y="82" width="126" height="140" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/><text x="81" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--bad)">PRETÉRITO</text><text x="81" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">ayer / el año pasado</text><text x="81" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">viajé · comí</text><text x="81" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">fui · hice</text><text x="81" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">saqué · jugué</text><text x="81" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)">acción terminada</text><rect x="150" y="82" width="126" height="140" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="213" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--good)">PRESENTE</text><text x="213" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">normalmente / hoy</text><text x="213" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">viajo · como</text><text x="213" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">voy · hago</text><text x="213" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">prefiero · puedo</text><text x="213" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)">hábito o estado</text><rect x="282" y="82" width="126" height="140" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="345" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--info)">FUT. INMEDIATO</text><text x="345" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">mañana / pronto</text><text x="345" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">voy a viajar</text><text x="345" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">vamos a comer</text><text x="345" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">van a visitar</text><text x="345" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)">ir + a + infinitivo</text><rect x="414" y="82" width="128" height="140" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="478" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)">FUT. SIMPLE</text><text x="478" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">el año que viene</text><text x="478" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">viajaré · comeré</text><text x="478" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">haré · tendré</text><text x="478" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">podremos · irán</text><text x="478" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)">infinitivo + -é/-ás/-á</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-r1",
  title: "Year 9 Spanish Reading & Grammar Mock 1 (Holidays & Food)",
  calculator: false,
  minutes: 45,
  questions: [
    // -----------------------------------------------------------------------
    // WARMUP (q01–q06)
    // -----------------------------------------------------------------------
    {
      id: "exam-r1-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "holidays-activities",
      guideRef: "destinations-transport",
      question:
        "Read Mateo's holiday note:\n\n> *Normalmente voy de vacaciones a la costa con mis abuelos. Viajamos en tren porque mi abuelo odia volar.*\n\nHow does Mateo normally travel on holiday?",
      options: [
        "By train with his grandparents",
        "By plane with his grandparents",
        "By boat with his close friends",
        "By car across the mountains",
      ],
      answerIndex: 0,
      hints: [
        "Look for the transport phrase after *en* and the companion after *con*.",
      ],
      strategy: "Scan for transport (*en + vehicle*) and companions (*con*)",
      explanation:
        "*Viajamos en tren* means 'we travel by train', and *con mis abuelos* means 'with my grandparents'. His grandfather hates flying (*odia volar*), which rules out travelling by plane.",
    },
    {
      id: "exam-r1-q02",
      kind: "short",
      difficulty: "warmup",
      topicId: "hotels-places-reviews",
      guideRef: "places-of-interest",
      question:
        "Translate this Spanish phrase into English (keep it concise):\n\n**el parque temático**",
      answer: {
        type: "text",
        accept: ["the theme park", "theme park", "the amusement park", "amusement park"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["the national park", "national park"] },
          feedback: "*Temático* means 'theme', not 'national' (*nacional*).",
        },
        {
          spec: { type: "text", accept: ["the main square", "main square"] },
          feedback: "'The main square' is *la plaza mayor*; *el parque temático* is a theme park.",
        },
      ],
      hints: [
        "*Parque* is a near-cognate for 'park', and *temático* links to 'theme'.",
      ],
      strategy: "Use cognates carefully",
      solution: [
        "*El parque* = the park; *temático* = theme/themed.",
        "Together, **el parque temático** = **the theme park**.",
      ],
    },
    {
      id: "exam-r1-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "food-market-restaurant",
      guideRef: "food-opinions-mealtimes",
      question:
        "Read Sofía's message about mealtimes in Spain:\n\n> *En casa desayunamos a las ocho, almorzamos a las dos y media y cenamos a las nueve y cuarto.*\n\nAt what time does Sofía's family have lunch?",
      options: [
        "At eight o'clock in the morning",
        "At half past two in the afternoon",
        "At quarter past nine in the evening",
        "At quarter to two in the afternoon",
      ],
      answerIndex: 1,
      hints: [
        "Which verb means 'to have lunch': *desayunar*, *almorzar*, or *cenar*?",
      ],
      strategy: "Match meal verbs to clock times",
      explanation:
        "*Almorzamos* means 'we have lunch', and *a las dos y media* is 'at half past two (2:30)'. *Desayunamos* is breakfast (8:00) and *cenamos* is dinner (9:15).",
    },
    {
      id: "exam-r1-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "healthy-living-diet",
      guideRef: "balanced-diet-habits",
      question:
        "What does the Spanish phrase **la comida basura** mean in English?",
      answer: {
        type: "text",
        accept: ["junk food", "the junk food", "fast food", "rubbish food"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["healthy food", "the healthy food"] },
          feedback: "*Sana/saludable* means 'healthy'; *basura* literally means 'rubbish/junk'!",
        },
        {
          spec: { type: "text", accept: ["vegetarian food", "spicy food"] },
          feedback: "Think about the literal word *basura* (rubbish) combined with *comida* (food).",
        },
      ],
      hints: [
        "*Comida* means 'food', and *basura* literally means 'rubbish' or 'trash'.",
      ],
      strategy: "Decode two-word noun phrases",
      solution: [
        "*Comida* = food; *basura* = rubbish/junk.",
        "So **la comida basura** means **junk food**.",
      ],
    },
    {
      id: "exam-r1-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "four-tenses-grammar",
      guideRef: "present-tense-mastery",
      question:
        "Which sentence uses the correct present-tense stem-changing form of **preferir** (*e → ie*) for *yo*?",
      options: [
        "Normalmente prefero beber agua fría.",
        "Normalmente prefieres beber agua fría.",
        "Normalmente prefiero beber agua fría.",
        "Normalmente preferimos beber agua fría.",
      ],
      answerIndex: 2,
      hints: [
        "In the 'boot' of *preferir* (*yo, tú, él/ella, ellos*), the second **e** changes to **ie**.",
      ],
      strategy: "Apply the boot rule for stem-changing verbs",
      explanation:
        "For *yo*, *preferir* changes *e → ie* and takes the *-o* ending: **prefiero**. *Prefero* forgets the stem change, while *prefieres* (*tú*) and *preferimos* (*nosotros*) are the wrong persons.",
    },
    {
      id: "exam-r1-q06",
      kind: "short",
      difficulty: "warmup",
      topicId: "holidays-activities",
      guideRef: "holiday-activities-preterite",
      question:
        "Complete the preterite sentence with the *yo* form of **ir** (went):\n\n*El verano pasado ______ a Valencia con mi familia.*",
      answer: {
        type: "text",
        accept: ["fui", "yo fui"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["fue", "voy"] },
          feedback: "*Fue* is 'he/she/it went', and *voy* is present tense ('I go'). You need *yo* preterite!",
        },
        {
          spec: { type: "text", accept: ["fuimos", "fueron"] },
          feedback: "*Fuimos* is 'we went' and *fueron* is 'they went'. Here the subject is *yo* ('I went'): **fui**!",
        },
      ],
      hints: [
        "*Ir* is irregular in the preterite and has no written accent in the *yo* form.",
      ],
      strategy: "Recall high-frequency irregular preterites",
      commonError: "Writing *fuí* with an accent — one-syllable preterites (*fui, fue, vi, di*) never carry a written accent.",
      solution: [
        "The *yo* preterite of *ir* ('I went') is **fui** (with no accent).",
        "Complete sentence: *El verano pasado **fui** a Valencia con mi familia.*",
      ],
    },

    // -----------------------------------------------------------------------
    // CORE (q07–q23)
    // -----------------------------------------------------------------------
    {
      id: "exam-r1-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "writing-hotel-reviews",
      diagram: HOTEL_REVIEW_SVG,
      question:
        "Study Lucía's review of **Hotel Sol y Playa** in the diagram. Which statement is **TRUE** according to her review?",
      options: [
        "The hotel had air conditioning and a silent corridor.",
        "She stayed in a single room with full board meals.",
        "The hotel was far from the beach and had no wifi.",
        "The lift broke down for two days during her stay.",
      ],
      answerIndex: 3,
      hints: [
        "Look closely at the *LO PEOR (Problemas)* box on the right-hand side of the card.",
        "*El ascensor* means 'the lift/elevator' and *no funcionó* means 'did not work'.",
      ],
      strategy: "Cross-check each detail against the positive and negative columns",
      explanation:
        "The red problems box states *El ascensor no funcionó dos días* ('the lift did not work for two days'). She had a double room with half board (*media pensión*), free wifi, and no air conditioning (*no había aire acondicionado*).",
    },
    {
      id: "exam-r1-q08",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "market-quantities",
      question:
        "In a Spanish market, you want to buy **half a kilo of strawberries** (*fresas*). Complete the phrase in Spanish (3 words):\n\n*Quisiera ______ fresas, por favor.*",
      answer: {
        type: "text",
        accept: ["medio kilo de", "un medio kilo de"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["un kilo de", "cien gramos de"] },
          feedback: "*Un kilo de* is a full kilo and *cien gramos de* is 100 g. You need 'half a kilo of'.",
        },
        {
          spec: { type: "text", accept: ["media kilo de"] },
          feedback: "*Kilo* is masculine (*el kilo*), so use masculine **medio**, not *media*.",
        },
      ],
      hints: [
        "'Half' before a masculine noun (*kilo*) is *medio*.",
        "Do not forget the linking preposition *de* between the quantity and the food item.",
      ],
      strategy: "Quantity + *de* + food noun",
      solution: [
        "'Half a kilo' = *medio kilo* (*kilo* is masculine).",
        "Link quantity to noun with *de*: **medio kilo de** fresas.",
      ],
    },
    {
      id: "exam-r1-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "giving-health-advice",
      question:
        "Read Dr. Morales's health poster:\n\n> *Para estar en forma, hay que dormir ocho horas cada noche y no se debe beber refrescos azucarados todos los días.*\n\nWhich piece of advice does the poster give?",
      options: [
        "You should drink sugary soft drinks after exercise.",
        "You must sleep eight hours nightly and avoid daily fizzy drinks.",
        "You must train for eight hours every morning before school.",
        "You should eat only five pieces of fruit and skip dinner.",
      ],
      answerIndex: 1,
      hints: [
        "Break the sentence into two clauses around *y* ('and'): *hay que dormir...* and *no se debe beber...*.",
        "*Refrescos azucarados* means 'sugary soft drinks / fizzy drinks'.",
      ],
      strategy: "Spot obligation (*hay que*) and prohibition (*no se debe*)",
      explanation:
        "*Hay que dormir ocho horas cada noche* = 'you must sleep eight hours every night', and *no se debe beber refrescos azucarados* = 'you must not drink sugary soft drinks'.",
    },
    {
      id: "exam-r1-q10",
      kind: "short",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      question:
        "Rewrite the verb in brackets in the *yo* preterite (watch the spelling change!):\n\n*En la playa, ayer ______ (sacar) muchas fotos del atardecer.*",
      answer: {
        type: "text",
        accept: ["saqué", "yo saqué"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["sacé", "yo sacé"] },
          feedback: "Verbs ending in *-car* change **c → qu** before **é** to keep the hard /k/ sound: *saqué*!",
        },
        {
          spec: { type: "text", accept: ["saco", "sacó"] },
          feedback: "*Saco* is present tense ('I take') and *sacó* is *él/ella* preterite. Use the *yo* preterite ending *-é*.",
        },
      ],
      hints: [
        "*Sacar* is a *-car* verb. Before the *yo* preterite ending *-é*, **c** must change so it stays a hard /k/ sound.",
        "Apply the rule *-car → -qué* and keep the accent on the final **é**.",
      ],
      strategy: "Apply *-car → -qué* in the *yo* preterite",
      solution: [
        "*-car* verbs change **c → qu** in the *yo* preterite only.",
        "*Sacar* → **saqué** (*ayer saqué muchas fotos*).",
      ],
    },
    {
      id: "exam-r1-q11",
      kind: "mcq",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "hotel-types-facilities",
      question:
        "Which Spanish accommodation phrase correctly means **'a youth hostel with free wifi'**?",
      options: [
        "un albergue juvenil con wifi gratis",
        "una casa rural con piscina privada",
        "un hotel lujoso con media pensión",
        "un camping tranquilo con aire fresco",
      ],
      answerIndex: 0,
      hints: [
        "Check the word for 'youth hostel' (*albergue juvenil*) rather than cottage (*casa rural*) or campsite (*camping*).",
        "*Gratis* means 'free of charge'.",
      ],
      strategy: "Match accommodation nouns and facility modifiers",
      explanation:
        "**Un albergue juvenil con wifi gratis** means 'a youth hostel with free wifi'. *Una casa rural* is a countryside cottage, and *media pensión* is half board.",
    },
    {
      id: "exam-r1-q12",
      kind: "short",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "future-holiday-plans",
      question:
        "Translate into Spanish using the **immediate future** (*ir a + infinitive*):\n\n**Next year we are going to travel to Mexico.**\n*(Start with: El año que viene...)*",
      answer: {
        type: "text",
        accept: [
          "El año que viene vamos a viajar a México",
          "El año que viene nosotros vamos a viajar a México",
          "El año que viene vamos a viajar a Méjico",
          "El año que viene nosotros vamos a viajar a Méjico",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["El año que viene vamos viajar a México"] },
          feedback: "You missed the preposition **a**! Immediate future is always *ir + **a** + infinitive*.",
        },
        {
          spec: { type: "text", accept: ["El año que viene viajaremos a México"] },
          feedback: "*Viajaremos* is simple future ('we will travel'). The question specifically asks for the immediate future (*vamos a + infinitive*).",
        },
      ],
      hints: [
        "For 'we are going to', conjugate *ir* in the *nosotros* present form (*vamos*) and add *a*.",
        "Keep 'to travel' in the infinitive (*viajar*) and remember the accent in *México*.",
      ],
      strategy: "Build immediate future: *ir (present) + a + infinitive*",
      solution: [
        "'Next year' = *El año que viene*.",
        "'We are going to travel' = *vamos a viajar*.",
        "Full sentence: **El año que viene vamos a viajar a México.**",
      ],
    },
    {
      id: "exam-r1-q13",
      kind: "short",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "sport-fitness-stress",
      question:
        "Read Clara's post about fitness:\n\n> *Corro tres veces a la semana porque me ayuda a relajarme, reduce el estrés y me da mucha energía para el colegio.*\n\nGive **one** mental or physical benefit Clara mentions (in English).",
      answer: {
        type: "text",
        accept: [
          "it helps her relax",
          "helps her relax",
          "helps me relax",
          "reduces stress",
          "it reduces stress",
          "gives her energy",
          "it gives her energy",
          "gives her lots of energy",
          "gives me energy",
          "energy",
          "relaxation",
          "less stress",
        ],
        display: "it helps her relax",
      },
      traps: [
        {
          spec: { type: "text", accept: ["three times a week", "running"] },
          feedback: "That is the frequency or sport, not a *benefit* (*relajarme / reduce el estrés / me da energía*).",
        },
      ],
      hints: [
        "Look after *porque* ('because') for three positive results of running.",
        "Translate *relajarme*, *reduce el estrés*, or *me da mucha energía*.",
      ],
      strategy: "Locate *porque* to extract reasons",
      solution: [
        "Clara gives three benefits: *me ayuda a relajarme* (it helps her relax), *reduce el estrés* (it reduces stress), and *me da mucha energía* (it gives her lots of energy).",
        "Any one of these clearly stated in English earns full credit.",
      ],
    },
    {
      id: "exam-r1-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "market-quantities",
      diagram: MARKET_RECEIPT_SVG,
      question:
        "Look at Señor Navarro's receipt from **Mercado Central** in the diagram. Which item did he buy **two hundred grams** of?",
      options: [
        "Ripe tomatoes",
        "Fresh farm eggs",
        "Wholemeal bread",
        "Manchego cheese",
      ],
      answerIndex: 3,
      hints: [
        "Find the Spanish number *doscientos* ('200') in the left-hand *CANTIDAD* column.",
        "Read across that same row to the *PRODUCTO* column.",
      ],
      strategy: "Scan table columns by matching Spanish numbers",
      explanation:
        "The second row reads *Doscientos gramos de queso manchego* (200 g of Manchego cheese) for 4,50 €. He bought half a kilo of tomatoes, a dozen (*una docena*) eggs, and two loaves (*dos barras*) of bread.",
    },
    {
      id: "exam-r1-q15",
      kind: "short",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "booking-and-problems",
      question:
        "A hotel guest says at reception:\n\n> *Perdone, hay un problema: la habitación está sucia y no hay agua caliente.*\n\nIn English, what are the **two** problems with the room? (Join with *and*.)",
      answer: {
        type: "text",
        accept: [
          "the room is dirty and there is no hot water",
          "it is dirty and there is no hot water",
          "dirty room and no hot water",
          "dirty and no hot water",
          "no hot water and the room is dirty",
          "there is no hot water and the room is dirty",
        ],
        display: "the room is dirty and there is no hot water",
      },
      traps: [
        {
          spec: { type: "text", accept: ["the room is clean and there is hot water"] },
          feedback: "*Sucia* means 'dirty' (opposite of *limpia*), and *no hay* means 'there is NO'!",
        },
        {
          spec: { type: "text", accept: ["the room is noisy and cold"] },
          feedback: "*Sucia* = dirty (not noisy *ruidosa*), and *agua caliente* = hot water.",
        },
      ],
      hints: [
        "*Sucia* is the opposite of *limpia* ('clean').",
        "*No hay* means 'there isn't any', and *agua caliente* means 'hot water'.",
      ],
      strategy: "Translate both clauses separated by *y*",
      solution: [
        "*La habitación está sucia* = the room is dirty.",
        "*No hay agua caliente* = there is no hot water.",
      ],
    },
    {
      id: "exam-r1-q16",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "immediate-vs-simple-future",
      question:
        "Which Spanish sentence correctly uses the **simple future** tense of the irregular verb **hacer** (*I will do more sport*)?",
      options: [
        "El mes que viene haceré más deporte.",
        "El mes que viene hice más deporte.",
        "El mes que viene haré más deporte.",
        "El mes que viene hago más deporte.",
      ],
      answerIndex: 2,
      hints: [
        "*Hacer* has an irregular stem in the simple future: **har-**, not *hacer-*.",
        "Add the *yo* simple future ending *-é* (with accent) to that stem.",
      ],
      strategy: "Check irregular simple future stems (*har-, tendr-, podr-, saldr-*)",
      explanation:
        "*Hacer* drops the *-ce-* to form the future stem **har-**, giving **haré** ('I will do'). *Haceré* is a classic over-regularisation error; *hice* is preterite and *hago* is present.",
    },
    {
      id: "exam-r1-q17",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "ordering-in-restaurant",
      question:
        "You are at a restaurant in Madrid and want to ask politely for **the bill, please**. Write the exact 4-word Spanish phrase.",
      answer: {
        type: "text",
        accept: ["La cuenta, por favor", "La cuenta por favor"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["El menú, por favor", "La carta, por favor"] },
          feedback: "*El menú / la carta* is the menu! The bill is **la cuenta**.",
        },
        {
          spec: { type: "text", accept: ["El cuento, por favor"] },
          feedback: "Watch the gender! *El cuento* means 'a story', whereas **la cuenta** means 'the bill'.",
        },
      ],
      hints: [
        "The noun for 'the bill' is feminine (*la ...*) — be careful not to confuse it with *el cuento* ('story').",
        "Add *por favor* at the end.",
      ],
      strategy: "Distinguish gender-pair nouns (*la cuenta* vs *el cuento*)",
      solution: [
        "'The bill' = *la cuenta*; 'please' = *por favor*.",
        "Phrase: **La cuenta, por favor.**",
      ],
    },
    {
      id: "exam-r1-q18",
      kind: "mcq",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "holiday-opinions-narratives",
      question:
        "Read Diego's holiday summary:\n\n> *El verano pasado fui a Mallorca. Lo mejor fue la playa, sin embargo el hotel fue muy ruidoso. A pesar de todo, lo pasé bomba.*\n\nHow did Diego feel overall about his holiday?",
      options: [
        "He had a brilliant time despite the noisy hotel.",
        "He hated the entire trip because of the beach.",
        "He stayed in a quiet hotel but disliked the island.",
        "He wants to cancel his planned trip to Mallorca.",
      ],
      answerIndex: 0,
      hints: [
        "Notice the contrast connective *sin embargo* ('however') and the final idiom *lo pasé bomba*.",
        "*Lo pasé bomba* is a high-frequency positive holiday idiom ('I had a blast / brilliant time').",
      ],
      strategy: "Track attitude shifts with *sin embargo* and *a pesar de todo*",
      explanation:
        "*Lo pasé bomba* means 'I had a brilliant time / a blast'. Even though the hotel was very noisy (*muy ruidoso*), *a pesar de todo* ('in spite of everything') confirms his overall impression was strongly positive.",
    },
    {
      id: "exam-r1-q19",
      kind: "short",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "giving-health-advice",
      question:
        "Complete the Spanish advice sentence with the single word for **'you should'** (from *deber*):\n\n*______ comer cinco raciones de fruta y verdura al día.*",
      answer: {
        type: "text",
        accept: ["Deberías", "Tú deberías"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Debes", "Tienes que"] },
          feedback: "*Debes / tienes que* mean 'you must / have to'. For softer 'you should', use the conditional form **deberías**.",
        },
        {
          spec: { type: "text", accept: ["Debería"] },
          feedback: "*Debería* is 'I / he / she should'. Add **-s** for *tú*: **deberías**.",
        },
      ],
      hints: [
        "Use the *tú* conditional form of *deber* ('you should'), which ends in *-ías*.",
        "Do not forget the written accent on the **í**.",
      ],
      strategy: "Use *deberías + infinitive* for polite health advice",
      solution: [
        "'You should' = **deberías** (with an accent on the *í*).",
        "Full sentence: ***Deberías** comer cinco raciones de fruta y verdura al día.*",
      ],
    },
    {
      id: "exam-r1-q20",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      question:
        "Read both sentences carefully:\n\n1. *Hablo con el camarero.*\n2. *Habló con el camarero.*\n\nHow does the accent on **habló** change the meaning?",
      options: [
        "It shifts the verb from present ('we speak') to future ('we will speak').",
        "It shifts the verb from past ('I spoke') to present ('he/she speaks').",
        "It shifts the verb from present ('I speak') to preterite ('he/she spoke').",
        "It shifts the verb from singular ('I speak') to plural ('they spoke').",
      ],
      answerIndex: 2,
      hints: [
        "Compare the endings of *-ar* verbs: unaccented *-o* is *yo* present; accented *-ó* is *él/ella/usted* preterite.",
        "Check both the tense AND the person who is speaking!",
      ],
      strategy: "Watch final accents (*-o* vs *-ó*)",
      explanation:
        "*Hablo* (no accent) = 'I speak' (present, *yo*). *Habló* (accent on *ó*) = 'he/she spoke' (preterite, *él/ella*). Missing or adding a single accent changes both the tense and the person!",
    },
    {
      id: "exam-r1-q21",
      kind: "short",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "places-of-interest",
      question:
        "Complete this sightseeing sentence with the 2-word impersonal phrase meaning **'you can / one can'**:\n\n*En Granada ______ visitar la Alhambra y pasear por la plaza mayor.*",
      answer: {
        type: "text",
        accept: ["se puede"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["puedo", "puedes"] },
          feedback: "*Puedo* = 'I can' and *puedes* = 'you (singular) can'. The general impersonal phrase is **se puede**.",
        },
        {
          spec: { type: "text", accept: ["se pueden"] },
          feedback: "Before an infinitive (*visitar*), always use singular **se puede**, not *se pueden*.",
        },
      ],
      hints: [
        "Use the reflexive impersonal pronoun *se* followed by the 3rd-person singular of *poder*.",
        "*Poder* is an *o → ue* stem-changer in the present tense.",
      ],
      strategy: "Use *se puede + infinitive* for tourist attractions",
      solution: [
        "Impersonal 'you can / one can' + infinitive = **se puede**.",
        "*En Granada **se puede** visitar la Alhambra...*",
      ],
    },
    {
      id: "exam-r1-q22",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      diagram: TENSE_TIMELINE_SVG,
      question:
        "Use the four-tense map in the diagram to read Paula's paragraph:\n\n> *Normalmente como paella los domingos, pero ayer pedí gazpacho. Mañana voy a cocinar tortilla y el año que viene probaré tacos en México.*\n\nWhich dish is Paula **going to cook tomorrow**?",
      options: [
        "Paella",
        "Spanish omelette",
        "Gazpacho soup",
        "Mexican tacos",
      ],
      answerIndex: 1,
      hints: [
        "Find the time marker *Mañana* ('tomorrow') in the immediate future column of the diagram.",
        "Look at the verb right after *Mañana*: *voy a cocinar...*.",
      ],
      strategy: "Pair each time marker with its matching verb tense",
      explanation:
        "*Mañana voy a cocinar tortilla* uses the immediate future (*voy a + infinitive*) for tomorrow's plan: cooking Spanish omelette (*tortilla*). Paella is her usual habit, gazpacho was yesterday (*ayer pedí*), and tacos are next year (*probaré*).",
    },
    {
      id: "exam-r1-q23",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "hispanic-cuisine-tenses",
      question:
        "Put **pedir** ('to order') into the *yo* preterite to complete this restaurant sentence:\n\n*Anoche en el restaurante ______ (pedir) paella de mariscos de segundo plato.*",
      answer: {
        type: "text",
        accept: ["pedí", "yo pedí"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["pidí", "yo pidí"] },
          feedback: "Careful! In the preterite, *-ir* stem changes (*e → i*) ONLY happen in the 3rd person (*pidió / pidieron*), NEVER in *yo* (*pedí*)!",
        },
        {
          spec: { type: "text", accept: ["pido", "pidió"] },
          feedback: "*Pido* is present tense ('I order') and *pidió* is *él/ella* preterite. Use the *yo* preterite **pedí**.",
        },
      ],
      hints: [
        "In the preterite, *-ir* verbs take *-í* for *yo* (with an accent).",
        "Does *pedir* change *e → i* in the *yo* preterite, or only in *él/ella/ellos*?",
      ],
      strategy: "Remember the 'sole/sandal' rule: *pedí* has NO stem change",
      solution: [
        "In the preterite, *pedir* keeps *e* for *yo* (*pedí*) and only changes to *i* in 3rd person (*pidió, pidieron*).",
        "Answer: **pedí**.",
      ],
    },

    // -----------------------------------------------------------------------
    // CHALLENGE (q24–q30)
    // -----------------------------------------------------------------------
    {
      id: "exam-r1-q24",
      kind: "short",
      difficulty: "challenge",
      topicId: "holidays-activities",
      guideRef: "holiday-activities-preterite",
      question:
        "Rewrite the verb in brackets in the *yo* preterite (watch the *-gar* spelling rule!):\n\n*Durante las vacaciones en Ibiza, ______ (jugar) al vóley-playa con mis primos.*",
      answer: {
        type: "text",
        accept: ["jugué", "yo jugué"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["jugé", "yo jugé"] },
          feedback: "Verbs ending in *-gar* change **g → gu** before **é** to keep the hard /g/ sound: **jugué**!",
        },
        {
          spec: { type: "text", accept: ["juego", "jugó"] },
          feedback: "*Juego* is present tense (boot stem-change) and *jugó* is *él/ella* preterite. Remember *-ar* verbs do NOT stem-change *u → ue* in the preterite!",
        },
      ],
      hints: [
        "*-ar* verbs never do *u → ue* in the preterite, so keep the **u**.",
        "Because *jugar* ends in *-gar*, insert a silent **u** before the *yo* ending *-é* (*-gar → -gué*).",
      ],
      strategy: "Apply *-gar → -gué* with NO *u → ue* stem change in preterite",
      solution: [
        "No *u → ue* stem change in the preterite for *-ar* verbs.",
        "Spelling change *-gar → -gué* keeps the hard /g/: **jugué**.",
      ],
    },
    {
      id: "exam-r1-q25",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "healthy-living-diet",
      guideRef: "future-health-resolutions",
      question:
        "Read Javier's New Year resolution blog:\n\n> *Antes comía demasiada comida rápida y pasaba tres horas delante de la pantalla cada noche. A partir de mañana dejaré de beber refrescos y caminaré al colegio para llevar una vida más sana.*\n\nWhich statement best summarises Javier's plan?",
      options: [
        "He already avoids all fast food and walks to school daily.",
        "He will watch three hours of screens to relax after walking.",
        "He plans to drink more soft drinks for extra morning energy.",
        "He will stop drinking fizzy drinks and walk to school instead.",
      ],
      answerIndex: 3,
      hints: [
        "Separate his old habits (*Antes...*) from his future promise (*A partir de mañana...*).",
        "*Dejar de + infinitive* means 'to stop / give up doing something'.",
      ],
      strategy: "Contrast past habits (*antes*) with future resolutions (*a partir de mañana*)",
      explanation:
        "*Dejaré de beber refrescos* means 'I will stop drinking fizzy drinks', and *caminaré al colegio* means 'I will walk to school'. The screen time and fast food belong to his past (*Antes*).",
    },
    {
      id: "exam-r1-q26",
      kind: "written",
      difficulty: "challenge",
      topicId: "holidays-activities",
      guideRef: "holiday-opinions-narratives",
      marks: 3,
      question:
        "Write **3 short sentences in Spanish** about holidays covering ALL THREE bullet points:\n- Where you went on your last holiday and how you travelled (preterite)\n- One activity you did there (preterite)\n- A justified opinion about that trip",
      modelAnswer:
        "El verano pasado fui a Barcelona en avión con mi familia. Visité el museo y nadé en el mar todos los días. Me encantó porque hizo calor y fue inolvidable.",
      markScheme: [
        {
          point: "States past destination and transport accurately in the preterite",
          keywords: ["fui", "viaje", "avion", "tren", "barco", "coche"],
        },
        {
          point: "Mentions at least one holiday activity in the preterite",
          keywords: ["visite", "nade", "tome", "saque", "jugue", "comi", "compre", "pasee"],
        },
        {
          point: "Gives a justified past opinion using *porque* or an opinion adjective",
          keywords: ["porque", "encanto", "bomba", "genial", "increible", "inolvidable", "fatal", "divertido"],
        },
      ],
      hints: [
        "Use *fui a... en avión / en tren* for your past destination and transport.",
        "Add a preterite activity (*visité, nadé, saqué fotos, tomé el sol*) and finish with *me encantó / fue genial porque...*.",
      ],
      strategy: "Tick off Destination + Activity + Justified Opinion in the preterite",
      commonError:
        "Mixing up present *voy* with preterite *fui*, or forgetting the accent on regular *yo* preterites (*visité, nadé*).",
    },
    {
      id: "exam-r1-q27",
      kind: "written",
      difficulty: "challenge",
      topicId: "hotels-places-reviews",
      guideRef: "writing-hotel-reviews",
      marks: 3,
      question:
        "Write a short **balanced hotel review in Spanish** (3–4 sentences) that includes:\n- One positive facility at the hotel\n- One complaint or problem (introduced with a contrast connective)\n- A clear recommendation or verdict for future guests",
      modelAnswer:
        "El hotel tenía una piscina climatizada estupenda y wifi gratis. Sin embargo, el ascensor no funcionó y hacía demasiado ruido por la noche. Por eso, no lo recomiendo en agosto.",
      markScheme: [
        {
          point: "Describes at least one positive hotel facility or feature",
          keywords: ["piscina", "wifi", "desayuno", "gimnasio", "vistas", "limpia", "comoda", "cerca"],
        },
        {
          point: "Introduces a complaint/problem with a contrast connective (*sin embargo / pero / aunque*)",
          keywords: ["sin embargo", "pero", "aunque", "ascensor", "ruido", "sucia", "caliente", "lenta"],
        },
        {
          point: "Gives a clear recommendation or future verdict",
          keywords: ["recomiendo", "volvere", "vale la pena", "estrellas", "decepciono", "encanto"],
        },
      ],
      hints: [
        "Pair a facility (*piscina, wifi gratis, vistas al mar*) with a contrast word (*sin embargo, pero, aunque*).",
        "Mention a realistic hotel problem (*ascensor, ruido, sucia, agua caliente*) and end with *lo recomiendo / no volveré*.",
      ],
      strategy: "Balance positive + *sin embargo* + negative + verdict",
      commonError:
        "Writing only positive details without a balanced complaint or forgetting the final recommendation.",
    },
    {
      id: "exam-r1-q28",
      kind: "written",
      difficulty: "challenge",
      topicId: "food-market-restaurant",
      guideRef: "ordering-in-restaurant",
      marks: 4,
      question:
        "Write a polite **restaurant order in Spanish** (4 lines) covering every point:\n- Greet politely and ask for a starter (*first course*)\n- Order a main course\n- Order a drink or dessert\n- Mention one dietary preference or politely ask for the bill",
      modelAnswer:
        "Buenas tardes, de primer plato quisiera gazpacho. De segundo plato para mí una tortilla española, por favor. Para beber quiero agua sin gas y de postre unos churros. Soy vegetariano y al final, la cuenta, por favor.",
      markScheme: [
        {
          point: "Polite ordering phrase and starter (*de primer plato*)",
          keywords: ["primer plato", "quisiera", "para mi", "gazpacho", "ensalada", "sopa", "entrante"],
        },
        {
          point: "Orders a main course (*de segundo plato*)",
          keywords: ["segundo plato", "paella", "tortilla", "pollo", "pescado", "carne", "pasta", "arroz"],
        },
        {
          point: "Orders a drink (*para beber*) or dessert (*de postre*)",
          keywords: ["beber", "postre", "agua", "zumo", "limonada", "helado", "flan", "churros", "fruta"],
        },
        {
          point: "States a dietary note (*vegetariano / alergia*) or asks for the bill (*la cuenta*)",
          keywords: ["vegetariano", "vegetariana", "alergia", "alergico", "cuenta", "recomienda"],
        },
      ],
      hints: [
        "Structure your meal clearly with *de primer plato*, *de segundo plato*, *de postre*, and *para beber*.",
        "Use polite openers like *Quisiera...* or *Para mí...*, and finish with *Soy vegetariano/a*, *Tengo alergia a...*, or *La cuenta, por favor*.",
      ],
      strategy: "Use the 3-course Spanish menu frame + polite request",
      commonError:
        "Writing *quiero* abruptly without *por favor* or confusing *la cuenta* (bill) with *la carta* (menu).",
    },
    {
      id: "exam-r1-q29",
      kind: "written",
      difficulty: "challenge",
      topicId: "healthy-living-diet",
      guideRef: "future-health-resolutions",
      marks: 4,
      question:
        "Write a short **healthy lifestyle action plan in Spanish** (4 sentences) including:\n- One current habit (present tense)\n- One piece of lifestyle advice using an impersonal or modal phrase + infinitive\n- One near-term resolution in the immediate future\n- One future promise in the simple future",
      modelAnswer:
        "Normalmente bebo poca agua y me acuesto tarde los viernes. Para estar en forma, hay que hacer ejercicio regularmente y dormir ocho horas. Mañana voy a caminar al colegio con mis amigos. El próximo mes comeré más verdura y evitaré los dulces.",
      markScheme: [
        {
          point: "Describes a current lifestyle habit in the present tense",
          keywords: ["normalmente", "bebo", "como", "duermo", "hago", "acuesto", "corro", "juego"],
        },
        {
          point: "Gives healthy advice with an impersonal or modal structure + infinitive",
          keywords: ["hay que", "se debe", "deberias", "tienes que", "importante", "imprescindible"],
        },
        {
          point: "States a near-term resolution using immediate future (*voy a + infinitive*)",
          keywords: ["voy a", "vamos a"],
        },
        {
          point: "States a future promise using a genuine simple future verb",
          keywords: ["comere", "bebere", "hare", "dormire", "evitare", "dejare", "jugare", "nadare", "ire", "caminare"],
        },
      ],
      hints: [
        "Start with *Normalmente...* for present tense, then add *Hay que / Se debe + infinitive*.",
        "Include *voy a + infinitive* for immediate future AND a one-word simple future verb like *comeré, beberé, haré, dormiré*.",
      ],
      strategy: "Checklist: Present + Advice structure + Immediate Future + Simple Future",
      commonError:
        "Conjugating the verb after *hay que / se debe / voy a* instead of leaving it in the infinitive.",
    },
    {
      id: "exam-r1-q30",
      kind: "written",
      difficulty: "challenge",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      marks: 4,
      question:
        "Write a **four-tense Spanish mini-paragraph** about food or holidays using ALL FOUR Year 9 tenses (one clear sentence per tense):\n- Present tense (regular habit)\n- Preterite tense (completed past action)\n- Immediate future tense (near plan)\n- Simple future tense (one-word future verb)",
      modelAnswer:
        "Todos los sábados cocino pasta con mi hermana en casa. Ayer cené paella deliciosa en un restaurante del centro. Este domingo voy a probar un postre mexicano nuevo. En agosto viajaré a Sevilla y comeré tapas increíbles.",
      markScheme: [
        {
          point: "Accurate present tense verb with a present time marker or habit",
          keywords: ["normalmente", "siempre", "todos los", "cocino", "como", "viajo", "voy", "prefiero", "bebo"],
        },
        {
          point: "Accurate preterite verb for a completed past event",
          keywords: ["ayer", "pasado", "anoche", "fui", "comi", "cene", "visite", "pedi", "probe", "nade", "viaje"],
        },
        {
          point: "Accurate immediate future (*ir + a + infinitive*)",
          keywords: ["voy a", "vamos a", "va a", "van a"],
        },
        {
          point: "Accurate simple future verb (infinitive/irregular stem + ending)",
          keywords: ["viajare", "comere", "probare", "visitare", "ire", "hare", "tendre", "podre", "saldre", "cenare"],
        },
      ],
      hints: [
        "Use a clear time signal for each sentence: *Normalmente...*, *Ayer...*, *Mañana...*, *El año que viene...*.",
        "Check every accent: preterite *comí / cené / visité* and simple future *viajaré / comeré / probaré / haré*.",
      ],
      strategy: "Four sentences = four distinct time markers + four distinct verb forms",
      commonError:
        "Using *voy a + infinitive* twice instead of demonstrating the one-word simple future (*-é*).",
    },
  ],
};
