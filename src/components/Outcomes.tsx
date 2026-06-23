import Reveal from "./Reveal";
import Counter from "./Counter";
import { Lock, Spark, ShieldHeart } from "@/lib/icons";

const stats = [
  { to: 40, suffix: "%", label: "fewer avoidable IPD admissions", sub: "when care starts early" },
  { to: 4, suffix: " min", label: "average time to reach a doctor", sub: "any hour, any day" },
  { to: 84, prefix: "₹", suffix: "k", label: "saved per admission avoided", sub: "for employer & insurer" },
  { to: 3, suffix: "×", label: "more engaged than plain cover", sub: "employees actually use it" },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative overflow-hidden bg-ink-950 py-24 lg:py-28">
      {/* glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
              The outcomes
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Prevention pays — for every<span className="text-gradient"> stakeholder</span>.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              These are the targets CheckMed is built to hit. Keep employees well, and the savings
              follow — in claims, in premiums, and in productive days at work.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <div className="h-full bg-ink-950 p-8 text-center sm:text-left">
                <p className="font-display text-5xl font-extrabold tracking-tight text-white">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-semibold text-brand-200">{s.label}</p>
                <p className="mt-1 text-sm text-ink-300">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* trust footnote */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Lock, title: "Secure by design", body: "OTP login, encryption and role-based access." },
            { icon: Spark, title: "Built to scale", body: "From a 50-person team to an enterprise workforce." },
            { icon: ShieldHeart, title: "Care-first, always", body: "Every decision optimises for the employee." },
          ].map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.title}</p>
                    <p className="mt-0.5 text-sm text-ink-300">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
