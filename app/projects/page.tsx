import type { Metadata } from "next";
import { Projects } from "../_components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}
