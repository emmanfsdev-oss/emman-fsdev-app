import { projects } from "../_data/profile";
import { ExternalLink } from "./ExternalLink";

export function Projects() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
      <h1 className="sr-only">Selected work</h1>
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="flex min-h-[340px] flex-col gap-3.5 rounded-tile bg-card p-8 transition-transform hover:-translate-y-0.5"
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
          <h2 className="font-display text-2xl leading-snug font-semibold">{project.name}</h2>
          <p className="text-[13px] font-semibold text-brand-ink">{project.context}</p>
          <p className="flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
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
          {project.href && <ExternalLink href={project.href} />}
        </article>
      ))}
    </div>
  );
}
