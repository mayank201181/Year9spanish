"""Write lib/sitcom.ts and lib/shorts.ts from common.SEASON + the rendered videos in public/videos.
Usage: python3 scripts/sitcom/gen_manifest.py
"""
import os, json, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
FFPROBE = "/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffprobe"
if not os.path.exists(FFPROBE):
    FFPROBE = "ffprobe"

ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)

SHOW_TITLE = "¡Rumbo al Nueve!"
SHOW_BLURB = ("Pablo returns from Sevilla while Lola the examiner parrot drills Vani and Dad through every "
              "Pearson Edexcel IGCSE Spanish (4SP0) topic — complete with Examiner Grade-9 Trap alerts, "
              "on-screen Spanish highlights, and three pause challenges per episode.")

TOPIC_META_INFO = {
    "home-and-abroad": ("La vida en casa y en el extranjero — Home & Abroad", "✈️", "Home, Study & Work"),
    "education-and-employment": ("La educación y el trabajo — Education & Employment", "🎓", "Home, Study & Work"),
    "personal-life-relationships": ("La vida personal y las relaciones — Personal Life & Relationships", "💬", "People, World & Health"),
    "world-around-us": ("El mundo que nos rodea — The World Around Us", "🌍", "People, World & Health"),
    "social-fitness-health": ("Ocio, deporte y salud — Social Activities, Fitness & Health", "🏃", "People, World & Health"),
    "past-future-tenses": ("Dominio de los tiempos verbales — IGCSE Tense Mastery", "⏳", "IGCSE Grammar Mastery"),
    "subjunctive-grade9": ("Estructuras de nota 9 — Subjunctive, Si Clauses & Pronouns", "🏆", "IGCSE Grammar Mastery"),
}

rows = []
shorts = []
for num, topic, short, title in ns["SEASON"]:
    mp4 = os.path.join(ROOT, "public", "videos", f"{topic}.mp4")
    if not os.path.exists(mp4):
        continue
    dur = float(subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp4],
                               capture_output=True, text=True, check=True).stdout.strip())
    ep_ns = {}
    exec(open(os.path.join(HERE, "common.py")).read(), ep_ns)
    exec(open(os.path.join(HERE, "episodes", f"{topic}.py")).read(), ep_ns)
    rows.append(dict(num=num, topicId=topic, topicShort=short, title=title,
                     logline=ep_ns["EP"].get("logline", ""), durationSec=round(dur),
                     src=f"/videos/{topic}.mp4", poster=f"/videos/posters/{topic}.jpg"))

    tl_path = os.path.join(HERE, "out", topic, "timeline.json")
    if os.path.exists(tl_path):
        tl = json.load(open(tl_path, encoding="utf-8"))
        segs = tl.get("segments", [])
        topic_title, icon, strand = TOPIC_META_INFO.get(topic, (short, "🇪🇸", "IGCSE Grammar Mastery"))
        # Extract 2 high-yield clips per episode: 1) Examiner Trap segment, 2) Recap / Challenge opener
        trap_seg = next((s for s in segs if s.get("kind") == "card" and "TRAP" in (s.get("text", "") + " " + s.get("sub", "")).upper()), None)
        chal_seg = next((s for s in segs if s.get("kind") == "challenge"), None)
        windows = []
        if trap_seg:
            t0 = max(0.0, trap_seg["t0"])
            t1 = min(dur, t0 + 48.0)
            windows.append(("Examiner Grade-9 Trap: " + short, "Spot the exact mistake that costs IGCSE Paper 2 & 3 marks — and the Grade-9 fix.", t0, t1))
        if chal_seg:
            t0 = max(0.0, chal_seg["t0"] - 3.0)
            t1 = min(dur, dur)
            windows.append(("5-Second Pause Challenge: " + short, "Test yourself against Lola's three rapid-fire Edexcel 4SP0 exam prompts.", t0, t1))
        if not windows:
            t0 = min(12.0, dur * 0.1)
            t1 = min(dur, t0 + 45.0)
            windows.append((f"{short}: Key Spanish Structures", ep_ns["EP"].get("logline", ""), t0, t1))
        for idx, (clip_title, clip_sum, w0, w1) in enumerate(windows):
            caps = []
            for s in segs:
                if s.get("kind") == "line" and s["t1"] > w0 and s["t0"] < w1:
                    raw_txt = s.get("text") or " ".join(x.get("text", "") for x in (s.get("subs") or []))
                    clean = raw_txt.replace("[[", "").replace("]]", "").strip()
                    if clean:
                        caps.append(dict(t=round(s["t0"], 2), who=s.get("who", "lola"), text=clean))
            shorts.append(dict(
                id=f"{topic}-short-{idx+1}",
                topicId=topic,
                topicTitle=topic_title,
                topicShort=short,
                topicIcon=icon,
                strand=strand,
                episodeTitle=title,
                index=idx + 1,
                totalInTopic=len(windows),
                title=clip_title,
                summary=clip_sum,
                startSec=round(w0, 1),
                endSec=round(w1, 1),
                durationSec=max(5, round(w1 - w0)),
                src=f"/videos/{topic}.mp4",
                poster=f"/videos/posters/{topic}.jpg",
                captions=caps[:16],
            ))

out = os.path.join(ROOT, "lib", "sitcom.ts")
with open(out, "w") as f:
    f.write("// Generated by scripts/sitcom/gen_manifest.py — do not edit by hand.\n")
    f.write("// IGCSE Spanish (4SP0) animated sitcom: one episode per topic (MP4s in public/videos).\n\n")
    f.write(f"export const SHOW_TITLE = {json.dumps(SHOW_TITLE, ensure_ascii=False)};\n")
    f.write(f"export const SHOW_BLURB = {json.dumps(SHOW_BLURB, ensure_ascii=False)};\n\n")
    f.write("export interface SitcomEpisode {\n  num: number;\n  topicId: string;\n  topicShort: string;\n  title: string;\n"
            "  logline: string;\n  durationSec: number;\n  src: string;\n  poster: string;\n}\n\n")
    f.write("export const SITCOM_EPISODES: SitcomEpisode[] = " + json.dumps(rows, indent=2, ensure_ascii=False) + ";\n\n")
    f.write("export function sitcomEpisodeFor(topicId: string): SitcomEpisode | undefined {\n"
            "  return SITCOM_EPISODES.find((e) => e.topicId === topicId);\n}\n")
print(f"wrote {out}: {len(rows)} episodes")

shorts_out = os.path.join(ROOT, "lib", "shorts.ts")
with open(shorts_out, "w") as f:
    f.write("// Auto-generated concept Shorts manifest for IGCSE Spanish (4SP0).\n")
    f.write("export interface ShortCaption {\n  t: number;\n  who: string;\n  text: string;\n}\n\n")
    f.write("export interface ShortPart {\n  src: string;\n  start: number;\n  duration: number;\n}\n\n")
    f.write("export interface ShortClip {\n  id: string;\n  topicId: string;\n  topicTitle: string;\n  topicShort: string;\n"
            "  topicIcon: string;\n  strand: string;\n  episodeTitle: string;\n  index: number;\n  totalInTopic: number;\n"
            "  title: string;\n  summary: string;\n  startSec: number;\n  endSec: number;\n  durationSec: number;\n"
            "  src?: string;\n  parts?: ShortPart[];\n  poster?: string;\n  embedHref?: string;\n  chapterId?: string;\n"
            "  captions: ShortCaption[];\n}\n\n")
    f.write("export const SHORTS: ShortClip[] = " + json.dumps(shorts, indent=2, ensure_ascii=False) + ";\n")
print(f"wrote {shorts_out}: {len(shorts)} shorts")
