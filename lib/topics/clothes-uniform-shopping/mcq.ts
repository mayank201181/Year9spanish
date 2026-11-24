import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "clothes-uniform-shopping-m1",
    title: "MCQ Paper 1 — Clothes, Colours, Uniform & Demonstratives",
    questions: [
      {
        id: "clothes-uniform-shopping-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothes-colours-agreement",
        question: "How do you say **'a red T-shirt'** with accurate Spanish word order and agreement?",
        options: [
          "una camiseta roja",
          "una roja camiseta",
          "un camiseta rojo",
          "una camiseta rojo",
        ],
        answerIndex: 0,
        hints: [
          "In Spanish, colours follow the garment noun rather than coming before it.",
          "*La camiseta* is feminine singular, so adjust the ending of *rojo*.",
        ],
        explanation:
          "**Una camiseta roja** places the colour AFTER the noun and agrees *rojo → roja* with feminine singular *camiseta*.",
      },
      {
        id: "clothes-uniform-shopping-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothes-colours-agreement",
        question: "Which Spanish phrase accurately translates **'a black dress'**?",
        options: [
          "una vestido negra",
          "un vestido negro",
          "una vestida negra",
          "un vestido negra",
        ],
        answerIndex: 1,
        hints: [
          "Watch the classic Year 9 gender trap: *vestido* ends in *-o* and keeps masculine agreement!",
          "Match BOTH the article and the colour adjective to masculine singular.",
        ],
        explanation:
          "**Un vestido negro** is correct because **el vestido** is grammatically masculine even though dresses are usually worn by women.",
      },
      {
        id: "clothes-uniform-shopping-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothes-colours-agreement",
        question: "Choose the Spain-standard Spanish translation of **'blue jeans and white trainers'**.",
        options: [
          "unos vaqueros azul y unas zapatillas blanco",
          "unas vaqueras azules y unos zapatos blancos",
          "unos vaqueros azules y unas zapatillas blancas",
          "unos azules vaqueros y unas blancas zapatillas",
        ],
        answerIndex: 2,
        hints: [
          "Both garments are plural (*vaqueros* = m.pl., *zapatillas* = f.pl.), and colours sit AFTER each noun.",
          "*Azul* adds *-es* in the plural, while *blanco* changes to *-as* for feminine plural.",
        ],
        explanation:
          "**Unos vaqueros azules y unas zapatillas blancas** puts colours after the nouns and agrees *azul → azules* (m.pl.) and *blanco → blancas* (f.pl.).",
      },
      {
        id: "clothes-uniform-shopping-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothes-colours-agreement",
        question: "How do you say **'a striped cotton shirt'** accurately in Spanish?",
        options: [
          "una camisa rayada de algodona",
          "una de rayas camisa de algodón",
          "una camisa de rayo de algodón",
          "una camisa de rayas de algodón",
        ],
        answerIndex: 3,
        hints: [
          "Pattern and material phrases introduced by *de* sit AFTER the noun and NEVER change their ending.",
          "Remember plural *rayas* and the written accent on *algodón*.",
        ],
        explanation:
          "**Una camisa de rayas de algodón** uses the invariable pattern **de rayas** and material **de algodón** after the noun *camisa*.",
      },
      {
        id: "clothes-uniform-shopping-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothes-colours-agreement",
        question: "Which sentence uses the noun **la ropa** (*clothes*) with 100% accurate grammar?",
        options: [
          "La ropa de marca es muy cara.",
          "Las ropas de marca son muy caras.",
          "La ropa de marca son muy caras.",
          "El ropa de marca es muy caro.",
        ],
        answerIndex: 0,
        hints: [
          "Unlike English 'clothes', *la ropa* is ALWAYS singular in Spanish!",
          "Keep the article, verb and adjective feminine singular.",
        ],
        explanation:
          "**La ropa de marca es muy cara** treats **la ropa** as feminine singular (verb **es**, adjective **cara**).",
      },
      {
        id: "clothes-uniform-shopping-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-uniform-debate",
        question: "What does the uniform argument **'El uniforme ahorra tiempo por la mañana'** mean?",
        options: [
          "Uniform looks old-fashioned in winter.",
          "Uniform saves time in the morning.",
          "Uniform costs families too much money.",
          "Uniform stops pupils showing creativity.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the verb *ahorrar* (to save) and *tiempo* (time).",
          "*Por la mañana* tells you when the benefit happens.",
        ],
        explanation:
          "**Ahorra tiempo por la mañana** means *'saves time in the morning'* because you do not need to decide what to wear.",
      },
      {
        id: "clothes-uniform-shopping-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-uniform-debate",
        question: "Which sentence accurately states a school rule: **'It is forbidden to wear jewellery'**?",
        options: [
          "Es prohibido llevar joyas.",
          "Está prohibido llevo joyas.",
          "Está prohibido llevar joyas.",
          "Está prohibida llevar joyas.",
        ],
        answerIndex: 2,
        hints: [
          "Impersonal bans use **estar** (*está prohibido*, invariable masculine) + an **infinitive**.",
          "Never conjugate *llevar* straight after *está prohibido*.",
        ],
        explanation:
          "**Está prohibido llevar joyas** uses impersonal **está prohibido** followed directly by the infinitive **llevar**.",
      },
      {
        id: "clothes-uniform-shopping-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-uniform-debate",
        question: "Choose the sentence that accurately agrees every adjective with **el uniforme**.",
        options: [
          "El uniforme escolar es práctica y incómoda.",
          "El uniforme escolar es cómoda pero aburrida.",
          "La uniforme escolar es práctico y elegante.",
          "El uniforme escolar es práctico pero incómodo.",
        ],
        answerIndex: 3,
        hints: [
          "*El uniforme* is masculine singular, so both adjectives must end in *-o* (or *-e*).",
          "Check the written accents on *práctico* and *incómodo*.",
        ],
        explanation:
          "**El uniforme escolar es práctico pero incómodo** keeps masculine singular **el**, **práctico** and **incómodo** throughout.",
      },
      {
        id: "clothes-uniform-shopping-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shopping-demonstratives",
        question: "Choose the correct demonstrative for **'this coat'** (*el abrigo*, near the speaker).",
        options: [
          "este abrigo",
          "esto abrigo",
          "ese abrigo",
          "esta abrigo",
        ],
        answerIndex: 0,
        hints: [
          "Near speaker ('this') keeps the letter *t*.",
          "Before a masculine singular noun, NEVER use neuter *esto* — use the *-e* ending!",
        ],
        explanation:
          "**Este abrigo** is correct: masculine singular near demonstrative is **este** (*esto* is a neuter pronoun and never precedes a noun).",
      },
      {
        id: "clothes-uniform-shopping-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "Pointing across the shop, how do you ask **'How much do those boots cost?'** (*las botas*)?",
        options: [
          "¿Cuánto cuesta esas botas?",
          "¿Cuánto cuestan esas botas?",
          "¿Cuánto cuestan estas botas?",
          "¿Cuánto cuestan esos botas?",
        ],
        answerIndex: 1,
        hints: [
          "'Those' (further away) drops the *t* and matches feminine plural *las botas*.",
          "Plural garments require plural *costar* (**cuestan**).",
        ],
        explanation:
          "**¿Cuánto cuestan esas botas?** uses feminine plural far demonstrative **esas** and plural **cuestan** to match *las botas*.",
      },
      {
        id: "clothes-uniform-shopping-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "A customer tries on jeans (*los vaqueros*) and says they fit well. Which sentence is right?",
        options: [
          "Estos vaqueros me queda muy bien.",
          "Estos vaqueros me quedo muy bien.",
          "Estos vaqueros me quedan muy bien.",
          "Estas vaqueros me quedan muy bien.",
        ],
        answerIndex: 2,
        hints: [
          "*Quedar* agrees with the garment just like *gustar*: plural garment → *-an*.",
          "*Los vaqueros* is masculine plural (*estos*).",
        ],
        explanation:
          "**Estos vaqueros me quedan muy bien** matches masculine plural **estos** and plural **quedan** to *los vaqueros*.",
      },
      {
        id: "clothes-uniform-shopping-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shopping-demonstratives",
        question: "A shop assistant asks **'¿Qué talla usa?'** What are they asking you?",
        options: [
          "What colour jacket you prefer.",
          "Whether you are paying by card.",
          "Where you bought your trainers.",
          "What clothes size you wear.",
        ],
        answerIndex: 3,
        hints: [
          "*La talla* is the standard Spanish noun for clothes sizing (S, M, L or 36, 38, 40).",
          "Notice *usa* is polite *usted* of *usar*.",
        ],
        explanation:
          "**¿Qué talla usa?** means *'What clothes size do you wear?'* (For shoes, Spanish asks *¿Qué número calza?*).",
      },
      {
        id: "clothes-uniform-shopping-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "Choose the accurate Preterite sentence for **'Last Saturday I bought a green hoodie.'**",
        options: [
          "El sábado pasado compré una sudadera verde.",
          "El sábado pasado compro una sudadera verde.",
          "El sábado pasado compró una sudadera verde.",
          "El sábado pasado compraré una sudadera verde.",
        ],
        answerIndex: 0,
        hints: [
          "*El sábado pasado* requires *yo* Preterite of *comprar*.",
          "Watch the written accent: *-o* = Present *yo*, *-ó* = Preterite *él/ella*, *-é* = Preterite *yo*.",
        ],
        explanation:
          "**Compré** is the *yo* Preterite of *comprar* (accent on **é**). *Compro* is present, *compró* is *he/she bought*, and *compraré* is future.",
      },
      {
        id: "clothes-uniform-shopping-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "Complete the Immediate Future sentence: **'Para la fiesta ___ un vestido azul.'** (*I am going to wear…*)",
        options: [
          "voy llevar",
          "voy a llevar",
          "fui a llevar",
          "voy a llevo",
        ],
        answerIndex: 1,
        hints: [
          "Immediate Future ALWAYS requires three pieces: *ir* (Present) + *a* + infinitive.",
          "Never drop *a* or conjugate the second verb.",
        ],
        explanation:
          "**Voy a llevar** is the exact Immediate Future formula (*voy + a + infinitive*).",
      },
      {
        id: "clothes-uniform-shopping-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "What does **'El vestido costó veinticinco euros — ¡fue una ganga!'** mean?",
        options: [
          "The suit cost twenty euros — it was too tight!",
          "The skirt costs twenty euros — it is on display!",
          "The dress cost twenty-five euros — it was a bargain!",
          "The dress will cost fifty euros — it is expensive!",
        ],
        answerIndex: 2,
        hints: [
          "Check the tense of *costó* and *fue* (Preterite) and the meaning of *una ganga*.",
          "*Veinticinco* = 25, *el vestido* = the dress.",
        ],
        explanation:
          "**Costó** (*cost*, Preterite), **veinticinco** (25) and **una ganga** (*a bargain*) give *'The dress cost twenty-five euros — it was a bargain!'*",
      },
    ],
  },
  {
    id: "clothes-uniform-shopping-m2",
    title: "MCQ Paper 2 — Agreement Traps, Shop Role-Play & Uniform Debate",
    questions: [
      {
        id: "clothes-uniform-shopping-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothes-colours-agreement",
        question: "Which phrase spells the plural of **marrón** (*brown*) with 100% accuracy?",
        options: [
          "unos zapatos marrón",
          "unos zapatos marrónes",
          "unos zapatos marronas",
          "unos zapatos marrones",
        ],
        answerIndex: 3,
        hints: [
          "*Marrón* belongs to the consonant-ending 2-form group (adds *-es* for plural).",
          "When *-es* is added, stress naturally lands on the second-to-last syllable, so the accent drops!",
        ],
        explanation:
          "**Unos zapatos marrones** is correct: the plural of *marrón* adds *-es* and DROPS the written accent.",
      },
      {
        id: "clothes-uniform-shopping-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothes-colours-agreement",
        question: "Select the accurate translation of **'a navy blue skirt and grey socks'**.",
        options: [
          "una falda azul marino y unos calcetines grises",
          "una falda azula marina y unos calcetines gris",
          "una falda azul marino y unas calcetines grisas",
          "una falda azul marinas y unos calcetines grises",
        ],
        answerIndex: 0,
        hints: [
          "Two-word colour shades (*azul marino*) stay completely invariable!",
          "*Los calcetines* is masculine plural, so *gris* becomes *grises*.",
        ],
        explanation:
          "**Una falda azul marino y unos calcetines grises** keeps compound **azul marino** invariable and agrees *gris → grises* with masculine plural *calcetines*.",
      },
      {
        id: "clothes-uniform-shopping-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothes-colours-agreement",
        question: "What is the correct Spanish plural of **el jersey** (*the jumper*)?",
        options: [
          "los jerseys",
          "los jerséis",
          "las jerséis",
          "los jerseyes",
        ],
        answerIndex: 1,
        hints: [
          "*Jersey* is a loanword whose final *-y* turns into *-is* with an accent on *é* in Spain!",
          "Keep the masculine plural article *los*.",
        ],
        explanation:
          "In Spain-standard Spanish, the official RAE plural of *el jersey* is **los jerséis**.",
      },
      {
        id: "clothes-uniform-shopping-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-uniform-debate",
        question: "Which sentence applies BOTH the **y → e** rule and the **personal a** rule accurately?",
        options: [
          "El uniforme ahorra tiempo y iguala los alumnos.",
          "El uniforme ahorra tiempo e iguala los alumnos.",
          "El uniforme ahorra tiempo e iguala a los alumnos.",
          "El uniforme ahorra tiempo y iguala a los alumnos.",
        ],
        answerIndex: 2,
        hints: [
          "Before a word starting with the sound *i-* (*iguala*), *y* changes to *e*.",
          "Because *los alumnos* are people (direct object), insert the personal *a* after *iguala*.",
        ],
        explanation:
          "**El uniforme ahorra tiempo e iguala a los alumnos** smoothly changes *y → e* before *iguala* and includes the personal **a** before *los alumnos*.",
      },
      {
        id: "clothes-uniform-shopping-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-uniform-debate",
        question: "Read Lucía’s opinion: *'Aunque el uniforme evita la presión de las marcas, estoy en contra porque no nos deja mostrar nuestro estilo personal.'* What is Lucía’s overall stance?",
        options: [
          "She strongly supports keeping school uniform.",
          "She only dislikes the school tie in winter.",
          "She wants more expensive designer uniforms.",
          "She is against uniform despite admitting one pro.",
        ],
        answerIndex: 3,
        hints: [
          "Spot the main clause after *Aunque…*: *estoy en contra porque…*.",
          "Notice she concedes one pro (*evita la presión de las marcas*) before stating her own verdict.",
        ],
        explanation:
          "Lucía acknowledges one advantage (*avoids brand pressure*) with *Aunque*, but concludes **estoy en contra** (*I am against it*) because it stops students showing personal style.",
      },
      {
        id: "clothes-uniform-shopping-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-uniform-debate",
        question: "Which Spanish phrase translates **'I would like to wear my own clothes'**?",
        options: [
          "Me gustaría llevar mi propia ropa.",
          "Me gusta llevar mi propias ropas.",
          "Me gustaría llevo mi propia ropa.",
          "Me gustaría llevar mi propio ropa.",
        ],
        answerIndex: 0,
        hints: [
          "Follow *Me gustaría* directly with an infinitive (*llevar*).",
          "Remember *la ropa* is feminine singular → *mi propia ropa*.",
        ],
        explanation:
          "**Me gustaría llevar mi propia ropa** pairs *me gustaría* + infinitive **llevar** and feminine singular **propia ropa**.",
      },
      {
        id: "clothes-uniform-shopping-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "You hold up **a leather jacket** (*la chaqueta de cuero*) and ask **'Can I try it on?'** Choose the accurate question.",
        options: [
          "¿Puedo probármelo?",
          "¿Puedo probármela?",
          "¿Puedo probarla me?",
          "¿Puedo probármelas?",
        ],
        answerIndex: 1,
        hints: [
          "Match the direct object pronoun (*-lo / -la / -los / -las*) to feminine singular *la chaqueta*.",
          "Reflexive *me* always precedes direct object *la*, and the verb takes an accent on *á*.",
        ],
        explanation:
          "**¿Puedo probármela?** attaches reflexive **me** + feminine singular **la** (*la chaqueta*) to *probar* with the required accent on **á**.",
      },
      {
        id: "clothes-uniform-shopping-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "A shopper tries on a pair of shoes (*los zapatos*) and says **'They are too tight on me.'** Which sentence is right?",
        options: [
          "Me queda demasiado estrecho.",
          "Me quedan demasiado estrecha.",
          "Me quedan demasiado estrechos.",
          "Me quedan demasiados estrechos.",
        ],
        answerIndex: 2,
        hints: [
          "Match BOTH *quedar* (*quedan*) and *estrecho* (*estrechos*) to masculine plural *los zapatos*.",
          "Before an adjective, the adverb *demasiado* ('too') NEVER changes to plural!",
        ],
        explanation:
          "**Me quedan demasiado estrechos** agrees plural **quedan** and masculine plural **estrechos** with *los zapatos*, while adverb **demasiado** stays invariable.",
      },
      {
        id: "clothes-uniform-shopping-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "You decide to buy **a silk scarf** (*la bufanda de seda*). How do you say **'I’ll take it'**?",
        options: [
          "Me lo llevo.",
          "Me los llevo.",
          "Me las llevo.",
          "Me la llevo.",
        ],
        answerIndex: 3,
        hints: [
          "Check the gender and number of *la bufanda*.",
          "Replace *la bufanda* with the matching direct object pronoun before *llevo*.",
        ],
        explanation:
          "**Me la llevo** uses feminine singular direct object pronoun **la** to refer back to *la bufanda*.",
      },
      {
        id: "clothes-uniform-shopping-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "In a shoe shop, the assistant asks **'¿Qué número calza?'** What is the most logical reply?",
        options: [
          "Calzo el cuarenta, por favor.",
          "Llevo la talla mediana, gracias.",
          "Prefiero pagar en efectivo hoy.",
          "Los probadores están al fondo.",
        ],
        answerIndex: 0,
        hints: [
          "*Calzar* means to wear on your feet / take a shoe size.",
          "European shoe sizes are numbers such as 38, 39, 40, 41.",
        ],
        explanation:
          "**Calzo el cuarenta, por favor** (*I take a size 40*) directly answers *¿Qué número calza?* (shoe size).",
      },
      {
        id: "clothes-uniform-shopping-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "Choose the accurate *yo* Preterite of **pagar** and **buscar**: *'Yesterday I looked for a coat and paid fifty euros.'*",
        options: [
          "Ayer buscé un abrigo y pagé cincuenta euros.",
          "Ayer busqué un abrigo y pagué cincuenta euros.",
          "Ayer busqué un abrigo y pagó cincuenta euros.",
          "Ayer buscó un abrigo y pagué cincuenta euros.",
        ],
        answerIndex: 1,
        hints: [
          "Both verbs undergo a *yo* Preterite spelling change: *-car → -qué* and *-gar → -gué*.",
          "Check that BOTH verbs are in the *yo* form (not *él/ella* *-ó*).",
        ],
        explanation:
          "**Busqué** (*-car → -qué*) and **pagué** (*-gar → -gué*) preserve the hard *k* and *g* sounds in the *yo* Preterite.",
      },
      {
        id: "clothes-uniform-shopping-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "Complete the Preterite sentence with the irregular *yo* form of **ponerse**: *'Anoche ___ una camisa blanca.'*",
        options: [
          "me pongo",
          "me poní",
          "me puse",
          "me puso",
        ],
        answerIndex: 2,
        hints: [
          "*Ponerse* uses the irregular Preterite stem *pus-* with NO written accent.",
          "Match the ending to *yo* (*-e*, whereas *él/ella* ends in *-o*).",
        ],
        explanation:
          "**Me puse** is the *yo* Preterite of *ponerse* (irregular stem *pus-*, ending *-e*, NO accent). *Me puso* means *he/she put on me*.",
      },
      {
        id: "clothes-uniform-shopping-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "outfits-across-tenses",
        question: "Complete the Preterite sentence: **'Compré dos camisetas en las rebajas y solo ___ veinte euros.'** (*they only cost 20 euros*)",
        options: [
          "cuestan",
          "costó",
          "costé",
          "costaron",
        ],
        answerIndex: 3,
        hints: [
          "What is the subject of *costar*? *Dos camisetas* (plural!) in the past (*compré*).",
          "Choose the third-person plural Preterite of *costar*.",
        ],
        explanation:
          "**Costaron** is the third-person plural Preterite of *costar*, matching plural *dos camisetas*.",
      },
      {
        id: "clothes-uniform-shopping-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Choose the accurate **Simple Future** (*yo*) sentence for **'For the wedding I will put on a smart suit.'**",
        options: [
          "Para la boda me pondré un traje elegante.",
          "Para la boda me poneré un traje elegante.",
          "Para la boda me pondre un traje elegante.",
          "Para la boda me puse un traje elegante.",
        ],
        answerIndex: 0,
        hints: [
          "*Poner* has an irregular Simple Future stem: *pondr-*.",
          "Simple Future *yo* ALWAYS takes a written accent on *-é*.",
        ],
        explanation:
          "**Me pondré** uses the irregular Simple Future stem **pondr-** + accented **-é** (*me poneré* does not exist, and *me pondre* is missing the accent).",
      },
      {
        id: "clothes-uniform-shopping-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "Read the receipt note: *'Tiene treinta días para cambiar o devolver la ropa con el recibo original.'* What does this mean?",
        options: [
          "You get thirty percent off all coats today.",
          "You have thirty days to exchange or return items with the receipt.",
          "You must pay in cash during the winter sales.",
          "You cannot try on jackets in the changing rooms.",
        ],
        answerIndex: 1,
        hints: [
          "Check *cambiar* (exchange), *devolver* (return) and *el recibo* (receipt).",
          "*Treinta días* = 30 days (not 30% discount).",
        ],
        explanation:
          "*Cambiar* = exchange, *devolver* = return, and *con el recibo original* = with the original receipt within thirty days.",
      },
    ],
  },
  {
    id: "clothes-uniform-shopping-m3",
    title: "MCQ Paper 3 — Higher Reading, Pronouns & 4-Tense Mastery",
    questions: [
      {
        id: "clothes-uniform-shopping-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothes-colours-agreement",
        question: "Spot the ONLY outfit description with **zero** gender, number, word-order or accent errors.",
        options: [
          "Llevo un chandal gris, unas zapatillas blanco y una gorra negra.",
          "Llevo una chaqueta de cuero negro, unos vaqueros azul y un cinturon.",
          "Llevo un chándal azul marino, unas zapatillas blancas y una gorra verde.",
          "Llevo un vestido roja de lunares, una bufanda larga y unos zapatos marrónes.",
        ],
        answerIndex: 2,
        hints: [
          "Check EVERY sentence for sneaky flaws: accents (*chándal, cinturón, marrones*), gender (*vestido roja*), and plurals (*zapatillas blanco, vaqueros azul*).",
          "Verify whether *azul marino* stays invariable and *blancas / verde* agree accurately.",
        ],
        explanation:
          "**Llevo un chándal azul marino, unas zapatillas blancas y una gorra verde** is completely spotless. The others fail on *chandal/blanco*, *azul/cinturon*, and *roja/marrónes*.",
      },
      {
        id: "clothes-uniform-shopping-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothes-colours-agreement",
        question: "Why does **'una blusa de lunares verde oscuro'** keep **verde oscuro** unchanged even though *blusa* is feminine?",
        options: [
          "Because *blusa* is actually a masculine noun.",
          "Because *verde* only ever appears after plural nouns.",
          "Because Spanish colours never agree with any clothing nouns.",
          "Because compound two-word colours stay invariable in Spanish.",
        ],
        answerIndex: 3,
        hints: [
          "Compare *una blusa oscura* (single adjective: agrees!) with *una blusa verde oscuro* (two-word colour phrase).",
          "Think of *azul marino*, *verde claro* and *rojo oscuro*.",
        ],
        explanation:
          "In Spanish, **two-word compound colour expressions** (*verde oscuro, azul marino, rojo claro*) function as invariable colour phrases and do not change for gender or number.",
      },
      {
        id: "clothes-uniform-shopping-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-uniform-debate",
        question: "Read Mateo’s essay extract: *'Por un lado, el uniforme fomenta el sentido de pertenencia y reduce el acoso escolar. Sin embargo, en verano pasamos demasiado calor con la chaqueta y la corbata.'* Which summary is **MOST accurate**?",
        options: [
          "He praises community and anti-bullying benefits, yet finds it too hot in summer.",
          "He says uniform causes bullying and costs parents too much money every summer.",
          "He refuses to wear a school tie because he prefers fashionable designer hoodies.",
          "He argues that every Spanish state school should ban ties and blazers immediately.",
        ],
        answerIndex: 0,
        hints: [
          "Decode *fomenta el sentido de pertenencia* (fosters belonging), *reduce el acoso escolar* (reduces bullying) and *pasamos demasiado calor* (we get too hot).",
          "Check which summary faithfully matches BOTH sides Mateo wrote.",
        ],
        explanation:
          "Mateo highlights belonging and reduced bullying (*acoso escolar*), then contrasts them with *Sin embargo* because the blazer and tie are too hot (*demasiado calor*) in summer.",
      },
      {
        id: "clothes-uniform-shopping-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-uniform-debate",
        question: "Which sentence accurately translates **'The blazer is old-fashioned and the skirts are uncomfortable'**?",
        options: [
          "La chaqueta es pasado de moda y las faldas son incómodo.",
          "La chaqueta está pasada de moda y las faldas son incómodas.",
          "La chaqueta es pasados de moda y las faldas son incómodos.",
          "El chaqueta está pasada de moda y las faldas son incómodas.",
        ],
        answerIndex: 1,
        hints: [
          "*La chaqueta* is feminine singular (*pasada de moda*) and *las faldas* is feminine plural (*incómodas*).",
          "Check the written accent on *incómodas*.",
        ],
        explanation:
          "**La chaqueta está pasada de moda y las faldas son incómodas** agrees feminine singular **pasada** with *la chaqueta* and feminine plural **incómodas** with *las faldas*.",
      },
      {
        id: "clothes-uniform-shopping-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shopping-demonstratives",
        question: "Choose the sentence where **demonstrative, pronoun AND fit adjective** ALL agree accurately with *la falda*.",
        options: [
          "Este falda me queda demasiado largo, así que no me lo llevo.",
          "Esa falda me quedan demasiado larga, así que no me la llevo.",
          "Esta falda me queda demasiado larga, así que no me la llevo.",
          "Esta falda me queda demasiado largo, así que no me la llevo.",
        ],
        answerIndex: 2,
        hints: [
          "*La falda* is feminine singular: check *esta*, *queda*, *larga*, and *me la llevo*!",
          "Remember the fit adjective after *quedar* agrees with the garment (*falda → larga*).",
        ],
        explanation:
          "**Esta falda me queda demasiado larga, así que no me la llevo** matches feminine singular across **esta**, **queda**, **larga**, and **la**.",
      },
      {
        id: "clothes-uniform-shopping-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shopping-demonstratives",
        question: "Why is **'¿Te gusta esto jersey?'** wrong, while **'¿Qué es esto?'** is 100% right?",
        options: [
          "Because *esto* is only used in Spain for feminine plural items.",
          "Because *esto* is a verb form rather than a demonstrative word.",
          "Because *jersey* is feminine and therefore requires *esta*.",
          "Because *esto* is a neuter pronoun that never goes before a noun.",
        ],
        answerIndex: 3,
        hints: [
          "Ask whether there is a noun right after *esto* in *¿Qué es esto?* vs *esto jersey*.",
          "Before a masculine singular noun, Spanish always uses *este*, NEVER *esto*.",
        ],
        explanation:
          "**Esto** (*this thing/idea*) is a neuter pronoun used ONLY on its own without a noun (*¿Qué es esto?*). Before masculine singular *jersey*, you must use **este jersey**.",
      },
      {
        id: "clothes-uniform-shopping-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shopping-demonstratives",
        question: "You hold two pairs of trousers (*unos pantalones*) and ask **'Can I try them on?'** Choose the accurate Spanish.",
        options: [
          "¿Puedo probármelos?",
          "¿Puedo probármelas?",
          "¿Puedo probármelo?",
          "¿Puedo probarlosme?",
        ],
        answerIndex: 0,
        hints: [
          "*Unos pantalones* is masculine plural → direct object pronoun *-los*.",
          "Order of attached pronouns is ALWAYS reflexive (*me*) first, then direct object (*los*), with an accent on *á*.",
        ],
        explanation:
          "**¿Puedo probármelos?** places reflexive **me** before masculine plural **los** (*unos pantalones*) and marks the stress with **á**.",
      },
      {
        id: "clothes-uniform-shopping-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Which sequence lists **ponerse** (*yo*) in **Present → Preterite → Near Future → Simple Future** order?",
        options: [
          "me puse → me pongo → me pondré → voy a ponerme",
          "me pongo → me puse → voy a ponerme → me pondré",
          "me pongo → me poní → voy a ponerme → me poneré",
          "me pongo → me puso → voy a poner → me pondré",
        ],
        answerIndex: 1,
        hints: [
          "Check all four forms: *yo-go* Present, irregular *pus-* Preterite, *voy a + inf.*, and irregular *pondr-* Simple Future.",
          "Eliminate fake regularised forms like *poní* and *poneré*.",
        ],
        explanation:
          "**Me pongo** (Present) → **me puse** (Preterite) → **voy a ponerme** (Near Future) → **me pondré** (Simple Future) is the exact four-tense sequence.",
      },
      {
        id: "clothes-uniform-shopping-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Read the dialogue: *'El domingo me probé tres abrigos, pero ninguno me quedó bien, así que este sábado volveré al centro comercial y compraré una chaqueta.'* Which statement is **TRUE**?",
        options: [
          "The speaker bought three coats on Sunday.",
          "One coat fitted well so they paid by card.",
          "None of the coats fitted, so they will return on Saturday.",
          "They plan to return a faulty jacket they bought last week.",
        ],
        answerIndex: 2,
        hints: [
          "Translate *ninguno me quedó bien* (none fitted me well) and *volveré… y compraré…* (Simple Future).",
          "Check whether the speaker actually bought anything on Sunday.",
        ],
        explanation:
          "*Ninguno me quedó bien* means none of the three coats fitted well, so on Saturday they will go back (*volveré*) and buy a jacket (*compraré una chaqueta*).",
      },
      {
        id: "clothes-uniform-shopping-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Which sentence accurately uses **elegir** (*to choose*) in the *yo* Preterite and **costar** in the Preterite?",
        options: [
          "Ayer elijo una bufanda de lana que cuesta quince euros.",
          "Ayer elegió una bufanda de lana que costaron quince euros.",
          "Ayer eligí una bufanda de lana que costó quince euros.",
          "Ayer elegí una bufanda de lana que costó quince euros.",
        ],
        answerIndex: 3,
        hints: [
          "*Elegir* is a regular *-ir* verb in the *yo* Preterite (*elegí* — sandal change *e → i* ONLY happens in *él / ellos*: *eligió / eligieron*!).",
          "*Una bufanda* is singular → singular Preterite **costó**.",
        ],
        explanation:
          "**Ayer elegí una bufanda de lana que costó quince euros** uses regular *yo* Preterite **elegí** and singular **costó**.",
      },
      {
        id: "clothes-uniform-shopping-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "In *'En las rebajas de enero mi madre ___ unos zapatos de cuero y ___ con tarjeta'*, choose the accurate *ella* Preterite pair.",
        options: [
          "compró / pagó",
          "compré / pagué",
          "compró / pagué",
          "compro / pago",
        ],
        answerIndex: 0,
        hints: [
          "The subject is *mi madre* (*ella*), NOT *yo*!",
          "In *ella* Preterite, *-gar* does NOT change to *-gu-* because the ending starts with *-ó*, not *-é*!",
        ],
        explanation:
          "**Compró / pagó** are the *ella* Preterite forms for *mi madre*. Notice *pagó* needs NO *u* because *g* is already hard before *ó*!",
      },
      {
        id: "clothes-uniform-shopping-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shopping-demonstratives",
        question: "A customer says **'Esta camisa es demasiado ancha; ¿tiene una talla más pequeña?'** Why won’t they buy the shirt they tried on?",
        options: [
          "It is far too expensive for their budget.",
          "It is too baggy and they need a smaller size.",
          "It is too tight around the neck and sleeves.",
          "It is the wrong colour for their uniform.",
        ],
        answerIndex: 1,
        hints: [
          "Contrast *ancho/a* (wide/baggy) with *estrecho/a* (tight/narrow).",
          "*Una talla más pequeña* confirms the current shirt is too big.",
        ],
        explanation:
          "**Demasiado ancha** means *too baggy/wide*, which is why the customer asks for a smaller size (*una talla más pequeña*).",
      },
      {
        id: "clothes-uniform-shopping-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Choose the sentence that accurately uses **soler + infinitive** (habitual present) contrasted with **Simple Future**.",
        options: [
          "Normalmente solo llevar ropa cómoda, pero mañana llevaré un traje.",
          "Normalmente suelo llevo ropa cómoda, pero mañana llevaré un traje.",
          "Normalmente suelo llevar ropa cómoda, pero mañana llevaré un traje.",
          "Normalmente suelo llevar ropa cómoda, pero mañana llevé un traje.",
        ],
        answerIndex: 2,
        hints: [
          "*Soler* is an *o → ue* stem-changer (*suelo*) followed directly by an infinitive (*llevar*).",
          "*Mañana* requires the Simple Future (**llevaré**), not Preterite (*llevé*).",
        ],
        explanation:
          "**Normalmente suelo llevar ropa cómoda, pero mañana llevaré un traje** correctly uses *o → ue* **suelo** + infinitive **llevar** contrasted with Simple Future **llevaré**.",
      },
      {
        id: "clothes-uniform-shopping-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-uniform-debate",
        question: "Read the school notice: *'A partir del lunes, los alumnos de Year 9 podrán llevar pantalones cortos en lugar de pantalones largos por el calor.'* What has changed?",
        options: [
          "Year 9 pupils must buy a new winter coat by Monday.",
          "Year 9 pupils are banned from wearing shorts at school.",
          "Year 9 pupils will no longer wear any school uniform.",
          "Year 9 pupils will be allowed to wear shorts due to the heat.",
        ],
        answerIndex: 3,
        hints: [
          "Decode *podrán* (Simple Future of *poder*: will be able to), *en lugar de* (instead of) and *por el calor* (because of the heat).",
          "*Pantalones cortos* = shorts.",
        ],
        explanation:
          "*Podrán llevar pantalones cortos en lugar de pantalones largos por el calor* means pupils will be allowed to wear shorts instead of long trousers because of the heat.",
      },
      {
        id: "clothes-uniform-shopping-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "outfits-across-tenses",
        question: "Which sentence accurately translates **'Next weekend we will go shopping and I will buy those leather boots'**?",
        options: [
          "El próximo fin de semana iremos de compras y compraré esas botas de cuero.",
          "El próximo fin de semana fuimos de compras y compré esas botas de cuero.",
          "El próximo fin de semana iremos de compras y compraré esos botas de cuero.",
          "El próximo fin de semana irémos de compras y compraré esas botas de cuero.",
        ],
        answerIndex: 0,
        hints: [
          "In Simple Future, **nosotros (-emos)** is the ONLY ending with NO written accent (*iremos*, NOT *irémos*!).",
          "*Las botas* is feminine plural → far demonstrative **esas botas**.",
        ],
        explanation:
          "**Iremos** (no accent on *-emos*!), **compraré** (accent on *-é*) and feminine plural **esas botas de cuero** are 100% accurate.",
      },
    ],
  },
];
