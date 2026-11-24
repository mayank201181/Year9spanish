import type { Drill } from "./types.ts";
import { acceptedForms, conjugate, englishGloss, PERSON_LABEL, PERSONS, type Person, type Tense } from "../spanish/verbs.ts";

const REGULAR_VERBS = [
  "hablar",
  "escuchar",
  "comprar",
  "viajar",
  "visitar",
  "nadar",
  "estudiar",
  "comer",
  "beber",
  "aprender",
  "correr",
  "vivir",
  "compartir",
  "escribir",
  "abrir",
] as const;

const BOOT_VERBS: ReadonlyArray<{ inf: string; rule: string }> = [
  { inf: "preferir", rule: "e→ie" },
  { inf: "querer", rule: "e→ie" },
  { inf: "empezar", rule: "e→ie" },
  { inf: "pensar", rule: "e→ie" },
  { inf: "recomendar", rule: "e→ie" },
  { inf: "poder", rule: "o→ue" },
  { inf: "dormir", rule: "o→ue" },
  { inf: "volver", rule: "o→ue" },
  { inf: "almorzar", rule: "o→ue" },
  { inf: "jugar", rule: "u→ue" },
  { inf: "pedir", rule: "e→i" },
  { inf: "repetir", rule: "e→i" },
];

const PRESENT_IRREGS = [
  "ser",
  "estar",
  "ir",
  "tener",
  "hacer",
  "salir",
  "poner",
  "venir",
  "decir",
  "ver",
  "dar",
  "saber",
  "conocer",
  "seguir",
  "elegir",
] as const;

const CAR_GAR_ZAR: ReadonlyArray<{ inf: string; type: "car" | "gar" | "zar"; wrongYo: string }> = [
  { inf: "sacar", type: "car", wrongYo: "sacé" },
  { inf: "tocar", type: "car", wrongYo: "tocé" },
  { inf: "buscar", type: "car", wrongYo: "buscé" },
  { inf: "practicar", type: "car", wrongYo: "practicé" },
  { inf: "explicar", type: "car", wrongYo: "explicé" },
  { inf: "jugar", type: "gar", wrongYo: "jugé" },
  { inf: "llegar", type: "gar", wrongYo: "llegé" },
  { inf: "pagar", type: "gar", wrongYo: "pagé" },
  { inf: "navegar", type: "gar", wrongYo: "navegé" },
  { inf: "descargar", type: "gar", wrongYo: "descargé" },
  { inf: "empezar", type: "zar", wrongYo: "empezé" },
  { inf: "almorzar", type: "zar", wrongYo: "almorzé" },
  { inf: "organizar", type: "zar", wrongYo: "organizé" },
  { inf: "cruzar", type: "zar", wrongYo: "cruzé" },
];

const PRET_IRREGS = [
  "ir",
  "ser",
  "tener",
  "hacer",
  "estar",
  "ver",
  "dar",
  "poder",
  "poner",
  "querer",
  "venir",
  "decir",
  "saber",
  "dormir",
  "pedir",
] as const;

const FUTURE_REG_VERBS = [
  "hablar",
  "viajar",
  "comprar",
  "estudiar",
  "trabajar",
  "comer",
  "beber",
  "aprender",
  "correr",
  "vivir",
  "escribir",
  "abrir",
  "ir",
  "ser",
  "ver",
  "dar",
] as const;

const FUTURE_IRREG_VERBS: ReadonlyArray<{ inf: string; stem: string; group: string }> = [
  { inf: "tener", stem: "tendr-", group: "Add-D" },
  { inf: "hacer", stem: "har-", group: "Short-2" },
  { inf: "poder", stem: "podr-", group: "Drop-E" },
  { inf: "salir", stem: "saldr-", group: "Add-D" },
  { inf: "querer", stem: "querr-", group: "Drop-E" },
  { inf: "saber", stem: "sabr-", group: "Drop-E" },
  { inf: "venir", stem: "vendr-", group: "Add-D" },
  { inf: "poner", stem: "pondr-", group: "Add-D" },
  { inf: "decir", stem: "dir-", group: "Short-2" },
];

const FUTURE_ENDINGS: Record<Person, string> = {
  yo: "é",
  tú: "ás",
  él: "á",
  nosotros: "emos",
  vosotros: "éis",
  ellos: "án",
};

const CORE_FOUR_TENSES: ReadonlyArray<{
  tense: Extract<Tense, "present" | "preterite" | "near-future" | "future">;
  name: string;
  markers: readonly string[];
}> = [
  { tense: "present", name: "Present", markers: ["Normalmente", "Todos los días", "Siempre"] },
  { tense: "preterite", name: "Preterite", markers: ["Ayer", "El sábado pasado", "El año pasado"] },
  { tense: "near-future", name: "Immediate Future (ir a + inf.)", markers: ["Esta tarde", "Este sábado", "Mañana"] },
  { tense: "future", name: "Simple Future (-é, -ás, -á…)", markers: ["El año que viene", "En el futuro", "Algún día"] },
];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Present Tense — Regular, Boot Stem-Changers & Irregulars (Level 1)
  // =========================================================================
  {
    id: "four-tenses-grammar.present-boot-irregular",
    topicId: "four-tenses-grammar",
    title: "Present Tense: Regular, Boot & Irregular Verbs",
    level: 1,
    guideRef: "present-tense-mastery",
    generate(rng, tier) {
      const person = rng.pick(PERSONS);
      if (tier === 1) {
        const inf = rng.pick(REGULAR_VERBS);
        const ans = conjugate(inf, "present", person);
        const accept = acceptedForms(inf, "present", person);
        const gloss = englishGloss(inf, "present", person);
        const pretTrap = conjugate(inf, "preterite", person);
        const traps =
          pretTrap !== ans
            ? [{ spec: { type: "text" as const, accept: [pretTrap] }, feedback: `*${pretTrap}* is the Preterite! Use the **Present tense** ending.` }]
            : undefined;
        return {
          prompt: `Conjugate **${inf}** in the **Present tense** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          traps,
          hint: `Drop *-${inf.slice(-2)}* from *${inf}* and add the Present tense ending for *${person}*.`,
          solution: [
            `*${inf}* is a regular *-${inf.slice(-2)}* verb.`,
            `Present tense (*${person}*): **${ans}** (*${gloss}*).`,
          ],
        };
      }

      if (tier === 2) {
        const boot = rng.pick(BOOT_VERBS);
        const ans = conjugate(boot.inf, "present", person);
        const accept = acceptedForms(boot.inf, "present", person);
        const gloss = englishGloss(boot.inf, "present", person);
        const outside = person === "nosotros" || person === "vosotros";
        return {
          prompt: `Boot verb (*${boot.rule}*) — conjugate **${boot.inf}** in the **Present tense** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          hint: outside
            ? `*${person}* sits OUTSIDE the boot — keep the original infinitive vowel!`
            : `*${person}* sits INSIDE the boot — apply the *${boot.rule}* stem change!`,
          solution: [
            outside
              ? `*${person}* is outside the boot, so *${boot.inf}* keeps its original stem.`
              : `*${person}* is inside the boot, so apply *${boot.rule}* to the stressed stem vowel.`,
            `Result: **${ans}** (*${gloss}*).`,
          ],
        };
      }

      // Tier 3: Present irregulars & yo-go
      const inf = rng.pick(PRESENT_IRREGS);
      const ans = conjugate(inf, "present", person);
      const accept = acceptedForms(inf, "present", person);
      const gloss = englishGloss(inf, "present", person);
      const pretTrap = conjugate(inf, "preterite", person);
      const traps =
        pretTrap !== ans
          ? [{ spec: { type: "text" as const, accept: [pretTrap] }, feedback: `*${pretTrap}* is Preterite — this drill asks for the **Present tense** (**${ans}**)!` }]
          : undefined;
      return {
        prompt: `Irregular / yo-go verb — conjugate **${inf}** in the **Present tense** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
        answer: { type: "text", accept, display: ans },
        traps,
        hint: `Watch out for irregular stems, *yo-go* forms (*tengo, hago, salgo, pongo, vengo, digo*), or accents (*estás, está, estáis, están*).`,
        solution: [
          `Recall the irregular Present conjugation of *${inf}*.`,
          `For *${person}*: **${ans}** (*${gloss}*).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Preterite Tense — Regular, -car/-gar/-zar & Irregulars (Level 1)
  // =========================================================================
  {
    id: "four-tenses-grammar.preterite-accents-irregulars",
    topicId: "four-tenses-grammar",
    title: "Preterite: Accents, -car/-gar/-zar & Irregulars",
    level: 1,
    guideRef: "preterite-tense-mastery",
    generate(rng, tier) {
      if (tier === 1) {
        const inf = rng.pick(REGULAR_VERBS);
        const person = rng.pick(PERSONS);
        const ans = conjugate(inf, "preterite", person);
        const accept = acceptedForms(inf, "preterite", person);
        const gloss = englishGloss(inf, "preterite", person);
        const presTrap = conjugate(inf, "present", person);
        const traps =
          presTrap !== ans
            ? [{ spec: { type: "text" as const, accept: [presTrap] }, feedback: `*${presTrap}* is Present tense! Use the completed past (Preterite) ending.` }]
            : undefined;
        return {
          prompt: `Conjugate **${inf}** in the **Preterite tense** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          traps,
          hint: `Use the regular *-${inf.slice(-2)}* preterite ending (check accents on *yo* and *él/ella*!).`,
          solution: [
            `Drop *-${inf.slice(-2)}* from *${inf}*.`,
            `Add the Preterite ending for *${person}* → **${ans}** (*${gloss}*).`,
          ],
        };
      }

      if (tier === 2) {
        const item = rng.pick(CAR_GAR_ZAR);
        // Weight yo at 45% so learners drill both yo spelling changes and non-yo regular forms
        const person: Person = rng.bool(0.45) ? "yo" : rng.pick(["tú", "él", "nosotros", "ellos"] as const);
        const ans = conjugate(item.inf, "preterite", person);
        const accept = acceptedForms(item.inf, "preterite", person);
        const gloss = englishGloss(item.inf, "preterite", person);
        const ruleMap = { car: "-car → -qué", gar: "-gar → -gué", zar: "-zar → -cé" };
        const traps =
          person === "yo"
            ? [
                {
                  spec: { type: "text" as const, accept: [item.wrongYo] },
                  feedback: `Remember the *yo* preterite spelling guard: **${ruleMap[item.type]}** → **${ans}**!`,
                },
              ]
            : undefined;
        return {
          prompt: `Preterite spelling check — conjugate **${item.inf}** in the **Preterite** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          traps,
          hint:
            person === "yo"
              ? `Apply **${ruleMap[item.type]}** in the *yo* preterite (and no present boot stem change!).`
              : `Spelling changes (*-car/-gar/-zar*) happen in *yo* ONLY — *${person}* takes the normal regular *-ar* preterite ending!`,
          solution: [
            person === "yo"
              ? `*${item.inf}* triggers **${ruleMap[item.type]}** in *yo* preterite → **${ans}**.`
              : `*${person}* does NOT trigger *-car/-gar/-zar* → regular preterite **${ans}**.`,
          ],
        };
      }

      // Tier 3: Strong irregulars & -ir sandal verbs
      const inf = rng.pick(PRET_IRREGS);
      const person = rng.pick(PERSONS);
      const ans = conjugate(inf, "preterite", person);
      const accept = acceptedForms(inf, "preterite", person);
      const gloss = englishGloss(inf, "preterite", person);
      const presTrap = conjugate(inf, "present", person);
      const traps =
        presTrap !== ans
          ? [{ spec: { type: "text" as const, accept: [presTrap] }, feedback: `*${presTrap}* is Present tense — use the Preterite (**${ans}**)!` }]
          : undefined;
      return {
        prompt: `Irregular Preterite — conjugate **${inf}** in the **Preterite** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
        answer: { type: "text", accept, display: ans },
        traps,
        hint: `Remember strong irregular preterites (*fui, tuve, hice/hizo, estuve, pude, puse, quise, vine, dije, vi, di*) carry ZERO written accents!`,
        solution: [
          `Recall the irregular preterite pattern of *${inf}*.`,
          `For *${person}*: **${ans}** (*${gloss}*).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Immediate Future vs Simple Future & Irregular Stems (Level 2)
  // =========================================================================
  {
    id: "four-tenses-grammar.near-vs-simple-future",
    topicId: "four-tenses-grammar",
    title: "Immediate Future vs Simple Future & Stems",
    level: 2,
    guideRef: "immediate-vs-simple-future",
    generate(rng, tier) {
      const person = rng.pick(PERSONS);
      if (tier === 1) {
        const inf = rng.pick(FUTURE_REG_VERBS);
        const ans = conjugate(inf, "near-future", person);
        const accept = acceptedForms(inf, "near-future", person);
        const gloss = englishGloss(inf, "near-future", person);
        const irForm = conjugate("ir", "present", person);
        const noATrap = `${irForm} ${inf}`;
        return {
          prompt: `**Immediate Future** (*ir + a + inf.*) — conjugate **${inf}** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          traps: [
            {
              spec: { type: "text" as const, accept: [noATrap] },
              feedback: `Never drop the preposition **a** in the Immediate Future → **${ans}**!`,
            },
          ],
          hint: `Use present tense of *ir* for *${person}* + **a** + full infinitive *${inf}*.`,
          solution: [
            `*ir* (*${person}*) = **${irForm}** + **a** + infinitive **${inf}** → **${ans}**.`,
          ],
        };
      }

      if (tier === 2) {
        const inf = rng.pick(FUTURE_REG_VERBS);
        const ans = conjugate(inf, "future", person);
        const accept = acceptedForms(inf, "future", person);
        const gloss = englishGloss(inf, "future", person);
        const pretTrap = conjugate(inf, "preterite", person);
        const traps = [
          {
            spec: { type: "text" as const, accept: [pretTrap] },
            feedback: `*${pretTrap}* is Preterite! Keep the ENTIRE infinitive *${inf}* and add **-${FUTURE_ENDINGS[person]}** → **${ans}**.`,
          },
        ];
        return {
          prompt: `**Simple Future** — conjugate **${inf}** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
          answer: { type: "text", accept, display: ans },
          traps,
          hint: `Keep the FULL infinitive *${inf}* and attach **-${FUTURE_ENDINGS[person]}** (${person === "nosotros" ? "NO accent on -emos!" : "check the accent!"}).`,
          solution: [
            `Keep the full infinitive **${inf}** (even *ir* and *ser* are regular in Simple Future!).`,
            `Attach *${person}* ending **-${FUTURE_ENDINGS[person]}** → **${ans}**.`,
          ],
        };
      }

      // Tier 3: Irregular Simple Future stems
      const item = rng.pick(FUTURE_IRREG_VERBS);
      const ans = conjugate(item.inf, "future", person);
      const accept = acceptedForms(item.inf, "future", person);
      const gloss = englishGloss(item.inf, "future", person);
      const fakeRegular = `${item.inf}${FUTURE_ENDINGS[person]}`;
      return {
        prompt: `Irregular **Simple Future** — conjugate **${item.inf}** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
        answer: { type: "text", accept, display: ans },
        traps: [
          {
            spec: { type: "text" as const, accept: [fakeRegular] },
            feedback: `*${item.inf}* has an irregular Simple Future stem (**${item.stem}**) → **${ans}**!`,
          },
        ],
        hint: `*${item.inf}* belongs to the **${item.group}** irregular future group (stem **${item.stem}**). Attach **-${FUTURE_ENDINGS[person]}**.`,
        solution: [
          `Irregular future stem of *${item.inf}* (${item.group}): **${item.stem}**.`,
          `Add *${person}* ending **-${FUTURE_ENDINGS[person]}** → **${ans}** (*${gloss}*).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Four-Tense Time-Marker Switcher (Level 3)
  // =========================================================================
  {
    id: "four-tenses-grammar.four-tense-switcher",
    topicId: "four-tenses-grammar",
    title: "Four-Tense Time-Marker Switcher",
    level: 3,
    guideRef: "mixing-four-tenses",
    generate(rng, tier) {
      const tenseObj = rng.pick(CORE_FOUR_TENSES);
      const marker = rng.pick(tenseObj.markers);
      const persons: readonly Person[] = tier === 1 ? ["yo", "nosotros"] : PERSONS;
      const person = rng.pick(persons);

      const pool: readonly string[] =
        tier === 1
          ? ["hablar", "comprar", "viajar", "estudiar", "comer", "beber", "correr", "vivir", "escribir", "visitar"]
          : tier === 2
            ? ["jugar", "preferir", "empezar", "almorzar", "sacar", "llegar", "pagar", "practicar", "volver", "dormir", "pedir", "leer", "correr", "viajar"]
            : ["ir", "ser", "estar", "tener", "hacer", "poder", "querer", "salir", "poner", "venir", "decir", "saber", "ver", "dar", "dormir", "pedir"];

      const inf = rng.pick(pool);
      const ans = conjugate(inf, tenseObj.tense, person);
      const accept = acceptedForms(inf, tenseObj.tense, person);
      const gloss = englishGloss(inf, tenseObj.tense, person);

      const wrongTense: Extract<Tense, "present" | "preterite" | "near-future" | "future"> =
        tenseObj.tense === "preterite"
          ? "present"
          : tenseObj.tense === "future"
            ? "preterite"
            : tenseObj.tense === "present"
              ? "preterite"
              : "present";
      const wrongForm = conjugate(inf, wrongTense, person);
      const traps =
        wrongForm !== ans
          ? [
              {
                spec: { type: "text" as const, accept: [wrongForm] },
                feedback: `Look closely at time marker *${marker}* — you need **${tenseObj.name}** (**${ans}**), not *${wrongForm}*!`,
              },
            ]
          : undefined;

      return {
        prompt: `Time clue **«${marker}…»** (${tenseObj.name}) — conjugate **${inf}** for **${PERSON_LABEL[person]}** (*${gloss}*).`,
        answer: { type: "text", accept, display: ans },
        traps,
        hint: `*${marker}* triggers the **${tenseObj.name}**. Check irregular stems and accents for *${inf}* (*${person}*).`,
        solution: [
          `Time signpost *${marker}* calls for **${tenseObj.name}**.`,
          `Conjugate *${inf}* for *${person}* → **${ans}** (*${gloss}*).`,
        ],
      };
    },
  },
];
