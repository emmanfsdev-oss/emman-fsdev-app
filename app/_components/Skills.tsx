import { cloud, skills } from "../_data/profile";

export function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="flex flex-col gap-5 rounded-tile bg-card p-7"
      >
        <h2 id="stack-heading" className="font-display text-xl font-semibold">
          Stack
        </h2>
        {skills.map((group) => (
          <div key={group.name} className="flex flex-col gap-2">
            <h3 className="text-xs font-bold tracking-[0.12em] text-subtle uppercase">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${
                    group.accent
                      ? "bg-brand-soft text-brand-ink"
                      : "bg-chip text-chip-ink"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        aria-labelledby="cloud-heading"
        className="flex flex-col gap-3.5 rounded-tile bg-card p-7"
      >
        <h2 id="cloud-heading" className="font-display text-xl font-semibold">
          Cloud &amp; DevOps
        </h2>
        <ul className="grid grid-cols-3 gap-2">
          {cloud.services.map((service) => (
            <li
              key={service}
              className="rounded-xl bg-tile py-3 text-center text-[13px] font-semibold text-tile-ink"
            >
              {service}
            </li>
          ))}
        </ul>
        <p className="text-sm text-subtle">{cloud.caption}</p>
      </section>
    </div>
  );
}
