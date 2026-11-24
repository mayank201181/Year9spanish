import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "social-plans-films-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "arranging-a-meeting",
      strategy: "Use non-reflexive quedar for 'meet up'",
      question: "Complete the Spanish invitation with ONE word (present tense of *quedar*, we): «¿___ el sábado a las seis?»",
      answer: {
        type: "text",
        accept: ["quedamos", "Quedamos"],
        display: "Quedamos",
      },
      traps: [
        { spec: { type: "text", accept: ["nos quedamos"] }, feedback: "*Nos quedamos* means 'we stay' — drop *nos* to mean 'shall we meet up?'." },
        { spec: { type: "text", accept: ["quedar"] }, feedback: "Conjugate *quedar* for *nosotros* (*we*) rather than leaving it in the infinitive." },
      ],
      hints: ["What is the *nosotros* present-tense ending for a regular *-ar* verb?"],
      solution: [
        "Remove *-ar* from *quedar* → stem *qued-*.",
        "Add the *nosotros* ending *-amos* → **Quedamos** (*Shall we meet?*).",
      ],
    },
    {
      id: "social-plans-films-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "arranging-a-meeting",
      strategy: "Contract a + el → al and de + el → del",
      question: "Which phrase accurately translates \"in front of the cinema\"?",
      options: [
        "delante de el cine",
        "delante del cine",
        "delante al cine",
        "delante de la cine",
      ],
      answerIndex: 1,
      hints: ["*el cine* is masculine singular, and *delante* is followed by *de*."],
      explanation: "**delante del cine** contracts *de + el* into **del**. Writing *de el* separately is always wrong in Spanish.",
    },
    {
      id: "social-plans-films-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "arranging-a-meeting",
      strategy: "Step up and subtract for quarter-to times",
      question: "Write the Spanish time phrase for **at 6:45** (using *menos cuarto*, without part of day).",
      answer: {
        type: "text",
        accept: ["a las siete menos cuarto", "A las siete menos cuarto"],
        display: "a las siete menos cuarto",
      },
      traps: [
        { spec: { type: "text", accept: ["a las seis menos cuarto"] }, feedback: "*a las seis menos cuarto* is 5:45! For 6:45, step UP to 7 (*siete*) and subtract a quarter." },
        { spec: { type: "text", accept: ["a las seis y cuarto"] }, feedback: "*y cuarto* means quarter past (6:15); for quarter to, use *menos cuarto* from the next hour." },
      ],
      hints: [
        "For times past half-past, move up to the next hour (7) and subtract 15 minutes.",
        "Start with *a las* + 7 + *menos cuarto*.",
      ],
      solution: [
        "6:45 is fifteen minutes before 7:00.",
        "Start with *a las siete* and subtract a quarter (*menos cuarto*) → **a las siete menos cuarto**.",
      ],
    },
    {
      id: "social-plans-films-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "accepting-making-excuses",
      strategy: "Modal + infinitive lock-in",
      question: "Translate into Spanish (5 words): \"I have to do my homework.\" (use *deberes*)",
      answer: {
        type: "text",
        accept: [
          "Tengo que hacer mis deberes",
          "tengo que hacer mis deberes",
          "Tengo que hacer los deberes",
          "tengo que hacer los deberes",
        ],
        display: "Tengo que hacer mis deberes",
      },
      traps: [
        { spec: { type: "text", accept: ["tengo que hago mis deberes", "tengo que hago los deberes"] }, feedback: "Keep the second verb in the infinitive (*hacer*), never conjugated (*hago*)." },
        { spec: { type: "text", accept: ["tengo hacer mis deberes", "tengo hacer los deberes"] }, feedback: "Do not drop *que* — 'I have to' is always **tengo que** + infinitive." },
      ],
      hints: [
        "Use *tengo que* followed directly by an infinitive verb.",
        "The verb 'to do' is *hacer*, and 'my homework' is plural (*mis deberes*).",
      ],
      solution: [
        "'I have to' → **Tengo que**.",
        "Keep 'to do' in the infinitive → **hacer** + **mis deberes**.",
      ],
    },
    {
      id: "social-plans-films-quiz-q05",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "accepting-making-excuses",
      strategy: "Distinguish accepting vs declining phrases",
      question: "Which Spanish phrase means \"What a shame!\" when declining an invitation?",
      options: [
        "¡Qué buena idea!",
        "¡Por supuesto!",
        "¡Qué pena!",
        "¡De acuerdo!",
      ],
      answerIndex: 2,
      hints: ["Look for the exclamation that expresses regret rather than enthusiasm."],
      explanation: "**¡Qué pena!** means *What a shame!* or *What a pity!*, whereas *¡Qué buena idea!*, *¡Por supuesto!*, and *¡De acuerdo!* all accept an invitation.",
    },
    {
      id: "social-plans-films-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "film-genres-opinions",
      strategy: "Agree gustar/encantar with plural nouns",
      question: "Fill the gap with the correct present-tense form of *encantar*: «Me ___ las películas de ciencia ficción.»",
      answer: {
        type: "text",
        accept: ["encantan"],
        display: "encantan",
      },
      traps: [
        { spec: { type: "text", accept: ["encanta"] }, feedback: "*las películas* is plural, so *encantar* must take the plural ending *-n* (**encantan**)." },
        { spec: { type: "text", accept: ["encanto"] }, feedback: "With *encantar*, the verb agrees with the thing loved (*las películas*), never with *yo*!" },
      ],
      hints: [
        "Check whether *las películas* is singular or plural.",
        "Choose between 3rd-person singular (*-a*) and 3rd-person plural (*-an*).",
      ],
      solution: [
        "The grammatical subject is plural (*las películas de ciencia ficción*).",
        "Therefore *encantar* takes the 3rd-person plural ending → **encantan**.",
      ],
    },
    {
      id: "social-plans-films-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "film-genres-opinions",
      strategy: "Avoid the false friend for 'exciting'",
      question: "Complete the opinion naturally: «La banda sonora es fantástica y el argumento es muy ___.» (exciting)",
      options: [
        "emocionante",
        "excitante",
        "predecible",
        "decepcionante",
      ],
      answerIndex: 0,
      hints: [
        "Remember which Spanish word is a false friend for 'exciting'.",
        "Pick the positive adjective derived from *emoción*.",
      ],
      explanation: "**emocionante** is the authentic Spanish word for *exciting*. *excitante* is a false friend; *predecible* and *decepcionante* are negative.",
    },
    {
      id: "social-plans-films-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "writing-film-reviews",
      strategy: "Use trata de in the present for plot summaries",
      question: "Complete the film review sentence with TWO words meaning \"is about\": «La película ___ ___ una familia en México.»",
      answer: {
        type: "text",
        accept: ["trata de"],
        display: "trata de",
      },
      traps: [
        { spec: { type: "text", accept: ["es sobre"] }, feedback: "In top-band Spanish film reviews, use the verb phrase **trata de** rather than translating 'is about' literally." },
        { spec: { type: "text", accept: ["tratan de"] }, feedback: "*La película* is singular, so use singular **trata de**." },
      ],
      hints: [
        "Use the present-tense 3rd-person singular of *tratar* + a short preposition.",
        "Plot summaries always use the present tense.",
      ],
      solution: [
        "The idiomatic Spanish verb for 'to be about' (a film/book) is *tratar de*.",
        "Conjugated for singular *la película* → **trata de**.",
      ],
    },
    {
      id: "social-plans-films-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "writing-film-reviews",
      strategy: "Remember monosyllable preterites have zero accents",
      question: "Put *ver* into the *yo* preterite tense: «El sábado pasado ___ una comedia en el cine.»",
      answer: {
        type: "text",
        accept: ["vi"],
        display: "vi",
      },
      traps: [
        { spec: { type: "text", accept: ["veo"] }, feedback: "*El sábado pasado* signals the past (preterite), not the present (*veo*)." },
        { spec: { type: "text", accept: ["vio"] }, feedback: "*vio* means 'he/she watched'; the prompt needs the *yo* form ('I watched')." },
        { spec: { type: "text", accept: ["veré"] }, feedback: "*veré* is the future ('I will watch'); *El sábado pasado* requires the preterite." },
      ],
      hints: [
        "What is the irregular *yo* preterite of *ver*?",
        "Remember: one-syllable preterites (*fui, fue, vi, vio*) take NO written accent!",
      ],
      solution: [
        "*El sábado pasado* triggers the preterite tense.",
        "The *yo* preterite of *ver* is **vi** (no accent mark).",
      ],
    },
    {
      id: "social-plans-films-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "writing-film-reviews",
      strategy: "Use direct object pronoun la before the conjugated verb",
      question: "Which sentence accurately closes a review of *una película* with both a recommendation and a future plan?",
      options: [
        "Lo recomiendo a todos y ayer veré la segunda parte.",
        "Recomiendo la a todos y voy ver la segunda parte.",
        "La recomendé a todos y el año pasado veo la secuela.",
        "La recomiendo a todos y el mes que viene veré la secuela.",
      ],
      answerIndex: 3,
      hints: [
        "Check gender agreement with feminine *la película* (*la*, not *lo*) and pronoun position.",
        "Check that the time expression (*el mes que viene*) matches the future verb tense.",
      ],
      explanation: "**La recomiendo a todos y el mes que viene veré la secuela.** places feminine pronoun **la** before *recomiendo* and matches *el mes que viene* with simple future **veré**.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each, incl. 3–4 written per paper)
  // =========================================================================
  papers: [
    {
      id: "social-plans-films-p1",
      title: "Practice Paper 1 — Making Plans, Excuses & Cinema Opinions",
      questions: [
        {
          id: "social-plans-films-p1-q01",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "arranging-a-meeting",
          strategy: "Check Spanish days of the week rule",
          question: "Which phrase accurately translates \"on Friday afternoon\"?",
          options: [
            "el viernes por la tarde",
            "en viernes por la tarde",
            "al viernes de la tarde",
            "el Viernes en la tarde",
          ],
          answerIndex: 0,
          hints: ["Days of the week take *el* (never *en*) and are lowercase in Spanish."],
          explanation: "**el viernes por la tarde** uses lowercase *el viernes* (*on Friday*) + *por la tarde* (*in the afternoon*, when no exact clock hour is given).",
        },
        {
          id: "social-plans-films-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "arranging-a-meeting",
          strategy: "Contract a + el → al",
          question: "Translate into Spanish (4 words): \"Do you want to go to the cinema?\" (informal *tú*)",
          answer: {
            type: "text",
            accept: ["¿Quieres ir al cine?", "Quieres ir al cine"],
            display: "¿Quieres ir al cine?",
          },
          traps: [
            { spec: { type: "text", accept: ["¿Quieres ir a el cine?", "Quieres ir a el cine"] }, feedback: "Always contract *a + el* into **al** (*ir al cine*)!" },
            { spec: { type: "text", accept: ["¿Quieres vas al cine?", "Quieres vas al cine"] }, feedback: "Keep the second verb in the infinitive (**ir**), never conjugated (*vas*)." },
          ],
          hints: ["Use *querer* in *tú* present (*e→ie*) + infinitive *ir* + *al cine*."],
          solution: [
            "*querer* (tú) → **Quieres**.",
            "Add infinitive **ir** + contracted **al cine** → **¿Quieres ir al cine?**",
          ],
        },
        {
          id: "social-plans-films-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Distinguish a la una vs a las",
          question: "Translate into Spanish: \"at 1:15 in the afternoon\" (use *y cuarto*).",
          answer: {
            type: "text",
            accept: ["a la una y cuarto de la tarde", "A la una y cuarto de la tarde"],
            display: "a la una y cuarto de la tarde",
          },
          traps: [
            { spec: { type: "text", accept: ["a las una y cuarto de la tarde"] }, feedback: "1 o'clock is singular, so use **a la una**, never *a las una*." },
            { spec: { type: "text", accept: ["a la una y media de la tarde"] }, feedback: "*y media* is half past (1:30); quarter past is **y cuarto**." },
          ],
          hints: [
            "Remember 1 o'clock takes singular *a la una*.",
            "After a specific clock time, 'in the afternoon' is *de la tarde*.",
          ],
          solution: [
            "1:00 is singular → **a la una**.",
            "Add *y cuarto* (:15) and *de la tarde* (p.m.) → **a la una y cuarto de la tarde**.",
          ],
        },
        {
          id: "social-plans-films-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Apply de + el → del contraction",
          question: "Complete the meeting point in Spanish (3 words): «Quedamos ___ ___ ___» (opposite the park, using *enfrente* + *el parque*).",
          answer: {
            type: "text",
            accept: ["enfrente del parque", "Enfrente del parque"],
            display: "enfrente del parque",
          },
          traps: [
            { spec: { type: "text", accept: ["enfrente de el parque"] }, feedback: "Contract *de + el* into **del** → *enfrente del parque*!" },
            { spec: { type: "text", accept: ["delante del parque"] }, feedback: "*delante del parque* means 'in front of the park'; the prompt asks for 'opposite' (**enfrente del**)." },
          ],
          hints: [
            "'Opposite' is *enfrente de*.",
            "Watch what happens when *de* meets masculine *el parque*.",
          ],
          solution: [
            "Combine *enfrente de* + *el parque*.",
            "Weld *de + el* into **del** → **enfrente del parque**.",
          ],
        },
        {
          id: "social-plans-films-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Match modal verb conjugation to subject",
          question: "Which excuse correctly says \"I'm sorry, I can't go out because I have to walk the dog\"?",
          options: [
            "Lo siento, no puedo salir porque tengo que pasear a el perro.",
            "Lo siento, no puedo salgo porque tengo que pasear al perro.",
            "Lo siento, no puedo salir porque tengo que pasear al perro.",
            "Lo siento, no puedo que salir porque tengo pasear al perro.",
          ],
          answerIndex: 2,
          hints: [
            "Check both infinitives (*salir*, *pasear*) and the contraction *a + el → al*.",
            "Remember *poder* never takes *que*, whereas *tener que* always does.",
          ],
          explanation: "**Lo siento, no puedo salir porque tengo que pasear al perro.** keeps both verbs after modals in the infinitive (*salir*, *pasear*) and contracts *a + el* into **al perro**.",
        },
        {
          id: "social-plans-films-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Include personal a before a specific person",
          question: "Translate into Spanish: \"I have to look after my little brother.\" (use *cuidar* + *mi hermano pequeño*)",
          answer: {
            type: "text",
            accept: [
              "Tengo que cuidar a mi hermano pequeño",
              "tengo que cuidar a mi hermano pequeño",
              "Tengo que cuidar a mi hermano pequeño.",
            ],
            display: "Tengo que cuidar a mi hermano pequeño",
          },
          traps: [
            { spec: { type: "text", accept: ["tengo que cuidar mi hermano pequeño", "Tengo que cuidar mi hermano pequeño"] }, feedback: "Don't forget the **personal a** before a specific person: *cuidar **a** mi hermano pequeño*!" },
            { spec: { type: "text", accept: ["tengo cuidar a mi hermano pequeño"] }, feedback: "Insert **que** after *tengo*: *tengo que cuidar…*" },
          ],
          hints: [
            "Start with *Tengo que* + infinitive *cuidar*.",
            "Remember the personal preposition required before *mi hermano pequeño*.",
          ],
          solution: [
            "'I have to look after' → **Tengo que cuidar**.",
            "Add personal **a** before *mi hermano pequeño* → **Tengo que cuidar a mi hermano pequeño**.",
          ],
        },
        {
          id: "social-plans-films-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Use stem-changing querer in tú form",
          question: "Fill the gap with the *tú* present tense of *poder*: «¿Por qué no ___ venir a la bolera?»",
          answer: {
            type: "text",
            accept: ["puedes"],
            display: "puedes",
          },
          traps: [
            { spec: { type: "text", accept: ["podes"] }, feedback: "*poder* is an *o→ue* boot stem-changer — in *tú*, *o* becomes *ue* (**puedes**)." },
            { spec: { type: "text", accept: ["puedo"] }, feedback: "*puedo* is *yo* ('I can'); the question addresses *tú* ('can you')." },
          ],
          hints: [
            "*poder* is an *o→ue* stem-changing *-er* verb.",
            "Is *tú* inside the boot? Add the *-es* ending.",
          ],
          solution: [
            "Change stem *pod-* → *pued-* inside the boot.",
            "Add *tú* *-er* ending *-es* → **puedes**.",
          ],
        },
        {
          id: "social-plans-films-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "film-genres-opinions",
          strategy: "Match cinema element nouns accurately",
          question: "Read the opinion: *«Me gustó mucho el argumento, pero el final me pareció demasiado predecible.»* What did the speaker dislike?",
          options: [
            "The soundtrack was too quiet.",
            "The ending felt too predictable.",
            "The main plot was too confusing.",
            "The special effects were too old.",
          ],
          answerIndex: 1,
          hints: [
            "Focus on the clause after *pero* ('but').",
            "Translate *el final* and *demasiado predecible*.",
          ],
          explanation: "**The ending felt too predictable.** translates *el final me pareció demasiado predecible*. They actually liked the plot (*el argumento*).",
        },
        {
          id: "social-plans-films-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "film-genres-opinions",
          strategy: "Match adjective gender & number to plural feminine noun",
          question: "Make the adjective *divertido* agree in: «Las comedias son muy ___.»",
          answer: {
            type: "text",
            accept: ["divertidas"],
            display: "divertidas",
          },
          traps: [
            { spec: { type: "text", accept: ["divertidos"] }, feedback: "*las comedias* is **feminine** plural, so use *-as* (**divertidas**), not *-os*." },
            { spec: { type: "text", accept: ["divertida"] }, feedback: "*las comedias* is plural — add *-s* (**divertidas**)." },
          ],
          hints: [
            "Check the gender and number of *las comedias*.",
            "Change *-o* on *divertido* to match feminine plural.",
          ],
          solution: [
            "*las comedias* is feminine plural.",
            "*divertido* → feminine plural **divertidas**.",
          ],
        },
        {
          id: "social-plans-films-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "film-genres-opinions",
          strategy: "Use preferir (e→ie) + a for preferences",
          question: "Complete with the *yo* present tense of *preferir*: «___ las películas de aventuras a las de terror.»",
          answer: {
            type: "text",
            accept: ["Prefiero", "prefiero"],
            display: "Prefiero",
          },
          traps: [
            { spec: { type: "text", accept: ["prefero", "Prefero"] }, feedback: "*preferir* is an *e→ie* stem-changer (on the second *e*!) → **Prefiero**." },
            { spec: { type: "text", accept: ["prefiere", "Prefiere"] }, feedback: "*prefiere* is *él/ella*; the prompt needs the *yo* form." },
          ],
          hints: [
            "*preferir* changes its stressed *e* to *ie* inside the boot.",
            "Add the *yo* present ending *-o*.",
          ],
          solution: [
            "Stem *prefer-* changes its second *e* to *ie* → *prefier-*.",
            "Add *-o* → **Prefiero**.",
          ],
        },
        {
          id: "social-plans-films-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "writing-film-reviews",
          strategy: "Match past tense forms in a cinema narrative",
          question: "Choose the sentence that accurately narrates a past cinema trip with friends:",
          options: [
            "El sábado pasado fuimos al cine y vemos una película de acción.",
            "El sábado pasado vamos al cine y vimos una película de acción.",
            "El sábado pasado fuimos al cine y verán una película de acción.",
            "El sábado pasado fuimos al cine y vimos una película de acción.",
          ],
          answerIndex: 3,
          hints: [
            "*El sábado pasado* puts BOTH verbs in the preterite tense.",
            "Check the *nosotros* preterite forms of *ir* and *ver*.",
          ],
          explanation: "**El sábado pasado fuimos al cine y vimos una película de acción.** puts both *ir* (**fuimos**) and *ver* (**vimos**) cleanly in the *nosotros* preterite.",
        },
        {
          id: "social-plans-films-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "writing-film-reviews",
          strategy: "Check simple future of ver for review conclusions",
          question: "Put *ver* into the *yo* simple future tense: «El mes que viene ___ la segunda parte en el cine.»",
          answer: {
            type: "text",
            accept: ["veré"],
            display: "veré",
          },
          traps: [
            { spec: { type: "text", accept: ["vi"] }, feedback: "*vi* is past (preterite); *El mes que viene* ('next month') requires the future (**veré**)." },
            { spec: { type: "text", accept: ["voy a ver"] }, feedback: "*voy a ver* is the immediate future; this question specifically asks for the **simple future** (1 word)." },
          ],
          hints: [
            "Form the simple future by keeping the full infinitive *ver* and adding the *yo* ending.",
            "Don't forget the written accent on the final *-é*!",
          ],
          solution: [
            "Keep the full infinitive *ver*.",
            "Attach the simple future *yo* ending *-é* → **veré**.",
          ],
        },
        {
          id: "social-plans-films-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Cover every bullet point with exact time and place",
          marks: 4,
          question:
            "Write a short WhatsApp invitation in Spanish (2–3 sentences) inviting your friend to the cinema this weekend. Include:\n" +
            "1. A polite invitation to go to the cinema (*ir al cine*)\n" +
            "2. The day of the week (Saturday or Sunday)\n" +
            "3. A specific clock time\n" +
            "4. A clear meeting point (e.g. in front of the cinema or opposite the station)",
          modelAnswer:
            "¡Hola! ¿Te gustaría ir al cine el sábado por la tarde? Podemos quedar a las seis y media delante de la estación. ¡Dime si puedes venir!",
          markScheme: [
            {
              point: "Polite invitation to go to the cinema with contracted 'al cine'",
              keywords: ["te gustaria ir al cine", "quieres ir al cine", "vamos al cine", "quedamos para ir al cine", "al cine"],
            },
            {
              point: "Day of the week expressed accurately (el sábado / el domingo)",
              keywords: ["el sabado", "el domingo", "este sabado", "este domingo", "el viernes"],
            },
            {
              point: "Specific clock time using a la / a las",
              keywords: ["a las", "a la una"],
            },
            {
              point: "Clear meeting point with a preposition of place",
              keywords: ["delante de", "delante del", "enfrente de", "enfrente del", "al lado de", "al lado del", "detras de", "en la entrada", "en la plaza"],
            },
          ],
          commonError: "Writing *en sábado* instead of **el sábado**, forgetting to weld *a + el* into **al**, or leaving out inverted **¿** on questions.",
          hints: [
            "Open with *¿Te gustaría ir al cine…?* or *¿Quieres ir al cine…?*",
            "Add *el sábado* + *a las [hour]* + a place phrase (*delante del… / enfrente de la…*).",
          ],
        },
        {
          id: "social-plans-films-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Use the Sandwich Refusal: Apology + Modal Excuse + Counter-Plan",
          marks: 4,
          question:
            "Your friend has invited you to go bowling tonight, but you cannot go. Write a polite Spanish reply (2–3 sentences) that includes:\n" +
            "1. A polite apology / expression of regret\n" +
            "2. Saying that you cannot go (*no puedo*)\n" +
            "3. At least ONE realistic excuse using *tengo que* + infinitive\n" +
            "4. A friendly counter-proposal for another day",
          modelAnswer:
            "¡Qué pena! Lo siento mucho, pero esta noche no puedo ir porque tengo que hacer mis deberes y cuidar a mi hermano pequeño. ¿Qué tal el domingo por la tarde?",
          markScheme: [
            {
              point: "Polite apology or regret phrase",
              keywords: ["lo siento", "que pena", "perdon", "me gustaria pero", "me encantaria pero"],
            },
            {
              point: "Clear refusal using no puedo",
              keywords: ["no puedo"],
            },
            {
              point: "Excuse using tener que + infinitive (homework, tidying, dog, family, studying)",
              keywords: ["tengo que hacer", "tengo que estudiar", "tengo que ordenar", "tengo que cuidar", "tengo que pasear", "tengo que ayudar", "tengo que lavar", "tengo que limpiar", "tengo que repasar"],
            },
            {
              point: "Polite counter-proposal suggesting another day or time",
              keywords: ["que tal", "otro dia", "podemos quedar", "quedamos el", "quedamos manana", "vamos el"],
            },
          ],
          commonError: "Conjugating the verb after *tengo que* (*✗ tengo que hago*) or forgetting to add a polite alternative day.",
          hints: [
            "Begin politely with *Lo siento* or *¡Qué pena!* and explain *no puedo porque…*",
            "Follow *tengo que* with an infinitive (*hacer, estudiar, ordenar, cuidar, pasear*), then finish with *¿Qué tal el domingo?*",
          ],
        },
        {
          id: "social-plans-films-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "film-genres-opinions",
          strategy: "Contrast two genres with justified reasons and plural agreement",
          marks: 4,
          question:
            "Write a short paragraph in Spanish (3–4 sentences) explaining your cinema preferences. Include:\n" +
            "1. A genre you love or really like (with accurate *me gusta(n) / me encanta(n)* + article)\n" +
            "2. A justified reason naming a cinema element (e.g. plot, special effects, soundtrack, actors)\n" +
            "3. A genre you dislike or hate with a contrasting connective (*sin embargo, pero, en cambio*)\n" +
            "4. A comparison using *prefiero … a …* or *más … que / mejores que*",
          modelAnswer:
            "Me encantan las películas de ciencia ficción porque los efectos especiales son impresionantes y el argumento siempre es emocionante. Sin embargo, odio las películas de terror porque me dan miedo y a veces son predecibles. En general, prefiero las comedias a los documentales porque son más divertidas.",
          markScheme: [
            {
              point: "Positive genre opinion with definite article and agreeing verb",
              keywords: ["me encantan las", "me gustan las", "me encanta el", "me gusta el", "me encantan los", "me gustan los"],
            },
            {
              point: "Justified reason referencing a specific cinema element",
              keywords: ["argumento", "efectos especiales", "banda sonora", "actores", "protagonista", "guion", "final"],
            },
            {
              point: "Contrasting connective + negative genre opinion",
              keywords: ["sin embargo", "en cambio", "aunque", "por otro lado", "pero odio", "pero no me gustan", "pero no soporto"],
            },
            {
              point: "Explicit comparison (prefiero… a… / más… que / mejores que)",
              keywords: ["prefiero", "mas emocionantes que", "mas divertidas que", "mas entretenidas que", "mas interesantes que", "mejores que", "mejor que"],
            },
          ],
          commonError: "Forgetting the plural *-n* on *me encantan las películas* or dropping the definite article *las / los*.",
          hints: [
            "Check verb agreement: plural *las películas* → *me encantan / me gustan / son*.",
            "Include a cinema noun (*argumento, efectos especiales, banda sonora*) and a comparison (*prefiero … a …* or *más … que*).",
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2 — Reading, Reviews & Multi-Tense Mastery
    // =========================================================================
    {
      id: "social-plans-films-p2",
      title: "Practice Paper 2 — Film Reviews, Pronouns & Multi-Tense Mastery",
      questions: [
        {
          id: "social-plans-films-p2-q01",
          kind: "mcq",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Distinguish quedar vs quedarse in context",
          question: "Complete both gaps accurately: «Esta tarde ___ con Marta en la plaza, pero por la noche ___ en casa.»",
          options: [
            "me quedo / quedo",
            "quedo / me quedo",
            "quedo / quedo",
            "me quedo / me quedo",
          ],
          answerIndex: 1,
          hints: [
            "In the first half you are meeting up with Marta; in the second half you are staying at home.",
            "Which meaning requires the reflexive pronoun *me*?",
          ],
          explanation: "**quedo / me quedo** contrasts non-reflexive **quedar** (*I meet up with Marta*) with reflexive **quedarse** (*I stay at home*).",
        },
        {
          id: "social-plans-films-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Convert 24-hour listing to spoken Spanish time",
          question: "The cinema screen shows **17:30**. Write \"at 5:30 in the afternoon\" in Spanish words.",
          answer: {
            type: "text",
            accept: ["a las cinco y media de la tarde", "A las cinco y media de la tarde"],
            display: "a las cinco y media de la tarde",
          },
          traps: [
            { spec: { type: "text", accept: ["a las cinco y cuarto de la tarde"] }, feedback: "*y cuarto* is :15; :30 is **y media**." },
            { spec: { type: "text", accept: ["a las cinco y media por la tarde"] }, feedback: "After a specific clock time, use **de la tarde**, not *por la tarde*." },
          ],
          hints: [
            "Use *a las* + 5 + *y media*.",
            "Use *de la tarde* after a specific clock hour.",
          ],
          solution: [
            "17:30 = 5:30 p.m. → **a las cinco y media**.",
            "Add **de la tarde** → **a las cinco y media de la tarde**.",
          ],
        },
        {
          id: "social-plans-films-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Check conditional polite acceptance",
          question: "Complete the enthusiastic acceptance with ONE word (conditional of *encantar*): «¡Sí, me ___ ir al cine contigo!»",
          answer: {
            type: "text",
            accept: ["encantaría"],
            display: "encantaría",
          },
          traps: [
            { spec: { type: "text", accept: ["encanta"] }, feedback: "*me encanta* is present ('I love'); 'I **would** love to' requires the conditional (**encantaría**)." },
            { spec: { type: "text", accept: ["encantó"] }, feedback: "*me encantó* is past ('I loved it'); here you are accepting a future invitation (**encantaría**)." },
          ],
          hints: [
            "Add the conditional ending *-ía* to the full infinitive *encantar*.",
            "Remember the written accent on the *í*!",
          ],
          solution: [
            "Keep the infinitive *encantar* and attach conditional *-ía* → **encantaría** (*I would love to*).",
          ],
        },
        {
          id: "social-plans-films-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Read a text exchange carefully for who can go and when",
          question:
            "Read the messages:\n\n*Inés: ¿Quedamos el sábado a las cuatro para ir al cine?*\n*Tomás: Lo siento, el sábado tengo partido de fútbol hasta las cinco. ¿Podemos quedar a las seis menos cuarto delante de la cafetería?*\n*Inés: ¡Genial! Nos vemos allí.*\n\nWhen and where will Inés and Tomás actually meet?",
          options: [
            "Saturday at 4:00 in front of the cinema",
            "Saturday at 5:45 in front of the café",
            "Saturday at 6:15 opposite the stadium",
            "Sunday at 5:45 next to the café",
          ],
          answerIndex: 1,
          hints: [
            "Notice Tomás changed the time from Inés's first suggestion.",
            "Convert *a las seis menos cuarto* and translate *delante de la cafetería*.",
          ],
          explanation: "**Saturday at 5:45 in front of the café** matches Tomás's counter-proposal *a las seis menos cuarto delante de la cafetería*, which Inés accepts (*¡Genial! Nos vemos allí.*).",
        },
        {
          id: "social-plans-films-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "film-genres-opinions",
          strategy: "Translate key cinema idioms accurately",
          question: "Complete the Spanish idiom for \"horror films scare me\" (2 words): «Las películas de terror me ___ ___.»",
          answer: {
            type: "text",
            accept: ["dan miedo"],
            display: "dan miedo",
          },
          traps: [
            { spec: { type: "text", accept: ["da miedo"] }, feedback: "*Las películas de terror* is plural, so *dar* must be plural (**dan miedo**)." },
            { spec: { type: "text", accept: ["hacen miedo"] }, feedback: "Spanish uses *dar miedo* ('to give fear'), not *hacer miedo*." },
          ],
          hints: [
            "Spanish says 'they give me fear' using *dar* + *miedo*.",
            "Agree *dar* with plural *las películas*.",
          ],
          solution: [
            "Use the idiom *dar miedo* ('to scare').",
            "Plural subject *las películas* → **dan miedo**.",
          ],
        },
        {
          id: "social-plans-films-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "film-genres-opinions",
          strategy: "Check ser vs estar with aburrido",
          question: "Translate into Spanish (4 words): \"The film is boring.\" (use *la película* and *aburrida*)",
          answer: {
            type: "text",
            accept: ["La película es aburrida", "La película es aburrida.", "la película es aburrida"],
            display: "La película es aburrida",
          },
          traps: [
            { spec: { type: "text", accept: ["La película está aburrida", "la película está aburrida"] }, feedback: "*estar aburrida* means 'to feel bored' — use **ser** (**es aburrida**) to mean 'is boring'!" },
            { spec: { type: "text", accept: ["La película es aburrido", "la película es aburrido"] }, feedback: "*la película* is feminine, so *aburrido* must become **aburrida**." },
          ],
          hints: [
            "Does 'to be boring' take *ser* or *estar*?",
            "Check feminine agreement with *la película*.",
          ],
          solution: [
            "Permanent quality 'is boring' → **ser** (*es*).",
            "Feminine agreement → **La película es aburrida**.",
          ],
        },
        {
          id: "social-plans-films-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "writing-film-reviews",
          strategy: "Spot direct object pronoun matching noun gender",
          question: "Which sentence accurately says \"I saw it yesterday and it disappointed me\" when talking about **la película**?",
          options: [
            "Lo vi ayer y me decepcionó.",
            "La vi ayer y me decepcioné.",
            "La vi ayer y me decepcionó.",
            "La veo ayer y me decepcionó.",
          ],
          answerIndex: 2,
          hints: [
            "*la película* is feminine (*la*), and *ayer* requires preterite.",
            "Who did the disappointing? The film (*ella* → *-ó*), not *yo* (*-é*)!",
          ],
          explanation: "**La vi ayer y me decepcionó.** uses feminine **la** before *vi* and 3rd-person singular preterite **decepcionó** (*it disappointed me*).",
        },
        {
          id: "social-plans-films-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-film-reviews",
          strategy: "Form lo mejor / lo peor accurately",
          question: "Translate into Spanish (5 words): \"The best thing was the ending.\" (use *final*)",
          answer: {
            type: "text",
            accept: ["Lo mejor fue el final", "Lo mejor fue el final.", "lo mejor fue el final"],
            display: "Lo mejor fue el final",
          },
          traps: [
            { spec: { type: "text", accept: ["El mejor fue el final", "el mejor fue el final"] }, feedback: "'The best **thing**' uses neuter **Lo mejor**, not *El mejor*." },
            { spec: { type: "text", accept: ["Lo mejor era el final"] }, feedback: "In a completed film verdict, use preterite **fue** (*Lo mejor fue…*)." },
          ],
          hints: [
            "Use neuter *Lo mejor* for 'the best thing'.",
            "Use the preterite of *ser* (*fue*, no accent!) + *el final*.",
          ],
          solution: [
            "'The best thing was' → **Lo mejor fue**.",
            "Add 'the ending' → **Lo mejor fue el final**.",
          ],
        },
        {
          id: "social-plans-films-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-film-reviews",
          strategy: "Use immediate future ir a + infinitive accurately",
          question: "Complete the immediate future sentence (3 words): «El viernes que viene ___ ___ ___ una comedia con mis amigos.» (I am going to watch)",
          answer: {
            type: "text",
            accept: ["voy a ver"],
            display: "voy a ver",
          },
          traps: [
            { spec: { type: "text", accept: ["voy ver"] }, feedback: "Never omit the preposition **a** in the immediate future: **voy a ver**!" },
            { spec: { type: "text", accept: ["veré"] }, feedback: "*veré* is the simple future (1 word); this prompt requires the 3-word immediate future (**voy a ver**)." },
          ],
          hints: [
            "Immediate future formula: present of *ir* (*yo*) + *a* + infinitive.",
            "The infinitive for 'to watch' is *ver*.",
          ],
          solution: [
            "*ir* (yo) = **voy** + **a** + infinitive **ver** → **voy a ver**.",
          ],
        },
        {
          id: "social-plans-films-p2-q10",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "writing-film-reviews",
          strategy: "Analyse nuance in a full Spanish film review",
          question:
            "Read Javier's review:\n\n*«Anoche vi «Noche en Valencia» con mi hermana. Trata de una periodista que investiga un robo en un museo. Por un lado, el guion es muy original y la protagonista actúa genial; sin embargo, los efectos especiales me parecieron bastante pobres. Le doy cuatro estrellas de cinco y sin duda veré la segunda parte.»*\n\nWhich summary matches Javier's review?",
          options: [
            "He praised the script and lead actress, criticised the special effects, and plans to see the sequel.",
            "He loved the special effects and music, disliked the lead actress, and gave it five stars.",
            "He thought the plot was predictable, watched it alone at the cinema, and will skip the sequel.",
            "He gave it three stars because the ending was too slow and the script was unoriginal.",
          ],
          answerIndex: 0,
          hints: [
            "Check what Javier puts after *Por un lado* (positives) and after *sin embargo* (negative).",
            "Look at the final sentence for his star rating and future plan (*veré la segunda parte*).",
          ],
          explanation: "Javier praises the original script (*el guion es muy original*) and lead actress (*la protagonista actúa genial*), criticises the special effects (*bastante pobres*), gives 4/5 stars, and says he will definitely watch the sequel (*veré la segunda parte*).",
        },
        {
          id: "social-plans-films-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "writing-film-reviews",
          strategy: "Match direct object pronoun to masculine documental",
          question: "Translate into Spanish (4 words): \"I recommend it to everyone.\" — referring to **un documental** (use *a todos*).",
          answer: {
            type: "text",
            accept: ["Lo recomiendo a todos", "Lo recomiendo a todos.", "lo recomiendo a todos"],
            display: "Lo recomiendo a todos",
          },
          traps: [
            { spec: { type: "text", accept: ["La recomiendo a todos", "la recomiendo a todos"] }, feedback: "*un documental* is **masculine**, so replace *la* with masculine **lo** (*Lo recomiendo a todos*)!" },
            { spec: { type: "text", accept: ["Lo recomendo a todos"] }, feedback: "*recomendar* is an *e→ie* stem-changer in *yo* → **recomiendo**." },
          ],
          hints: [
            "Check the gender of *un documental*: masculine *lo* or feminine *la*?",
            "Remember *recomendar* has an *e→ie* stem change in the *yo* form.",
          ],
          solution: [
            "Masculine direct object pronoun for *un documental* → **Lo**.",
            "*recomendar* (yo, *e→ie*) → **recomiendo** + **a todos** → **Lo recomiendo a todos**.",
          ],
        },
        {
          id: "social-plans-films-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "arranging-a-meeting",
          strategy: "Translate an English text message with accurate contractions & times",
          marks: 4,
          question:
            "Translate this English message into natural Spain-standard Spanish:\n\n" +
            "\"Hi! Would you like to go to the shopping centre on Sunday at 4:45 p.m.? Let's meet next to the café.\"",
          modelAnswer:
            "¡Hola! ¿Te gustaría ir al centro comercial el domingo a las cinco menos cuarto de la tarde? Quedamos al lado de la cafetería.",
          markScheme: [
            {
              point: "Polite invitation + contracted al centro comercial",
              keywords: ["te gustaria ir al centro comercial", "quieres ir al centro comercial", "al centro comercial"],
            },
            {
              point: "Accurate day expression (el domingo)",
              keywords: ["el domingo"],
            },
            {
              point: "Accurate time 4:45 p.m. (a las cinco menos cuarto de la tarde)",
              keywords: ["a las cinco menos cuarto", "cinco menos cuarto de la tarde", "las cuatro y cuarenta y cinco"],
            },
            {
              point: "Meeting verb + next to the café (quedamos al lado de la cafetería)",
              keywords: ["al lado de la cafeteria", "junto a la cafeteria"],
            },
          ],
          commonError: "Writing *a las cuatro menos cuarto* (that's 3:45!) instead of **a las cinco menos cuarto**, or forgetting to contract *a + el* into **al**.",
          hints: [
            "Remember: 4:45 steps up to 5 → *a las cinco menos cuarto de la tarde*.",
            "Check *al centro comercial* and *al lado de la cafetería*.",
          ],
        },
        {
          id: "social-plans-films-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "accepting-making-excuses",
          strategy: "Write a balanced two-speaker WhatsApp exchange",
          marks: 4,
          question:
            "Write a short 4-line Spanish chat between **Sofía** (inviting) and **Dani** (first refusing politely with an excuse, then agreeing to a different day). Include:\n" +
            "1. Sofía's invitation to do an activity with a day/time\n" +
            "2. Dani's polite refusal with an obligation (*tengo que + infinitive*)\n" +
            "3. A counter-proposal for another day\n" +
            "4. An enthusiastic acceptance (*¡Vale! / ¡Genial! / ¡De acuerdo!*)",
          modelAnswer:
            "Sofía: ¿Quieres ir al cine el viernes a las siete?\nDani: Lo siento, no puedo porque tengo que estudiar para un examen de historia. ¿Qué tal el sábado a las seis?\nSofía: ¡Vale, qué buena idea! Nos vemos delante del cine.\nDani: ¡De acuerdo, hasta el sábado!",
          markScheme: [
            {
              point: "Invitation with activity and day or time",
              keywords: ["quieres ir", "te gustaria", "quedamos el", "vamos a"],
            },
            {
              point: "Polite refusal + tengo que + infinitive excuse",
              keywords: ["tengo que estudiar", "tengo que hacer", "tengo que ordenar", "tengo que cuidar", "tengo que pasear", "tengo que ayudar", "tengo que trabajar", "tengo que limpiar"],
            },
            {
              point: "Counter-proposal suggesting another day or time",
              keywords: ["que tal", "podemos quedar", "y el sabado", "y el domingo", "otro dia", "manana"],
            },
            {
              point: "Enthusiastic acceptance phrase",
              keywords: ["vale", "de acuerdo", "genial", "me encantaria", "buena idea", "por supuesto", "claro que si"],
            },
          ],
          commonError: "Omitting inverted *¿ ¡* punctuation or failing to resolve the dialogue with an acceptance.",
          hints: [
            "Give Sofía a clear *¿Quieres…?* or *¿Quedamos…?* question.",
            "Give Dani *Lo siento, no puedo porque tengo que…* + *¿Qué tal…?*, then close with *¡Vale!* or *¡Genial!*",
          ],
        },
        {
          id: "social-plans-films-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "writing-film-reviews",
          strategy: "Use the V-P-B-F film review blueprint across 3 tenses",
          marks: 5,
          question:
            "Write a top-band Year 9 film review (*una crítica de cine*, 60–80 words) in Spanish about a real or invented film you watched recently. You must include:\n" +
            "1. When and with whom you saw it (Preterite: *fui, vi*)\n" +
            "2. Genre and brief plot summary in the Present (*trata de…*)\n" +
            "3. One strength and one weakness using a contrast connective (*por un lado… sin embargo / aunque*)\n" +
            "4. A star rating and recommendation using direct object pronoun *la* or *lo*\n" +
            "5. A future viewing plan (*voy a ver* or *veré*)",
          modelAnswer:
            "El fin de semana pasado fui al cine con mis amigos y vi «Misión Marte», una película de ciencia ficción. Trata de una astronauta que busca vida en otro planeta. Por un lado, me encantó porque los efectos especiales fueron impresionantes y la banda sonora fue conmovedora; sin embargo, el final fue un poco predecible. Le doy cuatro estrellas de cinco y la recomiendo a todos. El mes que viene veré la segunda parte con mi hermano.",
          markScheme: [
            {
              point: "Past viewing details in the preterite (fui / vi / vimos)",
              keywords: ["fui al cine", "vi ", "la vi", "lo vi", "vimos"],
            },
            {
              point: "Present-tense plot summary using trata de or tiene lugar en",
              keywords: ["trata de", "tiene lugar en"],
            },
            {
              point: "Balanced strength and weakness with a contrast connective",
              keywords: ["sin embargo", "aunque", "por otro lado", "lo peor fue"],
            },
            {
              point: "Star rating or explicit recommendation with direct object pronoun la/lo",
              keywords: ["la recomiendo", "lo recomiendo", "le doy", "estrellas"],
            },
            {
              point: "Clear future viewing plan (voy a ver / veré / volveré)",
              keywords: ["voy a ver", "vere", "volvere a ver", "vamos a ver", "veremos"],
            },
          ],
          commonError: "Writing the whole review in the present tense, adding accents to *fui / vi*, or forgetting to mention a weakness alongside the praise.",
          hints: [
            "Follow V-P-B-F: Viewed (Preterite) → Plot (Present *trata de*) → Balance (*sin embargo / aunque*) → Future (*voy a ver / veré*).",
            "Double-check *fui / fue / vi* (zero accents!) and use *la recomiendo* for *la película*.",
          ],
        },
        {
          id: "social-plans-films-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "writing-film-reviews",
          strategy: "Translate four accuracy-critical sentences avoiding common traps",
          marks: 4,
          question:
            "Translate all four film-review sentences into completely accurate Spain-standard Spanish (watch out for contractions, plural agreement, gender agreement, and future phrasing):\n\n" +
            "1. Yesterday I went to the cinema with my cousin.\n" +
            "2. I love adventure films.\n" +
            "3. The soundtrack was very fun (*divertido*).\n" +
            "4. Next month I am going to watch the sequel.",
          modelAnswer:
            "Ayer fui al cine con mi prima. Me encantan las películas de aventuras. La banda sonora fue muy divertida. El próximo mes voy a ver la secuela.",
          markScheme: [
            {
              point: "Sentence 1: Ayer fui al cine (no accent on fui, contracted al cine)",
              keywords: ["fui al cine"],
            },
            {
              point: "Sentence 2: plural verb encantan agreeing with las películas de aventuras",
              keywords: ["encantan las peliculas"],
            },
            {
              point: "Sentence 3: feminine adjective divertida agreeing with la banda sonora",
              keywords: ["muy divertida", "fue divertida", "era divertida"],
            },
            {
              point: "Sentence 4: immediate future voy a ver with mandatory 'a'",
              keywords: ["voy a ver"],
            },
          ],
          commonError: "Writing *a el cine* instead of **al cine**, singular *me encanta* before plural *las películas*, masculine *divertido* with feminine *banda sonora*, or omitting *a* in *voy a ver*.",
          hints: [
            "Check *fui* (zero accents!) + *al cine* in sentence 1, and plural *me encantan las películas* in sentence 2.",
            "Remember *la banda sonora* is feminine (*divertida*), and immediate future requires *voy **a** ver*.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 stretch problems, all 3-step hints!)
  // =========================================================================
  challenge: [
    {
      id: "social-plans-films-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "arranging-a-meeting",
      strategy: "Combine polite invitation, day, menos cuarto time, and del contraction",
      question:
        "Translate this entire invitation into accurate Spain-standard Spanish (no abbreviations): \"Shall we meet on Saturday at 7:45 in front of the cinema?\" (use *quedar*)",
      answer: {
        type: "text",
        accept: [
          "¿Quedamos el sábado a las ocho menos cuarto delante del cine?",
          "Quedamos el sábado a las ocho menos cuarto delante del cine",
          "¿Quedamos el sábado a las ocho menos cuarto de la tarde delante del cine?",
        ],
        display: "¿Quedamos el sábado a las ocho menos cuarto delante del cine?",
      },
      traps: [
        { spec: { type: "text", accept: ["¿Quedamos el sábado a las siete menos cuarto delante del cine?"] }, feedback: "*a las siete menos cuarto* is 6:45! For 7:45, step up to *ocho* (*a las ocho menos cuarto*)." },
        { spec: { type: "text", accept: ["¿Nos quedamos el sábado a las ocho menos cuarto delante del cine?"] }, feedback: "*Nos quedamos* means 'shall we stay?' — use non-reflexive **Quedamos** for 'shall we meet?'." },
      ],
      hints: [
        "Use non-reflexive *Quedamos* + lowercase *el sábado* (accent on *á*).",
        "7:45 is quarter to eight: step up to 8 and subtract *menos cuarto*.",
        "Weld *delante de + el cine* into *delante del cine*.",
      ],
      solution: [
        "'Shall we meet on Saturday' → **¿Quedamos el sábado**",
        "'at 7:45' → **a las ocho menos cuarto**",
        "'in front of the cinema?' → **delante del cine?**",
      ],
    },
    {
      id: "social-plans-films-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "accepting-making-excuses",
      strategy: "Audit four subtle modal + pronoun + contraction sentences",
      question: "Only ONE of these four advanced excuse sentences has **zero** grammatical errors. Which one is completely accurate?",
      options: [
        "Me gustaría acompañarte al estreno, pero tengo que cuidar a mi abuelo esta noche.",
        "Me gustaría acompañarte a el estreno, pero tengo que cuidar mi abuelo esta noche.",
        "Me encantaría acompaño al estreno, pero debo que cuidar a mi abuelo esta noche.",
        "Me gustaría te acompañar al estreno, pero tengo cuidar a mi abuelo esta noche.",
      ],
      answerIndex: 0,
      hints: [
        "Check four rules simultaneously: *a + el → al*, infinitive pronoun attachment (*acompañarte*), *tengo que* vs *debo*, and personal *a*.",
        "Object pronouns like *te* attach to the END of an infinitive (*acompañarte*), never sitting detached right before an infinitive.",
        "Also verify that *mi abuelo* (a person!) has the personal *a* right before it.",
      ],
      explanation:
        "**Me gustaría acompañarte al estreno, pero tengo que cuidar a mi abuelo esta noche.** gets every single detail right: infinitive + attached pronoun **acompañarte**, contraction **al estreno**, **tengo que + infinitive**, and personal **a** before *mi abuelo*.",
    },
    {
      id: "social-plans-films-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "film-genres-opinions",
      strategy: "Master irregular comparatives and plural gender agreement",
      question:
        "Translate into Spanish: \"Science-fiction films are better than horror films.\" (start with *Las películas de ciencia ficción*)",
      answer: {
        type: "text",
        accept: [
          "Las películas de ciencia ficción son mejores que las películas de terror",
          "Las películas de ciencia ficción son mejores que las películas de terror.",
          "Las películas de ciencia ficción son mejores que las de terror",
          "Las películas de ciencia ficción son mejores que las de terror.",
        ],
        display: "Las películas de ciencia ficción son mejores que las películas de terror.",
      },
      traps: [
        { spec: { type: "text", accept: ["Las películas de ciencia ficción son más buenas que las películas de terror"] }, feedback: "Never write *más buenas* — use the irregular plural comparative **mejores que**!" },
        { spec: { type: "text", accept: ["Las películas de ciencia ficción son mejor que las películas de terror"] }, feedback: "Agree *mejor* with the plural noun *las películas* → **mejores que**." },
      ],
      hints: [
        "Remember the irregular comparative of *bueno* is *mejor*, and its plural is *mejores*.",
        "Use *son* (plural of *ser*) + *mejores que*.",
        "Keep the definite article *las* before both genres (*las películas de terror* or *las de terror*).",
      ],
      solution: [
        "Subject: **Las películas de ciencia ficción** (f. pl.).",
        "Verb + plural irregular comparative: **son mejores que**.",
        "Second genre with definite article: **las películas de terror** (or *las de terror*).",
      ],
    },
    {
      id: "social-plans-films-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "writing-film-reviews",
      strategy: "Use volver a + infinitive in simple future with direct object pronoun",
      question:
        "Translate into Spanish using *volver a ver* in the simple future (4 words): \"I will watch it again.\" (referring to *la película*)",
      answer: {
        type: "text",
        accept: ["La volveré a ver", "La volveré a ver.", "la volveré a ver", "Volveré a verla", "Volveré a verla."],
        display: "La volveré a ver",
      },
      traps: [
        { spec: { type: "text", accept: ["Lo volveré a ver", "lo volveré a ver"] }, feedback: "*la película* is feminine, so use feminine **La** (*La volveré a ver*)." },
        { spec: { type: "text", accept: ["La volví a ver", "la volví a ver"] }, feedback: "*volví* is preterite ('I watched it again'); the prompt asks for simple future (**volveré**)." },
      ],
      hints: [
        "'To do something again' uses the idiom *volver a + infinitive*.",
        "Put *volver* in the *yo* simple future (regular! keep infinitive + *-é*).",
        "Place feminine pronoun *La* before *volveré* (or attach *-la* to *ver*).",
      ],
      solution: [
        "Idiom: *volver a ver* = to watch again.",
        "Simple future *yo* of *volver*: **volveré** (regular in future — no *o→ue* change!).",
        "Add feminine pronoun **La** for *la película* → **La volveré a ver** (or **Volveré a verla**).",
      ],
    },
    {
      id: "social-plans-films-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "writing-film-reviews",
      strategy: "Spot subtle tense & meaning shifts across a complex review",
      question:
        "Read this extract from a Spanish cinema blog:\n\n*«Antes no soportaba las películas históricas porque me parecían lentas; sin embargo, el mes pasado vi «La sociedad de la nieve» en el cine y me dejó sin palabras. Aunque dura más de dos horas, el ritmo nunca decae y la banda sonora es conmovedora. Si todavía no la has visto, te aconsejo verla en pantalla grande.»*\n\nWhich inference is **fully supported** by the text?",
      options: [
        "The blogger used to dislike historical films, but a recent cinema trip changed their view.",
        "The blogger found the film too long and thought the pace dropped after the first hour.",
        "The blogger has always loved historical films and recommends streaming this one on a phone.",
        "The blogger watched the film at home last week and felt disappointed by the soundtrack.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the opening contrast: *Antes no soportaba… sin embargo, el mes pasado vi… y me dejó sin palabras*.",
        "Translate *me dejó sin palabras* ('it left me speechless') and *en pantalla grande* ('on the big screen').",
        "Check *el ritmo nunca decae* ('the pace never drops') to eliminate misleading distractors.",
      ],
      explanation:
        "The blogger states they used to hate historical films (*Antes no soportaba las películas históricas*), yet seeing *La sociedad de la nieve* at the cinema last month left them speechless (*me dejó sin palabras*) — and they recommend watching it on the big screen (*en pantalla grande*).",
    },
    {
      id: "social-plans-films-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "accepting-making-excuses",
      strategy: "Combine nosotros modal verbs with reflexive/personal structures",
      question:
        "Translate into Spanish: \"We would like to go out, but we have to help at home.\" (use *Nos gustaría* and *tener que*)",
      answer: {
        type: "text",
        accept: [
          "Nos gustaría salir, pero tenemos que ayudar en casa",
          "Nos gustaría salir, pero tenemos que ayudar en casa.",
          "Nos gustaría salir pero tenemos que ayudar en casa",
        ],
        display: "Nos gustaría salir, pero tenemos que ayudar en casa.",
      },
      traps: [
        { spec: { type: "text", accept: ["Me gustaría salir, pero tenemos que ayudar en casa"] }, feedback: "'We would like' uses **Nos gustaría**, not *Me gustaría*." },
        { spec: { type: "text", accept: ["Nos gustaría salir, pero tengo que ayudar en casa"] }, feedback: "Keep the subject consistent: 'we have to' is **tenemos que**, not *tengo que*." },
      ],
      hints: [
        "'We would like to go out' → *Nos gustaría* + infinitive *salir*.",
        "'but we have to' → *pero* + *nosotros* of *tener* + *que*.",
        "Finish with infinitive *ayudar* + *en casa*.",
      ],
      solution: [
        "'We would like to go out' → **Nos gustaría salir**.",
        "'but we have to help at home' → **pero tenemos que ayudar en casa**.",
      ],
    },
    {
      id: "social-plans-films-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "writing-film-reviews",
      strategy: "Weave 4 tenses and contrast connectives into a critic-style review",
      marks: 5,
      question:
        "Write an extended critic-style review (80–100 words) in Spanish comparing a film you **normally** watch at home with a memorable film you **saw** at the cinema recently, plus what you **will watch** next. You must include:\n" +
        "1. Your usual viewing habit in the Present (*normalmente / suelo*)\n" +
        "2. A past cinema visit narrated in the Preterite (*fui, vi, me encantó / me decepcionó*)\n" +
        "3. A plot summary in the Present (*trata de… / tiene lugar en…*)\n" +
        "4. A nuanced verdict balancing *lo mejor fue* and *lo peor fue* (or *por un lado… por otro lado*)\n" +
        "5. Both a recommendation with *la/lo* AND a Simple Future verb (*veré / iré / volveré*)",
      modelAnswer:
        "Normalmente suelo ver comedias o series en casa con mi familia porque me hacen reír y son muy entretenidas. Sin embargo, el sábado pasado fui al cine con mis amigos y vi «Horizonte Rojo», una película de ciencia ficción que tiene lugar en el año 2090 y trata de una misión secreta. Por un lado, lo mejor fue la banda sonora y los efectos especiales fueron impresionantes; por otro lado, lo peor fue el final demasiado lento. Aun así, le doy cuatro estrellas y la recomiendo. El próximo mes veré otra obra del mismo director.",
      markScheme: [
        {
          point: "Present habitual viewing habit (normalmente / suelo / veo)",
          keywords: ["normalmente", "suelo ver", "veo comedias", "veo peliculas", "veo series", "todos los fines de semana"],
        },
        {
          point: "Preterite cinema visit narration (fui / vi / vimos)",
          keywords: ["fui al cine", "vi ", "la vi", "lo vi", "vimos"],
        },
        {
          point: "Present-tense plot summary (trata de / tiene lugar en)",
          keywords: ["trata de", "tiene lugar en"],
        },
        {
          point: "Nuanced balanced verdict (lo mejor / lo peor / por un lado / por otro lado / sin embargo)",
          keywords: ["lo mejor fue", "lo peor fue", "por un lado", "por otro lado", "sin embargo", "aunque"],
        },
        {
          point: "Direct-object recommendation (la/lo recomiendo) + Simple Future verb",
          keywords: ["vere", "ire", "volvere", "elegire", "comprare"],
        },
      ],
      commonError: "Forgetting to include a **simple future** verb (using only *voy a + inf.*) or dropping the accent on *veré / iré / volveré*.",
      hints: [
        "Anchor paragraph 1 in the Present (*Normalmente suelo ver…*) before pivoting with *Sin embargo, el sábado pasado fui al cine y vi…*",
        "Keep the plot summary in Present (*trata de… / tiene lugar en…*) and balance *lo mejor fue…* against *lo peor fue…*",
        "Finish with *la recomiendo* (or *lo recomiendo* for a documentary) and a 1-word Simple Future verb (*veré / volveré a ver*).",
      ],
    },
    {
      id: "social-plans-films-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "accepting-making-excuses",
      strategy: "Negotiate a realistic multi-turn social plan with time, excuse & compromise",
      marks: 5,
      question:
        "You are messaging a Spanish exchange student in Madrid to plan an evening at the cinema for *el día del espectador* (Wednesday). Write a cohesive message (65–85 words) in Spanish that:\n" +
        "1. Invites them to see a specific film genre in VOSE at the cinema\n" +
        "2. Explains why you cannot go earlier (a polite excuse with *tengo que + infinitive*)\n" +
        "3. Proposes a specific evening time (using *y cuarto*, *y media*, or *menos cuarto*) and a clear meeting point (*delante del / enfrente de la*)\n" +
        "4. Explains why you want to see that genre using at least TWO varied film adjectives\n" +
        "5. Ends with a friendly question checking if the plan works for them",
      modelAnswer:
        "¡Hola Pablo! ¿Te gustaría ir al cine el miércoles para el día del espectador? Quiero ver una película de ciencia ficción en VOSE porque dicen que el argumento es muy original y los efectos especiales son impresionantes. No puedo ir por la tarde porque tengo que hacer mis deberes y ayudar a mi padre en casa. ¿Quedamos a las ocho menos cuarto delante del centro comercial? Dime si puedes venir o si prefieres otro día.",
      markScheme: [
        {
          point: "Polite cinema invitation specifying a genre or VOSE",
          keywords: ["te gustaria ir al cine", "quieres ir al cine", "vamos al cine", "pelicula de", "comedia", "vose"],
        },
        {
          point: "Excuse for not going earlier using tengo que + infinitive",
          keywords: ["tengo que hacer", "tengo que estudiar", "tengo que ayudar", "tengo que cuidar", "tengo que ordenar", "tengo que pasear", "tengo que terminar"],
        },
        {
          point: "Specific clock time (y cuarto / y media / menos cuarto) and meeting point",
          keywords: ["y cuarto", "y media", "menos cuarto", "en punto"],
        },
        {
          point: "Justified opinion with varied film adjectives",
          keywords: ["original", "impresionante", "emocionante", "entretenida", "divertida", "conmovedora", "inolvidable"],
        },
        {
          point: "Clear meeting spot preposition + closing check question",
          keywords: ["delante del", "delante de", "enfrente del", "enfrente de", "al lado del", "al lado de", "en la entrada"],
        },
      ],
      commonError: "Forgetting *del* (*de + el*) before masculine places like *centro comercial* or *cine*, or mixing up *a las siete menos cuarto* (6:45) and *a las ocho menos cuarto* (7:45).",
      hints: [
        "Open with *¿Te gustaría ir al cine el miércoles…?* and name the genre you want to watch.",
        "Explain your earlier conflict with *No puedo ir… porque tengo que + infinitive*.",
        "Give an exact clock time (*a las ocho menos cuarto / a las siete y media*) + place (*delante del…*) + closing question.",
      ],
    },
  ],
};
