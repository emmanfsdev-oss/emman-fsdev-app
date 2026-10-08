"use client";

import { useEffect, useRef } from "react";
import { views, type View } from "../_data/profile";
import { useNavigation, ViewLink } from "./Navigation";

function isActive(view: View, path: string) {
  return view.href === "/" ? path === "/" : path.startsWith(view.href);
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
  const { activePath } = useNavigation();
  return (
    <nav aria-label="Views" className="flex flex-col gap-1">
      {views.map((view) => {
        const active = isActive(view, activePath);
        return (
          <ViewLink
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
          </ViewLink>
        );
      })}
    </nav>
  );
}

/** Horizontal, scrollable pill nav shown under the header on small screens. */
export function MobileNav() {
  const { activePath } = useNavigation();
  const navRef = useRef<HTMLElement>(null);

  // Keep the active pill visible when the view changes (e.g. landing on /contact).
  useEffect(() => {
    navRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activePath]);

  return (
    <nav
      ref={navRef}
      aria-label="Views"
      className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-line bg-card px-4 py-2.5 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
    >
      {views.map((view) => {
        const active = isActive(view, activePath);
        return (
          <ViewLink
            key={view.href}
            href={view.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-10 shrink-0 items-center gap-2 rounded-full px-3.5 text-sm font-semibold transition-colors ${
              active ? "bg-tile text-tile-ink" : "text-muted hover:bg-chip"
            }`}
          >
            <Icon path={view.icon} />
            {view.label}
          </ViewLink>
        );
      })}
    </nav>
  );
}

/** Name of the current view, shown in the header. */
export function CurrentViewTitle() {
  const { activePath } = useNavigation();
  const view = views.find((v) => isActive(v, activePath));
  return (
    <span className="hidden text-sm text-subtle md:inline">
      {view?.label ?? "Not found"}
    </span>
  );
}
