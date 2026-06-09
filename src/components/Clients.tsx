import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";

const clients = [
  "Nimbus",
  "Vertexa",
  "Northwind",
  "Quanta",
  "Lumio",
  "Hexaday",
  "Brightpath",
  "Cobalt",
  "Zephyr",
  "Marigold",
];

const highlights = [
  { to: 200, suffix: "+", label: "Companies onboard" },
  { to: 250, suffix: "K+", label: "Employees covered" },
  { to: 96, suffix: "%", label: "Annual renewal rate" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our clients"
          title={
            <>
              Trusted by people teams at{" "}
              <span className="text-gradient">fast-growing companies</span>.
            </>
          }
          description="From 50-person startups to enterprises, teams choose CheckMed to keep their people healthy — and their healthcare spend predictable."
        />

        {/* logo wall */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center gap-2 bg-white px-4 py-8 transition-colors hover:bg-brand-50/60"
              >
                <span className="h-3 w-3 shrink-0 rounded-sm bg-gradient-to-br from-brand-500 to-brand-700" />
                <span className="font-display text-base font-bold text-ink-400">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* adoption highlights */}
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <div className="rounded-3xl border border-ink-100 bg-brand-50/50 p-7 text-center">
                <p className="font-display text-4xl font-extrabold text-brand-700">
                  <Counter to={h.to} suffix={h.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-ink-600">{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-400">
          Client names shown are illustrative placeholders.
        </p>
      </div>
    </section>
  );
}
