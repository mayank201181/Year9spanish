import type { Metadata } from "next";
import { getExamPapers, topicSummaries } from "@/lib/server/content";
import { TOPIC_META } from "@/lib/topics/meta";
import { ExamView } from "@/components/ExamView";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tanglin Year 9 Spanish Mock Exams",
  description: "Four full cross-topic Tanglin Year 9 Spanish mock papers covering Paper 1, Paper 2 (Reading, Q3c Grammar & Q6/Q7 Writing) and Paper 3.",
};

export default function ExamPage() {
  const papers = getExamPapers();
  const topicTitles = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.title]));
  const practiceTopics = topicSummaries()
    .filter((t) => t.ready && t.paperIds.length > 0)
    .map((t) => ({ id: t.id, title: t.title, icon: t.icon }));
  return <ExamView papers={papers} topicTitles={topicTitles} practiceTopics={practiceTopics} />;
}
