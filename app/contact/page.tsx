import type { Metadata } from "next";
import { Contact } from "../_components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
