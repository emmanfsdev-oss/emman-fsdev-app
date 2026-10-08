const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 px-1 pb-3">
      <a href="#top" className="font-display text-lg font-bold tracking-tight">
        emman<span className="text-brand">.dev</span>
      </a>
      <nav
        aria-label="Sections"
        className="flex flex-wrap gap-1 rounded-full bg-card p-1.5 sm:gap-1.5"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-chip hover:text-ink sm:px-4"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-tile px-3 py-2.5 text-sm font-semibold text-tile-ink transition-opacity hover:opacity-85 sm:px-4"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
