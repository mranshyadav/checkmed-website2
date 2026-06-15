"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export default function PageNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const onScroll = () => {
      const line = 150; // below the fixed header + this sticky bar
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // ensure the last section activates at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-16 z-40 border-b border-ink-100 bg-white/90 backdrop-blur lg:top-[72px]">
      <nav
        aria-label="On this page"
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative whitespace-nowrap px-3.5 py-4 text-sm font-medium transition-colors ${
                isActive ? "text-brand-700" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              {s.label}
              <span
                className={`absolute inset-x-2.5 bottom-0 h-0.5 rounded-full bg-brand-600 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
