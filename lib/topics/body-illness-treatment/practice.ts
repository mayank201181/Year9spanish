import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "body-illness-treatment-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "body-parts-doler",
      question: "Which sentence accurately says **'My back hurts'**?",
      options: [
        "Me duele la espalda.",
        "Me duelen la espalda.",
        "Me duele mi espalda.",
        "Me duele el espalda.",
      ],
      answerIndex: 0,
      hints: [
        "*Espalda* is singular and feminine.",
        "Always use a definite article (*el / la*), never *mi*, with *doler*.",
      ],
      explanation:
        "**Me duele la espalda** uses singular **duele** and the feminine definite article **la**.",
    },
    {
      id: "body-illness-treatment-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "body-parts-doler",
      question: "Translate into Spanish (include the definite article): **My hand hurts.**",
      answer: {
        type: "text",
        accept: ["Me duele la mano", "A mí me duele la mano"],
        display: "Me duele la mano",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duele el mano"] },
          feedback: "Watch the gender trap! *Mano* is **feminine** despite ending in *-o* → **la mano**.",
        },
        {
          spec: { type: "text", accept: ["Me duele mi mano"] },
          feedback: "Never use possessive *mi* with *doler* — use the definite article **la**.",
        },
      ],
      hints: [
        "Use *me duele* for a single body part.",
        "Remember the famous gender exception for *hand* in Spanish.",
      ],
      solution: [
        "Singular body part → **Me duele**.",
        "*Hand* is feminine despite ending in *-o* → **la mano**.",
        "Full sentence: **Me duele la mano**.",
      ],
    },
    {
      id: "body-illness-treatment-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "body-parts-doler",
      question: "Translate into Spanish: **My eyes hurt.**",
      answer: {
        type: "text",
        accept: ["Me duelen los ojos", "A mí me duelen los ojos"],
        display: "Me duelen los ojos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duele los ojos"] },
          feedback: "*Los ojos* is plural, so *doler* must end in **-n** → **Me duelen**.",
        },
        {
          spec: { type: "text", accept: ["Me duelen mis ojos"] },
          feedback: "Replace *mis* with the definite article **los**.",
        },
      ],
      hints: [
        "Eyes are plural (*los ojos*), so check the verb ending on *doler*.",
        "Use the masculine plural definite article, not *mis*.",
      ],
      solution: [
        "Plural body part (*los ojos*) requires **Me duelen**.",
        "Use definite article **los** → **Me duelen los ojos**.",
      ],
    },
    {
      id: "body-illness-treatment-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "How does a **female** student say **'I have a cold and I am tired'** using *estar*?",
      options: [
        "Estoy resfriado y cansado.",
        "Estoy resfriada y cansada.",
        "Soy resfriada y cansada.",
        "Tengo resfriada y cansada.",
      ],
      answerIndex: 1,
      hints: [
        "Temporary physical states take *estar*, not *ser* or *tener*.",
        "Make both adjectives agree with a female speaker.",
      ],
      explanation:
        "**Estoy resfriada y cansada** uses **estar** with feminine singular *-a* endings on both adjectives.",
    },
    {
      id: "body-illness-treatment-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "Translate into Spanish: **I have a fever.**",
      answer: {
        type: "text",
        accept: ["Tengo fiebre", "Yo tengo fiebre"],
        display: "Tengo fiebre",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Estoy fiebre", "Soy fiebre"] },
          feedback: "*Fiebre* is a noun, so Spanish uses **tener** → **Tengo fiebre**.",
        },
      ],
      hints: [
        "Core symptom nouns pair with *tener*, not *estar*.",
        "Spanish drops the indefinite article before *fiebre*.",
      ],
      solution: [
        "*Fever* is a noun (*fiebre*), so use **tener** (*yo* = **tengo**).",
        "Omit *una* → **Tengo fiebre**.",
      ],
    },
    {
      id: "body-illness-treatment-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "Translate into Spanish: **I have broken my arm.**",
      answer: {
        type: "text",
        accept: ["Me he roto el brazo", "Yo me he roto el brazo"],
        display: "Me he roto el brazo",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me he rompido el brazo"] },
          feedback: "*Romper* has an irregular past participle: **roto** (never *rompido*).",
        },
        {
          spec: { type: "text", accept: ["Me he roto mi brazo", "He roto mi brazo"] },
          feedback: "Use reflexive **me he roto** + definite article **el brazo** (never *mi*).",
        },
      ],
      hints: [
        "Use the reflexive perfect structure for a recent injury (*me he + participle*).",
        "Recall the irregular past participle of *romper* and the masculine definite article for *arm*.",
      ],
      solution: [
        "Reflexive perfect: **Me he** + irregular participle **roto**.",
        "Definite article + body part: **el brazo** → **Me he roto el brazo**.",
      ],
    },
    {
      id: "body-illness-treatment-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      question: "Which sentence accurately says **'My stomach has hurt for two days'**?",
      options: [
        "Me dolió el estómago desde hace dos días.",
        "He tenido dolor del estómago dos días.",
        "Me duele el estómago desde hace dos días.",
        "Me dolerá el estómago desde hace dos días.",
      ],
      answerIndex: 2,
      hints: [
        "Ongoing symptoms use *desde hace* with one specific tense.",
        "Because it still hurts now, keep *doler* in the Present tense.",
      ],
      explanation:
        "**Me duele el estómago desde hace dos días** pairs Present tense **duele** with **desde hace** for an ongoing pain.",
    },
    {
      id: "body-illness-treatment-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      question: "Give the Spain-standard Spanish word (with article *la* or *el*) for: **the cough syrup**.",
      answer: {
        type: "text",
        accept: ["el jarabe", "el jarabe para la tos"],
        display: "el jarabe",
      },
      traps: [
        {
          spec: { type: "text", accept: ["la jarabe"] },
          feedback: "*Jarabe* is masculine → **el jarabe**.",
        },
      ],
      hints: [
        "It is a masculine pharmacy noun starting with *j-*.",
        "Patients with *tos* take a spoonful of it.",
      ],
      solution: [
        "Cough syrup in Spanish is masculine: **el jarabe** (or **el jarabe para la tos**).",
      ],
    },
    {
      id: "body-illness-treatment-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "health-dialogues-past",
      question: "Choose the accurate Preterite sentence for **'Yesterday I fell and went to A&E.'**",
      options: [
        "Ayer me caigo y voy a urgencias.",
        "Ayer me cayó y fui a urgencias.",
        "Ayer me caí y fue a urgencias.",
        "Ayer me caí y fui a urgencias.",
      ],
      answerIndex: 3,
      hints: [
        "Both verbs must be in the *yo* Preterite form.",
        "Remember: *me caí* takes an accent on *í*, while *fui* has no accent.",
      ],
      explanation:
        "**Ayer me caí y fui a urgencias** correctly pairs *yo* Preterite **me caí** with *yo* Preterite **fui**.",
    },
    {
      id: "body-illness-treatment-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      marks: 4,
      question:
        "You are at a Spanish pharmacy. Write **2–3 short sentences in Spanish** telling the pharmacist: (1) one body part that hurts using *doler*, (2) how long it has hurt using *desde hace*, (3) one symptom using *tener* or *estar*, and (4) asking for a suitable remedy or advice.",
      modelAnswer:
        "Buenos días. Me duele mucho la garganta desde hace tres días y tengo fiebre. ¿Tiene unas pastillas o un jarabe para la tos, por favor?",
      markScheme: [
        {
          point: "Uses doler accurately with a body part",
          keywords: ["me duele", "me duelen"],
        },
        {
          point: "States duration with desde hace + time expression",
          keywords: ["desde hace"],
        },
        {
          point: "Adds a symptom using tener or estar",
          keywords: ["tengo fiebre", "tengo tos", "tengo gripe", "tengo catarro", "tengo nauseas", "estoy resfriado", "estoy resfriada", "estoy mareado", "estoy mareada", "estoy cansado", "estoy cansada", "estoy enfermo", "estoy enferma"],
        },
        {
          point: "Requests or names a relevant pharmacy remedy",
          keywords: ["pastillas", "jarabe", "crema", "pomada", "tirita", "venda", "gotas", "receta", "medicina", "analgesico"],
        },
      ],
      hints: [
        "Open with *Me duele / Me duelen* + definite article + body part.",
        "Attach *desde hace* + a number of days/hours, then add a *tener* or *estar* symptom and name a pharmacy remedy.",
      ],
    },
  ],
  papers: [
    {
      id: "body-illness-treatment-p1",
      title: "Practice Paper 1 — Body, Symptoms & Pharmacy Skills",
      questions: [
        {
          id: "body-illness-treatment-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts-doler",
          question: "Translate into Spanish: **My throat hurts.**",
          answer: {
            type: "text",
            accept: ["Me duele la garganta", "A mí me duele la garganta"],
            display: "Me duele la garganta",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Me duele mi garganta"] },
              feedback: "Never use *mi* with *doler* — switch to definite article **la**.",
            },
          ],
          hints: [
            "*Throat* is feminine singular (*la garganta*).",
          ],
          solution: [
            "Singular body part → **Me duele** + **la garganta**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts-doler",
          question: "Translate into Spanish: **My knees hurt.**",
          answer: {
            type: "text",
            accept: ["Me duelen las rodillas", "A mí me duelen las rodillas"],
            display: "Me duelen las rodillas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Me duele las rodillas"] },
              feedback: "*Las rodillas* is plural, so *doler* needs **duelen**.",
            },
          ],
          hints: [
            "*Knees* = feminine plural (*las rodillas*).",
            "Remember to add *-n* on *doler* for plural body parts.",
          ],
          solution: [
            "Plural subject (*las rodillas*) → **Me duelen las rodillas**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "body-parts-doler",
          question: "Complete the sentence accurately: **'A mis padres ___ la espalda después de caminar.'**",
          options: [
            "les duele",
            "le duele",
            "les duelen",
            "nos duele",
          ],
          answerIndex: 0,
          hints: [
            "Match the indirect pronoun to *mis padres* (plural → *les*, not *le*).",
            "Match *duele / duelen* to the noun *la espalda* (singular!).",
          ],
          explanation:
            "**Les duele** matches plural indirect object **les** to *mis padres* and singular verb **duele** to *la espalda*.",
        },
        {
          id: "body-illness-treatment-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "body-parts-doler",
          question: "Translate into Spanish: **Lucía has earache (one inner ear hurts).** Start with *A Lucía…*",
          answer: {
            type: "text",
            accept: ["A Lucía le duele el oído"],
            display: "A Lucía le duele el oído",
          },
          traps: [
            {
              spec: { type: "text", accept: ["A Lucía le duele la oreja"] },
              feedback: "Use inner ear **el oído** (not outer ear *la oreja*) for earache!",
            },
            {
              spec: { type: "text", accept: ["A Lucía duele el oído"] },
              feedback: "Never omit the indirect object pronoun **le** after *A Lucía*.",
            },
          ],
          hints: [
            "Keep the indirect object pronoun *le* after *A Lucía*.",
            "Remember the inner ear noun with its accent on *í*.",
          ],
          solution: [
            "Person = *A Lucía* → pronoun **le**.",
            "One inner ear = **el oído** (singular) → **duele**.",
            "Answer: **A Lucía le duele el oído**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "illnesses-symptoms-injuries",
          question: "Translate into Spanish (female speaker): **I feel dizzy and I have nausea.**",
          answer: {
            type: "text",
            accept: [
              "Estoy mareada y tengo náuseas",
              "Yo estoy mareada y tengo náuseas",
            ],
            display: "Estoy mareada y tengo náuseas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Estoy mareado y tengo náuseas"] },
              feedback: "Watch the gender cue: female speaker requires feminine **mareada**.",
            },
          ],
          hints: [
            "'I feel dizzy' uses *estar* + agreeing adjective for a female speaker.",
            "'I have nausea' uses *tener* + plural noun with an accent on the first *a*.",
          ],
          solution: [
            "Female state adjective: **Estoy mareada**.",
            "Symptom noun: **y tengo náuseas** (accent on **á**).",
          ],
        },
        {
          id: "body-illness-treatment-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "illnesses-symptoms-injuries",
          question: "Translate into Spanish: **I have cut my finger.**",
          answer: {
            type: "text",
            accept: ["Me he cortado el dedo", "Yo me he cortado el dedo"],
            display: "Me he cortado el dedo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Me he cortado mi dedo", "He cortado mi dedo"] },
              feedback: "With reflexive injuries, always use the definite article **el dedo** instead of *mi*.",
            },
          ],
          hints: [
            "Use the reflexive perfect of *cortarse* (*me he + participle*).",
            "Pair *el dedo* with the definite article, not a possessive.",
          ],
          solution: [
            "Reflexive perfect: **Me he cortado** + **el dedo**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "illnesses-symptoms-injuries",
          question: "Which Spanish sentence correctly expresses **'I have burnt my hand'**?",
          options: [
            "Me he quemado el mano.",
            "Me he quemado la mano.",
            "Me he quemada la mano.",
            "Tengo quemado la mano.",
          ],
          answerIndex: 1,
          hints: [
            "Check BOTH the gender of *mano* and the rule that participles after *haber* stay *-o*.",
            "Use auxiliary *haber* (*me he*), never *tener*.",
          ],
          explanation:
            "**Me he quemado la mano** keeps invariable participle **quemado** after *he* and uses feminine **la mano**.",
        },
        {
          id: "body-illness-treatment-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "pharmacy-doctor-remedies",
          question: "Translate into Spanish using *desde hace*: **I have had a sore throat for five days.**",
          answer: {
            type: "text",
            accept: [
              "Me duele la garganta desde hace cinco días",
              "Tengo dolor de garganta desde hace cinco días",
            ],
            display: "Me duele la garganta desde hace cinco días",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Me dolió la garganta desde hace cinco días"] },
              feedback: "Because the throat STILL hurts now, lock *doler* in the **Present tense** (**Me duele**).",
            },
          ],
          hints: [
            "Ongoing pain with *desde hace* requires the Present tense.",
            "Remember the written accent on *días*.",
          ],
          solution: [
            "Present tense: **Me duele la garganta** (or **Tengo dolor de garganta**).",
            "Duration: **desde hace cinco días**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "pharmacy-doctor-remedies",
          question: "Translate the doctor's informal (*tú*) advice into Spanish using *debes*: **You must rest in bed.**",
          answer: {
            type: "text",
            accept: ["Debes descansar en cama", "Debes descansar en la cama", "Tú debes descansar en cama"],
            display: "Debes descansar en cama",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Debes descansas en cama"] },
              feedback: "Always follow *debes* with an **infinitive** (**descansar**), never a second conjugated verb.",
            },
          ],
          hints: [
            "After *debes*, keep the second verb in the infinitive.",
            "Spanish says *descansar en cama* (or *en la cama*).",
          ],
          solution: [
            "**Debes** + infinitive **descansar en cama**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "pharmacy-doctor-remedies",
          question: "Give the Spain-standard Spanish noun (with *la* or *el*) for: **the prescription**.",
          answer: {
            type: "text",
            accept: ["la receta"],
            display: "la receta",
          },
          hints: [
            "It is the same feminine noun used for a cooking recipe!",
            "Doctors write it so you can buy antibiotics at the pharmacy.",
          ],
          solution: [
            "**la receta** (feminine) means both *prescription* and *recipe*.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "health-dialogues-past",
          question: "Complete the past accident sentence: **'El martes ___ el tobillo corriendo en el patio.'** (*On Tuesday I twisted my ankle running in the playground.*)",
          options: [
            "me tuerzo",
            "me torció",
            "me torcí",
            "me torceré",
          ],
          answerIndex: 2,
          hints: [
            "*El martes* refers to a completed past event, and the speaker is *yo* (*me*).",
            "Choose the *yo* Preterite of *torcerse* (regular *-er* ending *-í*).",
          ],
          explanation:
            "**Me torcí** is the *yo* Preterite of *torcerse*. *Me tuerzo* is present, *me torceré* is future, and *torció* is *él/ella*.",
        },
        {
          id: "body-illness-treatment-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "health-dialogues-past",
          question: "Translate into Spanish (Preterite): **The doctor gave me a cream.** (Use *el médico*.)",
          answer: {
            type: "text",
            accept: [
              "El médico me dio una crema",
              "El médico me dio crema",
            ],
            display: "El médico me dio una crema",
          },
          traps: [
            {
              spec: { type: "text", accept: ["El médico me dió una crema"] },
              feedback: "Watch the spelling rule: **dio** takes NO written accent in modern Spanish!",
            },
          ],
          hints: [
            "Remember the accent on *médico* and the indirect pronoun *me* before the verb.",
            "*Dar* in the *él/ella* Preterite has no written accent.",
          ],
          solution: [
            "Subject + pronoun: **El médico me**.",
            "Preterite of *dar* (*él*) = **dio** (no accent) + **una crema**.",
          ],
        },
        {
          id: "body-illness-treatment-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "illnesses-symptoms-injuries",
          marks: 4,
          question:
            "Write a short note in Spanish (30–45 words) to your PE teacher explaining why you cannot do sport today. Include: (1) an apology or greeting and stating you cannot do sport, (2) a specific recent injury using *me he…*, (3) another symptom using *tener* or *estar*, and (4) a body part that hurts using *doler*.",
      modelAnswer:
        "Hola profesor, lo siento pero hoy no puedo hacer deporte. Me he torcido el tobillo derecho y también tengo fiebre. Además, me duele mucho la espalda y necesito descansar.",
      markScheme: [
        {
          point: "Explains they cannot do sport today",
          keywords: ["no puedo hacer deporte", "no puedo participar", "no puedo jugar"],
        },
        {
          point: "Names a recent injury using reflexive perfect (me he + participle)",
          keywords: ["me he torcido", "me he roto", "me he cortado", "me he quemado", "me he hecho dano"],
        },
        {
          point: "Adds a second symptom with tener or estar",
          keywords: ["tengo fiebre", "tengo tos", "tengo gripe", "tengo catarro", "tengo nauseas", "estoy mareado", "estoy mareada", "estoy resfriado", "estoy resfriada", "estoy cansado", "estoy cansada", "estoy enfermo", "estoy enferma"],
        },
        {
          point: "Includes an ache using me duele(n)",
          keywords: ["me duele", "me duelen"],
        },
      ],
      hints: [
        "Start politely and use *no puedo hacer deporte*.",
        "Combine one *me he…* injury, one *tener/estar* symptom and one *me duele(n)* ache.",
      ],
    },
    {
      id: "body-illness-treatment-p1-q14",
      kind: "written",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      marks: 4,
      question:
        "Role-play task: You are the pharmacist in Madrid. A tourist says they have a cough, a fever and a sore throat. Write **3–4 sentences of Spanish advice** including: (1) a modal advice structure (*tienes que / debes / deberías / hay que*), (2) at least TWO specific remedies, (3) a dosage or frequency phrase, and (4) a lifestyle instruction (rest or fluids).",
      modelAnswer:
        "Tienes que tomar este jarabe dos veces al día y unas pastillas cada ocho horas. Además, debes descansar en cama y beber mucha agua. Si no mejoras en tres días, ve al médico.",
      markScheme: [
        {
          point: "Uses an accurate advice structure + infinitive",
          keywords: ["tienes que", "tiene que", "debes", "debe", "deberias", "hay que"],
        },
        {
          point: "Recommends pharmacy remedies (syrup / pills / cream / drops)",
          keywords: ["jarabe", "pastillas", "comprimidos", "analgesico", "crema", "gotas"],
        },
        {
          point: "Specifies clear dosage or frequency",
          keywords: ["cada ocho horas", "cada seis horas", "dos veces al dia", "tres veces al dia", "una vez al dia", "antes de comer", "despues de comer"],
        },
        {
          point: "Includes rest or hydration instruction",
          keywords: ["descansar", "en cama", "beber mucha agua", "beber liquidos", "beber agua"],
        },
      ],
      hints: [
        "Follow *tienes que / debes* directly with infinitives (*tomar, descansar, beber*).",
        "Include both *jarabe* / *pastillas* and a clear schedule like *cada ocho horas* or *dos veces al día*.",
      ],
    },
    {
      id: "body-illness-treatment-p1-q15",
      kind: "written",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      marks: 5,
      question:
        "Write a **3-tense blog post (50–70 words)** in Spanish about a minor sports accident. Include: (1) when and how the accident happened in the Preterite, (2) what the doctor or hospital did in the Preterite, (3) how you feel right now in the Present, (4) an ongoing symptom with *desde hace*, and (5) your recovery plan in the Future.",
      modelAnswer:
        "El sábado pasado jugué al fútbol, me caí y me torcí la muñeca. Fui al centro de salud y el médico me dio una venda y pastillas. Hoy estoy más tranquilo, pero todavía me duele la mano desde hace dos días. La semana que viene descansaré en casa y beberé mucha agua para mejorar pronto.",
      markScheme: [
        {
          point: "Narrates the accident in the Preterite",
          keywords: ["me cai", "me torci", "me rompi", "me corte", "jugue"],
        },
        {
          point: "States hospital/doctor visit or treatment in the Preterite",
          keywords: ["fui al hospital", "fui al medico", "fui a urgencias", "fui al centro de salud", "me dio", "me puso", "me hizo", "me examino"],
        },
        {
          point: "Describes current status in the Present",
          keywords: ["ahora estoy", "hoy estoy", "me encuentro", "todavia me duele", "todavia tengo"],
        },
        {
          point: "Uses desde hace + duration accurately",
          keywords: ["desde hace"],
        },
        {
          point: "Gives a clear Future recovery plan",
          keywords: ["descansare", "voy a descansar", "tomare", "voy a tomar", "bebere", "no hare", "volvere", "voy a beber"],
        },
      ],
      hints: [
        "Organise cleanly into Past (Preterite) → Present (+ *desde hace*) → Future (*voy a + inf.* or Simple Future).",
        "Check accents on *me caí*, *jugué*, *médico*, *días*, and *descansaré*, while leaving *fui* and *dio* accent-free.",
      ],
    },
  ],
},
{
  id: "body-illness-treatment-p2",
  title: "Practice Paper 2 — Translation, Accuracy & Extended Writing",
  questions: [
    {
      id: "body-illness-treatment-p2-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "body-parts-doler",
      question: "Translate into Spanish: **My teeth hurt a lot.**",
      answer: {
        type: "text",
        accept: [
          "Me duelen mucho los dientes",
          "Me duelen los dientes mucho",
          "A mí me duelen mucho los dientes",
        ],
        display: "Me duelen mucho los dientes",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duelen muy los dientes"] },
          feedback: "After a verb like *doler*, always use **mucho**, never *muy*.",
        },
        {
          spec: { type: "text", accept: ["Me duele mucho los dientes"] },
          feedback: "*Los dientes* is plural → **Me duelen**.",
        },
      ],
      hints: [
        "*Teeth* = masculine plural (*los dientes*).",
        "Remember *mucho* (never *muy*) with *doler*.",
      ],
      solution: [
        "Plural *doler*: **Me duelen** + **mucho** + **los dientes**.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "body-parts-doler",
      question: "Translate into Spanish: **Does your stomach hurt?** (Ask a friend using *tú*.)",
      answer: {
        type: "text",
        accept: ["¿Te duele el estómago?", "Te duele el estómago"],
        display: "¿Te duele el estómago?",
      },
      traps: [
        {
          spec: { type: "text", accept: ["¿Te duele tu estómago?"] },
          feedback: "Replace *tu* with the definite article **el**.",
        },
      ],
      hints: [
        "Use indirect pronoun *te* for *tú* and definite article *el*.",
        "Do not forget the written accent on *estómago*.",
      ],
      solution: [
        "Question for *tú*: **¿Te duele el estómago?**",
      ],
    },
    {
      id: "body-illness-treatment-p2-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "Which translation of **'My brother is allergic to nuts'** is grammatically correct?",
      options: [
        "Mi hermano está alergia a los frutos secos.",
        "Mi hermano tiene alergia a los frutos secos.",
        "Mi hermano soy alergia a los frutos secos.",
        "Mi hermano duele alergia a los frutos secos.",
      ],
      answerIndex: 1,
      hints: [
        "*Alergia* is a noun, just like *fiebre* and *tos*.",
        "Choose the verb that pairs with symptom nouns.",
      ],
      explanation:
        "**Tener alergia a…** is the idiomatic Spanish phrase for being allergic to something → **Mi hermano tiene alergia a los frutos secos**.",
    },
    {
      id: "body-illness-treatment-p2-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "Translate into Spanish: **I have a sunburn on my back.** (Use *una quemadura de sol*.)",
      answer: {
        type: "text",
        accept: [
          "Tengo una quemadura de sol en la espalda",
          "Yo tengo una quemadura de sol en la espalda",
        ],
        display: "Tengo una quemadura de sol en la espalda",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Tengo una quemadura de sol en mi espalda"] },
          feedback: "Use the definite article **la espalda** rather than *mi espalda*.",
        },
      ],
      hints: [
        "Use *tengo* + *una quemadura de sol*.",
        "Translate 'on my back' with *en* + definite article + *espalda*.",
      ],
      solution: [
        "**Tengo una quemadura de sol en la espalda**.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "illnesses-symptoms-injuries",
      question: "Translate into Spanish: **I have sprained my wrist.**",
      answer: {
        type: "text",
        accept: [
          "Me he torcido la muñeca",
          "Yo me he torcido la muñeca",
        ],
        display: "Me he torcido la muñeca",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me he torcida la muñeca"] },
          feedback: "Past participles after *haber* NEVER agree in gender — keep **torcido**!",
        },
      ],
      hints: [
        "Use the reflexive perfect of *torcerse* (*me he torcido*).",
        "*Wrist* is feminine and contains *ñ* (*la muñeca*).",
      ],
      solution: [
        "**Me he torcido** + **la muñeca** (invariable participle *-o*, feminine article *la*).",
      ],
    },
    {
      id: "body-illness-treatment-p2-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      question: "Translate into Spanish using *desde hace*: **My ears have hurt for three days.**",
      answer: {
        type: "text",
        accept: [
          "Me duelen los oídos desde hace tres días",
          "A mí me duelen los oídos desde hace tres días",
        ],
        display: "Me duelen los oídos desde hace tres días",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duele los oídos desde hace tres días"] },
          feedback: "*Los oídos* is plural → **Me duelen**.",
        },
        {
          spec: { type: "text", accept: ["Me dolieron los oídos desde hace tres días"] },
          feedback: "Use the **Present tense** (**Me duelen**) with *desde hace* for ongoing pain!",
        },
      ],
      hints: [
        "Inner ears = *los oídos* (plural, accented *í*).",
        "Keep *doler* in the Present tense before *desde hace tres días*.",
      ],
      solution: [
        "Present plural: **Me duelen los oídos** + **desde hace tres días**.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      question: "Translate into Spanish using *hay que*: **You have to drink lots of water.**",
      answer: {
        type: "text",
        accept: ["Hay que beber mucha agua", "Hay que tomar mucha agua"],
        display: "Hay que beber mucha agua",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Hay que beber mucho agua"] },
          feedback: "*Agua* is feminine, so *much* agrees as **mucha agua**!",
        },
      ],
      hints: [
        "Follow *hay que* directly with an infinitive.",
        "Remember *agua* is feminine when modified by *mucha* (*mucha agua*).",
      ],
      solution: [
        "**Hay que** + infinitive **beber** + **mucha agua**.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      question: "A Spanish doctor writes **'Tomar un analgésico si sube la fiebre.'** What is the patient advised to take?",
      options: [
        "an antibiotic course",
        "an antiseptic plaster",
        "a painkiller / fever tablet",
        "a soothing eye drop",
      ],
      answerIndex: 2,
      hints: [
        "*Un analgésico* is a close cognate of English *analgesic*.",
        "It reduces pain and fever (*si sube la fiebre* = if the fever rises).",
      ],
      explanation:
        "**Un analgésico** is a painkiller/fever reducer (such as paracetamol or ibuprofen).",
    },
    {
      id: "body-illness-treatment-p2-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "health-dialogues-past",
      question: "Translate into Spanish (Preterite): **Yesterday I had to stay in bed.** (Use *tuve que* + *quedarme*.)",
      answer: {
        type: "text",
        accept: [
          "Ayer tuve que quedarme en cama",
          "Ayer tuve que quedarme en la cama",
          "Ayer me tuve que quedar en cama",
          "Ayer me tuve que quedar en la cama",
        ],
        display: "Ayer tuve que quedarme en cama",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Ayer tuve que quedarse en cama"] },
          feedback: "Match the reflexive pronoun to *yo* → **quedarme** (not *quedarse*).",
        },
      ],
      hints: [
        "Attach the *yo* reflexive pronoun *-me* to *quedar*.",
        "Remember *tuve* has NO written accent.",
      ],
      solution: [
        "**Ayer tuve que quedarme en cama** (or **me tuve que quedar en cama**).",
      ],
    },
    {
      id: "body-illness-treatment-p2-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "health-dialogues-past",
      question: "Translate into Spanish (Preterite): **The doctor gave me an X-ray.** (Use *el médico* and *hacer una radiografía*.)",
      answer: {
        type: "text",
        accept: [
          "El médico me hizo una radiografía",
          "El médico me hizo la radiografía",
        ],
        display: "El médico me hizo una radiografía",
      },
      traps: [
        {
          spec: { type: "text", accept: ["El médico me hico una radiografía"] },
          feedback: "In the *él/ella* Preterite of *hacer*, *c* changes to **z** before *o* → **hizo**!",
        },
      ],
      hints: [
        "Place indirect object pronoun *me* right before the Preterite of *hacer* (*él*).",
        "Remember the *c → z* spelling rule in *él/ella* Preterite of *hacer* and the accent on *radiografía*.",
      ],
      solution: [
        "**El médico me hizo una radiografía** (irregular *hizo*, no accent; accented *radiografía*).",
      ],
    },
    {
      id: "body-illness-treatment-p2-q11",
      kind: "short",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      question: "Translate into Spanish (Simple Future): **Tomorrow I will take the syrup and I will not do sport.**",
      answer: {
        type: "text",
        accept: [
          "Mañana tomaré el jarabe y no haré deporte",
          "Mañana yo tomaré el jarabe y no haré deporte",
        ],
        display: "Mañana tomaré el jarabe y no haré deporte",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Mañana tomaré el jarabe y no haceré deporte"] },
          feedback: "*Hacer* has an irregular Simple Future stem: **haré** (never *haceré*).",
        },
      ],
      hints: [
        "Regular Simple Future adds *-é* directly to *tomar*.",
        "*Hacer* uses the irregular stem *har-* + *-é*.",
      ],
      solution: [
        "**Mañana tomaré el jarabe y no haré deporte**.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q12",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      question: "Read the clinic report: *'La paciente estuvo mareada ayer por la tarde, pero hoy ya no tiene fiebre y mañana podrá volver a clase.'* Which tense is used for **each** of the three verbs (*estuvo, tiene, podrá*)?",
      options: [
        "Present, Preterite, Immediate Future",
        "Preterite, Imperfect, Conditional",
        "Perfect, Present, Immediate Future",
        "Preterite, Present, Simple Future",
      ],
      answerIndex: 3,
      hints: [
        "Check the time clues: *ayer por la tarde*, *hoy*, and *mañana*.",
        "*Podrá* uses the irregular Simple Future stem *podr-* + *-á*.",
      ],
      explanation:
        "**Estuvo** is Preterite (*estar*), **tiene** is Present (*tener*), and **podrá** is Simple Future (*poder*).",
    },
    {
      id: "body-illness-treatment-p2-q13",
      kind: "written",
      difficulty: "core",
      guideRef: "body-parts-doler",
      marks: 4,
      question:
        "Write **4 distinct sentences in Spanish** describing aches for DIFFERENT people (no repeats of body parts): (1) one singular ache for *yo*, (2) one plural ache for *yo*, (3) one ache for a named friend or family member using *A + person + le*, and (4) one ache for *nosotros* using *nos*.",
      modelAnswer:
        "Me duele mucho la espalda. También me duelen los pies después del partido. A mi madre le duele la cabeza hoy. Finalmente, nos duelen las piernas por la excursión.",
      markScheme: [
        {
          point: "Singular ache for yo with me duele + el/la",
          keywords: ["me duele"],
        },
        {
          point: "Plural ache for yo with me duelen + los/las",
          keywords: ["me duelen"],
        },
        {
          point: "Third-person ache with le duele / le duelen",
          keywords: ["le duele", "le duelen"],
        },
        {
          point: "First-person plural ache with nos duele / nos duelen",
          keywords: ["nos duele", "nos duelen"],
        },
      ],
      hints: [
        "Check *duele* (1 body part) vs *duelen* (2+ body parts) in every sentence.",
        "Always use definite articles (*el / la / los / las*) instead of possessives.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q14",
      kind: "written",
      difficulty: "core",
      guideRef: "pharmacy-doctor-remedies",
      marks: 4,
      question:
        "Write a **short dialogue (4 lines)** in Spanish between a doctor and a patient. Include: (1) the doctor asking what is wrong, (2) the patient describing two symptoms with *desde hace*, (3) the doctor prescribing a specific remedy and advice, and (4) the patient asking a polite follow-up question (about cost, prescription or sport).",
      modelAnswer:
        "Médico: Buenos días, ¿qué te pasa?\nPaciente: No me encuentro bien; me duele el oído desde hace tres días y tengo fiebre.\nMédico: Tienes una infección. Debes ponerte estas gotas dos veces al día y descansar en casa.\nPaciente: Muchas gracias, ¿necesito una receta para la farmacia?",
      markScheme: [
        {
          point: "Doctor opens with a natural medical question",
          keywords: ["que te pasa", "que le pasa", "que te duele", "como te encuentras"],
        },
        {
          point: "Patient states symptoms with ongoing duration (desde hace)",
          keywords: ["desde hace"],
        },
        {
          point: "Doctor gives clear treatment advice with a specific remedy",
          keywords: ["gotas", "pastillas", "jarabe", "crema", "pomada", "antibiotico", "venda", "tirita"],
        },
        {
          point: "Patient asks a relevant follow-up question",
          keywords: ["receta", "cuanto cuesta", "cuanto cuestan", "puedo hacer deporte", "cuando puedo"],
        },
      ],
      hints: [
        "Include inverted question marks (*¿…?*), accurate *desde hace* + Present tense, and a concrete pharmacy remedy.",
        "Close with a realistic patient question such as asking about a prescription or price.",
      ],
    },
    {
      id: "body-illness-treatment-p2-q15",
      kind: "written",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      marks: 6,
      question:
        "Write an email in Spanish (**70–90 words**) to your Spanish pen pal explaining why you missed school yesterday. Make sure you include: (1) what illness or injury you had yesterday (Preterite), (2) a visit to the doctor or pharmacy (Preterite), (3) what treatment you received, (4) how you feel today (Present + *desde hace*), (5) a balanced opinion or feeling about staying in bed, and (6) your plan for tomorrow or next week (Future).",
      modelAnswer:
        "¡Hola Mateo! Ayer no fui al colegio porque estuve muy enfermo. Tuve fiebre y me dolió mucho la garganta por la mañana. Por la tarde fui a la farmacia con mi padre y la farmacéutica nos dio un jarabe y analgésicos. Hoy todavía estoy cansado y tengo tos desde hace dos días. Quedarse en cama es muy aburrido, aunque es necesario para mejorar. Mañana beberé mucha agua y el lunes volveré al instituto. ¡Un abrazo!",
      markScheme: [
        {
          point: "Explains absence and yesterday's illness/injury in the Preterite",
          keywords: ["no fui", "estuve", "tuve", "me dolio", "me cai", "me rompi", "me torci"],
        },
        {
          point: "Mentions visiting the doctor, hospital or pharmacy in the Preterite",
          keywords: ["farmacia", "medico", "hospital", "urgencias", "centro de salud"],
        },
        {
          point: "Names the treatment received",
          keywords: ["jarabe", "pastillas", "analgesicos", "crema", "venda", "escayola", "receta", "antibiotico", "gotas"],
        },
        {
          point: "Describes today's ongoing condition using Present + desde hace",
          keywords: ["desde hace"],
        },
        {
          point: "Includes an opinion/feeling with a connective",
          keywords: ["aburrido", "horrible", "fatal", "necesario", "importante", "aunque", "sin embargo", "porque"],
        },
        {
          point: "States a Future recovery or return-to-school plan",
          keywords: ["bebere", "volvere", "descansare", "ire", "tomare", "voy a volver", "voy a descansar", "voy a ir", "podre"],
        },
      ],
      hints: [
        "Tick off all three tenses cleanly: Preterite (*ayer*), Present (*hoy + desde hace*) and Future (*mañana / el lunes*).",
        "Add connectives (*porque, aunque, sin embargo, además*) and check accents carefully (*médico, días, volveré*).",
      ],
    },
  ],
},
  ],
  challenge: [
    {
      id: "body-illness-treatment-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "body-parts-doler",
      question: "Translate into Spanish with 100% accuracy: **My head and my throat hurt a lot.**",
      answer: {
        type: "text",
        accept: [
          "Me duelen mucho la cabeza y la garganta",
          "Me duelen la cabeza y la garganta mucho",
          "A mí me duelen mucho la cabeza y la garganta",
        ],
        display: "Me duelen mucho la cabeza y la garganta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me duele mucho la cabeza y la garganta"] },
          feedback: "Two singular nouns joined by *y* form a **plural** subject → use **Me duelen**!",
        },
        {
          spec: { type: "text", accept: ["Me duelen muy la cabeza y la garganta"] },
          feedback: "Use **mucho** (not *muy*) after *doler*.",
        },
      ],
      hints: [
        "Count the total body parts hurting: two singular nouns joined by *y* make a plural subject.",
        "Use definite articles (*la… y la…*), never possessives (*mi*).",
        "Place *mucho* (never *muy*) with *Me duelen*.",
      ],
      solution: [
        "Compound subject (*la cabeza y la garganta* = 2 parts) requires plural **Me duelen**.",
        "Add **mucho** (not *muy*) and definite articles → **Me duelen mucho la cabeza y la garganta**.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "illnesses-symptoms-injuries",
      question: "Translate into Spanish (for a female speaker): **I have hurt my knee and I am exhausted.**",
      answer: {
        type: "text",
        accept: [
          "Me he hecho daño en la rodilla y estoy agotada",
          "Yo me he hecho daño en la rodilla y estoy agotada",
        ],
        display: "Me he hecho daño en la rodilla y estoy agotada",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Me he hacido daño en la rodilla y estoy agotada"] },
          feedback: "Irregular past participle of *hacer* is **hecho** (never *hacido*).",
        },
        {
          spec: { type: "text", accept: ["Me he hecho daño en la rodilla y estoy agotado"] },
          feedback: "Watch the gender cue: female speaker requires **agotada**.",
        },
      ],
      hints: [
        "Use the idiomatic reflexive perfect *hacerse daño en + el/la + body part*.",
        "*Hacer* has an irregular past participle ending in *-cho*.",
        "Use *estar* + feminine singular *agotada* for the female speaker.",
      ],
      solution: [
        "Idiomatic injury: **Me he hecho daño en la rodilla**.",
        "Female state adjective: **y estoy agotada**.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "pharmacy-doctor-remedies",
      question: "Spot the ONLY sentence with **zero** grammar, vocabulary or spelling errors.",
      options: [
        "Hace tres días que tengo fiebre y el médico me dió antibióticos.",
        "Me duelen los oídos desde hace una semana y debo tomar estas gotas.",
        "Estoy muy constipado porque me he rompido la nariz jugando.",
        "A mis amigos le duelen los pies y necesitan ponerse una pomada.",
      ],
      answerIndex: 1,
      hints: [
        "Check EVERY sentence for one sneaky trap: false accent, irregular participle, or pronoun agreement.",
        "Inspect *dió*, *rompido*, and *A mis amigos le…* carefully!",
        "Verify whether *gotas* (*las gotas*) matches *estas* and whether *los oídos* matches *duelen*.",
      ],
      explanation:
        "**Me duelen los oídos desde hace una semana y debo tomar estas gotas** is spotless. The other sentences fail on *dió* (no accent!), *rompido* (should be *roto*), and *le* (plural *mis amigos* needs *les*).",
    },
    {
      id: "body-illness-treatment-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pharmacy-doctor-remedies",
      question: "Rewrite **'Tengo dolor de cabeza desde hace cuatro horas'** using the alternative **Hace… que…** structure (keep the Present tense).",
      answer: {
        type: "text",
        accept: [
          "Hace cuatro horas que tengo dolor de cabeza",
          "Hace cuatro horas que me duele la cabeza",
        ],
        display: "Hace cuatro horas que tengo dolor de cabeza",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Hizo cuatro horas que tengo dolor de cabeza"] },
          feedback: "Keep **Hace** in the Present tense (not Preterite *Hizo*) for an ongoing symptom!",
        },
      ],
      hints: [
        "Put *Hace + length of time + que* at the beginning of the sentence.",
        "Follow *que* directly with the Present tense verb phrase.",
        "Check spelling: *cuatro horas*, no *desde* needed when *Hace… que…* leads.",
      ],
      solution: [
        "Formula: **Hace** + *time* + **que** + *Present tense*.",
        "Result: **Hace cuatro horas que tengo dolor de cabeza**.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      question: "Translate into Spanish (Preterite): **My sister fell off her bike and broke her wrist.** (Use *mi hermana*.)",
      answer: {
        type: "text",
        accept: [
          "Mi hermana se cayó de la bicicleta y se rompió la muñeca",
          "Mi hermana se cayó de su bicicleta y se rompió la muñeca",
          "Mi hermana se cayó de la bici y se rompió la muñeca",
        ],
        display: "Mi hermana se cayó de la bicicleta y se rompió la muñeca",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Mi hermana se caí de la bicicleta y se rompió la muñeca"] },
          feedback: "*Mi hermana* is *ella*, so *caerse* in the Preterite is **se cayó** (with *y* and accented *ó*)!",
        },
      ],
      hints: [
        "Both verbs are third-person singular reflexive Preterite (*se…*).",
        "In *caerse*, *él/ella* shifts *i → y* (*cayó*).",
        "Remember *la muñeca* (with *ñ*) and definite article *la*, not *su*.",
      ],
      solution: [
        "*fell off her bike* → **se cayó de la bicicleta**.",
        "*and broke her wrist* → **y se rompió la muñeca**.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      question: "Translate into Spanish using **Simple Future** for both verbs: **Next week I will not be able to run, so I will rest at home.**",
      answer: {
        type: "text",
        accept: [
          "La semana que viene no podré correr, así que descansaré en casa",
          "La próxima semana no podré correr, así que descansaré en casa",
          "La semana próxima no podré correr, así que descansaré en casa",
        ],
        display: "La semana que viene no podré correr, así que descansaré en casa",
      },
      traps: [
        {
          spec: { type: "text", accept: ["La semana que viene no poderé correr, así que descansaré en casa"] },
          feedback: "*Poder* has an irregular Simple Future stem: **podr-** → **podré** (never *poderé*).",
        },
      ],
      hints: [
        "Start with *La semana que viene* (or *La próxima semana*).",
        "*Poder* has the irregular Simple Future stem *podr-* + accented *-é*, followed by infinitive *correr*.",
        "Connect with *así que* + Simple Future of *descansar* (*descansaré*).",
      ],
      solution: [
        "Time marker: **La semana que viene**.",
        "Irregular Simple Future: **no podré correr** + connective **así que** + **descansaré en casa**.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "pharmacy-doctor-remedies",
      marks: 5,
      question:
        "Error-detective challenge! Fix all FIVE faulty sentences in Spanish: (a) *Me duele mi ojos*, (b) *Estoy fiebre*, (c) *Me he rompido el mano*, (d) *Me dolió la garganta por tres semanas*, (e) *Anoche me caigo y el doctor me dió pastillas* (use *desde hace* in d and *el médico* in e).",
      modelAnswer:
        "a) Me duelen los ojos.\nb) Tengo fiebre.\nc) Me he roto la mano.\nd) Me duele la garganta desde hace tres semanas.\ne) Anoche me caí y el médico me dio pastillas.",
      markScheme: [
        {
          point: "Corrects (a) to plural duelen + definite article los ojos",
          keywords: ["me duelen los ojos"],
        },
        {
          point: "Corrects (b) to tengo fiebre",
          keywords: ["tengo fiebre"],
        },
        {
          point: "Corrects (c) to irregular roto + feminine la mano",
          keywords: ["me he roto la mano"],
        },
        {
          point: "Corrects (d) to Present tense me duele + desde hace",
          keywords: ["me duele la garganta desde hace"],
        },
        {
          point: "Corrects (e) to Preterite me caí and el médico me dio",
          keywords: ["me cai", "el medico me dio"],
        },
      ],
      hints: [
        "Check each sentence for TWO possible errors (e.g., verb + article in #1 and #3, verb + accent in #5).",
        "Remember: *mano* is feminine, *romper* → *roto*, and *desde hace* locks *doler* into the Present.",
        "Check accents carefully: *me caí* needs an accent on *í*, while *dio* must NOT have an accent.",
      ],
    },
    {
      id: "body-illness-treatment-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "health-dialogues-past",
      marks: 6,
      question:
        "Top-Band Extended Writing (**90–110 words**): Imagine you were injured during a school trip in Spain and had to visit *urgencias*. Write a vivid account in Spanish covering: (1) where you were and how the accident happened (Preterite), (2) the exact injury and how the hospital staff treated you (Preterite), (3) one ongoing ache or symptom today using *desde hace*, (4) advice the doctor gave you (*tienes que / debes*), (5) an opinion with justification (*aunque / sin embargo*), and (6) your Simple Future recovery plan.",
      modelAnswer:
        "Durante el viaje escolar a Granada, jugué al fútbol con mis compañeros, me caí mal y me rompí la muñeca izquierda. Fui a urgencias en ambulancia con mi profesora. Allí, una médica muy amable me examinó, me hizo una radiografía y me puso una escayola. Hoy todavía me duele el brazo desde hace cuatro días, aunque ya no tengo fiebre. La médica dijo que debo descansar en cama y tomar analgésicos cada ocho horas. Es frustrante perder las excursiones, sin embargo prefiero recuperarme bien. La semana que viene volveré a consulta y pronto podré hacer deporte otra vez.",
      markScheme: [
        {
          point: "Narrates the accident clearly in the Preterite",
          keywords: ["me cai", "jugue", "me rompi", "me torci", "me corte"],
        },
        {
          point: "Describes hospital visit and staff treatment in the Preterite",
          keywords: ["me examino", "radiografia", "escayola", "venda", "me dio", "me puso", "me hizo"],
        },
        {
          point: "Uses Present tense + desde hace for an ongoing symptom",
          keywords: ["desde hace"],
        },
        {
          point: "Reports doctor's medical advice accurately",
          keywords: ["debo", "tengo que", "tienes que", "debes", "hay que", "descansar", "tomar"],
        },
        {
          point: "Includes justified opinion with a higher connective",
          keywords: ["aunque", "sin embargo", "frustrante", "aburrido", "importante", "prefiero", "por suerte"],
        },
        {
          point: "Concludes with a Simple Future recovery plan",
          keywords: ["volvere", "podre", "descansare", "tomare", "hare", "bebere", "ire"],
        },
      ],
      hints: [
        "Include a strong Preterite sequence (*jugué, me caí, fui, me examinó, me hizo, me puso*).",
        "Switch deliberately into Present + *desde hace* for today, and quote medical advice (*debo / tengo que*).",
        "Close with Simple Future (*volveré, podré, descansaré*) and add contrast connectives (*aunque, sin embargo*).",
      ],
    },
  ],
};
