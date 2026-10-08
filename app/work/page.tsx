import type { Metadata } from "next";
import { Experience } from "../_components/Experience";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
};

export default function ExperiencePage() {
  return <Experience />;
}
