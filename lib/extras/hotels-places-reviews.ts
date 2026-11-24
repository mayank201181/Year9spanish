import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Did you know that in Spain you can literally book a hotel room inside a 15th-century castle — and if the lift breaks down, Spanish law guarantees an official *hoja de reclamaciones* at every reception desk?",
  didYouKnow: [
    "Spain's **Paradores de Turismo** network includes nearly 100 historic hotels located inside medieval castles (*castillos*), Renaissance palaces (*palacios*) and monasteries — including the Parador inside Granada's Alhambra grounds!",
    "Every Spanish hotel, café and shop is legally required to keep official **hojas de reclamaciones** (three-part official complaint forms) behind the counter, and refusing to provide one can trigger a steep fine.",
    "The Spanish word **el personal** (*the staff*) looks like an adjective and refers to many people, yet grammatically it is ALWAYS **masculine singular** — so native speakers say *el personal es muy amable*, NEVER *son amables*!",
    "Notice why **la habitación** has an accent on *-ón*, while **las habitaciones** loses it: Spanish words ending in *-n* or *-s* naturally stress the second-to-last syllable, so *ha-bi-ta-CIO-nes* already falls on the right syllable without needing a written mark!",
    "The famous Spanish greeting **¿Qué tal?** works everywhere, yet at a Spanish hotel reception desk guests almost always switch to polite *usted* forms like **Perdone**, **Quisiera reservar…** and **¿Puede limpiar la habitación?**",
  ],
  activities: [
    {
      title: "Reception Desk Disaster Role-Play (¡Desastre en el hotel!)",
      emoji: "🛎️",
      materials: [
        "6 slips of paper with hotel disasters written in English (broken lift, dirty sheets, no hot water, missing towels, noisy room, broken AC)",
        "A partner to play *el/la recepcionista*",
      ],
      steps: [
        "Shuffle the 6 disaster slips face down. One student plays the guest (*el/la huésped*) and draws TWO slips at random.",
        "Open politely with **Perdone, tengo un problema en mi habitación…**, explain BOTH problems in accurate Spanish using *estar* (*está sucia / está roto*), *no funciona*, *no hay* or *falta(n)*, and request a solution (*Quiero cambiar de habitación* / *¿Puede reparar…?*).",
        "The receptionist responds politely (*Lo siento mucho…*), offers a fix (*Le doy la llave de otra habitación tranquila / Voy a enviar al técnico*), and then swap roles!",
      ],
      maths:
        "Automates polite *usted* dialogue phrases, *ser vs estar* for temporary conditions, and singular/plural agreement (*falta una toalla* vs *faltan toallas*) under real-time speaking pressure.",
    },
    {
      title: "5-Star vs 1-Star Twin Reviews (Reseñas opuestas)",
      emoji: "⭐",
      materials: [
        "One sheet of paper split down the middle into two columns: ★★★★★ vs ★☆☆☆☆",
      ],
      steps: [
        "Invent a funny Spanish hotel name (e.g. *Hotel Sol y Mar* or *Casa Rural La Montaña*).",
        "On the left side, write a glowing 45-word 5-star review using *me alojé*, *Por un lado, me encantó / me encantaron*, *el personal fue amable*, *lo/la recomiendo* and *volveré sin duda*.",
        "On the right side, rewrite the exact same stay as a hilarious 1-star disaster flipping every adjective to its antonym (*limpia → sucia*, *tranquilo → ruidoso*, *amable → maleducado*, *me encantó → me decepcionó*, *volveré → no volveré nunca*)!",
      ],
      maths:
        "Locks in evaluative adjective pairs, singular/plural past opinion verbs (*me encantó / me encantaron*), gender-matched pronouns (*lo / la recomiendo*) and balanced review connectives.",
    },
  ],
  bonusDiagrams: [
    {
      title: "SER vs ESTAR at the Hotel: Instant Decision Guide",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision chart separating Spanish ser for hotel traits from estar for hotel locations and temporary complaints">
  <rect x="8" y="8" width="544" height="204" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">SER vs ESTAR in Hotel Descriptions &amp; Reviews</text>

  <rect x="22" y="52" width="248" height="142" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="146" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SER (es / son / fue / fueron)</text>
  <text x="146" y="95" text-anchor="middle" font-size="10" fill="var(--ink-2)">Permanent traits, style, price &amp; character</text>
  <text x="146" y="119" text-anchor="middle" font-size="11" fill="var(--ink)">El hotel es moderno y lujoso.</text>
  <text x="146" y="139" text-anchor="middle" font-size="11" fill="var(--ink)">Los precios son muy caros.</text>
  <text x="146" y="159" text-anchor="middle" font-size="11" fill="var(--ink)">El personal fue muy amable.</text>
  <text x="146" y="179" text-anchor="middle" font-size="11" fill="var(--ink)">Las vistas fueron preciosas.</text>

  <rect x="290" y="52" width="248" height="142" rx="12" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="414" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">ESTAR (está / están / estaba)</text>
  <text x="414" y="95" text-anchor="middle" font-size="10" fill="var(--ink-2)">Location + temporary conditions &amp; problems</text>
  <text x="414" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">El hotel está cerca del mar.</text>
  <text x="414" y="139" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">La habitación está sucia.</text>
  <text x="414" y="159" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">El ascensor está roto.</text>
  <text x="414" y="179" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">El desayuno está incluido.</text>
</svg>`,
      caption:
        "If it tells you WHERE the hotel is or WHAT temporary state a room is in today, reach straight for ESTAR.",
    },
    {
      title: "Backwards Past Opinion Verbs: Look AFTER the Verb!",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing how Spanish past opinion verbs match singular or plural nouns placed after the verb">
  <rect x="8" y="8" width="544" height="204" rx="16" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Backwards Opinion Verbs: Match the Noun AFTER the Verb</text>

  <rect x="24" y="54" width="246" height="138" rx="12" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="147" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SINGULAR NOUN → -ó / -ió</text>
  <text x="147" y="104" text-anchor="middle" font-size="11" fill="var(--ink)">Me encantó la piscina.</text>
  <text x="147" y="126" text-anchor="middle" font-size="11" fill="var(--ink)">Me gustó el castillo.</text>
  <text x="147" y="148" text-anchor="middle" font-size="11" fill="var(--ink)">Me decepcionó el wifi.</text>
  <text x="147" y="170" text-anchor="middle" font-size="11" fill="var(--ink)">Me pareció excelente.</text>

  <rect x="290" y="54" width="246" height="138" rx="12" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="413" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">PLURAL NOUN → -aron / -ieron</text>
  <text x="413" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Me encantaron las vistas.</text>
  <text x="413" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Me gustaron las ruinas.</text>
  <text x="413" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Me decepcionaron los precios.</text>
  <text x="413" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Me parecieron muy cómodas.</text>
</svg>`,
      caption:
        "Never leave me encantó or me decepcionó singular when talking about plural features like las vistas or las habitaciones!",
    },
  ],
  history: {
    title: "How King Alfonso XIII Invented Spain's *Paradores* in 1928",
    story:
      "In the 1920s, motor tourism was just beginning across Spain, yet many rural regions rich in castles, Roman ruins and mountain scenery had nowhere comfortable for travellers to stay overnight. In 1928, King Alfonso XIII personally chose a pine-covered ridge in the Sierra de Gredos to inaugurate Spain's very first **Parador Nacional** — a state-run inn designed to rescue neglected historic monuments by turning them into welcoming hotels. Nearly a century later, travellers can sleep inside Moorish fortresses, medieval castles in Sigüenza and Cardona, and Renaissance palaces in Salamanca — making Spain's *Paradores* a living bridge between *lugares de interés* and *el alojamiento*.",
  },
};
