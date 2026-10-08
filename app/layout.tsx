import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { MobileNav } from "./_components/Nav";
import { NavigationProvider } from "./_components/Navigation";
import { Sidebar, SiteFooter, SiteHeader } from "./_components/Shell";
import { ViewArea } from "./_components/ViewArea";
import { profile } from "./_data/profile";
import "./globals.css";

export const ensureStatic = "navigation";

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

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#131a26" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} antialiased`}>
      <body className="bg-bg font-sans text-ink">
        <NavigationProvider>
          <div className="flex h-dvh flex-col overflow-hidden">
            <SiteHeader />
            <div className="flex min-h-0 flex-1">
              <Sidebar />
              <div className="flex min-w-0 flex-1 flex-col">
                <MobileNav />
                <ViewArea>{children}</ViewArea>
              </div>
            </div>
            <SiteFooter />
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
