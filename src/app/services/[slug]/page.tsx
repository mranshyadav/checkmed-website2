import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { ModesBand, ConditionsBand, IncludedBand, StepsTimeline } from "@/components/ServiceSections";
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
      facts={item.stats}
      cta={{
        title: "Want this for your team?",
        body: "We'll tailor a benefits plan to your headcount, locations and budget.",
      }}
    >
      {item.modes ? (
        <ModesBand title={modesTitle[slug] ?? "Your options"} modes={item.modes} />
      ) : null}

      {item.conditions ? <ConditionsBand conditions={item.conditions} /> : null}

      {item.points ? (
        <IncludedBand
          title={slug === "disease-management" ? "What the program includes" : "What's included"}
          points={item.points}
        />
      ) : null}

      {item.steps ? <StepsTimeline steps={item.steps} /> : null}
    </DetailPage>
  );
}
