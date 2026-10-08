import Image from "next/image";
import { ViewLink } from "./Navigation";
import { experience, profile } from "../_data/profile";
import { CurrentViewTitle, SidebarNav } from "./Nav";

export function SiteHeader() {
  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-line bg-card px-4 py-3 sm:px-7">
      <ViewLink href="/" className="font-display text-lg font-bold tracking-tight">
        emman<span className="text-brand">.fsdev</span>
      </ViewLink>
      <CurrentViewTitle />
      <div className="flex gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center rounded-full bg-chip px-4 text-sm font-semibold text-ink transition-colors hover:bg-line"
        >
          Email
        </a>
        <a
          href={profile.resumeHref}
          download
          className="inline-flex min-h-11 items-center rounded-full bg-tile px-4 text-sm font-semibold text-tile-ink transition-opacity hover:opacity-85"
        >
          Résumé ↓
        </a>
      </div>
    </header>
  );
}

export function Sidebar() {
  const current = experience.find((role) => role.current);
  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-6 overflow-y-auto bg-side px-5 py-7 text-side-ink lg:flex">
      <div className="flex items-center gap-3">
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={52}
          height={52}
          loading="eager"
          className="size-[52px] rounded-full border-2 border-brand object-cover"
        />
        <div className="flex flex-col">
          <span className="font-display text-[15px] font-bold">{profile.name}</span>
          <span className="text-xs text-side-muted">Senior Full Stack Engineer</span>
        </div>
      </div>
      <SidebarNav />
      {current && (
        <div className="mt-auto flex flex-col gap-1.5 rounded-2xl bg-warm p-4 text-warm-ink">
          <span className="text-[11px] font-bold tracking-[0.1em]">NOW</span>
          <span className="font-display text-[17px] font-bold">{current.company}</span>
          <span className="text-xs leading-snug">
            E-commerce platform · {current.location}
          </span>
        </div>
      )}
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex shrink-0 flex-wrap items-center justify-between gap-x-5 gap-y-1 border-t border-line bg-card px-4 py-2.5 text-[13px] text-subtle sm:px-7">
      <span>© {profile.name}</span>
      <span className="hidden items-center gap-2 sm:inline-flex">
        <span className="size-2 rounded-full bg-brand" aria-hidden />
        {profile.location} · {profile.timezone}
      </span>
      <div className="flex gap-4">
        <a href={`mailto:${profile.email}`} className="hover:text-ink">
          Email
        </a>
        <a href={profile.resumeHref} download className="hover:text-ink">
          Résumé (PDF)
        </a>
      </div>
    </footer>
  );
}
