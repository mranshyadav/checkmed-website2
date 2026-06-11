import Reveal from "./Reveal";
import {
  ArrowRight,
  Video,
  Flask,
  ShieldHeart,
  Star,
  Lock,
  Stethoscope,
} from "@/lib/icons";

const journey = [
  {
    icon: Video,
    day: "Day 0",
    title: "Symptom reported",
    detail: "Teleconsult with a doctor in 4 minutes",
  },
  {
    icon: Flask,
    day: "Day 1",
    title: "Tests done at home",
    detail: "Sample picked up, report the same day",
  },
  {
    icon: Stethoscope,
    day: "Day 3",
    title: "Resolved at OPD",
    detail: "Hospitalisation avoided — ₹84,000 saved",
  },
];

const proof = [
  { value: "250K+", label: "lives covered" },
  { value: "200+", label: "companies onboard" },
  { value: "96%", label: "renewal rate" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-44">
      {/* Quiet background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Employee health platform
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-ink-900 sm:text-6xl lg:text-[4rem]">
              Everything it takes to keep your employees{" "}
              <span className="text-gradient">safe from IPD.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600">
              CheckMed brings doctors, diagnostics, pharmacy and preventive care into one
              trusted platform — so health issues are caught early and resolved long before
              they become hospitalisations.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-800"
              >
                Book a demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          {/* Quiet proof bar */}
          <Reveal delay={4}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-100 pt-7">
              <span className="flex items-center gap-2.5">
                <span className="flex gap-0.5" role="img" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400" />
                  ))}
                </span>
                <span className="text-sm text-ink-600">
                  <span className="font-display font-bold text-ink-900">4.9/5</span> from 200+ teams
                </span>
              </span>
              {proof.map((p) => (
                <span key={p.label} className="text-sm text-ink-500">
                  <span className="font-display font-bold text-ink-900">{p.value}</span> {p.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: one calm care-journey panel */}
        <Reveal delay={2} className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* soft single backdrop */}
            <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-brand-50/70" />

            <div className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
              {/* header */}
              <div className="flex items-center gap-3.5 border-b border-ink-100 pb-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white">
                  <ShieldHeart className="h-5.5 w-5.5" />
                </span>
                <div>
                  <p className="font-display text-[17px] font-bold text-ink-900">
                    Care that arrives early
                  </p>
                  <p className="text-sm text-ink-500">A typical CheckMed journey</p>
                </div>
              </div>

              {/* journey timeline */}
              <ol className="mt-6 space-y-0">
                {journey.map((step, i) => {
                  const Icon = step.icon;
                  const last = i === journey.length - 1;
                  return (
                    <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                      {/* connector */}
                      {!last ? (
                        <span className="absolute left-[21px] top-11 h-[calc(100%-2.5rem)] w-px bg-ink-100" />
                      ) : null}
                      <span
                        className={`relative grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border ${
                          last
                            ? "border-brand-200 bg-brand-50 text-brand-700"
                            : "border-ink-100 bg-white text-ink-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                          {step.day}
                        </p>
                        <p className="mt-0.5 font-semibold text-ink-900">{step.title}</p>
                        <p
                          className={`mt-0.5 text-sm ${
                            last ? "font-medium text-brand-700" : "text-ink-500"
                          }`}
                        >
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* security footer */}
              <div className="mt-7 flex items-center gap-2.5 rounded-2xl bg-ink-50/70 px-4 py-3">
                <Lock className="h-4.5 w-4.5 shrink-0 text-brand-700" />
                <p className="text-[13px] leading-snug text-ink-600">
                  End-to-end encrypted records · OTP-secured access · Verified doctors only
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
