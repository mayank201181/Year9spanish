import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Balanced Diet, Healthy Habits & Advice Structures
  // ===========================================================================
  {
    id: "healthy-living-diet-m1",
    title: "MCQ Paper 1 — Balanced Diet & Giving Advice",
    questions: [
      {
        id: "healthy-living-diet-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "balanced-diet-habits",
        strategy: "Match mucho/a and demasiado/a to noun gender",
        question: "Which sentence accurately translates 'I drink lots of water and avoid too much fat'?",
        options: [
          "Bebo mucho agua y evito demasiado grasa.",
          "Bebo mucha agua y evito demasiada grasa.",
          "Bebo muchos agua y evito demasiados grasa.",
          "Bebo mucha agua y evito demasiado grasa.",
        ],
        answerIndex: 1,
        hints: [
          "Check the true gender of *agua* (even though singular takes *el agua*) and *grasa*.",
          "Both *mucho* and *demasiado* agree with the noun they precede.",
        ],
        explanation:
          "Both *agua* and *grasa* are feminine singular nouns, so the quantifiers agree as **mucha agua** and **demasiada grasa**. Writing *mucho agua* is a classic gender trap.",
      },
      {
        id: "healthy-living-diet-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "balanced-diet-habits",
        strategy: "Check plural spelling and accents on ración",
        question: "How do you say 'five portions of fruit and vegetables' in natural Spanish?",
        options: [
          "cinco raciónes de la fruta y verdura",
          "cinco raciones de las fruta y verdura",
          "cinco raciones de fruta y verdura",
          "cinco racións de fruta y verdura",
        ],
        answerIndex: 2,
        hints: [
          "Nouns ending in *-ión* drop their written accent in the plural (*-iones*).",
          "After *raciones de*, omit the definite article.",
        ],
        explanation:
          "**Cinco raciones de fruta y verdura** drops the accent on plural *raciones* (since the stress naturally falls on the second-to-last syllable) and omits *la* after *de*.",
      },
      {
        id: "healthy-living-diet-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "balanced-diet-habits",
        strategy: "Recognise key unhealthy lifestyle vocabulary",
        question: "What does the expression *saltarse el desayuno* mean?",
        options: [
          "to skip breakfast",
          "to salt your breakfast",
          "to cook a hot breakfast",
          "to eat breakfast quickly",
        ],
        answerIndex: 0,
        hints: [
          "Think of *saltar* ('to jump over') used reflexively with a meal.",
          "It is listed among unhealthy habits to avoid.",
        ],
        explanation:
          "**Saltarse el desayuno** literally means 'to jump over breakfast' — i.e., **to skip breakfast**. It has nothing to do with *la sal* (salt).",
      },
      {
        id: "healthy-living-diet-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Check plural adjective agreement with perjudicial",
        question: "Complete the sentence accurately: *Los refrescos azucarados son ______ para la salud porque tienen ______ azúcar.*",
        options: [
          "perjudicial / demasiada",
          "perjudiciales / demasiada",
          "perjudicial / demasiado",
          "perjudiciales / demasiado",
        ],
        answerIndex: 3,
        hints: [
          "Check whether *los refrescos azucarados* is singular or plural.",
          "Remember that *el azúcar* is masculine singular!",
        ],
        explanation:
          "Plural *los refrescos azucarados* requires plural **perjudiciales**, and masculine *el azúcar* takes **demasiado azúcar**.",
      },
      {
        id: "healthy-living-diet-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "giving-health-advice",
        strategy: "Always follow se debe and hay que with an infinitive",
        question: "Which piece of lifestyle advice is 100% grammatically accurate?",
        options: [
          "Se debe comes fruta todos los días.",
          "Hay que bebes dos litros de agua.",
          "Se debe comer fruta todos los días.",
          "Hay que duermes ocho horas diarias.",
        ],
        answerIndex: 2,
        hints: [
          "After *se debe* and *hay que*, check whether the next verb should be conjugated.",
          "Apply the 'One Conjugated Boss Per Clause' rule.",
        ],
        explanation:
          "**Se debe comer fruta todos los días** places an unconjugated **infinitive** (*comer*) immediately after *se debe*. Conjugating the second verb (*comes, bebes, duermes*) is a major exam error.",
      },
      {
        id: "healthy-living-diet-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Distinguish no se debe / no deberías from no tienes que",
        question: "Which sentence accurately translates 'You should not eat too many sweets'?",
        options: [
          "No deberías comer demasiados dulces.",
          "No tienes que comer demasiados dulces.",
          "No deberías comes demasiados dulces.",
          "No deberias comer demasiadas dulces.",
        ],
        answerIndex: 0,
        hints: [
          "Check the meaning of *no tienes que* ('you don't have to') vs *no deberías* ('you should not').",
          "Check the written accent on *deberías* and the masculine gender of *los dulces*.",
        ],
        explanation:
          "**No deberías comer demasiados dulces** gives clear advice against sweets with the accent on **deberías**, infinitive *comer*, and masculine plural *demasiados dulces*. *No tienes que* only means 'you don't have to'.",
      },
      {
        id: "healthy-living-diet-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Match reflexive pronouns after personal vs impersonal advice",
        question: "Which pair of sentences uses reflexive pronouns accurately?",
        options: [
          "Hay que acostarte temprano. / Deberías acostarse temprano.",
          "Hay que acostarse temprano. / Deberías acostarte temprano.",
          "Hay que me acuesto temprano. / Deberías te acuestas temprano.",
          "Hay que acostamos temprano. / Deberías acostar temprano.",
        ],
        answerIndex: 1,
        hints: [
          "Impersonal *hay que* ('one must') keeps *-se* on the infinitive.",
          "Personal *deberías* ('you should') addresses *tú*, so the reflexive pronoun changes to *-te*.",
        ],
        explanation:
          "Impersonal **Hay que acostarse temprano** keeps *-se*, while personal **Deberías acostarte temprano** adapts the reflexive pronoun to *tú* (*-te*).",
      },
      {
        id: "healthy-living-diet-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Use es imprescindible + infinitive without extra prepositions",
        question: "Complete the top-band sentence: *Para mantenerte en forma, ______ hacer ejercicio regularmente.*",
        options: [
          "es imprescindible que hacer",
          "es imprescindible de hacer",
          "es imprescindible haces",
          "es imprescindible",
        ],
        answerIndex: 3,
        hints: [
          "In Spanish, *es importante / imprescindible / necesario* connects directly to an infinitive.",
          "Do not insert *que* or *de* before an infinitive here.",
        ],
        explanation:
          "**Es imprescindible** connects straight to the infinitive *hacer* (*es imprescindible hacer ejercicio*). Adding *que* or *de* before an infinitive is incorrect.",
      },
      {
        id: "healthy-living-diet-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Remember mandatory preposition a after ayudar",
        question: "Translate accurately: 'Playing sport helps me to relax and reduces stress.'",
        options: [
          "Hacer deporte me ayuda a relajarme y reduce el estrés.",
          "Hacer deporte me ayuda relajarme y reduce el estrés.",
          "Hacer deporte me ayudo a relajarme y reduce el estrés.",
          "Hacer deporte me ayuda de relajarme y reduce la estrés.",
        ],
        answerIndex: 0,
        hints: [
          "*Ayudar* always requires one tiny preposition before a following infinitive.",
          "Check both the subject of *ayudar* ('playing sport' → *ayuda*) and the gender of *el estrés*.",
        ],
        explanation:
          "**Hacer deporte me ayuda a relajarme y reduce el estrés** includes mandatory **a** after *ayuda*, 3rd-person *ayuda*, and masculine **el estrés**. Dropping *a* is a frequent English interference mistake.",
      },
      {
        id: "healthy-living-diet-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Use a la / al in Spanish frequency expressions",
        question: "How do you say 'I train at the gym three times a week' in Spanish?",
        options: [
          "Entreno en el gimnasio tres veces en la semana.",
          "Entreno en el gimnasio tres veces por semana de.",
          "Entreno en el gimnasio tres veces a la semana.",
          "Entreno en el gimnasio tres vez a la semana.",
        ],
        answerIndex: 2,
        hints: [
          "Check the plural of *una vez* (*z → c* + *-es*).",
          "Spanish frequency phrases use *a la* before *semana*.",
        ],
        explanation:
          "**Tres veces a la semana** uses plural *veces* and **a la** (*tres veces a la semana*, *dos veces al día*).",
      },
      {
        id: "healthy-living-diet-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Conjugate reflexive stem-changer acostarse in Present",
        question: "Complete the sentence accurately: *Entre semana yo ______ temprano, pero los sábados ______ tarde.*",
        options: [
          "acuesto / acuesto",
          "me acosto / me acosto",
          "te acuestas / me acuesto",
          "me acuesto / me acuesto",
        ],
        answerIndex: 3,
        hints: [
          "*Acostarse* is BOTH reflexive (*me*) AND an *o → ue* stem-changer.",
          "Check that both halves refer to *yo*.",
        ],
        explanation:
          "**Me acuesto** includes reflexive *me* and the *o → ue* stem shift (*acostar → acuesto*). *Acuesto* without *me* would mean 'I put someone else to bed'!",
      },
      {
        id: "healthy-living-diet-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Form Simple Future by attaching endings to full infinitive",
        question: "Which sentence accurately uses the Simple Future to say 'Next year I will drink more water and sleep eight hours'?",
        options: [
          "El año que viene bebí más agua y dormí ocho horas.",
          "El año que viene beberé más agua y dormiré ocho horas.",
          "El año que viene bebere más agua y dormire ocho horas.",
          "El año que viene beberé más agua y duermiré ocho horas.",
        ],
        answerIndex: 1,
        hints: [
          "Attach *-é* (with accent!) directly to the full infinitives *beber* and *dormir*.",
          "Regular verbs NEVER stem-change in the Simple Future (*dormir* stays *dormir-*).",
        ],
        explanation:
          "**Beberé** and **dormiré** attach accented *-é* directly to the unmodified infinitives. *Duermiré* wrongly adds a present stem change, and *bebí / dormí* are Preterite.",
      },
      {
        id: "healthy-living-diet-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Use irregular Simple Future stems har- and tendr-",
        question: "Complete this health resolution in the Simple Future: *A partir de mañana ______ más ejercicio y ______ más energía.*",
        options: [
          "haré / tendré",
          "haceré / teneré",
          "hice / tuve",
          "haría / tendría",
        ],
        answerIndex: 0,
        hints: [
          "Both *hacer* and *tener* have irregular Simple Future stems.",
          "Remember the mnemonic: *Haré, Tendré, Podré, Saldré, Pondré*.",
        ],
        explanation:
          "**Haré** (*har- + -é*) and **tendré** (*tendr- + -é*) are the accurate Simple Future forms. *Haceré / teneré* do not exist; *hice / tuve* are Preterite; *haría / tendría* are Conditional.",
      },
      {
        id: "healthy-living-diet-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Use dejar de + infinitive for giving up unhealthy habits",
        question: "How do you translate 'I will give up eating fast food' accurately?",
        options: [
          "Dejaré de comiendo comida rápida.",
          "Dejaré comer comida rápida.",
          "Dejo de comer comida rápida.",
          "Dejaré de comer comida rápida.",
        ],
        answerIndex: 3,
        hints: [
          "'To give up doing' = *dejar de* + infinitive (never *-ndo* after a preposition!).",
          "Check the tense: 'I will give up' needs Simple Future.",
        ],
        explanation:
          "**Dejaré de comer comida rápida** keeps mandatory **de**, uses the **infinitive** *comer*, and puts *dejar* into the Simple Future (*dejaré*). *Dejo* is Present tense.",
      },
      {
        id: "healthy-living-diet-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Apply the Five Hats, One Bare Head accent rule in Simple Future",
        question: "Which Simple Future sentence has 100% accurate accents and irregular stems?",
        options: [
          "Nosotros comerémos comida casera y poderemos correr más.",
          "Nosotros comeremos comida casera y podremos correr más.",
          "Nosotros comeremos comida casera y podrémos correr más.",
          "Nosotros comemos comida casera y podremos correr más.",
        ],
        answerIndex: 1,
        hints: [
          "In Simple Future, *nosotros* (*-emos*) is the ONLY person without a written accent.",
          "Check the irregular Simple Future stem of *poder* (*podr-*).",
        ],
        explanation:
          "**Comeremos** and **podremos** use the unaccented *-emos* ending and the irregular stem *podr-*. Putting an accent on *-émos* is a classic exam slip.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Wellbeing, Screen Time, Advice Nuance & Future Contrasts
  // ===========================================================================
  {
    id: "healthy-living-diet-m2",
    title: "MCQ Paper 2 — Sport, Sleep, Advice Nuance & Resolutions",
    questions: [
      {
        id: "healthy-living-diet-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Match nutrition groups to real Spanish foods",
        question: "Which Spanish food group includes lentils (*lentejas*), chickpeas (*garbanzos*) and beans, rich in fibre and plant protein?",
        options: [
          "las legumbres",
          "la bollería industrial",
          "los productos lácteos",
          "las golosinas",
        ],
        answerIndex: 0,
        hints: [
          "It looks similar to the English word 'legumes'.",
          "*Bollería industrial* = processed pastries; *lácteos* = dairy; *golosinas* = sweets.",
        ],
        explanation:
          "**Las legumbres** are pulses/legumes — a cornerstone of Spain's Mediterranean diet. *La bollería industrial* and *las golosinas* are sugary processed treats.",
      },
      {
        id: "healthy-living-diet-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Use en lugar de to build balanced diet contrasts",
        question: "Choose the sentence that accurately says 'I eat fruit instead of crisps.'",
        options: [
          "Como fruta para patatas fritas.",
          "Como fruta sin embargo patatas fritas.",
          "Como fruta porque patatas fritas.",
          "Como fruta en lugar de patatas fritas.",
        ],
        answerIndex: 3,
        hints: [
          "Look for the three-word Spanish phrase meaning 'instead of'.",
          "*Sin embargo* means 'however' and connects two clauses, not two nouns.",
        ],
        explanation:
          "**En lugar de** means 'instead of' (*Como fruta en lugar de patatas fritas*), an excellent Year 9 connective for healthy lifestyle contrasts.",
      },
      {
        id: "healthy-living-diet-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Check all impersonal advice frames that take infinitives",
        question: "Which phrase CANNOT be followed directly by an infinitive to give general health advice?",
        options: [
          "Es aconsejable...",
          "Te recomiendo que...",
          "Vale la pena...",
          "Hay que...",
        ],
        answerIndex: 1,
        hints: [
          "Notice the word **que** at the end of one choice — *que* introduces a new clause with a conjugated verb!",
          "*Es aconsejable*, *vale la pena* and *hay que* all connect straight to an infinitive.",
        ],
        explanation:
          "**Te recomiendo que...** contains **que**, which triggers a conjugated verb (subjunctive!), whereas *es aconsejable*, *vale la pena* and *hay que* all take an infinitive directly (*te recomiendo* WITHOUT *que* also takes an infinitive: *te recomiendo dormir más*).",
      },
      {
        id: "healthy-living-diet-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Match verb endings in personal advice to tú vs nosotros",
        question: "A coach tells her squad: 'We should eat better and avoid stress.' Which Spanish sentence accurately matches *nosotros*?",
        options: [
          "Deberías comer mejor y evitar el estrés.",
          "Deberían comer mejor y evitar el estrés.",
          "Deberíamos comer mejor y evitar el estrés.",
          "Se debe comer mejor y evitar el estrés.",
        ],
        answerIndex: 2,
        hints: [
          "Identify the *nosotros* Conditional ending (*-íamos*, always with an accent on *í*!).",
          "*Deberías* = *tú*; *deberían* = *ellos*; *se debe* = impersonal 'one should'.",
        ],
        explanation:
          "**Deberíamos** is the *nosotros* form ('we should'), followed cleanly by infinitives *comer* and *evitar*. Remember the accent on **í** in every Conditional ending!",
      },
      {
        id: "healthy-living-diet-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Choose jugar al vs hacer accurately for sports",
        question: "Which sentence uses *jugar* and *hacer* accurately?",
        options: [
          "Juego natación los lunes y hago al baloncesto los viernes.",
          "Hago al tenis los lunes y juego el ciclismo los viernes.",
          "Juego el baloncesto los lunes y hago a la natación los viernes.",
          "Juego al baloncesto los lunes y hago natación los viernes.",
        ],
        answerIndex: 3,
        hints: [
          "Ball and team games use *jugar + a + el/la* (*juego al baloncesto*).",
          "Individual sports like *natación, ciclismo, atletismo* use *hacer* with no article.",
        ],
        explanation:
          "**Juego al baloncesto** (*jugar a + el = al* for a ball sport) and **hago natación** (*hacer* + individual sport without an article) are both 100% accurate.",
      },
      {
        id: "healthy-living-diet-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Check quantifier agreement with masculine tiempo",
        question: "Which sentence accurately says 'I spend too much time in front of the screen'?",
        options: [
          "Paso demasiada tiempo delante de la pantalla.",
          "Paso demasiado tiempo delante de la pantalla.",
          "Gasto demasiado tiempo delante de la pantalla.",
          "Paso muy tiempo delante de la pantalla.",
        ],
        answerIndex: 1,
        hints: [
          "To 'spend time' in Spanish uses **pasar** (whereas *gastar* means to spend money!).",
          "*El tiempo* is masculine singular, so check *demasiado/demasiada*.",
        ],
        explanation:
          "**Paso demasiado tiempo delante de la pantalla** uses **pasar** for time (not *gastar*, which is for money) and masculine **demasiado tiempo**. *Muy* cannot precede a noun.",
      },
      {
        id: "healthy-living-diet-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Conjugate e→ie reflexive verb sentirse accurately",
        question: "Complete the sentence accurately: *Cuando duermo ocho horas, ______ con mucha energía.*",
        options: [
          "me sento",
          "siento me",
          "me siento",
          "se siente",
        ],
        answerIndex: 2,
        hints: [
          "*Sentirse* is both reflexive (*yo → me*) and an *e → ie* stem-changer.",
          "Place the reflexive pronoun directly before the conjugated verb.",
        ],
        explanation:
          "**Me siento** ('I feel') places *me* before the *e → ie* stem-changed form *siento*. *Me sento* misses the stem change, and *se siente* means 'he/she feels'.",
      },
      {
        id: "healthy-living-diet-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sport-fitness-stress",
        strategy: "Rank Spanish frequency adverbs from least to most often",
        question: "Which sequence orders these frequency phrases from **LEAST frequent** to **MOST frequent**?",
        options: [
          "nunca → rara vez → de vez en cuando → a menudo → todos los días",
          "nunca → a menudo → rara vez → de vez en cuando → todos los días",
          "rara vez → nunca → de vez en cuando → todos los días → a menudo",
          "nunca → de vez en cuando → rara vez → a menudo → todos los días",
        ],
        answerIndex: 0,
        hints: [
          "Translate each one: *nunca* (never), *rara vez* (rarely), *de vez en cuando* (from time to time), *a menudo* (often), *todos los días* (every day).",
          "Check that *rara vez* comes BEFORE *de vez en cuando*.",
        ],
        explanation:
          "Never (*nunca*) < rarely (*rara vez*) < from time to time (*de vez en cuando*) < often (*a menudo*) < every day (*todos los días*).",
      },
      {
        id: "healthy-living-diet-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Check pronoun placement with reflexive Immediate Future",
        question: "Which sentence accurately translates 'Tonight I am going to go to bed early'?",
        options: [
          "Esta noche voy acostarme temprano.",
          "Esta noche voy a acostarme temprano.",
          "Esta noche voy a me acuesto temprano.",
          "Esta noche me voy acostar temprano.",
        ],
        answerIndex: 1,
        hints: [
          "Immediate Future MUST include the preposition **a** (*voy a + infinitive*).",
          "Keep *acostar* in the infinitive with *-me* attached (or *me voy a acostar*).",
        ],
        explanation:
          "**Esta noche voy a acostarme temprano** keeps mandatory **a** and attaches *-me* to the infinitive (*Me voy a acostar temprano* is equally valid!). Omitting *a* or conjugating *acuesto* breaks the structure.",
      },
      {
        id: "healthy-living-diet-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Apply irregular Simple Future stem saldr- for salir",
        question: "Translate into Spanish using the Simple Future: 'My sister will go out for a run every morning.'",
        options: [
          "Mi hermana salirá a correr todas las mañanas.",
          "Mi hermana salió a correr todas las mañanas.",
          "Mi hermana saldré a correr todas las mañanas.",
          "Mi hermana saldrá a correr todas las mañanas.",
        ],
        answerIndex: 3,
        hints: [
          "*Salir* replaces *-i-* with *-d-* in its Simple Future stem (*saldr-*).",
          "Match the ending to *mi hermana* (*ella* → *-á*).",
        ],
        explanation:
          "**Saldrá** (*saldr-* + *-á*) is the accurate 3rd-person singular Simple Future of *salir*. *Saldré* is *yo* ('I will go out'), *salirá* is non-existent, and *salió* is Preterite.",
      },
      {
        id: "healthy-living-diet-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Spot irregular Preterite vs Simple Future in a health contrast",
        question: "Complete the past-vs-future contrast: *El mes pasado yo no ______ suficiente deporte, así que el mes que viene ______ al gimnasio.*",
        options: [
          "hice / iré",
          "hago / fui",
          "haré / iré",
          "hice / iba",
        ],
        answerIndex: 0,
        hints: [
          "*El mes pasado* ('last month') triggers Preterite (*hacer* → *hice*).",
          "*El mes que viene* ('next month') triggers Simple Future (*ir* → *iré*).",
        ],
        explanation:
          "**Hice** (Preterite of *hacer* for *el mes pasado*) contrasts cleanly with **iré** (Simple Future of *ir* for *el mes que viene*). Note that *ir* is completely regular in the Simple Future (*iré, irás, irá*)!",
      },
      {
        id: "healthy-living-diet-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Read a doctor's advice leaflet carefully",
        question: "Read the clinic poster: *Para combatir el cansancio, es imprescindible dormir al menos ocho horas y desconectarse de las pantallas una hora antes de acostarse.* What does the poster advise?",
        options: [
          "Doing eight hours of sport and avoiding dairy products",
          "Drinking energy drinks an hour before going to sleep",
          "Sleeping at least eight hours and unplugging from screens an hour before bed",
          "Eating home-cooked soup every night an hour before studying",
        ],
        answerIndex: 2,
        hints: [
          "Translate *al menos* ('at least') and *desconectarse de las pantallas* ('unplug from screens').",
          "*El cansancio* means tiredness/fatigue.",
        ],
        explanation:
          "The leaflet says that to fight fatigue (*combatir el cansancio*), it is essential to sleep at least 8 hours and **unplug from screens an hour before going to bed**.",
      },
      {
        id: "healthy-living-diet-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Distinguish el sueño, el descanso and el cansancio",
        question: "Which Spanish noun completes the sentence logically? *La falta de ______ provoca mucho ______ durante las clases.*",
        options: [
          "agua / deporte",
          "sueño / cansancio",
          "estrés / bienestar",
          "fibra / descanso",
        ],
        answerIndex: 1,
        hints: [
          "*La falta de...* means 'lack of...'; *provoca...* means 'causes...'.",
          "Match 'lack of sleep' with 'a lot of tiredness'.",
        ],
        explanation:
          "**La falta de sueño** ('lack of sleep') causes **mucho cansancio** ('a lot of tiredness') during lessons.",
      },
      {
        id: "healthy-living-diet-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Check Spanish wellbeing verbs and nouns",
        question: "What does *despejar la mente* mean in the context of going for a walk after exams?",
        options: [
          "to clear one's mind",
          "to skip a meal",
          "to strengthen the heart",
          "to lose energy quickly",
        ],
        answerIndex: 0,
        hints: [
          "*La mente* means 'the mind' (think of 'mental').",
          "*Despejar* literally means 'to clear' (like clearing clouds from a sky!).",
        ],
        explanation:
          "**Despejar la mente** means **to clear one's mind** — a top-band idiom for describing the mental-health benefits of exercise or walking (*dar un paseo*).",
      },
      {
        id: "healthy-living-diet-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Use irregular reflexive Simple Future me pondré en forma",
        question: "Translate accurately using the Simple Future: 'This summer I will get fit.' (Use *ponerse en forma*)",
        options: [
          "Este verano me poneré en forma.",
          "Este verano me puse en forma.",
          "Este verano me pondré en forma.",
          "Este verano pondré en forma.",
        ],
        answerIndex: 2,
        hints: [
          "*Ponerse* is reflexive (*me*) AND has an irregular Simple Future stem (*pondr-*).",
          "Keep *me* before the Simple Future verb.",
        ],
        explanation:
          "**Este verano me pondré en forma** keeps reflexive *me* and uses the irregular Simple Future stem **pondr-** + *-é*. *Me puse* is Preterite, and *me poneré* does not exist.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Reading Comprehension, Complex Contrasts & Exam Precision
  // ===========================================================================
  {
    id: "healthy-living-diet-m3",
    title: "MCQ Paper 3 — Authentic Texts, Traps & Top-Band Mastery",
    questions: [
      {
        id: "healthy-living-diet-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Read an authentic Spanish teen blog for positive vs negative habits",
        question: "Read Hugo's post: *Intento llevar una dieta equilibrada y como mucha comida casera, sobre todo legumbres y pescado azul. Sin embargo, mi punto débil es que a veces pico golosinas mientras estudio por la tarde.* What is Hugo's one unhealthy habit?",
        options: [
          "He skips breakfast every morning before school.",
          "He drinks too many sugary fizzy drinks at lunch.",
          "He sometimes snacks on sweets while studying.",
          "He refuses to eat home-cooked fish or pulses.",
        ],
        answerIndex: 2,
        hints: [
          "Look after *Sin embargo, mi punto débil es que...* ('However, my weak spot is that...').",
          "Translate *pico golosinas mientras estudio*.",
        ],
        explanation:
          "Hugo eats home-cooked pulses and oily fish, but admits his weak spot (*mi punto débil*) is **sometimes snacking on sweets while studying** (*a veces pico golosinas mientras estudio*).",
      },
      {
        id: "healthy-living-diet-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Spot the subtle error inside near-identical Spanish advice sentences",
        question: "Only ONE of these four advice sentences contains ZERO grammatical errors. Which one is it?",
        options: [
          "Es necesario evitar las bebidas energéticas para dormir mejor.",
          "Es necesario de evitar las bebidas energéticas para dormir mejor.",
          "Es necesario evitas las bebidas energéticas para dormir mejor.",
          "Es necesario evitar los bebidas energéticas para dormir mejor.",
        ],
        answerIndex: 0,
        hints: [
          "Check three things: no extra preposition after *es necesario*, an infinitive verb, and feminine plural article for *bebidas*.",
          "Eliminate *de evitar*, *evitas* and *los bebidas*.",
        ],
        explanation:
          "**Es necesario evitar las bebidas energéticas para dormir mejor** uses *es necesario* + bare infinitive *evitar* + feminine plural *las bebidas energéticas*.",
      },
      {
        id: "healthy-living-diet-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sport-fitness-stress",
        strategy: "Read a survey on teen sleep and screen habits accurately",
        question: "Read the article excerpt: *Según un estudio reciente, los jóvenes que apagan el móvil antes de las diez duermen una hora más y se concentran mucho mejor en clase, mientras que quienes pasan cuatro horas ante la pantalla sufren más estrés.* What does the study conclude?",
        options: [
          "Using a phone for four hours improves exam concentration.",
          "Teenagers who study at ten o'clock suffer less anxiety.",
          "Everyone in the survey slept for ten hours every night.",
          "Switching phones off before ten brings extra sleep and sharper focus.",
        ],
        answerIndex: 3,
        hints: [
          "Translate *apagan el móvil antes de las diez* ('switch off their mobile before ten').",
          "Notice the contrast *mientras que* ('whereas').",
        ],
        explanation:
          "The study finds that young people who **turn off their phone before 10 p.m.** sleep an extra hour and **concentrate much better in class**, whereas heavy screen users experience more stress.",
      },
      {
        id: "healthy-living-diet-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Track three tenses inside one authentic Spanish diary entry",
        question: "Read Alba's diary: *Antes llevaba una vida muy sedentaria y el mes pasado comí demasiada comida rápida. Ahora salgo a correr dos veces a la semana y el próximo trimestre participaré en una carrera de cinco kilómetros.* Which verb shows her **future resolution**?",
        options: [
          "comí (I ate)",
          "participaré (I will take part)",
          "salgo (I go out)",
          "llevaba (I used to lead)",
        ],
        answerIndex: 1,
        hints: [
          "Find the time expression pointing forward: *el próximo trimestre* ('next term').",
          "Look for the Simple Future *-é* attached to a full infinitive.",
        ],
        explanation:
          "**Participaré** ('I will take part') is in the **Simple Future** paired with *el próximo trimestre*. *Comí* is Preterite, *salgo* is Present, and *llevaba* is Imperfect.",
      },
      {
        id: "healthy-living-diet-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-health-advice",
        strategy: "Recognise por lo tanto and además as top-band discourse markers",
        question: "Which connective best links cause and consequence here? *Dormir mal afecta a la memoria; ______, hay que acostarse antes de las once.*",
        options: [
          "por lo tanto",
          "sin embargo",
          "aunque",
          "en lugar de",
        ],
        answerIndex: 0,
        hints: [
          "The second half is the logical conclusion ('therefore') of the first half.",
          "*Sin embargo* = however; *aunque* = although; *en lugar de* = instead of.",
        ],
        explanation:
          "**Por lo tanto** means 'therefore', neatly connecting the fact (*sleeping badly affects memory*) to the logical advice (*one must go to bed before eleven*).",
      },
      {
        id: "healthy-living-diet-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "balanced-diet-habits",
        strategy: "Distinguish adverb demasiado (invariable) vs adjective demasiado/a (variable)",
        question: "Complete BOTH gaps accurately: *Esta hamburguesa es ______ grasienta porque contiene ______ grasa.*",
        options: [
          "demasiada / demasiado",
          "demasiada / demasiada",
          "demasiado / demasiado",
          "demasiado / demasiada",
        ],
        answerIndex: 3,
        hints: [
          "Before an **adjective** (*grasienta*), *demasiado* ('too') is an adverb and NEVER changes!",
          "Before a **noun** (*grasa*, feminine), *demasiada* ('too much') MUST agree in gender.",
        ],
        explanation:
          "Before adjective *grasienta*, invariable adverb **demasiado** stays *-o* (*demasiado grasienta*); before feminine noun *grasa*, it agrees as **demasiada** (*demasiada grasa*)!",
      },
      {
        id: "healthy-living-diet-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Check 3rd-person preterite o→u shift in dormir",
        question: "Complete this past wellness report: *Anoche mi hermano ______ diez horas porque estaba agotado, pero mis amigos solo ______ cinco horas.*",
        options: [
          "dormió / dormieron",
          "durmió / durmieron",
          "duermió / duermieron",
          "durmió / dormieron",
        ],
        answerIndex: 1,
        hints: [
          "*Dormir* is an *-ir* stem-changer (*o → ue* in Present) that makes a sandal/sole shift in the Preterite.",
          "In both *él* and *ellos* Preterite, *o* shifts to **u**!",
        ],
        explanation:
          "In the Preterite, *dormir* shifts **o → u** in 3rd-person singular (**durmió**) and 3rd-person plural (**durmieron**). *Dormió* and *duermió* are both incorrect.",
      },
      {
        id: "healthy-living-diet-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Compare Immediate Future and Simple Future meanings",
        question: "Which sentence correctly combines an Immediate Future plan AND a Simple Future consequence?",
        options: [
          "Voy a beber más agua y tengo más energía.",
          "Beberé más agua y voy a tuve más energía.",
          "Voy a beber más agua y tendré más energía.",
          "Voy a bebo más agua y tendré más energía.",
        ],
        answerIndex: 2,
        hints: [
          "Immediate Future = *voy a* + infinitive.",
          "Simple Future of *tener* uses the irregular stem *tendr-* + *-é*.",
        ],
        explanation:
          "**Voy a beber más agua** (Immediate Future) + **tendré más energía** (Simple Future of *tener*) combines both future tenses accurately.",
      },
      {
        id: "healthy-living-diet-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "giving-health-advice",
        strategy: "Identify all elements of an authentic formal/polite recommendation",
        question: "A nutritionist writes to a student: *Te aconsejo sustituir la bollería industrial por frutos secos y yogur natural.* What change is the nutritionist recommending?",
        options: [
          "Avoiding yoghurt and nuts before doing sport",
          "Eating processed pastries together with natural yoghurt",
          "Buying more processed pastries to increase energy",
          "Replacing processed pastries with nuts and natural yoghurt",
        ],
        answerIndex: 3,
        hints: [
          "Translate *sustituir A por B* ('to replace A with B').",
          "Check *la bollería industrial* (processed pastries) and *frutos secos* (nuts).",
        ],
        explanation:
          "*Sustituir la bollería industrial por frutos secos y yogur natural* means **replacing processed pastries with nuts and natural yoghurt**.",
      },
      {
        id: "healthy-living-diet-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "balanced-diet-habits",
        strategy: "Check Spanish gender exceptions ending in -d and -ción",
        question: "Which set of lifestyle nouns is 100% **feminine**?",
        options: [
          "salud, alimentación, natación, ansiedad",
          "salud, descanso, natación, bienestar",
          "estrés, fibra, dieta, mente",
          "comida, sobrepeso, grasa, energía",
        ],
        answerIndex: 0,
        hints: [
          "Nouns ending in *-d* (*salud, ansiedad*) and *-ción* (*alimentación, natación*) are almost always feminine!",
          "Eliminate any list containing masculine *el descanso*, *el estrés* or *el sobrepeso*.",
        ],
        explanation:
          "**La salud**, **la alimentación**, **la natación** and **la ansiedad** are all feminine (following the reliable *-d* and *-ción* gender rules).",
      },
      {
        id: "healthy-living-diet-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sport-fitness-stress",
        strategy: "Distinguish reflexive verbs with different meanings (levantar vs levantarse)",
        question: "Why MUST you include *me* in *Todos los días **me levanto** a las siete*?",
        options: [
          "Because *levantarse* is an irregular verb in the Present tense",
          "Because *levantar* without *me* means to lift an object, not get oneself up",
          "Because all Spanish verbs describing time take *me* before them",
          "Because *me* changes the verb from Present tense into Preterite",
        ],
        answerIndex: 1,
        hints: [
          "Compare *levanto pesas* ('I lift weights') with *me levanto* ('I get myself up').",
          "Reflexive pronouns show the action reflects back onto the subject.",
        ],
        explanation:
          "Without *me*, *levantar* means 'to lift something else' (*levanto pesas* = I lift weights). Adding reflexive **me** (*me levanto*) means 'I get (myself) up'!",
      },
      {
        id: "healthy-living-diet-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-health-resolutions",
        strategy: "Conjugate Simple Future across all six persons accurately",
        question: "Complete the plural future resolution: *El año que viene mis padres ______ menos sal y nosotros ______ más fruta.*",
        options: [
          "consumiran / compraremos",
          "consumirán / comprarémos",
          "consumirán / compraremos",
          "consumieron / compraremos",
        ],
        answerIndex: 2,
        hints: [
          "Check *ellos* (*-án* with accent!) and *nosotros* (*-emos* with NO accent!).",
          "Eliminate *consumieron* (Preterite) and any choice missing the accent on *-án* or adding an accent to *-emos*.",
        ],
        explanation:
          "**Consumirán** (*ellos* → accented *-án*) and **compraremos** (*nosotros* → unaccented *-emos*) follow the Simple Future accent rule accurately.",
      },
      {
        id: "healthy-living-diet-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "giving-health-advice",
        strategy: "Combine se debe, en lugar de and para in a complex advice sentence",
        question: "Which Spanish sentence accurately translates 'One should walk to school instead of going by car in order to keep fit'?",
        options: [
          "Se debe vas a pie al colegio en lugar de ir en coche para estar en forma.",
          "Se debe ir a pie al colegio en lugar de yendo en coche para estar en forma.",
          "Se debe ir a pie al colegio en lugar de ir en coche por estar en forma.",
          "Se debe ir a pie al colegio en lugar de ir en coche para estar en forma.",
        ],
        answerIndex: 3,
        hints: [
          "Check ALL three verb forms: after *se debe*, after *en lugar de*, and after *para* — every single one must be an infinitive!",
          "Purpose ('in order to') takes **para**, not *por*.",
        ],
        explanation:
          "**Se debe ir a pie al colegio en lugar de ir en coche para estar en forma** uses infinitives after *se debe*, *en lugar de* and *para* ('in order to'). Never use *-ndo* (*yendo*) after a preposition!",
      },
      {
        id: "healthy-living-diet-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sport-fitness-stress",
        strategy: "Identify cause-and-effect pairs in Spanish health advice",
        question: "Read the advice card: *Dar un paseo al aire libre durante treinta minutos al día fortalece el corazón y mejora el estado de ánimo.* Which TWO benefits are mentioned?",
        options: [
          "It builds big muscles and replaces breakfast.",
          "It lowers screen battery usage and saves money.",
          "It strengthens the heart and boosts your mood.",
          "It removes the need for water and adds vitamins.",
        ],
        answerIndex: 2,
        hints: [
          "Translate *fortalece el corazón* and *mejora el estado de ánimo*.",
          "*Al aire libre* means 'outdoors / in the fresh air'.",
        ],
        explanation:
          "*Fortalece el corazón* = strengthens the heart, and *mejora el estado de ánimo* = improves mood/spirits.",
      },
      {
        id: "healthy-living-diet-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-health-resolutions",
        strategy: "Spot the ONE regular verb hidden among irregular Simple Future stems",
        question: "Three of these verbs have **irregular** Simple Future stems, and ONE is **completely regular**. Which verb is completely regular in the Simple Future?",
        options: [
          "hacer",
          "dormir",
          "tener",
          "salir",
        ],
        answerIndex: 1,
        hints: [
          "Test each verb in *yo* Simple Future: *haré, tendré, saldré...*.",
          "Remember that boot stem-changers (*o → ue*) do NOT stem-change in the Simple Future!",
        ],
        explanation:
          "**Dormir** is 100% regular in the Simple Future (**dormiré, dormirás, dormirá...**). *Hacer* (*har-*), *tener* (*tendr-*) and *salir* (*saldr-*) all have irregular future stems.",
      },
    ],
  },
];
