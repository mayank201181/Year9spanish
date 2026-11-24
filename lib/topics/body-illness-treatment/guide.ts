import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "body-illness-treatment",
  title: "Body Parts, Illness & Treatment (El cuerpo y la salud)",
  strand: "Term 2: Food & Health",
  icon: "🩺",
  summary: "Describe aches with me duele(n), express symptoms and injuries with tener, estar and me he…, use desde hace at the pharmacy, and narrate a past accident.",
  intro:
    "Whether you twist an ankle on a Tanglin rugby tour in Madrid or wake up with a sore throat before a school trip to Salamanca, knowing how to talk about your body and health in Spanish is genuinely essential. Better still, this unit packs some of the smartest grammar patterns in Year 9 Spanish: *doler* (which flips subject and object just like *gustar*), the *tener* vs *estar* split for symptoms, the present tense with *desde hace* for duration, and combining Preterite accidents with Future recovery plans.",
  guide: [
    {
      id: "body-parts-doler",
      heading: "Parts of the Body & Using Me duele / Me duelen",
      discovery: {
        problem:
          "Compare these two correct Spanish sentences:\n\n- **Me duele la cabeza.** (*My head hurts.*)\n- **Me duelen los pies.** (*My feet hurt.*)\n\nNotice THREE surprising differences from English! What changes on the verb, what word replaces *my*, and why does *la mano* look suspicious?",
        idea:
          "1. *Doler* works backwards like *gustar*: the body part is the grammatical subject, so singular → **duele** and plural → **duelen**.\n2. Spanish uses the definite article (**el / la / los / las**), NEVER *mi / mis*, because *me* already tells us whose body part it is.\n3. Watch gender traps: **la mano** is feminine despite ending in *-o*, and **los pies** / **los dientes** / **los oídos** are masculine!",
      },
      body: `To say that something hurts in Spanish, you use the stem-changing verb **doler** (*o → ue*), which behaves exactly like **gustar**. Instead of saying *"I hurt my head"*, Spanish literally says *"To me, the head hurts"* (**Me duele la cabeza**).

### 1. The Four-Piece *Doler* Formula

| 1. Who hurts? (IOP) | 2. Singular or plural verb? | 3. Definite article | 4. Body part |
|---|---|---|---|
| **Me** (to me) | **duele** (1 part) | **el / la** | **la cabeza**, **el estómago**, **la garganta** |
| **Te** (to you) | **duelen** (2+ parts) | **los / las** | **los oídos**, **los dientes**, **las piernas** |
| **Le** (to him/her/usted) | **duele / duelen** | **el / la / los / las** | **la espalda**, **las rodillas** |
| **Nos** (to us) | **duele / duelen** | **el / la / los / las** | **el brazo**, **los pies** |
| **Os** (to you all) | **duele / duelen** | **el / la / los / las** | **la mano**, **los ojos** |
| **Les** (to them) | **duele / duelen** | **el / la / los / las** | **el cuello**, **los brazos** |

To name a specific person, place **A + person** at the start AND keep the pronoun **le / les**:
- **A Sofía le duele la garganta.** (*Sofía has a sore throat.*)
- **A mis hermanos les duelen las rodillas.** (*My brothers' knees hurt.*)

### 2. High-Frequency Body Parts (With Exact Articles!)

- **Head & face**: *la cabeza* (head), *la cara* (face), *el ojo / los ojos* (eye/s), *el oído / los oídos* (inner ear/s — always use **el oído** for earache!), *la oreja* (outer ear), *la nariz* (nose), *la boca* (mouth), *el diente / los dientes* (tooth/teeth), *la muela / las muelas* (back tooth/teeth), *la garganta* (throat), *el cuello* (neck).
- **Torso**: *el pecho* (chest), *el estómago* (stomach — mind the accent!), *la barriga* (tummy), *la espalda* (back), *el hombro* (shoulder).
- **Arms & legs**: *el brazo* (arm), *el codo* (elbow), *la muñeca* (wrist), ***la mano*** (hand — feminine!), *el dedo* (finger), *la pierna* (leg), *la rodilla* (knee), *el tobillo* (ankle), *el pie / los pies* (foot/feet), *el dedo del pie* (toe).

### 3. Intensifiers & Other Tenses of *Doler*

Add **mucho** (a lot), **muchísimo** (really badly) or **un poco** (a bit) right after *duele(n)* or at the end: *Me duele mucho la espalda*. Notice you NEVER use *muy* with *doler* (*muy* only goes before adjectives/adverbs).

For past aches, switch to the Preterite: **me dolió** (singular) / **me dolieron** (plural) — *Ayer me dolió el estómago*.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the body showing masculine and feminine Spanish body parts with me duele and me duelen">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">El cuerpo humano: me duele (sg.) vs me duelen (pl.)</text>
  <circle cx="280" cy="64" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <rect x="258" y="86" width="44" height="66" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <line x1="258" y1="94" x2="226" y2="142" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"/>
  <line x1="302" y1="94" x2="334" y2="142" stroke="var(--brand)" stroke-width="7" stroke-linecap="round"/>
  <line x1="269" y1="152" x2="262" y2="218" stroke="var(--brand)" stroke-width="8" stroke-linecap="round"/>
  <line x1="291" y1="152" x2="298" y2="218" stroke="var(--brand)" stroke-width="8" stroke-linecap="round"/>
  <line x1="262" y1="58" x2="176" y2="54" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="170" y="58" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">la cabeza / los oídos</text>
  <line x1="274" y1="84" x2="176" y2="86" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="170" y="90" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">la garganta</text>
  <line x1="242" y1="118" x2="176" y2="118" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="170" y="122" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">el brazo</text>
  <line x1="224" y1="145" x2="176" y2="152" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="170" y="156" text-anchor="end" font-size="12" font-weight="700" fill="var(--bad)">la mano (fem.!)</text>
  <line x1="264" y1="190" x2="176" y2="190" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="170" y="194" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">la rodilla</text>
  <line x1="260" y1="220" x2="176" y2="224" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="170" y="228" text-anchor="end" font-size="12" font-weight="600" fill="var(--ink)">el pie / los pies</text>
  <line x1="296" y1="62" x2="386" y2="56" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="392" y="60" font-size="12" font-weight="600" fill="var(--ink)">los ojos / los dientes</text>
  <line x1="302" y1="106" x2="386" y2="94" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="392" y="98" font-size="12" font-weight="600" fill="var(--ink)">el pecho / la espalda</text>
  <line x1="296" y1="130" x2="386" y2="130" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="392" y="134" font-size="12" font-weight="600" fill="var(--ink)">el estómago</text>
  <line x1="296" y1="176" x2="386" y2="168" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="392" y="172" font-size="12" font-weight="600" fill="var(--ink)">la pierna / las piernas</text>
  <line x1="300" y1="210" x2="386" y2="204" stroke="var(--ink-2)" stroke-width="1.3"/>
  <text x="392" y="208" font-size="12" font-weight="600" fill="var(--ink)">el tobillo</text>
  <rect x="386" y="218" width="158" height="22" rx="6" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="465" y="233" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">NEVER mi — use el / la!</text>
</svg>`,
      diagramCaption: "Match duele (singular) or duelen (plural) to the body part, and always pair it with el, la, los or las.",
      whyItWorks:
        "Spanish avoids redundant possessives with body parts and clothes whenever the pronoun (*me, te, le, nos, os, les*) already identifies the owner. Saying *me duele mi cabeza* sounds like saying 'to me, my own head hurts' — doubly stated!",
      keyPoints: [
        "**Me duele** + singular noun (*la cabeza, el estómago, la mano*); **Me duelen** + plural noun (*los pies, los oídos, las piernas*).",
        "Always use the definite article (**el / la / los / las**), NEVER *mi / tu / su* with *doler*.",
        "Memorise the top gender traps: **la mano** (feminine), **el pie** (masculine), **el diente** (masculine), **la nariz** (feminine).",
        "Use **el oído / los oídos** (inner ear) for earache, not *la oreja* (outer ear).",
        "Add **mucho** (not *muy*) for intensity: *Me duele mucho la espalda*.",
      ],
      strategies: [
        "**Count the body parts first**: before writing *duele* or *duelen*, ask 'is the body part singular (1) or plural (2+)?'",
        "**Article swap check**: scan your Spanish sentence for *mi/mis* next to a body part and immediately swap it to *el/la/los/las*.",
      ],
      thinkDeeper:
        "If two singular body parts hurt in one sentence — e.g., *my head and my throat hurt* — should Spanish use **duele** or **duelen**? Test *Me duelen la cabeza y la garganta*: because the compound subject is plural (two things!), Spanish uses **duelen**!",
      workedExamples: [
        {
          title: "Building accurate doler sentences for different people",
          problem: "Translate into Spanish: (a) My teeth hurt a lot. (b) Marcos has a stomach ache.",
          steps: [
            "(a) Subject = 'teeth' → plural masculine: **los dientes**.",
            "Plural subject requires **duelen** + indirect pronoun **me** + intensifier **mucho** (never *muy*).",
            "(b) Person = Marcos → start with **A Marcos** and include the pronoun **le**.",
            "Subject = 'stomach' → singular masculine with accent: **el estómago** → verb **duele**.",
          ],
          answer: "(a) Me duelen mucho los dientes. (b) A Marcos le duele el estómago.",
          yourTurn: {
            question: "Translate into Spanish: My ears hurt. (Use inner ears, present tense.)",
            answer: {
              type: "text",
              accept: ["Me duelen los oídos", "A mí me duelen los oídos"],
              display: "Me duelen los oídos",
            },
            solution: "Inner ears = **los oídos** (plural, with accent on **í**), so *doler* becomes **duelen** → **Me duelen los oídos**.",
          },
        },
        {
          title: "Spotting and fixing a gender trap",
          problem: "Find and fix the TWO errors in: *Me duele mi mano y tengo dolor de el estomago.*",
          steps: [
            "Error 1: With *doler*, replace possessive *mi* with the definite article. Because **mano** is feminine, use **la mano**.",
            "Error 2: *de + el* must contract to **del**, and **estómago** needs an accent on the **ó**.",
          ],
          answer: "Me duele la mano y tengo dolor del estómago. (Or more naturally: Me duele la mano y tengo dolor de estómago.)",
        },
      ],
    },
    {
      id: "illnesses-symptoms-injuries",
      heading: "Illnesses, Symptoms & Injuries (Tener & Estar)",
      discovery: {
        problem:
          "Look at these three pairs of symptoms:\n\n- **Tengo fiebre** / **Tengo tos** / **Tengo gripe**\n- **Estoy resfriado** / **Estoy mareada** / **Estoy cansado**\n- **Me he roto la pierna** / **Me he torcido el tobillo**\n\nWhy does Group 1 never change for gender, Group 2 DOES change (*-o / -a*), and Group 3 uses **me he + participle**?",
        idea:
          "Group 1 pairs **tener** with **nouns** (*fever, cough, flu*), so they stay fixed. Group 2 pairs **estar** with **adjectives** (*having a cold, dizzy, tired*), which must agree with the speaker's gender and number! Group 3 uses the **reflexive perfect tense** to announce a recent injury whose effect is still happening right now.",
      },
      body: `Describing how you feel in Spanish depends on whether the symptom is a **noun** (**tener**), a **temporary state / adjective** (**estar**), or a **recent injury** (**me he + past participle**).

### 1. *Tener* + Symptom Nouns (No Gender Change)

In English we often say *"I am..."* or *"I have a..."*, whereas Spanish drops *un/una* for most core illnesses:
- **Tengo fiebre** (I have a fever / temperature)
- **Tengo tos** (I have a cough)
- **Tengo catarro / gripe** (I have a cold / the flu)
- **Tengo náuseas** (I feel sick / nauseous)
- **Tengo escalofríos** (I have the chills)
- **Tengo dolor de cabeza / de garganta / de muelas** (I have a headache / sore throat / toothache)
- **Tengo alergia a...** (I am allergic to...) — *Tengo alergia al polen / a los frutos secos.*
- Countable injuries keep *una / un*: **Tengo una quemadura** (a burn), **Tengo una herida** (a wound/cut), **Tengo una insolación** (sunstroke), **Tengo un moratón** (a bruise).

### 2. *Estar* + Condition Adjectives (Must Agree!)

Because temporary health states are adjectives with **estar**, change *-o → -a* for a female speaker and add *-s* for plural:
- **Estoy resfriado / resfriada** (I have a cold)
- **Estoy constipado / constipada** (I have a cold — **false friend!** Never means *constipated*!)
- **Estoy cansado / cansada** (I am tired)
- **Estoy mareado / mareada** (I feel dizzy)
- **Estoy enfermo / enferma** (I am ill)
- **Estoy pálido / pálida** (I look pale)
- **Estoy agotado / agotada** (I am exhausted)
- Fixed adverbs with *estar* do NOT change: **Estoy mal** (I feel unwell), **Estoy fatal** (I feel awful), **Estoy mejor** (I feel better).

### 3. Recent Injuries with the Reflexive Perfect (*Me he…*)

To tell a doctor *"I have broken / twisted / cut..."*, combine **me / te / se + he / has / ha + past participle + el/la + body part**:
- **Me he roto la pierna / el brazo / el dedo.** (*I have broken my leg / arm / finger.* — Note irregular participle **roto** from *romper*!)
- **Me he torcido el tobillo / la muñeca.** (*I have twisted/sprained my ankle / wrist.*)
- **Me he cortado el dedo.** (*I have cut my finger.*)
- **Me he quemado la mano.** (*I have burnt my hand.*)
- **Me he hecho daño en la rodilla.** (*I have hurt my knee.* — Note irregular participle **hecho** from *hacer*!)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-column decision map showing Tener plus nouns, Estar plus agreeing adjectives, and Me he plus past participle for injuries">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Choosing the Right Health Verb: TENER vs ESTAR vs ME HE…</text>
  <rect x="18" y="44" width="166" height="188" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="101" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">TENER + Noun</text>
  <text x="101" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">No gender agreement</text>
  <text x="30" y="110" font-size="11.5" fill="var(--ink)">• tengo fiebre</text>
  <text x="30" y="130" font-size="11.5" fill="var(--ink)">• tengo tos</text>
  <text x="30" y="150" font-size="11.5" fill="var(--ink)">• tengo gripe / catarro</text>
  <text x="30" y="170" font-size="11.5" fill="var(--ink)">• tengo náuseas</text>
  <text x="30" y="190" font-size="11.5" fill="var(--ink)">• tengo una quemadura</text>
  <text x="30" y="212" font-size="11" font-weight="600" fill="var(--good)">✓ fixed noun form</text>
  <rect x="197" y="44" width="166" height="188" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/>
  <text x="280" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">ESTAR + Adjective</text>
  <text x="280" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">Agrees: -o / -a / -os / -as</text>
  <text x="209" y="110" font-size="11.5" fill="var(--ink)">• estoy resfriado/a</text>
  <text x="209" y="130" font-size="11.5" fill="var(--ink)">• estoy mareado/a</text>
  <text x="209" y="150" font-size="11.5" fill="var(--ink)">• estoy cansado/a</text>
  <text x="209" y="170" font-size="11.5" fill="var(--ink)">• estoy enfermo/a</text>
  <text x="209" y="190" font-size="11.5" fill="var(--ink)">• estoy constipado/a</text>
  <text x="209" y="212" font-size="11" font-weight="600" fill="var(--good)">✓ match the patient!</text>
  <rect x="376" y="44" width="166" height="188" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.6"/>
  <text x="459" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">ME HE + Participle</text>
  <text x="459" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">Recent injury + el / la</text>
  <text x="388" y="110" font-size="11.5" fill="var(--ink)">• me he roto el brazo</text>
  <text x="388" y="130" font-size="11.5" fill="var(--ink)">• me he torcido el tobillo</text>
  <text x="388" y="150" font-size="11.5" fill="var(--ink)">• me he cortado el dedo</text>
  <text x="388" y="170" font-size="11.5" fill="var(--ink)">• me he quemado la mano</text>
  <text x="388" y="190" font-size="11.5" fill="var(--ink)">• me he hecho daño</text>
  <text x="388" y="212" font-size="11" font-weight="600" fill="var(--bad)">★ roto &amp; hecho irreg.!</text>
</svg>`,
      diagramCaption: "Sort every symptom into Noun (tener), State Adjective (estar + agreement), or Recent Injury (me he + participle).",
      whyItWorks:
        "Spanish uses **estar** (not *ser*) for illnesses because being sick, tired or dizzy is a temporary physical condition (*PLACE*: Position, Location, Action, Condition, Emotion). Meanwhile, **roto** (*broken*) and **hecho** (*done/made*) preserve older Latin participles rather than regular *-ido*.",
      keyPoints: [
        "Use **tener** + noun without *un/una* for core symptoms: *tengo fiebre, tengo tos, tengo gripe, tengo catarro, tengo náuseas*.",
        "Use **estar** + adjective with gender/number agreement: *Elena está mareada y cansada*.",
        "Watch the famous false friend: **estar constipado/a** means *to have a blocked-up cold*, NOT *to be constipated*.",
        "Form recent injuries with **me he + participle + el/la + body part**: *me he roto la pierna*, *me he torcido el tobillo*, *me he cortado el dedo*.",
        "Never write *me he rompido*: the past participle of *romper* is irregular (**roto**), and *hacer* is irregular (**hecho**).",
      ],
      strategies: [
        "**Noun or Adjective test**: if you can put 'a/the' before it in English (*a fever, a cough*), reach for **tener**; if you say 'I feel/am + adjective' (*dizzy, tired*), reach for **estar**.",
        "**Irregular participle radar**: whenever you see *romper* or *hacer* after *he/has/ha*, automatically trigger **roto** and **hecho**.",
      ],
      thinkDeeper:
        "Compare *Me he roto el brazo* (perfect) with *Me rompí el brazo ayer* (preterite). Why does a patient walking into A&amp;E usually say *Me he roto el brazo* today, whereas when telling a friend next month about ski camp they say *Me rompí el brazo en febrero*?",
      workedExamples: [
        {
          title: "Matching tener, estar and reflexive perfect to a patient profile",
          problem: "Lucía says: 'I have a fever, I feel dizzy, and I have sprained my ankle.' Translate into Spanish.",
          steps: [
            "'I have a fever' → noun symptom → **tengo fiebre** (no *una*).",
            "'I feel dizzy' → temporary state adjective for female Lucía → **estoy mareada** (feminine *-a*!).",
            "'I have sprained my ankle' → recent injury → **me he torcido el tobillo** (definite article *el*, never *mi*).",
          ],
          answer: "Tengo fiebre, estoy mareada y me he torcido el tobillo.",
          yourTurn: {
            question: "Translate into Spanish: I have broken my leg.",
            answer: {
              type: "text",
              accept: ["Me he roto la pierna", "Yo me he roto la pierna"],
              display: "Me he roto la pierna",
            },
            solution: "Use reflexive perfect **me he** + irregular participle **roto** + definite article **la pierna** → **Me he roto la pierna**.",
          },
        },
        {
          title: "Fixing a common false-friend and agreement slip",
          problem: "Why is *Soy enfermo y estoy fiebre* wrong, and how do you correct it for a boy?",
          steps: [
            "Illness is a temporary condition, so *ser* (*soy*) must become **estar** → **Estoy enfermo**.",
            "*Fiebre* is a noun, not an adjective, so it requires **tener** → **tengo fiebre**.",
          ],
          answer: "Estoy enfermo y tengo fiebre.",
        },
      ],
    },
    {
      id: "pharmacy-doctor-remedies",
      heading: "At the Doctor & Pharmacy: Treatments & Desde hace",
      discovery: {
        problem:
          "In English we say: *'I have had a sore throat for three days.'*\nIn Spanish, a patient tells the pharmacist:\n**Me duele la garganta desde hace tres días.**\n\nLook closely at the tense of **duele**! Is it past or present? Why does Spanish use THAT tense?",
        idea:
          "It is the **present tense**! Because the sore throat **still hurts right now**, Spanish uses **Present Tense + desde hace + time period** (*literally: 'my throat hurts since it makes three days'*). Using the past tense here would imply the pain already stopped!",
      },
      body: `In Spain, **la farmacia** (marked by a glowing green cross) is often the first stop for everyday illnesses like colds, coughs, insect bites or sunburn, while more serious injuries go to **el centro de salud** (health centre) or **el hospital / urgencias** (A&amp;E).

### 1. Expressing Duration: Present Tense + *desde hace*

This is one of the highest-value grammar structures in Year 9 Spanish:

**Present tense verb + desde hace + length of time**
- **Me duele la garganta desde hace tres días.** (*My throat has hurt for three days.*)
- **Tengo tos desde hace una semana.** (*I have had a cough for a week.*)
- **Estoy mareado desde hace dos horas.** (*I have felt dizzy for two hours.*)
- **Me duelen los oídos desde hace cuatro días.** (*My ears have hurt for four days.*)

To ask *"How long?"*, the doctor says:
- **¿Desde cuándo te duele la cabeza?** (*Since when has your head hurt?*)
- **¿Cuánto tiempo hace que tienes fiebre?** (*How long have you had a fever?*)

Notice you can also put time first with **Hace + time + que + present**: *Hace dos días que tengo fiebre.*

### 2. Essential Pharmacy & Treatment Vocabulary

| Spanish | English | Usage tip |
|---|---|---|
| **las pastillas** | tablets / pills | *Tomar dos pastillas cada ocho horas* |
| **el jarabe** | syrup (cough medicine) | *Tomar una cucharada de jarabe* |
| **la crema / la pomada** | cream / ointment | *Ponerse crema dos veces al día* |
| **una tirita** | a plaster (band-aid) | Spain standard! (*ponerse una tirita*) |
| **una venda** | a bandage | For sprains (*una venda en el tobillo*) |
| **las gotas** | drops (eye / ear) | *Ponerse dos gotas en cada ojo* |
| **la receta** | prescription | *Necesitas una receta del médico* |
| **el antibiótico** | antibiotic | Only with a prescription! |
| **la escayola** | plaster cast | For a broken bone (*llevar escayola*) |

### 3. Giving Medical Advice (Doctor / Pharmacist Frames)

Follow any of these advice openers directly with an **infinitive**:
- **Tienes que** + inf. (*You have to…* — informal *tú*)
- **Tiene que** + inf. (*You have to…* — polite *usted*)
- **Debes / Deberías** + inf. (*You must / should…*)
- **Hay que** + inf. (*One must / It is necessary to…*)
- **Es importante** + inf. (*It is important to…*)

Key treatment infinitives: **descansar en cama** (rest in bed), **beber mucha agua / líquidos** (drink lots of water/fluids), **tomar estas pastillas** (take these pills), **ponerte esta crema** (put on this cream), **evitar el sol** (avoid the sun), **no hacer deporte** (not do sport).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline showing Present tense plus desde hace for ongoing symptoms, plus pharmacy advice pairings">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Timeline: Present Tense + desde hace + Duration</text>
  <line x1="56" y1="88" x2="494" y2="88" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="96" cy="88" r="8" fill="var(--brand)"/>
  <circle cx="468" cy="88" r="10" fill="var(--good)"/>
  <text x="96" y="68" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">3 días atrás</text>
  <text x="96" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Pain started</text>
  <text x="282" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">← desde hace tres días →</text>
  <text x="468" y="68" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">AHORA (Present!)</text>
  <text x="468" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Still hurting!</text>
  <rect x="36" y="130" width="488" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.3"/>
  <text x="280" y="153" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Me duele la garganta (Present) + desde hace + tres días.</text>
  <rect x="36" y="178" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="113" y="198" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">Tos / garganta</text>
  <text x="113" y="218" text-anchor="middle" font-size="11" fill="var(--ink)">el jarabe &amp; líquidos</text>
  <rect x="203" y="178" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="280" y="198" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">Quemadura / picadura</text>
  <text x="280" y="218" text-anchor="middle" font-size="11" fill="var(--ink)">la crema / pomada</text>
  <rect x="370" y="178" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="447" y="198" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">Corte / fiebre</text>
  <text x="447" y="218" text-anchor="middle" font-size="11" fill="var(--ink)">una tirita / pastillas</text>
</svg>`,
      diagramCaption: "Because the symptom continues into the present moment, Spanish pairs desde hace with the Present tense.",
      whyItWorks:
        "Literally, *desde hace tres días* means *'since it makes three days'*. Because *hace* measures backward from right now, Spanish locks the main verb into the **Present tense** to show the action is still live.",
      keyPoints: [
        "Always use the **Present tense + desde hace + time** for ongoing symptoms: *Tengo fiebre desde hace dos días* (NEVER *he tenido*!).",
        "Know Spain-standard pharmacy items: *las pastillas, el jarabe, la crema, una tirita, una venda, las gotas, la receta*.",
        "Notice *la receta* means both *medical prescription* and *cooking recipe* — context makes it clear!",
        "Every advice phrase (*tienes que, debes, deberías, hay que*) is followed directly by an **infinitive** (*tomar, descansar, beber*).",
        "Remember frequency phrases for dosage: *dos veces al día* (twice a day), *cada ocho horas* (every eight hours), *antes/después de comer*.",
      ],
      strategies: [
        "**Present-lock rule**: whenever you see 'for [time]' with an ongoing symptom in English, translate with **Present + desde hace**, resisting the temptation to translate 'have had' literally.",
        "**Match symptom to remedy**: pair *tos → jarabe*, *corte → tirita*, *quemadura → crema*, *fiebre/dolor → pastillas*, *hueso roto → escayola*.",
      ],
      thinkDeeper:
        "What is the difference between **Tienes que tomar una pastilla** and **Tienes que ponerte esta crema**? Notice *ponerse* is reflexive when applying cream/plasters onto your own body — and the pronoun attaches cleanly to the infinitive (**ponerte**) or sits before the modal (**te tienes que poner**).",
      workedExamples: [
        {
          title: "Translating ongoing symptoms with desde hace",
          problem: "Translate into Spanish: I have had a headache for two days and I need some pills.",
          steps: [
            "'I have had a headache for two days' → ongoing symptom → Present tense + **desde hace**.",
            "Choose either **Tengo dolor de cabeza** or **Me duele la cabeza** + **desde hace dos días**.",
            "'I need some pills' → **necesito unas pastillas** (or **necesito pastillas**).",
          ],
          answer: "Me duele la cabeza desde hace dos días y necesito unas pastillas. (Or: Tengo dolor de cabeza desde hace dos días y necesito pastillas.)",
          yourTurn: {
            question: "Translate into Spanish: I have had a cough for four days.",
            answer: {
              type: "text",
              accept: [
                "Tengo tos desde hace cuatro días",
                "Yo tengo tos desde hace cuatro días",
                "Hace cuatro días que tengo tos",
              ],
              display: "Tengo tos desde hace cuatro días",
            },
            solution: "Ongoing symptom = Present tense **Tengo tos** + **desde hace cuatro días** (remember the accent on **días**!).",
          },
        },
        {
          title: "Giving pharmacist advice with dosage",
          problem: "As a pharmacist speaking to a teenager (*tú*), advise them to take this syrup twice a day and rest in bed.",
          steps: [
            "Pick an advice modal for *tú*: **Tienes que** or **Debes** + infinitive.",
            "'take this syrup twice a day' → **tomar este jarabe dos veces al día** (*el jarabe* is masculine → *este*).",
            "'and rest in bed' → **y descansar en cama**.",
          ],
          answer: "Tienes que tomar este jarabe dos veces al día y descansar en cama.",
        },
      ],
    },
    {
      id: "health-dialogues-past",
      heading: "Medical Dialogues & Narrating a Past Injury",
      discovery: {
        problem:
          "Read this short diary entry after a weekend football match:\n\n*El sábado pasado **me caí** jugando al fútbol y **me torcí** el tobillo. **Fui** al hospital y el médico me **dio** una venda. Ahora **estoy** mejor, así que la semana que viene **descansaré** en casa.*\n\nSpot all THREE tenses in those three sentences! Which verbs are irregular in the Preterite?",
        idea:
          "1. **Preterite** narrates the completed accident: *me caí* (*caerse*, accented **í**), *me torcí* (*torcerse*), *fui* (*ir*, irregular!), *dio* (*dar*, irregular, no accent!).\n2. **Present** gives the current status: *estoy mejor*.\n3. **Simple Future** gives the recovery plan: *descansaré* (or Immediate Future *voy a descansar*).",
      },
      body: `In Year 9 speaking role-plays and extended writing tasks, you will either act out a **consultation dialogue** or narrate a **past accident + recovery plan** across three tenses.

### 1. Model Consultation Dialogue (Doctor / Pharmacist ↔ Patient)

- **Médico:** *Buenos días. ¿Qué te pasa?* (Good morning. What's the matter?)
- **Paciente:** *No me encuentro bien. Me duele mucho el estómago desde hace dos días y tengo náuseas.*
- **Médico:** *¿Tienes fiebre o tos?*
- **Paciente:** *Sí, tengo un poco de fiebre y estoy muy cansado.*
- **Médico:** *A ver… Tienes un virus. Debes descansar en cama, beber mucha agua y tomar estas pastillas cada ocho horas.*
- **Paciente:** *¿Necesito una receta? ¿Cuánto cuesta todo?*
- **Médico:** *Sí, aquí tienes la receta. Si no mejoras en tres días, vuelve a la consulta.*

### 2. Narrating a Past Accident in the Preterite

Memorise these powerhouse accident verbs in the **Preterite** (completed past):

| Infinitive | *yo* (I) | *él / ella* (he/she/doctor) | Meaning |
|---|---|---|---|
| **caerse** | **me caí** | **se cayó** | fell down (note **í** &amp; **y**!) |
| **romperse** | **me rompí** | **se rompió** | broke (a bone) |
| **torcerse** | **me torcí** | **se torció** | twisted / sprained |
| **cortarse** | **me corté** | **se cortó** | cut oneself |
| **ir** | **fui** | **fue** | went (irregular!) |
| **dar** | **di** | **dio** | gave (NO accent on *di/dio*!) |
| **hacer** | **hice** | **hizo** | did / took (an X-ray) |
| **tener que** | **tuve que** | **tuvo que** | had to (irregular!) |
| **estar** | **estuve** | **estuvo** | was (location / state) |
| **examinar** | **examiné** | **examinó** | examined |
| **poner** | **puse** | **puso** | put (a cast / bandage) |

Useful accident phrases: **me caí de la bicicleta** (I fell off my bike), **jugué al rugby** (*-gar → -gué!*), **fui a urgencias** (I went to A&amp;E), **el médico me hizo una radiografía** (the doctor gave me an X-ray), **me puso una escayola** (put a cast on me), **tuve que quedarme en cama** (I had to stay in bed).

### 3. Adding Present Status & Future Recovery (Top-Band 3-Tense Finish!)

Connect your Preterite accident to **now** and **next week**:
- **Present:** *Ahora me encuentro mucho mejor, pero todavía me duele un poco el tobillo.*
- **Immediate Future:** *Mañana voy a descansar y no voy a hacer deporte.*
- **Simple Future:** *La semana que viene volveré al médico y seguiré sus consejos.*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-stage medical story arc showing Preterite Accident, Present Status, and Future Recovery">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Top-Band 3-Tense Health Narrative Arc</text>
  <rect x="18" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.6"/>
  <text x="100" y="70" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--bad)">1. PRETERITE (Past)</text>
  <text x="100" y="88" text-anchor="middle" font-size="11" fill="var(--ink-2)">Ayer / El sábado pasado</text>
  <text x="28" y="114" font-size="11.5" fill="var(--ink)">• Me caí en el parque</text>
  <text x="28" y="136" font-size="11.5" fill="var(--ink)">• Me torcí el tobillo</text>
  <text x="28" y="158" font-size="11.5" fill="var(--ink)">• Fui a urgencias</text>
  <text x="28" y="180" font-size="11.5" fill="var(--ink)">• El médico me dio</text>
  <text x="36" y="196" font-size="11.5" fill="var(--ink)">una venda &amp; pastillas</text>
  <text x="190" y="140" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink-2)">→</text>
  <rect x="198" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="280" y="70" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">2. PRESENT (Now)</text>
  <text x="280" y="88" text-anchor="middle" font-size="11" fill="var(--ink-2)">Hoy / Ahora</text>
  <text x="208" y="114" font-size="11.5" fill="var(--ink)">• Estoy más tranquilo</text>
  <text x="208" y="136" font-size="11.5" fill="var(--ink)">• Todavía me duele</text>
  <text x="216" y="152" font-size="11.5" fill="var(--ink)">un poco el pie</text>
  <text x="208" y="176" font-size="11.5" fill="var(--ink)">• Tomo pastillas</text>
  <text x="216" y="192" font-size="11.5" fill="var(--ink)">desde hace dos días</text>
  <text x="370" y="140" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink-2)">→</text>
  <rect x="378" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/>
  <text x="460" y="70" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">3. FUTURE (Recovery)</text>
  <text x="460" y="88" text-anchor="middle" font-size="11" fill="var(--ink-2)">Mañana / La próx. sem.</text>
  <text x="388" y="114" font-size="11.5" fill="var(--ink)">• Voy a descansar</text>
  <text x="388" y="136" font-size="11.5" fill="var(--ink)">• Beberé mucha agua</text>
  <text x="388" y="158" font-size="11.5" fill="var(--ink)">• No haré deporte</text>
  <text x="388" y="180" font-size="11.5" fill="var(--ink)">• Volveré a entrenar</text>
  <text x="396" y="196" font-size="11.5" fill="var(--ink)">pronto</text>
</svg>`,
      diagramCaption: "Linking Preterite (accident), Present (current symptoms), and Future (recovery) unlocks top marks in Year 9 writing.",
      whyItWorks:
        "In Spanish, *ir* (*fui*), *dar* (*dio*), *poner* (*puso*) and *tener* (*tuve*) belong to the irregular preterite family, so NONE of them take written accents in the *yo* or *él/ella* forms — unlike regular *-ar / -ir* verbs (*me corté, me rompí*) and *caerse* (*me caí*).",
      keyPoints: [
        "Open a medical role-play with **¿Qué te pasa?** (doctor) and **No me encuentro bien / Me duele…** (patient).",
        "Master key accident preterites: **me caí** (*I fell*), **me rompí**, **me torcí**, **fui al hospital**, **el médico me dio…**, **tuve que descansar**.",
        "Remember: *fui, dio, hizo, puso, tuve, estuve* take **NO written accent**, while *me caí, me rompí, me torcí, me corté, examinó* **DO** need accents!",
        "Use **¿Cuánto cuesta?** (singular) vs **¿Cuánto cuestan?** (plural) when paying at the pharmacy.",
        "Finish every past-injury paragraph with a future recovery plan using **voy a + inf.** or **Simple Future** (*descansaré, tomaré*).",
      ],
      strategies: [
        "**Accent checkpoint in the Preterite**: check every *-é / -í / -ó* verb for its accent, and double-check that *fui, dio, hizo, puso, tuve* stay accent-free.",
        "**3-tense skeleton**: plan 2 sentences in Preterite (what happened + treatment), 1 in Present (how you feel now), and 1 in Future (recovery plan).",
      ],
      thinkDeeper:
        "Why does **se cayó** (*he/she fell*) have a **y** in the middle, whereas **me caí** (*I fell*) has an **í**? When an unstressed **i** sits between two vowels (*ca-ió*), Spanish always changes it to **y** (*cayó*, *leyó*, *oyó*)!",
      workedExamples: [
        {
          title: "Narrating an accident and treatment in the Preterite",
          problem: "Translate into Spanish: Yesterday I fell off my bike, I went to the hospital, and the doctor gave me pills.",
          steps: [
            "'Yesterday I fell off my bike' → **Ayer me caí de la bicicleta** (accent on **í** in *caí*).",
            "'I went to the hospital' → **fui al hospital** (*a + el = al*; no accent on *fui*).",
            "'and the doctor gave me pills' → **y el médico me dio pastillas** (no accent on *dio*!).",
          ],
          answer: "Ayer me caí de la bicicleta, fui al hospital y el médico me dio pastillas.",
          yourTurn: {
            question: "Translate into Spanish: Yesterday I went to the pharmacy and I bought cough syrup. (Use 'jarabe para la tos' or 'jarabe'.)",
            answer: {
              type: "text",
              accept: [
                "Ayer fui a la farmacia y compré jarabe",
                "Ayer fui a la farmacia y compré jarabe para la tos",
                "Ayer fui a la farmacia y compré un jarabe",
                "Ayer fui a la farmacia y compré un jarabe para la tos",
                "Ayer yo fui a la farmacia y compré jarabe",
                "Ayer yo fui a la farmacia y compré jarabe para la tos",
              ],
              display: "Ayer fui a la farmacia y compré jarabe para la tos",
            },
            solution: "Preterite of *ir* (*yo*) = **fui** (no accent) + **a la farmacia**; preterite of *comprar* (*yo*) = **compré** (accent on **é**!) + **jarabe para la tos**.",
          },
        },
        {
          title: "Adding a future recovery sentence",
          problem: "Complete the doctor's dialogue with a future recovery plan: *El médico me puso una venda, así que esta semana…* ('I will rest at home and I will not play football').",
          steps: [
            "'I will rest at home' → Simple Future of *descansar* = **descansaré en casa** (or *voy a descansar en casa*).",
            "'and I will not play football' → **y no jugaré al fútbol** (note *jugar + al + sport* and accent on *fútbol*).",
          ],
          answer: "El médico me puso una venda, así que esta semana descansaré en casa y no jugaré al fútbol.",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Me duele la cabeza / Me duelen los pies", back: "My head hurts / My feet hurt (singular → duele, plural → duelen; ALWAYS use el/la/los/las)" },
      { front: "la mano / el pie / los oídos", back: "the hand (feminine trap!) / the foot (masc.) / the inner ears (used for earache)" },
      { front: "la garganta / el estómago / la espalda", back: "the throat / the stomach / the back" },
      { front: "tengo fiebre / tengo tos / tengo gripe", back: "I have a fever / I have a cough / I have the flu (tener + noun, no un/una)" },
      { front: "estoy resfriado/a / estoy mareado/a", back: "I have a cold / I feel dizzy (estar + adjective — must agree with gender!)" },
      { front: "estar constipado / constipada", back: "to have a blocked-up cold (FALSE FRIEND — does NOT mean constipated!)" },
      { front: "Me he roto la pierna", back: "I have broken my leg (reflexive perfect + irregular participle roto + la)" },
      { front: "Me he torcido el tobillo", back: "I have twisted / sprained my ankle" },
      { front: "Me he cortado el dedo", back: "I have cut my finger" },
      { front: "Me duele la garganta desde hace tres días", back: "My throat has hurt for three days (Present tense + desde hace + time!)" },
      { front: "¿Qué te pasa? / No me encuentro bien", back: "What's the matter with you? / I don't feel well" },
      { front: "las pastillas / el jarabe / la crema", back: "tablets (pills) / syrup (cough medicine) / cream (ointment)" },
      { front: "una tirita / una venda / una escayola", back: "a plaster (band-aid) / a bandage / a plaster cast" },
      { front: "la receta / urgencias / la radiografía", back: "prescription / A&E (emergency room) / X-ray" },
      { front: "Me caí / Fui al hospital / Me dio pastillas", back: "I fell / I went to the hospital / He/she gave me pills (Preterite)" },
      { front: "Debes descansar en cama y beber mucha agua", back: "You must rest in bed and drink lots of water" },
    ],
    mustKnow: [
      "Can you name at least 15 parts of the body with the exact definite article, including traps like **la mano**, **el pie**, **el estómago** and **los oídos**?",
      "Can you build **me / te / le / nos / les + duele / duelen + el / la / los / las** without ever slipping into *mi*?",
      "Can you distinguish **tener + noun** (*tengo fiebre, tos, gripe, náuseas*) from **estar + agreeing adjective** (*estoy mareada, resfriado, cansado*)?",
      "Can you state a recent injury using **me he roto / me he torcido / me he cortado / me he quemado**?",
      "Can you express how long a symptom has lasted using **Present tense + desde hace + duration**?",
      "Can you match common ailments to Spanish pharmacy remedies (*las pastillas, el jarabe, la crema, una tirita, una venda, las gotas*)?",
      "Can you give polite or informal medical advice using **tienes que / debes / deberías / hay que + infinitive**?",
      "Can you handle a full doctor or pharmacist role-play starting from **¿Qué te pasa?** to asking **¿Necesito una receta?**",
      "Can you narrate a past accident accurately in the Preterite (*me caí, me rompí, fui, me hizo, me dio, tuve que*)?",
      "Can you combine Preterite (accident), Present (current condition) and Future (recovery) in one fluent paragraph?",
    ],
    misconceptions: [
      { wrong: "Me duele mi cabeza ❌", right: "Me duele la cabeza ✅ (Never use *mi* with *doler* — always *el / la / los / las*)" },
      { wrong: "Me duele los pies ❌", right: "Me duelen los pies ✅ (Plural body part requires **duelen**)" },
      { wrong: "Me duele el mano ❌", right: "Me duele la mano ✅ (*mano* is feminine despite ending in *-o*)" },
      { wrong: "Soy enfermo y estoy fiebre ❌", right: "Estoy enfermo y tengo fiebre ✅ (*estar* for temporary state adjective; *tener* for symptom noun)" },
      { wrong: "Me he rompido el brazo ❌", right: "Me he roto el brazo ✅ (*romper* has irregular past participle **roto**)" },
      { wrong: "Me dolió la garganta desde hace tres días ❌", right: "Me duele la garganta desde hace tres días ✅ (Ongoing duration with *desde hace* requires the **Present tense**)" },
      { wrong: "Me duele muy la espalda ❌", right: "Me duele mucho la espalda ✅ (Use **mucho**, never *muy*, after a verb)" },
    ],
    examMistakes: [
      "Translating 'my head hurts' word-for-word as *me duele mi cabeza* instead of **me duele la cabeza**.",
      "Forgetting the **-n** on **duelen** when the body part is plural (*los ojos, los dientes, las piernas, los oídos*).",
      "Forgetting female agreement on *estar* adjectives: a girl writing *estoy cansado* instead of **estoy cansada**.",
      "Writing *estoy constipado* thinking it means 'constipated' — in Spanish it means **having a blocked-up cold**!",
      "Using the perfect tense (*he tenido fiebre desde hace dos días*) instead of the Present (**tengo fiebre desde hace dos días**).",
      "Dropping written accents on **el estómago**, **los oídos**, **me caí**, **me corté**, **días**, or **médico**.",
      "Adding a false accent to **fui** or **dio** in the Preterite (*fuí* and *dió* are spelling errors in modern Spanish!).",
      "Confusing **la oreja** (outer ear) with **el oído** (inner ear — the right word for earache: *me duele el oído*).",
    ],
    mnemonics: [
      {
        topic: "Doler agreement",
        device: "1 = DUELE, 2+ = DUELEN, ZERO 'MI'!",
        explanation: "Count the body parts (singular → duele, plural → duelen) and ban possessive *mi/tu/su* in favour of *el/la/los/las*.",
      },
      {
        topic: "Tener vs Estar symptoms",
        device: "TENER takes Things (nouns); ESTAR takes States (adjectives)",
        explanation: "If it is a 'thing' you have (*fiebre, tos, gripe, dolor*), use **tener**; if it is a temporary state (*mareado/a, cansado/a, resfriado/a*), use **estar** and agree the ending!",
      },
      {
        topic: "Irregular injury participles",
        device: "ROTO (broken) & HECHO (hurt/done)",
        explanation: "Never write *rompido* or *hacido*: lock in **me he roto** (I've broken) and **me he hecho daño** (I've hurt myself).",
      },
    ],
    realWorld: [
      {
        emoji: "➕",
        title: "Spain's Glowing Green Crosses",
        detail: "In every Spanish town, a bright neon green cross marks **la farmacia**. Spanish pharmacists are highly trained clinicians who can recommend creams, syrups and painkillers over the counter — and one local **farmacia de guardia** stays open 24 hours a day on rotation.",
      },
      {
        emoji: "🏥",
        title: "El Centro de Salud & 112",
        detail: "Across Spain and the EU, **112** is the free universal emergency number (ambulance, police, fire). For non-emergencies, residents visit their neighbourhood **centro de salud** (GP clinic) rather than going straight to **urgencias**.",
      },
      {
        emoji: "🩹",
        title: "Tirita vs Curita",
        detail: "In Spain, a sticking plaster is universally called **una tirita** (originally a 1950s Spanish trademark that became the everyday word!), whereas across much of Latin America you will hear *una curita*.",
      },
      {
        emoji: "🗣️",
        title: "The 'Constipado' Comedy Classic",
        detail: "British students visiting Madrid often panic when a Spanish host says *Hoy estoy muy constipado* — it simply means they have a sniffly head cold! (The Spanish word for constipated is *estreñido*.)",
      },
    ],
    videos: [
      {
        title: "Me duele / Me duelen & Parts of the Body in Spanish",
        channel: "Butterfly Spanish / YouTube Search",
        url: "https://www.youtube.com/results?search_query=me+duele+me+duelen+parts+of+the+body+spanish+gcse",
      },
      {
        title: "At the Doctor and Pharmacy in Spanish (En la farmacia)",
        channel: "SpanishPod101 / YouTube Search",
        url: "https://www.youtube.com/results?search_query=en+la+farmacia+en+el+medico+spanish+dialogue",
      },
      {
        title: "Desde hace + Present Tense in Spanish Explained",
        channel: "Señor Jordan / YouTube Search",
        url: "https://www.youtube.com/results?search_query=desde+hace+present+tense+spanish+grammar",
      },
      {
        title: "Illnesses, Symptoms & Injuries (Tener vs Estar)",
        channel: "GCSE Spanish Revision / YouTube Search",
        url: "https://www.youtube.com/results?search_query=illness+symptoms+tener+estar+spanish+revision",
      },
    ],
    formulas: [
      { name: "Singular ache", formula: "me / te / le / nos / os / les + **duele** + el / la + body part", note: "e.g. Me duele la cabeza / A Juan le duele el brazo." },
      { name: "Plural ache", formula: "me / te / le / nos / os / les + **duelen** + los / las + body parts", note: "e.g. Me duelen los oídos / Les duelen las piernas." },
      { name: "Symptom nouns (Tener)", formula: "**tener** + fiebre / tos / gripe / catarro / náuseas / dolor de…", note: "No article before core illness nouns." },
      { name: "Symptom states (Estar)", formula: "**estar** + cansado/a / mareado/a / resfriado/a / enfermo/a", note: "Adjective agrees with gender & number." },
      { name: "Recent injury (Perfect)", formula: "**me he** + roto / torcido / cortado / quemado + el / la + body part", note: "Irregular participles: roto (romper), hecho (hacer)." },
      { name: "Ongoing duration", formula: "**Present tense** + **desde hace** + time period", note: "e.g. Tengo tos desde hace cuatro días." },
      { name: "Medical advice frame", formula: "**Tienes que / Debes / Deberías / Hay que** + infinitive", note: "e.g. Debes descansar en cama y beber agua." },
      { name: "Past accident (Preterite)", formula: "**me caí / me rompí / me torcí / fui / me dio / tuve que**", note: "No accent on fui, dio, hizo, puso, tuve, estuve!" },
    ],
  },
};
