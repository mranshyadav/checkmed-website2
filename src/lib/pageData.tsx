import type { ComponentType, SVGProps } from "react";
import { ShieldHeart, Spark, Check } from "@/lib/icons";

type Ico = ComponentType<SVGProps<SVGSVGElement>>;

/* ----------------------------- Resources ----------------------------- */

export const blogPosts = [
  { tag: "Benefits 101", title: "OPD vs IPD: where employee health budgets actually go", excerpt: "Why the cheapest claim is the one that never happens — and how OPD-first benefits get you there.", mins: 6 },
  { tag: "HR Playbook", title: "Rolling out health benefits across multi-city teams", excerpt: "A practical sequence for launching care benefits in every office without drowning in vendors.", mins: 8 },
  { tag: "Prevention", title: "The five screenings that catch 80% of silent risk", excerpt: "What to include in your annual check-up camp if you only optimise for avoided hospitalisations.", mins: 5 },
];

export const caseStudies = [
  { sector: "Fintech · 1,200 employees", metric: "-30%", metricLabel: "avoidable IPD claims in year one", body: "Screening-led risk profiling plus 24/7 teleconsults moved care to day one of symptoms — admissions and premiums followed." },
  { sector: "Manufacturing · 800 employees", metric: "3.4×", metricLabel: "benefits engagement vs old OPD wallet", body: "On-site camps and family coverage turned a forgotten policy into the most-used benefit in the company." },
];

export const whitepapers = [
  { title: "The Prevention Dividend: quantifying avoided IPD in group health", pages: 24 },
  { title: "Designing OPD-first benefits for Indian workforces", pages: 18 },
];

export const faqs = [
  { q: "What exactly does CheckMed do?", a: "CheckMed is a corporate health platform that keeps employees healthy and out of the in-patient department. We combine OPD consults, 24/7 teleconsultation, lab tests, pharmacy delivery and preventive wellness into one benefit your team actually uses." },
  { q: "How is this different from group health insurance?", a: "Insurance pays after someone is hospitalised. CheckMed works before that point — catching risk early and resolving issues at the OPD level, which reduces the claims your insurance has to pay. The two work best together." },
  { q: "How long does roll-out take?", a: "Most teams are live within days. We handle onboarding, communication kits and the employee app — HR only shares the employee list and approves the benefit design." },
  { q: "Can employees cover their families?", a: "Yes. Family floater options extend teleconsults, labs and pharmacy benefits to dependants, with separate profiles in the app." },
  { q: "Is our health data secure?", a: "Yes. Access is OTP-based and role-bound, records are encrypted, and reports are never shared over unsecured channels. Employers see aggregate trends — never an individual's medical details." },
];

/* ----------------------------- Company ----------------------------- */

export const companyStats = [
  { v: "2020", k: "Founded in Chandigarh" },
  { v: "200+", k: "Companies onboard" },
  { v: "250K+", k: "Lives covered" },
  { v: "96%", k: "Annual renewal rate" },
];

export const companyValues: { icon: Ico; title: string; body: string }[] = [
  { icon: ShieldHeart, title: "Care-first, always", body: "Every product decision optimises for the person who is unwell — everything else follows." },
  { icon: Spark, title: "Prevention over cure", body: "The best hospitalisation is the one that never happens. We design for day zero." },
  { icon: Check, title: "Earn trust daily", body: "Health data is sacred. Security, privacy and honesty are non-negotiable." },
];

export const leadership = [
  { initials: "AS", name: "Ansh Yadav", role: "Founder & CEO" },
  { initials: "RK", name: "Riya Kapoor", role: "Co-founder & COO" },
  { initials: "VM", name: "Dr. Vikram Mehta", role: "Chief Medical Officer" },
  { initials: "SN", name: "Sahil Nanda", role: "Head of Engineering" },
];

export const roles = [
  { title: "Senior Full-stack Engineer", dept: "Engineering", loc: "Chandigarh / Remote", type: "Full-time" },
  { title: "Enterprise Sales Manager", dept: "Growth", loc: "Delhi NCR", type: "Full-time" },
  { title: "Care Operations Associate", dept: "Operations", loc: "Chandigarh", type: "Full-time" },
];

export const press = [
  { outlet: "HealthTech Today", date: "May 2026", headline: "CheckMed is quietly rewriting the economics of group health in India" },
  { outlet: "Startup Chronicle", date: "Feb 2026", headline: "From Chandigarh to 200 companies: CheckMed's prevention-first playbook" },
  { outlet: "Benefits Weekly", date: "Nov 2025", headline: "Why insurers are betting on OPD-first platforms like CheckMed" },
];
