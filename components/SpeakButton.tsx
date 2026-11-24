"use client";
import { useSyncExternalStore } from "react";
import { speakSpanish, speechAvailable, warmSpanishVoices } from "@/lib/speech";

const subscribe = () => {
  warmSpanishVoices();
  return () => {};
};

export function SpeakButton({
  text,
  slow,
  label,
  showSlow = false,
  className = "",
}: {
  text: string;
  slow?: boolean;
  label?: string;
  /** When true (and `slow` is not set), renders both 🔊 normal and 🐢 slow buttons side by side. */
  showSlow?: boolean;
  className?: string;
}) {
  const canSpeak = useSyncExternalStore(subscribe, speechAvailable, () => false);
  if (!canSpeak || !text.trim()) return null;

  if (showSlow && slow === undefined) {
    return (
      <span className={`inline-flex items-center gap-1 ${className}`}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            speakSpanish(text, { slow: false });
          }}
          title={`Hear "${text}" (normal speed)`}
          aria-label={`Hear "${text}" in Spanish`}
          className="inline-flex h-8 items-center gap-1 rounded-lg border border-line bg-surface px-2 text-xs font-bold text-ink-2 transition hover:border-brand hover:text-brand"
        >
          <span aria-hidden>🔊</span>
          {label ? <span>{label}</span> : null}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            speakSpanish(text, { slow: true });
          }}
          title={`Hear "${text}" slowly`}
          aria-label={`Hear "${text}" slowly in Spanish`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-xs text-ink-2 transition hover:border-brand hover:text-brand"
        >
          <span aria-hidden>🐢</span>
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow: !!slow });
      }}
      title={slow ? `Hear "${text}" slowly` : `Hear "${text}"`}
      aria-label={`${slow ? "Hear slowly" : "Hear"}: ${text}`}
      className={`inline-flex h-8 min-w-8 items-center justify-center gap-1 rounded-lg border border-line bg-surface px-2 text-xs font-bold text-ink-2 transition hover:border-brand hover:text-brand ${className}`}
    >
      <span aria-hidden>{slow ? "🐢" : "🔊"}</span>
      {label ? <span>{label}</span> : null}
    </button>
  );
}

export default SpeakButton;
