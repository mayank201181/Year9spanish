import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "holidays-activities-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "destinations-transport",
      strategy: "Contract a + el → al",
      question:
        "Write the missing **two-letter contraction** to complete: *En verano voy ___ campo con mi familia.*",
      answer: { type: "text", accept: ["al"], display: "al" },
      traps: [
        { spec: { type: "text", accept: ["a el"] }, feedback: "In Spanish, *a + el* MUST contract into a single word (**al**)." },
        { spec: { type: "text", accept: ["en el", "en"] }, feedback: "Use movement preposition *a + el* after *ir*, not static *en*." },
      ],
      hints: [
        "*El campo* is masculine singular, and *ir* takes the preposition *a*.",
      ],
      solution: [
        "After *ir*, movement to a place uses *a*.",
        "*a + el campo* contracts obligatorily to **al** campo.",
      ],
    },
    {
      id: "holidays-activities-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "destinations-transport",
      strategy: "Transport preposition en vs a",
      question:
        "How do you translate *I go by ferry and on foot* into accurate Spanish?",
      options: [
        "Voy a ferri y en pie.",
        "Voy en ferri y a pie.",
        "Voy en el ferri y por pie.",
        "Voy con ferri y a pie.",
      ],
      answerIndex: 1,
      hints: [
        "Vehicles take **en** without an article, while *on foot* is the famous **a** exception.",
      ],
      explanation:
        "Vehicles use **en** + bare noun (**en ferri**), whereas *on foot* always uses **a pie**.",
    },
    {
      id: "holidays-activities-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "holiday-activities-preterite",
      strategy: "Regular -AR yo preterite ending",
      question:
        "Conjugate **visitar** in the **yo** preterite (*I visited*): *El año pasado ___ un museo en Madrid.*",
      answer: { type: "text", accept: ["visité", "yo visité"], display: "visité" },
      traps: [
        { spec: { type: "text", accept: ["visito"] }, feedback: "*Visito* is present tense (*I visit*). You need the -AR *yo* preterite ending **-é**." },
        { spec: { type: "text", accept: ["visitó"] }, feedback: "*Visitó* means *he/she visited*. For *yo*, use **-é**." },
      ],
      hints: [
        "Drop *-ar* from *visitar* and add the accented *yo* preterite ending.",
      ],
      solution: [
        "Stem: *visit-*.",
        "Add regular -AR *yo* preterite ending **-é** → **visité**.",
      ],
    },
    {
      id: "holidays-activities-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "holiday-activities-preterite",
      strategy: "-car → -qué spelling shield",
      question:
        "Put **sacar** into the **yo** preterite (*I took*): *En la playa ___ muchas fotos.*",
      answer: { type: "text", accept: ["saqué", "yo saqué"], display: "saqué" },
      traps: [
        { spec: { type: "text", accept: ["sacé"] }, feedback: "Watch the *-car* spelling change! Change *c* to *qu* before *-é* to keep the hard /k/ sound." },
        { spec: { type: "text", accept: ["saco"] }, feedback: "*Saco* is present tense (*I take*). Use the preterite form." },
      ],
      hints: [
        "*Sacar* ends in **-car**.",
        "Before **-é** in the *yo* preterite, swap **c → qu**.",
      ],
      solution: [
        "Identify *-car* ending on *sacar*.",
        "Change *c* to *qu* and add **-é** → **saqué**.",
      ],
    },
    {
      id: "holidays-activities-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "holiday-activities-preterite",
      strategy: "Ir/ser preterite twins without accents",
      question:
        "Choose the accurate preterite of **ir** and **ser**: *El verano pasado ___ a Grecia y ___ inolvidable.* (yo / it)",
      options: [
        "fui … fue",
        "fue … fui",
        "fuí … fué",
        "voy … es",
      ],
      answerIndex: 0,
      hints: [
        "*I went* is the *yo* form; *it was* is the third-person singular form.",
        "Monosyllabic preterites of *ir/ser* take NO written accents.",
      ],
      explanation:
        "**Fui** means *I went* and **fue** means *it was*; neither word carries a written accent.",
    },
    {
      id: "holidays-activities-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "future-holiday-plans",
      strategy: "Immediate future 3-brick chain",
      question:
        "Write the **immediate future** (*we are going to travel*) to complete: *El año que viene ___ a México.*",
      answer: {
        type: "text",
        accept: ["vamos a viajar", "nosotros vamos a viajar", "nosotras vamos a viajar"],
        display: "vamos a viajar",
      },
      traps: [
        { spec: { type: "text", accept: ["vamos viajar"] }, feedback: "Don't drop the **a** between *vamos* and the infinitive!" },
        { spec: { type: "text", accept: ["viajaremos"] }, feedback: "*Viajaremos* is the simple future (*we will travel*); the question asks for the immediate future (*ir a + infinitive*)." },
      ],
      hints: [
        "Use the **nosotros** present tense of *ir* + **a** + infinitive.",
        "Do NOT conjugate *viajar* after *a*.",
      ],
      solution: [
        "*ir* (nosotros, present) = **vamos**.",
        "Add **a** + infinitive **viajar** → **vamos a viajar**.",
      ],
    },
    {
      id: "holidays-activities-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "future-holiday-plans",
      strategy: "Use mucho with weather nouns",
      question:
        "Complete this past weather phrase (*it was very sunny*): *Ayer ___ mucho sol en la costa.*",
      answer: { type: "text", accept: ["hizo"], display: "hizo" },
      traps: [
        { spec: { type: "text", accept: ["hace"] }, feedback: "*Hace* is present tense (*it is sunny*). *Ayer* needs the preterite!" },
        { spec: { type: "text", accept: ["hice"] }, feedback: "*Hice* is the *yo* form (*I did*). Weather uses the 3rd-person singular **hizo**." },
      ],
      hints: [
        "*Ayer* (yesterday) signals the preterite tense.",
        "What is the 3rd-person singular preterite of *hacer* (no accent!)?",
      ],
      solution: [
        "Weather uses 3rd-person singular of *hacer*.",
        "Preterite 3rd-person singular of *hacer* is **hizo** (*Ayer hizo mucho sol*).",
      ],
    },
    {
      id: "holidays-activities-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "future-holiday-plans",
      strategy: "Simple future regular yo ending",
      question:
        "Which verb means *I will swim* in the **simple future**?",
      options: ["nadé", "nadaba", "nadaré", "nadará"],
      answerIndex: 2,
      hints: [
        "In the simple future, keep the entire infinitive (*nadar*) and add the *yo* ending.",
        "Check the final vowel: *-é* is *yo*, while *-á* is *él/ella*.",
      ],
      explanation:
        "**Nadaré** attaches *-é* to the complete infinitive *nadar* (*I will swim*). *Nadé* is preterite (*I swam*) and *nadará* means *he/she will swim*.",
    },
    {
      id: "holidays-activities-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "holiday-opinions-narratives",
      strategy: "Plural agreement with las vacaciones",
      question:
        "Type the two missing words (verb + adjective) to translate *The holidays were unforgettable*: *Las vacaciones ___ ___.* (Use *ser* + *inolvidable*.)",
      answer: {
        type: "text",
        accept: ["fueron inolvidables"],
        display: "fueron inolvidables",
      },
      traps: [
        { spec: { type: "text", accept: ["fue inolvidable"] }, feedback: "*Las vacaciones* is **plural**, so both *ser* and *inolvidable* must be plural!" },
        { spec: { type: "text", accept: ["fueron inolvidable"] }, feedback: "Great verb (**fueron**), now add **-s** to make *inolvidable* plural too." },
      ],
      hints: [
        "*Las vacaciones* is feminine plural.",
        "Use the *ellos/ellas* preterite of *ser* and make *inolvidable* plural.",
      ],
      solution: [
        "3rd-person plural preterite of *ser* = **fueron**.",
        "Plural of *inolvidable* = **inolvidables** → **fueron inolvidables**.",
      ],
    },
    {
      id: "holidays-activities-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "holiday-opinions-narratives",
      strategy: "Select contrast connective",
      question:
        "Which connective accurately completes: *El vuelo tuvo un retraso; ___, lo pasamos bomba en la isla.*",
      options: ["porque", "además", "por eso", "sin embargo"],
      answerIndex: 3,
      hints: [
        "Clause 1 is negative (flight delay); Clause 2 is positive (we had a blast).",
        "Pick the connective meaning *however*.",
      ],
      explanation:
        "**Sin embargo** (*however*) bridges the negative flight delay and the positive holiday experience cleanly.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 Qs each, incl. 3-4 written per paper)
  // =========================================================================
  papers: [
    {
      id: "holidays-activities-p1",
      title: "Practice Paper 1 — Destinations, Preterite Activities & Weather",
      questions: [
        {
          id: "holidays-activities-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "destinations-transport",
          strategy: "a + el = al",
          question:
            "Translate into Spanish: *I go abroad by plane.*",
          answer: {
            type: "text",
            accept: [
              "Voy al extranjero en avión",
              "Voy al extranjero en avión.",
              "Yo voy al extranjero en avión",
              "Yo voy al extranjero en avión.",
            ],
            display: "Voy al extranjero en avión.",
          },
          traps: [
            { spec: { type: "text", accept: ["Voy a el extranjero en avión"] }, feedback: "Contract *a + el* to **al**: *Voy al extranjero en avión*." },
            { spec: { type: "text", accept: ["Voy al extranjero en el avión"] }, feedback: "Drop the article after *en* for general transport: **en avión**." },
          ],
          hints: [
            "Remember *el extranjero* (abroad) contracts with *a*.",
          ],
          solution: [
            "*I go* = **Voy**.",
            "*abroad* = *a + el extranjero* → **al extranjero**.",
            "*by plane* = **en avión** → **Voy al extranjero en avión.**",
          ],
        },
        {
          id: "holidays-activities-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "destinations-transport",
          strategy: "Exception: a pie",
          question:
            "Translate into Spanish: *We travel by coach and we explore the city on foot.* (Use *viajamos* and *exploramos*.)",
          answer: {
            type: "text",
            accept: [
              "Viajamos en autocar y exploramos la ciudad a pie",
              "Viajamos en autocar y exploramos la ciudad a pie.",
              "Nosotros viajamos en autocar y exploramos la ciudad a pie",
              "Viajamos en autobús y exploramos la ciudad a pie",
            ],
            display: "Viajamos en autocar y exploramos la ciudad a pie.",
          },
          traps: [
            { spec: { type: "text", accept: ["Viajamos en autocar y exploramos la ciudad en pie"] }, feedback: "*On foot* uses **a**, never *en*: **a pie**!" },
          ],
          hints: [
            "*By coach* uses **en**; *on foot* uses **a**.",
          ],
          solution: [
            "*We travel by coach* = **Viajamos en autocar**.",
            "*and we explore the city on foot* = **y exploramos la ciudad a pie**.",
          ],
        },
        {
          id: "holidays-activities-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "destinations-transport",
          strategy: "Match plural article a los",
          question:
            "Which destination phrase is grammatically correct?",
          options: [
            "ir a los Estados Unidos",
            "ir al Estados Unidos",
            "ir a el Estados Unidos",
            "ir en los Estados Unidos",
          ],
          answerIndex: 0,
          hints: [
            "*Estados Unidos* is masculine plural.",
            "After *ir*, movement toward a place takes **a**.",
          ],
          explanation:
            "Because *los Estados Unidos* is masculine plural, *to go to the United States* is **ir a los Estados Unidos**.",
        },
        {
          id: "holidays-activities-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "-gar → -gué in yo preterite",
          question:
            "Conjugate **llegar** in the **yo** preterite: *Ayer ___ al aeropuerto a las ocho.*",
          answer: { type: "text", accept: ["llegué", "yo llegué"], display: "llegué" },
          traps: [
            { spec: { type: "text", accept: ["llegé"] }, feedback: "Add *u* after *g* before *-é* so the *g* stays hard: **llegué**." },
            { spec: { type: "text", accept: ["llegó"] }, feedback: "*Llegó* means *he/she arrived*; use **-gué** for *yo*." },
          ],
          hints: [
            "*Llegar* ends in **-gar**.",
            "Swap **-gar → -gué** in the *yo* preterite.",
          ],
          solution: [
            "Stem of *llegar* ends in *-g*.",
            "Insert *u* before *-é* → **llegué**.",
          ],
        },
        {
          id: "holidays-activities-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "-gar → -gué with no stem change",
          question:
            "Conjugate **jugar** in the **yo** preterite: *El verano pasado ___ al voleibol en la playa.*",
          answer: { type: "text", accept: ["jugué", "yo jugué"], display: "jugué" },
          traps: [
            { spec: { type: "text", accept: ["juegué"] }, feedback: "Do NOT use the present stem *jueg-* in the preterite! Keep *u*: **jugué**." },
            { spec: { type: "text", accept: ["jugé"] }, feedback: "Protect the hard /g/ sound before *-é* with *gu*: **jugué**." },
          ],
          hints: [
            "*Jugar* is a **-gar** verb, so *yo* preterite uses **-gué**.",
            "Present-tense boot changes (*u→ue*) do NOT happen in the preterite of *-ar* verbs.",
          ],
          solution: [
            "Keep the infinitive vowel *u* (no *ue* change in preterite).",
            "Change *-gar* to **-gué** → **jugué**.",
          ],
        },
        {
          id: "holidays-activities-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Regular -ER preterite for nosotros",
          question:
            "Put **beber** into the **nosotros** preterite (*we drank*): *En Málaga ___ limonada muy fría.*",
          answer: {
            type: "text",
            accept: ["bebimos", "nosotros bebimos", "nosotras bebimos"],
            display: "bebimos",
          },
          traps: [
            { spec: { type: "text", accept: ["bebemos"] }, feedback: "*Bebemos* is present tense (*we drink*). The -ER preterite *nosotros* ending is **-imos**." },
          ],
          hints: [
            "*Beber* is a regular **-ER** verb.",
            "In the preterite, -ER and -IR verbs share the *nosotros* ending **-imos**.",
          ],
          solution: [
            "Drop *-er* from *beber* → *beb-*.",
            "Add preterite *nosotros* ending **-imos** → **bebimos**.",
          ],
        },
        {
          id: "holidays-activities-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Irregular preterite of hacer (yo)",
          question:
            "Conjugate **hacer** in the **yo** preterite: *En Barcelona ___ turismo por la mañana.*",
          answer: { type: "text", accept: ["hice", "yo hice"], display: "hice" },
          traps: [
            { spec: { type: "text", accept: ["hizo"] }, feedback: "*Hizo* is *él/ella/it*. For *yo*, use **hice**." },
            { spec: { type: "text", accept: ["hací"] }, feedback: "*Hacer* is irregular in the preterite! Use the stem *hic-* + *-e*: **hice**." },
          ],
          hints: [
            "*Hacer* has an irregular preterite stem (*hic-*).",
            "No written accent on irregular preterites!",
          ],
          solution: [
            "Irregular preterite of *hacer* (yo) = **hice** (no accent).",
          ],
        },
        {
          id: "holidays-activities-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Spot accurate weather noun modifier",
          question:
            "Which weather sentence is 100% accurate for *Last August it was very windy and cold*?",
          options: [
            "El agosto pasado hace mucho viento y frío.",
            "El agosto pasado hizo muy viento y muy frío.",
            "El agosto pasado hizo mucho viento y mucho frío.",
            "El agosto pasado va a hacer mucho viento y frío.",
          ],
          answerIndex: 2,
          hints: [
            "*El agosto pasado* requires the preterite of *hacer*.",
            "Both *viento* and *frío* are nouns, so use **mucho**, never *muy*.",
          ],
          explanation:
            "Preterite weather uses **hizo**, and weather nouns (*viento, frío*) take **mucho**: **hizo mucho viento y mucho frío**.",
        },
        {
          id: "holidays-activities-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Immediate future with reflexive verb",
          question:
            "Translate into Spanish using the **immediate future**: *Tomorrow I am going to swim in the sea.*",
          answer: {
            type: "text",
            accept: [
              "Mañana voy a nadar en el mar",
              "Mañana voy a nadar en el mar.",
              "Mañana yo voy a nadar en el mar",
            ],
            display: "Mañana voy a nadar en el mar.",
          },
          traps: [
            { spec: { type: "text", accept: ["Mañana voy nadar en el mar"] }, feedback: "Don't forget the **a**: *voy **a** nadar*." },
            { spec: { type: "text", accept: ["Mañana voy a nado en el mar"] }, feedback: "Keep the second verb in the infinitive (**nadar**), not conjugated *nado*." },
          ],
          hints: [
            "Immediate future = **voy + a + infinitive**.",
            "Keep *nadar* in the infinitive after *a*.",
          ],
          solution: [
            "*Tomorrow* = **Mañana**.",
            "*I am going to swim* = **voy a nadar**.",
            "*in the sea* = **en el mar** → **Mañana voy a nadar en el mar.**",
          ],
        },
        {
          id: "holidays-activities-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Simple future with irregular stem",
          question:
            "Put **hacer** into the **yo** simple future (*I will do*): *El próximo verano ___ vela en Menorca.*",
          answer: { type: "text", accept: ["haré", "yo haré"], display: "haré" },
          traps: [
            { spec: { type: "text", accept: ["haceré"] }, feedback: "*Hacer* uses the shortened irregular stem **har-** in the simple future: **haré**." },
            { spec: { type: "text", accept: ["hará"] }, feedback: "*Hará* means *he/she will do*; use **-é** for *yo*." },
          ],
          hints: [
            "*Hacer* is irregular in the simple future (shortened stem **har-**).",
            "Attach the accented *yo* simple future ending **-é**.",
          ],
          solution: [
            "Irregular future stem of *hacer* = **har-**.",
            "Add *yo* ending **-é** → **haré**.",
          ],
        },
        {
          id: "holidays-activities-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-opinions-narratives",
          strategy: "Translate balanced opinion idiom",
          question:
            "Translate into Spanish: *I had a blast!* (Use *pasarlo bomba* in the preterite.)",
          answer: {
            type: "text",
            accept: ["Lo pasé bomba", "¡Lo pasé bomba!", "Lo pasé bomba."],
            display: "¡Lo pasé bomba!",
          },
          traps: [
            { spec: { type: "text", accept: ["Lo paso bomba"] }, feedback: "*Lo paso bomba* is present tense (*I have a blast*). Use preterite **pasé**." },
            { spec: { type: "text", accept: ["Lo pasó bomba"] }, feedback: "*Pasó* means *he/she had*; for *I*, use **pasé**." },
          ],
          hints: [
            "Put the pronoun *lo* before the verb.",
            "Use the *yo* preterite of *pasar* (**pasé**) + *bomba*.",
          ],
          solution: [
            "Pronoun **lo** + *yo* preterite **pasé** + **bomba** → **¡Lo pasé bomba!**",
          ],
        },
        {
          id: "holidays-activities-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "holiday-opinions-narratives",
          strategy: "Check ser vs pasarlo opinion phrasing",
          question:
            "Which sentence accurately says *The worst thing was that it rained every day*?",
          options: [
            "Lo peor fue que llueve todos los días.",
            "Lo mejor fue que llovió todos los días.",
            "Lo peor fui que llovió todos los días.",
            "Lo peor fue que llovió todos los días.",
          ],
          answerIndex: 3,
          hints: [
            "*The worst thing* = *lo peor*; *was* (it) = *fue*.",
            "Pair *fue* with the preterite of *llover* (**llovió**).",
          ],
          explanation:
            "**Lo peor fue que llovió todos los días** matches *lo peor* (the worst thing), third-person singular **fue**, and past weather **llovió**.",
        },
        {
          id: "holidays-activities-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "destinations-transport",
          strategy: "4-Slot holiday translation",
          marks: 4,
          question:
            "Translate the following sentence into accurate Spanish:\n\n*Normally in summer I go on holiday to Spain by plane with my family, because the weather is very sunny.*",
          modelAnswer:
            "Normalmente en verano voy de vacaciones a España en avión con mi familia porque hace mucho sol.",
          markScheme: [
            {
              point: "Time & verb: *Normalmente en verano voy de vacaciones* (present tense of *ir*).",
              keywords: ["normalmente", "verano", "voy"],
            },
            {
              point: "Destination & transport: *a España en avión* (bare *a* + country, *en* + bare transport).",
              keywords: ["espana", "avion"],
            },
            {
              point: "Companions: *con mi familia* (singular possessive *mi*).",
              keywords: ["familia"],
            },
            {
              point: "Justified weather reason: *porque hace mucho sol* (*mucho*, not *muy*).",
              keywords: ["hace mucho sol", "mucho sol"],
            },
          ],
          hints: [
            "Follow the 4-slot blueprint: When → Where to → How → With whom.",
            "Remember: countries take bare *a*, vehicles take *en* without an article, and weather uses *hace mucho sol*.",
          ],
          commonError:
            "Writing *hace muy sol* instead of *hace mucho sol*, or *en el avión* instead of *en avión*.",
        },
        {
          id: "holidays-activities-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Narrate 4 past activities with -car/-gar & irregulars",
          marks: 4,
          question:
            "Write 2–3 sentences in Spanish describing a **past** summer trip. You must include:\n- where you went (*ir* in the preterite)\n- one *-car* or *-gar* activity (*sacar fotos* or *jugar*)\n- one food/drink activity (*comer* or *beber*)\n- an overall opinion of the holidays (*las vacaciones* or *lo pasé…*).",
          modelAnswer:
            "El verano pasado fui a Mallorca con mis amigos. En la playa saqué muchas fotos y jugué al voleibol. También comí paella deliciosa y lo pasé bomba porque las vacaciones fueron inolvidables.",
          markScheme: [
            {
              point: "Past destination using *fui a / al / a la…* (preterite of *ir*).",
              keywords: ["fui"],
            },
            {
              point: "Accurate *-car / -gar* yo preterite (*saqué / jugué / practiqué / llegué*).",
              keywords: ["saque", "jugue", "practique", "llegue"],
            },
            {
              point: "Past food/drink verb (*comí / bebí / probé*).",
              keywords: ["comi", "bebi", "probe"],
            },
            {
              point: "Past opinion (*lo pasé bomba / genial / fatal* or *fueron inolvidables / divertidas*).",
              keywords: ["pase", "fueron", "inolvidables", "divertidas", "genial", "bomba"],
            },
          ],
          hints: [
            "Open with *El verano pasado fui a…* (no accent on *fui*).",
            "Don't forget *-car → -qué* (*saqué*) or *-gar → -gué* (*jugué*), and *-í* on *comí / bebí*.",
          ],
          commonError:
            "Forgetting the accent on *comí / pasé* or writing *sacé / jugé* without the spelling change.",
        },
        {
          id: "holidays-activities-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "future-holiday-plans",
          strategy: "Combine immediate future, simple future, wish & weather",
          marks: 4,
          question:
            "Translate into Spanish:\n\n*Next year we are going to travel to Italy by train. I would like to visit Rome, and I will eat lots of ice cream because it is going to be very hot.*",
          modelAnswer:
            "El año que viene vamos a viajar a Italia en tren. Me gustaría visitar Roma y comeré muchos helados porque va a hacer mucho calor.",
          markScheme: [
            {
              point: "Immediate future (*vamos a viajar*) + *a Italia en tren*.",
              keywords: ["vamos a viajar", "italia", "tren"],
            },
            {
              point: "Wish structure: *me gustaría visitar* (+ infinitive).",
              keywords: ["gustaria visitar", "gustaria"],
            },
            {
              point: "Simple future *comeré* + ice cream (*helado / helados*).",
              keywords: ["comere", "helado"],
            },
            {
              point: "Future weather: *va a hacer mucho calor* (with *mucho*, not *muy*).",
              keywords: ["va a hacer mucho calor", "mucho calor"],
            },
          ],
          hints: [
            "Use *vamos a viajar* for *we are going to travel* and *comeré* for *I will eat*.",
            "Pair *me gustaría* directly with the infinitive *visitar*.",
            "Remember *va a hacer mucho calor* uses *mucho* before the noun *calor*.",
          ],
          commonError:
            "Dropping *a* in *vamos a viajar* or writing *muy calor* instead of *mucho calor*.",
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2: Reading, Tense-Switching & Extended Writing
    // =========================================================================
    {
      id: "holidays-activities-p2",
      title: "Practice Paper 2 — Tense Switching, Reading & Multi-Tense Writing",
      questions: [
        {
          id: "holidays-activities-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "holiday-activities-preterite",
          strategy: "-zar → -cé in yo preterite",
          question:
            "Conjugate **cruzar** in the **yo** preterite (*I crossed*): *El lunes ___ la frontera en coche.*",
          answer: { type: "text", accept: ["crucé", "yo crucé"], display: "crucé" },
          traps: [
            { spec: { type: "text", accept: ["cruzé"] }, feedback: "Spanish never puts *z* directly before *e* — change *z* to *c*: **crucé**." },
            { spec: { type: "text", accept: ["cruzo"] }, feedback: "*Cruzo* is present tense; you need the *yo* preterite **crucé**." },
          ],
          hints: [
            "*Cruzar* ends in **-zar**; swap *z → c* before *-é*.",
          ],
          solution: [
            "Swap *z* to *c* before *-é* → **crucé**.",
          ],
        },
        {
          id: "holidays-activities-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Regular -AR preterite ellos ending",
          question:
            "Put **comprar** into the **ellos** preterite (*they bought*): *Mis padres ___ recuerdos en el mercado.*",
          answer: {
            type: "text",
            accept: ["compraron", "ellos compraron"],
            display: "compraron",
          },
          traps: [
            { spec: { type: "text", accept: ["compran"] }, feedback: "*Compran* is present tense (*they buy*). Preterite -AR *ellos* ends in **-aron**." },
            { spec: { type: "text", accept: ["compró"] }, feedback: "*Compró* is singular (*he/she bought*). *Mis padres* is plural!" },
          ],
          hints: [
            "*Mis padres* = *ellos*.",
            "Add the regular -AR preterite *ellos* ending **-aron**.",
          ],
          solution: [
            "Stem *compr-* + *-aron* → **compraron**.",
          ],
        },
        {
          id: "holidays-activities-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Irregular preterite of ver (no accent)",
          question:
            "Conjugate **ver** in the **yo** preterite (*I saw*): *En Granada ___ la Alhambra y fue preciosa.*",
          answer: { type: "text", accept: ["vi", "yo vi"], display: "vi" },
          traps: [
            { spec: { type: "text", accept: ["veo"] }, feedback: "*Veo* is present tense (*I see*). Preterite *yo* of *ver* is **vi**." },
            { spec: { type: "text", accept: ["vio"] }, feedback: "*Vio* means *he/she saw*. For *yo*, write **vi**." },
          ],
          hints: [
            "*Ver* is a one-syllable preterite for *yo*.",
            "Does a one-syllable preterite (*vi, fui, di*) carry a written accent?",
          ],
          solution: [
            "Preterite *yo* of *ver* = **vi** (no accent!).",
          ],
        },
        {
          id: "holidays-activities-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "destinations-transport",
          strategy: "Read carefully for transport and companions",
          question:
            "Read Elena's reply: *«En Semana Santa no voy al extranjero; prefiero ir al pueblo con mis abuelos en tren porque el viaje es corto y cómodo.»* Why does Elena choose the train?",
          options: [
            "Because it goes directly abroad to Italy.",
            "Because the journey is short and comfortable.",
            "Because her parents refuse to drive on holiday.",
            "Because plane tickets are sold out at Easter.",
          ],
          answerIndex: 1,
          hints: [
            "Look after the word **porque** (*because*).",
            "Translate *corto y cómodo* carefully.",
          ],
          explanation:
            "**Porque el viaje es corto y cómodo** directly states that she takes the train because the journey is **short and comfortable**.",
        },
        {
          id: "holidays-activities-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Weather in preterite: llover",
          question:
            "Write the **preterite** (*it rained*) to complete: *Ayer ___ mucho, así que no fuimos a la playa.*",
          answer: { type: "text", accept: ["llovió"], display: "llovió" },
          traps: [
            { spec: { type: "text", accept: ["llueve"] }, feedback: "*Llueve* is present tense (*it rains*). *Ayer* needs preterite **llovió**." },
            { spec: { type: "text", accept: ["llovía"] }, feedback: "Use the completed preterite **llovió** for a single past event (*ayer*)." },
          ],
          hints: [
            "The infinitive is **llover** (a regular -ER verb in the preterite).",
            "Add the accented 3rd-person singular ending **-ió**.",
          ],
          solution: [
            "Drop *-er* from *llover* → *llov-*.",
            "Add **-ió** → **llovió**.",
          ],
        },
        {
          id: "holidays-activities-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Simple future irregular stem tendr-",
          question:
            "Put **tener** into the **nosotros** simple future (*we will have*): *El verano que viene ___ mucho tiempo libre.*",
          answer: {
            type: "text",
            accept: ["tendremos", "nosotros tendremos", "nosotras tendremos"],
            display: "tendremos",
          },
          traps: [
            { spec: { type: "text", accept: ["teneremos"] }, feedback: "*Tener* has the irregular future stem **tendr-**: **tendremos**." },
            { spec: { type: "text", accept: ["tuvimos"] }, feedback: "*Tuvimos* is preterite (*we had*). Use simple future **tendremos**." },
          ],
          hints: [
            "Irregular simple future stem of *tener* is **tendr-**.",
            "The *nosotros* simple future ending (**-emos**) has NO written accent.",
          ],
          solution: [
            "Irregular stem **tendr-** + **-emos** (no accent) → **tendremos**.",
          ],
        },
        {
          id: "holidays-activities-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Immediate future with ellos",
          question:
            "Rewrite *Mis amigos esquían en los Pirineos* in the **immediate future** (*are going to ski*).",
          answer: {
            type: "text",
            accept: [
              "Mis amigos van a esquiar en los Pirineos",
              "Mis amigos van a esquiar en los Pirineos.",
            ],
            display: "Mis amigos van a esquiar en los Pirineos.",
          },
          traps: [
            { spec: { type: "text", accept: ["Mis amigos van esquiar en los Pirineos"] }, feedback: "Never omit **a**: *van **a** esquiar*." },
            { spec: { type: "text", accept: ["Mis amigos van a esquían en los Pirineos"] }, feedback: "Use the infinitive **esquiar** after *van a*, not conjugated *esquían*." },
          ],
          hints: [
            "Use the *ellos* present form of *ir* (**van**) + **a** + infinitive.",
            "What is the infinitive of *esquían*?",
          ],
          solution: [
            "*Mis amigos* = *ellos* → **van**.",
            "Add **a** + infinitive **esquiar** → **Mis amigos van a esquiar en los Pirineos.**",
          ],
        },
        {
          id: "holidays-activities-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "holiday-activities-preterite",
          strategy: "Distinguish reflexive preterite person",
          question:
            "Read: *«En Tenerife nos relajamos junto al mar y luego salimos a cenar pescado fresco.»* Who relaxed by the sea?",
          options: [
            "I alone",
            "He or she",
            "We",
            "They",
          ],
          answerIndex: 2,
          hints: [
            "Look at the reflexive pronoun **nos** and the verb endings **-amos / -imos**.",
            "Both pronouns and endings point to the same subject.",
          ],
          explanation:
            "**Nos** is the *nosotros* reflexive pronoun and **salimos** confirms the subject is **we** (*nosotros*).",
        },
        {
          id: "holidays-activities-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "holiday-opinions-narratives",
          strategy: "Correct feminine singular agreement on la playa",
          question:
            "Type the correctly agreeing form of **tranquilo** to complete: *La playa en Menorca fue muy ___.*",
          answer: { type: "text", accept: ["tranquila"], display: "tranquila" },
          traps: [
            { spec: { type: "text", accept: ["tranquilo"] }, feedback: "*La playa* is feminine singular, so change *-o* to **-a**: **tranquila**." },
            { spec: { type: "text", accept: ["tranquilas"] }, feedback: "*La playa* is singular (only one beach), so drop the *-s*: **tranquila**." },
          ],
          hints: [
            "Check the article on *la playa*: masculine or feminine? Singular or plural?",
            "Match *-o / -a / -os / -as* to *la playa*.",
          ],
          solution: [
            "*La playa* is feminine singular → **tranquila**.",
          ],
        },
        {
          id: "holidays-activities-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "holiday-opinions-narratives",
          strategy: "Spot and fix preterite + agreement errors",
          question:
            "Correct the **two** mistakes in this sentence and write the clean Spanish sentence: *Ayer practiqué deportes acuáticos y el viaje fui muy divertido, aunque llueve un poco.*",
          answer: {
            type: "text",
            accept: [
              "Ayer practiqué deportes acuáticos y el viaje fue muy divertido, aunque llovió un poco",
              "Ayer practiqué deportes acuáticos y el viaje fue muy divertido, aunque llovió un poco.",
              "Ayer practiqué deportes acuáticos y el viaje fue muy divertido aunque llovió un poco",
            ],
            display:
              "Ayer practiqué deportes acuáticos y el viaje fue muy divertido, aunque llovió un poco.",
          },
          traps: [
            { spec: { type: "text", accept: ["Ayer practiqué deportes acuáticos y el viaje fue muy divertido, aunque llueve un poco"] }, feedback: "You fixed *fui → fue*, now also put *llueve* into the past tense (*ayer*)!" },
          ],
          hints: [
            "Check the subject of *el viaje* (*it*, NOT *I*) and the tense of *llueve* after *ayer*.",
            "Replace *fui* with *fue*, and shift *llueve* into the preterite.",
          ],
          solution: [
            "*el viaje* = *it* → change *fui* to **fue**.",
            "*Ayer* requires past weather → change *llueve* to **llovió**.",
            "Clean sentence: **Ayer practiqué deportes acuáticos y el viaje fue muy divertido, aunque llovió un poco.**",
          ],
        },
        {
          id: "holidays-activities-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "holiday-opinions-narratives",
          strategy: "Identify three tenses inside one paragraph",
          question:
            "Read Hugo's paragraph: *«Cada agosto vamos a la costa en coche. El año pasado hicimos vela y vimos delfines. El año que viene iremos a Costa Rica.»* Which three tenses appear in order?",
          options: [
            "Preterite → Present → Immediate future",
            "Present → Immediate future → Simple future",
            "Present → Preterite → Immediate future",
            "Present → Preterite → Simple future",
          ],
          answerIndex: 3,
          hints: [
            "Inspect the three bold verbs: *vamos*, *hicimos / vimos*, and *iremos*.",
            "Is *iremos* built with *ir + a + infinitive* or *infinitive + -emos*?",
          ],
          explanation:
            "**Vamos** is present tense, **hicimos / vimos** are preterite, and **iremos** (*ir + -emos*) is **simple future**.",
        },
        {
          id: "holidays-activities-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "future-holiday-plans",
          strategy: "Translate 3-tense weather & plan comparison",
          marks: 4,
          question:
            "Translate into Spanish:\n\n*Last winter it snowed in the mountains and I skied every day. Next summer it is going to be very sunny, so I will swim in the sea.*",
          modelAnswer:
            "El invierno pasado nevó en la montaña y esquié todos los días. El próximo verano va a hacer mucho sol, así que nadaré en el mar.",
          markScheme: [
            {
              point: "Past weather: *El invierno pasado nevó* (preterite of *nevar*).",
              keywords: ["invierno pasado", "nevo"],
            },
            {
              point: "Past activity: *esquié todos los días* (yo preterite of *esquiar*).",
              keywords: ["esquie"],
            },
            {
              point: "Future weather: *va a hacer mucho sol* (or *hará mucho sol*, with *mucho*).",
              keywords: ["mucho sol"],
            },
            {
              point: "Simple future verb: *nadaré en el mar*.",
              keywords: ["nadare"],
            },
          ],
          hints: [
            "Use *nevó* and *esquié* for the past winter events.",
            "Remember *va a hacer mucho sol* (with *mucho*) and *nadaré* (*I will swim*).",
          ],
          commonError:
            "Writing *nieva* instead of *nevó*, or *esquío* (present) instead of *esquié* (preterite).",
        },
        {
          id: "holidays-activities-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "holiday-opinions-narratives",
          strategy: "Balanced past highlight + lowlight paragraph",
          marks: 4,
          question:
            "Write 2–3 sentences in Spanish about a holiday with **both** a positive highlight and a negative moment. Include:\n- the highlight phrase (*the best thing was that…*) + a preterite verb\n- a contrast connective (*however* or *although*)\n- the lowlight phrase (*the worst thing was that…*) + a preterite verb (e.g. weather or travel delay)\n- a justified final verdict using *porque*.",
          modelAnswer:
            "Lo mejor fue que probé platos típicos y nadé en el mar. Sin embargo, lo peor fue que hubo un retraso en el aeropuerto y perdí mi maleta. Al final lo pasé genial porque la isla fue preciosa.",
          markScheme: [
            {
              point: "Positive highlight using *lo mejor fue que* + preterite.",
              keywords: ["lo mejor fue que"],
            },
            {
              point: "Contrast connective (*sin embargo / aunque / pero*).",
              keywords: ["sin embargo", "aunque", "pero"],
            },
            {
              point: "Negative lowlight using *lo peor fue que* + preterite.",
              keywords: ["lo peor fue que"],
            },
            {
              point: "Justified verdict with *porque* (or *ya que*).",
              keywords: ["porque", "ya que"],
            },
          ],
          hints: [
            "Open with *Lo mejor fue que…* followed by an accented preterite verb.",
            "Link the setback with *Sin embargo, lo peor fue que…* and finish with *porque…*.",
          ],
          commonError:
            "Using a present-tense verb after *lo mejor fue que* instead of the preterite.",
        },
        {
          id: "holidays-activities-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "destinations-transport",
          strategy: "Compare two transport modes with reasons",
          marks: 4,
          question:
            "Write 2–3 sentences in Spanish comparing two types of holiday transport (for example, travelling by plane versus by train). Mention:\n- both vehicles with the correct preposition (**en**)\n- at least one comparative or opinion adjective (*más rápido / más ecológico / cómodo / caro*)\n- a contrast connective (*sin embargo / pero / aunque*)\n- your personal preference with a reason.",
          modelAnswer:
            "Viajar en avión es más rápido para ir al extranjero; sin embargo, prefiero viajar en tren porque es más ecológico y muy cómodo. Además, no hay tanto estrés en la estación.",
          markScheme: [
            {
              point: "First transport mode with *en* (*en avión / en coche / en barco / en autocar*).",
              keywords: ["en avion", "en coche", "en barco", "en autocar"],
            },
            {
              point: "Second transport mode with *en* (*en tren / en bicicleta / a pie*).",
              keywords: ["en tren", "en bicicleta", "a pie"],
            },
            {
              point: "Contrast connective (*sin embargo / pero / aunque*).",
              keywords: ["sin embargo", "pero", "aunque"],
            },
            {
              point: "Personal opinion + adjective/reason (*prefiero / me gusta / porque / ecológico / rápido / cómodo / barato*).",
              keywords: ["prefiero", "ecologico", "rapido", "comodo", "barato", "porque"],
            },
          ],
          hints: [
            "Drop the article after *en* (*en avión, en tren*).",
            "Compare with *es más rápido / más ecológico / más barato*.",
          ],
          commonError:
            "Adding *el/la* after *en* (*viajar en el tren*) or omitting *porque* when justifying.",
        },
        {
          id: "holidays-activities-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "holiday-opinions-narratives",
          strategy: "Full 3-Tense Year 9 Holiday Paragraph (N → P → F)",
          marks: 6,
          question:
            "Write a 60–80 word paragraph in Spanish answering **¿Cómo son tus vacaciones?** Cover ALL of these bullet points:\n1. Where you usually go, how you travel and who with (**present**).\n2. Where you went last summer and two activities you did (**preterite**).\n3. What the weather was like (**past weather**).\n4. Where you are going to go or will go next year and why (**immediate or simple future** + justified opinion).",
          modelAnswer:
            "Normalmente en verano voy de vacaciones a la costa con mi familia en coche porque me encanta descansar. Sin embargo, el verano pasado fui a Grecia en avión. Allí visité ruinas antiguas, saqué muchas fotos y comí pescado delicioso. Hizo mucho calor todos los días y las vacaciones fueron inolvidables. El año que viene voy a viajar a Japón y visitaré Tokio porque me gustaría probar platos típicos.",
          markScheme: [
            {
              point: "Present-tense routine (*normalmente / todos los años + voy / vamos* + destination).",
              keywords: ["normalmente", "todos los anos", "voy", "vamos"],
            },
            {
              point: "Transport & companions (*en coche / en avión / en tren / con mi familia / con mis amigos*).",
              keywords: ["en coche", "en avion", "en tren", "en barco", "familia", "amigos", "padres"],
            },
            {
              point: "Preterite trip (*el verano pasado / el año pasado + fui / fuimos*).",
              keywords: ["fui", "fuimos"],
            },
            {
              point: "At least one specific past activity (*visité / saqué / nadé / tomé / jugué / comí / hice*).",
              keywords: ["visite", "saque", "nade", "tome", "jugue", "comi", "hice", "probe"],
            },
            {
              point: "Past weather detail (*hizo sol / hizo calor / hizo buen tiempo / llovió*).",
              keywords: ["hizo", "llovio", "nevo"],
            },
            {
              point: "Future plan (*voy a / vamos a / viajaré / visitaré / iré*) + opinion/reason (*porque / me gustaría*).",
              keywords: ["voy a", "vamos a", "viajare", "visitare", "ire", "gustaria"],
            },
          ],
          hints: [
            "Use the **N → P → F** framework: *Normalmente voy…* → *Sin embargo, el verano pasado fui…* → *El año que viene voy a viajar…*",
            "Include at least one past weather phrase (*hizo mucho calor*) and one accurate agreement (*las vacaciones fueron inolvidables*).",
          ],
          commonError:
            "Staying in only one tense or forgetting accents on preterite and simple future endings.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-level Year 9 challenge questions, >= 3 hints each!)
  // =========================================================================
  challenge: [
    {
      id: "holidays-activities-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "holiday-activities-preterite",
      strategy: "Transform a full present sentence into preterite",
      question:
        "Rewrite this entire sentence in the **preterite** (replace *Normalmente* with *Ayer*): *Normalmente saco fotos, juego al tenis y voy a la playa.*",
      answer: {
        type: "text",
        accept: [
          "Ayer saqué fotos, jugué al tenis y fui a la playa",
          "Ayer saqué fotos, jugué al tenis y fui a la playa.",
          "Ayer saqué fotos jugué al tenis y fui a la playa",
        ],
        display: "Ayer saqué fotos, jugué al tenis y fui a la playa.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer sacé fotos, jugué al tenis y fui a la playa"] },
          feedback: "Check *sacar*: *-car* verbs change to **-qué** in the *yo* preterite (**saqué**).",
        },
        {
          spec: { type: "text", accept: ["Ayer saqué fotos, juegué al tenis y fui a la playa"] },
          feedback: "Drop the present stem change *ue* in *jugar* preterite: **jugué** (not *juegué*).",
        },
      ],
      hints: [
        "All three verbs have **yo** as subject: *sacar*, *jugar*, and *ir*.",
        "Apply *-car → -qué* to *sacar* and *-gar → -gué* (no *ue*!) to *jugar*.",
        "Remember the irregular preterite of *ir* for *yo* takes no written accent.",
      ],
      solution: [
        "Replace *Normalmente* with **Ayer**.",
        "*saco* (*sacar*, -car → -qué) → **saqué**.",
        "*juego* (*jugar*, -gar → -gué, no *ue*) → **jugué**.",
        "*voy* (*ir*, irregular, no accent) → **fui** → **Ayer saqué fotos, jugué al tenis y fui a la playa.**",
      ],
    },
    {
      id: "holidays-activities-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "holiday-activities-preterite",
      strategy: "Decode subtle accent and person contrasts",
      question:
        "Compare these two sentences carefully:\n1. *Mi padre compró recuerdos y pagó en efectivo.*\n2. *Yo compré recuerdos y pagué con tarjeta.*\n\nWhy does sentence 2 need **gu** in *pagué* while sentence 1 keeps a plain **g** in *pagó*?",
      options: [
        "Because plural subjects add a u after g, whereas singular subjects do not.",
        "Because g before o is already hard, while g before e needs gu to stay hard.",
        "Because pagar is irregular in every person except él/ella preterite.",
        "Because accents on final -é always require a double consonant before them.",
      ],
      answerIndex: 1,
      hints: [
        "Say *pa-gó* and *pa-gé* out loud using Spanish pronunciation rules.",
        "In Spanish, *ga / go / gu* have a hard /g/ sound, while *ge / gi* have a raspy /h/ sound.",
        "Inserting a silent **u** in *gu + e* restores the hard /g/ sound before **-é**.",
      ],
      explanation:
        "Before **o** (*pagó*), **g** is already pronounced hard, so no change is needed. Before **e** (*pagué*), **g** would turn soft unless **u** is inserted (**gu**), which is why *-gar → -gué* happens ONLY in the *yo* preterite.",
    },
    {
      id: "holidays-activities-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "future-holiday-plans",
      strategy: "Convert immediate future to simple future with irregular stems",
      question:
        "Rewrite this sentence replacing BOTH immediate future verbs with the **simple future**: *El año que viene vamos a hacer senderismo y vamos a salir por la noche.*",
      answer: {
        type: "text",
        accept: [
          "El año que viene haremos senderismo y saldremos por la noche",
          "El año que viene haremos senderismo y saldremos por la noche.",
        ],
        display: "El año que viene haremos senderismo y saldremos por la noche.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["El año que viene haceremos senderismo y saliremos por la noche"] },
          feedback: "Both *hacer* (**har-**) and *salir* (**saldr-**) have irregular simple future stems!",
        },
      ],
      hints: [
        "Identify the subject from *vamos*: it is **nosotros**.",
        "Check the irregular simple future stems of *hacer* (**har-**) and *salir* (**saldr-**).",
        "Attach **-emos** (with NO written accent!) to both stems.",
      ],
      solution: [
        "*hacer* (nosotros, simple future) → **haremos**.",
        "*salir* (nosotros, simple future) → **saldremos**.",
        "Full sentence: **El año que viene haremos senderismo y saldremos por la noche.**",
      ],
    },
    {
      id: "holidays-activities-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "destinations-transport",
      strategy: "Audit four prepositions in one complex sentence",
      question:
        "Fill all four gaps in order (separated by spaces only): *Todos los veranos viajamos ___ norte de España ___ autocar, pero una vez allí vamos ___ la playa ___ pie.*",
      answer: {
        type: "text",
        accept: ["al en a a"],
        display: "al en a a",
      },
      traps: [
        { spec: { type: "text", accept: ["al en a en"] }, feedback: "Almost! Check the very last phrase: *on foot* is **a pie**, not *en pie*." },
        { spec: { type: "text", accept: ["a el en a a"] }, feedback: "Contract *a + el* in gap 1 to **al**!" },
      ],
      hints: [
        "Gap 1 precedes masculine singular *norte* after movement verb *viajamos*.",
        "Gap 2 precedes a vehicle (*autocar*); Gap 3 precedes feminine *la playa*.",
        "Gap 4 is the classic transport exception *on foot*.",
      ],
      solution: [
        "Gap 1: *a + el norte* → **al**.",
        "Gap 2: vehicle *autocar* → **en**.",
        "Gap 3: *la playa* → **a** (*a la playa*).",
        "Gap 4: *on foot* → **a** (*a pie*) → **al en a a**.",
      ],
    },
    {
      id: "holidays-activities-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "holiday-opinions-narratives",
      strategy: "Distinguish nuanced reading inference across tenses",
      question:
        "Read Clara's email carefully:\n*«El año pasado mis padres eligieron un viaje organizado en autocar por Francia. Aunque visitamos castillos impresionantes y no llovió ni un solo día, lo pasé un poco aburrida porque pasamos demasiadas horas en la carretera. Por eso, el próximo verano convenceré a mi familia de ir en tren a la Costa Brava.»*\n\nWhat was the MAIN reason Clara felt bored last year?",
      options: [
        "The castles they visited were closed due to rain.",
        "They spent too many hours travelling on the road.",
        "She wanted to travel alone instead of with parents.",
        "The train tickets to France were far too expensive.",
      ],
      answerIndex: 1,
      hints: [
        "Look closely after the phrase *lo pasé un poco aburrida porque…*.",
        "Note that *no llovió ni un solo día* rules out bad weather.",
        "Translate *pasamos demasiadas horas en la carretera*.",
      ],
      explanation:
        "Clara explains **porque pasamos demasiadas horas en la carretera** (because we spent too many hours on the road). It did NOT rain (*no llovió ni un solo día*), and the train is her plan for next summer, not last year.",
    },
    {
      id: "holidays-activities-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "future-holiday-plans",
      strategy: "Translate negative weather + future contrast cleanly",
      question:
        "Translate into Spanish: *Yesterday it was very windy, however tomorrow it is going to be sunny.*",
      answer: {
        type: "text",
        accept: [
          "Ayer hizo mucho viento, sin embargo mañana va a hacer sol",
          "Ayer hizo mucho viento, sin embargo mañana va a hacer sol.",
          "Ayer hizo mucho viento; sin embargo, mañana va a hacer sol",
          "Ayer hizo mucho viento; sin embargo, mañana va a hacer sol.",
          "Ayer hizo mucho viento, sin embargo mañana hará sol",
          "Ayer hizo mucho viento; sin embargo, mañana hará sol.",
        ],
        display: "Ayer hizo mucho viento; sin embargo, mañana va a hacer sol.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer hizo muy viento, sin embargo mañana va a hacer sol"] },
          feedback: "*Viento* is a noun, so use **mucho viento**, never *muy viento*!",
        },
      ],
      hints: [
        "Use preterite weather for *yesterday it was very windy*: *hizo* + *mucho* + *viento*.",
        "Translate *however* as **sin embargo**.",
        "Use immediate future *va a hacer sol* (or simple future *hará sol*) for *tomorrow*.",
      ],
      solution: [
        "*Yesterday it was very windy* = **Ayer hizo mucho viento**.",
        "*however* = **sin embargo**.",
        "*tomorrow it is going to be sunny* = **mañana va a hacer sol**.",
      ],
    },
    {
      id: "holidays-activities-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "holiday-activities-preterite",
      strategy: "Error-correction detective across 5 sentences",
      marks: 5,
      question:
        "A student made **five** classic holiday grammar mistakes in their draft notes:\n1. *fuí en Italia* (went to Italy)\n2. *sacé fotos* (I took photos)\n3. *hizo muy calor* (it was very hot)\n4. *las vacaciones fue fantástico* (the holidays were fantastic)\n5. *voy viajar a Grecia* (I am going to travel to Greece)\n\nWrite ONE fluent, corrected Spanish paragraph combining all five phrases accurately.",
      modelAnswer:
        "El verano pasado fui a Italia, saqué fotos, hizo mucho calor, las vacaciones fueron fantásticas y el año que viene voy a viajar a Grecia.",
      markScheme: [
        {
          point: "Fixed *fuí en Italia* → *fui a Italia* (no accent on *fui*, preposition *a*).",
          keywords: ["fui a italia"],
        },
        {
          point: "Fixed *sacé* → *saqué* (*-car → -qué*).",
          keywords: ["saque"],
        },
        {
          point: "Fixed *muy calor* → *mucho calor* (noun modifier).",
          keywords: ["mucho calor"],
        },
        {
          point: "Fixed *fue fantástico* → *fueron fantásticas* (fem. pl. agreement with *las vacaciones*).",
          keywords: ["fueron fantasticas"],
        },
        {
          point: "Fixed *voy viajar* → *voy a viajar* (kept **a** in immediate future).",
          keywords: ["voy a viajar"],
        },
      ],
      hints: [
        "Check *ir* in the past: monosyllabic *fui* has NO accent and takes **a** + country.",
        "Spot the *-car* verb (*sacar*) and the weather noun (*calor*).",
        "Check plural agreement with *las vacaciones* and the missing link word in *voy ___ viajar*.",
      ],
      commonError:
        "Fixing only *fueron* while forgetting to change *fantástico* to feminine plural *fantásticas*.",
    },
    {
      id: "holidays-activities-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "holiday-opinions-narratives",
      strategy: "Extended 4-tense showcase postcard",
      marks: 6,
      question:
        "Write an authentic 75–95 word Spanish blog post about your holidays that showcases **all four Year 9 tenses** in one cohesive narrative:\n1. **Present**: your usual holiday destination, transport & companions.\n2. **Preterite**: a specific past trip with a *-car / -gar* verb, an irregular verb (*fui / hice / vi*) and past weather.\n3. **Immediate Future** (*ir a + infinitive*): a definite plan for your next break.\n4. **Simple Future** (*-é / -emos*): a future travel dream + a balanced opinion (*lo mejor fue que… sin embargo…*).",
      modelAnswer:
        "Normalmente todos los años voy de vacaciones a la costa en tren con mi familia porque es relajante. Sin embargo, el verano pasado fui al sur de España en avión. Allí hice turismo, saqué muchísimas fotos y jugué al voleibol en la playa. Lo mejor fue que hizo mucho sol, aunque lo peor fue que perdí mi maleta el primer día. En Semana Santa vamos a descansar en el campo y el próximo verano viajaré a México y probaré platos típicos porque me gustaría conocer una cultura nueva.",
      markScheme: [
        {
          point: "Accurate **present** routine with destination & transport (*normalmente / voy / vamos / en tren / en avión / en coche*).",
          keywords: ["normalmente", "voy", "vamos"],
        },
        {
          point: "Accurate irregular **preterite** (*fui / fuimos / hice / vi / tuve*).",
          keywords: ["fui", "fuimos", "hice", "vi"],
        },
        {
          point: "Accurate **-car / -gar / -zar** preterite (*saqué / jugué / llegué / practiqué / crucé*).",
          keywords: ["saque", "jugue", "llegue", "practique", "cruce"],
        },
        {
          point: "Past weather + balanced opinion (*hizo / llovió* + *lo mejor fue que / sin embargo / aunque*).",
          keywords: ["hizo", "llovio", "lo mejor fue que", "sin embargo", "aunque"],
        },
        {
          point: "**Immediate future** plan (*voy a / vamos a* + infinitive).",
          keywords: ["voy a", "vamos a"],
        },
        {
          point: "**Simple future** verb (*viajaré / visitaré / iré / haré / probaré / comeré / nadaré*) with reason.",
          keywords: ["viajare", "visitare", "ire", "hare", "probare", "comere", "nadare"],
        },
      ],
      hints: [
        "Plan one clear sentence per tense: Present (*Normalmente…*) → Preterite (*El verano pasado…*) → Immediate Future (*En Semana Santa voy a…*) → Simple Future (*El próximo verano viajaré…*).",
        "Drop in one *-car/-gar* gem (*saqué fotos* or *jugué al voleibol*) and *lo mejor fue que… sin embargo…*.",
        "Do a final accent & agreement sweep on every *-é / -ó / -í* and on *las vacaciones fueron…*.",
      ],
      commonError:
        "Using only immediate future and forgetting to include a true simple future verb (*infinitive + -é/-emos*).",
    },
  ],
};
