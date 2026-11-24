import type { ExamPaper } from "../types";

const BOOKING_FORM_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish hotel reservation and complaint slip for Hotel Costa Verde showing room details, nightly rate, board type and guest issue"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="44" rx="8" fill="var(--brand-soft)"/><text x="30" y="36" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="var(--ink)">HOTEL COSTA VERDE — Hoja de reserva e incidencias</text><text x="30" y="52" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Recepción 24 h · Avenida del Mar, Alicante</text><rect x="16" y="70" width="254" height="118" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)">DATOS DE LA RESERVA</text><text x="28" y="110" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">Huésped: Familia Romero</text><text x="28" y="130" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">Tipo: Habitación doble con balcón</text><text x="28" y="150" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">Estancia: Tres noches (pensión completa)</text><text x="28" y="170" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--good)">Precio: 95 € por noche</text><rect x="284" y="70" width="260" height="118" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/><text x="296" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--bad)">INCIDENCIA REGISTRADA</text><text x="296" y="112" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• No funciona la ducha (agua fría)</text><text x="296" y="134" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Falta una toalla en el baño</text><text x="296" y="156" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Petición: cambiar de habitación</text><text x="296" y="176" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Estado: En proceso de cambio</text><rect x="16" y="198" width="528" height="36" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="280" y="220" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Nota: «Quisiera otra habitación tranquila, por favor.»</text></svg>`;

const FOUR_TENSE_BLUEPRINT_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison chart of Spanish Immediate Future and Simple Future tenses with regular endings and key irregular stems"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--ink)">Dos futuros en español: Inmediato vs Simple</text><rect x="18" y="42" width="252" height="192" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="144" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--info)">FUTURO INMEDIATO</text><text x="144" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">ir (presente) + a + infinitivo</text><line x1="32" y1="92" x2="256" y2="92" stroke="var(--line)" stroke-width="1"/><text x="34" y="114" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">yo: <tspan font-weight="800">voy a</tspan> viajar</text><text x="34" y="136" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">tú: <tspan font-weight="800">vas a</tspan> comer</text><text x="34" y="158" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">él/ella: <tspan font-weight="800">va a</tspan> dormir</text><text x="34" y="180" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">nosotros: <tspan font-weight="800">vamos a</tspan> salir</text><text x="34" y="202" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">ellos: <tspan font-weight="800">van a</tspan> estudiar</text><text x="144" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--info)">¡Nunca olvides la «a»!</text><rect x="286" y="42" width="256" height="192" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="414" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--brand)">FUTURO SIMPLE</text><text x="414" y="82" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">infinitivo + -é, -ás, -á, -emos, -éis, -án</text><line x1="300" y1="92" x2="528" y2="92" stroke="var(--line)" stroke-width="1"/><text x="302" y="112" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--ink)">Raíces irregulares clave:</text><text x="302" y="134" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">tener → <tspan font-weight="800">tendr-</tspan> (tendré)</text><text x="302" y="154" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">hacer → <tspan font-weight="800">har-</tspan> (harás)</text><text x="302" y="174" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">poder → <tspan font-weight="800">podr-</tspan> (podrá)</text><text x="302" y="194" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">salir → <tspan font-weight="800">saldr-</tspan> (saldremos)</text><text x="414" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--brand)">¡Tilde en todas excepto -emos!</text></svg>`;

const BODY_SYMPTOM_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish medical consultation chart contrasting singular me duele and plural me duelen with duration desde hace and pharmacy remedies"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="40" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="280" y="41" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="var(--ink)">CONSULTA MÉDICA — Ficha de paciente: Carlos (14 años)</text><rect x="16" y="66" width="256" height="114" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="86" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--bad)">SÍNTOMAS (doler + artículo)</text><text x="28" y="108" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Singular: <tspan font-weight="700">Me duele la garganta</tspan></text><text x="28" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Plural: <tspan font-weight="700">Me duelen los oídos</tspan></text><text x="28" y="148" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Duración: <tspan font-weight="700">desde hace cuatro días</tspan></text><text x="28" y="168" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Otros: tengo fiebre y mucha tos</text><rect x="288" y="66" width="256" height="114" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="300" y="86" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--info)">TRATAMIENTO &amp; RECETA</text><text x="300" y="108" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">1. Tomar dos pastillas al día</text><text x="300" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">2. Beber mucha agua e infusiones</text><text x="300" y="148" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">3. Descansar en cama dos días</text><text x="300" y="168" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">4. Tomar el jarabe por la noche</text><rect x="16" y="190" width="528" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="280" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--ink)">Regla de oro: con partes del cuerpo usa el / la / los / las (¡no mi/mis!)</text><text x="280" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Presente + desde hace + tiempo = «for [duration]» (still happening now)</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-w1",
  title: "Year 9 Spanish Writing, Translation & Four-Tense Mock 1",
  calculator: true,
  minutes: 45,
  questions: [
    // -----------------------------------------------------------------------
    // WARMUP (q01–q06)
    // -----------------------------------------------------------------------
    {
      id: "exam-w1-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "holidays-activities",
      guideRef: "destinations-transport",
      question:
        "Which Spanish translation accurately renders **'We always go to the mountains by car in winter'**?",
      options: [
        "Siempre vamos a la montaña con coche en verano.",
        "Siempre vamos a la montaña en coche en invierno.",
        "Siempre fuimos a la montaña en coche en invierno.",
        "Siempre voy a las montañas en tren en invierno.",
      ],
      answerIndex: 1,
      hints: [
        "In Spanish, transport uses **en** (*en coche*), and 'winter' is *invierno*.",
      ],
      strategy: "Check preposition (*en* + transport), person (*vamos*), and season",
      explanation:
        "**Siempre vamos a la montaña en coche en invierno** uses *vamos* ('we go'), *en coche* ('by car' — never *con coche*), and *invierno* ('winter'). *Fuimos* is past tense, and *verano* means summer.",
    },
    {
      id: "exam-w1-q02",
      kind: "short",
      difficulty: "warmup",
      topicId: "hotels-places-reviews",
      guideRef: "hotel-types-facilities",
      question:
        "Translate into Spanish:\n\n**a room with sea views**\n*(Start with: una habitación...)*",
      answer: {
        type: "text",
        accept: [
          "una habitación con vistas al mar",
          "habitación con vistas al mar",
          "una habitación con vista al mar",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["una habitación con vistas a el mar"] },
          feedback: "Remember the contraction: *a + el* ALWAYS contracts to **al** (*vistas al mar*)!",
        },
        {
          spec: { type: "text", accept: ["un cuarto con piscina"] },
          feedback: "Check the vocabulary: 'with sea views' is **con vistas al mar**.",
        },
      ],
      hints: [
        "'With views of the sea' uses *con vistas* + the contraction *al* (*a + el*) + *mar*.",
      ],
      strategy: "Contract *a + el → al* in set hotel phrases",
      solution: [
        "'A room' = *una habitación* (accent on *ó*).",
        "'With sea views' = *con vistas al mar*.",
      ],
    },
    {
      id: "exam-w1-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "food-market-restaurant",
      guideRef: "food-opinions-mealtimes",
      question:
        "Which Spanish sentence correctly expresses **'I love spicy dishes'**?",
      options: [
        "Me encantan los platos picantes.",
        "Me encanta los platos picantes.",
        "Me encantan platos muy dulces.",
        "Me gusta mucho el plato picante.",
      ],
      answerIndex: 0,
      hints: [
        "*Los platos picantes* is plural, so *encantar* must take its plural form **encantan**.",
      ],
      strategy: "Match *me encanta* (singular) vs *me encantan* (plural)",
      explanation:
        "Because *los platos picantes* is plural, *encantar* agrees with the plural noun: **Me encantan los platos picantes**. Remember also to include the definite article *los* after *me encantan*.",
    },
    {
      id: "exam-w1-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "healthy-living-diet",
      guideRef: "balanced-diet-habits",
      question:
        "Translate this healthy-living phrase into Spanish (4 words):\n\n**to lead a healthy life**\n*(Use the verb llevar)*",
      answer: {
        type: "text",
        accept: [
          "llevar una vida sana",
          "llevar una vida saludable",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["llevar un vida sano", "llevar una vida sano"] },
          feedback: "*La vida* is feminine, so both the article (*una*) and adjective (*sana*) must be feminine!",
        },
      ],
      hints: [
        "Use the infinitive *llevar*, feminine *una vida*, and the feminine adjective *sana* (or *saludable*).",
      ],
      strategy: "Match feminine article and adjective with *la vida*",
      solution: [
        "*La vida* is feminine → *una vida sana* (or *una vida saludable*).",
        "Full phrase: **llevar una vida sana**.",
      ],
    },
    {
      id: "exam-w1-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "body-illness-treatment",
      guideRef: "body-parts-doler",
      question:
        "How do you say **'My teeth hurt'** accurately in Spanish?",
      options: [
        "Me duele mis dientes.",
        "Me duele los dientes.",
        "Me duelen los dientes.",
        "Me duelen mis dientes.",
      ],
      answerIndex: 2,
      hints: [
        "*Los dientes* is plural, so use **me duelen** AND the definite article **los** (never *mis*) with body parts.",
      ],
      strategy: "Apply *me duele(n)* + definite article (*el/la/los/las*)",
      explanation:
        "With body parts, Spanish uses the definite article (*los dientes*, not *mis dientes*) because *me* already shows whose teeth they are. Because *dientes* is plural, *doler* becomes **duelen**.",
    },
    {
      id: "exam-w1-q06",
      kind: "short",
      difficulty: "warmup",
      topicId: "four-tenses-grammar",
      guideRef: "present-tense-mastery",
      question:
        "Write the *yo* present-tense form of **salir** ('I go out / leave'):\n\n*Los viernes por la tarde ______ con mis amigos.*",
      answer: {
        type: "text",
        accept: ["salgo", "yo salgo"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["salo", "yo salo"] },
          feedback: "*Salir* is a *-go* verb in the *yo* present tense (like *hago, pongo, tengo*): **salgo**!",
        },
        {
          spec: { type: "text", accept: ["salí", "saldré"] },
          feedback: "*Los viernes* describes a regular present habit, so use present tense **salgo**, not preterite or future.",
        },
      ],
      hints: [
        "*Salir* is an irregular *-go* verb in the *yo* present tense.",
      ],
      strategy: "Spot high-frequency *-go* verbs (*hago, pongo, salgo, tengo*)",
      solution: [
        "*Salir* in the *yo* present tense = **salgo**.",
        "*Los viernes por la tarde **salgo** con mis amigos.*",
      ],
    },

    // -----------------------------------------------------------------------
    // CORE (q07–q23)
    // -----------------------------------------------------------------------
    {
      id: "exam-w1-q07",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      question:
        "Choose the sentence that uses the **correct irregular preterite** form of **hacer** for *él* ('He did his homework yesterday').",
      options: [
        "Ayer él hace sus deberes temprano.",
        "Ayer él hico sus deberes temprano.",
        "Ayer él hice sus deberes temprano.",
        "Ayer él hizo sus deberes temprano.",
      ],
      answerIndex: 3,
      hints: [
        "Look at the stem of *hacer* in the preterite: *hic-* for most persons, with one consonant swap in the 3rd person singular.",
        "Before **o**, **c** changes to **z** to preserve the soft /θ/ or /s/ sound.",
      ],
      strategy: "Remember the unique spelling of 3rd-person preterite *hizo*",
      explanation:
        "In the preterite of *hacer*, *yo* is *hice*, while *él/ella/usted* changes **c → z** before **o** to give **hizo** (with no written accent). *Hico* is incorrect because *c + o* sounds hard /k/.",
    },
    {
      id: "exam-w1-q08",
      kind: "short",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "holiday-activities-preterite",
      question:
        "Translate into Spanish using the **preterite tense**:\n\n**Last month I sunbathed and swam in the sea.**\n*(Start with: El mes pasado...)*",
      answer: {
        type: "text",
        accept: [
          "El mes pasado tomé el sol y nadé en el mar",
          "El mes pasado yo tomé el sol y nadé en el mar",
          "El mes pasado nadé en el mar y tomé el sol",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["El mes pasado tomo el sol y nado en el mar"] },
          feedback: "*Tomo* and *nado* are present tense! With *el mes pasado*, use *yo* preterite *-é*: **tomé** and **nadé**.",
        },
        {
          spec: { type: "text", accept: ["El mes pasado tomó el sol y nadó en el mar"] },
          feedback: "Careful with the endings: *-ó* is 'he/she', whereas *-é* is 'I' (**tomé ... nadé**).",
        },
      ],
      hints: [
        "'To sunbathe' is *tomar el sol* and 'to swim' is *nadar*.",
        "Put both *-ar* verbs into the *yo* preterite (*-é* with accent).",
      ],
      strategy: "Conjugate both verbs consistently in the *yo* preterite",
      solution: [
        "'Last month' = *El mes pasado*.",
        "'I sunbathed' = *tomé el sol*; 'and swam in the sea' = *y nadé en el mar*.",
      ],
    },
    {
      id: "exam-w1-q09",
      kind: "mcq",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "booking-and-problems",
      diagram: BOOKING_FORM_SVG,
      question:
        "Examine the **Hotel Costa Verde** reservation and complaint slip in the diagram. Which Spanish sentence accurately reports the Romero family's booking AND problem?",
      options: [
        "Reservaron una habitación individual con media pensión, pero falta el wifi.",
        "Reservaron una casa rural por cinco noches, pero el ascensor no funciona.",
        "Reservaron dos camas con vistas al parque, pero la piscina está sucia.",
        "Reservaron una habitación doble con pensión completa, pero no funciona la ducha.",
      ],
      answerIndex: 3,
      hints: [
        "Read the *DATOS DE LA RESERVA* box on the left for room type and meal plan (*pensión completa*).",
        "Then check the *INCIDENCIA REGISTRADA* box on the right for what is broken (*no funciona la ducha*).",
      ],
      strategy: "Verify both halves of a compound statement against the form",
      explanation:
        "The reservation box lists *Habitación doble con balcón*, *Tres noches (pensión completa)*, and the incident box states *No funciona la ducha (agua fría)* ('the shower does not work — cold water').",
    },
    {
      id: "exam-w1-q10",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "market-quantities",
      question:
        "Translate this market shopping question into Spanish (4 words):\n\n**How much is it in total?**\n*(Use the verb ser)*",
      answer: {
        type: "text",
        accept: [
          "¿Cuánto es en total?",
          "Cuánto es en total",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["¿Cuántos son en total?", "Cuántos son en total"] },
          feedback: "For a total price, Spanish uses singular **¿Cuánto es en total?** (not plural *cuántos son*).",
        },
        {
          spec: { type: "text", accept: ["¿Dónde está en total?"] },
          feedback: "*¿Cuánto?* means 'how much?', whereas *¿dónde?* means 'where?'.",
        },
      ],
      hints: [
        "The question word for 'how much' is *cuánto* (with an accent on *á*).",
        "Follow it with singular *es* and the phrase *en total*.",
      ],
      strategy: "Accent all Spanish question words (*¿Cuánto? ¿Qué? ¿Dónde?*)",
      solution: [
        "'How much' = *¿Cuánto* (accent on *á*).",
        "'is it in total?' = *es en total?*",
        "Full question: **¿Cuánto es en total?**",
      ],
    },
    {
      id: "exam-w1-q11",
      kind: "mcq",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "giving-health-advice",
      question:
        "Which Spanish sentence is grammatically **CORRECT** for giving health advice?",
      options: [
        "Se debe comes mucha verdura y fruta fresca.",
        "Es imprescindible beber dos litros de agua cada día.",
        "Hay que hacemos ejercicio todos los fines de semana.",
        "Deberías duermes al menos ocho horas por la noche.",
      ],
      answerIndex: 1,
      hints: [
        "After *se debe*, *hay que*, *deberías*, and *es imprescindible*, what form must the second verb take?",
        "Check every option to see which one leaves the second verb as an **infinitive** (*-ar / -er / -ir*).",
      ],
      strategy: "Advice frame + **infinitive** (never a second conjugated verb!)",
      explanation:
        "**Es imprescindible beber dos litros de agua cada día** correctly uses the infinitive *beber*. The other three sentences wrongly conjugate the second verb (*comes, hacemos, duermes*) instead of using *comer, hacer, dormir*.",
    },
    {
      id: "exam-w1-q12",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "illnesses-symptoms-injuries",
      question:
        "Translate this injury sentence into Spanish using *me he...*:\n\n**I have twisted my ankle.**",
      answer: {
        type: "text",
        accept: [
          "Me he torcido el tobillo",
          "Yo me he torcido el tobillo",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me he roto el tobillo"] },
          feedback: "*Me he roto* means 'I have broken'; 'I have twisted / sprained' is **me he torcido**.",
        },
        {
          spec: { type: "text", accept: ["Me he torcido mi tobillo"] },
          feedback: "With reflexive body-part phrases, use the definite article **el tobillo**, not *mi tobillo*!",
        },
      ],
      hints: [
        "The past participle of *torcer* ('to twist') is *torcido*, and 'the ankle' is masculine *el tobillo*.",
        "Remember to use the definite article *el*, not *mi*!",
      ],
      strategy: "Use *me he + participle + el/la + body part*",
      solution: [
        "'I have twisted' = *me he torcido*.",
        "'my ankle' → definite article *el tobillo*.",
        "Answer: **Me he torcido el tobillo.**",
      ],
    },
    {
      id: "exam-w1-q13",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "immediate-vs-simple-future",
      diagram: FOUR_TENSE_BLUEPRINT_SVG,
      question:
        "Use the future-tense blueprint in the diagram. Which sentence correctly translates **'Next summer we will have more free time'** in the **simple future**?",
      options: [
        "El verano que viene tendremos más tiempo libre.",
        "El verano que viene teneremos más tiempo libre.",
        "El verano que viene tendrémos más tiempo libre.",
        "El verano que viene tuvimos más tiempo libre.",
      ],
      answerIndex: 0,
      hints: [
        "Check the irregular stem of *tener* in the right-hand purple box of the diagram.",
        "Look at the note at the bottom right: does the *-emos* ending take a written accent?",
      ],
      strategy: "Combine irregular stem (*tendr-*) with accent-free *-emos*",
      explanation:
        "The irregular simple future stem of *tener* is **tendr-**, and the *nosotros* ending **-emos** is the ONLY simple future ending with NO written accent: **tendremos**. *Teneremos* forgets the irregular stem, *tendrémos* adds a forbidden accent, and *tuvimos* is preterite.",
    },
    {
      id: "exam-w1-q14",
      kind: "short",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "future-holiday-plans",
      question:
        "Translate into Spanish using *me gustaría*:\n\n**I would like to visit Peru because it is fascinating.**",
      answer: {
        type: "text",
        accept: [
          "Me gustaría visitar Perú porque es fascinante",
          "Me gustaría visitar el Perú porque es fascinante",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me gusta visitar Perú porque es fascinante"] },
          feedback: "*Me gusta* means 'I like'; 'I would like' is conditional **me gustaría** (with an accent on *í*).",
        },
        {
          spec: { type: "text", accept: ["Me gustaría visito Perú porque es fascinante"] },
          feedback: "After *me gustaría*, always keep the verb in the infinitive: **visitar**!",
        },
      ],
      hints: [
        "'I would like' = *Me gustaría* (accent on *í*), followed directly by the infinitive *visitar*.",
        "Remember the accent on *Perú* and the cognate adjective *fascinante*.",
      ],
      strategy: "Use *me gustaría + infinitive* for future wishes",
      solution: [
        "'I would like to visit' = *Me gustaría visitar*.",
        "'Peru because it is fascinating' = *Perú porque es fascinante*.",
      ],
    },
    {
      id: "exam-w1-q15",
      kind: "short",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "places-of-interest",
      question:
        "Complete the sightseeing description with the past form of *hay* (**'there was / there were'**):\n\n*En el casco antiguo ______ unas ruinas romanas y una catedral impresionante.*",
      answer: {
        type: "text",
        accept: ["había"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["hay"] },
          feedback: "*Hay* is present tense ('there is/are'). The past descriptive form ('there was/were') is **había**.",
        },
        {
          spec: { type: "text", accept: ["habían"] },
          feedback: "Impersonal *haber* NEVER becomes plural! Always use singular **había**, even before plural nouns like *unas ruinas*.",
        },
      ],
      hints: [
        "Impersonal *haber* for background description in the past stays singular even with plural nouns.",
        "Do not forget the written accent on the **í**.",
      ],
      strategy: "Use invariable *había* for 'there was / there were'",
      solution: [
        "Descriptive 'there was / there were' = **había** (invariable — never *habían*).",
        "*En el casco antiguo **había** unas ruinas romanas...*",
      ],
    },
    {
      id: "exam-w1-q16",
      kind: "short",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "ordering-in-restaurant",
      question:
        "At a restaurant your soup arrives cold and you have no fork. Complete the complaint in Spanish with the 2 missing words (**'is missing a'**):\n\n*Perdone, la sopa está fría y ______ tenedor.*",
      answer: {
        type: "text",
        accept: ["falta un"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["falta una"] },
          feedback: "*Tenedor* ('fork') is masculine (*el tenedor*), so use masculine **un**, not *una*.",
        },
        {
          spec: { type: "text", accept: ["faltan un", "necesita un"] },
          feedback: "With one singular item (*un tenedor*), use singular **falta un**.",
        },
      ],
      hints: [
        "Use the verb *faltar* ('to be missing') in 3rd-person singular: *falta*.",
        "Is *tenedor* ('fork') masculine (*un*) or feminine (*una*)?",
      ],
      strategy: "Use *falta + un/una + utensil* for restaurant problems",
      solution: [
        "*Faltar* agrees with singular *un tenedor* (masculine) → **falta un**.",
        "*Perdone, la sopa está fría y **falta un** tenedor.*",
      ],
    },
    {
      id: "exam-w1-q17",
      kind: "short",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "sport-fitness-stress",
      question:
        "Complete the Spanish sentence with the reflexive verb meaning **'I go to bed'** (present tense of *acostarse*, *o → ue*):\n\n*Entre semana ______ a las diez para descansar bien.*",
      answer: {
        type: "text",
        accept: ["me acuesto", "yo me acuesto"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["me acosto", "acuesto"] },
          feedback: "Check BOTH parts: reflexive pronoun **me** AND the *o → ue* stem change (**me acuesto**)!",
        },
        {
          spec: { type: "text", accept: ["me levanto"] },
          feedback: "*Me levanto* means 'I get up'; 'I go to bed' is **me acuesto**.",
        },
      ],
      hints: [
        "*Acostarse* is reflexive (*me* for *yo*) AND has a boot stem change (*o → ue*).",
        "Put the reflexive pronoun *me* in front of the conjugated verb.",
      ],
      strategy: "Combine reflexive pronoun + boot stem change (*me acuesto*)",
      solution: [
        "*Acostarse* (*yo*): pronoun *me* + *o → ue* stem change *acuest-* + *-o* = **me acuesto**.",
        "*Entre semana **me acuesto** a las diez para descansar bien.*",
      ],
    },
    {
      id: "exam-w1-q18",
      kind: "mcq",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "pharmacy-doctor-remedies",
      diagram: BODY_SYMPTOM_SVG,
      question:
        "Look at Carlos's medical chart in the diagram. Which statement is **TRUE** about his illness and treatment?",
      options: [
        "His stomach has hurt for two days and he must use cream.",
        "His knees hurt and he must go swimming every afternoon.",
        "His throat and ears have hurt for four days and he should rest.",
        "He broke his finger four days ago and needs a small plaster.",
      ],
      answerIndex: 2,
      hints: [
        "Check the left box for Carlos's symptoms (*la garganta, los oídos*) and duration (*desde hace cuatro días*).",
        "Verify the advice in the right box (*tomar dos pastillas, descansar en cama, tomar el jarabe*).",
      ],
      strategy: "Match body parts, *desde hace* duration, and remedies",
      explanation:
        "Carlos's card states *Me duele la garganta*, *Me duelen los oídos*, *desde hace cuatro días* ('for four days'), and his treatment includes *descansar en cama dos días* ('rest in bed for two days').",
    },
    {
      id: "exam-w1-q19",
      kind: "short",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      question:
        "Put **tener** ('to have') into the *yo* preterite to complete the sentence:\n\n*El martes pasado ______ (tener) dolor de cabeza después del partido.*",
      answer: {
        type: "text",
        accept: ["tuve", "yo tuve"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["tení", "yo tení"] },
          feedback: "*Tener* is a UV-stem irregular preterite (*tuv-*), with unaccented endings: **tuve**!",
        },
        {
          spec: { type: "text", accept: ["tuvo", "tengo"] },
          feedback: "*Tuvo* is 'he/she had' and *tengo* is present ('I have'). For *yo* preterite, write **tuve**.",
        },
      ],
      hints: [
        "*Tener* uses the irregular preterite stem *tuv-*.",
        "Irregular preterites like *hice, pude, puse* take *-e* for *yo* with NO accent.",
      ],
      strategy: "Use the UV-group irregular preterites (*tuve, estuve*) with no accent",
      solution: [
        "Irregular stem *tuv-* + unaccented *yo* ending *-e* = **tuve**.",
        "*El martes pasado **tuve** dolor de cabeza después del partido.*",
      ],
    },
    {
      id: "exam-w1-q20",
      kind: "mcq",
      difficulty: "core",
      topicId: "holidays-activities",
      guideRef: "holiday-opinions-narratives",
      question:
        "Which Spanish sentence combines a **contrast connective** with a **justified past opinion** accurately?",
      options: [
        "El hotel fue barato, porque llovió todos los días en la playa.",
        "El hotel era sucia, además lo pasé bomba en la piscina fría.",
        "Fui a Sevilla ayer, sin embargo voy a comer mañana con amigos.",
        "Llovió mucho en Galicia, sin embargo lo pasé genial porque la comida fue increíble.",
      ],
      answerIndex: 3,
      hints: [
        "Look for a logical contrast between a negative point and a positive verdict linked by *sin embargo* ('however').",
        "Check adjective gender agreement (*sucia* with masculine *el hotel* is wrong!) and tense consistency.",
      ],
      strategy: "Check logic, gender agreement, and connective accuracy",
      explanation:
        "**Llovió mucho en Galicia, sin embargo lo pasé genial porque la comida fue increíble** makes logical sense, uses *sin embargo* ('however') to pivot from rain to enjoyment, and justifies the opinion with *porque* + accurate preterite *fue*.",
    },
    {
      id: "exam-w1-q21",
      kind: "mcq",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "writing-hotel-reviews",
      question:
        "In a hotel review, you want to write **'The rooms were modern and comfortable'**. Which Spanish sentence has exact **gender and number agreement**?",
      options: [
        "Las habitaciones fueron moderno y cómodo.",
        "Las habitaciones fueron modernas y cómodas.",
        "Las habitaciones fueron modernos y cómodos.",
        "La habitación fueron modernas y cómodas.",
      ],
      answerIndex: 1,
      hints: [
        "*La habitación* is feminine; in the plural (*las habitaciones*), both adjectives must end in **-as**.",
        "Check that the subject (*las habitaciones*) matches the plural verb *fueron*.",
      ],
      strategy: "Match feminine plural noun (*las habitaciones*) to *-as* adjectives",
      explanation:
        "*Las habitaciones* is feminine plural, so both adjectives take feminine plural *-as*: **modernas y cómodas** (keeping the accent on *cómodas*). All other options break gender or number agreement.",
    },
    {
      id: "exam-w1-q22",
      kind: "mcq",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "hispanic-cuisine-tenses",
      question:
        "Read Marta's food diary:\n\n> *Anoche probé el gazpacho andaluz en un restaurante pequeño. Me pareció refrescante y sabroso, así que la semana que viene probaré las empanadas argentinas.*\n\nWhich tense pair appears in Marta's verbs **probé** and **probaré**?",
      options: [
        "Preterite (*I tried*) and Simple Future (*I will try*)",
        "Present (*I try*) and Immediate Future (*I am going to try*)",
        "Preterite (*he tried*) and Present (*I try*)",
        "Simple Future (*I will try*) and Preterite (*I tried*)",
      ],
      answerIndex: 0,
      hints: [
        "Compare the verb endings: *-é* attached to the stem *prob-* (*probé*) vs *-é* attached to the full infinitive *probar-* (*probaré*).",
        "Check the time clues *Anoche* ('last night') and *la semana que viene* ('next week').",
      ],
      strategy: "Distinguish stem + *-é* (preterite) from infinitive + *-é* (simple future)",
      explanation:
        "**Probé** (stem *prob-* + *-é*, with *anoche*) is *yo* preterite ('I tried'). **Probaré** (full infinitive *probar* + *-é*, with *la semana que viene*) is *yo* simple future ('I will try').",
    },
    {
      id: "exam-w1-q23",
      kind: "short",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "future-health-resolutions",
      question:
        "Put **beber** ('to drink') into the *yo* **simple future** tense:\n\n*A partir del lunes ______ (beber) dos litros de agua todos los días.*",
      answer: {
        type: "text",
        accept: ["beberé", "yo beberé"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["bebé", "yo bebé"] },
          feedback: "Keep the ENTIRE infinitive *beber* before adding *-é*: **beberé** (*bebé* means 'baby'!).",
        },
        {
          spec: { type: "text", accept: ["bebí", "bebo"] },
          feedback: "*Bebí* is preterite and *bebo* is present. For simple future ('I will drink'), add *-é* to the infinitive: **beberé**.",
        },
      ],
      hints: [
        "To form regular simple future, NEVER chop off the *-er* ending — keep the full infinitive *beber*.",
        "Add the *yo* future ending *-é* (with a written accent).",
      ],
      strategy: "Simple future = **full infinitive** + *-é, -ás, -á, -emos, -éis, -án*",
      solution: [
        "Full infinitive *beber* + *-é* = **beberé**.",
        "*A partir del lunes **beberé** dos litros de agua todos los días.*",
      ],
    },

    // -----------------------------------------------------------------------
    // CHALLENGE (q24–q30)
    // -----------------------------------------------------------------------
    {
      id: "exam-w1-q24",
      kind: "short",
      difficulty: "challenge",
      topicId: "body-illness-treatment",
      guideRef: "health-dialogues-past",
      question:
        "Translate into Spanish using **present tense + desde hace**:\n\n**My back has been hurting for three days.**",
      answer: {
        type: "text",
        accept: [
          "Me duele la espalda desde hace tres días",
          "Desde hace tres días me duele la espalda",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duelen la espalda desde hace tres días"] },
          feedback: "*La espalda* ('the back') is singular, so use **me duele** (not plural *me duelen*).",
        },
        {
          spec: { type: "text", accept: ["Me duele mi espalda desde hace tres días"] },
          feedback: "Use the definite article **la espalda** (not *mi espalda*) with *me duele*!",
        },
      ],
      hints: [
        "'My back hurts' = *Me duele la espalda* (singular, definite article *la*).",
        "Add *desde hace tres días* (accent on *í* in *días*) to express an ongoing duration.",
      ],
      strategy: "Use *present tense + desde hace + time* for ongoing symptoms",
      solution: [
        "'My back hurts' = *Me duele la espalda*.",
        "'for three days' (still hurting now) = *desde hace tres días*.",
        "Full sentence: **Me duele la espalda desde hace tres días.**",
      ],
    },
    {
      id: "exam-w1-q25",
      kind: "mcq",
      difficulty: "challenge",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      question:
        "Spot the **ONE** Spanish paragraph below that has **ZERO tense or verb-form errors** across all four Year 9 tenses.",
      options: [
        "Normalmente como sano, pero ayer comí pizza. Mañana voy comer fruta y el año que viene haceré natación.",
        "Normalmente como sano, pero ayer comé pizza. Mañana voy a comer fruta y el año que viene haré natación.",
        "Normalmente como sano, pero ayer comí pizza. Mañana voy a comer fruta y el año que viene haré natación.",
        "Normalmente como sano, pero ayer comí pizza. Mañana voy a como fruta y el año que viene haré natación.",
      ],
      answerIndex: 2,
      hints: [
        "Check four high-risk traps: *-er* preterite ending (*comí*, not *comé*), the **a** in *voy a comer*, the infinitive after *voy a*, and the irregular simple future of *hacer* (*haré*, not *haceré*).",
        "Eliminate any paragraph that breaks even one of those four grammar rules.",
      ],
      strategy: "Audit four grammar checkpoints one by one",
      explanation:
        "**Normalmente como sano, pero ayer comí pizza. Mañana voy a comer fruta y el año que viene haré natación** passes all four checks: present *como*, *-er* preterite *comí*, immediate future *voy a comer*, and irregular simple future *haré*.",
    },
    {
      id: "exam-w1-q26",
      kind: "written",
      difficulty: "challenge",
      topicId: "holidays-activities",
      guideRef: "holiday-opinions-narratives",
      marks: 3,
      question:
        "Write **3–4 sentences in Spanish** comparing your usual holidays with a future dream trip:\n- Where you usually go and with whom (present tense)\n- Where you are going to go next summer (immediate future)\n- One activity you will do there or a wish with a reason",
      modelAnswer:
        "Normalmente voy de vacaciones a la costa con mi familia en agosto. El verano que viene vamos a viajar a Costa Rica en avión. Allí sacaré muchas fotos y me gustaría ver la selva porque es fascinante.",
      markScheme: [
        {
          point: "Describes usual holiday destination/companions in the present tense",
          keywords: ["normalmente", "siempre", "voy", "vamos", "viajo", "viajamos", "familia", "amigos"],
        },
        {
          point: "States a future destination using immediate future (*ir + a + infinitive*)",
          keywords: ["voy a", "vamos a"],
        },
        {
          point: "Includes a future activity/wish (*simple future* or *me gustaría*) with a justification",
          keywords: ["gustaria", "visitar", "sacare", "nadare", "ire", "hare", "vere", "porque", "fascinante", "increible"],
        },
      ],
      hints: [
        "Start with *Normalmente voy... con mi familia* in the present tense.",
        "Switch to *El verano que viene voy a / vamos a + infinitive*, then add a simple future verb or *me gustaría + infinitive* + *porque...*.",
      ],
      strategy: "Pair Present + Immediate Future + Simple Future/Wish + *porque*",
      commonError:
        "Leaving out *a* in *voy a viajar* or forgetting the accent in *me gustaría*.",
    },
    {
      id: "exam-w1-q27",
      kind: "written",
      difficulty: "challenge",
      topicId: "hotels-places-reviews",
      guideRef: "booking-and-problems",
      marks: 3,
      question:
        "You are at reception in a Spanish hotel. Write a polite **3-line dialogue turn in Spanish** to:\n- Ask politely to book a room specifying the room type and number of nights\n- Ask how much it costs per night\n- Politely report one room problem (e.g. broken lift, noise, or no hot water)",
      modelAnswer:
        "Buenas tardes, quisiera reservar una habitación doble para dos noches, por favor. ¿Cuánto cuesta por noche con desayuno incluido? Además, perdone, el aire acondicionado no funciona y hace demasiado ruido.",
      markScheme: [
        {
          point: "Polite booking request specifying room type and duration",
          keywords: ["quisiera", "reservar", "habitacion", "doble", "individual", "noches"],
        },
        {
          point: "Asks clearly about the price per night",
          keywords: ["cuanto cuesta", "cuanto es", "por noche", "precio"],
        },
        {
          point: "Politely states a realistic hotel room problem",
          keywords: ["no funciona", "sucia", "ruido", "agua caliente", "ascensor", "aire acondicionado", "ducha"],
        },
      ],
      hints: [
        "Open politely with *Quisiera reservar una habitación doble/individual para... noches*.",
        "Ask *¿Cuánto cuesta por noche?* and report an issue like *no funciona*, *está sucia*, or *no hay agua caliente*.",
      ],
      strategy: "Use polite *Quisiera*, *¿Cuánto cuesta?*, and a clear complaint phrase",
      commonError:
        "Using *¿Cuántos cuestan?* for a single room instead of singular *¿Cuánto cuesta?*.",
    },
    {
      id: "exam-w1-q28",
      kind: "written",
      difficulty: "challenge",
      topicId: "food-market-restaurant",
      guideRef: "hispanic-cuisine-tenses",
      marks: 4,
      question:
        "Write a **4-sentence Spanish paragraph** about Hispanic food across tenses:\n- Name a Spanish or Latin American dish you like or dislike with an opinion adjective\n- Say what you normally eat or drink at a specific mealtime\n- Describe what you ordered or ate at a restaurant recently (preterite)\n- Say what new dish you will try next time (future)",
      modelAnswer:
        "Me encanta la tortilla española porque es deliciosa y sabrosa. Normalmente desayuno cereales con leche y un zumo de naranja a las siete y media. El sábado pasado pedí paella de verduras en un restaurante del centro. La próxima vez probaré los churros con chocolate.",
      markScheme: [
        {
          point: "Gives an opinion on a Hispanic dish with a descriptive food adjective",
          keywords: ["paella", "tortilla", "gazpacho", "churros", "tacos", "empanadas", "deliciosa", "delicioso", "picante", "salado", "dulce", "sabrosa", "rico", "rica"],
        },
        {
          point: "Describes a normal mealtime habit in the present tense",
          keywords: ["desayuno", "almuerzo", "como", "meriendo", "ceno", "normalmente", "todos los dias"],
        },
        {
          point: "Describes a recent restaurant meal using the preterite tense",
          keywords: ["pedi", "comi", "cene", "probe", "bebi", "ayer", "pasado", "anoche"],
        },
        {
          point: "States a future dish to try using immediate or simple future",
          keywords: ["probare", "comere", "pedire", "voy a probar", "voy a comer", "voy a pedir"],
        },
      ],
      hints: [
        "Pick an iconic dish (*paella, tortilla española, gazpacho, tacos, churros*) and check adjective agreement (*la tortilla es deliciosa*).",
        "Use distinct time phrases and verbs for present (*desayuno/ceno*), preterite (*pedí/comí/probé*), and future (*probaré / voy a probar*).",
      ],
      strategy: "Combine opinion + meal verb + preterite (*pedí/comí*) + future (*probaré*)",
      commonError:
        "Forgetting adjective gender agreement (*la paella es deliciosa*, not *delicioso*).",
    },
    {
      id: "exam-w1-q29",
      kind: "written",
      difficulty: "challenge",
      topicId: "healthy-living-diet",
      guideRef: "giving-health-advice",
      marks: 4,
      question:
        "Your friend feels tired every day and eats too many sweets. Write a **4-sentence Spanish advice note** giving:\n- One positive diet recommendation + infinitive\n- One thing they must avoid / stop doing + infinitive\n- One recommendation about sleep or exercise with a benefit\n- One encouraging future prediction (simple future)",
      modelAnswer:
        "Para estar en forma, deberías comer cinco raciones de fruta y verdura todos los días. No se debe comer tantos dulces ni comida basura entre horas. Además, hay que hacer deporte y dormir ocho horas porque reduce el estrés y da energía. Si cambias tus hábitos, te sentirás mucho mejor y tendrás más energía.",
      markScheme: [
        {
          point: "Positive dietary advice using an advice frame + infinitive",
          keywords: ["deberias", "hay que", "se debe", "tienes que", "fruta", "verdura", "agua", "sana"],
        },
        {
          point: "Negative advice telling the friend what to avoid or reduce",
          keywords: ["no se debe", "evitar", "dejar de", "comida basura", "dulces", "azucar", "refrescos", "grasa"],
        },
        {
          point: "Advice on sleep or exercise linked to a wellbeing benefit",
          keywords: ["dormir", "ejercicio", "deporte", "estres", "energia", "relajarme", "relajarte", "en forma"],
        },
        {
          point: "Includes an encouraging simple future prediction",
          keywords: ["tendras", "estaras", "sentiras", "dormiras", "podras", "seras", "estare", "tendre", "hare"],
        },
      ],
      hints: [
        "Use *deberías + infinitive*, *no se debe + infinitive*, and *hay que + infinitive*.",
        "Add a wellbeing benefit (*reduce el estrés, da energía*) and a *tú* simple future verb (*tendrás, estarás, te sentirás* — remember the accent on *-ás*!).",
      ],
      strategy: "Include positive advice, prohibition, sleep/sport benefit, and simple future",
      commonError:
        "Forgetting the written accent on *tú* simple future endings (*tendrás, estarás, dormirás*).",
    },
    {
      id: "exam-w1-q30",
      kind: "written",
      difficulty: "challenge",
      topicId: "body-illness-treatment",
      guideRef: "health-dialogues-past",
      marks: 4,
      question:
        "Write a short **4-sentence Spanish account of a health problem** covering ALL FOUR points:\n- Say which body part hurts right now and for how long (using *present + duration*)\n- Mention one other symptom or past accident (preterite)\n- Say what the doctor or pharmacist gave or told you\n- Say what you will do to recover (future)",
      modelAnswer:
        "Me duele la rodilla izquierda desde hace tres días. El sábado me caí jugando al fútbol y fui al hospital con mi padre. El médico me dio unas pastillas y una crema para el dolor. Esta semana descansaré en casa y beberé mucha agua.",
      markScheme: [
        {
          point: "States current pain with *me duele(n)* + definite article and *desde hace* duration",
          keywords: ["me duele", "me duelen", "desde hace"],
        },
        {
          point: "Describes another symptom or a past accident in the preterite",
          keywords: ["me cai", "fui", "tuve", "fiebre", "tos", "gripe", "roto", "torcido", "cortado", "mareado", "cansado"],
        },
        {
          point: "Mentions a medical remedy or doctor/pharmacist action",
          keywords: ["pastillas", "jarabe", "crema", "tirita", "receta", "medico", "farmaceutico", "hospital"],
        },
        {
          point: "States a recovery plan in the immediate or simple future",
          keywords: ["descansare", "tomare", "bebere", "ire", "voy a descansar", "voy a tomar", "voy a beber", "me quedare"],
        },
      ],
      hints: [
        "Sentence 1: *Me duele(n) el/la... desde hace... días*.",
        "Sentence 2–3: use preterite (*me caí, fui al hospital, el médico me dio pastillas/jarabe/crema*). Sentence 4: simple future (*descansaré, tomaré*) or *voy a descansar*.",
      ],
      strategy: "Combine *me duele(n) + desde hace* + preterite accident + remedy + future recovery",
      commonError:
        "Using *mi* instead of *el/la* with body parts, or using preterite instead of present with *desde hace*.",
    },
  ],
};
