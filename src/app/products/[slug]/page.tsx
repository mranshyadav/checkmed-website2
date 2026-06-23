import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage, { Highlights } from "@/components/DetailPage";
import Reveal from "@/components/Reveal";
import { getItem, allSlugs } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return allSlugs("products");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem("products", slug);
  if (!item) return {};
  return { title: item.title, description: item.intro ?? item.desc };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem("products", slug);
  if (!item) notFound();

  return (
    <DetailPage
      sectionKey="products"
      slug={slug}
      cta={{
        title: "See the platform in action",
        body: "A 30-minute walkthrough tailored to your role.",
      }}
    >
      {item.stats ? (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50/50 p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl" />
                {item.platforms ? (
                  <div className="relative mb-6 flex flex-wrap gap-2">
                    {item.platforms.map((pl) => (
                      <span
                        key={pl}
                        className="rounded-full border border-white/70 bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-brand-700 backdrop-blur"
                      >
                        {pl}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="relative grid gap-3 sm:grid-cols-3">
                  {item.stats.map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/70 bg-white/80 p-5 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{s.k}</p>
                      <p className="mt-1 font-display text-lg font-bold text-brand-700">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {item.points ? <Highlights title="Key capabilities" points={item.points} /> : null}
    </DetailPage>
  );
}
