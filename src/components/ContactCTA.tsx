"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, ShieldHeart } from "@/lib/icons";

const benefits = [
  "A 30-minute walkthrough tailored to your team size",
  "A prevention plan to cut your avoidable IPD claims",
  "Transparent pricing — no jargon, no lock-in",
];

export default function ContactCTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: pitch */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <ShieldHeart className="h-4 w-4" /> Let&apos;s protect your people
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Ready to keep your team{" "}
              <span className="text-gradient">out of the hospital?</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-600">
              Tell us a little about your organisation and we&apos;ll show you exactly how CheckMed
              keeps employees healthy — and your healthcare costs down.
            </p>

            <ul className="mt-8 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <a
                href="mailto:hello@checkmed.in"
                className="flex items-center gap-2.5 text-sm font-semibold text-ink-700 transition-colors hover:text-brand-700"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                hello@checkmed.in
              </a>
              <span className="flex items-center gap-2.5 text-sm font-semibold text-ink-700">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                Sector 35, Chandigarh, India
              </span>
            </div>
          </div>

          {/* Right: form card */}
          <div className="relative">
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-xl shadow-ink-900/5 sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                    Thank you — we&apos;re on it!
                  </h3>
                  <p className="mt-2 max-w-sm text-ink-600">
                    Our team will reach out within one business day to set up your CheckMed
                    walkthrough.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-ink-900">Book your demo</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputCls} />
                    </Field>
                    <Field label="Work email" htmlFor="email">
                      <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputCls} />
                    </Field>
                    <Field label="Company" htmlFor="company">
                      <input id="company" name="company" type="text" placeholder="Acme Inc." className={inputCls} />
                    </Field>
                    <Field label="Team size" htmlFor="size">
                      <select id="size" name="size" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select…
                        </option>
                        <option>1 – 50</option>
                        <option>51 – 250</option>
                        <option>251 – 1000</option>
                        <option>1000+</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="What would you like to solve?" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="We'd like to reduce hospitalisation claims and offer OPD benefits…"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl"
                  >
                    Request my demo
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-center text-xs text-ink-400">
                    We respect your privacy. No spam — ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-700">{label}</span>
      {children}
    </label>
  );
}
