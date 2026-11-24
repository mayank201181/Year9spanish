import type { Drill, Rng } from "./types.ts";
import { acceptedForms, conjugate, englishGloss, PERSON_LABEL, TENSE_LABEL, type Person, type Tense } from "../spanish/verbs.ts";

interface FoodEntry {
  art: "el" | "la" | "los" | "las";
  noun: string;
  en: string;
  plural: boolean;
  fem: boolean;
  adjM: string;
  adjF: string;
  adjMp: string;
  adjFp: string;
  adjEn: string;
}

const FOODS: readonly FoodEntry[] = [
  { art: "el", noun: "pollo", en: "chicken", plural: false, fem: false, adjM: "sabroso", adjF: "sabrosa", adjMp: "sabrosos", adjFp: "sabrosas", adjEn: "tasty" },
  { art: "el", noun: "queso", en: "cheese", plural: false, fem: false, adjM: "delicioso", adjF: "deliciosa", adjMp: "deliciosos", adjFp: "deliciosas", adjEn: "delicious" },
  { art: "el", noun: "pescado", en: "fish", plural: false, fem: false, adjM: "sano", adjF: "sana", adjMp: "sanos", adjFp: "sanas", adjEn: "healthy" },
  { art: "el", noun: "arroz", en: "rice", plural: false, fem: false, adjM: "rico", adjF: "rica", adjMp: "ricos", adjFp: "ricas", adjEn: "yummy" },
  { art: "el", noun: "gazpacho", en: "gazpacho", plural: false, fem: false, adjM: "sano", adjF: "sana", adjMp: "sanos", adjFp: "sanas", adjEn: "healthy" },
  { art: "la", noun: "paella", en: "paella", plural: false, fem: true, adjM: "delicioso", adjF: "deliciosa", adjMp: "deliciosos", adjFp: "deliciosas", adjEn: "delicious" },
  { art: "la", noun: "tortilla", en: "Spanish omelette", plural: false, fem: true, adjM: "sabroso", adjF: "sabrosa", adjMp: "sabrosos", adjFp: "sabrosas", adjEn: "tasty" },
  { art: "la", noun: "sopa", en: "soup", plural: false, fem: true, adjM: "salado", adjF: "salada", adjMp: "salados", adjFp: "saladas", adjEn: "salty" },
  { art: "la", noun: "ensalada", en: "salad", plural: false, fem: true, adjM: "sano", adjF: "sana", adjMp: "sanos", adjFp: "sanas", adjEn: "healthy" },
  { art: "la", noun: "fruta", en: "fruit", plural: false, fem: true, adjM: "dulce", adjF: "dulce", adjMp: "dulces", adjFp: "dulces", adjEn: "sweet" },
  { art: "los", noun: "churros", en: "churros", plural: true, fem: false, adjM: "dulce", adjF: "dulce", adjMp: "dulces", adjFp: "dulces", adjEn: "sweet" },
  { art: "los", noun: "mariscos", en: "seafood", plural: true, fem: false, adjM: "delicioso", adjF: "deliciosa", adjMp: "deliciosos", adjFp: "deliciosas", adjEn: "delicious" },
  { art: "los", noun: "tacos", en: "tacos", plural: true, fem: false, adjM: "picante", adjF: "picante", adjMp: "picantes", adjFp: "picantes", adjEn: "spicy" },
  { art: "los", noun: "guisantes", en: "peas", plural: true, fem: false, adjM: "asqueroso", adjF: "asquerosa", adjMp: "asquerosos", adjFp: "asquerosas", adjEn: "disgusting" },
  { art: "las", noun: "fresas", en: "strawberries", plural: true, fem: true, adjM: "dulce", adjF: "dulce", adjMp: "dulces", adjFp: "dulces", adjEn: "sweet" },
  { art: "las", noun: "gambas", en: "prawns", plural: true, fem: true, adjM: "sabroso", adjF: "sabrosa", adjMp: "sabrosos", adjFp: "sabrosas", adjEn: "tasty" },
  { art: "las", noun: "patatas", en: "potatoes", plural: true, fem: true, adjM: "salado", adjF: "salada", adjMp: "salados", adjFp: "saladas", adjEn: "salty" },
  { art: "las", noun: "cebollas", en: "onions", plural: true, fem: true, adjM: "asqueroso", adjF: "asquerosa", adjMp: "asquerosos", adjFp: "asquerosas", adjEn: "disgusting" },
  { art: "las", noun: "croquetas", en: "croquettes", plural: true, fem: true, adjM: "delicioso", adjF: "deliciosa", adjMp: "deliciosos", adjFp: "deliciosas", adjEn: "delicious" },
  { art: "las", noun: "uvas", en: "grapes", plural: true, fem: true, adjM: "sano", adjF: "sana", adjMp: "sanos", adjFp: "sanas", adjEn: "healthy" },
];

function agreeAdj(f: FoodEntry): string {
  if (f.plural) return f.fem ? f.adjFp : f.adjMp;
  return f.fem ? f.adjF : f.adjM;
}

interface MarketPhrase {
  qtyEs: string;
  qtyEn: string;
  itemEs: string;
  itemEn: string;
  badArt: string;
}

const MARKET_ITEMS: readonly MarketPhrase[] = [
  { qtyEs: "un kilo de", qtyEn: "a kilo of", itemEs: "manzanas", itemEn: "apples", badArt: "las" },
  { qtyEs: "un kilo de", qtyEn: "a kilo of", itemEs: "naranjas", itemEn: "oranges", badArt: "las" },
  { qtyEs: "un kilo de", qtyEn: "a kilo of", itemEs: "patatas", itemEn: "potatoes", badArt: "las" },
  { qtyEs: "un kilo de", qtyEn: "a kilo of", itemEs: "plátanos", itemEn: "bananas", badArt: "los" },
  { qtyEs: "medio kilo de", qtyEn: "half a kilo of", itemEs: "tomates", itemEn: "tomatoes", badArt: "los" },
  { qtyEs: "medio kilo de", qtyEn: "half a kilo of", itemEs: "fresas", itemEn: "strawberries", badArt: "las" },
  { qtyEs: "medio kilo de", qtyEn: "half a kilo of", itemEs: "uvas", itemEn: "grapes", badArt: "las" },
  { qtyEs: "medio kilo de", qtyEn: "half a kilo of", itemEs: "ternera", itemEn: "beef", badArt: "la" },
  { qtyEs: "un cuarto de kilo de", qtyEn: "a quarter of a kilo of", itemEs: "peras", itemEn: "pears", badArt: "las" },
  { qtyEs: "un cuarto de kilo de", qtyEn: "a quarter of a kilo of", itemEs: "zanahorias", itemEn: "carrots", badArt: "las" },
  { qtyEs: "cien gramos de", qtyEn: "100 grams of", itemEs: "queso", itemEn: "cheese", badArt: "el" },
  { qtyEs: "cien gramos de", qtyEn: "100 grams of", itemEs: "jamón", itemEn: "ham", badArt: "el" },
  { qtyEs: "doscientos gramos de", qtyEn: "200 grams of", itemEs: "jamón serrano", itemEn: "cured ham", badArt: "el" },
  { qtyEs: "doscientos gramos de", qtyEn: "200 grams of", itemEs: "gambas", itemEn: "prawns", badArt: "las" },
  { qtyEs: "un litro de", qtyEn: "a litre of", itemEs: "leche", itemEn: "milk", badArt: "la" },
  { qtyEs: "una botella de", qtyEn: "a bottle of", itemEs: "agua", itemEn: "water", badArt: "el" },
  { qtyEs: "una botella de", qtyEn: "a bottle of", itemEs: "aceite de oliva", itemEn: "olive oil", badArt: "el" },
  { qtyEs: "una lata de", qtyEn: "a tin of", itemEs: "atún", itemEn: "tuna", badArt: "el" },
  { qtyEs: "una caja de", qtyEn: "a box of", itemEs: "cereales", itemEn: "cereal", badArt: "los" },
  { qtyEs: "un paquete de", qtyEn: "a packet of", itemEs: "pasta", itemEn: "pasta", badArt: "la" },
  { qtyEs: "una barra de", qtyEn: "a loaf of", itemEs: "pan", itemEn: "bread", badArt: "el" },
  { qtyEs: "una docena de", qtyEn: "a dozen", itemEs: "huevos", itemEn: "eggs", badArt: "los" },
  { qtyEs: "media docena de", qtyEn: "half a dozen", itemEs: "huevos", itemEn: "eggs", badArt: "los" },
];

interface PriceProduct {
  es: string;
  unitEn: string;
  priceCents: number; // divisible by 4, 5, 10 so fractions are exact to the cent!
}

const PRICE_PRODUCTS: readonly PriceProduct[] = [
  { es: "manzanas", unitEn: "kg", priceCents: 240 },
  { es: "tomates", unitEn: "kg", priceCents: 320 },
  { es: "fresas", unitEn: "kg", priceCents: 480 },
  { es: "naranjas", unitEn: "kg", priceCents: 200 },
  { es: "uvas", unitEn: "kg", priceCents: 360 },
  { es: "queso", unitEn: "kg", priceCents: 1200 },
  { es: "jamón serrano", unitEn: "kg", priceCents: 2400 },
  { es: "peras", unitEn: "kg", priceCents: 280 },
];

interface WeightFrac {
  es: string;
  num: number;
  den: number;
  label: string;
}

const WEIGHT_FRACS: readonly WeightFrac[] = [
  { es: "un kilo de", num: 1, den: 1, label: "1 kg" },
  { es: "medio kilo de", num: 1, den: 2, label: "½ kg" },
  { es: "un cuarto de kilo de", num: 1, den: 4, label: "¼ kg" },
  { es: "cien gramos de", num: 1, den: 10, label: "0.1 kg (100 g)" },
  { es: "doscientos gramos de", num: 1, den: 5, label: "0.2 kg (200 g)" },
];

interface CourseItem {
  courseEs: string;
  courseEn: string;
  dishEs: string;
  dishEn: string;
}

const COURSE_ORDERS: readonly CourseItem[] = [
  { courseEs: "De primer plato", courseEn: "For the starter", dishEs: "la sopa", dishEn: "the soup" },
  { courseEs: "De primer plato", courseEn: "For the starter", dishEs: "la ensalada", dishEn: "the salad" },
  { courseEs: "De primer plato", courseEn: "For the starter", dishEs: "el gazpacho", dishEn: "the gazpacho" },
  { courseEs: "De primer plato", courseEn: "For the starter", dishEs: "las croquetas", dishEn: "the croquettes" },
  { courseEs: "De segundo plato", courseEn: "For the main course", dishEs: "el pollo", dishEn: "the chicken" },
  { courseEs: "De segundo plato", courseEn: "For the main course", dishEs: "el pescado", dishEn: "the fish" },
  { courseEs: "De segundo plato", courseEn: "For the main course", dishEs: "la paella", dishEn: "the paella" },
  { courseEs: "De segundo plato", courseEn: "For the main course", dishEs: "la tortilla española", dishEn: "the Spanish omelette" },
  { courseEs: "De segundo plato", courseEn: "For the main course", dishEs: "la ternera", dishEn: "the beef" },
  { courseEs: "De postre", courseEn: "For dessert", dishEs: "la fruta", dishEn: "the fruit" },
  { courseEs: "De postre", courseEn: "For dessert", dishEs: "el yogur", dishEn: "the yoghurt" },
  { courseEs: "De postre", courseEn: "For dessert", dishEs: "el helado de fresa", dishEn: "the strawberry ice cream" },
  { courseEs: "De postre", courseEn: "For dessert", dishEs: "los churros", dishEn: "the churros" },
  { courseEs: "Para beber", courseEn: "To drink", dishEs: "agua sin gas", dishEn: "still water" },
  { courseEs: "Para beber", courseEn: "To drink", dishEs: "agua con gas", dishEn: "sparkling water" },
  { courseEs: "Para beber", courseEn: "To drink", dishEs: "zumo de naranja", dishEn: "orange juice" },
  { courseEs: "Para beber", courseEn: "To drink", dishEs: "café con leche", dishEn: "coffee with milk" },
  { courseEs: "Para beber", courseEn: "To drink", dishEs: "té", dishEn: "tea" },
];

interface ComplaintItem {
  es: string;
  en: string;
  trapEs?: string;
  trapFeedback?: string;
  hint: string;
}

const COMPLAINTS: readonly ComplaintItem[] = [
  { es: "La sopa está fría", en: "The soup is cold", trapEs: "La sopa es fría", trapFeedback: "Use *estar* (*está*) for restaurant complaints about temperature!", hint: "Use *estar* + feminine agreement with *la sopa*." },
  { es: "El pollo está frío", en: "The chicken is cold", trapEs: "El pollo es frío", trapFeedback: "Use *estar* (*está*) for a temporary restaurant complaint!", hint: "Use *estar* + masculine agreement with *el pollo*." },
  { es: "Las patatas están frías", en: "The potatoes are cold", trapEs: "Las patatas son frías", trapFeedback: "Use plural *están* (*estar*), not *son*!", hint: "Match plural *están* and feminine plural *frías*." },
  { es: "El pescado está salado", en: "The fish is salty", trapEs: "El pescado es salado", trapFeedback: "Use *estar* (*está*) when complaining how a dish tastes right now.", hint: "*El pescado* is masculine singular; use *está*." },
  { es: "La carne está salada", en: "The meat is salty", trapEs: "La carne es salada", trapFeedback: "Use *estar* (*está*) for a complaint about today's dish.", hint: "*La carne* is feminine singular; use *está*." },
  { es: "El vaso está sucio", en: "The glass is dirty", trapEs: "El vaso es sucio", trapFeedback: "Cleanliness is a temporary state — use *está*, not *es*!", hint: "*El vaso* is masculine; use *está sucio*." },
  { es: "El plato está sucio", en: "The plate is dirty", trapEs: "El plato es sucio", trapFeedback: "Use *está* (*estar*) for temporary cleanliness states.", hint: "*El plato* is masculine; use *está sucio*." },
  { es: "La cuchara está sucia", en: "The spoon is dirty", trapEs: "La cuchara está sucio", trapFeedback: "*La cuchara* is feminine, so *sucio* becomes **sucia**.", hint: "Match feminine *la cuchara* with *está sucia*." },
  { es: "La mesa está sucia", en: "The table is dirty", trapEs: "La mesa es sucia", trapFeedback: "Use *está* (*estar*) for a dirty table.", hint: "Use *estar* + feminine *sucia*." },
  { es: "El tenedor está sucio", en: "The fork is dirty", trapEs: "El tenedor es sucio", trapFeedback: "Use *está* (*estar*) for cleanliness complaints.", hint: "*El tenedor* is masculine; use *está sucio*." },
  { es: "Falta un tenedor", en: "A fork is missing", trapEs: "Faltan un tenedor", trapFeedback: "One missing item takes singular **falta**.", hint: "Use singular *falta* + *un tenedor*." },
  { es: "Falta un cuchillo", en: "A knife is missing", trapEs: "Faltan un cuchillo", trapFeedback: "One missing item takes singular **falta**.", hint: "Use singular *falta* + *un cuchillo*." },
  { es: "Falta una cuchara", en: "A spoon is missing", trapEs: "Falta un cuchara", trapFeedback: "*Cuchara* is feminine: **una** cuchara.", hint: "Use singular *falta* + feminine *una cuchara*." },
  { es: "Falta una servilleta", en: "A napkin is missing", trapEs: "Falta un servilleta", trapFeedback: "*Servilleta* is feminine: **una** servilleta.", hint: "Use singular *falta* + feminine *una servilleta*." },
  { es: "Faltan dos vasos", en: "Two glasses are missing", trapEs: "Falta dos vasos", trapFeedback: "Multiple missing items take plural **faltan**.", hint: "Use plural *faltan* for two items." },
  { es: "Faltan dos tenedores", en: "Two forks are missing", trapEs: "Falta dos tenedores", trapFeedback: "Multiple missing items take plural **faltan**.", hint: "Use plural *faltan* + *dos tenedores*." },
  { es: "Faltan dos cuchillos", en: "Two knives are missing", trapEs: "Falta dos cuchillos", trapFeedback: "Multiple missing items take plural **faltan**.", hint: "Use plural *faltan* + *dos cuchillos*." },
  { es: "Faltan dos servilletas", en: "Two napkins are missing", trapEs: "Falta dos servilletas", trapFeedback: "Multiple missing items take plural **faltan**.", hint: "Use plural *faltan* + *dos servilletas*." },
  { es: "Soy vegetariano", en: "I am vegetarian (male)", trapEs: "Soy un vegetariano", trapFeedback: "Drop *un* after *ser* for diets: **Soy vegetariano**.", hint: "Omit *un* after *soy*." },
  { es: "Soy vegetariana", en: "I am vegetarian (female)", trapEs: "Soy una vegetariana", trapFeedback: "Drop *una* after *ser* for diets: **Soy vegetariana**.", hint: "Omit *una* after *soy* and use feminine *-a*." },
  { es: "Tengo alergia a los frutos secos", en: "I am allergic to nuts", trapEs: "Soy alergia a los frutos secos", trapFeedback: "Use *tener alergia a* + definite article.", hint: "Use *Tengo alergia a* + *los frutos secos*." },
  { es: "Tengo alergia a los mariscos", en: "I am allergic to shellfish", trapEs: "Soy alergia a los mariscos", trapFeedback: "Use *tener alergia a* + definite article.", hint: "Use *Tengo alergia a* + *los mariscos*." },
];

const FOOD_VERBS_T1: readonly string[] = ["comer", "beber", "desayunar", "cenar", "cocinar", "tomar", "pedir", "almorzar"];
const FOOD_VERBS_T2: readonly string[] = ["comer", "beber", "desayunar", "cenar", "almorzar", "pedir", "pagar", "ir", "cocinar", "tomar"];
const FOOD_VERBS_T3: readonly string[] = ["comer", "beber", "almorzar", "pedir", "pagar", "ir", "recomendar", "preferir", "poner", "hacer", "traer", "tener"];

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Food Opinions & Adjective Agreement
  // =========================================================================
  {
    id: "food-market-restaurant.opinions-agreement",
    topicId: "food-market-restaurant",
    title: "Food Opinions & Adjective Agreement",
    level: 1,
    guideRef: "food-opinions-mealtimes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const food = rng.pick(FOODS);
      const fullNoun = `${food.art} ${food.noun}`;
      const adj = agreeAdj(food);

      if (tier === 1) {
        const useEncantar = rng.bool();
        const verbEn = useEncantar ? "I love" : "I like";
        const verbEs = useEncantar ? (food.plural ? "Me encantan" : "Me encanta") : (food.plural ? "Me gustan" : "Me gusta");
        const wrongVerb = useEncantar ? (food.plural ? "Me encanta" : "Me encantan") : (food.plural ? "Me gusta" : "Me gustan");
        const ans = `${verbEs} ${fullNoun}`;
        return {
          prompt: `Translate into Spanish (include the definite article): **${verbEn} ${food.en}.**`,
          answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
          traps: [
            {
              spec: { type: "text", accept: [`${wrongVerb} ${fullNoun}`, `${wrongVerb} ${fullNoun}.`] },
              feedback: `Check singular vs plural: *${fullNoun}* is ${food.plural ? "plural" : "singular"}, so use **${verbEs}**.`,
            },
            {
              spec: { type: "text", accept: [`${verbEs} ${food.noun}`, `${verbEs} ${food.noun}.`] },
              feedback: `Remember to keep the definite article **${food.art}** before *${food.noun}*!`,
            },
          ],
          hint: `${food.plural ? "Plural" : "Singular"} noun (*${fullNoun}*) → use *${verbEs}*.`,
          solution: [
            `Noun with definite article: **${fullNoun}** (${food.plural ? "plural" : "singular"}).`,
            `Matching opinion verb: **${verbEs}** → **${ans}.**`,
          ],
        };
      }

      if (tier === 2) {
        const negative = food.adjEn === "disgusting" || food.adjEn === "salty";
        const opinion = negative
          ? { en: "I don't like", es: food.plural ? "No me gustan" : "No me gusta" }
          : rng.bool()
            ? { en: "I love", es: food.plural ? "Me encantan" : "Me encanta" }
            : { en: "I like", es: food.plural ? "Me gustan" : "Me gusta" };
        const ser = food.plural ? "son" : "es";
        const beEn = food.plural ? "they are" : "it is";
        const ans = `${opinion.es} ${fullNoun} porque ${ser} ${adj}`;
        return {
          prompt: `Translate into Spanish: **${opinion.en} ${food.en} because ${beEn} ${food.adjEn}.**`,
          answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
          hint: `Check all 3 agreements for *${fullNoun}*: verb (*${opinion.es}*), *${ser}*, and adjective ending (*${adj}*).`,
          solution: [
            `Opinion + article: **${opinion.es} ${fullNoun}**.`,
            `Reason with agreeing adjective: **porque ${ser} ${adj}**.`,
            `Full sentence: **${ans}.**`,
          ],
        };
      }

      // Tier 3: Odio / Prefiero / negative plural + agreeing adjective
      const mode = rng.pick(["odio", "no-me-gusta", "encanta"] as const);
      const ser = food.plural ? "son" : "es";
      const beEn = food.plural ? "they are" : "it is";
      const enOp = mode === "odio" ? "I hate" : mode === "no-me-gusta" ? "I don't like" : "I really love";
      const esOp =
        mode === "odio"
          ? "Odio"
          : mode === "no-me-gusta"
            ? (food.plural ? "No me gustan" : "No me gusta")
            : (food.plural ? "Me encantan" : "Me encanta");
      const intensifier = rng.bool() ? "muy " : "";
      const intensifierEn = intensifier ? "very " : "";
      const ans = `${esOp} ${fullNoun} porque ${ser} ${intensifier}${adj}`;
      return {
        prompt: `Translate into Spanish: **${enOp} ${food.en} because ${beEn} ${intensifierEn}${food.adjEn}.**`,
        answer: { type: "text", accept: [ans, `${ans}.`], display: `${ans}.` },
        hint: `Keep definite article *${food.art}* and make *${adj}* agree with ${food.fem ? "feminine" : "masculine"} ${food.plural ? "plural" : "singular"} *${fullNoun}*.`,
        solution: [
          `Opinion + definite article: **${esOp} ${fullNoun}**.`,
          `Justification: **porque ${ser} ${intensifier}${adj}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Market Quantities, Packaging & Euro Prices
  // =========================================================================
  {
    id: "food-market-restaurant.market-quantities",
    topicId: "food-market-restaurant",
    title: "Market Quantities, Packaging & Checkout",
    level: 1,
    guideRef: "market-quantities",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const it = rng.pick(MARKET_ITEMS);
        const ans = `${it.qtyEs} ${it.itemEs}`;
        const badArticleAns = `${it.qtyEs} ${it.badArt} ${it.itemEs}`;
        return {
          prompt: `Translate this Spanish market quantity: **${it.qtyEn} ${it.itemEn}**`,
          answer: { type: "text", accept: [ans], display: ans },
          traps: [
            {
              spec: { type: "text", accept: [badArticleAns] },
              feedback: `Never add an article (*${it.badArt}*) after *de* in quantity expressions! Write **${ans}**.`,
            },
          ],
          hint: "Remember the Zero-Article Rule: quantity + *de* + bare food noun.",
          solution: [
            `Quantity phrase: **${it.qtyEs}**`,
            `Add bare food noun (no *${it.badArt}*!): **${ans}**`,
          ],
        };
      }

      if (tier === 2) {
        const it = rng.pick(MARKET_ITEMS);
        const usePongame = rng.bool();
        const openerEs = usePongame ? "Póngame" : "Quisiera";
        const openerEn = usePongame ? "Give me" : "I would like";
        const ans = `${openerEs} ${it.qtyEs} ${it.itemEs}, por favor`;
        return {
          prompt: `Translate politely for a Spanish stallholder (start with *${openerEs}*): **${openerEn} ${it.qtyEn} ${it.itemEn}, please.**`,
          answer: {
            type: "text",
            accept: [ans, `${ans}.`, `${openerEs} ${it.qtyEs} ${it.itemEs} por favor`],
            display: `${ans}.`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${openerEs} ${it.qtyEs} ${it.badArt} ${it.itemEs}, por favor`, `${openerEs} ${it.qtyEs} ${it.badArt} ${it.itemEs} por favor`] },
              feedback: `Drop *${it.badArt}* after *de*! Say **${ans}.**`,
            },
          ],
          hint: `Combine *${openerEs}* + quantity + *de* + bare noun + *, por favor*.`,
          solution: [
            `Polite opener: **${openerEs}**`,
            `Exact quantity (no article after *de*): **${it.qtyEs} ${it.itemEs}**`,
            `Full order: **${ans}.**`,
          ],
        };
      }

      // Tier 3: Exact market euro checkout calculation
      const p1 = rng.pick(PRICE_PRODUCTS);
      const others = PRICE_PRODUCTS.filter((p) => p.es !== p1.es);
      const p2 = rng.pick(others);
      const w1 = rng.pick(WEIGHT_FRACS);
      const w2 = rng.pick(WEIGHT_FRACS);
      const c1 = (p1.priceCents * w1.num) / w1.den;
      const c2 = (p2.priceCents * w2.num) / w2.den;
      const totalCents = Math.round(c1 + c2);
      const totalEuros = Number((totalCents / 100).toFixed(2));
      const fmtE = (cents: number) => (cents / 100).toFixed(2);
      return {
        prompt: `At the market: *${p1.es}* cost **€${fmtE(p1.priceCents)} / kg** and *${p2.es}* cost **€${fmtE(p2.priceCents)} / kg**. You ask: *"Póngame **${w1.es} ${p1.es}** y **${w2.es} ${p2.es}**."* What is the total cost in euros?`,
        answer: { type: "number", value: totalEuros, tolerance: 0.001, display: `€${fmtE(totalCents)}` },
        hint: `Convert each Spanish weight (*${w1.es}* = ${w1.label}; *${w2.es}* = ${w2.label}) and add both subtotals.`,
        solution: [
          `${w1.es} ${p1.es} (${w1.label}): €${fmtE(p1.priceCents)} × ${w1.num}/${w1.den} = €${fmtE(c1)}.`,
          `${w2.es} ${p2.es} (${w2.label}): €${fmtE(p2.priceCents)} × ${w2.num}/${w2.den} = €${fmtE(c2)}.`,
          `Total = €${fmtE(c1)} + €${fmtE(c2)} = **€${fmtE(totalCents)}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Restaurant Ordering & Polite Complaints
  // =========================================================================
  {
    id: "food-market-restaurant.restaurant-ordering",
    topicId: "food-market-restaurant",
    title: "Restaurant Courses & Polite Complaints",
    level: 2,
    guideRef: "ordering-in-restaurant",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const item = rng.pick(COURSE_ORDERS);
        const opener = rng.bool() ? { es: "quisiera", en: "I would like" } : { es: "quiero", en: "I want" };
        const ans = `${item.courseEs}, ${opener.es} ${item.dishEs}`;
        const badPrep = item.courseEs.startsWith("De ")
          ? item.courseEs.replace(/^De /, "Para ")
          : item.courseEs.replace(/^Para /, "De ");
        return {
          prompt: `Translate this restaurant order into Spanish (use *${opener.es}*): **${item.courseEn}, ${opener.en} ${item.dishEn}.**`,
          answer: {
            type: "text",
            accept: [ans, `${ans}.`, `${item.courseEs} ${opener.es} ${item.dishEs}`],
            display: `${ans}.`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${badPrep}, ${opener.es} ${item.dishEs}`, `${badPrep} ${opener.es} ${item.dishEs}`] },
              feedback: "Remember **3 De's and a Para**: *de primer plato, de segundo plato, de postre*, but **para beber**!",
            },
          ],
          hint: "Courses take *de*; drinks take *para beber*.",
          solution: [
            `Course/drink frame: **${item.courseEs}**`,
            `Full order: **${ans}.**`,
          ],
        };
      }

      if (tier === 2) {
        const c = rng.pick(COMPLAINTS);
        return {
          prompt: `Translate this restaurant phrase into Spanish: **${c.en}.**`,
          answer: { type: "text", accept: [c.es, `${c.es}.`], display: `${c.es}.` },
          traps: c.trapEs && c.trapFeedback ? [{ spec: { type: "text", accept: [c.trapEs, `${c.trapEs}.`] }, feedback: c.trapFeedback }] : undefined,
          hint: c.hint,
          solution: [c.hint, `Answer: **${c.es}.**`],
        };
      }

      // Tier 3: Formal "Perdone, ..." polite complaint
      const c = rng.pick(COMPLAINTS);
      const lowerFirst = c.es.charAt(0).toLowerCase() + c.es.slice(1);
      const ans = `Perdone, ${lowerFirst}`;
      return {
        prompt: `Address the waiter formally with *Perdone* and translate: **Excuse me, ${c.en.charAt(0).toLowerCase() + c.en.slice(1)}.**`,
        answer: {
          type: "text",
          accept: [ans, `${ans}.`, `Perdone ${lowerFirst}`],
          display: `${ans}.`,
        },
        traps: c.trapEs && c.trapFeedback
          ? [{ spec: { type: "text", accept: [`Perdone, ${c.trapEs.charAt(0).toLowerCase() + c.trapEs.slice(1)}`, `Perdone ${c.trapEs.charAt(0).toLowerCase() + c.trapEs.slice(1)}`] }, feedback: c.trapFeedback }]
          : undefined,
        hint: `Open with formal *Perdone,* then apply: ${c.hint}`,
        solution: [
          "Formal opener: **Perdone,**",
          `Polite statement: **${ans}.**`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Food Verbs Across Four Tenses
  // =========================================================================
  {
    id: "food-market-restaurant.food-tenses",
    topicId: "food-market-restaurant",
    title: "Food Verbs Across 4 Tenses",
    level: 3,
    guideRef: "hispanic-cuisine-tenses",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const verbPool = tier === 1 ? FOOD_VERBS_T1 : tier === 2 ? FOOD_VERBS_T2 : FOOD_VERBS_T3;
      const tensePool: readonly Tense[] =
        tier === 1
          ? ["present", "near-future"]
          : tier === 2
            ? ["preterite", "future"]
            : ["present", "preterite", "near-future", "future"];
      const personPool: readonly Person[] =
        tier === 1
          ? ["yo", "tú", "él", "nosotros"]
          : tier === 2
            ? ["yo", "tú", "él", "nosotros", "ellos"]
            : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

      const inf = rng.pick(verbPool);
      const tense = rng.pick(tensePool);
      const person = rng.pick(personPool);
      const canon = conjugate(inf, tense, person);
      const accept = acceptedForms(inf, tense, person);
      const gloss = englishGloss(inf, tense, person);

      const timeClue: Record<string, string> = {
        present: "Normalmente",
        preterite: "Ayer",
        "near-future": "Mañana",
        future: "El año que viene",
      };

      return {
        prompt: `Conjugate **${inf}** in the **${TENSE_LABEL[tense]}** for **${PERSON_LABEL[person]}** *(clue: ${timeClue[tense]} — "${gloss}")*.`,
        answer: { type: "text", accept, display: canon },
        hint: `Check tense (${TENSE_LABEL[tense]}), stem/spelling changes, and written accents for *${person}*.`,
        solution: [
          `Verb: **${inf}** · Tense: **${TENSE_LABEL[tense]}** · Person: **${person}**.`,
          `Conjugated form: **${canon}** (*${gloss}*).`,
        ],
      };
    },
  },
];
