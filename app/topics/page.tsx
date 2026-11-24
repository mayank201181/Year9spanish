import type { Metadata } from "next";
import { Suspense } from "react";
import { TopicsBrowser } from "@/components/TopicsBrowser";
import { topicSummaries } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Tanglin Year 9 Spanish Topics",
  description: "All 8 Tanglin Year 9 Spanish units across Holidays, Food & Health, Style & Culture, and Four-Tense Grammar Mastery.",
};

function TopicsFallback() {
  return (
    <div className="space-y-2" role="status">
      <h1 className="text-2xl font-black tracking-tight sm:text-3xl">All Tanglin Year 9 Spanish topics</h1>
      <p className="text-ink-2">Loading topics…</p>
    </div>
  );
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<TopicsFallback />}>
      <TopicsBrowser summaries={topicSummaries()} />
    </Suspense>
  );
}
