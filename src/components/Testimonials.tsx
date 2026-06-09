import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Quote, Star } from "@/lib/icons";

const featured = {
  body: "We used to find out about a health problem only when the hospitalisation claim landed. With CheckMed, our people get seen on day one — avoidable admissions are down by a third, and renewal was the easiest conversation we've ever had with finance.",
  name: "Priya Nair",
  role: "Head of People",
  company: "1,200-person fintech",
  initials: "PN",
  rating: 5,
};

const quotes = [
  {
    body: "The preventive layer is what sold us. Engagement is far higher than any plain OPD wallet, and the early-screening data helps us price risk far better.",
    name: "Rahul Mehta",
    role: "Partnerships Lead",
    company: "Group insurer",
    initials: "RM",
    rating: 5,
  },
  {
    body: "My daughter spiked a fever at 11pm. A doctor on video in under five minutes and medicines by morning — no ER, no panic.",
    name: "Aisha Khan",
    role: "Employee",
    company: "Manufacturing",
    initials: "AK",
    rating: 5,
  },
  {
    body: "Rollout across five offices took a week. The dashboards finally let me show leadership what our health spend actually buys.",
    name: "Daniel Rocha",
    role: "HR Operations",
    company: "Logistics · 800+ staff",
    initials: "DR",
    rating: 4,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-ink-200"}`} />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
      {initials}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink-50/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by HR, insurers and the people who{" "}
              <span className="text-gradient">actually use it</span>.
            </>
          }
        />

        {/* aggregate rating */}
        <Reveal delay={1}>
          <div className="mt-7 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-ink-100 bg-white px-5 py-2.5">
              <Stars rating={5} />
              <span className="font-display text-sm font-bold text-ink-900">4.9 / 5</span>
              <span className="hidden h-4 w-px bg-ink-200 sm:block" />
              <span className="text-sm text-ink-500">average rating from 200+ teams</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Featured */}
          <Reveal className="lg:col-span-3">
            <figure className="flex flex-col gap-6 rounded-3xl border border-brand-100 bg-brand-50/60 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex-1">
                <Quote className="h-10 w-10 text-brand-300" />
                <blockquote className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl">
                  &ldquo;{featured.body}&rdquo;
                </blockquote>
              </div>
              <figcaption className="flex items-center gap-4 border-t border-brand-200/60 pt-6 lg:w-64 lg:flex-col lg:items-start lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <Avatar initials={featured.initials} />
                <div className="lg:mt-3">
                  <Stars rating={featured.rating} />
                  <p className="mt-2 font-semibold text-ink-900">{featured.name}</p>
                  <p className="text-sm text-ink-500">{featured.role}</p>
                  <p className="text-sm font-medium text-brand-700">{featured.company}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting */}
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7">
                <Stars rating={q.rating} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <Avatar initials={q.initials} />
                  <div>
                    <p className="font-semibold text-ink-900">{q.name}</p>
                    <p className="text-sm text-ink-500">
                      {q.role} · <span className="text-brand-700">{q.company}</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
