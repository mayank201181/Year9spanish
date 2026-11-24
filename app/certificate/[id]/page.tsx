import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { topicSummaries } from "@/lib/server/content";
import { TOPIC_META, metaById } from "@/lib/topics/meta";
import { Certificate } from "@/components/Certificate";

export const dynamicParams = false;

export function generateStaticParams(): { id: string }[] {
  return [...TOPIC_META.map((t) => ({ id: t.id })), { id: "igcse" }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  if (id === "igcse") return { title: "Year 9 Spanish Certificate" };
  const meta = metaById(id);
  return { title: meta ? `${meta.title} certificate` : "Certificate" };
}

export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const summaries = topicSummaries();
  if (id === "igcse") return <Certificate kind="igcse" summaries={summaries} />;
  const topic = summaries.find((s) => s.id === id);
  if (!topic) notFound();
  return <Certificate kind="topic" topic={topic} summaries={summaries} />;
}
