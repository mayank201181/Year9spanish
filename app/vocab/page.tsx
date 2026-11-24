import type { Metadata } from "next";
import { GlobalVocabHub } from "@/components/GlobalVocabHub";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Year 9 Spanish Vocabulary Bank",
  description:
    "Browse, listen (normal 🔊 + slow 🐢), flip cards and self-test across ~850 high-frequency Tanglin Year 9 Spanish words and idioms.",
};

export default function VocabPage() {
  return <GlobalVocabHub />;
}
