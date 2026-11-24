import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "body-illness-treatment-m1",
    title: "MCQ Paper 1 — Body Parts, Doler & Core Symptoms",
    questions: [
      {
        id: "body-illness-treatment-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts-doler",
        question: "How do you say **'My head hurts'** in natural Spanish?",
        options: [
          "Me duele la cabeza.",
          "Me duele mi cabeza.",
          "Me duelen la cabeza.",
          "Me duele el cabeza.",
        ],
        answerIndex: 0,
        hints: [
          "With *doler*, Spanish uses the definite article (*el / la*), never *mi*.",
          "*Cabeza* is feminine and singular, so match both the article and the verb ending.",
        ],
        explanation:
          "**Me duele la cabeza** is correct because *la cabeza* is feminine singular (requiring *duele* + *la*). Spanish never uses the possessive *mi* with *doler*.",
      },
      {
        id: "body-illness-treatment-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts-doler",
        question: "Which sentence correctly translates **'My feet hurt'**?",
        options: [
          "Me duele los pies.",
          "Me duelen los pies.",
          "Me duelen las pies.",
          "Me duelen mis pies.",
        ],
        answerIndex: 1,
        hints: [
          "Count how many feet hurt: plural body parts change the verb ending.",
          "*El pie* is masculine, and *doler* takes definite articles instead of possessives.",
        ],
        explanation:
          "**Me duelen los pies** is correct: *los pies* is masculine plural, so *doler* takes the plural ending **duelen** and the definite article **los**.",
      },
      {
        id: "body-illness-treatment-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts-doler",
        question: "Which body part is a **feminine** noun despite ending in *-o*?",
        options: [
          "codo (elbow)",
          "hombro (shoulder)",
          "mano (hand)",
          "cuello (neck)",
        ],
        answerIndex: 2,
        hints: [
          "Almost all Spanish *-o* nouns are masculine, but one major body part breaks the rule.",
          "Think of the phrase *lavarse ___ manos*.",
        ],
        explanation:
          "**La mano** (*the hand*) is feminine even though it ends in *-o*. *El codo*, *el hombro* and *el cuello* are all regular masculine nouns.",
      },
      {
        id: "body-illness-treatment-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts-doler",
        question: "Which Spanish noun is used specifically for **earache** (*inner ear*)?",
        options: [
          "la garganta",
          "la espalda",
          "la rodilla",
          "el oído",
        ],
        answerIndex: 3,
        hints: [
          "Spanish separates the outer ear (*la oreja*) from the inner ear where earache happens.",
          "Look for the word connected to the verb *oír* (to hear).",
        ],
        explanation:
          "**El oído** (*los oídos*) refers to the inner ear and hearing, so earache is **Me duele el oído** or **Me duelen los oídos**. *La garganta* is throat, *la espalda* is back, and *la rodilla* is knee.",
      },
      {
        id: "body-illness-treatment-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts-doler",
        question: "Choose the sentence with **100% accurate grammar and spelling** for *'My stomach hurts a lot.'*",
        options: [
          "Me duele mucho el estómago.",
          "Me duele muy el estómago.",
          "Me duele mucho el estomago.",
          "Me duelen mucho el estómago.",
        ],
        answerIndex: 0,
        hints: [
          "After a verb like *doler*, Spanish uses *mucho* (never *muy*).",
          "Check both singular/plural verb agreement and the written accent on *estómago*.",
        ],
        explanation:
          "**Me duele mucho el estómago** uses singular **duele**, adverb **mucho** (not *muy*), and the required accent on **estómago**.",
      },
      {
        id: "body-illness-treatment-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "How does a Spanish speaker say **'I have a fever and a cough'**?",
        options: [
          "Estoy fiebre y estoy tos.",
          "Tengo fiebre y tengo tos.",
          "Soy fiebre y tengo una tos.",
          "Me duele fiebre y la tos.",
        ],
        answerIndex: 1,
        hints: [
          "Are *fiebre* and *tos* nouns or adjectives?",
          "Core symptom nouns pair with *tener* and normally omit *un / una*.",
        ],
        explanation:
          "**Tengo fiebre y tengo tos** is correct because *fiebre* and *tos* are symptom nouns used with **tener** without an indefinite article.",
      },
      {
        id: "body-illness-treatment-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "Sofía (female) tells the nurse she feels **dizzy and tired**. Which sentence is accurate?",
        options: [
          "Soy mareada y cansada.",
          "Estoy mareado y cansado.",
          "Estoy mareada y cansada.",
          "Tengo mareada y cansada.",
        ],
        answerIndex: 2,
        hints: [
          "Temporary physical states take *estar*, not *ser* or *tener*.",
          "Match the adjective endings to a female speaker.",
        ],
        explanation:
          "**Estoy mareada y cansada** uses **estar** for temporary health conditions and agrees both adjectives in the feminine singular (*-a*) for Sofía.",
      },
      {
        id: "body-illness-treatment-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "What does the common Spanish sentence **'Estoy muy constipado'** actually mean?",
        options: [
          "I have a broken ankle.",
          "I have terrible sunburn.",
          "I am severely constipated.",
          "I have a heavy head cold.",
        ],
        answerIndex: 3,
        hints: [
          "Watch out — *constipado* is one of the most famous false friends in Spanish!",
          "In Spain, *constipado* is a close synonym of *resfriado*.",
        ],
        explanation:
          "**Estoy muy constipado** means *'I have a heavy head cold'* (synonym of *resfriado*). It is a classic false friend and does NOT mean constipated (*estreñido*).",
      },
      {
        id: "body-illness-treatment-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "Complete the recent injury accurately: **'___ la pierna jugando al rugby.'** (*I have broken my leg playing rugby.*)",
        options: [
          "Me he roto",
          "Me he rompido",
          "He roto mi",
          "Me soy roto",
        ],
        answerIndex: 0,
        hints: [
          "Recent injuries use the reflexive perfect: *me he* + past participle + *el / la*.",
          "*Romper* has an irregular past participle — never *-ido*!",
        ],
        explanation:
          "**Me he roto** uses the reflexive pronoun *me*, auxiliary *he* (*haber*, never *ser*), and the irregular past participle **roto** (never *rompido*).",
      },
      {
        id: "body-illness-treatment-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which phrase correctly translates **'My throat has hurt for three days'**?",
        options: [
          "Me dolió la garganta desde hace tres días.",
          "Me duele la garganta desde hace tres días.",
          "Me he dolido la garganta por tres días.",
          "Me dolerá la garganta desde hace tres días.",
        ],
        answerIndex: 1,
        hints: [
          "Does the throat still hurt right now?",
          "Ongoing symptoms with *desde hace* always lock the verb into the Present tense.",
        ],
        explanation:
          "**Me duele la garganta desde hace tres días** uses the **Present tense** (*duele*) with **desde hace** because the sore throat started three days ago and continues now.",
      },
      {
        id: "body-illness-treatment-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "pharmacy-doctor-remedies",
        question: "A Spanish pharmacist hands you **una tirita**. What has the pharmacist given you?",
        options: [
          "a cough syrup",
          "a prescription",
          "a sticking plaster",
          "a plaster cast",
        ],
        answerIndex: 2,
        hints: [
          "Think of what you stick onto a small cut on your finger.",
          "*El jarabe* is syrup, *la receta* is a prescription, and *la escayola* is a cast.",
        ],
        explanation:
          "**Una tirita** is Spain-standard Spanish for a sticking plaster (band-aid). *El jarabe* is cough syrup, *la receta* is a prescription, and *la escayola* is a plaster cast.",
      },
      {
        id: "body-illness-treatment-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which remedy best matches a patient who says **'Tengo mucha tos y me duele la garganta'**?",
        options: [
          "una escayola y muletas",
          "una crema solar fuerte",
          "una venda en el tobillo",
          "un jarabe y mucha agua",
        ],
        answerIndex: 3,
        hints: [
          "Identify the two symptoms: *tos* (cough) and *garganta* (throat).",
          "Which pharmacy item is specifically taken for a cough?",
        ],
        explanation:
          "**Un jarabe y mucha agua** (*cough syrup and lots of water*) treats a cough (*tos*) and sore throat (*garganta*). A cast, sunscreen or ankle bandage treats unrelated issues.",
      },
      {
        id: "body-illness-treatment-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "How does a doctor naturally open a consultation with a teenage patient (*tú*)?",
        options: [
          "Buenos días, ¿qué te pasa?",
          "Buenos días, ¿dónde vives?",
          "Buenos días, ¿qué talla usas?",
          "Buenos días, ¿qué tiempo hace?",
        ],
        answerIndex: 0,
        hints: [
          "You need the standard Spanish expression for 'What is the matter with you?'",
          "Eliminate questions about clothes size, home address or weather.",
        ],
        explanation:
          "**¿Qué te pasa?** (*What's the matter with you?*) is the standard doctor's opener. *¿Qué talla usas?* is used in clothes shops, not surgeries.",
      },
      {
        id: "body-illness-treatment-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Choose the accurate Preterite sentence for **'Yesterday I went to the hospital.'**",
        options: [
          "Ayer voy al hospital.",
          "Ayer fui al hospital.",
          "Ayer fuí al hospital.",
          "Ayer fue al hospital.",
        ],
        answerIndex: 1,
        hints: [
          "The *yo* preterite of *ir* is irregular and ends in *-i* (whereas *él/ella* ends in *-e*).",
          "Remember Spain's modern accent rule: one-syllable *fui* and *dio* take NO written accent!",
        ],
        explanation:
          "**Ayer fui al hospital** is correct: *fui* is the *yo* preterite of *ir* with NO written accent. *Fue* means *he/she went*, and *fuí* has an incorrect accent.",
      },
      {
        id: "body-illness-treatment-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Complete the doctor's past action accurately: **'El médico me ___ unas pastillas.'** (*The doctor gave me some pills.*)",
        options: [
          "di",
          "da",
          "dio",
          "dió",
        ],
        answerIndex: 2,
        hints: [
          "The subject is *el médico* (third person singular) in the Preterite of *dar*.",
          "Like *fui* and *vio*, the monosyllable preterite of *dar* carries NO written accent.",
        ],
        explanation:
          "**Dio** is the *él/ella* preterite of *dar*, written with NO accent. *Di* is *I gave*, *da* is present tense, and *dió* is misspelled.",
      },
    ],
  },
  {
    id: "body-illness-treatment-m2",
    title: "MCQ Paper 2 — Pharmacy Dialogues, Injuries & Advice",
    questions: [
      {
        id: "body-illness-treatment-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts-doler",
        question: "How do you say **'My sister's knees hurt'** in Spanish?",
        options: [
          "A mi hermana le duele las rodillas.",
          "Mi hermana le duelen las rodillas.",
          "A mi hermana les duelen las rodillas.",
          "A mi hermana le duelen las rodillas.",
        ],
        answerIndex: 3,
        hints: [
          "When naming a person with *doler*, start with *A + person* and match *le* (singular person) vs *les* (plural people).",
          "Then match *duele* or *duelen* to *las rodillas* (plural!).",
        ],
        explanation:
          "**A mi hermana le duelen las rodillas** matches **le** to singular *mi hermana* and **duelen** to plural *las rodillas*, with the required opening **A**.",
      },
      {
        id: "body-illness-treatment-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts-doler",
        question: "Which pair of Spanish body parts are **BOTH masculine**?",
        options: [
          "tobillo y diente",
          "muñeca y codo",
          "espalda y pecho",
          "nariz y cuello",
        ],
        answerIndex: 0,
        hints: [
          "Check the article of each noun carefully — *muñeca*, *espalda* and *nariz* are feminine.",
          "*Ankle* and *tooth* both take *el*.",
        ],
        explanation:
          "**El tobillo** (*ankle*) and **el diente** (*tooth*) are both masculine. *La muñeca*, *la espalda* and *la nariz* are feminine.",
      },
      {
        id: "body-illness-treatment-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts-doler",
        question: "Which sentence correctly expresses a **past** ache: *'Yesterday my teeth hurt a lot.'*?",
        options: [
          "Ayer me duelen mucho los dientes.",
          "Ayer me dolieron mucho los dientes.",
          "Ayer me dolió mucho los dientes.",
          "Ayer me dolerán mucho los dientes.",
        ],
        answerIndex: 1,
        hints: [
          "*Ayer* signals the Preterite tense, not the Present or Future.",
          "*Los dientes* is plural, so choose the third-person plural preterite of *doler*.",
        ],
        explanation:
          "**Ayer me dolieron mucho los dientes** uses the plural preterite **dolieron** to match *los dientes* with the past marker *ayer*.",
      },
      {
        id: "body-illness-treatment-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "Select the exact translation of **'I have twisted my ankle.'**",
        options: [
          "Me he cortado el tobillo.",
          "Me he quemado el tobillo.",
          "Me he torcido el tobillo.",
          "Me he roto el tobillo.",
        ],
        answerIndex: 2,
        hints: [
          "Distinguish the four injury participles: *cortado* (cut), *quemado* (burnt), *torcido* (twisted/sprained), *roto* (broken).",
          "The verb *torcerse* means to twist or sprain.",
        ],
        explanation:
          "**Me he torcido el tobillo** means *'I have twisted/sprained my ankle'*. *Cortado* = cut, *quemado* = burnt, and *roto* = broken.",
      },
      {
        id: "body-illness-treatment-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "Read the message from Ana: *'No puedo ir al instituto hoy porque tengo náuseas, escalofríos y estoy pálida.'* What is true about Ana?",
        options: [
          "She has broken her wrist playing hockey.",
          "She has sunburn and a twisted ankle.",
          "She has toothache and needs a dentist.",
          "She feels sick, has chills and looks pale.",
        ],
        answerIndex: 3,
        hints: [
          "Break down all three symptoms: *náuseas*, *escalofríos* and *pálida*.",
          "Notice *frío* hidden inside *escalofríos*!",
        ],
        explanation:
          "*Náuseas* = nausea/feeling sick, *escalofríos* = chills/shivers, and *pálida* = pale. None of her symptoms involve bones, sunburn or teeth.",
      },
      {
        id: "body-illness-treatment-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "illnesses-symptoms-injuries",
        question: "How do you say **'I have hurt my knee'** using the idiomatic phrase *hacerse daño*?",
        options: [
          "Me he hecho daño en la rodilla.",
          "Me he hacido daño en la rodilla.",
          "Me he roto daño en la rodilla.",
          "Me tengo daño en la rodilla.",
        ],
        answerIndex: 0,
        hints: [
          "*Hacer* has an irregular past participle used across all perfect forms.",
          "Pair *me he* with that irregular participle before *daño en la rodilla*.",
        ],
        explanation:
          "**Me he hecho daño en la rodilla** uses the irregular past participle **hecho** (never *hacido*) of *hacer* in the phrase *hacerse daño en…*.",
      },
      {
        id: "body-illness-treatment-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "How does a pharmacist tell a customer politely (*usted*) **'You have to take two pills every eight hours'**?",
        options: [
          "Tienes que tomas dos pastillas cada ocho horas.",
          "Tiene que tomar dos pastillas cada ocho horas.",
          "Tienes que tomar dos jarabes cada ocho horas.",
          "Tiene que tomando dos pastillas cada ocho horas.",
        ],
        answerIndex: 1,
        hints: [
          "*Usted* uses the third-person singular form (*tiene que*), followed directly by an infinitive.",
          "Check that *pastillas* (pills) is used, not *jarabes* (syrups).",
        ],
        explanation:
          "**Tiene que tomar dos pastillas cada ocho horas** correctly pairs polite **tiene que** (*usted*) with the infinitive **tomar** and **pastillas**.",
      },
      {
        id: "body-illness-treatment-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which sentence accurately translates **'I have had a cold for a week'**?",
        options: [
          "Estuve resfriado desde hace una semana.",
          "He estado resfriado por una semana.",
          "Estoy resfriado desde hace una semana.",
          "Estaré resfriado desde hace una semana.",
        ],
        answerIndex: 2,
        hints: [
          "With *desde hace* for an ongoing illness, Spanish does NOT use the preterite, perfect or future.",
          "Lock the verb *estar* into the Present tense.",
        ],
        explanation:
          "**Estoy resfriado desde hace una semana** correctly uses Present tense **estoy** + **desde hace** to express a condition that started a week ago and still continues.",
      },
      {
        id: "body-illness-treatment-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "The pharmacist says: **'Para el antibiótico necesitas una receta del médico.'** What must the patient get?",
        options: [
          "a thermometer from home",
          "an X-ray at the chemist",
          "a first-aid kit for school",
          "a doctor's prescription",
        ],
        answerIndex: 3,
        hints: [
          "*La receta* has two meanings in Spanish: in cooking it means recipe, so what is it in medicine?",
          "You need it *del médico* before a pharmacy can dispense antibiotics.",
        ],
        explanation:
          "In a medical context, **una receta del médico** means **a doctor's prescription**.",
      },
      {
        id: "body-illness-treatment-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which Spanish phrase means **'Put this cream on twice a day'** (using *debes + infinitive*)?",
        options: [
          "Debes ponerte esta crema dos veces al día.",
          "Debes ponerse esta crema dos veces al día.",
          "Debes ponerte este crema dos veces al día.",
          "Debes ponerme esta crema dos veces al día.",
        ],
        answerIndex: 0,
        hints: [
          "Match the reflexive pronoun to *tú* (*debes* → *-te*, not *-se* or *-me*).",
          "*La crema* is feminine, so check the demonstrative (*esta* vs *este*).",
        ],
        explanation:
          "**Debes ponerte esta crema dos veces al día** matches reflexive **-te** to *debes* (*tú*) and feminine **esta** to *la crema*.",
      },
      {
        id: "body-illness-treatment-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Choose the correct Preterite verb to complete: **'El domingo pasado ___ de la bicicleta en el parque.'** (*Last Sunday I fell off my bike in the park.*)",
        options: [
          "me caigo",
          "me caí",
          "me cayó",
          "me caeré",
        ],
        answerIndex: 1,
        hints: [
          "*El domingo pasado* requires the Preterite tense for *yo* (*me*).",
          "*Caerse* in the *yo* preterite takes an accent on the final *-í*.",
        ],
        explanation:
          "**Me caí** is the *yo* preterite of *caerse*. *Me caigo* is present, *me caeré* is future, and *cayó* belongs with *se* (*él/ella*), not *me*.",
      },
      {
        id: "body-illness-treatment-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Read Diego's note: *'Me caí esquiando y fui a urgencias. El médico me hizo una radiografía y me puso una escayola.'* What happened at the hospital?",
        options: [
          "He received eye drops and cough syrup.",
          "He got a plaster for a tiny finger cut.",
          "He had an X-ray and got a plaster cast.",
          "He took painkillers and went skiing again.",
        ],
        answerIndex: 2,
        hints: [
          "Decode the two medical nouns: *una radiografía* and *una escayola*.",
          "Think about what a hospital puts on a fractured ski bone.",
        ],
        explanation:
          "**Una radiografía** is an X-ray and **una escayola** is a plaster cast — standard hospital treatment after a ski fracture.",
      },
      {
        id: "body-illness-treatment-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Complete the sentence in the Preterite: **'Estuve muy enfermo, así que ___ quedarme en cama tres días.'** (*I had to stay in bed for three days.*)",
        options: [
          "tengo que",
          "tenía que",
          "tendré que",
          "tuve que",
        ],
        answerIndex: 3,
        hints: [
          "Look at *estuve* and the completed limit *tres días* — you need the Preterite of *tener que*.",
          "*Tener* has an irregular *uv-* stem in the Preterite with no accent on *yo*.",
        ],
        explanation:
          "**Tuve que** is the *yo* Preterite of *tener que* (*I had to*). *Tengo que* is present, *tendré que* is future, and *tenía que* is imperfect.",
      },
      {
        id: "body-illness-treatment-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "Which sentence accurately narrates what happened to **Carlos** (*él*) in the Preterite?",
        options: [
          "Carlos se cayó y se rompió el brazo.",
          "Carlos se caí y se rompí el brazo.",
          "Carlos se cayó y se rompo el brazo.",
          "Carlos se caó y se rompió el brazo.",
        ],
        answerIndex: 0,
        hints: [
          "Carlos is *él*, so BOTH verbs need third-person singular Preterite forms.",
          "In *caerse*, unstressed *i* between vowels shifts to *y* in *él/ella*.",
        ],
        explanation:
          "**Carlos se cayó y se rompió el brazo** correctly uses third-person singular Preterite **cayó** (*i → y*) and **rompió** (accented *-ió*).",
      },
      {
        id: "body-illness-treatment-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "health-dialogues-past",
        question: "Choose the accurate **Simple Future** recovery sentence: *'Next week I will rest and I will drink lots of water.'*",
        options: [
          "La semana que viene descansé y bebí mucha agua.",
          "La semana que viene descansaré y beberé mucha agua.",
          "La semana que viene descansa y bebe mucha agua.",
          "La semana que viene descansare y bebere mucha agua.",
        ],
        answerIndex: 1,
        hints: [
          "Simple Future keeps the ENTIRE infinitive and adds *-é* for *yo*.",
          "Never forget the written accent on Simple Future *-é*!",
        ],
        explanation:
          "**Descansaré y beberé** are the *yo* Simple Future forms (full infinitive + accented **-é**). Missing the accents turns them into invalid/subjunctive forms.",
      },
    ],
  },
  {
    id: "body-illness-treatment-m3",
    title: "MCQ Paper 3 — Higher Grammar, Reading & Multi-Tense Traps",
    questions: [
      {
        id: "body-illness-treatment-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "body-parts-doler",
        question: "Which sentence uses **doler** accurately for a compound subject (*head and throat*)?",
        options: [
          "Me duele mi cabeza y mi garganta.",
          "Me duelen mi cabeza y la garganta.",
          "Me duelen la cabeza y la garganta.",
          "Me duele la cabeza y las gargantas.",
        ],
        answerIndex: 2,
        hints: [
          "Count the total number of body parts hurting: *la cabeza* + *la garganta* = 2 things!",
          "Keep definite articles (*la*) on both nouns and match the plural verb.",
        ],
        explanation:
          "**Me duelen la cabeza y la garganta** is correct because two singular body parts form a plural subject requiring **duelen**, with definite articles on both nouns.",
      },
      {
        id: "body-illness-treatment-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "body-parts-doler",
        question: "Choose the exact translation of **'Our legs hurt after the race.'**",
        options: [
          "Nos duele las piernas después de la carrera.",
          "Os duelen las piernas después de la carrera.",
          "Nos duelen nuestras piernas después de la carrera.",
          "Nos duelen las piernas después de la carrera.",
        ],
        answerIndex: 3,
        hints: [
          "'Our' (*we*) requires the indirect pronoun *nos* (not *os*) and definite article *las* (not *nuestras*).",
          "*Las piernas* is plural, so match the verb ending.",
        ],
        explanation:
          "**Nos duelen las piernas después de la carrera** pairs **nos** (*to us*) with plural **duelen** and definite article **las** (avoiding redundant *nuestras*).",
      },
      {
        id: "body-illness-treatment-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "illnesses-symptoms-injuries",
        question: "Which sentence contains **NO gender, verb or participle errors** for a female speaker (*Clara*)?",
        options: [
          "Estoy agotada, tengo alergia al polen y me he quemado la mano.",
          "Estoy agotado, tengo alergia al polen y me he quemado la mano.",
          "Soy agotada, tengo alergia a el polen y me he quemado el mano.",
          "Estoy agotada, estoy alergia al polen y me he quemada la mano.",
        ],
        answerIndex: 0,
        hints: [
          "Check FOUR traps: *estar* agreement for Clara, *tener alergia al*, feminine *la mano*, and invariable past participle after *haber*.",
          "In *me he quemado*, the participle after *haber* NEVER changes to *-a*!",
        ],
        explanation:
          "**Estoy agotada, tengo alergia al polen y me he quemado la mano** gets all four rules right: feminine **agotada**, **tener alergia al**, invariable **quemado**, and feminine **la mano**.",
      },
      {
        id: "body-illness-treatment-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "illnesses-symptoms-injuries",
        question: "Why does **'Me he cortado el dedo'** keep *-o* on *cortado* even when a girl is speaking?",
        options: [
          "Because *el dedo* is always plural in Spanish.",
          "Because participles after *haber* never change for gender.",
          "Because *cortarse* can only be used by male speakers.",
          "Because *he* is an irregular form of the verb *ser*.",
        ],
        answerIndex: 1,
        hints: [
          "Compare *estoy cansada* (adjective with *estar*) with *he cortado* (compound tense with *haber*).",
          "In Spanish, does the past participle after *he / has / ha* agree with the subject?",
        ],
        explanation:
          "In Spanish compound tenses with **haber** (*he, has, ha…*), the past participle ALWAYS stays masculine singular (**-o**), regardless of who is speaking or what body part is injured.",
      },
      {
        id: "body-illness-treatment-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which sentence is an **exact, natural equivalent** of *'Me duele la espalda desde hace cinco días'*?",
        options: [
          "Hizo cinco días que me dolió la espalda.",
          "Desde cinco días me duele la espalda.",
          "Hace cinco días que me duele la espalda.",
          "Tengo cinco días que me duele la espalda.",
        ],
        answerIndex: 2,
        hints: [
          "Spanish has two ways to express ongoing duration with the Present tense: *Present + desde hace + time* or *Hace + time + que + Present*.",
          "Keep *hace* in the Present tense and include *que*.",
        ],
        explanation:
          "**Hace cinco días que me duele la espalda** is the exact structural equivalent of *Me duele la espalda desde hace cinco días*, both locking *hace* and *duele* in the Present tense.",
      },
      {
        id: "body-illness-treatment-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pharmacy-doctor-remedies",
        question: "Read the pharmacy label: *'Tomar un comprimido cada seis horas después de las comidas. No conducir si siente mareos.'* Which statement is **TRUE**?",
        options: [
          "Take two tablets every morning before eating breakfast.",
          "Apply this soothing cream onto sunburnt skin twice daily.",
          "Take one spoonful before bed and avoid drinking water.",
          "Take one pill after meals and avoid driving if dizzy.",
        ],
        answerIndex: 3,
        hints: [
          "Check *un comprimido* (tablet), *cada seis horas*, *después de las comidas* and *no conducir si siente mareos*.",
          "*Mareos* comes from the same root as *mareado* (dizzy).",
        ],
        explanation:
          "*Un comprimido* = one tablet, *después de las comidas* = after meals, and *no conducir si siente mareos* = do not drive if you feel dizzy.",
      },
      {
        id: "body-illness-treatment-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pharmacy-doctor-remedies",
        question: "At the pharmacy, you want to ask **'How much do these pills cost?'** Choose the grammatically accurate question.",
        options: [
          "¿Cuánto cuestan estas pastillas?",
          "¿Cuánto cuesta estas pastillas?",
          "¿Cuántas cuestan estos pastillas?",
          "¿Cuánto cuestan este pastillas?",
        ],
        answerIndex: 0,
        hints: [
          "*Las pastillas* is feminine plural: both the verb (*costar*) and demonstrative (*estas*) must match plural/feminine.",
          "*¿Cuánto?* stays invariable when asking 'How much?' about price.",
        ],
        explanation:
          "**¿Cuánto cuestan estas pastillas?** uses invariable *¿Cuánto?*, plural **cuestan** (*costar* o→ue) and feminine plural **estas** to match *las pastillas*.",
      },
      {
        id: "body-illness-treatment-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "A student writes: *'Tengo una quemadura de sol en la espalda y me pica mucho.'* What should the pharmacist recommend?",
        options: [
          "unas muletas y una escayola",
          "una pomada calmante y evitar el sol",
          "un jarabe fuerte para la tos",
          "unas gotas para los oídos",
        ],
        answerIndex: 1,
        hints: [
          "*Una quemadura de sol* means sunburn, and *me pica* means it itches.",
          "Pick the soothing topical treatment plus sensible advice.",
        ],
        explanation:
          "**Una pomada calmante y evitar el sol** (*a soothing ointment and avoiding the sun*) directly treats sunburn (*una quemadura de sol*).",
      },
      {
        id: "body-illness-treatment-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "Read the extract: *'El sábado jugué al baloncesto, me torcí la muñeca y tuve que ir al centro de salud. Por suerte no me rompí ningún hueso, así que la semana que viene volveré a entrenar.'* Which statement is **FALSE**?",
        options: [
          "The writer sprained a wrist during basketball.",
          "The writer went to the local health centre.",
          "The writer broke a bone and wears a cast.",
          "The writer plans to return to training next week.",
        ],
        answerIndex: 2,
        hints: [
          "Read the negative clue carefully: *Por suerte no me rompí ningún hueso*.",
          "Look for the option that directly contradicts *no me rompí ningún hueso*.",
        ],
        explanation:
          "The extract explicitly says *Por suerte no me rompí ningún hueso* (*Luckily I didn't break any bone*), so claiming the writer broke a bone and wears a cast is false.",
      },
      {
        id: "body-illness-treatment-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "Which Preterite verb correctly fits **'Ayer ___ al tenis y después me dolió el codo'** (*Yesterday I played tennis…*)?",
        options: [
          "jugé",
          "juego",
          "jugó",
          "jugué",
        ],
        answerIndex: 3,
        hints: [
          "*Jugar* ends in *-gar* — what spelling change protects the hard *g* sound before *-é* in the *yo* Preterite?",
          "Remember *-gar → -gué* (just like *llegué* and *pagué*).",
        ],
        explanation:
          "**Jugué** is the *yo* Preterite of *jugar* (*-gar → -gué*) to preserve the hard *g* sound before *é*. *Jugé* would sound like a *j*, and *jugó* is *he/she played*.",
      },
      {
        id: "body-illness-treatment-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "Choose the sentence that accurately combines **Preterite** and **Simple Future** with an irregular future stem (*hacer*).",
        options: [
          "Ayer me corté el dedo, pero mañana no haré deporte.",
          "Ayer me corté el dedo, pero mañana no haceré deporte.",
          "Ayer me corte el dedo, pero mañana no haré deporte.",
          "Ayer me corté el dedo, pero mañana no hice deporte.",
        ],
        answerIndex: 0,
        hints: [
          "Check the accent on *yo* Preterite *me corté*.",
          "*Hacer* has an irregular Simple Future stem: *har-* (never *hacer-*).",
        ],
        explanation:
          "**Ayer me corté el dedo, pero mañana no haré deporte** accurately uses accented Preterite **corté** and irregular Simple Future **haré** (*hacer* → *har-*).",
      },
      {
        id: "body-illness-treatment-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "In *'El enfermero me ___ una venda en el tobillo'*, which irregular Preterite of **poner** (*él*) completes the sentence?",
        options: [
          "ponió",
          "puso",
          "puse",
          "pusó",
        ],
        answerIndex: 1,
        hints: [
          "*Poner* has the irregular Preterite stem *pus-* and takes NO written accents.",
          "Match the ending to *el enfermero* (*él* → *-o*, *yo* → *-e*).",
        ],
        explanation:
          "**Puso** is the *él/ella* Preterite of *poner* (stem *pus-*, ending *-o*, NO accent). *Puse* is *yo*, and *ponió / pusó* do not exist.",
      },
      {
        id: "body-illness-treatment-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pharmacy-doctor-remedies",
        question: "Which question correctly asks **'Since when have you had a fever?'** (informal *tú*)?",
        options: [
          "¿Desde cuándo tenías fiebre?",
          "¿Desde cuándo tuviste fiebre?",
          "¿Desde cuándo tienes fiebre?",
          "¿Desde cuándo tendrás fiebre?",
        ],
        answerIndex: 2,
        hints: [
          "Just like *desde hace*, *¿Desde cuándo…? + Present tense* asks how long an ongoing symptom has lasted.",
          "Choose the *tú* Present form of *tener*.",
        ],
        explanation:
          "**¿Desde cuándo tienes fiebre?** uses the Present tense (*tienes*) because the patient still has the fever right now.",
      },
      {
        id: "body-illness-treatment-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "body-parts-doler",
        question: "Which patient is **MOST likely** to need a dentist (*el dentista*)?",
        options: [
          "Paciente 1: Me duele mucho el tobillo desde ayer.",
          "Paciente 2: Tengo una quemadura en la mano izquierda.",
          "Paciente 3: Me pican los ojos por alergia al polen.",
          "Paciente 4: Tengo un dolor de muelas insoportable.",
        ],
        answerIndex: 3,
        hints: [
          "Identify which body part relates to the mouth/teeth.",
          "*Las muelas* are the molar / back teeth.",
        ],
        explanation:
          "**Un dolor de muelas insoportable** means *an unbearable toothache* (*las muelas* = back teeth), so Paciente 4 needs a dentist.",
      },
      {
        id: "body-illness-treatment-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "health-dialogues-past",
        question: "Which closing sentence best adds **Simple Future** (*tener* + *poder*, irregular stems) to a recovery paragraph?",
        options: [
          "Pronto no tendré fiebre y podré volver al colegio.",
          "Pronto no teneré fiebre y poderé volver al colegio.",
          "Pronto no tuve fiebre y pude volver al colegio.",
          "Pronto no tendre fiebre y podre volver al colegio.",
        ],
        answerIndex: 0,
        hints: [
          "Both *tener* (*tendr-*) and *poder* (*podr-*) have irregular Simple Future stems.",
          "Never drop the written accent on *yo* Simple Future *-é*!",
        ],
        explanation:
          "**Pronto no tendré fiebre y podré volver al colegio** uses the exact irregular Simple Future stems **tendr-** and **podr-** with required accents on **-é**.",
      },
    ],
  },
];
