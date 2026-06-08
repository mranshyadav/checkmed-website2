import { Building, Umbrella, ShieldHeart, Hospital, Flask, Pill, Stethoscope, HeartPulse } from "@/lib/icons";

const partners = [
  { icon: Building, label: "Corporates & HR teams" },
  { icon: Umbrella, label: "Insurers" },
  { icon: ShieldHeart, label: "TPAs" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Flask, label: "Diagnostic labs" },
  { icon: Pill, label: "Pharmacies" },
  { icon: Stethoscope, label: "Doctors & clinics" },
  { icon: HeartPulse, label: "Wellness providers" },
];

export default function EcosystemStrip() {
  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-ink-100 bg-ink-50/40 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
          One platform connecting your entire health ecosystem
        </p>
      </div>

      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 pr-4">
          {loop.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={`${p.label}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-ink-100 bg-white px-5 py-2.5 shadow-sm"
              >
                <Icon className="h-5 w-5 text-brand-600" />
                <span className="whitespace-nowrap text-sm font-semibold text-ink-700">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
