import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import Reveal from "@/components/Reveal";
import ContactCTA from "@/components/ContactCTA";
import { getItem, allSlugs } from "@/lib/content";
import { companyStats, companyValues, leadership, roles, press } from "@/lib/pageData";
import { Users, Briefcase, Newspaper, MapPin, ArrowRight } from "@/lib/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return allSlugs("company");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem("company", slug);
  if (!item) return {};
  return { title: item.title, description: item.intro ?? item.desc };
}

function About() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-[15px] leading-relaxed text-ink-600">
            We started in 2020 in Chandigarh with a small care network and a big conviction: if
            employees could see a doctor the moment something felt wrong, most hospitalisations would
            never happen. Today CheckMed connects corporates, insurers, hospitals, labs and pharmacies
            into one platform — so the first symptom meets the right care in minutes, not weeks.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {companyStats.map((s) => (
              <div key={s.k} className="rounded-2xl border border-ink-100 bg-white p-5">
                <p className="font-display text-3xl font-extrabold text-brand-700">{s.v}</p>
                <p className="mt-1 text-sm text-ink-500">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {companyValues.map((v, i) => {
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
    </section>
  );
}

function Leadership() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}

function Careers() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="space-y-4">
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
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{r.type}</span>
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
  );
}

function Media() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
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
          <a href="mailto:press@checkmed.in" className="font-semibold text-brand-700">press@checkmed.in</a>
        </p>
      </div>
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem("company", slug);
  if (!item) notFound();

  const isContact = slug === "contact";

  return (
    <DetailPage sectionKey="company" slug={slug} hideCTA={isContact}>
      {slug === "about" ? <About /> : null}
      {slug === "leadership" ? <Leadership /> : null}
      {slug === "careers" ? <Careers /> : null}
      {slug === "media" ? <Media /> : null}
      {isContact ? <ContactCTA /> : null}
    </DetailPage>
  );
}
