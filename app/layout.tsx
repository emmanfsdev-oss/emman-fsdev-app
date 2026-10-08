import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { profile } from "./_data/profile";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const description = `${profile.title} with ${profile.years} years building web and mobile products. Currently on Officeworks' e-commerce platform with TypeScript, React, Node.js and AWS.`;

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description,
    type: "profile",
    images: [{ url: profile.photo, width: 600, height: 600, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description,
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9edf2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e15" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
