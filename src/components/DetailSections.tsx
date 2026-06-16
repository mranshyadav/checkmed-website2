import Reveal from "./Reveal";
import { ChevronDown, Quote } from "@/lib/icons";
import type { SectionContent } from "@/lib/pageContent";

export function BenefitsBand({
  heading,
  body,
  benefits,
}: Pick<SectionContent, "benefits"> & { heading: string; body: string }) {
  return (
    <section className="border-t border-ink-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Why CheckMed
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">{body}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <div className="group h-full rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MetricsBand({ metrics }: Pick<SectionContent, "metrics">) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
            <div className="h-full bg-ink-950 p-8 text-center sm:text-left">
              <p className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-[2.75rem]">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-medium text-brand-200">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FAQBand({ faqs }: Pick<SectionContent, "faqs">) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            FAQ
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Still curious? Our team is happy to walk through anything in detail.
          </p>
        </div>
        <div className="space-y-3.5">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-ink-100 bg-white p-6 transition-colors open:border-brand-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="h-4.5 w-4.5" />
                </span>
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofBand({ proof }: Pick<SectionContent, "proof">) {
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50/50 p-8 text-center sm:p-12">
            <Quote className="mx-auto h-10 w-10 text-brand-300" />
            <blockquote className="mx-auto mt-5 max-w-2xl font-display text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">
              &ldquo;{proof.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center justify-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                {proof.initials}
              </span>
              <div className="text-left">
                <p className="font-semibold text-ink-900">{proof.name}</p>
                <p className="text-sm text-ink-500">{proof.role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
