import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { Hospital, Flask, Stethoscope, Pill } from "@/lib/icons";

const stats = [
  { icon: Hospital, to: 500, suffix: "+", label: "Partner hospitals" },
  { icon: Flask, to: 1200, suffix: "+", label: "Diagnostic labs" },
  { icon: Stethoscope, to: 8000, suffix: "+", label: "Doctors on-network" },
  { icon: Pill, to: 3500, suffix: "+", label: "Pharmacies" },
];

const partners = [
  "CarePlus Hospitals",
  "PathLab Diagnostics",
  "MedixPharma",
  "AssureHealth",
  "VitalScan Labs",
  "ClinicNet",
  "HealQ",
  "Reliv Insurance",
];

function monogram(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Partners() {
  return (
    <section id="partners" className="bg-ink-50/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Care network"
          title={
            <>
              Backed by a nationwide network of{" "}
              <span className="text-gradient">care partners</span>.
            </>
          }
          description="Hospitals, labs, pharmacies and insurers — integrated into one platform so care is always close, cashless and coordinated."
        />

        {/* network scale */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-ink-100 bg-white p-7 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-3xl font-extrabold text-ink-900">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* partner wall */}
        <Reveal delay={2}>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-4">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center gap-2.5 bg-white px-4 py-7 transition-colors hover:bg-brand-50/60"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xs font-bold text-white">
                  {monogram(name)}
                </span>
                <span className="font-display text-sm font-bold text-ink-400">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-ink-400">
          Partner names shown are illustrative placeholders.
        </p>
      </div>
    </section>
  );
}
