import test from "node:test";
import assert from "node:assert/strict";
import {
  PERSONS,
  TENSES,
  VERBS,
  acceptedForms,
  conditionalTable,
  conjugate,
  englishGloss,
  futureTable,
  gerund,
  imperfectTable,
  nearFutureTable,
  participle,
  perfectTable,
  presentTable,
  preteriteTable,
  subjunctiveTable,
  verbInfo,
  verbsWithTag,
  type Person,
} from "../lib/spanish/verbs.ts";

function expectRow(row: string): Record<Person, string> {
  const parts = row.split(",").map((s) => s.trim());
  assert.equal(parts.length, 6, `reference row must have 6 forms: ${row}`);
  return { yo: parts[0], tú: parts[1], él: parts[2], nosotros: parts[3], vosotros: parts[4], ellos: parts[5] };
}

test("present & preterite core reference tables", () => {
  assert.deepEqual(presentTable("hablar"), expectRow("hablo, hablas, habla, hablamos, habláis, hablan"));
  assert.deepEqual(preteriteTable("hablar"), expectRow("hablé, hablaste, habló, hablamos, hablasteis, hablaron"));
  assert.deepEqual(preteriteTable("buscar"), expectRow("busqué, buscaste, buscó, buscamos, buscasteis, buscaron"));
  assert.deepEqual(preteriteTable("llegar"), expectRow("llegué, llegaste, llegó, llegamos, llegasteis, llegaron"));
  assert.deepEqual(preteriteTable("empezar"), expectRow("empecé, empezaste, empezó, empezamos, empezasteis, empezaron"));
  assert.deepEqual(preteriteTable("hacer"), expectRow("hice, hiciste, hizo, hicimos, hicisteis, hicieron"));
  assert.deepEqual(preteriteTable("tener"), expectRow("tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron"));
  assert.deepEqual(preteriteTable("decir"), expectRow("dije, dijiste, dijo, dijimos, dijisteis, dijeron"));
  assert.deepEqual(preteriteTable("traer"), expectRow("traje, trajiste, trajo, trajimos, trajisteis, trajeron"));
  assert.deepEqual(preteriteTable("conducir"), expectRow("conduje, condujiste, condujo, condujimos, condujisteis, condujeron"));
  assert.deepEqual(preteriteTable("dormir"), expectRow("dormí, dormiste, durmió, dormimos, dormisteis, durmieron"));
  assert.deepEqual(preteriteTable("preferir"), expectRow("preferí, preferiste, prefirió, preferimos, preferisteis, prefirieron"));
  assert.deepEqual(preteriteTable("pedir"), expectRow("pedí, pediste, pidió, pedimos, pedisteis, pidieron"));
  assert.deepEqual(preteriteTable("leer"), expectRow("leí, leíste, leyó, leímos, leísteis, leyeron"));
  assert.deepEqual(preteriteTable("construir"), expectRow("construí, construiste, construyó, construimos, construisteis, construyeron"));
  assert.deepEqual(preteriteTable("ser"), preteriteTable("ir"));
});

test("imperfect: regular -aba / -ía and the 3 irregulars (ser, ir, ver)", () => {
  assert.deepEqual(imperfectTable("hablar"), expectRow("hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban"));
  assert.deepEqual(imperfectTable("comer"), expectRow("comía, comías, comía, comíamos, comíais, comían"));
  assert.deepEqual(imperfectTable("vivir"), expectRow("vivía, vivías, vivía, vivíamos, vivíais, vivían"));
  assert.deepEqual(imperfectTable("ser"), expectRow("era, eras, era, éramos, erais, eran"));
  assert.deepEqual(imperfectTable("ir"), expectRow("iba, ibas, iba, íbamos, ibais, iban"));
  assert.deepEqual(imperfectTable("ver"), expectRow("veía, veías, veía, veíamos, veíais, veían"));
});

test("simple future & conditional: regular + irregular stems", () => {
  assert.deepEqual(futureTable("hablar"), expectRow("hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán"));
  assert.deepEqual(conditionalTable("hablar"), expectRow("hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían"));
  assert.deepEqual(futureTable("tener"), expectRow("tendré, tendrás, tendrá, tendremos, tendréis, tendrán"));
  assert.deepEqual(conditionalTable("hacer"), expectRow("haría, harías, haría, haríamos, haríais, harían"));
  assert.equal(conjugate("poder", "future", "nosotros"), "podremos");
  assert.equal(conjugate("saber", "conditional", "yo"), "sabría");
  assert.equal(conjugate("salir", "future", "ellos"), "saldrán");
  assert.equal(conjugate("decir", "conditional", "él"), "diría");
  assert.equal(conjugate("poner", "future", "tú"), "pondrás");
  assert.equal(conjugate("venir", "future", "yo"), "vendré");
  assert.equal(conjugate("querer", "conditional", "nosotros"), "querríamos");
});

test("perfect tense & irregular past participles / gerunds", () => {
  assert.deepEqual(perfectTable("hablar"), expectRow("he hablado, has hablado, ha hablado, hemos hablado, habéis hablado, han hablado"));
  assert.deepEqual(
    perfectTable("levantarse"),
    expectRow("me he levantado, te has levantado, se ha levantado, nos hemos levantado, os habéis levantado, se han levantado")
  );
  assert.equal(participle("hacer"), "hecho");
  assert.equal(participle("ver"), "visto");
  assert.equal(participle("escribir"), "escrito");
  assert.equal(participle("poner"), "puesto");
  assert.equal(participle("volver"), "vuelto");
  assert.equal(participle("abrir"), "abierto");
  assert.equal(participle("descubrir"), "descubierto");
  assert.equal(participle("decir"), "dicho");
  assert.equal(participle("romper"), "roto");
  assert.equal(participle("morir"), "muerto");
  assert.equal(participle("leer"), "leído");
  assert.equal(gerund("dormir"), "durmiendo");
  assert.equal(gerund("pedir"), "pidiendo");
  assert.equal(gerund("leer"), "leyendo");
  assert.equal(gerund("ir"), "yendo");
});

test("present subjunctive: regular, yo-go, spelling-change, -ir stem shifts & DISHES", () => {
  assert.deepEqual(subjunctiveTable("hablar"), expectRow("hable, hables, hable, hablemos, habléis, hablen"));
  assert.deepEqual(subjunctiveTable("comer"), expectRow("coma, comas, coma, comamos, comáis, coman"));
  assert.deepEqual(subjunctiveTable("tener"), expectRow("tenga, tengas, tenga, tengamos, tengáis, tengan"));
  assert.deepEqual(subjunctiveTable("hacer"), expectRow("haga, hagas, haga, hagamos, hagáis, hagan"));
  assert.deepEqual(subjunctiveTable("buscar"), expectRow("busque, busques, busque, busquemos, busquéis, busquen"));
  assert.deepEqual(subjunctiveTable("jugar"), expectRow("juegue, juegues, juegue, juguemos, juguéis, jueguen"));
  assert.deepEqual(subjunctiveTable("empezar"), expectRow("empiece, empieces, empiece, empecemos, empecéis, empiecen"));
  assert.deepEqual(subjunctiveTable("dormir"), expectRow("duerma, duermas, duerma, durmamos, durmáis, duerman"));
  assert.deepEqual(subjunctiveTable("preferir"), expectRow("prefiera, prefieras, prefiera, prefiramos, prefiráis, prefieran"));
  assert.deepEqual(subjunctiveTable("pedir"), expectRow("pida, pidas, pida, pidamos, pidáis, pidan"));
  // DISHES
  assert.deepEqual(subjunctiveTable("dar"), expectRow("dé, des, dé, demos, deis, den"));
  assert.deepEqual(subjunctiveTable("ir"), expectRow("vaya, vayas, vaya, vayamos, vayáis, vayan"));
  assert.deepEqual(subjunctiveTable("ser"), expectRow("sea, seas, sea, seamos, seáis, sean"));
  assert.deepEqual(subjunctiveTable("estar"), expectRow("esté, estés, esté, estemos, estéis, estén"));
  assert.deepEqual(subjunctiveTable("saber"), expectRow("sepa, sepas, sepa, sepamos, sepáis, sepan"));
});

test("near future & acceptedForms optional subject pronouns", () => {
  assert.deepEqual(
    nearFutureTable("levantarse"),
    expectRow("voy a levantarme, vas a levantarte, va a levantarse, vamos a levantarnos, vais a levantaros, van a levantarse")
  );
  const f = acceptedForms("levantarse", "near-future", "yo");
  for (const x of ["voy a levantarme", "me voy a levantar", "yo voy a levantarme", "yo me voy a levantar"]) {
    assert.ok(f.includes(x), x);
  }
  const sub = acceptedForms("tener", "subjunctive", "él");
  for (const x of ["tenga", "él tenga", "ella tenga", "usted tenga"]) {
    assert.ok(sub.includes(x), x);
  }
});

test("every verb conjugates cleanly across all 8 tenses and 6 persons", () => {
  assert.ok(VERBS.length >= 100, `expected >= 100 Year 9 Spanish verbs, got ${VERBS.length}`);
  for (const topic of [
    "topic:holidays-activities",
    "topic:hotels-places-reviews",
    "topic:food-market-restaurant",
    "topic:healthy-living-diet",
    "topic:body-illness-treatment",
    "topic:clothes-uniform-shopping",
    "topic:social-plans-films",
    "topic:four-tenses-grammar",
  ]) {
    assert.ok(verbsWithTag(topic).length > 0, `missing verbs for ${topic}`);
  }
  for (const v of VERBS) {
    assert.ok(verbInfo(v.inf));
    for (const t of TENSES) {
      for (const p of PERSONS) {
        const f = conjugate(v.inf, t, p);
        assert.ok(f.trim().length > 0, `${v.inf} ${t} ${p} empty`);
        assert.doesNotMatch(f, /undefined|null|NaN|\s{2,}/, `${v.inf} ${t} ${p}: ${f}`);
        const g = englishGloss(v.inf, t, p);
        assert.ok(g.length > 0);
        assert.doesNotMatch(g, /undefined|null|NaN|\{|\}/, `${v.inf} ${t} ${p}: ${g}`);
      }
    }
  }
});
