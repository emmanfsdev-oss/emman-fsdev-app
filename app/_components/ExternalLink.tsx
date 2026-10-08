/** Opens an external site in a new tab, labelled with its hostname (e.g. "qtech.ph ↗"). */
export function ExternalLink({ href, className = "" }: { href: string; className?: string }) {
  const host = new URL(href).hostname.replace(/^www\./, "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand-ink hover:underline ${className}`}
    >
      {host} <span aria-hidden>↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
