import type { Drill } from "./types.ts";

type GNum = "ms" | "fs" | "mp" | "fp";

interface Garment {
  noun: string;
  indef: "un" | "una" | "unos" | "unas";
  def: "el" | "la" | "los" | "las";
  gn: GNum;
  enSgPl: string;
  enBare: string;
}

const GARMENTS: readonly Garment[] = [
  { noun: "vestido", indef: "un", def: "el", gn: "ms", enSgPl: "a dress", enBare: "dress" },
  { noun: "abrigo", indef: "un", def: "el", gn: "ms", enSgPl: "a coat", enBare: "coat" },
  { noun: "jersey", indef: "un", def: "el", gn: "ms", enSgPl: "a jumper", enBare: "jumper" },
  { noun: "chándal", indef: "un", def: "el", gn: "ms", enSgPl: "a tracksuit", enBare: "tracksuit" },
  { noun: "camiseta", indef: "una", def: "la", gn: "fs", enSgPl: "a T-shirt", enBare: "T-shirt" },
  { noun: "camisa", indef: "una", def: "la", gn: "fs", enSgPl: "a shirt", enBare: "shirt" },
  { noun: "falda", indef: "una", def: "la", gn: "fs", enSgPl: "a skirt", enBare: "skirt" },
  { noun: "chaqueta", indef: "una", def: "la", gn: "fs", enSgPl: "a jacket", enBare: "jacket" },
  { noun: "sudadera", indef: "una", def: "la", gn: "fs", enSgPl: "a hoodie", enBare: "hoodie" },
  { noun: "corbata", indef: "una", def: "la", gn: "fs", enSgPl: "a tie", enBare: "tie" },
  { noun: "vaqueros", indef: "unos", def: "los", gn: "mp", enSgPl: "jeans", enBare: "jeans" },
  { noun: "zapatos", indef: "unos", def: "los", gn: "mp", enSgPl: "shoes", enBare: "shoes" },
  { noun: "pantalones", indef: "unos", def: "los", gn: "mp", enSgPl: "trousers", enBare: "trousers" },
  { noun: "calcetines", indef: "unos", def: "los", gn: "mp", enSgPl: "socks", enBare: "socks" },
  { noun: "zapatillas", indef: "unas", def: "las", gn: "fp", enSgPl: "trainers", enBare: "trainers" },
  { noun: "botas", indef: "unas", def: "las", gn: "fp", enSgPl: "boots", enBare: "boots" },
];

interface Colour {
  en: string;
  forms: Record<GNum, string>;
  invariable?: boolean;
  marronTrap?: boolean;
}

const COLOURS_CORE: readonly Colour[] = [
  { en: "red", forms: { ms: "rojo", fs: "roja", mp: "rojos", fp: "rojas" } },
  { en: "black", forms: { ms: "negro", fs: "negra", mp: "negros", fp: "negras" } },
  { en: "white", forms: { ms: "blanco", fs: "blanca", mp: "blancos", fp: "blancas" } },
  { en: "yellow", forms: { ms: "amarillo", fs: "amarilla", mp: "amarillos", fp: "amarillas" } },
  { en: "blue", forms: { ms: "azul", fs: "azul", mp: "azules", fp: "azules" } },
  { en: "green", forms: { ms: "verde", fs: "verde", mp: "verdes", fp: "verdes" } },
  { en: "grey", forms: { ms: "gris", fs: "gris", mp: "grises", fp: "grises" } },
  { en: "purple", forms: { ms: "morado", fs: "morada", mp: "morados", fp: "moradas" } },
];

const COLOURS_TRICKY: readonly Colour[] = [
  { en: "brown", forms: { ms: "marrón", fs: "marrón", mp: "marrones", fp: "marrones" }, marronTrap: true },
  { en: "navy blue", forms: { ms: "azul marino", fs: "azul marino", mp: "azul marino", fp: "azul marino" }, invariable: true },
  { en: "dark green", forms: { ms: "verde oscuro", fs: "verde oscuro", mp: "verde oscuro", fp: "verde oscuro" }, invariable: true },
  { en: "light blue", forms: { ms: "azul claro", fs: "azul claro", mp: "azul claro", fp: "azul claro" }, invariable: true },
  { en: "grey", forms: { ms: "gris", fs: "gris", mp: "grises", fp: "grises" } },
  { en: "blue", forms: { ms: "azul", fs: "azul", mp: "azules", fp: "azules" } },
];

const PATTERNS = [
  { en: "striped", es: "de rayas" },
  { en: "checked", es: "de cuadros" },
  { en: "polka-dot", es: "de lunares" },
  { en: "cotton", es: "de algodón" },
  { en: "wool", es: "de lana" },
  { en: "leather", es: "de cuero" },
] as const;

const DEM_NEAR: Record<GNum, string> = { ms: "este", fs: "esta", mp: "estos", fp: "estas" };
const DEM_FAR: Record<GNum, string> = { ms: "ese", fs: "esa", mp: "esos", fp: "esas" };
const DOP: Record<GNum, string> = { ms: "lo", fs: "la", mp: "los", fp: "las" };

interface PhraseEntry {
  prompt: string;
  accept: string[];
  hint: string;
  steps: string[];
  trap?: { accept: string[]; feedback: string };
}

const UNIFORM_T1: readonly PhraseEntry[] = [
  { prompt: "I have to wear a white shirt.", accept: ["Tengo que llevar una camisa blanca", "Yo tengo que llevar una camisa blanca"], hint: "Use *tengo que llevar* + *una camisa blanca*.", steps: ["**Tengo que llevar una camisa blanca**."] },
  { prompt: "I have to wear grey trousers.", accept: ["Tengo que llevar pantalones grises", "Tengo que llevar unos pantalones grises"], hint: "*Gris* becomes *grises* in the plural.", steps: ["**Tengo que llevar pantalones grises**."] },
  { prompt: "I have to wear black shoes.", accept: ["Tengo que llevar zapatos negros", "Tengo que llevar unos zapatos negros"], hint: "Masculine plural: *zapatos negros*.", steps: ["**Tengo que llevar zapatos negros**."] },
  { prompt: "I have to wear a grey skirt.", accept: ["Tengo que llevar una falda gris"], hint: "*Gris* stays *gris* for feminine singular.", steps: ["**Tengo que llevar una falda gris**."] },
  { prompt: "I have to wear a striped tie.", accept: ["Tengo que llevar una corbata de rayas"], hint: "*De rayas* is invariable after *una corbata*.", steps: ["**Tengo que llevar una corbata de rayas**."] },
  { prompt: "I have to wear a navy blue blazer (use *chaqueta*).", accept: ["Tengo que llevar una chaqueta azul marino"], hint: "Two-word *azul marino* stays invariable!", steps: ["**Tengo que llevar una chaqueta azul marino**."], trap: { accept: ["Tengo que llevar una chaqueta azula marina"], feedback: "**Azul marino** is invariable!" } },
  { prompt: "We have to wear school uniform.", accept: ["Tenemos que llevar uniforme", "Tenemos que llevar uniforme escolar", "Tenemos que llevar el uniforme escolar", "Tenemos que llevar un uniforme escolar"], hint: "Use *tenemos que llevar*.", steps: ["**Tenemos que llevar uniforme escolar**."] },
  { prompt: "Uniform saves time in the morning.", accept: ["El uniforme ahorra tiempo por la mañana"], hint: "*Ahorrar* = to save; remember *ñ* in *mañana*.", steps: ["**El uniforme ahorra tiempo por la mañana**."] },
  { prompt: "Uniform is practical.", accept: ["El uniforme es práctico"], hint: "Masculine singular + accent on *á*.", steps: ["**El uniforme es práctico**."] },
  { prompt: "Uniform is uncomfortable.", accept: ["El uniforme es incómodo"], hint: "Masculine singular + accent on *ó*.", steps: ["**El uniforme es incómodo**."] },
  { prompt: "Uniform is too expensive.", accept: ["El uniforme es demasiado caro"], hint: "Masculine singular *caro*.", steps: ["**El uniforme es demasiado caro**."] },
  { prompt: "Uniform is smart / elegant.", accept: ["El uniforme es elegante"], hint: "*Elegante* ends in *-e* (same m/f).", steps: ["**El uniforme es elegante**."] },
  { prompt: "Uniform is old-fashioned.", accept: ["El uniforme es pasado de moda", "El uniforme está pasado de moda"], hint: "*El uniforme* is masculine → *pasado de moda*.", steps: ["**El uniforme está/es pasado de moda**."] },
  { prompt: "Uniform gives a smart image (use *da una buena imagen*).", accept: ["El uniforme da una buena imagen"], hint: "Use *dar* (*da*) + *una buena imagen*.", steps: ["**El uniforme da una buena imagen**."] },
  { prompt: "Uniform avoids school bullying (use *el acoso escolar*).", accept: ["El uniforme evita el acoso escolar"], hint: "*Evitar* (*evita*) + *el acoso escolar*.", steps: ["**El uniforme evita el acoso escolar**."] },
  { prompt: "I am in favour of uniform.", accept: ["Estoy a favor del uniforme", "Yo estoy a favor del uniforme"], hint: "Use *estar a favor* + *del* (*de + el*).", steps: ["**Estoy a favor del uniforme**."], trap: { accept: ["Soy a favor del uniforme"], feedback: "Always use **estar** (*estoy a favor / en contra*), never *ser*!" } },
  { prompt: "I am against uniform.", accept: ["Estoy en contra del uniforme", "Yo estoy en contra del uniforme"], hint: "Use *estar en contra* + *del*.", steps: ["**Estoy en contra del uniforme**."] },
  { prompt: "It is forbidden to wear jewellery.", accept: ["Está prohibido llevar joyas"], hint: "*Está prohibido* + infinitive *llevar*.", steps: ["**Está prohibido llevar joyas**."] },
];

const UNIFORM_T2: readonly PhraseEntry[] = [
  { prompt: "It is forbidden to wear jeans at school.", accept: ["Está prohibido llevar vaqueros en el colegio", "Está prohibido llevar vaqueros en el instituto"], hint: "Use *Está prohibido llevar* + *vaqueros*.", steps: ["**Está prohibido llevar vaqueros en el colegio**."] },
  { prompt: "It is forbidden to wear make-up or caps.", accept: ["Está prohibido llevar maquillaje o gorras"], hint: "Make-up = *maquillaje*; caps = *gorras*.", steps: ["**Está prohibido llevar maquillaje o gorras**."] },
  { prompt: "Uniform makes all students equal (use *iguala a todos los alumnos*).", accept: ["El uniforme iguala a todos los alumnos", "El uniforme iguala a los alumnos"], hint: "Include the personal *a* before *todos los alumnos*!", steps: ["**El uniforme iguala a todos los alumnos**."] },
  { prompt: "Uniform does not allow you to express your personality.", accept: ["El uniforme no permite expresar tu personalidad"], hint: "*No permite* + infinitive *expresar* + *tu personalidad*.", steps: ["**El uniforme no permite expresar tu personalidad**."] },
  { prompt: "Uniform avoids brand pressure (use *la presión de las marcas*).", accept: ["El uniforme evita la presión de las marcas"], hint: "Accent on *presión*.", steps: ["**El uniforme evita la presión de las marcas**."] },
  { prompt: "On the one hand, uniform saves time.", accept: ["Por un lado, el uniforme ahorra tiempo", "Por un lado el uniforme ahorra tiempo"], hint: "Use *Por un lado*.", steps: ["**Por un lado, el uniforme ahorra tiempo**."] },
  { prompt: "On the other hand, uniform is boring.", accept: ["Por otro lado, el uniforme es aburrido", "Por otro lado el uniforme es aburrido"], hint: "Use *Por otro lado* + masculine *aburrido*.", steps: ["**Por otro lado, el uniforme es aburrido**."] },
  { prompt: "Uniform is practical and makes pupils equal (apply *y → e*!).", accept: ["El uniforme es práctico e iguala a los alumnos"], hint: "Switch *y → e* before *iguala*, and include personal *a*!", steps: ["**El uniforme es práctico e iguala a los alumnos**."], trap: { accept: ["El uniforme es práctico y iguala a los alumnos"], feedback: "Before a word starting with *i-*, change *y* to **e**!" } },
  { prompt: "Uniform is smart and uncomfortable (apply *y → e*!).", accept: ["El uniforme es elegante e incómodo"], hint: "Before *incómodo*, *y* changes to *e*!", steps: ["**El uniforme es elegante e incómodo**."], trap: { accept: ["El uniforme es elegante y incómodo"], feedback: "Change *y* to **e** before *incómodo*!" } },
  { prompt: "I would like to wear my own clothes (use *mi propia ropa*).", accept: ["Me gustaría llevar mi propia ropa"], hint: "*La ropa* is feminine singular → *mi propia ropa*.", steps: ["**Me gustaría llevar mi propia ropa**."] },
  { prompt: "I would like to wear trainers and a hoodie.", accept: ["Me gustaría llevar zapatillas y una sudadera", "Me gustaría llevar unas zapatillas y una sudadera"], hint: "*Me gustaría* + infinitive *llevar*.", steps: ["**Me gustaría llevar zapatillas y una sudadera**."] },
  { prompt: "For PE we wear a tracksuit and trainers (use *Para educación física*).", accept: ["Para educación física llevamos un chándal y zapatillas", "Para educación física llevamos un chándal y zapatillas de deporte"], hint: "Accents on *educación*, *física* and *chándal*.", steps: ["**Para educación física llevamos un chándal y zapatillas**."] },
  { prompt: "In winter we have to wear a blazer and tie (use *chaqueta y corbata*).", accept: ["En invierno tenemos que llevar chaqueta y corbata", "En invierno tenemos que llevar una chaqueta y una corbata"], hint: "*Tenemos que llevar* + *chaqueta y corbata*.", steps: ["**En invierno tenemos que llevar chaqueta y corbata**."] },
  { prompt: "It is too hot with a blazer and tie (use *Hace demasiado calor*).", accept: ["Hace demasiado calor con chaqueta y corbata", "Hace demasiado calor con una chaqueta y una corbata"], hint: "Weather heat uses *hace calor* + *demasiado*.", steps: ["**Hace demasiado calor con chaqueta y corbata**."] },
  { prompt: "In my opinion, uniform gives a good image of the school.", accept: ["En mi opinión, el uniforme da una buena imagen del colegio", "En mi opinión el uniforme da una buena imagen del colegio"], hint: "Accent on *opinión*, and contract *de + el → del*.", steps: ["**En mi opinión, el uniforme da una buena imagen del colegio**."] },
  { prompt: "Uniform costs too much money for some families (use *algunas familias*).", accept: ["El uniforme cuesta demasiado dinero para algunas familias"], hint: "*Costar* (*o → ue*): *cuesta*.", steps: ["**El uniforme cuesta demasiado dinero para algunas familias**."] },
];

const UNIFORM_T3: readonly PhraseEntry[] = [
  { prompt: "Although uniform saves time, I am against it.", accept: ["Aunque el uniforme ahorra tiempo, estoy en contra", "Aunque el uniforme ahorra tiempo estoy en contra"], hint: "Start with *Aunque* + Present tense.", steps: ["**Aunque el uniforme ahorra tiempo, estoy en contra**."] },
  { prompt: "Although uniform is uncomfortable, I am in favour of it.", accept: ["Aunque el uniforme es incómodo, estoy a favor", "Aunque el uniforme es incómodo estoy a favor"], hint: "Mind the accent on *incómodo*.", steps: ["**Aunque el uniforme es incómodo, estoy a favor**."] },
  { prompt: "On the one hand it is practical; however, it is too expensive.", accept: ["Por un lado es práctico; sin embargo, es demasiado caro", "Por un lado es práctico, sin embargo es demasiado caro", "Por un lado es práctico, sin embargo, es demasiado caro"], hint: "Use *Por un lado* and *sin embargo*.", steps: ["**Por un lado es práctico; sin embargo, es demasiado caro**."] },
  { prompt: "Uniform avoids bullying; however, it is old-fashioned.", accept: ["El uniforme evita el acoso escolar; sin embargo, es pasado de moda", "El uniforme evita el acoso escolar, sin embargo es pasado de moda", "El uniforme evita el acoso escolar; sin embargo, está pasado de moda"], hint: "Connect with *sin embargo*.", steps: ["**El uniforme evita el acoso escolar; sin embargo, es pasado de moda**."] },
  { prompt: "I prefer wearing comfortable clothes because uniform is boring.", accept: ["Prefiero llevar ropa cómoda porque el uniforme es aburrido"], hint: "*Prefiero* (*e → ie*) + infinitive *llevar* + feminine *ropa cómoda*.", steps: ["**Prefiero llevar ropa cómoda porque el uniforme es aburrido**."] },
  { prompt: "I am in favour of uniform because it saves time and makes pupils equal.", accept: ["Estoy a favor del uniforme porque ahorra tiempo e iguala a los alumnos"], hint: "Combine *del*, *e iguala* and personal *a*!", steps: ["**Estoy a favor del uniforme porque ahorra tiempo e iguala a los alumnos**."] },
  { prompt: "I am against uniform because it does not allow you to express your creativity.", accept: ["Estoy en contra del uniforme porque no permite expresar tu creatividad"], hint: "Use *del uniforme* and *no permite expresar*.", steps: ["**Estoy en contra del uniforme porque no permite expresar tu creatividad**."] },
  { prompt: "At my school it is forbidden to wear trainers, so I wear black shoes.", accept: ["En mi colegio está prohibido llevar zapatillas, así que llevo zapatos negros", "En mi colegio está prohibido llevar zapatillas así que llevo zapatos negros"], hint: "Connect with *así que* (accent on *í*).", steps: ["**En mi colegio está prohibido llevar zapatillas, así que llevo zapatos negros**."] },
  { prompt: "Although it gives a smart image, the blazer is uncomfortable in summer.", accept: ["Aunque da una buena imagen, la chaqueta es incómoda en verano", "Aunque da una buena imagen la chaqueta es incómoda en verano"], hint: "Agree feminine *incómoda* with *la chaqueta*!", steps: ["**Aunque da una buena imagen, la chaqueta es incómoda en verano**."] },
  { prompt: "In my opinion, the skirts are old-fashioned and uncomfortable.", accept: ["En mi opinión, las faldas están pasadas de moda y son incómodas", "En mi opinión, las faldas son pasadas de moda e incómodas", "En mi opinión las faldas están pasadas de moda y son incómodas"], hint: "Feminine plural agreement: *pasadas* and *incómodas*.", steps: ["**En mi opinión, las faldas están pasadas de moda y son incómodas**."] },
  { prompt: "From my point of view, uniform avoids brand pressure.", accept: ["Desde mi punto de vista, el uniforme evita la presión de las marcas", "Desde mi punto de vista el uniforme evita la presión de las marcas"], hint: "*Desde mi punto de vista* = from my point of view.", steps: ["**Desde mi punto de vista, el uniforme evita la presión de las marcas**."] },
  { prompt: "I would like to wear blue jeans instead of grey trousers (use *en lugar de*).", accept: ["Me gustaría llevar vaqueros azules en lugar de pantalones grises"], hint: "Use *en lugar de* (*instead of*) + plural colour agreements.", steps: ["**Me gustaría llevar vaqueros azules en lugar de pantalones grises**."] },
  { prompt: "Although we have to wear a tie, we can wear shorts in summer.", accept: ["Aunque tenemos que llevar corbata, podemos llevar pantalones cortos en verano", "Aunque tenemos que llevar una corbata, podemos llevar pantalones cortos en verano"], hint: "*Podemos llevar* + *pantalones cortos*.", steps: ["**Aunque tenemos que llevar corbata, podemos llevar pantalones cortos en verano**."] },
  { prompt: "Brands do not matter to me because they cost too much (use *No me importan*).", accept: ["No me importan las marcas porque cuestan demasiado", "No me importan las marcas porque cuestan demasiado dinero"], hint: "Plural *las marcas* → *importan* and *cuestan*.", steps: ["**No me importan las marcas porque cuestan demasiado**."] },
  { prompt: "Next year I will wear a new uniform (Simple Future).", accept: ["El año que viene llevaré un uniforme nuevo", "El próximo año llevaré un uniforme nuevo"], hint: "Simple Future *llevaré* (accent on *é*).", steps: ["**El año que viene llevaré un uniforme nuevo**."] },
  { prompt: "Moreover, uniform is cheaper than designer clothes (use *Además* and *ropa de marca*).", accept: ["Además, el uniforme es más barato que la ropa de marca", "Además el uniforme es más barato que la ropa de marca"], hint: "Accents on *Además* and *más*; comparative *más barato que*.", steps: ["**Además, el uniforme es más barato que la ropa de marca**."] },
];

const TENSE_T1: readonly PhraseEntry[] = [
  { prompt: "Present (*yo*): **Normally I wear jeans and a hoodie.**", accept: ["Normalmente llevo vaqueros y una sudadera", "Normalmente llevo unos vaqueros y una sudadera"], hint: "Regular Present of *llevar* = *llevo*.", steps: ["**Normalmente llevo vaqueros y una sudadera**."] },
  { prompt: "Present (*yo*): **At weekends I put on a tracksuit.** (Use *Los fines de semana* and *ponerse*.)", accept: ["Los fines de semana me pongo un chándal"], hint: "*Ponerse* is a *yo-go* verb → *me pongo*.", steps: ["**Los fines de semana me pongo un chándal**."] },
  { prompt: "Present (*yo*): **In summer I usually wear shorts.** (Use *suelo llevar*.)", accept: ["En verano suelo llevar pantalones cortos"], hint: "*Soler* (*o → ue*) = *suelo* + infinitive *llevar*.", steps: ["**En verano suelo llevar pantalones cortos**."] },
  { prompt: "Present (*yo*): **I prefer sporty clothes.** (Use *ropa deportiva*.)", accept: ["Prefiero la ropa deportiva", "Prefiero ropa deportiva", "Yo prefiero ropa deportiva"], hint: "*Preferir* (*e → ie*) = *prefiero*; *ropa* is feminine singular.", steps: ["**Prefiero ropa deportiva**."] },
  { prompt: "Present (*yo*): **I often go shopping with my friends.** (Use *A menudo*.)", accept: ["A menudo voy de compras con mis amigos"], hint: "*Ir* (*yo* Present) = *voy*.", steps: ["**A menudo voy de compras con mis amigos**."] },
  { prompt: "Present (*yo*): **I try on this black jacket.** (Use *probarse*.)", accept: ["Me pruebo esta chaqueta negra"], hint: "*Probarse* (*o → ue*) = *me pruebo*.", steps: ["**Me pruebo esta chaqueta negra**."] },
  { prompt: "Present (*yo*): **I buy cheap clothes in the sales.** (Use *en las rebajas*.)", accept: ["Compro ropa barata en las rebajas", "Yo compro ropa barata en las rebajas"], hint: "Feminine singular *ropa barata*.", steps: ["**Compro ropa barata en las rebajas**."] },
  { prompt: "Present (*nosotros*): **We wear white trainers.**", accept: ["Llevamos zapatillas blancas", "Llevamos unas zapatillas blancas", "Nosotros llevamos zapatillas blancas"], hint: "*Llevar* (*nosotros*) = *llevamos*.", steps: ["**Llevamos zapatillas blancas**."] },
  { prompt: "Immediate Future (*yo*): **Tonight I am going to wear a red dress.** (Use *Esta noche*.)", accept: ["Esta noche voy a llevar un vestido rojo"], hint: "*Voy a* + infinitive *llevar* + masculine *un vestido rojo*.", steps: ["**Esta noche voy a llevar un vestido rojo**."] },
  { prompt: "Immediate Future (*yo*): **Tomorrow I am going to go shopping.**", accept: ["Mañana voy a ir de compras"], hint: "*Voy a ir de compras*.", steps: ["**Mañana voy a ir de compras**."] },
  { prompt: "Immediate Future (*yo*): **This Saturday I am going to buy new boots.** (Use *Este sábado* and *botas nuevas*.)", accept: ["Este sábado voy a comprar unas botas nuevas", "Este sábado voy a comprar botas nuevas"], hint: "Accent on *sábado*; feminine plural *botas nuevas*.", steps: ["**Este sábado voy a comprar unas botas nuevas**."] },
  { prompt: "Immediate Future (*yo*): **For the party I am going to put on a white shirt.**", accept: ["Para la fiesta voy a ponerme una camisa blanca", "Para la fiesta me voy a poner una camisa blanca"], hint: "Attach *-me* to *poner* (or place *me* before *voy*).", steps: ["**Para la fiesta voy a ponerme una camisa blanca**."] },
  { prompt: "Immediate Future (*yo*): **I am going to pay by card.**", accept: ["Voy a pagar con tarjeta"], hint: "*Voy a pagar con tarjeta*.", steps: ["**Voy a pagar con tarjeta**."] },
  { prompt: "Immediate Future (*yo*): **I am going to return these shoes.** (Use *devolver*.)", accept: ["Voy a devolver estos zapatos"], hint: "*Voy a devolver* + *estos zapatos*.", steps: ["**Voy a devolver estos zapatos**."] },
  { prompt: "Immediate Future (*nosotros*): **Tomorrow we are going to look for a bargain.**", accept: ["Mañana vamos a buscar una ganga"], hint: "*Vamos a buscar una ganga*.", steps: ["**Mañana vamos a buscar una ganga**."] },
  { prompt: "Immediate Future (*yo*): **I am going to try on that green coat.**", accept: ["Voy a probarme ese abrigo verde", "Me voy a probar ese abrigo verde"], hint: "*Ese abrigo verde* (masculine far demonstrative).", steps: ["**Voy a probarme ese abrigo verde**."] },
];

const TENSE_T2: readonly PhraseEntry[] = [
  { prompt: "Preterite (*yo*): **Yesterday I bought a blue hoodie.**", accept: ["Ayer compré una sudadera azul", "Ayer yo compré una sudadera azul"], hint: "Regular *-ar* Preterite *-é* (accent!).", steps: ["**Ayer compré una sudadera azul**."] },
  { prompt: "Preterite (*yo*): **Last Saturday I went shopping.**", accept: ["El sábado pasado fui de compras"], hint: "Irregular *fui* (NO accent!).", steps: ["**El sábado pasado fui de compras**."], trap: { accept: ["El sábado pasado fuí de compras"], feedback: "**Fui** takes NO written accent!" } },
  { prompt: "Preterite (*yo*): **Yesterday I paid forty euros.**", accept: ["Ayer pagué cuarenta euros", "Ayer yo pagué cuarenta euros"], hint: "*-gar → -gué* (*pagué*).", steps: ["**Ayer pagué cuarenta euros**."], trap: { accept: ["Ayer pagé cuarenta euros"], feedback: "Remember *-gar → -gué*: **pagué**!" } },
  { prompt: "Preterite (*yo*): **Yesterday I looked for brown boots.**", accept: ["Ayer busqué unas botas marrones", "Ayer busqué botas marrones"], hint: "*-car → -qué* (*busqué*) + accentless *marrones*.", steps: ["**Ayer busqué unas botas marrones**."], trap: { accept: ["Ayer buscé unas botas marrones"], feedback: "Remember *-car → -qué*: **busqué**!" } },
  { prompt: "Preterite (*yo*): **Last night I put on a black suit.** (Use *Anoche* and *ponerse*.)", accept: ["Anoche me puse un traje negro"], hint: "Irregular Preterite of *ponerse* = *me puse* (no accent!).", steps: ["**Anoche me puse un traje negro**."], trap: { accept: ["Anoche me poní un traje negro"], feedback: "Irregular Preterite of *ponerse* is **me puse**!" } },
  { prompt: "Preterite (*yo*): **Yesterday I tried on a checked shirt.**", accept: ["Ayer me probé una camisa de cuadros"], hint: "No stem change in Preterite: *me probé*.", steps: ["**Ayer me probé una camisa de cuadros**."] },
  { prompt: "Preterite (*yo*): **I chose a silk scarf.** (Use *elegir* and *una bufanda de seda*.)", accept: ["Elegí una bufanda de seda", "Yo elegí una bufanda de seda"], hint: "Regular *-ir* *yo* Preterite: *elegí*.", steps: ["**Elegí una bufanda de seda**."] },
  { prompt: "Preterite (*yo*): **I spent twenty euros in the sales.** (Use *gastar* and *veinte euros*.)", accept: ["Gasté veinte euros en las rebajas", "Yo gasté veinte euros en las rebajas"], hint: "Regular *-ar* Preterite: *gasté*.", steps: ["**Gasté veinte euros en las rebajas**."] },
  { prompt: "Preterite (*yo*): **I wore my green dress yesterday.**", accept: ["Llevé mi vestido verde ayer", "Ayer llevé mi vestido verde"], hint: "Regular *-ar* Preterite: *llevé*.", steps: ["**Llevé mi vestido verde ayer**."] },
  { prompt: "Preterite: **The jacket cost thirty euros.** (Use *La chaqueta* and *treinta euros*.)", accept: ["La chaqueta costó treinta euros"], hint: "Singular Preterite of *costar* = *costó*.", steps: ["**La chaqueta costó treinta euros**."] },
  { prompt: "Preterite: **Those shoes cost fifty euros.** (Use *Esos zapatos* and *cincuenta euros*.)", accept: ["Esos zapatos costaron cincuenta euros"], hint: "Plural Preterite of *costar* = *costaron*.", steps: ["**Esos zapatos costaron cincuenta euros**."], trap: { accept: ["Esos zapatos costó cincuenta euros"], feedback: "Plural *zapatos* requires plural Preterite **costaron**!" } },
  { prompt: "Preterite: **It was a real bargain!** (Use *¡Fue una ganga!* or *Fue una ganga*.)", accept: ["¡Fue una ganga!", "Fue una ganga"], hint: "Preterite of *ser* (*él/it*) = *fue* (no accent).", steps: ["**¡Fue una ganga!**"] },
  { prompt: "Preterite: **The skirt fitted me well.** (Use *La falda* and *quedar*.)", accept: ["La falda me quedó bien"], hint: "Singular Preterite of *quedar* = *quedó*.", steps: ["**La falda me quedó bien**."] },
  { prompt: "Preterite: **The jeans were too tight on me.** (Use *Los vaqueros* and *quedar*.)", accept: ["Los vaqueros me quedaron demasiado estrechos"], hint: "Plural Preterite *quedaron* + masculine plural *estrechos*.", steps: ["**Los vaqueros me quedaron demasiado estrechos**."] },
  { prompt: "Preterite (*ella*): **My sister bought a red coat.**", accept: ["Mi hermana compró un abrigo rojo"], hint: "*Ella* Preterite of *comprar* = *compró* (accent on *ó*!).", steps: ["**Mi hermana compró un abrigo rojo**."] },
  { prompt: "Preterite (*nosotros*): **Last weekend we went shopping.**", accept: ["El fin de semana pasado fuimos de compras"], hint: "*Ir* (*nosotros* Preterite) = *fuimos* (no accent).", steps: ["**El fin de semana pasado fuimos de compras**."] },
];

const TENSE_T3: readonly PhraseEntry[] = [
  { prompt: "Simple Future (*yo*): **For the party I will put on a black dress.**", accept: ["Para la fiesta me pondré un vestido negro"], hint: "Irregular Simple Future of *ponerse* = *me pondré*.", steps: ["**Para la fiesta me pondré un vestido negro**."], trap: { accept: ["Para la fiesta me poneré un vestido negro"], feedback: "Use irregular stem **pondr-** → **me pondré**!" } },
  { prompt: "Simple Future (*yo*): **Tomorrow I will wear my wool jumper.** (Use *mi jersey de lana*.)", accept: ["Mañana llevaré mi jersey de lana"], hint: "Infinitive *llevar* + accented *-é*.", steps: ["**Mañana llevaré mi jersey de lana**."] },
  { prompt: "Simple Future (*yo*): **Next Saturday I will go shopping.** (Use *El próximo sábado*.)", accept: ["El próximo sábado iré de compras"], hint: "Accents on *próximo*, *sábado* and *iré*.", steps: ["**El próximo sábado iré de compras**."] },
  { prompt: "Simple Future (*yo*): **In the sales I will buy leather boots.** (Use *En las rebajas*.)", accept: ["En las rebajas compraré unas botas de cuero", "En las rebajas compraré botas de cuero"], hint: "Infinitive *comprar* + accented *-é*.", steps: ["**En las rebajas compraré unas botas de cuero**."] },
  { prompt: "Simple Future (*yo*): **In the future I will spend less money on clothes.** (Use *menos dinero en ropa*.)", accept: ["En el futuro gastaré menos dinero en ropa"], hint: "Infinitive *gastar* + accented *-é*.", steps: ["**En el futuro gastaré menos dinero en ropa**."] },
  { prompt: "Simple Future (*yo*): **I will pay in cash.**", accept: ["Pagaré en efectivo", "Yo pagaré en efectivo"], hint: "No *-gu-* change in Simple Future: *pagaré*!", steps: ["**Pagaré en efectivo**."] },
  { prompt: "Simple Future (*yo*): **I will look for a cheap scarf.**", accept: ["Buscaré una bufanda barata", "Yo buscaré una bufanda barata"], hint: "No *-qu-* change in Simple Future: *buscaré*!", steps: ["**Buscaré una bufanda barata**."] },
  { prompt: "Simple Future (*nosotros*): **Tomorrow we will go shopping.**", accept: ["Mañana iremos de compras", "Mañana nosotros iremos de compras"], hint: "Remember *-emos* is the ONLY Simple Future ending with NO accent!", steps: ["**Mañana iremos de compras**."], trap: { accept: ["Mañana irémos de compras"], feedback: "**Iremos** takes NO written accent on *-emos*!" } },
  { prompt: "Simple Future (*nosotros*): **We will save more money.** (Use *ahorrar*.)", accept: ["Ahorraremos más dinero", "Nosotros ahorraremos más dinero"], hint: "No accent on *-emos*; accent on *más*.", steps: ["**Ahorraremos más dinero**."] },
  { prompt: "Simple Future: **That coat will cost eighty euros.** (Use *ochenta euros*.)", accept: ["Ese abrigo costará ochenta euros"], hint: "Simple Future *él/it*: *costará* (no *o → ue* change!).", steps: ["**Ese abrigo costará ochenta euros**."] },
  { prompt: "Simple Future: **Those trainers will cost sixty euros.** (Use *sesenta euros*.)", accept: ["Esas zapatillas costarán sesenta euros"], hint: "Simple Future *ellos*: *costarán* (accent on *á*).", steps: ["**Esas zapatillas costarán sesenta euros**."] },
  { prompt: "Simple Future (*yo*): **I will try on those grey trousers.**", accept: ["Me probaré esos pantalones grises"], hint: "No *o → ue* stem change in Simple Future: *me probaré*.", steps: ["**Me probaré esos pantalones grises**."] },
  { prompt: "Simple Future (*yo*): **Next summer I will wear cotton T-shirts.** (Use *El próximo verano*.)", accept: ["El próximo verano llevaré camisetas de algodón"], hint: "Accents on *próximo*, *llevaré* and *algodón*.", steps: ["**El próximo verano llevaré camisetas de algodón**."] },
  { prompt: "Simple Future (*yo*): **I will choose a striped tie.** (Use *elegir*.)", accept: ["Elegiré una corbata de rayas", "Yo elegiré una corbata de rayas"], hint: "Full infinitive *elegir* + accented *-é*.", steps: ["**Elegiré una corbata de rayas**."] },
  { prompt: "Two tenses: **Normally I wear jeans, but tomorrow I will wear a suit.**", accept: ["Normalmente llevo vaqueros, pero mañana llevaré un traje", "Normalmente llevo vaqueros pero mañana llevaré un traje"], hint: "Present *llevo* vs Simple Future *llevaré*.", steps: ["**Normalmente llevo vaqueros, pero mañana llevaré un traje**."] },
  { prompt: "Two tenses: **Yesterday I bought a jacket, and tomorrow I will put it on.** (Use *me la pondré*.)", accept: ["Ayer compré una chaqueta y mañana me la pondré"], hint: "Preterite *compré* + Simple Future *me la pondré* (*la* = *la chaqueta*).", steps: ["**Ayer compré una chaqueta y mañana me la pondré**."] },
];

export const drills: Drill[] = [
  {
    id: "clothes-uniform-shopping.clothing-colours",
    topicId: "clothes-uniform-shopping",
    title: "Clothing, Colours & Pattern Agreement",
    level: 1,
    guideRef: "clothes-colours-agreement",
    generate(rng, tier) {
      if (tier === 1) {
        const g = rng.pick(GARMENTS);
        const c = rng.pick(COLOURS_CORE);
        const cForm = c.forms[g.gn];
        const canon = `${g.indef} ${g.noun} ${cForm}`;
        const enPhrase =
          g.gn === "ms" || g.gn === "fs"
            ? `${/^[aeiou]/i.test(c.en) ? "an" : "a"} ${c.en} ${g.enBare}`
            : `${c.en} ${g.enBare}`;
        const accept = g.gn === "mp" || g.gn === "fp" ? [canon, `${g.noun} ${cForm}`] : [canon];
        const traps = [
          {
            spec: { type: "text" as const, accept: [`${g.indef} ${cForm} ${g.noun}`] },
            feedback: `In Spanish, colour adjectives go **AFTER** the noun → **${canon}**!`,
          },
        ];
        if (g.noun === "vestido") {
          traps.push({
            spec: { type: "text" as const, accept: [`una vestido ${c.forms.fs}`] },
            feedback: "**El vestido** is masculine! Always use **un vestido** + masculine colour.",
          });
        }
        return {
          prompt: `Translate into Spanish (include *${g.indef}*): **${enPhrase}**`,
          answer: { type: "text", accept, display: canon },
          hint: `Put *${g.noun}* FIRST, then match *${c.en}* to ${g.gn === "ms" ? "masculine singular" : g.gn === "fs" ? "feminine singular" : g.gn === "mp" ? "masculine plural" : "feminine plural"}.`,
          solution: [
            `Garment noun: **${g.indef} ${g.noun}**.`,
            `Agreed colour after noun: **${cForm}** → **${canon}**.`,
          ],
          traps,
        };
      }

      if (tier === 2) {
        const g = rng.pick(GARMENTS);
        const c = rng.pick(COLOURS_TRICKY);
        const pat = rng.pick(PATTERNS);
        const cForm = c.forms[g.gn];
        const canon = `${g.indef} ${g.noun} ${cForm} ${pat.es}`;
        const alt = `${g.indef} ${g.noun} ${pat.es} ${cForm}`;
        const enPhrase =
          g.gn === "ms" || g.gn === "fs"
            ? `a ${pat.en} ${c.en} ${g.enBare}`
            : `${pat.en} ${c.en} ${g.enBare}`;
        const accept = g.gn === "mp" || g.gn === "fp"
          ? [canon, alt, `${g.noun} ${cForm} ${pat.es}`, `${g.noun} ${pat.es} ${cForm}`]
          : [canon, alt];
        const traps = [];
        if (c.marronTrap && (g.gn === "mp" || g.gn === "fp")) {
          traps.push({
            spec: { type: "text" as const, accept: [`${g.indef} ${g.noun} marrónes ${pat.es}`] },
            feedback: "The written accent on *marrón* DROPS in the plural → **marrones**!",
          });
        }
        return {
          prompt: `Translate into Spanish (include *${g.indef}*): **${enPhrase}**`,
          answer: { type: "text", accept, display: canon },
          hint: `${c.invariable ? "Two-word colours stay INVARIABLE! " : ""}Put noun first; *${pat.en}* uses invariable *de + noun*.`,
          solution: [
            `Noun: **${g.indef} ${g.noun}** + colour **${cForm}**${c.invariable ? " (invariable)" : ""} + pattern/material **${pat.es}** (invariable).`,
            `Result: **${canon}**.`,
          ],
          traps: traps.length ? traps : undefined,
        };
      }

      // Tier 3: Full "Llevo [garment 1 + colour] y [garment 2 + colour]" sentence
      const g1 = rng.pick(GARMENTS.slice(0, 10));
      const g2 = rng.pick(GARMENTS.slice(10));
      const c1 = rng.pick(COLOURS_CORE);
      const c2 = rng.pick(COLOURS_TRICKY);
      const p1 = `${g1.indef} ${g1.noun} ${c1.forms[g1.gn]}`;
      const p2 = `${g2.indef} ${g2.noun} ${c2.forms[g2.gn]}`;
      const canon = `Llevo ${p1} y ${p2}`;
      const alt = `Llevo ${p1} y ${g2.noun} ${c2.forms[g2.gn]}`;
      const en1 = `${/^[aeiou]/i.test(c1.en) ? "an" : "a"} ${c1.en} ${g1.enBare}`;
      const en2 = `${c2.en} ${g2.enBare}`;
      return {
        prompt: `Translate into Spanish (Present *yo*, *llevar*): **I wear ${en1} and ${en2}.**`,
        answer: { type: "text", accept: [canon, alt, `Yo ${canon.toLowerCase()}`, `Yo ${alt.toLowerCase()}`], display: canon },
        hint: "Use *Llevo* + noun before colour for BOTH items; watch plural/invariable colour rules!",
        solution: [
          `Item 1: **${p1}**.`,
          `Item 2: **${p2}**.`,
          `Full sentence: **${canon}**.`,
        ],
      };
    },
  },
  {
    id: "clothes-uniform-shopping.uniform-debate",
    topicId: "clothes-uniform-shopping",
    title: "School Uniform & Balanced Debate",
    level: 2,
    guideRef: "school-uniform-debate",
    generate(rng, tier) {
      const pool = tier === 1 ? UNIFORM_T1 : tier === 2 ? UNIFORM_T2 : UNIFORM_T3;
      const item = rng.pick(pool);
      return {
        prompt: `Translate into Spanish: **${item.prompt}**`,
        answer: { type: "text", accept: item.accept, display: item.accept[0] },
        hint: item.hint,
        solution: item.steps,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
      };
    },
  },
  {
    id: "clothes-uniform-shopping.shopping-demonstratives",
    topicId: "clothes-uniform-shopping",
    title: "Demonstratives (Este / Ese), Quedar & Costar",
    level: 1,
    guideRef: "shopping-demonstratives",
    generate(rng, tier) {
      const g = rng.pick(GARMENTS);
      const near = rng.bool(0.5);
      const dem = near ? DEM_NEAR[g.gn] : DEM_FAR[g.gn];
      const isPl = g.gn === "mp" || g.gn === "fp";
      const demEn = near ? (isPl ? "these" : "this") : (isPl ? "those" : "that");

      if (tier === 1) {
        const canon = `${dem} ${g.noun}`;
        const traps = [];
        if (g.gn === "ms") {
          traps.push({
            spec: { type: "text" as const, accept: [`${near ? "esto" : "eso"} ${g.noun}`] },
            feedback: `Never use neuter *${near ? "esto" : "eso"}* before a noun — masculine singular is **${dem} ${g.noun}**!`,
          });
        }
        const wrongDist = near ? DEM_FAR[g.gn] : DEM_NEAR[g.gn];
        traps.push({
          spec: { type: "text" as const, accept: [`${wrongDist} ${g.noun}`] },
          feedback: near
            ? "Remember: 'this/these' keeps the **t** (**este/esta/estos/estas**)!"
            : "Remember: 'that/those' drops the **t** (**ese/esa/esos/esas**)!",
        });
        return {
          prompt: `Translate into Spanish: **${demEn} ${g.enBare}**`,
          answer: { type: "text", accept: [canon], display: canon },
          hint: `${near ? "'This/these' keeps the T" : "'That/those' drops the T"}; match *${g.def} ${g.noun}*.`,
          solution: [
            `Noun gender/number: **${g.def} ${g.noun}**.`,
            `${near ? "Near" : "Far"} demonstrative: **${dem}** → **${canon}**.`,
          ],
          traps,
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const verb = isPl ? "cuestan" : "cuesta";
          const canon = `¿Cuánto ${verb} ${dem} ${g.noun}?`;
          return {
            prompt: `Translate into Spanish: **How much ${isPl ? "do" : "does"} ${demEn} ${g.enBare} cost?**`,
            answer: { type: "text", accept: [canon, canon.replace(/[¿?]/g, "")], display: canon },
            hint: `Use *¿Cuánto* + *${verb}* (${isPl ? "plural" : "singular"}) + *${dem} ${g.noun}*.`,
            solution: [
              `Match *costar* to **${g.def} ${g.noun}** → **${verb}**.`,
              `Answer: **${canon}**.`,
            ],
            traps: [
              {
                spec: { type: "text", accept: [`¿Cuánto ${isPl ? "cuesta" : "cuestan"} ${dem} ${g.noun}?`, `Cuánto ${isPl ? "cuesta" : "cuestan"} ${dem} ${g.noun}`] },
                feedback: `Match *costar* to ${isPl ? "plural" : "singular"} **${g.noun}** → **${verb}**!`,
              },
            ],
          };
        }
        const verb = isPl ? "quedan" : "queda";
        const capDem = dem[0].toUpperCase() + dem.slice(1);
        const canon = `${capDem} ${g.noun} me ${verb} bien`;
        return {
          prompt: `Translate into Spanish (using *quedar*): **${demEn[0].toUpperCase() + demEn.slice(1)} ${g.enBare} ${isPl ? "fit" : "fits"} me well.**`,
          answer: { type: "text", accept: [canon], display: canon },
          hint: `*Quedar* works like *gustar*: singular → *queda*, plural → *quedan*.`,
          solution: [
            `Demonstrative + garment: **${capDem} ${g.noun}**.`,
            `Match *quedar* → **me ${verb} bien** → **${canon}**.`,
          ],
          traps: [
            {
              spec: { type: "text", accept: [`${capDem} ${g.noun} me ${isPl ? "queda" : "quedan"} bien`] },
              feedback: `${isPl ? "Plural" : "Singular"} garment requires **me ${verb} bien**!`,
            },
          ],
        };
      }

      // Tier 3: Fit adjective agreement + direct object pronoun (-lo/-la/-los/-las)
      const fits = [
        { en: "too big", forms: { ms: "demasiado grande", fs: "demasiado grande", mp: "demasiado grandes", fp: "demasiado grandes" } },
        { en: "too tight", forms: { ms: "demasiado estrecho", fs: "demasiado estrecha", mp: "demasiado estrechos", fp: "demasiado estrechas" } },
        { en: "too baggy", forms: { ms: "demasiado ancho", fs: "demasiado ancha", mp: "demasiado anchos", fp: "demasiado anchas" } },
        { en: "too long", forms: { ms: "demasiado largo", fs: "demasiado larga", mp: "demasiado largos", fp: "demasiado largas" } },
      ] as const;
      if (rng.bool(0.5)) {
        const dop = DOP[g.gn];
        const canon = `¿Puedo probárme${dop}?`;
        const alt = `¿Me ${dop} puedo probar?`;
        return {
          prompt: `Referring to **${g.def} ${g.noun}** (${g.enBare}), translate into Spanish: **Can I try ${isPl ? "them" : "it"} on?**`,
          answer: { type: "text", accept: [canon, canon.replace(/[¿?]/g, ""), alt, alt.replace(/[¿?]/g, "")], display: canon },
          hint: `Match direct object pronoun (*lo / la / los / las*) to **${g.def} ${g.noun}** and add an accent on *á* in *probárme…*!`,
          solution: [
            `**${g.def} ${g.noun}** → direct object pronoun **${dop}**.`,
            `Attach *me + ${dop}* to *probar* with accent → **${canon}** (or **${alt}**).`,
          ],
        };
      }
      const fit = rng.pick(fits);
      const verb = isPl ? "quedan" : "queda";
      const dop = DOP[g.gn];
      const capDem = dem[0].toUpperCase() + dem.slice(1);
      const canon = `${capDem} ${g.noun} me ${verb} ${fit.forms[g.gn]}, así que no me ${dop} llevo`;
      return {
        prompt: `Translate into Spanish (*quedar*, *así que*, *llevarse*): **${demEn[0].toUpperCase() + demEn.slice(1)} ${g.enBare} ${isPl ? "are" : "is"} ${fit.en} on me, so I am not taking ${isPl ? "them" : "it"}.**`,
        answer: { type: "text", accept: [canon, canon.replace(",", "")], display: canon },
        hint: `Keep **${g.def} ${g.noun}** agreement across *${dem}*, *${verb}*, *${fit.forms[g.gn]}*, and pronoun *${dop}*!`,
        solution: [
          `Subject & fit: **${capDem} ${g.noun} me ${verb} ${fit.forms[g.gn]}** (*demasiado* stays invariable!).`,
          `Result with object pronoun **${dop}**: **${canon}**.`,
        ],
      };
    },
  },
  {
    id: "clothes-uniform-shopping.fashion-tenses",
    topicId: "clothes-uniform-shopping",
    title: "Outfits & Shopping Across 4 Tenses",
    level: 3,
    guideRef: "outfits-across-tenses",
    generate(rng, tier) {
      const pool = tier === 1 ? TENSE_T1 : tier === 2 ? TENSE_T2 : TENSE_T3;
      const item = rng.pick(pool);
      return {
        prompt: `Translate into Spanish — ${item.prompt}`,
        answer: { type: "text", accept: item.accept, display: item.accept[0] },
        hint: item.hint,
        solution: item.steps,
        traps: item.trap ? [{ spec: { type: "text", accept: item.trap.accept }, feedback: item.trap.feedback }] : undefined,
      };
    },
  },
];
