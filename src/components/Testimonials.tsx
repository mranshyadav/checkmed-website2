import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Quote } from "@/lib/icons";

const quotes = [
  {
    body: "We used to find out about a health problem only when the hospitalisation claim landed. With CheckMed, our people get seen on day one — our avoidable admissions have genuinely dropped.",
    name: "Priya Nair",
    role: "Head of People, a 1,200-person fintech",
    initials: "PN",
  },
  {
    body: "The preventive layer is what sold us. Engagement is far higher than any plain OPD wallet we've offered, and the early-screening data helps us price risk far better.",
    name: "Rahul Mehta",
    role: "Partnerships Lead, group insurer",
    initials: "RM",
  },
  {
    body: "My daughter spiked a fever at 11pm. I had a doctor on video in under five minutes and medicines delivered by morning — no ER, no panic. That's the whole point.",
    name: "Aisha Khan",
    role: "Employee, manufacturing",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink-50/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why teams choose us"
          title={
            <>
              Loved by HR, insurers and the people who{" "}
              <span className="text-gradient">actually use it</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={((i + 1) as 1 | 2 | 3)}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 shadow-sm">
                <Quote className="h-9 w-9 text-brand-200" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  &ldquo;{q.body}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                    {q.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900">{q.name}</p>
                    <p className="text-sm text-ink-500">{q.role}</p>
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
