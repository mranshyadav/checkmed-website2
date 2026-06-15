import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import Reveal from "@/components/Reveal";
import { getItem, allSlugs } from "@/lib/content";
import { blogPosts, caseStudies, whitepapers, faqs } from "@/lib/pageData";
import { Newspaper, BookOpen, FileText, ChevronDown, ArrowRight, Clock } from "@/lib/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return allSlugs("resources");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem("resources", slug);
  if (!item) return {};
  return { title: item.title, description: item.intro ?? item.desc };
}

function Body({ slug }: { slug: string }) {
  if (slug === "blogs") {
    return (
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <Newspaper className="h-3.5 w-3.5" /> {b.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-900">{b.title}</h3>
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
      </section>
    );
  }

  if (slug === "case-studies") {
    return (
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.sector} delay={(((i % 2) + 1) as 1 | 2)}>
                <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 sm:p-9">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-400">{c.sector}</span>
                  <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-brand-700">{c.metric}</p>
                  <p className="mt-1 font-semibold text-ink-800">{c.metricLabel}</p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink-100 pt-5 text-sm font-semibold text-brand-700">
                    <BookOpen className="h-4 w-4" /> Read the full case study
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-400">Case study figures are illustrative placeholders pending published customer data.</p>
        </div>
      </section>
    );
  }

  if (slug === "whitepapers") {
    return (
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-4 px-5 sm:px-8">
          {whitepapers.map((w, i) => (
            <Reveal key={w.title} delay={(((i % 2) + 1) as 1 | 2)}>
              <div className="group flex items-center gap-5 rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 sm:p-7">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink-900">{w.title}</h3>
                  <p className="mt-1 text-sm text-ink-400">PDF · {w.pages} pages</p>
                </div>
                <span className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 sm:inline-flex">
                  Download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  // faqs
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-3.5 px-5 sm:px-8">
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
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem("resources", slug);
  if (!item) notFound();
  return (
    <DetailPage
      sectionKey="resources"
      slug={slug}
      cta={{ title: "Still have questions?", body: "Our team is happy to walk through anything — from benefit design to data security." }}
    >
      <Body slug={slug} />
    </DetailPage>
  );
}
