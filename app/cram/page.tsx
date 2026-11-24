import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Tanglin Year 9 Spanish Exam Cram & Marks-Savers",
  description: "Custom Tanglin Year 9 Spanish Exam Cram & Year 9 Mark-Savers Sheet across Paper 1, Paper 2 and Paper 3.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building Tanglin Year 9 Spanish Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Year 9 Spanish" />
    </Suspense>
  );
}
