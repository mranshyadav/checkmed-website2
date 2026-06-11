import type { ReactNode } from "react";
import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 lg:pb-18 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
