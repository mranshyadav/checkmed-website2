import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage, { Highlights } from "@/components/DetailPage";
import Reveal from "@/components/Reveal";
import { getItem, getSection, allSlugs } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return allSlugs("services");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem("services", slug);
  if (!item) return {};
  return { title: item.title, description: item.intro ?? item.desc };
}

const modesTitle: Record<string, string> = {
  consultation: "Three ways to consult",
  "lab-tests": "Two ways to get tested",
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getSection("services").items.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <DetailPage
      sectionKey="services"
      slug={slug}
      cta={{
        title: "Want this for your team?",
        body: "We'll tailor a benefits plan to your headcount, locations and budget.",
      }}
    >
      {/* Modes */}
      {item.modes ? (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              {modesTitle[slug] ?? "Your options"}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.modes.map((m, i) => {
                const Icon = m.icon;
                return (
                  <Reveal key={m.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                    <div className="group h-full rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{m.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">{m.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Conditions */}
      {item.conditions ? (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              Conditions we help manage
            </h2>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {item.conditions.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* What's included */}
      {item.points ? (
        <Highlights
          title={slug === "disease-management" ? "What the program includes" : "What's included"}
          points={item.points}
        />
      ) : null}

      {/* How it works */}
      {item.steps ? (
        <section className="bg-ink-50/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
              How it works
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {item.steps.map((s, i) => (
                <Reveal key={s.title} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </DetailPage>
  );
}
