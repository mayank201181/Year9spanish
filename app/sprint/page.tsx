import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fluency sprint",
  description: "Quick-fire Spanish — verb forms and vocabulary — timed or untimed.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
