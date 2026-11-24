import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "hotels-places-reviews",
  title: "Places of Interest, Hotels & Reviews (El hotel)",
  strand: "Term 1: Holidays",
  icon: "🏨",
  summary:
    "Describe sightseeing attractions, book accommodation, handle hotel disasters politely, and write balanced Spanish trip reviews across Present, Preterite and Future tenses.",
  intro:
    "Every unforgettable holiday needs somewhere to explore and somewhere to stay! In this unit you will master sightseeing phrases (**se puede + infinitive**, **hay / había**), accommodation and room vocabulary, polite reception booking and complaint dialogues, and balanced hotel reviews using **por un lado… por otro lado…**, **me encantó / me decepcionó**, and spotless **ser vs estar** and adjective agreement.",
  guide: [
    // -----------------------------------------------------------------------
    // SECTION 1: places-of-interest
    // -----------------------------------------------------------------------
    {
      id: "places-of-interest",
      heading: "Places of Interest & Sightseeing (Lugares de interés)",
      discovery: {
        problem:
          "Read this short brochure blurb about Seville:\n\n*«En Sevilla **hay** una catedral enorme y **se puede visitar** el alcázar. El verano pasado fui allí: **había** muchos turistas en la plaza mayor, pero **visité** el museo y **subí** a la torre.»*\n\nSpot the difference between **hay** and **había**, and check what kind of verb form immediately follows **se puede**!",
        idea: "**Hay** means *there is / there are* (present), while **había** is the high-frequency set phrase for *there was / there were* (describing what existed in the past)! Notice neither changes for plural: *hay un castillo / hay muchos castillos*, *había un mercado / había muchos turistas*. And **se puede** (*you can / one can*) is ALWAYS followed directly by an **infinitive** (*se puede visitar, se puede sacar fotos*).",
      },
      body: `Whether you are describing a Spanish city today or narrating a trip you took last summer, three structures unlock almost every sightseeing description: **attractions with articles**, **hay / había**, and **se puede + infinitive**.

### 1. Iconic Places of Interest (*Lugares de interés*)
Always learn every attraction with its gender (**el / la / los / las**) so your prepositions (*al castillo* vs *a la catedral*) and adjectives stay accurate:

| Masculine (*el / los*) | English | Feminine (*la / las*) | English |
|---|---|---|---|
| **el castillo** | the castle | **la catedral** | the cathedral |
| **el museo** | the museum | **la plaza mayor** | the main square |
| **el parque temático** | the theme park | **la galería de arte** | the art gallery |
| **el mercado** | the market | **la torre** | the tower |
| **el estadio** | the stadium | **la iglesia** | the church |
| **el acuario** | the aquarium | **las ruinas (antiguas)** | the (ancient) ruins |
| **el puerto deportivo** | the marina | **las vistas panorámicas** | the panoramic views |

### 2. Describing What Exists: *hay* vs *había* vs *va a haber*
- **Present:** **hay** (*there is / there are*) → *En Barcelona hay muchos museos y una catedral famosa.*
- **Past background:** **había** (*there was / there were*) → *En el centro había un mercado animado y ruinas romanas.*
- **Future:** **va a haber** / **habrá** (*there is going to be / there will be*) → *En el festival va a haber música en directo.*
- **Crucial trap:** *hay* and *había* NEVER add *-n* for plural nouns! Say *había muchas tiendas* (NOT *habían*).

### 3. Recommending Activities: *se puede + infinitive*
To say *you can… / people can…* without naming a specific person, use **se puede** + **infinitive**:
- *Se puede visitar el castillo medieval.* (You can visit the medieval castle.)
- *Se puede subir a la torre para ver las vistas.* (You can go up the tower to see the views.)
- *Se puede comprar fruta fresca en el mercado.* (You can buy fresh fruit at the market.)
- Negative: *No se puede sacar fotos dentro del museo.* (You cannot take photos inside the museum.)

### 4. Saying What You Actually Visited (Preterite)
Combine sightseeing nouns with sharp preterite verbs: *visité la catedral*, *fui al parque temático*, *vi las ruinas*, *subí a la torre*, *paseé por la plaza mayor* (*pasear* = to stroll).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sightseeing formula map showing hay and habia, se puede plus infinitive, and preterite visit verbs">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Sightseeing Toolkit: Describe, Recommend &amp; Narrate</text>

  <rect x="20" y="50" width="164" height="134" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="102" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. What Is / Was There</text>
  <text x="102" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">hay = there is / are</text>
  <text x="102" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">había = there was / were</text>
  <text x="102" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">va a haber / habrá</text>
  <line x1="34" y1="148" x2="170" y2="148" stroke="var(--line)" stroke-width="1"/>
  <text x="102" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Singular &amp; plural stay</text>
  <text x="102" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">identical (no -n!)</text>

  <rect x="198" y="50" width="164" height="134" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="280" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">2. What You Can Do</text>
  <text x="280" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">se puede + infinitive</text>
  <text x="280" y="120" text-anchor="middle" font-size="11" fill="var(--ink)">visitar el castillo</text>
  <text x="280" y="138" text-anchor="middle" font-size="11" fill="var(--ink)">subir a la torre</text>
  <text x="280" y="156" text-anchor="middle" font-size="11" fill="var(--ink)">pasear por la plaza</text>
  <text x="280" y="174" text-anchor="middle" font-size="10" fill="var(--ink-2)">Never conjugate verb 2!</text>

  <rect x="376" y="50" width="164" height="134" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="458" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">3. What I Visited</text>
  <text x="458" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">visité la catedral</text>
  <text x="458" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">fui al parque temático</text>
  <text x="458" y="132" text-anchor="middle" font-size="11" fill="var(--ink)">vi las ruinas romanas</text>
  <text x="458" y="150" text-anchor="middle" font-size="11" fill="var(--ink)">saqué fotos del museo</text>
  <text x="458" y="172" text-anchor="middle" font-size="10" fill="var(--ink-2)">a + el = al · de + el = del</text>

  <rect x="20" y="196" width="520" height="34" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="280" y="218" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">En Granada había un castillo precioso y se puede sacar fotos increíbles desde la torre.</text>
</svg>`,
      diagramCaption:
        "Combine hay/había, se puede + infinitive, and preterite visit verbs to sound like an authentic travel guide.",
      workedExamples: [
        {
          title: "Translating Sightseeing Descriptions (hay / había / se puede)",
          problem:
            "Translate into accurate Spanish: *In the city there was an old castle and you can visit the museum.*",
          steps: [
            "*In the city* = **En la ciudad**.",
            "*there was* (past background) = **había**; *an old castle* = **un castillo antiguo** (adjective AFTER the noun!).",
            "*and you can visit* = **y se puede visitar** (infinitive *visitar* right after *se puede*).",
            "*the museum* = **el museo**.",
          ],
          answer: "En la ciudad había un castillo antiguo y se puede visitar el museo.",
          yourTurn: {
            question:
              "Translate into Spanish: *In the square you can buy souvenirs.* (Use *en la plaza*, *se puede*, *comprar recuerdos*.)",
            answer: {
              type: "text",
              accept: [
                "En la plaza se puede comprar recuerdos",
                "En la plaza se puede comprar recuerdos.",
                "En la plaza se pueden comprar recuerdos",
                "En la plaza se pueden comprar recuerdos.",
              ],
              display: "En la plaza se puede comprar recuerdos.",
            },
            solution:
              "*In the square* = **En la plaza**; *you can buy souvenirs* = **se puede comprar recuerdos** (infinitive *comprar* after *se puede*).",
          },
        },
        {
          title: "Using Contractions al and del with Attractions",
          problem:
            "Fill both gaps accurately: *Ayer fuimos ___ parque temático y sacamos fotos ___ castillo.*",
          steps: [
            "Gap 1: *ir a + el parque temático* → **al** parque temático.",
            "Gap 2: *de + el castillo* → Spanish also contracts **de + el → del** → **del** castillo.",
          ],
          answer: "al, del (*Ayer fuimos al parque temático y sacamos fotos del castillo.*)",
        },
      ],
      keyPoints: [
        "**Hay** (*there is/are*) and **había** (*there was/were*) stay the same for BOTH singular and plural nouns.",
        "**Se puede + infinitive** expresses *you can / one can* — never conjugate the verb after *se puede*.",
        "Remember BOTH mandatory Spanish contractions: **a + el = al** (*al museo*) and **de + el = del** (*del castillo*).",
        "Place descriptive adjectives AFTER the noun with gender/number agreement: *las ruinas antiguas*, *un mercado animado*.",
      ],
      strategies: [
        "Article First: whenever you learn a sightseeing noun, lock in *el / la / las* (*la catedral, el estadio, las ruinas*) so *al / a la* and adjectives come out automatically.",
        "Time-Check *hay*: ask *Now or in the past?* — if describing a past trip, switch *hay* to **había**.",
      ],
      whyItWorks:
        "**Se** in *se puede* acts as an impersonal subject (*one / people in general*), matching the 3rd-person singular verb *puede*. Because *poder* is a modal verb, the action that follows remains in the infinitive — just like English *can visit*!",
      thinkDeeper:
        "Why do Spanish speakers write *En el centro **había** muchos mercados* (without *-n*) even though *mercados* is plural? Think about whether *mercados* is the subject of *haber* or the direct object of *there existed…*!",
    },

    // -----------------------------------------------------------------------
    // SECTION 2: hotel-types-facilities
    // -----------------------------------------------------------------------
    {
      id: "hotel-types-facilities",
      heading: "Types of Accommodation & Hotel Facilities",
      discovery: {
        problem:
          "Look at these two sentences describing where someone stayed:\n\n1. *Me **alojé** en un hotel de cinco estrellas con piscina climatizada.*\n2. *El año que viene **voy a alojarme** en una casa rural con mi familia.*\n\nNotice the little pronoun **me**: why is it BEFORE the verb in sentence 1 (*me alojé*), yet attached to the END of the infinitive in sentence 2 (*alojarme*)?",
        idea: "**Alojarse** (*to stay in accommodation*) is a **reflexive verb**. Before a conjugated verb (present or preterite), the reflexive pronoun sits in front (**me alojo, me alojé, nos alojamos**). When paired with an infinitive (after *voy a* or *me gustaría*), it can attach directly to the end of the infinitive (**voy a alojarme**, **vamos a alojarnos**, **me gustaría alojarme**) — or sit before *voy* (*me voy a alojar*)!",
      },
      body: `To describe where you stay on holiday like a native speaker, combine four essential layers: **accommodation type**, **room & board**, **facilities**, and the verb **alojarse**.

### 1. Types of Accommodation (*El alojamiento*)
- **un hotel de cinco estrellas** — a five-star hotel (luxury: *lujoso, caro*)
- **un hotel de tres estrellas** — a three-star hotel (mid-range)
- **un albergue juvenil** — a youth hostel (cheap, sociable: *barato, económico*)
- **un camping** — a campsite (outdoor, near nature: *al aire libre, divertido*)
- **una casa rural** — a rural cottage / guesthouse (peaceful: *tranquila, en el campo*)
- **un apartamento turístico** — a holiday flat / apartment (independent: *cómodo, práctico*)
- **un parador** — a historic Spanish state-run hotel (often inside a former castle or monastery!)

### 2. Rooms & Board Options (*Habitaciones y regímenes*)
| Spanish | English | Key Detail |
|---|---|---|
| **una habitación individual** | a single room | *habitación* is feminine (accent on *-ón*!) |
| **una habitación doble** | a double / twin room | *dos camas* (twin) vs *cama de matrimonio* (double bed) |
| **una habitación familiar** | a family room | *para cuatro personas* |
| **con vistas al mar / a la montaña** | with sea / mountain views | *al mar* (*a + el*), *a la montaña* |
| **con balcón / con baño propio** | with balcony / en-suite bathroom | *ducha* (shower), *bañera* (bath) |
| **alojamiento y desayuno** | bed and breakfast (B&amp;B) | breakfast included |
| **media pensión** | half board | breakfast + dinner (or lunch) |
| **pensión completa** | full board | all three meals included |

### 3. Hotel Facilities (*Las instalaciones*)
- **la piscina climatizada** (heated swimming pool), **el wifi gratis** (free Wi-Fi), **el aire acondicionado** (air conditioning), **la calefacción** (heating), **el gimnasio** (gym), **el aparcamiento** (car park), **el ascensor** (lift), **la recepción** (reception), **el restaurante** (restaurant), **la terraza** (terrace).

### 4. Mastering **alojarse** (to stay) Across Year 9 Tenses
- **Present:** *me alojo, te alojas, se aloja, nos alojamos, os alojáis, se alojan*
- **Preterite:** *me alojé, te alojaste, se alojó, nos alojamos, os alojasteis, se alojaron*
- **Immediate future:** *voy a alojarme / vamos a alojarnos*
- **Simple future:** *me alojaré / nos alojaremos*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Accommodation spectrum from campsite to five-star hotel plus Spanish board types and alojarse tense strip">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Accommodation Spectrum, Board Types &amp; Alojarse</text>

  <rect x="20" y="46" width="122" height="74" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="81" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">un camping</text>
  <text x="81" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">barato · al aire libre</text>
  <text x="81" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">tienda de campaña</text>

  <rect x="152" y="46" width="124" height="74" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="214" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">albergue juvenil</text>
  <text x="214" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">económico · joven</text>
  <text x="214" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">habitación compartida</text>

  <rect x="286" y="46" width="120" height="74" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="346" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">una casa rural</text>
  <text x="346" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">tranquila · en el campo</text>
  <text x="346" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">en familia</text>

  <rect x="416" y="46" width="124" height="74" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="478" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">hotel 5 estrellas</text>
  <text x="478" y="86" text-anchor="middle" font-size="10" fill="var(--ink)">lujoso · piscina</text>
  <text x="478" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">vistas al mar</text>

  <rect x="20" y="132" width="256" height="96" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="148" y="153" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Board Options (Régimen)</text>
  <text x="148" y="174" text-anchor="middle" font-size="11" fill="var(--ink)">alojamiento y desayuno (B&amp;B)</text>
  <text x="148" y="193" text-anchor="middle" font-size="11" fill="var(--ink)">media pensión (half board)</text>
  <text x="148" y="212" text-anchor="middle" font-size="11" fill="var(--ink)">pensión completa (full board)</text>

  <rect x="286" y="132" width="254" height="96" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="413" y="153" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Alojarse (to stay) — yo</text>
  <text x="413" y="174" text-anchor="middle" font-size="11" fill="var(--ink)">Present: me alojo</text>
  <text x="413" y="193" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Preterite: me alojé</text>
  <text x="413" y="212" text-anchor="middle" font-size="11" fill="var(--ink)">Future: voy a alojarme / me alojaré</text>
</svg>`,
      diagramCaption:
        "Match the accommodation type, room/board phrase and the right reflexive pronoun on alojarse.",
      workedExamples: [
        {
          title: "Describing Past Accommodation & Facilities",
          problem:
            "Translate into accurate Spanish: *Last summer we stayed in a rural cottage with a heated pool and free Wi-Fi.*",
          steps: [
            "*Last summer* = **El verano pasado**.",
            "*we stayed* (*alojarse*, nosotros preterite) → pronoun **nos** + verb **alojamos** → **nos alojamos**.",
            "*in a rural cottage* → *casa rural* is feminine → **en una casa rural**.",
            "*with a heated pool and free Wi-Fi* → **con piscina climatizada y wifi gratis**.",
          ],
          answer:
            "El verano pasado nos alojamos en una casa rural con piscina climatizada y wifi gratis.",
          yourTurn: {
            question:
              "Translate into Spanish: *I stayed in a youth hostel.* (Use *alojarse* in the preterite.)",
            answer: {
              type: "text",
              accept: [
                "Me alojé en un albergue juvenil",
                "Me alojé en un albergue juvenil.",
                "Yo me alojé en un albergue juvenil",
              ],
              display: "Me alojé en un albergue juvenil.",
            },
            solution:
              "*I stayed* = **Me alojé** (yo preterite of *alojarse* with accent on *-é*); *in a youth hostel* = **en un albergue juvenil**.",
          },
        },
        {
          title: "Explaining Room & Board Preferences",
          problem:
            "Translate: *Next year I am going to stay in a double room with sea views and half board.*",
          steps: [
            "*Next year* = **El año que viene**.",
            "*I am going to stay* = **voy a alojarme** (or **me voy a alojar**).",
            "*in a double room with sea views* = **en una habitación doble con vistas al mar**.",
            "*and half board* = **y media pensión** (or **en media pensión**).",
          ],
          answer:
            "El año que viene voy a alojarme en una habitación doble con vistas al mar y media pensión.",
        },
      ],
      keyPoints: [
        "Always include the reflexive pronoun with **alojarse**: *me alojo, me alojé, nos alojamos, voy a alojarme, me alojaré*.",
        "**Habitación** is feminine (*una habitación doble / individual*) and drops the accent in the plural (*habitaciones*).",
        "Watch board traps: **media pensión** = half board (2 meals), **pensión completa** = full board (3 meals), **alojamiento y desayuno** = B&amp;B.",
        "Use **con vistas al mar** (*a + el = al*) and **con vistas a la montaña** (*a la*).",
      ],
      strategies: [
        "Pronoun Partner Check: whenever you write *alojé / alojamos / alojar*, check that its reflexive partner (*me / nos / se*) is right beside it!",
        "Plural Drop-Accent Rule: nouns ending in **-ción** (*la habitación, la recepción*) lose their written accent when adding *-es* (*las habitaciones*).",
      ],
      whyItWorks:
        "Spanish uses **en** (not *a*) after *alojarse* (*me alojé **en** un hotel*) because staying in a hotel describes a **location**, whereas *ir* describes **movement** (*fui **al** hotel*).",
      thinkDeeper:
        "Why does **la habitación** need a written accent on *-ón*, while its plural **las habitaciones** does NOT? Apply the Spanish stress rule for words ending in *-n* versus *-s*!",
    },

    // -----------------------------------------------------------------------
    // SECTION 3: booking-and-problems
    // -----------------------------------------------------------------------
    {
      id: "booking-and-problems",
      heading: "Booking a Room & Complaining About Problems",
      discovery: {
        problem:
          "Compare these two sentences spoken at a Spanish hotel reception:\n\n- **A:** *El hotel **es** moderno, pero mi habitación **está** sucia.*\n- **B:** *El ascensor **no funciona** y **no hay** agua caliente.*\n\nWhy does sentence A switch from **es** (*ser*) to **está** (*estar*) halfway through?",
        idea: "Use **ser** (**es / fue**) for permanent or defining characteristics (*el hotel es moderno / antiguo / barato*), and use **estar** (**está / estaba**) for **temporary states or conditions** (*la habitación está sucia / limpia / fría*, *el aire acondicionado está roto*) and **location** (*el hotel está cerca de la playa*)! Mixing up *ser* and *estar* is the #1 Year 9 hotel-dialogue slip.",
      },
      body: `Hotel role-plays are a staple of Year 9 speaking and writing. Split them into two clean toolkits: **Polite Booking** and **Polite Complaints**.

### 1. Polite Booking Dialogue (*Reservar una habitación*)
Use **Quisiera** (*I would like*, very polite) or **Me gustaría** + infinitive, and remember Spanish uses **¿ … ?** at BOTH ends of every question!
- *Buenos días, **quisiera reservar** una habitación doble **para** dos noches.* (Note: **para** + number of nights!)
- *¿**Cuánto cuesta** por noche?* (How much does it cost per night?)
- *¿**Está incluido** el desayuno?* (Is breakfast included?)
- *¿**Tiene** balcón / vistas al mar / baño propio?* (Does it have a balcony / sea views / en-suite bathroom?)
- *¿**Hay** wifi gratis / aparcamiento / piscina?* (Is there free Wi-Fi / parking / a pool?)
- *¿**A qué hora** se sirve el desayuno?* (What time is breakfast served?)

### 2. Complaining Politely About Hotel Disasters (*Quejarse*)
Always open politely (**Perdone… / Disculpe…**) before stating the problem and asking for a solution:

| Problem in Spanish | English Meaning | Key Verb Pattern |
|---|---|---|
| **El ascensor no funciona.** | The lift doesn't work. | *no funciona* (sg.) / *no funcionan* (pl.) |
| **La habitación está sucia.** | The room is dirty. | *estar* + agreeing adjective (*sucia*) |
| **El aire acondicionado está roto.** | The air conditioning is broken. | *estar* + *roto / rota* |
| **No hay agua caliente.** | There is no hot water. | *no hay* + noun (no *ningún* needed!) |
| **Hace demasiado ruido.** | It is too noisy. | *hay / hace demasiado ruido* |
| **Falta una toalla / Faltan toallas.** | A towel is missing / Towels are missing. | *falta* (sg.) vs *faltan* (pl.) |
| **Las sábanas están sucias.** | The sheets are dirty. | plural *están* + fem. pl. *sucias* |
| **El personal es maleducado.** | The staff is rude. | *el personal* is SINGULAR (*es*)! |

### 3. Asking for Action (*Pedir una solución*)
- *Quiero **cambiar de habitación**, por favor.* (I want to change rooms, please.)
- *¿Puede **reparar** el aire acondicionado?* (Can you repair the air conditioning?)
- *Quiero **hablar con el director / la directora**.* (I want to speak to the manager.)
- *Quiero **rellenar una hoja de reclamaciones**.* (I want to fill in a complaint form — a legal right in every hotel in Spain!)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hotel reception flowchart separating polite booking questions from complaint phrases and ser versus estar rule">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">At Hotel Reception: Booking vs Complaining</text>

  <rect x="20" y="48" width="252" height="130" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="146" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">BOOKING (Reservar)</text>
  <text x="146" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">Quisiera reservar una habitación</text>
  <text x="146" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">doble para tres noches.</text>
  <text x="146" y="128" text-anchor="middle" font-size="11" fill="var(--ink)">¿Cuánto cuesta por noche?</text>
  <text x="146" y="146" text-anchor="middle" font-size="11" fill="var(--ink)">¿Está incluido el desayuno?</text>
  <text x="146" y="164" text-anchor="middle" font-size="11" fill="var(--ink)">¿Hay wifi gratis y balcón?</text>

  <rect x="288" y="48" width="252" height="130" rx="12" fill="var(--brand-soft)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="414" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">COMPLAINING (Quejarse)</text>
  <text x="414" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">Perdone, tengo un problema:</text>
  <text x="414" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">El ascensor no funciona.</text>
  <text x="414" y="128" text-anchor="middle" font-size="11" fill="var(--ink)">La habitación está sucia.</text>
  <text x="414" y="146" text-anchor="middle" font-size="11" fill="var(--ink)">No hay agua caliente.</text>
  <text x="414" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Quiero cambiar de habitación.</text>

  <rect x="20" y="190" width="520" height="40" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="280" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">SER vs ESTAR:  El hotel ES moderno (trait)  |  La habitación ESTÁ sucia (condition) &amp; ESTÁ cerca (location)</text>
  <text x="280" y="223" text-anchor="middle" font-size="10" fill="var(--ink-2)">Watch singular el personal ES amable (NOT son!) and plural las toallas FALTAN (NOT falta!)</text>
</svg>`,
      diagramCaption:
        "Pair polite openings (Quisiera… / Perdone…) with exact ser vs estar choices and singular/plural verb agreement.",
      workedExamples: [
        {
          title: "Writing a Polite Booking Request",
          problem:
            "Translate into polite Spanish: *Good morning, I would like to book a double room for three nights. How much does it cost per night?*",
          steps: [
            "*Good morning* = **Buenos días**.",
            "*I would like to book* = **quisiera reservar** (or **me gustaría reservar**).",
            "*a double room for three nights* = **una habitación doble para tres noches** (use **para** for booking length!).",
            "*How much does it cost per night?* = **¿Cuánto cuesta por noche?** (accent on *Cuánto* + inverted *¿*!).",
          ],
          answer:
            "Buenos días, quisiera reservar una habitación doble para tres noches. ¿Cuánto cuesta por noche?",
          yourTurn: {
            question:
              "Translate into Spanish: *Excuse me, the lift does not work and there is no hot water.* (Use *Perdone*, *el ascensor*, *agua caliente*.)",
            answer: {
              type: "text",
              accept: [
                "Perdone, el ascensor no funciona y no hay agua caliente",
                "Perdone, el ascensor no funciona y no hay agua caliente.",
                "Perdone el ascensor no funciona y no hay agua caliente",
                "Disculpe, el ascensor no funciona y no hay agua caliente",
              ],
              display: "Perdone, el ascensor no funciona y no hay agua caliente.",
            },
            solution:
              "*Excuse me* = **Perdone**; *the lift does not work* = **el ascensor no funciona**; *and there is no hot water* = **y no hay agua caliente**.",
          },
        },
        {
          title: "Choosing ser vs estar in Hotel Descriptions",
          problem:
            "Choose *es / son* or *está / están* for each gap: *El hotel ___ muy moderno y ___ cerca de la playa, pero las sábanas ___ sucias y el aire acondicionado ___ roto.*",
          steps: [
            "Gap 1 (*modern* = permanent trait of the hotel) → **es**.",
            "Gap 2 (*near the beach* = physical location!) → **está**.",
            "Gap 3 (*dirty* = temporary condition of plural *sábanas*) → **están**.",
            "Gap 4 (*broken* = temporary condition of singular *aire acondicionado*) → **está**.",
          ],
          answer: "es, está, están, está",
        },
      ],
      keyPoints: [
        "Use **Quisiera + infinitive** or **Me gustaría + infinitive** for polite bookings, and **para + number of nights** (*para dos noches*).",
        "Use **por noche** (*per night*) in price questions: *¿Cuánto cuesta por noche?*",
        "Master **ser** (traits: *es moderno, es barato*) vs **estar** (temporary condition: *está sucia, está roto*; location: *está cerca de la playa*).",
        "Match verb number carefully: **falta** una toalla vs **faltan** toallas; **el personal es** (singular!) amable.",
      ],
      strategies: [
        "PLACE vs DOCTOR Check: if you describe WHERE the hotel sits (*cerca del mar*) or a temporary MESS/BREAKDOWN (*sucia, roto*), pick **estar** every time!",
        "Polite Sandwich: open a complaint with *Perdone / Disculpe*, state two clear facts (*no funciona / no hay*), and close with a calm request (*Quiero cambiar de habitación, por favor*).",
      ],
      whyItWorks:
        "**Faltar** (*to be missing*) works backwards just like **gustar**: the missing item is the grammatical subject! So one missing towel takes singular **falta** (*falta una toalla*), while multiple missing towels take plural **faltan** (*faltan toallas*).",
      thinkDeeper:
        "Why do we say *el agua caliente* (using **el**, NOT *la*), yet *caliente* and *agua fría* (using feminine **fría**)? Clue: say *la agua* aloud quickly and listen to the two stressed *a* sounds colliding!",
    },

    // -----------------------------------------------------------------------
    // SECTION 4: writing-hotel-reviews
    // -----------------------------------------------------------------------
    {
      id: "writing-hotel-reviews",
      heading: "Writing Authentic Hotel & Trip Reviews (Las reseñas)",
      discovery: {
        problem:
          "Compare two online reviews for *Hotel Miramar*:\n\n- **Review A:** *El hotel fue bueno. La piscina fue buena. Volveré.*\n- **Review B:** *Le doy cuatro de cinco estrellas. **Por un lado**, me encantó la piscina climatizada y el personal fue muy amable. **Por otro lado**, me decepcionó el wifi porque era lento. **Aunque** hubo un pequeño problema, **lo recomiendo** y **volveré sin duda**.*\n\nNotice the two past opinion verbs in Review B: **me encantó** and **me decepcionó**. What happens if the thing that delighted or disappointed you is **plural** (e.g. *las vistas* or *las habitaciones*)?",
        idea: "Just like *gustar*, both **encantar** and **decepcionar** agree with the **thing** that caused the feeling! Singular noun → **me encantó el desayuno / me decepcionó el wifi**; plural noun → **me encantaron las vistas / me decepcionaron las habitaciones**!",
      },
      body: `Writing a realistic Spanish TripAdvisor-style review (*una reseña*) is the crowning task of Term 1. Authentic reviews never sound one-sided — they combine a **star rating**, **balanced pros and cons**, **past-tense opinions**, and a **future recommendation**.

### 1. The 4-Part Review Architecture
1. **Stay & Star Rating:** *El mes pasado me alojé en el Hotel Sol durante cuatro noches. Le doy **cuatro de cinco estrellas** (★★★★☆).*
2. **Strengths (*Por un lado…*):** *Por un lado, **me encantó** la ubicación porque estaba cerca de la playa. Además, **me encantaron** las vistas al mar y el personal fue muy simpático.*
3. **Drawbacks (*Por otro lado… / Sin embargo…*):** *Por otro lado, **me decepcionó** el desayuno porque estaba frío y la habitación era un poco ruidosa.*
4. **Recommendation & Future Verdict:** *En resumen, **lo recomiendo** a las familias y **volveré el año que viene*** (or negative: ***no lo recomiendo*** *y **no volveré nunca*** / ***no voy a volver***!).

### 2. Past Opinion Verbs: Singular vs Plural Agreement
| Meaning | With Singular Noun / Infinitive | With Plural Noun |
|---|---|---|
| I loved | **me encantó** (*la piscina*) | **me encantaron** (*las vistas*) |
| I liked | **me gustó** (*el castillo*) | **me gustaron** (*las ruinas*) |
| It disappointed me | **me decepcionó** (*el servicio*) | **me decepcionaron** (*las habitaciones*) |
| It seemed to me | **me pareció** (*moderno*) | **me parecieron** (*caras*) |

### 3. Essential Review Adjectives (Check Gender & Number!)
- **Positive:** *cómodo/a* (comfortable), *limpio/a* (clean), *espacioso/a* (spacious), *luminoso/a* (bright), *acogedor/a* (cosy/welcoming), *amable / simpático/a* (friendly), *impresionante* (impressive), *excelente* (excellent).
- **Negative:** *sucio/a* (dirty), *ruidoso/a* (noisy), *antiguo/a* (old-fashioned), *pequeño/a* (small), *incómodo/a* (uncomfortable), *caro/a* (expensive), *lento/a* (slow), *maleducado/a* (rude).

### 4. Referring Back to the Hotel: *lo recomiendo* vs *la recomiendo*
- Reviewing *el hotel / el albergue / el camping* (masculine) → **lo recomiendo** (*I recommend it*).
- Reviewing *la casa rural / la catedral / la ciudad* (feminine) → **la recomiendo** (*I recommend it*).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage Spanish hotel review blueprint from star rating to balanced pros and cons to future recommendation">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">4-Part Authentic Spanish Hotel Review (La reseña)</text>

  <rect x="20" y="48" width="254" height="82" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="147" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">1. STAY &amp; RATING</text>
  <text x="147" y="89" text-anchor="middle" font-size="11" fill="var(--ink)">Me alojé tres noches en…</text>
  <text x="147" y="109" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Le doy cuatro de cinco estrellas.</text>

  <rect x="286" y="48" width="254" height="82" rx="12" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="413" y="69" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">2. PROS (Por un lado…)</text>
  <text x="413" y="89" text-anchor="middle" font-size="11" fill="var(--ink)">Me encantó la piscina climatizada.</text>
  <text x="413" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">Me encantaron las vistas al mar.</text>

  <rect x="20" y="142" width="254" height="84" rx="12" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="147" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">3. CONS (Por otro lado…)</text>
  <text x="147" y="183" text-anchor="middle" font-size="11" fill="var(--ink)">Me decepcionó el wifi lento.</text>
  <text x="147" y="203" text-anchor="middle" font-size="11" fill="var(--ink)">La habitación era ruidosa.</text>

  <rect x="286" y="142" width="254" height="84" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="413" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">4. VERDICT &amp; FUTURE</text>
  <text x="413" y="183" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Lo recomiendo · Volveré sin duda.</text>
  <text x="413" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">No lo recomiendo · No volveré nunca.</text>
</svg>`,
      diagramCaption:
        "Balance every Spanish review with Por un lado… Por otro lado…, match -ó vs -aron on opinion verbs, and close with a simple future verdict.",
      workedExamples: [
        {
          title: "Matching Singular & Plural Past Opinion Verbs",
          problem:
            "Choose the exact preterite form of **encantar** or **decepcionar**: *Por un lado, me (encantar) las vistas al mar; por otro lado, me (decepcionar) el restaurante.*",
          steps: [
            "Clause 1: *las vistas* is **plural**, so *encantar* must be 3rd-person plural preterite → **me encantaron**.",
            "Clause 2: *el restaurante* is **singular**, so *decepcionar* must be 3rd-person singular preterite → **me decepcionó**.",
          ],
          answer: "me encantaron, me decepcionó",
          yourTurn: {
            question:
              "Translate into Spanish: *I loved the rooms, however the noise disappointed me.* (Use *me encantaron*, *las habitaciones*, *sin embargo*, *me decepcionó*, *el ruido*.)",
            answer: {
              type: "text",
              accept: [
                "Me encantaron las habitaciones, sin embargo me decepcionó el ruido",
                "Me encantaron las habitaciones, sin embargo me decepcionó el ruido.",
                "Me encantaron las habitaciones; sin embargo, me decepcionó el ruido",
                "Me encantaron las habitaciones; sin embargo, me decepcionó el ruido.",
              ],
              display:
                "Me encantaron las habitaciones; sin embargo, me decepcionó el ruido.",
            },
            solution:
              "*las habitaciones* is plural → **me encantaron**; *el ruido* is singular → **me decepcionó**.",
          },
        },
        {
          title: "Closing a Review with Accurate Future & Object Pronoun",
          problem:
            "Translate: *I give this rural cottage five stars; I recommend it and I will definitely return.*",
          steps: [
            "*I give* = **Le doy** + **cinco estrellas** (*a esta casa rural*).",
            "*I recommend it* → *una casa rural* is **feminine**, so use **la** → **la recomiendo**.",
            "*and I will definitely return* → simple future of *volver* (**volveré**) + **sin duda** → **y volveré sin duda**.",
          ],
          answer:
            "Le doy cinco estrellas a esta casa rural; la recomiendo y volveré sin duda.",
        },
      ],
      keyPoints: [
        "Match past opinion verbs to the noun that follows: **me encantó / me decepcionó** (singular) vs **me encantaron / me decepcionaron** (plural).",
        "Structure balanced reviews with **Por un lado… Por otro lado…**, **Sin embargo…**, and **Aunque…**.",
        "Match **lo recomiendo** (masculine: *el hotel, el camping*) vs **la recomiendo** (feminine: *la casa rural, la catedral*).",
        "Finish with a crisp simple future verdict: **volveré sin duda** (I will definitely return) or **no volveré nunca** (I will never return).",
      ],
      strategies: [
        "Flip-Subject Check: with *gustar / encantar / decepcionar / parecer*, always look AFTER the verb to see if the noun is singular (*-ó*) or plural (*-aron / -ieron*)!",
        "Balance Rule: even a 4-star review feels far more authentic (and earns stronger Year 9 writing marks) when it includes one minor drawback introduced by *sin embargo* or *aunque*.",
      ],
      whyItWorks:
        "In Spanish, *Me decepcionó el servicio* literally means *The service disappointed me*. Seeing *el servicio* as the grammatical subject immediately explains why plural *las habitaciones* switches the verb to *me decepcionaron*!",
      thinkDeeper:
        "Why is Spanish **no volveré nunca** (*literally: I will not return never*) completely grammatical, whereas English avoids double negatives? Explore how Spanish negatives like *nunca* and *nada* reinforce *no* when placed AFTER the verb!",
    },
  ],

  learn: {
    flashcards: [
      { front: "los lugares de interés", back: "the places of interest / sights" },
      { front: "hay / había", back: "there is or are (present) / there was or were (past — never add *-n*!)" },
      { front: "se puede visitar el castillo", back: "you can visit the castle (*se puede* + infinitive)" },
      { front: "un albergue juvenil / una casa rural", back: "a youth hostel / a rural cottage" },
      { front: "me alojé en un hotel de cinco estrellas", back: "I stayed in a five-star hotel (*alojarse* preterite)" },
      { front: "una habitación doble con vistas al mar", back: "a double room with sea views (*a + el = al*)" },
      { front: "media pensión / pensión completa", back: "half board / full board" },
      { front: "la piscina climatizada y el wifi gratis", back: "the heated swimming pool and free Wi-Fi" },
      { front: "Quisiera reservar una habitación para dos noches.", back: "I would like to book a room for two nights." },
      { front: "¿Cuánto cuesta por noche?", back: "How much does it cost per night?" },
      { front: "El ascensor no funciona.", back: "The lift does not work." },
      { front: "La habitación está sucia y no hay agua caliente.", back: "The room is dirty (*estar*!) and there is no hot water." },
      { front: "Falta una toalla / Faltan toallas.", back: "A towel is missing / Towels are missing." },
      { front: "Quiero cambiar de habitación.", back: "I want to change rooms." },
      { front: "Por un lado… por otro lado…", back: "On the one hand… on the other hand…" },
      { front: "Me encantaron las vistas, pero me decepcionó el ruido.", back: "I loved the views (pl.), but the noise disappointed me (sg.)." },
      { front: "Lo recomiendo / No volveré nunca.", back: "I recommend it (masc.) / I will never return." },
    ],
    mustKnow: [
      "Name 10+ sightseeing attractions with exact gender (*el castillo, la catedral, el museo, el parque temático, las ruinas, la plaza mayor*).",
      "Use **hay** (present), **había** (past) and **se puede + infinitive** without ever adding *-n* to *había* or conjugating after *se puede*.",
      "Apply both contractions accurately: **a + el → al** (*ir al museo*) and **de + el → del** (*fotos del castillo*).",
      "Conjugate **alojarse** (*me alojo, me alojé, nos alojamos, voy a alojarme, me alojaré*) accurately across tenses.",
      "Distinguish accommodation types (*hotel, albergue juvenil, camping, casa rural, apartamento*) and board options (*alojamiento y desayuno, media pensión, pensión completa*).",
      "Conduct a polite booking dialogue using **Quisiera reservar… para X noches**, **¿Cuánto cuesta por noche?**, **¿Está incluido el desayuno?**",
      "State hotel complaints accurately using **estar** for temporary conditions (*está sucia, está roto, están sucias*), **no funciona**, **no hay agua caliente**, and **falta / faltan**.",
      "Separate **ser** (defining traits: *el hotel es moderno*) from **estar** (location & state: *está cerca de la playa, está limpia*).",
      "Use **me encantó / me decepcionó** (singular) vs **me encantaron / me decepcionaron** (plural) in reviews.",
      "Structure a balanced TripAdvisor-style review with star rating, **por un lado… por otro lado…**, **lo/la recomiendo**, and a simple future verdict (**volveré / no volveré nunca**).",
    ],
    misconceptions: [
      { wrong: "En el centro habían muchos museos.", right: "En el centro **había** muchos museos. (*Había* never takes *-n*, even before plural nouns!)" },
      { wrong: "Se puede visitas la catedral.", right: "Se puede **visitar** la catedral. (Always use the **infinitive** directly after *se puede*.)" },
      { wrong: "La habitación es sucia y el hotel es cerca de la playa.", right: "La habitación **está** sucia y el hotel **está** cerca de la playa. (Temporary states & location ALWAYS use **estar**!)" },
      { wrong: "El personal son muy amables.", right: "El personal **es** muy amable. (*El personal* = *the staff* is grammatically singular in Spanish!)" },
      { wrong: "Me encantó las vistas al mar.", right: "Me **encantaron** las vistas al mar. (*Las vistas* is plural, so the verb agrees in the plural!)" },
      { wrong: "Quisiera reservar una habitación por dos noches.", right: "Quisiera reservar una habitación **para** dos noches. (Use **para** for booking length, **por** for price *por noche*!)" },
      { wrong: "Alojé en un hotel moderno.", right: "**Me alojé** en un hotel moderno. (*Alojarse* is reflexive — never drop the pronoun *me / nos / se*!)" },
    ],
    examMistakes: [
      "Writing *es* instead of *está* for hotel location (*está cerca del mar*) or dirty/broken rooms (*está sucia, está roto*).",
      "Forgetting to drop the accent when *habitación* becomes plural (*habitaciones*, NOT *habitaciónes*).",
      "Using *me encantó* or *me decepcionó* with a plural noun (*las habitaciones, las vistas*) instead of *me encantaron / me decepcionaron*.",
      "Mixing up **para dos noches** (booking duration) and **por noche** (price per night).",
      "Treating *el personal* (the staff) as plural (*son amables*) instead of singular (*es amable*).",
      "Forgetting inverted question marks (**¿…?**) and accents on question words (*¿Cuánto…? ¿Dónde…? ¿A qué hora…?*).",
      "Using *lo recomiendo* when referring back to a feminine noun like *la casa rural* (must be **la recomiendo**!).",
    ],
    mnemonics: [
      {
        topic: "Ser vs Estar in Hotel Reviews",
        device: "How You FEEL & Where You ARE → Always Use ESTAR!",
        explanation:
          "Hotel location (*está cerca de la playa*) and temporary condition (*está sucia, está roto*) ALWAYS take **estar**; defining style (*es moderno, es barato*) takes **ser**.",
      },
      {
        topic: "Booking Prepositions: PARA vs POR",
        device: "PARA Nights, POR Price",
        explanation:
          "Book a room **para** tres noches (*for 3 nights*), and ask how much it costs **por** noche (*per night*)!",
      },
      {
        topic: "Balanced 5-Star Review Formula",
        device: "R → P → C → V (Rating · Pros · Cons · Verdict)",
        explanation:
          "Hit every review mark in order: **R**ating (*cuatro estrellas*), **P**ros (*Por un lado, me encantó…*), **C**ons (*Por otro lado, me decepcionó…*), and **V**erdict (*Lo recomiendo / Volveré*).",
      },
    ],
    realWorld: [
      {
        title: "Los Paradores de Turismo de España",
        detail:
          "Spain runs nearly 100 state-owned luxury hotels called **Paradores**, housed inside historic medieval castles, Renaissance palaces and former monasteries — letting travellers literally sleep inside a *castillo*!",
        emoji: "🏰",
      },
      {
        title: "La Hoja de Reclamaciones",
        detail:
          "By Spanish consumer law, every hotel, restaurant and shop MUST display a notice confirming official **hojas de reclamaciones** (complaint forms) are available to guests on request.",
        emoji: "📋",
      },
      {
        title: "La Plaza Mayor — Heart of Every Spanish Town",
        detail:
          "From Madrid to Salamanca, nearly every historic Spanish city centres on its **Plaza Mayor** — a grand arcaded square lined with cafés where locals gather to stroll (*pasear*) in the evening.",
        emoji: "🏛️",
      },
      {
        title: "Turismo Rural in Northern Spain",
        detail:
          "Regions like Asturias, Galicia and Cantabria are famous for **casas rurales** — traditional stone farmhouses converted into cosy guesthouses surrounded by green mountains and trails.",
        emoji: "🏡",
      },
    ],
    videos: [
      {
        title: "Booking a Hotel Room & Complaining in Spanish (Role-Play Phrases)",
        channel: "YouTube Search — Spanish Hotel Booking & Complaints",
        url: "https://www.youtube.com/results?search_query=spanish+hotel+booking+complaints+role+play+ks3+year+9",
      },
      {
        title: "Describing Accommodation & Hotel Reviews in Spanish",
        channel: "YouTube Search — Spanish Accommodation & Reviews",
        url: "https://www.youtube.com/results?search_query=spanish+accommodation+hotel+review+por+un+lado+me+encanto",
      },
      {
        title: "Ser vs Estar Explained Clearly for Descriptions & Locations",
        channel: "YouTube Search — Spanish Ser vs Estar Hotel",
        url: "https://www.youtube.com/results?search_query=spanish+ser+vs+estar+location+condition+beginners",
      },
      {
        title: "Using Hay, Había & Se Puede + Infinitive in Spanish",
        channel: "YouTube Search — Spanish Hay Habia Se Puede",
        url: "https://www.youtube.com/results?search_query=spanish+hay+habia+se+puede+infinitive+places+of+interest",
      },
    ],
    formulas: [
      {
        name: "Impersonal Recommendation",
        formula: "se puede + infinitive",
        note: "*Se puede visitar el castillo / subir a la torre* — never conjugate verb 2.",
      },
      {
        name: "Existence Across Tenses",
        formula: "hay (present) · había (past) · va a haber / habrá (future)",
        note: "Never add *-n* for plurals: *había muchas ruinas*.",
      },
      {
        name: "Mandatory Contractions",
        formula: "a + el = al  |  de + el = del",
        note: "*Fui al museo y saqué fotos del castillo.*",
      },
      {
        name: "Alojarse (Reflexive Stay Verb)",
        formula: "me alojo · me alojé · voy a alojarme · me alojaré",
        note: "Always pair with *en* + accommodation (*en una casa rural*).",
      },
      {
        name: "Polite Booking Frame",
        formula: "Quisiera reservar una habitación [tipo] para [X] noches",
        note: "Use *para* for stay length, *por noche* for nightly price.",
      },
      {
        name: "Ser vs Estar at the Hotel",
        formula: "SER = traits (es moderno)  |  ESTAR = state & location (está sucia / cerca)",
        note: "Also remember *el personal* is singular (*el personal es amable*).",
      },
      {
        name: "Missing Items (Faltar)",
        formula: "falta + singular noun  |  faltan + plural noun",
        note: "*Falta una toalla* vs *Faltan dos toallas*.",
      },
      {
        name: "Balanced Review Connectives",
        formula: "Por un lado… Por otro lado… / Sin embargo… / Aunque…",
        note: "Pairs strengths and drawbacks cleanly in any trip review.",
      },
      {
        name: "Past Opinion Verb Agreement",
        formula: "me encantó / decepcionó (sg.)  |  me encantaron / decepcionaron (pl.)",
        note: "Verb matches the noun that caused the feeling!",
      },
      {
        name: "Recommendation & Simple Future Verdict",
        formula: "lo / la recomiendo  |  volveré sin duda / no volveré nunca",
        note: "Use *lo* for masculine (*el hotel*), *la* for feminine (*la casa rural*).",
      },
    ],
  },
};
