import Reveal from "./Reveal";
import { Check } from "@/lib/icons";
import type { Item } from "@/lib/content";

type Mode = NonNullable<Item["modes"]>[number];
type Step = NonNullable<Item["steps"]>[number];

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-lg leading-relaxed text-ink-600">{body}</p> : null}
    </div>
  );
}

export function ModesBand({
  eyebrow = "How to access",
  title,
  modes,
}: {
  eyebrow?: string;
  title: string;
  modes: Mode[];
}) {
  const cols = modes.length >= 3 ? "lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
          {modes.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <div className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink-900">{m.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{m.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ConditionsBand({ conditions }: { conditions: string[] }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead
          eyebrow="What we cover"
          title="Conditions we help manage"
          body="A dedicated care manager builds a plan around each member's condition — and adjusts it as they progress."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {conditions.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IncludedBand({ title, points }: { title: string; points: string[] }) {
  return (
    <section className="bg-ink-50/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="What you get" title={title} />
        <div className="mt-12 grid gap-x-12 gap-y-6 rounded-3xl border border-ink-100 bg-white p-8 sm:grid-cols-2 sm:p-10">
          {points.map((p, i) => (
            <Reveal key={p} delay={(((i % 2) + 1) as 1 | 2)}>
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
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

export function StepsTimeline({
  steps,
  title = "Care in a few simple steps",
}: {
  steps: Step[];
  title?: string;
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="How it works" title={title} />
        <div className="relative mt-14">
          {/* connector: vertical on mobile, horizontal on desktop */}
          <div className="pointer-events-none absolute left-[1.375rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand-300 to-transparent lg:inset-x-0 lg:bottom-auto lg:top-[1.375rem] lg:h-px lg:w-auto lg:bg-gradient-to-r lg:from-transparent lg:via-brand-300 lg:to-transparent" />
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="relative flex gap-4 lg:block">
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <div className="lg:mt-5">
                    <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
