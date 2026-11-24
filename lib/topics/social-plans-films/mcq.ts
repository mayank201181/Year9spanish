import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1 — Foundations: Invitations, Time, Places & Polite Excuses
  // =========================================================================
  {
    id: "social-plans-films-m1",
    title: "MCQ Paper 1 — Invitations, Excuses & Film Essentials",
    questions: [
      {
        id: "social-plans-films-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arranging-a-meeting",
        strategy: "Distinguish quedar vs quedarse",
        question: "Which Spanish question naturally asks a friend \"Shall we meet up on Saturday?\"",
        options: [
          "¿Nos quedamos en sábado?",
          "¿Quedamos a el sábado?",
          "¿Quedamos el sábado?",
          "¿Quedar el sábado?",
        ],
        answerIndex: 2,
        hints: [
          "Check which verb means 'to arrange to meet up' rather than 'to stay'.",
          "Days of the week use *el* (never *en* or *a*) to mean 'on'.",
        ],
        explanation:
          "**¿Quedamos el sábado?** uses non-reflexive **quedar** (*to meet up*) in the *nosotros* present plus **el** before a day of the week. *¿Nos quedamos?* means *Shall we stay?*, and *en sábado* is a literal English error.",
      },
      {
        id: "social-plans-films-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arranging-a-meeting",
        strategy: "Check a la vs a las",
        question: "How do you say \"at 1:30\" in Spanish?",
        options: [
          "a la una y media",
          "a las una y media",
          "en la una y media",
          "a la una y cuarto",
        ],
        answerIndex: 0,
        hints: [
          "To say 'at' a clock time, Spanish uses *a* (not *en*).",
          "One o'clock is singular, so check whether *la* or *las* agrees with *una*.",
        ],
        explanation:
          "**a la una y media** is correct because 1 o'clock is singular (**a la una**) and *y media* means *half past*. *a las una* wrongly mixes plural *las* with singular *una*, and *y cuarto* means *quarter past*.",
      },
      {
        id: "social-plans-films-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arranging-a-meeting",
        strategy: "Step up and subtract for menos cuarto",
        question: "Your friend texts: *«Quedamos a las ocho menos cuarto delante del cine.»* At what time are you meeting?",
        options: [
          "8:15",
          "8:45",
          "7:15",
          "7:45",
        ],
        answerIndex: 3,
        hints: [
          "Translate *menos* literally: does it mean 'plus' or 'minus'?",
          "Start at 8:00 (*las ocho*) and subtract a quarter of an hour (*menos cuarto*).",
        ],
        explanation:
          "**7:45** is *a las ocho menos cuarto* (literally *eight minus a quarter*). *8:15* would be *a las ocho y cuarto*, and *8:45* would be *a las nueve menos cuarto*.",
      },
      {
        id: "social-plans-films-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arranging-a-meeting",
        strategy: "Article-weld check: a+el → al, de+el → del",
        question: "Choose the grammatically accurate sentence to say \"Let's meet in front of the shopping centre.\"",
        options: [
          "Quedamos delante de el centro comercial.",
          "Quedamos delante del centro comercial.",
          "Quedamos delante al centro comercial.",
          "Quedamos delante la centro comercial.",
        ],
        answerIndex: 1,
        hints: [
          "*delante* is always followed by *de*.",
          "When *de* sits right before masculine singular *el*, what must happen?",
        ],
        explanation:
          "**Quedamos delante del centro comercial.** is correct because *delante de* + masculine *el* contracts obligatorily to **del**. Writing *de el* uncontracted or swapping to *al* is incorrect.",
      },
      {
        id: "social-plans-films-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "accepting-making-excuses",
        strategy: "Match tone to enthusiastic acceptance",
        question: "Your friend asks: *«¿Te gustaría ir a la bolera esta tarde?»* Which response accepts enthusiastically?",
        options: [
          "¡Sí, me encantaría! ¡Qué buena idea!",
          "¡Qué pena! No puedo esta tarde.",
          "Lo siento, quizá otro día.",
          "No me gusta nada la bolera.",
        ],
        answerIndex: 0,
        hints: [
          "Look for an expression meaning 'I would love to' rather than an apology.",
        ],
        explanation:
          "**¡Sí, me encantaría! ¡Qué buena idea!** means *Yes, I would love to! What a great idea!* Both *¡Qué pena!* (*What a shame!*) and *Lo siento, quizá otro día* decline the invitation.",
      },
      {
        id: "social-plans-films-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Modal + infinitive lock-in",
        question: "Complete the polite excuse accurately: *«Lo siento, no puedo salir porque ___ mis deberes.»*",
        options: [
          "tengo que hago",
          "tengo hacer",
          "tengo que hacer",
          "puedo que hacer",
        ],
        answerIndex: 2,
        hints: [
          "How do you say 'I have to' in Spanish — does *tener* need *que*?",
          "Should the second verb (*hacer*) be conjugated or stay in the infinitive?",
        ],
        explanation:
          "**tengo que hacer** is correct: *tener que* always takes the **infinitive** (*hacer*). *tengo que hago* wrongly conjugates both verbs, and *tengo hacer* omits the mandatory *que*.",
      },
      {
        id: "social-plans-films-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Check personal a before people",
        question: "Which sentence accurately says \"I have to look after my little sister\"?",
        options: [
          "Tengo que cuidar mi hermana pequeña.",
          "Tengo que cuidar a mi hermana pequeña.",
          "Tengo que cuido a mi hermana pequeña.",
          "Tengo cuidar de mi hermana pequeña.",
        ],
        answerIndex: 1,
        hints: [
          "Check whether Spanish needs a special preposition before a specific person who receives the action.",
          "Also check that *tengo que* is followed by an infinitive, not a conjugated verb.",
        ],
        explanation:
          "**Tengo que cuidar a mi hermana pequeña.** includes both **que** + infinitive *cuidar* and the mandatory **personal a** before *mi hermana pequeña*. Dropping *a* or conjugating *cuido* loses accuracy marks.",
      },
      {
        id: "social-plans-films-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Check que-filter on modal verbs",
        question: "Which Spanish sentence is grammatically **correct**?",
        options: [
          "No puedo que venir al cine hoy.",
          "Debo que estudiar para el examen.",
          "Quiero que ir a tomar un helado.",
          "Debo ordenar mi dormitorio hoy.",
        ],
        answerIndex: 3,
        hints: [
          "Remember the T-Q vs P-Q-D rule: only *tener que* uses *que* before an infinitive.",
          "Check which modal verb goes straight into the infinitive without an extra *que*.",
        ],
        explanation:
          "**Debo ordenar mi dormitorio hoy.** correctly places the infinitive *ordenar* directly after *debo* with no *que*. *poder*, *deber*, and *querer* never take *que* before an infinitive with the same subject.",
      },
      {
        id: "social-plans-films-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "film-genres-opinions",
        strategy: "Match Spanish cinema nouns to English",
        question: "What does *«las películas de ciencia ficción»* mean in English?",
        options: [
          "adventure films",
          "historical films",
          "science-fiction films",
          "detective films",
        ],
        answerIndex: 2,
        hints: [
          "Break down the two cognates: *ciencia* and *ficción*.",
        ],
        explanation:
          "**science-fiction films** translates *las películas de ciencia ficción*. Adventure films are *películas de aventuras*, historical films are *películas históricas*, and detective films are *películas policiacas*.",
      },
      {
        id: "social-plans-films-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Match gustar/encantar to singular vs plural noun",
        question: "Complete the opinion accurately: *«___ las películas de acción porque son muy entretenidas.»*",
        options: [
          "Me encantan",
          "Me encanta",
          "Me gusta",
          "Le gusta",
        ],
        answerIndex: 0,
        hints: [
          "Look at the subject of the verb: is *las películas de acción* singular or plural?",
          "With *gustar* and *encantar*, plural nouns require an *-n* on the verb.",
        ],
        explanation:
          "**Me encantan** agrees with the plural noun *las películas de acción*. Using singular *me encanta* or *me gusta* fails to match the plural subject.",
      },
      {
        id: "social-plans-films-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Watch false friends and adjective agreement",
        question: "How do you translate \"The plot is very exciting\" into natural Spanish?",
        options: [
          "El argumento es muy excitante.",
          "El argumento es muy emocionante.",
          "La argumento es muy emocionanta.",
          "El argumento está muy emocionante.",
        ],
        answerIndex: 1,
        hints: [
          "Avoid the false friend for 'exciting' — Spanish uses a word connected to 'emotion'.",
          "Permanent qualities of a film take *ser*, not *estar*, and *el argumento* is masculine.",
        ],
        explanation:
          "**El argumento es muy emocionante.** uses masculine *el argumento*, *ser* (*es*) for a permanent quality, and **emocionante** (*exciting*). *excitante* is a notorious false friend in Spanish.",
      },
      {
        id: "social-plans-films-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Match noun gender and plural ending",
        question: "Complete with accurate adjective agreement: *«Los efectos especiales son ___ y la banda sonora es ___.»*",
        options: [
          "impresionante / fantástico",
          "impresionantes / fantástico",
          "impresionante / fantástica",
          "impresionantes / fantástica",
        ],
        answerIndex: 3,
        hints: [
          "Check the number of *los efectos especiales* (plural!) and the gender of *la banda sonora* (feminine singular!).",
          "Adjectives ending in *-e* add *-s* in the plural; *-o* adjectives change to *-a* for feminine singular.",
        ],
        explanation:
          "**impresionantes / fantástica** agrees with both nouns: *los efectos especiales* is masculine plural (**impresionantes**) and *la banda sonora* is feminine singular (**fantástica**).",
      },
      {
        id: "social-plans-films-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Use trata de in the present for plot summaries",
        question: "Which phrase idiomatically begins a plot summary: \"The film is about a young musician\"?",
        options: [
          "La película trata de un joven músico.",
          "La película es sobre de un joven músico.",
          "La película está de un joven músico.",
          "La película habla por un joven músico.",
        ],
        answerIndex: 0,
        hints: [
          "What reflexive-free verb + *de* means 'to be about' in Spanish film and book reviews?",
          "Plot summaries always stay in the present tense.",
        ],
        explanation:
          "**La película trata de un joven músico.** uses **tratar de** (*to be about*), the standard idiomatic expression in Spanish reviews. *sobre de*, *estar de*, and *hablar por* are ungrammatical.",
      },
      {
        id: "social-plans-films-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Check accents on short irregular preterites",
        question: "Which sentence accurately narrates *'Yesterday I went to the cinema and saw a comedy'* (*yo* form) with zero accent errors?",
        options: [
          "Ayer fuí al cine y ví una comedia.",
          "Ayer fue al cine y vio una comedia.",
          "Ayer fui al cine y vi una comedia.",
          "Ayer voy al cine y veo una comedia.",
        ],
        answerIndex: 2,
        hints: [
          "*Ayer* signals a completed past action (preterite), and the subject is *yo* ('I').",
          "Do one-syllable preterite forms like *fui* and *vi* take a written accent?",
        ],
        explanation:
          "**Ayer fui al cine y vi una comedia.** uses *yo* preterites **fui** and **vi** with **no accents** (monosyllables never take accents here). *fuí / ví* have outdated/incorrect accents, and *fue / vio* mean *he/she*, not *I*.",
      },
      {
        id: "social-plans-films-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Match direct object pronoun to la película",
        question: "How do you translate \"I recommend it to all fans of animation\" when referring to *la película*?",
        options: [
          "Lo recomiendo a todos los aficionados a la animación.",
          "La recomiendo a todos los aficionados a la animación.",
          "Recomiendo la a todos los aficionados a la animación.",
          "Le recomiendo a todos los aficionados a la animación.",
        ],
        answerIndex: 1,
        hints: [
          "What gender is *la película* — masculine (*lo*) or feminine (*la*)?",
          "Where does a direct object pronoun sit relative to a conjugated verb like *recomiendo*?",
        ],
        explanation:
          "**La recomiendo a todos los aficionados a la animación.** places feminine direct object pronoun **la** (*it* = *la película*) directly **before** conjugated *recomiendo*. *lo* would be for a masculine noun (*el documental*), and pronouns never follow a conjugated verb.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2 — Reading Dialogues, Excuse Nuances & Genre Comparisons
  // =========================================================================
  {
    id: "social-plans-films-m2",
    title: "MCQ Paper 2 — Dialogues, Reading Comprehension & Cinema Nuances",
    questions: [
      {
        id: "social-plans-films-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arranging-a-meeting",
        strategy: "Read every detail of a short text message",
        question:
          "Read Sofía's message:\n\n*«Hola Mateo, ¿te gustaría ir al centro comercial el viernes a las cinco y cuarto? Podemos quedar enfrente de la estación.»*\n\nWhere does Sofía suggest meeting?",
        options: [
          "Inside the shopping centre",
          "Opposite the station",
          "In front of the cinema",
          "Next to the main square",
        ],
        answerIndex: 1,
        hints: [
          "Look at the final sentence starting with *Podemos quedar…*",
          "Check the difference between *delante de* (in front of) and *enfrente de* (opposite).",
        ],
        explanation:
          "**Opposite the station** translates *enfrente de la estación*. Although they plan to go to the shopping centre (*el centro comercial*), she suggests meeting opposite the station.",
      },
      {
        id: "social-plans-films-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Spot the true reason behind a refusal",
        question:
          "Read Mateo's reply to Sofía:\n\n*«¡Qué pena! Me encantaría ir, pero el viernes por la tarde tengo que pasear al perro y ayudar a mi padre en la cocina. ¿Qué tal el sábado a la misma hora?»*\n\nWhy can't Mateo go on Friday?",
        options: [
          "He has no money and feels very tired.",
          "He has to tidy his bedroom and study.",
          "He dislikes going to the shopping centre.",
          "He has to walk the dog and help his dad.",
        ],
        answerIndex: 3,
        hints: [
          "Look directly after *tengo que* in Mateo's reply.",
          "Translate *pasear al perro* and *ayudar a mi padre* carefully.",
        ],
        explanation:
          "**He has to walk the dog and help his dad.** matches *tengo que pasear al perro y ayudar a mi padre en la cocina*. He actually says *Me encantaría ir* (he would love to go), and proposes Saturday instead.",
      },
      {
        id: "social-plans-films-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arranging-a-meeting",
        strategy: "Contrast por qué (why?) vs porque (because)",
        question: "Choose the pair that accurately fills both gaps: *«¿___ no vienes al cine? — ___ estoy muy cansado.»*",
        options: [
          "Por qué / Porque",
          "Porque / Por qué",
          "Por qué / Por qué",
          "Porque / Porque",
        ],
        answerIndex: 0,
        hints: [
          "The first gap is a question word ('Why?'); the second introduces a reason ('Because').",
          "Question words in Spanish carry a written accent and 'Why?' is two words.",
        ],
        explanation:
          "**Por qué / Porque** is correct: **¿Por qué?** (two words, accent on *é*) means *Why?*, while **porque** (one word, no accent) means *because*.",
      },
      {
        id: "social-plans-films-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arranging-a-meeting",
        strategy: "Match time expressions accurately",
        question: "Which Spanish phrase means \"at 9:00 p.m. sharp\"?",
        options: [
          "a las nueve y media de la tarde",
          "a las nueve menos cuarto de la noche",
          "a las nueve en punto de la noche",
          "a la nueve en punto de la mañana",
        ],
        answerIndex: 2,
        hints: [
          "Look for the phrase meaning 'sharp / on the dot' (*en punto*) and 'at night' (*de la noche*).",
        ],
        explanation:
          "**a las nueve en punto de la noche** means *at 9:00 p.m. sharp*. *en punto* means *on the dot*, and 9 p.m. takes *de la noche*.",
      },
      {
        id: "social-plans-films-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Check stem-changing verb poder in all persons",
        question: "Complete the question to a friend: *«¿___ quedar mañana después del instituto?»* (Can we meet tomorrow after school?)",
        options: [
          "Puedemos",
          "Podéis",
          "Pueden",
          "Podemos",
        ],
        answerIndex: 3,
        hints: [
          "*poder* is an *o→ue* boot stem-changer — which two persons sit OUTSIDE the boot?",
          "The prompt asks 'Can **we** meet…?' (*nosotros*).",
        ],
        explanation:
          "**Podemos** is correct because *nosotros* sits outside the *o→ue* boot, so the stem stays *pod-*. *Puedemos* is a classic boot-verb error; *Podéis* means *you all* and *Pueden* means *they*.",
      },
      {
        id: "social-plans-films-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Match counter-proposal vocabulary",
        question: "After apologising that you are busy on Friday, which sentence politely proposes an alternative?",
        options: [
          "¡No me apetece nunca salir contigo!",
          "¿Qué tal el domingo por la tarde?",
          "Tengo que lavar los platos ahora.",
          "Odio ir al cine los viernes.",
        ],
        answerIndex: 1,
        hints: [
          "Look for an open question suggesting another day of the week.",
          "Recall how to say 'How about…?' in Spanish.",
        ],
        explanation:
          "**¿Qué tal el domingo por la tarde?** (*How about Sunday afternoon?*) is the standard polite counter-proposal. The other choices either give another excuse or sound rude.",
      },
      {
        id: "social-plans-films-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Spot key opinion idiom dar miedo / hacer reír",
        question:
          "Read Lucas's comment about cinema:\n\n*«No soporto las películas de terror porque me dan mucho miedo. En cambio, me encantan las comedias porque siempre me hacen reír.»*\n\nWhich statement accurately summarises Lucas's opinion?",
        options: [
          "He loves horror films because they make him laugh.",
          "He dislikes comedies because they are too predictable.",
          "He cannot stand horror films because they scare him.",
          "He prefers documentaries because they are educational.",
        ],
        answerIndex: 2,
        hints: [
          "Check the meaning of *no soporto* and *me dan mucho miedo*.",
          "Notice *En cambio* introduces a contrast with his second genre (*las comedias*).",
        ],
        explanation:
          "**He cannot stand horror films because they scare him.** translates *No soporto las películas de terror porque me dan mucho miedo*. Comedies (*las comedias*) are the ones that make him laugh (*me hacen reír*).",
      },
      {
        id: "social-plans-films-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Distinguish ser aburrido vs estar aburrido",
        question: "You want to tell a friend \"The documentary is boring\" (describing the documentary's quality). Which Spanish sentence is right?",
        options: [
          "El documental es aburrido.",
          "El documental está aburrido.",
          "La documental es aburrida.",
          "El documental es aburrida.",
        ],
        answerIndex: 0,
        hints: [
          "Remember: *ser aburrido* = to be boring; *estar aburrido* = to feel bored.",
          "Check the gender of *documental* (*el* or *la*?).",
        ],
        explanation:
          "**El documental es aburrido.** is correct: *el documental* is masculine, and **ser** + *aburrido* means *to be boring*. *está aburrido* would mean the documentary itself feels bored!",
      },
      {
        id: "social-plans-films-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Use preferir (e→ie) + a for comparisons",
        question: "Complete accurately: *«Yo ___ las películas de aventuras ___ las películas románticas.»*",
        options: [
          "prefero / que",
          "prefiero / que",
          "prefero / a",
          "prefiero / a",
        ],
        answerIndex: 3,
        hints: [
          "*preferir* is an *e→ie* stem-changing verb in the *yo* form.",
          "Which preposition translates 'to' in 'prefer X **to** Y'?",
        ],
        explanation:
          "**prefiero / a** is correct: *preferir* changes *e→ie* in *yo* (**prefiero**) and takes the preposition **a** (*prefer X to Y*), never *que*.",
      },
      {
        id: "social-plans-films-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Check cinema feature vocabulary",
        question: "In a film review, what does *«la banda sonora»* refer to?",
        options: [
          "The film's opening scene",
          "The film's special effects",
          "The film's musical soundtrack",
          "The film's Spanish subtitles",
        ],
        answerIndex: 2,
        hints: [
          "Notice *sonora* connects to *sonido* (sound).",
          "Think of the audio track that accompanies the scenes throughout a film.",
        ],
        explanation:
          "**The film's musical soundtrack** is *la banda sonora*. Special effects are *los efectos especiales*, subtitles are *los subtítulos*, and a scene is *la escena*.",
      },
      {
        id: "social-plans-films-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Read past vs present vs future clues in a review",
        question:
          "Read Elena's mini-review:\n\n*«El domingo pasado vi «El laberinto del fauno» en casa. Aunque el argumento fue un poco oscuro, los efectos especiales me parecieron impresionantes. La recomiendo a los fans de la fantasía.»*\n\nWhich statement about Elena's review is **true**?",
        options: [
          "She watched the film at a cinema on Saturday.",
          "She liked the special effects despite the dark plot.",
          "She hated the film and refuses to recommend it.",
          "She has not watched the film yet, only the trailer.",
        ],
        answerIndex: 1,
        hints: [
          "Check *en casa* vs cinema, and *El domingo pasado* vs Saturday.",
          "Look at *Aunque el argumento fue un poco oscuro, los efectos especiales me parecieron impresionantes.*",
        ],
        explanation:
          "**She liked the special effects despite the dark plot.** matches *Aunque el argumento fue un poco oscuro, los efectos especiales me parecieron impresionantes*. She watched it at home (*en casa*) on Sunday, and she recommends it (*La recomiendo*).",
      },
      {
        id: "social-plans-films-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Check preterite of gustar / encantar / decepcionar",
        question: "Which sentence accurately says \"I loved the ending, but the actors disappointed me\"?",
        options: [
          "Me encantó el final, pero los actores me decepcionaron.",
          "Me encantaron el final, pero los actores me decepcionó.",
          "Me encanta el final, pero los actores me decepcionan.",
          "Me encanté el final, pero los actores me decepcionaron.",
        ],
        answerIndex: 0,
        hints: [
          "Is *el final* singular or plural? Is *los actores* singular or plural?",
          "With *encantar*, the verb agrees with the thing loved (*el final* → 3rd person singular, NOT *yo*!).",
        ],
        explanation:
          "**Me encantó el final, pero los actores me decepcionaron.** uses singular preterite **encantó** for *el final* and plural preterite **decepcionaron** for *los actores*. *Me encanté* would mistakenly conjugate *encantar* for *yo*.",
      },
      {
        id: "social-plans-films-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Spot exact tense for each part of a film review",
        question: "Complete this multi-tense review sentence: *«Ayer ___ la película; ___ de dos astronautas y mañana ___ el libro original.»*",
        options: [
          "veo / trató / vi",
          "veré / trata / vi",
          "vi / traté / voy a ver",
          "vi / trata / leeré",
        ],
        answerIndex: 3,
        hints: [
          "Check the three time clues: *Ayer* (past), plot summary (*de dos astronautas* → present), *mañana* (future).",
          "Also check the third noun: *el libro* (the book) — do you *ver* or *leer* a book?",
        ],
        explanation:
          "**vi / trata / leeré** matches every clue: *Ayer* → preterite **vi** (*I saw*); plot summary → present **trata** (*it is about*); *mañana* + *el libro* → simple future **leeré** (*I will read*).",
      },
      {
        id: "social-plans-films-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Check lo mejor / lo peor + fue",
        question: "How do you translate \"The best thing was the soundtrack, although the ending was slow\"?",
        options: [
          "El mejor fue la banda sonora, pero el final estuvo lenta.",
          "Lo mejor fue la banda sonora, aunque el final fue lento.",
          "Lo mejor era la banda sonora, sin embargo el final fueron lentos.",
          "La mejor fue la banda sonora, aunque el final fue lenta.",
        ],
        answerIndex: 1,
        hints: [
          "Use neuter **lo mejor** to mean 'the best thing'.",
          "Check the gender of *el final* (masculine singular → *lento*).",
        ],
        explanation:
          "**Lo mejor fue la banda sonora, aunque el final fue lento.** uses neuter **lo mejor** (*the best thing*), **aunque** (*although*), and masculine *lento* matching *el final*.",
      },
      {
        id: "social-plans-films-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "arranging-a-meeting",
        strategy: "Interpret Spanish cinema listing details",
        question:
          "Look at a Madrid cinema listing:\n\n*«MIÉRCOLES — DÍA DEL ESPECTADOR (5,50 €). «Aventura Galáctica» — Sala 3 — VOSE — 19:45.»*\n\nWhich statement about this screening is accurate?",
        options: [
          "It is dubbed into Spanish and starts at 7:15 p.m.",
          "It is at full weekend price and starts at 8:45 p.m.",
          "It is in the original language with Spanish subtitles at 7:45 p.m.",
          "It is a free outdoor summer film starting at 10:00 p.m.",
        ],
        answerIndex: 2,
        hints: [
          "What does the Spanish cinema abbreviation **VOSE** stand for?",
          "Convert 19:45 to 12-hour clock time carefully.",
        ],
        explanation:
          "**VOSE** stands for *Versión Original Subtitulada al Español* (original audio with Spanish subtitles), and 19:45 is 7:45 p.m. (*las ocho menos cuarto de la tarde*). *Día del espectador* is Spain's discounted Wednesday ticket day.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3 — Higher-Level Accuracy, Reviews & Cultural Fluency
  // =========================================================================
  {
    id: "social-plans-films-m3",
    title: "MCQ Paper 3 — Top-Band Cinema Reviews & Social Fluency",
    questions: [
      {
        id: "social-plans-films-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arranging-a-meeting",
        strategy: "Check preposition + article contractions",
        question: "Which sentence contains **zero** grammar or punctuation errors?",
        options: [
          "¿A qué hora quedamos delante del cine el sábado?",
          "¿A que hora quedamos delante de el cine en sábado?",
          "A qué hora quedamos delante del cine el Sábado?",
          "¿A qué hora nos quedamos delante del cine el sábado?",
        ],
        answerIndex: 0,
        hints: [
          "Check four details: inverted *¿*, accent on *qué*, contraction *del*, lowercase *el sábado*.",
          "Remember non-reflexive *quedamos* = 'we meet up', whereas *nos quedamos* = 'we stay'.",
        ],
        explanation:
          "**¿A qué hora quedamos delante del cine el sábado?** hits every accuracy point: inverted **¿**, accented **qué**, non-reflexive **quedamos**, contracted **del**, and lowercase **el sábado**.",
      },
      {
        id: "social-plans-films-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Check agreement on estar + adjectives",
        question: "Ana writes an excuse to her friend: *«Lo siento, estoy muy ___ hoy porque tengo demasiados deberes.»* Which adjective agrees with Ana?",
        options: [
          "ocupado",
          "ocupados",
          "ocupada",
          "ocupadas",
        ],
        answerIndex: 2,
        hints: [
          "Who is speaking? Check whether the speaker (Ana) is masculine or feminine, singular or plural.",
          "With *estoy*, the adjective must match the subject's gender (*-o* vs *-a*) and number.",
        ],
        explanation:
          "**ocupada** agrees with feminine singular speaker Ana (*estoy muy ocupada*). *ocupado* is masculine singular and *ocupadas* is plural.",
      },
      {
        id: "social-plans-films-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "accepting-making-excuses",
        strategy: "Recognise indirect excuses in a realistic dialogue",
        question:
          "Read the chat between Carlos and Nora:\n\n*Carlos: ¿Vamos a ver el estreno de «Fuego Azul» esta noche a las nueve?*\n*Nora: ¡Ojalá pudiera! Sin embargo, mañana tengo un examen difícil de ciencias y mis padres no me dejan salir entre semana. ¿Y si vamos el viernes?*\n\nWhy can't Nora go tonight?",
        options: [
          "She has already watched the film with her parents.",
          "She has a science exam tomorrow and her parents won't let her go out.",
          "She thinks the film starts too early at nine o'clock.",
          "She prefers watching television series at home on Fridays.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the two reasons after *Sin embargo* in Nora's reply.",
          "Translate *no me dejan salir entre semana* ('they don't let me go out on school nights').",
        ],
        explanation:
          "**She has a science exam tomorrow and her parents won't let her go out.** matches *mañana tengo un examen difícil de ciencias y mis padres no me dejan salir entre semana*. *¡Ojalá pudiera!* means *I wish I could!*",
      },
      {
        id: "social-plans-films-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Match cinema adjectives to their exact opposite",
        question: "Which pair of film adjectives are **opposites** (antonyms)?",
        options: [
          "emocionante / impresionante",
          "aburrido / lento",
          "divertido / entretenido",
          "original / predecible",
        ],
        answerIndex: 3,
        hints: [
          "Test each pair: three of them contain words with similar positive or negative meanings.",
          "Which pair contrasts a fresh, inventive plot with one you can guess immediately?",
        ],
        explanation:
          "**original / predecible** (*original / predictable*) are true opposites. *emocionante / impresionante* and *divertido / entretenido* are positive pairs, while *aburrido / lento* are both negative.",
      },
      {
        id: "social-plans-films-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Match direct object pronoun to masculine documental",
        question: "You are reviewing **un documental** (masculine!) about marine wildlife. How do you say \"I watched it last night and I recommend it\"?",
        options: [
          "La vi anoche y la recomiendo.",
          "Le vi anoche y le recomiendo.",
          "Lo vi anoche y lo recomiendo.",
          "Lo veo anoche y lo recomendé.",
        ],
        answerIndex: 2,
        hints: [
          "Check the gender of *el documental* — is it masculine (*lo*) or feminine (*la*)?",
          "Check the tense of both verbs: *anoche* (last night → preterite) and current recommendation (present).",
        ],
        explanation:
          "**Lo vi anoche y lo recomiendo.** uses masculine direct object pronoun **lo** for *el documental*, preterite **vi** for *anoche*, and present **recomiendo** for the current recommendation.",
      },
      {
        id: "social-plans-films-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Check star-rating verb dar (yo → doy)",
        question: "How do you say \"I give it four stars out of five\" in a Spanish film review?",
        options: [
          "Le doy cuatro estrellas de cinco.",
          "Le da cuatro estrellas de cinco.",
          "Lo dar cuatro estrellas de cinco.",
          "Me doy cuatro estrellas de cinco.",
        ],
        answerIndex: 0,
        hints: [
          "What is the irregular *yo* present form of *dar* (to give)?",
          "*Le* means 'to it' (to the film); *me doy* would mean 'I give myself'!",
        ],
        explanation:
          "**Le doy cuatro estrellas de cinco.** uses irregular *yo* **doy** (*I give*) + indirect object pronoun **le** (*to it*). *Le da* means *he/she gives it*, and *Me doy* means *I give myself*.",
      },
      {
        id: "social-plans-films-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Check plural formation of -z nouns like actriz",
        question: "Complete the sentence accurately: *«En esta película, los actores y las ___ actúan de maravilla.»*",
        options: [
          "actrizs",
          "actrizes",
          "actricias",
          "actrices",
        ],
        answerIndex: 3,
        hints: [
          "How do Spanish nouns ending in *-z* (like *la actriz*, *la luz*, *la vez*) form their plural?",
          "The final *-z* changes to *-c-* before adding *-es*.",
        ],
        explanation:
          "**actrices** is the regular Spanish plural of *la actriz*: any noun or adjective ending in **-z** changes **z → c** before adding **-es** (just like *feliz → felices*).",
      },
      {
        id: "social-plans-films-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Identify balanced critique in a longer film review",
        question:
          "Read Diego's review:\n\n*«El sábado fui al cine con mi primo y vimos «Sombras en Toledo», una película histórica que tiene lugar en el siglo XVI. Por un lado, la música fue conmovedora y la actriz principal estuvo brillante. Por otro lado, el ritmo me pareció demasiado lento durante la primera hora. Aun así, le doy cuatro estrellas y pronto veré otra obra del mismo director.»*\n\nWhat was Diego's **criticism** of the film?",
        options: [
          "The lead actress gave a weak performance.",
          "The pace felt too slow during the first hour.",
          "The historical setting was hard to follow.",
          "The music was disappointing and repetitive.",
        ],
        answerIndex: 1,
        hints: [
          "Look after *Por otro lado* ('On the other hand') for Diego's negative point.",
          "Translate *el ritmo me pareció demasiado lento*.",
        ],
        explanation:
          "**The pace felt too slow during the first hour.** translates *el ritmo me pareció demasiado lento durante la primera hora*. He praised the music (*conmovedora*) and the lead actress (*brillante*).",
      },
      {
        id: "social-plans-films-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-film-reviews",
        strategy: "Check future plans in a film review",
        question: "In Diego's review above, *«pronto veré otra obra del mismo director»* means:",
        options: [
          "Soon I will watch another work by the same director.",
          "Last week I watched another work by the same director.",
          "I always watch every work by the same director.",
          "I would never watch another work by the same director.",
        ],
        answerIndex: 0,
        hints: [
          "Look at the ending **-é** attached to the full infinitive *ver* → *veré*.",
          "What does the time marker *pronto* mean?",
        ],
        explanation:
          "**Soon I will watch another work by the same director.** translates *pronto* (soon) + simple future **veré** (*I will see/watch*). Notice *veré* adds *-é* to the infinitive *ver*, whereas preterite *vi* means *I watched*.",
      },
      {
        id: "social-plans-films-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arranging-a-meeting",
        strategy: "Match Spanish preposition of place",
        question: "Your friend says: *«Quedamos al lado de la cafetería, detrás del estadio.»* Where is the meeting point?",
        options: [
          "Inside the café, opposite the stadium",
          "In front of the café, next to the stadium",
          "Opposite the café, in front of the stadium",
          "Next to the café, behind the stadium",
        ],
        answerIndex: 3,
        hints: [
          "Match both prepositions: *al lado de* and *detrás de*.",
          "Remember *delante de* = in front of, whereas *detrás de* = behind.",
        ],
        explanation:
          "**Next to the café, behind the stadium** translates *al lado de la cafetería* (next to the café) and *detrás del estadio* (behind the stadium).",
      },
      {
        id: "social-plans-films-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "accepting-making-excuses",
        strategy: "Check conjugating tener que for different subjects",
        question: "How do you say \"We can't go to the cinema because we have to study\"?",
        options: [
          "No podemos ir al cine porque tenemos estudiar.",
          "No podemos ir al cine porque tenemos que estudiamos.",
          "No podemos ir al cine porque tenemos que estudiar.",
          "No puedo ir al cine porque tengo que estudiar.",
        ],
        answerIndex: 2,
        hints: [
          "Check the subject: 'we' requires *nosotros* forms of *poder* and *tener*.",
          "After *tenemos que*, the second verb must stay in the infinitive.",
        ],
        explanation:
          "**No podemos ir al cine porque tenemos que estudiar.** uses *nosotros* forms *podemos* and *tenemos que* + infinitive *estudiar*. Leaving out *que* or conjugating *estudiamos* breaks the modal rule.",
      },
      {
        id: "social-plans-films-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "film-genres-opinions",
        strategy: "Check comparatives más/menos… que and mejor que",
        question: "Which sentence accurately says \"In my opinion, action films are better than romantic comedies\"?",
        options: [
          "En mi opinión, las películas de acción son más buenas que las comedias románticas.",
          "En mi opinión, las películas de acción son mejores que las comedias románticas.",
          "En mi opinión, las películas de acción son mejor que las comedias románticas.",
          "En mi opinión, las películas de acción son mejores de las comedias románticas.",
        ],
        answerIndex: 1,
        hints: [
          "Never write *más bueno* in Spanish — use the irregular comparative *mejor*.",
          "Check both plural agreement (*mejores* for *las películas*) and the comparative word *que* ('than').",
        ],
        explanation:
          "**En mi opinión, las películas de acción son mejores que las comedias románticas.** uses plural **mejores** (agreeing with *las películas*) + **que** (*than*). *más buenas* is non-standard and singular *mejor* fails to agree.",
      },
      {
        id: "social-plans-films-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Identify the one grammatically flawed review sentence",
        question: "Three of these Spanish film review sentences are accurate; **one** contains a grammar mistake. Which sentence has the mistake?",
        options: [
          "La película tiene lugar en Barcelona durante el verano.",
          "Lo peor fue el guion porque fue demasiado predecible.",
          "El mes que viene voy a ver la segunda parte con mi hermano.",
          "Me encantó mucho los efectos especiales de la película.",
        ],
        answerIndex: 3,
        hints: [
          "Check verb agreement in every sentence — especially with *encantar* and plural nouns!",
          "Is *los efectos especiales* singular or plural?",
        ],
        explanation:
          "**Me encantó mucho los efectos especiales de la película.** is flawed because *los efectos especiales* is plural and requires **me encantaron** (also *encantar* already means *really love*, so adding *mucho* is unnatural). All other three sentences are completely accurate.",
      },
      {
        id: "social-plans-films-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "accepting-making-excuses",
        strategy: "Spot personal a vs no a before things",
        question: "Compare these four excuses after *tengo que*. Which one uses (or omits) the preposition **a** accurately?",
        options: [
          "cuidar a mi abuela y ordenar mi dormitorio",
          "cuidar mi abuela y ordenar a mi dormitorio",
          "cuidar a mi abuela y ordenar a mi dormitorio",
          "cuidar mi abuela y ordenar mi dormitorio",
        ],
        answerIndex: 0,
        hints: [
          "Spanish uses the **personal a** before a specific person who is the direct object of a verb.",
          "Is *mi dormitorio* a person or an object? Objects NEVER take the personal *a*!",
        ],
        explanation:
          "**cuidar a mi abuela y ordenar mi dormitorio** correctly places the personal **a** before a person (*a mi abuela*) and omits it before a thing (*mi dormitorio*).",
      },
      {
        id: "social-plans-films-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-film-reviews",
        strategy: "Choose the most authentic Year 9 top-band closing line",
        question: "Which closing line best combines a balanced recommendation and a correct future tense for a 5-star review of *una película*?",
        options: [
          "Aunque está un poco larga, recomiendo la sin duda y la vería ayer pronto.",
          "Aunque es un poco largo, lo recomiendo sin duda y voy ver otra vez pronto.",
          "Aunque es un poco larga, la recomiendo sin duda y la volveré a ver pronto.",
          "Aunque son un poco largas, la recomiendo sin duda y la volví a ver mañana.",
        ],
        answerIndex: 2,
        hints: [
          "Check gender agreement with *la película* (*larga*, *la*) and make sure the future verb matches *pronto* ('soon').",
          "Remember *voy a + inf.* needs *a*, and *volví* is past (clashes with *mañana*!).",
        ],
        explanation:
          "**Aunque es un poco larga, la recomiendo sin duda y la volveré a ver pronto.** gets every detail right: *ser* + feminine *larga*, feminine pronoun **la**, and simple future **volveré a ver** (*I will watch again*) matching *pronto*.",
      },
    ],
  },
];
