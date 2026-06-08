import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Video,
  Stethoscope,
  Flask,
  HeartPulse,
  Pill,
  Brain,
  Lock,
  Check,
  ArrowRight,
} from "@/lib/icons";

export default function Features() {
  return (
    <section id="services" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What's inside"
          title={
            <>
              Every layer of care your employees need —{" "}
              <span className="text-gradient">in one place</span>.
            </>
          }
          description="From the first symptom to full recovery, CheckMed handles it — so no one ever has to navigate healthcare alone, or wait until it's an emergency."
        />

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured: Teleconsultation */}
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 p-8 text-white shadow-lg sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-100">
                  Always on
                </span>
                <div className="mt-5 flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                    <Video className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">24/7 Teleconsultation</h3>
                    <p className="mt-2 max-w-md text-brand-50/90">
                      A qualified doctor on call in minutes — day or night, across general physicians
                      and specialists. The fastest way to stop a small problem from becoming a big one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2.5">
                {["Avg. 4 min to connect", "General & specialist", "e-Prescriptions", "Follow-ups included"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-50"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* OPD network */}
          <FeatureCard
            icon={Stethoscope}
            title="OPD network"
            body="In-clinic consults at a curated network of doctors and clinics, with cashless OPD benefits built in."
          />

          {/* Diagnostics */}
          <FeatureCard
            icon={Flask}
            title="Diagnostics & home labs"
            body="Book lab tests and full-body check-ups with free home sample collection and digital reports."
          />

          {/* Featured: Preventive wellness */}
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-brand-100 bg-brand-50/60 p-8 shadow-sm sm:p-10">
              <div className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-brand-200/50 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm">
                  <HeartPulse className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">
                    Preventive wellness programs
                  </h3>
                  <p className="mt-2 max-w-md text-ink-600">
                    On-site camps and digital programs for fitness, nutrition, chronic-condition
                    management and seasonal screenings — the proactive layer that keeps risk low.
                  </p>
                </div>
              </div>
              <div className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "Health camps", v: "On-site" },
                  { k: "Programs", v: "Personalised" },
                  { k: "Screenings", v: "Seasonal" },
                  { k: "Coaching", v: "1-on-1" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-white/80 px-3 py-2.5 text-center shadow-sm">
                    <p className="font-display text-sm font-bold text-brand-700">{s.v}</p>
                    <p className="text-[11px] font-medium text-ink-500">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Pharmacy */}
          <FeatureCard
            icon={Pill}
            title="Pharmacy & delivery"
            body="Order prescribed medicines with doorstep delivery and automatic refills for ongoing care."
          />

          {/* Mental wellness */}
          <FeatureCard
            icon={Brain}
            title="Mental wellness"
            body="Confidential counselling and an employee assistance program for stress, sleep and burnout."
          />

          {/* Secure benefits */}
          <FeatureCard
            icon={Lock}
            title="Secure benefits & claims"
            body="OTP-based access, role-based controls and encrypted records — with real-time benefit tracking."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Stethoscope;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/5">
        <span className="grid h-13 w-13 place-items-center rounded-2xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{body}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Reveal>
  );
}
