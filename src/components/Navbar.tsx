"use client";

import { useEffect, useState } from "react";
import { CheckMedWordmark, Menu, Close, ArrowRight } from "@/lib/icons";

const links = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Clients", href: "#clients" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-100 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <a href="#top" className="flex items-center" aria-label="CheckMed home">
          <CheckMedWordmark className="h-9 w-auto" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-700"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-brand-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-base font-semibold text-white"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
