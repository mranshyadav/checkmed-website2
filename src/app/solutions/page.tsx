import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Partners from "@/components/Partners";
import Outcomes from "@/components/Outcomes";
import CTABand from "@/components/CTABand";
import {
  Building,
  Umbrella,
  Hospital,
  HeartPulse,
  Activity,
  ChartDown,
  ShieldHeart,
  Stethoscope,
  Users,
  Check,
} from "@/lib/icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CheckMed solutions for businesses, insurers and healthcare partners — keeping employees healthy and out of the in-patient ward.",
};

const groups = [
  {
    id: "businesses",
    icon: Building,
    eyebrow: "For Businesses",
    title: "Healthier teams, predictable healthcare spend",
    description:
      "Give every employee an always-on layer of care — and give HR and finance the visibility to keep costs under control.",
    blocks: [
      {
        id: "employee-health-benefits",
        icon: HeartPulse,
        title: "Employee Health Benefits",
        desc: "A complete OPD-first benefits stack your team will actually use.",
        points: [
          "Cashless OPD, teleconsult, labs & pharmacy",
          "Family floater options for dependants",
          "Live utilisation & wellbeing dashboards",
          "Turn-key roll-out across every location",
        ],
      },
      {
        id: "workforce-wellness",
        icon: Activity,
        title: "Workforce Wellness",
        desc: "Proactive programs that catch risk long before it becomes a claim.",
        points: [
          "Annual health check-ups & screenings",
          "On-site camps and wellness days",
          "Chronic-care & lifestyle programs",
          "Personalised nudges that keep people engaged",
        ],
      },
    ],
  },
  {
    id: "insurance",
    icon: Umbrella,
    eyebrow: "For Insurance",
    title: "Bend the loss ratio in your favour",
    description:
      "Prevention is the most underused lever in group health. CheckMed turns it into a measurable, repeatable system.",
    blocks: [
      {
        id: "claims-reduction",
        icon: ChartDown,
        title: "Claims Reduction",
        desc: "Resolve issues at the OPD level so they never reach the ward.",
        points: [
          "Early symptom routing to the right care",
          "Fewer avoidable IPD admissions",
          "Lower claim severity and frequency",
          "Outcome tracking on every intervention",
        ],
      },
      {
        id: "risk-underwriting",
        icon: ShieldHeart,
        title: "Risk & Underwriting",
        desc: "Price risk on real health signals, not just last year's claims.",
        points: [
          "Population risk profiles from screenings",
          "Cohort-level health trends over time",
          "Engagement data that predicts utilisation",
          "Cleaner renewals conversations",
        ],
      },
    ],
  },
  {
    id: "healthcare-partners",
    icon: Hospital,
    eyebrow: "For Healthcare Partners",
    title: "More patients, less paperwork",
    description:
      "Hospitals, clinics, labs and pharmacies plug into a steady stream of coordinated, digitally-managed demand.",
    blocks: [
      {
        id: "provider-network",
        icon: Stethoscope,
        title: "Provider Network",
        desc: "Join a curated network trusted by employers and insurers.",
        points: [
          "Steady, qualified patient flow",
          "Digital appointment workflow",
          "Reliable, on-time settlements",
          "Zero acquisition cost for new patients",
        ],
      },
      {
        id: "care-coordination",
        icon: Users,
        title: "Care Coordination",
        desc: "Referrals, records and follow-ups move with the patient.",
        points: [
          "Integrated referrals across the network",
          "Shared, secure health records",
          "Automated follow-up scheduling",
          "Closed-loop outcome reporting",
        ],
      },
    ],
  },
];

const pageSections = [
  { id: "businesses", label: "Businesses" },
  { id: "insurance", label: "Insurance" },
  { id: "healthcare-partners", label: "Healthcare Partners" },
  { id: "partners", label: "Network" },
  { id: "outcomes", label: "Outcomes" },
];

export default function SolutionsPage() {
  return (
    <main className="[&_[id]]:scroll-mt-[8.5rem]">
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One platform, <span className="text-gradient">a win for everyone</span> in the chain.
          </>
        }
        description="CheckMed aligns businesses, insurers and healthcare partners around a single goal — keeping people well and out of the hospital."
      />

      <PageNav sections={pageSections} />

      {groups.map((g, gi) => {
        return (
          <section
            key={g.id}
            id={g.id}
            className={gi % 2 === 0 ? "py-20 lg:py-24" : "bg-ink-50/40 py-20 lg:py-24"}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeading
                align="left"
                eyebrow={g.eyebrow}
                title={g.title}
                description={g.description}
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {g.blocks.map((b, bi) => {
                  const Icon = b.icon;
                  return (
                    <Reveal key={b.id} delay={(((bi % 2) + 1) as 1 | 2)}>
                      <div
                        id={b.id}
                        className="group h-full rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-200 sm:p-9"
                      >
                        <div className="flex items-center gap-4">
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                            <Icon className="h-6 w-6" />
                          </span>
                          <div>
                            <h3 className="font-display text-xl font-bold text-ink-900">
                              {b.title}
                            </h3>
                            <p className="mt-0.5 text-sm text-ink-500">{b.desc}</p>
                          </div>
                        </div>
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {b.points.map((p) => (
                            <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-600">
                              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                              </span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <Partners />
      <Outcomes />
      <CTABand
        title="Ready to put prevention to work?"
        body="Tell us which side of the ecosystem you're on and we'll tailor the walkthrough."
      />
    </main>
  );
}
