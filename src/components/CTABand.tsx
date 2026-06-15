import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "@/lib/icons";

type CTABandProps = {
  title: string;
  body: string;
};

export default function CTABand({ title, body }: CTABandProps) {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 px-8 py-12 text-center text-white sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-brand-50/90">{body}</p>
            <div className="relative mt-8">
              <Link
                href="/company/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-800 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book a demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
