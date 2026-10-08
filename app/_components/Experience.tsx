import { experience } from "../_data/profile";
import { ExternalLink } from "./ExternalLink";

export function Experience() {
  const [current, ...earlier] = experience;

  return (
    <div className="flex flex-wrap items-start gap-4">
      <h1 className="sr-only">Work experience</h1>
      <article className="flex flex-[2_1_560px] flex-col gap-4 rounded-tile bg-card p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-warm px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-warm-ink">
            CURRENT
          </span>
          <span className="text-sm font-semibold text-brand-ink">
            {current.start} — {current.end}
          </span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
          {current.title} · {current.company}
        </h2>
        <p className="text-[15px] text-subtle">
          {[current.via && `via ${current.via}`, current.location].filter(Boolean).join(" · ")}
        </p>
        <p className="text-[17px] leading-relaxed text-muted">{current.summary}</p>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-muted marker:text-brand">
          {current.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2" aria-label={`${current.company} stack`}>
          {current.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-xl bg-brand-soft px-3 py-1.5 text-[13px] font-semibold text-brand-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>

      <section aria-labelledby="earlier-heading" className="flex flex-[1_1_320px] flex-col gap-3">
        <h2
          id="earlier-heading"
          className="px-1.5 pt-1 text-[13px] font-bold tracking-[0.1em] text-subtle"
        >
          EARLIER
        </h2>
        {earlier.map((role) => (
          <div
            key={`${role.company}-${role.start}`}
            className="flex flex-col gap-3 rounded-[20px] bg-card px-6 py-5"
          >
            <details className="group">
              <summary className="flex cursor-pointer list-none flex-col gap-1.5 [&::-webkit-details-marker]:hidden">
                <span className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-base font-bold">{role.company}</span>
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold text-subtle">
                    {role.start} — {role.end}
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </span>
                <span className="text-sm font-semibold text-brand-ink">{role.title}</span>
                <span className="text-sm leading-normal text-muted">{role.summary}</span>
              </summary>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-brand">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
            {role.href && <ExternalLink href={role.href} />}
          </div>
        ))}
      </section>
    </div>
  );
}
