import type { Drill, DrillItem, Rng } from "./types.ts";
import { acceptedForms, conjugate, type Person, type Tense } from "../spanish/verbs.ts";

const PERSON_LABEL: Record<Person, string> = {
  yo: "yo (I)",
  tú: "tú (you)",
  él: "él / ella (he / she)",
  nosotros: "nosotros (we)",
  vosotros: "vosotros (you all)",
  ellos: "ellos / ellas (they)",
};

const ATTRACTIONS: ReadonlyArray<{ en: string; aForm: string; deForm: string; noun: string; trapA: string; rule: string }> = [
  { en: "the castle", aForm: "al castillo", deForm: "del castillo", noun: "el castillo", trapA: "a el castillo", rule: "*a + el castillo* contracts to **al castillo**." },
  { en: "the cathedral", aForm: "a la catedral", deForm: "de la catedral", noun: "la catedral", trapA: "al catedral", rule: "*la catedral* is feminine → **a la catedral**." },
  { en: "the museum", aForm: "al museo", deForm: "del museo", noun: "el museo", trapA: "a el museo", rule: "*a + el museo* contracts to **al museo**." },
  { en: "the theme park", aForm: "al parque temático", deForm: "del parque temático", noun: "el parque temático", trapA: "a el parque temático", rule: "*a + el parque* contracts to **al parque temático**." },
  { en: "the market", aForm: "al mercado", deForm: "del mercado", noun: "el mercado", trapA: "a el mercado", rule: "*a + el mercado* contracts to **al mercado**." },
  { en: "the ruins", aForm: "a las ruinas", deForm: "de las ruinas", noun: "las ruinas", trapA: "a los ruinas", rule: "*las ruinas* is feminine plural → **a las ruinas**." },
  { en: "the main square", aForm: "a la plaza mayor", deForm: "de la plaza mayor", noun: "la plaza mayor", trapA: "al plaza mayor", rule: "*la plaza mayor* is feminine → **a la plaza mayor**." },
  { en: "the stadium", aForm: "al estadio", deForm: "del estadio", noun: "el estadio", trapA: "a el estadio", rule: "*a + el estadio* contracts to **al estadio**." },
  { en: "the aquarium", aForm: "al acuario", deForm: "del acuario", noun: "el acuario", trapA: "a el acuario", rule: "*a + el acuario* contracts to **al acuario**." },
  { en: "the art gallery", aForm: "a la galería de arte", deForm: "de la galería de arte", noun: "la galería de arte", trapA: "al galería de arte", rule: "*la galería* is feminine → **a la galería de arte**." },
  { en: "the botanical garden", aForm: "al jardín botánico", deForm: "del jardín botánico", noun: "el jardín botánico", trapA: "a el jardín botánico", rule: "*a + el jardín* contracts to **al jardín botánico**." },
  { en: "the marina", aForm: "al puerto deportivo", deForm: "del puerto deportivo", noun: "el puerto deportivo", trapA: "a el puerto deportivo", rule: "*a + el puerto* contracts to **al puerto deportivo**." },
  { en: "the tower", aForm: "a la torre", deForm: "de la torre", noun: "la torre", trapA: "al torre", rule: "*la torre* is feminine → **a la torre**." },
  { en: "the palace", aForm: "al palacio", deForm: "del palacio", noun: "el palacio", trapA: "a el palacio", rule: "*a + el palacio* contracts to **al palacio**." },
  { en: "the theatre", aForm: "al teatro", deForm: "del teatro", noun: "el teatro", trapA: "a el teatro", rule: "*a + el teatro* contracts to **al teatro**." },
  { en: "the old town", aForm: "al casco antiguo", deForm: "del casco antiguo", noun: "el casco antiguo", trapA: "a el casco antiguo", rule: "*a + el casco antiguo* contracts to **al casco antiguo**." },
];

const SE_PUEDE_TASKS: ReadonlyArray<{ en: string; es: string; trap: string; tip: string }> = [
  { en: "you can visit the castle", es: "se puede visitar el castillo", trap: "se puede visitas el castillo", tip: "Always follow *se puede* with the infinitive (**visitar**)." },
  { en: "you can climb the tower", es: "se puede subir a la torre", trap: "se puede subes a la torre", tip: "Infinitive **subir** follows *se puede*." },
  { en: "you can take photos", es: "se puede sacar fotos", trap: "se puede sacas fotos", tip: "Infinitive **sacar** follows *se puede*." },
  { en: "you can stroll through the square", es: "se puede pasear por la plaza", trap: "se puede paseas por la plaza", tip: "Infinitive **pasear** follows *se puede*." },
  { en: "you can buy souvenirs", es: "se puede comprar recuerdos", trap: "se puede compras recuerdos", tip: "Infinitive **comprar** follows *se puede*." },
  { en: "you can see the ruins", es: "se puede ver las ruinas", trap: "se puede ves las ruinas", tip: "Infinitive **ver** follows *se puede*." },
  { en: "you can visit the cathedral", es: "se puede visitar la catedral", trap: "se puede visito la catedral", tip: "Infinitive **visitar** follows *se puede*." },
  { en: "you can explore the museum", es: "se puede explorar el museo", trap: "se puede exploras el museo", tip: "Infinitive **explorar** follows *se puede*." },
  { en: "there was a castle", es: "había un castillo", trap: "hay un castillo", tip: "Past existence = **había**." },
  { en: "there were many ruins", es: "había muchas ruinas", trap: "habían muchas ruinas", tip: "*Había* NEVER adds *-n* for plural nouns!" },
  { en: "there were two museums", es: "había dos museos", trap: "habían dos museos", tip: "*Había* stays invariable for singular and plural!" },
  { en: "there was a lively market", es: "había un mercado animado", trap: "hay un mercado animado", tip: "Past description uses **había**." },
  { en: "there is a theme park", es: "hay un parque temático", trap: "había un parque temático", tip: "Present existence = **hay**." },
  { en: "there are panoramic views", es: "hay vistas panorámicas", trap: "están vistas panorámicas", tip: "*There are* = **hay**." },
  { en: "there is going to be a guided tour", es: "va a haber una visita guiada", trap: "va haber una visita guiada", tip: "Keep **a** in *va a haber*." },
  { en: "you cannot take photos", es: "no se puede sacar fotos", trap: "no se puede sacas fotos", tip: "Negative impersonal: **no se puede + infinitive**." },
];

const ACCOM_VOCAB: ReadonlyArray<{ en: string; es: string; trap?: string; tip: string }> = [
  { en: "a five-star hotel", es: "un hotel de cinco estrellas", trap: "un hotel cinco estrellas", tip: "Include **de**: *un hotel de cinco estrellas*." },
  { en: "a youth hostel", es: "un albergue juvenil", trap: "una albergue juvenil", tip: "*Albergue* is masculine (**un albergue juvenil**)." },
  { en: "a campsite", es: "un camping", trap: "una camping", tip: "*Camping* is masculine (**un camping**)." },
  { en: "a rural cottage", es: "una casa rural", trap: "un casa rural", tip: "*Casa rural* is feminine (**una casa rural**)." },
  { en: "a holiday apartment", es: "un apartamento turístico", trap: "una apartamento turístico", tip: "*Apartamento* is masculine." },
  { en: "a single room", es: "una habitación individual", trap: "un habitación individual", tip: "*Habitación* is feminine with accent on *-ón*." },
  { en: "a double room", es: "una habitación doble", trap: "un habitación doble", tip: "*Habitación* is feminine (**una habitación doble**)." },
  { en: "a family room", es: "una habitación familiar", trap: "un habitación familiar", tip: "*Habitación* is feminine." },
  { en: "with sea views", es: "con vistas al mar", trap: "con vistas a el mar", tip: "Contract *a + el* into **al mar**." },
  { en: "with mountain views", es: "con vistas a la montaña", trap: "con vistas al montaña", tip: "*La montaña* is feminine → **a la montaña**." },
  { en: "with a balcony", es: "con balcón", trap: "con balcona", tip: "*El balcón* carries an accent on *-ón*." },
  { en: "with an en-suite bathroom", es: "con baño propio", trap: "con bano propio", tip: "Include the tilde on *ñ*: **baño propio**." },
  { en: "half board", es: "media pensión", trap: "pensión completa", tip: "*Media pensión* = half board (breakfast + one meal)." },
  { en: "full board", es: "pensión completa", trap: "media pensión", tip: "*Pensión completa* = full board (all three meals)." },
  { en: "bed and breakfast", es: "alojamiento y desayuno", trap: "media pensión", tip: "B&B in Spanish = **alojamiento y desayuno**." },
  { en: "the heated swimming pool", es: "la piscina climatizada", trap: "la piscina climatizado", tip: "Feminine agreement: **climatizada**." },
  { en: "free Wi-Fi", es: "wifi gratis", trap: "wifi gratuito", tip: "Standard hotel phrase: **wifi gratis** (or *el wifi gratis*)." },
  { en: "air conditioning", es: "el aire acondicionado", trap: "la aire acondicionado", tip: "*El aire acondicionado* is masculine." },
];

const HOTEL_VERBS: ReadonlyArray<{ inf: string; en: string }> = [
  { inf: "alojarse", en: "to stay (in a hotel)" },
  { inf: "quedarse", en: "to stay" },
  { inf: "reservar", en: "to book / reserve" },
  { inf: "quejarse", en: "to complain" },
  { inf: "volver", en: "to return" },
  { inf: "recomendar", en: "to recommend" },
];

const SER_ESTAR_ITEMS: ReadonlyArray<{
  sentence: string;
  ans: "es" | "son" | "está" | "están";
  wrong: "es" | "son" | "está" | "están";
  reason: string;
}> = [
  { sentence: "El hotel ___ muy moderno y lujoso.", ans: "es", wrong: "está", reason: "Permanent characteristic (modern/luxurious) → **ser** (**es**)." },
  { sentence: "El hotel ___ cerca de la playa.", ans: "está", wrong: "es", reason: "Physical location (*near the beach*) ALWAYS uses **estar** (**está**)." },
  { sentence: "Perdone, mi habitación ___ muy sucia.", ans: "está", wrong: "es", reason: "Temporary condition (*dirty*) uses **estar** (**está**)." },
  { sentence: "El aire acondicionado ___ roto.", ans: "está", wrong: "es", reason: "Broken state (*roto*) uses **estar** (**está**)." },
  { sentence: "Las sábanas de la cama ___ sucias.", ans: "están", wrong: "son", reason: "Plural temporary condition (*sucias*) uses **estar** (**están**)." },
  { sentence: "El albergue juvenil ___ al lado de la estación.", ans: "está", wrong: "es", reason: "Location (*next to the station*) takes **estar** (**está**)." },
  { sentence: "El personal del hotel ___ muy amable.", ans: "es", wrong: "está", reason: "Character trait (*kind*) + singular *el personal* → **es**." },
  { sentence: "La casa rural ___ antigua pero acogedora.", ans: "es", wrong: "está", reason: "Inherent style (*old/cosy*) takes **ser** (**es**)." },
  { sentence: "Hoy las habitaciones ___ muy limpias.", ans: "están", wrong: "son", reason: "Condition today (*clean*) + plural *habitaciones* → **están**." },
  { sentence: "El desayuno bufé ___ frío esta mañana.", ans: "está", wrong: "es", reason: "Temporary temperature state (*cold this morning*) → **está**." },
  { sentence: "Los precios de este parador ___ demasiado caros.", ans: "son", wrong: "están", reason: "Price level (*expensive*) + plural *precios* → **son**." },
  { sentence: "El camping ___ lejos del centro histórico.", ans: "está", wrong: "es", reason: "Location (*far from the historic centre*) → **está**." },
  { sentence: "La piscina climatizada ___ enorme y profunda.", ans: "es", wrong: "está", reason: "Permanent physical size (*huge/deep*) → **es**." },
  { sentence: "La ventana del balcón ___ rota.", ans: "está", wrong: "es", reason: "Broken state (*rota*) uses **estar** (**está**)." },
  { sentence: "El desayuno ___ incluido en el precio.", ans: "está", wrong: "es", reason: "Set hotel phrase: **está incluido** (*estar*)." },
  { sentence: "Las vistas desde la terraza ___ impresionantes.", ans: "son", wrong: "están", reason: "Defining quality (*impressive*) + plural *vistas* → **son**." },
  { sentence: "La recepción ___ en la planta baja.", ans: "está", wrong: "es", reason: "Location (*on the ground floor*) → **está**." },
  { sentence: "El recepcionista ___ muy maleducado.", ans: "es", wrong: "está", reason: "Personal trait (*rude*) → **es**." },
];

const COMPLAINT_ITEMS: ReadonlyArray<{
  prompt: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  tip: string;
}> = [
  { prompt: "Complete (*does not work*): *El ascensor ___.*", accept: ["no funciona"], trap: "no funcionan", trapMsg: "*El ascensor* is singular → **no funciona**.", tip: "Singular subject → *no funciona*." },
  { prompt: "Complete (*do not work*): *Las luces del baño ___.*", accept: ["no funcionan"], trap: "no funciona", trapMsg: "*Las luces* is plural → **no funcionan**.", tip: "Plural subject → *no funcionan*." },
  { prompt: "Complete (*is missing*): *En mi baño ___ una toalla.*", accept: ["falta"], trap: "faltan", trapMsg: "*Una toalla* is singular → **falta**.", tip: "*Faltar* agrees with singular *una toalla* → **falta**." },
  { prompt: "Complete (*are missing*): *En la cama ___ dos almohadas.*", accept: ["faltan"], trap: "falta", trapMsg: "*Dos almohadas* is plural → **faltan**.", tip: "*Faltar* agrees with plural *dos almohadas* → **faltan**." },
  { prompt: "Complete (*there is no hot water*): *En la ducha ___.*", accept: ["no hay agua caliente"], trap: "no está agua caliente", trapMsg: "Use **no hay** (*there is no*), not *no está*.", tip: "**no hay agua caliente** = there is no hot water." },
  { prompt: "Complete (*there is no soap*): *En el baño ___.*", accept: ["no hay jabón"], trap: "no está jabón", trapMsg: "Use **no hay jabón** (*there is no soap*).", tip: "**no hay jabón**." },
  { prompt: "Complete (*for three nights*): *Quisiera reservar una habitación doble ___.*", accept: ["para tres noches"], trap: "por tres noches", trapMsg: "Booking duration takes **para**: *para tres noches*!", tip: "PARA nights, POR price → **para tres noches**." },
  { prompt: "Complete (*per night*): *¿Cuánto cuesta ___?*", accept: ["por noche"], trap: "para noche", trapMsg: "Nightly price takes **por**: *por noche*!", tip: "PARA nights, POR price → **por noche**." },
  { prompt: "Complete (*is broken*, masc.): *El aire acondicionado ___.*", accept: ["está roto"], trap: "es roto", trapMsg: "Broken state uses *estar*: **está roto**.", tip: "*Estar* + masc. *roto* → **está roto**." },
  { prompt: "Complete (*is broken*, fem.): *La ducha ___.*", accept: ["está rota"], trap: "está roto", trapMsg: "*La ducha* is feminine → **está rota**.", tip: "Feminine agreement: **está rota**." },
  { prompt: "Complete (*is dirty*, fem.): *La habitación ___.*", accept: ["está sucia"], trap: "es sucia", trapMsg: "Temporary dirtiness uses *estar*: **está sucia**.", tip: "*Estar* + fem. *sucia* → **está sucia**." },
  { prompt: "Complete (*are dirty*, fem. pl.): *Las sábanas ___.*", accept: ["están sucias"], trap: "son sucias", trapMsg: "Plural temporary dirtiness uses *estar*: **están sucias**.", tip: "**están sucias**." },
  { prompt: "Complete (*too much noise*): *Por la noche hace ___.*", accept: ["demasiado ruido"], trap: "muy ruido", trapMsg: "*Ruido* is a noun → **demasiado ruido**.", tip: "**demasiado ruido** = too much noise." },
  { prompt: "Complete (*to change rooms*): *Quiero ___, por favor.*", accept: ["cambiar de habitación"], trap: "cambiar habitación", trapMsg: "Include **de**: **cambiar de habitación**.", tip: "Set phrase: **cambiar de habitación**." },
  { prompt: "Complete (*to speak with the manager*): *Quiero ___.*", accept: ["hablar con el director", "hablar con la directora"], trap: "hablar a el director", trapMsg: "Use *con*: **hablar con el director**.", tip: "**hablar con el director**." },
  { prompt: "Complete (*is breakfast included?*): *¿___ el desayuno?*", accept: ["Está incluido"], trap: "Es incluido", trapMsg: "Use *estar*: **¿Está incluido el desayuno?**", tip: "**Está incluido**." },
];

const BOOKING_TRANSLATIONS: ReadonlyArray<{ en: string; accept: string[]; trap?: string; trapMsg?: string; tip: string }> = [
  { en: "I would like to book a double room for two nights.", accept: ["Quisiera reservar una habitación doble para dos noches", "Quisiera reservar una habitación doble para dos noches.", "Me gustaría reservar una habitación doble para dos noches", "Me gustaría reservar una habitación doble para dos noches."], trap: "Quisiera reservar una habitación doble por dos noches", trapMsg: "Use **para** for booking length (*para dos noches*)!", tip: "Polite *Quisiera reservar* + *una habitación doble* + *para dos noches*." },
  { en: "How much does it cost per night?", accept: ["¿Cuánto cuesta por noche?", "Cuánto cuesta por noche"], trap: "¿Cuánto cuesta para noche?", trapMsg: "Use **por noche** for price per night!", tip: "**¿Cuánto cuesta por noche?**" },
  { en: "Is breakfast included?", accept: ["¿Está incluido el desayuno?", "Está incluido el desayuno"], trap: "¿Es incluido el desayuno?", trapMsg: "Use *estar*: **¿Está incluido el desayuno?**", tip: "**¿Está incluido el desayuno?**" },
  { en: "Does it have sea views?", accept: ["¿Tiene vistas al mar?", "Tiene vistas al mar"], trap: "¿Tiene vistas a el mar?", trapMsg: "Contract *a + el* to **al mar**.", tip: "**¿Tiene vistas al mar?**" },
  { en: "Is there free Wi-Fi?", accept: ["¿Hay wifi gratis?", "Hay wifi gratis"], trap: "¿Está wifi gratis?", trapMsg: "*Is there…?* uses **¿Hay…?**", tip: "**¿Hay wifi gratis?**" },
  { en: "What time is breakfast served?", accept: ["¿A qué hora se sirve el desayuno?", "A qué hora se sirve el desayuno"], trap: "¿Qué hora se sirve el desayuno?", trapMsg: "*At what time?* requires **¿A qué hora…?**", tip: "**¿A qué hora se sirve el desayuno?**" },
  { en: "Excuse me, I have a problem.", accept: ["Perdone, tengo un problema", "Perdone, tengo un problema.", "Disculpe, tengo un problema", "Disculpe, tengo un problema."], trap: "Perdone, tengo una problema", trapMsg: "*Problema* is masculine (**un problema**).", tip: "**Perdone, tengo un problema.**" },
  { en: "The lift does not work.", accept: ["El ascensor no funciona", "El ascensor no funciona."], trap: "El ascensor no funcionan", trapMsg: "Singular *el ascensor* takes **no funciona**.", tip: "**El ascensor no funciona.**" },
  { en: "There is no hot water.", accept: ["No hay agua caliente", "No hay agua caliente."], trap: "No está agua caliente", trapMsg: "Use **No hay** (*there is no*).", tip: "**No hay agua caliente.**" },
  { en: "My room is dirty.", accept: ["Mi habitación está sucia", "Mi habitación está sucia."], trap: "Mi habitación es sucia", trapMsg: "Temporary dirtiness uses *estar*: **está sucia**.", tip: "**Mi habitación está sucia.**" },
  { en: "The air conditioning is broken.", accept: ["El aire acondicionado está roto", "El aire acondicionado está roto."], trap: "El aire acondicionado es roto", trapMsg: "Broken condition uses *estar*: **está roto**.", tip: "**El aire acondicionado está roto.**" },
  { en: "A towel is missing.", accept: ["Falta una toalla", "Falta una toalla."], trap: "Faltan una toalla", trapMsg: "Singular *una toalla* takes **falta**.", tip: "**Falta una toalla.**" },
  { en: "Two towels are missing.", accept: ["Faltan dos toallas", "Faltan dos toallas."], trap: "Falta dos toallas", trapMsg: "Plural *dos toallas* takes **faltan**.", tip: "**Faltan dos toallas.**" },
  { en: "I want to change rooms, please.", accept: ["Quiero cambiar de habitación, por favor", "Quiero cambiar de habitación, por favor.", "Quiero cambiar de habitación por favor"], trap: "Quiero cambiar habitación, por favor", trapMsg: "Include **de**: *cambiar **de** habitación*.", tip: "**Quiero cambiar de habitación, por favor.**" },
  { en: "Can you clean the room, please?", accept: ["¿Puede limpiar la habitación, por favor?", "Puede limpiar la habitación por favor", "¿Puede limpiar la habitación por favor?"], trap: "¿Puedo limpiar la habitación, por favor?", trapMsg: "*Puedo* = *Can I?*; use formal *usted* **¿Puede limpiar…?**", tip: "**¿Puede limpiar la habitación, por favor?**" },
  { en: "I want to speak with the manager.", accept: ["Quiero hablar con el director", "Quiero hablar con el director.", "Quiero hablar con la directora", "Quiero hablar con la directora."], trap: "Quiero hablar a el director", trapMsg: "Use *con*: **hablar con el director**.", tip: "**Quiero hablar con el director.**" },
];

const OPINION_VERBS: ReadonlyArray<{ inf: string; en: string; sg: string; pl: string }> = [
  { inf: "encantar", en: "to love / delight", sg: "encantó", pl: "encantaron" },
  { inf: "gustar", en: "to like / please", sg: "gustó", pl: "gustaron" },
  { inf: "decepcionar", en: "to disappoint", sg: "decepcionó", pl: "decepcionaron" },
  { inf: "parecer", en: "to seem", sg: "pareció", pl: "parecieron" },
];

const OPINION_NOUNS: ReadonlyArray<{ es: string; plural: boolean }> = [
  { es: "la piscina climatizada", plural: false },
  { es: "las vistas al mar", plural: true },
  { es: "el desayuno bufé", plural: false },
  { es: "las habitaciones luminosas", plural: true },
  { es: "el castillo medieval", plural: false },
  { es: "las ruinas antiguas", plural: true },
  { es: "el wifi lento", plural: false },
  { es: "los precios caros", plural: true },
  { es: "la ubicación céntrica", plural: false },
  { es: "las instalaciones modernas", plural: true },
  { es: "el servicio de habitaciones", plural: false },
  { es: "los mercados animados", plural: true },
];

const REVIEW_NOUNS: ReadonlyArray<{ noun: string; gen: "ms" | "fs" | "mp" | "fp"; pron: "lo" | "la" | "los" | "las"; verb: "fue" | "fueron" }> = [
  { noun: "El hotel", gen: "ms", pron: "lo", verb: "fue" },
  { noun: "La casa rural", gen: "fs", pron: "la", verb: "fue" },
  { noun: "La habitación", gen: "fs", pron: "la", verb: "fue" },
  { noun: "Las habitaciones", gen: "fp", pron: "las", verb: "fueron" },
  { noun: "El personal", gen: "ms", pron: "lo", verb: "fue" },
  { noun: "El albergue juvenil", gen: "ms", pron: "lo", verb: "fue" },
  { noun: "Las vistas", gen: "fp", pron: "las", verb: "fueron" },
  { noun: "El camping", gen: "ms", pron: "lo", verb: "fue" },
  { noun: "Los precios", gen: "mp", pron: "los", verb: "fueron" },
  { noun: "La piscina", gen: "fs", pron: "la", verb: "fue" },
];

const REVIEW_ADJS: ReadonlyArray<{ base: string; en: string; ms: string; fs: string; mp: string; fp: string }> = [
  { base: "limpio", en: "clean", ms: "limpio", fs: "limpia", mp: "limpios", fp: "limpias" },
  { base: "sucio", en: "dirty", ms: "sucio", fs: "sucia", mp: "sucios", fp: "sucias" },
  { base: "cómodo", en: "comfortable", ms: "cómodo", fs: "cómoda", mp: "cómodos", fp: "cómodas" },
  { base: "espacioso", en: "spacious", ms: "espacioso", fs: "espaciosa", mp: "espaciosos", fp: "espaciosas" },
  { base: "luminoso", en: "bright", ms: "luminoso", fs: "luminosa", mp: "luminosos", fp: "luminosas" },
  { base: "acogedor", en: "cosy", ms: "acogedor", fs: "acogedora", mp: "acogedores", fp: "acogedoras" },
  { base: "ruidoso", en: "noisy", ms: "ruidoso", fs: "ruidosa", mp: "ruidosos", fp: "ruidosas" },
  { base: "lujoso", en: "luxurious", ms: "lujoso", fs: "lujosa", mp: "lujosos", fp: "lujosas" },
  { base: "caro", en: "expensive", ms: "caro", fs: "cara", mp: "caros", fp: "caras" },
  { base: "maleducado", en: "rude", ms: "maleducado", fs: "maleducada", mp: "maleducados", fp: "maleducadas" },
];

const REVIEW_CLOZE: ReadonlyArray<{
  prompt: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  hint: string;
  sol: string;
}> = [
  { prompt: "Complete (*On the one hand*): *___, la piscina era excelente.*", accept: ["Por un lado"], trap: "En un lado", trapMsg: "Spanish uses **Por un lado** (not *en*).", hint: "Three words starting with *Por…*", sol: "**Por un lado** = on the one hand." },
  { prompt: "Complete (*On the other hand*): *___, el wifi era muy lento.*", accept: ["Por otro lado"], trap: "Por el otro lado", trapMsg: "Drop *el*: standard phrase is **Por otro lado**.", hint: "Three words starting with *Por…*", sol: "**Por otro lado** = on the other hand." },
  { prompt: "Complete (*I recommend it*, referring to **el hotel**): *En resumen, ___ a las familias.*", accept: ["lo recomiendo"], trap: "la recomiendo", trapMsg: "*El hotel* is masculine → **lo recomiendo**.", hint: "Masculine pronoun + *recomendar* (*e→ie*).", sol: "**lo recomiendo** (*el hotel* = masculine)." },
  { prompt: "Complete (*I recommend it*, referring to **la casa rural**): *Me encantó esta casa rural y ___ sin duda.*", accept: ["la recomiendo"], trap: "lo recomiendo", trapMsg: "*La casa rural* is feminine → **la recomiendo**.", hint: "Feminine pronoun + *recomendar* (*e→ie*).", sol: "**la recomiendo** (*la casa rural* = feminine)." },
  { prompt: "Complete (*I will definitely return*, simple future): *El año que viene ___.*", accept: ["volveré sin duda"], trap: "volví sin duda", trapMsg: "*Volví* is preterite; simple future is **volveré sin duda**.", hint: "Simple future *yo* of *volver* + *sin duda*.", sol: "**volveré sin duda**." },
  { prompt: "Complete (*I will never return*, simple future): *Fue un desastre y ___.*", accept: ["no volveré nunca", "nunca volveré"], trap: "no volví nunca", trapMsg: "Use simple future **no volveré nunca**!", hint: "*no* + simple future of *volver* + *nunca*.", sol: "**no volveré nunca**." },
  { prompt: "Complete (*I give it four stars*): *___ al Hotel Sol.*", accept: ["Le doy cuatro estrellas"], trap: "Lo doy cuatro estrellas", trapMsg: "Indirect object (*to it*) uses **Le doy**!", hint: "*Le doy* + *cuatro estrellas*.", sol: "**Le doy cuatro estrellas**." },
  { prompt: "Complete (*The staff was very friendly*): *El personal ___ muy amable.*", accept: ["fue", "era", "es"], trap: "fueron", trapMsg: "*El personal* is singular (**fue / era / es**), never plural!", hint: "Singular form of *ser*.", sol: "**El personal fue / era / es** muy amable." },
  { prompt: "Complete (*I stayed*, preterite of *alojarse*): *El verano pasado ___ en un parador.*", accept: ["me alojé"], trap: "alojé", trapMsg: "Keep reflexive pronoun **me**: **me alojé**!", hint: "Reflexive *yo* preterite of *alojarse*.", sol: "**me alojé**." },
  { prompt: "Complete (*we will stay*, simple future of *alojarse*): *El próximo año ___ en un apartamento.*", accept: ["nos alojaremos"], trap: "alojaremos", trapMsg: "Keep reflexive pronoun **nos**: **nos alojaremos**!", hint: "*nos* + simple future *nosotros* (no accent on *-emos*).", sol: "**nos alojaremos**." },
  { prompt: "Complete (*I complained*, preterite of *quejarse*): *Ayer ___ en recepción.*", accept: ["me quejé"], trap: "quejé", trapMsg: "Keep reflexive pronoun **me**: **me quejé**!", hint: "Reflexive *yo* preterite of *quejarse*.", sol: "**me quejé**." },
  { prompt: "Complete (*I loved the views*, preterite): *___ al mar desde el balcón.*", accept: ["Me encantaron las vistas"], trap: "Me encantó las vistas", trapMsg: "*Las vistas* is plural → **Me encantaron las vistas**!", hint: "Plural past opinion verb + *las vistas*.", sol: "**Me encantaron las vistas**." },
  { prompt: "Complete (*the noise disappointed me*, preterite): *Por la noche ___.*", accept: ["me decepcionó el ruido"], trap: "me decepcionaron el ruido", trapMsg: "*El ruido* is singular → **me decepcionó el ruido**!", hint: "Singular past opinion verb + *el ruido*.", sol: "**me decepcionó el ruido**." },
  { prompt: "Complete (*In summary*): *___, recomiendo este albergue juvenil.*", accept: ["En resumen"], trap: "En suma", trapMsg: "Standard Spanish review sign-off: **En resumen**.", hint: "Two words meaning *in summary*.", sol: "**En resumen** = in summary / overall." },
  { prompt: "Complete (*there were many tourists*, past): *En la plaza mayor ___ muchos turistas.*", accept: ["había"], trap: "habían", trapMsg: "*Había* NEVER adds *-n* for plural nouns!", hint: "Invariable past form of *hay*.", sol: "**había** (never *habían*)." },
  { prompt: "Complete (*although*): *___ el hotel era antiguo, estaba muy limpio.*", accept: ["Aunque"], trap: "Porque", trapMsg: "Use concession connective **Aunque** (*although*).", hint: "One word meaning *although*.", sol: "**Aunque** = although." },
];

export const drills: Drill[] = [
  // 1. Places of Interest, Contractions, Hay/Había & Se Puede (Level 1)
  {
    id: "hotels-places-reviews.sightseeing-structures",
    topicId: "hotels-places-reviews",
    title: "Places of Interest, Contractions (al/del), Había & Se Puede",
    level: 1,
    guideRef: "places-of-interest",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const attr = rng.pick(ATTRACTIONS);
        const verb = rng.pick([
          { es: "Fui", en: "I went" },
          { es: "Fuimos", en: "We went" },
          { es: "Voy", en: "I go" },
          { es: "Vamos", en: "We go" },
        ]);
        const ans = `${verb.es} ${attr.aForm}`;
        return {
          prompt: `Translate into Spanish using *a / al / a la / a las*: **${verb.en} to ${attr.en}.**`,
          answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
          hint: "Check the noun's gender and number; contract *a + el* into **al**.",
          traps: [{ spec: { type: "text" as const, accept: [`${verb.es} ${attr.trapA}`] }, feedback: attr.rule }],
          solution: [attr.rule, `Answer: **${ans}.**`],
        };
      }

      if (tier === 2) {
        const task = rng.pick(SE_PUEDE_TASKS);
        return {
          prompt: `Translate this sightseeing phrase into Spanish: **${task.en}**`,
          answer: { type: "text", accept: [task.es, `${task.es}.`], display: task.es },
          hint: "Remember: *se puede* + infinitive, and *había* NEVER adds *-n* for plural!",
          traps: [{ spec: { type: "text" as const, accept: [task.trap] }, feedback: task.tip }],
          solution: [task.tip, `Answer: **${task.es}**`],
        };
      }

      // Tier 3: Contraction del + location OR preterite sightseeing visit
      const attr = rng.pick(ATTRACTIONS);
      const city = rng.pick(["Granada", "Sevilla", "Toledo", "Madrid", "Valencia", "Salamanca", "Córdoba"]);
      if (rng.bool(0.5)) {
        const ans = `cerca ${attr.deForm}`;
        const wrong = attr.deForm.startsWith("del ") ? `cerca de el ${attr.deForm.slice(4)}` : `cerca al ${attr.noun.split(" ").slice(1).join(" ")}`;
        return {
          prompt: `Complete (*near ${attr.en}*) using *cerca + de/del/de la/de las*:\n*En ${city}, el hotel está ___.*`,
          answer: { type: "text", accept: [ans], display: ans },
          hint: "*Near* is *cerca de*; remember **de + el** contracts to **del**!",
          traps: [{ spec: { type: "text" as const, accept: [wrong] }, feedback: `Watch the contraction with *de*: **${ans}**.` }],
          solution: [`*cerca de* + *${attr.noun}* → **${ans}**.`],
        };
      }
      const action = rng.pick([
        { inf: "visitar", en: "I visited", p: "yo" as Person },
        { inf: "ver", en: "I saw", p: "yo" as Person },
        { inf: "visitar", en: "we visited", p: "nosotros" as Person },
        { inf: "ver", en: "we saw", p: "nosotros" as Person },
      ]);
      const conj = conjugate(action.inf, "preterite", action.p);
      const ans = `${conj} ${attr.noun}`;
      const pres = conjugate(action.inf, "present", action.p);
      const traps = pres !== conj ? [{ spec: { type: "text" as const, accept: [`${pres} ${attr.noun}`] }, feedback: `Use the **preterite** (**${conj}**), not present *${pres}*!` }] : undefined;
      return {
        prompt: `Complete in the **preterite** (*${action.en} ${attr.en}*):\n*El año pasado en ${city} ___.*`,
        answer: { type: "text", accept: [ans, `${ans}.`], display: ans },
        hint: `Conjugate *${action.inf}* in the preterite for *${action.p}* and include the article on *${attr.en}*.`,
        traps,
        solution: [`*${action.inf}* (${action.p}, preterite) = **${conj}**.`, `Full phrase: **${ans}**.`],
      };
    },
  },

  // 2. Accommodation, Rooms, Board & Alojarse Across Tenses (Level 2)
  {
    id: "hotels-places-reviews.accommodation-alojarse",
    topicId: "hotels-places-reviews",
    title: "Accommodation, Board Options & Alojarse Across 4 Tenses",
    level: 2,
    guideRef: "hotel-types-facilities",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const item = rng.pick(ACCOM_VOCAB);
        return {
          prompt: `Translate this accommodation / room phrase into Spanish: **${item.en}**`,
          answer: { type: "text", accept: [item.es], display: item.es },
          hint: "Check gender (*un / una / el / la*), accents (*habitación, balcón, pensión*), and contractions (*al mar*).",
          traps: item.trap ? [{ spec: { type: "text" as const, accept: [item.trap] }, feedback: item.tip }] : undefined,
          solution: [item.tip, `Answer: **${item.es}**`],
        };
      }

      if (tier === 2) {
        const v = rng.pick(HOTEL_VERBS);
        const tense = rng.pick<Tense>(["present", "preterite", "near-future", "future"]);
        const persons: Person[] = tense === "preterite" ? ["yo", "tú", "él", "ellos"] : ["yo", "tú", "él", "nosotros", "ellos"];
        const p = rng.pick<Person>(persons);
        const ans = conjugate(v.inf, tense, p);
        const acc = acceptedForms(v.inf, tense, p);
        const tLabel =
          tense === "present"
            ? "present"
            : tense === "preterite"
              ? "preterite"
              : tense === "near-future"
                ? "immediate future (ir a + inf.)"
                : "simple future (will…)";
        const noRefl = ans.replace(/^(?:me|te|se|nos|os)\s+/, "");
        const traps =
          v.inf.endsWith("se") && noRefl !== ans
            ? [{ spec: { type: "text" as const, accept: [noRefl] }, feedback: `*${v.inf}* is reflexive — don't drop the reflexive pronoun (**${ans}**)!` }]
            : undefined;
        return {
          prompt: `Conjugate **${v.inf}** (${v.en}) in the **${tLabel}** for **${PERSON_LABEL[p]}**.`,
          answer: { type: "text", accept: acc, display: ans },
          hint: "If the verb ends in *-se*, include the matching reflexive pronoun (*me, te, se, nos, se*).",
          traps,
          solution: [`*${v.inf}* (${p}, ${tLabel}) = **${ans}**.`],
        };
      }

      // Tier 3: Contextual alojarse across 4 tenses + accommodation types
      const place = rng.pick([
        "en un hotel de cinco estrellas",
        "en una casa rural",
        "en un albergue juvenil",
        "en un camping",
        "en un apartamento turístico",
        "en un parador histórico",
      ]);
      const p = rng.pick<Person>(["yo", "nosotros", "ellos"]);
      const tense = rng.pick<Tense>(["present", "preterite", "near-future", "future"]);
      const marker =
        tense === "present"
          ? "Normalmente"
          : tense === "preterite"
            ? "El verano pasado"
            : tense === "near-future"
              ? "El próximo verano"
              : "En el futuro";
      const tLabel =
        tense === "present"
          ? "present"
          : tense === "preterite"
            ? "preterite"
            : tense === "near-future"
              ? "immediate future"
              : "simple future";
      const ans = conjugate("alojarse", tense, p);
      const acc = acceptedForms("alojarse", tense, p);
      const noRefl = ans.replace(/^(?:me|te|se|nos|os)\s+/, "");
      const traps = noRefl !== ans ? [{ spec: { type: "text" as const, accept: [noRefl] }, feedback: `Keep the reflexive pronoun with *alojarse*: **${ans}**!` }] : undefined;
      return {
        prompt: `Complete with **alojarse** in the **${tLabel}** for **${PERSON_LABEL[p]}**:\n*${marker} ___ ${place}.*`,
        answer: { type: "text", accept: acc, display: ans },
        hint: "Match the reflexive pronoun (*me / nos / se*) and tense ending to the time marker.",
        traps,
        solution: [`Time marker *${marker}* + *${p}* → **${ans}** ${place}.`],
      };
    },
  },

  // 3. Ser vs Estar, Complaints & Polite Booking (Level 2)
  {
    id: "hotels-places-reviews.booking-ser-estar",
    topicId: "hotels-places-reviews",
    title: "Hotel Ser vs Estar, Polite Booking & Complaints",
    level: 2,
    guideRef: "booking-and-problems",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const it = rng.pick(SER_ESTAR_ITEMS);
        return {
          prompt: `Choose **es**, **son**, **está** or **están** to complete:\n*${it.sentence}*`,
          answer: { type: "text", accept: [it.ans], display: it.ans },
          hint: "SER = defining traits/style/price; ESTAR = location & temporary state (dirty, broken, cold, included).",
          traps: [{ spec: { type: "text" as const, accept: [it.wrong] }, feedback: it.reason }],
          solution: [it.reason],
        };
      }

      if (tier === 2) {
        const c = rng.pick(COMPLAINT_ITEMS);
        return {
          prompt: c.prompt,
          answer: { type: "text", accept: c.accept, display: c.accept[0] },
          hint: "Check singular vs plural (*falta/faltan*, *funciona/funcionan*), *ser/estar*, and *para* vs *por*.",
          traps: [{ spec: { type: "text" as const, accept: [c.trap] }, feedback: c.trapMsg }],
          solution: [c.tip, `Answer: **${c.accept[0]}**`],
        };
      }

      // Tier 3: Full reception translations
      const b = rng.pick(BOOKING_TRANSLATIONS);
      return {
        prompt: `Translate this hotel reception line into polite Spanish:\n**${b.en}**`,
        answer: { type: "text", accept: b.accept, display: b.accept[0] },
        hint: "Watch *para* (nights) vs *por* (price), *estar* (dirty/broken/included), and exact accents.",
        traps: b.trap && b.trapMsg ? [{ spec: { type: "text" as const, accept: [b.trap] }, feedback: b.trapMsg }] : undefined,
        solution: [b.tip, `Answer: **${b.accept[0]}**`],
      };
    },
  },

  // 4. Reviews: Backwards Opinion Agreement, Adjectives & Verdicts (Level 3)
  {
    id: "hotels-places-reviews.reviews-agreement",
    topicId: "hotels-places-reviews",
    title: "Hotel Reviews: Me Encantó/Encantaron, Agreement & Verdicts",
    level: 3,
    guideRef: "writing-hotel-reviews",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const v = rng.pick(OPINION_VERBS);
        const n = rng.pick(OPINION_NOUNS);
        const ans = n.plural ? v.pl : v.sg;
        const wrong = n.plural ? v.sg : v.pl;
        return {
          prompt: `Put **${v.inf}** (${v.en}) into the **preterite** to agree with the noun:\n*En el hotel me ___ ${n.es}.*`,
          answer: { type: "text", accept: [ans, `me ${ans}`], display: ans },
          hint: "Look AFTER the gap: is the noun singular (*-ó / -ió*) or plural (*-aron / -ieron*)?",
          traps: [{ spec: { type: "text" as const, accept: [wrong, `me ${wrong}`] }, feedback: `*${n.es}* is ${n.plural ? "plural" : "singular"}, so use **${ans}**!` }],
          solution: [
            `*${n.es}* is ${n.plural ? "plural" : "singular"}.`,
            `Preterite agreement of *${v.inf}*: **me ${ans} ${n.es}**.`,
          ],
        };
      }

      if (tier === 2) {
        const n = rng.pick(REVIEW_NOUNS);
        const adj = rng.pick(REVIEW_ADJS);
        const adjForm = adj[n.gen];
        const ans = `${n.verb} ${adjForm}`;
        const wrongVerb = n.verb === "fue" ? "fueron" : "fue";
        return {
          prompt: `Complete with the preterite of **ser** + agreeing form of **${adj.base}** (*${adj.en}*):\n*${n.noun} ___ ___.*`,
          answer: { type: "text", accept: [ans], display: ans },
          hint: "Check singular (*fue*) vs plural (*fueron*) and masculine/feminine ending (remember *el personal* is singular!).",
          traps: [{ spec: { type: "text" as const, accept: [`${wrongVerb} ${adj.base}`] }, feedback: `Check number and gender agreement with *${n.noun}*: **${ans}**.` }],
          solution: [
            `*${n.noun}* takes **${n.verb}** + **${adjForm}** → **${ans}**.`,
          ],
        };
      }

      // Tier 3: Review cloze & future verdicts
      const c = rng.pick(REVIEW_CLOZE);
      return {
        prompt: c.prompt,
        answer: { type: "text", accept: c.accept, display: c.accept[0] },
        hint: c.hint,
        traps: [{ spec: { type: "text" as const, accept: [c.trap] }, feedback: c.trapMsg }],
        solution: [c.sol],
      };
    },
  },
];
