import { profile } from "../_data/profile";

export function Contact() {
  return (
    <div className="flex min-h-full flex-wrap gap-4">
      <section className="flex flex-[2_1_560px] flex-col justify-center gap-6 rounded-tile bg-brand p-8 text-on-brand sm:p-12">
        <h1 className="font-display text-4xl leading-[1.04] font-bold tracking-[-0.03em] text-balance sm:text-5xl xl:text-6xl">
          Let&apos;s build something reliable.
        </h1>
        <p className="max-w-xl text-lg text-on-brand-muted">
          Have a role or a project in mind? Email is the fastest way to reach me.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-13 items-center rounded-full bg-white px-6 font-bold text-[#0e1726] transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex min-h-13 items-center rounded-full border border-white/50 px-6 font-semibold transition-colors hover:bg-white/10"
          >
            Download résumé
          </a>
        </div>
      </section>

      <div className="flex flex-[1_1_300px] flex-col gap-4">
        <div className="flex flex-1 flex-col gap-2 rounded-tile bg-card p-7">
          <span className="text-[13px] font-bold tracking-[0.1em] text-subtle">BASED IN</span>
          <span className="font-display text-[26px] font-bold">{profile.location}</span>
          <span className="text-[15px] text-muted">
            {profile.timezone} · works with Australian teams
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-tile bg-tile p-7 text-tile-ink">
          <span className="text-[13px] font-bold tracking-[0.1em] text-tile-muted">
            FASTEST REPLY
          </span>
          <span className="font-display text-[26px] font-bold">Email</span>
          <span className="text-[15px] break-all opacity-85">{profile.email}</span>
        </div>
      </div>
    </div>
  );
}
