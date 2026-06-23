import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Activity, Spark, HeartPulse, ShieldHeart } from "@/lib/icons";

const steps = [
  {
    icon: Activity,
    step: "01",
    title: "Screen & profile",
    body: "Every employee starts with a health check-up and risk profile — so silent risks surface long before they become claims.",
  },
  {
    icon: Spark,
    step: "02",
    title: "Engage & prevent",
    body: "Personalised nudges, wellness programs and chronic-care follow-ups keep people on track between visits.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Care at first sign",
    body: "A symptom appears? OPD consults, teleconsultation, labs and pharmacy kick in within minutes — not weeks.",
  },
  {
    icon: ShieldHeart,
    step: "04",
    title: "Stay out of IPD",
    body: "Issues get resolved early and tracked to outcome. The result: fewer admissions, lower claims, healthier teams.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-ink-50/40 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A continuous loop of care that ends{" "}
              <span className="text-gradient">before the hospital</span>.
            </>
          }
          description="CheckMed turns one-off doctor visits into an always-on safety net — catching problems early and resolving them at the lightest possible level of care."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[2.4rem] hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.step} delay={((i + 1) as 1 | 2 | 3 | 4)} className="relative">
                  <div className="relative z-10 mx-auto grid h-[4.8rem] w-[4.8rem] place-items-center rounded-2xl border border-brand-100 bg-white text-brand-600 lg:mx-0">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-ink-900 font-display text-[11px] font-bold text-white">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-center font-display text-lg font-bold text-ink-900 lg:text-left">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-ink-500 lg:text-left">
                    {s.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
