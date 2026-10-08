import type { Metadata } from "next";
import { Overview } from "./_components/Overview";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Overview />;
}
