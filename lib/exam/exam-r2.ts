import type { ExamPaper } from "../types";

const PHARMACY_CARD_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish pharmacy prescription card from Farmacia San Marcos showing patient symptoms, dosage and recovery instructions"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="32" y="37" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="var(--ink)">FARMACIA SAN MARCOS — Receta &amp; Consejos</text><text x="32" y="53" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Paciente: Elena Ruiz · Fecha: jueves 6 de febrero</text><rect x="478" y="24" width="52" height="28" rx="6" fill="var(--good)"/><text x="504" y="43" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="var(--brand-ink)">+</text><rect x="16" y="72" width="252" height="118" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="92" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--bad)">MOTIVO DE LA VISITA</text><text x="28" y="112" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Está resfriada desde hace cinco días</text><text x="28" y="132" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Tiene tos seca y fiebre leve</text><text x="28" y="152" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Le duele mucho la cabeza</text><text x="28" y="172" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Se ha cortado el dedo (pequeño corte)</text><rect x="284" y="72" width="260" height="118" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="296" y="92" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--info)">REMEDIOS ENTREGADOS</text><text x="296" y="112" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Jarabe para la tos (una cucharada)</text><text x="296" y="132" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Pastillas cada ocho horas con agua</text><text x="296" y="152" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Una caja de tiritas para el dedo</text><text x="296" y="172" font-family="system-ui, sans-serif" font-size="11.5" fill="var(--ink)">• Beber líquidos y descansar en cama</text><rect x="16" y="200" width="528" height="34" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"/><text x="280" y="221" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Aviso: Si la fiebre continúa el lunes, volverá al médico.</text></svg>`;

const CLOTHES_RECEIPT_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish clothing shop receipt from Modas Estrella listing garments, colours, patterns, sizes, prices and an exchange policy note"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="528" height="44" rx="8" fill="var(--brand-soft)"/><text x="280" y="36" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="var(--ink)">MODAS ESTRELLA — Ticket de compra</text><text x="280" y="52" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Centro Comercial Sol · Rebajas de primavera</text><rect x="16" y="70" width="528" height="128" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="30" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink-2)">PRENDA Y DISEÑO</text><text x="360" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink-2)">TALLA</text><text x="524" y="90" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink-2)">PRECIO</text><line x1="26" y1="98" x2="534" y2="98" stroke="var(--line)" stroke-width="1"/><text x="30" y="118" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Camiseta de rayas azules y blancas (algodón)</text><text x="368" y="118" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">M</text><text x="524" y="118" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">14,50 €</text><text x="30" y="140" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Vaqueros oscuros modernos</text><text x="368" y="140" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">38</text><text x="524" y="140" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">29,00 €</text><text x="30" y="162" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">Sudadera verde con capucha (¡una ganga!)</text><text x="368" y="162" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">L</text><text x="524" y="162" text-anchor="end" font-family="system-ui, sans-serif" font-size="12" fill="var(--ink)">18,00 €</text><text x="30" y="184" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--brand)">TOTAL PAGADO CON TARJETA</text><text x="524" y="184" text-anchor="end" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--brand)">61,50 €</text><rect x="16" y="206" width="528" height="30" rx="6" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="280" y="225" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Cambios gratis en 15 días si la prenda queda demasiado grande o estrecha.</text></svg>`;

const CINEMA_PLAN_SVG = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish cinema schedule for Cines Lumière on Saturday alongside a short invitation chat between Ana and Pablo"><rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="16" width="268" height="218" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="28" y="38" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="var(--brand)">CINES LUMIÈRE — Sábado</text><line x1="26" y1="48" x2="274" y2="48" stroke="var(--line)" stroke-width="1"/><text x="28" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)">17:15 · «Planeta Cero»</text><text x="28" y="86" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Ciencia ficción · Efectos especiales</text><text x="28" y="114" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)">19:30 · «Risas en Sevilla»</text><text x="28" y="130" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Comedia · Muy entretenida</text><text x="28" y="158" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)">21:00 · «La casa oscura»</text><text x="28" y="174" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)">Terror · Solo mayores de 16</text><text x="28" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--good)">Entrada joven: 6,50 €</text><rect x="296" y="16" width="248" height="218" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1"/><text x="308" y="38" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="var(--info)">MENSAJES — Ana &amp; Pablo</text><rect x="308" y="52" width="224" height="52" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/><text x="316" y="69" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--brand)">Ana:</text><text x="316" y="85" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">¿Quedamos el sábado para ver</text><text x="316" y="98" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">«Planeta Cero» a las cinco?</text><rect x="308" y="112" width="224" height="60" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1"/><text x="316" y="129" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--good)">Pablo:</text><text x="316" y="145" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">Lo siento, a las cinco cuido a mi</text><text x="316" y="159" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">hermano. ¿Vamos a la comedia a las 19:30?</text><rect x="308" y="180" width="224" height="42" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1"/><text x="316" y="197" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--brand)">Ana:</text><text x="316" y="212" font-family="system-ui, sans-serif" font-size="11" fill="var(--ink)">¡Vale! Quedamos delante de la estación.</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-r2",
  title: "Year 9 Spanish Reading & Grammar Mock 2 (Health, Fashion & Cinema)",
  calculator: false,
  minutes: 45,
  questions: [
    // -----------------------------------------------------------------------
    // WARMUP (q01–q06)
    // -----------------------------------------------------------------------
    {
      id: "exam-r2-q01",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "body-illness-treatment",
      guideRef: "body-parts-doler",
      question:
        "Read Luis's message to his PE teacher:\n\n> *Hoy no puedo entrenar porque me duelen las rodillas y me duele el brazo derecho.*\n\nWhich body parts hurt Luis today?",
      options: [
        "His knees and his right arm",
        "His ears and his right leg",
        "His feet and his left hand",
        "His teeth and his sore back",
      ],
      answerIndex: 0,
      hints: [
        "*Las rodillas* is plural ('the knees') and *el brazo derecho* is singular ('the right arm').",
      ],
      strategy: "Pair *me duele(n)* with body-part nouns",
      explanation:
        "*Las rodillas* = 'knees' (plural → *me duelen*), and *el brazo derecho* = 'right arm' (singular → *me duele*). *Oídos* are ears and *pierna* is leg.",
    },
    {
      id: "exam-r2-q02",
      kind: "short",
      difficulty: "warmup",
      topicId: "clothes-uniform-shopping",
      guideRef: "clothes-colours-agreement",
      question:
        "Translate this clothing description into English:\n\n**una falda de cuadros**",
      answer: {
        type: "text",
        accept: [
          "a checked skirt",
          "a tartan skirt",
          "a plaid skirt",
          "a checkered skirt",
          "checked skirt",
          "plaid skirt",
        ],
        display: "a checked skirt",
      },
      traps: [
        {
          spec: { type: "text", accept: ["a striped skirt", "striped skirt"] },
          feedback: "*De rayas* means 'striped'; **de cuadros** means 'checked / plaid / tartan'!",
        },
        {
          spec: { type: "text", accept: ["a spotted skirt", "a polka dot skirt"] },
          feedback: "*De lunares* means 'polka-dot / spotted'; **de cuadros** means 'checked'.",
        },
      ],
      hints: [
        "*Una falda* is a skirt, and *cuadros* comes from 'squares' (checks/plaid).",
      ],
      strategy: "Distinguish patterns: *de rayas* (striped), *de cuadros* (checked), *de lunares* (spotted)",
      solution: [
        "*Una falda* = a skirt; *de cuadros* = checked / plaid.",
        "Answer: **a checked skirt**.",
      ],
    },
    {
      id: "exam-r2-q03",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "social-plans-films",
      guideRef: "arranging-a-meeting",
      question:
        "What does the invitation question **¿A qué hora quedamos?** mean in English?",
      options: [
        "Where should we buy the tickets?",
        "What time shall we meet up?",
        "Which film do you want to see?",
        "Why can you not come tonight?",
      ],
      answerIndex: 1,
      hints: [
        "*¿A qué hora?* asks for the clock time, and *quedar* means 'to meet up / arrange to meet'.",
      ],
      strategy: "Recognise social-planning questions with *quedar*",
      explanation:
        "**¿A qué hora quedamos?** means 'What time shall we meet up?'. *¿Dónde quedamos?* asks 'Where shall we meet?'.",
    },
    {
      id: "exam-r2-q04",
      kind: "short",
      difficulty: "warmup",
      topicId: "four-tenses-grammar",
      guideRef: "present-tense-mastery",
      question:
        "Complete the sentence with the *yo* present-tense form of **poner** ('I put on' — irregular *-go* verb):\n\n*Cuando hace frío, me ______ una chaqueta de lana.*",
      answer: {
        type: "text",
        accept: ["pongo", "yo pongo"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["pono", "yo pono"] },
          feedback: "*Poner* is a *-go* verb in the *yo* present tense: **pongo** (not *pono*)!",
        },
        {
          spec: { type: "text", accept: ["puse", "pondré"] },
          feedback: "*Cuando hace frío* states a regular present habit, so use present **pongo**, not preterite or future.",
        },
      ],
      hints: [
        "Like *tengo, hago, salgo*, *poner* adds **-go** in the *yo* present form.",
      ],
      strategy: "Recall *-go* verbs in the present tense",
      solution: [
        "Present *yo* of *poner* = **pongo** (*me pongo* = I put on).",
      ],
    },
    {
      id: "exam-r2-q05",
      kind: "mcq",
      difficulty: "warmup",
      topicId: "holidays-activities",
      guideRef: "holiday-activities-preterite",
      question:
        "Read Tomás's postcard from Tenerife:\n\n> *Ayer visité el volcán, comí pescado fresco y lo pasé genial. ¡Fue una excursión fantástica!*\n\nWhich detail is **NOT** mentioned in Tomás's postcard?",
      options: [
        "He went to see a volcano yesterday.",
        "He ate fresh fish during the day.",
        "He bought new trainers at a market.",
        "He thought the excursion was fantastic.",
      ],
      answerIndex: 2,
      hints: [
        "Match each clause in Tomás's postcard against the options to spot the one invented detail.",
      ],
      strategy: "Eliminate confirmed details in *NOT mentioned* reading items",
      explanation:
        "Tomás mentions visiting the volcano (*visité el volcán*), eating fresh fish (*comí pescado fresco*), and calling the trip fantastic (*¡Fue una excursión fantástica!*). Shopping for trainers is never mentioned.",
    },
    {
      id: "exam-r2-q06",
      kind: "short",
      difficulty: "warmup",
      topicId: "food-market-restaurant",
      guideRef: "ordering-in-restaurant",
      question:
        "A diner tells the waiter: **Tengo alergia a los frutos secos.**\nWhat is the diner allergic to? (Answer in English.)",
      answer: {
        type: "text",
        accept: ["nuts", "tree nuts", "dried fruit and nuts", "dry fruits and nuts"],
        display: "nuts",
      },
      traps: [
        {
          spec: { type: "text", accept: ["seafood", "shellfish", "milk", "dairy"] },
          feedback: "*Mariscos* is seafood and *leche* is milk; **los frutos secos** means **nuts**!",
        },
      ],
      hints: [
        "In Spanish restaurant menus, *los frutos secos* is the standard allergy term for almonds, pistachios, cashews, etc.",
      ],
      strategy: "Memorise key allergy vocabulary for restaurant menus",
      solution: [
        "*Tener alergia a* = to be allergic to; *los frutos secos* = **nuts**.",
      ],
    },

    // -----------------------------------------------------------------------
    // CORE (q07–q23)
    // -----------------------------------------------------------------------
    {
      id: "exam-r2-q07",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "illnesses-symptoms-injuries",
      question:
        "Read the nurse's note: **Alba está mareada y tiene náuseas.**\nWhat does **está mareada** mean in English?",
      answer: {
        type: "text",
        accept: ["she is dizzy", "she feels dizzy", "dizzy", "feeling dizzy", "lightheaded", "she is lightheaded"],
        display: "she is dizzy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["she is tired", "tired"] },
          feedback: "*Cansada* means 'tired'; **mareada** means **dizzy** (or seasick/lightheaded)!",
        },
        {
          spec: { type: "text", accept: ["she has a cold", "cold"] },
          feedback: "*Resfriada* means 'has a cold'; **mareada** means **dizzy**.",
        },
      ],
      hints: [
        "Notice *estar + adjective* is used for temporary physical states (*cansada, resfriada, mareada*).",
        "Think of the Spanish word *mar* (sea) — *mareada* describes the spinning, seasick feeling when your head swims.",
      ],
      strategy: "Link *estar* health states to root words (*mar → mareado/a*)",
      solution: [
        "*Estar mareado/a* = to feel dizzy / lightheaded.",
        "So *está mareada* = **she is dizzy**.",
      ],
    },
    {
      id: "exam-r2-q08",
      kind: "mcq",
      difficulty: "core",
      topicId: "clothes-uniform-shopping",
      guideRef: "school-uniform-debate",
      question:
        "Read Hugo's opinion on school uniform:\n\n> *Por un lado, el uniforme ahorra tiempo por la mañana e iguala a todos los alumnos. Sin embargo, cuesta demasiado dinero y no permite expresar tu personalidad.*\n\nWhich statement best matches Hugo's view?",
      options: [
        "He thinks uniform is cheap and lets students look unique.",
        "He sees no benefits at all and hates getting ready quickly.",
        "He likes the bright colours because they express personality.",
        "He sees benefits like saving time, yet finds it costly and limiting.",
      ],
      answerIndex: 3,
      hints: [
        "Look at the two sides introduced by *Por un lado...* ('On the one hand...') and *Sin embargo...* ('However...').",
        "*Ahorra tiempo* = saves time; *cuesta demasiado dinero* = costs too much money.",
      ],
      strategy: "Map balanced arguments around *por un lado* and *sin embargo*",
      explanation:
        "Hugo gives two pros (*ahorra tiempo* = saves time; *iguala a los alumnos* = makes students equal) and two cons (*cuesta demasiado dinero* = too expensive; *no permite expresar tu personalidad* = cannot express personality).",
    },
    {
      id: "exam-r2-q09",
      kind: "short",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "accepting-making-excuses",
      question:
        "Translate this polite refusal into Spanish using *tener que*:\n\n**I'm sorry, I can't because I have to tidy my bedroom.**\n*(Start with: Lo siento, no puedo...)*",
      answer: {
        type: "text",
        accept: [
          "Lo siento, no puedo porque tengo que ordenar mi dormitorio",
          "Lo siento no puedo porque tengo que ordenar mi dormitorio",
          "Lo siento, no puedo porque tengo que ordenar mi habitación",
          "Lo siento no puedo porque tengo que ordenar mi habitación",
          "Lo siento, no puedo porque tengo que arreglar mi dormitorio",
          "Lo siento, no puedo porque tengo que arreglar mi habitación",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Lo siento, no puedo porque tengo ordenar mi dormitorio"] },
          feedback: "Never drop **que**! 'Have to + verb' is always *tener **que** + infinitive* (*tengo que ordenar*).",
        },
        {
          spec: { type: "text", accept: ["Lo siento, no podo porque tengo que ordenar mi dormitorio"] },
          feedback: "*Poder* is an *o → ue* stem-changer in the present tense: **puedo**, not *podo*!",
        },
      ],
      hints: [
        "'Because I have to' = *porque tengo que* + infinitive.",
        "'To tidy my bedroom' = *ordenar mi dormitorio* (or *mi habitación*).",
      ],
      strategy: "Use *Lo siento, no puedo porque tengo que + infinitive*",
      solution: [
        "'I'm sorry, I can't' = *Lo siento, no puedo*.",
        "'because I have to tidy my bedroom' = *porque tengo que ordenar mi dormitorio*.",
      ],
    },
    {
      id: "exam-r2-q10",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "preterite-tense-mastery",
      question:
        "Which option shows the **correct *yo* preterite** forms of **empezar** (*-zar*), **llegar** (*-gar*), and **buscar** (*-car*)?",
      options: [
        "empezé · llegé · buscé",
        "empecé · llegué · buscé",
        "empezé · llegué · busqué",
        "empecé · llegué · busqué",
      ],
      answerIndex: 3,
      hints: [
        "Check ALL THREE *-car / -gar / -zar* spelling rules in the *yo* preterite before *-é*.",
        "*-zar → -cé*, *-gar → -gué*, and *-car → -qué*.",
      ],
      strategy: "Apply the CAR-GAR-ZAR *yo*-preterite triad",
      explanation:
        "In the *yo* preterite, *-zar → -cé* (**empecé**), *-gar → -gué* (**llegué**), and *-car → -qué* (**busqué**). Each change protects pronunciation or Spanish spelling rules (*z* never sits before *e*).",
    },
    {
      id: "exam-r2-q11",
      kind: "short",
      difficulty: "core",
      topicId: "hotels-places-reviews",
      guideRef: "booking-and-problems",
      question:
        "Read this short hotel review excerpt:\n\n> *El albergue juvenil estaba limpio, pero hacía demasiado ruido por la noche y la calefacción no funcionaba.*\n\nIn English, what **two** things spoilt the guest's night? (Join with *and*.)",
      answer: {
        type: "text",
        accept: [
          "too much noise and the heating did not work",
          "it was too noisy and the heating did not work",
          "there was too much noise and the heating did not work",
          "it was too noisy and the heating didn't work",
          "too much noise and broken heating",
          "the heating did not work and it was too noisy",
          "the heating did not work and there was too much noise",
        ],
        display: "too much noise and the heating did not work",
      },
      traps: [
        {
          spec: { type: "text", accept: ["too much noise and the air conditioning did not work"] },
          feedback: "*El aire acondicionado* is air conditioning; **la calefacción** is **the heating**!",
        },
      ],
      hints: [
        "*Hacía demasiado ruido* means 'it was too noisy / there was too much noise'.",
        "*La calefacción* means 'the heating', and *no funcionaba* means 'was not working'.",
      ],
      strategy: "Focus on the clauses after *pero* for negative points",
      solution: [
        "*Hacía demasiado ruido* = there was too much noise.",
        "*La calefacción no funcionaba* = the heating did not work.",
      ],
    },
    {
      id: "exam-r2-q12",
      kind: "mcq",
      difficulty: "core",
      topicId: "healthy-living-diet",
      guideRef: "balanced-diet-habits",
      question:
        "Read Sergio's lifestyle note:\n\n> *Evito la grasa y los refrescos azucarados, pero a veces paso demasiado tiempo delante de la pantalla antes de dormir.*\n\nWhat is Sergio's **ONE** unhealthy habit?",
      options: [
        "Spending too much time on screens before sleeping",
        "Eating too much greasy food and sugary snacks",
        "Drinking fizzy sugary soft drinks every evening",
        "Skipping breakfast and never doing any exercise",
      ],
      answerIndex: 0,
      hints: [
        "Notice the contrast word *pero* ('but') separating his healthy choices from his one bad habit.",
        "*Delante de la pantalla* literally means 'in front of the screen'.",
      ],
      strategy: "Use *pero* to pinpoint the exception to a healthy routine",
      explanation:
        "Sergio avoids (*evito*) fat and sugary soft drinks, **but** (*pero*) sometimes spends too much time in front of a screen before bed (*paso demasiado tiempo delante de la pantalla antes de dormir*).",
    },
    {
      id: "exam-r2-q13",
      kind: "mcq",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "pharmacy-doctor-remedies",
      diagram: PHARMACY_CARD_SVG,
      question:
        "Study Elena's prescription card from **Farmacia San Marcos** in the diagram. Why was she given **una caja de tiritas**?",
      options: [
        "Because she has had a dry cough and mild fever for five days.",
        "Because she cut her finger and has a small wound to cover.",
        "Because she twisted her ankle while running on Thursday.",
        "Because she has a bad headache and needs to take tablets.",
      ],
      answerIndex: 1,
      hints: [
        "Check the bullet points in *MOTIVO DE LA VISITA* on the left and match *tiritas* ('plasters / band-aids') to the right injury.",
        "*Se ha cortado el dedo* means 'she has cut her finger'.",
      ],
      strategy: "Match each pharmacy remedy to its exact symptom on the card",
      explanation:
        "The card lists *Se ha cortado el dedo (pequeño corte)* ('she has cut her finger — small cut') alongside *Una caja de tiritas para el dedo* ('a box of plasters for her finger'). The syrup and tablets are for her cough and headache.",
    },
    {
      id: "exam-r2-q14",
      kind: "mcq",
      difficulty: "core",
      topicId: "clothes-uniform-shopping",
      guideRef: "shopping-demonstratives",
      diagram: CLOTHES_RECEIPT_SVG,
      question:
        "Look at the **Modas Estrella** receipt in the diagram. Which statement is **TRUE** about the purchase?",
      options: [
        "The shopper paid in cash and bought a spotted cotton shirt.",
        "The dark jeans cost 14,50 € and were size medium.",
        "The green hoodie cost 18,00 € and was considered a bargain.",
        "Exchanges are only accepted for seven days with a fee.",
      ],
      answerIndex: 2,
      hints: [
        "Read the third row in the table (*Sudadera verde con capucha*) and notice the exclamation *(¡una ganga!)*.",
        "Check the bottom green bar for the exchange period (*15 días*) and payment method (*con tarjeta*).",
      ],
      strategy: "Verify price, garment word, and idiom (*una ganga* = a bargain)",
      explanation:
        "Row 3 shows *Sudadera verde con capucha (¡una ganga!)* for **18,00 €** ('green hoodie — a bargain!'). The shopper paid by card (*con tarjeta*), the T-shirt is striped (*de rayas*), and exchanges are free for 15 days.",
    },
    {
      id: "exam-r2-q15",
      kind: "mcq",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "film-genres-opinions",
      diagram: CINEMA_PLAN_SVG,
      question:
        "Read the **Cines Lumière** listings and Ana & Pablo's chat in the diagram. Why do Ana and Pablo decide to watch **«Risas en Sevilla»** instead of **«Planeta Cero»**?",
      options: [
        "Because «Planeta Cero» is only for viewers aged 16 and over.",
        "Because Ana hates science-fiction films and special effects.",
        "Because «Risas en Sevilla» is cheaper than the earlier showing.",
        "Because Pablo has to look after his brother at five o'clock.",
      ],
      answerIndex: 3,
      hints: [
        "Read Pablo's green message box on the right-hand side of the diagram.",
        "*Cuido a mi hermano* means 'I look after / babysit my brother'.",
      ],
      strategy: "Extract the real excuse from a two-person chat",
      explanation:
        "Pablo replies *Lo siento, a las cinco cuido a mi hermano* ('Sorry, at five I'm looking after my brother') and suggests the 19:30 comedy *«Risas en Sevilla»* instead. The 16+ restriction is on the 21:00 horror film *«La casa oscura»*.",
    },
    {
      id: "exam-r2-q16",
      kind: "short",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "immediate-vs-simple-future",
      question:
        "Put the irregular verb **poder** ('to be able to') into the *nosotros* **simple future** tense:\n\n*Si ahorramos dinero, el año que viene ______ (poder) ir a Madrid.*",
      answer: {
        type: "text",
        accept: ["podremos", "nosotros podremos", "nosotras podremos"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["poderemos", "podrémos"] },
          feedback: "*Poder* drops the **e** to form the stem **podr-**, and *-emos* takes NO accent: **podremos**!",
        },
        {
          spec: { type: "text", accept: ["podemos", "pudimos"] },
          feedback: "*Podemos* is present ('we can') and *pudimos* is preterite ('we could'). You need simple future ('we will be able to'): **podremos**.",
        },
      ],
      hints: [
        "*Poder* has the irregular simple future stem **podr-** (drop the *e*).",
        "Add the *nosotros* future ending *-emos* (remember: no written accent on *-emos*!).",
      ],
      strategy: "Use irregular stem *podr-* + unaccented *-emos*",
      solution: [
        "Irregular simple future stem of *poder* = *podr-*.",
        "*Nosotros* ending = *-emos* (no accent) → **podremos**.",
      ],
    },
    {
      id: "exam-r2-q17",
      kind: "mcq",
      difficulty: "core",
      topicId: "food-market-restaurant",
      guideRef: "hispanic-cuisine-tenses",
      question:
        "Read Valentina's street-food blog:\n\n> *En Madrid probé los churros con chocolate y me parecieron demasiado dulces. Prefiero las tapas saladas como las patatas bravas.*\n\nWhy does Valentina prefer *patatas bravas* over *churros*?",
      options: [
        "She found the churros too sweet and prefers savoury tapas.",
        "She thought the churros were too spicy and overly expensive.",
        "She is allergic to chocolate and never eats fried potatoes.",
        "She disliked Spanish food and prefers Italian pasta instead.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the two taste adjectives: *demasiado dulces* ('too sweet') and *saladas* ('savoury / salty').",
        "Check what *prefiero* ('I prefer') introduces.",
      ],
      strategy: "Contrast taste adjectives (*dulce* vs *salado* vs *picante*)",
      explanation:
        "*Demasiado dulces* means 'too sweet', and *las tapas saladas* means 'savoury/salty tapas'. So Valentina prefers *patatas bravas* because she found the churros too sweet.",
    },
    {
      id: "exam-r2-q18",
      kind: "short",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "immediate-vs-simple-future",
      question:
        "Complete this weekend plan with the *ellos* **simple future** form of **salir** ('they will go out'):\n\n*Después de los exámenes, mis amigos ______ (salir) a cenar juntos.*",
      answer: {
        type: "text",
        accept: ["saldrán", "ellos saldrán"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["salirán", "ellos salirán"] },
          feedback: "*Salir* is irregular in the simple future — replace the *i* with *d* to get the stem **saldr-**: **saldrán**!",
        },
        {
          spec: { type: "text", accept: ["salen", "salieron"] },
          feedback: "*Salen* is present and *salieron* is preterite. Use simple future **saldrán** (accent on *á*).",
        },
      ],
      hints: [
        "*Salir* belongs to the *-dr-* irregular future stem group (like *tendr-* and *vendr-*): **saldr-**.",
        "Add the *ellos* simple future ending *-án* (with a written accent on *á*).",
      ],
      strategy: "Apply *-dr-* irregular stems (*tendr-, saldr-, vendr-, pondr-*)",
      solution: [
        "Future stem of *salir* = *saldr-*.",
        "*Ellos* ending = *-án* → **saldrán**.",
      ],
    },
    {
      id: "exam-r2-q19",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "health-dialogues-past",
      question:
        "Put the reflexive verb **caerse** ('to fall over') into the *yo* **preterite** to complete this accident report:\n\n*Ayer en el patio ______ (caerse) y me hice daño en la mano.*",
      answer: {
        type: "text",
        accept: ["me caí", "yo me caí"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["caí", "me caigo"] },
          feedback: "Remember BOTH the reflexive pronoun **me** AND the *yo* preterite **caí** (*me caigo* is present tense)!",
        },
        {
          spec: { type: "text", accept: ["me cayó"] },
          feedback: "*Cayó* is 3rd-person singular ('he/she fell'). For *yo*, write **me caí** (with an accent on *í*).",
        },
      ],
      hints: [
        "Move the reflexive pronoun *se → me* in front of the verb for *yo*.",
        "The *yo* preterite of *caer* ends in accented *-í*: *caí*.",
      ],
      strategy: "Keep reflexive pronoun + accented *yo* preterite (*me caí*)",
      solution: [
        "Reflexive pronoun for *yo* = *me*.",
        "*Yo* preterite of *caer* = *caí* → **me caí**.",
      ],
    },
    {
      id: "exam-r2-q20",
      kind: "short",
      difficulty: "core",
      topicId: "clothes-uniform-shopping",
      guideRef: "outfits-across-tenses",
      question:
        "Complete this shopping sentence in the **preterite** with the *él/ella* form of **costar** ('it cost'):\n\n*El sábado compré una chaqueta negra y ______ (costar) cuarenta euros.*",
      answer: {
        type: "text",
        accept: ["costó"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["cuesta"] },
          feedback: "*Cuesta* is present tense ('it costs'). Because you bought it last Saturday (*compré*), use preterite **costó**!",
        },
        {
          spec: { type: "text", accept: ["cuestó", "costaron"] },
          feedback: "*-ar* verbs do NOT stem-change *o → ue* in the preterite (*costó*, never *cuestó*), and *una chaqueta* is singular!",
        },
      ],
      hints: [
        "Does an *-ar* verb like *costar* stem-change in the preterite? No — keep the **o**!",
        "*Una chaqueta* is singular (*ella*), so add the accented 3rd-person singular ending *-ó*.",
      ],
      strategy: "No *o → ue* stem change for *-ar* verbs in the preterite (*costó*)",
      solution: [
        "*Costar* in 3rd-person singular preterite = **costó** (with accent on *ó*).",
      ],
    },
    {
      id: "exam-r2-q21",
      kind: "mcq",
      difficulty: "core",
      topicId: "social-plans-films",
      guideRef: "writing-film-reviews",
      question:
        "Read Nora's cinema review:\n\n> *El domingo vi una película de aventuras. Aunque el argumento era un poco predecible, la banda sonora fue espectacular y los actores actuaron muy bien. La recomiendo a todos los aficionados a la acción.*\n\nWhat was Nora's **ONLY criticism** of the film?",
      options: [
        "The soundtrack felt too loud during action scenes.",
        "The main actors gave unconvincing performances.",
        "The storyline was slightly predictable in places.",
        "The film lasted far too long for young audiences.",
      ],
      answerIndex: 2,
      hints: [
        "Look right after the concession word *Aunque* ('Although / Even though').",
        "*El argumento* means 'the plot / storyline' and *predecible* is a near-cognate.",
      ],
      strategy: "Use *aunque* ('although') to spot the criticism in a positive review",
      explanation:
        "Nora writes *Aunque el argumento era un poco predecible* ('Although the plot was a bit predictable'). She praised the soundtrack (*la banda sonora fue espectacular*) and acting (*actuaron muy bien*).",
    },
    {
      id: "exam-r2-q22",
      kind: "mcq",
      difficulty: "core",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      question:
        "Read Dani's four-sentence diary entry:\n\n> *(1) Siempre llevo zapatillas cómodas al colegio. (2) Ayer compré unos zapatos negros para la boda. (3) Esta tarde voy a probarme la corbata. (4) El sábado llevaré un traje elegante.*\n\nWhich sentence uses the **simple future** tense?",
      options: [
        "Sentence 1 (*Siempre llevo...*)",
        "Sentence 4 (*El sábado llevaré...*)",
        "Sentence 2 (*Ayer compré...*)",
        "Sentence 3 (*Esta tarde voy a probarme...*)",
      ],
      answerIndex: 1,
      hints: [
        "Distinguish immediate future (*ir + a + infinitive*) from simple future (one word: *infinitive + -é*).",
        "Look for *llevaré* ('I will wear').",
      ],
      strategy: "Identify one-word simple future (*llevaré*) vs periphrastic immediate future (*voy a probarme*)",
      explanation:
        "Sentence 4 uses **llevaré** (infinitive *llevar* + *-é*), which is the simple future ('I will wear'). Sentence 1 is present (*llevo*), Sentence 2 is preterite (*compré*), and Sentence 3 is immediate future (*voy a probarme*).",
    },
    {
      id: "exam-r2-q23",
      kind: "short",
      difficulty: "core",
      topicId: "body-illness-treatment",
      guideRef: "body-parts-doler",
      question:
        "Complete the sentence with the correct form of **doler** (*duele* or *duelen*) AND the definite article (**2 words total**):\n\n*Después de caminar diez kilómetros, me ______ pies.*",
      answer: {
        type: "text",
        accept: ["duelen los"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["duele los", "duele el"] },
          feedback: "*Pies* ('feet') is plural, so *doler* MUST be plural **duelen** (*duelen los pies*)!",
        },
        {
          spec: { type: "text", accept: ["duelen las", "duelen mis"] },
          feedback: "*El pie / los pies* is masculine, and Spanish uses definite article **los** (not *mis*) with body parts!",
        },
      ],
      hints: [
        "Is *pies* ('feet') singular or plural? Match *doler* accordingly (*duele* vs *duelen*).",
        "*El pie* is masculine, so its plural definite article is *los*.",
      ],
      strategy: "Check number (*duele* vs *duelen*) AND gender (*los pies*)",
      solution: [
        "*Los pies* is masculine plural → verb **duelen** + article **los**.",
        "*...me **duelen los** pies.*",
      ],
    },

    // -----------------------------------------------------------------------
    // CHALLENGE (q24–q30)
    // -----------------------------------------------------------------------
    {
      id: "exam-r2-q24",
      kind: "short",
      difficulty: "challenge",
      topicId: "clothes-uniform-shopping",
      guideRef: "clothes-colours-agreement",
      question:
        "Translate into Spanish, watching adjective position AND feminine plural agreement:\n\n**these white trainers**\n*(Use zapatillas for trainers)*",
      answer: {
        type: "text",
        accept: [
          "estas zapatillas blancas",
          "estas zapatillas de deporte blancas",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["estos zapatillas blancos", "estas zapatillas blancos"] },
          feedback: "*Las zapatillas* is feminine plural, so BOTH the demonstrative (**estas**) and the colour (**blancas**) must end in *-as*!",
        },
        {
          spec: { type: "text", accept: ["esos zapatillas blancas", "esas zapatillas blancas"] },
          feedback: "*Esas* means 'those'; 'these' (close to the speaker) is **estas** (*this and these have got T's*!).",
        },
      ],
      hints: [
        "'This and these have got T's': feminine plural 'these' = *estas*.",
        "Put the colour AFTER the noun and make it feminine plural (*blancas*).",
      ],
      strategy: "Match demonstrative + noun + post-noun colour in gender & number",
      solution: [
        "'these' (fem. pl.) = *estas*; 'trainers' = *zapatillas*; 'white' (fem. pl.) = *blancas*.",
        "Answer: **estas zapatillas blancas**.",
      ],
    },
    {
      id: "exam-r2-q25",
      kind: "short",
      difficulty: "challenge",
      topicId: "social-plans-films",
      guideRef: "accepting-making-excuses",
      question:
        "Translate this enthusiastic acceptance into Spanish (3 words, including the accents!):\n\n**Yes, I would love to!**",
      answer: {
        type: "text",
        accept: [
          "¡Sí, me encantaría!",
          "Sí, me encantaría",
          "Sí me encantaría",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["Sí, me encanta", "¡Sí, me encanta!"] },
          feedback: "*Me encanta* means 'I love it' (present). 'I would love to' uses the conditional **me encantaría**!",
        },
        {
          spec: { type: "text", accept: ["Sí, me gustaría", "¡Sí, me gustaría!"] },
          feedback: "*Me gustaría* means 'I would like to'; for the stronger 'I would love to!', use **¡Sí, me encantaría!**",
        },
      ],
      hints: [
        "'Yes' is *sí* (with an accent on *í* to distinguish it from *si* = 'if').",
        "Use the conditional form of *encantar* (*me ...aría*) with an accent on the *í*.",
      ],
      strategy: "Use *¡Sí, me encantaría!* for high-register acceptance",
      commonError: "Omitting the accent on *Sí* (without an accent, *si* means 'if') or using present *me encanta* instead of conditional *me encantaría*.",
      solution: [
        "'Yes' = *Sí* (accented); 'I would love to' = *me encantaría*.",
        "Full reply: **¡Sí, me encantaría!**",
      ],
    },
    {
      id: "exam-r2-q26",
      kind: "written",
      difficulty: "challenge",
      topicId: "body-illness-treatment",
      guideRef: "pharmacy-doctor-remedies",
      marks: 3,
      question:
        "Write a **3-line pharmacy role-play in Spanish** where you speak to the pharmacist:\n- Say two symptoms you have (one body-part ache AND one illness/state symptom)\n- State how long you have felt ill using the present tense + duration\n- Ask politely for a remedy or advice",
      modelAnswer:
        "Buenos días, me duele mucho la garganta y tengo fiebre. Estoy resfriado desde hace cuatro días. ¿Qué me recomienda? ¿Puedo comprar un jarabe o unas pastillas, por favor?",
      markScheme: [
        {
          point: "Names symptoms using *me duele(n)* + article and a *tengo/estoy* health phrase",
          keywords: ["me duele", "me duelen", "tengo fiebre", "tengo tos", "tengo gripe", "tengo catarro", "estoy resfriado", "estoy resfriada", "estoy cansado", "estoy mareado"],
        },
        {
          point: "Uses *desde hace* with a time duration accurately",
          keywords: ["desde hace"],
        },
        {
          point: "Asks politely for a pharmacy remedy or recommendation",
          keywords: ["pastillas", "jarabe", "crema", "tirita", "tiritas", "recomienda", "quisiera", "puedo comprar", "necesito"],
        },
      ],
      hints: [
        "Combine *Me duele la garganta / la cabeza* with *tengo tos / fiebre* or *estoy resfriado/a*.",
        "Add *desde hace [number] días* and ask *¿Qué me recomienda?* or *Quisiera un jarabe / unas pastillas*.",
      ],
      strategy: "Symptoms (*me duele + tengo*) + *desde hace* + polite pharmacy request",
      commonError:
        "Forgetting *el/la* after *me duele* or writing *por tres días* instead of *desde hace tres días*.",
    },
    {
      id: "exam-r2-q27",
      kind: "written",
      difficulty: "challenge",
      topicId: "clothes-uniform-shopping",
      guideRef: "school-uniform-debate",
      marks: 4,
      question:
        "Write a **balanced 4-sentence Spanish paragraph** on school uniform:\n- Describe two items of uniform you have to wear (with colours agreeing accurately)\n- Give one advantage of wearing school uniform\n- Give one disadvantage using a contrast connective\n- Say what you wear at weekends instead",
      modelAnswer:
        "En mi colegio tengo que llevar una camisa blanca, pantalones grises y zapatos negros. Por un lado, el uniforme ahorra tiempo por la mañana e iguala a los alumnos. Sin embargo, es incómodo y no permite expresar tu personalidad. Los fines de semana prefiero llevar vaqueros azules y una sudadera cómoda.",
      markScheme: [
        {
          point: "Describes school uniform garments with accurate colour/adjective agreement",
          keywords: ["camisa", "pantalones", "falda", "corbata", "zapatos", "blanca", "grises", "negros", "azules", "tengo que llevar"],
        },
        {
          point: "Gives a clear advantage of school uniform",
          keywords: ["ahorra tiempo", "iguala", "buena imagen", "practico", "disciplina", "barato", "ventaja"],
        },
        {
          point: "Gives a disadvantage introduced by a contrast connective",
          keywords: ["sin embargo", "pero", "aunque", "incomodo", "caro", "personalidad", "aburrido", "feo"],
        },
        {
          point: "Describes casual weekend clothing in contrast",
          keywords: ["fines de semana", "vaqueros", "sudadera", "camiseta", "zapatillas", "vestido", "chaqueta"],
        },
      ],
      hints: [
        "Check every colour ending: *camisa blanca* (fem. sg.), *pantalones grises* (masc. pl.), *zapatos negros* (masc. pl.).",
        "Contrast *Por un lado... (ahorra tiempo / iguala a los alumnos)* with *Sin embargo... (es incómodo / caro / no permite expresar tu personalidad)*.",
      ],
      strategy: "Describe uniform + pro + *sin embargo* + con + weekend outfit",
      commonError:
        "Leaving colour adjectives masculine singular next to plural/feminine garments (e.g. *camisa blanco* instead of *camisa blanca*).",
    },
    {
      id: "exam-r2-q28",
      kind: "written",
      difficulty: "challenge",
      topicId: "social-plans-films",
      guideRef: "writing-film-reviews",
      marks: 4,
      question:
        "Write a **4-sentence Spanish film review** covering ALL FOUR points:\n- State when you saw the film, who you went with, and its genre (preterite)\n- Summarise briefly what the film is about\n- Give one strength AND one criticism (e.g. special effects, soundtrack, plot, acting)\n- Recommend the film (or not) and state a future cinema plan",
      modelAnswer:
        "El sábado pasado vi una película de ciencia ficción con mis amigos en el cine. Trata de dos jóvenes que viajan a un planeta desconocido. Los efectos especiales y la banda sonora fueron emocionantes, aunque el final era un poco predecible. La recomiendo a todos los aficionados a la aventura y el mes que viene veré la segunda parte.",
      markScheme: [
        {
          point: "States past viewing (*vi*) with companion and film genre",
          keywords: ["vi", "ciencia ficcion", "accion", "comedia", "terror", "animacion", "romantica", "aventuras", "documental"],
        },
        {
          point: "Gives a brief plot overview using *trata de* or protagonist details",
          keywords: ["trata de", "protagonista", "historia", "personaje", "viajan", "vive", "lucha"],
        },
        {
          point: "Evaluates cinema elements with both a positive and a balanced critique",
          keywords: ["efectos especiales", "banda sonora", "argumento", "actores", "emocionante", "entretenida", "predecible", "aburrida", "aunque", "pero"],
        },
        {
          point: "Includes a clear recommendation and a future cinema plan",
          keywords: ["recomiendo", "aficionados", "vere", "ire", "voy a ver", "segunda parte", "estrellas"],
        },
      ],
      hints: [
        "Open with *El fin de semana pasado vi una película de [genre] con...* (note: *vi* has NO accent!).",
        "Use *Trata de...*, evaluate *los efectos especiales / la banda sonora / el argumento*, and finish with *La recomiendo... y veré...*.",
      ],
      strategy: "Viewing (*vi*) + Plot (*trata de*) + Critique + Recommendation & Future (*veré*)",
      commonError:
        "Putting an accent on one-syllable preterite *vi* or translating 'it is about' literally as *es sobre* instead of *trata de*.",
    },
    {
      id: "exam-r2-q29",
      kind: "written",
      difficulty: "challenge",
      topicId: "four-tenses-grammar",
      guideRef: "mixing-four-tenses",
      marks: 4,
      question:
        "Write a **4-sentence Spanish paragraph** about clothes or cinema using ALL FOUR Year 9 tenses cleanly (one sentence per tense):\n- Present tense (what you normally wear or watch)\n- Preterite tense (what you bought or watched recently)\n- Immediate future (what you are going to do this weekend)\n- Simple future (a prediction or plan for next month/year)",
      modelAnswer:
        "Normalmente prefiero las películas de comedia porque son muy entretenidas. Ayer compré una chaqueta roja de algodón en el centro comercial. Este sábado voy a quedar con mis amigos delante del cine a las seis. El año que viene tendré más tiempo libre e iré al cine todos los meses.",
      markScheme: [
        {
          point: "Uses present tense accurately with a habit marker",
          keywords: ["normalmente", "siempre", "prefiero", "llevo", "veo", "compro", "quedo", "voy"],
        },
        {
          point: "Uses preterite tense accurately for a completed past event",
          keywords: ["ayer", "pasado", "compre", "vi", "fui", "quede", "lleve", "costo", "pague"],
        },
        {
          point: "Uses immediate future (*ir + a + infinitive*) accurately",
          keywords: ["voy a", "vamos a", "va a", "van a"],
        },
        {
          point: "Uses a genuine simple future verb (regular or irregular)",
          keywords: ["tendre", "ire", "vere", "comprare", "llevare", "quedare", "saldre", "hare", "podre", "pondre"],
        },
      ],
      hints: [
        "Anchor every sentence with a clear time clue (*Normalmente / Ayer / Este sábado / El año que viene*).",
        "Make sure sentence 3 uses *voy a + infinitive* and sentence 4 uses a one-word simple future form (*veré, compraré, llevaré, tendré, iré*).",
      ],
      strategy: "One time cue + one distinct verb tense per sentence",
      commonError:
        "Forgetting the accent on regular *yo* preterites (*compré*) or simple future endings (*compraré, llevaré, tendré*).",
    },
    {
      id: "exam-r2-q30",
      kind: "written",
      difficulty: "challenge",
      topicId: "holidays-activities",
      guideRef: "future-holiday-plans",
      marks: 3,
      question:
        "Write **3 sentences in Spanish** about a future holiday combining travel, weather, and clothes/packing:\n- Where you are going to travel and in which season (immediate future)\n- What the weather is going to be like there\n- Two items of clothing you will pack or wear (simple future)",
      modelAnswer:
        "En julio voy a viajar a Mallorca con mis primos. Va a hacer mucho sol y calor todos los días en la isla. Por eso, llevaré camisetas de algodón, gafas de sol y zapatillas blancas.",
      markScheme: [
        {
          point: "States future holiday destination and season/month using immediate future",
          keywords: ["voy a", "vamos a", "verano", "invierno", "julio", "agosto", "pascua", "navidad"],
        },
        {
          point: "Describes expected weather clearly in Spanish",
          keywords: ["hace sol", "hacer sol", "calor", "frio", "llover", "viento", "nieve", "buen tiempo", "mal tiempo"],
        },
        {
          point: "Names clothing items to pack/wear using simple future tense",
          keywords: ["llevare", "pondremos", "me pondre", "comprare", "camiseta", "camisetas", "chaqueta", "vaqueros", "vestido", "zapatillas", "sudadera", "pantalones"],
        },
      ],
      hints: [
        "Combine *voy a viajar a...* with weather (*va a hacer mucho calor / sol / frío / va a llover*).",
        "Use simple future *llevaré* ('I will take/wear') + clothing items with matching colour/material adjectives.",
      ],
      strategy: "Cross-topic synthesis: Holidays + Weather + Clothes in future tenses",
      commonError:
        "Writing *va a ser calor* instead of *va a **hacer** calor* (Spanish uses *hacer* for weather!).",
    },
  ],
};
