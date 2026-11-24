"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { STRANDS } from "@/lib/topics/meta";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();

  const strands = ["All", ...STRANDS];
  const visible = strand === "All" ? topics : topics.filter((t) => t.strand === strand);
  const watchedCount = SITCOM_EPISODES.filter((e) => epDone[e.topicId]).length;
  const heroPoster = SITCOM_EPISODES[0]?.poster;

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className={heroPoster ? "space-y-3 md:col-span-7" : "space-y-3 md:col-span-12"}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">
                {SITCOM_EPISODES.length ? `${SITCOM_EPISODES.length} Narrated Sitcom Episodes` : `${topics.length} Episodes Planned`}
              </span>
              <span className="chip border-0 bg-bad-soft text-bad">🎯 Examiner Trap Beats</span>
              <span className="chip">⭐ {watchedCount}/{SITCOM_EPISODES.length || topics.length} Watched</span>
            </div>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">
              Totally Raotional: Year 9 Spanish — Watch Hub
            </h1>
            <p className="text-sm text-ink-2 sm:text-base">
              {SITCOM_EPISODES.length
                ? "Binge animated episodes covering every Year 9 topic — complete with visual board explanations, Mark-Saver traps, and interactive pause challenges!"
                : "Narrated Year 9 sitcom episodes and vertical Concept Shorts are queued for studio rendering. In the meantime, jump straight into any topic's interactive guide, Exam Cram sheet, or practice papers below!"}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/episodes" className="btn btn-primary">
                📺 Sitcom TV (/episodes)
              </Link>
              <Link href="/shorts" className="btn btn-secondary">
                📱 Concept Shorts (/shorts)
              </Link>
              <Link href="/cram" className="btn btn-secondary">
                🚨 Exam Cram (/cram)
              </Link>
            </div>
          </div>
          {heroPoster ? (
            <div className="md:col-span-5">
              <Image
                src={heroPoster}
                alt="Totally Raotional: Year 9 Spanish"
                width={960}
                height={540}
                className="h-auto w-full rounded-2xl border border-line object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStrand(s)}
            className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}
          >
            {s === "All" ? `All ${topics.length} Topics` : s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col justify-between gap-3 overflow-hidden p-0">
              {ep ? (
                <Link href={`/topic/${t.id}?tab=watch`} className="relative block">
                  <Image src={ep.poster} alt={ep.title} width={640} height={360} className="aspect-video w-full object-cover" />
                  <span className="absolute right-2 bottom-2 rounded-md bg-black/75 px-2 py-0.5 text-xs font-bold text-white">
                    {formatDuration(ep.durationSec)}
                  </span>
                  {epDone[t.id] ? (
                    <span className="absolute top-2 left-2 rounded-md bg-good px-2 py-0.5 text-xs font-bold text-white">Watched ✓</span>
                  ) : null}
                </Link>
              ) : null}
              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="chip text-xs">
                      {t.icon} Ep {String(t.num).padStart(2, "0")} · {t.strand}
                    </span>
                    {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">📺✓</span> : !ep ? <span className="chip text-xs">🎬 Queued</span> : null}
                  </div>
                  <h2 className="mt-2 text-lg font-extrabold">{ep ? `“${ep.title}”` : t.title}</h2>
                  <p className="mt-1 text-xs font-bold text-brand">{t.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-2">{ep?.logline || t.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link href={ep ? `/topic/${t.id}?tab=watch` : `/topic/${t.id}?tab=learn`} className="btn btn-primary btn-sm">
                    {ep ? "📺 Watch Episode" : "📖 Open Lesson"}
                  </Link>
                  <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-secondary btn-sm">
                    ✏️ Practise Topic
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
