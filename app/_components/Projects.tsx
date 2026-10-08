import { projects } from "../_data/profile";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex flex-col gap-4"
    >
      <h2
        id="projects-heading"
        className="px-1 pt-4 font-display text-[22px] font-semibold"
      >
        Selected work
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="flex flex-col gap-3.5 rounded-tile bg-card p-7 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-display text-sm font-semibold text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.private && (
                <span className="rounded-full bg-warm-soft px-2.5 py-1 text-xs font-semibold text-warm-soft-ink">
                  Private codebase
                </span>
              )}
            </div>
            <h3 className="font-display text-xl leading-snug font-semibold">
              {project.name}
            </h3>
            <p className="text-[13px] font-semibold text-brand-ink">{project.context}</p>
            <p className="flex-1 text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg bg-chip px-2.5 py-1 text-xs font-semibold text-chip-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-brand-ink hover:underline"
              >
                Visit live site ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
