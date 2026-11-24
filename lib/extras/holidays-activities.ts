import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Did you know that one single accent mark in Spanish turns *I swim today* (*nado*) into *he/she swam yesterday* (*nadó*) — and that Spanish *vacaciones* is ALWAYS plural even if you only take one trip?",
  didYouKnow: [
    "Spain is one of the world's top two most visited countries, welcoming over 85 million international visitors a year — almost double its entire population!",
    "The Spanish word **vacaciones** comes from Latin *vacare* (*to be free / empty*) and is always feminine plural (*las vacaciones*), so every verb and adjective describing it must be plural too (*fueron divertidas*).",
    "In Spain, **el puente** literally means *the bridge*, but on the calendar it refers to a long holiday weekend created when a public holiday lands on a Tuesday or Thursday and people bridge the extra workday.",
    "Spanish **ir** (to go) and **ser** (to be) are completely unrelated verbs in the present tense (*voy* vs *soy*), yet they share the exact same preterite (*fui, fuiste, fue, fuimos, fuisteis, fueron*) because *fui* comes from Latin *esse* (*to be*) — *I was there* evolved to mean *I went there*!",
    "When travelling across Spain by high-speed **AVE** train (*Alta Velocidad Española*), you can cross from Madrid to Seville or Barcelona at 300 km/h — and the letters *AVE* also spell the Spanish word for *bird*!",
  ],
  activities: [
    {
      title: "3-Tense Postcard Challenge (Postal de tres tiempos)",
      emoji: "📮",
      materials: [
        "One index card or folded sheet of A5 paper",
        "Three coloured pens (blue = Present, orange = Preterite, green = Future)",
      ],
      steps: [
        "Sketch a quick holiday scene on the front (beach, ski slope, island or city) and label 5 nouns with their definite articles (*la playa, el avión, el sol, las montañas, los recuerdos*).",
        "On the back, write 1 sentence in blue about where you **normally** go (*Normalmente voy…*), 2 sentences in orange about what you **did** last summer (*El verano pasado fui… saqué… hizo…*), and 1 sentence in green about where you **will / are going to** go next year (*El año que viene voy a… / viajaré…*).",
        "Swap cards with a partner and perform an Accent & Agreement Audit: check every *-é / -ó / -í*, every *a + el → al*, and *las vacaciones fueron…*.",
      ],
      maths:
        "Trains instant colour-coded tense awareness across Present, Preterite, Immediate Future and Simple Future while reinforcing gender agreement and *-car/-gar/-zar* spelling changes.",
    },
    {
      title: "Weather Presenter Switchboard (El hombre/la mujer del tiempo)",
      emoji: "🌦️",
      materials: [
        "A quick hand-drawn map of Spain with 4 regions (el norte, el sur, la costa, los Pirineos)",
        "A phone timer set to 45 seconds",
      ],
      steps: [
        "Pick 4 weather icons (sun, rain, snow, wind) and place one on each Spanish region.",
        "Deliver a 30-second live weather report in Spanish comparing **yesterday** (*Ayer llovió en el norte e hizo mucho sol en el sur*), **today** (*Hoy hace viento en la costa*), and **tomorrow** (*Mañana va a nevar en los Pirineos y hará calor en Málaga*).",
        "Repeat with a friend calling out *¡Pasado!*, *¡Presente!* or *¡Futuro!* at random so you switch *hizo / hace / va a hacer* and *llovió / llueve / va a llover* on the spot.",
      ],
      maths:
        "Builds automatic reflexes for shifting irregular weather verbs (*hacer, llover, nevar, haber*) across three time frames and eliminates the *muy calor* trap forever.",
    },
  ],
  bonusDiagrams: [
    {
      title: "One Accent Changes Everything: Present vs Preterite",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison showing how a single Spanish accent shifts present tense yo into preterite el or ella">
  <rect x="8" y="8" width="544" height="204" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">The Power of One Accent Mark (Present yo vs Preterite él/ella)</text>

  <rect x="24" y="52" width="246" height="142" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="147" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">NO ACCENT → Present (yo)</text>
  <text x="147" y="102" text-anchor="middle" font-size="12" fill="var(--ink)">nado = I swim</text>
  <text x="147" y="124" text-anchor="middle" font-size="12" fill="var(--ink)">tomo el sol = I sunbathe</text>
  <text x="147" y="146" text-anchor="middle" font-size="12" fill="var(--ink)">viajo = I travel</text>
  <text x="147" y="168" text-anchor="middle" font-size="12" fill="var(--ink)">paso tiempo = I spend time</text>

  <rect x="290" y="52" width="246" height="142" rx="12" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="413" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">ACCENT (-ó) → Preterite (él / ella)</text>
  <text x="413" y="102" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">nadó = he/she swam</text>
  <text x="413" y="124" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">tomó el sol = he/she sunbathed</text>
  <text x="413" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">viajó = he/she travelled</text>
  <text x="413" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">pasó tiempo = he/she spent time</text>
</svg>`,
      caption:
        "Never treat accents as optional decoration: dropping the mark on -ó flips both the tense AND the person.",
    },
    {
      title: "Preposition Compass for Holiday Destinations",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Destination preposition compass showing a, al, a la, a los, and a las with Spanish holiday examples">
  <rect x="8" y="8" width="544" height="204" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Preposition Compass: Where Are You Going? (ir + …)</text>

  <rect x="22" y="52" width="122" height="140" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="83" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">a (bare)</text>
  <text x="83" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">Countries &amp; cities</text>
  <text x="83" y="120" text-anchor="middle" font-size="11" fill="var(--ink)">a España</text>
  <text x="83" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">a Grecia</text>
  <text x="83" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">a Valencia</text>
  <text x="83" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">a Japón</text>

  <rect x="154" y="52" width="122" height="140" rx="12" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="215" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">al (a + el)</text>
  <text x="215" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">Masc. singular</text>
  <text x="215" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">al campo</text>
  <text x="215" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">al extranjero</text>
  <text x="215" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">al pueblo</text>
  <text x="215" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">al norte / sur</text>

  <rect x="286" y="52" width="122" height="140" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="347" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">a la</text>
  <text x="347" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">Fem. singular</text>
  <text x="347" y="120" text-anchor="middle" font-size="11" fill="var(--ink)">a la playa</text>
  <text x="347" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">a la costa</text>
  <text x="347" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">a la montaña</text>
  <text x="347" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">a la isla</text>

  <rect x="418" y="52" width="122" height="140" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="479" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">a los / a las</text>
  <text x="479" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">Plural places</text>
  <text x="479" y="120" text-anchor="middle" font-size="11" fill="var(--ink)">a los Pirineos</text>
  <text x="479" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">a los EE. UU.</text>
  <text x="479" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">a las Islas</text>
  <text x="479" y="176" text-anchor="middle" font-size="11" fill="var(--ink)">Baleares</text>
</svg>`,
      caption:
        "Match the destination noun's article first, and always contract a + el into al.",
    },
  ],
  history: {
    title: "How *El Veraneo* Invented the Spanish Beach Holiday",
    story:
      "In the mid-1800s, taking a summer holiday at the seaside wasn't a trend yet — people avoided intense heat until doctors prescribed sea bathing (*baños de ola*) in the cooler north of Spain for health. Queen Isabel II began travelling every August by royal train to **San Sebastián** and **Santander**, launching a national tradition called **el veraneo** (spending the summer away from the city). A century later, in the 1960s, the arrival of affordable flights (*viajar en avión*) transformed fishing villages along the Mediterranean — from Málaga to Mallorca — into some of Europe's favourite holiday destinations, giving us the modern Spanish travel vocabulary we still use today.",
  },
};
