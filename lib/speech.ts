// Client-side Spanish text-to-speech via the Web Speech API (no network, no keys).
// Picks the best available Spanish voice: es-ES first, then any es-*.
// Handles asynchronous voice loading (iOS/Safari & Chrome `voiceschanged`) cleanly
// while keeping `synth.speak()` synchronous inside user tap handlers (required on iOS).

let cached: SpeechSynthesisVoice | null = null;
let voicesHooked = false;
let activeUtterance: SpeechSynthesisUtterance | null = null;

export function speechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function";
}

function scoreVoice(v: SpeechSynthesisVoice): number {
  const lang = v.lang.toLowerCase();
  const isEsEs = lang === "es-es" || lang.startsWith("es-es-");
  return (
    (isEsEs ? 4 : 0) +
    (/google|neural|natural|premium|enhanced|mónica|monica|jorge|lucía|lucia|marisol|pablo|elena/i.test(v.name) ? 2 : 0) +
    (v.localService ? 1 : 0)
  );
}

function resolveBestVoice(): SpeechSynthesisVoice | null {
  if (!speechAvailable()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  if (cached && voices.some((v) => v.voiceURI === cached?.voiceURI && v.name === cached?.name)) {
    return cached;
  }
  const es = voices.filter((v) => v.lang.toLowerCase().startsWith("es"));
  cached = es.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] ?? null;
  return cached;
}

export function warmSpanishVoices(): void {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  if (!voicesHooked) {
    voicesHooked = true;
    const onVoicesChanged = () => {
      cached = null;
      resolveBestVoice();
    };
    if (typeof synth.addEventListener === "function") {
      synth.addEventListener("voiceschanged", onVoicesChanged);
    } else if ("onvoiceschanged" in synth) {
      synth.onvoiceschanged = onVoicesChanged;
    }
  }
  resolveBestVoice();
}

if (typeof window !== "undefined") {
  warmSpanishVoices();
}

/** Speak Spanish text. `slow` gives a learner-friendly pace. Returns false if TTS is unavailable. */
export function speakSpanish(text: string, opts: { slow?: boolean; onEnd?: () => void } = {}): boolean {
  if (!speechAvailable()) return false;
  const cleaned = text.replace(/[*_`]/g, "").trim();
  if (!cleaned) return false;
  warmSpanishVoices();

  const synth = window.speechSynthesis;
  if (synth.speaking || synth.pending) {
    synth.cancel();
  }
  if (synth.paused) {
    synth.resume();
  }

  const u = new SpeechSynthesisUtterance(cleaned);
  u.lang = "es-ES";
  const v = resolveBestVoice();
  if (v) {
    u.voice = v;
    if (v.lang) u.lang = v.lang;
  }
  u.rate = opts.slow ? 0.7 : 0.92;

  activeUtterance = u;
  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    if (activeUtterance === u) activeUtterance = null;
    opts.onEnd?.();
  };
  u.onend = finish;
  u.onerror = finish;

  synth.speak(u);
  return true;
}

export function hasSpanishVoice(): boolean {
  warmSpanishVoices();
  return speechAvailable() && !!resolveBestVoice();
}
