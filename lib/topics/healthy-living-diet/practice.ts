import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // ===========================================================================
  quiz: [
    {
      id: "healthy-living-diet-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "balanced-diet-habits",
      strategy: "Agree mucho/a with feminine agua",
      question: "Translate into Spanish: 'I drink lots of water.'",
      answer: {
        type: "text",
        accept: ["Bebo mucha agua", "Bebo mucha agua.", "Yo bebo mucha agua", "Yo bebo mucha agua."],
        display: "Bebo mucha agua.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Bebo mucho agua", "Bebo mucho agua."] },
          feedback: "*Agua* is feminine, so 'lots of water' MUST be **mucha agua** (even though singular takes *el agua*)!",
        },
      ],
      hints: [
        "Use *beber* in the *yo* Present tense (*bebo*).",
        "Remember *agua* is feminine, so agree *mucho/mucha* accordingly.",
      ],
      solution: [
        "*Beber* (*yo* Present) = **bebo**.",
        "Feminine noun *agua* → **mucha agua**: **Bebo mucha agua.**",
      ],
    },
    {
      id: "healthy-living-diet-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "balanced-diet-habits",
      strategy: "Know key unhealthy food vocabulary",
      question: "Which Spanish phrase accurately translates 'junk food'?",
      options: [
        "la comida casera",
        "la comida basura",
        "la dieta equilibrada",
        "la alimentación sana",
      ],
      answerIndex: 1,
      hints: [
        "Look for the word that literally means 'rubbish / trash'.",
        "*Comida casera* means home-cooked food.",
      ],
      explanation:
        "**La comida basura** literally translates as 'rubbish food' (= junk food). *La comida casera* means home-cooked food.",
    },
    {
      id: "healthy-living-diet-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "giving-health-advice",
      strategy: "Follow se debe directly with an infinitive",
      question: "Translate into Spanish using *Se debe*: 'One should eat fruit every day.'",
      answer: {
        type: "text",
        accept: [
          "Se debe comer fruta todos los días",
          "Se debe comer fruta todos los días.",
          "Se debe comer fruta a diario",
          "Se debe comer fruta a diario.",
        ],
        display: "Se debe comer fruta todos los días.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Se debe comes fruta todos los días", "Se debe come fruta todos los días"] },
          feedback: "NEVER conjugate the verb after *se debe* — keep the infinitive **comer**!",
        },
      ],
      hints: [
        "Start with *Se debe* + infinitive *comer*.",
        "'Every day' = *todos los días* (accent on *í*!).",
      ],
      solution: ["*Se debe* + infinitive **comer** + *fruta todos los días*: **Se debe comer fruta todos los días.**"],
    },
    {
      id: "healthy-living-diet-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "giving-health-advice",
      strategy: "Use personal advice deberías + infinitive",
      question: "Translate into Spanish using *No deberías*: 'You should not drink sugary fizzy drinks.'",
      answer: {
        type: "text",
        accept: [
          "No deberías beber refrescos azucarados",
          "No deberías beber refrescos azucarados.",
          "No deberías beber los refrescos azucarados",
          "No deberías beber los refrescos azucarados.",
        ],
        display: "No deberías beber refrescos azucarados.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["No deberías bebes refrescos azucarados", "No deberías bebes refrescos azucarados."] },
          feedback: "Follow *no deberías* with the infinitive **beber**, not *bebes*!",
        },
      ],
      hints: [
        "Check the written accent on *deberías*.",
        "Keep *beber* in the infinitive; 'sugary fizzy drinks' = *refrescos azucarados*.",
      ],
      solution: ["**No deberías beber refrescos azucarados.** (infinitive after *deberías*!)."],
    },
    {
      id: "healthy-living-diet-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "giving-health-advice",
      strategy: "Adapt reflexive pronouns to personal vs impersonal advice",
      question: "Complete accurately: *Para descansar bien, hay que ______ temprano y tú deberías ______ del móvil.*",
      options: [
        "acostarte / desconectarse",
        "acostarse / desconectarse",
        "acostarse / desconectarte",
        "acostar / desconectar",
      ],
      answerIndex: 2,
      hints: [
        "Impersonal *hay que* keeps *-se* on the infinitive.",
        "Personal *tú deberías* changes *-se* to *-te*.",
      ],
      explanation:
        "**Hay que acostarse** (impersonal *-se*) and **deberías desconectarte** (personal *tú* → *-te*) both match their subjects cleanly.",
    },
    {
      id: "healthy-living-diet-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "sport-fitness-stress",
      strategy: "Conjugate o→ue reflexive acostarse in Present yo",
      question: "Translate into Spanish: 'I go to bed early.'",
      answer: {
        type: "text",
        accept: ["Me acuesto temprano", "Me acuesto temprano.", "Yo me acuesto temprano", "Yo me acuesto temprano."],
        display: "Me acuesto temprano.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Acuesto temprano", "Acuesto temprano."] },
          feedback: "*Acostarse* is reflexive — include **me** before *acuesto*!",
        },
        {
          spec: { type: "text", accept: ["Me acosto temprano", "Me acosto temprano."] },
          feedback: "*Acostarse* has an *o → ue* stem change in the Present tense: **me acuesto**.",
        },
      ],
      hints: [
        "Remember both reflexive *me* and the *o → ue* stem change.",
        "'Early' = *temprano*.",
      ],
      solution: ["*Acostarse* (*yo* Present) = **me acuesto** → **Me acuesto temprano.**"],
    },
    {
      id: "healthy-living-diet-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "sport-fitness-stress",
      strategy: "Remember mandatory preposition a after ayudar",
      question: "Translate into Spanish: 'Sport helps me to relax.' (Start with *El deporte*)",
      answer: {
        type: "text",
        accept: ["El deporte me ayuda a relajarme", "El deporte me ayuda a relajarme."],
        display: "El deporte me ayuda a relajarme.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["El deporte me ayuda relajarme", "El deporte me ayuda relajarme."] },
          feedback: "Always place the preposition **a** after *ayudar* before an infinitive: *me ayuda **a** relajarme*!",
        },
      ],
      hints: [
        "*El deporte* is 3rd-person singular → *ayuda*.",
        "Insert *a* between *ayuda* and *relajarme*.",
      ],
      solution: ["*El deporte* + *me ayuda* + **a** + *relajarme*: **El deporte me ayuda a relajarme.**"],
    },
    {
      id: "healthy-living-diet-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "future-health-resolutions",
      strategy: "Use irregular Simple Future stem of hacer",
      question: "Give the *yo* Simple Future form of **hacer** (I will do).",
      answer: {
        type: "text",
        accept: ["haré", "yo haré"],
        display: "haré",
      },
      traps: [
        {
          spec: { type: "text", accept: ["haceré", "yo haceré"] },
          feedback: "*Hacer* has an irregular Simple Future stem **har-** → **haré**!",
        },
      ],
      hints: [
        "Irregular Simple Future stem: *har-*.",
        "Add the *yo* Simple Future ending with its written accent (*-é*).",
      ],
      solution: ["Irregular stem **har-** + **-é** = **haré**."],
    },
    {
      id: "healthy-living-diet-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "future-health-resolutions",
      strategy: "Use dejar de + infinitive in Simple Future",
      question: "Which sentence accurately says 'Next week I will give up skipping breakfast'?",
      options: [
        "La semana que viene dejaré de saltándome el desayuno.",
        "La semana que viene dejaré saltarme el desayuno.",
        "La semana que viene dejé de saltarme el desayuno.",
        "La semana que viene dejaré de saltarme el desayuno.",
      ],
      answerIndex: 3,
      hints: [
        "Check that *dejar de* keeps *de* AND is followed by an infinitive (*saltarme*), never *-ndo*.",
        "Match *la semana que viene* to Simple Future (*dejaré*).",
      ],
      explanation:
        "**Dejaré de saltarme el desayuno** uses Simple Future *dejaré*, keeps **de**, and follows it with the infinitive *saltarme*.",
    },
    {
      id: "healthy-living-diet-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "giving-health-advice",
      strategy: "Vary your advice openers and include a purpose clause",
      question: "Write 3 short sentences in Spanish giving healthy lifestyle advice to a stressed friend. Include:\n1. One positive diet tip using an impersonal advice structure\n2. One negative tip about an unhealthy habit using personal advice\n3. One tip about sleep or exercise with a purpose clause explaining why",
      marks: 4,
      modelAnswer:
        "Para llevar una vida sana, hay que comer cinco raciones de fruta y verdura todos los días. Además, no deberías beber refrescos azucarados ni comer comida basura. Finalmente, es imprescindible dormir ocho horas y hacer ejercicio para reducir el estrés y estar en forma.",
      markScheme: [
        { point: "Impersonal advice structure + infinitive (*se debe / hay que / es importante / es imprescindible*)", keywords: ["se debe", "hay que", "es importante", "es imprescindible", "es necesario", "es aconsejable"] },
        { point: "Healthy diet habit (*fruta / verdura / agua / dieta equilibrada / vida sana*)", keywords: ["fruta", "verdura", "agua", "equilibrada", "vida sana"] },
        { point: "Negative advice against an unhealthy habit (*no deberías / no se debe / evitar*)", keywords: ["no deberias", "no se debe", "no hay que", "evitar"] },
        { point: "Sleep/exercise tip + purpose clause (*para* + infinitive)", keywords: ["para reducir", "para estar", "para mantener", "para dormir", "para cuidar", "para tener", "para mejorar"] },
      ],
      hints: [
        "Cycle through varied openers (*Hay que...*, *No deberías...*, *Es imprescindible...*).",
        "Keep every verb after an advice opener in the infinitive!",
        "Add *para* + infinitive (*para reducir el estrés* / *para estar en forma*).",
      ],
      commonError: "Conjugating the second verb after *hay que / se debe / deberías*, or repeating *tienes que* three times.",
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
      id: "healthy-living-diet-p1",
      title: "Practice Paper 1 — Balanced Diet, Advice & Daily Wellbeing",
      questions: [
        {
          id: "healthy-living-diet-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "balanced-diet-habits",
          strategy: "Spell plural raciones without a written accent",
          question: "Translate into Spanish: 'five portions of fruit and vegetables'.",
          answer: {
            type: "text",
            accept: ["cinco raciones de fruta y verdura", "cinco raciones de frutas y verduras"],
            display: "cinco raciones de fruta y verdura",
          },
          traps: [
            {
              spec: { type: "text", accept: ["cinco raciónes de fruta y verdura"] },
              feedback: "Plural *-iones* nouns drop the accent: **cinco raciones** (no accent on *o*)!",
            },
          ],
          hints: [
            "Drop the written accent when *ración* becomes plural (*raciones*).",
            "Do not put *la* after *de*.",
          ],
          solution: ["**cinco raciones de fruta y verdura** (note no accent on plural *raciones*)."],
        },
        {
          id: "healthy-living-diet-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "balanced-diet-habits",
          strategy: "Agree demasiado/a with feminine grasa",
          question: "Complete with the correct form of *demasiado*: *La comida rápida tiene ______ grasa.*",
          answer: {
            type: "text",
            accept: ["demasiada"],
            display: "demasiada",
          },
          traps: [
            {
              spec: { type: "text", accept: ["demasiado"] },
              feedback: "*La grasa* is a feminine noun, so the quantifier agrees as **demasiada**!",
            },
          ],
          hints: [
            "Is *grasa* an adjective or a noun? It is a feminine noun!",
            "Make *demasiado* agree in gender with *la grasa*.",
          ],
          solution: ["Before feminine noun *grasa*: **demasiada**."],
        },
        {
          id: "healthy-living-diet-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "balanced-diet-habits",
          strategy: "Translate core balanced-diet verbs accurately",
          question: "Translate into Spanish: 'to lead a healthy life'.",
          answer: {
            type: "text",
            accept: ["llevar una vida sana", "llevar una vida saludable"],
            display: "llevar una vida sana",
          },
          hints: [
            "Spanish uses the verb *llevar* ('to carry/lead') with *una vida sana*.",
            "Match feminine *sana* to *la vida*.",
          ],
          solution: ["**llevar una vida sana**."],
        },
        {
          id: "healthy-living-diet-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "balanced-diet-habits",
          strategy: "Identify healthy nutrients accurately",
          question: "Which Spanish sentence correctly explains why oily fish (*el pescado azul*) and wholemeal bread (*el pan integral*) are nutritious?",
          options: [
            "Tienen proteínas y fibra para llevar una dieta equilibrada.",
            "Tienen demasiada grasa y azúcar para provocar cansancio.",
            "Son bollería industrial muy perjudicial para la salud.",
            "Son refrescos azucarados que causan falta de sueño.",
          ],
          answerIndex: 0,
          hints: [
            "Look for positive nutrition nouns (*proteínas, fibra, dieta equilibrada*).",
            "Eliminate options describing junk food, sugar or tiredness.",
          ],
          explanation:
            "Oily fish provides **proteínas** (proteins) and wholemeal bread provides **fibra** (fibre) for a balanced diet (**una dieta equilibrada**).",
        },
        {
          id: "healthy-living-diet-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "giving-health-advice",
          strategy: "Use hay que + infinitive for impersonal necessity",
          question: "Translate into Spanish using *Hay que*: 'One must sleep eight hours.'",
          answer: {
            type: "text",
            accept: ["Hay que dormir ocho horas", "Hay que dormir ocho horas."],
            display: "Hay que dormir ocho horas.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Hay que duerme ocho horas", "Hay que duermes ocho horas"] },
              feedback: "After *hay que*, ALWAYS keep the verb in the infinitive: **Hay que dormir**!",
            },
          ],
          hints: [
            "Follow *Hay que* directly with the infinitive *dormir*.",
            "'Eight hours' = *ocho horas*.",
          ],
          solution: ["**Hay que dormir ocho horas.**"],
        },
        {
          id: "healthy-living-diet-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-health-advice",
          strategy: "Adapt reflexive pronoun to -te after deberías",
          question: "Translate into Spanish using *Deberías*: 'You should go to bed early.'",
          answer: {
            type: "text",
            accept: [
              "Deberías acostarte temprano",
              "Deberías acostarte temprano.",
              "Te deberías acostar temprano",
              "Te deberías acostar temprano.",
            ],
            display: "Deberías acostarte temprano.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Deberías acostarse temprano", "Deberías acostarse temprano."] },
              feedback: "Because *deberías* speaks directly to *tú*, switch *-se* to **-te**: **Deberías acostarte temprano.**",
            },
          ],
          hints: [
            "Remember the written accent on *deberías*.",
            "Change the reflexive ending on *acostarse* to match *tú* (*-te*).",
          ],
          solution: ["*Deberías* + reflexive infinitive for *tú* (**acostarte**) + *temprano*: **Deberías acostarte temprano.**"],
        },
        {
          id: "healthy-living-diet-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-health-advice",
          strategy: "Translate negative impersonal rule no se debe",
          question: "Translate into Spanish using *No se debe*: 'One must not skip breakfast.'",
          answer: {
            type: "text",
            accept: ["No se debe saltarse el desayuno", "No se debe saltarse el desayuno.", "No se debe saltar el desayuno", "No se debe saltar el desayuno."],
            display: "No se debe saltarse el desayuno.",
          },
          hints: [
            "Start with *No se debe*.",
            "'To skip breakfast' = *saltarse el desayuno* (infinitive!).",
          ],
          solution: ["**No se debe saltarse el desayuno.**"],
        },
        {
          id: "healthy-living-diet-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Use a la semana in frequency expressions",
          question: "Translate into Spanish: 'three times a week'.",
          answer: {
            type: "text",
            accept: ["tres veces a la semana"],
            display: "tres veces a la semana",
          },
          traps: [
            {
              spec: { type: "text", accept: ["tres veces en la semana", "tres veces una semana"] },
              feedback: "Spanish frequency phrases use **a la**: **tres veces a la semana**!",
            },
          ],
          hints: [
            "Plural of *una vez* is *veces* (*z → c*).",
            "Connect to *semana* with *a la*.",
          ],
          solution: ["**tres veces a la semana**."],
        },
        {
          id: "healthy-living-diet-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Distinguish pasar (time) from gastar (money)",
          question: "Which verb accurately completes: *No es bueno ______ cinco horas al día delante de la pantalla.*",
          options: [
            "gastar",
            "pasar",
            "pagar",
            "tener",
          ],
          answerIndex: 1,
          hints: [
            "Spanish uses different verbs for spending money (*gastar*) vs spending time (*pasar*).",
            "Look at *cinco horas* — that is time!",
          ],
          explanation:
            "**Pasar** means 'to spend time' (*pasar cinco horas delante de la pantalla*), whereas *gastar* means to spend money or waste resources.",
        },
        {
          id: "healthy-living-diet-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Use jugar al for ball sports",
          question: "Translate into Spanish: 'I play tennis.' (Start with *Juego*)",
          answer: {
            type: "text",
            accept: ["Juego al tenis", "Juego al tenis.", "Yo juego al tenis", "Yo juego al tenis."],
            display: "Juego al tenis.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Juego tenis", "Juego tenis.", "Juego el tenis", "Juego el tenis."] },
              feedback: "In Spain, *jugar* takes **a + el = al** before masculine sports: **Juego al tenis.**",
            },
          ],
          hints: [
            "*Jugar* links to sports with *a + article*.",
            "Remember the contraction *a + el* = *al*.",
          ],
          solution: ["*Juego* + *a + el* (*al*) + *tenis*: **Juego al tenis.**"],
        },
        {
          id: "healthy-living-diet-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "future-health-resolutions",
          strategy: "Check irregular Simple Future stem of tener",
          question: "Which sentence accurately translates 'If I sleep eight hours, I will have more energy'?",
          options: [
            "Si duermo ocho horas, teneré más energía.",
            "Si duermo ocho horas, tuve más energía.",
            "Si duermo ocho horas, tendré más energía.",
            "Si duermo ocho horas, tendría más energía.",
          ],
          answerIndex: 2,
          hints: [
            "Recall the irregular Simple Future stem of *tener* (*tendr-*).",
            "Distinguish Simple Future (*tendré* = will have) from Conditional (*tendría* = would have).",
          ],
          explanation:
            "**Tendré** (*tendr- + -é*) is the accurate Simple Future of *tener*. *Teneré* does not exist, *tuve* is Preterite, and *tendría* is Conditional.",
        },
        {
          id: "healthy-living-diet-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "future-health-resolutions",
          strategy: "Form irregular Simple Future of poder for nosotros without accent",
          question: "Give the *nosotros* Simple Future form of **poder** (we will be able to).",
          answer: {
            type: "text",
            accept: ["podremos", "nosotros podremos", "nosotras podremos"],
            display: "podremos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["poderemos", "nosotros poderemos"] },
              feedback: "*Poder* drops its *-e-* to form the irregular Simple Future stem **podr-**: **podremos**!",
            },
            {
              spec: { type: "text", accept: ["podrémos", "nosotros podrémos"] },
              feedback: "*Nosotros* (*-emos*) is the ONLY Simple Future ending with NO written accent: **podremos**!",
            },
          ],
          hints: [
            "Irregular stem of *poder*: *podr-*.",
            "Add *-emos* with NO written accent.",
          ],
          solution: ["Irregular stem *podr-* + unaccented *-emos* = **podremos**."],
        },
        {
          id: "healthy-living-diet-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "balanced-diet-habits",
          strategy: "Describe both healthy and unhealthy parts of your current diet",
          question: "Write 3–4 sentences in Spanish describing your current diet. Include:\n1. Two healthy foods or drinks you consume regularly\n2. One unhealthy food or drink you try to avoid\n3. A contrast using 'instead of' or 'however'\n4. One specific nutrition reason (*vitamins, fibre, protein, fat* or *sugar*)",
          marks: 4,
          modelAnswer:
            "Intento llevar una dieta equilibrada porque como cinco raciones de fruta y verdura y bebo mucha agua todos los días. Además, como pescado azul porque tiene proteínas y vitaminas. Sin embargo, evito la comida basura y prefiero comer fruta en lugar de dulces porque tienen demasiado azúcar.",
          markScheme: [
            { point: "Healthy eating/drinking habit (*fruta / verdura / agua / pescado / legumbres / comida casera / dieta equilibrada*)", keywords: ["fruta", "verdura", "agua", "pescado", "legumbres", "comida casera", "equilibrada"] },
            { point: "Unhealthy item avoided (*evito / comida basura / comida rápida / refrescos / dulces / golosinas / grasa*)", keywords: ["evito", "comida basura", "comida rapida", "refrescos", "dulces", "golosinas", "patatas fritas"] },
            { point: "Contrastive connective (*sin embargo / en lugar de / pero / aunque*)", keywords: ["sin embargo", "en lugar de", "pero", "aunque"] },
            { point: "Nutrition detail (*vitaminas / proteínas / fibra / calcio / grasa / azúcar / sal / nutritivo*)", keywords: ["vitaminas", "proteinas", "fibra", "calcio", "grasa", "azucar", "nutritivo", "nutritiva"] },
          ],
          hints: [
            "Watch feminine *mucha agua* and *demasiada grasa*, vs masculine *demasiado azúcar*.",
            "Include *en lugar de* or *sin embargo* to contrast healthy vs unhealthy choices.",
            "Mention a specific nutrient like *vitaminas*, *proteínas* or *fibra*.",
          ],
          commonError: "Writing *mucho agua* or *demasiado grasa*, or giving a list of foods with zero justification.",
        },
        {
          id: "healthy-living-diet-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Link exercise, sleep, screen time and mental wellbeing with frequency phrases",
          question: "Write 40–60 words in Spanish about your sport, sleep and screen-time routine. Include:\n1. One sport or exercise you do and how often\n2. One mental or physical benefit it gives you\n3. One sleep or screen-time habit (using a reflexive routine verb)\n4. One piece of advice for staying balanced",
          marks: 4,
          modelAnswer:
            "Hago natación dos veces a la semana y salgo a correr los domingos porque me ayuda a relajarme y reduce el estrés. Normalmente me levanto temprano, pero a veces me acuesto tarde porque paso demasiado tiempo delante de la pantalla. Por lo tanto, creo que hay que desconectarse del móvil antes de dormir.",
          markScheme: [
            { point: "Sport/exercise + frequency (*veces a la semana / todos los días / a menudo / regularmente / los domingos*)", keywords: ["veces a la semana", "todos los dias", "a diario", "a menudo", "regularmente", "los lunes", "los sabados", "los domingos"] },
            { point: "Mental or physical benefit (*relajarme / estrés / energía / sueño / mente / corazón*)", keywords: ["relajarme", "estres", "energia", "sueno", "mente", "corazon"] },
            { point: "Reflexive routine verb (*me acuesto / me levanto / me relajo / me siento / me desconecto*)", keywords: ["me acuesto", "me levanto", "me relajo", "me siento", "me desconecto"] },
            { point: "Advice structure (*hay que / se debe / deberías / es importante / es imprescindible*)", keywords: ["hay que", "se debe", "deberias", "es importante", "es imprescindible", "es necesario"] },
          ],
          hints: [
            "Check *jugar al* (ball sports) vs *hacer* (individual sports) and *veces a la semana*.",
            "Include mandatory *a* in *me ayuda a relajarme*.",
            "Check the *o → ue* stem change in *me acuesto*.",
          ],
          commonError: "Forgetting *me* on *me acuesto / me levanto*, or writing *me ayuda relajarme* without *a*.",
        },
        {
          id: "healthy-living-diet-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "future-health-resolutions",
          strategy: "Contrast past unhealthy habits with future health pledges across two future tenses",
          question: "Write a 55–75 word Spanish resolution paragraph comparing your past lifestyle with your future health goals. Include:\n1. Two unhealthy things you did last month (Preterite)\n2. One immediate change you are going to make starting tomorrow (Immediate Future)\n3. Two longer-term resolutions (Simple Future, including at least one irregular stem)\n4. One unhealthy habit you will give up (*to stop / give up + infinitive*)",
          marks: 4,
          modelAnswer:
            "El mes pasado llevé una vida bastante malsana porque comí demasiada comida rápida y no hice suficiente ejercicio. Sin embargo, a partir de mañana voy a beber dos litros de agua y voy a acostarme antes de las diez. Además, el trimestre que viene haré deporte cuatro veces a la semana, tendré más energía y dejaré de beber refrescos azucarados.",
          markScheme: [
            { point: "Past habits in Preterite (*comí / bebí / hice / me acosté / llevé / dormí*)", keywords: ["comi", "bebi", "hice", "me acoste", "lleve", "dormi", "pase"] },
            { point: "Immediate Future plan (*voy a* + infinitive)", keywords: ["voy a", "vamos a"] },
            { point: "Simple Future pledge (regular or irregular: *haré / tendré / podré / saldré / comeré / beberé / dormiré / llevaré*)", keywords: ["hare", "tendre", "podre", "saldre", "comere", "bebere", "dormire", "llevare", "me pondre"] },
            { point: "Giving up a bad habit (*dejaré de / voy a dejar de*)", keywords: ["dejare de", "dejar de"] },
          ],
          hints: [
            "Use Preterite (*comí, no hice, me acosté*) for last month.",
            "Contrast with *Sin embargo, a partir de mañana voy a...* for Immediate Future.",
            "Showcase irregular Simple Future stems (*haré, tendré, podré, saldré*) and *dejaré de + infinitive*.",
          ],
          commonError: "Using *haceré / teneré* instead of irregular **haré / tendré**, or forgetting *de* after *dejaré*.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -------------------------------------------------------------------------
    {
      id: "healthy-living-diet-p2",
      title: "Practice Paper 2 — Advice Mastery, Wellbeing & Simple Future",
      questions: [
        {
          id: "healthy-living-diet-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "giving-health-advice",
          strategy: "Use es imprescindible + infinitive without extra words",
          question: "Translate into Spanish using *Es imprescindible*: 'It is essential to do exercise.'",
          answer: {
            type: "text",
            accept: ["Es imprescindible hacer ejercicio", "Es imprescindible hacer ejercicio."],
            display: "Es imprescindible hacer ejercicio.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Es imprescindible de hacer ejercicio", "Es imprescindible que hacer ejercicio"] },
              feedback: "Connect *es imprescindible* directly to the infinitive with no *de* or *que*!",
            },
          ],
          hints: [
            "Follow *Es imprescindible* straight with infinitive *hacer*.",
            "Do not insert *de* or *que*.",
          ],
          solution: ["**Es imprescindible hacer ejercicio.**"],
        },
        {
          id: "healthy-living-diet-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-health-advice",
          strategy: "Use para + infinitive for purpose clauses",
          question: "Translate into Spanish: 'in order to keep fit' (using *para estar*).",
          answer: {
            type: "text",
            accept: ["para estar en forma"],
            display: "para estar en forma",
          },
          traps: [
            {
              spec: { type: "text", accept: ["por estar en forma"] },
              feedback: "Purpose ('in order to') always takes **para**, never *por*!",
            },
          ],
          hints: [
            "Purpose uses *para* + infinitive.",
            "'Fit / in shape' = *en forma*.",
          ],
          solution: ["**para estar en forma**."],
        },
        {
          id: "healthy-living-diet-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "balanced-diet-habits",
          strategy: "Use en lugar de to swap an unhealthy snack for a healthy one",
          question: "Translate into Spanish: 'water instead of fizzy drinks' (use *refrescos*).",
          answer: {
            type: "text",
            accept: ["agua en lugar de refrescos"],
            display: "agua en lugar de refrescos",
          },
          hints: [
            "'Instead of' = *en lugar de*.",
            "Put *agua* first and *refrescos* after *de*.",
          ],
          solution: ["**agua en lugar de refrescos**."],
        },
        {
          id: "healthy-living-diet-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Conjugate irregular yo-go verb salir in Present",
          question: "Translate into Spanish: 'I go out for a run.' (Start with *Salgo*)",
          answer: {
            type: "text",
            accept: ["Salgo a correr", "Salgo a correr.", "Yo salgo a correr", "Yo salgo a correr."],
            display: "Salgo a correr.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Salgo correr", "Salgo correr."] },
              feedback: "Include the preposition **a** between *salir* and the activity: **Salgo a correr.**",
            },
          ],
          hints: [
            "*Salir* (*yo* Present) = *salgo*.",
            "Link *salgo* to *correr* with *a*.",
          ],
          solution: ["**Salgo a correr.**"],
        },
        {
          id: "healthy-living-diet-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Distinguish e→ie sentirse from o→ue acostarse",
          question: "Complete both gaps accurately: *Cuando ______ temprano, al día siguiente ______ genial.*",
          options: [
            "me acosto / me sento",
            "me acuesto / me siento",
            "me acuesto / me sento",
            "acuesto / siento",
          ],
          answerIndex: 1,
          hints: [
            "Both verbs are reflexive (*me*) AND boot stem-changers in the Present tense.",
            "*Acostarse* shifts *o → ue*; *sentirse* shifts *e → ie*.",
          ],
          explanation:
            "**Me acuesto** (*o → ue*) and **me siento** (*e → ie*) both keep reflexive *me* and apply their exact boot stem changes.",
        },
        {
          id: "healthy-living-diet-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Remember written accent on el estrés",
          question: "Translate into Spanish: 'It reduces stress.' (3 words)",
          answer: {
            type: "text",
            accept: ["Reduce el estrés", "Reduce el estrés."],
            display: "Reduce el estrés.",
          },
          hints: [
            "*Reducir* (3rd-person singular Present) = *reduce*.",
            "Remember the written accent on *el estrés*.",
          ],
          solution: ["**Reduce el estrés.**"],
        },
        {
          id: "healthy-living-diet-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "future-health-resolutions",
          strategy: "Apply irregular Simple Future stem saldr-",
          question: "Give the *yo* Simple Future form of **salir** (I will go out).",
          answer: {
            type: "text",
            accept: ["saldré", "yo saldré"],
            display: "saldré",
          },
          traps: [
            {
              spec: { type: "text", accept: ["saliré", "yo saliré"] },
              feedback: "*Salir* uses the irregular Simple Future stem **saldr-**: **saldré**!",
            },
          ],
          hints: [
            "Replace *-i-* with *-d-* to get the irregular stem *saldr-*.",
            "Add accented *-é* for *yo*.",
          ],
          solution: ["Irregular stem *saldr-* + *-é* = **saldré**."],
        },
        {
          id: "healthy-living-diet-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "future-health-resolutions",
          strategy: "Form regular Simple Future of dormir without stem-changing",
          question: "Give the *yo* Simple Future form of **dormir** (I will sleep).",
          answer: {
            type: "text",
            accept: ["dormiré", "yo dormiré"],
            display: "dormiré",
          },
          traps: [
            {
              spec: { type: "text", accept: ["duermiré", "yo duermiré"] },
              feedback: "Boot stem changes NEVER happen in the Simple Future — keep the full infinitive: **dormiré**!",
            },
          ],
          hints: [
            "*Dormir* is 100% regular in the Simple Future!",
            "Attach accented *-é* directly to *dormir*.",
          ],
          solution: ["Full infinitive *dormir* + *-é* = **dormiré**."],
        },
        {
          id: "healthy-living-diet-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "future-health-resolutions",
          strategy: "Include mandatory a in Immediate Future",
          question: "Translate into Spanish using Immediate Future: 'We are going to improve our habits.' (Use *nuestros hábitos*)",
          answer: {
            type: "text",
            accept: [
              "Vamos a mejorar nuestros hábitos",
              "Vamos a mejorar nuestros hábitos.",
              "Nosotros vamos a mejorar nuestros hábitos",
              "Nosotros vamos a mejorar nuestros hábitos.",
            ],
            display: "Vamos a mejorar nuestros hábitos.",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Vamos mejorar nuestros hábitos", "Vamos mejorar nuestros hábitos."] },
              feedback: "Always include **a** after *vamos*: **Vamos a mejorar nuestros hábitos.**",
            },
          ],
          hints: [
            "Immediate Future *nosotros*: *vamos a* + infinitive.",
            "Check the written accent on *hábitos*.",
          ],
          solution: ["**Vamos a mejorar nuestros hábitos.**"],
        },
        {
          id: "healthy-living-diet-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "future-health-resolutions",
          strategy: "Use irregular Simple Future of hacer for ellos",
          question: "Give the *ellos* Simple Future form of **hacer** (they will do).",
          answer: {
            type: "text",
            accept: ["harán", "ellos harán", "ellas harán", "ustedes harán"],
            display: "harán",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hacerán", "ellos hacerán"] },
              feedback: "*Hacer* uses irregular stem **har-** + *-án* = **harán**!",
            },
          ],
          hints: [
            "Irregular stem: *har-*.",
            "Add the *ellos* Simple Future ending *-án* (with accent!).",
          ],
          solution: ["Irregular stem *har-* + accented *-án* = **harán**."],
        },
        {
          id: "healthy-living-diet-p2-q11",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "sport-fitness-stress",
          strategy: "Check o→u sandal shift in dormir Preterite",
          question: "Which sentence accurately translates 'Last night my sister slept nine hours'?",
          options: [
            "Anoche mi hermana dormió nueve horas.",
            "Anoche mi hermana duermió nueve horas.",
            "Anoche mi hermana durmió nueve horas.",
            "Anoche mi hermana dormirá nueve horas.",
          ],
          answerIndex: 2,
          hints: [
            "*Anoche* ('last night') requires the Preterite.",
            "*Dormir* shifts *o → u* in 3rd-person Preterite (*él/ella* and *ellos*).",
          ],
          explanation:
            "**Durmió** applies the *-ir* sandal shift *o → u* in 3rd-person singular Preterite. *Dormirá* is Simple Future ('will sleep').",
        },
        {
          id: "healthy-living-diet-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "balanced-diet-habits",
          strategy: "Decode authentic healthy-living advice accurately",
          question: "Read the school nurse's tip: *Evita las bebidas energéticas antes de un examen: aunque parecen darte energía, luego provocan ansiedad y cansancio.* Why does she warn against energy drinks?",
          options: [
            "They cause anxiety and fatigue afterwards despite seeming to boost energy.",
            "They are too expensive for school students to buy before exams.",
            "They contain too much calcium and make people fall asleep immediately.",
            "They replace home-cooked lunches and reduce vitamin levels.",
          ],
          answerIndex: 0,
          hints: [
            "Translate *aunque parecen darte energía* ('although they seem to give you energy').",
            "Translate *luego provocan ansiedad y cansancio*.",
          ],
          explanation:
            "She warns that even though energy drinks seem to give energy, afterwards they trigger **anxiety and fatigue** (*provocan ansiedad y cansancio*).",
        },
        {
          id: "healthy-living-diet-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "giving-health-advice",
          strategy: "Write an agony-aunt reply packed with varied advice + infinitives",
          question: "A Spanish teenager writes that they always feel exhausted because they stay up past midnight on their phone, skip breakfast and eat burgers daily. Write a 45–65 word Spanish reply giving **four varied pieces of advice** (do not repeat the same advice opener twice!).",
          marks: 4,
          modelAnswer:
            "Para sentirte con más energía, tienes que cambiar tus hábitos poco a poco. Primero, hay que desayunar bien todos los días y se debe comer fruta en lugar de hamburguesas. Además, no deberías pasar tanto tiempo delante de la pantalla por la noche. Finalmente, es imprescindible acostarse temprano para dormir ocho horas.",
          markScheme: [
            { point: "First advice frame (*se debe / hay que / tienes que* + infinitive)", keywords: ["hay que", "se debe", "tienes que"] },
            { point: "Personal advice with *deberías / no deberías* + infinitive", keywords: ["deberias", "no deberias"] },
            { point: "Value-judgement advice (*es importante / es imprescindible / es necesario / es aconsejable*)", keywords: ["es importante", "es imprescindible", "es necesario", "es aconsejable", "es mejor", "vale la pena"] },
            { point: "Concrete fix addressing breakfast, diet, screens or sleep (*desayunar / fruta / pantalla / dormir / acostarse / acostarte*)", keywords: ["desayunar", "fruta", "pantalla", "dormir", "acostarse", "acostarte", "movil"] },
          ],
          hints: [
            "Use 4 different openers: e.g. *hay que*, *se debe*, *no deberías* and *es imprescindible*.",
            "Keep EVERY verb right after each opener in the infinitive!",
            "Address breakfast, burgers, phone screens and sleep directly.",
          ],
          commonError: "Repeating *deberías* four times or conjugating the verb after *hay que / se debe*.",
        },
        {
          id: "healthy-living-diet-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sport-fitness-stress",
          strategy: "Evaluate physical AND mental benefits of exercise",
          question: "Write 45–60 words in Spanish explaining why sport and rest matter for young people. Include:\n1. One sport you play or would like to do, plus frequency\n2. Two distinct benefits for body and mind\n3. One danger of a sedentary lifestyle or excessive screen use\n4. One linking phrase (*moreover / therefore / however*)",
          marks: 4,
          modelAnswer:
            "En mi opinión, practicar deporte regularmente es fundamental para los jóvenes. Juego al tenis dos veces a la semana porque fortalece el corazón y despeja la mente después de las clases. Además, me ayuda a dormir mejor. Sin embargo, llevar una vida sedentaria delante de la pantalla provoca cansancio y mucho estrés.",
          markScheme: [
            { point: "Sport or physical activity + frequency (*juego al / hago / practico / salgo a correr*)", keywords: ["juego", "hago", "practico", "salgo a correr", "natacion", "tenis", "futbol", "baloncesto", "ciclismo", "deporte"] },
            { point: "Body or mind benefit (*corazón / mente / estrés / energía / relajarme / sueño / forma*)", keywords: ["corazon", "mente", "estres", "energia", "relajarme", "sueno", "en forma"] },
            { point: "Drawback of sedentary habits or screens (*sedentaria / pantalla / cansancio / ansiedad / estrés / sobrepeso*)", keywords: ["sedentaria", "pantalla", "cansancio", "ansiedad", "sobrepeso", "falta de sueno"] },
            { point: "Discourse connective (*además / sin embargo / por lo tanto*)", keywords: ["ademas", "sin embargo", "por lo tanto"] },
          ],
          hints: [
            "Combine one physical benefit (*fortalece el corazón*) with one mental benefit (*despeja la mente / reduce el estrés*).",
            "Mention *una vida sedentaria* or *delante de la pantalla*.",
            "Connect your ideas smoothly with *además*, *sin embargo* or *por lo tanto*.",
          ],
          commonError: "Writing only about food instead of sport, sleep, screens and mental wellbeing.",
        },
        {
          id: "healthy-living-diet-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "future-health-resolutions",
          strategy: "Showcase Present, Preterite, Immediate Future and Simple Future in a health article",
          question: "Write a 65–85 word Spanish article titled *Mi plan para una vida más sana*. Include:\n1. One unhealthy habit from the past (Preterite)\n2. What you currently do well (Present)\n3. One immediate goal for this week (Immediate Future)\n4. Two ambitious long-term goals (Simple Future, including one irregular stem like *do / have / be able / go out*)",
          marks: 4,
          modelAnswer:
            "El trimestre pasado me acosté demasiado tarde y bebí demasiados refrescos azucarados durante los exámenes. Actualmente intento comer cinco raciones de fruta y verdura todos los días y camino al colegio. Esta semana voy a preparar comida casera con mi familia y voy a desconectarme del móvil a las diez. En el futuro haré ejercicio cuatro veces a la semana, tendré más energía y dejaré de picar golosinas entre horas.",
          markScheme: [
            { point: "Past habit in Preterite (*me acosté / comí / bebí / hice / dormí / pasé*)", keywords: ["me acoste", "comi", "bebi", "hice", "dormi", "pase", "lleve"] },
            { point: "Current Present habit (*como / bebo / camino / hago / juego / intento / duermo*)", keywords: ["como", "bebo", "camino", "hago", "juego", "intento", "duermo", "desayuno"] },
            { point: "Immediate Future goal (*voy a* + infinitive)", keywords: ["voy a", "vamos a"] },
            { point: "Irregular or regular Simple Future pledge (*haré / tendré / podré / saldré / dejaré / comeré / dormiré*)", keywords: ["hare", "tendre", "podre", "saldre", "dejare", "comere", "dormire", "me pondre"] },
          ],
          hints: [
            "Open with a clear past marker (*El trimestre pasado...*) + Preterite.",
            "Move to Present (*Actualmente...*), then Immediate Future (*Esta semana voy a...*).",
            "Finish strongly with Simple Future irregulars (*haré, tendré, podré, saldré*) and *dejaré de*.",
          ],
          commonError: "Mixing up Preterite and Present endings, or missing the written accents on *haré / tendré / dejaré*.",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 stretch questions, 3-step hints each)
  // ===========================================================================
  challenge: [
    {
      id: "healthy-living-diet-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "balanced-diet-habits",
      strategy: "Master adverb vs adjective demasiado and feminine agua in one sentence",
      question: "This sentence has **three** grammar errors. Type the fully corrected Spanish sentence:\n*Esta comida es demasiada grasienta porque tiene demasiado grasa y bebo mucho agua.*",
      answer: {
        type: "text",
        accept: [
          "Esta comida es demasiado grasienta porque tiene demasiada grasa y bebo mucha agua",
          "Esta comida es demasiado grasienta porque tiene demasiada grasa y bebo mucha agua.",
        ],
        display: "Esta comida es demasiado grasienta porque tiene demasiada grasa y bebo mucha agua.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Esta comida es demasiada grasienta porque tiene demasiada grasa y bebo mucha agua"] },
          feedback: "Almost! Before an **adjective** (*grasienta*), *demasiado* ('too') is an adverb and NEVER changes to *-a*!",
        },
      ],
      hints: [
        "Before an adjective (*grasienta*), *demasiado* is an invariable adverb.",
        "Before feminine noun *grasa*, *demasiada* MUST agree.",
        "Check the gender of *agua* → *mucha agua*!",
      ],
      solution: [
        "*Demasiado* + adjective (*grasienta*) stays invariable: **demasiado grasienta**.",
        "Feminine nouns *grasa* and *agua* need feminine quantifiers: **demasiada grasa** and **mucha agua**.",
        "Corrected: **Esta comida es demasiado grasienta porque tiene demasiada grasa y bebo mucha agua.**",
      ],
    },
    {
      id: "healthy-living-diet-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "giving-health-advice",
      strategy: "Fix conjugated-second-verb and reflexive-pronoun errors in advice",
      question: "Correct ALL **three** errors in this Spanish advice sentence:\n*Deberias acostarse temprano y no se debe comes comida basura.*",
      answer: {
        type: "text",
        accept: [
          "Deberías acostarte temprano y no se debe comer comida basura",
          "Deberías acostarte temprano y no se debe comer comida basura.",
        ],
        display: "Deberías acostarte temprano y no se debe comer comida basura.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Deberías acostarse temprano y no se debe comer comida basura"] },
          feedback: "Check the reflexive pronoun after *deberías* (*tú*): *acostarse* → **acostarte**!",
        },
      ],
      hints: [
        "Error 1: check the written accent on *deberías*.",
        "Error 2: *deberías* addresses *tú*, so adjust *-se* on *acostarse*.",
        "Error 3: never conjugate the verb after *no se debe* — use the infinitive!",
      ],
      solution: [
        "Accent on *deberías* + *tú* reflexive *-te*: **Deberías acostarte**.",
        "Infinitive after *no se debe*: **no se debe comer**.",
        "Corrected: **Deberías acostarte temprano y no se debe comer comida basura.**",
      ],
    },
    {
      id: "healthy-living-diet-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "giving-health-advice",
      strategy: "Contrast subtle Spanish modal meanings",
      question: "A doctor tells a recovered athlete: *Ya estás curado: **no tienes que** tomar estas pastillas, pero **no debes** entrenar demasiado fuerte esta semana.* What is the exact contrast between *no tienes que* and *no debes*?",
      options: [
        "*No tienes que* forbids the pills; *no debes* makes training optional.",
        "*No tienes que* means it is no longer necessary; *no debes* advises/forbids against overtraining.",
        "Both mean 'you must not', with *no tienes que* being more formal.",
        "*No tienes que* refers to the past; *no debes* refers to the future.",
      ],
      answerIndex: 1,
      hints: [
        "Think about English 'you don't have to' vs 'you must not / shouldn't'.",
        "Because the athlete is recovered (*ya estás curado*), the pills are no longer required.",
        "Overtraining during recovery would risk reinjury, so *no debes* warns against it.",
      ],
      explanation:
        "**No tienes que** = 'you don't have to' (absence of obligation), whereas **no debes / no deberías / no se debe** = 'you must not / should not' (prohibition or strong advice against).",
    },
    {
      id: "healthy-living-diet-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "future-health-resolutions",
      strategy: "Combine three irregular Simple Future verbs cleanly",
      question: "Complete all three gaps in the **Simple Future** (*yo*): *El año que viene ______ (hacer) más deporte, ______ (salir) a correr y ______ (tener) más energía.*",
      answer: {
        type: "text",
        accept: ["haré / saldré / tendré", "haré, saldré, tendré", "haré, saldré y tendré"],
        display: "haré / saldré / tendré",
      },
      traps: [
        {
          spec: { type: "text", accept: ["haceré / saliré / teneré", "haceré, saliré, teneré"] },
          feedback: "All three verbs have irregular Simple Future stems: **har-**, **saldr-**, **tendr-**!",
        },
      ],
      hints: [
        "Recall the H-T-P-S-P group of irregular Simple Future verbs.",
        "Build the shortened irregular stems for *hacer*, *salir* and *tener* (two of them insert *-d-* before *-r-*!).",
        "Attach the accented *yo* Simple Future ending *-é* to all three stems.",
      ],
      solution: [
        "*hacer* → **haré**; *salir* → **saldré**; *tener* → **tendré**.",
      ],
    },
    {
      id: "healthy-living-diet-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sport-fitness-stress",
      strategy: "Translate a complex wellbeing sentence with two prepositions",
      question: "Translate into Spanish: 'Going out for a run helps me to clear my mind and sleep better.' (Start with *Salir a correr*)",
      answer: {
        type: "text",
        accept: [
          "Salir a correr me ayuda a despejar la mente y dormir mejor",
          "Salir a correr me ayuda a despejar la mente y dormir mejor.",
          "Salir a correr me ayuda a despejar la mente y a dormir mejor",
          "Salir a correr me ayuda a despejar la mente y a dormir mejor.",
        ],
        display: "Salir a correr me ayuda a despejar la mente y dormir mejor.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Salir a correr me ayuda despejar la mente y dormir mejor"] },
          feedback: "Never drop the preposition **a** after *ayudar*: *me ayuda **a** despejar la mente*!",
        },
      ],
      hints: [
        "Use 3rd-person singular *me ayuda* + mandatory **a**.",
        "'Clear my mind' uses the definite article in Spanish: *despejar la mente*.",
        "Finish with *y dormir mejor*.",
      ],
      solution: [
        "*Salir a correr* + *me ayuda a* + *despejar la mente* + *y dormir mejor*.",
        "Full sentence: **Salir a correr me ayuda a despejar la mente y dormir mejor.**",
      ],
    },
    {
      id: "healthy-living-diet-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "future-health-resolutions",
      strategy: "Calculate lifestyle progress from a Spanish wellness tracker",
      question: "Read Diego's weekly tracker:\n- *Objetivo: dormir 8 horas por noche (56 horas a la semana) y hacer 45 minutos de ejercicio 4 veces a la semana.*\n- *Esta semana: durmió 7 horas de lunes a viernes, 9 horas el sábado y 9 horas el domingo; entrenó 3 veces durante 45 minutos.*\n\nWhich statement is TRUE about Diego's week?",
      options: [
        "He hit his sleep goal but missed his exercise goal by 45 minutes.",
        "He missed his sleep goal by 3 hours and missed his exercise goal by 45 minutes.",
        "He slept 56 hours exactly and exercised for 180 minutes.",
        "He exceeded his sleep goal by 2 hours and hit his exercise goal.",
      ],
      answerIndex: 1,
      hints: [
        "Calculate total sleep: 5 weekday nights × 7 hours + 9 (Saturday) + 9 (Sunday).",
        "Compare 35 + 18 = 53 hours against his 56-hour goal (56 − 53 = 3 hours short).",
        "He trained 3 times instead of 4 times (1 × 45 minutes short).",
      ],
      explanation:
        "Sleep: (5 × 7) + 9 + 9 = 53 hours vs target 56 hours → **3 hours short**. Exercise: 3 × 45 min vs target 4 × 45 min → **45 minutes short**.",
    },
    {
      id: "healthy-living-diet-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "giving-health-advice",
      strategy: "Deliver a structured school health campaign manifesto",
      question: "Write a 70–90 word Spanish manifesto for your school's *Semana de la Vida Sana*. Include:\n1. Why balanced nutrition and hydration matter (mention at least two specific nutrients)\n2. Three different advice structures (*one should / one must / it is essential / you should not*) followed by infinitives\n3. One point connecting sleep, reduced screen time and mental wellbeing\n4. A collective *nosotros* Simple Future pledge (remember the accent rule!)",
      marks: 5,
      modelAnswer:
        "¡Bienvenidos a la Semana de la Vida Sana! Una dieta equilibrada con vitaminas, proteínas y fibra nos da energía para estudiar bien. Primero, hay que comer cinco raciones de fruta y verdura y beber mucha agua todos los días. Segundo, no se debe consumir bebidas energéticas ni demasiada comida basura. Además, es imprescindible desconectarse de las pantallas por la noche porque dormir ocho horas reduce el estrés y mejora la concentración. ¡Juntos comeremos mejor y haremos más deporte este trimestre!",
      markScheme: [
        { point: "Balanced nutrition + specific nutrients (*vitaminas / proteínas / fibra / calcio*)", keywords: ["vitaminas", "proteinas", "fibra", "calcio"] },
        { point: "Impersonal advice with *hay que* or *se debe / no se debe*", keywords: ["hay que", "se debe", "no se debe", "no hay que"] },
        { point: "Second/third varied advice frame (*es imprescindible / es importante / es necesario / deberías / no deberías*)", keywords: ["es imprescindible", "es importante", "es necesario", "es aconsejable", "deberias", "no deberias"] },
        { point: "Link between sleep, screens and mental wellbeing (*pantalla / dormir / estrés / ansiedad / concentración / mente*)", keywords: ["pantalla", "pantallas", "estres", "ansiedad", "concentracion", "mente"] },
        { point: "Collective *nosotros* Simple Future pledge (*comeremos / haremos / beberemos / dormiremos / tendremos / podremos / llevaremos*)", keywords: ["comeremos", "haremos", "beberemos", "dormiremos", "tendremos", "podremos", "llevaremos", "mejoraremos"] },
      ],
      hints: [
        "Mention specific nutrients (*vitaminas, proteínas, fibra*) and *mucha agua*.",
        "Rotate across 3 distinct advice frames + infinitives.",
        "Finish with a *nosotros* Simple Future verb (*comeremos, haremos, tendremos* — NO accent on *-emos*!).",
      ],
      commonError: "Adding an accent onto *nosotros* Simple Future (*comerémos / harémos*) or conjugating verbs after *hay que*.",
    },
    {
      id: "healthy-living-diet-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "future-health-resolutions",
      strategy: "Compare past, present and two future tenses with top-band nuance",
      question: "Write an 80–100 word Spanish reflection on transforming your lifestyle over one school year. Include:\n1. Two concrete unhealthy habits you had last term (Preterite)\n2. The negative impact those habits caused (tiredness, stress or poor focus)\n3. Positive changes you currently follow (Present + frequency phrase)\n4. One near-term plan (Immediate Future) AND two long-term pledges (Simple Future, including at least one irregular stem and giving up a bad habit)",
      marks: 5,
      modelAnswer:
        "El trimestre pasado llevé una vida muy poco saludable: comí demasiados dulces, me acosté tarde casi todas las noches y no hice suficiente deporte. Por lo tanto, sufrí mucho cansancio y estrés en clase. Ahora intento cuidarme mejor: como fruta en lugar de golosinas y juego al baloncesto tres veces a la semana, lo que despeja mi mente. Este fin de semana voy a cocinar platos caseros con mis padres. Además, el año que viene haré natación, tendré mucha más energía y dejaré de pasar tantas horas delante de la pantalla.",
      markScheme: [
        { point: "Past habits in Preterite (*comí / bebí / me acosté / hice / llevé / dormí*)", keywords: ["comi", "bebi", "me acoste", "hice", "lleve", "dormi", "pase"] },
        { point: "Negative consequence (*cansancio / estrés / ansiedad / sueño / concentración*)", keywords: ["cansancio", "estres", "ansiedad", "falta de sueno", "concentracion"] },
        { point: "Present positive change + frequency (*veces a la semana / todos los días / a menudo / regularmente / en lugar de*)", keywords: ["veces a la semana", "todos los dias", "a menudo", "regularmente", "en lugar de", "a diario"] },
        { point: "Immediate Future near-term plan (*voy a* + infinitive)", keywords: ["voy a", "vamos a"] },
        { point: "Simple Future irregular stem (*haré / tendré / podré / saldré / pondré*) and/or *dejaré de*", keywords: ["hare", "tendre", "podre", "saldre", "pondre", "dejare de"] },
      ],
      hints: [
        "Structure cleanly in 4 chronological steps: Past (Preterite) → Impact → Now (Present) → Future (Immediate + Simple).",
        "Include a clear frequency phrase (*tres veces a la semana*) and *en lugar de*.",
        "Use irregular Simple Future stems (*haré, tendré, podré, saldré*) and *dejaré de + infinitive*.",
      ],
      commonError: "Staying in only one tense or writing *dejaré de pasando* instead of *dejaré de pasar*.",
    },
  ],
};
