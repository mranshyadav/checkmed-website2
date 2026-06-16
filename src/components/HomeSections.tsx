import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { getSection, itemHref } from "@/lib/content";
import { ArrowRight, Lock, ShieldHeart, Users, FileText } from "@/lib/icons";

export function ServicesShowcase() {
  const services = getSection("services");
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Every layer of care, <span className="text-gradient">in one place</span>.
            </>
          }
          description="Consult, test, treat and manage — for your whole workforce and their families. Cashless, coordinated and always on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <Link
                  href={itemHref("services", s.slug)}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200"
                >
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductsShowcase() {
  const products = getSection("products");
  return (
    <section className="bg-ink-50/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One platform, <span className="text-gradient">four connected portals</span>.
            </>
          }
          description="Employees, employers, partners and the CheckMed team each get a purpose-built portal — all on the same secure care network."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.items.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <Link
                  href={itemHref("products", p.slug)}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const trust = [
  { icon: Lock, title: "Encrypted end to end", body: "Health records are encrypted in transit and at rest, and never shared over unsecured channels." },
  { icon: ShieldHeart, title: "OTP-secured access", body: "Every login is OTP-verified, with role-based permissions across all four portals." },
  { icon: Users, title: "Privacy by default", body: "Employers see aggregate, anonymised trends only — never an individual's medical details." },
  { icon: FileText, title: "Audit-ready & compliant", body: "Full audit trails and OHC-ready records help you meet statutory and policy obligations." },
];

export function SecuritySection() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Security & trust"
          title={
            <>
              Health data, <span className="text-gradient">treated as sacred</span>.
            </>
          }
          description="Enterprise-grade security and privacy are built into every layer of the platform — because trust is the only foundation healthcare can stand on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="h-full rounded-3xl border border-ink-100 bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-ink-900">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{t.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
