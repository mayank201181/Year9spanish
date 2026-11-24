import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "hotels-places-reviews-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "places-of-interest",
      strategy: "Use invariable había for past existence",
      question:
        "Complete with the past form of *hay* (*there were*): *En el centro histórico ___ muchos monumentos.*",
      answer: { type: "text", accept: ["había"], display: "había" },
      traps: [
        { spec: { type: "text", accept: ["habían"] }, feedback: "*Había* NEVER adds *-n*, even before plural nouns! Write **había**." },
        { spec: { type: "text", accept: ["hay"] }, feedback: "*Hay* is present tense (*there are*). You need past **había**." },
      ],
      hints: [
        "Does *there was / there were* change for plural nouns in Spanish?",
      ],
      solution: [
        "Past existence (*there was / there were*) is always **había** (accent on *í*, no *-n*).",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "places-of-interest",
      strategy: "Infinitive after se puede",
      question:
        "Which phrase translates *You can climb the tower*?",
      options: [
        "Se puede subes a la torre.",
        "Se puede subir a la torre.",
        "Se puede subí a la torre.",
        "Se pueden sube a la torre.",
      ],
      answerIndex: 1,
      hints: [
        "Use the unconjugated infinitive immediately after **se puede**.",
      ],
      explanation:
        "**Se puede + infinitive** → **Se puede subir a la torre**.",
    },
    {
      id: "hotels-places-reviews-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "hotel-types-facilities",
      strategy: "Conjugate alojarse in yo preterite",
      question:
        "Complete with **alojarse** in the **yo** preterite (*I stayed*): *El año pasado ___ en un hotel de cuatro estrellas.*",
      answer: {
        type: "text",
        accept: ["me alojé", "yo me alojé"],
        display: "me alojé",
      },
      traps: [
        { spec: { type: "text", accept: ["alojé"] }, feedback: "*Alojarse* is reflexive — don't forget the pronoun **me** (*me alojé*)!" },
        { spec: { type: "text", accept: ["me alojo"] }, feedback: "*Me alojo* is present tense (*I stay*). *El año pasado* needs preterite **me alojé**." },
      ],
      hints: [
        "Include the *yo* reflexive pronoun before the -AR *yo* preterite ending.",
      ],
      solution: [
        "Reflexive pronoun for *yo* = **me**.",
        "Preterite *yo* of *alojar* = **alojé** → **me alojé**.",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "hotel-types-facilities",
      strategy: "Match accommodation & board terms",
      question:
        "What does **pensión completa** mean when booking a Spanish hotel?",
      options: [
        "Full board (all meals included).",
        "Half board (breakfast and dinner).",
        "Room only (no meals included).",
        "Bed and breakfast only.",
      ],
      answerIndex: 0,
      hints: [
        "*Completa* = complete / full.",
        "Contrast *media pensión* (half board) with *pensión completa*.",
      ],
      explanation:
        "**Pensión completa** means **full board** (breakfast, lunch and dinner included).",
    },
    {
      id: "hotels-places-reviews-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "booking-and-problems",
      strategy: "Use PARA for booking length",
      question:
        "Write the single missing preposition (**para** or **por**) for booking duration: *Quisiera reservar una habitación doble ___ cuatro noches.*",
      answer: { type: "text", accept: ["para"], display: "para" },
      traps: [
        { spec: { type: "text", accept: ["por"] }, feedback: "Remember *PARA nights, POR price* — use **para** cuatro noches!" },
      ],
      hints: [
        "Remember the booking rule: **PARA** nights, **POR** price.",
        "Here we are stating the number of nights booked.",
      ],
      solution: [
        "Booking length uses **para**: *para cuatro noches*.",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "booking-and-problems",
      strategy: "Use estar for temporary dirty condition",
      question:
        "Type the missing present verb (*es* or *está*) to complain: *Perdone, mi habitación ___ muy sucia.*",
      answer: { type: "text", accept: ["está"], display: "está" },
      traps: [
        { spec: { type: "text", accept: ["es"] }, feedback: "Being dirty is a temporary condition, so Spanish ALWAYS uses **está** (*estar*), not *es*!" },
      ],
      hints: [
        "Is a room being dirty a permanent trait or a temporary state?",
        "Check the accent on the 3rd-person singular of *estar*.",
      ],
      solution: [
        "Temporary states use *estar* → **está** (*La habitación está muy sucia*).",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "booking-and-problems",
      strategy: "Agree faltar with plural noun",
      question:
        "How do you tell reception *Two towels are missing*?",
      options: [
        "Falta dos toallas.",
        "No funciona dos toallas.",
        "Faltan dos toallas.",
        "Están falta dos toallas.",
      ],
      answerIndex: 2,
      hints: [
        "*Faltar* agrees with the missing items, just like *gustar*.",
        "*Dos toallas* is plural!",
      ],
      explanation:
        "Plural *dos toallas* requires plural **faltan**: **Faltan dos toallas.**",
    },
    {
      id: "hotels-places-reviews-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "writing-hotel-reviews",
      strategy: "Plural agreement on me encantaron",
      question:
        "Put **encantar** into the preterite to match the plural noun: *En el hotel me ___ las vistas al mar.*",
      answer: { type: "text", accept: ["encantaron"], display: "encantaron" },
      traps: [
        { spec: { type: "text", accept: ["encantó"] }, feedback: "*Las vistas* is **plural**, so use **encantaron** (not singular *encantó*)!" },
        { spec: { type: "text", accept: ["encantan"] }, feedback: "*Encantan* is present tense; the prompt asks for the **preterite** (**encantaron**)." },
      ],
      hints: [
        "Check whether *las vistas* is singular or plural.",
        "Use the 3rd-person plural preterite of *encantar* (*-aron*).",
      ],
      solution: [
        "*Las vistas* is plural → 3rd-person plural preterite: **encantaron** (*me encantaron las vistas*).",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "writing-hotel-reviews",
      strategy: "Simple future of volver in review verdict",
      question:
        "Translate into Spanish using the **simple future**: *I will definitely return.* (Use *volver* + *sin duda*.)",
      answer: {
        type: "text",
        accept: ["Volveré sin duda", "Volveré sin duda.", "Yo volveré sin duda"],
        display: "Volveré sin duda.",
      },
      traps: [
        { spec: { type: "text", accept: ["Volví sin duda"] }, feedback: "*Volví* is preterite (*I returned*). Simple future *yo* is **volveré**." },
        { spec: { type: "text", accept: ["Volverá sin duda"] }, feedback: "*Volverá* means *he/she will return*; use **-é** for *yo*." },
      ],
      hints: [
        "Simple future keeps the full infinitive (*volver*) + accented *yo* ending **-é**.",
        "Notice there is NO *o→ue* stem change in the simple future!",
      ],
      solution: [
        "Simple future *yo* of *volver* = **volveré**.",
        "Add *sin duda* → **Volveré sin duda.**",
      ],
    },
    {
      id: "hotels-places-reviews-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "writing-hotel-reviews",
      strategy: "Match direct object pronoun lo vs la",
      question:
        "You are reviewing **un hotel de cinco estrellas**. Which sentence correctly translates *I recommend it*?",
      options: [
        "La recomiendo.",
        "Les recomiendo.",
        "Me recomiendo.",
        "Lo recomiendo.",
      ],
      answerIndex: 3,
      hints: [
        "Check the gender of *el hotel* (masculine singular).",
        "Use **lo** for masculine singular *it*, **la** for feminine singular *it*.",
      ],
      explanation:
        "*El hotel* is masculine singular, so *I recommend it* is **Lo recomiendo**.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 Qs each, incl. 3-4 written per paper)
  // =========================================================================
  papers: [
    {
      id: "hotels-places-reviews-p1",
      title: "Practice Paper 1 — Sightseeing, Accommodation & Booking",
      questions: [
        {
          id: "hotels-places-reviews-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "places-of-interest",
          strategy: "Contract de + el → del",
          question:
            "Write the missing **three-letter contraction** to complete: *El hotel está muy cerca ___ puerto deportivo.*",
          answer: { type: "text", accept: ["del"], display: "del" },
          traps: [
            { spec: { type: "text", accept: ["de el"] }, feedback: "Spanish ALWAYS contracts *de + el* into **del**!" },
            { spec: { type: "text", accept: ["al"] }, feedback: "*Cerca* takes **de**, not *a*: *cerca de + el = cerca **del***." },
          ],
          hints: [
            "*Cerca de* + *el puerto* merges *de + el* into one word.",
          ],
          solution: [
            "*de + el* contracts obligatorily to **del** (*cerca del puerto deportivo*).",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "places-of-interest",
          strategy: "Translate sightseeing sentence with se puede",
          question:
            "Translate into Spanish: *In Madrid you can visit the museum.* (Use *se puede*.)",
          answer: {
            type: "text",
            accept: [
              "En Madrid se puede visitar el museo",
              "En Madrid se puede visitar el museo.",
            ],
            display: "En Madrid se puede visitar el museo.",
          },
          traps: [
            { spec: { type: "text", accept: ["En Madrid se puede visitas el museo"] }, feedback: "Always use the infinitive (**visitar**) after *se puede*!" },
          ],
          hints: [
            "Follow **se puede** directly with the infinitive *visitar*.",
          ],
          solution: [
            "*In Madrid* = **En Madrid**; *you can visit the museum* = **se puede visitar el museo**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "places-of-interest",
          strategy: "Match sightseeing vocabulary",
          question:
            "Which attraction is described by: *«Es un lugar al aire libre con muchas plantas y árboles exóticos donde se puede pasear tranquilamente»*?",
          options: [
            "el jardín botánico",
            "el estadio de fútbol",
            "el parque temático",
            "el centro comercial",
          ],
          answerIndex: 0,
          hints: [
            "Look for key clues: *al aire libre* (outdoors), *plantas y árboles exóticos* (exotic plants and trees).",
            "Which venue features plants and trees?",
          ],
          explanation:
            "Exotic plants and trees where you can stroll peacefully describe **el jardín botánico** (the botanical garden).",
        },
        {
          id: "hotels-places-reviews-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "hotel-types-facilities",
          strategy: "Immediate future of alojarse (yo)",
          question:
            "Translate into Spanish using the **immediate future** of *alojarse*: *Next summer I am going to stay in a campsite.*",
          answer: {
            type: "text",
            accept: [
              "El próximo verano voy a alojarme en un camping",
              "El próximo verano voy a alojarme en un camping.",
              "El próximo verano me voy a alojar en un camping",
              "El próximo verano me voy a alojar en un camping.",
              "El verano que viene voy a alojarme en un camping",
              "El verano que viene me voy a alojar en un camping",
            ],
            display: "El próximo verano voy a alojarme en un camping.",
          },
          traps: [
            { spec: { type: "text", accept: ["El próximo verano voy a alojar en un camping"] }, feedback: "Don't drop the reflexive pronoun **me**: *voy a alojar**me*** (or ***me** voy a alojar*)!" },
            { spec: { type: "text", accept: ["El próximo verano voy alojarme en un camping"] }, feedback: "Keep **a** in the immediate future: *voy **a** alojarme*!" },
          ],
          hints: [
            "Immediate future of reflexive *alojarse* (*yo*): **voy a alojarme** or **me voy a alojar**.",
            "Remember staying *in* accommodation uses **en** (*en un camping*).",
          ],
          solution: [
            "*Next summer* = **El próximo verano** (or *El verano que viene*).",
            "*I am going to stay* = **voy a alojarme** (or **me voy a alojar**).",
            "*in a campsite* = **en un camping**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "hotel-types-facilities",
          strategy: "Translate room & view phrase with contraction",
          question:
            "Translate into Spanish: *a double room with sea views*.",
          answer: {
            type: "text",
            accept: ["una habitación doble con vistas al mar"],
            display: "una habitación doble con vistas al mar",
          },
          traps: [
            { spec: { type: "text", accept: ["un habitación doble con vistas al mar"] }, feedback: "*Habitación* is **feminine** (**una** habitación)!" },
            { spec: { type: "text", accept: ["una habitación doble con vistas a el mar"] }, feedback: "Contract *a + el* into **al**: *con vistas **al** mar*." },
          ],
          hints: [
            "*Habitación* is feminine and carries an accent on *-ón*.",
            "Contract *a + el mar* into **al mar**.",
          ],
          solution: [
            "*a double room* = **una habitación doble**.",
            "*with sea views* = **con vistas al mar**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "hotel-types-facilities",
          strategy: "Plural spelling rule for -ción nouns",
          question:
            "Write the plural of **la habitación** (include the plural definite article *las*).",
          answer: { type: "text", accept: ["las habitaciones"], display: "las habitaciones" },
          traps: [
            { spec: { type: "text", accept: ["las habitaciónes"] }, feedback: "Nouns ending in *-ción* DROP their accent when adding *-es*: **las habitaciones**!" },
          ],
          hints: [
            "Change *la* to *las* and add *-es* to *habitación*.",
            "Check whether the written accent stays or disappears in the plural!",
          ],
          solution: [
            "Add *-es* and drop the accent → **las habitaciones**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Polite price question with por noche",
          question:
            "Translate into Spanish: *How much does it cost per night?* (Include accents!)",
          answer: {
            type: "text",
            accept: [
              "¿Cuánto cuesta por noche?",
              "Cuánto cuesta por noche",
            ],
            display: "¿Cuánto cuesta por noche?",
          },
          traps: [
            { spec: { type: "text", accept: ["¿Cuánto cuesta para noche?", "Cuánto cuesta para noche"] }, feedback: "Use **por noche** for price per night (not *para*)!" },
          ],
          hints: [
            "Question word *How much?* = **¿Cuánto…?** (with accent on *á*).",
            "Remember *POR price*: **por noche**.",
          ],
          solution: [
            "*How much does it cost* = **¿Cuánto cuesta**; *per night* = **por noche?**",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Ser vs Estar location check",
          question:
            "Fill the gap with **es** or **está**: *El albergue juvenil ___ al lado de la estación de tren.*",
          answer: { type: "text", accept: ["está"], display: "está" },
          traps: [
            { spec: { type: "text", accept: ["es"] }, feedback: "Location ALWAYS uses **estar** (**está**), even for permanent buildings!" },
          ],
          hints: [
            "*Al lado de la estación* tells us **where** the hostel is located.",
            "Does location take *ser* or *estar* in Spanish?",
          ],
          solution: [
            "Physical location always takes *estar* → **está**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Identify exact complaint meaning",
          question:
            "Which Spanish complaint matches *The air conditioning is broken and I want to change rooms*?",
          options: [
            "El aire acondicionado no está incluido y quiero pedir un reembolso.",
            "El aire acondicionado está roto y quiero cambiar de habitación.",
            "La calefacción está sucia y quiero reservar otra habitación.",
            "El aire acondicionado está frío y quiero hablar con el director.",
          ],
          answerIndex: 1,
          hints: [
            "*Broken* = **roto** (with *estar*: *está roto*).",
            "*To change rooms* = **cambiar de habitación**.",
          ],
          explanation:
            "**El aire acondicionado está roto y quiero cambiar de habitación** translates every element accurately.",
        },
        {
          id: "hotels-places-reviews-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Singular agreement on me decepcionó",
          question:
            "Conjugate **decepcionar** in the preterite to match the singular noun: *Por otro lado, me ___ el desayuno porque estaba frío.*",
          answer: { type: "text", accept: ["decepcionó"], display: "decepcionó" },
          traps: [
            { spec: { type: "text", accept: ["decepcionaron"] }, feedback: "*El desayuno* is singular, so use **decepcionó** (not plural *decepcionaron*)!" },
            { spec: { type: "text", accept: ["decepcioné"] }, feedback: "*El desayuno* is the subject (*the breakfast disappointed me*), so use 3rd-person singular **decepcionó**!" },
          ],
          hints: [
            "Look at the noun causing the feeling: *el desayuno* (singular).",
            "Use the 3rd-person singular preterite ending **-ó**.",
          ],
          solution: [
            "*El desayuno* is singular → **me decepcionó el desayuno**.",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Check el personal singular agreement",
          question:
            "Correct the **two** agreement mistakes in *El personal fueron muy amables* and type the accurate five-word Spanish sentence.",
          answer: {
            type: "text",
            accept: ["El personal fue muy amable", "El personal fue muy amable."],
            display: "El personal fue muy amable.",
          },
          traps: [
            { spec: { type: "text", accept: ["El personal fue muy amables"] }, feedback: "You fixed *fueron → fue*, now make *amables* singular too: **amable**!" },
          ],
          hints: [
            "*El personal* (*the staff*) is grammatically **singular** in Spanish.",
            "Make BOTH the verb (*ser*) and the adjective (*amable*) singular.",
          ],
          solution: [
            "*fueron* → **fue**; *amables* → **amable** → **El personal fue muy amable.**",
          ],
        },
        {
          id: "hotels-places-reviews-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Identify balanced review tone",
          question:
            "Read Eva's short review: *«Le doy tres de cinco estrellas. La piscina climatizada era fantástica y el hotel estaba cerca de la playa; sin embargo, el wifi gratis no funcionaba bien y faltaban toallas limpias.»* Why did Eva give 3 out of 5 stars?",
          options: [
            "Because the hotel had no pool and was far from the beach.",
            "Because the staff was rude and she lost her key card.",
            "Because the pool and location were great, but Wi-Fi and towels had issues.",
            "Because the breakfast was expensive and the lift broke down.",
          ],
          answerIndex: 2,
          hints: [
            "List the two positives before *sin embargo* and the two negatives after *sin embargo*.",
            "Translate *piscina climatizada*, *cerca de la playa*, *wifi* and *toallas*.",
          ],
          explanation:
            "Eva praised the heated pool and beachside location, but marked it down because the free Wi-Fi worked poorly and clean towels were missing.",
        },
        {
          id: "hotels-places-reviews-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "places-of-interest",
          strategy: "Describe a city's sights with hay/había & se puede",
          marks: 4,
          question:
            "Translate into accurate Spanish:\n\n*Last year I visited Granada. In the city there was an impressive castle, and you can stroll through the old town and take lots of photos.*",
          modelAnswer:
            "El año pasado visité Granada. En la ciudad había un castillo impresionante y se puede pasear por el casco antiguo y sacar muchas fotos.",
          markScheme: [
            {
              point: "Preterite opener: *El año pasado visité Granada*.",
              keywords: ["visite", "granada"],
            },
            {
              point: "Past existence: *había un castillo impresionante* (invariable *había*).",
              keywords: ["habia", "castillo"],
            },
            {
              point: "Impersonal recommendation: *se puede pasear* (+ infinitive).",
              keywords: ["se puede", "pasear"],
            },
            {
              point: "Old town + photos: *el casco antiguo* (or *centro histórico*) + *sacar muchas fotos*.",
              keywords: ["casco antiguo", "centro historico", "sacar"],
            },
          ],
          hints: [
            "Use *visité* for *I visited* and *había* for *there was*.",
            "Keep both verbs after *se puede* in the infinitive (*pasear* and *sacar*).",
          ],
          commonError:
            "Using *hay* instead of *había* for *there was*, or conjugating *paseo* after *se puede*.",
        },
        {
          id: "hotels-places-reviews-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Write a 4-point polite reception booking",
          marks: 4,
          question:
            "Write a short polite message to a Spanish hotel receptionist to book a stay. Include ALL four details:\n- polite request (*Quisiera reservar…* or *Me gustaría reservar…*) + room type\n- length of stay using **para** (*e.g. two/three nights*) + one desired feature (balcony / sea views / half board)\n- a question about the price per night (**por noche**)\n- a question asking whether breakfast or free Wi-Fi is included/available.",
          modelAnswer:
            "Buenos días, quisiera reservar una habitación doble con vistas al mar y media pensión para tres noches. ¿Cuánto cuesta por noche? Además, ¿está incluido el desayuno y hay wifi gratis?",
          markScheme: [
            {
              point: "Polite booking phrase (*quisiera reservar / me gustaría reservar*) + *habitación*.",
              keywords: ["quisiera reservar", "gustaria reservar", "habitacion"],
            },
            {
              point: "Stay duration using **para** + nights (*para dos/tres/cuatro noches*) + view/board/balcony.",
              keywords: ["para dos noches", "para tres noches", "para cuatro noches", "vistas", "balcon", "media pension", "pension completa"],
            },
            {
              point: "Price question using **por noche** (*¿Cuánto cuesta por noche?*).",
              keywords: ["cuanto cuesta", "por noche"],
            },
            {
              point: "Second question about breakfast or facilities (*desayuno / wifi / piscina / incluido / hay*).",
              keywords: ["desayuno", "wifi", "incluido", "piscina"],
            },
          ],
          hints: [
            "Remember: **para** + number of nights, **por noche** for the price.",
            "Include inverted question marks **¿…?** on both questions.",
          ],
          commonError:
            "Swapping *para* and *por* (*reservar por tres noches* instead of *para tres noches*).",
        },
        {
          id: "hotels-places-reviews-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "booking-and-problems",
          strategy: "Write a polite, clear hotel complaint dialogue",
          marks: 4,
          question:
            "You arrive at your Spanish hotel room and find three disasters. Write 3–4 polite sentences to the receptionist:\n1. Open politely (*Perdone / Disculpe*) and say you have a problem.\n2. Mention one broken or non-working facility (*el ascensor / el aire acondicionado / la ducha*).\n3. Mention one hygiene or missing-item issue using **estar** or **faltar / no hay**.\n4. Ask clearly for a solution (*cambiar de habitación / hablar con el director / reparar*).",
          modelAnswer:
            "Perdone, tengo un problema grave con mi habitación. Primero, el aire acondicionado está roto y el ascensor no funciona. Además, la habitación está sucia y no hay agua caliente en la ducha. Quiero cambiar de habitación, por favor.",
          markScheme: [
            {
              point: "Polite opening (*perdone / disculpe*) + *tengo un problema*.",
              keywords: ["perdone", "disculpe", "problema"],
            },
            {
              point: "Broken / non-working facility (*no funciona / está roto / está rota*).",
              keywords: ["no funciona", "roto", "rota"],
            },
            {
              point: "Condition or missing item (*está sucia / están sucias / no hay agua caliente / falta / faltan*).",
              keywords: ["sucia", "sucias", "agua caliente", "falta", "faltan"],
            },
            {
              point: "Clear request for action (*cambiar de habitación / reparar / limpiar / director / reembolso*).",
              keywords: ["cambiar de habitacion", "reparar", "limpiar", "director", "reembolso"],
            },
          ],
          hints: [
            "Use **está** (NOT *es*) for dirty rooms or broken equipment.",
            "State your request calmly at the end: *Quiero cambiar de habitación, por favor.*",
          ],
          commonError:
            "Writing *la habitación es sucia* instead of *la habitación está sucia*, or *una problema* instead of *un problema*.",
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2: Complaints, Ser/Estar & Balanced Hotel Reviews
    // =========================================================================
    {
      id: "hotels-places-reviews-p2",
      title: "Practice Paper 2 — Complaints, Reading & Authentic Trip Reviews",
      questions: [
        {
          id: "hotels-places-reviews-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "hotel-types-facilities",
          strategy: "Translate facility phrase accurately",
          question:
            "Translate into Spanish (include definite article): *the heated swimming pool*.",
          answer: {
            type: "text",
            accept: ["la piscina climatizada"],
            display: "la piscina climatizada",
          },
          traps: [
            { spec: { type: "text", accept: ["la piscina climatizado"] }, feedback: "*La piscina* is feminine, so change *-o* to **-a**: **climatizada**." },
            { spec: { type: "text", accept: ["la climatizada piscina"] }, feedback: "Place descriptive adjectives AFTER the noun in Spanish: **la piscina climatizada**." },
          ],
          hints: [
            "*La piscina* is feminine, and descriptive adjectives follow the noun.",
          ],
          solution: [
            "*the swimming pool* = **la piscina**; *heated* (fem.) = **climatizada** → **la piscina climatizada**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "places-of-interest",
          strategy: "Regular -IR preterite (yo) of subir",
          question:
            "Put **subir** (*to go up / climb*) into the **yo** preterite: *En Sevilla ___ a la Giralda para sacar fotos.*",
          answer: { type: "text", accept: ["subí", "yo subí"], display: "subí" },
          traps: [
            { spec: { type: "text", accept: ["subé"] }, feedback: "*Subir* is an **-IR** verb, so the *yo* preterite ending is **-í** (not *-é*): **subí**." },
            { spec: { type: "text", accept: ["subo"] }, feedback: "*Subo* is present tense (*I climb*). Use preterite **subí**." },
          ],
          hints: [
            "*Subir* is a regular **-IR** verb.",
            "Add the accented *yo* preterite ending **-í**.",
          ],
          solution: [
            "Stem *sub-* + *-í* → **subí**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "hotel-types-facilities",
          strategy: "Simple future of reflexive alojarse (nosotros)",
          question:
            "Conjugate **alojarse** in the **nosotros** simple future (*we will stay*): *El verano que viene ___ en una casa rural.*",
          answer: {
            type: "text",
            accept: ["nos alojaremos", "nosotros nos alojaremos", "nosotras nos alojaremos"],
            display: "nos alojaremos",
          },
          traps: [
            { spec: { type: "text", accept: ["alojaremos"] }, feedback: "Keep the reflexive pronoun **nos** before the verb: **nos alojaremos**!" },
            { spec: { type: "text", accept: ["nos alojamos"] }, feedback: "*Nos alojamos* is present/preterite; *el verano que viene* asks for simple future **nos alojaremos**." },
          ],
          hints: [
            "Place *nosotros* reflexive pronoun **nos** before the verb.",
            "Simple future *nosotros* keeps full *alojar* + **-emos** (NO accent!).",
          ],
          solution: [
            "Reflexive pronoun **nos** + simple future **alojaremos** (no accent on *-emos*) → **nos alojaremos**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Read hotel email for facilities and board",
          question:
            "Read the hotel confirmation:\n*«Estimado cliente: confirmamos su reserva de una habitación familiar para cuatro noches en alojamiento y desayuno. El aparcamiento y el gimnasio son gratuitos, pero el desayuno bufé cuesta doce euros adicionales para niños mayores de doce años.»*\n\nWhich two facilities are completely FREE for guests?",
          options: [
            "Car park and gym.",
            "Room service and buffet lunch.",
            "Heated pool and guided tour.",
            "Airport shuttle and full board.",
          ],
          answerIndex: 0,
          hints: [
            "Find the word **gratuitos** (*free of charge*).",
            "Translate the two nouns right before *son gratuitos*.",
          ],
          explanation:
            "**El aparcamiento y el gimnasio son gratuitos** confirms that the **car park and gym** are free.",
        },
        {
          id: "hotels-places-reviews-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Translate missing item complaint with faltar",
          question:
            "Translate into Spanish: *A towel is missing in my bathroom.* (Use the verb *faltar* for 'is missing'.)",
          answer: {
            type: "text",
            accept: [
              "Falta una toalla en mi baño",
              "Falta una toalla en mi baño.",
              "En mi baño falta una toalla",
              "En mi baño falta una toalla.",
            ],
            display: "Falta una toalla en mi baño.",
          },
          traps: [
            { spec: { type: "text", accept: ["Faltan una toalla en mi baño"] }, feedback: "*Una toalla* is singular, so use singular **falta**!" },
          ],
          hints: [
            "One towel is singular → **falta una toalla**.",
            "Remember the tilde on *ñ* in **baño**!",
          ],
          solution: [
            "*A towel is missing* = **Falta una toalla**; *in my bathroom* = **en mi baño**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "booking-and-problems",
          strategy: "Reflexive preterite of quejarse (yo)",
          question:
            "Conjugate **quejarse** (*to complain*) in the **yo** preterite: *Ayer ___ en recepción porque había demasiado ruido.*",
          answer: { type: "text", accept: ["me quejé", "yo me quejé"], display: "me quejé" },
          traps: [
            { spec: { type: "text", accept: ["quejé"] }, feedback: "*Quejarse* is reflexive — include **me**: **me quejé**!" },
            { spec: { type: "text", accept: ["me quejo"] }, feedback: "*Me quejo* is present tense; *ayer* needs preterite **me quejé**." },
          ],
          hints: [
            "*Quejarse* is reflexive (*me* for *yo*).",
            "Add the regular -AR *yo* preterite ending **-é**.",
          ],
          solution: [
            "Pronoun **me** + preterite **quejé** → **me quejé**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Choose feminine object pronoun la recomiendo",
          question:
            "Complete the recommendation for **esta casa rural**: *Me encantó esta casa rural y ___ a todas las familias.* (Use *recomendar* + *it*.)",
          answer: {
            type: "text",
            accept: ["la recomiendo", "yo la recomiendo"],
            display: "la recomiendo",
          },
          traps: [
            { spec: { type: "text", accept: ["lo recomiendo"] }, feedback: "*Una casa rural* is **feminine**, so use **la recomiendo** (not *lo*)!" },
            { spec: { type: "text", accept: ["la recomendo"] }, feedback: "*Recomendar* is an *e→ie* stem-changer in the present: **recomiendo**!" },
          ],
          hints: [
            "Check the gender of *la casa rural* (*lo* vs *la*).",
            "Remember *recomendar* changes *e → ie* in the present tense (*recomiendo*).",
          ],
          solution: [
            "Feminine pronoun **la** + present *yo* **recomiendo** → **la recomiendo**.",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Match adjective endings to plural feminine habitaciones",
          question:
            "Which review sentence has 100% accurate gender and number agreement?",
          options: [
            "Las habitaciones eran espacioso y luminoso.",
            "Las habitaciones eran espaciosas y luminosas.",
            "Las habitaciones eran espaciosa y luminosa.",
            "Las habitaciones eran espaciosos y luminosos.",
          ],
          answerIndex: 1,
          hints: [
            "What gender and number is **las habitaciones**?",
            "Both adjectives must end in **-as**.",
          ],
          explanation:
            "*Las habitaciones* is feminine plural, so both adjectives take **-as**: **espaciosas y luminosas**.",
        },
        {
          id: "hotels-places-reviews-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Double negative simple future review verdict",
          question:
            "Translate into Spanish: *I will never return.* (Use *no*, simple future of *volver*, and *nunca*.)",
          answer: {
            type: "text",
            accept: ["No volveré nunca", "No volveré nunca.", "Nunca volveré", "Nunca volveré."],
            display: "No volveré nunca.",
          },
          traps: [
            { spec: { type: "text", accept: ["No volví nunca"] }, feedback: "*Volví* is preterite (*I returned*). Use simple future **volveré**!" },
            { spec: { type: "text", accept: ["Volveré nunca"] }, feedback: "When *nunca* goes AFTER the verb, you MUST put **no** before the verb: **No volveré nunca**!" },
          ],
          hints: [
            "Simple future *yo* of *volver* = **volveré**.",
            "Place **no** before the verb and **nunca** after it.",
          ],
          solution: [
            "**No volveré nunca.** (Also valid: *Nunca volveré.*)",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "booking-and-problems",
          strategy: "Spot and correct ser/estar + había errors",
          question:
            "Fix BOTH past-tense grammar errors and write the clean Spanish sentence: *En el hotel habían dos piscinas, pero la habitación era muy sucia.*",
          answer: {
            type: "text",
            accept: [
              "En el hotel había dos piscinas, pero la habitación está muy sucia",
              "En el hotel había dos piscinas, pero la habitación está muy sucia.",
              "En el hotel había dos piscinas, pero la habitación estaba muy sucia",
              "En el hotel había dos piscinas, pero la habitación estaba muy sucia.",
            ],
            display: "En el hotel había dos piscinas, pero la habitación estaba muy sucia.",
          },
          traps: [
            { spec: { type: "text", accept: ["En el hotel había dos piscinas, pero la habitación es muy sucia"] }, feedback: "You fixed *habían → había*, now switch *es* to **está / estaba** for temporary dirtiness!" },
          ],
          hints: [
            "Error 1: does *había* ever take *-n*?",
            "Error 2: does *dirty* (*sucia*) use *ser* or *estar*?",
          ],
          solution: [
            "*habían* → **había** (invariable).",
            "*es muy sucia* → **estaba muy sucia** (or **está muy sucia**, temporary condition uses *estar*).",
          ],
        },
        {
          id: "hotels-places-reviews-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "places-of-interest",
          strategy: "Distinguish past visit from future recommendation",
          question:
            "Read Javier's tip: *«El año pasado visité el castillo de Segovia y me gustó mucho. El próximo verano voy a llevar a mis primos al acueducto porque se puede sacar fotos espectaculares.»* What is Javier going to do next summer?",
          options: [
            "Book a five-star room inside the castle.",
            "Stay at a youth hostel with school friends.",
            "Take his cousins to see the aqueduct.",
            "Complain about queues at the museum.",
          ],
          answerIndex: 2,
          hints: [
            "Look at the sentence starting with *El próximo verano voy a…*.",
            "Translate *llevar a mis primos al acueducto*.",
          ],
          explanation:
            "Javier writes **El próximo verano voy a llevar a mis primos al acueducto** — he is going to take his cousins to the aqueduct.",
        },
        {
          id: "hotels-places-reviews-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "hotel-types-facilities",
          strategy: "Compare two accommodation types with justified opinions",
          marks: 4,
          question:
            "Write 2–3 sentences in Spanish comparing two types of accommodation (for instance, a five-star hotel versus a campsite or rural cottage). Include:\n- both accommodation types with accurate articles\n- at least one facility or feature (*piscina / wifi / vistas / al aire libre*)\n- a contrast connective (*sin embargo / por otro lado / aunque*)\n- your personal preference and a reason using *porque*.",
          modelAnswer:
            "Un hotel de cinco estrellas tiene piscina climatizada y wifi gratis; sin embargo, es demasiado caro. Prefiero alojarme en una casa rural porque es acogedora, muy tranquila y más económica.",
          markScheme: [
            {
              point: "First accommodation type (*hotel / albergue juvenil / camping / casa rural / apartamento*).",
              keywords: ["hotel", "albergue", "apartamento", "parador"],
            },
            {
              point: "Second accommodation type (*camping / casa rural / albergue / apartamento*).",
              keywords: ["camping", "casa rural", "tienda"],
            },
            {
              point: "Contrast connective (*sin embargo / por otro lado / pero / aunque*).",
              keywords: ["sin embargo", "por otro lado", "pero", "aunque"],
            },
            {
              point: "Personal preference + reason/adjective (*prefiero / me gusta / porque / barato / caro / tranquilo / económico / cómodo*).",
              keywords: ["prefiero", "porque", "caro", "barato", "economica", "economico", "tranquila", "comodo", "acogedora"],
            },
          ],
          hints: [
            "Use *sin embargo* or *por otro lado* to contrast cost vs comfort.",
            "Match adjectives to the gender of each accommodation (*una casa rural tranquila* vs *un hotel caro*).",
          ],
          commonError:
            "Forgetting feminine agreement on *una casa rural* (*tranquila / acogedora / económica*).",
        },
        {
          id: "hotels-places-reviews-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "writing-hotel-reviews",
          strategy: "Translate balanced past-opinion review lines",
          marks: 4,
          question:
            "Translate into accurate Spanish:\n\n*On the one hand, I loved the sea views and the staff was very friendly. On the other hand, the slow Wi-Fi disappointed me.*",
          modelAnswer:
            "Por un lado, me encantaron las vistas al mar y el personal fue muy amable. Por otro lado, me decepcionó el wifi lento.",
          markScheme: [
            {
              point: "Opening balance frame: *Por un lado* + plural *me encantaron las vistas al mar*.",
              keywords: ["por un lado", "encantaron", "vistas al mar"],
            },
            {
              point: "Singular collective agreement: *el personal fue muy amable* (or *simpático*).",
              keywords: ["personal fue", "amable", "simpatico"],
            },
            {
              point: "Contrast frame: *Por otro lado*.",
              keywords: ["por otro lado"],
            },
            {
              point: "Singular past opinion: *me decepcionó el wifi lento*.",
              keywords: ["decepciono", "wifi"],
            },
          ],
          hints: [
            "Check plural **me encantaron las vistas** vs singular **me decepcionó el wifi**.",
            "Remember *el personal* is grammatically singular (**fue amable**, NOT *fueron amables*!).",
          ],
          commonError:
            "Writing *me encantó las vistas* (singular verb for plural noun) or *el personal fueron amables*.",
        },
        {
          id: "hotels-places-reviews-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "places-of-interest",
          strategy: "Write a mini travel guide paragraph across 3 tenses",
          marks: 4,
          question:
            "Write 3–4 sentences in Spanish recommending a city or town you visited. Include:\n- one attraction you visited in the **preterite** (*visité / fui al / vi*)\n- what existed there using **había**\n- one tip for visitors using **se puede + infinitive**\n- a future visit plan (*volveré* or *voy a volver*).",
          modelAnswer:
            "El verano pasado visité Salamanca y paseé por la plaza mayor. En el casco antiguo había una catedral preciosa y muchos mercados animados. Allí se puede subir a la torre para ver unas vistas impresionantes. El próximo año volveré con mis amigos porque me encantó la ciudad.",
          markScheme: [
            {
              point: "Preterite sightseeing verb (*visité / fui / vi / subí / paseé*) + attraction.",
              keywords: ["visite", "fui", "pasee", "subi", "catedral", "castillo", "museo", "plaza mayor"],
            },
            {
              point: "Past description using invariable **había**.",
              keywords: ["habia"],
            },
            {
              point: "Visitor recommendation using **se puede** + infinitive.",
              keywords: ["se puede"],
            },
            {
              point: "Future plan (*volveré / voy a volver / visitaré / voy a visitar*).",
              keywords: ["volvere", "voy a volver", "visitare", "voy a visitar"],
            },
          ],
          hints: [
            "Use *visité / subí / paseé* for what you did and *había* for what existed.",
            "Add *se puede + infinitive* and close with *volveré* or *voy a volver*.",
          ],
          commonError:
            "Adding *-n* to *había* before plural attractions or conjugating the verb after *se puede*.",
        },
        {
          id: "hotels-places-reviews-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "writing-hotel-reviews",
          strategy: "Full 4-Part Authentic Spanish Hotel Review (R → P → C → V)",
          marks: 6,
          question:
            "Write a 65–85 word Spanish online review (*una reseña*) of a hotel where you stayed on holiday. Cover ALL four stages:\n1. Where and how long you stayed (*me alojé*) + your star rating (*estrellas*).\n2. Strengths (*Por un lado…*) using *me encantó / me encantaron* and facilities/location (**estar**).\n3. At least one drawback (*Por otro lado… / Sin embargo…*) using *me decepcionó* or a specific problem.\n4. Clear recommendation (*lo / la recomiendo*) and a **simple future** verdict (*volveré* or *no volveré nunca*).",
          modelAnswer:
            "El mes pasado me alojé cuatro noches en el Hotel Miramar con media pensión y le doy cuatro de cinco estrellas. Por un lado, el hotel está cerca de la playa, me encantó la piscina climatizada y el personal fue muy amable. Además, me encantaron las vistas al mar desde el balcón. Por otro lado, me decepcionó el wifi porque era lento y un día el ascensor no funcionaba. En resumen, lo recomiendo a las familias y volveré el año que viene.",
          markScheme: [
            {
              point: "Stay details using reflexive **me alojé** (or *nos alojamos*) + nights/accommodation.",
              keywords: ["me aloje", "nos alojamos"],
            },
            {
              point: "Star rating (*estrellas*).",
              keywords: ["estrella", "estrellas"],
            },
            {
              point: "Positive section (*por un lado / me encantó / me encantaron / me gustó*).",
              keywords: ["por un lado", "encanto", "encantaron", "gusto"],
            },
            {
              point: "Balanced negative section (*por otro lado / sin embargo / aunque*) + specific issue (*decepcionó / no funciona / sucia / ruido / lento*).",
              keywords: ["por otro lado", "sin embargo", "aunque", "decepciono", "ruido", "sucia", "lento", "funcionaba"],
            },
            {
              point: "Recommendation pronoun (*lo recomiendo / la recomiendo / no lo recomiendo*).",
              keywords: ["lo recomiendo", "la recomiendo"],
            },
            {
              point: "Simple future verdict (*volveré / no volveré nunca / me alojaré*).",
              keywords: ["volvere", "alojare"],
            },
          ],
          hints: [
            "Follow **R → P → C → V**: Rating → Pros (*Por un lado…*) → Cons (*Por otro lado…*) → Verdict (*Lo recomiendo / Volveré*).",
            "Check *me encantó* (sg.) vs *me encantaron* (pl.) and *estar* for location/temporary states.",
          ],
          commonError:
            "Forgetting to include BOTH a positive and a negative side, or omitting the simple future closing verb.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 challenges, >= 3 hints each!)
  // =========================================================================
  challenge: [
    {
      id: "hotels-places-reviews-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "booking-and-problems",
      strategy: "Audit four ser vs estar slots in one hotel review",
      question:
        "Fill all four gaps in order (separated by spaces only) using present **es / son** or **está / están**: *El hotel ___ antiguo, pero ___ al lado de la catedral; hoy las habitaciones ___ limpias, aunque el ascensor ___ roto.*",
      answer: {
        type: "text",
        accept: ["es está están está"],
        display: "es está están está",
      },
      traps: [
        { spec: { type: "text", accept: ["es es están está"] }, feedback: "Check gap 2 (*al lado de la catedral* = physical location): location ALWAYS takes **está**!" },
        { spec: { type: "text", accept: ["es está son está"] }, feedback: "Check gap 3 (*hoy las habitaciones ___ limpias* = today's temporary state): use **están**!" },
      ],
      hints: [
        "Gap 1 (*antiguo*) describes a permanent characteristic of the building → *ser*.",
        "Gap 2 (*al lado de la catedral*) describes physical location → *estar*.",
        "Gaps 3 and 4 describe today's temporary conditions (*limpias* plural, *roto* singular) → *estar*.",
      ],
      solution: [
        "Gap 1 (trait, sg.): **es**.",
        "Gap 2 (location, sg.): **está**.",
        "Gap 3 (temporary state, pl.): **están**.",
        "Gap 4 (temporary condition, sg.): **está** → **es está están está**.",
      ],
    },
    {
      id: "hotels-places-reviews-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "writing-hotel-reviews",
      strategy: "Decode subtle meaning shift between ser and estar",
      question:
        "Compare these two sentences about a hotel:\n1. *La piscina **es** fría.*\n2. *La piscina **está** fría hoy.*\n\nWhy does a native Spanish speaker choose **está** in sentence 2?",
      options: [
        "Because swimming pools are feminine nouns and feminine nouns always prefer estar.",
        "Because hoy signals a temporary condition today, rather than a permanent feature.",
        "Because fría is an adverb in sentence 2 and adverbs cannot follow ser.",
        "Because Spanish reviews always ban ser whenever a weather or water noun appears.",
      ],
      answerIndex: 1,
      hints: [
        "Notice the word **hoy** (*today*) in sentence 2.",
        "Does sentence 2 say the pool is *inherently* cold by design, or just cold *right now / today* (maybe the heater failed)?",
        "Connect that contrast to the core Year 9 rule for **ser** (inherent traits) vs **estar** (temporary state).",
      ],
      explanation:
        "Adding **hoy** highlights a **temporary condition** (perhaps the heating is off today!), so **está fría** (*estar*) is used instead of **es fría** (*ser*).",
    },
    {
      id: "hotels-places-reviews-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "writing-hotel-reviews",
      strategy: "Agree three backwards opinion verbs in preterite",
      question:
        "Type the three missing preterite verbs (separated by spaces only): *Me ___ (encantar) las ruinas, me ___ (gustar) el museo y me ___ (decepcionar) los precios.*",
      answer: {
        type: "text",
        accept: ["encantaron gustó decepcionaron"],
        display: "encantaron gustó decepcionaron",
      },
      traps: [
        { spec: { type: "text", accept: ["encantó gustó decepcionó"] }, feedback: "Check plural nouns! *Las ruinas* and *los precios* are BOTH plural (**encantaron**, **decepcionaron**)." },
      ],
      hints: [
        "With *encantar, gustar* and *decepcionar*, look AFTER each blank to check singular vs plural.",
        "*Las ruinas* (pl.) → *-aron*; *el museo* (sg.) → *-ó*.",
        "*Los precios* (pl.) → *-aron*.",
      ],
      solution: [
        "1. *las ruinas* (plural) → **encantaron**.",
        "2. *el museo* (singular) → **gustó**.",
        "3. *los precios* (plural) → **decepcionaron** → **encantaron gustó decepcionaron**.",
      ],
    },
    {
      id: "hotels-places-reviews-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "booking-and-problems",
      strategy: "Combine PARA/POR, contraction & polite complaint cleanly",
      question:
        "Translate into accurate Spanish: *I would like to book a single room for two nights. Does it have sea views?* (Use *Quisiera reservar*, *habitación individual*, *vistas al mar*.)",
      answer: {
        type: "text",
        accept: [
          "Quisiera reservar una habitación individual para dos noches. ¿Tiene vistas al mar?",
          "Quisiera reservar una habitación individual para dos noches ¿Tiene vistas al mar?",
          "Quisiera reservar una habitación individual para dos noches. Tiene vistas al mar",
        ],
        display: "Quisiera reservar una habitación individual para dos noches. ¿Tiene vistas al mar?",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Quisiera reservar una habitación individual por dos noches. ¿Tiene vistas al mar?"] },
          feedback: "Use **para dos noches** (booking duration takes *para*, price takes *por noche*)!",
        },
      ],
      hints: [
        "Open with **Quisiera reservar una habitación individual** (remember the accent on *habitación*!).",
        "Use **para** before *dos noches*.",
        "Ask *Does it have…?* with **¿Tiene vistas al mar?** (contract *a + el = al*).",
      ],
      solution: [
        "Booking clause: **Quisiera reservar una habitación individual para dos noches.**",
        "Question: **¿Tiene vistas al mar?**",
      ],
    },
    {
      id: "hotels-places-reviews-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "writing-hotel-reviews",
      strategy: "Evaluate subtle inference in a detailed hotel review",
      question:
        "Read Beatriz's detailed review:\n*«Me alojé cinco noches en el Parador de Toledo. Aunque el edificio del siglo XVI es espectacular y las vistas de la ciudad desde la terraza me dejaron sin palabras, la factura final incluía un suplemento de aparcamiento que nadie mencionó al reservar. Le doy cuatro estrellas: lo recomiendo por su historia, pero conviene preguntar el precio total antes de llegar.»*\n\nWhat advice does Beatriz give future travellers?",
      options: [
        "Avoid staying in historic buildings because rooms are cold.",
        "Check the full total price before arriving to avoid surprise fees.",
        "Book half board because the terrace restaurant is overpriced.",
        "Travel to Toledo by train because there is no car park at all.",
      ],
      answerIndex: 1,
      hints: [
        "Read the final clause after *pero*: *conviene preguntar el precio total antes de llegar*.",
        "Connect that advice back to *un suplemento de aparcamiento que nadie mencionó al reservar*.",
        "Notice the hotel DID have parking — the issue was an unmentioned extra fee!",
      ],
      explanation:
        "Beatriz warns that an unmentioned parking surcharge appeared on her final bill and advises **preguntar el precio total antes de llegar** (checking the full total price before arriving).",
    },
    {
      id: "hotels-places-reviews-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "hotel-types-facilities",
      strategy: "Shift reflexive alojarse across three tenses",
      question:
        "Type the three missing forms of **alojarse** (separated by spaces only) for **yo**: *Normalmente ___ en un camping, el verano pasado ___ en un albergue, y el año que viene ___ en un parador.* (Use simple future for gap 3.)",
      answer: {
        type: "text",
        accept: ["me alojo me alojé me alojaré"],
        display: "me alojo me alojé me alojaré",
      },
      traps: [
        {
          spec: { type: "text", accept: ["alojo alojé alojaré"] },
          feedback: "*Alojarse* is reflexive — keep **me** before all three verbs (**me alojo me alojé me alojaré**)!",
        },
      ],
      hints: [
        "Every single gap needs the *yo* reflexive pronoun **me**.",
        "Gap 1 = present (*normalmente*); Gap 2 = preterite (*el verano pasado*, accent on *-é*).",
        "Gap 3 = simple future (*full infinitive + -é*): **me alojaré**.",
      ],
      solution: [
        "Present: **me alojo**.",
        "Preterite: **me alojé**.",
        "Simple future: **me alojaré** → **me alojo me alojé me alojaré**.",
      ],
    },
    {
      id: "hotels-places-reviews-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "writing-hotel-reviews",
      strategy: "Error-correction detective on a flawed Spanish hotel review",
      marks: 5,
      question:
        "A student made **five** classic hotel-review errors in their draft notes about a rural cottage (*una casa rural*):\n1. *Alojé allí* (dropped reflexive pronoun)\n2. *habían muchas ruinas* (plural *-n* on *había*)\n3. *la habitación es sucia* (wrong *ser/estar*)\n4. *me encantó las vistas* (singular verb for plural noun)\n5. *lo recomiendo* (wrong gender pronoun for *la casa rural*)\n\nWrite ONE fluent, corrected Spanish review paragraph fixing all five errors accurately.",
      modelAnswer:
        "El verano pasado me alojé en una casa rural preciosa. En el pueblo había muchas ruinas antiguas y me encantaron las vistas a la montaña. Sin embargo, el primer día la habitación estaba sucia, aunque el personal la limpió rápido. Al final la recomiendo y volveré sin duda.",
      markScheme: [
        {
          point: "Fixed reflexive *me alojé en una casa rural*.",
          keywords: ["me aloje"],
        },
        {
          point: "Fixed invariable *había muchas ruinas* (no *-n*).",
          keywords: ["habia muchas ruinas", "habia"],
        },
        {
          point: "Fixed *estar* for temporary dirtiness (*estaba sucia / está sucia*).",
          keywords: ["estaba sucia", "esta sucia"],
        },
        {
          point: "Fixed plural agreement *me encantaron las vistas*.",
          keywords: ["encantaron las vistas", "encantaron"],
        },
        {
          point: "Fixed feminine pronoun *la recomiendo* for *la casa rural*.",
          keywords: ["la recomiendo"],
        },
      ],
      hints: [
        "Restore **me** in *me alojé* and drop the *-n* from *había*.",
        "Switch *es sucia* to **está / estaba sucia** and *me encantó* to **me encantaron**.",
        "Because *la casa rural* is feminine, change *lo recomiendo* to **la recomiendo**.",
      ],
      commonError:
        "Forgetting to change *lo recomiendo* to feminine *la recomiendo* when reviewing *una casa rural*.",
    },
    {
      id: "hotels-places-reviews-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "writing-hotel-reviews",
      strategy: "Extended multi-tense sightseeing + hotel review showcase",
      marks: 6,
      question:
        "Write an authentic 80–100 word Spanish travel blog combining **sightseeing** and a **balanced hotel review**. Include ALL six elements:\n1. Where you stayed (**me alojé**) + board type (*media pensión / pensión completa / alojamiento y desayuno*).\n2. One sightseeing highlight (*visité / subí / vi*) + what you can do there (**se puede + infinitive**).\n3. Accurate **ser** vs **estar** (*location* AND *trait or condition*).\n4. Balanced review frame (**Por un lado… Por otro lado…**) with *me encantó / me encantaron* and *me decepcionó*.\n5. One polite hotel problem you reported (*me quejé / no funciona / faltaba / no había agua caliente*).\n6. Clear star rating + simple future verdict (**volveré** or **no volveré nunca**).",
      modelAnswer:
        "El verano pasado me alojé cinco noches en un hotel moderno en Valencia con media pensión. El hotel está cerca del centro histórico, donde visité la catedral y subí a la torre; además, allí se puede pasear por la plaza mayor y probar paella. Por un lado, me encantaron las vistas al mar y la piscina climatizada era excelente. Por otro lado, me decepcionó el ruido nocturno y me quejé en recepción porque el aire acondicionado no funcionaba. Le doy cuatro de cinco estrellas: lo recomiendo y volveré el año que viene.",
      markScheme: [
        {
          point: "Stay verb (**me alojé / nos alojamos**) + board type (*media pensión / pensión completa / alojamiento y desayuno*).",
          keywords: ["me aloje", "nos alojamos", "media pension", "pension completa", "alojamiento y desayuno"],
        },
        {
          point: "Sightseeing preterite + **se puede + infinitive** recommendation.",
          keywords: ["se puede"],
        },
        {
          point: "Accurate location/condition using **estar** (*está cerca / estaba cerca / está sucia / estaba sucia*).",
          keywords: ["esta cerca", "estaba cerca", "esta sucia", "estaba sucia", "esta roto", "estaba roto"],
        },
        {
          point: "Balanced pros/cons (**por un lado / por otro lado / sin embargo**) + past opinions (*encantó / encantaron / decepcionó*).",
          keywords: ["por un lado", "por otro lado", "encanto", "encantaron", "decepciono"],
        },
        {
          point: "Hotel complaint (*me quejé / no funciona / no funcionaba / agua caliente / falta / faltaban*).",
          keywords: ["queje", "no funciona", "no funcionaba", "agua caliente", "falta", "faltaban"],
        },
        {
          point: "Star rating (*estrellas*) + recommendation + simple future verdict (*volveré*).",
          keywords: ["estrellas", "volvere"],
        },
      ],
      hints: [
        "Open with *me alojé* + board type + *está cerca de…* (location = *estar*!).",
        "Add a sightseeing sentence (*visité… se puede…*) before launching into *Por un lado… Por otro lado…*",
        "Close with star rating (*cuatro de cinco estrellas*), *lo recomiendo*, and simple future *volveré* (or *no volveré nunca*).",
      ],
      commonError:
        "Using *es cerca* instead of *está cerca*, or forgetting the reflexive pronoun on *me alojé* and *me quejé*.",
    },
  ],
};
