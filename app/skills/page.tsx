import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Year 9 Spanish Skills Map",
  description: "Every Tanglin Year 9 Spanish grammar, conjugation and translation skill — from New to Mastered — with one-tap adaptive drills.",
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
