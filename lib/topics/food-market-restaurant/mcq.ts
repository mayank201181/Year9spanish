import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Core Food Opinions, Mealtimes & Market Quantities
  // ===========================================================================
  {
    id: "food-market-restaurant-m1",
    title: "MCQ Paper 1 — Food Opinions, Mealtimes & Market Basics",
    questions: [
      {
        id: "food-market-restaurant-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "food-opinions-mealtimes",
        strategy: "Check Spanish meal verbs instead of literal English translations",
        question: "Which sentence correctly translates 'I have breakfast at eight o'clock' into natural Spanish?",
        options: [
          "Desayuno a las ocho.",
          "Tengo desayuno a las ocho.",
          "Hago desayuno a las ocho.",
          "Estoy desayunando las ocho.",
        ],
        answerIndex: 0,
        hints: [
          "Spanish has a dedicated verb meaning 'to have breakfast'.",
          "Avoid translating English 'have' literally with *tener*.",
        ],
        explanation:
          "Spanish uses the single verb **desayunar** (*desayuno* = I have breakfast). Saying *tengo desayuno* or *hago desayuno* is a literal English translation error.",
      },
      {
        id: "food-market-restaurant-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "food-opinions-mealtimes",
        strategy: "Run the 3-Check Agreement Scan (article, verb, adjective)",
        question: "Complete the sentence accurately: *Me ______ las fresas porque son muy ______.*",
        options: [
          "encanta / dulce",
          "encantan / dulces",
          "encanto / dulces",
          "encantan / dulzas",
        ],
        answerIndex: 1,
        hints: [
          "Check whether *las fresas* is singular or plural.",
          "Remember that adjectives ending in *-e* add *-s* in the plural.",
        ],
        explanation:
          "*Las fresas* is plural, so *encantar* takes the plural ending **encantan**, and *dulce* becomes plural **dulces**. *Encanto* would mean 'I charm', and *dulzas* is not a Spanish word.",
      },
      {
        id: "food-market-restaurant-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "food-opinions-mealtimes",
        strategy: "Match daily meals to authentic Spanish times",
        question: "In Spain, which meal is typically eaten around 17:30–18:30 as a light afternoon snack?",
        options: [
          "el desayuno",
          "el almuerzo",
          "la merienda",
          "la cena",
        ],
        answerIndex: 2,
        hints: [
          "Think about the meal between the big midday lunch and late evening dinner.",
          "Its matching verb is the stem-changer *merendar* (*meriendo*).",
        ],
        explanation:
          "**La merienda** is the traditional late-afternoon snack (often a *bocadillo* or fruit). *La cena* is eaten much later, around 21:00–22:00.",
      },
      {
        id: "food-market-restaurant-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Watch irregular feminine nouns starting with stressed a-",
        question: "Which phrase correctly means 'the cold water' in Spanish?",
        options: [
          "la agua fría",
          "el agua frío",
          "la agua frío",
          "el agua fría",
        ],
        answerIndex: 3,
        hints: [
          "Singular *agua* takes a masculine-looking article to avoid two stressed *a* sounds colliding.",
          "Despite that article, the noun itself stays feminine, so check the adjective ending!",
        ],
        explanation:
          "**El agua fría** is correct: *agua* is feminine (so the adjective is **fría**), but singular *agua* uses **el** for smooth pronunciation. Writing *el agua frío* forgets that *agua* is still feminine.",
      },
      {
        id: "food-market-restaurant-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Check definite articles with general food opinions",
        question: "Which sentence accurately says 'I hate peas, but I prefer fish'?",
        options: [
          "Odio guisantes, pero prefiero pez.",
          "Odio los guisantes, pero prefiero el pescado.",
          "Odio los guisantes, pero prefiero el pez.",
          "Odio las guisantes, pero prefiero la pescado.",
        ],
        answerIndex: 1,
        hints: [
          "Spanish requires a definite article before general foods after *odiar* and *preferir*.",
          "Distinguish between a living fish in water and fish prepared to eat.",
        ],
        explanation:
          "**Odio los guisantes, pero prefiero el pescado** keeps both mandatory definite articles and uses **el pescado** (fish as food), whereas *el pez* means a living fish.",
      },
      {
        id: "food-market-restaurant-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "market-quantities",
        strategy: "Apply the Market Zero-Article Rule after de",
        question: "How do you ask for 'a kilo of apples' at a Spanish market stall?",
        options: [
          "un kilo de las manzanas",
          "un kilo manzanas",
          "un kilo de manzanas",
          "una kilo de manzanas",
        ],
        answerIndex: 2,
        hints: [
          "Check the gender of *kilo* and whether an article belongs after *de*.",
          "Quantities follow the pattern: weight + *de* + bare food noun.",
        ],
        explanation:
          "**Un kilo de manzanas** follows the rule that no definite article (*las*) is placed after **de** in quantity expressions. *Un kilo de las manzanas* adds an unwanted article.",
      },
      {
        id: "food-market-restaurant-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Check half-measures without un/una",
        question: "Which Spanish phrase correctly translates 'half a kilo of tomatoes'?",
        options: [
          "un medio kilo de tomates",
          "media kilo de tomates",
          "medio kilo de los tomates",
          "medio kilo de tomates",
        ],
        answerIndex: 3,
        hints: [
          "Never place *un* before *medio* in Spanish half-measures.",
          "Check both the gender of *kilo* and the zero-article rule after *de*.",
        ],
        explanation:
          "**Medio kilo de tomates** drops *un* before *medio*, matches masculine *kilo*, and omits *los* after *de*. Writing *un medio kilo* is a common English interference slip.",
      },
      {
        id: "food-market-restaurant-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Match container nouns to food items",
        question: "At the bakery and grocer's, how do you ask for 'a loaf of bread and a dozen eggs'?",
        options: [
          "una barra de pan y una docena de huevos",
          "un barra de pan y una docena huevos",
          "una caja de pan y un docena de huevos",
          "una lata de pan y una docena de los huevos",
        ],
        answerIndex: 0,
        hints: [
          "Check the gender of *barra* and *docena* — both end in *-a*.",
          "Remember that Spanish requires *de* after *docena* even though English drops 'of'.",
        ],
        explanation:
          "**Una barra de pan y una docena de huevos** uses feminine *una* for both containers and includes the mandatory **de** before *huevos*.",
      },
      {
        id: "food-market-restaurant-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Distinguish cien vs ciento for exact hundreds",
        question: "You want to buy exactly 100 grams of cured ham. What do you say to the stallholder?",
        options: [
          "Póngame ciento gramos de jamón.",
          "Póngame cien gramos de el jamón.",
          "Póngame cien gramos de jamón.",
          "Póngame cien kilos de jamón.",
        ],
        answerIndex: 2,
        hints: [
          "Exactly 100 before a noun uses the shortened form without *-to*.",
          "Check that there is no article after *de*.",
        ],
        explanation:
          "Exactly 100 before a noun is **cien** (*cien gramos de jamón*); *ciento* is only used from 101 to 199 (e.g. *ciento cincuenta gramos*). *Cien kilos* would be an enormous 100 kg of ham!",
      },
      {
        id: "food-market-restaurant-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Match specialist Spanish food shops to products",
        question: "Where would you go in Spain to buy fresh prawns (*gambas*) and salmon?",
        options: [
          "a la carnicería",
          "a la panadería",
          "a la frutería",
          "a la pescadería",
        ],
        answerIndex: 3,
        hints: [
          "Look for the root word meaning fish (*pescado*) inside the shop name.",
          "Spanish shop names often end in *-ería*.",
        ],
        explanation:
          "**La pescadería** is the fishmonger's (from *pescado*). *La carnicería* sells meat, *la panadería* sells bread, and *la frutería* sells fruit and vegetables.",
      },
      {
        id: "food-market-restaurant-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ordering-in-restaurant",
        strategy: "Use the 3 De's and a Para rule for courses",
        question: "Which set of prepositions completes this restaurant order? *______ primer plato quiero sopa y ______ beber quiero agua.*",
        options: [
          "De / para",
          "Para / de",
          "En / por",
          "Por / para",
        ],
        answerIndex: 0,
        hints: [
          "Starters, main courses and desserts all share one preposition.",
          "Drinks switch to the preposition meaning 'in order to'.",
        ],
        explanation:
          "Courses take **de** (*de primer plato, de segundo plato, de postre*), whereas drinks take **para** (*para beber*). Swapping them (*para primer plato*) sounds unnatural in Spanish.",
      },
      {
        id: "food-market-restaurant-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Use estar for temporary restaurant complaints",
        question: "Your tomato soup arrives lukewarm and dirty cutlery is on the table. Which complaint is grammatically accurate?",
        options: [
          "La sopa es fría y el tenedor es sucio.",
          "La sopa está fría y el tenedor está sucio.",
          "La sopa está frío y el tenedor está sucia.",
          "La sopa son frías y el tenedor está sucio.",
        ],
        answerIndex: 1,
        hints: [
          "Temperature and dirtiness at a restaurant are temporary conditions, not permanent traits.",
          "Check gender agreement: *la sopa* is feminine and *el tenedor* is masculine.",
        ],
        explanation:
          "Restaurant complaints about temperature or cleanliness always use **estar**, with exact gender agreement: **La sopa está fría y el tenedor está sucio**. Using *es fría* implies the soup is supposed to be cold.",
      },
      {
        id: "food-market-restaurant-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Match faltar to singular or plural missing items",
        question: "How do you tell the waiter politely that a spoon is missing?",
        options: [
          "Perdone, faltan una cuchara.",
          "Perdone, falta un cuchara.",
          "Perdone, estoy sin una cuchara.",
          "Perdone, falta una cuchara.",
        ],
        answerIndex: 3,
        hints: [
          "Check whether one item or multiple items are missing to choose *falta* vs *faltan*.",
          "Check the gender of *cuchara*.",
        ],
        explanation:
          "**Perdone, falta una cuchara** uses singular **falta** for one missing item and feminine **una cuchara**. *Faltan* is only used for plural missing items (e.g. *faltan dos cucharas*).",
      },
      {
        id: "food-market-restaurant-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Recognise iconic Hispanic dishes from ingredients",
        question: "Which traditional Spanish dish is a chilled Andalusian soup blended from tomatoes, cucumber, pepper, garlic and olive oil?",
        options: [
          "el gazpacho",
          "la paella",
          "la tortilla española",
          "las croquetas",
        ],
        answerIndex: 0,
        hints: [
          "Think of a cold soup eaten during hot summers in southern Spain.",
          "Paella is a Valencian rice dish, and tortilla is a potato omelette.",
        ],
        explanation:
          "**El gazpacho** is Andalusia's famous cold tomato-and-vegetable soup. *La paella* is Valencian rice, *la tortilla española* is potato omelette, and *las croquetas* are fried béchamel bites.",
      },
      {
        id: "food-market-restaurant-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Apply -gar spelling change in yo preterite",
        question: "Choose the accurate translation of 'Yesterday I ordered paella and paid twenty euros.'",
        options: [
          "Ayer pregunté paella y pagé veinte euros.",
          "Ayer pedí paella y pagué veinte euros.",
          "Ayer pedí paella y pagé veinte euros.",
          "Ayer pidí paella y pagué veinte euros.",
        ],
        answerIndex: 1,
        hints: [
          "Remember *pedir* (to order) vs *preguntar* (to ask a question); *pedir* does not stem-change in the *yo* preterite.",
          "Verbs ending in *-gar* insert a silent *u* before *-é* in the *yo* preterite.",
        ],
        explanation:
          "**Ayer pedí paella y pagué veinte euros** correctly uses *pedí* (no stem change in *yo*) and **pagué** (*-gar* → *-gué* to preserve the hard *g* sound). *Pregunté* means 'asked a question' and *pagé* is misspelt.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Market Calculations, Restaurant Role-Play & Stem-Changers
  // ===========================================================================
  {
    id: "food-market-restaurant-m2",
    title: "MCQ Paper 2 — Market Maths, Restaurant Problems & Verbs",
    questions: [
      {
        id: "food-market-restaurant-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Decode Spanish weights and calculate totals accurately",
        question: "At *la frutería*, strawberries cost €4.80 per kilo and bananas cost €2.00 per kilo. Sofía asks: *Póngame un cuarto de kilo de fresas y medio kilo de plátanos.* How much does she pay in total?",
        options: [
          "€3.40",
          "€2.80",
          "€2.20",
          "€4.40",
        ],
        answerIndex: 2,
        hints: [
          "Work out what fraction of a kilo *un cuarto de kilo* and *medio kilo* represent.",
          "Quarter of €4.80 is €1.20; half of €2.00 is €1.00.",
        ],
        explanation:
          "*Un cuarto de kilo* (¼ kg) of strawberries = €4.80 ÷ 4 = €1.20; *medio kilo* (½ kg) of bananas = €2.00 ÷ 2 = €1.00. Total = **€2.20**. €3.40 mistakes *cuarto* for *medio* (€2.40 + €1.00).",
      },
      {
        id: "food-market-restaurant-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Match packaging containers to everyday supermarket goods",
        question: "Which shopping list pairs every Spanish container with the right item?",
        options: [
          "una lata de atún, un paquete de galletas, una botella de aceite",
          "una barra de atún, una lata de galletas, un trozo de aceite",
          "una docena de atún, una botella de galletas, una caja de aceite",
          "un litro de atún, una barra de galletas, una lata de aceite",
        ],
        answerIndex: 0,
        hints: [
          "Check which items come in tins (*lata*), packets (*paquete*) and bottles (*botella*).",
          "Eliminate impossible pairs such as a loaf (*barra*) of tuna or a slice (*trozo*) of oil.",
        ],
        explanation:
          "**Una lata de atún** (a tin of tuna), **un paquete de galletas** (a packet of biscuits) and **una botella de aceite** (a bottle of oil) are all authentic container pairings.",
      },
      {
        id: "food-market-restaurant-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "market-quantities",
        strategy: "Identify shopkeeper vs customer phrases",
        question: "A stallholder smiles and asks: *¿Algo más?* What is the most natural reply if you have finished shopping?",
        options: [
          "Póngame un kilo de peras.",
          "¿Qué me recomienda hoy?",
          "La carta, por favor.",
          "Nada más, gracias. ¿Cuánto es?",
        ],
        answerIndex: 3,
        hints: [
          "*¿Algo más?* asks whether you would like anything else.",
          "Look for the polite closing phrase meaning 'Nothing else, thanks.'",
        ],
        explanation:
          "**Nada más, gracias. ¿Cuánto es?** politely closes your market order and asks for the total. *Póngame un kilo* would add another item, and *la carta* is for a restaurant.",
      },
      {
        id: "food-market-restaurant-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Drop un/una before dietary identities after ser",
        question: "Elena wants to tell the waiter she is vegetarian and allergic to nuts. Which sentence is 100% accurate?",
        options: [
          "Soy una vegetariana y soy alergia a frutos secos.",
          "Soy vegetariana y tengo alergia a los frutos secos.",
          "Estoy vegetariana y tengo alergia de frutos secos.",
          "Soy vegetariano y tengo alergia a los frutos secos.",
        ],
        answerIndex: 1,
        hints: [
          "Spanish omits *un/una* after *ser* with diets/identities, and Elena is female.",
          "Allergies use *tener alergia a* + definite article.",
        ],
        explanation:
          "**Soy vegetariana y tengo alergia a los frutos secos** agrees with female speaker Elena, drops *una*, and uses **tener alergia a + los**. *Soy una vegetariana* adds an unnecessary article.",
      },
      {
        id: "food-market-restaurant-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Choose formal usted phrases with restaurant staff",
        question: "You are unsure which main course to pick and want to ask the waiter for a recommendation. What should you say?",
        options: [
          "¿Qué me recomienda de segundo plato?",
          "¿Qué te recomiendo de segundo plato?",
          "¿Qué me preguntas de segundo plato?",
          "¿Qué me faltas de segundo plato?",
        ],
        answerIndex: 0,
        hints: [
          "You are asking *usted* (the waiter) to recommend something to *me*.",
          "*Recomendar* is an *e → ie* stem-changer in the present tense.",
        ],
        explanation:
          "**¿Qué me recomienda de segundo plato?** uses formal *usted* (*recomienda*) and indirect pronoun *me* ('to me'). *¿Qué te recomiendo?* reverses the meaning to 'What do I recommend to you?'",
      },
      {
        id: "food-market-restaurant-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Watch plural agreement with faltar and tableware",
        question: "Four friends sit at a table with only two glasses and no napkins. Which sentence reports both problems accurately?",
        options: [
          "Falta dos vasos y faltan las servilletas.",
          "Faltan dos vasos y falta servilletas.",
          "Faltan dos vasos y faltan servilletas.",
          "Están faltando dos vasos y un servilleta.",
        ],
        answerIndex: 2,
        hints: [
          "Both *dos vasos* and *servilletas* are plural, so check the ending of *faltar*.",
          "Avoid adding *las* when saying 'napkins (in general) are missing'.",
        ],
        explanation:
          "Because both *dos vasos* and *servilletas* are plural, use **faltan** in both halves: **Faltan dos vasos y faltan servilletas**. Singular *falta* cannot pair with *dos vasos*.",
      },
      {
        id: "food-market-restaurant-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Conjugate stem-changing meal verbs in the present tense",
        question: "Which pair correctly fills the gaps? *Normalmente yo ______ a las dos y mi hermana ______ a las seis.*",
        options: [
          "almorzo / merenda",
          "almuerzo / merienda",
          "almuerza / meriendo",
          "almorcé / merienda",
        ],
        answerIndex: 1,
        hints: [
          "Check the time marker *normalmente* — both verbs must be Present tense.",
          "*Almorzar* changes *o → ue* and *merendar* changes *e → ie* inside the boot.",
        ],
        explanation:
          "**Almuerzo** (*yo*, *o → ue*) and **merienda** (*ella*, *e → ie*) are both accurate present-tense stem-changers. *Almorcé* is Preterite and clashes with *normalmente*.",
      },
      {
        id: "food-market-restaurant-m2-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Check 3rd-person stem changes in -ir preterite verbs",
        question: "Read the mini-story and pick the accurate preterite verb: *Anoche mi padre ______ cordero asado y mis primos ______ tortilla española.*",
        options: [
          "pedió / pedieron",
          "pidió / pedieron",
          "pedió / pidieron",
          "pidió / pidieron",
        ],
        answerIndex: 3,
        hints: [
          "*Pedir* is an *-ir* stem-changing verb, which makes a 'sandal/sole' change in the Preterite.",
          "Both 3rd-person singular (*él*) and 3rd-person plural (*ellos*) shift *e → i*.",
        ],
        explanation:
          "In the Preterite, *-ir* stem-changers like *pedir* shift **e → i** in both *él/ella* (**pidió**) and *ellos/ellas* (**pidieron**). *Pedió* and *pedieron* are classic traps.",
      },
      {
        id: "food-market-restaurant-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Match past opinion verbs to singular vs plural dishes",
        question: "Which sentence accurately says 'I loved the croquettes because they were very tasty'?",
        options: [
          "Me encantaron las croquetas porque fueron muy sabrosas.",
          "Me encantó las croquetas porque fue muy sabrosas.",
          "Me encantaron las croquetas porque fueron muy sabroso.",
          "Me encantan las croquetas porque fueron muy sabrosas.",
        ],
        answerIndex: 0,
        hints: [
          "Check both the tense (past!) and the gender/number of *las croquetas* (feminine plural).",
          "Every verb and adjective linked to *las croquetas* must be plural.",
        ],
        explanation:
          "**Me encantaron las croquetas porque fueron muy sabrosas** matches feminine plural *las croquetas* across **encantaron**, **fueron** and **sabrosas**. *Me encantó* and *fue* are singular.",
      },
      {
        id: "food-market-restaurant-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Apply -zar → -cé spelling change in yo preterite",
        question: "Translate 'Yesterday I had lunch with my friends in the town centre.'",
        options: [
          "Ayer almorzé con mis amigos en el centro.",
          "Ayer almorcé con mis amigos en el centro.",
          "Ayer almuercé con mis amigos en el centro.",
          "Ayer almorzó con mis amigos en el centro.",
        ],
        answerIndex: 1,
        hints: [
          "Wait — *-ar* verbs NEVER stem-change in the Preterite (*o* does not become *ue*).",
          "Before *-é*, Spanish spelling changes *z* into *c*.",
        ],
        explanation:
          "**Ayer almorcé con mis amigos en el centro** applies *-zar → -cé* without any *o → ue* stem change. *Almuercé* wrongly keeps the present boot stem, and *almorzó* means 'he/she had lunch'.",
      },
      {
        id: "food-market-restaurant-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Check accents in Simple Future endings",
        question: "Complete the future plan accurately: *El próximo verano nosotros ______ paella en Valencia y yo ______ gazpacho.*",
        options: [
          "comerémos / probaré",
          "comeremos / probare",
          "comeremos / probaré",
          "comemos / probaré",
        ],
        answerIndex: 2,
        hints: [
          "Simple Future adds endings directly to the full infinitive.",
          "Five of the six Simple Future endings carry a written accent — which ONE person does NOT?",
        ],
        explanation:
          "In the Simple Future, **nosotros** (*-emos*) is the ONLY form without a written accent (**comeremos**), while *yo* always carries an accent on *-é* (**probaré**). *Comemos* is Present/Preterite.",
      },
      {
        id: "food-market-restaurant-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "food-opinions-mealtimes",
        strategy: "Match taste adjectives to food descriptions",
        question: "Which Spanish adjective best describes Mexican jalapeño chillies (*chiles*)?",
        options: [
          "dulces",
          "salados",
          "amargos",
          "picantes",
        ],
        answerIndex: 3,
        hints: [
          "Think of the word related to 'piquant' or 'spicy'.",
          "*Dulce* = sweet, *salado* = salty, *amargo* = bitter.",
        ],
        explanation:
          "**Picantes** means spicy/hot (in flavour). *Dulces* (sweet), *salados* (salty) and *amargos* (bitter) describe completely different tastes.",
      },
      {
        id: "food-market-restaurant-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "market-quantities",
        strategy: "Read a short Spanish market receipt carefully",
        question: "Read the receipt: *1 kg de patatas (1,60 €) · 200 g de queso (12,00 € / kg) · 2 barras de pan (0,90 € cada una)*. What is the exact total?",
        options: [
          "5,20 €",
          "4,90 €",
          "5,80 €",
          "6,40 €",
        ],
        answerIndex: 2,
        hints: [
          "200 g is one-fifth (0.2) of a kilo — divide €12.00 by 5.",
          "Add €1.60 + €2.40 + (2 × €0.90).",
        ],
        explanation:
          "Potatoes = €1.60; 200 g of cheese = €12.00 × 0.2 = €2.40; 2 loaves of bread = 2 × €0.90 = €1.80. Total = €1.60 + €2.40 + €1.80 = **5,80 €**. €4.90 forgets to double the bread.",
      },
      {
        id: "food-market-restaurant-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Distinguish ser vs estar with food descriptions",
        question: "Which sentence correctly contrasts a dish's normal nature with a complaint today? 'The soup is delicious normally, but today it is too salty.'",
        options: [
          "La sopa está deliciosa normalmente, pero hoy es demasiado salada.",
          "La sopa es deliciosa normalmente, pero hoy está demasiado salada.",
          "La sopa es delicioso normalmente, pero hoy está demasiado salado.",
          "La sopa está deliciosa normalmente, pero hoy está demasiado salado.",
        ],
        answerIndex: 1,
        hints: [
          "Use *ser* for a general permanent trait and *estar* for how the food tastes right now.",
          "Check feminine agreement with *la sopa* in both adjectives.",
        ],
        explanation:
          "**Es deliciosa** describes the soup's usual quality, while **está demasiado salada** expresses the problem with today's bowl — and both adjectives agree with feminine *la sopa*.",
      },
      {
        id: "food-market-restaurant-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Check irregular verb forms in Immediate Future vs Simple Future",
        question: "Read this sentence: *El sábado voy a ir a un mercado y ______ muchos platos nuevos.* Which Simple Future verb fits best?",
        options: [
          "probaré",
          "probé",
          "pruebo",
          "probaría",
        ],
        answerIndex: 0,
        hints: [
          "Look at the time frame: *El sábado* + *voy a ir* points to the future.",
          "Identify the Simple Future *yo* ending (*-é* attached to the full infinitive).",
        ],
        explanation:
          "**Probaré** ('I will try') matches the future time frame (*el sábado*). *Probé* is Preterite ('I tried'), *pruebo* is Present ('I try'), and *probaría* is Conditional ('I would try').",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Reading Comprehension, Nuance & Multi-Tense Mastery
  // ===========================================================================
  {
    id: "food-market-restaurant-m3",
    title: "MCQ Paper 3 — Authentic Texts, Traps & Multi-Tense Mastery",
    questions: [
      {
        id: "food-market-restaurant-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Read Spanish texts for contrasting opinions with sin embargo",
        question: "Read Mateo's blog: *En casa desayunamos fruta y yogur, aunque los domingos vamos a una cafetería para comer churros. Sin embargo, no soporto el café porque es demasiado amargo.* Which statement is TRUE?",
        options: [
          "Mateo eats churros at home every morning.",
          "Mateo loves drinking bitter coffee on Sundays.",
          "Mateo never eats fruit or yoghurt at home.",
          "Mateo dislikes coffee because of its bitter taste.",
        ],
        answerIndex: 3,
        hints: [
          "Translate *no soporto* ('I can't stand') and *amargo* ('bitter').",
          "Watch the contrast words *aunque* ('although') and *sin embargo* ('however').",
        ],
        explanation:
          "*No soporto el café porque es demasiado amargo* means Mateo can't stand coffee because it is too bitter. He only has churros on Sundays at a café, not daily at home.",
      },
      {
        id: "food-market-restaurant-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Check gender agreement of media vs medio",
        question: "You only need six eggs and 500 grams of cheese. Which order is completely accurate?",
        options: [
          "Quisiera medio docena de huevos y media kilo de queso.",
          "Quisiera una media docena de huevos y medio kilo de queso.",
          "Quisiera media docena de huevos y medio kilo de queso.",
          "Quisiera media docena huevos y medio kilo de queso.",
        ],
        answerIndex: 2,
        hints: [
          "*Docena* is feminine and *kilo* is masculine, so *medio/a* must agree with each.",
          "Remember: drop *un/una* before *medio/media*, and keep *de* before *huevos*.",
        ],
        explanation:
          "**Media docena de huevos** (feminine *docena*, no *una*, mandatory *de*) and **medio kilo de queso** (masculine *kilo*) are both 100% accurate.",
      },
      {
        id: "food-market-restaurant-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-in-restaurant",
        strategy: "Read a Spanish menú del día carefully for inclusions",
        question: "A café sign reads: *Menú del día: 13,50 € — Primer plato, segundo plato, pan, bebida y postre o café. IVA incluido.* What is INCLUDED in the €13.50 price?",
        options: [
          "Starter, main, bread, drink and either dessert or coffee",
          "Starter, main, bread, drink, dessert and also a tip",
          "Two starters, bread, sparkling water and two coffees",
          "Main course, dessert and coffee, but drinks cost extra",
        ],
        answerIndex: 0,
        hints: [
          "Look closely at the word *o* between *postre* and *café*.",
          "*IVA incluido* means VAT/tax is included, not a tip (*propina*).",
        ],
        explanation:
          "The sign offers starter, main, bread, drink, and **postre o café** (either dessert OR coffee), with tax (*IVA*) included. A tip (*la propina*) is never automatically included.",
      },
      {
        id: "food-market-restaurant-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ordering-in-restaurant",
        strategy: "Decode waiter responses to restaurant complaints",
        question: "Customer: *Perdone, el pollo está crudo y no tengo cuchillo.* Waiter: *Lo siento muchísimo, ahora mismo le traigo otro plato y un cuchillo limpio.* What is the waiter going to do?",
        options: [
          "Bring the bill immediately and apologise for the wait",
          "Bring a replacement dish and a clean knife right away",
          "Warm up the soup and bring a clean fork right away",
          "Offer a free dessert because the chicken is sold out",
        ],
        answerIndex: 1,
        hints: [
          "Translate *ahora mismo* ('right away') and *le traigo* ('I'll bring you').",
          "Check *otro plato* and *un cuchillo limpio*.",
        ],
        explanation:
          "*Ahora mismo le traigo otro plato y un cuchillo limpio* means 'Right away I'll bring you another dish and a clean knife.' The chicken was raw (*crudo*), not sold out.",
      },
      {
        id: "food-market-restaurant-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Identify the tense of irregular preterite vs present forms",
        question: "Read Lucía's review: *El viernes fuimos a un restaurante mexicano. Comimos tacos picantes y el servicio fue excelente, así que volveremos pronto.* How many tenses appear in her review?",
        options: [
          "Only one tense (Present)",
          "Two tenses (Present and Preterite)",
          "Two tenses (Present and Simple Future)",
          "Two tenses (Preterite and Simple Future)",
        ],
        answerIndex: 3,
        hints: [
          "Check the time markers *El viernes* (past) and *pronto* ('soon').",
          "Classify *fuimos, comimos, fue* and *volveremos*.",
        ],
        explanation:
          "*Fuimos*, *comimos* and *fue* are **Preterite** (completed past visit on Friday), and *volveremos* ('we will return') is **Simple Future**. No Present tense verb appears.",
      },
      {
        id: "food-market-restaurant-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Catch the subtle accent difference between Present yo and Preterite él",
        question: "Compare: (1) *Siempre **ceno** a las nueve.* vs (2) *Ayer **cenó** a las once.* What is the subject and tense of *cenó*?",
        options: [
          "he / she / you (formal) — Preterite",
          "I — Preterite",
          "he / she / you (formal) — Present",
          "I — Simple Future",
        ],
        answerIndex: 0,
        hints: [
          "In *-ar* verbs, unaccented *-o* is Present *yo*, while accented *-ó* belongs to another person in the past.",
          "Compare *cené* (I had dinner) with *cenó*.",
        ],
        explanation:
          "Unaccented *ceno* = 'I have dinner' (Present *yo*), whereas accented **cenó** = 'he/she/usted had dinner' (Preterite 3rd-person singular). Missing or misplacing that accent changes both person and tense!",
      },
      {
        id: "food-market-restaurant-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Avoid false friends and gender traps in food nouns",
        question: "Which group contains ONLY **feminine** Spanish food nouns?",
        options: [
          "sal, carne, leche, arroz",
          "agua, pan, miel, ensalada",
          "sal, carne, leche, cebolla",
          "fruta, sopa, queso, verdura",
        ],
        answerIndex: 2,
        hints: [
          "Test each noun with *el* or *la* — watch out for nouns ending in consonants or *-e*!",
          "*La sal*, *la carne* and *la leche* are all feminine; check *arroz*, *pan* and *queso*.",
        ],
        explanation:
          "**La sal**, **la carne**, **la leche** and **la cebolla** are all feminine. *El arroz*, *el pan* and *el queso* are masculine.",
      },
      {
        id: "food-market-restaurant-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Understand colloquial Spanish market expressions",
        question: "At a Madrid market stall, a vendor calls out: *¿Quién es el último?* Why is the vendor asking this?",
        options: [
          "To ask who wants to buy the last loaf of bread",
          "To find out who is at the back of the queue",
          "To ask who paid with a twenty-euro note",
          "To check who is closing the stall at midday",
        ],
        answerIndex: 1,
        hints: [
          "In Spanish markets, customers often stand loosely around the counter rather than in a straight line.",
          "*El último* means 'the last person'.",
        ],
        explanation:
          "In Spain, shoppers ask **¿Quién es el último / la última?** ('Who is last?') to identify who is at the back of the informal queue so everyone is served in fair order!",
      },
      {
        id: "food-market-restaurant-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ordering-in-restaurant",
        strategy: "Check indirect object pronouns with traer and recomendar",
        question: "How do you politely ask a waiter: 'Could you bring us the bill, please?'",
        options: [
          "¿Puede traer la cuenta a nosotros, por favor?",
          "¿Nos puedes traes la cuenta, por favor?",
          "¿Nos traen la carta, por favor?",
          "¿Nos puede traer la cuenta, por favor?",
        ],
        answerIndex: 3,
        hints: [
          "Use formal *usted* (*puede*) followed by an infinitive (*traer*).",
          "Place the indirect object pronoun *nos* ('to us') directly before *puede*.",
        ],
        explanation:
          "**¿Nos puede traer la cuenta, por favor?** places *nos* before formal *puede* + infinitive *traer*. *Puedes traes* conjugates two verbs in a row, and *la carta* means the menu.",
      },
      {
        id: "food-market-restaurant-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Match Spanish dishes with their origins",
        question: "Which pairing matches each Hispanic dish to the place most famous for it?",
        options: [
          "paella — Mexico; tacos — Valencia; ceviche — Madrid",
          "gazpacho — Peru; churros — Argentina; empanadas — Valencia",
          "paella — Valencia; gazpacho — Andalusia; ceviche — Peru",
          "tortilla española — Peru; tacos — Andalusia; paella — Madrid",
        ],
        answerIndex: 2,
        hints: [
          "Think of Valencia's rice fields, Andalusia's hot summers and Peru's Pacific coast.",
          "Tacos are iconic in Mexico, not Valencia.",
        ],
        explanation:
          "**Paella** originates in Valencia, **gazpacho** in Andalusia (southern Spain), and **ceviche** (citrus-cured fish) is Peru's national dish.",
      },
      {
        id: "food-market-restaurant-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Spot irregular Simple Future stems in context",
        question: "Choose the correct Simple Future form of *poner* and *hacer*: *Mañana yo ______ la mesa y mi madre ______ una tortilla.*",
        options: [
          "poneré / hacerá",
          "pondré / hará",
          "puse / hizo",
          "pondré / hacerá",
        ],
        answerIndex: 1,
        hints: [
          "Both *poner* and *hacer* have irregular stems in the Simple Future.",
          "*Poner* → *pondr-* and *hacer* → *har-*.",
        ],
        explanation:
          "**Pondré** (*poner* → *pondr- + -é*) and **hará** (*hacer* → *har- + -á*) are the accurate irregular Simple Future forms. *Poneré* and *hacerá* wrongly use regular infinitive stems; *puse / hizo* are Preterite.",
      },
      {
        id: "food-market-restaurant-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "food-opinions-mealtimes",
        strategy: "Use soler + infinitive for habitual routines",
        question: "Which sentence accurately says 'We usually have dinner at nine o'clock'?",
        options: [
          "Solemos cenar a las nueve.",
          "Suelimos cenar a las nueve.",
          "Solemos cenamos a las nueve.",
          "Suelen cenar a las nueve.",
        ],
        answerIndex: 0,
        hints: [
          "*Soler* (*o → ue*) does NOT stem-change in *nosotros* (outside the boot!).",
          "Follow *soler* directly with an infinitive, never a second conjugated verb.",
        ],
        explanation:
          "**Solemos cenar a las nueve** keeps the unshifted stem *sol-* in *nosotros* and follows it with infinitive **cenar**. *Suelen* means 'they usually', and *solemos cenamos* double-conjugates.",
      },
      {
        id: "food-market-restaurant-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-quantities",
        strategy: "Read euro decimals spoken with con",
        question: "The baker says: *Son siete euros con cuarenta y cinco.* Which price appears on the till?",
        options: [
          "7,54 €",
          "7,45 €",
          "6,45 €",
          "7,15 €",
        ],
        answerIndex: 1,
        hints: [
          "Translate *siete* (7) and *cuarenta y cinco* (45).",
          "*Con* separates euros from cents.",
        ],
        explanation:
          "*Siete euros con cuarenta y cinco* = **7,45 €**. Watch the order of digits: *cuarenta y cinco* is 45, not 54 (*cincuenta y cuatro*).",
      },
      {
        id: "food-market-restaurant-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ordering-in-restaurant",
        strategy: "Interpret implied problems in a realistic restaurant review",
        question: "Read Carlos's 2-star review: *La comida estaba riquísima y el camarero fue muy amable, pero esperamos cuarenta minutos por el primer plato y la cuenta tenía un error de diez euros.* Why did Carlos only give two stars?",
        options: [
          "The food tasted awful and the waiter was rude.",
          "He was allergic to the starter and left early.",
          "The dishes arrived cold and the glasses were dirty.",
          "The service was very slow and the bill was wrong.",
        ],
        answerIndex: 3,
        hints: [
          "Notice the word *pero* — everything before *pero* was positive!",
          "Translate *esperamos cuarenta minutos* and *la cuenta tenía un error*.",
        ],
        explanation:
          "Carlos praised both the delicious food (*riquísima*) and friendly waiter (*muy amable*), but complained about a **40-minute wait** and a **€10 mistake on the bill**.",
      },
      {
        id: "food-market-restaurant-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hispanic-cuisine-tenses",
        strategy: "Combine three tenses cleanly in one sentence",
        question: "Which sentence correctly uses Present, Preterite AND Immediate Future in sequence?",
        options: [
          "Suelo comer pasta, ayer comí paella y mañana comeré tacos.",
          "Normalmente comí pasta, ayer como paella y mañana voy a comer tacos.",
          "Normalmente como pasta, ayer comí paella y mañana voy a comer tacos.",
          "Normalmente como pasta, ayer comía paella y mañana comeré tacos.",
        ],
        answerIndex: 2,
        hints: [
          "Check that each verb matches its time marker (*normalmente*, *ayer*, *mañana*).",
          "Distinguish Immediate Future (*voy a + infinitive*) from Simple Future (*comeré*).",
        ],
        explanation:
          "**Normalmente como pasta** (Present), **ayer comí paella** (Preterite) and **mañana voy a comer tacos** (Immediate Future) hits all three requested tenses accurately. *Comeré* is Simple Future, not Immediate Future.",
      },
    ],
  },
];
