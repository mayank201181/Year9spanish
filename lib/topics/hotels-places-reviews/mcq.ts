import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Places of Interest, Accommodation & Room Types
  // =========================================================================
  {
    id: "hotels-places-reviews-m1",
    title: "MCQ Paper 1 — Places of Interest & Accommodation Basics",
    questions: [
      {
        id: "hotels-places-reviews-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "places-of-interest",
        strategy: "Use infinitive after se puede",
        question:
          "Complete the sightseeing recommendation accurately: *En Toledo se puede ___ la catedral y el alcázar.*",
        options: ["visito", "visitar", "visité", "visitas"],
        answerIndex: 1,
        hints: [
          "What verb form ALWAYS follows *se puede* (*you can*)?",
        ],
        explanation:
          "**Se puede** is followed directly by an **infinitive**: **se puede visitar**. Conjugated forms like *visito, visité* or *visitas* are incorrect after a modal.",
      },
      {
        id: "hotels-places-reviews-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "places-of-interest",
        strategy: "Había never adds -n for plural nouns",
        question:
          "How do you translate *In the old town there were many ancient ruins* into accurate Spanish?",
        options: [
          "En el casco antiguo había muchas ruinas antiguas.",
          "En el casco antiguo habían muchas ruinas antiguas.",
          "En el casco antiguo hay muchas ruinas antiguas.",
          "En el casco antiguo hubo muchas ruinas antiguos.",
        ],
        answerIndex: 0,
        hints: [
          "Does **había** (*there was / there were*) change when followed by a plural noun?",
        ],
        explanation:
          "**Había** is invariable — it stays **había** for both singular and plural nouns (NEVER *habían*!). Also *las ruinas* is feminine plural (**antiguas**).",
      },
      {
        id: "hotels-places-reviews-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "places-of-interest",
        strategy: "Contract a + el → al and de + el → del",
        question:
          "Fill both gaps accurately: *Fuimos ___ castillo medieval y sacamos fotos ___ mercado.*",
        options: [
          "a el … de el",
          "al … de la",
          "al … del",
          "a la … del",
        ],
        answerIndex: 2,
        hints: [
          "Both *el castillo* and *el mercado* are masculine singular.",
          "Remember BOTH mandatory contractions: *a + el* and *de + el*.",
        ],
        explanation:
          "Both *castillo* and *mercado* are masculine singular, so *a + el* contracts to **al** and *de + el* contracts to **del**.",
      },
      {
        id: "hotels-places-reviews-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hotel-types-facilities",
        strategy: "Match accommodation vocabulary accurately",
        question:
          "Which Spanish phrase means *a youth hostel*?",
        options: [
          "una casa rural",
          "un parador antiguo",
          "un apartamento turístico",
          "un albergue juvenil",
        ],
        answerIndex: 3,
        hints: [
          "Think of the adjective *juvenil* (youth) and the noun *albergue*.",
        ],
        explanation:
          "**Un albergue juvenil** is a youth hostel. *Una casa rural* is a rural guesthouse, *un apartamento turístico* is a holiday flat, and *un parador* is a historic state-run hotel.",
      },
      {
        id: "hotels-places-reviews-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Keep reflexive pronoun with alojarse",
        question:
          "How do you say *Last summer I stayed in a five-star hotel* using **alojarse**?",
        options: [
          "El verano pasado me alojé en un hotel de cinco estrellas.",
          "El verano pasado alojé en un hotel de cinco estrellas.",
          "El verano pasado me alojo en un hotel de cinco estrellas.",
          "El verano pasado se alojé en un hotel de cinco estrellas.",
        ],
        answerIndex: 0,
        hints: [
          "*Alojarse* is reflexive — which pronoun matches *yo*?",
          "Check that the verb is in the **preterite** (*el verano pasado*), not present.",
        ],
        explanation:
          "For *yo* in the preterite, *alojarse* is **me alojé**. Dropping *me*, using *se*, or keeping present *me alojo* are all errors.",
      },
      {
        id: "hotels-places-reviews-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Distinguish board types (media pensión vs pensión completa)",
        question:
          "Read the booking confirmation: *«Habitación familiar en media pensión con vistas al mar.»* What meals are included in **media pensión**?",
        options: [
          "Only breakfast each morning.",
          "Half board (breakfast and one main meal).",
          "Full board (all three meals plus snacks).",
          "Self-catering with no meals provided.",
        ],
        answerIndex: 1,
        hints: [
          "*Media* means *half* (*half board*), whereas *completa* means *full*.",
          "Compare *alojamiento y desayuno* (B&B), *media pensión*, and *pensión completa*.",
        ],
        explanation:
          "**Media pensión** is **half board** (breakfast plus dinner or lunch). *Alojamiento y desayuno* is bed & breakfast, and *pensión completa* is full board.",
      },
      {
        id: "hotels-places-reviews-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Check plural spelling of habitación",
        question:
          "Which phrase is spelled with 100% accurate Spanish accents and gender agreement?",
        options: [
          "dos habitaciónes dobles",
          "dos habitaciones doblos",
          "dos habitaciones dobles",
          "dos habitación dobles",
        ],
        answerIndex: 2,
        hints: [
          "Nouns ending in **-ción** drop their written accent when adding **-es**.",
          "Does the adjective *doble* end in *-e* for both masculine and feminine?",
        ],
        explanation:
          "Singular *habitación* drops its accent in the plural: **habitaciones**, and *doble* becomes **dobles** → **dos habitaciones dobles**.",
      },
      {
        id: "hotels-places-reviews-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "PARA nights, POR price",
        question:
          "Fill BOTH prepositions accurately: *Quisiera reservar una habitación individual ___ tres noches. ¿Cuánto cuesta ___ noche?*",
        options: [
          "por … para",
          "en … por",
          "para … en",
          "para … por",
        ],
        answerIndex: 3,
        hints: [
          "Remember the mnemonic: **PARA** nights, **POR** price!",
          "Booking duration uses *para*; rate per night uses *por*.",
        ],
        explanation:
          "In Spanish hotel bookings, use **para** for the intended length of stay (**para tres noches**) and **por** for the nightly rate (**por noche**).",
      },
      {
        id: "hotels-places-reviews-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Use estar for temporary dirty/broken conditions",
        question:
          "Which complaint sentence uses **ser** and **estar** accurately?",
        options: [
          "Perdone, la habitación está sucia y el aire acondicionado está roto.",
          "Perdone, la habitación es sucia y el aire acondicionado es roto.",
          "Perdone, la habitación está sucio y el aire acondicionado está rota.",
          "Perdone, la habitación es sucio y el aire acondicionado está roto.",
        ],
        answerIndex: 0,
        hints: [
          "Being dirty (*sucia*) or broken (*roto*) is a temporary condition — does that take *ser* or *estar*?",
          "Check gender agreement: *la habitación* (fem.) and *el aire acondicionado* (masc.).",
        ],
        explanation:
          "Temporary states always use **estar**, with exact gender agreement: **la habitación está sucia** (fem.) and **el aire acondicionado está roto** (masc.).",
      },
      {
        id: "hotels-places-reviews-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Agree faltar with the missing noun",
        question:
          "Complete both hotel complaints accurately: *En el baño ___ una toalla y en la cama ___ dos almohadas.*",
        options: [
          "faltan … falta",
          "falta … faltan",
          "falta … falta",
          "faltan … faltan",
        ],
        answerIndex: 1,
        hints: [
          "*Faltar* works like *gustar*: match the verb to the missing item(s)!",
          "One towel (*una toalla*) is singular; two pillows (*dos almohadas*) is plural.",
        ],
        explanation:
          "**Falta** agrees with singular *una toalla*, while **faltan** agrees with plural *dos almohadas*.",
      },
      {
        id: "hotels-places-reviews-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Recognise common hotel problem sentences",
        question:
          "What is the guest complaining about when they say *«Perdone, el ascensor no funciona y no hay agua caliente»*?",
        options: [
          "The car park is full and the Wi-Fi is slow.",
          "The reception is closed and the breakfast is cold.",
          "The lift is not working and there is no hot water.",
          "The balcony is dirty and the sheets are missing.",
        ],
        answerIndex: 2,
        hints: [
          "Break down the two nouns: *el ascensor* and *agua caliente*.",
          "Notice *no funciona* and *no hay*.",
        ],
        explanation:
          "**El ascensor no funciona** means *the lift does not work*, and **no hay agua caliente** means *there is no hot water*.",
      },
      {
        id: "hotels-places-reviews-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Agree me encantó vs me encantaron with noun",
        question:
          "Choose the accurate past opinion verbs: *Por un lado, ___ la piscina climatizada y ___ las vistas al mar.*",
        options: [
          "me encantaron … me encantó",
          "me encantan … me encantó",
          "me encantó … me encantó",
          "me encantó … me encantaron",
        ],
        answerIndex: 3,
        hints: [
          "Look at the noun AFTER each verb: *la piscina* (singular) vs *las vistas* (plural).",
          "Singular takes **-ó**; plural takes **-aron**.",
        ],
        explanation:
          "*La piscina climatizada* is singular → **me encantó**; *las vistas al mar* is plural → **me encantaron**.",
      },
      {
        id: "hotels-places-reviews-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "El personal is grammatically singular",
        question:
          "Which sentence accurately says *The staff was very friendly* in Spanish?",
        options: [
          "El personal fue muy amable.",
          "El personal fueron muy amables.",
          "Los personal fue muy amable.",
          "El personal fueron muy amable.",
        ],
        answerIndex: 0,
        hints: [
          "Check the article before *personal*: **el** (masculine singular!).",
          "Collective nouns like *el personal* take singular verbs and singular adjectives.",
        ],
        explanation:
          "**El personal** (*the staff*) is masculine singular in Spanish, so it takes singular **fue** and singular **amable** (*El personal fue muy amable*).",
      },
      {
        id: "hotels-places-reviews-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Match lo / la recomiendo to noun gender",
        question:
          "A guest finishes a glowing review of **una casa rural**. Which closing sentence is 100% accurate?",
        options: [
          "Lo recomiendo y volverá sin duda.",
          "La recomiendo y volveré sin duda.",
          "La recomiendo y volví sin duda.",
          "Lo recomiendo y volveré sin duda.",
        ],
        answerIndex: 1,
        hints: [
          "What is the gender of **la casa rural**? That chooses between *lo* and *la*.",
          "Which simple future ending means *I will return* (*-é* vs *-á*)?",
        ],
        explanation:
          "*Casa rural* is **feminine**, so *I recommend it* is **la recomiendo**, and *I will return* in the simple future is **volveré**.",
      },
      {
        id: "hotels-places-reviews-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "places-of-interest",
        strategy: "Read short attraction review carefully",
        question:
          "Read Lucía's comment: *«Subimos a la torre de la catedral y aunque había mucha gente, las vistas panorámicas fueron impresionantes.»* What is TRUE about Lucía's visit?",
        options: [
          "The tower was closed so they visited a market.",
          "The cathedral was completely empty that morning.",
          "It was crowded, yet the views were impressive.",
          "She plans to climb the tower next summer instead.",
        ],
        answerIndex: 2,
        hints: [
          "Translate *aunque había mucha gente* (*although there were lots of people*).",
          "Check the tense of *subimos* and *fueron* (past!).",
        ],
        explanation:
          "**Aunque había mucha gente** means it was crowded, and **las vistas panorámicas fueron impresionantes** confirms the views were impressive.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Reception Dialogues, Ser vs Estar & Balanced Reviews
  // =========================================================================
  {
    id: "hotels-places-reviews-m2",
    title: "MCQ Paper 2 — Booking, Complaints, Ser vs Estar & Reviews",
    questions: [
      {
        id: "hotels-places-reviews-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Use estar for hotel location",
        question:
          "Complete this hotel description: *El hotel ___ muy lujoso y ___ cerca del puerto deportivo.*",
        options: [
          "está … es",
          "es … es",
          "está … está",
          "es … está",
        ],
        answerIndex: 3,
        hints: [
          "*Luxurious* (*lujoso*) is a defining characteristic of the hotel.",
          "*Near the marina* (*cerca del puerto deportivo*) is a physical **location**!",
        ],
        explanation:
          "Traits take **ser** (**es muy lujoso**), while physical location ALWAYS takes **estar** (**está cerca del puerto deportivo**).",
      },
      {
        id: "hotels-places-reviews-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Ask polite hotel questions accurately",
        question:
          "You want to ask the receptionist *Is breakfast included?* Which Spanish question is accurate?",
        options: [
          "¿Está incluido el desayuno?",
          "¿Es incluyendo el desayuno?",
          "¿Hay incluida el desayuno?",
          "¿Tiene incluir el desayuno?",
        ],
        answerIndex: 0,
        hints: [
          "Use *estar* + past participle (*incluido*) agreeing with masculine *el desayuno*.",
          "Check that both inverted *¿* and *?* frame the question.",
        ],
        explanation:
          "**¿Está incluido el desayuno?** is the standard polite hotel question, using *estar* + masculine singular *incluido* to match *el desayuno*.",
      },
      {
        id: "hotels-places-reviews-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Spot feminine plural agreement in complaints",
        question:
          "How do you complain accurately that *The bed sheets are dirty*?",
        options: [
          "Las sábanas es sucia.",
          "Las sábanas están sucias.",
          "Las sábanas está sucio.",
          "Las sábanas son sucias.",
        ],
        answerIndex: 1,
        hints: [
          "Being dirty is a temporary condition → **estar**.",
          "*Las sábanas* is feminine plural → match both the verb and adjective.",
        ],
        explanation:
          "*Las sábanas* is feminine plural and dirtiness is a temporary state, so **Las sábanas están sucias** is exact.",
      },
      {
        id: "hotels-places-reviews-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Reflexive pronoun placement in immediate future",
        question:
          "How do you translate *Next month we are going to stay in a holiday apartment* using **alojarse**?",
        options: [
          "El mes que viene vamos a alojar en un apartamento turístico.",
          "El mes que viene vamos alojarse en un apartamento turístico.",
          "El mes que viene vamos a alojarnos en un apartamento turístico.",
          "El mes que viene nos alojamos ayer en un apartamento turístico.",
        ],
        answerIndex: 2,
        hints: [
          "Subject is **nosotros** (*vamos*), so the reflexive pronoun attached to *alojar* must be **-nos**.",
          "Keep the **a** in *vamos **a** alojarnos*.",
        ],
        explanation:
          "For *nosotros*, attach **-nos** to the infinitive after *vamos a*: **vamos a alojarnos** (or *nos vamos a alojar*).",
      },
      {
        id: "hotels-places-reviews-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "places-of-interest",
        strategy: "Distinguish sightseeing venues accurately",
        question:
          "Read the tourist brochure: *«Si te gustan los animales marinos, visita nuestro acuario; si prefieres la historia, explora las ruinas romanas del centro.»* Where should a history fan go?",
        options: [
          "To the modern marina by the port.",
          "To the aquarium for marine animals.",
          "To the theme park outside town.",
          "To the Roman ruins in the centre.",
        ],
        answerIndex: 3,
        hints: [
          "Look after *si prefieres la historia* (*if you prefer history*).",
          "Translate *las ruinas romanas del centro*.",
        ],
        explanation:
          "The brochure directs history lovers to **las ruinas romanas del centro** (the Roman ruins in the centre).",
      },
      {
        id: "hotels-places-reviews-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Use por un lado… por otro lado… to balance ideas",
        question:
          "Complete this balanced review sentence: *___, la habitación era muy espaciosa; ___, hacía demasiado ruido por la noche.*",
        options: [
          "Por un lado … por otro lado",
          "Porque … además",
          "Por eso … también",
          "En resumen … sin duda",
        ],
        answerIndex: 0,
        hints: [
          "The first clause gives a positive point (spacious room) and the second gives a negative point (too noisy).",
          "Pick the classic Spanish pair meaning *On the one hand… on the other hand…*.",
        ],
        explanation:
          "**Por un lado… por otro lado…** (*On the one hand… on the other hand…*) is the hallmark balanced review structure.",
      },
      {
        id: "hotels-places-reviews-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Match me decepcionó vs me decepcionaron",
        question:
          "Choose the accurate verb form: *Me ___ las instalaciones del camping porque no había agua caliente.* (decepcionar)",
        options: [
          "decepcionó",
          "decepcionaron",
          "decepcioné",
          "decepciona",
        ],
        answerIndex: 1,
        hints: [
          "Look at the noun causing the disappointment: **las instalaciones** (plural!).",
          "You need the 3rd-person plural preterite of *decepcionar*.",
        ],
        explanation:
          "*Las instalaciones* is plural, so *decepcionar* must be 3rd-person plural preterite: **Me decepcionaron las instalaciones**.",
      },
      {
        id: "hotels-places-reviews-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Understand hoja de reclamaciones & reembolso",
        question:
          "Read the angry guest's remark: *«Quiero hablar con el director, rellenar una hoja de reclamaciones y pedir un reembolso.»* What is the guest NOT asking for?",
        options: [
          "To speak with the hotel manager.",
          "To fill in an official complaint form.",
          "To extend the booking by two nights.",
          "To request a refund for the stay.",
        ],
        answerIndex: 2,
        hints: [
          "Match each Spanish phrase: *hablar con el director*, *rellenar una hoja de reclamaciones*, *pedir un reembolso*.",
          "Which English option is NOT mentioned at all?",
        ],
        explanation:
          "The guest asks to speak to the manager (*el director*), fill in a complaint form (*hoja de reclamaciones*), and ask for a refund (*un reembolso*) — NOT to extend the booking.",
      },
      {
        id: "hotels-places-reviews-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Spot masculine -ma noun el problema",
        question:
          "Which phrase has 100% accurate gender agreement?",
        options: [
          "una problema muy grave",
          "la problema en la recepción",
          "un problema muy grava",
          "un problema muy grave",
        ],
        answerIndex: 3,
        hints: [
          "Even though *problema* ends in *-a*, it is a Greek-origin **masculine** noun (*el problema*).",
          "Does the adjective *grave* end in *-e* for both genders?",
        ],
        explanation:
          "**El problema** is masculine (**un problema**), and *grave* stays *grave* for masculine and feminine → **un problema muy grave**.",
      },
      {
        id: "hotels-places-reviews-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Read star rating and overall verdict accurately",
        question:
          "Read Marcos's review:\n*«Le doy dos de cinco estrellas al Hotel Costa. Aunque la ubicación cerca de la plaza mayor fue estupenda, el desayuno bufé estaba frío, el wifi no funcionaba y el recepcionista fue maleducado. No lo recomiendo y no volveré nunca.»*\n\nWhat was the ONLY positive aspect Marcos mentions?",
        options: [
          "Its location near the main square.",
          "The friendliness of the receptionist.",
          "The speed of the free hotel Wi-Fi.",
          "The quality of the buffet breakfast.",
        ],
        answerIndex: 0,
        hints: [
          "Scan for the concession clause introduced by **Aunque** (*Although…*).",
          "What does *la ubicación cerca de la plaza mayor fue estupenda* mean?",
        ],
        explanation:
          "Marcos writes **Aunque la ubicación cerca de la plaza mayor fue estupenda** — the location near the main square was the sole bright spot, while breakfast, Wi-Fi and the receptionist were all poor.",
      },
      {
        id: "hotels-places-reviews-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "places-of-interest",
        strategy: "Contrast present hay, past había and future va a haber",
        question:
          "Complete all three gaps in chronological order (**Past → Present → Future**): *El año pasado ___ un museo pequeño; hoy ___ una galería moderna; el año que viene ___ un jardín botánico.*",
        options: [
          "hay … había … habrá",
          "había … hay … va a haber",
          "habían … hay … va a haber",
          "hubo … había … hay",
        ],
        answerIndex: 1,
        hints: [
          "*El año pasado* → past (*había*), *hoy* → present (*hay*), *el año que viene* → future (*va a haber / habrá*).",
          "Never add *-n* to *había*!",
        ],
        explanation:
          "**Había** (there was) → **hay** (there is) → **va a haber** (there is going to be) aligns all three time markers accurately.",
      },
      {
        id: "hotels-places-reviews-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Distinguish no funciona (sg.) vs no funcionan (pl.)",
        question:
          "Choose the accurate verbs: *En mi habitación la ducha ___ y las luces del baño ___.*",
        options: [
          "no funcionan … no funciona",
          "no funciona … no funciona",
          "no funciona … no funcionan",
          "no funcionó … no funcionar",
        ],
        answerIndex: 2,
        hints: [
          "*La ducha* (the shower) is singular; *las luces* (the lights) is plural.",
          "Match *funciona* (sg.) and *funcionan* (pl.) to their subjects.",
        ],
        explanation:
          "Singular *la ducha* takes **no funciona**, while plural *las luces* takes **no funcionan**.",
      },
      {
        id: "hotels-places-reviews-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hotel-types-facilities",
        strategy: "Choose exact adjective agreement with casa rural",
        question:
          "Complete accurately: *Nos alojamos en una casa rural muy ___ y ___ en el norte de España.*",
        options: [
          "acogedor … luminoso",
          "acogedores … luminosas",
          "acogedor … luminosa",
          "acogedora … luminosa",
        ],
        answerIndex: 3,
        hints: [
          "Check the gender of **una casa rural** (feminine singular).",
          "Adjectives ending in **-or** (*acogedor*) add **-a** in the feminine (**acogedora**).",
        ],
        explanation:
          "*Una casa rural* is feminine singular, so *acogedor* becomes **acogedora** and *luminoso* becomes **luminosa**.",
      },
      {
        id: "hotels-places-reviews-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Recognise authentic double negative in Spanish",
        question:
          "How do you write *I will never return to that hotel* in accurate Spain-standard Spanish?",
        options: [
          "No volveré nunca a ese hotel.",
          "No volverá nunca a ese hotel.",
          "Volveré no nunca a ese hotel.",
          "No volví nunca a ese hotel.",
        ],
        answerIndex: 0,
        hints: [
          "When *nunca* follows the verb, Spanish puts **no** before the verb too (*no + verb + nunca*).",
          "Check the tense: *I will return* = simple future **volveré** (not preterite *volví* or *él/ella* *volverá*).",
        ],
        explanation:
          "**No volveré nunca** pairs the *yo* simple future (**volveré**) with Spain's standard double-negative frame (*no … nunca*).",
      },
      {
        id: "hotels-places-reviews-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "booking-and-problems",
        strategy: "Read reception dialogue for resolution",
        question:
          "Read the dialogue:\n— *Huésped: Disculpe, hace demasiado ruido en mi habitación porque está al lado del ascensor. Quiero cambiar de habitación.*\n— *Recepcionista: Lo siento mucho. Le doy la llave de una habitación más tranquila en la tercera planta sin coste adicional.*\n\nHow does the receptionist solve the problem?",
        options: [
          "By repairing the noisy lift immediately.",
          "By giving the guest a quieter room on the third floor for free.",
          "By offering a refund and moving the guest to another hotel.",
          "By including free buffet breakfast for the next two mornings.",
        ],
        answerIndex: 1,
        hints: [
          "Translate *una habitación más tranquila en la tercera planta*.",
          "Check what *sin coste adicional* means (*at no extra cost*).",
        ],
        explanation:
          "The receptionist hands over the key to **a quieter room on the third floor at no extra cost** (*sin coste adicional*).",
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Sightseeing, Error-Spotting & Authentic Reviews
  // =========================================================================
  {
    id: "hotels-places-reviews-m3",
    title: "MCQ Paper 3 — Sightseeing Nuance, Error-Spotting & Reviews",
    questions: [
      {
        id: "hotels-places-reviews-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "places-of-interest",
        strategy: "Negative se puede + infinitive rule",
        question:
          "A museum sign reads: *«No se puede sacar fotos con flash.»* What does it tell visitors?",
        options: [
          "You cannot take flash photos.",
          "You must pay extra for a guided tour.",
          "You can buy postcards at the exit.",
          "You should leave suitcases in reception.",
        ],
        answerIndex: 0,
        hints: [
          "*No se puede* = *you cannot / it is not permitted to*.",
          "Translate *sacar fotos con flash*.",
        ],
        explanation:
          "**No se puede sacar fotos con flash** means **you cannot take photos with a flash**.",
      },
      {
        id: "hotels-places-reviews-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Spot the ONLY accurate hotel description",
        question:
          "Three of these sentences contain a grammar mistake. Which ONE is 100% accurate?",
        options: [
          "El año pasado alojé en un camping muy barato.",
          "El año pasado me alojé en un camping muy barato.",
          "El año pasado me alojó en un camping muy barato.",
          "El año pasado me alojé a un camping muy barato.",
        ],
        answerIndex: 1,
        hints: [
          "Check three details: reflexive pronoun *me*, *yo* preterite ending **-é**, and location preposition **en**.",
          "Staying *in* accommodation uses *en*, never *a*.",
        ],
        explanation:
          "**Me alojé en un camping muy barato** has the *yo* reflexive pronoun (**me**), the *yo* preterite (**alojé**), and the location preposition (**en**).",
      },
      {
        id: "hotels-places-reviews-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Translate polite request with poder + infinitive",
        question:
          "Which Spanish question politely asks *Can you clean the room, please?*",
        options: [
          "¿Puedo limpiar la habitación, por favor?",
          "¿Puede limpia la habitación, por favor?",
          "¿Puede limpiar la habitación, por favor?",
          "¿Pueden limpié la habitación, por favor?",
        ],
        answerIndex: 2,
        hints: [
          "Formal *usted* (*can you*) uses **puede**, whereas *puedo* means *can I*!",
          "Always follow *puede* with the **infinitive** (*limpiar*).",
        ],
        explanation:
          "**¿Puede limpiar la habitación, por favor?** uses formal *usted* (**puede**) + infinitive (**limpiar**). *¿Puedo limpiar…?* would mean *Can I clean…?*",
      },
      {
        id: "hotels-places-reviews-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-hotel-reviews",
        strategy: "Compare two conflicting guest reviews",
        question:
          "Read two reviews of *Hostal Sol*:\n- **Ana (★★★★☆):** *«Habitaciones limpias, desayuno excelente y muy cerca del museo. Solo el ascensor era lento.»*\n- **Pablo (★★☆☆☆):** *«El personal fue amable, pero mi habitación era pequeña y hacía demasiado ruido por la calle.»*\n\nWhich detail is ONLY criticised by Pablo?",
        options: [
          "The slowness of the lift.",
          "The distance from the museum.",
          "The cold buffet breakfast.",
          "The noise from the street.",
        ],
        answerIndex: 3,
        hints: [
          "Check Pablo's criticisms after *pero*: *pequeña* and *demasiado ruido por la calle*.",
          "Notice Ana mentions the slow lift, NOT street noise.",
        ],
        explanation:
          "Pablo complains that his room was small and **hacía demasiado ruido por la calle** (there was too much noise from the street), whereas Ana only mentions the slow lift.",
      },
      {
        id: "hotels-places-reviews-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "places-of-interest",
        strategy: "Conjugate pasear in yo preterite",
        question:
          "Complete in the **yo** preterite (*I strolled*): *Por la tarde ___ por la plaza mayor y compré una entrada para el teatro.* (pasear)",
        options: ["paseé", "paseo", "paseó", "paseí"],
        answerIndex: 0,
        hints: [
          "Drop *-ar* from *pasear* to leave the stem *pase-*.",
          "Attach the regular -AR *yo* preterite ending **-é** — yes, it has double *e*!",
        ],
        explanation:
          "Stem *pase-* + *-é* gives **paseé** (with both *e*s kept!). *Paseo* is present (*I stroll*) and *paseó* is *él/ella*.",
      },
      {
        id: "hotels-places-reviews-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Match simple future of alojarse",
        question:
          "How do you write *Next summer I will stay in a historic parador* using the **simple future** of **alojarse**?",
        options: [
          "El próximo verano alojaré en un parador histórico.",
          "El próximo verano me alojaré en un parador histórico.",
          "El próximo verano me alojé en un parador histórico.",
          "El próximo verano me alojará en un parador histórico.",
        ],
        answerIndex: 1,
        hints: [
          "Place reflexive pronoun **me** before the simple future verb.",
          "Simple future *yo* = full infinitive (*alojar*) + **-é**.",
        ],
        explanation:
          "**Me alojaré** puts *me* before the simple future *yo* form (*alojar + -é*). *Me alojé* is preterite and *me alojará* is 3rd-person singular.",
      },
      {
        id: "hotels-places-reviews-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "booking-and-problems",
        strategy: "Spot the ONLY sentence with a ser/estar or agreement error",
        question:
          "Three of these hotel sentences are 100% accurate. Which ONE has a grammar mistake?",
        options: [
          "El hotel está cerca de la estación de tren.",
          "La piscina climatizada es muy grande y moderna.",
          "El personal del restaurante son muy simpáticos.",
          "No hay agua caliente en mi ducha hoy.",
        ],
        answerIndex: 2,
        hints: [
          "Check *estar* for location, *no hay* for absence, and whether *el personal* is singular or plural!",
          "Does *el personal* take *es simpático* or *son simpáticos*?",
        ],
        explanation:
          "**El personal** is grammatically **singular**, so it MUST be *El personal del restaurante **es** muy **simpático*** (not *son simpáticos*!).",
      },
      {
        id: "hotels-places-reviews-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Distinguish me pareció (sg.) vs me parecieron (pl.)",
        question:
          "Complete accurately: *El precio ___ un poco caro, pero las habitaciones ___ muy cómodas.* (parecer, preterite)",
        options: [
          "me parecieron … me pareció",
          "me parece … me parecieron",
          "me pareció … me pareció",
          "me pareció … me parecieron",
        ],
        answerIndex: 3,
        hints: [
          "*El precio* is singular; *las habitaciones* is plural.",
          "Both halves are past tense (*preterite*): *-ió* vs *-ieron*.",
        ],
        explanation:
          "Singular *el precio* takes **me pareció**, while plural *las habitaciones* takes **me parecieron**.",
      },
      {
        id: "hotels-places-reviews-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "places-of-interest",
        strategy: "Contrast Spanish attraction nouns",
        question:
          "A travel blogger writes: *«Lo mejor de Barcelona fue el casco antiguo y la visita guiada por el palacio.»* What did the blogger enjoy most?",
        options: [
          "The old town and the guided palace tour.",
          "The theme park and the football stadium.",
          "The botanical garden and the city market.",
          "The modern marina and the art gallery.",
        ],
        answerIndex: 0,
        hints: [
          "Focus on *el casco antiguo* and *la visita guiada por el palacio*.",
          "Remember *casco antiguo* = historic old town.",
        ],
        explanation:
          "**El casco antiguo** = the old town, and **la visita guiada por el palacio** = the guided tour of the palace.",
      },
      {
        id: "hotels-places-reviews-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hotel-types-facilities",
        strategy: "Check vocabulary for camping vs luxury hotel",
        question:
          "Read: *«Prefiero alojarme en un camping con tienda de campaña porque es mucho más económico y estoy al aire libre.»* Why does the speaker prefer camping?",
        options: [
          "Because there is free room service and a gym.",
          "Because it is much cheaper and outdoors.",
          "Because every tent has a heated swimming pool.",
          "Because full board meals are included daily.",
        ],
        answerIndex: 1,
        hints: [
          "Translate *más económico* and *al aire libre*.",
          "Note *tienda de campaña* = tent.",
        ],
        explanation:
          "**Más económico** means cheaper/more affordable, and **al aire libre** means outdoors / in the open air.",
      },
      {
        id: "hotels-places-reviews-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "booking-and-problems",
        strategy: "Translate past complaint using reflexive quejarse",
        question:
          "How do you write *Yesterday I complained to the receptionist because there was no soap* using **quejarse**?",
        options: [
          "Ayer quejé al recepcionista porque no hay jabón.",
          "Ayer me quejo al recepcionista porque no había jabón.",
          "Ayer me quejé al recepcionista porque no había jabón.",
          "Ayer me quejó al recepcionista porque no había jabón.",
        ],
        answerIndex: 2,
        hints: [
          "*Quejarse* is reflexive (*me quejé* in *yo* preterite).",
          "In a past narrative (*Ayer*), *there was no soap* uses **no había jabón** (not present *no hay*).",
        ],
        explanation:
          "**Me quejé** (*yo* preterite of *quejarse*) + **no había jabón** (*there was no soap*) keeps both verbs accurately in the past.",
      },
      {
        id: "hotels-places-reviews-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-hotel-reviews",
        strategy: "Check Spanish evaluative antonyms",
        question:
          "Which pair of hotel adjectives are exact **opposites**?",
        options: [
          "limpio / luminoso",
          "ruidoso / incómodo",
          "espacioso / acogedor",
          "amable / maleducado",
        ],
        answerIndex: 3,
        hints: [
          "Translate each adjective in every pair.",
          "*Amable* = kind/polite; what is the opposite?",
        ],
        explanation:
          "**Amable** (kind/polite) and **maleducado** (rude/impolite) are exact opposites. The other pairs are related qualities rather than antonyms.",
      },
      {
        id: "hotels-places-reviews-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "places-of-interest",
        strategy: "Identify future visit plans inside a review",
        question:
          "Read Sofía's review of Córdoba:\n*«Me alojé tres noches cerca del puente romano. Visité la Mezquita-Catedral y me encantó su arquitectura. El año que viene volveré en primavera porque quiero ver los patios con flores y visitar el jardín botánico.»*\n\nWhich activity did Sofía NOT do yet, but plans for next spring?",
        options: [
          "Visiting the botanical garden.",
          "Staying near the Roman bridge.",
          "Visiting the Mosque-Cathedral.",
          "Admiring the cathedral's architecture.",
        ],
        answerIndex: 0,
        hints: [
          "Separate the preterite verbs (*me alojé, visité, me encantó*) from the future sentence (*El año que viene volveré…*).",
          "Look at what follows *quiero ver… y visitar…*.",
        ],
        explanation:
          "She already stayed near the bridge and visited the Mosque-Cathedral; next spring (*el año que viene*) she plans to see the flower courtyards and **visit the botanical garden** (*visitar el jardín botánico*).",
      },
      {
        id: "hotels-places-reviews-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "booking-and-problems",
        strategy: "Recognise polite time question for meals",
        question:
          "Which question accurately asks *What time is breakfast served?*",
        options: [
          "¿Dónde está el comedor del hotel?",
          "¿A qué hora se sirve el desayuno?",
          "¿Cuánto cuesta la pensión completa?",
          "¿A qué hora sale el ascensor?",
        ],
        answerIndex: 1,
        hints: [
          "*At what time?* = **¿A qué hora…?**",
          "*Is served* = **se sirve** (from *servir*).",
        ],
        explanation:
          "**¿A qué hora se sirve el desayuno?** translates *What time is breakfast served?* cleanly and naturally.",
      },
      {
        id: "hotels-places-reviews-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-hotel-reviews",
        strategy: "Audit a complete balanced hotel review",
        question:
          "Which mini-review has ZERO errors in *ser/estar*, agreement, *había*, and past opinion verbs?",
        options: [
          "Me alojé en un hotel moderno. Por un lado, me encantó las vistas y el personal fueron amables. Por otro lado, la habitación es sucia.",
          "Me alojé en un hotel moderno. Por un lado, me encantaron las vistas y el personal fue amable. Por otro lado, había demasiados ruidos y la habitación es sucia.",
          "Me alojé en un hotel moderno. Por un lado, me encantaron las vistas y el personal fue amable. Por otro lado, la habitación estaba sucia, así que no volveré nunca.",
          "Alojé en un hotel moderno. Por un lado, me encantaron las vistas y el personal fue amable. Por otro lado, la habitación estaba sucia, así que no volveré nunca.",
        ],
        answerIndex: 2,
        hints: [
          "Audit four checkpoints: reflexive **me alojé**, plural **me encantaron las vistas**, singular **el personal fue amable**, and *estar* for temporary dirtiness (**estaba sucia**).",
          "Spot which option passes ALL four checks without a single slip!",
        ],
        explanation:
          "**Me alojé** (reflexive) + **me encantaron las vistas** (plural agreement) + **el personal fue amable** (singular collective) + **la habitación estaba sucia** (*estar* for temporary state) + **no volveré nunca** is 100% spotless.",
      },
    ],
  },
];
