"use client";

import { useEffect, useState } from "react";
import { CheckMedWordmark, Menu, Close, ChevronDown, ArrowRight } from "@/lib/icons";

type NavLeaf = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavLeaf[] };

const nav: NavItem[] = [
  { label: "Home", href: "#top" },
  {
    label: "Services",
    children: [
      { label: "Corporate", href: "#solutions" },
      { label: "Retail", href: "#services" },
    ],
  },
  { label: "Products", href: "#services" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "#outcomes" },
      { label: "Media Coverage", href: "#clients" },
      { label: "Blog", href: "#" },
    ],
  },
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

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 group-hover:bg-brand-50 group-hover:text-brand-700 group-focus-within:bg-brand-50 group-focus-within:text-brand-700"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-1.5">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            )
          )}
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
          open ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <p className="px-4 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-ink-400">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl py-2.5 pl-6 pr-4 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            )
          )}
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
