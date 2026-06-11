import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactCTA from "@/components/ContactCTA";
import {
  ShieldHeart,
  Spark,
  Users,
  Briefcase,
  Newspaper,
  MapPin,
  ArrowRight,
  Check,
} from "@/lib/icons";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About CheckMed — our mission to keep employees safe from IPD, the team behind it, open roles and press coverage.",
};

const stats = [
  { v: "2020", k: "Founded in Chandigarh" },
  { v: "200+", k: "Companies onboard" },
  { v: "250K+", k: "Lives covered" },
  { v: "96%", k: "Annual renewal rate" },
];

const values = [
  { icon: ShieldHeart, title: "Care-first, always", body: "Every product decision optimises for the person who is unwell — everything else follows." },
  { icon: Spark, title: "Prevention over cure", body: "The best hospitalisation is the one that never happens. We design for day zero." },
  { icon: Check, title: "Earn trust daily", body: "Health data is sacred. Security, privacy and honesty are non-negotiable." },
];

const leadership = [
  { initials: "AS", name: "Ansh Yadav", role: "Founder & CEO" },
  { initials: "RK", name: "Riya Kapoor", role: "Co-founder & COO" },
  { initials: "VM", name: "Dr. Vikram Mehta", role: "Chief Medical Officer" },
  { initials: "SN", name: "Sahil Nanda", role: "Head of Engineering" },
];

const roles = [
  { title: "Senior Full-stack Engineer", dept: "Engineering", loc: "Chandigarh / Remote", type: "Full-time" },
  { title: "Enterprise Sales Manager", dept: "Growth", loc: "Delhi NCR", type: "Full-time" },
  { title: "Care Operations Associate", dept: "Operations", loc: "Chandigarh", type: "Full-time" },
];

const press = [
  { outlet: "HealthTech Today", date: "May 2026", headline: "CheckMed is quietly rewriting the economics of group health in India" },
  { outlet: "Startup Chronicle", date: "Feb 2026", headline: "From Chandigarh to 200 companies: CheckMed's prevention-first playbook" },
  { outlet: "Benefits Weekly", date: "Nov 2025", headline: "Why insurers are betting on OPD-first platforms like CheckMed" },
];

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Company"
        title={
          <>
            We exist to keep people <span className="text-gradient">out of the hospital</span>.
          </>
        }
        description="CheckMed was founded on a simple observation: most hospitalisations are preventable — someone just has to catch them early."
      />

      {/* About */}
      <section id="about" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Us"
                title="Close to your home, close to your heart"
                description="We started in 2020 in Chandigarh with a small care network and a big conviction: if employees could see a doctor the moment something felt wrong, most hospitalisations would never happen."
              />
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600">
                Today CheckMed connects corporates, insurers, hospitals, labs and pharmacies into one
                platform — so the first symptom meets the right care in minutes, not weeks. The result
                is healthier teams, lower claims, and healthcare that finally works before the ward.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.k} className="rounded-2xl border border-ink-100 bg-white p-5">
                    <p className="font-display text-3xl font-extrabold text-brand-700">{s.v}</p>
                    <p className="mt-1 text-sm text-ink-500">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 lg:pt-20">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                    <div className="flex items-start gap-4 rounded-3xl border border-ink-100 bg-white p-6">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink-900">{v.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-500">{v.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-ink-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Leadership Team"
            title="The people behind CheckMed"
            description="Operators, clinicians and engineers who have lived the problem from every side."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-ink-100 bg-white p-8 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-bold text-white">
                    {p.initials}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                    <Users className="h-4 w-4 text-brand-600" /> {p.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-400">
            Profiles shown are illustrative placeholders — replace with the real leadership team.
          </p>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Careers"
            title="Build healthcare that works before the ward"
            description="We're a small team with an outsized mission — join us."
          />
          <div className="mt-10 space-y-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <a
                  href="mailto:careers@checkmed.in"
                  className="group flex flex-col gap-3 rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 sm:flex-row sm:items-center sm:gap-5 sm:p-7"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Briefcase className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-ink-900">{r.title}</h3>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
                      <span>{r.dept}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-brand-600" /> {r.loc}
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {r.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-500">
            Don&apos;t see your role? Write to{" "}
            <a href="mailto:careers@checkmed.in" className="font-semibold text-brand-700 hover:text-brand-800">
              careers@checkmed.in
            </a>
            .
          </p>
        </div>
      </section>

      {/* Media */}
      <section id="media" className="bg-ink-50/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="Media Coverage"
            title="CheckMed in the press"
            description="What journalists and analysts are saying about prevention-first employee health."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {press.map((m, i) => (
              <Reveal key={m.headline} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      <Newspaper className="h-3.5 w-3.5" /> {m.outlet}
                    </span>
                    <span className="text-xs text-ink-400">{m.date}</span>
                  </div>
                  <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-ink-900">
                    &ldquo;{m.headline}&rdquo;
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1 border-t border-ink-100 pt-4 text-sm font-semibold text-brand-700">
                    Read coverage <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-400">
            Press mentions shown are illustrative placeholders. For media enquiries:{" "}
            <a href="mailto:press@checkmed.in" className="font-semibold text-brand-700">
              press@checkmed.in
            </a>
          </p>
        </div>
      </section>

      {/* Contact (renders section#contact) */}
      <ContactCTA />
    </main>
  );
}
