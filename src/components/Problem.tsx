import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Hospital, Clock, ChartDown, Check, Close } from "@/lib/icons";

const costs = [
  {
    icon: Hospital,
    stat: "₹84,000",
    title: "Average IPD claim",
    body: "A single hospitalisation drains group covers, spikes premiums and dents employee morale.",
  },
  {
    icon: Clock,
    stat: "5–7 days",
    title: "Lost to recovery",
    body: "Beyond the bill, every admission means lost productivity and an anxious, absent employee.",
  },
  {
    icon: ChartDown,
    stat: "60%+",
    title: "Were preventable",
    body: "Most admissions trace back to issues that timely OPD care or a check-up could have caught.",
  },
];

const oldWay = [
  "Care starts only after someone is already sick",
  "OPD, labs and pharmacy scattered across vendors",
  "Employees self-medicate or delay until it's an emergency",
  "Insurers see claims rise, premiums follow",
];

const newWay = [
  "Proactive screening catches risk early",
  "OPD, teleconsult, labs & pharmacy in one flow",
  "A doctor in minutes, before it escalates",
  "Fewer admissions — lower claims and premiums",
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              IPD is the most expensive — and most{" "}
              <span className="text-gradient">avoidable</span> — moment in healthcare.
            </>
          }
          description="When an employee lands in the in-patient department, everyone loses: the employee, the employer, and the insurer. The good news? It rarely has to get that far."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costs.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-500/10 text-coral-600 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-3xl font-extrabold text-ink-900">{c.stat}</p>
                  <p className="mt-1 font-semibold text-ink-800">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Old way vs CheckMed way */}
        <Reveal delay={2}>
          <div className="mt-16 grid overflow-hidden rounded-3xl border border-ink-100 md:grid-cols-2">
            <div className="bg-ink-50/60 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                The reactive model
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-ink-700">
                Wait for sickness, then pay for it
              </h3>
              <ul className="mt-6 space-y-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-500">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink-200 text-ink-500">
                      <Close className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white sm:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-200">
                The CheckMed model
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">
                Stay ahead of sickness — and skip the ward
              </h3>
              <ul className="mt-6 space-y-4">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] text-brand-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
