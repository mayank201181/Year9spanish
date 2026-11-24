import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "social-plans-films",
  title: "Social Meetings, Films & Reviews (Quedar y el cine)",
  strand: "Term 3: Style & Culture",
  icon: "🎬",
  summary: "Invite friends out with ¿Quedamos…?, negotiate times and places, make polite excuses with tengo que, discuss cinema and write top-band multi-tense film reviews.",
  intro:
    "Going out with friends and talking about the latest cinema release are two of the most natural conversations in everyday Spanish — and core pillars of Tanglin Year 9 Term 3. In this topic you will master arranging a meeting (*¿Quedamos…?*) without falling into literal English traps, accepting or making polite excuses using **modal verb + infinitive**, describing films with crisp adjective agreement, and structuring a multi-tense **film review** (*una crítica de cine*) that hits top-band marks.",
  guide: [
    // =========================================================================
    // SECTION 1: arranging-a-meeting
    // =========================================================================
    {
      id: "arranging-a-meeting",
      heading: "Arranging a Social Meeting (¿Quedamos…?)",
      discovery: {
        problem:
          "Look at these two Spanish sentences side by side:\n\n1. *¿**Quedamos** el sábado a las seis y media delante del cine?*\n2. *Me **quedo** en casa esta noche porque estoy cansado.*\n\nWhy does sentence 1 have **no** reflexive pronoun (*me/nos*), while sentence 2 **does** (*me*)? And why did *de + el cine* turn into **del cine**?",
        idea:
          "Without a reflexive pronoun, **quedar** means **to arrange to meet up** (*¿Quedamos?* = Shall we meet up?). With a reflexive pronoun, **quedarse** means **to stay** (*me quedo en casa* = I stay at home). And in Spanish, **de + el** always contracts into **del** (just as **a + el** always contracts into **al**) — writing *de el cine* or *a el cine* is always wrong!",
      },
      body:
        "In Spain, the number-one verb for making social plans with friends is **quedar** (*to meet up / arrange to meet*). Notice that *¿Quedamos?* literally asks *Do we meet?* — Spanish regularly uses the **present tense** to suggest immediate social plans, just like English *Shall we meet…?*\n\n" +
        "### 1. Inviting a friend out\n" +
        "| Spanish invitation | English meaning | Grammar pattern |\n" +
        "|---|---|---|\n" +
        "| *¿Quieres ir al cine?* | Do you want to go to the cinema? | *quieres* + infinitive |\n" +
        "| *¿Te gustaría ir a la bolera?* | Would you like to go bowling? | *te gustaría* + infinitive (politer) |\n" +
        "| *¿Quedamos el viernes?* | Shall we meet up on Friday? | *quedamos* + day/time |\n" +
        "| *¿Vamos a tomar un helado?* | Shall we go for an ice cream? | *vamos a* + infinitive |\n\n" +
        "Notice two small details that earn accuracy marks:\n" +
        "- **Days of the week** use **el** (not *en*!) to mean *on*: *el sábado* (on Saturday), *los domingos* (on Sundays), and are **never capitalised** in Spanish.\n" +
        "- **a + el → al** (*ir al cine*, *ir al centro comercial*, *ir al parque*) and **de + el → del** (*delante del cine*, *al lado del estadio*). Never contract *a la* or *de la*!\n\n" +
        "### 2. Fixing the time (*¿A qué hora quedamos?*)\n" +
        "To say **at** a specific time, use **a la** for one o'clock (singular!) and **a las** for all other hours (plural):\n" +
        "- *a la una* (at 1:00) · *a la una y cuarto* (at 1:15) · *a la una y media* (at 1:30)\n" +
        "- *a las seis en punto* (at 6:00 sharp) · *a las siete menos cuarto* (at 6:45 — literally *seven minus a quarter*)\n" +
        "- Add the part of the day with **de**: *a las cinco **de la tarde*** (at 5 p.m.), *a las nueve **de la noche*** (at 9 p.m.), *a las diez **de la mañana*** (at 10 a.m.).\n\n" +
        "### 3. Fixing the meeting point (*¿Dónde quedamos?*)\n" +
        "Use prepositions of place + **de** (contracting to **del** before masculine singular nouns):\n" +
        "- *delante de la estación* (in front of the station) · *delante del cine* (in front of the cinema)\n" +
        "- *enfrente del parque* (opposite the park) · *detrás de la cafetería* (behind the café)\n" +
        "- *al lado de mi casa* (next to my house) · *en la entrada del centro comercial* (at the entrance of the shopping centre)",
      diagram:
        '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step flowchart for arranging a Spanish social meeting: Invite, Day, Time, and Place"><rect x="4" y="4" width="552" height="232" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The 4-Step ¿Quedamos? Meeting Formula</text><rect x="18" y="50" width="122" height="122" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="79" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. INVITE</text><text x="79" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">¿Quieres + inf.?</text><text x="79" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">¿Te gustaría + inf.?</text><text x="79" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">¿Quedamos…?</text><text x="79" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">a + el → al cine</text><line x1="140" y1="111" x2="154" y2="111" stroke="var(--brand)" stroke-width="2"/><polygon points="154,107 161,111 154,115" fill="var(--brand)"/><rect x="162" y="50" width="114" height="122" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="219" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">2. DAY</text><text x="219" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">el viernes</text><text x="219" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">el sábado</text><text x="219" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">esta tarde</text><text x="219" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">el = on (lowercase!)</text><line x1="276" y1="111" x2="290" y2="111" stroke="var(--brand)" stroke-width="2"/><polygon points="290,107 297,111 290,115" fill="var(--brand)"/><rect x="298" y="50" width="118" height="122" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="357" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3. TIME</text><text x="357" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">a la una</text><text x="357" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">a las seis y media</text><text x="357" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">a las ocho menos</text><text x="357" y="150" text-anchor="middle" font-size="11" fill="var(--ink)">cuarto (7:45)</text><line x1="416" y1="111" x2="430" y2="111" stroke="var(--brand)" stroke-width="2"/><polygon points="430,107 437,111 430,115" fill="var(--brand)"/><rect x="438" y="50" width="104" height="122" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="490" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">4. PLACE</text><text x="490" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">delante del</text><text x="490" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">enfrente de la</text><text x="490" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">al lado del</text><text x="490" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">de + el → del</text><rect x="28" y="186" width="504" height="36" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/><text x="280" y="209" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">¿Quedamos el sábado a las seis y media delante del cine?</text></svg>',
      diagramCaption: "Build any natural Spanish invitation in four slots: verb, day (el), time (a la / a las), and place (with del = de + el).",
      whyItWorks:
        "Spanish expresses *at a time* using the feminine noun **hora** (understood even when unspoken): *a la [una hora]* is singular, whereas *a las [seis horas]* is plural. Similarly, **el sábado** omits the preposition *en* because *el + day* already functions as an adverbial time phrase.",
      keyPoints: [
        "Use **quedar** (*¿Quedamos?*) to mean *arrange to meet up*, and **quedarse** (*me quedo*) to mean *stay*.",
        "Always contract **a + el → al** (*ir al cine*) and **de + el → del** (*delante del estadio*), but keep **a la** and **de la** separate.",
        "Use **el + day** (never *en sábado*, and no capital letter) for *on [day]*: *el viernes*, *el sábado*.",
        "Use **a la una** for 1 o'clock and **a las** for 2–12; for *quarter to*, go up to the next hour and subtract *menos cuarto* (*a las ocho menos cuarto* = 7:45).",
        "Remember inverted question marks **¿ … ?** around every Spanish question — especially on *¿A qué hora?* and *¿Dónde?* (both carry written accents!).",
      ],
      strategies: [
        "**Time-Check Strategy**: For any time past half-past (e.g. 7:45), step UP to the next hour (8) and subtract minutes with *menos* (*a las ocho menos cuarto*).",
        "**Article-Weld Check**: Scan every *a* and *de* in your sentence — if the very next word is *el*, weld them immediately into **al** or **del**.",
      ],
      thinkDeeper:
        "Why does Spanish say *¿A qué hora quedamos?* (literally *At what hour do we meet?*) instead of *¿Qué hora quedamos?* Compare it to *¿Qué hora es?* (What time is it?) — when do you need the preposition **a**?",
      workedExamples: [
        {
          title: "Inviting a friend to the cinema with time and place",
          problem: "Translate into natural Spain-standard Spanish: \"Would you like to go to the cinema on Saturday at 6:45 p.m.? Let's meet in front of the shopping centre.\"",
          steps: [
            "Translate \"Would you like to go to the cinema\": use polite **¿Te gustaría** + infinitive **ir** + **al cine** (*a + el → al*).",
            "Translate \"on Saturday\": **el sábado** (lowercase *s*, accent on *á*, no *en*).",
            "Translate \"at 6:45 p.m.\": step up to 7 and subtract a quarter → **a las siete menos cuarto de la tarde**.",
            "Translate \"Let's meet in front of the shopping centre\": **Quedamos** (or *¿Quedamos…?* / *Nos vemos*) + **delante del centro comercial** (*de + el → del*).",
          ],
          answer: "¿Te gustaría ir al cine el sábado a las siete menos cuarto de la tarde? Quedamos delante del centro comercial.",
          yourTurn: {
            question: "Translate into Spanish: \"Shall we meet on Friday at 5:30 in front of the station?\" (use *quedar* and *la estación*)",
            answer: {
              type: "text",
              accept: [
                "¿Quedamos el viernes a las cinco y media delante de la estación?",
                "Quedamos el viernes a las cinco y media delante de la estación",
                "¿Quedamos el viernes a las cinco y media de la tarde delante de la estación?",
              ],
              display: "¿Quedamos el viernes a las cinco y media delante de la estación?",
            },
            solution: "*¿Quedamos* (shall we meet) + *el viernes* (on Friday) + *a las cinco y media* (at 5:30) + *delante de la estación* (in front of the station — feminine *la*, so *de la* does not contract).",
          },
        },
        {
          title: "Spotting the a la / a las and al / del traps",
          problem: "Find and fix all three grammar mistakes in this student's message: *¿Quieres ir a el parque en domingo a las una y cuarto?*",
          steps: [
            "Error 1: *a el parque* → masculine *el* must contract with *a* to give **al parque**.",
            "Error 2: *en domingo* → Spanish never uses *en* before days of the week; replace with **el domingo**.",
            "Error 3: *a las una y cuarto* → 1 o'clock is singular, so replace *las* with **a la una y cuarto**.",
          ],
          answer: "¿Quieres ir al parque el domingo a la una y cuarto?",
          yourTurn: {
            question: "Write the Spanish for \"at 1:30 opposite the park\" (use *enfrente de* + *el parque*).",
            answer: {
              type: "text",
              accept: [
                "a la una y media enfrente del parque",
                "A la una y media enfrente del parque",
              ],
              display: "a la una y media enfrente del parque",
            },
            solution: "1:30 takes singular **a la una y media**, and *enfrente de + el parque* contracts to **enfrente del parque**.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: accepting-making-excuses
    // =========================================================================
    {
      id: "accepting-making-excuses",
      heading: "Accepting Invitations & Making Polite Excuses",
      discovery: {
        problem:
          "Compare two ways a learner tried to say \"I'm sorry, I can't because I have to do my homework\":\n\n- Attempt A: *Lo siento, no puedo porque **tengo que hago** mis deberes.*\n- Attempt B: *Lo siento, no puedo porque **tengo que hacer** mis deberes.*\n\nOnly one is grammatically valid in Spanish. Why does Attempt A break down?",
        idea:
          "Attempt B is right! After a modal or obligation structure (**tengo que**, **puedo**, **quiero**, **debo**, **me gustaría**), the second verb MUST stay in the **infinitive** (*hacer*, *ordenar*, *cuidar*). Conjugating both verbs (*tengo que hago*) is like saying *I have to I do* in English!",
      },
      body:
        "In Year 9 role-plays and writing tasks, you need to respond naturally whether you say **yes**, say **no politely**, or **suggest another time**.\n\n" +
        "### 1. Accepting enthusiastically\n" +
        "- *¡Sí, me encantaría!* (Yes, I would love to!)\n" +
        "- *¡Vale, qué buena idea!* (OK, what a great idea!)\n" +
        "- *¡De acuerdo! / ¡Genial! / ¡Por supuesto!* (Agreed! / Great! / Of course!)\n" +
        "- *¡Claro que sí! ¿A qué hora quedamos?* (Of course! What time shall we meet?)\n\n" +
        "### 2. Declining politely + giving a reason (*excusas*)\n" +
        "Start with a soft apology so you sound polite rather than abrupt:\n" +
        "- *Lo siento, no puedo porque…* (I'm sorry, I can't because…)\n" +
        "- *¡Qué pena! Me gustaría, pero no puedo porque…* (What a shame! I'd like to, but I can't because…)\n" +
        "- *Lo siento mucho, pero estoy ocupado / ocupada porque…* (I'm very sorry, but I'm busy because…)\n\n" +
        "Then plug in a **modal verb (conjugated)** + **infinitive** — the gold-standard excuse toolkit:\n" +
        "| Obligation / Modal | + Infinitive excuse | English meaning |\n" +
        "|---|---|---|\n" +
        "| *tengo que* | *hacer mis deberes* | I have to do my homework |\n" +
        "| *tengo que* | *ordenar mi dormitorio* | I have to tidy my bedroom |\n" +
        "| *tengo que* | *cuidar a mi hermano pequeño* | I have to look after my little brother |\n" +
        "| *tengo que* | *pasear al perro* | I have to walk the dog |\n" +
        "| *tengo que* | *lavar los platos / ayudar en casa* | I have to wash up / help at home |\n" +
        "| *no puedo* | *salir esta noche* | I can't go out tonight |\n" +
        "| *no quiero* | *llegar tarde* | I don't want to arrive late |\n" +
        "| *debo* | *estudiar para un examen* | I must study for an exam |\n\n" +
        "Notice the **personal a** before people (and pets treated like family): *cuidar **a** mi hermano*, *pasear **al** perro* (*a + el*).\n\n" +
        "### 3. Proposing an alternative\n" +
        "Top-band speakers never leave a refusal dead-ended — add a friendly counter-proposal:\n" +
        "- *¿Qué tal el domingo por la tarde?* (How about Sunday afternoon?)\n" +
        "- *¿Podemos quedar mañana?* (Can we meet tomorrow?)\n" +
        "- *Quizá otro día.* (Perhaps another day.)",
      diagram:
        '<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modal verb plus infinitive lock-in diagram for polite Spanish excuses"><rect x="4" y="4" width="552" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The Modal + Infinitive Lock-In Rule</text><rect x="20" y="48" width="150" height="104" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="95" y="69" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">VERB 1 (Conjugated)</text><text x="95" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">tengo que</text><text x="95" y="110" text-anchor="middle" font-size="12" fill="var(--ink)">no puedo</text><text x="95" y="128" text-anchor="middle" font-size="12" fill="var(--ink)">debo / quiero</text><text x="95" y="144" text-anchor="middle" font-size="10" fill="var(--ink-2)">Matches the person</text><text x="190" y="106" text-anchor="middle" font-size="22" font-weight="700" fill="var(--brand)">+</text><rect x="210" y="48" width="175" height="104" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/><text x="297" y="69" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">VERB 2 (INFINITIVE!)</text><text x="297" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">hacer mis deberes</text><text x="297" y="110" text-anchor="middle" font-size="12" fill="var(--ink)">ordenar mi cuarto</text><text x="297" y="128" text-anchor="middle" font-size="12" fill="var(--ink)">cuidar a mi hermana</text><text x="297" y="144" text-anchor="middle" font-size="10" fill="var(--ink-2)">Ends in -ar / -er / -ir</text><text x="405" y="106" text-anchor="middle" font-size="22" font-weight="700" fill="var(--brand)">+</text><rect x="424" y="48" width="118" height="104" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="483" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">COUNTER-PLAN</text><text x="483" y="94" text-anchor="middle" font-size="11" fill="var(--ink)">¿Qué tal el</text><text x="483" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">domingo?</text><text x="483" y="132" text-anchor="middle" font-size="11" fill="var(--ink)">Quizá otro día.</text><rect x="24" y="168" width="250" height="46" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.2"/><text x="149" y="187" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">NEVER conjugate Verb 2:</text><text x="149" y="204" text-anchor="middle" font-size="11" fill="var(--ink)">✗ tengo que hago / puedo salgo</text><rect x="288" y="168" width="250" height="46" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/><text x="413" y="187" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">ALWAYS lock Verb 2 as infinitive:</text><text x="413" y="204" text-anchor="middle" font-size="11" fill="var(--ink)">✓ tengo que hacer / puedo salir</text></svg>',
      diagramCaption: "When two verbs work together in an excuse, Verb 1 conjugates for the subject and Verb 2 stays locked in the infinitive.",
      whyItWorks:
        "In Spanish, **tener que** (*to have to*) behaves like a single modal verb, while **poder** (*can*), **querer** (*want*), and **deber** (*must*) take an infinitive directly **without** *que*. One conjugated verb carries the person and tense; the second verb names the action itself.",
      keyPoints: [
        "**tengo que + infinitive** ALWAYS needs **que** (*tengo que estudiar*), whereas **puedo / quiero / debo + infinitive** NEVER use *que* (*no puedo salir*).",
        "Watch stem changes on modal verbs: **poder** (*o→ue*: *puedo, puedes, puede, podemos, podéis, pueden*) and **querer** (*e→ie*: *quiero, quieres, quiere, queremos, queréis, quieren*).",
        "Never forget the **personal a** when looking after a person: *cuidar **a** mi hermano pequeño*.",
        "Always include **inverted exclamation marks** on enthusiastic or polite reactions: *¡Sí, me encantaría!*, *¡Qué pena!* (note the accent on *qué* in exclamations!).",
        "Add a counter-proposal (*¿Qué tal el domingo?* / *Quizá otro día*) to turn a basic refusal into a top-band social response.",
      ],
      strategies: [
        "**The Que-Filter**: Ask *Is it tener?* If yes → **tengo que + inf.** If it is *poder, querer, deber* or *me gustaría* → **NO que**, go straight to the infinitive!",
        "**Sandwich Refusal**: Apology (*Lo siento, no puedo*) + Excuse (*porque tengo que…*) + Alternative (*¿Qué tal mañana?*).",
      ],
      thinkDeeper:
        "Why does *¡Qué pena!* have an accent on **qué**, whereas *tengo que estudiar* does **not**? Check every *qué* in your dialogue — exclamations and questions carry the accent, conjunctions (*que* = that/to) do not!",
      workedExamples: [
        {
          title: "Building a three-part polite refusal",
          problem: "Write a polite Spanish reply refusing an invitation to go to the bowling alley (*la bolera*) because you have to walk the dog and study for a Maths test, and suggest Sunday instead.",
          steps: [
            "Open with a polite apology: *Lo siento, no puedo ir a la bolera porque…*",
            "Add both obligations after **tengo que** using infinitives (with *al* = *a + el* before *perro*): *…tengo que pasear al perro y estudiar para un examen de matemáticas.*",
            "Close with a friendly counter-proposal: *¿Qué tal el domingo?*",
          ],
          answer: "Lo siento, no puedo ir a la bolera porque tengo que pasear al perro y estudiar para un examen de matemáticas. ¿Qué tal el domingo?",
          yourTurn: {
            question: "Translate into Spanish: \"I'm sorry, I can't because I have to look after my little brother.\" (use *cuidar* + *mi hermano pequeño*)",
            answer: {
              type: "text",
              accept: [
                "Lo siento, no puedo porque tengo que cuidar a mi hermano pequeño.",
                "Lo siento no puedo porque tengo que cuidar a mi hermano pequeño",
                "Perdón, no puedo porque tengo que cuidar a mi hermano pequeño.",
              ],
              display: "Lo siento, no puedo porque tengo que cuidar a mi hermano pequeño.",
            },
            solution: "*Lo siento, no puedo porque* + **tengo que** + infinitive **cuidar** + personal **a** + *mi hermano pequeño*.",
          },
        },
        {
          title: "Distinguishing porque vs por qué and tener que vs poder",
          problem: "Choose the correct Spanish forms to complete: *¿(Por qué / Porque) no (puedes / puedes que) venir? — (Por qué / Porque) (tengo / tengo que) ordenar mi dormitorio.*",
          steps: [
            "Question \"Why?\" is two words with an accent: **¿Por qué…?**",
            "**poder** takes an infinitive directly with NO *que*: **puedes venir**.",
            "Answer \"Because\" is one word with NO accent: **Porque**.",
            "**tener** needs **que** before an infinitive: **tengo que ordenar**.",
          ],
          answer: "¿Por qué no puedes venir? — Porque tengo que ordenar mi dormitorio.",
          yourTurn: {
            question: "Complete the excuse in Spanish (3 words): \"I have to tidy\" → *___ ___ ___ mi dormitorio.*",
            answer: {
              type: "text",
              accept: ["tengo que ordenar", "tengo que arreglar"],
              display: "tengo que ordenar",
            },
            solution: "*tengo que* (I have to) + infinitive *ordenar* (to tidy). Never drop *que* and never conjugate *ordenar*!",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: film-genres-opinions
    // =========================================================================
    {
      id: "film-genres-opinions",
      heading: "Film Genres, Actors & Cinema Opinions",
      discovery: {
        problem:
          "Look carefully at the verbs and adjective endings in these two opinions:\n\n1. *Me **encanta** el cine español porque es **divertido** y **original**.*\n2. *Me **encantan** las películas de terror porque son **emocionantes** pero **espantosas**.*\n\nWhy did *encanta* become *encantan*, why did *espantosas* add **-as**, and why did *emocionantes* only add **-s** (not *-as*)?",
        idea:
          "With **gustar / encantar / interesar**, the verb agrees with the thing liked: singular (*el cine*) → **encanta**; plural (*las películas*) → **encantan**. Adjectives ending in **-o** (*divertido, espantoso*) have 4 forms (*-o/-a/-os/-as*), whereas adjectives ending in **-e** (*emocionante, interesante*) or a consonant (*original*) don't change for feminine — they simply add **-s** or **-es** in the plural!",
      },
      body:
        "Talking about films in Year 9 means going well beyond *es buena*. Build a sharp vocabulary of **genres**, **cinema elements**, and **justified opinions**.\n\n" +
        "### 1. Film genres (*los géneros de cine*)\n" +
        "Notice how most genres are formed with **una película de + noun** (invariable!), while a few use adjectives that MUST agree with *película(s)* (feminine):\n" +
        "| *de + noun* (invariable) | Adjective genre (agrees with *película*) | Standalone noun |\n" +
        "|---|---|---|\n" +
        "| *una película de acción* (action) | *una película romántica* (romantic) | *una comedia* (comedy) |\n" +
        "| *una película de terror* (horror) | *una película histórica* (historical) | *un documental* (documentary) |\n" +
        "| *una película de ciencia ficción* (sci-fi) | *una película cómica* (comic) | *una película de dibujos animados* (cartoon) |\n" +
        "| *una película de animación* (animation) | *una película policiaca* (detective/crime) | *una serie* (TV series) |\n" +
        "| *una película de aventuras* (adventure) | *una película musical* (musical) | *un cortometraje* (short film) |\n\n" +
        "### 2. Cinema features & justified adjectives\n" +
        "Instead of repeating *la película es…*, name **what** makes it great or terrible:\n" +
        "- **el argumento** (the plot) · **el guion** (the script) · **el final** (the ending)\n" +
        "- **los efectos especiales** (the special effects) · **la banda sonora** (the soundtrack)\n" +
        "- **el protagonista / la protagonista** (the main character) · **los actores** (the actors) · **el director / la directora** (the director)\n\n" +
        "Pair them with vivid Year 9 adjectives:\n" +
        "- Positive: *emocionante* (exciting), *entretenido/a* (entertaining), *divertido/a* (fun/funny), *conmovedor/a* (moving), *impresionante* (impressive), *inolvidable* (unforgettable), *original* (original)\n" +
        "- Negative: *aburrido/a* (boring), *predecible* (predictable), *lento/a* (slow), *tonto/a* (silly), *espantoso/a* (terrifying/awful), *decepcionante* (disappointing)\n\n" +
        "### 3. Comparing genres (*más … que*, *mejor que*, *prefiero*)\n" +
        "- *Prefiero las películas de ciencia ficción a las comedias románticas porque son **más emocionantes**.*\n" +
        "- *En mi opinión, los efectos especiales son **mejores que** el argumento.*\n" +
        "- *No soporto las películas de terror porque me dan miedo.* (*dar miedo* = to scare / frighten)",
      diagram:
        '<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grammar bridge showing gustar and encantar verb agreement and adjective endings for masculine and feminine film nouns"><rect x="4" y="4" width="552" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Opinion &amp; Agreement Bridge for Cinema</text><rect x="20" y="46" width="248" height="76" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="144" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SINGULAR subject → gusta / encanta</text><text x="144" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">Me encanta el argumento (m. sg.)</text><text x="144" y="106" text-anchor="middle" font-size="11" fill="var(--ink)">→ es entretenido / original</text><rect x="292" y="46" width="248" height="76" rx="10" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/><text x="416" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">PLURAL subject → gustan / encantan</text><text x="416" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">Me encantan las películas (f. pl.)</text><text x="416" y="106" text-anchor="middle" font-size="11" fill="var(--ink)">→ son divertidas / emocionantes</text><rect x="20" y="138" width="520" height="78" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/><text x="280" y="159" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Adjective Agreement Quick-Check</text><text x="105" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">-o adjectives (4 forms)</text><text x="105" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">entretenido / a / os / as</text><text x="290" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">-e adjectives (2 forms)</text><text x="290" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">emocionante / emocionantes</text><text x="458" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">consonant (2 forms)</text><text x="458" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">original / originales</text></svg>',
      diagramCaption: "Match gustar/encantar to singular vs plural nouns, and remember that -e and consonant adjectives share the same masculine and feminine forms.",
      whyItWorks:
        "In Spanish, *gustar* literally means *to please*. So in *Me gustan las películas de acción*, the grammatical subject is **las películas** (they please me) — that is why the verb takes **-n** and the definite article **las** is compulsory!",
      keyPoints: [
        "Always include the definite article (**el / la / los / las**) after *me gusta(n)*, *me encanta(n)*, *odio*, and *prefiero*: *Me gustan **las** películas de acción*.",
        "Remember **la película** is feminine (*una película divertida y entretenida*), while **el documental** and **el argumento** are masculine (*un documental interesante*).",
        "Use **preferir** (*e→ie*: *prefiero, prefieres, prefiere, preferimos*) + **a** to compare preferences: *Prefiero las comedias **a** las películas de terror*.",
        "Use **ser** (not *estar*) to describe the permanent qualities of a film: *La banda sonora **es** impresionante*; *Los efectos especiales **son** increíbles*.",
        "Watch out for the false friend **excitante** — to say *exciting* about a film, ALWAYS use **emocionante**!",
      ],
      strategies: [
        "**Article + Ending Pairing**: Before choosing an adjective ending, spot the article: *el* → -o, *la* → -a, *los* → -os, *las* → -as.",
        "**Upgrade Beyond 'Buena'**: Swap *buena/mala* for a cinema feature + vivid adjective (e.g. *la banda sonora es inolvidable*, *el final es predecible*).",
      ],
      thinkDeeper:
        "Compare *soy aburrido* with *estoy aburrido*. If you want to say \"the film is boring\", should you use **ser** or **estar** — and what would the other verb accidentally mean?",
      workedExamples: [
        {
          title: "Expressing a justified plural film opinion",
          problem: "Translate into Spanish: \"I love science-fiction films because the special effects are impressive and the plot is exciting.\"",
          steps: [
            "\"I love science-fiction films\": plural noun *las películas* → **Me encantan las películas de ciencia ficción** (with article *las*!).",
            "\"because the special effects are impressive\": *los efectos especiales* (m. pl.) → **porque los efectos especiales son impresionantes**.",
            "\"and the plot is exciting\": *el argumento* (m. sg.) → **y el argumento es emocionante** (never *excitante*!).",
          ],
          answer: "Me encantan las películas de ciencia ficción porque los efectos especiales son impresionantes y el argumento es emocionante.",
          yourTurn: {
            question: "Translate into Spanish: \"I hate horror films because they are boring and predictable.\" (use *odiar* + *las películas de terror*)",
            answer: {
              type: "text",
              accept: [
                "Odio las películas de terror porque son aburridas y predecibles.",
                "Odio las películas de terror porque son aburridas y predecibles",
                "Yo odio las películas de terror porque son aburridas y predecibles.",
              ],
              display: "Odio las películas de terror porque son aburridas y predecibles.",
            },
            solution: "*Odio* + definite article **las** *películas de terror* + *porque son* + feminine plural **aburridas** and plural **predecibles**.",
          },
        },
        {
          title: "Comparing two genres with preferir",
          problem: "Write a Spanish sentence saying you prefer animated films to documentaries because animated films are funnier (*más divertido*).",
          steps: [
            "Use stem-changing **preferir** (*yo* → **prefiero**) + **las películas de animación** + **a** + **los documentales**.",
            "Justify with *porque son* + comparative **más divertidas** (feminine plural to match *películas*!).",
          ],
          answer: "Prefiero las películas de animación a los documentales porque son más divertidas.",
          yourTurn: {
            question: "Fill the missing word (adjective agreement): \"The soundtrack is entertaining\" → *La banda sonora es ___.*",
            answer: {
              type: "text",
              accept: ["entretenida"],
              display: "entretenida",
            },
            solution: "*La banda sonora* is feminine singular, so *entretenido* changes to **entretenida**.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: writing-film-reviews
    // =========================================================================
    {
      id: "writing-film-reviews",
      heading: "Writing a Top-Band Film Review (La crítica de cine)",
      discovery: {
        problem:
          "Read this short Spanish film review and count how many **different tenses** appear in just four sentences:\n\n*El sábado pasado **fui** al cine con mis amigos y **vi** «Dune». Es una película de ciencia ficción que **trata de** un joven héroe en un planeta desierto. Por un lado, los efectos especiales **fueron** impresionantes, aunque el final **fue** un poco lento. La **recomiendo** a todos y el año que viene **veré** la próxima parte.*\n\nWhy does this 4-sentence review score in the top Year 9 writing band?",
        idea:
          "It weaves **three time frames** smoothly together — **Preterite** (*fui, vi, fueron, fue*) for when you saw it and how it felt, **Present** (*es, trata de, recomiendo*) for the genre, plot summary and recommendation, and **Future** (*veré* or *voy a ver*) for what you will watch next — plus balanced connectives (*por un lado… aunque…*) and the direct object pronoun **la** (*la vi*, *la recomiendo* = I saw **it** / I recommend **it**).",
      },
      body:
        "A top-band Year 9 **film review** (*una crítica de cine*) follows a clear four-block structure so you automatically hit every mark-scheme criterion: past narration, present summary, balanced opinion, and future plan.\n\n" +
        "### Block 1 — When & where you saw it (Preterite)\n" +
        "- *El fin de semana pasado **fui** al cine con mis amigos / mi familia y **vi**…* (Last weekend I went to the cinema with… and watched…)\n" +
        "- *Ayer **la vi** en casa con palomitas.* (Yesterday I watched **it** at home with popcorn — **la** = *it*, referring to *la película*!)\n" +
        "- *Compré las entradas por internet y comimos palomitas.* (I bought the tickets online and we ate popcorn.)\n\n" +
        "### Block 2 — Genre & plot summary (Present)\n" +
        "In Spanish (just like English), film plots are always summarised in the **present tense**:\n" +
        "- *Es una película de aventuras / ciencia ficción / animación que **se titula**…* (It is an… film titled…)\n" +
        "- ***Trata de** un grupo de amigos que viajan por el espacio.* (**It is about** a group of friends who travel through space — NEVER write *es sobre* when *trata de* is so idiomatic!)\n" +
        "- *Tiene lugar en Madrid / en el futuro.* (It takes place in Madrid / in the future.)\n\n" +
        "### Block 3 — Balanced critique (Preterite & Present + Connectives)\n" +
        "- *Por un lado, **me encantó** porque los actores actuaron muy bien y la banda sonora fue genial.*\n" +
        "- *Por otro lado / Sin embargo / Aunque… el argumento **fue** un poco predecible.*\n" +
        "- ***Lo mejor fue** el final inesperado, pero **lo peor fue** la duración.* (The best thing was… the worst thing was…)\n\n" +
        "### Block 4 — Star rating, recommendation & future plan (Present + Future)\n" +
        "- *Le doy cuatro estrellas de cinco.* (I give it four stars out of five.)\n" +
        "- ***La recomiendo** a todos los aficionados al cine de acción.* (I recommend **it** to all fans of action cinema.)\n" +
        "- *No la recomiendo porque me decepcionó mucho.* (I don't recommend it because it disappointed me a lot.)\n" +
        "- *El mes que viene **voy a ver** / **veré** otra película del mismo director.* (Next month I am going to see / will see another film by the same director.)",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-block blueprint for a top-band multi-tense Spanish film review"><rect x="4" y="4" width="552" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Top-Band Film Review Blueprint (La crítica de cine)</text><rect x="18" y="44" width="256" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="32" y="64" font-size="12" font-weight="700" fill="var(--brand)">1. VIEWING (PRETERITE)</text><text x="32" y="84" font-size="11" fill="var(--ink)">El sábado pasado fui al cine y vi…</text><text x="32" y="102" font-size="11" fill="var(--ink)">La vi con mis amigos · Comimos palomitas</text><text x="32" y="119" font-size="10" fill="var(--ink-2)">Key verbs: fui, vi, compré, comí</text><rect x="286" y="44" width="256" height="84" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="300" y="64" font-size="12" font-weight="700" fill="var(--good)">2. PLOT &amp; GENRE (PRESENT)</text><text x="300" y="84" font-size="11" fill="var(--ink)">Es una película de ciencia ficción.</text><text x="300" y="102" font-size="11" fill="var(--ink)">Trata de… · Tiene lugar en…</text><text x="300" y="119" font-size="10" fill="var(--ink-2)">Plot summaries stay in Present!</text><rect x="18" y="142" width="256" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="32" y="162" font-size="12" font-weight="700" fill="var(--ink)">3. BALANCED VERDICT</text><text x="32" y="182" font-size="11" fill="var(--ink)">Por un lado me encantó… sin embargo…</text><text x="32" y="200" font-size="11" fill="var(--ink)">Lo mejor fue… / Lo peor fue…</text><text x="32" y="217" font-size="10" fill="var(--ink-2)">Use aunque, pero, además</text><rect x="286" y="142" width="256" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="300" y="162" font-size="12" font-weight="700" fill="var(--brand)">4. RATING &amp; FUTURE PLAN</text><text x="300" y="182" font-size="11" fill="var(--ink)">Le doy 4/5 estrellas · La recomiendo.</text><text x="300" y="200" font-size="11" fill="var(--ink)">Voy a ver / Veré la segunda parte.</text><text x="300" y="217" font-size="10" fill="var(--ink-2)">la = it (feminine: la película)</text></svg>',
      diagramCaption: "Hit every Year 9 top-band mark by moving smoothly across Preterite (viewing), Present (plot), Balanced Critique, and Future (next viewing).",
      whyItWorks:
        "Using the direct object pronoun **la** before the verb (*la vi* = I saw it, *la recomiendo* = I recommend it) avoids clumsy repetition of *la película* and signals confident Year 9 grammar. Notice **vi** (*ver*, yo preterite) has **NO accent** because it is a one-syllable word!",
      keyPoints: [
        "**vi** (I saw) and **vio** (he/she saw) and **fui / fue** NEVER take a written accent because they are monosyllables.",
        "Use **trata de…** (*it is about…*) in the present tense to summarise a film's plot.",
        "Use the direct object pronoun **la** for *it* when referring to *la película*: ***la** vi* (I saw it), ***la** recomiendo* (I recommend it), ***la** volveré a ver* (I will watch it again).",
        "Balance every review with contrast connectives: **por un lado… por otro lado…**, **sin embargo**, **aunque**, **lo mejor fue… / lo peor fue…**.",
        "Include both a past viewing opinion (**me encantó / me decepcionó / me pareció genial**) and a future viewing plan (**voy a ver / veré**).",
      ],
      strategies: [
        "**3-Tense Checklist**: Before submitting a film review, underline 1 Preterite verb (*vi / fui / fue*), 1 Present verb (*trata de / recomiendo*), and 1 Future verb (*voy a ver / veré*).",
        "**Pronoun Upgrade**: Replace your second and third mention of *la película* with **la** right in front of the conjugated verb (*la vi*, *la recomiendo*).",
      ],
      thinkDeeper:
        "If you review *un documental* (masculine!) instead of *una película* (feminine!), how must **la vi** and **la recomiendo** change?",
      workedExamples: [
        {
          title: "Drafting a concise top-band review paragraph",
          problem: "Write 3 sentences in Spanish reviewing an adventure film you saw last weekend: say when you saw it, what it is about, one strength and one weakness, and whether you recommend it + a future plan.",
          steps: [
            "Sentence 1 (Preterite viewing + Present plot): *El fin de semana pasado fui al cine con mi hermana y vi una película de aventuras que trata de una isla misteriosa.*",
            "Sentence 2 (Balanced past opinion): *Por un lado, me encantó porque los efectos especiales fueron impresionantes, aunque el final fue un poco predecible.*",
            "Sentence 3 (Recommendation + Future): *La recomiendo a todos y el mes que viene veré la segunda parte.*",
          ],
          answer:
            "El fin de semana pasado fui al cine con mi hermana y vi una película de aventuras que trata de una isla misteriosa. Por un lado, me encantó porque los efectos especiales fueron impresionantes, aunque el final fue un poco predecible. La recomiendo a todos y el mes que viene veré la segunda parte.",
          yourTurn: {
            question: "Translate into Spanish: \"I saw it yesterday and I recommend it.\" (referring to *la película*; use *ver* in preterite and *recomendar* in present)",
            answer: {
              type: "text",
              accept: [
                "La vi ayer y la recomiendo.",
                "La vi ayer y la recomiendo",
                "Ayer la vi y la recomiendo.",
                "Ayer la vi y la recomiendo",
              ],
              display: "La vi ayer y la recomiendo.",
            },
            solution: "Feminine direct object pronoun **la** goes directly BEFORE each verb: **la vi** (no accent on *vi*!) + *ayer y* + **la recomiendo** (*e→ie* stem change in *recomendar*).",
          },
        },
        {
          title: "Using lo mejor / lo peor and star ratings",
          problem: "Translate into Spanish: \"The best thing was the soundtrack, but the worst thing was the ending. I give it three stars out of five.\"",
          steps: [
            "\"The best thing was\": **Lo mejor fue** + **la banda sonora**.",
            "\"but the worst thing was the ending\": **pero lo peor fue el final**.",
            "\"I give it three stars out of five\": *dar* (yo → *doy*) with indirect pronoun *le* → **Le doy tres estrellas de cinco**.",
          ],
          answer: "Lo mejor fue la banda sonora, pero lo peor fue el final. Le doy tres estrellas de cinco.",
          yourTurn: {
            question: "Complete the film plot starter (2 words): \"The film is about a brave detective\" → *La película ___ ___ un detective valiente.*",
            answer: {
              type: "text",
              accept: ["trata de"],
              display: "trata de",
            },
            solution: "**trata de** (from *tratar de*) is the standard idiomatic way to say \"is about\" for a film or book.",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "¿Quedamos el sábado?", back: "Shall we meet up on Saturday? (*quedar* = to arrange to meet; *quedarse* = to stay)" },
      { front: "¿A qué hora quedamos?", back: "What time shall we meet? (accent on *qué*, inverted *¿ … ?*)" },
      { front: "a la una / a las seis y media", back: "at 1:00 / at 6:30 (*a la* ONLY for 1 o'clock; *a las* for 2–12)" },
      { front: "a las ocho menos cuarto", back: "at quarter to eight (7:45 — step up to 8 and subtract *menos cuarto*)" },
      { front: "delante del cine / enfrente de la estación", back: "in front of the cinema / opposite the station (*de + el → del*)" },
      { front: "¡Sí, me encantaría! / ¡Vale, qué buena idea!", back: "Yes, I would love to! / OK, what a great idea!" },
      { front: "Lo siento, no puedo porque tengo que…", back: "I'm sorry, I can't because I have to… (always followed by an **infinitive**!)" },
      { front: "cuidar a mi hermano pequeño", back: "to look after my little brother (don't forget the personal **a**!)" },
      { front: "ordenar mi dormitorio / pasear al perro", back: "to tidy my bedroom / to walk the dog (*a + el → al*)" },
      { front: "¿Qué tal el domingo? / Quizá otro día.", back: "How about Sunday? / Perhaps another day." },
      { front: "las películas de ciencia ficción / de terror", back: "science-fiction films / horror films (use *me gustan / encantan* in plural!)" },
      { front: "el argumento / la banda sonora / los efectos especiales", back: "the plot / the soundtrack / the special effects" },
      { front: "emocionante / entretenida / predecible", back: "exciting / entertaining (f.) / predictable (NEVER use *excitante* for exciting!)" },
      { front: "Trata de… / Tiene lugar en…", back: "It is about… / It takes place in… (plot summaries stay in the present tense)" },
      { front: "La vi el sábado pasado y me encantó.", back: "I saw it last Saturday and I loved it. (*vi* has NO accent; *la* = it)" },
      { front: "Lo mejor fue… / La recomiendo a… / Veré la segunda parte.", back: "The best thing was… / I recommend it to… / I will watch the sequel." },
    ],
    mustKnow: [
      "Invite a friend out using *¿Quieres + inf.?*, *¿Te gustaría + inf.?*, and *¿Quedamos…?* with exact time (*a la / a las*) and place (*delante del / enfrente de la*).",
      "Contract **a + el → al** and **de + el → del** automatically, and use **el + day** (lowercase, no *en*) for *on [day]*.",
      "Accept invitations enthusiastically (*¡Sí, me encantaría!*, *¡Vale, qué buena idea!*) or decline politely (*Lo siento, no puedo porque…*).",
      "Give realistic excuses using **tengo que + infinitive** and **puedo / debo / quiero + infinitive** without ever conjugating the second verb.",
      "Suggest an alternative day/time (*¿Qué tal el domingo?*, *Quizá otro día*) to keep a social dialogue flowing.",
      "Name at least 8 film genres (*acción, terror, ciencia ficción, comedia, animación, aventuras, romántica, documental*) and 6 cinema elements (*argumento, banda sonora, efectos especiales, protagonista, guion, final*).",
      "Agree *gustar / encantar* (*me gusta* vs *me gustan*) and adjectives (*entretenida, aburridas, emocionante, originales*) accurately with masculine/feminine singular/plural nouns.",
      "Summarise a film's plot in the present tense using **trata de…** and **tiene lugar en…**.",
      "Narrate a past cinema trip cleanly in the preterite (*fui al cine, vi, compré las entradas, me encantó, fue emocionante* — no accents on *fui, fue, vi, vio*!).",
      "Close a top-band film review with a balanced verdict (*por un lado… por otro lado…*, *lo mejor / lo peor fue*), direct object pronoun **la** (*la recomiendo*), and a future plan (*voy a ver / veré*).",
    ],
    misconceptions: [
      {
        wrong: "✗ Quiero ir a el cine en sábado a las una.",
        right: "✓ Quiero ir al cine el sábado a la una. (a+el → al; el + day; a la una is singular!)",
      },
      {
        wrong: "✗ No puedo porque tengo que hago mis deberes.",
        right: "✓ No puedo porque tengo que hacer mis deberes. (Always INFINITIVE after tengo que!)",
      },
      {
        wrong: "✗ No puedo que salir esta noche.",
        right: "✓ No puedo salir esta noche. (Only tener que uses que; poder/querer/deber go straight to the infinitive!)",
      },
      {
        wrong: "✗ Me encanta las películas de terror porque es muy excitante.",
        right: "✓ Me encantan las películas de terror porque son muy emocionantes. (Plural encantan + son; emocionante, NOT excitante!)",
      },
      {
        wrong: "✗ Ayer ví una película y me gustó; la película es sobre un héroe.",
        right: "✓ Ayer vi una película y me gustó; la película trata de un héroe. (No accent on vi; use trata de for 'is about'!)",
      },
      {
        wrong: "✗ Tengo que cuidar mi hermano pequeño.",
        right: "✓ Tengo que cuidar a mi hermano pequeño. (Personal 'a' is mandatory before a specific person!)",
      },
      {
        wrong: "✗ Me quedo con mis amigos a las seis delante de el parque.",
        right: "✓ Quedo con mis amigos a las seis delante del parque. (quedar = meet up, quedarse = stay; de + el → del!)",
      },
    ],
    examMistakes: [
      "Writing **en sábado** or capitalising **Sábado** — days of the week are lowercase and take **el** (*el sábado*) to mean *on Saturday*.",
      "Forgetting to contract **a + el → al** (*al cine*) and **de + el → del** (*delante del centro comercial*).",
      "Putting an accent on one-syllable preterites **fui, fue, vi, vio** — none of these carry a written accent under modern RAE rules!",
      "Using **tengo** without **que** (*✗ tengo hacer*) or inserting **que** after *poder / querer / deber* (*✗ puedo que ir*).",
      "Forgetting the plural **-n** on *me gustan / me encantan* when followed by *las películas* or *los efectos especiales*.",
      "Translating \"exciting\" as the false friend *excitante* instead of **emocionante**.",
      "Repeating *la película* four times in a film review instead of using the direct object pronoun **la** (*la vi*, *la recomiendo*) and missing a future tense sentence.",
    ],
    mnemonics: [
      {
        topic: "Modal Verbs: Que or No Que?",
        device: "T-Q vs P-Q-D (Tener Que — Poder, Querer, Deber stand alone!)",
        explanation: "Only **tener que** carries *que* before an infinitive (*tengo que estudiar*). **Poder, querer, deber** go straight to the infinitive with zero *que* (*puedo salir, quiero ver, debo ayudar*).",
      },
      {
        topic: "4-Part Film Review Formula",
        device: "V-P-B-F (Viewed → Plot → Balance → Future)",
        explanation: "**V**iewed it (Preterite: *fui, vi*), **P**lot (Present: *trata de*), **B**alance (*por un lado… aunque… lo mejor fue*), **F**uture & rating (*la recomiendo, veré la segunda parte*).",
      },
      {
        topic: "No-Accent Monosyllable Preterites",
        device: "FUI · FUE · VI · VIO — 4 Short Kings, Zero Accents!",
        explanation: "The four most common cinema-review preterites (*fui, fue, vi, vio*) are all single syllables — never put a tilde on them!",
      },
    ],
    realWorld: [
      {
        title: "El «Cine de Verano» in Spain",
        detail: "Every July and August, Spanish towns set up open-air cinemas in plazas, parks, and historic courtyards where families bring folding chairs and *pipas* (sunflower seeds) to watch films under the stars at 10 p.m.",
        emoji: "🌌",
      },
      {
        title: "«El día del espectador» (Wednesday Cinema)",
        detail: "Most cinemas across Spain offer heavily discounted tickets every Wednesday (*el día del espectador*), making mid-week cinema meet-ups with friends a classic teen ritual.",
        emoji: "🎟️",
      },
      {
        title: "VOSE vs Doblaje (Subtitles vs Dubbing)",
        detail: "Spain has a huge dubbing tradition (*películas dobladas*), so if you want to hear the original English voices with Spanish subtitles in Madrid or Barcelona, look for **VOSE** (*Versión Original Subtitulada al Español*) on the cinema listings!",
        emoji: "🎧",
      },
      {
        title: "Los Premios Goya",
        detail: "Spain's equivalent of the Oscars is **Los Premios Goya**, named after painter Francisco de Goya. Award-winning Spanish directors like Pedro Almodóvar, Alejandro Amenábar, and J.A. Bayona are celebrated worldwide.",
        emoji: "🏆",
      },
    ],
    videos: [
      {
        title: "Making Plans & Invitations in Spanish (¿Quedamos?)",
        channel: "YouTube Search — GCSE / KS3 Spanish",
        url: "https://www.youtube.com/results?search_query=Spanish+making+plans+invitations+quedamos+excuses+tengo+que",
      },
      {
        title: "Telling the Time in Spanish (a la una / a las / menos cuarto)",
        channel: "YouTube Search — Spanish Time",
        url: "https://www.youtube.com/results?search_query=telling+time+in+Spanish+a+las+menos+cuarto+y+media",
      },
      {
        title: "Talking About Films & Genres in Spanish (El cine)",
        channel: "YouTube Search — Spanish Cinema",
        url: "https://www.youtube.com/results?search_query=Spanish+film+genres+opinions+peliculas+cine+KS3+GCSE",
      },
      {
        title: "Writing a Film Review in Spanish (Crítica de cine)",
        channel: "YouTube Search — Spanish Film Review",
        url: "https://www.youtube.com/results?search_query=how+to+write+a+film+review+in+Spanish+trata+de+recomiendo",
      },
    ],
    formulas: [
      { name: "Social Invitation", formula: "¿Quieres / Te gustaría + **infinitivo** + **el** [día]?", note: "e.g. ¿Te gustaría ir al cine el sábado?" },
      { name: "Arranging Time & Place", formula: "¿A qué hora quedamos? — A **la** una / A **las** [2–12] + delante **del** / de **la**…", note: "Remember a + el → al and de + el → del." },
      { name: "Polite Refusal & Excuse", formula: "Lo siento, no puedo porque **tengo que** + **infinitivo**.", note: "Never conjugate the second verb!" },
      { name: "Counter-Proposal", formula: "¿Qué tal **el** [día]? / ¿Podemos quedar mañana?", note: "Keeps a refusal polite and top-band." },
      { name: "Plural Cinema Opinion", formula: "Me **gustan** / Me **encantan** **las** películas de [género] porque **son**…", note: "Include the definite article las and plural verb!" },
      { name: "Comparing Genres", formula: "**Prefiero** [género A] **a** [género B] porque es / son **más** [adj.] **que**…", note: "Stem-changing preferir: prefiero (e→ie)." },
      { name: "Plot Summary Frame", formula: "**Trata de** [personaje/tema] y **tiene lugar en** [lugar].", note: "Always keep plot summaries in the present tense." },
      { name: "Past Viewing Narration", formula: "El fin de semana pasado **fui** al cine y **la vi** con…", note: "No accents on fui, fue, vi, vio! la = la película." },
      { name: "Balanced Critique", formula: "**Por un lado**, lo mejor **fue**…; **sin embargo**, lo peor **fue**…", note: "Balances strengths and weaknesses effortlessly." },
      { name: "Recommendation & Future", formula: "Le doy [X] estrellas. **La recomiendo** y el mes que viene **veré**…", note: "Use lo recomiendo if reviewing un documental (m.)." },
    ],
  },
};
