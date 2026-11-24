import type { Metadata } from "next";
import { VerbsReference } from "@/components/VerbsReference";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Year 9 Spanish Verb Conjugator",
  description:
    "Interactive Tanglin Year 9 Spanish verb conjugator across Present, Preterite, Imperfect, Near Future, Simple Future, Conditional, Perfect and Present Subjunctive.",
};

export default function VerbsPage() {
  return <VerbsReference />;
}
