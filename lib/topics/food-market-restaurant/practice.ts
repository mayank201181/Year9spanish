import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // ===========================================================================
  quiz: [
    {
      id: "food-market-restaurant-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "food-opinions-mealtimes",
      strategy: "Use the dedicated Spanish meal verb instead of tener",
      question: "Translate into Spanish (1 word): 'I have breakfast'.",
      answer: {
        type: "text",
        accept: ["desayuno", "yo desayuno"],
        display: "desayuno",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tengo desayuno", "tengo el desayuno"] },
          feedback: "Never translate 'have breakfast' literally with *tener* — use the single verb *desayunar* (*desayuno*).",
        },
        {
          spec: { type: "text", accept: ["desayunar"] },
          feedback: "*Desayunar* is the infinitive ('to have breakfast') — conjugate it for *yo* (*-o*).",
        },
      ],
      hints: [
        "Start from the infinitive *desayunar*.",
        "Drop *-ar* and add the *yo* present ending *-o*.",
      ],
      solution: [
        "Spanish uses the single verb **desayunar** for 'to have breakfast'.",
        "In the *yo* present tense: **desayuno**.",
      ],
      commonError: "Writing *tengo desayuno* by translating English word-for-word.",
    },
    {
      id: "food-market-restaurant-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "food-opinions-mealtimes",
      strategy: "Match gustar and adjectives to plural food nouns",
      question: "Which sentence accurately translates 'I like carrots because they are healthy'?",
      options: [
        "Me gusta las zanahorias porque es sana.",
        "Me gustan las zanahorias porque son sanas.",
        "Me gustan zanahorias porque son sanos.",
        "Me gusta las zanahorias porque son sanas.",
      ],
      answerIndex: 1,
      hints: [
        "*Las zanahorias* is feminine plural — check every verb and adjective.",
        "Remember to keep the definite article *las* after *me gustan*.",
      ],
      explanation:
        "**Me gustan las zanahorias porque son sanas** matches feminine plural *las zanahorias* across **gustan**, **son** and **sanas**.",
    },
    {
      id: "food-market-restaurant-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "market-quantities",
      strategy: "Apply the Market Zero-Article Rule after de",
      question: "Translate into Spanish: 'half a kilo of tomatoes'.",
      answer: {
        type: "text",
        accept: ["medio kilo de tomates"],
        display: "medio kilo de tomates",
      },
      traps: [
        {
          spec: { type: "text", accept: ["un medio kilo de tomates"] },
          feedback: "Drop *un* before *medio*! Just write *medio kilo de tomates*.",
        },
        {
          spec: { type: "text", accept: ["medio kilo de los tomates"] },
          feedback: "Never place an article (*los*) after *de* in market quantities!",
        },
      ],
      hints: [
        "Do NOT put *un* before *medio*.",
        "Use *de* + bare plural noun (no *los*!).",
      ],
      solution: [
        "'Half a kilo' = **medio kilo** (no *un*).",
        "Add *de* + bare noun: **medio kilo de tomates**.",
      ],
    },
    {
      id: "food-market-restaurant-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "market-quantities",
      strategy: "Keep mandatory de in Spanish container phrases",
      question: "Translate into Spanish: 'a dozen eggs'.",
      answer: {
        type: "text",
        accept: ["una docena de huevos"],
        display: "una docena de huevos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["una docena huevos"] },
          feedback: "Spanish requires **de** between *docena* and *huevos*: *una docena de huevos*.",
        },
        {
          spec: { type: "text", accept: ["un docena de huevos"] },
          feedback: "*Docena* is feminine, so use **una** docena de huevos.",
        },
      ],
      hints: [
        "*Docena* is a feminine noun.",
        "Remember to include *de* before *huevos* even though English omits 'of'.",
      ],
      solution: [
        "'A dozen' = **una docena** (feminine).",
        "Connect to *huevos* with **de**: **una docena de huevos**.",
      ],
    },
    {
      id: "food-market-restaurant-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "ordering-in-restaurant",
      strategy: "Use the 3 De's and a Para rule",
      question: "Which preposition completes: *______ postre quiero helado de chocolate, y ______ beber un zumo de naranja.*",
      options: [
        "Para / de",
        "En / para",
        "De / para",
        "Por / de",
      ],
      answerIndex: 2,
      hints: [
        "Starter, main and dessert all use one preposition.",
        "Drinks switch to *para*.",
      ],
      explanation:
        "All three meal courses take **de** (*de postre*), while drinks take **para** (*para beber*).",
    },
    {
      id: "food-market-restaurant-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "ordering-in-restaurant",
      strategy: "Use estar and feminine agreement for restaurant problems",
      question: "Translate into Spanish: 'The soup is cold.'",
      answer: {
        type: "text",
        accept: ["La sopa está fría", "La sopa está fría."],
        display: "La sopa está fría.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["La sopa es fría", "La sopa es fría."] },
          feedback: "Use **estar** (*está*) for a temporary restaurant complaint! *Es fría* implies it is meant to be cold.",
        },
        {
          spec: { type: "text", accept: ["La sopa está frío", "La sopa está frío."] },
          feedback: "*La sopa* is feminine, so *frío* must agree as **fría** (with an accent on *í*).",
        },
      ],
      hints: [
        "Is cold soup a permanent trait or a temporary complaint?",
        "Check gender agreement with *la sopa* and the accent on *está* and *fría*.",
      ],
      solution: [
        "Complaints about food temperature use **estar**: *está*.",
        "Feminine agreement with *la sopa*: **La sopa está fría.**",
      ],
    },
    {
      id: "food-market-restaurant-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "ordering-in-restaurant",
      strategy: "Use singular falta for one missing tableware item",
      question: "Translate into Spanish: 'A fork is missing.'",
      answer: {
        type: "text",
        accept: ["Falta un tenedor", "Falta un tenedor."],
        display: "Falta un tenedor.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Faltan un tenedor", "Faltan un tenedor."] },
          feedback: "Only one fork is missing, so use singular **falta**, not *faltan*.",
        },
        {
          spec: { type: "text", accept: ["Falta una tenedor", "Falta una tenedor."] },
          feedback: "*Tenedor* is masculine: **un tenedor**.",
        },
      ],
      hints: [
        "Use the singular form of *faltar*.",
        "'A fork' = *un tenedor* (masculine).",
      ],
      solution: [
        "One missing item takes singular **falta**.",
        "Complete phrase: **Falta un tenedor.**",
      ],
    },
    {
      id: "food-market-restaurant-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "hispanic-cuisine-tenses",
      strategy: "Use yo preterite of pedir with written accent",
      question: "Give the *yo* Preterite form of **pedir** (I ordered).",
      answer: {
        type: "text",
        accept: ["pedí", "yo pedí"],
        display: "pedí",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pidí", "yo pidí"] },
          feedback: "*Pedir* only stem-changes (*e → i*) in 3rd person (*pidió / pidieron*) in the Preterite, NOT in *yo*!",
        },
        {
          spec: { type: "text", accept: ["pregunté", "yo pregunté"] },
          feedback: "*Preguntar* means 'to ask a question'; ordering food uses **pedir** (*pedí*).",
        },
      ],
      hints: [
        "Does *pedir* stem-change in the *yo* form of the Preterite? No!",
        "Add the regular *-ir* *yo* preterite ending with its accent.",
      ],
      solution: [
        "Remove *-ir* from *pedir* → stem *ped-* (no stem change in *yo*).",
        "Add accented *-í*: **pedí**.",
      ],
    },
    {
      id: "food-market-restaurant-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "hispanic-cuisine-tenses",
      strategy: "Apply -gar spelling change in yo preterite",
      question: "Complete the sentence accurately (*yo* form): *Ayer yo ______ la cuenta con tarjeta y ______ paella de mariscos.*",
      options: [
        "pagé / probé",
        "pagué / pruebé",
        "pagó / probó",
        "pagué / probé",
      ],
      answerIndex: 3,
      hints: [
        "Verbs ending in *-gar* change *g → gu* before *-é* in the *yo* preterite.",
        "*Probar* is an *-ar* verb, so it NEVER stem-changes in the Preterite.",
      ],
      explanation:
        "**Pagué** (*-gar → -gué*) and **probé** (no *o → ue* in Preterite) are both accurate *yo* preterite forms. *Pagó / probó* would mean 'he/she paid and tried'.",
    },
    {
      id: "food-market-restaurant-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "ordering-in-restaurant",
      strategy: "Cover every bullet point with exact course prepositions",
      question: "Write 2–3 short sentences in Spanish to order a meal at a restaurant. Include:\n1. A polite opener\n2. A starter and a main course using accurate course prepositions\n3. A drink using the correct drink preposition\n4. Asking for the bill politely",
      marks: 4,
      modelAnswer:
        "Buenas tardes, quisiera el menú del día. De primer plato quiero la sopa y de segundo plato prefiero el pollo asado. Para beber, una botella de agua sin gas, por favor. Al final, ¿me trae la cuenta, por favor?",
      markScheme: [
        { point: "Polite ordering opener (*quisiera / para mí / por favor / buenas tardes*)", keywords: ["quisiera", "para mi", "por favor", "pongame", "buenas tardes", "buenos dias"] },
        { point: "Starter and main course with **de primer plato** and **de segundo plato**", keywords: ["de primer plato", "de segundo plato"] },
        { point: "Drink introduced with **para beber**", keywords: ["para beber"] },
        { point: "Polite request for the bill (*la cuenta*)", keywords: ["la cuenta"] },
      ],
      hints: [
        "Use polite framing like *Quisiera...* or *Para mí...*.",
        "Remember the 3 De's and a Para rule for courses vs drinks.",
        "Finish by asking for *la cuenta, por favor*.",
      ],
      commonError: "Writing *para primer plato* instead of *de primer plato*, or mixing up *la carta* (menu) with *la cuenta* (bill).",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions each, incl. 3 written per paper)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -------------------------------------------------------------------------
    {
      id: "food-market-restaurant-p1",
      title: "Practice Paper 1 — Meals, Opinions & At the Market",
      questions: [
        {
          id: "food-market-restaurant-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "food-opinions-mealtimes",
          strategy: "Match singular vs plural forms of gustar",
          question: "Complete with the correct form of *encantar*: *Me ______ los churros con chocolate.*",
          answer: {
            type: "text",
            accept: ["encantan"],
            display: "encantan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["encanta"] },
              feedback: "*Los churros* is plural, so use plural **encantan**!",
            },
            {
              spec: { type: "text", accept: ["encanto"] },
              feedback: "*Encantar* works like *gustar* — agree with *los churros* (*encantan*), not with *yo*.",
            },
          ],
          hints: [
            "Identify the grammatical subject: *los churros* (plural).",
            "Add the 3rd-person plural present *-ar* ending (*-an*) to the stem of *encantar*.",
          ],
          solution: ["*Los churros* is plural, so the verb agrees in 3rd-person plural: **encantan**."],
        },
        {
          id: "food-market-restaurant-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "food-opinions-mealtimes",
          strategy: "Use stem-changing meal verbs accurately",
          question: "Give the *yo* present tense of **almorzar** (I have lunch).",
          answer: {
            type: "text",
            accept: ["almuerzo", "yo almuerzo"],
            display: "almuerzo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["almorzo", "yo almorzo"] },
              feedback: "*Almorzar* is an *o → ue* boot verb in the Present tense: **almuerzo**.",
            },
          ],
          hints: [
            "*Almorzar* has a stem change *o → ue* inside the boot.",
            "Keep the *z* in the Present tense (*-o* does not trigger *z → c*).",
          ],
          solution: ["Change *o → ue* and add *-o*: **almuerzo**."],
        },
        {
          id: "food-market-restaurant-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "food-opinions-mealtimes",
          strategy: "Keep the definite article and match adjective gender",
          question: "Translate into Spanish: 'I hate onions because they are disgusting.'",
          answer: {
            type: "text",
            accept: [
              "Odio las cebollas porque son asquerosas",
              "Odio las cebollas porque son asquerosas.",
              "Yo odio las cebollas porque son asquerosas",
              "Yo odio las cebollas porque son asquerosas.",
            ],
            display: "Odio las cebollas porque son asquerosas.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Odio cebollas porque son asquerosas", "Odio cebollas porque son asquerosas."] },
              feedback: "Include the definite article **las** after *odio* for general food opinions!",
            },
          ],
          hints: [
            "Include *las* before *cebollas* (feminine plural).",
            "Make *asqueroso* agree with feminine plural *las cebollas*.",
          ],
          solution: [
            "*Odio* + definite article *las cebollas*.",
            "Plural *ser* (*son*) + feminine plural adjective: **Odio las cebollas porque son asquerosas.**",
          ],
        },
        {
          id: "food-market-restaurant-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "food-opinions-mealtimes",
          strategy: "Check stem changes in merendar",
          question: "Which sentence accurately translates 'My brothers have an afternoon snack at six o'clock'?",
          options: [
            "Mis hermanos meriendan a las seis.",
            "Mis hermanos merendan a las seis.",
            "Mis hermanos tienen merienda a las seis.",
            "Mis hermanos merienden a las seis.",
          ],
          answerIndex: 0,
          hints: [
            "*Merendar* is an *e → ie* boot verb in the Present tense.",
            "Match the ending to *mis hermanos* (*ellos* → *-an*).",
          ],
          explanation:
            "**Mis hermanos meriendan a las seis** uses the *e → ie* stem change and present *-an* ending. *Merendan* misses the stem change, and *merienden* is subjunctive.",
        },
        {
          id: "food-market-restaurant-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Distinguish cien vs ciento before nouns",
          question: "Translate into Spanish: '100 grams of cheese'.",
          answer: {
            type: "text",
            accept: ["cien gramos de queso"],
            display: "cien gramos de queso",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ciento gramos de queso"] },
              feedback: "Use **cien** (not *ciento*) for exactly 100 before a noun.",
            },
            {
              spec: { type: "text", accept: ["cien gramos de el queso", "cien gramos del queso"] },
              feedback: "Drop the definite article after *de* in market weights: *cien gramos de queso*.",
            },
          ],
          hints: [
            "Exactly 100 before *gramos* drops *-to*.",
            "No definite article after *de*.",
          ],
          solution: ["Use **cien** + *gramos de* + bare noun: **cien gramos de queso**."],
        },
        {
          id: "food-market-restaurant-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Match container gender accurately",
          question: "Translate into Spanish: 'a bottle of olive oil'.",
          answer: {
            type: "text",
            accept: ["una botella de aceite de oliva"],
            display: "una botella de aceite de oliva",
          },
          traps: [
            {
              spec: { type: "text", accept: ["un botella de aceite de oliva"] },
              feedback: "*Botella* is feminine: **una** botella de aceite de oliva.",
            },
          ],
          hints: [
            "'A bottle' = *una botella* (feminine).",
            "'Olive oil' = *aceite de oliva* (no *el* after *de*).",
          ],
          solution: ["Combine container + *de* + bare noun: **una botella de aceite de oliva**."],
        },
        {
          id: "food-market-restaurant-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Translate quarter-kilo measures accurately",
          question: "Translate into Spanish: 'a quarter of a kilo of strawberries'.",
          answer: {
            type: "text",
            accept: ["un cuarto de kilo de fresas"],
            display: "un cuarto de kilo de fresas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["un cuatro de kilo de fresas"] },
              feedback: "Watch the spelling: *cuatro* = 4, whereas **cuarto** = quarter!",
            },
          ],
          hints: [
            "'A quarter' = *un cuarto* (not *cuatro*!).",
            "Connect each part with *de* and keep *fresas* without *las*.",
          ],
          solution: ["**un cuarto de kilo de fresas** (note *cuarto* = quarter, *cuatro* = four)."],
        },
        {
          id: "food-market-restaurant-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Calculate euro totals from Spanish weight phrases",
          question: "At the market, grapes cost €3.60 per kilo and eggs cost €2.40 per dozen. A shopper asks: *Póngame medio kilo de uvas y media docena de huevos.* What is the total cost in euros? (Give a number to 2 decimal places, e.g. `1.50`.)",
          answer: {
            type: "number",
            value: 3,
            tolerance: 0.001,
            display: "3",
          },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "Remember *medio kilo* is HALF a kilo (€1.80) and *media docena* is HALF a dozen (€1.20)!",
            },
          ],
          hints: [
            "Half of €3.60 is €1.80.",
            "Half of €2.40 is €1.20 — add the two halves together.",
          ],
          solution: [
            "*Medio kilo de uvas* = €3.60 ÷ 2 = €1.80.",
            "*Media docena de huevos* = €2.40 ÷ 2 = €1.20.",
            "Total = €1.80 + €1.20 = **€3.00** (3).",
          ],
        },
        {
          id: "food-market-restaurant-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Identify specialist food shops accurately",
          question: "You need *medio kilo de ternera* and *doscientos gramos de jamón serrano*. Which shop should you visit?",
          options: [
            "la pescadería",
            "la carnicería",
            "la pastelería",
            "la frutería",
          ],
          answerIndex: 1,
          hints: [
            "*La ternera* (beef) and *el jamón* (ham) are both types of meat (*la carne*).",
            "Match *carne* to its shop name ending in *-ería*.",
          ],
          explanation:
            "**La carnicería** is the butcher's (from *la carne*). *La pescadería* sells fish, *la pastelería* sells cakes, and *la frutería* sells fruit and vegetables.",
        },
        {
          id: "food-market-restaurant-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Use polite market/restaurant request verb poner",
          question: "Translate into Spanish using *Póngame*: 'Give me a loaf of bread, please.'",
          answer: {
            type: "text",
            accept: ["Póngame una barra de pan, por favor", "Póngame una barra de pan, por favor.", "Póngame una barra de pan por favor"],
            display: "Póngame una barra de pan, por favor.",
          },
          hints: [
            "Remember the accent on **Póngame**.",
            "'A loaf of bread' = *una barra de pan*.",
          ],
          solution: ["Combine *Póngame* + *una barra de pan* + *, por favor*: **Póngame una barra de pan, por favor.**"],
        },
        {
          id: "food-market-restaurant-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Check feminine agreement on singular el agua",
          question: "Which restaurant order for 'cold still water' is grammatically accurate?",
          options: [
            "la agua frío sin gas",
            "el agua frío sin gas",
            "el agua fría sin gas",
            "la agua fría sin gas",
          ],
          answerIndex: 2,
          hints: [
            "Singular *agua* uses *el* to prevent two stressed *a* sounds colliding.",
            "The noun *agua* is still feminine, so check the ending of *frío/fría*.",
          ],
          explanation:
            "**El agua fría sin gas** pairs the article *el* (for pronunciation) with the feminine adjective **fría**.",
        },
        {
          id: "food-market-restaurant-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Convert Present routine into Preterite past",
          question: "Rewrite the verb *almorzar* ('to have lunch') in the **Preterite** (*yo*): *Normalmente almuerzo a las dos; ayer yo ______ a las tres.*",
          answer: {
            type: "text",
            accept: ["almorcé", "yo almorcé"],
            display: "almorcé",
          },
          traps: [
            {
              spec: { type: "text", accept: ["almorzé", "yo almorzé"] },
              feedback: "Spelling rule! Before *-é*, verbs ending in *-zar* change *z → c*: **almorcé**.",
            },
            {
              spec: { type: "text", accept: ["almuercé", "yo almuercé"] },
              feedback: "*-ar* verbs never stem-change (*o → ue*) in the Preterite: **almorcé**.",
            },
          ],
          hints: [
            "Drop the Present stem change *o → ue* in the Preterite.",
            "Remember the *-zar → -cé* spelling rule in *yo* preterite.",
          ],
          solution: ["*Almorzar* has no stem change in Preterite and shifts *z → c* before *-é*: **almorcé**."],
        },
        {
          id: "food-market-restaurant-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "food-opinions-mealtimes",
          strategy: "Describe daily routine with meal verbs and justified opinions",
          question: "Write 3–4 sentences in Spanish describing your daily eating routine. Include:\n1. What time you have breakfast and one item you eat or drink\n2. What you have for lunch or dinner\n3. One food you love with a justified reason\n4. One food you dislike with a justified reason",
          marks: 4,
          modelAnswer:
            "Normalmente desayuno a las siete y media tostadas con mermelada y zumo de naranja. Almuerzo pollo con arroz en el colegio y ceno verduras con pescado. Me encantan las fresas porque son dulces y sanas. Sin embargo, odio las cebollas porque son asquerosas.",
          markScheme: [
            { point: "Breakfast verb + time/item (*desayuno*)", keywords: ["desayuno", "desayunar"] },
            { point: "Lunch or dinner verb (*almuerzo / como / ceno*)", keywords: ["almuerzo", "como", "ceno"] },
            { point: "Positive opinion + justification (*me gusta/n / me encanta/n* + *porque*)", keywords: ["me encanta", "me encantan", "me gusta", "me gustan"] },
            { point: "Negative opinion + justification (*odio / no me gusta/n* + adjective)", keywords: ["odio", "no me gusta", "no me gustan", "no soporto"] },
          ],
          hints: [
            "Use single meal verbs (*desayuno, almuerzo/como, ceno*) instead of *tener*.",
            "Include definite articles (*el/la/los/las*) in your likes and dislikes.",
            "Add *porque* + an agreeing adjective for each opinion.",
          ],
          commonError: "Forgetting *el/la/los/las* before foods after *me encanta(n)* or *odio*, or forgetting plural agreement.",
        },
        {
          id: "food-market-restaurant-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Write an authentic market dialogue with exact quantities and total",
          question: "Write a short 4-line dialogue in Spanish at a Spanish fruit-and-food stall. Include:\n1. The stallholder greeting the customer politely\n2. The customer asking for two exact weights or containers (no articles after *de*!)\n3. The customer asking for the total price\n4. The stallholder stating a euro price using *con*",
          marks: 4,
          modelAnswer:
            "Dependiente: Buenos días, ¿qué desea?\nCliente: Póngame medio kilo de manzanas y una docena de huevos, por favor.\nCliente: Nada más, gracias. ¿Cuánto es en total?\nDependiente: Son cuatro euros con cincuenta.",
          markScheme: [
            { point: "Polite stallholder greeting (*¿qué desea? / ¿qué le pongo?*)", keywords: ["que desea", "que le pongo", "buenos dias"] },
            { point: "Two accurate quantities with *de* (*kilo de / gramos de / docena de / barra de / botella de / litro de*)", keywords: ["kilo de", "gramos de", "docena de", "barra de", "botella de", "litro de", "lata de"] },
            { point: "Asking the total price (*¿cuánto es?*)", keywords: ["cuanto es", "cuanto cuesta"] },
            { point: "Price in euros using *euros con* or *euros*", keywords: ["euros con", "son"] },
          ],
          hints: [
            "Open with formal *usted* (*¿Qué desea?* / *Póngame...*).",
            "Check that no *el/la/los/las* sneaks in after *de*.",
            "State the price with *Son ... euros con ...*.",
          ],
          commonError: "Writing *un medio kilo de las manzanas* instead of *medio kilo de manzanas*.",
        },
        {
          id: "food-market-restaurant-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Combine Present and Preterite accurately in a short food blog",
          question: "Write a short paragraph (45–60 words) in Spanish comparing what you normally eat at home with a Spanish dish you tried recently. Mention:\n1. What you normally eat (Present tense)\n2. Where you went recently (Preterite)\n3. What Spanish dish you ordered or tried (Preterite)\n4. Your past opinion of it (*me encantó / fue...*)",
          marks: 4,
          modelAnswer:
            "Normalmente como pasta o ensalada en casa con mi familia porque es sano y rápido. Sin embargo, el sábado pasado fui a un restaurante español en el centro. Pedí paella de mariscos y probé gazpacho de primer plato. Me encantó la paella porque fue deliciosa y muy sabrosa.",
          markScheme: [
            { point: "Habitual routine in Present tense (*normalmente / suelo / como / ceno*)", keywords: ["normalmente", "suelo", "como", "ceno", "desayuno"] },
            { point: "Past visit using Preterite of *ir* (*fui / fuimos*)", keywords: ["fui", "fuimos"] },
            { point: "Ordering or trying a dish in Preterite (*pedí / probé / comí*)", keywords: ["pedi", "probe", "comi", "pedimos", "probamos"] },
            { point: "Justified past opinion (*me encantó / me gustó / fue*)", keywords: ["me encanto", "me encantaron", "me gusto", "fue", "fueron"] },
          ],
          hints: [
            "Start with *Normalmente...* for Present tense, then switch with *Sin embargo, el sábado pasado...*.",
            "Remember final accents on *pedí, probé, comí, me encantó*.",
            "Use *fue* (singular) or *fueron* (plural) to justify your past opinion.",
          ],
          commonError: "Forgetting accents on *probé / pedí / me encantó* or slipping back into Present *es* for a past meal.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -------------------------------------------------------------------------
    {
      id: "food-market-restaurant-p2",
      title: "Practice Paper 2 — Restaurant Role-Play, Problems & Three Tenses",
      questions: [
        {
          id: "food-market-restaurant-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ordering-in-restaurant",
          strategy: "Use Quisiera for polite restaurant ordering",
          question: "Translate into Spanish (using *Quisiera*): 'For dessert, I would like strawberry ice cream.'",
          answer: {
            type: "text",
            accept: [
              "De postre, quisiera helado de fresa",
              "De postre, quisiera helado de fresa.",
              "De postre quisiera helado de fresa",
              "De postre, quisiera un helado de fresa",
              "De postre, quisiera un helado de fresa.",
            ],
            display: "De postre, quisiera helado de fresa.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Para postre, quisiera helado de fresa", "Para postre quisiera helado de fresa"] },
              feedback: "Use **de** for meal courses: *De postre* (only drinks take *para beber*!).",
            },
          ],
          hints: [
            "'For dessert' uses the course preposition *de*.",
            "'Strawberry ice cream' = *helado de fresa*.",
          ],
          solution: ["**De postre, quisiera helado de fresa.**"],
        },
        {
          id: "food-market-restaurant-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Match estar and plural adjectives in complaints",
          question: "Translate into Spanish: 'The potatoes are too salty.' (Use *las patatas*)",
          answer: {
            type: "text",
            accept: ["Las patatas están demasiado saladas", "Las patatas están demasiado saladas."],
            display: "Las patatas están demasiado saladas.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Las patatas son demasiado saladas", "Las patatas son demasiado saladas."] },
              feedback: "Food tasting too salty right now is a restaurant complaint — use **están** (*estar*), not *son*!",
            },
            {
              spec: { type: "text", accept: ["Las patatas están demasiado salados", "Las patatas están demasiado salados."] },
              feedback: "*Las patatas* is feminine plural, so use **saladas**.",
            },
          ],
          hints: [
            "Use plural *estar* (*están*) with an accent on *á*.",
            "Remember *demasiado* ('too') does not change before an adjective, whereas *salada* becomes plural *saladas*.",
          ],
          solution: ["Feminine plural *las patatas* + **están** + *demasiado* + **saladas**: **Las patatas están demasiado saladas.**"],
        },
        {
          id: "food-market-restaurant-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Match faltar to plural missing tableware",
          question: "Translate into Spanish: 'Two glasses are missing.'",
          answer: {
            type: "text",
            accept: ["Faltan dos vasos", "Faltan dos vasos."],
            display: "Faltan dos vasos.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Falta dos vasos", "Falta dos vasos."] },
              feedback: "Because *dos vasos* is plural, *faltar* must be plural: **Faltan dos vasos**.",
            },
          ],
          hints: [
            "*Dos vasos* is plural, so add *-n* to *falta*.",
            "'Glass' (for water/juice) = *el vaso*.",
          ],
          solution: ["Plural missing items take **faltan**: **Faltan dos vasos.**"],
        },
        {
          id: "food-market-restaurant-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Omit un/una after ser for dietary identities",
          question: "Translate into Spanish (male speaker): 'I am vegetarian.'",
          answer: {
            type: "text",
            accept: ["Soy vegetariano", "Soy vegetariano.", "Yo soy vegetariano", "Yo soy vegetariano."],
            display: "Soy vegetariano.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Soy un vegetariano", "Soy un vegetariano."] },
              feedback: "Drop *un* after *ser* for diets, nationalities and professions: **Soy vegetariano.**",
            },
          ],
          hints: [
            "Use *ser* (*soy*), not *estar*.",
            "Do NOT include *un*.",
          ],
          solution: ["**Soy vegetariano.** (No indefinite article *un*!)"],
        },
        {
          id: "food-market-restaurant-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Use tener alergia a + definite article",
          question: "Which sentence accurately translates 'I am allergic to shellfish'?",
          options: [
            "Soy alergia a los mariscos.",
            "Tengo alergia de mariscos.",
            "Estoy alérgico de los mariscos.",
            "Tengo alergia a los mariscos.",
          ],
          answerIndex: 3,
          hints: [
            "Spanish expresses allergies with *tener alergia a*.",
            "Keep the definite article before *mariscos*.",
          ],
          explanation:
            "**Tengo alergia a los mariscos** uses the authentic construction *tener alergia a* + definite article. *Soy alergia* literally says 'I am an allergy'!",
        },
        {
          id: "food-market-restaurant-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Know essential restaurant tableware vocabulary",
          question: "Translate into Spanish (with definite article): 'the napkin'.",
          answer: {
            type: "text",
            accept: ["la servilleta"],
            display: "la servilleta",
          },
          hints: [
            "It is a feminine noun starting with *serv-*.",
            "Include *la*.",
          ],
          solution: ["**la servilleta** (feminine noun)."],
        },
        {
          id: "food-market-restaurant-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Apply -gar → -gué in yo preterite",
          question: "Give the *yo* Preterite form of **pagar** (I paid).",
          answer: {
            type: "text",
            accept: ["pagué", "yo pagué"],
            display: "pagué",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pagé", "yo pagé"] },
              feedback: "Without the silent *u*, *ge* would be pronounced like an English *h*! Write **pagué**.",
            },
          ],
          hints: [
            "*-gar* verbs insert a *u* before *-é* in the *yo* Preterite.",
            "Don't forget the written accent on *-é*.",
          ],
          solution: ["Replace *-gar* with **-gué**: **pagué**."],
        },
        {
          id: "food-market-restaurant-p2-q08",
          kind: "short",
          difficulty: "challenge",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Apply 3rd-person e→i preterite shift in pedir",
          question: "Give the *él/ella* Preterite form of **pedir** (he/she ordered).",
          answer: {
            type: "text",
            accept: ["pidió", "él pidió", "ella pidió"],
            display: "pidió",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pedió", "él pedió", "ella pedió"] },
              feedback: "In 3rd-person Preterite, *-ir* stem-changer *pedir* shifts *e → i*: **pidió**!",
            },
          ],
          hints: [
            "*Pedir* is an *-ir* sandal/sole verb in the Preterite.",
            "Shift *e → i* and add accented *-ió*.",
          ],
          solution: ["Shift stem *ped-* → *pid-* and add *-ió*: **pidió**."],
        },
        {
          id: "food-market-restaurant-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Form Immediate Future with ir a + infinitive",
          question: "Translate into Spanish using the Immediate Future: 'Tomorrow I am going to try empanadas.'",
          answer: {
            type: "text",
            accept: [
              "Mañana voy a probar empanadas",
              "Mañana voy a probar empanadas.",
              "Mañana voy a probar las empanadas",
              "Mañana voy a probar las empanadas.",
            ],
            display: "Mañana voy a probar empanadas.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Mañana voy probar empanadas", "Mañana voy probar empanadas."] },
              feedback: "Never forget the preposition **a** between *voy* and the infinitive: *voy **a** probar*!",
            },
          ],
          hints: [
            "Immediate Future formula: *voy a* + infinitive.",
            "Keep *probar* in the infinitive (do not conjugate it!).",
          ],
          solution: ["*Mañana* + *voy a* + infinitive *probar* + *empanadas*: **Mañana voy a probar empanadas.**"],
        },
        {
          id: "food-market-restaurant-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Form Simple Future by adding endings to full infinitive",
          question: "Give the *nosotros* Simple Future form of **comer** (we will eat).",
          answer: {
            type: "text",
            accept: ["comeremos", "nosotros comeremos", "nosotras comeremos"],
            display: "comeremos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["comerémos", "nosotros comerémos"] },
              feedback: "*Nosotros* (*-emos*) is the ONLY Simple Future ending with NO written accent: **comeremos**!",
            },
          ],
          hints: [
            "Attach *-emos* directly to the full infinitive *comer*.",
            "Check carefully whether *nosotros* takes a written accent in Simple Future (it does NOT!).",
          ],
          solution: ["Full infinitive *comer* + *-emos* (no accent): **comeremos**."],
        },
        {
          id: "food-market-restaurant-p2-q11",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Use irregular Simple Future stem of hacer",
          question: "Which sentence accurately translates 'Next Sunday we will make a Spanish omelette'?",
          options: [
            "El próximo domingo haceremos una tortilla española.",
            "El próximo domingo haremos una tortilla española.",
            "El próximo domingo hicimos una tortilla española.",
            "El próximo domingo hacemos una tortilla española.",
          ],
          answerIndex: 1,
          hints: [
            "*Hacer* has an irregular Simple Future stem (*har-*).",
            "Attach the *nosotros* ending *-emos* (no accent!).",
          ],
          explanation:
            "**Haremos** (*har-* + *-emos*) is the irregular Simple Future of *hacer*. *Haceremos* wrongly uses the regular stem, *hicimos* is Preterite, and *hacemos* is Present.",
        },
        {
          id: "food-market-restaurant-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "market-quantities",
          strategy: "Choose exact container and price words in context",
          question: "Read this market note: *Necesito un paquete de pasta, dos latas de tomate y una caja de fresas.* Which items are on the list?",
          options: [
            "A packet of pasta, two tins of tomato and a punnet/box of strawberries",
            "A loaf of pasta, two bottles of tomato and a kilo of strawberries",
            "A kilo of pasta, two slices of tomato and a dozen strawberries",
            "A packet of pasta, two cartons of tomato and a bag of strawberries",
          ],
          answerIndex: 0,
          hints: [
            "Translate *paquete*, *latas* and *caja* carefully.",
            "Distinguish *lata* (tin/can) from *botella* (bottle) and *trozo* (slice).",
          ],
          explanation:
            "*Un paquete* = a packet, *dos latas* = two tins/cans, and *una caja* = a box/punnet.",
        },
        {
          id: "food-market-restaurant-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "ordering-in-restaurant",
          strategy: "Write a polite restaurant complaint using estar, faltar and dietary needs",
          question: "You are eating in a Spanish restaurant and three things go wrong. Write 3–4 polite sentences in Spanish to the waiter. Include:\n1. A polite formal opener (*Excuse me, waiter*)\n2. One complaint about food temperature or taste (using the right verb!)\n3. One missing tableware item\n4. A dietary requirement or allergy",
          marks: 4,
          modelAnswer:
            "Perdone, camarero, tengo un problema. La sopa está fría y el pollo está demasiado salado. Además, falta una cuchara y el vaso está sucio. Por favor, recuerde que soy vegetariana y tengo alergia a los frutos secos.",
          markScheme: [
            { point: "Polite formal opener (*perdone / disculpe / camarero*)", keywords: ["perdone", "disculpe", "camarero", "camarera"] },
            { point: "Food state complaint with **está / están** + adjective (*frío/a, salado/a, crudo/a, sucio/a*)", keywords: ["esta fria", "esta frio", "estan frias", "estan frios", "esta salado", "esta salada", "esta crudo", "esta sucio", "esta sucia"] },
            { point: "Missing item using **falta / faltan**", keywords: ["falta ", "faltan "] },
            { point: "Dietary need or allergy (*vegetariano/a, vegano/a, alergia*)", keywords: ["vegetariano", "vegetariana", "vegano", "vegana", "alergia"] },
          ],
          hints: [
            "Start with *Perdone, camarero...*.",
            "Check that temperature/cleanliness complaints use *está / están* (not *es / son*).",
            "Include *falta un/una...* and *Soy vegetariano/a* or *Tengo alergia a...*.",
          ],
          commonError: "Using *es fría* instead of *está fría*, or writing *soy un vegetariano*.",
        },
        {
          id: "food-market-restaurant-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Write a balanced restaurant review in the Preterite",
          question: "Write a 45–60 word review in Spanish of a restaurant you visited last weekend. Include:\n1. Who you went with (Preterite)\n2. What you ordered and drank (Preterite)\n3. One positive detail and one problem you noticed\n4. Whether you recommend it or will return (Future)",
          marks: 4,
          modelAnswer:
            "El fin de semana pasado fui a un restaurante mexicano con mi familia. De primer plato pedí ensalada, de segundo comí tacos picantes y bebí zumo de naranja. La comida fue deliciosa y el camarero fue muy simpático, pero la sopa estaba un poco fría. Sin embargo, lo recomiendo y volveré el mes que viene.",
          markScheme: [
            { point: "Past visit with companion (*fui / fuimos* + *con*)", keywords: ["fui", "fuimos"] },
            { point: "Ordering / eating / drinking in Preterite (*pedí / comí / bebí / probé*)", keywords: ["pedi", "comi", "bebi", "probe", "pedimos", "comimos"] },
            { point: "Balanced contrast connective (*pero / sin embargo / aunque*)", keywords: ["pero", "sin embargo", "aunque"] },
            { point: "Recommendation or future return (*recomiendo / volveré / voy a volver / iré*)", keywords: ["recomiendo", "volvere", "voy a volver", "ire", "voy a ir", "regresare"] },
          ],
          hints: [
            "Use *fui* + *con mi familia / mis amigos*.",
            "Include at least two Preterite food verbs (*pedí, comí, bebí, probé*).",
            "Contrast positive and negative with *pero* or *sin embargo*, then close with a Future verb.",
          ],
          commonError: "Forgetting to include a contrast connective or leaving out the future sentence.",
        },
        {
          id: "food-market-restaurant-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "hispanic-cuisine-tenses",
          strategy: "Weave Present, Preterite, Immediate Future and Simple Future smoothly",
          question: "Write a 60–80 word Spanish paragraph about Hispanic food across **all four Year 9 tenses**. Include:\n1. What you usually eat during the week (Present)\n2. A traditional Hispanic dish you tried in the past (Preterite)\n3. What you are going to cook or eat this weekend (Immediate Future)\n4. A dish you will try on a future trip to Spain or Latin America (Simple Future)",
          marks: 4,
          modelAnswer:
            "Durante la semana normalmente desayuno cereales y como pescado con verduras en casa. El verano pasado viajé a Valencia con mis padres donde probé paella auténtica y me encantó porque fue riquísima. Este sábado voy a cocinar una tortilla española con mi hermano. Además, el año que viene visitaré Andalucía y probaré el gazpacho tradicional.",
          markScheme: [
            { point: "Present tense routine (*normalmente / desayuno / como / ceno / suelo*)", keywords: ["desayuno", "como", "ceno", "almuerzo", "suelo"] },
            { point: "Preterite past meal (*probé / comí / pedí / fui / viajé*)", keywords: ["probe", "comi", "pedi", "fui", "viaje"] },
            { point: "Immediate Future (*voy a* + infinitive)", keywords: ["voy a", "vamos a"] },
            { point: "Simple Future form (*probaré / comeré / visitaré / pediré / cocinaré / iré*)", keywords: ["probare", "comere", "visitare", "pedire", "cocinare", "ire", "hare"] },
          ],
          hints: [
            "Anchor every sentence with a clear time expression (*normalmente, el verano pasado, este sábado, el año que viene*).",
            "Use *voy a* + infinitive for Immediate Future.",
            "Attach *-é* directly to the full infinitive for Simple Future (*probaré, comeré*).",
          ],
          commonError: "Using Immediate Future twice instead of showcasing one Immediate Future AND one Simple Future.",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 stretch questions, 3-step hints each)
  // ===========================================================================
  challenge: [
    {
      id: "food-market-restaurant-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "food-opinions-mealtimes",
      strategy: "Audit every agreement link in a complex food sentence",
      question: "This sentence contains **three** grammar mistakes. Type the fully corrected Spanish sentence:\n*Me gusta las uvas y la agua frío porque es dulces.*",
      answer: {
        type: "text",
        accept: [
          "Me gustan las uvas y el agua fría porque son dulces",
          "Me gustan las uvas y el agua fría porque son dulces.",
        ],
        display: "Me gustan las uvas y el agua fría porque son dulces.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me gustan las uvas y el agua frío porque son dulces", "Me gustan las uvas y el agua frío porque son dulces."] },
          feedback: "Almost! *Agua* takes *el* in singular, but it is still feminine — so the adjective must be **fría**!",
        },
      ],
      hints: [
        "Check *gustar* and *ser* when there are two items (*las uvas y el agua*) — plural!",
        "Check both the article AND the adjective gender for singular *agua*.",
        "Fix all three mismatches: pluralise *gustar*, swap the article + adjective gender on *agua*, and pluralise *ser*.",
      ],
      solution: [
        "Compound subject (*las uvas y el agua*) is plural → **Me gustan** and **son**.",
        "*Agua* is feminine taking *el* in singular → **el agua fría**.",
        "Corrected sentence: **Me gustan las uvas y el agua fría porque son dulces.**",
      ],
    },
    {
      id: "food-market-restaurant-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "market-quantities",
      strategy: "Solve a multi-step Spanish market budget puzzle",
      question: "Read the market price board:\n- *Manzanas: 2,40 € / kg*\n- *Jamón serrano: 28,00 € / kg*\n- *Huevos: 3,20 € / docena*\n\nMateo buys *medio kilo de manzanas*, *cien gramos de jamón serrano* and *media docena de huevos*. He pays with a €10 note. How much change (in euros) does he receive? (Give a decimal number to 2 d.p., e.g. `2.50`.)",
      answer: {
        type: "number",
        value: 4.4,
        tolerance: 0.001,
        display: "4.40",
      },
      traps: [
        {
          spec: { type: "number", value: 5.6 },
          feedback: "€5.60 is the TOTAL spent — the question asks for his **change** from €10!",
        },
      ],
      hints: [
        "Work out each item: ½ kg apples, 0.1 kg (100 g) ham, ½ dozen eggs.",
        "Add €1.20 + €2.80 + €1.60 to get the total bill.",
        "Subtract the total (€5.60) from €10.00 to find his change.",
      ],
      solution: [
        "Apples (½ kg) = €2.40 ÷ 2 = €1.20.",
        "Ham (100 g = 0.1 kg) = €28.00 × 0.1 = €2.80.",
        "Eggs (½ dozen) = €3.20 ÷ 2 = €1.60.",
        "Total = €1.20 + €2.80 + €1.60 = €5.60. Change from €10 = **€4.40**.",
      ],
    },
    {
      id: "food-market-restaurant-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ordering-in-restaurant",
      strategy: "Distinguish ser vs estar meaning shifts with food adjectives",
      question: "Compare these two comments about a bowl of soup:\n1. *Esta sopa **es** muy rica.*\n2. *Esta sopa **está** muy rica.*\n\nWhat is the subtle difference in natural Spanish?",
      options: [
        "Both mean 'expensive'; *es* is polite while *está* is informal.",
        "With *es* it means nutritious/rich in ingredients; with *está* it means it tastes delicious right now.",
        "With *es* it means the soup is cold; with *está* it means the soup is freshly heated.",
        "With *es* it describes only desserts; with *está* it describes only meat dishes.",
      ],
      answerIndex: 1,
      hints: [
        "Recall the *ser* (inherent quality) vs *estar* (immediate sensory impression/taste) distinction.",
        "Think about the exclamation *¡Qué rico está!* when you taste food.",
        "*Ser rico* (for food/soil) refers to being rich/nutritious, whereas *estar rico* means 'to taste yummy/delicious'!",
      ],
      explanation:
        "With food, **estar rico/a** means 'to taste delicious' (sensory experience right now), whereas **ser rico/a** describes an inherent quality such as being rich in nutrients (or wealthy for a person).",
    },
    {
      id: "food-market-restaurant-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "hispanic-cuisine-tenses",
      strategy: "Master 3rd-person plural preterite stem-changers and spelling changes",
      question: "Translate into Spanish: 'Yesterday my friends ordered paella and I paid the bill.'",
      answer: {
        type: "text",
        accept: [
          "Ayer mis amigos pidieron paella y yo pagué la cuenta",
          "Ayer mis amigos pidieron paella y yo pagué la cuenta.",
          "Ayer mis amigos pidieron paella y pagué la cuenta",
          "Ayer mis amigos pidieron paella y pagué la cuenta.",
          "Ayer mis amigos pidieron la paella y yo pagué la cuenta",
          "Ayer mis amigos pidieron la paella y yo pagué la cuenta.",
        ],
        display: "Ayer mis amigos pidieron paella y yo pagué la cuenta.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer mis amigos pedieron paella y yo pagué la cuenta", "Ayer mis amigos pedieron paella y pagué la cuenta"] },
          feedback: "*Pedir* changes *e → i* in 3rd-person plural Preterite: **pidieron**, not *pedieron*!",
        },
        {
          spec: { type: "text", accept: ["Ayer mis amigos pidieron paella y yo pagé la cuenta", "Ayer mis amigos pidieron paella y pagé la cuenta"] },
          feedback: "Check *-gar* in *yo* Preterite: **pagué** (with *u* and accent on *é*)!",
        },
      ],
      hints: [
        "Both verbs belong in the Preterite (*Ayer*).",
        "*Pedir* is an *-ir* sandal verb: shift *e → i* in the 3rd-person plural Preterite stem before adding *-ieron*.",
        "*Pagar* is a *-gar* verb: insert *u* before accented *-é* in the *yo* Preterite.",
      ],
      solution: [
        "'My friends ordered' = *mis amigos* **pidieron** (*e → i* sandal change).",
        "'I paid the bill' = *(yo)* **pagué** *la cuenta* (*-gar → -gué*).",
        "Full sentence: **Ayer mis amigos pidieron paella y yo pagué la cuenta.**",
      ],
    },
    {
      id: "food-market-restaurant-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "hispanic-cuisine-tenses",
      strategy: "Use irregular Simple Future stems accurately",
      question: "Complete both gaps in the **Simple Future** (*poner* and *tener*): *Mañana nosotros ______ la mesa y ______ una cena especial.*",
      answer: {
        type: "text",
        accept: ["pondremos / tendremos", "pondremos, tendremos", "pondremos y tendremos"],
        display: "pondremos / tendremos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["poneremos / teneremos", "poneremos, teneremos", "poneremos y teneremos"] },
          feedback: "Both *poner* and *tener* are irregular in Simple Future: stems **pondr-** and **tendr-**!",
        },
      ],
      hints: [
        "Both *poner* and *tener* replace *-e-* with *-d-* in their Simple Future stems.",
        "Stems: *pondr-* and *tendr-*.",
        "Add the *nosotros* ending *-emos* (remember: NO accent on *-emos*!).",
      ],
      solution: [
        "*Poner* → irregular stem *pondr-* + *-emos* = **pondremos**.",
        "*Tener* → irregular stem *tendr-* + *-emos* = **tendremos**.",
      ],
    },
    {
      id: "food-market-restaurant-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ordering-in-restaurant",
      strategy: "Read subtle details in an authentic restaurant dialogue",
      question: "Read the exchange:\n- *Cliente:* *¿La tortilla lleva cebolla? Es que no la soporto.*\n- *Camarera:* *La normal sí, pero podemos prepararle una sin cebolla en quince minutos, o si tiene prisa, la ensalada mixta sale enseguida.*\n- *Cliente:* *No tengo prisa, prefiero esperar.*\n\nWhat will the customer eat?",
      options: [
        "The regular tortilla with onion right away",
        "A freshly made tortilla without onion after 15 minutes",
        "A mixed salad immediately because he is in a rush",
        "Nothing, because the kitchen has run out of eggs",
      ],
      answerIndex: 1,
      hints: [
        "Translate *lleva cebolla* ('contains onion') and *no la soporto* ('I can't stand it').",
        "Translate *si tiene prisa* ('if you are in a hurry') and *sale enseguida* ('comes out right away').",
        "Notice the customer's final reply: *No tengo prisa, prefiero esperar* ('I'm not in a hurry, I prefer to wait').",
      ],
      explanation:
        "Because the customer hates onion (*no la soporto*) and is not in a hurry (*no tengo prisa, prefiero esperar*), he chooses to wait 15 minutes for a **tortilla without onion**.",
    },
    {
      id: "food-market-restaurant-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "market-quantities",
      strategy: "Combine market shopping, weights, opinions and future cooking plans",
      question: "Write a 60–80 word Spanish journal entry about preparing a Spanish feast for your family. Include:\n1. Two specialist shops you visited today (Preterite)\n2. At least three exact quantities/containers you bought (following the zero-article rule)\n3. How much you paid in total (Preterite of *pagar*)\n4. What dish you are going to cook tonight (Immediate Future) and why you think everyone will love it (Simple Future)",
      marks: 5,
      modelAnswer:
        "Esta mañana fui a la frutería y a la pescadería en el mercado central. Compré un kilo de tomates, medio kilo de gambas y una botella de aceite de oliva. En total pagué dieciocho euros con cincuenta. Esta noche voy a cocinar una paella de mariscos para toda mi familia. Creo que les encantará y que cenaremos de maravilla.",
      markScheme: [
        { point: "Visit to specialist shop(s) in Preterite (*fui / visité* + *frutería / carnicería / pescadería / panadería / mercado*)", keywords: ["fruteria", "pescaderia", "carniceria", "panaderia", "mercado"] },
        { point: "Preterite buying verb (*compré / pedí*)", keywords: ["compre", "pedi", "compramos"] },
        { point: "Exact market quantities with *de* (*kilo de, gramos de, botella de, docena de, barra de, litro de*)", keywords: ["kilo de", "gramos de", "botella de", "docena de", "barra de", "litro de"] },
        { point: "Accurate Preterite of *pagar* (*pagué*) or total cost (*euros*)", keywords: ["pague", "euros"] },
        { point: "Immediate Future (*voy a*) and/or Simple Future (*encantará / cenaremos / comeremos / será*)", keywords: ["voy a", "encantara", "cenaremos", "comeremos", "sera", "gustara"] },
      ],
      hints: [
        "Use specialist shops (*la frutería, la pescadería, la carnicería, la panadería*).",
        "Check every quantity phrase has *de* + bare noun (*medio kilo de gambas*, NOT *de las gambas*).",
        "Spell *pagué* with *-gué* and include both *voy a + inf.* and a Simple Future verb.",
      ],
      commonError: "Writing *pagé* instead of *pagué* or inserting definite articles after *de* in quantities.",
    },
    {
      id: "food-market-restaurant-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "ordering-in-restaurant",
      strategy: "Deliver a nuanced, multi-tense TripAdvisor-style restaurant review",
      question: "Write an 80–100 word Spanish review of a memorable Spanish restaurant meal. Include:\n1. When you went, who with, and what courses you ordered (Preterite)\n2. One specific problem with the food or tableware (using accurate *estar* or *faltar*)\n3. How the waiter solved the problem\n4. A balanced conclusion with a Future tense prediction about returning",
      marks: 5,
      modelAnswer:
        "El sábado pasado fui con mis amigos a un restaurante tradicional en Madrid. De primer plato pedí gazpacho y de segundo plato comí tortilla española, mientras que mi amigo pidió paella. Al principio hubo un pequeño problema: faltaba un tenedor y la tortilla estaba un poco fría. Sin embargo, el camarero fue muy amable, se disculpó y nos trajo otro plato caliente enseguida. Aunque el servicio fue un poco lento, la comida fue riquísima y sin duda volveré el mes que viene.",
      markScheme: [
        { point: "Past visit with time marker and *fui / fuimos*", keywords: ["fui", "fuimos"] },
        { point: "Ordering courses with *pedí / comí / pidió* and course phrases (*primer plato / segundo plato / postre*)", keywords: ["pedi", "comi", "pidio", "primer plato", "segundo plato", "de postre"] },
        { point: "Specific restaurant problem using *falta/faltaba* or *está/estaba* + state adjective", keywords: ["falta", "faltaba", "faltaban", "estaba fria", "estaba frio", "esta fria", "esta frio", "sucio", "sucia", "salado", "salada"] },
        { point: "Waiter's response (*camarero / camarera / trajo / cambió / disculpó*)", keywords: ["camarero", "camarera", "trajo", "cambio", "disculpo", "amable"] },
        { point: "Balanced connective (*sin embargo / aunque / pero*) + Future verb (*volveré / iré / regresaré / voy a volver*)", keywords: ["volvere", "ire", "regresare", "voy a volver", "probare", "volvere", "volvera"] },
      ],
      hints: [
        "Set the scene in the Preterite (*El sábado pasado fui... pedí... comí...*).",
        "Use *estaba frío/a* (or *está*) and *faltaba* (or *falta*) for the problem.",
        "Use *sin embargo* or *aunque* to balance your verdict, and finish with *volveré* or *voy a volver*.",
      ],
      commonError: "Describing the whole meal in the Present tense or forgetting to mention how the waiter reacted.",
    },
  ],
};
