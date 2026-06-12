import Reveal from "./Reveal";
import {
  ArrowRight,
  Video,
  Flask,
  Stethoscope,
  ShieldHeart,
  Star,
  Lock,
  Check,
} from "@/lib/icons";

const journey = [
  { icon: Video, day: "Day 0", title: "Symptom reported", detail: "Teleconsult with a doctor in 4 minutes" },
  { icon: Flask, day: "Day 1", title: "Tests done at home", detail: "Sample collected, report the same day" },
  { icon: Stethoscope, day: "Day 3", title: "Resolved at OPD", detail: "Treated early, fully recovered" },
];

const avatars = ["AK", "RM", "PN", "DR"];

const proof = [
  { value: "250K+", label: "lives covered" },
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
              CheckMed brings doctors, diagnostics, pharmacy and preventive care into one trusted
              platform — so health issues are caught early and resolved long before they become
              hospitalisations.
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

          <Reveal delay={3}>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-600" strokeWidth={2.5} /> 30-minute walkthrough
              </span>
              <span className="text-ink-300">·</span>
              <span>Live in days</span>
              <span className="text-ink-300">·</span>
              <span>No long-term lock-in</span>
            </p>
          </Reveal>

          {/* Social proof */}
          <Reveal delay={4}>
            <div className="mt-10 flex flex-col gap-5 border-t border-ink-100 pt-7 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatars.map((a) => (
                    <span
                      key={a}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-brand-500 to-brand-700 text-[11px] font-bold text-white"
                    >
                      {a}
                    </span>
                  ))}
                  <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-ink-100 text-[10px] font-bold text-ink-600">
                    200+
                  </span>
                </div>
                <div>
                  <span className="flex gap-0.5" role="img" aria-label="4.9 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-amber-400" />
                    ))}
                  </span>
                  <p className="mt-0.5 text-sm text-ink-600">
                    <span className="font-display font-bold text-ink-900">4.9/5</span> · trusted by
                    people teams
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-ink-100 sm:block" />

              <div className="flex items-center gap-7">
                {proof.map((p) => (
                  <div key={p.label}>
                    <p className="font-display text-xl font-extrabold text-ink-900">{p.value}</p>
                    <p className="text-xs text-ink-500">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: calm product-style care timeline */}
        <Reveal delay={2} className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-brand-50/70" />

            <div className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
              {/* header */}
              <div className="flex items-center justify-between border-b border-ink-100 pb-5">
                <div className="flex items-center gap-3.5">
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
                <span className="hidden items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Live
                </span>
              </div>

              {/* timeline */}
              <ol className="mt-6">
                {journey.map((step, i) => {
                  const Icon = step.icon;
                  const last = i === journey.length - 1;
                  return (
                    <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                      {!last ? (
                        <span className="absolute left-[20px] top-11 h-[calc(100%-2.25rem)] w-px bg-ink-100" />
                      ) : null}
                      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-100 bg-white text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                          {step.day}
                        </p>
                        <p className="mt-0.5 font-semibold text-ink-900">{step.title}</p>
                        <p className="mt-0.5 text-sm text-ink-500">{step.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* outcome */}
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-brand-700 px-4 py-3.5 text-white">
                <span className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-semibold">Hospitalisation avoided</span>
                </span>
                <span className="font-display text-sm font-bold">₹84,000 saved</span>
              </div>

              {/* trust */}
              <div className="mt-4 flex items-center gap-2 text-[13px] text-ink-400">
                <Lock className="h-4 w-4 shrink-0 text-brand-600" />
                Encrypted records · OTP-secured access · Verified doctors only
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
