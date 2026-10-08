"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { views, type View } from "../_data/profile";

function isActive(view: View, pathname: string) {
  return view.href === "/" ? pathname === "/" : pathname.startsWith(view.href);
}

function Icon({ path }: { path: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-[18px] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

/** Vertical nav for the desktop sidebar. */
export function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Views" className="flex flex-col gap-1">
      {views.map((view) => {
        const active = isActive(view, pathname);
        return (
          <Link
            key={view.href}
            href={view.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-12 items-center gap-3 rounded-xl px-3.5 text-[15px] font-semibold transition-colors ${
              active
                ? "bg-brand text-on-brand"
                : "text-side-muted hover:bg-side-hover hover:text-side-ink"
            }`}
          >
            <Icon path={view.icon} />
            {view.label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Horizontal, scrollable pill nav shown under the header on small screens. */
export function MobileNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Keep the active pill visible when the route changes (e.g. landing on /contact).
  useEffect(() => {
    navRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Views"
      className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-line bg-card px-4 py-2.5 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
    >
      {views.map((view) => {
        const active = isActive(view, pathname);
        return (
          <Link
            key={view.href}
            href={view.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-10 shrink-0 items-center gap-2 rounded-full px-3.5 text-sm font-semibold transition-colors ${
              active ? "bg-tile text-tile-ink" : "text-muted hover:bg-chip"
            }`}
          >
            <Icon path={view.icon} />
            {view.label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Name of the current view, shown in the header. */
export function CurrentViewTitle() {
  const pathname = usePathname();
  const view = views.find((v) => isActive(v, pathname));
  return (
    <span className="hidden text-sm text-subtle md:inline">
      {view?.label ?? "Not found"}
    </span>
  );
}
