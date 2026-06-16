import type { ComponentType, SVGProps } from "react";
import type { SectionKey } from "@/lib/content";
import {
  ChartDown,
  ShieldHeart,
  Activity,
  Video,
  Lock,
  HeartPulse,
  LayoutGrid,
  Spark,
} from "@/lib/icons";

type Ico = ComponentType<SVGProps<SVGSVGElement>>;

export type SectionContent = {
  whyHeading: string;
  whyBody: string;
  benefits: { icon: Ico; title: string; desc: string }[];
  metrics: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  proof: { quote: string; name: string; role: string; initials: string };
};

export const sectionContent: Partial<Record<SectionKey, SectionContent>> = {
  solutions: {
    whyHeading: "Built for measurable outcomes",
    whyBody:
      "Prevention isn't a slogan — it's a system. CheckMed gives businesses, insurers and providers the tools and data to act earlier and spend smarter, with every intervention tracked to an outcome.",
    benefits: [
      { icon: ChartDown, title: "Fewer avoidable claims", desc: "Resolve issues at the OPD level and keep people out of the ward — where most admissions are preventable." },
      { icon: ShieldHeart, title: "Lower, predictable cost", desc: "Engagement-led prevention bends the loss ratio and stabilises premiums year over year." },
      { icon: Activity, title: "Real visibility", desc: "Live dashboards turn employee health from a black box into a managed, reportable program." },
    ],
    metrics: [
      { value: "40%", label: "fewer avoidable IPD admissions" },
      { value: "₹84k", label: "saved per admission avoided" },
      { value: "96%", label: "annual renewal rate" },
      { value: "250K+", label: "lives covered" },
    ],
    faqs: [
      { q: "How quickly do we see results?", a: "Most teams see engagement and early-care metrics within the first quarter; claims impact compounds across the policy year as prevention takes hold." },
      { q: "Is our employee health data safe?", a: "Yes. Data is encrypted and role-bound — employers see only aggregate, anonymised trends, never an individual's medical details." },
      { q: "Do you work alongside our existing insurer?", a: "Absolutely. CheckMed complements group insurance by reducing the claims that ever reach it. The two work best together." },
      { q: "Can it scale across locations?", a: "Yes — from a single site to multi-city, multi-country workforces, with centralised reporting and local care networks." },
    ],
    proof: {
      quote: "We finally have a prevention program we can measure. Avoidable admissions are down, and renewal was the easiest conversation we've ever had with finance.",
      name: "Priya Nair",
      role: "Head of People, 1,200-person fintech",
      initials: "PN",
    },
  },
  services: {
    whyHeading: "One coordinated layer of care",
    whyBody:
      "From the first symptom to full recovery, every CheckMed service runs on the same network and the same record — so care is fast, cashless and connected, for employees and their families alike.",
    benefits: [
      { icon: Video, title: "Care in minutes", desc: "A doctor on call, tests at home, medicines at the door — help arrives before a small problem becomes a big one." },
      { icon: Lock, title: "Cashless & connected", desc: "One secure record and e-prescription follow each person across every service and provider." },
      { icon: HeartPulse, title: "Prevention-first", desc: "Screenings, camps and disease-management keep risk low instead of waiting for the hospital bill." },
    ],
    metrics: [
      { value: "~4 min", label: "to reach a doctor" },
      { value: "8,000+", label: "doctors on-network" },
      { value: "1,200+", label: "diagnostic labs" },
      { value: "24/7", label: "care access" },
    ],
    faqs: [
      { q: "Are the services cashless?", a: "In-network OPD, teleconsults, lab tests and pharmacy are cashless for covered members." },
      { q: "Do services cover families?", a: "Yes — family floater options extend consults, labs and pharmacy to dependants, with separate profiles." },
      { q: "How fast can someone see a doctor?", a: "Teleconsults connect in about four minutes, 24/7; in-person and home visits are booked to suit the member." },
      { q: "Which cities are covered?", a: "Our partner network spans major metros and tier-2 cities and keeps expanding — share your locations and we'll confirm coverage." },
    ],
    proof: {
      quote: "My daughter spiked a fever at 11pm. A doctor on video in under five minutes and medicines by morning — no ER, no panic. That's the whole point.",
      name: "Aisha Khan",
      role: "Employee, manufacturing",
      initials: "AK",
    },
  },
  products: {
    whyHeading: "An enterprise-grade platform",
    whyBody:
      "Purpose-built portals for every stakeholder, running on one secure, auditable platform that deploys in days — not the multi-month IT project enterprise software usually demands.",
    benefits: [
      { icon: Lock, title: "Secure by design", desc: "OTP login, role-based access, encryption and full audit trails across every portal." },
      { icon: LayoutGrid, title: "One connected system", desc: "Employer, employee, provider and insurer workflows share the same data spine." },
      { icon: Spark, title: "Live in days", desc: "Turn-key onboarding and configuration handled for you — no long implementation." },
    ],
    metrics: [
      { value: "Days", label: "to go live" },
      { value: "99.9%", label: "uptime target" },
      { value: "4", label: "connected portals" },
      { value: "Web · iOS · Android", label: "everywhere your people are" },
    ],
    faqs: [
      { q: "How long does deployment take?", a: "Most organisations are live within days. We handle onboarding, the comms kit and the employee app rollout." },
      { q: "Is the platform secure and compliant?", a: "Yes — OTP-based access, encryption, role-based controls and audit logs run throughout every portal." },
      { q: "Do you offer mobile apps?", a: "Yes. The User Dashboard ships as native iOS and Android apps, alongside the web portal." },
      { q: "Can it integrate with our systems?", a: "The Control Panel and Insurer Analytics expose APIs for HRIS, payroll and underwriting integrations." },
    ],
    proof: {
      quote: "Rollout across five offices took a week, and the dashboards finally let me show leadership exactly what our health spend buys.",
      name: "Daniel Rocha",
      role: "HR Operations, logistics (800+ staff)",
      initials: "DR",
    },
  },
};
