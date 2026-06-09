import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Building, Umbrella, Users, Hospital, Check } from "@/lib/icons";

const audiences = [
  {
    icon: Building,
    label: "For Employers & HR",
    title: "A healthier team, a predictable spend",
    points: [
      "Fewer sick days and lower absenteeism",
      "Control group-cover premiums over time",
      "Live dashboards on utilisation & wellbeing",
      "Turn-key roll-out across every location",
    ],
  },
  {
    icon: Umbrella,
    label: "For Insurers & TPAs",
    title: "Bend the loss ratio in your favour",
    points: [
      "Prevention that cuts avoidable IPD claims",
      "Early-risk signals from screening data",
      "Higher member engagement and retention",
      "Smoother, faster benefit coordination",
    ],
  },
  {
    icon: Users,
    label: "For Employees & families",
    title: "Care the moment you need it",
    points: [
      "A doctor in minutes — not days",
      "Cashless OPD, labs and pharmacy",
      "Cover that extends to your family",
      "Private, secure health records",
    ],
  },
  {
    icon: Hospital,
    label: "For Care providers",
    title: "More patients, less paperwork",
    points: [
      "A steady, qualified patient flow",
      "Simple digital appointment workflow",
      "Reliable, on-time settlements",
      "Be part of a trusted care network",
    ],
  },
];

export default function Audiences() {
  return (
    <section id="solutions" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              One platform, <span className="text-gradient">a win for everyone</span> in the chain.
            </>
          }
          description="CheckMed aligns employees, employers, insurers and providers around a single goal — keeping people well and out of the hospital."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} delay={(((i % 2) + 1) as 1 | 2)}>
                <div className="group h-full rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/5 sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                        {a.label}
                      </span>
                      <h3 className="mt-0.5 font-display text-xl font-bold text-ink-900">
                        {a.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {a.points.map((p) => (
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
}
