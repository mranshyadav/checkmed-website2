import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import {
  Stethoscope,
  Calendar,
  Video,
  Brain,
  Flask,
  Pill,
  FileText,
  Check,
} from "@/lib/icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CheckMed services — corporate OPD benefits, health camps, 24/7 teleconsultation and mental wellness, plus retail care for individuals and families.",
};

type Service = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  points: string[];
};

const corporate: Service[] = [
  {
    id: "opd-benefits",
    icon: Stethoscope,
    title: "OPD Benefits",
    desc: "Cashless in-clinic consults across a curated doctor network.",
    points: ["Cashless at network clinics", "Specialist & GP coverage", "Real-time benefit tracking"],
  },
  {
    id: "health-camps",
    icon: Calendar,
    title: "Health Check-up Camps",
    desc: "On-site screenings and annual check-up drives, end to end.",
    points: ["Full-body & seasonal screenings", "On-site logistics handled", "Digital reports for every employee"],
  },
  {
    id: "teleconsultation",
    icon: Video,
    title: "Teleconsultation",
    desc: "A qualified doctor on video for your team, any hour of the day.",
    points: ["Avg. 4 minutes to connect", "e-Prescriptions included", "Unlimited follow-ups"],
  },
  {
    id: "mental-wellness",
    icon: Brain,
    title: "Mental Wellness (EAP)",
    desc: "Confidential counselling and support for stress, sleep and burnout.",
    points: ["1-on-1 sessions with counsellors", "100% confidential", "Manager sensitisation workshops"],
  },
];

const individual: Service[] = [
  {
    id: "doctor-consultations",
    icon: Video,
    title: "Doctor Consultations",
    desc: "Talk to a doctor in minutes — video, audio or chat.",
    points: ["24/7 general physicians", "Specialist appointments", "Digital prescriptions"],
  },
  {
    id: "lab-tests",
    icon: Flask,
    title: "Lab Tests at Home",
    desc: "Book tests and full-body packages with home collection.",
    points: ["Free home sample pickup", "NABL-grade partner labs", "Reports in the app"],
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "Pharmacy Delivery",
    desc: "Prescribed medicines delivered to your door.",
    points: ["Doorstep delivery", "Automatic refill reminders", "Genuine, verified medicines"],
  },
  {
    id: "health-records",
    icon: FileText,
    title: "Health Records",
    desc: "Every report, prescription and visit — in one secure place.",
    points: ["Encrypted health locker", "Share securely with doctors", "Family profiles supported"],
  },
];

function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.id} delay={(((i % 2) + 1) as 1 | 2)}>
            <div
              id={s.id}
              className="group h-full rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 sm:p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-600">
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
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every layer of care — <span className="text-gradient">corporate and retail</span>.
          </>
        }
        description="From company-wide OPD benefits to a midnight teleconsult for your family, CheckMed covers the full journey of staying well."
      />

      <section id="corporate" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Corporate Services"
            title="Benefits your whole team will actually use"
            description="Deployed in days, loved by employees, measurable for HR and finance."
          />
          <ServiceGrid items={corporate} />
        </div>
      </section>

      <section id="individual" className="bg-ink-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Individual Services"
            title="Care for you and your family, on demand"
            description="The same network and care quality, available retail — no corporate plan required."
          />
          <ServiceGrid items={individual} />
        </div>
      </section>

      <CTABand
        title="Want these services for your team?"
        body="We'll tailor a benefits plan to your headcount, locations and budget."
      />
    </main>
  );
}
