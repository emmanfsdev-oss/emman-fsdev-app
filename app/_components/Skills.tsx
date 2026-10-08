import { cloud, skills } from "../_data/profile";

export function Skills() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
      <h1 className="sr-only">Skills and stack</h1>
      {skills.map((group) => (
        <section key={group.name} className="flex flex-col gap-3.5 rounded-3xl bg-card p-7">
          <h2 className="font-display text-[19px] font-semibold">{group.name}</h2>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                  group.accent ? "bg-brand-soft text-brand-ink" : "bg-chip text-chip-ink"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="col-span-full flex flex-wrap items-center gap-5 rounded-3xl bg-tile p-7 text-tile-ink">
        <div className="flex flex-[1_1_240px] flex-col gap-1.5">
          <h2 className="font-display text-[22px] font-semibold">Cloud &amp; DevOps</h2>
          <p className="text-sm text-tile-muted">{cloud.caption}</p>
        </div>
        <ul className="flex flex-[3_1_480px] flex-wrap gap-2">
          {cloud.services.map((service) => (
            <li
              key={service}
              className="rounded-xl bg-tile-ink/10 px-4 py-2.5 text-sm font-semibold"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
