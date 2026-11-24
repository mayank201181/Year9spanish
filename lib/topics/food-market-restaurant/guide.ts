import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "food-market-restaurant",
  title: "Food, Market Quantities & Restaurant (La comida)",
  strand: "Term 2: Food & Health",
  icon: "🥘",
  summary: "Master Spanish mealtimes, food opinions, marketplace weights & packaging, polite restaurant ordering and Hispanic dishes across three tenses.",
  intro:
    "Food is the heartbeat of daily life in Spain and across the Hispanic world. In Year 9 Spanish, you move well beyond saying *me gusta el pollo*: you will describe authentic Spanish meal schedules, buy exact weights and quantities at a bustling *mercado*, order a three-course *menú del día*, handle restaurant problems politely, and narrate unforgettable meals across the **Present**, **Preterite**, **Immediate Future** and **Simple Future** tenses.",
  guide: [
    // =========================================================================
    // SECTION 1: food-opinions-mealtimes
    // =========================================================================
    {
      id: "food-opinions-mealtimes",
      heading: "Food Vocabulary, Opinions & Spanish Meal Times",
      discovery: {
        problem:
          "Compare these two sentences carefully:\n- *Me **gusta** **el** queso porque es **delicioso**.*\n- *Me **gustan** **las** fresas porque son **deliciosas**.*\n\nSpot all **four** things that changed between sentence 1 and sentence 2 — and work out why English speakers often forget the word *el/las*!",
        idea:
          "With *gustar* and *encantar*, the food is the **grammatical subject**, so: (1) *gusta* → *gustan* for plural nouns; (2) Spanish **always** keeps the definite article (*el / la / los / las*) before general food nouns; (3) *es* → *son*; and (4) the adjective *delicioso* → *deliciosas* agrees in both gender and number with *las fresas*!",
      },
      body: `In Spain, meals are built into the rhythm of the day — and Spanish has a dedicated **single verb** for each meal so you never translate "to have breakfast" word-for-word as *tener desayuno*!

| Meal (Noun) | Verb (Infinitive) | Typical Time in Spain | Example (*yo* present) |
|---|---|---|---|
| **el desayuno** (breakfast) | **desayunar** | 7:30 – 8:30 | *Desayuno tostadas con aceite y zumo de naranja.* |
| **el almuerzo / la comida** (lunch) | **almorzar** *(o→ue)* / **comer** | 14:00 – 15:00 | *Como pollo con ensalada a las dos y media.* |
| **la merienda** (afternoon snack) | **merendar** *(e→ie)* | 17:30 – 18:30 | *Meriendo un bocadillo de queso o fruta.* |
| **la cena** (dinner) | **cenar** | 21:00 – 22:00 | *Ceno pescado con verduras a las nueve.* |

### Expressing Food Opinions Accurately
To hit top Year 9 bands, combine **opinion verbs**, the **mandatory definite article**, and an **agreeing taste adjective**:

- **Singular noun or infinitive**: *Me gusta / Me encanta / No me gusta nada* + **el / la** + noun (*Me encanta **el** arroz; Me gusta **la** tortilla*).
- **Plural noun**: *Me gustan / Me encantan / No me gustan* + **los / las** + noun (*Me encantan **los** mariscos; No me gustan **las** cebollas*).
- **Direct verbs (*odio / prefiero*)**: Still keep the article for general likes/dislikes (*Odio **los** guisantes*, *Prefiero **el** pescado a **la** carne*).
- **Adjective agreement**: Adjectives ending in *-o* have **four** forms (*salado / salada / salados / saladas*), whereas adjectives ending in *-e* (*dulce, picante*) only change for plural (*dulces, picantes*).

Watch out for **el agua**! Even though *agua* is feminine, singular *agua* takes **el** to avoid two stressed *a* sounds colliding (*el agua fría*, NOT *la agua*), while plural is **las aguas** and adjectives remain feminine (*el agua está fría*).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish meal timeline showing desayuno, comida, merienda and cena plus gustar agreement"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Un día típico en España — 4 Meal Verbs &amp; Gustar Rule</text><line x1="40" y1="86" x2="520" y2="86" stroke="var(--brand)" stroke-width="3"/><circle cx="85" cy="86" r="8" fill="var(--brand)"/><text x="85" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">08:00</text><text x="85" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">desayunar</text><text x="85" y="123" text-anchor="middle" font-size="10" fill="var(--ink-2)">tostadas &amp; zumo</text><circle cx="215" cy="86" r="8" fill="var(--brand)"/><text x="215" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">14:30</text><text x="215" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">comer / almorzar</text><text x="215" y="123" text-anchor="middle" font-size="10" fill="var(--ink-2)">main hot meal</text><circle cx="350" cy="86" r="8" fill="var(--brand)"/><text x="350" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">18:00</text><text x="350" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">merendar (e→ie)</text><text x="350" y="123" text-anchor="middle" font-size="10" fill="var(--ink-2)">bocadillo / fruta</text><circle cx="475" cy="86" r="8" fill="var(--brand)"/><text x="475" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">21:30</text><text x="475" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">cenar</text><text x="475" y="123" text-anchor="middle" font-size="10" fill="var(--ink-2)">lighter dinner</text><rect x="24" y="148" width="248" height="82" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="148" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Singular Food → gusta / es</text><text x="148" y="190" text-anchor="middle" font-size="12" fill="var(--ink)">Me gusta el pollo porque</text><text x="148" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">es sabroso y sano.</text><rect x="288" y="148" width="248" height="82" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="412" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Plural Food → gustan / son</text><text x="412" y="190" text-anchor="middle" font-size="12" fill="var(--ink)">Me encantan las gambas porque</text><text x="412" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">son deliciosas.</text></svg>`,
      diagramCaption: "Spain's four daily meal verbs plus the singular vs plural agreement rule for gustar and taste adjectives.",
      whyItWorks:
        "In Spanish, *gustar* literally means 'to be pleasing'. So *Me gustan las patatas* literally means 'The potatoes are pleasing to me' — that is why the verb (*gustan*), the article (*las*) and any adjective (*saladas*) must all lock onto the food noun!",
      workedExamples: [
        {
          title: "Building a justified food opinion with plural agreement",
          problem: "Translate into Spanish: 'I love strawberries because they are sweet and healthy.'",
          steps: [
            "Check the noun 'strawberries': *las fresas* (feminine plural).",
            "Choose the plural form of *encantar*: *Me encantan* (NOT *me encanta*) + definite article *las*.",
            "Use plural *ser*: *son* (they are).",
            "Make both adjectives agree with feminine plural *fresas*: *dulce* → *dulces*; *sano* → *sanas*.",
          ],
          answer: "Me encantan las fresas porque son dulces y sanas.",
          yourTurn: {
            question: "Translate into Spanish: 'I like prawns because they are delicious.'",
            answer: {
              type: "text",
              accept: [
                "Me gustan las gambas porque son deliciosas",
                "Me gustan las gambas porque son deliciosas.",
              ],
              display: "Me gustan las gambas porque son deliciosas.",
            },
            solution: "*Las gambas* is feminine plural, so use *me gustan* + *las gambas* + *porque son deliciosas*.",
          },
        },
        {
          title: "Describing daily meal times without 'tener'",
          problem: "Translate into Spanish: 'I have breakfast at eight o'clock and I have dinner at nine thirty.'",
          steps: [
            "Use the dedicated meal verb *desayunar* (*yo*: *desayuno*) — never *tengo desayuno*.",
            "Time of day uses *a las* + number: *a las ocho*.",
            "Use *cenar* (*yo*: *ceno*) + *a las nueve y media* (9:30).",
          ],
          answer: "Desayuno a las ocho y ceno a las nueve y media.",
        },
      ],
      keyPoints: [
        "Spanish uses single verbs for meals: **desayunar**, **almorzar** *(o→ue)* / **comer**, **merendar** *(e→ie)*, **cenar**.",
        "Always include the definite article (*el / la / los / las*) after *gustar, encantar, odiar* and *preferir* for foods in general.",
        "Match **gusta / es** to singular nouns and **gustan / son** to plural nouns, then match every adjective ending.",
        "**El agua** is feminine (*el agua fría*) and **el pescado** (fish on a plate) differs from **el pez** (living fish).",
      ],
      strategies: [
        "Run the **3-Check Agreement Scan** on every food opinion: Article (*el/la/los/las*) → Verb (*gusta/gustan, es/son*) → Adjective ending (*-o/-a/-os/-as*).",
        "Swap English 'have breakfast/dinner' directly into *desayuno / ceno* — never translate 'have' as *tengo*.",
        "Upgrade simple opinions with *porque* + two contrasting adjectives (*dulce pero poco sano*).",
      ],
      thinkDeeper:
        "Why does Spanish say *Me gusta **el** chocolate* (with *el*) when expressing an opinion, yet *Como chocolate* (no *el*) when saying you eat some chocolate? Think about the difference between talking about a whole category vs an unspecified quantity!",
    },

    // =========================================================================
    // SECTION 2: market-quantities
    // =========================================================================
    {
      id: "market-quantities",
      heading: "In the Marketplace: Quantities, Weights & Prices",
      discovery: {
        problem:
          "Look at these three market phrases:\n1. *Quiero **un kilo de** manzanas.* (NOT *un kilo de las manzanas*)\n2. *Póngame **medio kilo de** jamón.* (NOT *un medio kilo*)\n3. *Necesito **una docena de** huevos.*\n\nWhat two tiny words disappear in Spanish quantities compared to English?",
        idea:
          "(1) **Never** put *el / la / los / las* after **de** in a quantity phrase (*un kilo de manzanas*, *una botella de agua*). (2) Never put *un* in front of **medio** — just say *medio kilo* (half a kilo) or *media docena* (half a dozen)!",
      },
      body: `In Spain, many shoppers buy fresh food at specialist stalls inside a covered **mercado** (*la frutería, la carnicería, la pescadería, la panadería*). Knowing exact weights, containers and polite market Spanish lets you handle any role-play with ease.

### Weights & Packaging Cheat Sheet
| Spanish Quantity | English Meaning | Example |
|---|---|---|
| **cien gramos de** | 100 grams of | *cien gramos de queso* |
| **doscientos gramos de** | 200 grams of | *doscientos gramos de jamón* |
| **un cuarto de kilo de** | a quarter of a kilo (250 g) of | *un cuarto de kilo de aceitunas* |
| **medio kilo de** | half a kilo (500 g) of | *medio kilo de tomates* |
| **un kilo de** | a kilo of | *un kilo de patatas* |
| **un litro de** | a litre of | *un litro de leche* |
| **una botella de** | a bottle of | *una botella de aceite de oliva* |
| **una lata de** | a can / tin of | *una lata de atún* |
| **una caja de** | a box / carton of | *una caja de cereales* |
| **un paquete de** | a packet of | *un paquete de galletas* |
| **una barra de pan** | a loaf of bread (baguette) | *dos barras de pan* |
| **una docena de huevos** | a dozen (12) eggs | *media docena de huevos* (6 eggs) |

### Essential Market Role-Play Phrases
- **Shopkeeper (*el/la dependiente*):** *Buenos días, **¿qué desea?*** / ***¿Qué le pongo?*** (What can I get you?) · ***¿Algo más?*** (Anything else?) · *Son cuatro euros con cincuenta.* (€4.50)
- **Customer (*el/la cliente*):** ***Póngame** medio kilo de fresas, por favor.* (Give me / I'll have half a kilo of strawberries — polite *usted* imperative!) · ***Quisiera** una barra de pan.* · ***Nada más, gracias.*** (Nothing else, thanks.) · ***¿Cuánto es en total?*** (How much is it in total?)

Note how Spanish reads prices with **con**: €3.20 = *tres euros **con** veinte* (or *tres veinte*). And remember: **cien** = exactly 100 (*cien gramos*), whereas 101–199 uses *ciento* (*ciento cincuenta gramos* = 150 g).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish marketplace weights and containers diagram showing no article after de"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">En el mercado — Weights, Packaging &amp; the Zero-Article Rule</text><rect x="24" y="46" width="160" height="72" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="104" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Weights (Peso)</text><text x="104" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">100 g: cien gramos de</text><text x="104" y="105" text-anchor="middle" font-size="11" fill="var(--ink)">500 g: medio kilo de</text><rect x="200" y="46" width="160" height="72" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Containers (Envases)</text><text x="280" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">una botella / lata de</text><text x="280" y="105" text-anchor="middle" font-size="11" fill="var(--ink)">una caja / un paquete de</text><rect x="376" y="46" width="160" height="72" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="456" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Special Pairs</text><text x="456" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">una barra de pan</text><text x="456" y="105" text-anchor="middle" font-size="11" fill="var(--ink)">una docena de huevos</text><rect x="32" y="138" width="496" height="90" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Golden Formula: [Polite Opener] + [Quantity] + DE + [Bare Food Noun]</text><text x="155" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">✓ Póngame medio kilo de uvas.</text><text x="410" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">✗ un medio kilo de las uvas</text><text x="280" y="214" text-anchor="middle" font-size="11" fill="var(--ink-2)">Never add el/la/los/las after de, and never put un before medio!</text></svg>`,
      diagramCaption: "How to build any Spanish market request using the Quantity + de + bare noun formula.",
      whyItWorks:
        "In Spanish, *de* + bare noun specifies the **substance or contents** of the measure (*una botella de leche* = a milk-bottle / bottle of milk). Adding *la* (*de la leche*) would sound like 'a bottle from that specific milk over there'!",
      workedExamples: [
        {
          title: "Ordering two items politely at the market",
          problem: "Translate into Spanish: 'Give me half a kilo of tomatoes and a dozen eggs, please.'",
          steps: [
            "Start with the authentic polite market phrase *Póngame* (or *Quisiera*).",
            "Translate 'half a kilo of tomatoes': *medio kilo de tomates* (no *un* before *medio*, no *los* after *de*).",
            "Translate 'a dozen eggs': *una docena de huevos* (remember *de* is compulsory in Spanish!).",
            "Finish politely with *, por favor*.",
          ],
          answer: "Póngame medio kilo de tomates y una docena de huevos, por favor.",
          yourTurn: {
            question: "Translate into Spanish: 'I would like two hundred grams of cheese and a loaf of bread.' (Start with *Quisiera*)",
            answer: {
              type: "text",
              accept: [
                "Quisiera doscientos gramos de queso y una barra de pan",
                "Quisiera doscientos gramos de queso y una barra de pan.",
              ],
              display: "Quisiera doscientos gramos de queso y una barra de pan.",
            },
            solution: "*doscientos gramos de queso* (no *el*) + *y una barra de pan*.",
          },
        },
        {
          title: "Calculating a Spanish market receipt",
          problem: "At *la frutería*, apples cost €2.40 per kilo and oranges cost €1.80 per kilo. A customer asks: *Póngame medio kilo de manzanas y un kilo de naranjas. ¿Cuánto es en total?* Calculate the total in euros.",
          steps: [
            "Half a kilo (*medio kilo*) of apples = €2.40 ÷ 2 = €1.20.",
            "One kilo (*un kilo*) of oranges = €1.80.",
            "Total = €1.20 + €1.80 = €3.00 (*Son tres euros*).",
          ],
          answer: "€3.00 (Son tres euros.)",
        },
      ],
      keyPoints: [
        "Use **de** + bare noun with **no article** (*un kilo de manzanas*, *un litro de agua*, *una lata de refresco*).",
        "Never write *un medio kilo* — say **medio kilo** (masculine) and **media docena** (feminine).",
        "**Cien** = exactly 100 (*cien gramos*); **ciento** = 101–199 (*ciento cincuenta gramos*).",
        "Use formal *usted* shopping phrases: **¿Qué desea?**, **Póngame...**, **Quisiera...**, **¿Cuánto es en total?**",
      ],
      strategies: [
        "Match the gender of the **container** (*un paquete / un litro / un trozo* vs *una botella / una lata / una caja / una barra / una docena*), not the food inside.",
        "Always check whether English drops 'of' (*a dozen eggs* → Spanish MUST keep **de**: *una docena **de** huevos*).",
        "Read market dialogues as quick maths puzzles: *cuarto* = 0.25, *medio* = 0.5, *docena* = 12.",
      ],
      thinkDeeper:
        "Why do we say ***una** barra de pan* (feminine) and ***media** docena de huevos* (feminine) even though *el pan* and *los huevos* are masculine nouns? Which word controls the gender of *un/una* and *medio/media*?",
    },

    // =========================================================================
    // SECTION 3: ordering-in-restaurant
    // =========================================================================
    {
      id: "ordering-in-restaurant",
      heading: "Ordering in a Restaurant & Handling Problems",
      discovery: {
        problem:
          "Read this restaurant complaint carefully:\n- *Perdone, camarero, **la sopa está fría** y **falta una cuchara**.*\n- *Además, **el vaso está sucio** y **los platos están fríos**.*\n\nNotice which verb (*ser* or *estar*) is used for food being cold/dirty, and why *falta* stays singular in *falta una cuchara*!",
        idea:
          "Food temperature, taste-in-the-moment and cleanliness are **temporary states**, so they ALWAYS use **estar** (*está frío/a*, *están fríos/as*, *está sucio/a*), never *ser*! And *faltar* works like *gustar*: one missing item → *falta* (*falta un tenedor*); multiple missing items → *faltan* (*faltan dos vasos*).",
      },
      body: `Dining out in Spain often centres on **el menú del día** — a great-value weekday set lunch including a starter, main course, bread, drink and dessert or coffee.

### Ordering a Three-Course Meal
| Course / Stage | Key Spanish Phrase | Example Order |
|---|---|---|
| Starter | **De primer plato** | *De primer plato, quisiera la sopa de tomate.* |
| Main course | **De segundo plato** | *De segundo plato, para mí el pollo asado con patatas.* |
| Dessert | **De postre** | *De postre, voy a tomar flan / helado de fresa.* |
| Drink | **Para beber** | *Para beber, una botella de agua sin gas, por favor.* |
| Asking advice | **¿Qué me recomienda?** | *¿Qué me recomienda de segundo plato?* |
| Asking for the bill | **La cuenta, por favor.** | *Perdone, ¿nos trae la cuenta, por favor?* |

Note the preposition switch: **de** primer plato / **de** segundo plato / **de** postre, but **para** beber!

### Handling Dietary Needs & Polite Complaints
Always open with ***Perdone, camarero / camarera...*** (Excuse me — formal *usted*) before stating the issue clearly:

- **Dietary requirements**: *Soy vegetariano / vegetariana* (Notice: NO *un/una* before *vegetariano/a*!), *Soy vegano / vegana*, *Tengo alergia a los frutos secos / al gluten / a los mariscos / a los lácteos.*
- **Temperature & taste (use *estar*!)**: *La sopa **está fría**.* · *El pollo **está crudo** / **demasiado salado**.* · *Las patatas **están frías**.*
- **Missing tableware (*faltar*)**: ***Falta** un tenedor / un cuchillo / una cuchara / una servilleta.* · ***Faltan** dos vasos.*
- **Cleanliness (*estar*)**: *El vaso **está sucio**.* · *El plato **está sucio**.* · *La mesa **está sucia**.*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish restaurant menu courses and polite complaint formulas with estar and faltar"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">En el restaurante — Menú del Día &amp; Polite Complaints</text><rect x="20" y="44" width="248" height="186" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="144" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">El menú del día (Ordering)</text><text x="34" y="92" font-size="11" font-weight="700" fill="var(--ink)">1. De primer plato:</text><text x="148" y="92" font-size="11" fill="var(--ink-2)">la ensalada / sopa</text><text x="34" y="116" font-size="11" font-weight="700" fill="var(--ink)">2. De segundo plato:</text><text x="158" y="116" font-size="11" fill="var(--ink-2)">pollo / pescado</text><text x="34" y="140" font-size="11" font-weight="700" fill="var(--ink)">3. De postre:</text><text x="115" y="140" font-size="11" fill="var(--ink-2)">helado / fruta</text><text x="34" y="164" font-size="11" font-weight="700" fill="var(--good)">4. Para beber:</text><text x="120" y="164" font-size="11" fill="var(--ink-2)">agua sin gas</text><line x1="34" y1="180" x2="254" y2="180" stroke="var(--line)" stroke-width="1"/><text x="144" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Quisiera... / Para mí...</text><text x="144" y="218" text-anchor="middle" font-size="11" fill="var(--ink-2)">La cuenta, por favor.</text><rect x="288" y="44" width="252" height="186" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="414" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">Problemas (Complaining Politely)</text><text x="302" y="92" font-size="11" font-weight="700" fill="var(--ink)">Polite opener:</text><text x="386" y="92" font-size="11" fill="var(--ink-2)">Perdone, camarero...</text><text x="302" y="118" font-size="11" font-weight="700" fill="var(--ink)">State (ESTAR):</text><text x="388" y="118" font-size="11" fill="var(--ink-2)">La sopa está fría.</text><text x="302" y="138" font-size="11" fill="var(--ink-2)">El tenedor está sucio.</text><text x="302" y="164" font-size="11" font-weight="700" fill="var(--ink)">Missing (FALTAR):</text><text x="404" y="164" font-size="11" fill="var(--ink-2)">Falta una cuchara.</text><text x="302" y="184" font-size="11" fill="var(--ink-2)">Faltan dos servilletas.</text><text x="302" y="210" font-size="11" font-weight="700" fill="var(--ink)">Allergy:</text><text x="352" y="210" font-size="11" fill="var(--ink-2)">Tengo alergia a...</text></svg>`,
      diagramCaption: "Left: the four course prepositions (de vs para). Right: polite complaints with estar, faltar and allergies.",
      whyItWorks:
        "In Spanish, *ser* describes permanent characteristics (*El gazpacho **es** una sopa fría* — gazpacho is inherently a cold soup!), whereas *estar* describes a condition right now (*Esta sopa de tomate **está** fría* — it should be hot, so there is a problem!).",
      workedExamples: [
        {
          title: "Ordering a full meal politely",
          problem: "Translate into Spanish: 'For the starter I would like the salad, and to drink a still water, please.'",
          steps: [
            "Starter uses **de**: *De primer plato*.",
            "'I would like' = *quisiera* + *la ensalada*.",
            "'To drink' switches preposition to **para**: *para beber*.",
            "'A still water' = *un agua sin gas* (or *una botella de agua sin gas*).",
          ],
          answer: "De primer plato quisiera la ensalada, y para beber un agua sin gas, por favor.",
          yourTurn: {
            question: "Translate into Spanish: 'Excuse me, the soup is cold and a spoon is missing.'",
            answer: {
              type: "text",
              accept: [
                "Perdone, la sopa está fría y falta una cuchara",
                "Perdone, la sopa está fría y falta una cuchara.",
                "Perdone la sopa está fría y falta una cuchara",
              ],
              display: "Perdone, la sopa está fría y falta una cuchara.",
            },
            solution: "Use formal *Perdone*, *estar* + feminine agreement (*la sopa está fría*), and singular *falta una cuchara*.",
          },
        },
        {
          title: "Stating dietary needs without the English article trap",
          problem: "A female student wants to tell a waiter: 'I am vegetarian and I am allergic to seafood.' Write this in Spanish.",
          steps: [
            "Drop 'a' after *ser* with identities/diets and use the feminine form: *Soy vegetariana* (NOT *Soy una vegetariana*).",
            "Spanish says 'I have allergy to...' + definite article: *tengo alergia a los mariscos*.",
          ],
          answer: "Soy vegetariana y tengo alergia a los mariscos.",
        },
      ],
      keyPoints: [
        "Course prepositions: **de** primer plato, **de** segundo plato, **de** postre — but **para** beber.",
        "Use **estar** (not *ser*) for restaurant complaints about temperature, taste or dirtiness: *está frío/a, está sucio/a*.",
        "**Falta** + singular item (*falta un cuchillo*); **faltan** + plural items (*faltan dos vasos*).",
        "Drop *un/una* in *Soy vegetariano/a*; use *Tengo alergia a + el/la/los/las* for allergies.",
      ],
      strategies: [
        "Always check *pedir* vs *preguntar*: use **pedir** (*pedí una paella*) to order food, never *preguntar* (to ask a question).",
        "Remember the *ser/estar* test for cold food: *es fría* = supposed to be cold; *está fría* = complaint!",
        "Address waiters with formal *usted* forms: *Perdone*, *¿Qué me recomienda?*, *¿Me trae...?*",
      ],
      thinkDeeper:
        "What is the exact difference in meaning between *El helado **es** frío* and *La paella **está** fría*? Explain why swapping *es* and *está* makes the complaint sound strange to a Spanish waiter.",
    },

    // =========================================================================
    // SECTION 4: hispanic-cuisine-tenses
    // =========================================================================
    {
      id: "hispanic-cuisine-tenses",
      heading: "Hispanic Cuisine & Food Across Three Tenses",
      discovery: {
        problem:
          "Read this Year 9 exam paragraph and underline the four time frames:\n*Normalmente **como** pasta en casa, pero ayer **fui** a un restaurante español donde **pedí** paella y **probé** gazpacho. Mañana **voy a cocinar** una tortilla española y el próximo verano **probaré** churros en Madrid.*\n\nSpot which verbs are **Present**, **Preterite**, **Immediate Future** and **Simple Future**!",
        idea:
          "Present (*como*), Preterite (*fui, pedí, probé*), Immediate Future (*voy a cocinar*), Simple Future (*probaré*). Notice the **final written accent** on *pedí, probé, probaré* — without it, *probe* or *probare* loses tense accuracy!",
      },
      body: `To earn top marks in Year 9 speaking and writing assessments, connect **authentic Hispanic cuisine** with smooth shifts across **Present**, **Preterite** and **Future** tenses.

### Iconic Dishes from Spain & Latin America
- **la paella** *(Valencia, Spain)*: saffron rice cooked in a wide pan with chicken, rabbit or seafood (*paella de mariscos*).
- **la tortilla española / de patatas** *(Spain)*: thick omelette made with eggs, potatoes and often onion (*con cebolla* or *sin cebolla*!).
- **el gazpacho** *(Andalusia, Spain)*: refreshing chilled soup blended from ripe tomatoes, cucumber, pepper, garlic and olive oil.
- **los churros con chocolate** *(Madrid, Spain)*: crisp fried dough ridges dipped in thick hot chocolate.
- **los tacos** *(Mexico)* & **las empanadas** *(Argentina / Chile / Spain)* & **el ceviche** *(Peru)*: beloved dishes across Latin America.

### Food Verbs Across All Four Year 9 Tenses (*yo* form)
| Infinitive | Present (*normalmente*) | Preterite (*ayer*) | Immediate Future (*mañana*) | Simple Future (*el año que viene*) |
|---|---|---|---|---|
| **comer** | como | **comí** | voy a comer | **comeré** |
| **beber** | bebo | **bebí** | voy a beber | **beberé** |
| **pedir** *(e→i)* | **pido** | **pedí** *(él: pidió)* | voy a pedir | **pediré** |
| **probar** *(o→ue)* | **pruebo** | **probé** | voy a probar | **probaré** |
| **pagar** *(-gar)* | pago | **pagué** | voy a pagar | **pagaré** |
| **ir** *(irreg.)* | voy | **fui** | voy a ir | **iré** |

Watch two classic Year 9 exam traps:
1. **pagar** in *yo* preterite adds **u** to keep the hard *g* sound: **pagué** (NOT *pagé*). Similarly, **almorzar** changes *z → c*: **almorcé**!
2. **pedir** is a sandal/sole stem-changer in the preterite: *pedí, pediste*, **pidió**, *pedimos, pedisteis*, **pidieron**!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-tense timeline for Spanish food narratives: Preterite, Present and Future"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Food Narratives Across Tenses — Top-Band Timeline</text><rect x="20" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="102" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">PRETERITE (Past)</text><text x="102" y="88" text-anchor="middle" font-size="10" fill="var(--ink-2)">ayer / el sábado pasado</text><text x="32" y="114" font-size="11" fill="var(--ink)">fui a un restaurante</text><text x="32" y="136" font-size="11" fill="var(--ink)">pedí / comí paella</text><text x="32" y="158" font-size="11" fill="var(--ink)">probé el gazpacho</text><text x="32" y="180" font-size="11" fill="var(--ink)">pagué la cuenta</text><text x="32" y="204" font-size="11" font-weight="700" fill="var(--bad)">¡Me encantó!</text><rect x="198" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">PRESENT (Routine)</text><text x="280" y="88" text-anchor="middle" font-size="10" fill="var(--ink-2)">normalmente / suelo</text><text x="210" y="114" font-size="11" fill="var(--ink)">desayuno tostadas</text><text x="210" y="136" font-size="11" fill="var(--ink)">almuerzo a las dos</text><text x="210" y="158" font-size="11" fill="var(--ink)">pido ensalada</text><text x="210" y="180" font-size="11" fill="var(--ink)">ceno con mi familia</text><text x="210" y="204" font-size="11" font-weight="700" fill="var(--brand)">Es delicioso.</text><rect x="376" y="48" width="164" height="178" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="458" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">FUTURE (Plans)</text><text x="458" y="88" text-anchor="middle" font-size="10" fill="var(--ink-2)">mañana / el año que viene</text><text x="388" y="114" font-size="11" fill="var(--ink)">voy a probar tacos</text><text x="388" y="136" font-size="11" fill="var(--ink)">voy a cocinar paella</text><text x="388" y="158" font-size="11" fill="var(--ink)">comeré churros</text><text x="388" y="180" font-size="11" fill="var(--ink)">pediré tortilla</text><text x="388" y="204" font-size="11" font-weight="700" fill="var(--good)">¡Será increíble!</text></svg>`,
      diagramCaption: "Anchor every restaurant story with a clear time marker and matching verb endings across all three time frames.",
      whyItWorks:
        "In Spanish, verb endings carry both the **person** and the **time frame** (*como* = I eat, *comí* = I ate, *comeré* = I will eat). Pairing each tense with a matching time marker (*normalmente / ayer / mañana*) makes your narrative effortless to follow and unlocks top assessment criteria.",
      workedExamples: [
        {
          title: "Narrating a past restaurant visit in the Preterite",
          problem: "Translate into Spanish: 'Yesterday I went to a restaurant, I ordered paella and I paid twenty euros.'",
          steps: [
            "Time marker: *Ayer* (triggers Preterite).",
            "'I went' = irregular preterite of *ir*: *fui* (*fui a un restaurante*).",
            "'I ordered' = *pedir* in *yo* preterite: *pedí* (no stem change in *yo*, accent on *-í*!).",
            "'I paid' = *pagar* (*-gar* → *-gué*): *pagué veinte euros*.",
          ],
          answer: "Ayer fui a un restaurante, pedí paella y pagué veinte euros.",
          yourTurn: {
            question: "Translate into Spanish: 'Last Saturday I tried gazpacho and next week I will eat churros.'",
            answer: {
              type: "text",
              accept: [
                "El sábado pasado probé gazpacho y la semana que viene comeré churros",
                "El sábado pasado probé gazpacho y la semana que viene comeré churros.",
                "El sábado pasado probé el gazpacho y la semana que viene comeré churros",
                "El sábado pasado probé el gazpacho y la semana que viene comeré churros.",
                "El sábado pasado probé gazpacho y la próxima semana comeré churros",
                "El sábado pasado probé gazpacho y la próxima semana comeré churros.",
              ],
              display: "El sábado pasado probé gazpacho y la semana que viene comeré churros.",
            },
            solution: "Preterite *probé* (*el sábado pasado*) + Simple Future *comeré* (*la semana que viene / la próxima semana*).",
          },
        },
        {
          title: "Spotting third-person stem-changers in the Preterite",
          problem: "Correct the two errors in this sentence: *Ayer mi hermano pedió tacos y almorzó tarde, y yo almorzé ensalada.*",
          steps: [
            "Error 1: *pedir* shifts **e → i** in 3rd-person preterite (*él/ella/ellos*): *pedió* → **pidió**.",
            "Error 2: *almorzar* is a **-zar** verb, so in *yo* preterite *z → c* before *é*: *almorzé* → **almorcé**.",
          ],
          answer: "Ayer mi hermano pidió tacos y almorzó tarde, y yo almorcé ensalada.",
        },
      ],
      keyPoints: [
        "Key Preterite restaurant verbs (*yo*): **fui**, **comí**, **bebí**, **pedí**, **probé**, **pagué** *(-gar)*, **almorcé** *(-zar)*.",
        "In 3rd-person preterite, **pedir** changes *e → i*: **pidió** (he/she ordered), **pidieron** (they ordered).",
        "Simple Future adds **-é, -ás, -á, -emos, -éis, -án** directly to the full infinitive (*probaré, comeremos, pedirán*).",
        "Past opinions use **me encantó / me encantaron** and **fue delicioso / fueron deliciosos**.",
      ],
      strategies: [
        "Use the **T3 Sandwich** in extended writing: 1 sentence Present (*Normalmente...*), 2 sentences Preterite (*El fin de semana pasado...*), 1 sentence Future (*El próximo sábado voy a... / probaré...*).",
        "Check every *-car / -gar / -zar* verb in *yo* preterite (*pagué, almorcé, saqué*) before submitting.",
        "Pair *fue* (it was) with singular dishes (*la paella fue increíble*) and *fueron* (they were) with plural dishes (*las croquetas fueron riquísimas*).",
      ],
      thinkDeeper:
        "Why does *probar* change *o → ue* in the Present (*pruebo*) yet stay *o* in the Preterite (*probé*) and Future (*probaré*), while *pedir* changes *e → i* in *pidió*? Compare *-ar* vs *-ir* stem-changing rules!",
    },
  ],
  learn: {
    flashcards: [
      { front: "desayunar / almorzar / merendar / cenar", back: "to have breakfast / lunch / an afternoon snack / dinner (never use tener!)" },
      { front: "Me encantan las gambas porque son deliciosas.", back: "I love prawns because they are delicious. (plural gustan/encantan + article + agreeing adjective)" },
      { front: "el pescado vs el pez", back: "el pescado = fish to eat on a plate; el pez = a living fish in water" },
      { front: "el agua fría", back: "cold water (agua is feminine, so the adjective is fría, but singular takes el)" },
      { front: "cien gramos de / medio kilo de", back: "100 grams of / half a kilo (500 g) of — NO article after de, NO un before medio!" },
      { front: "una barra de pan / una docena de huevos", back: "a loaf of bread (baguette) / a dozen (12) eggs" },
      { front: "¿Qué desea? / Póngame...", back: "What would you like? / Give me... (polite market shopping phrases)" },
      { front: "¿Cuánto es en total?", back: "How much is it in total?" },
      { front: "de primer plato / de segundo plato / de postre / para beber", back: "for starter / for main course / for dessert / to drink (note para for drink!)" },
      { front: "Quisiera... / ¿Qué me recomienda?", back: "I would like... / What do you recommend to me?" },
      { front: "La sopa está fría. / El vaso está sucio.", back: "The soup is cold. / The glass is dirty. (Always use ESTAR for restaurant problems!)" },
      { front: "Falta un tenedor. / Faltan dos cucharas.", back: "A fork is missing. / Two spoons are missing. (faltar agrees with the missing item(s))" },
      { front: "Soy vegetariano/a. / Tengo alergia a los frutos secos.", back: "I am vegetarian (no un/una!). / I am allergic to nuts." },
      { front: "pedí / pidió / pidieron", back: "I ordered / he or she ordered / they ordered (preterite of pedir, e→i in 3rd person)" },
      { front: "pagué / almorcé", back: "I paid (-gar → -gué) / I had lunch (-zar → -cé) in the Preterite" },
      { front: "voy a probar / probaré", back: "I am going to try (Immediate Future) / I will try (Simple Future)" },
    ],
    mustKnow: [
      "Can you name all four daily Spanish meal verbs (*desayunar, almorzar/comer, merendar, cenar*) and typical times in Spain?",
      "Can you give justified food opinions using *me gusta(n) / me encanta(n) / odio* + definite article + agreeing adjectives?",
      "Can you ask for exact weights and containers at a market (*cien gramos de, medio kilo de, una barra de pan, una docena de huevos*) without adding an article after *de*?",
      "Can you understand and calculate Spanish euro prices using *con* (*tres euros con cincuenta*)?",
      "Can you order a full three-course *menú del día* using *de primer plato, de segundo plato, de postre* and *para beber*?",
      "Can you complain politely in a restaurant using *Perdone*, *estar* (*está frío/a, está sucio/a*) and *faltar* (*falta un tenedor*)?",
      "Can you state dietary needs and allergies (*Soy vegetariano/a*, *Tengo alergia a...*)?",
      "Can you describe at least four iconic Hispanic dishes (*paella, tortilla española, gazpacho, churros, tacos, empanadas*)?",
      "Can you conjugate key food verbs (*comer, beber, pedir, probar, pagar, almorzar, ir*) accurately in the Preterite?",
      "Can you narrate a meal across Present, Preterite, Immediate Future and Simple Future in one coherent paragraph?",
    ],
    misconceptions: [
      { wrong: "Me gusta las patatas porque es delicioso.", right: "Me gustan las patatas porque son deliciosas. (Plural noun → gustan, son, deliciosas!)" },
      { wrong: "Quiero un medio kilo de las manzanas.", right: "Quiero medio kilo de manzanas. (No un before medio, and NO article after de in quantities!)" },
      { wrong: "Tengo desayuno a las ocho.", right: "Desayuno a las ocho. (Never translate 'have breakfast' with tener — use desayunar!)" },
      { wrong: "La sopa es fría y soy un vegetariano.", right: "La sopa está fría y soy vegetariano. (Use estar for complaints, and omit un before vegetariano!)" },
      { wrong: "Para primer plato, una ensalada.", right: "De primer plato, una ensalada (y para beber, agua). (Courses take de; drinks take para!)" },
      { wrong: "Ayer pagé la cuenta y mi amigo pedió pollo.", right: "Ayer pagué la cuenta y mi amigo pidió pollo. (-gar → -gué in yo; pedir → pidió in él/ella!)" },
      { wrong: "Me gusta pollo pero odio pescado.", right: "Me gusta el pollo pero odio el pescado. (Always include el/la/los/las for general food opinions!)" },
    ],
    examMistakes: [
      "Forgetting the definite article (*el/la/los/las*) after *me gusta(n)*, *me encanta(n)* or *odio*.",
      "Writing *es frío/a* instead of *está frío/a* when complaining that a hot dish arrived cold.",
      "Putting an article after *de* in market quantities (*un litro de la leche* instead of *un litro de leche*).",
      "Confusing **pedir** (to order / ask for food) with **preguntar** (to ask a question).",
      "Missing the final written accent on Preterite *yo* forms (*comí, bebí, pedí, probé*) or Simple Future (*comeré, probaré*).",
      "Translating 'a dozen eggs' as *una docena huevos* — forgetting the mandatory **de** (*una docena de huevos*).",
      "Confusing *el pez* (living fish) with *el pescado* (fish to eat) or using masculine adjectives with *el agua* (*el agua fría*).",
    ],
    mnemonics: [
      {
        topic: "Restaurant Course Prepositions",
        device: "3 De's and a Para (D-D-D-P)",
        explanation: "**De** primer plato, **de** segundo plato, **de** postre — then switch to **para** beber!",
      },
      {
        topic: "Market Zero-Article Rule",
        device: "Weight + DE + Naked Noun",
        explanation: "Whenever you measure food (*un kilo, cien gramos, una botella, una docena*), the food after **de** wears NO article (*un kilo de peras*, never *de las peras*).",
      },
      {
        topic: "Food Complaints: Ser vs Estar",
        device: "ESTAR = Emergency at the Table",
        explanation: "Cold soup (*está fría*), dirty glass (*está sucio*), salty steak (*está salado*) — every temporary restaurant problem takes **estar**!",
      },
    ],
    realWorld: [
      {
        title: "El Menú del Día in Spain",
        detail: "Most Spanish cafés and restaurants offer a weekday *menú del día* between 13:30 and 16:00 for €11–€16, including starter, main, bread, drink and dessert or coffee.",
        emoji: "🍽️",
      },
      {
        title: "Historic Covered Markets (Mercados Municipales)",
        detail: "From Madrid's Mercado de San Miguel to Barcelona's La Boqueria, locals buy exact weights (*doscientos gramos de jamón*, *medio kilo de fresas*) directly from specialist stallholders.",
        emoji: "🧺",
      },
      {
        title: "La Sobremesa",
        detail: "In Spain, finishing your meal is only half the occasion: *la sobremesa* is the relaxed 30–60 minutes spent chatting over coffee after eating — waiters never rush you with the bill unless you ask *La cuenta, por favor*!",
        emoji: "☕",
      },
      {
        title: "Tapas & Sharing Culture",
        detail: "Instead of individual plates, friends often order *raciones* (sharing portions) of *croquetas, patatas bravas, calamares* and *tortilla* to share across the table.",
        emoji: "🫒",
      },
    ],
    videos: [
      {
        title: "Ordering Food in Spanish — Restaurant Role-Play & Phrases",
        channel: "YouTube Search: Spanish Restaurant Ordering",
        url: "https://www.youtube.com/results?search_query=ordering+food+in+a+restaurant+spanish+gcse+year+9",
      },
      {
        title: "Spanish Market Quantities, Weights & Shopping Dialogues",
        channel: "YouTube Search: Spanish Market Quantities",
        url: "https://www.youtube.com/results?search_query=spanish+quantities+weights+at+the+market+un+kilo+de",
      },
      {
        title: "Gustar & Food Opinions in Spanish (Singular vs Plural)",
        channel: "YouTube Search: Gustar Food Opinions",
        url: "https://www.youtube.com/results?search_query=spanish+me+gusta+me+gustan+food+opinions",
      },
      {
        title: "Spanish Preterite vs Future Tense — Describing a Meal",
        channel: "YouTube Search: Spanish Preterite Food",
        url: "https://www.youtube.com/results?search_query=spanish+preterite+tense+food+restaurant+pedir+comer",
      },
    ],
    formulas: [
      { name: "Singular Food Opinion", formula: "Me gusta / Me encanta + el / la + [noun] porque es + [adj.]", note: "e.g. Me encanta el gazpacho porque es refrescante." },
      { name: "Plural Food Opinion", formula: "Me gustan / Me encantan + los / las + [nouns] porque son + [adj. pl.]", note: "e.g. Me gustan las uvas porque son dulces." },
      { name: "Market Weight / Container", formula: "Póngame / Quisiera + [quantity] + de + [bare noun]", note: "NEVER add el/la/los/las after de." },
      { name: "Half Measures", formula: "medio kilo de ... / media docena de ...", note: "NEVER put un/una before medio/media." },
      { name: "Three-Course Order", formula: "De primer plato ... / De segundo plato ... / De postre ... / Para beber ...", note: "3 de's for courses, para for drink." },
      { name: "Polite Restaurant Complaint (State)", formula: "Perdone, [el/la/los/las + item] está / están + [adj.]", note: "Always ESTAR: la sopa está fría; el vaso está sucio." },
      { name: "Missing Tableware", formula: "Falta + un/una [item] · Faltan + [number] [items]", note: "Agrees with the missing item(s)." },
      { name: "Dietary Requirement", formula: "Soy vegetariano/a · Tengo alergia a + el/la/los/las [food]", note: "No un/una after ser; keep definite article after alergia a." },
      { name: "Preterite Spelling Guard", formula: "pagar → pagué (-gar) · almorzar → almorcé (-zar) · pedir → pidió (e→i)", note: "Watch these three high-frequency restaurant verbs!" },
      { name: "Future Food Plan", formula: "voy a + [infinitive] · OR · [infinitive] + -é / -ás / -á / -emos / -éis / -án", note: "e.g. voy a probar paella / probaré los churros." },
    ],
  },
};
