import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "holidays-activities",
  title: "Holidays: Destinations & Activities (Las vacaciones)",
  strand: "Term 1: Holidays",
  icon: "✈️",
  summary:
    "Plan, narrate and evaluate holidays across Present, Preterite, Immediate Future and Simple Future with authentic Spain-standard Spanish.",
  intro:
    "Talking about holidays is one of the fastest ways to level up your Year 9 Spanish, because a single holiday story naturally connects **three time frames**: where you *usually* go (present), what you *did* last summer (preterite), and where you *are going to go* next year (immediate & simple future). Master the prepositions, verb patterns and weather frames here and you can build lively, accurate paragraphs on any trip.",
  guide: [
    // -----------------------------------------------------------------------
    // SECTION 1: destinations-transport
    // -----------------------------------------------------------------------
    {
      id: "destinations-transport",
      heading: "Holiday Destinations, Countries & Transport",
      discovery: {
        problem:
          "Compare these four sentences carefully:\n\n1. *Voy **a** España **en** avión.*\n2. *Voy **a la** playa **en** coche.*\n3. *Voy **al** campo **en** tren.*\n4. *Voy **a la** montaña **a** pie.*\n\nSpot **two** grammar rules hiding in those four lines: why does *a* turn into *al* in sentence 3, and why does sentence 4 NOT use *en*?",
        idea: "First, Spanish fuses **a + el → al** before any masculine singular noun (*el campo → al campo*, *el extranjero → al extranjero*), while feminine nouns stay **a la** (*a la playa*) and countries usually take bare **a** (*a España*). Second, transport uses **en** for every vehicle you travel *inside or on* (*en avión, en tren, en barco, en bicicleta*), with one famous exception: **a pie** (on foot) and **a caballo** (on horseback) use **a**!",
      },
      body: `To answer the four classic holiday questions — **¿Cuándo?** (When?), **¿Adónde?** (Where to?), **¿Cómo?** (How?) and **¿Con quién?** (With whom?) — Spanish follows a crisp four-slot blueprint.

### 1. Destinations: *ir de vacaciones a…*
Notice that **¿Adónde?** (*to where?*) always pairs with **a** (*to*):
- **Countries & cities** normally need no article: *voy a España, a Grecia, a Italia, a Francia, a Japón, a Valencia*.
- **Feminine places** use **a la**: *a la costa* (to the coast), *a la playa* (to the beach), *a la montaña* (to the mountains), *a la isla* (to the island).
- **Masculine places** contract **a + el → al**: *al campo* (to the countryside), *al extranjero* (abroad), *al norte de España* (to the north of Spain).
- **Plural places** use **a los / a las**: *a las Islas Baleares*, *a los Pirineos*, *a los Estados Unidos*.

### 2. Transport: *en* vs *a*
Use **en** + bare transport noun (no *el* or *la*!) for vehicles:

| Spanish | English | Watch out! |
|---|---|---|
| **en avión** | by plane | No article (*en el avión* = inside the specific plane) |
| **en tren** | by train | Fast, eco-friendly (*rápido y ecológico*) |
| **en barco / en ferri** | by boat / ferry | Great for islands (*a Mallorca en barco*) |
| **en coche / en autocar** | by car / coach | *autocar* = long-distance coach; *autobús* = city bus |
| **en metro / en bicicleta** | by underground / bike | Shortened in speech to *en bici* |
| **a pie** | on foot | Uses **a**, NEVER *en pie*! |

### 3. Companions & Time Markers
- **Companions (*con*):** *con mi familia*, *con mis padres*, *con mis amigos*, *con mi mejor amigo/a*, *con el colegio*, *solo/sola*.
- **Time markers (present habits):** *normalmente*, *todos los años*, *cada verano*, *en verano*, *en invierno*, *en Semana Santa* (at Easter), *en agosto*.
- **Remember:** seasons and months in Spanish start with a **lowercase** letter (*en julio*, *en invierno*), unless they begin a sentence!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-slot Spanish holiday blueprint: when, where to, how by transport, and with whom">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The 4-Slot Holiday Sentence Blueprint</text>

  <rect x="20" y="52" width="122" height="128" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="81" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. ¿CUÁNDO?</text>
  <text x="81" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">Normalmente</text>
  <text x="81" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">En verano</text>
  <text x="81" y="132" text-anchor="middle" font-size="11" fill="var(--ink)">En Semana Santa</text>
  <text x="81" y="150" text-anchor="middle" font-size="11" fill="var(--ink)">Todos los años</text>
  <text x="81" y="170" text-anchor="middle" font-size="10" fill="var(--ink-2)">lowercase months!</text>

  <rect x="152" y="52" width="132" height="128" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="218" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">2. ¿ADÓNDE?</text>
  <text x="218" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">voy a España</text>
  <text x="218" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">voy a la costa</text>
  <text x="218" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">voy al campo</text>
  <text x="218" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">voy al extranjero</text>
  <text x="218" y="170" text-anchor="middle" font-size="10" fill="var(--ink-2)">a + el = al</text>

  <rect x="294" y="52" width="124" height="128" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="356" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">3. ¿CÓMO?</text>
  <text x="356" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">en avión / en tren</text>
  <text x="356" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">en barco / en coche</text>
  <text x="356" y="132" text-anchor="middle" font-size="11" fill="var(--ink)">en autocar</text>
  <text x="356" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">a pie (NOT en!)</text>
  <text x="356" y="170" text-anchor="middle" font-size="10" fill="var(--ink-2)">no el/la after en</text>

  <rect x="428" y="52" width="112" height="128" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="484" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">4. ¿CON QUIÉN?</text>
  <text x="484" y="96" text-anchor="middle" font-size="11" fill="var(--ink)">con mi familia</text>
  <text x="484" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">con mis padres</text>
  <text x="484" y="132" text-anchor="middle" font-size="11" fill="var(--ink)">con mis amigos</text>
  <text x="484" y="150" text-anchor="middle" font-size="11" fill="var(--ink)">con el colegio</text>
  <text x="484" y="170" text-anchor="middle" font-size="10" fill="var(--ink-2)">mi (sg) / mis (pl)</text>

  <rect x="20" y="194" width="520" height="36" rx="10" fill="var(--brand-soft)"/>
  <text x="280" y="217" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">En verano, voy de vacaciones al extranjero en avión con mi familia.</text>
</svg>`,
      diagramCaption:
        "Combine one building block from each column to produce a natural, accurate holiday opener every time.",
      workedExamples: [
        {
          title: "Building a Complete Destination & Transport Sentence",
          problem:
            "Translate into accurate Spanish: *Normally in summer I go on holiday to the countryside by train with my friends.*",
          steps: [
            "Slot 1 (When?): *Normalmente en verano* — lowercase *verano*.",
            "Slot 2 (Verb + Destination): *voy de vacaciones* + *a* + *el campo* → fuse **a + el** into **al campo**.",
            "Slot 3 (Transport): *by train* → **en tren** (drop *el* after *en*).",
            "Slot 4 (Companions): *with my friends* → *amigos* is plural, so use **mis**: *con mis amigos*.",
          ],
          answer: "Normalmente en verano voy de vacaciones al campo en tren con mis amigos.",
          yourTurn: {
            question:
              "Translate into Spanish: *In summer I go to the coast by coach with my family.*",
            answer: {
              type: "text",
              accept: [
                "En verano voy a la costa en autocar con mi familia",
                "En verano voy a la costa en autocar con mi familia.",
                "En verano yo voy a la costa en autocar con mi familia",
                "En verano voy a la costa con mi familia en autocar",
                "En verano voy a la costa en autobús con mi familia",
              ],
              display: "En verano voy a la costa en autocar con mi familia.",
            },
            solution:
              "*la costa* is feminine so use **a la costa**; *by coach* is **en autocar** (no article); *with my family* is **con mi familia**.",
          },
        },
        {
          title: "Choosing Between a, al, a la, en and a pie",
          problem:
            "Fill the three gaps correctly: *Todos los años vamos ___ extranjero ___ barco, pero en la isla nos movemos ___ pie.*",
          steps: [
            "Gap 1: *el extranjero* (abroad) is masculine singular → *a + el* contracts to **al**.",
            "Gap 2: *barco* (boat) is a vehicle → use **en** (no article).",
            "Gap 3: *pie* (foot) is the key exception → use **a** (*a pie*).",
          ],
          answer: "al, en, a (*Todos los años vamos al extranjero en barco, pero en la isla nos movemos a pie.*)",
        },
      ],
      keyPoints: [
        "Always contract **a + el → al** (*al campo, al extranjero, al sur*), never write *a el*.",
        "Use **en** + bare noun for vehicles (*en avión, en tren, en barco, en coche*), but **a pie** for *on foot*.",
        "Match **mi / mis** to the noun that follows: *con mi familia* (singular) vs *con mis padres / amigos* (plural).",
        "Keep Spanish months and seasons lowercase (*en agosto, en invierno, en verano*).",
      ],
      strategies: [
        "4-Slot Blueprint: check *¿Cuándo? → ¿Adónde? → ¿Cómo? → ¿Con quién?* before you finish any holiday sentence.",
        "Gender Check on *a*: ask yourself whether the destination takes *el* or *la* before choosing *al* or *a la*.",
      ],
      whyItWorks:
        "Spanish avoids awkward vowel clashes in fast speech: saying *a el campo* smoothly merges into **al campo**. Likewise, **en** means *in/inside* (you sit *in* a train or plane), whereas **a pie** literally treats walking as a manner phrase, just like *a mano* (by hand).",
      thinkDeeper:
        "Why do we say *voy **a** España* (no article) and *voy **a** Francia*, yet *voy **a los** Estados Unidos* and *voy **a las** Islas Canarias*? Think about which country names are plural phrases!",
    },

    // -----------------------------------------------------------------------
    // SECTION 2: holiday-activities-preterite
    // -----------------------------------------------------------------------
    {
      id: "holiday-activities-preterite",
      heading: "Describing Past Holiday Activities in the Preterite",
      discovery: {
        problem:
          "Look at these two Spanish sentences — only ONE tiny mark separates them:\n\n- **A:** *Nado en el mar y tomo el sol.*\n- **B:** *Nadó en el mar y tomó el sol.*\n\nWho is the subject of **A**? Who is the subject of **B**? And what happens if you forget the accent when writing *I swam* (*nadé*)?",
        idea: "**A** has no accents: **nado / tomo** = **I** swim / **I** sunbathe (present tense). **B** has accents on **-ó**: **nadó / tomó** = **he/she** swam / sunbathed (preterite tense)! And without the accent on *nadé*, *nade* is not the past tense at all. In Spanish preterite verbs, accents carry both the **tense** and the **person**.",
      },
      body: `The **preterite** (*pretérito indefinido*) is your headline tense for completed past holiday actions: what you visited, ate, drank, bought and saw on a specific trip (*el verano pasado, el año pasado, ayer, la semana pasada*).

### 1. Regular Preterite Endings
Notice that **-ER** and **-IR** verbs share the **exact same** preterite endings!

| Person | **-AR** (*visitar*) | **-ER / -IR** (*comer / subir*) | Key Clue |
|---|---|---|---|
| **yo** (I) | visit**é** | com**í** / sub**í** | Accent on final **-é** / **-í**! |
| **tú** (you) | visit**aste** | com**iste** / sub**iste** | No accent, no *-s* at the end! |
| **él / ella** | visit**ó** | com**ió** / sub**ió** | Accent on final **-ó**! |
| **nosotros/as** | visit**amos** | com**imos** / sub**imos** | Same as present for -AR & -IR! |
| **vosotros/as** | visit**asteis** | com**isteis** / sub**isteis** | *-steis* |
| **ellos / ellas** | visit**aron** | com**ieron** / sub**ieron** | *-aron* / *-ieron* |

### 2. The *-car / -gar / -zar* Spelling Shield (ONLY in **yo**!)
Before the letter **e**, Spanish **c** turns soft (like *th*) and **g** turns raspy (like *h*). To keep the original hard sound of the infinitive in the **yo** preterite form, three verb families swap spelling before **-é**:
- **-car → -qué:** *sacar fotos → **saqué** fotos* (I took photos); *practicar → **practiqué** esquí acuático*; *buscar → **busqué***.
- **-gar → -gué:** *jugar → **jugué** al voleibol* (I played volleyball); *llegar → **llegué** al aeropuerto*; *pagar → **pagué***.
- **-zar → -cé:** *cruzar → **crucé** el puente*; *empezar → **empecé***; *organizar → **organicé***.
Every other person (*tú, él, nosotros…*) stays completely regular: *sacaste, sacó, jugamos, llegaron*.

### 3. Essential Irregular Holiday Preterites (NO written accents on *fui / fue / vi / vio / hice / hizo*!)
- **ir** (to go) & **ser** (to be) are **identical twins** in the preterite: **fui, fuiste, fue, fuimos, fuisteis, fueron**. Context tells you which meaning it is: *Fui a Málaga* (I went to Málaga) vs *Fue increíble* (It was incredible)!
- **hacer** (to do/make): **hice, hiciste, hizo, hicimos, hicisteis, hicieron** (*Hice turismo*, *Hizo sol*).
- **ver** (to see): **vi, viste, vio, vimos, visteis, vieron** (*Vi muchos monumentos*).
- **tener** (to have): **tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron** (*Tuve un problema*).

### 4. High-Impact Past Holiday Reactions
- ***Lo pasé bomba / fenomenal / genial*** = I had a blast / a fantastic time.
- ***Lo pasé fatal / mal*** = I had an awful / bad time.
- ***Fue inolvidable / increíble / un desastre*** = It was unforgettable / incredible / a disaster.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preterite verb guide showing regular endings, -car -gar -zar yo spelling shield, and ir ser irregular twins">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Preterite Power Pack: Endings, Sound Shield &amp; Twins</text>

  <rect x="20" y="48" width="168" height="178" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="104" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Regular Endings</text>
  <text x="58" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">-AR</text>
  <text x="144" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">-ER / -IR</text>
  <line x1="30" y1="98" x2="178" y2="98" stroke="var(--line)" stroke-width="1"/>
  <text x="58" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">-é</text>
  <text x="144" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">-í</text>
  <text x="58" y="135" text-anchor="middle" font-size="11" fill="var(--ink)">-aste</text>
  <text x="144" y="135" text-anchor="middle" font-size="11" fill="var(--ink)">-iste</text>
  <text x="58" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">-ó</text>
  <text x="144" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">-ió</text>
  <text x="58" y="173" text-anchor="middle" font-size="11" fill="var(--ink)">-amos</text>
  <text x="144" y="173" text-anchor="middle" font-size="11" fill="var(--ink)">-imos</text>
  <text x="58" y="192" text-anchor="middle" font-size="11" fill="var(--ink)">-asteis</text>
  <text x="144" y="192" text-anchor="middle" font-size="11" fill="var(--ink)">-isteis</text>
  <text x="58" y="211" text-anchor="middle" font-size="11" fill="var(--ink)">-aron</text>
  <text x="144" y="211" text-anchor="middle" font-size="11" fill="var(--ink)">-ieron</text>

  <rect x="200" y="48" width="166" height="178" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="283" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Yo Sound Shield</text>
  <text x="283" y="88" text-anchor="middle" font-size="10" fill="var(--ink-2)">ONLY in yo (-é)!</text>
  <rect x="212" y="100" width="142" height="32" rx="8" fill="var(--surface)"/>
  <text x="283" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">-car → -qué (saqué)</text>
  <rect x="212" y="140" width="142" height="32" rx="8" fill="var(--surface)"/>
  <text x="283" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">-gar → -gué (jugué)</text>
  <rect x="212" y="180" width="142" height="32" rx="8" fill="var(--surface)"/>
  <text x="283" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">-zar → -cé (crucé)</text>

  <rect x="378" y="48" width="162" height="178" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="459" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Irregular Superstars</text>
  <text x="459" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">ir &amp; ser (twins!)</text>
  <text x="459" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">fui · fuiste · fue</text>
  <text x="459" y="126" text-anchor="middle" font-size="11" fill="var(--ink)">fuimos · fueron</text>
  <line x1="392" y1="138" x2="526" y2="138" stroke="var(--line)" stroke-width="1"/>
  <text x="459" y="156" text-anchor="middle" font-size="11" fill="var(--ink)">hacer → hice / hizo</text>
  <text x="459" y="174" text-anchor="middle" font-size="11" fill="var(--ink)">ver → vi / vio</text>
  <text x="459" y="192" text-anchor="middle" font-size="11" fill="var(--ink)">tener → tuve / tuvo</text>
  <text x="459" y="213" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">NO accents on these!</text>
</svg>`,
      diagramCaption:
        "Keep accents on regular yo (-é / -í) and él/ella (-ó / -ió), protect the sound in -car/-gar/-zar yo forms, and leave irregulars like fui, fue, vi and hice unaccented.",
      workedExamples: [
        {
          title: "Conjugating Regular & -car/-gar Preterites Together",
          problem:
            "Put the infinitives in brackets into the **yo** preterite: *El verano pasado (ir) a Tenerife, (tomar) el sol, (sacar) muchas fotos y (jugar) al tenis en la playa.*",
          steps: [
            "*ir* (yo preterite) is irregular → **fui** (no accent!).",
            "*tomar* is a regular -AR verb → drop *-ar*, add **-é** → **tomé**.",
            "*sacar* ends in **-car** → swap *c* to *qu* before *-é* → **saqué**.",
            "*jugar* ends in **-gar** → swap *g* to *gu* before *-é* → **jugué** (notice: NO stem change *u→ue* in the preterite!).",
          ],
          answer: "fui, tomé, saqué, jugué",
          yourTurn: {
            question:
              "Write the **yo** preterite of **practicar** (I practised) — remember the *-car* spelling rule!",
            answer: {
              type: "text",
              accept: ["practiqué", "yo practiqué"],
              display: "practiqué",
            },
            solution:
              "*practicar* ends in **-car**, so in the **yo** preterite *c* changes to *qu* before *-é*: **practiqué**.",
          },
        },
        {
          title: "Spotting Who Did the Action (yo vs él/ella vs nosotros)",
          problem:
            "Translate into Spanish: *My sister swam in the sea, we ate paella, and I had a fantastic time.*",
          steps: [
            "*My sister* = *ella* → regular -AR preterite of *nadar* takes **-ó** → **Mi hermana nadó en el mar**.",
            "*we ate* = *nosotros* → regular -ER preterite of *comer* takes **-imos** → **comimos paella**.",
            "*I had a fantastic time* = set preterite idiom → **lo pasé fenomenal** (or **lo pasé bomba**).",
          ],
          answer: "Mi hermana nadó en el mar, comimos paella y lo pasé fenomenal.",
        },
      ],
      keyPoints: [
        "Regular **yo** and **él/ella** preterite endings ALWAYS carry a written accent: *-é / -ó* (-AR) and *-í / -ió* (-ER/-IR).",
        "Spelling shield (**ONLY in yo**): **-car → -qué** (*saqué*), **-gar → -gué** (*jugué, llegué*), **-zar → -cé** (*crucé*).",
        "**ir** and **ser** share the same preterite (*fui, fuiste, fue, fuimos, fuisteis, fueron*) with **no accents**.",
        "Regular -AR and -IR **nosotros** forms (*visitamos, salimos*) look the same in present and preterite — time markers (*ayer, el verano pasado*) clarify the tense.",
      ],
      strategies: [
        "Accent Alarm: whenever you finish a past-tense verb for *yo* or *él/ella*, check whether it is regular (needs accent) or a strong irregular like *fui / fue / hice / hizo / vi* (no accent).",
        "Sound Test for *-car / -gar*: read *sacé* aloud — it sounds like *sathé*, not *saké*! Adding **qu / gu** rescues the hard consonant sound.",
      ],
      whyItWorks:
        "Spanish spelling is almost 100% phonetic. Because *ce* and *ge* are soft sounds in Spain-standard Spanish, writing *saqué* and *jugué* isn't a random exception — it is simply the spelling rule that keeps the hard /k/ and /g/ sounds alive before **-é**!",
      thinkDeeper:
        "Why does *jugar* become **juego** (with *ue*) in the present tense, yet **jugué** (with *u*, NOT *juegué*) in the preterite? Clue: check which syllable carries the spoken stress in *JUE-go* versus *ju-GUÉ*!",
    },

    // -----------------------------------------------------------------------
    // SECTION 3: future-holiday-plans
    // -----------------------------------------------------------------------
    {
      id: "future-holiday-plans",
      heading: "Future Holiday Plans (Immediate Future & Weather)",
      discovery: {
        problem:
          "Compare how Spanish expresses two future plans and one weather forecast:\n\n1. *El año que viene **voy a viajar** a México.*\n2. *El año que viene **viajaré** a México.*\n3. *Mañana **va a hacer** mucho calor.*\n\nLook at sentence 3: why does it say *mucho calor* instead of *muy calor*?",
        idea: "Sentence 1 uses the **immediate future** (*voy a + infinitive* = I am going to travel) and sentence 2 uses the **simple future** (*infinitive + -é* = I will travel). In sentence 3, **calor** (heat) is a **noun**, not an adjective! You can only use **muy** before adjectives (*muy caluroso*), whereas nouns with *hacer* take **mucho**: *hace mucho calor / frío / sol / viento*.",
      },
      body: `In Year 9 Spanish you have **two** clear ways to talk about future holidays — plus wishes (*me gustaría*) and three-tense weather phrases to bring your destination to life.

### 1. The Immediate Future: *ir* (present) + *a* + Infinitive
Think of it as a three-brick chain: **[conjugated *ir*]** + **a** + **[infinitive]**.
- **yo:** *voy a visitar* (I am going to visit)
- **tú:** *vas a nadar* (you are going to swim)
- **él / ella:** *va a tomar el sol* (he/she is going to sunbathe)
- **nosotros/as:** *vamos a viajar* (we are going to travel)
- **vosotros/as:** *vais a comprar recuerdos* (you all are going to buy souvenirs)
- **ellos / ellas:** *van a esquiar* (they are going to ski)

Never forget the **a** in the middle! *Voy visitar* is wrong — it MUST be **voy a visitar**.

### 2. The Simple Future (*I will…*): Full Infinitive + Endings
To say what you **will** do, attach these endings directly to the **entire infinitive** (do NOT chop off *-ar/-er/-ir*!):
**-é, -ás, -á, -emos, -éis, -án** (notice: accent on EVERY ending except **-emos**!).
- *viajar → **viajaré** a Italia* (I will travel to Italy)
- *comer → **comeremos** tapas* (we will eat tapas)
- *ir → **iré** a la playa* (I will go to the beach)
- Key irregular stems for holidays: *hacer → **haré*** (I will do/make), *tener → **tendré*** (I will have), *salir → **saldré*** (I will go out).

### 3. Wishes & Time Markers
- **Me gustaría + infinitive** (I would like to…): *Me gustaría ir a Costa Rica porque hay playas preciosas.*
- **Future markers:** *el año que viene* / *el próximo año* (next year), *el verano que viene* (next summer), *mañana* (tomorrow), *en el futuro*.

### 4. Weather Across Three Tenses (*El tiempo*)

| Weather | Preterite (Past) | Present | Immediate Future |
|---|---|---|---|
| sunny | **hizo sol** | **hace sol** | **va a hacer sol** |
| hot / cold | **hizo calor / frío** | **hace calor / frío** | **va a hacer calor / frío** |
| good / bad weather | **hizo buen / mal tiempo** | **hace buen / mal tiempo** | **va a hacer buen / mal tiempo** |
| windy | **hizo viento** | **hace viento** | **va a hacer viento** |
| rain / snow | **llovió / nevó** | **llueve / nieva** | **va a llover / va a nevar** |
| cloudy / stormy | **estuvo nublado / hubo tormenta** | **está nublado / hay tormenta** | **va a estar nublado / va a haber tormenta** |`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Future plans formula chain and three-tense Spanish weather grid">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Future Holiday Plans &amp; 3-Tense Weather Switch</text>

  <rect x="22" y="46" width="516" height="62" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="150" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">IMMEDIATE FUTURE (going to)</text>
  <text x="150" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">voy / vamos  +  a  +  viajar</text>
  <line x1="292" y1="54" x2="292" y2="100" stroke="var(--line)" stroke-width="1.5"/>
  <text x="415" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">SIMPLE FUTURE (will)</text>
  <text x="415" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">viajar + -é / -ás / -á / -emos / -án</text>

  <rect x="22" y="122" width="164" height="106" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="104" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">PAST (Preterite)</text>
  <text x="104" y="164" text-anchor="middle" font-size="11" fill="var(--ink)">Hizo mucho sol</text>
  <text x="104" y="182" text-anchor="middle" font-size="11" fill="var(--ink)">Hizo mal tiempo</text>
  <text x="104" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">Llovió / Nevó</text>
  <text x="104" y="218" text-anchor="middle" font-size="10" fill="var(--brand)">Hubo tormenta</text>

  <rect x="198" y="122" width="164" height="106" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">PRESENT</text>
  <text x="280" y="164" text-anchor="middle" font-size="11" fill="var(--ink)">Hace mucho sol</text>
  <text x="280" y="182" text-anchor="middle" font-size="11" fill="var(--ink)">Hace mal tiempo</text>
  <text x="280" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">Llueve / Nieva</text>
  <text x="280" y="218" text-anchor="middle" font-size="10" fill="var(--brand)">Está nublado</text>

  <rect x="374" y="122" width="164" height="106" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="456" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">FUTURE</text>
  <text x="456" y="164" text-anchor="middle" font-size="11" fill="var(--ink)">Va a hacer calor</text>
  <text x="456" y="182" text-anchor="middle" font-size="11" fill="var(--ink)">Hará buen tiempo</text>
  <text x="456" y="200" text-anchor="middle" font-size="11" fill="var(--ink)">Va a llover / nevar</text>
  <text x="456" y="218" text-anchor="middle" font-size="10" fill="var(--bad)">mucho calor (NOT muy!)</text>
</svg>`,
      diagramCaption:
        "Switch smoothly between immediate future (ir a + inf.) and simple future (+ -é/-ás/-á), and shift weather verbs to match your time frame.",
      workedExamples: [
        {
          title: "Combining Immediate Future with Weather & Wishes",
          problem:
            "Translate into Spanish: *Next year we are going to travel to Greece because it is going to be very sunny, and I would like to swim in the sea.*",
          steps: [
            "Time marker: *Next year* → **El año que viene** (or *El próximo año*).",
            "Immediate future (nosotros): *ir* → **vamos** + **a** + infinitive **viajar** → *vamos a viajar a Grecia*.",
            "Weather in immediate future: *it is going to be very sunny* → **va a hacer mucho sol** (use *mucho*, never *muy*!).",
            "Wish: *I would like to swim* → **me gustaría nadar en el mar**.",
          ],
          answer:
            "El año que viene vamos a viajar a Grecia porque va a hacer mucho sol y me gustaría nadar en el mar.",
          yourTurn: {
            question:
              "Write in Spanish using the **immediate future**: *Tomorrow it is going to rain.*",
            answer: {
              type: "text",
              accept: ["Mañana va a llover", "Mañana va a llover."],
              display: "Mañana va a llover.",
            },
            solution:
              "*Tomorrow* = **Mañana**; *it is going to* = **va a**; *to rain* (infinitive!) = **llover** → **Mañana va a llover**.",
          },
        },
        {
          title: "Upgrading Immediate Future to Simple Future",
          problem:
            "Rewrite *Voy a visitar Madrid y voy a hacer muchas fotos* using the **simple future** (*I will…*).",
          steps: [
            "*visitar* is regular in the simple future → keep the whole infinitive and add **-é** → **visitaré**.",
            "*hacer* has an irregular future stem **har-** → add **-é** → **haré**.",
          ],
          answer: "Visitaré Madrid y haré muchas fotos.",
        },
      ],
      keyPoints: [
        "Immediate future is always three parts: **voy/vas/va/vamos/vais/van + a + infinitive** — never drop the **a** or conjugate the second verb.",
        "Simple future adds **-é, -ás, -á, -emos, -éis, -án** to the **full infinitive** (*viajaré, comeremos*), with irregular stems like **har-** (*haré*) and **tendr-** (*tendré*).",
        "Weather with *hacer* uses **mucho** (not *muy*): *hace mucho calor / frío / sol / viento*.",
        "Shift weather tenses accurately: **hizo sol** (past), **hace sol** (present), **va a hacer sol / hará sol** (future).",
      ],
      strategies: [
        "3-Brick Check: every time you write *voy / vamos*, immediately check for **a** and an **-ar / -er / -ir** ending right after it.",
        "Noun-or-Adjective Test: *calor, frío, sol, viento* are nouns (use *mucho*); *nublado, soleado* are adjectives (use *muy*).",
      ],
      whyItWorks:
        "The Spanish simple future evolved historically from combining the infinitive with the present tense of *haber* (*viajar + he → viajaré*). That's why you keep the entire infinitive intact and why the endings mirror *he, has, ha, hemos, habéis, han*!",
      thinkDeeper:
        "Why is *va a llover* grammatically correct while *va a llueve* is impossible? Compare it to English: would you say *it is going to rains*?",
    },

    // -----------------------------------------------------------------------
    // SECTION 4: holiday-opinions-narratives
    // -----------------------------------------------------------------------
    {
      id: "holiday-opinions-narratives",
      heading: "Justified Opinions & Multi-Tense Holiday Narratives",
      discovery: {
        problem:
          "Compare two Year 9 student answers to *¿Qué tal tus vacaciones?*:\n\n- **Student 1:** *Fui a España. Nadé. Fue bien.*\n- **Student 2:** *Normalmente voy a la playa, sin embargo el verano pasado fui a los Pirineos. Lo mejor fue que hice senderismo y fue emocionante. El próximo año voy a volver porque me encanta la montaña.*\n\nCount how many **tenses**, **connectives** and **justified opinions** Student 2 uses compared with Student 1.",
        idea: "Student 1 uses only one tense (preterite), zero connectives and a bare opinion (*fue bien* — which should be *fue bueno/genial* anyway!). Student 2 weaves **all three time frames** (present *voy / encanta*, preterite *fui / hice / fue*, immediate future *voy a volver*) joined by **sin embargo**, **lo mejor fue que** and **porque**.",
      },
      body: `What separates a basic holiday paragraph from a top Year 9 narrative isn't rare vocabulary — it is **combining three time frames smoothly**, linking ideas with crisp connectives, and justifying every opinion with accurate adjective agreement.

### 1. The 3-Tense Holiday Narrative Bridge
Structure any 60–90 word holiday writing or speaking answer in three clear beats:
1. **Beat 1 — Present (Habit):** *Normalmente voy de vacaciones a… con… porque…*
2. **Beat 2 — Preterite (Specific Past Trip):** *Sin embargo, el verano pasado fui a… donde visité…, saqué fotos y comí… Lo mejor fue que… aunque lo peor fue que…*
3. **Beat 3 — Immediate / Simple Future (Next Plan):** *El año que viene voy a viajar a… / viajaré a… porque me gustaría…*

### 2. High-Value Connectives & Opinion Frames
| Function | Spanish Phrase | English Meaning |
|---|---|---|
| Contrast | **sin embargo / pero / aunque** | however / but / although |
| Addition | **además / también** | furthermore / also |
| Consequence | **por eso / así que** | therefore / so |
| Highlight | **lo mejor fue que…** | the best thing was that… |
| Lowlight | **lo peor fue que…** | the worst thing was that… |
| Personal view | **en mi opinión / creo que / diría que** | in my opinion / I think / I would say that |

### 3. Adjective Agreement Trap: *Las vacaciones* is FEMININE PLURAL!
One of the most frequent Year 9 slips is forgetting that **las vacaciones** is always feminine plural!
- *Las vacaciones **fueron fantásticas / divertidas / relajantes / inolvidables*** (NOT *fue fantástico*!).
- *El viaje **fue largo / cómodo / aburrido / caro*** (masculine singular).
- *La playa **fue preciosa / tranquila / ruidosa*** (feminine singular).
- Remember: **ser + adjective** (*fue bueno / genial / increíble*), NOT *fue bien* (*bien* is an adverb, used with *lo pasé bien*!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-tense holiday narrative bridge connecting present routine, preterite trip, and future plan">
  <rect x="8" y="8" width="544" height="234" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The 3-Tense Holiday Narrative Bridge</text>

  <rect x="20" y="54" width="154" height="122" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="97" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">1. PRESENT (Habit)</text>
  <text x="97" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">Normalmente voy</text>
  <text x="97" y="115" text-anchor="middle" font-size="11" fill="var(--ink)">a la costa con</text>
  <text x="97" y="133" text-anchor="middle" font-size="11" fill="var(--ink)">mi familia porque</text>
  <text x="97" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">me encanta nadar.</text>

  <polygon points="178,110 198,110 198,104 206,115 198,126 198,120 178,120" fill="var(--brand)"/>
  <text x="192" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">sin embargo</text>

  <rect x="208" y="54" width="156" height="122" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="286" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">2. PRETERITE (Past)</text>
  <text x="286" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">El año pasado fui</text>
  <text x="286" y="115" text-anchor="middle" font-size="11" fill="var(--ink)">a Italia y saqué fotos.</text>
  <text x="286" y="133" text-anchor="middle" font-size="11" fill="var(--ink)">Lo mejor fue que</text>
  <text x="286" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">comí mucha pizza.</text>

  <polygon points="368,110 388,110 388,104 396,115 388,126 388,120 368,120" fill="var(--brand)"/>
  <text x="382" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">el próximo año</text>

  <rect x="398" y="54" width="142" height="122" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="469" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">3. FUTURE (Plan)</text>
  <text x="469" y="97" text-anchor="middle" font-size="11" fill="var(--ink)">Voy a viajar a</text>
  <text x="469" y="115" text-anchor="middle" font-size="11" fill="var(--ink)">Japón (viajaré) y</text>
  <text x="469" y="133" text-anchor="middle" font-size="11" fill="var(--ink)">me gustaría ver</text>
  <text x="469" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Tokio y Kioto.</text>

  <rect x="20" y="190" width="520" height="38" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="280" y="214" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Check agreement: Las vacaciones fueron divertidas (fem. pl.) · El viaje fue increíble (masc. sg.)</text>
</svg>`,
      diagramCaption:
        "Link three distinct time frames with contrast connectives and balanced opinions (lo mejor fue que… / lo peor fue que…) for top-band Year 9 writing.",
      workedExamples: [
        {
          title: "Fixing Three Classic Year 9 Narrative Mistakes",
          problem:
            "Spot and correct all **three** errors in this sentence: *El verano pasado fui en Grecia, las vacaciones fue fantástico y el año que viene voy viajar a Portugal.*",
          steps: [
            "Error 1 (preposition with *ir*): *ir* + destination uses **a**, never *en* → **fui a Grecia**.",
            "Error 2 (verb & adjective agreement): *las vacaciones* is **feminine plural**, so *ser* must be **fueron** and the adjective **fantásticas** → **las vacaciones fueron fantásticas**.",
            "Error 3 (immediate future): *voy + infinitive* is missing **a** → **voy a viajar a Portugal**.",
          ],
          answer:
            "El verano pasado fui a Grecia, las vacaciones fueron fantásticas y el año que viene voy a viajar a Portugal.",
          yourTurn: {
            question:
              "Translate into Spanish with accurate agreement: *The holidays were fun.* (Use *las vacaciones* and *divertido*.)",
            answer: {
              type: "text",
              accept: [
                "Las vacaciones fueron divertidas",
                "Las vacaciones fueron divertidas.",
              ],
              display: "Las vacaciones fueron divertidas.",
            },
            solution:
              "*Las vacaciones* is feminine plural, so use **fueron** (they were) and **divertidas** (fem. pl.).",
          },
        },
        {
          title: "Adding Balance with lo mejor fue que / sin embargo",
          problem:
            "Upgrade *Hizo sol. Perdí mi maleta.* into one cohesive Year 9 sentence showing contrast.",
          steps: [
            "Introduce the highlight with **Lo mejor fue que**: *Lo mejor fue que hizo mucho sol.*",
            "Link the negative point with **sin embargo** or **aunque** + **lo peor fue que**: *sin embargo, lo peor fue que perdí mi maleta.*",
          ],
          answer: "Lo mejor fue que hizo mucho sol; sin embargo, lo peor fue que perdí mi maleta.",
        },
      ],
      keyPoints: [
        "**Las vacaciones** is feminine plural: use **fueron** and **-as** adjectives (*fueron relajantes / estupendas / divertidas*).",
        "Pair every opinion with a reason (**porque**, **ya que**) and a contrast connective (**sin embargo**, **aunque**, **por otro lado**).",
        "Use **lo mejor fue que…** and **lo peor fue que…** followed by a preterite verb to structure balanced past reflections.",
        "Always check **three time frames** in extended tasks: *normalmente* (present), *el verano pasado* (preterite), *el próximo año* (immediate or simple future).",
      ],
      strategies: [
        "T-C-O Audit: before submitting any holiday paragraph, tick off **T**enses (3!), **C**onnectives (*sin embargo, además, aunque*), and **O**pinions (with *porque*).",
        "Agree-Back Check: circle every adjective (*divertidas, largo, tranquila*) and draw a mental arrow back to its noun to confirm gender and plural endings.",
      ],
      whyItWorks:
        "In Spanish, *lo + masculine singular adjective* (*lo mejor, lo peor, lo bueno*) turns an adjective into an abstract idea (*the best thing, the worst thing*). Pairing it with **fue que** creates an instant complex clause without needing advanced tenses.",
      thinkDeeper:
        "Why does *Lo pasé bien* use **bien** whereas *El viaje fue bueno* uses **bueno**? Think about the difference between describing a **verb** (how you spent time) versus describing a **noun** (what the trip was like).",
    },
  ],

  learn: {
    flashcards: [
      { front: "ir de vacaciones al extranjero", back: "to go on holiday abroad (*a + el = al*)" },
      { front: "ir a pie", back: "to go on foot (uses **a**, NOT *en*!)" },
      { front: "en autocar / en barco", back: "by coach / by boat (no article after *en*)" },
      { front: "el verano pasado fui a…", back: "last summer I went to… (*ir* preterite, no accent)" },
      { front: "saqué muchas fotos", back: "I took lots of photos (*sacar → saqué*, -car → -qué)" },
      { front: "jugué al voleibol en la playa", back: "I played volleyball on the beach (*jugar → jugué*, -gar → -gué)" },
      { front: "tomé el sol y nadé en el mar", back: "I sunbathed and swam in the sea" },
      { front: "comí paella y bebí zumo", back: "I ate paella and drank juice (-ER preterite: *-í*)" },
      { front: "lo pasé bomba / fatal", back: "I had a blast / I had an awful time" },
      { front: "hizo mucho calor y sol", back: "it was very hot and sunny (past weather; *mucho*, not *muy*!)" },
      { front: "llovió / va a llover", back: "it rained (preterite) / it is going to rain (immediate future)" },
      { front: "el año que viene voy a viajar a…", back: "next year I am going to travel to… (*ir + a + infinitive*)" },
      { front: "visitaré / haré turismo", back: "I will visit / I will go sightseeing (simple future)" },
      { front: "me gustaría ir a la montaña", back: "I would like to go to the mountains" },
      { front: "lo mejor fue que… / lo peor fue que…", back: "the best thing was that… / the worst thing was that…" },
      { front: "las vacaciones fueron inolvidables", back: "the holidays were unforgettable (fem. pl. verb & adjective)" },
    ],
    mustKnow: [
      "Say where you usually go on holiday, how you travel and who you go with (*normalmente voy a / al / a la… en… con…*).",
      "Contract **a + el → al** (*al campo, al extranjero*) and use **a pie** (not *en pie*) for *on foot*.",
      "Conjugate regular **-AR** (*visité, nadaste, tomó, descansamos, viajaron*) and **-ER/-IR** (*comí, bebiste, salió, volvimos*) verbs in the preterite with exact accents.",
      "Apply the **yo** preterite spelling changes: **-car → -qué** (*saqué, practiqué*), **-gar → -gué** (*jugué, llegué*), **-zar → -cé** (*crucé*).",
      "Use key irregular preterites accurately without adding false accents: **fui / fue / fuimos / fueron**, **hice / hizo**, **vi / vio**, **tuve**.",
      "Form the **immediate future** (*voy / vas / va / vamos / vais / van + a + infinitive*) without dropping **a**.",
      "Form the **simple future** (*infinitive + -é, -ás, -á, -emos, -éis, -án*) plus irregular stems *haré, tendré, saldré*.",
      "Describe the weather in all three tenses (*hizo sol / hace sol / va a hacer sol*; *llovió / llueve / va a llover*) using **mucho** (not *muy*) with *calor, frío, sol, viento*.",
      "Express wishes with **me gustaría + infinitive** and contrast ideas with **sin embargo, además, aunque, por eso**.",
      "Make adjectives and verbs agree with **las vacaciones** (feminine plural: *fueron divertidas / estupendas*).",
    ],
    misconceptions: [
      { wrong: "Voy a el campo en pie.", right: "Voy **al** campo **a** pie. (*a + el* always becomes *al*, and *on foot* is *a pie*.)" },
      { wrong: "El verano pasado sacé fotos y jugé al tenis.", right: "El verano pasado **saqué** fotos y **jugué** al tenis. (*-car → -qué*, *-gar → -gué* in *yo* preterite.)" },
      { wrong: "Fui a España en verano y hace muy calor.", right: "Fui a España en verano e **hizo mucho calor**. (Use past weather *hizo* and *mucho*, not *muy*, before noun *calor*.)" },
      { wrong: "El próximo año voy visitar a Italia.", right: "El próximo año **voy a visitar** Italia. (Never drop **a** after *voy*, and don't put *a* before a country after *visitar*.)" },
      { wrong: "Las vacaciones fue muy divertido y fue bien.", right: "Las vacaciones **fueron muy divertidas** y **lo pasé bien**. (*Vacaciones* is feminine plural; use *bueno/divertido* with *ser*, *bien* with *lo pasé*.)" },
      { wrong: "Mi hermana tomo el sol ayer.", right: "Mi hermana **tomó** el sol ayer. (Without the accent, *tomo* means *I take* in the present tense!)" },
      { wrong: "El verano pasado fuí a Francia y ví la Torre Eiffel.", right: "El verano pasado **fui** a Francia y **vi** la Torre Eiffel. (Monosyllables *fui, fue, vi, vio* NEVER take a written accent.)" },
    ],
    examMistakes: [
      "Dropping the accent on *yo* and *él/ella* regular preterite verbs (*nadé → nade*, *habló → hablo*), accidentally flipping tense and person.",
      "Forgetting the **a** in the immediate future (*vamos viajar* instead of *vamos a viajar*).",
      "Conjugating the second verb after *voy a* or *me gustaría* (*voy a voy*, *me gustaría visito* instead of *voy a ir*, *me gustaría visitar*).",
      "Writing *en* instead of *a* after *ir* (*fui en España* instead of *fui a España*).",
      "Using *muy* with weather nouns (*hace muy sol / muy calor*) instead of *mucho* (*hace mucho sol / mucho calor*).",
      "Mixing up *ir* and *ser* preterite persons (*fui* = I went/was vs *fue* = he/she/it went/was).",
      "Capitalising months and seasons in Spanish (*en Agosto*, *en Verano* instead of *en agosto*, *en verano*).",
    ],
    mnemonics: [
      {
        topic: "Yo Preterite Spelling Changes",
        device: "CAR-GAR-ZAR → QUÉ-GUÉ-CÉ",
        explanation:
          "Only in the **yo** preterite: *sacar → saqué*, *jugar → jugué*, *cruzar → crucé* — say the rhyme aloud to protect the hard sound!",
      },
      {
        topic: "Immediate Future Chain",
        device: "V-A-I (Voy + A + Infinitive)",
        explanation:
          "Every immediate future needs all three links: **V**erb *ir* (*voy/vamos*) + **A** + **I**nfinitive (*viajar/nadar*). Drop one link and the chain breaks!",
      },
      {
        topic: "Multi-Tense Holiday Paragraph",
        device: "N → P → F (Normalmente · Pasado · Futuro)",
        explanation:
          "Tick off all three letters in every Year 9 holiday paragraph: **N**ormalmente (present), el año **P**asado (preterite), and el **F**uturo (voy a + inf. / -é).",
      },
    ],
    realWorld: [
      {
        title: "Spain's High-Speed AVE Trains",
        detail:
          "Spain operates Europe's longest high-speed rail network (*el tren de alta velocidad AVE*), taking travellers from Madrid to Barcelona or Seville in about 2.5 hours — making *viajar en tren* a popular eco-friendly alternative to *en avión*.",
        emoji: "🚄",
      },
      {
        title: "El Puente & Semana Santa",
        detail:
          "In Spain, when a public holiday falls on a Tuesday or Thursday, families often take the day in between to create *un puente* (a long-weekend bridge) and head *a la costa* or *al pueblo*.",
        emoji: "🌉",
      },
      {
        title: "La Costa del Sol & Las Islas Baleares",
        detail:
          "Regions like Andalucía (*la Costa del Sol*), Mallorca, Menorca and Tenerife receive over 300 days of sunshine a year — the real reason *tomar el sol* and *hace mucho calor* dominate Spanish holiday postcards.",
        emoji: "☀️",
      },
      {
        title: "El Camino de Santiago",
        detail:
          "Hundreds of thousands of walkers travel *a pie* (or *en bicicleta*) every year along northern Spain's historic pilgrimage routes to Santiago de Compostela, staying in hostels along the way.",
        emoji: "🥾",
      },
    ],
    videos: [
      {
        title: "Talking About Holidays in Spanish (Present, Preterite & Future)",
        channel: "YouTube Search — KS3 / Year 9 Spanish Holidays",
        url: "https://www.youtube.com/results?search_query=spanish+holidays+present+preterite+near+future+ks3",
      },
      {
        title: "Spanish Preterite Tense & -car -gar -zar Verbs Explained",
        channel: "YouTube Search — Spanish Preterite -car -gar -zar",
        url: "https://www.youtube.com/results?search_query=spanish+preterite+tense+car+gar+zar+irregular+fui",
      },
      {
        title: "Immediate Future (Ir a + Infinitive) vs Simple Future in Spanish",
        channel: "YouTube Search — Spanish Near Future vs Simple Future",
        url: "https://www.youtube.com/results?search_query=spanish+ir+a+infinitive+vs+simple+future+tense",
      },
      {
        title: "Spanish Weather Phrases Across Three Tenses (Hace / Hizo / Va a hacer)",
        channel: "YouTube Search — Spanish Weather Past Present Future",
        url: "https://www.youtube.com/results?search_query=spanish+weather+phrases+past+present+future+hizo+sol",
      },
    ],
    formulas: [
      {
        name: "Destination Contraction",
        formula: "ir + a + el = ir al (al campo, al extranjero)",
        note: "Feminine stays *a la* (*a la costa*); countries usually take bare *a* (*a España*).",
      },
      {
        name: "Transport Rule",
        formula: "en + vehicle (no article)  |  a pie / a caballo",
        note: "*en avión, en tren, en barco*, NEVER *en pie*.",
      },
      {
        name: "Regular -AR Preterite",
        formula: "stem + -é, -aste, -ó, -amos, -asteis, -aron",
        note: "Accents on *yo (-é)* and *él/ella (-ó)* only.",
      },
      {
        name: "Regular -ER / -IR Preterite",
        formula: "stem + -í, -iste, -ió, -imos, -isteis, -ieron",
        note: "-ER and -IR share identical preterite endings.",
      },
      {
        name: "-car / -gar / -zar Preterite Shield",
        formula: "yo: -car → -qué | -gar → -gué | -zar → -cé",
        note: "Applies ONLY to the *yo* form (*saqué, jugué, llegué, crucé*).",
      },
      {
        name: "Ir / Ser Preterite Twins",
        formula: "fui, fuiste, fue, fuimos, fuisteis, fueron",
        note: "Zero written accents; context separates *went* from *was/were*.",
      },
      {
        name: "Immediate Future Frame",
        formula: "voy / vas / va / vamos / vais / van + a + infinitive",
        note: "Always keep **a** and leave the second verb in the infinitive.",
      },
      {
        name: "Simple Future Frame",
        formula: "full infinitive + -é, -ás, -á, -emos, -éis, -án",
        note: "Accents on every ending except *-emos*; key irregulars: *har-, tendr-, saldr-*.",
      },
      {
        name: "3-Tense Weather Switch",
        formula: "hizo / hace / va a hacer + mucho calor / frío / sol",
        note: "Use *mucho* (never *muy*) with weather nouns; *llovió / llueve / va a llover*.",
      },
      {
        name: "Balanced Highlight Frame",
        formula: "Lo mejor fue que + preterite, sin embargo lo peor fue que + preterite",
        note: "Instant top-band structure for Year 9 holiday writing and speaking.",
      },
    ],
  },
};
