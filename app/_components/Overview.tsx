import Image from "next/image";
import Link from "next/link";
import { experience, profile } from "../_data/profile";

export function Overview() {
  const current = experience.find((role) => role.current);

  return (
    <div className="flex min-h-full flex-wrap gap-4">
      <section className="flex flex-[2_1_560px] flex-col justify-center gap-6 rounded-tile bg-card p-7 sm:p-11">
        <div className="flex flex-wrap items-center gap-4">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={80}
            height={80}
            loading="eager"
            className="size-20 rounded-full object-cover"
          />
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-2 text-[13px] font-semibold text-brand-ink">
            <span className="size-2 rounded-full bg-brand" aria-hidden />
            {profile.title}
          </span>
        </div>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.04] font-bold tracking-[-0.03em] text-balance sm:text-5xl xl:text-6xl">
          Hi, I&apos;m {profile.shortName}. I build e-commerce platforms{" "}
          <span className="text-brand">and the cloud they run on.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center rounded-full bg-tile px-6 font-semibold text-tile-ink transition-opacity hover:opacity-85"
          >
            See my work →
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full bg-chip px-6 font-semibold text-ink transition-colors hover:bg-line"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <div className="flex flex-[1_1_300px] flex-col gap-4">
        <div className="flex flex-1 flex-col justify-between gap-3 rounded-tile bg-tile p-7 text-tile-ink">
          <span className="text-sm text-tile-muted">Building for the web since</span>
          <span className="font-display text-7xl leading-none font-bold tracking-[-0.04em] sm:text-8xl">
            {profile.since}
          </span>
          <span className="text-[15px] opacity-85">
            {profile.years} years · {experience.length} teams · web + mobile
          </span>
        </div>
        {current && (
          <Link
            href="/work"
            className="flex flex-1 flex-col gap-2.5 rounded-tile bg-warm p-7 text-warm-ink transition-transform hover:-translate-y-0.5"
          >
            <span className="text-[13px] font-bold tracking-[0.1em]">NOW</span>
            <span className="font-display text-3xl font-bold">{current.company}</span>
            <span className="text-[15px] leading-normal">
              {current.summary} {current.location}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
