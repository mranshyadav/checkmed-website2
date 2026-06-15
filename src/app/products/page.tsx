import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { AppWindow, Hospital, LayoutGrid, Check } from "@/lib/icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The CheckMed platform — the User Dashboard (web + iOS & Android apps), the Vendor Portal for care partners, and the Control Panel that powers CheckMed operations.",
};

type Product = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kicker: string;
  title: string;
  desc: string;
  platforms?: string[];
  features: string[];
  stats: { k: string; v: string }[];
};

const products: Product[] = [
  {
    id: "user-dashboard",
    icon: AppWindow,
    kicker: "For employees & individuals",
    title: "User Dashboard",
    desc: "One portal for every end user — corporate employees and retail members alike — to reach care in a tap. Available on the web and as native iOS and Android apps.",
    platforms: ["Web", "iOS", "Android"],
    features: [
      "Single sign-in for corporate & retail users",
      "Book teleconsults, OPD visits, labs & pharmacy",
      "Family profiles for dependants",
      "Encrypted health records & prescriptions",
    ],
    stats: [
      { k: "Platforms", v: "Web · iOS · Android" },
      { k: "Users", v: "Corporate & retail" },
      { k: "Access", v: "OTP-secured" },
    ],
  },
  {
    id: "vendor-portal",
    icon: Hospital,
    kicker: "For service partners",
    title: "Vendor Portal",
    desc: "The workspace for our partner network — hospitals, clinics, labs and pharmacies — to receive patients, manage their services and get paid, all in one place.",
    features: [
      "Receive a steady, qualified patient flow",
      "Manage services, availability & bookings",
      "Digital case notes & shared records",
      "Track claims and on-time settlements",
    ],
    stats: [
      { k: "Partners", v: "Hospitals · Labs · Pharmacies" },
      { k: "Settlements", v: "On time" },
      { k: "Workflow", v: "Fully digital" },
    ],
  },
  {
    id: "control-panel",
    icon: LayoutGrid,
    kicker: "For the CheckMed team",
    title: "Control Panel",
    desc: "CheckMed's internal command center — where our team configures services, oversees the partner network and keeps every solution running smoothly.",
    features: [
      "Configure services, plans & solutions",
      "Onboard corporates, vendors & members",
      "Monitor operations & SLAs in real time",
      "Role-based access with a full audit trail",
    ],
    stats: [
      { k: "Scope", v: "End-to-end ops" },
      { k: "Control", v: "Role-based" },
      { k: "Visibility", v: "Real-time" },
    ],
  },
];

const pageSections = [
  { id: "user-dashboard", label: "User Dashboard" },
  { id: "vendor-portal", label: "Vendor Portal" },
  { id: "control-panel", label: "Control Panel" },
];

export default function ProductsPage() {
  return (
    <main className="[&_[id]]:scroll-mt-[8.5rem]">
      <PageHero
        eyebrow="Products"
        title={
          <>
            One platform, <span className="text-gradient">three connected products</span>.
          </>
        }
        description="Employees, partners and the CheckMed team each get a purpose-built portal — all running on the same care network and data spine."
      />

      <PageNav sections={pageSections} />

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

                  {p.platforms ? (
                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {p.platforms.map((pl) => (
                        <span
                          key={pl}
                          className="rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur"
                        >
                          {pl}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className={`relative space-y-3 ${p.platforms ? "mt-4" : "mt-7"}`}>
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
        body="A 30-minute walkthrough of the dashboard, vendor portal and control panel — tailored to your role."
      />
    </main>
  );
}
