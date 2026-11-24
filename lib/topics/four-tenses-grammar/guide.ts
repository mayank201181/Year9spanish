import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "four-tenses-grammar",
  title: "Four-Tense Grammar Mastery (Los cuatro tiempos)",
  strand: "Grammar Mastery",
  icon: "⚡",
  summary: "Master Year 9's four core tenses — Present, Preterite, Immediate Future, and Simple Future — from boot stem-changers and -car/-gar/-zar to irregular stems and four-tense exam paragraphs.",
  intro:
    "Every top-band Tanglin Year 9 Spanish paper — whether about holidays, healthy living, fashion, or cinema — rests on one engine: controlling Spanish's **four core tenses** accurately across all persons. In this mastery guide you will discover **why** Spanish boot stem-changers leave *nosotros/vosotros* untouched, **why** *-car/-gar/-zar* spelling changes exist, how the **Immediate Future** and **Simple Future** differ, and how to weave all four tenses smoothly into a single high-scoring paragraph.",
  guide: [
    // =========================================================================
    // SECTION 1: present-tense-mastery
    // =========================================================================
    {
      id: "present-tense-mastery",
      heading: "Present Tense: Regular, Stem-Changing & Irregular Verbs",
      discovery: {
        problem:
          "Look at the six present-tense forms of **preferir** (*to prefer*) arranged in a 2-column verb chart:\n\n" +
          "| Singular | Plural |\n|---|---|\n| *yo* **prefiero** | *nosotros* **preferimos** |\n| *tú* **prefieres** | *vosotros* **preferís** |\n| *él/ella* **prefiere** | *ellos/ellas* **prefieren** |\n\n" +
          "Draw a loop around the four forms where **e → ie**. What shape do they make — and **why** do *nosotros* and *vosotros* stay **prefer-**?",
        idea:
          "The four stem-changing forms (*yo, tú, él, ellos*) trace the exact shape of a **boot**! Why? Say each word aloud: in *pre-**FIE**-ro, pre-**FIE**-res, pre-**FIE**-re, pre-**FIE**-ren*, the spoken stress falls right on the stem vowel, splitting it into a diphthong (*ie*). In *pre-fe-**RI**-mos* and *pre-fe-**RÍS***, the stress shifts onto the **ending**, so the unstressed stem vowel stays regular (**e**)!",
      },
      body:
        "The **Present Tense** (*el presente*) describes habits, routines, opinions, facts, and ongoing durations with **desde hace** (*Estudio español desde hace tres años* = I have been studying Spanish for three years).\n\n" +
        "### 1. Regular endings (-AR, -ER, -IR)\n" +
        "Drop *-ar / -er / -ir* from the infinitive and add the endings below. Notice that **-ER** and **-IR** are identical everywhere EXCEPT *nosotros* (*-emos* vs *-imos*) and *vosotros* (*-éis* vs *-ís*):\n\n" +
        "| Person | *-AR* (*hablar*) | *-ER* (*comer*) | *-IR* (*vivir*) |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | habl**o** | com**o** | viv**o** |\n" +
        "| *tú* | habl**as** | com**es** | viv**es** |\n" +
        "| *él / ella / usted* | habl**a** | com**e** | viv**e** |\n" +
        "| *nosotros / as* | habl**amos** | com**emos** | viv**imos** |\n" +
        "| *vosotros / as* | habl**áis** | com**éis** | viv**ís** |\n" +
        "| *ellos / ellas / ustedes* | habl**an** | com**en** | viv**en** |\n\n" +
        "### 2. The Four Boot Stem-Change Families\n" +
        "Change the stressed stem vowel in *yo, tú, él/ella, ellos/ellas* — NEVER in *nosotros* or *vosotros*:\n" +
        "- **e → ie**: *querer* (*quiero, quieres, quiere, queremos, queréis, quieren*), *preferir* (*prefiero*), *empezar* (*empiezo*), *pensar* (*pienso*), *recomendar* (*recomiendo*)\n" +
        "- **o → ue**: *poder* (*puedo, podemos*), *dormir* (*duermo, dormimos*), *volver* (*vuelvo*), *almorzar* (*almuerzo*), *doler* (*me duele / duelen*)\n" +
        "- **u → ue**: *jugar* (*juego, juegas, juega, jugamos, jugáis, juegan*) — the ONLY *u → ue* verb!\n" +
        "- **e → i**: *pedir* (*pido, pides, pide, pedimos, pedís, piden*), *servir* (*sirvo*), *repetir* (*repito*), *vestirse* (*me visto*)\n\n" +
        "### 3. Essential Irregular & Yo-Go Verbs\n" +
        "| Verb | *yo* | *tú* | *él/ella* | *nosotros* | *vosotros* | *ellos* |\n" +
        "|---|---|---|---|---|---|---|\n" +
        "| **ser** (be — traits) | **soy** | eres | es | somos | sois | son |\n" +
        "| **estar** (be — state/place) | **estoy** | estás | está | estamos | estáis | están |\n" +
        "| **ir** (to go) | **voy** | vas | va | vamos | vais | van |\n" +
        "| **tener** (to have) | **tengo** | tienes | tiene | tenemos | tenéis | tienen |\n" +
        "| **hacer** (to do/make) | **hago** | haces | hace | hacemos | hacéis | hacen |\n" +
        "| **salir** (to go out) | **salgo** | sales | sale | salimos | salís | salen |\n" +
        "| **poner** (to put) | **pongo** | pones | pone | ponemos | ponéis | ponen |\n" +
        "| **ver** (to see/watch) | **veo** | ves | ve | vemos | veis | ven |\n\n" +
        "### 4. Present-Tense Time Markers\n" +
        "*normalmente* (normally), *todos los días* (every day), *siempre* (always), *a menudo* (often), *los fines de semana* (at weekends), *ahora* (now), and **present tense + desde hace + duration** (*Juego al tenis desde hace cuatro años* = I have played tennis for four years).",
      diagram:
        '<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish boot verb diagram showing stem changes inside yo, tu, el, ellos and no change in nosotros and vosotros"><rect x="4" y="4" width="552" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The Present-Tense Boot Rule (querer: e → ie)</text><path d="M36,48 L266,48 L266,150 L520,150 L520,210 L36,210 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" stroke-linejoin="round"/><rect x="280" y="48" width="240" height="90" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8" stroke-dasharray="5 3"/><text x="151" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">yo quiero</text><text x="151" y="114" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">tú quieres</text><text x="151" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">él / ella quiere</text><text x="398" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">ellos / ellas quieren</text><text x="400" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">OUTSIDE THE BOOT (NO CHANGE!)</text><text x="400" y="99" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">nosotros queremos</text><text x="400" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">vosotros queréis</text><text x="151" y="142" text-anchor="middle" font-size="10" fill="var(--ink-2)">Stress hits stem → e splits to ie</text></svg>',
      diagramCaption: "Inside the boot (yo, tú, él, ellos), the stressed vowel shifts (e→ie, o→ue, u→ue, e→i). Outside the boot (nosotros, vosotros), the stem stays untouched!",
      whyItWorks:
        "Every Spanish verb ending encodes **who** does the action, which is why subject pronouns (*yo, tú, nosotros*) are optional. In boot verbs, the stem changes ONLY when spoken stress falls on the stem syllable; in *nosotros* and *vosotros*, stress moves onto the verb ending, preserving the original vowel.",
      keyPoints: [
        "Learn regular endings cold: **-AR** (*-o, -as, -a, -amos, -áis, -an*), **-ER** (*-o, -es, -e, -emos, -éis, -en*), **-IR** (*-o, -es, -e, -imos, -ís, -en*).",
        "Never apply a boot stem change to **nosotros** or **vosotros**: write *jugamos, podemos, queremos, dormimos, pedimos* (NEVER *✗ juegamos* or *✗ puedemos*!).",
        "Memorise the **yo-go** family (*tengo, hago, salgo, pongo, vengo, digo*) — the *-g-* appears ONLY in the *yo* form of the present indicative.",
        "Use **present tense + desde hace** to express *have been doing for [time]*: *Vivo en Singapur desde hace dos años*.",
        "Distinguish **ser** (*soy, eres, es* — identity/traits) from **estar** (*estoy, estás, está* — location/temporary states); notice accents on *estás, está, estáis, están*!",
      ],
      strategies: [
        "**Boot Check**: Before writing a stem-changer, ask *Is it nosotros or vosotros?* If yes → keep the infinitive vowel!",
        "**Stress Test for *desde hace***: If an English sentence says *I have lived here for 3 years* (and still live here!), use Spanish **Present tense** + *desde hace*.",
      ],
      thinkDeeper:
        "Why do *tener* (*tengo / tienes*) and *venir* (*vengo / vienes*) look like a hybrid of TWO patterns? Spot which form is *yo-go* and which three forms are *e→ie* boot stem-changers!",
      workedExamples: [
        {
          title: "Conjugating boot stem-changers inside vs outside the boot",
          problem: "Complete both verbs in the present tense: «Normally I play (*jugar*) football and we sleep (*dormir*) eight hours.»",
          steps: [
            "*jugar* (*u→ue*) for **yo**: *yo* is INSIDE the boot → change *u → ue* and add *-o* → **juego**.",
            "*dormir* (*o→ue*) for **nosotros**: *nosotros* is OUTSIDE the boot → keep *dorm-* unchanged and add *-imos* → **dormimos**.",
          ],
          answer: "Normalmente juego al fútbol y dormimos ocho horas.",
          yourTurn: {
            question: "Write the **nosotros** present tense of *poder* (to be able to): «___ estudiar juntos.»",
            answer: {
              type: "text",
              accept: ["podemos", "Podemos", "nosotros podemos", "nosotras podemos"],
              display: "podemos",
            },
            solution: "*nosotros* sits outside the *o→ue* boot, so *poder* keeps *pod-* + *-emos* → **podemos** (never *puedemos*!).",
          },
        },
        {
          title: "Using yo-go verbs and desde hace",
          problem: "Translate into Spanish: \"I go out (*salir*) with my friends at weekends and I have studied (*estudiar*) Spanish for three years.\"",
          steps: [
            "*salir* is a *yo-go* verb → *yo* = **salgo** (*Salgo con mis amigos los fines de semana*).",
            "Ongoing duration 'have studied for 3 years' uses **present tense** (*estudio*) + **desde hace tres años**.",
          ],
          answer: "Salgo con mis amigos los fines de semana y estudio español desde hace tres años.",
          yourTurn: {
            question: "Write the **yo** present tense of *hacer* (to do/make): «Todos los días ___ deporte.»",
            answer: {
              type: "text",
              accept: ["hago", "yo hago"],
              display: "hago",
            },
            solution: "*hacer* is a *yo-go* verb: drop *-cer* and add *-go* → **hago**.",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 2: preterite-tense-mastery
    // =========================================================================
    {
      id: "preterite-tense-mastery",
      heading: "Preterite Tense: Regular, Spelling-Change & Key Irregulars",
      discovery: {
        problem:
          "Compare these three *yo* preterite verbs with their infinitives:\n\n" +
          "- *sacar* → **saqué** (NOT *✗ sacé*)\n" +
          "- *llegar* → **llegué** (NOT *✗ llegé*)\n" +
          "- *empezar* → **empecé** (NOT *✗ empezé*)\n\n" +
          "Why does Spanish ONLY change the spelling in the **yo** form (*-é*), and NOT in *tú* (*sacaste, llegaste, empezaste*) or *él* (*sacó, llegó, empezó*)?",
        idea:
          "Try pronouncing *sacé* and *llegé* using Spanish phonics! Before **e**, the letter *c* turns soft (*th/s*) and *g* turns harsh (*h*), destroying the hard *k* and *g* sound of *sacar* and *llegar*. Writing **qu** and **gu** preserves the exact original consonant sound — and since **yo** (*-é*) is the ONLY preterite ending starting with **e**, the spelling change happens ONLY in *yo*! (And Spanish never writes *ze*, so *z → c* in *empecé*.)",
      },
      body:
        "The **Preterite Tense** (*el pretérito indefinido*) narrates **completed, one-off actions** in the past (*ayer, anoche, el sábado pasado, el año pasado, hace dos días*).\n\n" +
        "### 1. Regular Preterite Endings\n" +
        "Notice that **-ER** and **-IR** share 100% identical preterite endings — and watch the **accents** on *yo* (**-é / -í**) and *él/ella* (**-ó / -ió**)!\n\n" +
        "| Person | *-AR* (*hablar*) | *-ER* (*comer*) | *-IR* (*vivir*) |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | habl**é** | com**í** | viv**í** |\n" +
        "| *tú* | habl**aste** | com**iste** | viv**iste** |\n" +
        "| *él / ella / usted* | habl**ó** | com**ió** | viv**ió** |\n" +
        "| *nosotros / as* | habl**amos** | com**imos** | viv**imos** |\n" +
        "| *vosotros / as* | habl**asteis** | com**isteis** | viv**isteis** |\n" +
        "| *ellos / ellas / ustedes* | habl**aron** | com**ieron** | viv**ieron** |\n\n" +
        "Notice a huge trap: *hablo* (NO accent) = **I** speak (present), whereas *habl**ó*** (WITH accent) = **he/she** spoke (preterite)!\n\n" +
        "### 2. The *-car / -gar / -zar* Spelling Changes (yo form ONLY!)\n" +
        "- **-car → -qué**: *sacar → saqué*, *tocar → toqué*, *buscar → busqué*, *practicar → practiqué*\n" +
        "- **-gar → -gué**: *jugar → jugué*, *llegar → llegué*, *pagar → pagué*, *navegar → navegué*\n" +
        "- **-zar → -cé**: *empezar → empecé*, *almorzar → almorcé*, *organizar → organicé*, *cruzar → crucé*\n\n" +
        "### 3. High-Frequency Irregular Preterites (ZERO accents!)\n" +
        "None of these irregular preterites carry **any written accent** — memorise them cold:\n\n" +
        "| Verb | *yo* | *tú* | *él/ella* | *nosotros* | *vosotros* | *ellos* |\n" +
        "|---|---|---|---|---|---|---|\n" +
        "| **ir / ser** (went / was) | **fui** | fuiste | **fue** | fuimos | fuisteis | fueron |\n" +
        "| **tener** (had) | **tuve** | tuviste | **tuvo** | tuvimos | tuvisteis | tuvieron |\n" +
        "| **hacer** (did/made) | **hice** | hiciste | **hizo** | hicimos | hicisteis | hicieron |\n" +
        "| **estar** (was — state/place) | **estuve** | estuviste | **estuvo** | estuvimos | estuvisteis | estuvieron |\n" +
        "| **ver** (saw/watched) | **vi** | viste | **vio** | vimos | visteis | vieron |\n" +
        "| **dar** (gave) | **di** | diste | **dio** | dimos | disteis | dieron |\n" +
        "| **poder / poner / querer** | **pude / puse / quise** | -iste | **pudo / puso / quiso** | -imos | -isteis | -ieron |\n\n" +
        "Look closely at *hacer*: in *él/ella*, **c → z** (**hizo**, NOT *✗ hico*) to keep the soft *th/s* sound before *o*!",
      diagram:
        '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preterite tense summary chart showing regular accents, car-gar-zar yo changes, and accent-free strong irregular stems"><rect x="4" y="4" width="552" height="232" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Preterite Survival Map: Regulars vs -car/-gar/-zar vs Irregulars</text><rect x="16" y="46" width="166" height="174" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="99" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">1. REGULAR ACCENTS</text><text x="99" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">-AR: -é, -aste, -ó</text><text x="99" y="106" text-anchor="middle" font-size="11" fill="var(--ink)">-ER/-IR: -í, -iste, -ió</text><text x="99" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">hablo ≠ habló</text><text x="99" y="150" text-anchor="middle" font-size="10" fill="var(--ink-2)">I speak vs he/she spoke</text><text x="99" y="176" text-anchor="middle" font-size="11" fill="var(--ink)">nosotros -amos / -imos</text><text x="99" y="194" text-anchor="middle" font-size="10" fill="var(--ink-2)">Context shows past!</text><rect x="196" y="46" width="168" height="174" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="280" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">2. YO SPELLING ONLY</text><text x="280" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">-car → -qué</text><text x="280" y="109" text-anchor="middle" font-size="10" fill="var(--ink-2)">saqué · practiqué</text><text x="280" y="136" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">-gar → -gué</text><text x="280" y="153" text-anchor="middle" font-size="10" fill="var(--ink-2)">jugué · llegué · pagué</text><text x="280" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">-zar → -cé</text><text x="280" y="197" text-anchor="middle" font-size="10" fill="var(--ink-2)">empecé · almorcé</text><rect x="378" y="46" width="166" height="174" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="461" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">3. ZERO-ACCENT KINGS</text><text x="461" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">ir / ser → fui · fue</text><text x="461" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">tener → tuve · tuvo</text><text x="461" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">hacer → hice · hizo</text><text x="461" y="150" text-anchor="middle" font-size="11" fill="var(--ink)">estar → estuve · estuvo</text><text x="461" y="170" text-anchor="middle" font-size="11" fill="var(--ink)">ver / dar → vi · di</text><text x="461" y="196" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">NO accents on ANY form!</text></svg>',
      diagramCaption: "Regular preterites carry vital accents on yo and él/ella; -car/-gar/-zar protect pronunciation in yo only; strong irregulars take zero accents.",
      whyItWorks:
        "Strong irregular preterites (*tuve, estuve, hice, pude, puse, quise*) put spoken stress on the **stem** rather than the final syllable (*TU-ve*, *HI-ce*), so by Spanish stress rules they need **no written accent** on *-e* or *-o* — unlike regular *habl**é*** and *habl**ó***!",
      keyPoints: [
        "Always write the accent on regular preterite **yo** (*hablé, comí, viví*) and **él/ella** (*habló, comió, vivió*) — missing an accent turns *habló* into present *hablo*!",
        "Apply **-car → -qué**, **-gar → -gué**, and **-zar → -cé** in the **yo** preterite ONLY (*jugué*, but *jugaste, jugó, jugamos*).",
        "Both **ir** (went) and **ser** (was) share the exact same preterite: *fui, fuiste, fue, fuimos, fuisteis, fueron* — context tells you which verb it is (*fui a Madrid* vs *fue genial*).",
        "Strong irregulars (*tuve, estuve, hice/hizo, pude, quise, puse, vine, dije*) take **-e, -iste, -o, -imos, -isteis, -ieron** with **ZERO accents**.",
        "Remember monosyllables **fui, fue, vi, vio, di, dio** NEVER carry a written accent.",
      ],
      strategies: [
        "**Accent-Check Pair**: Regular preterite (*yo/él*) = **ACCENT** (*hablé, comió*); Strong irregular (*tuve, hizo, fui, vi, di*) = **NO ACCENT**!",
        "**Sound Guard**: If an *-ar* infinitive ends in *-car, -gar,* or *-zar*, trigger your *yo* preterite alarm immediately (*-qué, -gué, -cé*).",
      ],
      thinkDeeper:
        "Why is *hablamos* ambiguous on its own (*we speak* OR *we spoke*), and how do Spanish writers make the meaning 100% clear immediately?",
      workedExamples: [
        {
          title: "Mastering -gar and irregular preterites in one sentence",
          problem: "Put all three verbs into the preterite (*yo*): «Ayer ___ (*jugar*) al baloncesto, ___ (*hacer*) mis deberes y ___ (*ir*) al cine.»",
          steps: [
            "*jugar* ends in **-gar** → *yo* preterite changes *g → gu* + *-é* → **jugué** (notice NO *u→ue* change in the preterite!).",
            "*hacer* is a strong irregular (*yo* = **hice**, zero accents).",
            "*ir* is completely irregular (*yo* = **fui**, zero accents).",
          ],
          answer: "Ayer jugué al baloncesto, hice mis deberes y fui al cine.",
          yourTurn: {
            question: "Put *sacar* into the **yo** preterite: «El verano pasado ___ muchas fotos en España.»",
            answer: {
              type: "text",
              accept: ["saqué", "yo saqué"],
              display: "saqué",
            },
            solution: "*-car* changes to **-qué** in the *yo* preterite to keep the hard *k* sound → **saqué**.",
          },
        },
        {
          title: "Spotting él/ella irregular hizo and tuvo",
          problem: "Translate into Spanish: \"Last Saturday my sister had (*tener*) a party and made (*hacer*) a cake.\"",
          steps: [
            "Subject is *mi hermana* (*ella*) + past marker *El sábado pasado* → preterite.",
            "*tener* (*ella*) = **tuvo** (no accent!).",
            "*hacer* (*ella*) = **hizo** (*c → z* before *o*, no accent!).",
          ],
          answer: "El sábado pasado mi hermana tuvo una fiesta e hizo un pastel.",
          yourTurn: {
            question: "Write the **él/ella** preterite of *hacer*: «Ayer mi hermano ___ un pastel delicioso.»",
            answer: {
              type: "text",
              accept: ["hizo", "él hizo", "ella hizo"],
              display: "hizo",
            },
            solution: "In *él/ella* preterite of *hacer*, *c* changes to *z* before *o* → **hizo** (no accent!).",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 3: immediate-vs-simple-future
    // =========================================================================
    {
      id: "immediate-vs-simple-future",
      heading: "Immediate Future (Ir a + Inf.) vs Simple Future (-é, -ás, -á)",
      discovery: {
        problem:
          "Look at the two ways to talk about the future in Spanish:\n\n" +
          "1. **Immediate Future**: *El sábado **voy a viajar** a Valencia.* (I am going to travel to Valencia.)\n" +
          "2. **Simple Future**: *El año que viene **viajaré** a Valencia.* (Next year I will travel to Valencia.)\n\n" +
          "Look closely at **viajaré** (*viajar* + *-é*). Compare that with how you formed the present (*viajo*) and preterite (*viajé*). What stayed **completely intact** in the Simple Future?",
        idea:
          "In the Present and Preterite you chop off *-ar / -er / -ir* first. In the **Simple Future** you DO NOT chop off the ending! You glue **-é, -ás, -á, -emos, -éis, -án** directly onto the **ENTIRE infinitive** (*viajaré, comerás, vivirá*) — the exact same 6 endings for *-AR, -ER,* and *-IR* verbs! And notice: **5 out of 6 endings carry a written accent** (every ending EXCEPT *-emos*)!",
      },
      body:
        "In Year 9 Spanish, you master **both** ways of expressing the future — using the **Immediate Future** for definite near-term plans (*going to…*) and the **Simple Future** for predictions, resolutions, and long-term ambitions (*will…*).\n\n" +
        "### 1. Immediate Future (*el futuro próximo*): **ir (present) + a + infinitive**\n" +
        "| Person | Form of *ir* | + **a** + infinitive | Meaning |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | **voy** | **a** estudiar | I am going to study |\n" +
        "| *tú* | **vas** | **a** comer | you are going to eat |\n" +
        "| *él / ella / usted* | **va** | **a** vivir | he/she is going to live |\n" +
        "| *nosotros / as* | **vamos** | **a** viajar | we are going to travel |\n" +
        "| *vosotros / as* | **vais** | **a** salir | you all are going to go out |\n" +
        "| *ellos / ellas / ustedes* | **van** | **a** ver | they are going to watch |\n\n" +
        "NEVER drop the **a** (*✗ voy viajar* is always wrong — write **voy a viajar**!).\n\n" +
        "### 2. Simple Future (*el futuro simple*): **FULL infinitive + -é, -ás, -á, -emos, -éis, -án**\n" +
        "One single set of endings works for ALL *-AR, -ER,* and *-IR* verbs!\n\n" +
        "| Person | Ending | *hablar* | *comer* | *vivir* |\n" +
        "|---|---|---|---|---|\n" +
        "| *yo* | **-é** | hablar**é** | comer**é** | vivir**é** |\n" +
        "| *tú* | **-ás** | hablar**ás** | comer**ás** | vivir**ás** |\n" +
        "| *él / ella / usted* | **-á** | hablar**á** | comer**á** | vivir**á** |\n" +
        "| *nosotros / as* | **-emos** *(NO accent!)* | hablar**emos** | comer**emos** | vivir**emos** |\n" +
        "| *vosotros / as* | **-éis** | hablar**éis** | comer**éis** | vivir**éis** |\n" +
        "| *ellos / ellas / ustedes* | **-án** | hablar**án** | comer**án** | vivir**án** |\n\n" +
        "### 3. The Key Irregular Simple Future Stems (Same 6 Endings!)\n" +
        "Only the **stem** changes — the endings **-é, -ás, -á, -emos, -éis, -án** stay 100% identical!\n\n" +
        "| Pattern | Infinitive | Irregular Future Stem | *yo* example | *nosotros* example |\n" +
        "|---|---|---|---|---|\n" +
        "| **Drop the *e*** | *poder* | **podr-** | podr**é** | podr**emos** |\n" +
        "| | *querer* | **querr-** | querr**é** | querr**emos** |\n" +
        "| | *saber* | **sabr-** | sabr**é** | sabr**emos** |\n" +
        "| | *haber* | **habr-** | *habr**á*** (there will be) | — |\n" +
        "| **Swap vowel for *d*** | *tener* | **tendr-** | tendr**é** | tendr**emos** |\n" +
        "| | *salir* | **saldr-** | saldr**é** | saldr**emos** |\n" +
        "| | *venir* | **vendr-** | vendr**é** | vendr**emos** |\n" +
        "| | *poner* | **pondr-** | pondr**é** | pondr**emos** |\n" +
        "| **Shorten stem** | *hacer* | **har-** | har**é** | har**emos** |\n" +
        "| | *decir* | **dir-** | dir**é** | dir**emos** |",
      diagram:
        '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram of Immediate Future ir a plus infinitive versus Simple Future endings and irregular stems"><rect x="4" y="4" width="552" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Two Futures Compared: Near Plans vs Simple Future</text><rect x="18" y="46" width="248" height="178" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="142" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">IMMEDIATE FUTURE ("going to")</text><text x="142" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">ir (present) + a + infinitive</text><text x="142" y="116" text-anchor="middle" font-size="11" fill="var(--ink)">voy / vas / va / vamos / vais / van</text><text x="142" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">+ a + hacer / tener / salir</text><text x="142" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">Mañana voy a hacer deporte.</text><text x="142" y="182" text-anchor="middle" font-size="10" fill="var(--good)">Zero irregular infinitives!</text><text x="142" y="202" text-anchor="middle" font-size="10" fill="var(--bad)">Never drop «a» (✗ voy hacer)</text><rect x="294" y="46" width="248" height="178" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="418" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SIMPLE FUTURE ("will")</text><text x="418" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">FULL inf. + -é, -ás, -á, -emos, -éis, -án</text><text x="418" y="112" text-anchor="middle" font-size="10" fill="var(--bad)">Accents on EVERY ending except -emos!</text><text x="418" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Key Irregular Stems:</text><text x="418" y="154" text-anchor="middle" font-size="11" fill="var(--ink)">tendr- · har- · podr- · saldr-</text><text x="418" y="172" text-anchor="middle" font-size="11" fill="var(--ink)">querr- · sabr- · vendr- · habr-</text><text x="418" y="196" text-anchor="middle" font-size="11" fill="var(--ink)">El año que viene haré más deporte.</text><text x="418" y="214" text-anchor="middle" font-size="10" fill="var(--ink-2)">habrá = there will be</text></svg>',
      diagramCaption: "Immediate future uses present ir + a + infinitive; Simple future attaches -é/-ás/-á/-emos/-éis/-án directly onto the full infinitive (or irregular stem).",
      whyItWorks:
        "Look at the Simple Future endings (**-é, -ás, -á, -emos, -éis, -án**) next to the present tense of *haber* (*he, has, ha, hemos, habéis, han*)! Centuries ago, Spanish fused *infinitive + haber* (*hablar + he → hablaré*, literally \"I have to speak\") into one sleek word — which is why the FULL infinitive stays intact and every stressed ending except *-emos* takes an accent!",
      keyPoints: [
        "Immediate future = **voy / vas / va / vamos / vais / van + a + infinitive**; never omit **a** and never conjugate the second verb.",
        "Simple future attaches **-é, -ás, -á, -emos, -éis, -án** directly to the **whole infinitive** (identical for *-AR, -ER,* and *-IR*!).",
        "Put a written accent on **5 of the 6** simple future endings — ONLY **-emos** has NO accent (*hablaremos, tendremos, haremos*).",
        "Memorise the 10 key irregular future stems: **tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, pondr-, dir-, habr-** (*habrá* = there will be).",
        "Watch out: **ir** is 100% REGULAR in the Simple Future (*iré, irás, irá, iremos, iréis, irán*), and **ser** is 100% REGULAR too (*seré, será*)!",
      ],
      strategies: [
        "**Five-Out-Of-Six Accent Rule**: In Simple Future, put an accent on every person EXCEPT *nosotros* (*-emos*).",
        "**Two-Future Upgrade**: Use **voy a + inf.** for this weekend's definite plan and **Simple Future** (*haré, tendré, iré*) for next year's resolutions — examiners love seeing BOTH!",
      ],
      thinkDeeper:
        "Why does **tendremos** have NO accent even though **tendré** and **tendrás** DO? Apply Spanish's stress rule: words ending in *-n, -s,* or a vowel naturally stress the second-to-last syllable (*ten-DRE-mos*), so no written accent is needed!",
      workedExamples: [
        {
          title: "Contrasting Immediate Future vs Simple Future with an irregular verb",
          problem: "Express \"we are going to have (*tener*) a picnic\" (Immediate Future) AND \"we will have (*tener*) more free time\" (Simple Future).",
          steps: [
            "Immediate Future (*nosotros*): *vamos* + *a* + full infinitive *tener* → **vamos a tener** un pícnic.",
            "Simple Future (*nosotros*): irregular stem **tendr-** + *-emos* (NO accent!) → **tendremos** más tiempo libre.",
          ],
          answer: "Vamos a tener un pícnic. / Tendremos más tiempo libre.",
          yourTurn: {
            question: "Put *hacer* into the **yo** simple future: «El año que viene ___ más ejercicio.»",
            answer: {
              type: "text",
              accept: ["haré", "yo haré"],
              display: "haré",
            },
            solution: "Irregular future stem of *hacer* is **har-** + *yo* ending **-é** → **haré**.",
          },
        },
        {
          title: "Transforming irregular stems across persons",
          problem: "Put both verbs into the Simple Future: «Mañana mis amigos ___ (*salir*) temprano y tú ___ (*poder*) venir también.»",
          steps: [
            "*salir* (*ellos*): swap *-i-* for *-d-* → stem **saldr-** + *-án* → **saldrán**.",
            "*poder* (*tú*): drop *-e-* → stem **podr-** + *-ás* → **podrás**.",
          ],
          answer: "Mañana mis amigos saldrán temprano y tú podrás venir también.",
          yourTurn: {
            question: "Write \"there will be\" in Spanish (1 word, simple future of *haber*): «En la fiesta ___ buena música.»",
            answer: {
              type: "text",
              accept: ["habrá"],
              display: "habrá",
            },
            solution: "Irregular future stem **habr-** + 3rd-person singular ending **-á** → **habrá** (*there will be*).",
          },
        },
      ],
    },

    // =========================================================================
    // SECTION 4: mixing-four-tenses
    // =========================================================================
    {
      id: "mixing-four-tenses",
      heading: "Weaving All Four Tenses Together in Year 9 Exams",
      discovery: {
        problem:
          "Look at four versions of the same verb (**ir**, *yo*) in a single Year 9 paragraph:\n\n" +
          "1. *Normalmente **voy** a España en verano.*\n" +
          "2. *El año pasado **fui** a Valencia con mi familia.*\n" +
          "3. *Este sábado **voy a ir** al cine con mis amigos.*\n" +
          "4. *El próximo año **iré** a México para practicar español.*\n\n" +
          "How can a reader immediately identify the tense of each sentence BEFORE even reading the verb?",
        idea:
          "Every sentence starts with a **time-frame signpost** (*normalmente* → Present; *el año pasado* → Preterite; *este sábado* → Immediate Future; *el próximo año* → Simple Future)! Pairing exact time signposts with matching verb endings is the single fastest way to score top marks in both Reading/Listening and Extended Writing.",
      },
      body:
        "In Tanglin Year 9 assessments, questions rarely isolate one tense at a time. Listening and reading passages switch time frames mid-sentence, and writing mark schemes reward **accurate multi-tense control**.\n\n" +
        "### 1. The Four-Tense Time-Marker Decoder\n" +
        "| Tense | Core Time Clues | Example (*hacer*, *yo*) | Example (*comer*, *nosotros*) |\n" +
        "|---|---|---|---|\n" +
        "| **Present** | *normalmente, siempre, todos los días, los sábados, ahora, desde hace…* | **hago** | **comemos** |\n" +
        "| **Preterite** | *ayer, anoche, el sábado pasado, el año pasado, hace dos días* | **hice** | **comimos** |\n" +
        "| **Immediate Future** | *esta tarde, mañana, este fin de semana, la semana que viene* | **voy a hacer** | **vamos a comer** |\n" +
        "| **Simple Future** | *el próximo año, en el futuro, algún día, cuando sea mayor* | **haré** | **comeremos** |\n\n" +
        "### 2. High-Alert Accent Pairs That Flip the Tense!\n" +
        "In Reading, Listening, and Translation, a single accent mark changes the entire time frame and subject:\n" +
        "- **hablo** (*I speak*, Present) vs **habló** (*he/she spoke*, Preterite)\n" +
        "- **compro** (*I buy*, Present) vs **compró** (*he/she bought*, Preterite)\n" +
        "- **compré** (*I bought*, Preterite) vs **compraré** (*I will buy*, Simple Future — notice the **-ar-** inside *compraré*!)\n" +
        "- **viví** (*I lived*, Preterite) vs **viviré** (*I will live*, Simple Future — notice the **-ir-** inside *viviré*!)\n" +
        "- **fui / fue** (Preterite: *went/was*) vs **iré / irá** (Simple Future: *will go*) vs **seré / será** (Simple Future: *will be*)\n\n" +
        "### 3. The 4-Sentence Multi-Tense Paragraph Frame\n" +
        "You can drop ANY Year 9 topic (holidays, food, health, clothes, films) straight into this 4-tense frame:\n" +
        "1. **Present**: *Normalmente los fines de semana **hago** deporte y **como** comida sana.*\n" +
        "2. **Preterite**: *Sin embargo, el sábado pasado **fui** a un restaurante con mis amigos y **comí** una pizza enorme.*\n" +
        "3. **Immediate Future**: *Por eso, mañana **voy a correr** en el parque y **voy a beber** mucha agua.*\n" +
        "4. **Simple Future**: *En el futuro, **llevaré** una vida más equilibrada y **tendré** más energía.*",
      diagram:
        '<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-tense Spanish timeline showing Preterite, Present, Immediate Future, and Simple Future with time markers and verb forms of hacer"><rect x="4" y="4" width="552" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The Year 9 Four-Tense Timeline (Verb: hacer · yo)</text><line x1="36" y1="84" x2="524" y2="84" stroke="var(--brand)" stroke-width="3"/><polygon points="524,78 536,84 524,90" fill="var(--brand)"/><circle cx="88" cy="84" r="9" fill="var(--brand)"/><circle cx="216" cy="84" r="9" fill="var(--good)"/><circle cx="348" cy="84" r="9" fill="var(--brand)"/><circle cx="476" cy="84" r="9" fill="var(--ink)"/><text x="88" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">PRETERITE</text><text x="216" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">PRESENT</text><text x="348" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">NEAR FUTURE</text><text x="476" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">SIMPLE FUTURE</text><rect x="20" y="106" width="128" height="106" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.2"/><text x="84" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">ayer / el año pasado</text><text x="84" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">hice</text><text x="84" y="178" text-anchor="middle" font-size="10" fill="var(--ink)">I did</text><text x="84" y="198" text-anchor="middle" font-size="9" fill="var(--ink-2)">completed past</text><rect x="154" y="106" width="124" height="106" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.2"/><text x="216" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">normalmente / ahora</text><text x="216" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="var(--good)">hago</text><text x="216" y="178" text-anchor="middle" font-size="10" fill="var(--ink)">I do</text><text x="216" y="198" text-anchor="middle" font-size="9" fill="var(--ink-2)">habit / routine</text><rect x="284" y="106" width="128" height="106" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.2"/><text x="348" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">mañana / este sábado</text><text x="348" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">voy a hacer</text><text x="348" y="178" text-anchor="middle" font-size="10" fill="var(--ink)">I am going to do</text><text x="348" y="198" text-anchor="middle" font-size="9" fill="var(--ink-2)">definite near plan</text><rect x="418" y="106" width="124" height="106" rx="9" fill="var(--brand-soft)" stroke="var(--ink)" stroke-width="1.2"/><text x="480" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">el año que viene</text><text x="480" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">haré</text><text x="480" y="178" text-anchor="middle" font-size="10" fill="var(--ink)">I will do</text><text x="480" y="198" text-anchor="middle" font-size="9" fill="var(--ink-2)">resolution / future</text></svg>',
      diagramCaption: "Anchor every clause to a clear time signpost and check whether the verb matches Preterite, Present, Immediate Future, or Simple Future.",
      whyItWorks:
        "Examiners grade grammatical range by checking whether your verbs genuinely match your time markers. One careless slip — like *✗ Ayer voy al cine* — signals a tense breakdown, whereas deliberate transitions (*Normalmente… Sin embargo, ayer… Mañana voy a… En el futuro…*) unlock top-band marks immediately.",
      keyPoints: [
        "Always check the **time marker** first (*ayer, normalmente, mañana, el próximo año*) before choosing a verb form.",
        "Watch the **-r-** test: *compré* (no *r* before *-é* = Preterite, *I bought*) vs *compraré* (full infinitive *comprar* + *-é* = Simple Future, *I will buy*)!",
        "Never mix two tenses accidentally inside the same time frame (*✗ Ayer fui al cine y como palomitas* → **comí** palomitas).",
        "Use natural pivot connectives (**sin embargo**, **por eso**, **además**, **en cambio**, **el año que viene**) to glide from one tense to the next.",
        "Always proofread three things at the end of an exam: **accents** (*hablo/habló, compré/compraré*), **boot stems** (*podemos*, not *puedemos*), and **a** inside *voy a + infinitive*.",
      ],
      strategies: [
        "**The R-Test (Preterite vs Simple Future)**: Does the *yo* form keep the infinitive **-r-** right before *-é*? Yes (*hablaré, comeré, tendré*) = **Simple Future**; No (*hablé, comí, tuve*) = **Preterite**!",
        "**4-Color Audit**: Mentally underline your paragraph's verbs in 4 colours — check you have at least 1 Preterite, 1 Present, 1 Immediate Future, and 1 Simple Future!",
      ],
      thinkDeeper:
        "Look at the sentence *«El sábado pasado compramos las entradas y hoy compramos palomitas.»* Both verbs are spelled **compramos**! How do you know the first is Preterite and the second is Present — and does this ambiguity also happen with regular **-ER** verbs like *comer*?",
      workedExamples: [
        {
          title: "Transforming one verb across all four tenses",
          problem: "Conjugate **tener** for **yo** across all four Year 9 tenses to fit: (1) *Normalmente…*, (2) *Ayer…*, (3) *Esta tarde…* (near future), (4) *El año que viene…* (simple future).",
          steps: [
            "Present (*yo-go*): **tengo** (*Normalmente tengo muchos deberes.*)",
            "Preterite (strong irregular, no accent): **tuve** (*Ayer tuve un examen.*)",
            "Immediate Future (*ir + a + inf.*): **voy a tener** (*Esta tarde voy a tener clase de tenis.*)",
            "Simple Future (irregular stem **tendr-** + *-é*): **tendré** (*El año que viene tendré más vacaciones.*)",
          ],
          answer: "1. tengo · 2. tuve · 3. voy a tener · 4. tendré",
          yourTurn: {
            question: "Write the **yo** forms of *ir* in **Preterite** and then **Simple Future**, separated by a comma:",
            answer: {
              type: "text",
              accept: ["fui, iré", "fui iré"],
              display: "fui, iré",
            },
            solution: "Preterite *yo* of *ir* is **fui** (no accent!); Simple Future *yo* of *ir* is completely regular: infinitive *ir* + *-é* → **iré**.",
          },
        },
        {
          title: "Fixing tense-clash errors in a multi-tense passage",
          problem: "Identify and correct the THREE tense mistakes in: *«Normalmente jugué al tenis, pero ayer juego al fútbol y mañana voy a jugué con mi primo.»*",
          steps: [
            "*Normalmente* requires Present (*u→ue* boot) → change *jugué* to **juego**.",
            "*ayer* requires Preterite (*-gar → -gué*) → change *juego* to **jugué**.",
            "*voy a* requires an INFINITIVE → change *voy a jugué* to **voy a jugar**.",
          ],
          answer: "Normalmente juego al tenis, pero ayer jugué al fútbol y mañana voy a jugar con mi primo.",
          yourTurn: {
            question: "Choose the right verb for the time marker (*comprar*, *yo*): «El año pasado ___ una chaqueta azul.»",
            answer: {
              type: "text",
              accept: ["compré", "yo compré"],
              display: "compré",
            },
            solution: "*El año pasado* signals Preterite → drop *-ar* and add *-é* → **compré** (compare Simple Future *compraré*!).",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "Regular Present endings (-AR / -ER / -IR)", back: "-AR: -o, -as, -a, -amos, -áis, -an · -ER: -o, -es, -e, -emos, -éis, -en · -IR: -o, -es, -e, -imos, -ís, -en" },
      { front: "Which two persons NEVER stem-change in the present boot?", back: "**nosotros** and **vosotros** (*queremos, podemos, jugamos, dormimos, pedimos*)." },
      { front: "Six essential yo-go verbs (Present yo)", back: "**tengo** (tener), **hago** (hacer), **salgo** (salir), **pongo** (poner), **vengo** (venir), **digo** (decir)." },
      { front: "Present tense + desde hace + duration", back: "Means 'have been doing for [time]': *Estudio español desde hace tres años.*" },
      { front: "Regular Preterite endings (-AR vs -ER/-IR)", back: "-AR: **-é, -aste, -ó, -amos, -asteis, -aron** · -ER/-IR: **-í, -iste, -ió, -imos, -isteis, -ieron**" },
      { front: "hablo vs habló", back: "**hablo** = I speak (Present *yo*, no accent) · **habló** = he/she spoke (Preterite *él/ella*, accent on *ó*!)." },
      { front: "-car / -gar / -zar Preterite spelling rule (yo ONLY!)", back: "**-car → -qué** (*saqué*), **-gar → -gué** (*jugué, llegué*), **-zar → -cé** (*empecé, almorcé*)." },
      { front: "Preterite of ir AND ser (identical!)", back: "**fui, fuiste, fue, fuimos, fuisteis, fueron** — zero accents on any form!" },
      { front: "Strong irregular preterites (yo & él/ella — zero accents!)", back: "*tener* (**tuve/tuvo**), *hacer* (**hice/hizo**), *estar* (**estuve/estuvo**), *poder* (**pude/pudo**), *ver* (**vi/vio**), *dar* (**di/dio**)." },
      { front: "Immediate Future formula", back: "**voy / vas / va / vamos / vais / van + a + infinitive** (never omit *a*!)." },
      { front: "Simple Future endings (same for -AR, -ER, -IR!)", back: "FULL infinitive + **-é, -ás, -á, -emos, -éis, -án** (accent on every ending EXCEPT *-emos*!)." },
      { front: "Simple Future irregular stems: Drop the -e-", back: "*poder* → **podr-**, *querer* → **querr-**, *saber* → **sabr-**, *haber* → **habr-** (*habrá* = there will be)." },
      { front: "Simple Future irregular stems: Swap vowel for -d-", back: "*tener* → **tendr-**, *salir* → **saldr-**, *venir* → **vendr-**, *poner* → **pondr-**." },
      { front: "Simple Future irregular stems: Short stems", back: "*hacer* → **har-** (*haré, harás, hará…*) and *decir* → **dir-** (*diré, dirás, dirá…*)." },
      { front: "compré vs compraré (The R-Test!)", back: "**compré** = I bought (Preterite — no *-r-* before *-é*) · **compraré** = I will buy (Simple Future — full infinitive + *-é*)." },
      { front: "Four-Tense Time Markers", back: "Present (*normalmente*), Preterite (*ayer / el año pasado*), Near Future (*mañana / este sábado*), Simple Future (*el próximo año / en el futuro*)." },
    ],
    mustKnow: [
      "Conjugate regular *-AR, -ER,* and *-IR* verbs accurately across all 6 persons in the Present, Preterite, Immediate Future, and Simple Future.",
      "Apply all four boot stem-change families (*e→ie, o→ue, u→ue, e→i*) inside the boot while keeping *nosotros* and *vosotros* regular.",
      "Recall high-frequency present irregulars (*ser, estar, ir, tener, hacer, salir, poner, ver*) and use **present + desde hace** for ongoing duration.",
      "Place preterite accents accurately on regular *yo* (*-é / -í*) and *él/ella* (*-ó / -ió*), and omit accents on strong irregulars (*fui, fue, tuve, hice, hizo, estuve, vi, di*).",
      "Apply *-car → -qué*, *-gar → -gué*, and *-zar → -cé* in the *yo* preterite ONLY (*saqué, jugué, llegué, empecé*).",
      "Distinguish **hablo** (I speak) from **habló** (he/she spoke) and **compré** (I bought) from **compraré** (I will buy).",
      "Form the Immediate Future (**ir + a + infinitive**) for all 6 persons without ever dropping **a** or conjugating the second verb.",
      "Form the Simple Future (**full infinitive + -é, -ás, -á, -emos, -éis, -án**) with accents on every ending except **-emos**.",
      "Use all key irregular Simple Future stems (**tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, pondr-, dir-, habr-**) confidently.",
      "Weave all four tenses seamlessly in one exam paragraph anchored by accurate time expressions and pivot connectives.",
    ],
    misconceptions: [
      {
        wrong: "✗ Nosotros puedemos y juegamos al tenis.",
        right: "✓ Nosotros podemos y jugamos al tenis. (nosotros & vosotros sit OUTSIDE the boot — zero stem change!)",
      },
      {
        wrong: "✗ Ayer jugé al fútbol y sacé fotos.",
        right: "✓ Ayer jugué al fútbol y saqué fotos. (-gar → -gué and -car → -qué in yo preterite!)",
      },
      {
        wrong: "✗ El año pasado fuí a España y mi hermano hico una paella.",
        right: "✓ El año pasado fui a España y mi hermano hizo una paella. (No accent on fui; hacer él/ella = hizo!)",
      },
      {
        wrong: "✗ Mañana voy viajar a Madrid y vamos comer tapas.",
        right: "✓ Mañana voy a viajar a Madrid y vamos a comer tapas. (Never omit the 'a' in ir + a + infinitive!)",
      },
      {
        wrong: "✗ El año que viene teneré más tiempo y haceré deporte.",
        right: "✓ El año que viene tendré más tiempo y haré deporte. (Irregular future stems: tendr- and har-!)",
      },
      {
        wrong: "✗ En el futuro hablarémos español y viajarémos mucho.",
        right: "✓ En el futuro hablaremos español y viajaremos mucho. (-emos NEVER takes a written accent!)",
      },
      {
        wrong: "✗ Ayer hablo con mi amigo y él compró un libro (meaning: Yesterday I spoke).",
        right: "✓ Ayer hablé con mi amigo y él compró un libro. (hablo = present 'I speak'; hablé = preterite 'I spoke'!)",
      },
    ],
    examMistakes: [
      "Stem-changing *nosotros* or *vosotros* in the present tense (*✗ queréis → quieréis*, *✗ podemos → puedemos*).",
      "Forgetting the accent on regular preterite *yo* (*-é / -í*) and *él/ella* (*-ó / -ió*) — turning *compró* into *compro*!",
      "Adding illegal accents to strong irregular preterites (*✗ fuí, ✗ fué, ✗ ví, ✗ tuvé, ✗ hicé*).",
      "Applying *-car/-gar/-zar* changes to ALL persons in the preterite (*✗ juguaste, ✗ lleguó*) instead of ONLY *yo* (*jugué, jugaste, jugó*).",
      "Chopping off *-ar/-er/-ir* before adding Simple Future endings (*✗ habl-é* instead of **hablaré** — accidentally writing the preterite!).",
      "Forgetting irregular future stems (*✗ poderé, ✗ saliré, ✗ haberá*) instead of **podré, saldré, habrá**.",
      "Writing an accent on **-emos** in Simple Future (*✗ comerémos*) or forgetting accents on the other 5 endings (*✗ comere, comeras, comera, comeran*).",
    ],
    mnemonics: [
      {
        topic: "Irregular Simple Future Stems (The Dirty Dozen Core)",
        device: "3 Groups: Drop-E (Po-Que-Sa-Ha) · Add-D (Te-Sa-Ve-Po) · Short-2 (Ha-Di)",
        explanation: "**Drop-E**: *podr-, querr-, sabr-, habr-*. **Add-D**: *tendr-, saldr-, vendr-, pondr-*. **Short-2**: *har-, dir-*. Attach the exact same endings (*-é, -ás, -á, -emos, -éis, -án*)!",
      },
      {
        topic: "Simple Future Accent Rule",
        device: "5 Accents, 1 Free Pass (-emos!)",
        explanation: "Every Simple Future ending carries an accent (**-é, -ás, -á, -éis, -án**) EXCEPT *nosotros* (**-emos**).",
      },
      {
        topic: "Preterite vs Simple Future Yo Form",
        device: "No R = Past (compré) · Keep the R = Future (compraré)",
        explanation: "Look right before *-é*: if the infinitive **-r-** is gone (*hablé, compré, estudié*), it's Preterite; if the **-r-** is right there (*hablaré, compraré, estudiaré*), it's Simple Future!",
      },
    ],
    realWorld: [
      {
        title: "One Verb System Across 21 Countries",
        detail: "Master these four core tenses and you can communicate smoothly across Spain, Mexico, Colombia, Argentina, Peru, and 16 other Spanish-speaking nations — the Preterite, Present, and Future work identically everywhere (only *vosotros* is unique to Spain!).",
        emoji: "🌍",
      },
      {
        title: "Why *Ir* and *Ser* Merged in the Preterite",
        detail: "In Latin, *esse* (to be) had the perfect form *fui*, and medieval Spanish speakers borrowed *fui* for *ir* (to go) too — just like English speakers sometimes say \"Have you **been** to Madrid?\" to mean \"Have you **gone** to Madrid?\"",
        emoji: "🧭",
      },
      {
        title: "Spoken vs Written Future in Spain",
        detail: "In everyday conversation in Madrid or Valencia, teens use the Immediate Future (*esta tarde voy a ver una peli*) far more often for today/this week, while newspapers, weather forecasts (*lloverá mañana*), and promises (*te llamaré*) rely heavily on the Simple Future.",
        emoji: "🗞️",
      },
      {
        title: "How One Accent Changes a News Headline",
        detail: "In Spanish journalism, *«El equipo **gano**»* doesn't even exist, *«**gano**»* means \"I win\", and *«El equipo **ganó**»* means \"The team won\" — Spanish copy editors check verb accents obsessively because a missing tilde changes who did what and when!",
        emoji: "✍️",
      },
    ],
    videos: [
      {
        title: "Spanish Present Tense: Regular, Boot Stem-Changers & Yo-Go Verbs",
        channel: "YouTube Search — Spanish Present Tense",
        url: "https://www.youtube.com/results?search_query=Spanish+present+tense+boot+stem+changing+verbs+yo+go+GCSE",
      },
      {
        title: "Spanish Preterite Tense: Regular, -car/-gar/-zar & Irregulars",
        channel: "YouTube Search — Spanish Preterite",
        url: "https://www.youtube.com/results?search_query=Spanish+preterite+tense+regular+car+gar+zar+irregular+fui+tuve+hice",
      },
      {
        title: "Immediate Future (Ir a + Infinitive) vs Simple Future in Spanish",
        channel: "YouTube Search — Spanish Future Tenses",
        url: "https://www.youtube.com/results?search_query=Spanish+near+future+ir+a+vs+simple+future+irregular+stems+tendre+hare",
      },
      {
        title: "Combining Multiple Tenses in Spanish Writing Exams",
        channel: "YouTube Search — Multi-Tense Spanish",
        url: "https://www.youtube.com/results?search_query=how+to+combine+present+preterite+future+tenses+Spanish+writing+exam",
      },
    ],
    formulas: [
      { name: "Present Regular Endings", formula: "-AR: **-o, -as, -a, -amos, -áis, -an** · -ER: **-o, -es, -e, -emos, -éis, -en** · -IR: **-o, -es, -e, -imos, -ís, -en**", note: "Drop -ar/-er/-ir first." },
      { name: "Boot Stem-Change Rule", formula: "**e→ie / o→ue / u→ue / e→i** in *yo, tú, él, ellos* ONLY", note: "nosotros & vosotros NEVER stem-change!" },
      { name: "Ongoing Duration", formula: "**Present Tense** + **desde hace** + [time]", note: "e.g. Estudio español desde hace tres años." },
      { name: "Preterite Regular Endings", formula: "-AR: **-é, -aste, -ó, -amos, -asteis, -aron** · -ER/-IR: **-í, -iste, -ió, -imos, -isteis, -ieron**", note: "Mandatory accents on yo & él/ella!" },
      { name: "Preterite yo Spelling Guard", formula: "**-car → -qué** · **-gar → -gué** · **-zar → -cé**", note: "Applies in yo preterite ONLY." },
      { name: "Zero-Accent Irregular Preterites", formula: "**fui/fue · tuve/tuvo · hice/hizo · estuve/estuvo · vi/vio · di/dio**", note: "Zero written accents on any form." },
      { name: "Immediate Future", formula: "**voy / vas / va / vamos / vais / van** + **a** + **infinitivo**", note: "Never omit 'a'; keep Verb 2 as infinitive." },
      { name: "Simple Future Formula", formula: "**FULL infinitive** + **-é, -ás, -á, -emos, -éis, -án**", note: "Accents on all endings EXCEPT -emos." },
      { name: "Irregular Future Stems", formula: "**tendr-, har-, podr-, saldr-, querr-, sabr-, vendr-, pondr-, dir-, habr-**", note: "Use the exact same 6 simple future endings." },
      { name: "Four-Tense Paragraph Spine", formula: "*Normalmente* (Pres.) → *Ayer* (Pret.) → *Mañana* (Ir a) → *El año que viene* (Simple Fut.)", note: "Matches every Year 9 exam writing criterion." },
    ],
  },
};
