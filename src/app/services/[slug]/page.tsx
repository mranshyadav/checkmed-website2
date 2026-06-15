import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage, { Highlights } from "@/components/DetailPage";
import { getItem, allSlugs } from "@/lib/content";

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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem("services", slug);
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
      {item.points ? <Highlights points={item.points} /> : null}
    </DetailPage>
  );
}
