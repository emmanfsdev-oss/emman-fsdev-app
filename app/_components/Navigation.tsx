"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, use, useState, type ComponentProps, type MouseEvent } from "react";

type Pending = { href: string; from: string };

const NavigationContext = createContext<{
  /** The view being navigated to, or null when nothing is in flight. */
  target: string | null;
  /** The view the UI should treat as current: the target while loading, else the URL. */
  activePath: string;
  start: (href: string) => void;
} | null>(null);

/**
 * Tracks which view the visitor just clicked, so the nav and view area can
 * react on click instead of waiting for Next.js to finish the navigation.
 */
export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pending, setPending] = useState<Pending | null>(null);

  // A pending entry only counts while we are still on the page it started from:
  // once the URL changes (to the target, or anywhere via back/forward) it expires.
  const target =
    pending && pending.from === pathname && pending.href !== pathname ? pending.href : null;

  const start = (href: string) => setPending({ href, from: pathname });

  return (
    <NavigationContext value={{ target, activePath: target ?? pathname, start }}>
      {children}
    </NavigationContext>
  );
}

export function useNavigation() {
  const ctx = use(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used inside <NavigationProvider>");
  return ctx;
}

/** A `<Link>` to one of the site's views that starts the skeleton transition on click. */
export function ViewLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const { start } = useNavigation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    // Let the browser handle new-tab / new-window clicks untouched.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    start(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
