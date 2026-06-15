import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "./PageHero";
import CTABand from "./CTABand";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "@/lib/icons";
import { getSection, itemHref, type SectionKey } from "@/lib/content";

export function Highlights({ title = "What's included", points }: { title?: string; points: string[] }) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p} delay={(((i % 2) + 1) as 1 | 2)}>
              <div className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-relaxed text-ink-700">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DetailPage({
  sectionKey,
  slug,
  children,
  hideCTA = false,
  cta,
}: {
  sectionKey: SectionKey;
  slug: string;
  children?: ReactNode;
  hideCTA?: boolean;
  cta?: { title: string; body: string };
}) {
  const section = getSection(sectionKey);
  const item = section.items.find((i) => i.slug === slug)!;
  const siblings = section.items.filter((i) => i.slug !== slug);

  return (
    <main>
      <PageHero
        eyebrow={item.kicker ?? (item.group ? `${section.label} · ${item.group}` : section.label)}
        title={item.title}
        description={item.intro ?? item.desc}
      />

      {children}

      {/* Explore more in this section */}
      <section className="border-t border-ink-100 bg-ink-50/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              More in {section.label}
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                  <Link
                    href={itemHref(sectionKey, s.slug)}
                    className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {!hideCTA ? (
        <CTABand
          title={cta?.title ?? "Ready to keep your team out of the hospital?"}
          body={cta?.body ?? "Book a 30-minute walkthrough tailored to your organisation."}
        />
      ) : null}
    </main>
  );
}
