import { experience } from "../_data/profile";

export function Experience() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="flex flex-col rounded-tile bg-card p-7 sm:p-8 lg:col-span-2"
    >
      <h2 id="work-heading" className="mb-3.5 font-display text-[22px] font-semibold">
        Experience
      </h2>
      {experience.map((role) => (
        <details
          key={`${role.company}-${role.start}`}
          open={role.current}
          className="group border-t border-line"
        >
          <summary className="flex cursor-pointer list-none flex-wrap items-start justify-between gap-x-4 gap-y-1.5 py-4 [&::-webkit-details-marker]:hidden">
            <span className="flex flex-col gap-1">
              <span className="text-base font-bold">
                {role.title} · {role.company}
              </span>
              <span className="text-sm text-subtle">
                {[role.via && `via ${role.via}`, role.location, role.summary]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${role.current ? "text-brand-ink" : "text-subtle"}`}
              >
                {role.start} — {role.end}
              </span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-4 text-subtle transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </summary>
          <div className="flex flex-col gap-3 pb-5">
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-brand">
              {role.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2" aria-label={`${role.company} stack`}>
              {role.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-xl bg-brand-soft px-3 py-1.5 text-[13px] font-semibold text-brand-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </section>
  );
}
