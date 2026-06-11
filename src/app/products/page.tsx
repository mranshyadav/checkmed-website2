import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import {
  LayoutGrid,
  AppWindow,
  Hospital,
  ChartDown,
  Check,
} from "@/lib/icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The CheckMed platform — employer dashboard, employee app, provider portal and insurer analytics, all connected.",
};

type Product = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kicker: string;
  title: string;
  desc: string;
  features: string[];
  stats: { k: string; v: string }[];
};

const products: Product[] = [
  {
    id: "employer-dashboard",
    icon: LayoutGrid,
    kicker: "For HR & Finance",
    title: "Employer Dashboard",
    desc: "Roll out benefits, track utilisation and prove ROI — without spreadsheets or vendor chasing.",
    features: [
      "One-click employee onboarding & offboarding",
      "Live utilisation, engagement & wellbeing views",
      "Budget controls and benefit configuration",
      "Exportable reports for leadership & insurers",
    ],
    stats: [
      { k: "Roll-out", v: "Days, not months" },
      { k: "Visibility", v: "Real-time" },
      { k: "Locations", v: "Unlimited" },
    ],
  },
  {
    id: "checkmed-app",
    icon: AppWindow,
    kicker: "For Employees & Families",
    title: "CheckMed App",
    desc: "Every benefit in one place — a doctor in minutes, tests at home, medicines at the door and records that follow you.",
    features: [
      "OTP-based secure login",
      "Book teleconsults, OPD visits, labs & pharmacy",
      "Family profiles for dependants",
      "Encrypted health records & prescriptions",
    ],
    stats: [
      { k: "Doctor access", v: "24/7" },
      { k: "To connect", v: "~4 min" },
      { k: "Out-of-pocket", v: "₹0 in-network" },
    ],
  },
  {
    id: "provider-portal",
    icon: Hospital,
    kicker: "For Hospitals, Clinics & Labs",
    title: "Provider Portal",
    desc: "A steady stream of coordinated patients with the admin handled — scheduling, records and settlements in one flow.",
    features: [
      "Unified appointment calendar",
      "Digital case notes & shared records",
      "Automated claims & settlement tracking",
      "Network performance insights",
    ],
    stats: [
      { k: "Settlements", v: "On time" },
      { k: "Paperwork", v: "Near zero" },
      { k: "Patient flow", v: "Qualified" },
    ],
  },
  {
    id: "insurer-analytics",
    icon: ChartDown,
    kicker: "For Insurers & TPAs",
    title: "Insurer Analytics",
    desc: "See risk forming before it becomes a claim — population health signals straight from screenings and care activity.",
    features: [
      "Cohort risk profiles & trends",
      "Avoidable-claim flags and savings tracking",
      "Engagement-based renewal insights",
      "API access for underwriting systems",
    ],
    stats: [
      { k: "IPD claims", v: "-40% target" },
      { k: "Signals", v: "Screening-led" },
      { k: "Delivery", v: "Dashboard + API" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title={
          <>
            One platform, <span className="text-gradient">four connected products</span>.
          </>
        }
        description="Employers, employees, providers and insurers each get a purpose-built product — all running on the same care network and data spine."
      />

      {products.map((p, i) => {
        const Icon = p.icon;
        const flip = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            className={i % 2 === 0 ? "py-20 lg:py-24" : "bg-ink-50/40 py-20 lg:py-24"}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
              {/* Copy */}
              <Reveal className={flip ? "lg:order-2" : ""}>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {p.kicker}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-600">{p.desc}</p>
                  <ul className="mt-7 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Visual panel */}
              <Reveal delay={2} className={flip ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50/50 p-8 sm:p-10">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <Icon className="h-8 w-8" />
                  </span>
                  <div className="relative mt-7 space-y-3">
                    {p.stats.map((s) => (
                      <div
                        key={s.k}
                        className="flex items-center justify-between rounded-xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur"
                      >
                        <span className="text-sm font-medium text-ink-500">{s.k}</span>
                        <span className="font-display text-sm font-bold text-brand-700">{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTABand
        title="See the platform in action"
        body="A 30-minute walkthrough of the dashboard, app and analytics — tailored to your role."
      />
    </main>
  );
}
