import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            isDark
              ? "border-white/15 bg-white/10 text-brand-200"
              : "border-brand-200 bg-brand-50 text-brand-700"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            isDark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              isDark ? "text-ink-200" : "text-ink-600"
            } ${isCenter ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
