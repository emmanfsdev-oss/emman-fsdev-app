import type { Metadata } from "next";
import { Skills } from "../_components/Skills";

export const metadata: Metadata = {
  title: "Stack",
  alternates: { canonical: "/stack" },
};

export default function SkillsPage() {
  return <Skills />;
}
