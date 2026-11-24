import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "four-tenses-grammar-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "present-tense-mastery",
      strategy: "Apply boot stem-change rule for preferir (e→ie)",
      question: "Put *preferir* into the **yo** present tense: «Normalmente ___ escuchar música en español.»",
      answer: {
        type: "text",
        accept: ["prefiero", "Prefiero"],
        display: "prefiero",
      },
      traps: [
        { spec: { type: "text", accept: ["prefero"] }, feedback: "*preferir* is an *e→ie* boot verb — change the second *e* to *ie* inside the boot (**prefiero**)." },
        { spec: { type: "text", accept: ["prefiere"] }, feedback: "*prefiere* is *él/ella*; the *yo* present ending is *-o* (**prefiero**)." },
      ],
      hints: ["Change the second *e* of *prefer-* to *ie* and add the *yo* ending *-o*."],
      solution: [
        "*yo* sits inside the *e→ie* boot: *prefer-* → *prefier-*.",
        "Add *-o* → **prefiero**.",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "present-tense-mastery",
      strategy: "Keep nosotros outside the boot",
      question: "Complete in the present tense: «Los domingos nosotros ___ (*dormir*) hasta las diez.»",
      options: [
        "duermimos",
        "dormimos",
        "dormemos",
        "duermen",
      ],
      answerIndex: 1,
      hints: ["*nosotros* sits OUTSIDE the *o→ue* boot, and *dormir* is an *-ir* verb."],
      explanation: "**dormimos** keeps the regular stem *dorm-* outside the boot and adds the *-ir* *nosotros* ending *-imos*.",
    },
    {
      id: "four-tenses-grammar-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "preterite-tense-mastery",
      strategy: "Apply -gar → -gué in yo preterite",
      question: "Put *llegar* into the **yo** preterite tense: «Anoche ___ a casa a las diez.»",
      answer: {
        type: "text",
        accept: ["llegué"],
        display: "llegué",
      },
      traps: [
        { spec: { type: "text", accept: ["llegé"] }, feedback: "*-gar* verbs change *g → gu* before *-é* to keep the hard *g* sound (**llegué**)!" },
        { spec: { type: "text", accept: ["llego"] }, feedback: "*llego* is present ('I arrive'); *Anoche* requires the preterite (**llegué**)." },
      ],
      hints: [
        "Recall the *-car / -gar / -zar* spelling guard for *yo* preterite.",
        "Insert *u* after *g* before adding accented *-é*.",
      ],
      solution: [
        "*llegar* ends in *-gar*, so *g → gu* before *-é*.",
        "Result: **llegué**.",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "preterite-tense-mastery",
      strategy: "Zero-accent irregular preterite hacer (él/ella → hizo)",
      question: "Put *hacer* into the **él/ella** preterite tense: «Ayer mi madre ___ una tortilla española.»",
      answer: {
        type: "text",
        accept: ["hizo"],
        display: "hizo",
      },
      traps: [
        { spec: { type: "text", accept: ["hico"] }, feedback: "In *él/ella* preterite of *hacer*, change *c → z* before *o* → **hizo**!" },
        { spec: { type: "text", accept: ["hice"] }, feedback: "*hice* is *yo* ('I made'); *mi madre* requires *él/ella* (**hizo**)." },
        { spec: { type: "text", accept: ["hació"] }, feedback: "*hacer* is a strong irregular preterite (no *-ió* ending and zero accents) → **hizo**." },
      ],
      hints: [
        "*hacer* uses strong preterite stem *hic-*, with a spelling twist in *él/ella*.",
        "Change *c → z* before *-o* and add NO accent.",
      ],
      solution: [
        "Strong irregular preterite of *hacer* for *él/ella*: *c → z* before *o* → **hizo** (zero accents).",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "preterite-tense-mastery",
      strategy: "Distinguish present yo (-o) from preterite él/ella (-ó)",
      question: "What does *«Mi primo **compró** unas zapatillas nuevas»* mean?",
      options: [
        "My cousin buys new trainers.",
        "I buy new trainers for my cousin.",
        "My cousin bought new trainers.",
        "My cousin will buy new trainers.",
      ],
      answerIndex: 2,
      hints: [
        "Check the accented ending **-ó** on *compró*.",
        "Is *-ó* present, preterite, or future?",
      ],
      explanation: "**My cousin bought new trainers.** matches preterite *él/ella* **compró** (with the vital accent on *ó*).",
    },
    {
      id: "four-tenses-grammar-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "immediate-vs-simple-future",
      strategy: "Form Immediate Future: ir (present) + a + infinitive",
      question: "Complete using the **Immediate Future** (3 words): «Este sábado nosotros ___ ___ ___ (*nadar*) en la piscina.»",
      answer: {
        type: "text",
        accept: ["vamos a nadar"],
        display: "vamos a nadar",
      },
      traps: [
        { spec: { type: "text", accept: ["vamos nadar"] }, feedback: "Never omit the preposition **a**: write **vamos a nadar**!" },
        { spec: { type: "text", accept: ["vamos a nadamos"] }, feedback: "Keep the second verb in the infinitive (**nadar**), never conjugated (*nadamos*)." },
      ],
      hints: ["Use *nosotros* of *ir* + *a* + unchanged infinitive *nadar*."],
      solution: [
        "*ir* (*nosotros*) = **vamos** + **a** + infinitive **nadar** → **vamos a nadar**.",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "immediate-vs-simple-future",
      strategy: "Use irregular Simple Future stem tendr-",
      question: "Put *tener* into the **yo** Simple Future tense: «El año que viene ___ más tiempo libre.»",
      answer: {
        type: "text",
        accept: ["tendré"],
        display: "tendré",
      },
      traps: [
        { spec: { type: "text", accept: ["teneré"] }, feedback: "*tener* uses the Add-D irregular stem **tendr-** → **tendré**!" },
        { spec: { type: "text", accept: ["tuve"] }, feedback: "*tuve* is preterite ('I had'); *El año que viene* requires Simple Future (**tendré**)." },
      ],
      hints: [
        "*tener* belongs to the Add-D irregular future stem group (*tendr-*).",
        "Attach the accented *yo* future ending *-é*.",
      ],
      solution: [
        "Irregular future stem of *tener*: **tendr-**.",
        "Add *yo* ending **-é** → **tendré**.",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "immediate-vs-simple-future",
      strategy: "Apply the 5-out-of-6 accent rule in Simple Future",
      question: "Which Simple Future form is spelled with 100% accurate accents?",
      options: [
        "hablaremos",
        "hablarémos",
        "hablare",
        "hablaran",
      ],
      answerIndex: 0,
      hints: [
        "Five of the six Simple Future endings carry a written accent.",
        "Which ONE person (*-emos*) has NO written accent?",
      ],
      explanation: "**hablaremos** is exact because *-emos* is the ONLY Simple Future ending with zero accent. *hablaré* and *hablarán* both require accents.",
    },
    {
      id: "four-tenses-grammar-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "mixing-four-tenses",
      strategy: "Match irregular future stem podr- to ellos",
      question: "Put *poder* into the **ellos** Simple Future tense: «Pronto mis amigos ___ hablar español con fluidez.»",
      answer: {
        type: "text",
        accept: ["podrán"],
        display: "podrán",
      },
      traps: [
        { spec: { type: "text", accept: ["poderán"] }, feedback: "*poder* drops the *-e-* in the Simple Future → irregular stem **podr-** → **podrán**!" },
        { spec: { type: "text", accept: ["pudieron"] }, feedback: "*pudieron* is preterite; *Pronto* ('soon') requires Simple Future (**podrán**)." },
      ],
      hints: [
        "Drop the *-e-* from *poder* to form the irregular future stem.",
        "Attach the accented *ellos* Simple Future ending *-án*.",
      ],
      solution: [
        "Irregular future stem of *poder*: **podr-**.",
        "Add *ellos* ending **-án** → **podrán**.",
      ],
    },
    {
      id: "four-tenses-grammar-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Use the R-Test to separate Preterite vs Simple Future",
      question: "Which sentence accurately translates \"Yesterday I visited the castle and next year I will visit the museum\"?",
      options: [
        "Ayer visitaré el castillo y el año que viene visité el museo.",
        "Ayer visitó el castillo y el año que viene visitará el museo.",
        "Ayer visito el castillo y el año que viene voy visitar el museo.",
        "Ayer visité el castillo y el año que viene visitaré el museo.",
      ],
      answerIndex: 3,
      hints: [
        "Check the R-Test: *visité* (no *r* before *-é* = past) vs *visitaré* (full infinitive + *-é* = future).",
        "Verify both verbs are in the *yo* form ('I').",
      ],
      explanation: "**Ayer visité el castillo y el año que viene visitaré el museo.** pairs *yo* preterite **visité** with *yo* simple future **visitaré**.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each, incl. 3–4 written per paper)
  // =========================================================================
  papers: [
    {
      id: "four-tenses-grammar-p1",
      title: "Practice Paper 1 — Present, Preterite & Future Transformations",
      questions: [
        {
          id: "four-tenses-grammar-p1-q01",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "present-tense-mastery",
          strategy: "Identify all four boot stem-change families",
          question: "Which verb belongs to the **e → i** present-tense boot stem-changing family?",
          options: [
            "pedir",
            "preferir",
            "poder",
            "jugar",
          ],
          answerIndex: 0,
          hints: ["Check *yo* forms: *pido, prefiero, puedo, juego*."],
          explanation: "**pedir** changes *e → i* (*pido, pides, pide, pedimos, pedís, piden*). *preferir* is *e→ie*, *poder* is *o→ue*, and *jugar* is *u→ue*.",
        },
        {
          id: "four-tenses-grammar-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "present-tense-mastery",
          strategy: "Conjugate yo-go verb salir",
          question: "Put *salir* into the **yo** present tense: «Los viernes ___ con mis amigos.»",
          answer: {
            type: "text",
            accept: ["salgo"],
            display: "salgo",
          },
          traps: [
            { spec: { type: "text", accept: ["salo"] }, feedback: "*salir* is a *yo-go* verb — insert *-g-* in *yo* → **salgo**!" },
            { spec: { type: "text", accept: ["salí"] }, feedback: "*Los viernes* ('on Fridays') signals a Present habit (**salgo**), not Preterite." },
          ],
          hints: ["*salir* belongs to the *yo-go* verb family in the present tense."],
          solution: ["Drop *-ir* from *salir* and add *-go* → **salgo**."],
        },
        {
          id: "four-tenses-grammar-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "present-tense-mastery",
          strategy: "Use present tense + desde hace for ongoing duration",
          question: "Translate into Spanish (6 words): \"I have studied Spanish for three years.\" (use *estudiar* and *desde hace*)",
          answer: {
            type: "text",
            accept: [
              "Estudio español desde hace tres años",
              "Estudio español desde hace tres años.",
              "estudio español desde hace tres años",
              "Yo estudio español desde hace tres años",
            ],
            display: "Estudio español desde hace tres años.",
          },
          traps: [
            { spec: { type: "text", accept: ["Estudié español desde hace tres años", "estudié español desde hace tres años"] }, feedback: "With *desde hace* for an action still happening now, use the **Present tense** (**Estudio**), not the Preterite!" },
          ],
          hints: [
            "Because you still study Spanish today, use the Present tense (*estudio*).",
            "Follow *español* with *desde hace tres años*.",
          ],
          solution: [
            "Present tense *yo* of *estudiar* → **Estudio español**.",
            "Add ongoing duration marker → **desde hace tres años**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Apply -car → -qué in yo preterite",
          question: "Put *practicar* into the **yo** preterite tense: «Ayer ___ natación durante una hora.»",
          answer: {
            type: "text",
            accept: ["practiqué"],
            display: "practiqué",
          },
          traps: [
            { spec: { type: "text", accept: ["practicé"] }, feedback: "*-car* changes to **-qué** in the *yo* preterite to keep the hard *k* sound (**practiqué**)!" },
            { spec: { type: "text", accept: ["practico"] }, feedback: "*Ayer* requires the Preterite (**practiqué**), not Present *practico*." },
          ],
          hints: [
            "*practicar* ends in *-car*.",
            "Replace *-car* with *-qué* (with an accent on *é*) in the *yo* preterite.",
          ],
          solution: [
            "Apply *-car → -qué* for *yo* preterite → **practiqué**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Check strong irregular preterites estar & tener",
          question: "Complete accurately in the preterite: «El domingo ___ (*estar*, *yo*) enfermo y ___ (*tener*, *yo*) fiebre.»",
          options: [
            "estuvé / tuvé",
            "estuve / tuve",
            "estaba / tenía",
            "estuvo / tuvo",
          ],
          answerIndex: 1,
          hints: [
            "Strong irregular preterites (*estuve, tuve*) carry ZERO written accents.",
            "Check *yo* (*-e*) vs *él/ella* (*-o*).",
          ],
          explanation: "**estuve / tuve** uses the *yo* strong irregular forms with zero accents. *estuvé / tuvé* add illegal accents, and *estuvo / tuvo* are *él/ella*.",
        },
        {
          id: "four-tenses-grammar-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Apply -zar → -cé without boot stem-change",
          question: "Put *empezar* into the **yo** preterite tense: «La semana pasada ___ a aprender japonés.»",
          answer: {
            type: "text",
            accept: ["empecé"],
            display: "empecé",
          },
          traps: [
            { spec: { type: "text", accept: ["empezé"] }, feedback: "Spanish never writes *ze* — change *z → c* before *-é* → **empecé**!" },
            { spec: { type: "text", accept: ["empiecé"] }, feedback: "*-ar* verbs NEVER apply their present boot change (*e→ie*) in the preterite → **empecé**!" },
          ],
          hints: [
            "*-zar* changes *z → c* before *-é* in the *yo* preterite.",
            "Do NOT apply the present *e→ie* stem change in the preterite!",
          ],
          solution: [
            "Keep regular stem *empez-*, change *z → c* before *-é* → **empecé**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Check zero-accent irregular preterite dar & ver",
          question: "Complete in the preterite (*yo* of *dar*): «Ayer le ___ un regalo a mi amiga.»",
          answer: {
            type: "text",
            accept: ["di"],
            display: "di",
          },
          traps: [
            { spec: { type: "text", accept: ["doy"] }, feedback: "*doy* is present ('I give'); *Ayer* calls for preterite (**di**)." },
            { spec: { type: "text", accept: ["dio"] }, feedback: "*dio* is *él/ella* ('he/she gave'); the *yo* form is **di**." },
            { spec: { type: "text", accept: ["dé"] }, feedback: "*dé* is present subjunctive; preterite *yo* of *dar* is **di** (no accent!)." },
          ],
          hints: [
            "*dar* behaves just like *ver* (*vi*) in the preterite, using *-er/-ir* style endings.",
            "Remember monosyllable preterites take ZERO written accents!",
          ],
          solution: [
            "Preterite *yo* of *dar* is **di** (zero accents).",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Identify irregular future stems querr- and vendr-",
          question: "Complete in the Simple Future (*ellos*): «Mañana mis abuelos ___ (*venir*) a cenar y ___ (*querer*) ver las fotos.»",
          options: [
            "venirán / quererán",
            "vinieron / quisieron",
            "vendrán / querrán",
            "vendran / querran",
          ],
          answerIndex: 2,
          hints: [
            "Match each irregular future stem: *venir → vendr-* and *querer → querr-*.",
            "Remember the mandatory accent on *-án*.",
          ],
          explanation: "**vendrán / querrán** combines Add-D stem **vendr-** and Drop-E stem **querr-** with accented **-án**.",
        },
        {
          id: "four-tenses-grammar-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Use irregular Simple Future stem saldr-",
          question: "Put *salir* into the **nosotros** Simple Future tense: «Mañana ___ temprano para el aeropuerto.»",
          answer: {
            type: "text",
            accept: ["saldremos"],
            display: "saldremos",
          },
          traps: [
            { spec: { type: "text", accept: ["saliremos"] }, feedback: "*salir* uses the Add-D irregular future stem **saldr-** → **saldremos**!" },
            { spec: { type: "text", accept: ["saldrémos"] }, feedback: "Never put a written accent on Simple Future *-emos* → **saldremos**!" },
          ],
          hints: [
            "*salir* swaps *-i-* for *-d-* to make irregular stem **saldr-**.",
            "Add the *nosotros* Simple Future ending *-emos* (remember: NO accent!).",
          ],
          solution: [
            "Irregular future stem **saldr-** + unaccented **-emos** → **saldremos**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Form Immediate Future for ellos/ellas",
          question: "Translate into Spanish using the **Immediate Future** (3 words): \"They are going to visit\" (*visitar*).",
          answer: {
            type: "text",
            accept: ["van a visitar", "ellos van a visitar", "ellas van a visitar"],
            display: "van a visitar",
          },
          traps: [
            { spec: { type: "text", accept: ["van visitar"] }, feedback: "Insert **a** between *van* and the infinitive: **van a visitar**!" },
            { spec: { type: "text", accept: ["visitarán"] }, feedback: "*visitarán* is Simple Future; this question asks for the 3-word Immediate Future (**van a visitar**)." },
          ],
          hints: [
            "Conjugate *ir* for *ellos* (*van*).",
            "Add *a* + the unchanged infinitive *visitar*.",
          ],
          solution: [
            "*ir* (*ellos*) = **van** + **a** + infinitive **visitar** → **van a visitar**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mixing-four-tenses",
          strategy: "Detect time-frame clashes in a sentence",
          question: "Which sentence accurately switches from **Present** to **Preterite** to **Simple Future**?",
          options: [
            "Siempre bebo agua, ayer bebí zumo y mañana voy a beber leche.",
            "Siempre bebí agua, ayer bebo zumo y mañana beberé leche.",
            "Siempre bebo agua, ayer bebo zumo y mañana beberé leche.",
            "Siempre bebo agua, ayer bebí zumo y mañana beberé leche.",
          ],
          answerIndex: 3,
          hints: [
            "The prompt asks specifically for Present → Preterite → **Simple Future** (one-word future!).",
            "Check all three *yo* forms of *beber*: *bebo → bebí → beberé*.",
          ],
          explanation: "**Siempre bebo agua, ayer bebí zumo y mañana beberé leche.** pairs Present **bebo**, Preterite **bebí**, and one-word Simple Future **beberé**.",
        },
        {
          id: "four-tenses-grammar-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "mixing-four-tenses",
          strategy: "Conjugate irregular verb tener across 3 tenses in sequence",
          question: "Write the **él/ella** forms of *tener* in **Present, Preterite, Simple Future** separated by commas (3 Spanish words).",
          answer: {
            type: "text",
            accept: ["tiene, tuvo, tendrá", "tiene tuvo tendrá"],
            display: "tiene, tuvo, tendrá",
          },
          traps: [
            { spec: { type: "text", accept: ["tiene, tuvo, tenerá", "tiene tuvo tenerá"] }, feedback: "Remember *tener* has the irregular Simple Future stem **tendr-** → **tendrá**!" },
            { spec: { type: "text", accept: ["tene, tuvo, tendrá"] }, feedback: "*tener* is an *e→ie* boot verb in *él/ella* present → **tiene**!" },
          ],
          hints: [
            "Present *él/ella*: apply the *e→ie* boot stem change.",
            "Preterite *él/ella*: strong irregular stem *tuv-* + *-o* (no accent!).",
            "Simple Future *él/ella*: irregular stem *tendr-* + accented *-á*.",
          ],
          solution: [
            "Present (*e→ie*): **tiene**.",
            "Preterite (strong irregular, no accent): **tuvo**.",
            "Simple Future (stem *tendr-* + *-á*): **tendrá**.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "present-tense-mastery",
          strategy: "Write an authentic routine paragraph using boot verbs, yo-go, and desde hace",
          marks: 4,
          question:
            "Write 3–4 sentences in Spanish describing your **normal weekly routine** in the Present Tense. You must include:\n" +
            "1. At least ONE present-tense boot stem-changing verb (*jugar, preferir, dormir, poder,* or *querer*)\n" +
            "2. At least ONE *yo-go* verb (*hago, tengo, salgo,* or *pongo*)\n" +
            "3. One *nosotros* form outside the boot OR a regular plural form\n" +
            "4. One ongoing-duration sentence using *desde hace*",
          modelAnswer:
            "Normalmente juego al tenis los miércoles y hago mis deberes después del instituto. Los fines de semana salgo con mis amigos y preferimos ir al cine. Además, estudio español desde hace tres años.",
          markScheme: [
            {
              point: "Accurate present-tense boot stem-changer (juego / prefiero / duermo / puedo / quiero / pido / vuelvo)",
              keywords: ["juego", "prefiero", "duermo", "puedo", "quiero", "pido", "vuelvo", "almuerzo", "empiezo"],
            },
            {
              point: "Accurate yo-go verb (hago / tengo / salgo / pongo / vengo / digo)",
              keywords: ["hago", "tengo", "salgo", "pongo", "vengo", "digo"],
            },
            {
              point: "Accurate nosotros present form (e.g. preferimos, jugamos, podemos, vamos, comemos, dormimos)",
              keywords: ["preferimos", "jugamos", "podemos", "queremos", "dormimos", "vamos", "comemos", "salimos", "hacemos", "hablamos", "cenamos"],
            },
            {
              point: "Ongoing duration using Present tense + desde hace",
              keywords: ["desde hace"],
            },
          ],
          commonError: "Stem-changing *nosotros* (*✗ prefierimos* instead of **preferimos**) or switching into the preterite before *desde hace*.",
          hints: [
            "Start with *Normalmente* and include a boot verb like *juego* or *prefiero* plus a *yo-go* verb like *hago* or *salgo*.",
            "Add a *nosotros* form (no boot change!) and finish with *estudio / vivo / juego … desde hace [time]*.",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Narrate a completed weekend accurately using -car/-gar/-zar and irregulars",
          marks: 4,
          question:
            "Write 3–4 sentences in Spanish describing **what you did last weekend** in the Preterite Tense. You must include:\n" +
            "1. A clear past time marker (e.g. last weekend, yesterday, or last Saturday in Spanish)\n" +
            "2. At least ONE *-car / -gar / -zar* *yo* preterite verb with the exact spelling change\n" +
            "3. At least ONE zero-accent irregular preterite verb (such as *ir, ser, tener, hacer, estar, ver,* or *dar*)\n" +
            "4. At least ONE regular preterite verb with accurate accent",
          modelAnswer:
            "El fin de semana pasado fui al parque con mi familia y jugué al fútbol con mi primo. Después comí una paella deliciosa y saqué muchas fotos. Por la noche vi una comedia y fue genial.",
          markScheme: [
            {
              point: "Clear past time marker",
              keywords: ["fin de semana pasado", "sabado pasado", "domingo pasado", "ayer", "anoche", "semana pasada"],
            },
            {
              point: "Accurate -car / -gar / -zar yo preterite spelling change",
              keywords: ["jugue", "saque", "llegue", "empece", "almorce", "practique", "pague", "busque", "toque", "organice"],
            },
            {
              point: "Accurate irregular preterite (fui / fue / tuve / hice / hizo / estuve / vi / di)",
              keywords: ["fui", "fue", "tuve", "hice", "hizo", "estuve", "vi", "fuimos", "vimos"],
            },
            {
              point: "Accurate regular preterite verb",
              keywords: ["comi", "bebi", "compre", "visite", "nade", "hable", "cene", "baile", "escuche", "estudie", "corri", "comimos"],
            },
          ],
          commonError: "Writing *jugé* or *sacé* instead of **jugué / saqué**, or adding illegal accents to *fui, fue, vi*.",
          hints: [
            "Open with *El sábado pasado fui…* and weave in a *-gar* or *-car* verb like *jugué* or *saqué*.",
            "Include a regular *-é / -í* preterite like *comí* or *compré*, and double-check every accent!",
          ],
        },
        {
          id: "four-tenses-grammar-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "immediate-vs-simple-future",
          strategy: "Contrast near weekend plans with long-term resolutions",
          marks: 4,
          question:
            "Write 3–4 sentences in Spanish explaining **your plans for this weekend AND your resolutions for next year**. You must include:\n" +
            "1. A near-future time cue + accurate **Immediate Future** (*ir + a + infinitive*)\n" +
            "2. A longer-term future time signpost (e.g. next year, in the future, or next summer in Spanish)\n" +
            "3. At least ONE **regular Simple Future** verb\n" +
            "4. At least ONE **irregular Simple Future** verb (using a stem from Drop-E, Add-D, or Short-2)",
          modelAnswer:
            "Este fin de semana voy a descansar en casa y vamos a visitar a mis abuelos el domingo. Sin embargo, el año que viene estudiaré más español y haré mucho más deporte. También tendré una dieta más equilibrada y podré correr cinco kilómetros.",
          markScheme: [
            {
              point: "Accurate Immediate Future (ir + a + infinitive)",
              keywords: ["voy a", "vamos a", "van a"],
            },
            {
              point: "Clear future time signpost for longer-term plans",
              keywords: ["ano que viene", "proximo ano", "en el futuro", "proximo verano", "algun dia", "mes que viene"],
            },
            {
              point: "Accurate regular Simple Future verb",
              keywords: ["estudiare", "viajare", "comere", "hablare", "vivire", "correre", "jugare", "nadare", "bebere", "vere", "ire", "comprare", "leere", "dormire"],
            },
            {
              point: "Accurate irregular Simple Future verb (tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, habr-)",
              keywords: ["tendre", "tendremos", "hare", "haremos", "podre", "podremos", "saldre", "querre", "sabre", "vendre", "pondre", "dire", "habra"],
            },
          ],
          commonError: "Omitting *a* in *voy a + inf.*, writing *haceré / teneré* instead of **haré / tendré**, or forgetting accents on *-é / -ás / -á / -án*.",
          hints: [
            "Sentence 1: *Este fin de semana voy a + infinitive…*",
            "Sentences 2–3: *El año que viene* + a regular Simple Future (*estudiaré / viajaré*) + an irregular Simple Future (*haré / tendré / podré*).",
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2 — Full Four-Tense Exam Synthesis
    // =========================================================================
    {
      id: "four-tenses-grammar-p2",
      title: "Practice Paper 2 — Four-Tense Synthesis & Accuracy Audit",
      questions: [
        {
          id: "four-tenses-grammar-p2-q01",
          kind: "mcq",
          difficulty: "core",
          guideRef: "present-tense-mastery",
          strategy: "Check e→ie boot verb empezar and o→ue volver",
          question: "Complete both verbs in the present tense (*ella* and *nosotros*): «La clase ___ (*empezar*) a las nueve y nosotros ___ (*volver*) a casa a las cuatro.»",
          options: [
            "empieza / volvemos",
            "empeza / vuelvemos",
            "empieza / vuelvemos",
            "empezo / volvemos",
          ],
          answerIndex: 0,
          hints: [
            "*La clase* (*ella*) sits INSIDE the *e→ie* boot.",
            "*nosotros* sits OUTSIDE the *o→ue* boot.",
          ],
          explanation: "**empieza / volvemos** changes *e→ie* inside the boot (*empieza*) and keeps *nosotros* untouched outside the boot (*volvemos*).",
        },
        {
          id: "four-tenses-grammar-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Conjugate strong irregular preterite poder",
          question: "Put *poder* into the **yo** preterite tense: «Ayer no ___ ir al cine porque tuve fiebre.»",
          answer: {
            type: "text",
            accept: ["pude"],
            display: "pude",
          },
          traps: [
            { spec: { type: "text", accept: ["podí"] }, feedback: "*poder* is a strong irregular preterite (stem **pud-**, zero accents) → **pude**!" },
            { spec: { type: "text", accept: ["puedo"] }, feedback: "*puedo* is present; *Ayer* + *tuve* require Preterite (**pude**)." },
          ],
          hints: [
            "Use the strong irregular preterite stem **pud-**.",
            "Add the strong *yo* ending *-e* with ZERO written accent.",
          ],
          solution: ["Strong irregular stem **pud-** + *-e* → **pude** (no accent)."],
        },
        {
          id: "four-tenses-grammar-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Check regular -er/-ir preterite él/ella ending (-ió)",
          question: "Put *beber* into the **él/ella** preterite tense: «Anoche Marta ___ un batido de fresa.»",
          answer: {
            type: "text",
            accept: ["bebió"],
            display: "bebió",
          },
          traps: [
            { spec: { type: "text", accept: ["bebe"] }, feedback: "*Anoche* signals a completed past action → Preterite (**bebió**)." },
            { spec: { type: "text", accept: ["bebí"] }, feedback: "*bebí* is *yo* ('I drank'); *Marta* (*ella*) takes **-ió** (**bebió**)." },
          ],
          hints: [
            "Drop *-er* from *beber*.",
            "Attach the accented *él/ella* *-er/-ir* preterite ending **-ió**.",
          ],
          solution: ["Stem *beb-* + **-ió** → **bebió**."],
        },
        {
          id: "four-tenses-grammar-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Recall irregular future stem sabr- (saber)",
          question: "How do you translate \"Tomorrow we will know the results\" using the Simple Future of *saber*?",
          options: [
            "Mañana saberemos los resultados.",
            "Mañana sabremos los resultados.",
            "Mañana sabrémos los resultados.",
            "Mañana supimos los resultados.",
          ],
          answerIndex: 1,
          hints: [
            "*saber* drops the *-e-* to form irregular future stem **sabr-**.",
            "Does Simple Future *nosotros* (**-emos**) take an accent?",
          ],
          explanation: "**Mañana sabremos los resultados.** combines Drop-E stem **sabr-** with unaccented **-emos**. *supimos* is preterite (*we found out*).",
        },
        {
          id: "four-tenses-grammar-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Use irregular Simple Future stem querr- (querer)",
          question: "Put *querer* into the **tú** Simple Future tense: «Algún día ___ visitar América Latina.»",
          answer: {
            type: "text",
            accept: ["querrás"],
            display: "querrás",
          },
          traps: [
            { spec: { type: "text", accept: ["quererás"] }, feedback: "*querer* drops the second *-e-* → double *-rr-* stem **querr-** → **querrás**!" },
            { spec: { type: "text", accept: ["quieres"] }, feedback: "*quieres* is present; *Algún día* ('someday') calls for Simple Future (**querrás**)." },
          ],
          hints: [
            "Drop the *-e-* from *querer* to get **querr-** (double *r*!).",
            "Attach the accented *tú* Simple Future ending *-ás*.",
          ],
          solution: ["Irregular stem **querr-** + **-ás** → **querrás**."],
        },
        {
          id: "four-tenses-grammar-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Use irregular Simple Future stem habr- (haber)",
          question: "Translate into Spanish (1 word, Simple Future): \"there will be\" → «El sábado ___ mucha gente en la plaza.»",
          answer: {
            type: "text",
            accept: ["habrá"],
            display: "habrá",
          },
          traps: [
            { spec: { type: "text", accept: ["hay"] }, feedback: "*hay* means 'there is/are' (Present); 'there will be' is **habrá**." },
            { spec: { type: "text", accept: ["haberá"] }, feedback: "*haber* drops *-e-* → irregular stem **habr-** → **habrá**!" },
          ],
          hints: [
            "Drop the *-e-* from *haber* to form irregular stem **habr-**.",
            "Add the accented 3rd-person singular future ending *-á*.",
          ],
          solution: ["Irregular stem **habr-** + **-á** → **habrá** (*there will be*)."],
        },
        {
          id: "four-tenses-grammar-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "mixing-four-tenses",
          strategy: "Match four time expressions to their exact verb forms",
          question: "Which verb form of **comer** (*yo*) fits the sentence: «La semana pasada ___ tapas en Sevilla»?",
          options: [
            "como",
            "comeré",
            "comí",
            "voy a comer",
          ],
          answerIndex: 2,
          hints: [
            "Check the time clue *La semana pasada* ('last week').",
            "Pick the *yo* preterite ending for a regular *-er* verb.",
          ],
          explanation: "**comí** is the *yo* preterite of *comer*, matching *La semana pasada*. *como* is present, *comeré* is simple future, and *voy a comer* is immediate future.",
        },
        {
          id: "four-tenses-grammar-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "mixing-four-tenses",
          strategy: "Contrast Preterite vs Simple Future using the R-Test",
          question: "Write the **yo** Simple Future of *comprar* (1 word): «El mes que viene ___ una bicicleta nueva.»",
          answer: {
            type: "text",
            accept: ["compraré"],
            display: "compraré",
          },
          traps: [
            { spec: { type: "text", accept: ["compré"] }, feedback: "*compré* is Preterite ('I bought')! For Simple Future, keep the ENTIRE infinitive *comprar* + *-é* → **compraré**." },
            { spec: { type: "text", accept: ["compro"] }, feedback: "*compro* is present; *El mes que viene* requires Simple Future (**compraré**)." },
          ],
          hints: [
            "Do NOT chop off *-ar* in the Simple Future!",
            "Attach accented *-é* directly onto the full infinitive *comprar*.",
          ],
          solution: ["Full infinitive *comprar* + **-é** → **compraré**."],
        },
        {
          id: "four-tenses-grammar-p2-q09",
          kind: "short",
          difficulty: "challenge",
          guideRef: "mixing-four-tenses",
          strategy: "Transform hacer (*yo*) across Preterite and Simple Future",
          question: "Write the **yo** forms of *hacer* in **Preterite** and **Simple Future**, separated by a comma (2 words).",
          answer: {
            type: "text",
            accept: ["hice, haré", "hice haré"],
            display: "hice, haré",
          },
          traps: [
            { spec: { type: "text", accept: ["hice, haceré", "hice haceré"] }, feedback: "*hacer* uses shortened irregular Simple Future stem **har-** → **haré**!" },
            { spec: { type: "text", accept: ["hizo, haré", "hizo haré"] }, feedback: "*hizo* is *él/ella*; the *yo* preterite is **hice**." },
          ],
          hints: [
            "Preterite *yo* of *hacer*: strong irregular, zero accents.",
            "Simple Future *yo* of *hacer*: short stem **har-** + accented *-é*.",
          ],
          solution: [
            "Preterite *yo*: **hice** (no accent).",
            "Simple Future *yo*: **haré** (accent on *é*).",
          ],
        },
        {
          id: "four-tenses-grammar-p2-q10",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "mixing-four-tenses",
          strategy: "Identify all four tenses inside a Year 9 reading paragraph",
          question:
            "Read Mateo's essay paragraph:\n\n*«Todos los días voy al instituto en autobús. Sin embargo, ayer llegué tarde porque perdí el autobús de las siete y media. Por eso, mañana voy a despertarme quince minutos antes y el próximo trimestre seré mucho más puntual.»*\n\nWhich verb in Mateo's paragraph is in the **Immediate Future**?",
          options: [
            "voy al instituto",
            "llegué tarde",
            "seré mucho más puntual",
            "voy a despertarme",
          ],
          answerIndex: 3,
          hints: [
            "Watch the trap: *voy al instituto* is just Present tense (*ir + al + noun*), NOT *ir + a + infinitive*!",
            "Find the exact structure *voy + a + infinitive*.",
          ],
          explanation: "**voy a despertarme** is the Immediate Future (*ir + a + infinitive*). *voy al instituto* is Present tense (*I go to school*), *llegué* is Preterite, and *seré* is Simple Future.",
        },
        {
          id: "four-tenses-grammar-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "preterite-tense-mastery",
          strategy: "Apply -ir preterite sandal shift (dormir o→u in ellos)",
          question: "Put *dormir* into the **ellos** preterite tense: «Anoche mis primos ___ en una tienda de campaña.»",
          answer: {
            type: "text",
            accept: ["durmieron"],
            display: "durmieron",
          },
          traps: [
            { spec: { type: "text", accept: ["dormieron"] }, feedback: "In the preterite *él/ellos* ('sandal'), *-ir* stem-changer *dormir* shifts *o → u* → **durmieron**!" },
            { spec: { type: "text", accept: ["duermieron"] }, feedback: "In the preterite sandal, *o* becomes **u** (NOT *ue*!) → **durmieron**." },
          ],
          hints: [
            "*dormir* is an *-ir* stem-changer, so in *él/ellos* preterite *o* shifts to *u*.",
            "Attach the regular *-er/-ir* *ellos* preterite ending *-ieron*.",
          ],
          solution: ["Shift *o → u* in the 3rd-person preterite → *durm-* + *-ieron* = **durmieron**."],
        },
        {
          id: "four-tenses-grammar-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "preterite-tense-mastery",
          strategy: "Translate four English past sentences testing accents & irregulars",
          marks: 4,
          question:
            "Translate all four completed past sentences into accurate Spanish (Preterite Tense):\n\n" +
            "1. Yesterday I played football.\n" +
            "2. Last week we went to Barcelona.\n" +
            "3. My sister made a cake (*un pastel*).\n" +
            "4. I took (*sacar*) lots of photos.",
          modelAnswer:
            "Ayer jugué al fútbol. La semana pasada fuimos a Barcelona. Mi hermana hizo un pastel. Saqué muchas fotos.",
          markScheme: [
            {
              point: "Sentence 1: jugué (-gar → -gué spelling change with accent)",
              keywords: ["jugue"],
            },
            {
              point: "Sentence 2: fuimos a Barcelona (preterite nosotros of ir)",
              keywords: ["fuimos a barcelona"],
            },
            {
              point: "Sentence 3: hizo un pastel (irregular él/ella preterite of hacer)",
              keywords: ["hizo un pastel", "hizo una tarta"],
            },
            {
              point: "Sentence 4: saqué (-car → -qué spelling change with accent)",
              keywords: ["saque muchas fotos", "saque fotos"],
            },
          ],
          commonError: "Writing *jugé / sacé* without *-gu- / -qu-*, or writing *hico* instead of **hizo**.",
          hints: [
            "Apply *-gar → -gué* on *jugar* and *-car → -qué* on *sacar*.",
            "Use *fuimos* (*ir*, nosotros) and *hizo* (*hacer*, ella — zero accents!).",
          ],
        },
        {
          id: "four-tenses-grammar-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "immediate-vs-simple-future",
          strategy: "Translate four future sentences testing ir a + inf. and irregular stems",
          marks: 4,
          question:
            "Translate all four future sentences into accurate Spanish:\n\n" +
            "1. Tomorrow I am going to study Spanish. (Immediate Future)\n" +
            "2. Next year I will have more free time. (Simple Future)\n" +
            "3. Next summer we will go to Spain. (Simple Future)\n" +
            "4. On Saturday there will be a party. (Simple Future)",
          modelAnswer:
            "Mañana voy a estudiar español. El año que viene tendré más tiempo libre. El próximo verano iremos a España. El sábado habrá una fiesta.",
          markScheme: [
            {
              point: "Sentence 1: voy a estudiar (Immediate Future with 'a')",
              keywords: ["voy a estudiar"],
            },
            {
              point: "Sentence 2: tendré (irregular Simple Future stem tendr-)",
              keywords: ["tendre"],
            },
            {
              point: "Sentence 3: iremos (regular Simple Future nosotros of ir, no accent)",
              keywords: ["iremos"],
            },
            {
              point: "Sentence 4: habrá (irregular Simple Future of haber)",
              keywords: ["habra"],
            },
          ],
          commonError: "Dropping *a* in *voy a estudiar*, writing *teneré* instead of **tendré**, or adding an accent to *iremos*.",
          hints: [
            "Sentence 1 uses *voy a + infinitive*; Sentences 2–4 use one-word Simple Future.",
            "Remember *tendré* (*tendr-*), *iremos* (regular *ir*, NO accent on *-emos*!), and *habrá* (*habr-*).",
          ],
        },
        {
          id: "four-tenses-grammar-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "mixing-four-tenses",
          strategy: "Weave all four core Year 9 tenses smoothly into one cohesive paragraph",
          marks: 5,
          question:
            "Write a cohesive 4-sentence Year 9 Spanish paragraph (60–80 words) about **holidays or free time** that showcases ALL FOUR core tenses accurately:\n" +
            "1. Sentence 1 — **Present Tense** with a habitual time marker (e.g. normally, always, every year)\n" +
            "2. Sentence 2 — **Preterite Tense** with a past time marker (e.g. last year, yesterday, last summer)\n" +
            "3. Sentence 3 — **Immediate Future** (*ir + a + infinitive*) with a near-future marker\n" +
            "4. Sentence 4 — **Simple Future** (including at least ONE irregular stem verb) with a future marker\n" +
            "5. At least TWO varied Spanish connectives",
          modelAnswer:
            "Normalmente en verano voy a la playa con mi familia porque me encanta nadar. Sin embargo, el año pasado fuimos a la montaña y saqué fotos impresionantes. Este fin de semana voy a descansar y vamos a ver una película en casa. Además, el próximo año viajaré a Madrid donde tendré la oportunidad de practicar español y haré nuevos amigos.",
          markScheme: [
            {
              point: "Present tense sentence with clear habitual marker",
              keywords: ["normalmente", "siempre", "todos los anos", "todos los dias", "los fines de semana"],
            },
            {
              point: "Preterite tense narration with past verb",
              keywords: ["fui", "fuimos", "vi", "saque", "jugue", "comi", "visite", "nade", "hice", "tuve", "estuve", "compre", "viaje"],
            },
            {
              point: "Accurate Immediate Future (ir + a + infinitive)",
              keywords: ["voy a", "vamos a", "van a"],
            },
            {
              point: "Accurate irregular Simple Future verb (tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, habr-)",
              keywords: ["tendre", "tendremos", "hare", "haremos", "podre", "podremos", "saldre", "querre", "sabre", "vendre", "habra"],
            },
            {
              point: "At least one strong pivot/development connective",
              keywords: ["sin embargo", "ademas", "por eso", "aunque", "en cambio", "por lo tanto"],
            },
          ],
          commonError: "Using only *voy a + inf.* for both future sentences and forgetting to include an irregular Simple Future stem.",
          hints: [
            "Plan one sentence per tense: *Normalmente… → Sin embargo, el año pasado… → Este fin de semana voy a… → Además, el próximo año tendré / haré…*",
            "Proofread every accent: regular preterite (*-é/-í/-ó*), Simple Future (*-é/-ás/-á/-án*), and zero accent on *fui / fue / -emos*!",
          ],
        },
        {
          id: "four-tenses-grammar-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "mixing-four-tenses",
          strategy: "Translate four high-trap sentences testing all four Year 9 pitfalls",
          marks: 4,
          question:
            "Translate these four exam-trap sentences into 100% accurate Spanish (watch out for boot verbs, *-gar* preterites, *ir a + infinitive*, and irregular future stems):\n\n" +
            "1. Normally we can (*poder*) play tennis on Saturdays.\n" +
            "2. Yesterday I arrived (*llegar*) at eight o'clock.\n" +
            "3. Tonight we are going to eat tapas.\n" +
            "4. Next year I will leave (*salir*) early every morning.",
          modelAnswer:
            "Normalmente podemos jugar al tenis los sábados. Ayer llegué a las ocho. Esta noche vamos a comer tapas. El año que viene saldré temprano todas las mañanas.",
          markScheme: [
            {
              point: "Sentence 1: podemos jugar (nosotros outside the o→ue boot)",
              keywords: ["podemos jugar"],
            },
            {
              point: "Sentence 2: llegué (-gar → -gué spelling change with accent)",
              keywords: ["llegue"],
            },
            {
              point: "Sentence 3: vamos a comer (Immediate Future with mandatory 'a')",
              keywords: ["vamos a comer"],
            },
            {
              point: "Sentence 4: saldré (irregular Add-D Simple Future stem saldr-)",
              keywords: ["saldre"],
            },
          ],
          commonError: "Writing *puedemos*, *llegé*, *vamos comer*, or *saliré* — the four most frequent Year 9 grammar slips!",
          hints: [
            "Sentence 1: *nosotros* sits outside the boot (*podemos*, NOT *puedemos*!).",
            "Sentence 2 uses *-gar → -gué*, Sentence 3 needs *a* in *vamos a comer*, and Sentence 4 uses Add-D stem *saldr-*.",
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard Year 9 mastery problems, all 3-step hints!)
  // =========================================================================
  challenge: [
    {
      id: "four-tenses-grammar-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "present-tense-mastery",
      strategy: "Master double-irregular yo-go + boot verb venir",
      question:
        "Write the **yo**, **tú**, and **nosotros** present-tense forms of *venir* (*to come*), separated by commas (3 words).",
      answer: {
        type: "text",
        accept: ["vengo, vienes, venimos", "vengo vienes venimos"],
        display: "vengo, vienes, venimos",
      },
      traps: [
        { spec: { type: "text", accept: ["vengo, vienes, vienimos", "vengo vienes vienimos"] }, feedback: "*nosotros* sits OUTSIDE the *e→ie* boot → **venimos**, never *vienimos*!" },
        { spec: { type: "text", accept: ["vieno, vienes, venimos"] }, feedback: "*venir* is a *yo-go* verb in the *yo* form → **vengo**!" },
      ],
      hints: [
        "*venir* combines TWO patterns: *yo-go* in the *yo* form, and *e→ie* boot in *tú, él, ellos*.",
        "Remember *nosotros* sits outside the boot and *venir* is an *-ir* verb (*-imos*).",
        "Check all three words in order: *yo* (*-go*), *tú* (*ie + -es*), *nosotros* (*e + -imos*).",
      ],
      solution: [
        "*yo* (*yo-go*): **vengo**.",
        "*tú* (*e→ie* inside boot): **vienes**.",
        "*nosotros* (outside boot, *-ir*): **venimos**.",
      ],
    },
    {
      id: "four-tenses-grammar-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "preterite-tense-mastery",
      strategy: "Distinguish j-stem preterite decir (dijeron) and strong irregular poner (puso)",
      question:
        "Complete BOTH preterite verbs separated by a comma: «Ayer mi padre ___ (*poner*) la mesa y mis hermanos ___ (*decir*) gracias.»",
      answer: {
        type: "text",
        accept: ["puso, dijeron", "puso dijeron"],
        display: "puso, dijeron",
      },
      traps: [
        { spec: { type: "text", accept: ["puso, dijieron", "puso dijieron"] }, feedback: "*j*-stem preterites (*dij-, traj-*) drop the *i* in *ellos* → **dijeron**, NEVER *dijieron*!" },
        { spec: { type: "text", accept: ["ponió, dijeron", "ponió dijeron"] }, feedback: "*poner* is a strong irregular preterite with stem **pus-** → **puso** (no accent!)." },
      ],
      hints: [
        "*poner* uses the strong preterite stem **pus-** with zero accents (*puso*).",
        "*decir* uses the *j*-stem **dij-**.",
        "Remember the *j*-stem rule in *ellos*: drop the *i* from *-ieron* → *-eron*!",
      ],
      solution: [
        "*poner* (*él*): strong stem **pus-** + *-o* → **puso** (no accent).",
        "*decir* (*ellos*): *j*-stem **dij-** + *-eron* (no *i*!) → **dijeron**.",
      ],
    },
    {
      id: "four-tenses-grammar-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "immediate-vs-simple-future",
      strategy: "Audit all three irregular future stem families simultaneously",
      question: "Which group of **four** Simple Future *nosotros* forms is 100% accurate (both stems AND accents)?",
      options: [
        "tendremos · haremos · podremos · saldremos",
        "tendrémos · harémos · podrémos · saldrémos",
        "teneremos · haremos · podremos · saliremos",
        "tendremos · haceremos · poderemos · saldremos",
      ],
      answerIndex: 0,
      hints: [
        "Check every irregular stem: *tener → tendr-*, *hacer → har-*, *poder → podr-*, *salir → saldr-*.",
        "Apply the 5-out-of-6 accent rule to *nosotros* (**-emos**).",
        "Eliminate any choice with an illegal accent on *-emos* or a regular infinitive stem.",
      ],
      explanation:
        "**tendremos · haremos · podremos · saldremos** combines all four irregular stems with unaccented **-emos** — the only Simple Future ending without a written accent.",
    },
    {
      id: "four-tenses-grammar-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Transform a high-frequency irregular verb (poder) across all 4 core tenses",
      question:
        "Write the **yo** forms of *poder* across all FOUR Year 9 tenses in order (**Present, Preterite, Immediate Future, Simple Future**), separated by commas.",
      answer: {
        type: "text",
        accept: ["puedo, pude, voy a poder, podré", "puedo pude voy a poder podré"],
        display: "puedo, pude, voy a poder, podré",
      },
      traps: [
        { spec: { type: "text", accept: ["puedo, pude, voy a poder, poderé"] }, feedback: "*poder* drops the *-e-* in Simple Future → **podré**, not *poderé*!" },
        { spec: { type: "text", accept: ["puedo, podí, voy a poder, podré"] }, feedback: "*poder* is a strong irregular preterite → **pude**, not *podí*!" },
      ],
      hints: [
        "Present *yo* is inside the *o→ue* boot (*puedo*); Preterite *yo* uses strong stem *pud-* with zero accents.",
        "Immediate Future uses *voy a* + full infinitive *poder*.",
        "Simple Future drops the *-e-* to form irregular stem *podr-* + accented *-é*.",
      ],
      solution: [
        "Present (*o→ue*): **puedo**",
        "Preterite (strong irregular): **pude**",
        "Immediate Future: **voy a poder**",
        "Simple Future (Drop-E stem): **podré**",
      ],
    },
    {
      id: "four-tenses-grammar-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Apply reflexive pronoun placement across Present, Preterite, and Simple Future",
      question:
        "Conjugate reflexive *levantarse* (*yo*) in **Preterite** and **Simple Future**, separated by a comma (e.g. two short phrases).",
      answer: {
        type: "text",
        accept: ["me levanté, me levantaré", "me levanté me levantaré"],
        display: "me levanté, me levantaré",
      },
      traps: [
        { spec: { type: "text", accept: ["levanté, levantaré"] }, feedback: "Don't drop the reflexive pronoun **me** for *levantarse* → **me levanté, me levantaré**!" },
        { spec: { type: "text", accept: ["me levanto, me levantaré"] }, feedback: "*me levanto* is Present; the first form asked for is **Preterite** (**me levanté**)!" },
      ],
      hints: [
        "For *yo*, place reflexive pronoun **me** directly BEFORE the conjugated verb in simple tenses.",
        "Preterite *yo* drops *-ar* and adds accented *-é* (*me levanté*).",
        "Simple Future *yo* keeps the full base infinitive *levantar* and adds accented *-é* (*me levantaré*).",
      ],
      solution: [
        "Preterite (*yo*): **me levanté**.",
        "Simple Future (*yo*): **me levantaré**.",
      ],
    },
    {
      id: "four-tenses-grammar-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Perform a forensic proofread on 4 dense multi-tense sentences",
      question: "Only ONE of these four complex multi-tense sentences has **zero** grammar, spelling, or accent mistakes. Which one is completely spotless?",
      options: [
        "Estudio guitarra desde hace dos años, ayer toqué en un concierto, mañana voy descansar y el año que viene darémos más conciertos.",
        "Estudié guitarra desde hace dos años, ayer tocé en un concierto, mañana voy a descansar y el año que viene daré más conciertos.",
        "Estudio guitarra desde hace dos años, ayer toqué en un concierto, mañana voy a descansar y el año que viene daré más conciertos.",
        "Estudio guitarra desde hace dos años, ayer toque en un concierto, mañana voy a descansar y el año que viene diré más conciertos.",
      ],
      answerIndex: 2,
      hints: [
        "Check four checkpoints in each option: (1) Present + *desde hace*, (2) *-car → -qué* with accent on *toqué*, (3) *voy a + inf.*, (4) *daré* (I will give) vs *diré* (I will say).",
        "Notice how missing an accent on *toque* turns it into subjunctive, and *diré* comes from *decir*, not *dar*!",
        "Also verify that *voy* is followed by *a* and *daré* matches *yo*.",
      ],
      explanation:
        "**Estudio guitarra desde hace dos años, ayer toqué en un concierto, mañana voy a descansar y el año que viene daré más conciertos.** passes all four forensic checks: Present + *desde hace* (**estudio**), *-car → -qué* (**toqué**), **voy a descansar**, and regular Simple Future of *dar* (**daré**).",
    },
    {
      id: "four-tenses-grammar-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Build a top-band 4-tense lifestyle transformation paragraph with varied subjects",
      marks: 5,
      question:
        "Write an extended Year 9 Spanish paragraph (75–95 words) about **healthy living or school life** using ALL FOUR core tenses AND at least TWO different grammatical persons (e.g. *yo* AND *nosotros / mi familia / mis amigos*). You must include:\n" +
        "1. Present tense with a boot verb OR *desde hace*\n" +
        "2. Preterite tense with an irregular verb (*fui, hice, tuve, estuve, vi, pude*) OR a *-car/-gar/-zar* verb\n" +
        "3. Immediate Future (*ir + a + infinitive*)\n" +
        "4. Simple Future with at least ONE irregular stem (*tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, habr-*)\n" +
        "5. A second subject person (*nosotros, él/ella,* or *ellos*) conjugated accurately alongside *yo*",
      modelAnswer:
        "Normalmente juego al baloncesto con mis amigos y entreno desde hace tres años. Sin embargo, el fin de semana pasado estuve muy ocupado, comí comida rápida y mis padres me dijeron que necesito descansar más. Por eso, esta tarde vamos a preparar una cena sana en casa y voy a acostarme temprano. En el futuro, haré ejercicio cuatro veces por semana y tendremos un estilo de vida mucho más equilibrado.",
      markScheme: [
        {
          point: "Present tense with boot verb or ongoing duration (desde hace)",
          keywords: ["desde hace", "juego", "prefiero", "duermo", "puedo", "quiero", "empiezo", "vuelvo", "almuerzo"],
        },
        {
          point: "Preterite tense with irregular or -car/-gar/-zar verb",
          keywords: ["fui", "fuimos", "hice", "hizo", "tuve", "tuvo", "estuve", "estuvo", "vi", "pude", "dijeron", "jugue", "saque", "llegue", "practique", "empece"],
        },
        {
          point: "Immediate Future (ir + a + infinitive)",
          keywords: ["voy a", "vamos a", "va a", "van a"],
        },
        {
          point: "Simple Future with irregular stem",
          keywords: ["tendre", "tendremos", "tendran", "hare", "haremos", "haran", "podre", "podremos", "saldre", "querre", "sabre", "vendre", "habra"],
        },
        {
          point: "Second grammatical person (nosotros / él / ella / ellos) conjugated accurately",
          keywords: ["vamos a", "tendremos", "haremos", "podremos", "fuimos", "comimos", "dijeron", "entrenamos", "jugamos", "hizo", "tuvo", "estuvo", "van a"],
        },
      ],
      commonError: "Writing every single verb in the *yo* form (missing the multi-person stretch) or putting an accent on *tendremos / haremos*.",
      hints: [
        "Include *yo* AND at least one *nosotros* or *ellos* verb (e.g. *vamos a preparar*, *tendremos*, *mis amigos dijeron*).",
        "Check all 4 tenses are genuinely distinct: Present → Preterite → Immediate Future → Simple Future.",
        "Double-check accents: zero accents on *estuve / fui / dijeron / tendremos*, mandatory accents on *comí / haré*!",
      ],
    },
    {
      id: "four-tenses-grammar-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "mixing-four-tenses",
      strategy: "Translate a 4-sentence multi-tense mini-story with zero tense or accent slips",
      marks: 5,
      question:
        "Translate this 4-sentence English story into spotless Spain-standard Spanish:\n\n" +
        "1. Every summer we travel to Spain, and we prefer (*preferir*) the coast.\n" +
        "2. Last July I went to Valencia, played (*jugar*) beach volleyball, and had (*tener*) an unforgettable time (it was unforgettable).\n" +
        "3. This weekend I am going to buy a new suitcase.\n" +
        "4. Next year we will be able (*poder*) to visit Seville and there will be a music festival.",
      modelAnswer:
        "Todos los veranos viajamos a España y preferimos la costa. En julio pasado fui a Valencia, jugué al vóley playa y fue inolvidable. Este fin de semana voy a comprar una maleta nueva. El año que viene podremos visitar Sevilla y habrá un festival de música.",
      markScheme: [
        {
          point: "Sentence 1: viajamos + outside-the-boot preferimos",
          keywords: ["preferimos"],
        },
        {
          point: "Sentence 2: irregular preterites fui / fue + -gar spelling change jugué",
          keywords: ["jugue"],
        },
        {
          point: "Sentence 2: zero-accent preterite fui or fue (or tuve)",
          keywords: ["fui a valencia", "fue inolvidable", "tuve"],
        },
        {
          point: "Sentence 3: Immediate Future voy a comprar",
          keywords: ["voy a comprar"],
        },
        {
          point: "Sentence 4: irregular Simple Futures podremos (no accent!) and habrá",
          keywords: ["podremos", "habra"],
        },
      ],
      commonError: "Writing *prefierimos* (stem-changing *nosotros*), *jugé* (missing *u*), *podrémos* (illegal accent on *-emos*), or *haberá* instead of **habrá**.",
      hints: [
        "Sentence 1: *nosotros* sits outside the boot → *preferimos* (no *ie*!).",
        "Sentence 2: *fui* (no accent), *jugué* (*-gar → -gué*), *fue* (no accent).",
        "Sentence 3–4: *voy a comprar*, unaccented *podremos* (*podr-* + *-emos*), and *habrá* (*habr-* + *-á*).",
      ],
    },
  ],
};
