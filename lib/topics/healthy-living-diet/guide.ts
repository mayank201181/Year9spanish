import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "healthy-living-diet",
  title: "Healthy Living, Diet & Advice (La vida sana)",
  strand: "Term 2: Food & Health",
  icon: "🥗",
  summary: "Build top-band Spanish on balanced diets, giving lifestyle advice with se debe / hay que / deberías, managing sleep & stress, and setting future health resolutions.",
  intro:
    "How do you explain what makes a healthy lifestyle — and advise a friend who lives on fizzy drinks and midnight screen time? In this Year 9 Term 2 unit, you will contrast **balanced diets** with **unhealthy habits**, master impersonal and personal **advice structures + infinitive** (*se debe, hay que, deberías*), evaluate **sport, sleep and mental wellbeing**, and promise realistic **future health resolutions** using both the **Immediate Future** and **Simple Future** tenses.",
  guide: [
    // =========================================================================
    // SECTION 1: balanced-diet-habits
    // =========================================================================
    {
      id: "balanced-diet-habits",
      heading: "Balanced Diet & Healthy vs Unhealthy Habits",
      discovery: {
        problem:
          "Compare these two sentences about lifestyle:\n- *Para llevar una vida sana, como **cinco raciones de fruta y verdura** y bebo **mucha agua**.*\n- *Evito **la comida basura**, **la grasa** y **los refrescos azucarados** porque son **poco saludables**.*\n\nNotice how *mucho/a/os/as* changes before *agua* vs *dulces*, and notice why Spanish says *cinco raciones de fruta* (singular!) without *la*!",
        idea:
          "(1) **Agua** is feminine, so 'a lot of water' is ***mucha* agua** (NOT *mucho agua*!), whereas 'many sweets' is ***muchos* dulces**. (2) After *raciones de* (just like market quantities!), Spanish drops the article and uses *fruta y verdura* in singular as food categories!",
      },
      body: `A strong Year 9 answer on *la vida sana* balances **positive daily habits** with **unhealthy pitfalls to avoid**, backed up by exact nutrition vocabulary.

### Healthy vs Unhealthy Habits Side by Side
| Healthy Habits (*Hábitos sanos*) | Unhealthy Habits (*Hábitos poco saludables*) |
|---|---|
| **comer cinco raciones de fruta y verdura** (eat 5 portions of fruit & veg) | **comer demasiada comida basura / rápida** (eat too much junk / fast food) |
| **beber mucha agua** (drink plenty of water) | **beber refrescos azucarados / bebidas energéticas** (drink sugary / energy drinks) |
| **llevar una dieta equilibrada** (follow a balanced diet) | **consumir demasiada grasa / sal / azúcar** (consume too much fat / salt / sugar) |
| **comer comida casera y pescado azul** (eat home-cooked food & oily fish) | **picar entre horas / comer golosinas** (snack between meals / eat sweets) |
| **desayunar bien todos los días** (eat a good breakfast every day) | **saltarse el desayuno** (skip breakfast) |
| **dormir ocho horas y hacer ejercicio** (sleep 8 hours & do exercise) | **llevar una vida sedentaria** (lead a sedentary life) |

### Key Grammar Details
- **mucho / mucha / muchos / muchas** and **demasiado / demasiada / demasiados / demasiadas** MUST agree with the noun they quantify:
  - ***mucha** agua* (water is feminine!) · ***mucha** fruta* · ***demasiada** grasa* · ***demasiado** azúcar* (masculine!) · ***demasiados** dulces*.
- **sano / saludable** vs **poco saludable / malsano / perjudicial para la salud**:
  - *Las verduras son **sanas y nutritivas*** (feminine plural agreement!).
  - *Los refrescos son **perjudiciales para la salud*** (plural *-es*!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced plate comparing healthy habits versus unhealthy habits in Spanish"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">La dieta equilibrada — Healthy vs Unhealthy Balance</text><rect x="20" y="46" width="250" height="142" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="145" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">✓ Hábitos sanos (Do more)</text><text x="34" y="92" font-size="11" fill="var(--ink)">• cinco raciones de fruta y verdura</text><text x="34" y="114" font-size="11" fill="var(--ink)">• beber mucha agua (fem.!)</text><text x="34" y="136" font-size="11" fill="var(--ink)">• pescado azul, legumbres, fibra</text><text x="34" y="158" font-size="11" fill="var(--ink)">• comida casera &amp; pan integral</text><text x="34" y="178" font-size="11" fill="var(--ink)">• dormir ocho horas</text><rect x="290" y="46" width="250" height="142" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="415" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">✗ Hábitos malsanos (Avoid)</text><text x="304" y="92" font-size="11" fill="var(--ink)">• demasiada comida basura</text><text x="304" y="114" font-size="11" fill="var(--ink)">• refrescos azucarados</text><text x="304" y="136" font-size="11" fill="var(--ink)">• demasiada grasa y sal</text><text x="304" y="158" font-size="11" fill="var(--ink)">• saltarse el desayuno</text><text x="304" y="178" font-size="11" fill="var(--ink)">• picar golosinas entre horas</text><rect x="20" y="198" width="520" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="280" y="220" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Agreement Alert: mucha agua (f.) · demasiada grasa (f.) · demasiado azúcar (m.) · demasiados dulces (m.pl.)</text></svg>`,
      diagramCaption: "Balanced lifestyle habits plus gender/number agreement for mucho/a/os/as and demasiado/a/os/as.",
      whyItWorks:
        "In Spanish, *mucho* and *demasiado* behave as **adjectives** when placed directly before a noun (*mucha agua, demasiada grasa*), so they copy the noun's gender and number — whereas before an adjective (*demasiado salada*) *demasiado* is an adverb and stays unchanged!",
      workedExamples: [
        {
          title: "Contrasting healthy and unhealthy eating habits",
          problem: "Translate into Spanish: 'I eat five portions of fruit and vegetables and I drink lots of water, because I avoid junk food.'",
          steps: [
            "'I eat' = *como* + *cinco raciones de fruta y verdura* (note plural *raciones* drops the accent!).",
            "'Lots of water' = *mucha agua* (*agua* is feminine, so *mucha*!).",
            "'Because I avoid junk food' = *porque evito la comida basura*.",
          ],
          answer: "Como cinco raciones de fruta y verdura y bebo mucha agua, porque evito la comida basura.",
          yourTurn: {
            question: "Translate into Spanish: 'Sugary fizzy drinks are unhealthy because they have too much sugar.' (Use *los refrescos azucarados* and *poco saludables*)",
            answer: {
              type: "text",
              accept: [
                "Los refrescos azucarados son poco saludables porque tienen demasiado azúcar",
                "Los refrescos azucarados son poco saludables porque tienen demasiado azúcar.",
              ],
              display: "Los refrescos azucarados son poco saludables porque tienen demasiado azúcar.",
            },
            solution: "Plural *son poco saludables* + *tienen* + masculine singular **demasiado azúcar**.",
          },
        },
        {
          title: "Fixing quantifier gender traps",
          problem: "Spot and correct the two agreement errors: *Mi hermano bebe mucho agua y come demasiado patatas fritas.*",
          steps: [
            "Error 1: *agua* is feminine → *mucho agua* must be **mucha agua**.",
            "Error 2: *patatas fritas* is feminine plural → *demasiado* must be **demasiadas patatas fritas**.",
          ],
          answer: "Mi hermano bebe mucha agua y come demasiadas patatas fritas.",
        },
      ],
      keyPoints: [
        "Core lifestyle phrases: **llevar una vida sana**, **llevar una dieta equilibrada**, **evitar la comida basura**, **saltarse el desayuno**.",
        "Always agree **mucho/a/os/as** and **demasiado/a/os/as** before nouns: **mucha agua**, **demasiada grasa**, **demasiado azúcar**, **demasiados dulces**.",
        "*Una ración* carries an accent, but plural **cinco raciones** loses it!",
        "Upgrade simple 'healthy/unhealthy' with **nutritivo/a**, **saludable**, **poco saludable**, and **perjudicial para la salud**.",
      ],
      strategies: [
        "Pair every positive habit with a negative contrast using **en lugar de** ('instead of'): *Bebo agua **en lugar de** refrescos azucarados.*",
        "Check gender on tricky nouns: **el agua** (f. → *mucha agua*), **la sal** (f. → *demasiada sal*), **el azúcar** (m. → *demasiado azúcar*).",
        "Include specific nutrients (*vitaminas, proteínas, fibra, calcio*) to elevate your Spanish above basic food lists.",
      ],
      thinkDeeper:
        "Compare *Comí **demasiada** comida rápida* and *La comida es **demasiado** grasienta*. Why does *demasiada* end in *-a* in the first sentence yet stay *demasiado* in the second?",
    },

    // =========================================================================
    // SECTION 2: giving-health-advice
    // =========================================================================
    {
      id: "giving-health-advice",
      heading: "Giving Lifestyle Advice (Se debe, Hay que, Deberías)",
      discovery: {
        problem:
          "Spot the hidden pattern linking ALL FIVE of these top-band Spanish advice structures:\n1. ***Se debe** **comer** fruta todos los días.*\n2. ***No se debe** **saltarse** el desayuno.*\n3. ***Hay que** **beber** dos litros de agua.*\n4. ***Deberías** **hacer** más deporte.*\n5. ***Es imprescindible** **dormir** ocho horas.*\n\nWhat form is the verb in bold immediately after EVERY advice phrase?",
        idea:
          "Every single advice phrase is followed directly by an **INFINITIVE** (*comer, saltarse, beber, hacer, dormir*)! Never conjugate the second verb (*Se debe comes* ✗ → *Se debe comer* ✓).",
      },
      body: `Giving clear, varied lifestyle advice is one of the highest-value skills in Year 9 Spanish speaking and writing. Avoid repeating *tienes que* five times — rotate across **impersonal**, **personal** and **value-judgement** structures!

### The Advice Ladder (All + INFINITIVE!)
| Register | Spanish Structure | English Meaning | Example |
|---|---|---|---|
| Impersonal rule | **Se debe / No se debe** + inf. | One should / must (not) | *Se debe comer verdura a diario.* |
| Impersonal necessity | **Hay que / No hay que** + inf. | One must / must not | *Hay que evitar las bebidas energéticas.* |
| Direct obligation | **Tienes que / No tienes que** + inf. | You have to / don't have to | *Tienes que acostarte más temprano.* |
| Polite personal advice | **Deberías / No deberías** + inf. | You should / shouldn't | *No deberías picar entre horas.* |
| Opinion / judgement | **Es importante / imprescindible / necesario / aconsejable** + inf. | It is important / essential / necessary / advisable to | *Es imprescindible hidratarse bien.* |
| Purpose clause | **para** + inf. | in order to… | *…para estar en forma / para cuidar tu salud.* |

### Reflexive Pronouns After Advice Structures
Watch what happens when the infinitive is **reflexive** (*acostarse, levantarse, relajarse, mantenerse*):
- **Impersonal (*se debe, hay que, es importante*)**: keep **-se** on the infinitive! → *Hay que **acostarse** temprano.* / *Es importante **relajarse**.*
- **Personal (*deberías, tienes que*)**: match the reflexive pronoun to **tú** → **-te**! → *Deberías **acostarte** temprano.* / *Tienes que **mantenerte** en forma.*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grammar engine showing advice structures plus unconjugated infinitive plus purpose clause"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The Spanish Advice Engine: [Frame] + [INFINITIVE] + [para + inf.]</text><rect x="20" y="48" width="166" height="126" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="103" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. Advice Frame</text><text x="32" y="92" font-size="11" fill="var(--ink)">Se debe / No se debe</text><text x="32" y="110" font-size="11" fill="var(--ink)">Hay que / No hay que</text><text x="32" y="128" font-size="11" fill="var(--ink)">Deberías / No deberías</text><text x="32" y="146" font-size="11" fill="var(--ink)">Es imprescindible</text><text x="32" y="164" font-size="11" fill="var(--ink)">Tienes que</text><text x="197" y="116" text-anchor="middle" font-size="18" font-weight="700" fill="var(--brand)">+</text><rect x="208" y="48" width="150" height="126" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="283" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">2. INFINITIVE</text><text x="283" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">comer / beber</text><text x="283" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">hacer / dormir</text><text x="283" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">evitar / practicar</text><text x="283" y="158" text-anchor="middle" font-size="10" fill="var(--bad)">Never conjugated!</text><text x="369" y="116" text-anchor="middle" font-size="18" font-weight="700" fill="var(--brand)">+</text><rect x="380" y="48" width="160" height="126" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="460" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">3. Purpose (para)</text><text x="392" y="94" font-size="11" fill="var(--ink)">para estar en forma</text><text x="392" y="116" font-size="11" fill="var(--ink)">para reducir el estrés</text><text x="392" y="138" font-size="11" fill="var(--ink)">para dormir mejor</text><text x="392" y="160" font-size="11" fill="var(--ink)">para cuidar tu salud</text><rect x="20" y="188" width="520" height="46" rx="10" fill="var(--surface-2)" stroke="var(--line)"/><text x="280" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">✓ Deberías acostarte temprano para tener energía.</text><text x="280" y="226" text-anchor="middle" font-size="11" fill="var(--bad)">✗ Deberías te acuestas temprano (NEVER conjugate the second verb!)</text></svg>`,
      diagramCaption: "Three-slot blueprint for producing spotless Spanish health advice sentences.",
      whyItWorks:
        "In Spanish, modal verbs (*deber, tener que*) and impersonal expressions (*hay que, se debe, es importante*) already carry the tense and person, so the action verb stays untouched in its **infinitive** (*-ar / -er / -ir*) — making these structures both effortless and error-proof once you stop double-conjugating!",
      workedExamples: [
        {
          title: "Turning lifestyle tips into impersonal and personal advice",
          problem: "Translate into Spanish: 'One should drink lots of water and one must not eat fast food, in order to keep fit.' (Use *se debe* and *para estar en forma*)",
          steps: [
            "Positive impersonal advice: *Se debe* + infinitive *beber* + *mucha agua*.",
            "Negative impersonal advice: *no se debe* + infinitive *comer* + *comida rápida*.",
            "Add purpose clause: *para estar en forma*.",
          ],
          answer: "Se debe beber mucha agua y no se debe comer comida rápida para estar en forma.",
          yourTurn: {
            question: "Translate into Spanish using *Deberías*: 'You should do exercise regularly to reduce stress.'",
            answer: {
              type: "text",
              accept: [
                "Deberías hacer ejercicio regularmente para reducir el estrés",
                "Deberías hacer ejercicio regularmente para reducir el estrés.",
              ],
              display: "Deberías hacer ejercicio regularmente para reducir el estrés.",
            },
            solution: "*Deberías* (with accent on *í*!) + infinitive *hacer ejercicio regularmente* + *para reducir el estrés*.",
          },
        },
        {
          title: "Matching reflexive pronouns after personal vs impersonal advice",
          problem: "Compare and translate both sentences: (a) 'One must go to bed early.' (*hay que*)  (b) 'You should go to bed early.' (*deberías*)",
          steps: [
            "(a) Impersonal *hay que* keeps *-se* on the reflexive infinitive: **Hay que acostarse temprano.**",
            "(b) Personal *deberías* addresses *tú*, so *-se* switches to *-te*: **Deberías acostarte temprano.** (or *Te deberías acostar temprano.*)",
          ],
          answer: "(a) Hay que acostarse temprano. (b) Deberías acostarte temprano.",
        },
      ],
      keyPoints: [
        "Every advice phrase (**se debe, no se debe, hay que, tienes que, deberías, es importante / imprescindible**) is followed directly by an **infinitive**.",
        "Never write *hay que + conjugated verb* or *se debe + conjugated verb* (*Hay que comer*, NEVER *Hay que comes*).",
        "Remember the written accent on **deberías** (conditional *tú* of *deber*).",
        "Switch *-se* to **-te** on reflexive infinitives after *deberías* or *tienes que* (*Deberías relajarte* vs *Hay que relajarse*).",
      ],
      strategies: [
        "Use the **Variety Rule** in exam writing: never repeat the same advice opener twice — cycle through *Hay que*, *Se debe*, *Deberías*, *No deberías* and *Es imprescindible*.",
        "Always add a **para + infinitive** payoff (*para estar en forma, para concentrarte mejor*) to extend every simple advice sentence.",
        "Notice the difference between *No tienes que* ('you don't have to' — optional) and *No se debe / No deberías* ('you must not / should not' — advice against!).",
      ],
      thinkDeeper:
        "Why is ***No tienes que** comer comida basura* NOT the best translation of 'You must not eat junk food'? Compare the meanings of *no tienes que* vs *no se debe / no debes*!",
    },

    // =========================================================================
    // SECTION 3: sport-fitness-stress
    // =========================================================================
    {
      id: "sport-fitness-stress",
      heading: "Sport, Sleep, Screen Time & Mental Wellbeing",
      discovery: {
        problem:
          "Read these two student quotes and spot the two different ways Spanish expresses routine frequency and reflexive actions:\n- *Juego al tenis **tres veces a la semana** porque **me ayuda a relajarme** y **reduce el estrés**.*\n- *Sin embargo, **a menudo** **me acuesto** tarde porque paso **demasiado tiempo delante de la pantalla**.*\n\nLook closely at *acostarse* → *me acuesto* and *a la semana*!",
        idea:
          "(1) Frequency phrases use **a la** (*tres veces **a la** semana*, *dos veces **al** día*), not *en*. (2) *Acostarse* is both **reflexive** (*me*) and an **o → ue stem-changer** (*acuesto*), while *me ayuda a relajarme* keeps *-me* attached to the infinitive!",
      },
      body: `Healthy living in Year 9 covers **physical fitness**, **sleep hygiene**, **screen habits** and **mental wellbeing** (*el bienestar mental*).

### Benefits of Sport vs Drawbacks of Sedentary Habits
- **Positive impacts of exercise**:
  - *Hacer deporte **me ayuda a relajarme*** (helps me to relax — notice **a** after *ayudar*!)
  - ***Reduce el estrés** y la ansiedad* (reduces stress and anxiety)
  - ***Me da energía*** y ***mejora el sueño*** (gives me energy and improves sleep)
  - ***Despeja la mente*** y ***fortalece el corazón*** (clears the mind and strengthens the heart)
- **Drawbacks of unhealthy routines**:
  - ***Pasar demasiado tiempo delante de la pantalla*** (spending too much time in front of the screen)
  - ***Acostarse tarde*** y ***no descansar lo suficiente*** (going to bed late and not resting enough)
  - ***Llevar una vida sedentaria*** (leading a sedentary life) → *provoca **cansancio** y **falta de concentración***.

### Frequency Adverbs & Reflexive Daily Verbs
| Frequency Expression | Meaning | Reflexive Routine Verb (*yo* present) |
|---|---|---|
| **todos los días / a diario** | every day / daily | **me levanto** temprano (*levantarse*) |
| **tres veces a la semana** | three times a week | **me acuesto** tarde (*acostarse*, *o→ue*) |
| **a menudo / regularmente** | often / regularly | **me relajo** (*relajarse*) |
| **de vez en cuando** | from time to time | **me siento** con energía (*sentirse*, *e→ie*) |
| **rara vez / casi nunca / nunca** | rarely / almost never / never | **me desconecto** del móvil (*desconectarse*) |

Remember: **jugar a** + definite article is for ball/team sports (*juego **al** fútbol / **al** tenis / **a la** petanca*), whereas **hacer** is for individual activities (*hago natación / ciclismo / atletismo / yoga*).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mind-body wellbeing cycle showing sport benefits versus screen time drawbacks and frequency scale"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Deporte, Sueño y Bienestar Mental — Cause &amp; Effect</text><rect x="20" y="46" width="250" height="122" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="145" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Active Routine → Benefits</text><text x="34" y="90" font-size="11" fill="var(--ink)">• me ayuda a relajarme</text><text x="34" y="110" font-size="11" fill="var(--ink)">• reduce el estrés y la ansiedad</text><text x="34" y="130" font-size="11" fill="var(--ink)">• me da energía &amp; despeja la mente</text><text x="34" y="150" font-size="11" fill="var(--ink)">• mejora el sueño &amp; fortalece el corazón</text><rect x="290" y="46" width="250" height="122" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="415" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Sedentary Routine → Drawbacks</text><text x="304" y="90" font-size="11" fill="var(--ink)">• demasiado tiempo ante la pantalla</text><text x="304" y="110" font-size="11" fill="var(--ink)">• acostarse tarde (me acuesto)</text><text x="304" y="130" font-size="11" fill="var(--ink)">• no descansar lo suficiente</text><text x="304" y="150" font-size="11" fill="var(--ink)">• provoca cansancio y estrés</text><rect x="20" y="182" width="520" height="52" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="201" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Frequency Scale (Low → High)</text><text x="280" y="222" text-anchor="middle" font-size="11" fill="var(--ink)">nunca → rara vez → de vez en cuando → a menudo → tres veces a la semana → todos los días</text></svg>`,
      diagramCaption: "Linking physical activity, screen time, sleep and frequency adverbs for nuanced Year 9 answers.",
      whyItWorks:
        "In Spanish, *ayudar* ALWAYS links to a following action with the preposition **a** (*me ayuda **a** relajarme*, *te ayuda **a** dormir mejor*). Similarly, *jugar* links to sports with **a + el/la** (*juego **al** baloncesto*), making prepositions one of the fastest ways to sound authentic.",
      workedExamples: [
        {
          title: "Explaining why sport supports mental wellbeing",
          problem: "Translate into Spanish: 'I go out for a run three times a week because it helps me to relax and reduces stress.'",
          steps: [
            "'I go out for a run' = *salir* (*yo*: irregular *yo-go* **salgo**) + *a correr*.",
            "'Three times a week' = *tres veces a la semana*.",
            "'Because it helps me to relax' = *porque me ayuda a relajarme* (don't forget **a**!).",
            "'And reduces stress' = *y reduce el estrés* (accent on *é*!).",
          ],
          answer: "Salgo a correr tres veces a la semana porque me ayuda a relajarme y reduce el estrés.",
          yourTurn: {
            question: "Translate into Spanish: 'I often go to bed late because I spend too much time in front of the screen.'",
            answer: {
              type: "text",
              accept: [
                "A menudo me acuesto tarde porque paso demasiado tiempo delante de la pantalla",
                "A menudo me acuesto tarde porque paso demasiado tiempo delante de la pantalla.",
                "Me acuesto tarde a menudo porque paso demasiado tiempo delante de la pantalla",
                "Me acuesto tarde a menudo porque paso demasiado tiempo delante de la pantalla.",
              ],
              display: "A menudo me acuesto tarde porque paso demasiado tiempo delante de la pantalla.",
            },
            solution: "Reflexive stem-changer *me acuesto* (*o → ue*) + *paso demasiado tiempo delante de la pantalla*.",
          },
        },
        {
          title: "Choosing jugar al vs hacer for sports",
          problem: "Fill both gaps accurately: *Los martes ______ ______ tenis y los jueves ______ natación.*",
          steps: [
            "Tennis is a ball/racket game → *jugar* (*u → ue* → **juego**) + *a + el* = **al** (*juego al tenis*).",
            "Swimming (*natación*) takes **hacer** (*yo-go* → **hago**) with no article: *hago natación*.",
          ],
          answer: "Los martes juego al tenis y los jueves hago natación.",
        },
      ],
      keyPoints: [
        "Key wellbeing phrases: **me ayuda a relajarme**, **reduce el estrés**, **me da energía**, **despeja la mente**, **mejora el sueño**.",
        "Always include **a** after *ayudar* (*me ayuda **a** desconectarme*) and **al** after *jugar* + masculine sport (*juego **al** baloncesto*).",
        "Master boot stem-changers in routine reflexives: **me acuesto** (*o→ue*) and **me siento** (*e→ie*).",
        "Frequency scale: **nunca → rara vez → de vez en cuando → a menudo → tres veces a la semana → todos los días**.",
      ],
      strategies: [
        "Use **tiempo** (masculine!) with **demasiado tiempo delante de la pantalla** — never write *demasiada tiempo*.",
        "Balance every essay paragraph by discussing BOTH body (*fortalece el corazón*) AND mind (*reduce el estrés, despeja la mente*).",
        "Check *salir* (*yo*: **salgo**) and *hacer* (*yo*: **hago**) — both are *yo-go* verbs!",
      ],
      thinkDeeper:
        "Notice the sentence *El deporte **me** ayuda a relajar**me***. Why does *me* appear TWICE — once before *ayuda* and once attached to *relajar*?",
    },

    // =========================================================================
    // SECTION 4: future-health-resolutions
    // =========================================================================
    {
      id: "future-health-resolutions",
      heading: "Future Health Resolutions (Immediate & Simple Future)",
      discovery: {
        problem:
          "Compare these three sentences from a student's New Year's health pledge:\n1. *El mes pasado **comí** demasiados dulces y no **hice** ejercicio.*\n2. *Mañana **voy a comer** más verdura y **voy a acostarme** temprano.*\n3. *El año que viene **comeré** menos azúcar, **haré** más deporte y **tendré** más energía.*\n\nSpot how **hacer** and **tener** change in the Simple Future — and check which endings carry a written accent!",
        idea:
          "Regular Simple Future adds **-é, -ás, -á, -emos, -éis, -án** directly onto the full infinitive (*comeré*), while **irregular stems** shorten before taking the exact same endings: *hacer* → **har-** (**haré**), *tener* → **tendr-** (**tendré**), *poder* → **podr-** (**podré**), *salir* → **saldr-** (**saldré**)!",
      },
      body: `Comparing **past unhealthy habits** (Preterite) with **future health resolutions** (Immediate Future AND Simple Future) is the classic Year 9 top-band structure!

### Immediate Future vs Simple Future for Health Pledges
1. **Immediate Future (*ir a + infinitive*)** — definite, near-term plans:
   - *A partir de mañana **voy a beber** dos litros de agua al día.*
   - *Este fin de semana **vamos a salir** a correr en el parque.*
   - With reflexives, place the pronoun before *ir* OR attach it to the infinitive: ***Voy a acostarme** temprano* = ***Me voy a acostar** temprano*.
2. **Simple Future (*will do*)** — bold pledges and longer-term resolutions:
   - **Endings (ALL verbs, -ar/-er/-ir)**: **-é, -ás, -á, -emos, -éis, -án** (accent on every person EXCEPT **nosotros**!).
   - **Regular pledges**: ***Comeré** cinco raciones de fruta*, ***Beberé** más agua*, ***Dormiré** ocho horas*, ***Dejaré de** comer comida rápida* (*dejar de + infinitive* = to give up / stop doing!).

### High-Frequency Irregular Simple Future Stems for Health
| Infinitive | Irregular Stem | *yo* Form | Resolution Example |
|---|---|---|---|
| **hacer** (to do) | **har-** | **haré** | *Haré ejercicio cuatro veces a la semana.* |
| **tener** (to have) | **tendr-** | **tendré** | *Tendré más energía en clase.* |
| **poder** (to be able) | **podr-** | **podré** | *Podré concentrarme mucho mejor.* |
| **salir** (to go out) | **saldr-** | **saldré** | *Saldré a correr todas las mañanas.* |
| **poner** (to put) | **pondr-** | **pondré** | *Me pondré en forma este año.* |

### Contrasting With Past Habits (Preterite)
Open your paragraph with what went wrong recently:
- *El trimestre pasado **me acosté** tarde, **comí** demasiada comida rápida y **no hice** suficiente deporte.*
- *Sin embargo, a partir de ahora **voy a cambiar** mis hábitos y **llevaré** una vida mucho más sana.*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Preterite past habits versus Immediate Future and Simple Future health resolutions including irregular stems"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Past Habits → Future Health Resolutions (Simple Future Map)</text><rect x="20" y="46" width="160" height="122" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="100" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Before (Preterite)</text><text x="32" y="92" font-size="11" fill="var(--ink)">comí comida rápida</text><text x="32" y="114" font-size="11" fill="var(--ink)">me acosté tarde</text><text x="32" y="136" font-size="11" fill="var(--ink)">no hice ejercicio</text><text x="32" y="156" font-size="11" fill="var(--ink)">bebí refrescos</text><rect x="194" y="46" width="164" height="122" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="276" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Near Plan (Ir a + inf.)</text><text x="206" y="92" font-size="11" fill="var(--ink)">voy a beber agua</text><text x="206" y="114" font-size="11" fill="var(--ink)">voy a acostarme pronto</text><text x="206" y="136" font-size="11" fill="var(--ink)">voy a dejar de picar</text><text x="206" y="156" font-size="11" fill="var(--ink)">vamos a entrenar</text><rect x="372" y="46" width="168" height="122" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="456" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Simple Future (Will)</text><text x="384" y="92" font-size="11" fill="var(--ink)">comeré menos azúcar</text><text x="384" y="114" font-size="11" fill="var(--ink)">dejaré de comer grasa</text><text x="384" y="136" font-size="11" font-weight="700" fill="var(--good)">haré · tendré</text><text x="384" y="156" font-size="11" font-weight="700" fill="var(--good)">podré · saldré</text><rect x="20" y="182" width="520" height="52" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/><text x="280" y="203" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Simple Future Endings: -é · -ás · -á · -emos (NO accent!) · -éis · -án</text><text x="280" y="223" text-anchor="middle" font-size="11" fill="var(--ink-2)">Attach to FULL infinitive (dormiré, beberemos) — or irregular stem (har-, tendr-, podr-, saldr-, pondr-)</text></svg>`,
      diagramCaption: "How to pivot from past unhealthy habits to Immediate Future and Simple Future resolutions.",
      whyItWorks:
        "Historically, the Spanish Simple Future grew from sticking the present tense of *haber* (*he, has, ha, hemos, habéis, han*) onto the end of the infinitive (*comer + he → comeré*). That is why ALL three verb groups (*-ar, -er, -ir*) share the exact same 6 endings, and why *-emos* has no accent!",
      workedExamples: [
        {
          title: "Writing a past-vs-future resolution sentence",
          problem: "Translate into Spanish: 'Last month I did not do exercise, but next month I will do more sport and I will have more energy.'",
          steps: [
            "Preterite of *hacer* (*yo*): *no hice ejercicio*.",
            "Time transition: *pero el mes que viene* (or *el próximo mes*).",
            "Irregular Simple Future of *hacer* (*har-*) and *tener* (*tendr-*): **haré** más deporte y **tendré** más energía.",
          ],
          answer: "El mes pasado no hice ejercicio, pero el mes que viene haré más deporte y tendré más energía.",
          yourTurn: {
            question: "Translate into Spanish using the Simple Future: 'From now on I will give up eating fast food and I will sleep eight hours.' (Use *dejar de*)",
            answer: {
              type: "text",
              accept: [
                "A partir de ahora dejaré de comer comida rápida y dormiré ocho horas",
                "A partir de ahora dejaré de comer comida rápida y dormiré ocho horas.",
              ],
              display: "A partir de ahora dejaré de comer comida rápida y dormiré ocho horas.",
            },
            solution: "*Dejar de + infinitive* in Simple Future: **dejaré de comer comida rápida** + **dormiré ocho horas**.",
          },
        },
        {
          title: "Checking nosotros accents in Simple Future",
          problem: "Fix the two errors in this pledge: *El año que viene nosotros comerémos menos dulces y poderemos correr cinco kilómetros.*",
          steps: [
            "Error 1: *nosotros* (*-emos*) NEVER carries a written accent in Simple Future → **comeremos**.",
            "Error 2: *poder* uses the irregular Simple Future stem **podr-** → **podremos**.",
          ],
          answer: "El año que viene nosotros comeremos menos dulces y podremos correr cinco kilómetros.",
        },
      ],
      keyPoints: [
        "Immediate Future = **voy/vas/va/vamos/vais/van + a + infinitive** (always include **a**!).",
        "Simple Future = **full infinitive + -é, -ás, -á, -emos, -éis, -án** (accent on every ending EXCEPT **-emos**!).",
        "Five key irregular health-resolution stems: **hacer → har-**, **tener → tendr-**, **poder → podr-**, **salir → saldr-**, **poner → pondr-**.",
        "Use **dejar de + infinitive** to say 'to give up / stop doing an unhealthy habit' (*dejaré de beber refrescos*).",
      ],
      strategies: [
        "Never drop the *-ar/-er/-ir* before adding Simple Future endings (*comeré*, NOT *comé* — *comé* does not exist!).",
        "Use the **Before → Now → Future** arc: *El mes pasado... (Preterite) → Sin embargo, mañana voy a... (Immediate Future) → En el futuro... (Simple Future)*.",
        "Remember *dejar de* always takes an **infinitive**, even when English uses *-ing* ('give up eat**ing**' → *dejar de **comer***).",
      ],
      thinkDeeper:
        "Why do Spanish speakers say *Dejaré de **comer** comida basura* (infinitive) instead of *Dejaré de comiendo*? Think about Spanish's golden preposition rule!",
    },
  ],
  learn: {
    flashcards: [
      { front: "llevar una vida sana / una dieta equilibrada", back: "to lead a healthy life / follow a balanced diet" },
      { front: "comer cinco raciones de fruta y verdura", back: "to eat five portions of fruit and vegetables (plural raciones drops the accent!)" },
      { front: "beber mucha agua", back: "to drink lots of water (agua is feminine, so mucha agua — never mucho agua!)" },
      { front: "evitar la comida basura / los refrescos azucarados", back: "to avoid junk food / sugary fizzy drinks" },
      { front: "saltarse el desayuno / picar entre horas", back: "to skip breakfast / to snack between meals" },
      { front: "se debe / no se debe + infinitive", back: "one should / must not... (ALWAYS followed by an unconjugated infinitive!)" },
      { front: "hay que / no hay que + infinitive", back: "one must / must not... (impersonal — never changes for person)" },
      { front: "deberías / no deberías + infinitive", back: "you should / should not... (polite personal advice; remember accent on í!)" },
      { front: "es imprescindible / aconsejable + infinitive", back: "it is essential / advisable to..." },
      { front: "Deberías acostarte temprano vs Hay que acostarse temprano", back: "Personal deberías switches reflexive -se → -te; impersonal hay que keeps -se!" },
      { front: "me ayuda a relajarme / reduce el estrés", back: "it helps me to relax (always a after ayudar!) / it reduces stress" },
      { front: "pasar demasiado tiempo delante de la pantalla", back: "to spend too much time in front of the screen" },
      { front: "acostarse (me acuesto) / sentirse (me siento)", back: "to go to bed (o→ue reflexive) / to feel (e→ie reflexive)" },
      { front: "dejar de + infinitive", back: "to give up / stop doing something (e.g. dejaré de comer comida rápida)" },
      { front: "haré / tendré / podré / saldré / pondré", back: "I will do / have / be able to / go out / put (key irregular Simple Future stems!)" },
      { front: "comeremos / beberemos / haremos", back: "we will eat / drink / do (nosotros -emos is the ONLY Simple Future ending without an accent!)" },
    ],
    mustKnow: [
      "Can you name 5+ healthy habits and 5+ unhealthy habits using exact nutrition vocabulary (*vitaminas, fibra, grasa, refrescos azucarados*)?",
      "Can you agree *mucho/a/os/as* and *demasiado/a/os/as* accurately with tricky nouns (*mucha agua, demasiada grasa, demasiado azúcar*)?",
      "Can you give varied lifestyle advice using **se debe**, **no se debe**, **hay que**, **deberías**, **no deberías** and **es imprescindible** + infinitive?",
      "Can you switch reflexive pronouns accurately after personal vs impersonal advice (*Hay que acostarse* vs *Deberías acostarte*)?",
      "Can you distinguish *no tienes que* ('you don't have to') from *no se debe / no deberías* ('you shouldn't / must not')?",
      "Can you explain physical AND mental wellbeing benefits of sport (*me ayuda a relajarme, reduce el estrés, despeja la mente, fortalece el corazón*)?",
      "Can you use frequency expressions (*todos los días, tres veces a la semana, a menudo, de vez en cuando, rara vez*) accurately?",
      "Can you conjugate reflexive routine stem-changers (*me acuesto, me siento*) and *jugar al* vs *hacer* sports?",
      "Can you form BOTH Immediate Future (*voy a + infinitive*) and Simple Future (*infinitive + -é/-ás/-á/-emos/-éis/-án*) including irregular stems (*har-, tendr-, podr-, saldr-*)?",
      "Can you use **dejar de + infinitive** to contrast past bad habits (Preterite) with future health resolutions?",
    ],
    misconceptions: [
      { wrong: "Se debe comes cinco raciones de fruta.", right: "Se debe comer cinco raciones de fruta. (NEVER conjugate the verb after se debe / hay que / deberías!)" },
      { wrong: "Bebo mucho agua y como demasiado grasa.", right: "Bebo mucha agua y como demasiada grasa. (Both agua and grasa are feminine!)" },
      { wrong: "No tienes que comer comida basura (= You mustn't).", right: "No se debe / No deberías comer comida basura. (No tienes que means 'you don't have to', not 'you must not'!)" },
      { wrong: "El deporte me ayuda relajarme.", right: "El deporte me ayuda a relajarme. (Ayudar ALWAYS needs the preposition a before an infinitive!)" },
      { wrong: "El año que viene haceré más deporte y teneré energía.", right: "El año que viene haré más deporte y tendré energía. (Irregular Simple Future stems: har-, tendr-!)" },
      { wrong: "Nosotros comerémos comida casera.", right: "Nosotros comeremos comida casera. (Nosotros -emos is the ONLY Simple Future ending with NO accent!)" },
      { wrong: "Dejaré de comiendo dulces.", right: "Dejaré de comer dulces. (After prepositions like de or para, Spanish ALWAYS uses the infinitive, never -ndo!)" },
    ],
    examMistakes: [
      "Conjugating the verb after *se debe, hay que, tienes que, deberías* or *es importante* instead of leaving it in the infinitive.",
      "Writing *mucho agua* instead of **mucha agua** (*agua* is feminine even though singular takes *el agua*!).",
      "Forgetting the preposition **a** in *voy **a** hacer ejercicio* or *me ayuda **a** relajarme*.",
      "Using regular stems for irregular Simple Future verbs (*haceré, teneré, poderé, saliré* instead of **haré, tendré, podré, saldré**).",
      "Putting a written accent on *nosotros* Simple Future (*comerémos* instead of **comeremos**) or omitting it on *yo / tú / él / ellos* (*comere* instead of **comeré**).",
      "Forgetting to change *-se* to **-te** after personal advice (*Deberías acostarse* instead of **Deberías acostarte**).",
      "Translating 'three times a week' as *tres veces en una semana* instead of **tres veces a la semana**.",
    ],
    mnemonics: [
      {
        topic: "Irregular Simple Future Stems (Health)",
        device: "H-T-P-S-P: Haré, Tendré, Podré, Saldré, Pondré",
        explanation: "Memorise this 5-verb health pledge: **H**aré deporte, **T**endré energía, **P**odré dormir mejor, **S**aldré a correr y me **P**ondré en forma!",
      },
      {
        topic: "Simple Future Accents",
        device: "Five Hats, One Bare Head (-emos)",
        explanation: "**-é, -ás, -á, -éis, -án** all wear a written accent hat — ONLY **nosotros (-emos)** goes bareheaded (*comeremos, haremos*)!",
      },
      {
        topic: "Advice + Infinitive Rule",
        device: "One Conjugated Boss Per Clause",
        explanation: "Once *se debe, hay que, tienes que, deberías* or *es imprescindible* takes the boss seat, the next verb MUST stay in the infinitive (*-ar / -er / -ir*).",
      },
    ],
    realWorld: [
      {
        title: "La Dieta Mediterránea (UNESCO Heritage)",
        detail: "Recognised by UNESCO as Intangible Cultural Heritage, Spain's traditional Mediterranean diet relies on extra-virgin olive oil, fresh vegetables, legumes (*lentejas, garbanzos*), oily fish and nuts.",
        emoji: "🫒",
      },
      {
        title: "El Paseo — Spain's Evening Walk",
        detail: "Across Spanish towns and cities, families and friends take *un paseo* (a relaxed evening stroll along pedestrian plazas) — blending light daily exercise with social connection and stress relief.",
        emoji: "🚶",
      },
      {
        title: "Spain's High Life Expectancy",
        detail: "Spain consistently ranks among the top countries globally for life expectancy (over 83 years), widely linked to home-cooked meals (*comida casera*), walkable neighbourhoods and strong social ties.",
        emoji: "❤️",
      },
      {
        title: "School Sports & Polideportivos",
        detail: "Spanish towns run public *polideportivos* (municipal sports centres) offering affordable swimming (*natación*), athletics, basketball and padel — Spain's fastest-growing racket sport!",
        emoji: "🎾",
      },
    ],
    videos: [
      {
        title: "Healthy Living in Spanish — La Vida Sana Vocabulary & Phrases",
        channel: "YouTube Search: Spanish Healthy Living",
        url: "https://www.youtube.com/results?search_query=spanish+la+vida+sana+healthy+living+gcse+year+9",
      },
      {
        title: "Se Debe, Hay Que & Deberías — Giving Advice in Spanish",
        channel: "YouTube Search: Spanish Health Advice",
        url: "https://www.youtube.com/results?search_query=se+debe+hay+que+deberias+spanish+advice+infinitive",
      },
      {
        title: "Spanish Simple Future Tense — Regular & Irregular Stems",
        channel: "YouTube Search: Spanish Simple Future",
        url: "https://www.youtube.com/results?search_query=spanish+simple+future+tense+irregular+stems+hare+tendre",
      },
      {
        title: "Reflexive Verbs for Daily Routine & Wellbeing in Spanish",
        channel: "YouTube Search: Spanish Reflexive Routine Verbs",
        url: "https://www.youtube.com/results?search_query=spanish+reflexive+verbs+acostarse+levantarse+relajarse",
      },
    ],
    formulas: [
      { name: "Five-a-Day Balanced Diet", formula: "Como cinco raciones de fruta y verdura y bebo mucha agua.", note: "Plural raciones has no accent; mucha agrees with fem. agua." },
      { name: "Impersonal Rule", formula: "Se debe / No se debe + [INFINITIVE]", note: "Never conjugate the second verb!" },
      { name: "Impersonal Necessity", formula: "Hay que / No hay que + [INFINITIVE]", note: "Always hay que (never cambios for person)." },
      { name: "Personal Polite Advice", formula: "Deberías / No deberías + [INFINITIVE]", note: "Accent on í; reflexive -se becomes -te (deberías acostarte)." },
      { name: "Value Judgement Advice", formula: "Es importante / imprescindible / aconsejable + [INFINITIVE]", note: "Follow directly with infinitive, no que!" },
      { name: "Purpose Clause", formula: "…para + [INFINITIVE] (e.g. para estar en forma / reducir el estrés)", note: "Always infinitive after para." },
      { name: "Mental Wellbeing Link", formula: "Hacer deporte me ayuda a + [INFINITIVE] y reduce el estrés.", note: "Mandatory a after ayudar!" },
      { name: "Frequency Pattern", formula: "[number] veces + a la semana / al día / al mes", note: "Use a la / al, never en!" },
      { name: "Giving Up a Bad Habit", formula: "Dejaré de / Voy a dejar de + [INFINITIVE]", note: "Never use -ndo after de!" },
      { name: "Simple Future Pattern", formula: "[full infinitive or har-/tendr-/podr-/saldr-] + -é, -ás, -á, -emos, -éis, -án", note: "Accent on 5 endings; NO accent on -emos." },
    ],
  },
};
