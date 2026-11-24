import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "clothes-uniform-shopping-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "clothes-colours-agreement",
      question: "How do you translate **'a yellow skirt'** into Spanish?",
      options: [
        "una falda amarilla",
        "una amarilla falda",
        "un falda amarillo",
        "una falda amarillo",
      ],
      answerIndex: 0,
      hints: [
        "Place the colour AFTER the garment noun.",
        "*La falda* is feminine singular, so adjust *-o → -a*.",
      ],
      explanation:
        "**Una falda amarilla** places the colour after the noun and matches feminine singular *-a* to *la falda*.",
    },
    {
      id: "clothes-uniform-shopping-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "clothes-colours-agreement",
      question: "Translate into Spanish: **a black dress**.",
      answer: {
        type: "text",
        accept: ["un vestido negro"],
        display: "un vestido negro",
      },
      traps: [
        {
          spec: { type: "text", accept: ["una vestido negra", "un vestido negra"] },
          feedback: "Watch the gender trap! **El vestido** is grammatically masculine → **un vestido negro**.",
        },
        {
          spec: { type: "text", accept: ["un negro vestido"] },
          feedback: "In Spanish, colour adjectives go **AFTER** the noun → **un vestido negro**.",
        },
      ],
      hints: [
        "Remember the grammatical gender of *vestido* (masculine!).",
        "Place the colour adjective after the noun.",
      ],
      solution: [
        "*Dress* is masculine (*el vestido*), so both article and colour are masculine: **un vestido negro**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "clothes-colours-agreement",
      question: "Translate into Spanish: **brown shoes** (include *unos*).",
      answer: {
        type: "text",
        accept: ["unos zapatos marrones", "zapatos marrones"],
        display: "unos zapatos marrones",
      },
      traps: [
        {
          spec: { type: "text", accept: ["unos zapatos marrónes"] },
          feedback: "The written accent on *marrón* DROPS in the plural → **marrones**!",
        },
      ],
      hints: [
        "*Zapatos* is masculine plural.",
        "Remember what happens to the written accent on *marrón* when you add *-es*.",
      ],
      solution: [
        "Masculine plural noun **unos zapatos** + plural **marrones** (no accent!).",
      ],
    },
    {
      id: "clothes-uniform-shopping-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "school-uniform-debate",
      question: "Which opinion expresses a **disadvantage** of wearing school uniform?",
      options: [
        "El uniforme ahorra tiempo por la mañana.",
        "El uniforme no permite expresar tu personalidad.",
        "El uniforme iguala a todos los alumnos.",
        "El uniforme da una buena imagen del colegio.",
      ],
      answerIndex: 1,
      hints: [
        "Look for the negative verb phrase (*no permite…*).",
        "All three other statements list advantages (*saves time, equalises pupils, gives a smart image*).",
      ],
      explanation:
        "**El uniforme no permite expresar tu personalidad** (*does not allow you to express your personality*) is a classic argument against school uniform.",
    },
    {
      id: "clothes-uniform-shopping-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "school-uniform-debate",
      question: "Translate into Spanish: **I have to wear a white shirt.** (Use *tengo que llevar*.)",
      answer: {
        type: "text",
        accept: [
          "Tengo que llevar una camisa blanca",
          "Yo tengo que llevar una camisa blanca",
        ],
        display: "Tengo que llevar una camisa blanca",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Tengo que llevar una camiseta blanca"] },
          feedback: "Careful: *camiseta* is T-shirt; a collared school shirt is **la camisa**!",
        },
      ],
      hints: [
        "Remember *la camisa* (shirt) vs *la camiseta* (T-shirt).",
        "Agree *blanco* with feminine singular *camisa* after the noun.",
      ],
      solution: [
        "**Tengo que llevar una camisa blanca**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "shopping-demonstratives",
      question: "Which Spanish phrase accurately translates **'this jumper and those jeans'**?",
      options: [
        "esto jersey y esos vaqueros",
        "ese jersey y estos vaqueros",
        "este jersey y esos vaqueros",
        "esta jersey y esas vaqueros",
      ],
      answerIndex: 2,
      hints: [
        "'This' keeps the *t* and NEVER becomes *esto* before a noun.",
        "'Those' drops the *t* and matches masculine plural *vaqueros*.",
      ],
      explanation:
        "**Este jersey y esos vaqueros** pairs masculine singular near **este** with masculine plural far **esos**.",
    },
    {
      id: "clothes-uniform-shopping-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "shopping-demonstratives",
      question: "Translate into Spanish: **How much do these trainers cost?** (Spain standard, *las zapatillas*.)",
      answer: {
        type: "text",
        accept: [
          "¿Cuánto cuestan estas zapatillas?",
          "Cuánto cuestan estas zapatillas",
          "¿Cuánto cuestan estas zapatillas de deporte?",
        ],
        display: "¿Cuánto cuestan estas zapatillas?",
      },
      traps: [
        {
          spec: { type: "text", accept: ["¿Cuánto cuesta estas zapatillas?", "Cuánto cuesta estas zapatillas"] },
          feedback: "*Zapatillas* is plural, so *costar* must be plural **cuestan**!",
        },
        {
          spec: { type: "text", accept: ["¿Cuánto cuestan estos zapatillas?", "Cuánto cuestan estos zapatillas"] },
          feedback: "*Las zapatillas* is feminine plural → **estas zapatillas**!",
        },
      ],
      hints: [
        "*Las zapatillas* is feminine plural — check BOTH the verb *costar* and the demonstrative.",
        "Keep *¿Cuánto?* invariable when asking about price.",
      ],
      solution: [
        "Plural *costar*: **¿Cuánto cuestan** + feminine plural near demonstrative **estas zapatillas?**",
      ],
    },
    {
      id: "clothes-uniform-shopping-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "outfits-across-tenses",
      question: "Translate into Spanish (Preterite): **Yesterday I paid thirty euros.** (Use *treinta euros*.)",
      answer: {
        type: "text",
        accept: ["Ayer pagué treinta euros", "Ayer yo pagué treinta euros"],
        display: "Ayer pagué treinta euros",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer pagé treinta euros"] },
          feedback: "Remember *-gar → -gué* in the *yo* Preterite: **pagué**!",
        },
      ],
      hints: [
        "*Pagar* ends in *-gar* — apply the *yo* Preterite spelling change.",
        "Remember the written accent on the final *-é*.",
      ],
      solution: [
        "*-gar → -gué*: **Ayer pagué treinta euros**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "outfits-across-tenses",
      question: "Choose the accurate **Simple Future** (*yo*) of *ponerse*: **'Tomorrow I will put on a wool jumper.'**",
      options: [
        "Mañana me poneré un jersey de lana.",
        "Mañana me puse un jersey de lana.",
        "Mañana me pongo un jersey de lana.",
        "Mañana me pondré un jersey de lana.",
      ],
      answerIndex: 3,
      hints: [
        "*Poner* has an irregular Simple Future stem (*pondr-*).",
        "Simple Future *yo* ends in accented *-é*.",
      ],
      explanation:
        "**Me pondré** is the *yo* Simple Future of *ponerse* (irregular stem **pondr-** + accented **-é**).",
    },
    {
      id: "clothes-uniform-shopping-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "school-uniform-debate",
      marks: 4,
      question:
        "Write **3–4 sentences in Spanish** about school uniform. Include: (1) two items you have to wear with accurate colours, (2) one advantage of uniform, (3) one disadvantage introduced by a contrast connective, and (4) what you would like to wear instead.",
      modelAnswer:
        "En mi colegio tengo que llevar una camisa blanca y pantalones grises. Por un lado, el uniforme ahorra tiempo por la mañana. Sin embargo, es incómodo y no permite expresar tu personalidad. Me gustaría llevar vaqueros y una sudadera cómoda.",
      markScheme: [
        {
          point: "Describes uniform obligation with garments and accurate colour agreement",
          keywords: ["tengo que llevar", "tenemos que llevar", "hay que llevar", "llevamos"],
        },
        {
          point: "Gives a clear advantage of school uniform",
          keywords: ["ahorra tiempo", "iguala", "buena imagen", "acoso", "marcas", "practico", "elegante", "ventaja"],
        },
        {
          point: "Uses a contrast connective and gives a disadvantage",
          keywords: ["sin embargo", "aunque", "por otro lado", "pero"],
        },
        {
          point: "Expresses what they would like to wear instead",
          keywords: ["me gustaria", "preferiria", "llevaria"],
        },
      ],
      hints: [
        "Start with *tengo que llevar* + garments + colours after the noun.",
        "Balance one pro and one con with *Sin embargo / Por otro lado*, then finish with *Me gustaría llevar…*.",
      ],
    },
  ],
  papers: [
    {
      id: "clothes-uniform-shopping-p1",
      title: "Practice Paper 1 — Agreement, Uniform Debate & Shop Dialogues",
      questions: [
        {
          id: "clothes-uniform-shopping-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "clothes-colours-agreement",
          question: "Translate into Spanish: **a checked blue shirt** (include *una* and *camisa*).",
          answer: {
            type: "text",
            accept: [
              "una camisa azul de cuadros",
              "una camisa de cuadros azul",
            ],
            display: "una camisa azul de cuadros",
          },
          traps: [
            {
              spec: { type: "text", accept: ["una camisa azula de cuadros"] },
              feedback: "*Azul* ends in a consonant, so feminine singular stays **azul** (never *azula*)!",
            },
          ],
          hints: [
            "*Azul* is a 2-form colour (same in masc. & fem. singular).",
            "Remember the invariable pattern phrase for *checked*.",
          ],
          solution: [
            "**una camisa azul de cuadros** (colour & pattern after noun, *de cuadros* invariable).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "clothes-colours-agreement",
          question: "Translate into Spanish: **a navy blue jacket** (use *una chaqueta*).",
          answer: {
            type: "text",
            accept: ["una chaqueta azul marino"],
            display: "una chaqueta azul marino",
          },
          traps: [
            {
              spec: { type: "text", accept: ["una chaqueta azula marina", "una chaqueta azul marina"] },
              feedback: "Two-word colour shades stay completely **invariable** → **azul marino**!",
            },
          ],
          hints: [
            "Two-word shades like *navy blue* never change for feminine nouns.",
          ],
          solution: [
            "**una chaqueta azul marino** (invariable compound colour).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "clothes-colours-agreement",
          question: "Which translation of **'green cotton socks and black leather boots'** is 100% accurate?",
          options: [
            "unos calcetines verdes de algodón y unas botas negras de cuero",
            "unos calcetines verde de algodón y unas botas negros de cuero",
            "unas calcetines verdes de algodones y unas botas negras de cueros",
            "unos verdes calcetines de algodón y unas negras botas de cuero",
          ],
          answerIndex: 0,
          hints: [
            "*Los calcetines* is masculine plural (*verdes*), *las botas* is feminine plural (*negras*), and materials (*de algodón, de cuero*) stay singular and invariable.",
            "Remember colours sit AFTER the nouns.",
          ],
          explanation:
            "**Unos calcetines verdes de algodón y unas botas negras de cuero** agrees both colours accurately and keeps *de algodón* and *de cuero* invariable.",
        },
        {
          id: "clothes-uniform-shopping-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "clothes-colours-agreement",
          question: "Translate into Spanish: **Clothes are very expensive in this shop.** (Use *La ropa* and *esta tienda*.)",
          answer: {
            type: "text",
            accept: [
              "La ropa es muy cara en esta tienda",
              "En esta tienda la ropa es muy cara",
            ],
            display: "La ropa es muy cara en esta tienda",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Las ropas son muy caras en esta tienda"] },
              feedback: "**La ropa** is ALWAYS singular in Spanish → **La ropa es muy cara**!",
            },
          ],
          hints: [
            "Treat *la ropa* as feminine singular (verb *es*, adjective *cara*).",
            "Remember *esta tienda* (feminine near demonstrative).",
          ],
          solution: [
            "Feminine singular subject **La ropa** → **La ropa es muy cara en esta tienda**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "school-uniform-debate",
          question: "Translate into Spanish: **School uniform is practical and makes pupils equal.** (Use *el uniforme escolar*, *práctico* and *iguala a los alumnos*.)",
          answer: {
            type: "text",
            accept: [
              "El uniforme escolar es práctico e iguala a los alumnos",
              "El uniforme escolar es práctico e iguala a todos los alumnos",
            ],
            display: "El uniforme escolar es práctico e iguala a los alumnos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["El uniforme escolar es práctico y iguala a los alumnos"] },
              feedback: "Before a word starting with the *i-* sound (*iguala*), change *y* to **e**!",
            },
          ],
          hints: [
            "Apply the *y → e* conjunction rule before *iguala*.",
            "Keep the accent on *práctico* and the personal *a* before *los alumnos*.",
          ],
          solution: [
            "Change *y* to **e** before *iguala* → **El uniforme escolar es práctico e iguala a los alumnos**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "school-uniform-debate",
          question: "Translate into Spanish: **It is forbidden to wear trainers or caps.** (Use *Está prohibido*, *zapatillas* and *gorras*.)",
          answer: {
            type: "text",
            accept: [
              "Está prohibido llevar zapatillas o gorras",
              "Está prohibido llevar zapatillas de deporte o gorras",
            ],
            display: "Está prohibido llevar zapatillas o gorras",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Es prohibido llevar zapatillas o gorras"] },
              feedback: "Use **Está prohibido** (from *estar*, with accent on *á*), not *Es prohibido*!",
            },
          ],
          hints: [
            "Follow *Está prohibido* directly with the infinitive *llevar*.",
            "'Or' in Spanish is *o*.",
          ],
          solution: [
            "**Está prohibido llevar zapatillas o gorras**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Complete the customer’s remark about **a jacket** (*la chaqueta*): **'___ chaqueta me ___ demasiado estrecha.'**",
          options: [
            "Este / queda",
            "Esta / queda",
            "Esta / quedan",
            "Esa / quedar",
          ],
          answerIndex: 1,
          hints: [
            "*La chaqueta* is feminine singular — check both the demonstrative and *quedar*.",
            "Conjugate *quedar* in third-person singular Present.",
          ],
          explanation:
            "**Esta / queda** matches feminine singular *la chaqueta* (singular garment → **queda**).",
        },
        {
          id: "clothes-uniform-shopping-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Translate into Spanish: **That coat is too expensive.** (Use *abrigo* and *demasiado*.)",
          answer: {
            type: "text",
            accept: ["Ese abrigo es demasiado caro"],
            display: "Ese abrigo es demasiado caro",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Eso abrigo es demasiado caro"] },
              feedback: "Never use neuter *eso* before a noun — masculine singular is **ese abrigo**!",
            },
            {
              spec: { type: "text", accept: ["Este abrigo es demasiado caro"] },
              feedback: "*Este* means 'this'; 'that' (further away) drops the *t* → **Ese abrigo**!",
            },
          ],
          hints: [
            "'That' (further away, masc. sg.) has NO *t* and ends in *-e*.",
            "Follow *es* with *demasiado caro*.",
          ],
          solution: [
            "Masculine singular far demonstrative: **Ese abrigo es demasiado caro**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Translate into Spanish: **These jeans fit me well; I’ll take them.** (Use *vaqueros*, *quedar* and *llevarse*.)",
          answer: {
            type: "text",
            accept: [
              "Estos vaqueros me quedan bien; me los llevo",
              "Estos vaqueros me quedan bien, me los llevo",
              "Estos vaqueros me quedan bien. Me los llevo",
            ],
            display: "Estos vaqueros me quedan bien, me los llevo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Estos vaqueros me queda bien, me los llevo"] },
              feedback: "*Vaqueros* is plural → **me quedan bien**!",
            },
            {
              spec: { type: "text", accept: ["Estos vaqueros me quedan bien, me lo llevo"] },
              feedback: "Plural *vaqueros* needs plural object pronoun **los** → **me los llevo**!",
            },
          ],
          hints: [
            "*Los vaqueros* is masculine plural — keep plural across *estos*, *quedan* and *me los llevo*.",
            "Remember *quedar bien* for fitting/suiting well.",
          ],
          solution: [
            "**Estos vaqueros me quedan bien, me los llevo**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "outfits-across-tenses",
          question: "Translate into Spanish (Preterite): **Last week I went shopping and I looked for a scarf.** (Use *La semana pasada* and *una bufanda*.)",
          answer: {
            type: "text",
            accept: [
              "La semana pasada fui de compras y busqué una bufanda",
              "La semana pasada yo fui de compras y busqué una bufanda",
            ],
            display: "La semana pasada fui de compras y busqué una bufanda",
          },
          traps: [
            {
              spec: { type: "text", accept: ["La semana pasada fui de compras y buscé una bufanda"] },
              feedback: "Remember *-car → -qué* in the *yo* Preterite: **busqué**!",
            },
          ],
          hints: [
            "Preterite of *ir* (*yo*) = *fui* (NO accent).",
            "*Buscar* undergoes *-car → -qué* in the *yo* Preterite.",
          ],
          solution: [
            "**La semana pasada fui de compras y busqué una bufanda**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "outfits-across-tenses",
          question: "Complete the Preterite sentence accurately: **'En las rebajas ___ una gorra que solo ___ ocho euros.'**",
          options: [
            "compro / cuesta",
            "compró / costaron",
            "compré / costó",
            "compré / costaron",
          ],
          answerIndex: 2,
          hints: [
            "First verb is *yo* Preterite (*I bought*); second verb matches singular *una gorra* (*it cost*).",
            "Check accents on both Preterite endings.",
          ],
          explanation:
            "**Compré / costó** accurately pairs *yo* Preterite **compré** with third-person singular Preterite **costó** for *una gorra*.",
        },
        {
          id: "clothes-uniform-shopping-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "outfits-across-tenses",
          question: "Translate into Spanish (Immediate Future): **This Saturday I am going to put on my black tracksuit.** (Use *Este sábado* and *chándal*.)",
          answer: {
            type: "text",
            accept: [
              "Este sábado voy a ponerme mi chándal negro",
              "Este sábado me voy a poner mi chándal negro",
            ],
            display: "Este sábado voy a ponerme mi chándal negro",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Este sábado voy a ponerse mi chándal negro"] },
              feedback: "Match the reflexive pronoun to *yo* → **ponerme** (or **me voy a poner**)!",
            },
          ],
          hints: [
            "Include written accents on *sábado* and *chándal*.",
            "Attach *-me* to *poner* (or place *me* before *voy a poner*).",
          ],
          solution: [
            "**Este sábado voy a ponerme mi chándal negro** (or **me voy a poner**).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "clothes-colours-agreement",
          marks: 4,
          question:
            "Describe TWO contrasting outfits in Spanish (**40–55 words**): what you normally wear in winter vs in summer. Include: (1) winter clothes with accurate colours, (2) summer clothes with accurate colours, (3) at least ONE pattern or material phrase introduced by *de*, and (4) a justified opinion explaining why you prefer one style.",
          modelAnswer:
            "En invierno normalmente llevo un abrigo negro, un jersey de lana gris y botas marrones porque hace frío. En cambio, en verano me pongo una camiseta blanca de algodón, pantalones cortos azules y sandalias. Prefiero la ropa de verano porque es mucho más cómoda y ligera.",
          markScheme: [
            {
              point: "Names winter garments with accurate colour agreement",
              keywords: ["abrigo", "jersey", "bufanda", "guantes", "botas", "chaqueta", "sudadera", "gorro"],
            },
            {
              point: "Names summer garments with accurate colour agreement",
              keywords: ["camiseta", "pantalones cortos", "sandalias", "chanclas", "vestido", "falda", "banador", "gorra"],
            },
            {
              point: "Includes at least one invariable de + pattern or material phrase",
              keywords: ["de lana", "de algodon", "de cuero", "de seda", "de rayas", "de cuadros", "de lunares", "de flores", "de manga corta", "de manga larga"],
            },
            {
              point: "Gives a justified preference",
              keywords: ["prefiero", "me gusta", "me encanta", "porque", "comoda", "comodo", "ligera", "practica", "moderna"],
            },
          ],
          hints: [
            "Remember noun BEFORE colour, and keep *de algodón / de lana / de rayas / de cuadros* invariable.",
            "Use *En invierno… En cambio, en verano…* and finish with *Prefiero… porque…*.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          marks: 4,
          question:
            "Write a **4-line Spanish dialogue** in a clothes shop in Spain between a shop assistant (*Dependiente*) and a customer (*Cliente*). Include: (1) asking for a garment using a demonstrative (*este/esta/ese/esa…*) and size, (2) asking to try it on, (3) commenting on the fit using *quedar* and asking the price, and (4) deciding to buy it and stating how to pay.",
          modelAnswer:
            "Dependiente: Buenos días, ¿en qué puedo ayudarle? ¿Qué talla usa?\nCliente: Busco esa chaqueta verde en la talla mediana. ¿Puedo probármela?\nDependiente: Claro, los probadores están al fondo.\nCliente: Me queda genial. ¿Cuánto cuesta? Me la llevo, ¿puedo pagar con tarjeta?",
          markScheme: [
            {
              point: "Uses a demonstrative + garment and mentions size (talla/número)",
              keywords: ["talla", "numero", "este", "esta", "estos", "estas", "ese", "esa", "esos", "esas"],
            },
            {
              point: "Asks to try the item on accurately",
              keywords: ["probarmelo", "probarmela", "probarmelos", "probarmelas", "probarme", "probadores"],
            },
            {
              point: "Describes fit with quedar and asks price with costar",
              keywords: ["me queda", "me quedan", "cuanto cuesta", "cuanto cuestan"],
            },
            {
              point: "Decides to purchase and mentions payment method",
              keywords: ["me lo llevo", "me la llevo", "me los llevo", "me las llevo", "tarjeta", "efectivo"],
            },
          ],
          hints: [
            "Match gender and number across demonstrative, *probármelo/a*, *me queda(n)*, and *me lo/la llevo*.",
            "Include *¿Qué talla usa?*, *¿Cuánto cuesta(n)?* and *pagar con tarjeta / en efectivo*.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "outfits-across-tenses",
          marks: 5,
          question:
            "Write a **multi-tense paragraph (60–80 words)** in Spanish about fashion and shopping. Include: (1) what you usually wear at weekends (Present), (2) a recent shopping trip and what you bought + price (Preterite), (3) an opinion about brands or bargains, (4) what you are going to wear to an upcoming event (Immediate Future), and (5) one Simple Future verb.",
          modelAnswer:
            "Los fines de semana normalmente suelo llevar vaqueros azules y una sudadera deportiva porque es ropa muy cómoda. El sábado pasado fui de compras al centro comercial, busqué una chaqueta de cuero y pagué treinta y cinco euros. Fue una ganga porque no me importan las marcas caras. Este viernes voy a ponerme esa chaqueta para la fiesta y también llevaré unas zapatillas blancas nuevas.",
          markScheme: [
            {
              point: "Describes habitual weekend outfit in the Present",
              keywords: ["llevo", "suelo llevar", "me pongo", "los fines de semana", "normalmente"],
            },
            {
              point: "Narrates a past shopping trip and purchase/price in the Preterite",
              keywords: ["fui de compras", "compre", "pague", "busque", "costo", "costaron", "me probe"],
            },
            {
              point: "Gives an opinion about bargains, sales or brands",
              keywords: ["ganga", "rebajas", "marcas", "caro", "cara", "barato", "barata", "comoda", "comodo"],
            },
            {
              point: "Uses Immediate Future (voy a + inf.) for an upcoming outfit",
              keywords: ["voy a llevar", "voy a ponerme", "me voy a poner", "voy a comprar"],
            },
            {
              point: "Includes an accurate Simple Future fashion verb",
              keywords: ["llevare", "me pondre", "comprare", "ire", "gastare", "elegire"],
            },
          ],
          hints: [
            "Anchor every tense with a time marker: *Normalmente… / El sábado pasado… / Este viernes…*.",
            "Include *-car/-gar* Preterites (*busqué, pagué*) and finish with a crisp Simple Future (*llevaré* or *me pondré*).",
          ],
        },
      ],
    },
    {
      id: "clothes-uniform-shopping-p2",
      title: "Practice Paper 2 — Precision Translation, Debate & 4-Tense Writing",
      questions: [
        {
          id: "clothes-uniform-shopping-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "clothes-colours-agreement",
          question: "Translate into Spanish: **a polka-dot skirt** (include *una*).",
          answer: {
            type: "text",
            accept: ["una falda de lunares"],
            display: "una falda de lunares",
          },
          hints: [
            "Polka-dot pattern uses *de* + a plural noun connected to *luna* (moon).",
          ],
          solution: [
            "**una falda de lunares** (invariable pattern phrase after noun).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "clothes-colours-agreement",
          question: "Translate into Spanish: **a short-sleeved white blouse** (use *una blusa*).",
          answer: {
            type: "text",
            accept: [
              "una blusa blanca de manga corta",
              "una blusa de manga corta blanca",
            ],
            display: "una blusa blanca de manga corta",
          },
          traps: [
            {
              spec: { type: "text", accept: ["una blusa blanco de manga corta"] },
              feedback: "Agree *blanco* with feminine *blusa* → **blanca**.",
            },
          ],
          hints: [
            "Agree *blanco → blanca* with feminine *blusa*.",
            "'Short-sleeved' is the invariable phrase *de manga corta*.",
          ],
          solution: [
            "**una blusa blanca de manga corta**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "school-uniform-debate",
          question: "Which sentence accurately translates **'I am in favour of uniform because it avoids brand pressure'**?",
          options: [
            "Estoy en contra del uniforme porque evita la presión de las marcas.",
            "Estoy a favor del uniforme porque evita la presión de las marcas.",
            "Soy a favor del uniforme porque evita la presión de las marcas.",
            "Estoy a favor de el uniforme porque evita la presión de las marcas.",
          ],
          answerIndex: 1,
          hints: [
            "Use *estar a favor de* (never *ser*), and always contract *de + el → del*!",
            "Distinguish *a favor* (in favour) from *en contra* (against).",
          ],
          explanation:
            "**Estoy a favor del uniforme porque evita la presión de las marcas** uses **estar a favor** and contracts *de + el* to **del**.",
        },
        {
          id: "clothes-uniform-shopping-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "school-uniform-debate",
          question: "Translate into Spanish: **On the other hand, uniform is too expensive.** (Use *Por otro lado* and *el uniforme*.)",
          answer: {
            type: "text",
            accept: [
              "Por otro lado, el uniforme es demasiado caro",
              "Por otro lado el uniforme es demasiado caro",
            ],
            display: "Por otro lado, el uniforme es demasiado caro",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Por otro lado, el uniforme es demasiada cara"] },
              feedback: "*El uniforme* is masculine → **demasiado caro**!",
            },
          ],
          hints: [
            "Remember *el uniforme* is masculine singular (*caro*).",
            "Adverb *demasiado* ('too') before an adjective stays invariable.",
          ],
          solution: [
            "**Por otro lado, el uniforme es demasiado caro**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Translate into Spanish: **Can I try them on?** (referring to **las botas**, feminine plural).",
          answer: {
            type: "text",
            accept: [
              "¿Puedo probármelas?",
              "Puedo probármelas",
              "¿Me las puedo probar?",
              "Me las puedo probar",
            ],
            display: "¿Puedo probármelas?",
          },
          traps: [
            {
              spec: { type: "text", accept: ["¿Puedo probármelos?", "Puedo probármelos"] },
              feedback: "*Las botas* is feminine plural, so use **-las** → **¿Puedo probármelas?**",
            },
          ],
          hints: [
            "*Las botas* is feminine plural → direct object pronoun *-las*.",
            "Remember the written accent on *probármelas* when attaching two pronouns!",
          ],
          solution: [
            "**¿Puedo probármelas?** (or **¿Me las puedo probar?**).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Translate into Spanish: **That skirt is too long on me.** (Use *Esa falda* and *quedar*.)",
          answer: {
            type: "text",
            accept: ["Esa falda me queda demasiado larga"],
            display: "Esa falda me queda demasiado larga",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Esa falda me queda demasiado largo"] },
              feedback: "The fit adjective after *quedar* agrees with the garment (*la falda*) → **larga**!",
            },
          ],
          hints: [
            "*La falda* is feminine singular → *queda* + feminine *larga*.",
            "Keep adverb *demasiado* unchanged before *larga*.",
          ],
          solution: [
            "**Esa falda me queda demasiado larga**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "Translate into Spanish: **Do you have a bigger size?** (Polite *usted*, using *¿Tiene…?* and *talla*.)",
          answer: {
            type: "text",
            accept: [
              "¿Tiene una talla más grande?",
              "Tiene una talla más grande",
              "¿Tiene una talla mayor?",
            ],
            display: "¿Tiene una talla más grande?",
          },
          traps: [
            {
              spec: { type: "text", accept: ["¿Tiene un número más grande?", "Tiene un número más grande"] },
              feedback: "For clothes size use feminine **una talla** (*el número* is for shoe sizes!).",
            },
          ],
          hints: [
            "*La talla* is feminine → *una talla*.",
            "'Bigger' = *más grande* (remember the accent on *más*!).",
          ],
          solution: [
            "**¿Tiene una talla más grande?**",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          question: "In *'¿Dónde están ___ probadores?'*, which definite article completes **'the changing rooms'**?",
          options: [
            "las",
            "el",
            "los",
            "unos",
          ],
          answerIndex: 2,
          hints: [
            "*El probador* is masculine; *probadores* is masculine plural.",
            "Choose the masculine plural definite article.",
          ],
          explanation:
            "**Los probadores** is masculine plural (*¿Dónde están los probadores?* = Where are the changing rooms?).",
        },
        {
          id: "clothes-uniform-shopping-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "outfits-across-tenses",
          question: "Translate into Spanish (Preterite): **Yesterday I put on a silk tie.** (Use *ponerse* and *una corbata de seda*.)",
          answer: {
            type: "text",
            accept: [
              "Ayer me puse una corbata de seda",
              "Ayer yo me puse una corbata de seda",
            ],
            display: "Ayer me puse una corbata de seda",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Ayer me poní una corbata de seda"] },
              feedback: "*Ponerse* has an irregular Preterite stem (*pus-*) → **me puse** (no accent!).",
            },
          ],
          hints: [
            "Irregular *yo* Preterite of *ponerse* has stem *pus-* and no written accent.",
            "Material phrase *de seda* sits after *una corbata*.",
          ],
          solution: [
            "**Ayer me puse una corbata de seda**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "outfits-across-tenses",
          question: "Translate into Spanish (Preterite): **Those trousers cost forty euros.** (Use *Esos pantalones* and *cuarenta euros*.)",
          answer: {
            type: "text",
            accept: ["Esos pantalones costaron cuarenta euros"],
            display: "Esos pantalones costaron cuarenta euros",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Esos pantalones costó cuarenta euros"] },
              feedback: "*Esos pantalones* is plural → third-person plural Preterite **costaron**!",
            },
          ],
          hints: [
            "Subject = *esos pantalones* (plural).",
            "Choose the *ellos* Preterite of *costar* (no stem change in Preterite!).",
          ],
          solution: [
            "**Esos pantalones costaron cuarenta euros**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "outfits-across-tenses",
          question: "Translate into Spanish (Simple Future): **Next month I will buy those wool jumpers.** (Use *El mes que viene* and *jerséis*.)",
          answer: {
            type: "text",
            accept: [
              "El mes que viene compraré esos jerséis de lana",
              "El próximo mes compraré esos jerséis de lana",
            ],
            display: "El mes que viene compraré esos jerséis de lana",
          },
          traps: [
            {
              spec: { type: "text", accept: ["El mes que viene compraré esos jerseys de lana"] },
              feedback: "In Spain-standard Spanish, the plural of *jersey* is **jerséis** (with *i* and accent on *é*)!",
            },
          ],
          hints: [
            "Simple Future of *comprar* (*yo*) = infinitive + accented *-é*.",
            "Watch the plural spelling of *jersey* in Spain (*jerséis*) and masculine plural *esos*.",
          ],
          solution: [
            "**El mes que viene compraré esos jerséis de lana**.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q12",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "outfits-across-tenses",
          question: "Read the shopper’s review: *'Compré estas sandalias en julio con un descuento del treinta por ciento, pero ayer tuve que devolverlas porque me quedaban demasiado estrechas.'* Why did they return the sandals?",
          options: [
            "They lost the original receipt before July.",
            "The shop refused to give them a 30% discount.",
            "They wanted leather boots instead of summer sandals.",
            "The sandals turned out to be too tight on them.",
          ],
          answerIndex: 3,
          hints: [
            "Focus on the clause after *porque*: *me quedaban demasiado estrechas*.",
            "*Estrecho/a* means narrow / tight.",
          ],
          explanation:
            "*Devolverlas porque me quedaban demasiado estrechas* explains they had to return the sandals because they were too tight.",
        },
        {
          id: "clothes-uniform-shopping-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "shopping-demonstratives",
          marks: 4,
          question:
            "Write **4 distinct sentences in Spanish** showing ALL FOUR combinations of demonstratives + *quedar / costar*: (1) *este* + masc. sg. garment + price, (2) *esta* + fem. sg. garment + fit, (3) *esos* + masc. pl. garment + price, and (4) *esas* + fem. pl. garment + fit.",
          modelAnswer:
            "Este abrigo negro cuesta ochenta euros. Esta blusa azul me queda demasiado grande. Esos zapatos marrones cuestan cincuenta euros. Esas botas de cuero me quedan fenomenal.",
          markScheme: [
            {
              point: "Uses este + masc. sg. garment + singular cuesta",
              keywords: ["este", "cuesta"],
            },
            {
              point: "Uses esta + fem. sg. garment + singular me queda",
              keywords: ["esta", "me queda"],
            },
            {
              point: "Uses esos + masc. pl. garment + plural cuestan",
              keywords: ["esos", "cuestan"],
            },
            {
              point: "Uses esas + fem. pl. garment + plural me quedan",
              keywords: ["esas", "me quedan"],
            },
          ],
          hints: [
            "Keep singular garments with *cuesta / me queda* and plural garments with *cuestan / me quedan*.",
            "Double-check gender: *este* (m.sg.), *esta* (f.sg.), *esos* (m.pl.), *esas* (f.pl.).",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "school-uniform-debate",
          marks: 5,
          question:
            "Your Spanish partner school is holding a debate on whether to introduce a school uniform. Write a balanced contribution in Spanish (**60–75 words**) including: (1) what you currently have to wear at your school, (2) TWO clear arguments in favour of uniform, (3) TWO clear arguments against uniform using contrast connectives, (4) one school rule using *está prohibido*, and (5) your final verdict (*estoy a favor / en contra*).",
          modelAnswer:
            "En mi colegio tenemos que llevar una camisa azul claro, pantalones grises y zapatos negros, y está prohibido llevar joyas. Por un lado, el uniforme ahorra tiempo por la mañana e iguala a todos los alumnos. Por otro lado, es bastante incómodo con el calor y cuesta demasiado dinero. Aunque entiendo sus ventajas, estoy en contra del uniforme porque prefiero expresar mi creatividad con mi propia ropa.",
          markScheme: [
            {
              point: "Describes current uniform obligation accurately",
              keywords: ["tengo que llevar", "tenemos que llevar", "hay que llevar"],
            },
            {
              point: "Presents strong arguments in favour of uniform",
              keywords: ["ahorra tiempo", "iguala", "buena imagen", "acoso", "marcas", "practico", "disciplina"],
            },
            {
              point: "Presents arguments against uniform with contrast connectives",
              keywords: ["por otro lado", "sin embargo", "aunque", "incomodo", "caro", "dinero", "personalidad", "creatividad", "calor"],
            },
            {
              point: "States a school dress-code prohibition",
              keywords: ["esta prohibido"],
            },
            {
              point: "Gives a clear final verdict (in favour or against)",
              keywords: ["estoy a favor", "estoy en contra"],
            },
          ],
          hints: [
            "Use *Por un lado… Por otro lado… / Aunque…* to show balanced higher-level reasoning.",
            "Remember *e iguala a los alumnos* and *está prohibido llevar…*.",
          ],
        },
        {
          id: "clothes-uniform-shopping-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "outfits-across-tenses",
          marks: 6,
          question:
            "Write a blog post in Spanish (**80–100 words**) titled *Mi estilo y las compras* covering: (1) your everyday style and favourite colours/materials (Present), (2) a memorable shopping trip during the sales and exact prices paid (Preterite, incl. *fui, compré, pagué* or *costó/costaron*), (3) one item you tried on that did not fit (Preterite), (4) your view on designer brands, (5) what you are going to wear to a celebration next weekend (Immediate Future), and (6) a future shopping resolution (Simple Future).",
          modelAnswer:
            "Normalmente llevo un estilo deportivo con camisetas de algodón, vaqueros azules y zapatillas blancas. El mes pasado fui de compras en las rebajas con mi hermana. Me probé una chaqueta amarilla, pero me quedó demasiado estrecha. Al final elegí una sudadera gris y unos pantalones negros que solo costaron cuarenta euros, y pagué con tarjeta. No me importan las marcas caras porque prefiero buscar buenas gangas. El próximo sábado voy a ponerme mi sudadera nueva para el cumpleaños de Pablo, y en el futuro compraré menos ropa y ahorraré más dinero.",
          markScheme: [
            {
              point: "Describes everyday style with clothes and colours/materials (Present)",
              keywords: ["normalmente", "llevo", "me pongo", "suelo llevar", "deportiv", "de algodon", "de lana", "de rayas"],
            },
            {
              point: "Narrates a past shopping trip during sales with Preterite verbs",
              keywords: ["fui de compras", "rebajas", "compre", "elegi", "pague", "busque"],
            },
            {
              point: "Mentions trying on an item and fit or price in the Preterite",
              keywords: ["me probe", "me quedo", "me quedaron", "costo", "costaron"],
            },
            {
              point: "Gives a justified opinion on brands or bargains",
              keywords: ["marcas", "ganga", "gangas", "caro", "caras", "barato", "baratas"],
            },
            {
              point: "Uses Immediate Future for an upcoming outfit",
              keywords: ["voy a ponerme", "me voy a poner", "voy a llevar", "voy a comprar"],
            },
            {
              point: "Closes with a Simple Future verb",
              keywords: ["comprare", "ahorrare", "llevare", "me pondre", "gastare", "ire"],
            },
          ],
          hints: [
            "Include all four Year 9 tenses: Present (*normalmente*), Preterite (*el mes pasado*), Near Future (*el próximo sábado*) and Simple Future (*en el futuro*).",
            "Watch accents on *algodón, probé, quedó, elegí, pagué, sábado, compraré, ahorraré*.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "clothes-uniform-shopping-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clothes-colours-agreement",
      question: "Translate into Spanish with 100% accuracy: **I wear a navy blue striped tie and brown leather shoes.** (Include *una* and *unos*.)",
      answer: {
        type: "text",
        accept: [
          "Llevo una corbata azul marino de rayas y unos zapatos marrones de cuero",
          "Llevo una corbata de rayas azul marino y unos zapatos marrones de cuero",
          "Llevo una corbata azul marino de rayas y unos zapatos de cuero marrones",
          "Yo llevo una corbata azul marino de rayas y unos zapatos marrones de cuero",
        ],
        display: "Llevo una corbata azul marino de rayas y unos zapatos marrones de cuero",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Llevo una corbata azula marina de rayas y unos zapatos marrónes de cuero"] },
          feedback: "Two traps! Compound **azul marino** stays invariable, and plural **marrones** drops the accent!",
        },
      ],
      hints: [
        "Place noun first, then colour/pattern: *una corbata* + invariable *azul marino* + invariable *de rayas*.",
        "Remember plural *marrón → marrones* drops its written accent.",
        "Add invariable *de cuero* for leather.",
      ],
      solution: [
        "**Llevo una corbata azul marino de rayas y unos zapatos marrones de cuero**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "shopping-demonstratives",
      question: "Translate into Spanish: **Those yellow dresses are too tight on me, so I am not taking them.** (Use *Esos vestidos*, *quedar*, *así que* and *llevarse*.)",
      answer: {
        type: "text",
        accept: [
          "Esos vestidos amarillos me quedan demasiado estrechos, así que no me los llevo",
          "Esos vestidos amarillos me quedan demasiado estrechos así que no me los llevo",
        ],
        display: "Esos vestidos amarillos me quedan demasiado estrechos, así que no me los llevo",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Esas vestidos amarillas me quedan demasiado estrechas, así que no me las llevo"] },
          feedback: "**El vestido** is masculine! Keep masculine plural across **Esos vestidos amarillos … estrechos … me los llevo**.",
        },
      ],
      hints: [
        "*El vestido* is masculine, so keep masculine plural across *esos*, *amarillos*, *estrechos* and *los*!",
        "Keep adverb *demasiado* unchanged before *estrechos*.",
        "Use plural *quedan* and place *no* before *me los llevo*.",
      ],
      solution: [
        "Masculine plural chain: **Esos vestidos amarillos me quedan demasiado estrechos, así que no me los llevo**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "shopping-demonstratives",
      question: "Spot the ONLY shopping sentence with **zero** grammar, pronoun or spelling errors.",
      options: [
        "¿Tiene esto traje azul marino en una talla más grande?",
        "Estas zapatillas blancas me quedan genial, así que me las llevo.",
        "Esos pantalones cortos me queda demasiado largos y cuestan caro.",
        "¿Puedo probarlo me este jersey de lana antes de pagar con tarjeta?",
      ],
      answerIndex: 1,
      hints: [
        "Check EVERY sentence for a classic trap: *esto* before a noun, singular/plural *quedar*, and pronoun order on *probar*.",
        "Inspect *esto traje*, *me queda largos*, and *probarlo me* carefully!",
        "Verify whether *estas zapatillas blancas*, *quedan* and *me las llevo* all match feminine plural.",
      ],
      explanation:
        "**Estas zapatillas blancas me quedan genial, así que me las llevo** is 100% accurate. The other options fail on *esto traje* (should be *este*), *me queda* (should be *quedan*), and *probarlo me* (should be *probármelo*).",
    },
    {
      id: "clothes-uniform-shopping-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "outfits-across-tenses",
      question: "Translate into Spanish (Preterite): **Yesterday I tried on a leather coat, I paid sixty euros, and it was a bargain.** (Use *me probé*, *abrigo de cuero*, *sesenta euros* and *una ganga*.)",
      answer: {
        type: "text",
        accept: [
          "Ayer me probé un abrigo de cuero, pagué sesenta euros y fue una ganga",
          "Ayer me probé un abrigo de cuero, pagué sesenta euros, y fue una ganga",
        ],
        display: "Ayer me probé un abrigo de cuero, pagué sesenta euros y fue una ganga",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer me probé un abrigo de cuero, pagé sesenta euros y fue una ganga"] },
          feedback: "Remember *-gar → -gué* in the *yo* Preterite: **pagué**!",
        },
      ],
      hints: [
        "Preterite *yo* of *probarse* is regular (*me probé*, no *o → ue* stem change!).",
        "Apply *-gar → -gué* on *pagar* (*pagué*) and use *fue* (*ser* Preterite, no accent) for *it was*.",
        "Check *sesenta* (60) vs *setenta* (70).",
      ],
      solution: [
        "**Ayer me probé un abrigo de cuero, pagué sesenta euros y fue una ganga**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "outfits-across-tenses",
      question: "Translate into Spanish using **Simple Future** for both verbs: **Tomorrow I will go shopping and I will put on my new trainers.** (Use *ir de compras*, *ponerse* and *mis zapatillas nuevas*.)",
      answer: {
        type: "text",
        accept: [
          "Mañana iré de compras y me pondré mis zapatillas nuevas",
          "Mañana yo iré de compras y me pondré mis zapatillas nuevas",
        ],
        display: "Mañana iré de compras y me pondré mis zapatillas nuevas",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Mañana iré de compras y me poneré mis zapatillas nuevas"] },
          feedback: "*Ponerse* uses irregular Simple Future stem **pondr-** → **me pondré**!",
        },
      ],
      hints: [
        "*Ir* is regular in the Simple Future (*iré*, accented *-é*).",
        "*Poner* uses irregular future stem *pondr-* + accented *-é*.",
        "Keep feminine plural agreement on *mis zapatillas nuevas*.",
      ],
      solution: [
        "**Mañana iré de compras y me pondré mis zapatillas nuevas**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "school-uniform-debate",
      question: "Translate into Spanish: **Although uniform saves time, I am against it because it is uncomfortable and old-fashioned.** (Use *Aunque*, *el uniforme*, *estoy en contra* and *pasado de moda*.)",
      answer: {
        type: "text",
        accept: [
          "Aunque el uniforme ahorra tiempo, estoy en contra porque es incómodo y está pasado de moda",
          "Aunque el uniforme ahorra tiempo estoy en contra porque es incómodo y está pasado de moda",
          "Aunque el uniforme ahorra tiempo, estoy en contra porque es incómodo y pasado de moda",
          "Aunque el uniforme ahorra tiempo estoy en contra porque es incómodo y pasado de moda",
          "Aunque el uniforme ahorra tiempo, estoy en contra porque es pasado de moda e incómodo",
        ],
        display: "Aunque el uniforme ahorra tiempo, estoy en contra porque es incómodo y pasado de moda",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Aunque el uniforme ahorra tiempo, estoy en contra porque es pasada de moda y incómodo"] },
          feedback: "Watch two traps: *el uniforme* is masculine (**pasado**), and before *incómodo* *y* shifts to **e**!",
        },
      ],
      hints: [
        "Start with *Aunque el uniforme ahorra tiempo*.",
        "Use *estoy en contra porque es…* with masculine singular adjectives.",
        "Remember the written accent on *incómodo* (and switch *y → e* if you put *incómodo* second!).",
      ],
      solution: [
        "**Aunque el uniforme ahorra tiempo, estoy en contra porque es incómodo y pasado de moda**.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "clothes-colours-agreement",
      marks: 5,
      question:
        "Error-detective challenge! Fix all FIVE faulty sentences in Spanish: (a) *Las ropas son muy baratas*, (b) *Llevo una vestido roja*, (c) *Quiero esto abrigo negro*, (d) *Esos zapatos marrón me queda genial*, (e) *Ayer buscé una falda azula marina*.",
      modelAnswer:
        "1. La ropa es muy barata.\n2. Llevo un vestido rojo.\n3. Quiero este abrigo negro.\n4. Esos zapatos marrones me quedan genial.\n5. Ayer busqué una falda azul marino.",
      markScheme: [
        {
          point: "Corrects (a) to singular la ropa es muy barata",
          keywords: ["la ropa es muy barata"],
        },
        {
          point: "Corrects (b) to masculine un vestido rojo",
          keywords: ["un vestido rojo"],
        },
        {
          point: "Corrects (c) to demonstrative este abrigo",
          keywords: ["este abrigo"],
        },
        {
          point: "Corrects (d) to marrones (plural, no accent) and plural me quedan",
          keywords: ["marrones me quedan"],
        },
        {
          point: "Corrects (e) to busqué (-car → -qué) and invariable azul marino",
          keywords: ["busque una falda azul marino"],
        },
      ],
      hints: [
        "Remember *la ropa* is ALWAYS singular and *el vestido* is masculine.",
        "Never use *esto* before a noun; drop the accent on *marrones* and make *quedar* plural.",
        "Apply *-car → -qué* (*busqué*) and freeze compound *azul marino*.",
      ],
    },
    {
      id: "clothes-uniform-shopping-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "outfits-across-tenses",
      marks: 6,
      question:
        "Top-Band Extended Writing (**95–115 words**): Write an article for the Tanglin Spanish magazine comparing school uniform with weekend fashion. Include: (1) exact description of compulsory uniform + one *está prohibido* rule, (2) a balanced uniform debate using *por un lado… por otro lado…* and *e iguala a los alumnos*, (3) what you bought during a past shopping trip (Preterite with *-car/-gar* or *me puse* + price), (4) one item that did not fit using a demonstrative + *quedar*, (5) what you are going to wear to a special event soon (Immediate Future), and (6) your future style or uniform wish (Simple Future or *Me gustaría*).",
      modelAnswer:
        "De lunes a viernes en mi colegio tengo que llevar una camisa blanca, pantalones grises y zapatos negros, y está prohibido llevar gorras o maquillaje. Por un lado, el uniforme ahorra tiempo por la mañana e iguala a los alumnos. Por otro lado, es incómodo con el calor y no permite expresar tu personalidad. El sábado pasado fui de compras a las rebajas, busqué ropa moderna y compré una sudadera verde de algodón que solo costó veinticinco euros; pagué con tarjeta. También me probé esos vaqueros negros, pero me quedaron demasiado estrechos. Este viernes voy a ponerme mi sudadera nueva para ir al cine, y en el futuro compraré ropa más sostenible porque me gustaría proteger el medio ambiente.",
      markScheme: [
        {
          point: "Describes school uniform and includes an está prohibido rule",
          keywords: ["esta prohibido"],
        },
        {
          point: "Builds a balanced uniform debate with pros, cons and connectives",
          keywords: ["por un lado", "por otro lado", "sin embargo", "aunque", "ahorra tiempo", "iguala"],
        },
        {
          point: "Narrates a past shopping purchase and price in the Preterite",
          keywords: ["fui de compras", "busque", "compre", "pague", "costo", "costaron", "me puse"],
        },
        {
          point: "Uses a demonstrative + quedar to comment on fit",
          keywords: ["me quedo", "me quedaron", "me queda", "me quedan"],
        },
        {
          point: "Uses Immediate Future for an upcoming outfit",
          keywords: ["voy a ponerme", "me voy a poner", "voy a llevar", "voy a comprar"],
        },
        {
          point: "Concludes with a Simple Future verb or wish (me gustaría)",
          keywords: ["comprare", "llevare", "me pondre", "me gustaria", "ahorrare"],
        },
      ],
      hints: [
        "Plan 3 crisp paragraphs: (1) Uniform & Debate, (2) Past Shopping Trip & Fit, (3) Upcoming & Future Style.",
        "Weave in high-scoring grammar: *e iguala a los alumnos*, *busqué / pagué*, *costó / costaron*, and *voy a ponerme*.",
        "Proofread every colour agreement (*azul marino*, *marrones*), demonstrative (*este/ese*), and written accent.",
      ],
    },
  ],
};
