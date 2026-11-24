import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why does a Spanish speaker literally say 'To me, the head hurts' instead of 'My head hurts', and why is 'estoy constipado' one of the funniest misunderstandings on school trips to Spain?",
  didYouKnow: [
    "Every Spanish town guarantees a **farmacia de guardia** — a rotating 24-hour pharmacy whose address is posted in the window of every other closed pharmacy.",
    "In Spain, **una tirita** (sticking plaster) gets its name from *Tiritas*, a famous Spanish brand launched in Barcelona in 1954 that became the everyday noun for all plasters.",
    "Spanish distinguishes two ears: **la oreja** is the outer ear you pierce or pull, while **el oído** is the inner ear — so you always say *Me duele el oído* for earache!",
    "The famous word **la gripe** (the flu) entered Spanish from French *grippe*, and **la fiebre** shares its Latin root *febris* with English *febrile*.",
    "Saying **¡Jesús!** or **¡Salud!** when someone sneezes (*estornudar*) is universal across Spain — *salud* literally wishes them good health.",
  ],
  activities: [
    {
      title: "Farmacia de Guardia Speed Role-Play",
      emoji: "🩺",
      materials: ["6 symptom slips (e.g. tos, quemadura, fiebre, tobillo torcido)", "6 remedy cards (jarabe, crema, pastillas, venda, tirita, gotas)", "A 60-second timer"],
      steps: [
        "Pair up as **Paciente** and **Farmacéutico/a**.",
        "The patient draws one symptom slip and must explain the ache with *Me duele(n)*, add *desde hace + duration*, and mention one extra symptom (*tengo… / estoy…*).",
        "The pharmacist responds using *Tienes que / Debes* + infinitive, picks the right remedy card, and states a realistic dosage (*dos veces al día* / *cada ocho horas*).",
        "Swap roles and add a twist: the patient narrates how the accident happened yesterday in the Preterite!",
      ],
      maths: "Automates *me duele(n)* agreement, *desde hace* + Present tense, modal + infinitive advice, and Preterite accident verbs under real speaking pressure.",
    },
    {
      title: "Body-Part Sticky-Note Gender Race",
      emoji: "🏷️",
      materials: ["Blue sticky notes (masculine el / los)", "Pink sticky notes (feminine la / las)", "A marker pen"],
      steps: [
        "Write 16 Spanish body parts WITHOUT articles on scrap cards (include traps: *mano, pie, nariz, diente, oído, estómago, muñeca, espalda*).",
        "Race to copy each noun onto the right colour sticky note with its exact definite article (*el / la / los / las*) and accent mark.",
        "Call out a number (1 or 2+) and build a full *doler* sentence aloud (*Me duele la mano* / *Me duelen los pies*) before placing the note on a drawn outline.",
      ],
      maths: "Locks in high-frequency body-part gender exceptions (*la mano, el pie, la nariz, el diente*) and singular/plural *duele / duelen* matching.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Spanish Pharmacy Symptom-to-Remedy Quick Chart",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quick reference chart matching Spanish symptoms to pharmacy remedies and advice">
  <rect x="4" y="4" width="552" height="232" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">En la farmacia: Symptom → Remedy → Advice</text>
  <rect x="20" y="44" width="160" height="28" rx="6" fill="var(--brand-soft)"/>
  <rect x="192" y="44" width="144" height="28" rx="6" fill="var(--brand-soft)"/>
  <rect x="348" y="44" width="192" height="28" rx="6" fill="var(--brand-soft)"/>
  <text x="100" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Síntoma / Lesión</text>
  <text x="264" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Remedio</text>
  <text x="444" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Consejo (Tienes que…)</text>
  <line x1="20" y1="106" x2="540" y2="106" stroke="var(--line)" stroke-width="1"/>
  <text x="28" y="94" font-size="11.5" fill="var(--ink)">Tengo tos &amp; garganta</text>
  <text x="202" y="94" font-size="11.5" font-weight="600" fill="var(--good)">el jarabe</text>
  <text x="356" y="94" font-size="11.5" fill="var(--ink)">tomar dos veces al día</text>
  <line x1="20" y1="140" x2="540" y2="140" stroke="var(--line)" stroke-width="1"/>
  <text x="28" y="128" font-size="11.5" fill="var(--ink)">Tengo fiebre / dolor</text>
  <text x="202" y="128" font-size="11.5" font-weight="600" fill="var(--good)">las pastillas</text>
  <text x="356" y="128" font-size="11.5" fill="var(--ink)">descansar &amp; beber agua</text>
  <line x1="20" y1="174" x2="540" y2="174" stroke="var(--line)" stroke-width="1"/>
  <text x="28" y="162" font-size="11.5" fill="var(--ink)">Quemadura / picadura</text>
  <text x="202" y="162" font-size="11.5" font-weight="600" fill="var(--good)">la crema / pomada</text>
  <text x="356" y="162" font-size="11.5" fill="var(--ink)">ponerte crema &amp; evitar sol</text>
  <line x1="20" y1="208" x2="540" y2="208" stroke="var(--line)" stroke-width="1"/>
  <text x="28" y="196" font-size="11.5" fill="var(--ink)">Me he cortado el dedo</text>
  <text x="202" y="196" font-size="11.5" font-weight="600" fill="var(--good)">una tirita</text>
  <text x="356" y="196" font-size="11.5" fill="var(--ink)">limpiar bien la herida</text>
  <text x="28" y="226" font-size="11.5" fill="var(--ink)">Me he torcido el tobillo</text>
  <text x="202" y="226" font-size="11.5" font-weight="600" fill="var(--good)">una venda</text>
  <text x="356" y="226" font-size="11.5" fill="var(--ink)">no hacer deporte 1 semana</text>
</svg>`,
      caption: "Use this quick lookup table during role-play practice to pair every ailment with its exact Spanish remedy.",
    },
    {
      title: "Irregular Preterite vs Simple Future Cheat Strip",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison chart of Preterite accident verbs and Simple Future recovery stems">
  <rect x="4" y="4" width="552" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Accent Watch: Preterite Accidents vs Simple Future Recovery</text>
  <rect x="20" y="46" width="252" height="154" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="146" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--bad)">PRETERITE: Zero-Accent Irregulars</text>
  <text x="34" y="94" font-size="12" fill="var(--ink)">• ir → <tspan font-weight="700">fui / fue</tspan> (NO accent!)</text>
  <text x="34" y="116" font-size="12" fill="var(--ink)">• dar → <tspan font-weight="700">di / dio</tspan> (NO accent!)</text>
  <text x="34" y="138" font-size="12" fill="var(--ink)">• hacer → <tspan font-weight="700">hice / hizo</tspan> (c → z!)</text>
  <text x="34" y="160" font-size="12" fill="var(--ink)">• poner → <tspan font-weight="700">puse / puso</tspan></text>
  <text x="34" y="182" font-size="12" fill="var(--ink)">• tener → <tspan font-weight="700">tuve / tuvo</tspan></text>
  <rect x="288" y="46" width="252" height="154" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="414" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">SIMPLE FUTURE: Always Accent -é!</text>
  <text x="302" y="94" font-size="12" fill="var(--ink)">• descansar → <tspan font-weight="700">descansaré</tspan></text>
  <text x="302" y="116" font-size="12" fill="var(--ink)">• tomar → <tspan font-weight="700">tomaré</tspan></text>
  <text x="302" y="138" font-size="12" fill="var(--ink)">• hacer → <tspan font-weight="700">haré</tspan> (irreg. stem)</text>
  <text x="302" y="160" font-size="12" fill="var(--ink)">• poder → <tspan font-weight="700">podré</tspan> (irreg. stem)</text>
  <text x="302" y="182" font-size="12" fill="var(--ink)">• tener → <tspan font-weight="700">tendré</tspan> (irreg. stem)</text>
</svg>`,
      caption: "Remember the golden accent contrast: irregular preterites (fui, dio, hizo, puso, tuve) take NO accent, while Simple Future yo ALWAYS takes -é.",
    },
  ],
  history: {
    title: "From Medieval Boticas to Spain's Modern Farmacias",
    story:
      "Walk into the historic **Farmacia de la Reina Madre** in central Madrid — open continuously since 1578 — and you will see hand-painted porcelain jars once used to store herbs, syrups and ointments. In medieval Spain, pharmacists were called *boticarios* working in a *botica*, a word that survives today in every Spanish home's **el botiquín** (the first-aid box!). Today Spain boasts one of the densest pharmacy networks in Europe: over 22,000 community *farmacias* ensure that 99% of residents live within a few minutes' walk of a licensed pharmacist.",
  },
};
