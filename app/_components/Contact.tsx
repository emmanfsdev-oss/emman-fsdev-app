import { profile } from "../_data/profile";

export function Contact() {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="flex flex-wrap items-center justify-between gap-5 rounded-tile bg-brand p-8 text-on-brand sm:p-9"
      >
        <div className="flex flex-col gap-1.5">
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold tracking-[-0.02em]"
          >
            Let&apos;s build something reliable.
          </h2>
          <p className="text-on-brand-muted">
            {profile.location} · {profile.timezone} · works with Australian teams
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-13 items-center rounded-full bg-white px-6 font-bold text-[#0e1726] transition-transform hover:-translate-y-0.5"
        >
          {profile.email}
        </a>
      </section>
      <footer className="flex flex-wrap justify-between gap-2 px-1 pt-2 text-sm text-subtle">
        <span>© {profile.name}</span>
        <a href={profile.resumeHref} download className="hover:text-ink">
          Résumé (PDF)
        </a>
      </footer>
    </>
  );
}
