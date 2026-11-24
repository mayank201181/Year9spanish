import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1 — Core Mastery: Present, Preterite, Near & Simple Future
  // =========================================================================
  {
    id: "four-tenses-grammar-m1",
    title: "MCQ Paper 1 — Core Forms Across All Four Tenses",
    questions: [
      {
        id: "four-tenses-grammar-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "present-tense-mastery",
        strategy: "Check boot verb outside-the-boot rule",
        question: "Choose the correct **nosotros** present-tense form of *poder* (*to be able to*): «Nosotros ___ estudiar juntos hoy.»",
        options: [
          "puedemos",
          "podemos",
          "podimos",
          "pueden",
        ],
        answerIndex: 1,
        hints: [
          "*poder* is an *o→ue* boot verb — does *nosotros* sit inside or outside the boot?",
        ],
        explanation:
          "**podemos** is correct because *nosotros* sits outside the boot, so the stem stays *pod-* and takes the *-er* ending *-emos*. *puedemos* wrongly stem-changes *nosotros*, and *podimos* uses an *-ir* ending.",
      },
      {
        id: "four-tenses-grammar-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "present-tense-mastery",
        strategy: "Check u→ue boot stem change in jugar",
        question: "Complete with the **ellos** present-tense form of *jugar*: «Los sábados mis amigos ___ al tenis.»",
        options: [
          "jugan",
          "juegon",
          "jueguen",
          "juegan",
        ],
        answerIndex: 3,
        hints: [
          "*jugar* is the only *u→ue* boot verb in Spanish, and *ellos* sits inside the boot.",
        ],
        explanation:
          "**juegan** applies *u→ue* inside the boot and adds the regular *-ar* *ellos* ending *-an*. *jugan* forgets the stem change, and *jueguen* is the subjunctive.",
      },
      {
        id: "four-tenses-grammar-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Spot yo-go verbs in the present tense",
        question: "Which row shows **all three** *yo* present-tense forms of *hacer*, *salir*, and *poner* accurately?",
        options: [
          "hago · salgo · pongo",
          "haco · salo · pono",
          "hago · salo · pongo",
          "hice · salí · puse",
        ],
        answerIndex: 0,
        hints: [
          "All three verbs belong to the *yo-go* family in the present tense.",
          "Make sure none of the forms have slipped into the preterite tense!",
        ],
        explanation:
          "**hago · salgo · pongo** are the three *yo-go* present forms. *haco / salo / pono* ignore the *-go* irregularity, while *hice / salí / puse* are preterite forms.",
      },
      {
        id: "four-tenses-grammar-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Use present tense + desde hace for ongoing duration",
        question: "How do you translate \"I have lived in Singapore for four years\" (and still live there) into natural Spanish?",
        options: [
          "Viví en Singapur desde hace cuatro años.",
          "Viviré en Singapur desde hace cuatro años.",
          "Vivo en Singapur desde hace cuatro años.",
          "Voy a vivir en Singapur desde hace cuatro años.",
        ],
        answerIndex: 2,
        hints: [
          "Notice the action started in the past and is **still true right now**.",
          "Which Spanish tense pairs with *desde hace* to express an ongoing duration?",
        ],
        explanation:
          "**Vivo en Singapur desde hace cuatro años.** pairs the **present tense** (*vivo*) with **desde hace** to express an action that began in the past and continues into the present.",
      },
      {
        id: "four-tenses-grammar-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Check accents on regular preterite yo vs él/ella",
        question: "Translate into English: *«Ayer Sofía **habló** con su profesora y **comió** en la cantina.»*",
        options: [
          "Yesterday Sofía spoke with her teacher and ate in the canteen.",
          "Yesterday I spoke with my teacher and ate in the canteen.",
          "Tomorrow Sofía will speak with her teacher and eat in the canteen.",
          "Normally Sofía speaks with her teacher and eats in the canteen.",
        ],
        answerIndex: 0,
        hints: [
          "Look at the time clue *Ayer* and the endings **-ó** and **-ió**.",
          "Remember *-ó* (accented) is *él/ella* preterite, NOT *yo* present (*hablo*)!",
        ],
        explanation:
          "**Yesterday Sofía spoke with her teacher and ate in the canteen.** matches *Ayer* + 3rd-person singular preterite **habló** (*-ar* → *-ó*) and **comió** (*-er* → *-ió*).",
      },
      {
        id: "four-tenses-grammar-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Apply -car/-gar/-zar yo preterite spelling rule",
        question: "Complete with the **yo** preterite of *sacar* and *llegar*: «Ayer ___ fotos y ___ tarde al hotel.»",
        options: [
          "sacé / llegé",
          "saqué / llegé",
          "sacé / llegué",
          "saqué / llegué",
        ],
        answerIndex: 3,
        hints: [
          "*-car* changes to *-qué* and *-gar* changes to *-gué* in the *yo* preterite.",
          "Both spelling changes protect the hard *k* and *g* sound before *-é*.",
        ],
        explanation:
          "**saqué / llegué** applies both *-car → -qué* (*sacar → saqué*) and *-gar → -gué* (*llegar → llegué*). Writing *sacé* or *llegé* changes the pronunciation and is incorrect.",
      },
      {
        id: "four-tenses-grammar-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Zero-accent strong irregular preterites",
        question: "Choose the completely accurate preterite sentence for \"Last week I went to Spain and had a great time (it was fantastic)\":",
        options: [
          "La semana pasada fuí a España y fué fantástico.",
          "La semana pasada fui a España y fue fantástico.",
          "La semana pasada fue a España y fui fantástico.",
          "La semana pasada iba a España y seré fantástico.",
        ],
        answerIndex: 1,
        hints: [
          "Check which form means 'I went' (*yo*) and which means 'it was' (*él/ella*).",
          "Do one-syllable irregular preterites (*fui, fue*) take written accents?",
        ],
        explanation:
          "**La semana pasada fui a España y fue fantástico.** uses **fui** (*I went*) and **fue** (*it was*) with **zero accents**. *fuí / fué* have incorrect accents, and swapping *fue / fui* reverses the subjects.",
      },
      {
        id: "four-tenses-grammar-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Check hacer (él/ella → hizo) and tener (yo → tuve)",
        question: "Complete in the preterite: «Ayer yo ___ (*tener*) mucho trabajo, pero mi hermano ___ (*hacer*) la cena.»",
        options: [
          "tení / hació",
          "tuvo / hice",
          "tuve / hizo",
          "tuvé / hico",
        ],
        answerIndex: 2,
        hints: [
          "Both *tener* and *hacer* are strong irregular preterites with zero accents.",
          "In *él/ella* of *hacer*, *c* changes to *z* before *o*.",
        ],
        explanation:
          "**tuve / hizo** is exact: *tener* (*yo*) = **tuve** and *hacer* (*él*) = **hizo**, with zero accents. *tuvé* adds an illegal accent and *hico* fails to change *c → z*.",
      },
      {
        id: "four-tenses-grammar-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "immediate-vs-simple-future",
        strategy: "Never drop 'a' in ir + a + infinitive",
        question: "How do you say \"We are going to travel to Granada\" using the Immediate Future?",
        options: [
          "Vamos viajar a Granada.",
          "Vamos a viajamos a Granada.",
          "Iremos a viajar a Granada.",
          "Vamos a viajar a Granada.",
        ],
        answerIndex: 3,
        hints: [
          "Recall the 3-part immediate future formula: present of *ir* + *a* + infinitive.",
        ],
        explanation:
          "**Vamos a viajar a Granada.** includes present *vamos*, the mandatory preposition **a**, and the unchanged infinitive *viajar*. Omitting *a* or conjugating *viajamos* breaks the structure.",
      },
      {
        id: "four-tenses-grammar-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Simple future keeps the full infinitive + 5/6 accents",
        question: "Complete in the **Simple Future** (*nosotros*): «El próximo verano ___ (*viajar*) en tren y ___ (*comer*) paella.»",
        options: [
          "viajaremos / comeremos",
          "viajarémos / comerémos",
          "viajamos / comemos",
          "viajé / comí",
        ],
        answerIndex: 0,
        hints: [
          "Attach the *nosotros* simple future ending *-emos* to each full infinitive.",
          "Remember the 5-out-of-6 rule: does *-emos* take a written accent?",
        ],
        explanation:
          "**viajaremos / comeremos** keeps both full infinitives and adds **-emos** with **NO accent** (the only Simple Future ending without a tilde!). *viajarémos* adds an illegal accent.",
      },
      {
        id: "four-tenses-grammar-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Memorise irregular future stems tendr- and har-",
        question: "Complete in the **Simple Future** (*yo*): «El año que viene ___ (*tener*) más tiempo y ___ (*hacer*) yoga.»",
        options: [
          "teneré / haceré",
          "tendre / hare",
          "tendré / haré",
          "tuve / hice",
        ],
        answerIndex: 2,
        hints: [
          "Both *tener* and *hacer* have irregular simple future stems (*tendr-* and *har-*).",
          "Check the mandatory accent on the *yo* simple future ending *-é*.",
        ],
        explanation:
          "**tendré / haré** pairs the irregular stems **tendr-** and **har-** with accented **-é**. *teneré / haceré* ignore the irregular stems, and *tendre / hare* omit the required accents.",
      },
      {
        id: "four-tenses-grammar-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Use irregular stem habr- for 'there will be'",
        question: "How do you translate \"Tomorrow there will be a concert in the square\" using Simple Future?",
        options: [
          "Mañana hay un concierto en la plaza.",
          "Mañana habrá un concierto en la plaza.",
          "Mañana haberá un concierto en la plaza.",
          "Mañana hubo un concierto en la plaza.",
        ],
        answerIndex: 1,
        hints: [
          "The verb *haber* ('there is/will be') uses the irregular drop-*e* future stem **habr-**.",
          "Attach the 3rd-person singular future ending **-á**.",
        ],
        explanation:
          "**Mañana habrá un concierto en la plaza.** uses irregular stem **habr-** + **-á** (*there will be*). *hay* is present, *hubo* is past, and *haberá* does not exist.",
      },
      {
        id: "four-tenses-grammar-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mixing-four-tenses",
        strategy: "Use the R-Test: compré (Past) vs compraré (Future)",
        question: "Compare **compré** and **compraré**. Which English pair matches them in exact order?",
        options: [
          "I bought / I will buy",
          "I will buy / I bought",
          "I buy / he bought",
          "he bought / I will buy",
        ],
        answerIndex: 0,
        hints: [
          "Apply the R-Test: which word keeps the full infinitive *comprar* before *-é*?",
          "The form that chopped off *-ar* before adding *-é* is the preterite.",
        ],
        explanation:
          "**I bought / I will buy** matches **compré** (Preterite: stem *compr-* + *-é*) and **compraré** (Simple Future: full infinitive *comprar* + *-é*).",
      },
      {
        id: "four-tenses-grammar-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mixing-four-tenses",
        strategy: "Match time marker to exact verb tense",
        question: "Which verb correctly completes the sentence? «El fin de semana pasado ___ (*ir*) al museo con mi clase.»",
        options: [
          "voy",
          "voy a ir",
          "iré",
          "fui",
        ],
        answerIndex: 3,
        hints: [
          "Look at the time expression *El fin de semana pasado* ('last weekend').",
          "Which form of *ir* is the *yo* preterite?",
        ],
        explanation:
          "**fui** is the *yo* preterite matching *El fin de semana pasado*. *voy* is present, *voy a ir* is immediate future, and *iré* is simple future.",
      },
      {
        id: "four-tenses-grammar-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Verify tense alignment across a 4-verb sentence",
        question: "Which sentence aligns **every** verb tense accurately with its time marker?",
        options: [
          "Normalmente fui en bici, pero ayer voy en bus y mañana iré a pie.",
          "Normalmente voy en bici, pero ayer fui en bus y mañana fui a pie.",
          "Normalmente voy en bici, pero ayer fui en bus y mañana iré a pie.",
          "Normalmente iré en bici, pero ayer voy en bus y mañana fui a pie.",
        ],
        answerIndex: 2,
        hints: [
          "Check each of the three signposts: *Normalmente* (Present), *ayer* (Preterite), *mañana* (Future).",
          "Trace the *yo* forms of *ir* across those three tenses: *voy → fui → iré*.",
        ],
        explanation:
          "**Normalmente voy en bici, pero ayer fui en bus y mañana iré a pie.** matches Present **voy** (*normalmente*), Preterite **fui** (*ayer*), and Simple Future **iré** (*mañana*).",
      },
    ],
  },

  // =========================================================================
  // PAPER M2 — Irregulars, Accent Traps & Reading Tense Shifts
  // =========================================================================
  {
    id: "four-tenses-grammar-m2",
    title: "MCQ Paper 2 — Irregular Stems, Accent Traps & Tense Reading",
    questions: [
      {
        id: "four-tenses-grammar-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Check e→i boot verb pedir across persons",
        question: "Complete both present-tense forms of *pedir* (*e→i*): «Yo siempre ___ agua, pero nosotros ___ zumo.»",
        options: [
          "pedo / pedimos",
          "pido / pidimos",
          "pido / pedimos",
          "piedo / pedimos",
        ],
        answerIndex: 2,
        hints: [
          "*pedir* changes *e → i* inside the boot (*yo*), NOT *e → ie*.",
          "Remember *nosotros* sits outside the boot so it keeps its original *e*!",
        ],
        explanation:
          "**pido / pedimos** correctly changes *e → i* in *yo* (**pido**) and keeps *nosotros* regular outside the boot (**pedimos**). *pidimos* wrongly stem-changes *nosotros*.",
      },
      {
        id: "four-tenses-grammar-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Check accents on present tense of estar",
        question: "Which set of present-tense forms of **estar** has 100% accurate written accents?",
        options: [
          "estoy · estás · está · estamos · estáis · están",
          "estoy · estas · esta · estámos · estais · estan",
          "estóy · estás · está · estámos · estáis · están",
          "estoy · estás · esta · estamos · estais · están",
        ],
        answerIndex: 0,
        hints: [
          "In *estar*, the accent falls on the final syllable in *tú, él/ella, vosotros, ellos*.",
          "Neither *estoy* nor *estamos* takes a written accent.",
        ],
        explanation:
          "**estoy · estás · está · estamos · estáis · están** places accents on all four ending-stressed forms (*estás, está, estáis, están*) while leaving *estoy* and *estamos* unaccented.",
      },
      {
        id: "four-tenses-grammar-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Confirm -car/-gar/-zar changes happen in yo ONLY",
        question: "Complete both preterite forms of *jugar*: «Ayer yo ___ al fútbol y mi hermana ___ al baloncesto.»",
        options: [
          "jugé / jugó",
          "jugué / juguó",
          "juegué / jugó",
          "jugué / jugó",
        ],
        answerIndex: 3,
        hints: [
          "In the preterite, *-gar → -gué* applies in *yo* ONLY (before *-é*), never before *-ó*!",
          "Does *jugar* have a *u→ue* stem change in the preterite? No — boot changes are present tense!",
        ],
        explanation:
          "**jugué / jugó** uses *-gué* in *yo* (protecting hard *g* before *é*) and regular **jugó** in *ella* (since *g* before *o* is already hard!). *juegué* wrongly imports the present stem change.",
      },
      {
        id: "four-tenses-grammar-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Check preterite of ver and dar (zero accents!)",
        question: "Complete in the preterite: «Anoche ___ (*ver*, *yo*) un documental y mi padre me ___ (*dar*, *él*) un consejo.»",
        options: [
          "ví / dió",
          "vi / dio",
          "vio / di",
          "veo / da",
        ],
        answerIndex: 1,
        hints: [
          "Check the subject of each verb: *yo* for *ver*, and *mi padre* (*él*) for *dar*.",
          "Monosyllable preterites (*vi, vio, di, dio*) NEVER carry written accents!",
        ],
        explanation:
          "**vi / dio** matches *yo* (**vi**) and *él* (**dio**) with zero accents. *ví / dió* have outdated/incorrect accents, and *vio / di* swap the two subjects.",
      },
      {
        id: "four-tenses-grammar-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Check strong irregular preterites estar & poder",
        question: "Which sentence accurately says \"Yesterday we were (*estar*) in Toledo and we could (*poder*) visit the cathedral\"?",
        options: [
          "Ayer estamos en Toledo y podemos visitar la catedral.",
          "Ayer estuvemos en Toledo y pudemos visitar la catedral.",
          "Ayer estuvimos en Toledo y pudimos visitar la catedral.",
          "Ayer estubimos en Toledo y podimos visitar la catedral.",
        ],
        answerIndex: 2,
        hints: [
          "What are the irregular preterite stems of *estar* (*estuv-*) and *poder* (*pud-*)?",
          "All strong irregular preterites take the *-imos* ending for *nosotros* (NOT *-emos*!).",
        ],
        explanation:
          "**Ayer estuvimos en Toledo y pudimos visitar la catedral.** pairs strong stems **estuv-** and **pud-** with the universal strong-preterite *nosotros* ending **-imos**.",
      },
      {
        id: "four-tenses-grammar-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Recognise all Add-D irregular future stems",
        question: "Which row shows **all three** *yo* Simple Future forms of *salir*, *venir*, and *poner* accurately?",
        options: [
          "saliré · veniré · poneré",
          "saldré · vendré · pondré",
          "saldro · vendro · pondro",
          "saldé · vendé · pondé",
        ],
        answerIndex: 1,
        hints: [
          "All three verbs belong to the Add-D future stem group (drop the theme vowel and insert *-d-* before *-r-*).",
          "Attach accented *-é* for *yo*.",
        ],
        explanation:
          "**saldré · vendré · pondré** use the exact Add-D irregular stems **saldr-, vendr-, pondr-** + **-é**. *saliré / veniré / poneré* wrongly treat them as regular.",
      },
      {
        id: "four-tenses-grammar-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Recognise Drop-E irregular future stems",
        question: "Complete in the Simple Future (*ellos*): «El año que viene mis primos ___ (*poder*) hablar español y ___ (*querer*) viajar a Perú.»",
        options: [
          "podrán / querrán",
          "poderán / quererán",
          "podran / querran",
          "pudieron / quisieron",
        ],
        answerIndex: 0,
        hints: [
          "*poder* → **podr-** and *querer* → **querr-** (notice the double *-rr-* in *querr-*!).",
          "Don't forget the accent on the *ellos* simple future ending *-án*!",
        ],
        explanation:
          "**podrán / querrán** uses Drop-E stems **podr-** and **querr-** + accented **-án**. *podran / querran* drop the required accents, and *pudieron / quisieron* are preterite.",
      },
      {
        id: "four-tenses-grammar-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Remember ir and ser are 100% REGULAR in Simple Future",
        question: "Complete in the Simple Future: «El próximo año yo ___ (*ir*) a Colombia y el viaje ___ (*ser*) increíble.»",
        options: [
          "fui / fue",
          "voy / es",
          "iría / sería",
          "iré / será",
        ],
        answerIndex: 3,
        hints: [
          "Even though *ir* and *ser* are super irregular in Present and Preterite, they are 100% REGULAR in the Simple Future!",
          "Keep full infinitives *ir* and *ser* and add *-é* (*yo*) and *-á* (*él/ella*).",
        ],
        explanation:
          "**iré / será** keeps the full infinitives *ir* and *ser* and adds **-é** and **-á**. *iría / sería* are conditional (*would go / would be*), not future.",
      },
      {
        id: "four-tenses-grammar-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Check reflexive pronoun placement in Immediate Future",
        question: "How do you say \"Tomorrow I am going to get up early\" (*levantarse*) in the Immediate Future?",
        options: [
          "Mañana voy a levanto temprano.",
          "Mañana voy a levantarme temprano.",
          "Mañana me voy levantar temprano.",
          "Mañana levantaré me temprano.",
        ],
        answerIndex: 1,
        hints: [
          "With *voy a + infinitive*, keep the verb in the infinitive and attach *me* to the end (*levantarme*) — or place *me* before *voy* (*me voy a levantar*).",
          "Never omit the *a* after *voy*!",
        ],
        explanation:
          "**Mañana voy a levantarme temprano.** (or *Me voy a levantar*) keeps *a* + infinitive and attaches reflexive **me** to the infinitive. Dropping *a* or conjugating *levanto* is incorrect.",
      },
      {
        id: "four-tenses-grammar-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mixing-four-tenses",
        strategy: "Read a multi-tense passage to identify exact timeframes",
        question:
          "Read Claudia's blog entry:\n\n*«Normalmente desayuno fruta y yogur. Sin embargo, ayer comí churros con chocolate en el centro. Mañana voy a cocinar una ensalada sana y el mes que viene correré mi primera carrera de cinco kilómetros.»*\n\nWhich activity happened in the **past**?",
        options: [
          "Cooking a healthy salad",
          "Running a 5 km race",
          "Eating churros with chocolate",
          "Having fruit and yoghurt for breakfast",
        ],
        answerIndex: 2,
        hints: [
          "Locate the past time marker (*ayer*) and preterite verb (*comí*).",
          "Check which verb is Present (*desayuno*), Near Future (*voy a cocinar*), and Simple Future (*correré*).",
        ],
        explanation:
          "**Eating churros with chocolate** is marked by *ayer* + preterite **comí**. Fruit and yoghurt is her normal routine (*normalmente desayuno*), the salad is tomorrow (*voy a cocinar*), and the 5 km race is next month (*correré*).",
      },
      {
        id: "four-tenses-grammar-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Distinguish hablo / habló / hablaré / hablé",
        question: "Which verb form means **\"he/she spoke\"**?",
        options: [
          "habló",
          "hablo",
          "hablé",
          "hablará",
        ],
        answerIndex: 0,
        hints: [
          "Check BOTH tense (past vs present vs future) AND person (*yo* vs *él/ella*).",
          "Look closely at the accent mark and whether the *-r-* is present.",
        ],
        explanation:
          "**habló** (accent on *ó*) is 3rd-person singular preterite (*he/she spoke*). *hablo* = *I speak*, *hablé* = *I spoke*, and *hablará* = *he/she will speak*.",
      },
      {
        id: "four-tenses-grammar-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Check saber → sabr- and decir → dir- in Simple Future",
        question: "Complete in the Simple Future: «Pronto tú ___ (*saber*) la verdad y yo te ___ (*decir*) todo.»",
        options: [
          "saberás / deciré",
          "supiste / dije",
          "sabes / digo",
          "sabrás / diré",
        ],
        answerIndex: 3,
        hints: [
          "*saber* drops *-e-* → **sabr-**; *decir* shortens to **dir-**.",
          "Match *tú* (*-ás*) and *yo* (*-é*) with written accents.",
        ],
        explanation:
          "**sabrás / diré** pairs irregular stems **sabr-** and **dir-** with accented **-ás** (*tú*) and **-é** (*yo*). *supiste / dije* are preterite, and *saberás / deciré* miss the irregular stems.",
      },
      {
        id: "four-tenses-grammar-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Track tense clues when nosotros -amos is identical in Present & Preterite",
        question:
          "Look at these two sentences:\n\n1. *Todos los domingos **cenamos** con nuestros abuelos.*\n2. *Anoche **cenamos** en un restaurante italiano.*\n\nWhy is the exact same verb form **cenamos** correct in BOTH sentences?",
        options: [
          "Because *cenar* is an irregular verb that never changes form.",
          "Because Spanish uses the present tense for every action with *anoche*.",
          "Because regular *-ar* *nosotros* ends in *-amos* in both Present and Preterite.",
          "Because *cenamos* is actually the immediate future form of *cenar*.",
        ],
        answerIndex: 2,
        hints: [
          "Compare the regular *-ar* *nosotros* ending in the Present tense and the Preterite tense.",
          "Notice how the time markers (*Todos los domingos* vs *Anoche*) tell the reader which tense is meant!",
        ],
        explanation:
          "Regular *-ar* (and *-ir*) verbs share identical *nosotros* forms (**-amos / -imos**) in Present and Preterite, so time markers (*todos los domingos* vs *anoche*) clarify the tense immediately.",
      },
      {
        id: "four-tenses-grammar-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "preterite-tense-mastery",
        strategy: "Spot -zar → -cé spelling change in empezar & almorzar",
        question: "Complete in the preterite (*yo*): «Ayer ___ (*almorzar*) a la una y ___ (*empezar*) el proyecto a las dos.»",
        options: [
          "almorzé / empezé",
          "almorcé / empecé",
          "almuercé / empiecé",
          "almorzó / empezó",
        ],
        answerIndex: 1,
        hints: [
          "In the *yo* preterite, *-zar* changes *z → c* before *-é*.",
          "Remember: *-ar* verbs NEVER stem-change (*o→ue* / *e→ie*) in the preterite!",
        ],
        explanation:
          "**almorcé / empecé** applies *-zar → -cé* without importing present-tense boot changes. *almuercé / empiecé* wrongly keep the present stem change, and *almorzé / empezé* break the *z→c* spelling rule.",
      },
      {
        id: "four-tenses-grammar-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Spot the ONE sentence with a tense error",
        question: "Three of these sentences are 100% accurate; **one** contains a tense or accent error. Which sentence is flawed?",
        options: [
          "El año que viene viajarémos a México con el colegio.",
          "Ayer estuve en el centro comercial y compré unos vaqueros.",
          "Normalmente prefiero las comedias, pero anoche vi una de terror.",
          "Este sábado vamos a visitar el museo y comeremos tapas después.",
        ],
        answerIndex: 0,
        hints: [
          "Scan every verb ending carefully for illegal accents!",
          "Remember the 5-out-of-6 accent rule in the Simple Future.",
        ],
        explanation:
          "**El año que viene viajarémos a México con el colegio.** is flawed because Simple Future *nosotros* (**-emos**) NEVER takes an accent — it must be **viajaremos**. All other three sentences are spotless.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3 — Exam-Ready Four-Tense Synthesis & Error Hunting
  // =========================================================================
  {
    id: "four-tenses-grammar-m3",
    title: "MCQ Paper 3 — Exam-Style Four-Tense Synthesis",
    questions: [
      {
        id: "four-tenses-grammar-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Check all 6 persons of tener (yo-go + e→ie boot)",
        question: "Choose the completely accurate pair for *tener* in the present tense (*tú* and *nosotros*):",
        options: [
          "tienes / tienemos",
          "tenes / tenemos",
          "tengas / tenemos",
          "tienes / tenemos",
        ],
        answerIndex: 3,
        hints: [
          "In *tú*, *tener* is inside the *e→ie* boot.",
          "In *nosotros*, *tener* sits outside the boot — no stem change!",
        ],
        explanation:
          "**tienes / tenemos** applies *e→ie* inside the boot (*tú tienes*) and keeps *nosotros* regular (**tenemos**). *tienemos* wrongly stem-changes *nosotros*, and *tengas* is subjunctive.",
      },
      {
        id: "four-tenses-grammar-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Check -er/-ir preterite plural endings (-imos, -ieron)",
        question: "Complete in the preterite: «El verano pasado nosotros ___ (*beber*) gazpacho y mis padres ___ (*vivir*) cerca de la playa.»",
        options: [
          "bebemos / viven",
          "bebimos / vivieron",
          "bebieron / vivimos",
          "bebíamos / vivían",
        ],
        answerIndex: 1,
        hints: [
          "Regular *-er* and *-ir* verbs share the exact same preterite endings (*-imos* for *nosotros*, *-ieron* for *ellos*).",
          "Check that each verb matches its subject (*nosotros* vs *mis padres*).",
        ],
        explanation:
          "**bebimos / vivieron** matches *nosotros* (**-imos**) and *mis padres* (**-ieron**) in the preterite. *bebemos / viven* are present, and *bebíamos / vivían* are imperfect.",
      },
      {
        id: "four-tenses-grammar-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Check vosotros Simple Future ending (-éis)",
        question: "Your teacher tells the class (*vosotros*): \"Next year you all will learn (*aprender*) more and you all will have (*tener*) new challenges.\" Which pair is accurate?",
        options: [
          "aprendéis / tenéis",
          "aprenderán / tendrán",
          "aprenderéis / tendréis",
          "aprendisteis / tuvisteis",
        ],
        answerIndex: 2,
        hints: [
          "Use Spain-standard *vosotros* Simple Future ending **-éis** (with an accent on *é*!).",
          "Remember *tener* uses irregular stem **tendr-**.",
        ],
        explanation:
          "**aprenderéis / tendréis** attaches *vosotros* Simple Future **-éis** to *aprender* and irregular stem **tendr-**. *aprendéis / tenéis* are present, and *aprendisteis / tuvisteis* are preterite.",
      },
      {
        id: "four-tenses-grammar-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Read a multi-tense text for precise timeline comprehension",
        question:
          "Read Hugo's holiday update:\n\n*«Todos los años voy a la costa con mis padres, pero hace dos semanas fui a la montaña con mi instituto. Lo pasé bomba y saqué cien fotos. Este sábado voy a enseñar las fotos a mis abuelos y algún día volveré a los Pirineos para esquiar.»*\n\nWhich two actions are set in the **future**?",
        options: [
          "Showing photos to his grandparents and returning to the Pyrenees",
          "Going to the mountains and taking a hundred photos",
          "Going to the coast every year and skiing in the Pyrenees",
          "Having a great time and visiting his grandparents last week",
        ],
        answerIndex: 0,
        hints: [
          "Spot the two future structures in the final sentence: *voy a enseñar* and *volveré*.",
          "Notice *hace dos semanas fui* and *saqué* are in the past (Preterite).",
        ],
        explanation:
          "**Showing photos to his grandparents** (*Este sábado voy a enseñar*, Immediate Future) and **returning to the Pyrenees** (*algún día volveré*, Simple Future) are the two future events.",
      },
      {
        id: "four-tenses-grammar-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "preterite-tense-mastery",
        strategy: "Check -ir sandal verb dormir (o→u in él/ellos preterite)",
        question: "In the preterite, *-ir* stem-changers like *dormir* and *pedir* shift ONLY in *él/ella* and *ellos/ellas*. Which sentence is accurate?",
        options: [
          "Anoche dormió diez horas y pedió un café por la mañana.",
          "Anoche duermió diez horas y piedió un café por la mañana.",
          "Anoche durmí diez horas y pidí un café por la mañana.",
          "Anoche durmió diez horas y pidió un café por la mañana.",
        ],
        answerIndex: 3,
        hints: [
          "In the preterite *él/ella* form (the 'sole of the sandal'), *o → u* (*dormir*) and *e → i* (*pedir*).",
          "In *yo*, those verbs stay regular (*dormí, pedí* — NOT *durmí*!).",
        ],
        explanation:
          "**Anoche durmió diez horas y pidió un café por la mañana.** applies the *-ir* preterite sandal change (*o→u* → **durmió**, *e→i* → **pidió**) accurately in 3rd-person singular.",
      },
      {
        id: "four-tenses-grammar-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "immediate-vs-simple-future",
        strategy: "Compare Immediate Future vs Simple Future of hacer",
        question: "Which pair translates **\"I am going to do\"** and **\"I will do\"** in exact order?",
        options: [
          "voy a hacer / haré",
          "haré / voy a hacer",
          "voy hacer / haceré",
          "hago / hice",
        ],
        answerIndex: 0,
        hints: [
          "Immediate Future ('going to') uses *ir + a + infinitive*.",
          "Simple Future ('will') uses irregular stem *har-* + *-é*.",
        ],
        explanation:
          "**voy a hacer / haré** pairs the Immediate Future (*I am going to do*) with the Simple Future (*I will do*). *voy hacer* drops *a*, and *haceré* forgets the irregular stem **har-**.",
      },
      {
        id: "four-tenses-grammar-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Transform a single verb (salir) cleanly across all four tenses",
        question: "Which sequence shows **salir** (*yo*) in **Present → Preterite → Immediate Future → Simple Future**?",
        options: [
          "salo → salí → voy a salir → saliré",
          "salgo → salé → voy a salir → saldré",
          "salgo → salí → voy a salir → saldré",
          "salgo → salí → voy salir → saldré",
        ],
        answerIndex: 2,
        hints: [
          "Check all four traps: *yo-go* present (*salgo*), *-ir* preterite (*salí*), *a* in *voy a salir*, and Add-D future stem (*saldré*).",
          "Eliminate any sequence that drops *a* or uses an *-ar* preterite ending (*-é*).",
        ],
        explanation:
          "**salgo → salí → voy a salir → saldré** nails every single tense: *yo-go* present **salgo**, regular *-ir* preterite **salí**, immediate future **voy a salir**, and irregular Add-D future **saldré**.",
      },
      {
        id: "four-tenses-grammar-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "present-tense-mastery",
        strategy: "Choose ser vs estar in present tense",
        question: "Complete accurately: «Mi hotel ___ moderno y bonito, pero ___ un poco lejos de la playa y hoy yo ___ cansado.»",
        options: [
          "está / es / soy",
          "es / está / estoy",
          "es / es / estoy",
          "está / está / soy",
        ],
        answerIndex: 1,
        hints: [
          "Use **ser** for inherent traits (*moderno y bonito*), and **estar** for location (*lejos de la playa*) and temporary states (*cansado*).",
          "Check the *yo* form of *estar* for the final gap.",
        ],
        explanation:
          "**es / está / estoy** uses **ser** (*es*) for permanent description and **estar** (*está* for location, *estoy* for feeling tired).",
      },
      {
        id: "four-tenses-grammar-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Audit a multi-tense translation for subtle errors",
        question: "Which Spanish sentence accurately translates \"Normally we eat healthily, yesterday we ate pizza, and next year we will eat more fruit\"?",
        options: [
          "Normalmente comemos sano, ayer comimos pizza y el año que viene comeremos más fruta.",
          "Normalmente comimos sano, ayer comemos pizza y el año que viene comerémos más fruta.",
          "Normalmente comemos sano, ayer comemos pizza y el año que viene vamos comer más fruta.",
          "Normalmente comemos sano, ayer comimos pizza y el año que viene comimos más fruta.",
        ],
        answerIndex: 0,
        hints: [
          "Check all three *nosotros* forms of *-er* verb *comer*: Present (*-emos*), Preterite (*-imos*), Simple Future (*-emos*, NO accent!).",
          "Notice that for *-er* verbs, Present *comemos* and Preterite *comimos* are DIFFERENT!",
        ],
        explanation:
          "**Normalmente comemos sano, ayer comimos pizza y el año que viene comeremos más fruta.** uses Present **comemos**, Preterite **comimos**, and unaccented Simple Future **comeremos**.",
      },
      {
        id: "four-tenses-grammar-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "preterite-tense-mastery",
        strategy: "Distinguish hace + time (ago) from desde hace (for)",
        question: "Translate into English: *«**Hace dos meses** compré una guitarra, pero toco el piano **desde hace cinco años**.»*",
        options: [
          "In two months I will buy a guitar, and five years ago I played piano.",
          "I have bought a guitar for two months, and five years ago I played piano.",
          "Two months ago I will buy a guitar, and I will play piano for five years.",
          "Two months ago I bought a guitar, but I have played the piano for five years.",
        ],
        answerIndex: 3,
        hints: [
          "**Hace + time + Preterite** means *'[time] ago'*. **Present + desde hace + time** means *'have been doing for [time]'*.",
          "Check both verbs: *compré* (Preterite) and *toco* (Present).",
        ],
        explanation:
          "**Two months ago I bought a guitar, but I have played the piano for five years.** accurately distinguishes *hace + time + preterite* (*ago*) from *present + desde hace + time* (*for [duration] up to now*).",
      },
      {
        id: "four-tenses-grammar-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "immediate-vs-simple-future",
        strategy: "Check all 10 core irregular future stems",
        question: "Which list contains **ONLY** valid Spanish Simple Future *él/ella* forms?",
        options: [
          "tendrá · hará · poderá · saldrá",
          "tendrá · hará · podrá · saldrá",
          "tendrá · hacerá · podrá · saldrá",
          "tenrá · hará · podrá · saliría",
        ],
        answerIndex: 1,
        hints: [
          "Test each of the four stems: *tener → tendr-*, *hacer → har-*, *poder → podr-*, *salir → saldr-*.",
          "Also check that none of the four slipped into the conditional (*-ía*)!",
        ],
        explanation:
          "**tendrá · hará · podrá · saldrá** uses all four irregular stems accurately with accented **-á**. *poderá*, *hacerá*, and *tenrá* are non-existent forms, and *saliría* is a broken conditional.",
      },
      {
        id: "four-tenses-grammar-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Verify accent marks on 4 closely related forms",
        question: "Choose the option that accurately matches ALL FOUR forms of **estudiar** (*tú*): Present · Preterite · Immediate Future · Simple Future.",
        options: [
          "estudias · estudiaste · vas estudiar · estudiarás",
          "estudias · estudiasté · vas a estudiar · estudiaras",
          "estudias · estudiaste · vas a estudiar · estudiarás",
          "estudiás · estudiaste · vas a estudiar · estudiarás",
        ],
        answerIndex: 2,
        hints: [
          "Check every single accent: does *tú* Preterite (*-aste*) take an accent? No! Does *tú* Simple Future (*-ás*) take an accent? Yes!",
          "Also verify the mandatory *a* inside *vas a estudiar*.",
        ],
        explanation:
          "**estudias · estudiaste · vas a estudiar · estudiarás** gets every single accent and preposition right: zero accent on *estudias* and *estudiaste*, mandatory *a* in *vas a estudiar*, and accented *-ás* in *estudiarás*.",
      },
      {
        id: "four-tenses-grammar-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "preterite-tense-mastery",
        strategy: "Identify irregular preterite stems venir (vin-) and decir (dij-)",
        question: "Complete in the preterite: «Ayer mis amigos ___ (*venir*) a mi casa y me ___ (*decir*) una noticia genial.»",
        options: [
          "venieron / decieron",
          "vinieron / dijeron",
          "vinieron / dijieron",
          "vendrán / dirán",
        ],
        answerIndex: 1,
        hints: [
          "*venir* uses strong stem **vin-** (*vinieron*), and *decir* uses *j*-stem **dij-**.",
          "Watch the *j*-stem rule in *ellos* preterite: *-jeron* (NO *i* after *j* — *dijeron*, NOT *dijieron*!).",
        ],
        explanation:
          "**vinieron / dijeron** applies strong stems **vin-** and **dij-**, remembering that *j*-stem preterites (*dijeron, trajeron*) drop the *i* in *-eron*. *vendrán / dirán* are Simple Future.",
      },
      {
        id: "four-tenses-grammar-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Spot the best four-tense Year 9 exam conclusion",
        question: "Which short paragraph accurately uses **all four** Year 9 tenses (Present, Preterite, Immediate Future, Simple Future) with zero errors?",
        options: [
          "Normalmente corro por la mañana. Ayer jugué al tenis con Ana. Esta tarde voy a nadar y el año que viene haré un triatlón.",
          "Normalmente corro por la mañana. Ayer jugé al tenis con Ana. Esta tarde voy nadar y el año que viene haré un triatlón.",
          "Normalmente corrí por la mañana. Ayer juego al tenis con Ana. Esta tarde voy a nadar y el año que viene haceré un triatlón.",
          "Normalmente corro por la mañana. Ayer jugué al tenis con Ana. Esta tarde voy a nadar y el año que viene hice un triatlón.",
        ],
        answerIndex: 0,
        hints: [
          "Check every single verb: Present (*corro*), Preterite *-gar* (*jugué*), Immediate Future (*voy a nadar*), Simple Future irregular (*haré*).",
          "Eliminate any paragraph with *jugé*, missing *a* in *voy nadar*, *haceré*, or past *hice* with *el año que viene*.",
        ],
        explanation:
          "**Normalmente corro por la mañana. Ayer jugué al tenis con Ana. Esta tarde voy a nadar y el año que viene haré un triatlón.** cleanly integrates all four Year 9 tenses with exact spelling and accents.",
      },
      {
        id: "four-tenses-grammar-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mixing-four-tenses",
        strategy: "Decode four tense markers inside a listening-style transcript",
        question:
          "Read Sara's message:\n\n*«Antes no me gustaba cocinar, pero el mes pasado hice un curso de cocina en Madrid y aprendí a preparar paella. Ahora cocino todos los domingos y este sábado voy a preparar tortilla española para mis amigos. Algún día tendré mi propio restaurante.»*\n\nWhich tense is used for **each** of these three italicised actions: *hice un curso*, *voy a preparar*, *tendré mi propio restaurante*?",
        options: [
          "Present → Preterite → Immediate Future",
          "Preterite → Simple Future → Immediate Future",
          "Immediate Future → Preterite → Simple Future",
          "Preterite → Immediate Future → Simple Future",
        ],
        answerIndex: 3,
        hints: [
          "Check *hice* (*hacer* + *el mes pasado*), *voy a preparar* (*ir + a + inf.*), and *tendré* (*tendr- + -é* + *algún día*).",
          "Match the exact order of the three actions.",
        ],
        explanation:
          "**Preterite → Immediate Future → Simple Future** matches *hice* (Preterite), *voy a preparar* (Immediate Future), and *tendré* (Simple Future).",
      },
    ],
  },
];
