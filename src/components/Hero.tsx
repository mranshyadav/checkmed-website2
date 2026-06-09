import Reveal from "./Reveal";
import {
  ArrowRight,
  ShieldHeart,
  Stethoscope,
  Video,
  Flask,
  Pill,
  Check,
  ChartDown,
} from "@/lib/icons";

const trustStats = [
  { value: "60%", label: "of IPD claims are preventable" },
  { value: "24/7", label: "doctor access for every employee" },
  { value: "₹0", label: "out-of-pocket at the first sign of illness" },
];

const floatingChips = [
  { icon: Stethoscope, label: "OPD consult", className: "left-[-4%] top-[18%]", anim: "animate-float" },
  { icon: Video, label: "Teleconsult", className: "right-[-6%] top-[8%]", anim: "animate-float-slow" },
  { icon: Flask, label: "Lab & diagnostics", className: "right-[-8%] bottom-[22%]", anim: "animate-float" },
  { icon: Pill, label: "Pharmacy", className: "left-[-7%] bottom-[14%]", anim: "animate-float-slow" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-ink-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Employee health, reimagined
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.1rem]">
              Everything it takes to keep your employees{" "}
              <span className="text-gradient">safe from IPD.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              Hospitalisation is expensive, stressful, and{" "}
              <span className="font-semibold text-ink-800">most often preventable</span>. CheckMed
              brings OPD consults, teleconsultation, lab tests, pharmacy and proactive wellness
              into one platform — so your people stay healthy and out of the in-patient ward.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

          <Reveal delay={4}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-500 sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right: floating health-shield visual */}
        <Reveal delay={2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square w-full">
            {/* Soft halo */}
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-400/20 to-ink-300/10 blur-2xl" />

            {/* Main card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[78%] rounded-[2rem] border border-white/70 bg-white/80 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    Workforce health
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                    <ChartDown className="h-3.5 w-3.5" /> IPD risk
                  </span>
                </div>

                <div className="mt-5 flex flex-col items-center text-center">
                  <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400/60" />
                    <ShieldHeart className="h-11 w-11" />
                  </div>
                  <p className="mt-4 font-display text-4xl font-extrabold text-ink-900">
                    98<span className="text-brand-600">%</span>
                  </p>
                  <p className="text-sm font-medium text-ink-500">protected & care-active</p>
                </div>

                {/* Mini ledger */}
                <div className="mt-6 space-y-2.5">
                  {[
                    { label: "Early symptom flagged", tag: "Resolved at OPD" },
                    { label: "Teleconsult booked", tag: "In 4 min" },
                    { label: "Hospitalisation avoided", tag: "Saved ₹84,000" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-ink-50/80 px-3.5 py-2.5"
                    >
                      <span className="flex items-center gap-2 text-[13px] font-medium text-ink-700">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-700">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        {row.label}
                      </span>
                      <span className="text-[11px] font-semibold text-brand-700">{row.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating service chips */}
            {floatingChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute ${chip.className} ${chip.anim} hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3.5 py-2.5 backdrop-blur-md sm:flex`}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[13px] font-semibold text-ink-800">{chip.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
