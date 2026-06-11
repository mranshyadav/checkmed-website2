import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import {
  Newspaper,
  BookOpen,
  FileText,
  ChevronDown,
  ArrowRight,
  Clock,
} from "@/lib/icons";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Blogs, case studies, whitepapers and FAQs from CheckMed — insights for building a healthier, lower-risk workforce.",
};

const blogs = [
  {
    tag: "Benefits 101",
    title: "OPD vs IPD: where employee health budgets actually go",
    excerpt: "Why the cheapest claim is the one that never happens — and how OPD-first benefits get you there.",
    mins: 6,
  },
  {
    tag: "HR Playbook",
    title: "Rolling out health benefits across multi-city teams",
    excerpt: "A practical sequence for launching care benefits in every office without drowning in vendors.",
    mins: 8,
  },
  {
    tag: "Prevention",
    title: "The five screenings that catch 80% of silent risk",
    excerpt: "What to include in your annual check-up camp if you only optimise for avoided hospitalisations.",
    mins: 5,
  },
];

const caseStudies = [
  {
    sector: "Fintech · 1,200 employees",
    metric: "-30%",
    metricLabel: "avoidable IPD claims in year one",
    body: "Screening-led risk profiling plus 24/7 teleconsults moved care to day one of symptoms — admissions and premiums followed.",
  },
  {
    sector: "Manufacturing · 800 employees",
    metric: "3.4×",
    metricLabel: "benefits engagement vs old OPD wallet",
    body: "On-site camps and family coverage turned a forgotten policy into the most-used benefit in the company.",
  },
];

const whitepapers = [
  {
    title: "The Prevention Dividend: quantifying avoided IPD in group health",
    pages: 24,
  },
  {
    title: "Designing OPD-first benefits for Indian workforces",
    pages: 18,
  },
];

const faqs = [
  {
    q: "What exactly does CheckMed do?",
    a: "CheckMed is a corporate health platform that keeps employees healthy and out of the in-patient department. We combine OPD consults, 24/7 teleconsultation, lab tests, pharmacy delivery and preventive wellness into one benefit your team actually uses.",
  },
  {
    q: "How is this different from group health insurance?",
    a: "Insurance pays after someone is hospitalised. CheckMed works before that point — catching risk early and resolving issues at the OPD level, which reduces the claims your insurance has to pay. The two work best together.",
  },
  {
    q: "How long does roll-out take?",
    a: "Most teams are live within days. We handle onboarding, communication kits and the employee app — HR only shares the employee list and approves the benefit design.",
  },
  {
    q: "Can employees cover their families?",
    a: "Yes. Family floater options extend teleconsults, labs and pharmacy benefits to dependants, with separate profiles in the app.",
  },
  {
    q: "Is our health data secure?",
    a: "Yes. Access is OTP-based and role-bound, records are encrypted, and reports are never shared over unsecured channels. Employers see aggregate trends — never an individual's medical details.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Insights for a <span className="text-gradient">healthier workforce</span>.
          </>
        }
        description="Guides, evidence and answers — everything you need to make the case for prevention-first employee health."
      />

      {/* Blogs */}
      <section id="blogs" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Blogs"
            title="Latest from the CheckMed team"
            description="Short, practical reads on employee health, benefits design and prevention."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {blogs.map((b, i) => (
              <Reveal key={b.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                    <Newspaper className="h-3.5 w-3.5" /> {b.tag}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{b.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-ink-400">
                      <Clock className="h-3.5 w-3.5" /> {b.mins} min read
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="bg-ink-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Case Studies"
            title="Real teams, measurable outcomes"
            description="What happens when prevention becomes a system instead of a poster in the pantry."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.sector} delay={(((i % 2) + 1) as 1 | 2)}>
                <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 sm:p-9">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-400">
                    {c.sector}
                  </span>
                  <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-brand-700">
                    {c.metric}
                  </p>
                  <p className="mt-1 font-semibold text-ink-800">{c.metricLabel}</p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink-100 pt-5 text-sm font-semibold text-brand-700">
                    <BookOpen className="h-4 w-4" /> Read the full case study
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-400">
            Case study figures are illustrative placeholders pending published customer data.
          </p>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="whitepapers" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Whitepapers"
            title="Deeper research, ready to share"
            description="Long-form evidence for benefits leaders, CFOs and underwriters."
          />
          <div className="mt-10 space-y-4">
            {whitepapers.map((w, i) => (
              <Reveal key={w.title} delay={(((i % 2) + 1) as 1 | 2)}>
                <div className="group flex items-center gap-5 rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 sm:p-7">
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <FileText className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink-900">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-400">PDF · {w.pages} pages</p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 sm:inline-flex">
                    Download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-ink-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Quick answers on how CheckMed works for employers, employees and insurers."
          />
          <div className="mt-10 space-y-3.5">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <details className="group rounded-2xl border border-ink-100 bg-white p-6 transition-colors open:border-brand-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-180">
                      <ChevronDown className="h-4.5 w-4.5" />
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Still have questions?"
        body="Our team is happy to walk through anything — from benefit design to data security."
      />
    </main>
  );
}
