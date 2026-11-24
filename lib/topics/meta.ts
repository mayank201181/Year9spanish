// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 Spanish.
// Source: Middle School Curriculum Overview p. 27.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Term 1: Holidays",
  "Term 2: Food & Health",
  "Term 3: Style & Culture",
  "Grammar Mastery",
];

export const TOPIC_META: TopicMeta[] = [
  // ========================= TERM 1: HOLIDAYS =============================
  {
    id: "holidays-activities",
    title: "Holidays: Destinations & Activities (Las vacaciones)",
    strand: "Term 1: Holidays",
    icon: "✈️",
    curriculum: "Year 9 Term 1 Spanish — Holiday Destinations, Transport, Companions & Activities across Present, Preterite & Immediate Future",
    sections: [
      {
        id: "destinations-transport",
        heading: "Holiday Destinations, Countries & Transport",
        covers: "ir de vacaciones a + country/region (a España, a la costa, a la montaña), transport with en (en avión, en tren, en barco, a pie), companions (con mi familia/amigos) and seasons/time expressions.",
      },
      {
        id: "holiday-activities-preterite",
        heading: "Describing Past Holiday Activities in the Preterite",
        covers: "Key regular & irregular preterite holiday verbs: fui (I went), visité, nadé, tomé el sol, saqué fotos (-car → -qué), jugué (-gar → -gué), comí, bebí, lo pasé bomba / fatal, fue increíble.",
      },
      {
        id: "future-holiday-plans",
        heading: "Future Holiday Plans (Immediate Future & Weather)",
        covers: "voy a + infinitive (el año que viene voy a viajar a...), expressing wishes (me gustaría + infinitive), combining weather phrases (hace sol / hizo calor / va a llover) with holiday plans.",
      },
      {
        id: "holiday-opinions-narratives",
        heading: "Justified Opinions & Multi-Tense Holiday Narratives",
        covers: "Combining present (normalmente voy...), preterite (el verano pasado fui...) and immediate future (el próximo año voy a...) with connectives (sin embargo, además, lo mejor fue que...) and justified reasons.",
      },
    ],
  },
  {
    id: "hotels-places-reviews",
    title: "Places of Interest, Hotels & Reviews (El hotel)",
    strand: "Term 1: Holidays",
    icon: "🏨",
    curriculum: "Year 9 Term 1 Spanish — Places of Interest on Holiday, Hotel Descriptions, Booking & Reviews",
    sections: [
      {
        id: "places-of-interest",
        heading: "Places of Interest & Sightseeing (Lugares de interés)",
        covers: "Key attractions (el castillo, la catedral, el museo, el parque temático, el mercado, las ruinas, la plaza mayor), se puede + infinitive, hay / había, and describing what you visited.",
      },
      {
        id: "hotel-types-facilities",
        heading: "Types of Accommodation & Hotel Facilities",
        covers: "un hotel de cinco estrellas, un albergue juvenil, un camping, una casa rural; rooms & board (habitación individual/doble, con vistas al mar, media pensión, pensión completa); facilities (piscina climatizada, wifi gratis, aire acondicionado, gimnasio).",
      },
      {
        id: "booking-and-problems",
        heading: "Booking a Room & Complaining About Problems",
        covers: "Polite booking dialogues (Quisiera reservar una habitación para dos noches; ¿Cuánto cuesta por noche?); complaining politely about disasters (el ascensor no funciona, la habitación está sucia, hace demasiado ruido, no hay agua caliente).",
      },
      {
        id: "writing-hotel-reviews",
        heading: "Writing Authentic Hotel & Trip Reviews (Las reseñas)",
        covers: "Star ratings, balanced positive + negative points (por un lado... por otro lado..., aunque), past opinions (me encantó / me decepcionó / lo recomiendo / no volveré nunca), and exact adjective agreement.",
      },
    ],
  },

  // ====================== TERM 2: FOOD & HEALTH ===========================
  {
    id: "food-market-restaurant",
    title: "Food, Market Quantities & Restaurant (La comida)",
    strand: "Term 2: Food & Health",
    icon: "🥘",
    curriculum: "Year 9 Term 2 Spanish — Food Opinions, Meal Times, In the Marketplace, Quantities & Measurements, Ordering in a Restaurant",
    sections: [
      {
        id: "food-opinions-mealtimes",
        heading: "Food Vocabulary, Opinions & Spanish Meal Times",
        covers: "Core foods & drinks; meal verbs desayunar, almorzar/comer, merendar, cenar and typical Spanish meal times; me gusta(n)/me encanta(n)/odio + el/la/los/las; adjectives (delicioso, picante, salado, dulce, asqueroso, sano).",
      },
      {
        id: "market-quantities",
        heading: "In the Marketplace: Quantities, Weights & Prices",
        covers: "Weights & packaging: cien gramos de, medio kilo de, un kilo de, un litro de, una botella de, una lata de, una caja de, una barra de pan, una docena de huevos; shopping phrases (¿Qué desea? / Póngame... / ¿Cuánto es en total?).",
      },
      {
        id: "ordering-in-restaurant",
        heading: "Ordering in a Restaurant & Handling Problems",
        covers: "Menu structure (de primer plato, de segundo plato, de postre, para beber); polite ordering (Quisiera / Para mí / ¿Qué me recomienda? / La cuenta, por favor); complaining (está frío, falta un tenedor, soy vegetariano/a, tengo alergia a...).",
      },
      {
        id: "hispanic-cuisine-tenses",
        heading: "Hispanic Cuisine & Food Across Three Tenses",
        covers: "Iconic dishes (paella, tortilla española, gazpacho, churros, tacos, empanadas); narrating what you usually eat, what you ate at a restaurant yesterday (comí, pedí, probé) and what you will try next (voy a probar / probaré).",
      },
    ],
  },
  {
    id: "healthy-living-diet",
    title: "Healthy Living, Diet & Advice (La vida sana)",
    strand: "Term 2: Food & Health",
    icon: "🥗",
    curriculum: "Year 9 Term 2 Spanish — Healthy Living, Balanced Diet, Exercise & Lifestyle Advice",
    sections: [
      {
        id: "balanced-diet-habits",
        heading: "Balanced Diet & Healthy vs Unhealthy Habits",
        covers: "Comer cinco raciones de fruta y verdura, beber mucha agua, evitar la comida basura / los refrescos azucarados / la grasa, dormir ocho horas, hacer ejercicio regularmente, llevar una vida sana.",
      },
      {
        id: "giving-health-advice",
        heading: "Giving Lifestyle Advice (Se debe, Hay que, Deberías)",
        covers: "Impersonal & personal advice structures followed by infinitive: se debe / no se debe, hay que, tienes que, deberías, es importante / es imprescindible + infinitive, para estar en forma.",
      },
      {
        id: "sport-fitness-stress",
        heading: "Sport, Sleep, Screen Time & Mental Wellbeing",
        covers: "Benefits of keeping fit (me ayuda a relajarme, reduce el estrés, me da energía), drawbacks of sedentary habits (pasar demasiado tiempo delante de la pantalla, acostarse tarde), frequency adverbs.",
      },
      {
        id: "future-health-resolutions",
        heading: "Future Health Resolutions (Immediate & Simple Future)",
        covers: "Comparing past unhealthy habits with future resolutions using voy a + inf. and simple future (comeré menos azúcar, haré más deporte, beberé más agua, dejaré de comer comida rápida).",
      },
    ],
  },
  {
    id: "body-illness-treatment",
    title: "Body Parts, Illness & Treatment (El cuerpo y la salud)",
    strand: "Term 2: Food & Health",
    icon: "🩺",
    curriculum: "Year 9 Term 2 Spanish — Body Parts, Me duele(n), Illness, Injury & Remedies at the Pharmacy/Doctor",
    sections: [
      {
        id: "body-parts-doler",
        heading: "Parts of the Body & Using Me duele / Me duelen",
        covers: "Key body parts with articles (la cabeza, la garganta, el estómago, la espalda, el brazo, la pierna, la mano, el pie, los oídos, los dientes, las rodillas); doler like gustar (me duele + singular vs me duelen + plural; definite article el/la/los/las instead of mi!).",
      },
      {
        id: "illnesses-symptoms-injuries",
        heading: "Illnesses, Symptoms & Injuries (Tener & Estar)",
        covers: "tengo fiebre, tengo tos, tengo catarro/gripe, tengo náuseas, tengo una quemadura; estoy cansado/a, estoy resfriado/a, estoy mareado/a; me he roto la pierna, me he torcido el tobillo, me he cortado el dedo.",
      },
      {
        id: "pharmacy-doctor-remedies",
        heading: "At the Doctor & Pharmacy: Treatments & Desde hace",
        covers: "Duration with present tense + desde hace (Me duele la garganta desde hace tres días); pharmacy remedies (las pastillas, el jarabe, la crema, una tirita, la receta, descansar en cama, beber líquidos).",
      },
      {
        id: "health-dialogues-past",
        heading: "Medical Dialogues & Narrating a Past Injury",
        covers: "Role-play dialogue between patient and doctor/pharmacist; narrating a past accident using preterite (me caí, fui al hospital, el médico me dio pastillas) + future recovery advice (descansaré, tomaré el jarabe).",
      },
    ],
  },

  // ===================== TERM 3: STYLE & CULTURE ==========================
  {
    id: "clothes-uniform-shopping",
    title: "Clothes, School Uniform & Shopping (La ropa)",
    strand: "Term 3: Style & Culture",
    icon: "👕",
    curriculum: "Year 9 Term 3 Spanish — Clothes, Colours & Patterns, School Uniform Debate & Shopping Dialogues",
    sections: [
      {
        id: "clothes-colours-agreement",
        heading: "Clothing, Colours, Patterns & Adjective Agreement",
        covers: "Core garments (la camiseta, los vaqueros, la falda, el vestido, la chaqueta, los zapatos, las zapatillas, la sudadera, la corbata); llevar (to wear); colours & patterns (de rayas, de cuadros, de lunares, de algodón) placed AFTER the noun with exact gender/number agreement.",
      },
      {
        id: "school-uniform-debate",
        heading: "Describing & Debating School Uniform (El uniforme escolar)",
        covers: "Describing Tanglin/school uniform (tengo que llevar una camisa..., pantalones grises, zapatos negros); balanced pros (iguala a los alumnos, ahorra tiempo, da buena imagen) vs cons (es incómodo, caro, no permite expresar tu personalidad).",
      },
      {
        id: "shopping-demonstratives",
        heading: "Shopping for Clothes & Demonstratives (Este / Ese)",
        covers: "este/esta/estos/estas (this/these) vs ese/esa/esos/esas (that/those); sizes & fit (¿Qué talla usa?, me queda bien / demasiado grande / estrecho, ¿Puedo probármelo?, ¿Cuánto cuesta?, es una ganga / demasiado caro).",
      },
      {
        id: "outfits-across-tenses",
        heading: "What I Wear, Bought & Will Wear (Multi-Tense Fashion)",
        covers: "Combining present (los fines de semana llevo...), preterite shopping trips (el sábado compré una chaqueta roja y costó treinta euros) and future outfits (para la fiesta llevaré... / voy a ponerme...).",
      },
    ],
  },
  {
    id: "social-plans-films",
    title: "Social Meetings, Films & Reviews (Quedar y el cine)",
    strand: "Term 3: Style & Culture",
    icon: "🎬",
    curriculum: "Year 9 Term 3 Spanish — Arranging a Social Meeting, Making Excuses, Film Genres, Opinions & Film Reviews",
    sections: [
      {
        id: "arranging-a-meeting",
        heading: "Arranging a Social Meeting (¿Quedamos…?)",
        covers: "Inviting & proposing time/place: ¿Quieres ir al cine?, ¿Te gustaría quedar el sábado?, ¿A qué hora quedamos?, ¿Dónde quedamos? (delante de la estación, en el centro comercial, a las seis y media).",
      },
      {
        id: "accepting-making-excuses",
        heading: "Accepting Invitations & Making Polite Excuses",
        covers: "Accepting enthusiastically (¡Sí, me encantaría!, ¡Vale, qué buena idea!, ¡De acuerdo!) vs declining politely with modal excuses (Lo siento, no puedo porque tengo que hacer mis deberes / cuidar a mi hermano / ordenar mi dormitorio; quizá otro día).",
      },
      {
        id: "film-genres-opinions",
        heading: "Film Genres, Actors & Cinema Opinions",
        covers: "las películas de acción, de terror, de ciencia ficción, de comedia, de animación, románticas, los documentales; describing plot, actors & effects (los efectos especiales, la banda sonora, el argumento, el protagonista, emocionante, entretenida, predecible, aburrida).",
      },
      {
        id: "writing-film-reviews",
        heading: "Writing a Top-Band Film Review (La crítica de cine)",
        covers: "Structuring a Spanish film review: title/genre, brief plot summary (trata de...), past viewing (la vi el fin de semana pasado con...), strengths & weaknesses, recommendation (la recomiendo a todos los aficionados a...) and future plans (veré la segunda parte).",
      },
    ],
  },

  // ========================== GRAMMAR MASTERY =============================
  {
    id: "four-tenses-grammar",
    title: "Four-Tense Grammar Mastery (Los cuatro tiempos)",
    strand: "Grammar Mastery",
    icon: "⚡",
    curriculum: "Year 9 Terms 1–3 Grammar — Present, Preterite, Immediate Future & Simple Future Tenses",
    sections: [
      {
        id: "present-tense-mastery",
        heading: "Present Tense: Regular, Stem-Changing & Irregular Verbs",
        covers: "Regular -AR/-ER/-IR endings; boot stem-changers (e→ie preferir/querer, o→ue poder/dormir/doler, u→ue jugar, e→i pedir/servir); key irregulars (ser, estar, ir, tener, hacer, salir, poner, ver); time markers (normalmente, todos los días, desde hace).",
      },
      {
        id: "preterite-tense-mastery",
        heading: "Preterite Tense: Regular, Spelling-Change & Key Irregulars",
        covers: "Regular -AR (-é, -aste, -ó, -amos, -asteis, -aron) & -ER/-IR (-í, -iste, -ió, -imos, -isteis, -ieron); yo spelling changes (-car→-qué, -gar→-gué, -zar→-cé); high-frequency irregulars (ir/ser fui, tener tuve, hacer hice/hizo, estar estuve, ver vi, dar di) & past markers (ayer, el año pasado).",
      },
      {
        id: "immediate-vs-simple-future",
        heading: "Immediate Future (Ir a + Inf.) vs Simple Future (-é, -ás, -á)",
        covers: "Immediate future (voy/vas/va/vamos/vais/van + a + infinitive) for definite near plans vs Simple future (full infinitive + -é, -ás, -á, -emos, -éis, -án — note accents on every ending except -emos!) plus key irregular stems (tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, habr-).",
      },
      {
        id: "mixing-four-tenses",
        heading: "Weaving All Four Tenses Together in Year 9 Exams",
        covers: "Spotting tense clues in reading/listening (ayer vs normalmente vs mañana vs el año que viene); combining all four tenses in one fluent paragraph without accent or pronoun slips.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
