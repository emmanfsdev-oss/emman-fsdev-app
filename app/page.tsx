import { Contact } from "./_components/Contact";
import { Experience } from "./_components/Experience";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects";
import { Skills } from "./_components/Skills";

export const ensureStatic = "navigation";

export default function Home() {
  return (
    <main id="top" className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10">
      <Header />
      <Hero />
      <div className="grid items-start gap-4 lg:grid-cols-3">
        <Experience />
        <Skills />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
