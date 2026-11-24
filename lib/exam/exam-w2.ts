import type { ExamPaper } from "../types";

const END_OF_YEAR_TENSES_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Year 9 Spanish four-tense reference chart comparing Present, Preterite, Immediate Future and Simple Future endings and key irregular verbs"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--ink)">Resumen de los cuatro tiempos — Examen Final (Año 9)</text><rect x="16" y="42" width="126" height="192" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="79" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--good)">1. PRESENTE</text><text x="79" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">siempre / hoy</text><line x1="24" y1="88" x2="134" y2="88" stroke="var(--line)" stroke-width="1"/><text x="26" y="108" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-ar: -o, -as, -a</text><text x="26" y="126" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-er: -o, -es, -e</text><text x="26" y="146" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">Bota: prefiero,</text><text x="26" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">puedo, juego</text><text x="26" y="184" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-go: hago, salgo,</text><text x="26" y="200" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">pongo, tengo</text><text x="26" y="222" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">+ desde hace</text><rect x="150" y="42" width="126" height="192" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/><text x="213" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--bad)">2. PRETÉRITO</text><text x="213" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">ayer / pasado</text><line x1="158" y1="88" x2="268" y2="88" stroke="var(--line)" stroke-width="1"/><text x="160" y="108" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-ar: -é, -aste, -ó</text><text x="160" y="126" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-er/-ir: -í, -iste, -ió</text><text x="160" y="146" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">-car/-gar/-zar:</text><text x="160" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">saqué, jugué, empecé</text><text x="160" y="184" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">Irreg: fui, tuve,</text><text x="160" y="200" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">estuve, hice/hizo</text><text x="160" y="222" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">vi, di (sin tilde)</text><rect x="284" y="42" width="126" height="192" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="347" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--info)">3. FUT. INMED.</text><text x="347" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">mañana / luego</text><line x1="292" y1="88" x2="402" y2="88" stroke="var(--line)" stroke-width="1"/><text x="294" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">voy a + inf.</text><text x="294" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">vas a + inf.</text><text x="294" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">va a + inf.</text><text x="294" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">vamos a + inf.</text><text x="294" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">van a + inf.</text><text x="294" y="222" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">planes cercanos</text><rect x="418" y="42" width="126" height="192" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="481" y="62" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--brand)">4. FUT. SIMPLE</text><text x="481" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">próximo año</text><line x1="426" y1="88" x2="536" y2="88" stroke="var(--line)" stroke-width="1"/><text x="428" y="108" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">inf. + -é, -ás, -á</text><text x="428" y="126" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">-emos, -éis, -án</text><text x="428" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">Irregulares:</text><text x="428" y="166" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">tendr- · har-</text><text x="428" y="184" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">podr- · saldr-</text><text x="428" y="202" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">querr- · sabr-</text><text x="428" y="222" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)">vendr- · habrá</text></svg>`;

const RESTAURANT_MENU_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish restaurant menu for Restaurante El Olivo showing first courses, main courses, desserts, drinks, prices and vegetarian note"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="14" width="528" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="280" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="var(--ink)">RESTAURANTE EL OLIVO — Menú del Día (14,50 €)</text><text x="280" y="50" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Incluye pan, bebida y postre · Opciones vegetarianas (V) y sin frutos secos</text><rect x="16" y="68" width="256" height="122" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)">DE PRIMER PLATO</text><text x="28" y="108" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Gazpacho andaluz fresco (V)</text><text x="28" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Ensalada mixta con aceitunas (V)</text><text x="28" y="148" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Sopa de mariscos picante</text><text x="28" y="174" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--good)">Recomendación del chef: Gazpacho</text><rect x="288" y="68" width="256" height="122" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="300" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)">DE SEGUNDO PLATO</text><text x="300" y="108" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Paella de verduras a la plancha (V)</text><text x="300" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Pollo asado con patatas fritas</text><text x="300" y="148" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Tortilla española tradicional (V)</text><text x="300" y="174" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--info)">Postres: fruta fresca · flan · churros</text><rect x="16" y="200" width="528" height="36" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="280" y="222" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Para beber: agua sin gas, zumo de naranja natural o limonada casera (sin azúcar añadido)</text></svg>`;

const FILM_REVIEW_CARD_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish film review card for Horizonte Rojo rated four out of five stars showing genre, plot, strengths, one weakness and future cinema plan"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="46" rx="8" fill="var(--brand-soft)"/><text x="30" y="37" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="var(--ink)">Crítica de cine: «Horizonte Rojo» (Ciencia ficción)</text><text x="30" y="54" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Por Marco D. · Vista el viernes pasado con mis amigos en el centro comercial</text><rect x="424" y="24" width="106" height="30" rx="15" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="477" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--ink)">★★★★☆ 4/5</text><rect x="16" y="72" width="528" height="52" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="92" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)">EL ARGUMENTO</text><text x="28" y="112" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">Trata de una joven científica que viaja a Marte para salvar a su equipo tras una tormenta.</text><rect x="16" y="134" width="256" height="62" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="28" y="154" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--good)">PUNTOS FUERTES</text><text x="28" y="172" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Efectos especiales impresionantes</text><text x="28" y="188" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Protagonista valiente &amp; banda sonora</text><rect x="288" y="134" width="256" height="62" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/><text x="300" y="154" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--bad)">PUNTO DÉBIL</text><text x="300" y="172" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• La primera media hora es algo lenta</text><text x="300" y="188" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Algunos diálogos son predecibles</text><rect x="16" y="204" width="528" height="32" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="280" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Veredicto: «La recomiendo totalmente; el año que viene veré la segunda parte.»</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-w2",
  title: "Year 9 Spanish Full End-of-Year Mock Paper (All 8 Units)",
  calculator: true,
  minutes: 45,
  questions: [
    // -----------------------------------------------------------------------
    // WARMUP (q01–q06)
    // -----------------------------------------------------------------------
    {
      id: "exam-w2-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "holidays-activities",
      guideRef: "destinations-transport",
      question:
        "Which Spanish phrase accurately translates **'on foot with my friends'**?",
      options: [
        "en pie con mi familia",
        "a pie con mis amigos",
        "en barco con mis amigos",
        "a tren con mis primos",
      ],
      answerIndex: 1,
      hints: [
        "Most vehicles take *en* (*en tren, en barco*), but 'on foot' is the special exception using **a** (*a pie*).",
      ],
      strategy: "Remember the exception *a pie* vs *en + vehicle*",
      explanation:
        "**A pie con mis amigos** means 'on foot with my friends'. Spanish uses *a pie* (never *en pie*, which means 'standing up') and plural *mis* before *amigos*.",
    },
    {
      id: "exam-w2-q02",
      kind: "short",
      difficulty: "warmup",
      topicId: "hotels-places-reviews",
      guideRef: "places-of-interest",
      question:
        "Translate this sightseeing phrase into Spanish (2 words, include the article):\n\n**the castle**",
      answer: {
        type: "text",
        accept: ["el castillo"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["la castillo", "el castilla"] },
          feedback: "*Castillo* ends in *-o* and is masculine: **el castillo**!",
        },
        {
          spec: { type: "text", accept: ["la catedral", "el museo"] },
          feedback: "*La catedral* is 'the cathedral' and *el museo* is 'the museum'. 'The castle' is **el castillo**.",
        },
      ],
      hints: [
        "Think of the region *Castilla* ('land of castles') — the masculine noun is *el castill-* + *-o*.",
      ],
      strategy: "Pair every noun with its definite article (*el / la*)",
      solution: [
        "'The castle' = **el castillo** (masculine).",
      ],
    },
    {
      id: "exam-w2-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "food-market-restaurant",
      guideRef: "food-opinions-mealtimes",
      question:
        "Which Spanish verb means **'to have an afternoon snack'** (typically around 5–6 pm in Spain)?",
      options: [
        "merendar",
        "desayunar",
        "cenar",
        "almorzar",
      ],
      answerIndex: 0,
      hints: [
        "Check all four Spanish meal verbs: breakfast (*desayunar*), lunch (*almorzar*), afternoon snack (*merendar*), dinner (*cenar*).",
      ],
      strategy: "Know all four Spanish meal verbs in daily order",
      explanation:
        "**Merendar** (*la merienda*) means 'to have an afternoon snack'. *Desayunar* = breakfast, *almorzar* = lunch, and *cenar* = dinner.",
    },
    {
      id: "exam-w2-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "healthy-living-diet",
      guideRef: "balanced-diet-habits",
      question:
        "Translate this healthy-living phrase into Spanish (2 words):\n\n**to do exercise**\n*(Use hacer)*",
      answer: {
        type: "text",
        accept: ["hacer ejercicio", "hacer deporte"],
        display: "hacer ejercicio",
      },
      traps: [
        {
          spec: { type: "text", accept: ["jugar ejercicio", "ser ejercicio"] },
          feedback: "Spanish uses **hacer** ('to do/make') with *ejercicio* and *deporte*: **hacer ejercicio**!",
        },
      ],
      hints: [
        "Use the infinitive *hacer* followed by the cognate noun for 'exercise' (*ejercicio*).",
      ],
      strategy: "Pair *hacer* with fitness nouns (*hacer ejercicio / deporte*)",
      solution: [
        "'To do exercise' = **hacer ejercicio**.",
      ],
    },
    {
      id: "exam-w2-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "body-illness-treatment",
      guideRef: "body-parts-doler",
      question:
        "Which body part is **feminine** despite ending in **-o**?",
      options: [
        "brazo",
        "estómago",
        "mano",
        "oído",
      ],
      answerIndex: 2,
      hints: [
        "Three of these are regular masculine *-o* nouns; one famous body part breaks the rule and takes **la**.",
      ],
      strategy: "Watch classic gender exceptions (*la mano*, *el día*)",
      explanation:
        "**La mano** ('the hand') is famously feminine even though it ends in *-o* (plural: *las manos*). *El brazo*, *el estómago*, and *el oído* are all masculine.",
    },
    {
      id: "exam-w2-q06",
      kind: "short",
      difficulty: "warmup",
      topicId: "clothes-uniform-shopping",
      guideRef: "clothes-colours-agreement",
      question:
        "Complete the Spanish sentence with the correct **feminine singular** form of *amarillo* ('yellow'):\n\n*Para la fiesta llevo una camiseta ______.*",
      answer: {
        type: "text",
        accept: ["amarilla"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["amarillo"] },
          feedback: "*La camiseta* is feminine singular, so *-o* colour adjectives change to *-a*: **amarilla**!",
        },
        {
          spec: { type: "text", accept: ["amarillas"] },
          feedback: "*Una camiseta* is singular, so drop the *-s*: **amarilla**.",
        },
      ],
      hints: [
        "*Una camiseta* is feminine singular, so change the final *-o* of *amarillo* to *-a*.",
      ],
      strategy: "Match clothing adjectives in gender and number",
      solution: [
        "*Una camiseta* (feminine singular) + *amarillo* → **amarilla**.",
      ],
    },

    // -----------------------------------------------------------------------
    // CORE (q07–q23)
    // -----------------------------------------------------------------------
    {
      id: "exam-w2-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "arranging-a-meeting",
      question:
        "Which Spanish phrase accurately translates **'Would you like to meet in front of the shopping centre at half past six?'**",
      options: [
        "¿Te gusta quedar detrás del centro comercial a las seis menos cuarto?",
        "¿Quieres salir dentro de la estación a las siete y cuarto?",
        "¿Quedaste en el centro comercial con amigos a las seis y media?",
        "¿Te gustaría quedar delante del centro comercial a las seis y media?",
      ],
      answerIndex: 3,
      hints: [
        "Check three key parts: 'Would you like' (*¿Te gustaría...*), 'in front of' (*delante de*), and 'half past six' (*a las seis y media*).",
        "Remember *de + el* contracts to **del** (*delante del centro comercial*).",
      ],
      strategy: "Verify conditional invite + preposition (*delante del*) + clock time",
      explanation:
        "**¿Te gustaría quedar delante del centro comercial a las seis y media?** hits all three points: *¿Te gustaría...?* ('Would you like?'), *delante del* ('in front of the'), and *a las seis y media* ('at 6:30').",
    },
    {
      id: "exam-w2-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "present-tense-mastery",
      question:
        "Choose the sentence where the present-tense stem-changing verb **poder** (*o → ue*) is conjugated **CORRECTLY** for *nosotros*.",
      options: [
        "Nosotros puedemos reservar las entradas hoy.",
        "Nosotros pueden reservar las entradas hoy.",
        "Nosotros puedo reservar las entradas hoy.",
        "Nosotros podemos reservar las entradas hoy.",
      ],
      answerIndex: 3,
      hints: [
        "Remember the 'boot' shape for stem-changing verbs: which TWO pronouns sit **outside** the boot and do NOT stem-change?",
        "*Nosotros* and *vosotros* keep the original infinitive vowel **o**!",
      ],
      strategy: "Keep the original stem outside the boot (*nosotros / vosotros*)",
      explanation:
        "*Nosotros* sits outside the boot, so *poder* keeps its **o**: **podemos** (never *puedemos*). *Puedo* is *yo* and *pueden* is *ellos/ustedes*.",
    },
    {
      id: "exam-w2-q09",
      kind: "short",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "holiday-activities-preterite",
      question:
        "Translate into Spanish using the **preterite** idiom with *pasar*:\n\n**I had a brilliant time in Madrid.**\n*(Use bomba or genial)*",
      answer: {
        type: "text",
        accept: [
          "Lo pasé bomba en Madrid",
          "Lo pasé genial en Madrid",
          "Yo lo pasé bomba en Madrid",
          "Yo lo pasé genial en Madrid",
          "Lo pasé estupendamente en Madrid",
          "Lo pasé fenomenal en Madrid",
        ],
        display: "Lo pasé bomba en Madrid",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Lo paso bomba en Madrid", "Lo pasó bomba en Madrid"] },
          feedback: "*Lo paso* is present ('I have') and *lo pasó* is 'he/she had'. For 'I had', use accented *-é*: **Lo pasé bomba en Madrid**!",
        },
        {
          spec: { type: "text", accept: ["Lo pasé fatal en Madrid"] },
          feedback: "*Fatal* means 'terrible / awful' — the opposite of 'brilliant' (*bomba / genial*)!",
        },
      ],
      hints: [
        "Use the *yo* preterite of *pasar* (*pasé*, with accent on *é*) after *lo*.",
        "Finish with *bomba* (or *genial*) + *en Madrid*.",
      ],
      strategy: "Master the high-impact holiday idiom *lo pasé bomba / genial / fatal*",
      solution: [
        "'I had a brilliant time' = *Lo pasé bomba* (or *Lo pasé genial*).",
        "Full sentence: **Lo pasé bomba en Madrid.**",
      ],
    },
    {
      id: "exam-w2-q10",
      kind: "mcq",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "hotel-types-facilities",
      question:
        "A Spanish travel website advertises: **«Hotel de cuatro estrellas con piscina climatizada, gimnasio y media pensión.»**\nWhat does **media pensión** mean?",
      options: [
        "Half board (breakfast and one main meal)",
        "Full board (all three meals included)",
        "Room only (no meals included at all)",
        "Half price for children under twelve",
      ],
      answerIndex: 0,
      hints: [
        "Compare *media pensión* ('half...') with *pensión completa* ('full...').",
        "Think about hotel meal packages when booking a stay.",
      ],
      strategy: "Distinguish *media pensión* (half board) from *pensión completa* (full board)",
      explanation:
        "**Media pensión** means 'half board' (breakfast plus one main meal, usually dinner). *Pensión completa* is full board (all three meals).",
    },
    {
      id: "exam-w2-q11",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "market-quantities",
      question:
        "Translate this Spanish market item into English:\n\n**una lata de atún y una botella de agua**",
      answer: {
        type: "text",
        accept: [
          "a tin of tuna and a bottle of water",
          "a can of tuna and a bottle of water",
          "one tin of tuna and one bottle of water",
          "one can of tuna and one bottle of water",
        ],
        display: "a tin of tuna and a bottle of water",
      },
      traps: [
        {
          spec: { type: "text", accept: ["a box of tuna and a bottle of water"] },
          feedback: "*Una caja* is 'a box'; **una lata** is **a tin / can**!",
        },
        {
          spec: { type: "text", accept: ["a loaf of bread and a bottle of water"] },
          feedback: "*Una barra de pan* is a loaf of bread; *una lata de atún* is **a tin/can of tuna**.",
        },
      ],
      hints: [
        "*Una lata* = a tin / can, and *atún* = tuna.",
        "*Una botella* = a bottle, and *agua* = water.",
      ],
      strategy: "Match packaging nouns (*lata, botella, caja, barra, docena*)",
      solution: [
        "*Una lata de atún* = a tin/can of tuna.",
        "*Una botella de agua* = a bottle of water.",
      ],
    },
    {
      id: "exam-w2-q12",
      kind: "mcq",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "giving-health-advice",
      question:
        "Which Spanish translation accurately renders **'You must not eat too much sugar to stay in shape'**?",
      options: [
        "No se debe comes demasiado azúcar para estar en forma.",
        "No se debe comer demasiado azúcar para estar en forma.",
        "Se debe comer mucha grasa para estar en forma.",
        "No hay que beber agua fresca para estar en forma.",
      ],
      answerIndex: 1,
      hints: [
        "Use impersonal prohibition *No se debe* followed immediately by an **infinitive** (*comer*, never *comes*).",
        "Check that the meaning matches 'sugar' (*azúcar*) and 'to stay in shape' (*para estar en forma*).",
      ],
      strategy: "Follow *no se debe* directly with an infinitive",
      explanation:
        "**No se debe comer demasiado azúcar para estar en forma** correctly pairs impersonal *no se debe* with the infinitive *comer* and matches every vocabulary element.",
    },
    {
      id: "exam-w2-q13",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "illnesses-symptoms-injuries",
      question:
        "Translate this injury sentence into Spanish using *me he...*:\n\n**I have broken my leg.**",
      answer: {
        type: "text",
        accept: [
          "Me he roto la pierna",
          "Yo me he roto la pierna",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me he rompido la pierna"] },
          feedback: "*Romper* has an irregular past participle: **roto** (never *rompido*)!",
        },
        {
          spec: { type: "text", accept: ["Me he roto mi pierna", "Me he roto el pierna"] },
          feedback: "Use the feminine definite article **la pierna** (not *mi* and not masculine *el*)!",
        },
      ],
      hints: [
        "*Romper* has an irregular past participle (*roto*).",
        "'The leg' is feminine (*la pierna*), and Spanish uses *la* (not *mi*) with reflexive injury phrases.",
      ],
      strategy: "Use irregular participle *roto* + definite article *la pierna*",
      solution: [
        "'I have broken' = *me he roto*.",
        "'my leg' = *la pierna* → **Me he roto la pierna.**",
      ],
    },
    {
      id: "exam-w2-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "clothes-uniform-shopping",
      guideRef: "shopping-demonstratives",
      question:
        "You are pointing to a blue dress across the shop and ask the assistant: **'Can I try on that dress?'**\nWhich Spanish question uses the right demonstrative AND reflexive verb?",
      options: [
        "¿Puedo probármelo este vestido?",
        "¿Puedo probar esa vestido?",
        "¿Puedo probarme ese vestido?",
        "¿Puedo probarme esos vestido?",
      ],
      answerIndex: 2,
      hints: [
        "'That' (further away) loses its T: *ese / esa* (whereas *este / esta* means 'this').",
        "*Vestido* ('dress') is **masculine singular** (*el vestido*), so match the demonstrative to masculine singular **ese**.",
      ],
      strategy: "Watch deceptive gender (*el vestido* = masc.) + *este* vs *ese*",
      explanation:
        "*El vestido* is masculine singular despite referring to a dress! For 'that' (not 'this'), use masculine singular **ese**, giving **¿Puedo probarme ese vestido?**. Notice *probármelo* already includes 'it' (*lo*), so repeating *este vestido* is ungrammatical.",
    },
    {
      id: "exam-w2-q15",
      kind: "short",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "accepting-making-excuses",
      question:
        "A friend invites you out, and you suggest **'maybe another day'**. Write this polite 3-word Spanish phrase.\n*(Start with: Quizá... or Quizás...)*",
      answer: {
        type: "text",
        accept: [
          "Quizá otro día",
          "Quizás otro día",
          "Tal vez otro día",
        ],
        display: "Quizá otro día",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Quizá otra día", "Quizás otra día"] },
          feedback: "*El día* is a classic masculine exception! Use masculine **otro día**, never *otra día*.",
        },
        {
          spec: { type: "text", accept: ["Quizá un otro día"] },
          feedback: "Spanish NEVER says *un otro* — just write **otro día**!",
        },
      ],
      hints: [
        "Watch the gender of *día*: it is masculine (*el día*), so 'another' is *otro* (never *un otro*!).",
        "Check the written accents on *Quizá(s)* and *día*.",
      ],
      strategy: "Remember masculine *otro día* (never *un otro* or *otra día*)",
      solution: [
        "'Maybe' = *Quizá* (or *Quizás*); 'another day' = *otro día* (masculine).",
        "Answer: **Quizá otro día.**",
      ],
    },
    {
      id: "exam-w2-q16",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      diagram: END_OF_YEAR_TENSES_SVG,
      question:
        "Use the four-tense reference chart in the diagram. Which option shows the **correct preterite** sequence for **yo fui → yo estuve → yo vi → yo di**?",
      options: [
        "I go → I am → I see → I give",
        "I will go → I will be → I will see → I will give",
        "He went → he was → he saw → he gave",
        "I went → I was → I saw → I gave",
      ],
      answerIndex: 3,
      hints: [
        "Find column **2. PRETÉRITO** in the red box of the diagram.",
        "All four forms (*fui, estuve, vi, di*) are *yo* ('I') preterite irregulars with NO written accents.",
      ],
      strategy: "Recognise unaccented irregular *yo* preterites (*fui, estuve, tuve, hice, vi, di*)",
      explanation:
        "All four verbs are *yo* irregular preterites: *fui* (I went/was), *estuve* (I was — location/state), *vi* (I saw), and *di* (I gave). None of them takes a written accent.",
    },
    {
      id: "exam-w2-q17",
      kind: "mcq",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "future-holiday-plans",
      question:
        "Read the weather forecast for Santander:\n\n> *Mañana va a llover por la mañana y va a hacer viento en la costa, pero el domingo hará sol y calor.*\n\nWhen will the weather be sunny and hot?",
      options: [
        "Tomorrow morning along the coast",
        "All weekend without any wind",
        "On Sunday after the rain clears",
        "Yesterday afternoon in the mountains",
      ],
      answerIndex: 2,
      hints: [
        "Split the sentence at *pero* ('but'): tomorrow (*mañana*) vs Sunday (*el domingo*).",
        "*Hará sol y calor* uses the simple future of *hacer* ('it will be sunny and hot').",
      ],
      strategy: "Distinguish *mañana* (immediate future) from *el domingo* (simple future)",
      explanation:
        "*Mañana va a llover... y va a hacer viento* means rain and wind tomorrow, **but on Sunday** (*pero el domingo*) *hará sol y calor* ('it will be sunny and hot').",
    },
    {
      id: "exam-w2-q18",
      kind: "short",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "writing-hotel-reviews",
      question:
        "Translate this hotel-review verdict into Spanish using the **simple future** of *volver* ('to return'):\n\n**I will never return.**\n*(Start with: No...)*",
      answer: {
        type: "text",
        accept: [
          "No volveré nunca",
          "Nunca volveré",
          "Yo no volveré nunca",
          "Yo nunca volveré",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["No volvé nunca", "No vuelvo nunca"] },
          feedback: "*Vuelvo* is present ('I return') and *volvé* drops the *-er*. Keep the full infinitive *volver* + *-é*: **No volveré nunca**!",
        },
        {
          spec: { type: "text", accept: ["No volveré siempre"] },
          feedback: "*Siempre* means 'always' — the opposite of 'never' (**nunca**)!",
        },
      ],
      hints: [
        "Form the *yo* simple future of *volver* by adding *-é* directly to the full infinitive (*volveré*).",
        "Place *nunca* after the verb when opening with *No* (*No ... nunca*).",
      ],
      strategy: "Use double negation (*No + verb + nunca*) + full infinitive future",
      solution: [
        "Simple future *yo* of *volver* = *volveré*.",
        "Double negation: **No volveré nunca.** (Also valid: *Nunca volveré.*)",
      ],
    },
    {
      id: "exam-w2-q19",
      kind: "mcq",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "ordering-in-restaurant",
      diagram: RESTAURANT_MENU_SVG,
      question:
        "Look at the **Restaurante El Olivo** menu in the diagram. Which 2-course meal + drink is **100% suitable for a vegetarian who wants the chef's recommendation**?",
      options: [
        "Gazpacho, vegetable paella, and natural orange juice",
        "Spicy seafood soup, roast chicken, and still water",
        "Mixed salad, roast chicken, and homemade lemonade",
        "Spicy seafood soup, Spanish omelette, and orange juice",
      ],
      answerIndex: 0,
      hints: [
        "Find *Recomendación del chef* at the bottom of the left box (*Gazpacho*), and check which dishes carry the **(V)** vegetarian symbol.",
        "Eliminate any option containing *mariscos* (seafood) or *pollo* (chicken).",
      ],
      strategy: "Filter menu items by dietary icon *(V)* and chef highlight",
      explanation:
        "The chef recommends *Gazpacho andaluz fresco (V)*, and *Paella de verduras a la plancha (V)* is vegetarian, paired with *zumo de naranja natural* from the bottom drinks bar. Both *mariscos* and *pollo* are non-vegetarian.",
    },
    {
      id: "exam-w2-q20",
      kind: "short",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "future-health-resolutions",
      question:
        "Translate this health resolution into Spanish using the **simple future** of *dejar de* ('to stop doing'):\n\n**I will stop eating fast food.**\n*(Use comida rápida or comida basura)*",
      answer: {
        type: "text",
        accept: [
          "Dejaré de comer comida rápida",
          "Yo dejaré de comer comida rápida",
          "Dejaré de comer comida basura",
          "Yo dejaré de comer comida basura",
          "Dejaré de comer la comida rápida",
          "Dejaré de comer la comida basura",
        ],
        display: "Dejaré de comer comida rápida",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Dejaré comer comida rápida", "Dejaré comer comida basura"] },
          feedback: "Never omit **de**! 'To stop doing something' is always *dejar **de** + infinitive* (**dejaré de comer**)!",
        },
        {
          spec: { type: "text", accept: ["Dejé de comer comida rápida"] },
          feedback: "*Dejé* is preterite ('I stopped'). For 'I will stop', add *-é* to the full infinitive: **dejaré**!",
        },
      ],
      hints: [
        "Simple future *yo* of *dejar* = full infinitive + *-é* (*dejaré*).",
        "Include the linking preposition *de* before the infinitive *comer*.",
      ],
      strategy: "Use *dejaré de + infinitive* for strong future resolutions",
      solution: [
        "'I will stop' = *Dejaré de*.",
        "'eating fast food' = *comer comida rápida* (or *comida basura*).",
      ],
    },
    {
      id: "exam-w2-q21",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "pharmacy-doctor-remedies",
      question:
        "At the doctor's surgery, the doctor tells you: **Tienes que tomar este jarabe dos veces al día y descansar en cama.**\nWhat is **jarabe** in English?",
      answer: {
        type: "text",
        accept: ["syrup", "cough syrup", "medicine syrup", "liquid medicine"],
        display: "syrup",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tablets", "pills"] },
          feedback: "*Las pastillas* are tablets/pills; **el jarabe** is **syrup / cough syrup**!",
        },
        {
          spec: { type: "text", accept: ["cream", "ointment", "prescription"] },
          feedback: "*La crema* is cream and *la receta* is prescription; **el jarabe** is **syrup**.",
        },
      ],
      hints: [
        "Think of the four common pharmacy items: *pastillas* (tablets), *crema* (cream), *tiritas* (plasters), and *jarabe*.",
        "You swallow it by the spoonful for a sore throat or cough.",
      ],
      strategy: "Distinguish key pharmacy treatment nouns",
      solution: [
        "**El jarabe** = **(cough) syrup**.",
      ],
    },
    {
      id: "exam-w2-q22",
      kind: "short",
      difficulty: "core",
      topicId: "clothes-uniform-shopping",
      guideRef: "outfits-across-tenses",
      question:
        "Translate into Spanish using the **simple future** of *llevar* ('to wear'):\n\n**For the party I will wear a red dress.**\n*(Start with: Para la fiesta...)*",
      answer: {
        type: "text",
        accept: [
          "Para la fiesta llevaré un vestido rojo",
          "Para la fiesta yo llevaré un vestido rojo",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Para la fiesta llevaré una vestida roja", "Para la fiesta llevaré un vestido roja"] },
          feedback: "*Vestido* is masculine (*un vestido*), so the adjective must be masculine **rojo**!",
        },
        {
          spec: { type: "text", accept: ["Para la fiesta llevé un vestido rojo"] },
          feedback: "*Llevé* is preterite ('I wore'). Keep the full infinitive *llevar* + *-é* for simple future: **llevaré**!",
        },
      ],
      hints: [
        "Simple future *yo* of *llevar* = *llevaré* (accent on *é*).",
        "Remember *el vestido* is masculine (*un vestido rojo*), with the colour placed AFTER the noun.",
      ],
      strategy: "Combine simple future *llevaré* + masculine *un vestido rojo*",
      solution: [
        "'For the party' = *Para la fiesta*.",
        "'I will wear a red dress' = *llevaré un vestido rojo*.",
      ],
    },
    {
      id: "exam-w2-q23",
      kind: "mcq",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "writing-film-reviews",
      diagram: FILM_REVIEW_CARD_SVG,
      question:
        "Read Marco's film review of **«Horizonte Rojo»** in the diagram. Which statement is **TRUE** according to his review?",
      options: [
        "He watched the comedy alone at home and hated the ending.",
        "He praised the special effects and plans to watch the sequel next year.",
        "He gave it three stars because the soundtrack was too predictable.",
        "He refused to recommend it because the protagonist was cowardly.",
      ],
      answerIndex: 1,
      hints: [
        "Check the green *PUNTOS FUERTES* box and the blue *Veredicto* banner at the bottom of the card.",
        "*La segunda parte* means 'the second part / sequel', and *veré* means 'I will watch'.",
      ],
      strategy: "Cross-check strengths, star rating, and future verdict on the review card",
      explanation:
        "Marco gave *«Horizonte Rojo»* 4/5 stars, praised *Efectos especiales impresionantes*, and concluded *La recomiendo totalmente; el año que viene veré la segunda parte* ('I totally recommend it; next year I will watch the sequel').",
    },

    // -----------------------------------------------------------------------
    // CHALLENGE (q24–q30)
    // -----------------------------------------------------------------------
    {
      id: "exam-w2-q24",
      kind: "short",
      difficulty: "challenge",
      topicId: "social-plans-films",
      guideRef: "film-genres-opinions",
      question:
        "Translate into Spanish, making sure the adjective agrees with feminine plural **las películas**:\n\n**Horror films are boring.**\n*(Use aburrido)*",
      answer: {
        type: "text",
        accept: [
          "Las películas de terror son aburridas",
          "Las películas de miedo son aburridas",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Las películas de terror son aburridos", "Las películas de terror son aburrida"] },
          feedback: "*Las películas* is feminine plural, so *aburrido* MUST become feminine plural **aburridas**!",
        },
        {
          spec: { type: "text", accept: ["Las películas de terror están aburridas"] },
          feedback: "Careful with *ser* vs *estar*! *Ser aburrido* = 'to be boring' (trait), whereas *estar aburrido* = 'to feel bored'!",
        },
      ],
      hints: [
        "'Horror films' = *Las películas de terror* (feminine plural).",
        "Use **ser** (*son*, NOT *están*) for 'are boring', and match *aburrido* to feminine plural (*-as*).",
      ],
      strategy: "Use *ser* (not *estar*) for 'boring' + feminine plural agreement",
      solution: [
        "'Horror films' = *Las películas de terror*.",
        "'are boring' = *son aburridas* (feminine plural agreeing with *películas*).",
      ],
    },
    {
      id: "exam-w2-q25",
      kind: "short",
      difficulty: "challenge",
      topicId: "four-tenses-grammar",
      guideRef: "immediate-vs-simple-future",
      question:
        "Put the irregular verb **querer** ('to want') into the *yo* **simple future** tense:\n\n*En el futuro ______ (querer) trabajar en un país hispanohablante.*",
      answer: {
        type: "text",
        accept: ["querré", "yo querré"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["quereré", "queré"] },
          feedback: "*Querer* drops the second *e* to produce a **double rr** stem (**querr-**): **querré**!",
        },
        {
          spec: { type: "text", accept: ["quiero", "quise"] },
          feedback: "*Quiero* is present and *quise* is preterite. For simple future ('I will want'), write **querré**.",
        },
      ],
      hints: [
        "*Querer* drops the middle **e** before adding the future ending, creating a double **rr** (*querr-*).",
        "Add the accented *yo* simple future ending *-é*.",
      ],
      strategy: "Master the double-R irregular future stem *querr-*",
      solution: [
        "Irregular stem of *querer* = *querr-*.",
        "Add *-é* → **querré**.",
      ],
    },
    {
      id: "exam-w2-q26",
      kind: "written",
      difficulty: "challenge",
      topicId: "holidays-activities",
      guideRef: "holiday-opinions-narratives",
      marks: 4,
      question:
        "Write an **end-of-year holiday & hotel review in Spanish** (4–5 sentences) covering ALL FOUR bullet points:\n- Where you stayed on your last holiday and what facilities the accommodation had\n- Two activities or places of interest you visited there (preterite)\n- One problem you had or one balanced criticism\n- Where you will go on your next holiday and why (future)",
      modelAnswer:
        "El verano pasado me alojé en un hotel de cuatro estrellas en Málaga que tenía piscina climatizada y wifi gratis. Visité el castillo histórico, saqué muchas fotos y nadé en el mar todos los días. Sin embargo, hacía demasiado ruido por la noche y el ascensor no funcionó un día. El año que viene viajaré a México con mi familia porque quiero probar comida auténtica.",
      markScheme: [
        {
          point: "Mentions accommodation type and at least one facility or feature",
          keywords: ["hotel", "albergue", "camping", "casa rural", "piscina", "wifi", "gimnasio", "vistas", "pension"],
        },
        {
          point: "Describes past sightseeing or holiday activities accurately in the preterite",
          keywords: ["visite", "nade", "saque", "tome", "jugue", "comi", "fui", "castillo", "catedral", "museo", "ruinas", "plaza", "playa"],
        },
        {
          point: "Includes a balanced problem or criticism with a contrast connective",
          keywords: ["sin embargo", "pero", "aunque", "ruido", "ascensor", "sucia", "caliente", "lenta", "llovio", "caro"],
        },
        {
          point: "States a future holiday plan (immediate or simple future) with a reason",
          keywords: ["viajare", "ire", "visitare", "voy a viajar", "voy a ir", "vamos a", "porque", "quiero", "gustaria"],
        },
      ],
      hints: [
        "Combine Term 1 Units 1 & 2: accommodation (*hotel / albergue / casa rural* + facilities) + preterite activities (*visité, nadé, saqué fotos*).",
        "Pivot with *Sin embargo...* to mention a realistic issue, and close with *El año que viene viajaré / voy a ir a... porque...*.",
      ],
      strategy: "Unite Holidays + Hotels + Contrast + Future Justification",
      commonError:
        "Staying in the present tense throughout instead of contrasting preterite past stay with future holiday plan.",
    },
    {
      id: "exam-w2-q27",
      kind: "written",
      difficulty: "challenge",
      topicId: "food-market-restaurant",
      guideRef: "hispanic-cuisine-tenses",
      marks: 3,
      question:
        "Write **3–4 sentences in Spanish** about shopping at a Spanish market and eating healthily:\n- Mention two exact quantities of fresh foods you bought at the market (preterite)\n- Explain why those ingredients are good for a balanced diet\n- State one unhealthy food or drink you will avoid from now on (future)",
      modelAnswer:
        "Ayer en el mercado compré un kilo de naranjas frescas y medio kilo de tomates maduros. Estos ingredientes son muy sanos porque tienen vitaminas y ayudan a llevar una vida equilibrada. A partir de hoy evitaré la comida basura y beberé más agua.",
      markScheme: [
        {
          point: "Uses Spanish market weights/quantities with preterite shopping verb",
          keywords: ["compre", "pedi", "kilo", "medio kilo", "gramos", "docena", "barra", "litro", "botella", "lata", "caja"],
        },
        {
          point: "Explains the healthy benefit for a balanced diet",
          keywords: ["sano", "sanos", "sana", "saludable", "fruta", "verdura", "vitaminas", "energia", "equilibrada", "en forma"],
        },
        {
          point: "Promises in the future to avoid an unhealthy food or drink",
          keywords: ["evitare", "dejare", "comere", "bebere", "voy a evitar", "voy a dejar", "comida basura", "comida rapida", "dulces", "azucar", "refrescos", "grasa"],
        },
      ],
      hints: [
        "Include real market units: *medio kilo de..., doscientos gramos de..., una docena de..., una barra de pan*.",
        "Link your shopping to healthy-living reasons and finish with *evitaré / dejaré de comer / voy a evitar...*.",
      ],
      strategy: "Connect Market Quantities (preterite) + Diet Reason + Future Resolution",
      commonError:
        "Forgetting *de* after quantities (*un kilo **de** naranjas*, never *un kilo naranjas*).",
    },
    {
      id: "exam-w2-q28",
      kind: "written",
      difficulty: "challenge",
      topicId: "body-illness-treatment",
      guideRef: "health-dialogues-past",
      marks: 4,
      question:
        "Write a **4-sentence Spanish dialogue or narrative** about a health scare during a trip:\n- Explain what happened in the past (preterite accident or sudden illness)\n- Describe two current symptoms (using pain + duration or illness states)\n- State the remedy recommended by the doctor or pharmacist\n- Say what you will do tomorrow to get better (future)",
      modelAnswer:
        "El domingo me torcí el tobillo jugando al tenis y fui a la farmacia del barrio. Ahora me duele mucho la pierna desde hace dos días y estoy muy cansado. El farmacéutico me dio una crema fría y unas pastillas para el dolor. Mañana descansaré en casa y no haré deporte.",
      markScheme: [
        {
          point: "Narrates a past injury or illness clearly in the preterite/perfect",
          keywords: ["me cai", "me torci", "me he torcido", "me he roto", "me he cortado", "fui", "tuve", "ayer", "pasado", "domingo", "sabado"],
        },
        {
          point: "Describes current pain/symptoms using *me duele(n)*, *desde hace*, or *tengo/estoy*",
          keywords: ["me duele", "me duelen", "desde hace", "tengo fiebre", "tengo tos", "estoy cansado", "estoy cansada", "estoy mareado", "estoy resfriado"],
        },
        {
          point: "Names a doctor/pharmacist remedy accurately",
          keywords: ["pastillas", "jarabe", "crema", "tirita", "tiritas", "receta", "medico", "farmaceutico", "hospital"],
        },
        {
          point: "States a recovery plan using immediate or simple future",
          keywords: ["descansare", "tomare", "bebere", "hare", "voy a descansar", "voy a tomar", "voy a quedar", "me quedare"],
        },
      ],
      hints: [
        "Sentence 1: *El domingo me caí / me torcí el tobillo y fui al médico/hospital*.",
        "Sentences 2–4: add *me duele(n) + el/la + desde hace...*, a remedy (*pastillas/jarabe/crema*), and a future plan (*descansaré / voy a descansar*).",
      ],
      strategy: "Past accident + Current symptom (*desde hace*) + Remedy + Future recovery",
      commonError:
        "Using *mi* instead of *el/la* before body parts, or forgetting the accent on *me caí / me torcí / descansaré*.",
    },
    {
      id: "exam-w2-q29",
      kind: "written",
      difficulty: "challenge",
      topicId: "clothes-uniform-shopping",
      guideRef: "school-uniform-debate",
      marks: 3,
      question:
        "Write **3–4 sentences in Spanish** about clothes, shopping, and uniform:\n- Describe something you bought recently (garment + colour/pattern agreeing properly, preterite)\n- Mention how it fits or whether it was good value\n- Give one balanced opinion on school uniform compared with casual clothes",
      modelAnswer:
        "El sábado compré una sudadera azul de rayas y unos vaqueros negros en el centro comercial. La sudadera me queda muy bien y fue una ganga porque solo costó quince euros. Prefiero llevar ropa informal los fines de semana, aunque el uniforme escolar ahorra tiempo de lunes a viernes.",
      markScheme: [
        {
          point: "Describes a recent clothing purchase in the preterite with accurate colour/pattern",
          keywords: ["compre", "camiseta", "sudadera", "vaqueros", "chaqueta", "vestido", "falda", "zapatillas", "zapatos", "rayas", "cuadros", "lunares", "algodon"],
        },
        {
          point: "Comments on fit, size, or price/value",
          keywords: ["me queda", "me quedan", "talla", "ganga", "barato", "barata", "caro", "cara", "costo", "euros", "grande", "estrecho"],
        },
        {
          point: "Expresses a balanced view comparing school uniform with casual clothes",
          keywords: ["uniforme", "ahorra tiempo", "iguala", "personalidad", "incomodo", "comodo", "comoda", "aunque", "sin embargo", "pero"],
        },
      ],
      hints: [
        "Include a past purchase (*compré + garment + colour/pattern*) and check adjective endings carefully.",
        "Add a fit/price phrase (*me queda bien / es una ganga / costó... euros*) and a balanced sentence about *el uniforme escolar*.",
      ],
      strategy: "Preterite purchase + Fit/price phrase + Balanced uniform view",
      commonError:
        "Saying *es bien* for fit instead of *me queda bien* (or plural *me quedan bien*).",
    },
    {
      id: "exam-w2-q30",
      kind: "written",
      difficulty: "challenge",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      marks: 4,
      question:
        "Final Year 9 Four-Tense Challenge: write a **4-sentence Spanish paragraph** about your weekend plans & cinema using ALL FOUR Year 9 tenses (one distinct tense per sentence):\n- Present tense (your usual weekend routine or film genre preference)\n- Preterite tense (something you watched, bought, or did last weekend)\n- Immediate future (a meeting arrangement for this weekend — time or place)\n- Simple future (a prediction or goal for next year using a regular or irregular simple future verb)",
      modelAnswer:
        "Normalmente veo películas de acción con mi hermano los viernes por la noche. El sábado pasado fui al centro comercial, compré una camiseta verde y comí tacos. Este domingo voy a quedar con mis amigos delante del cine a las seis y media. El año que viene tendré más tiempo libre y viajaré a España para practicar mi español.",
      markScheme: [
        {
          point: "Present tense sentence with accurate verb form and habit clue",
          keywords: ["normalmente", "siempre", "todos los", "veo", "prefiero", "llevo", "salgo", "como", "voy", "hago"],
        },
        {
          point: "Preterite tense sentence narrating a completed past event accurately",
          keywords: ["ayer", "pasado", "anoche", "fui", "vi", "compre", "comi", "hice", "quede", "pedi", "visite", "saque"],
        },
        {
          point: "Immediate future (*ir + a + infinitive*) arranging a meeting or near plan",
          keywords: ["voy a", "vamos a", "va a", "van a"],
        },
        {
          point: "Genuine simple future verb (regular or irregular stem + accented ending)",
          keywords: ["tendre", "viajare", "ire", "vere", "hare", "podre", "saldre", "querre", "comere", "comprare", "hablare", "llevare"],
        },
      ],
      hints: [
        "Anchor each sentence clearly: (1) *Normalmente...*, (2) *El fin de semana pasado...*, (3) *Este sábado voy a quedar...*, (4) *El año que viene tendré / viajaré / veré / haré...*.",
        "Double-check accents on preterite (*compré, comí, visité*) and simple future (*tendré, viajaré, veré, haré* — never accent *fui* or *vi*!).",
      ],
      strategy: "Four-tense mastery: Present → Preterite → Immediate Future → Simple Future",
      commonError:
        "Using immediate future twice instead of showing a genuine one-word simple future verb, or adding an accent to *fui* / *vi*.",
    },
  ],
};
