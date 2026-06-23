"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckMedWordmark, Menu, Close, ChevronDown, ArrowRight, Spark } from "@/lib/icons";
import { sections, itemHref, type Item, type SectionKey } from "@/lib/content";

const inGroup = (it: Item, label: string) =>
  it.groups ? it.groups.includes(label) : it.group === label;

type Leaf = { icon: Item["icon"]; title: string; desc: string; href: string };
const leafOf = (key: SectionKey, it: Item): Leaf => ({
  icon: it.icon,
  title: it.title,
  desc: it.desc,
  href: itemHref(key, it.slug),
});

type Fns = { onNavigate: () => void; isActive: (href: string) => boolean };

function LeafLink({ item, fns }: { item: Leaf; fns: Fns }) {
  const Icon = item.icon;
  const active = fns.isActive(item.href);
  return (
    <Link
      href={item.href}
      onClick={fns.onNavigate}
      className={`group/li flex items-start gap-3 rounded-2xl p-2.5 transition-colors ${
        active ? "bg-brand-50" : "hover:bg-brand-50"
      }`}
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
          active
            ? "bg-brand-600 text-white"
            : "bg-brand-50 text-brand-600 group-hover/li:bg-brand-600 group-hover/li:text-white"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold ${active ? "text-brand-700" : "text-ink-900"}`}>
          {item.title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">{item.desc}</span>
      </span>
    </Link>
  );
}

function ProductCard({ item, fns }: { item: Leaf; fns: Fns }) {
  const Icon = item.icon;
  const active = fns.isActive(item.href);
  return (
    <Link
      href={item.href}
      onClick={fns.onNavigate}
      className={`group/card flex flex-col rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
        active ? "border-brand-300 bg-brand-50/60" : "border-ink-100 hover:border-brand-200 hover:bg-brand-50/40"
      }`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover/card:bg-brand-600 group-hover/card:text-white">
        <Icon className="h-5.5 w-5.5" />
      </span>
      <span className="mt-4 text-sm font-bold text-ink-900">{item.title}</span>
      <span className="mt-1 text-xs leading-relaxed text-ink-500">{item.desc}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
        Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
      </span>
    </Link>
  );
}

function ColHeader({ icon: Icon, label }: { icon?: Item["icon"]; label: string }) {
  return (
    <div className="mb-1 flex items-center gap-2 px-2.5">
      {Icon ? <Icon className="h-4 w-4 text-brand-600" /> : null}
      <span className="text-xs font-bold uppercase tracking-wider text-ink-400">{label}</span>
    </div>
  );
}

function MegaFooter({ note, fns }: { note: string; fns: Fns }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink-100 px-1 pt-3">
      <span className="text-xs text-ink-400">{note}</span>
      <Link
        href="/company/contact"
        onClick={fns.onNavigate}
        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition-colors hover:text-brand-800"
      >
        Talk to our team <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function MegaContent({ sectionKey, fns }: { sectionKey: SectionKey; fns: Fns }) {
  const section = sections.find((s) => s.key === sectionKey)!;

  if (section.layout === "groups") {
    const cols = section.groups?.length ?? 2;
    const width = cols >= 3 ? "w-[820px]" : "w-[640px]";
    const grid = cols >= 3 ? "grid-cols-3" : "grid-cols-2";
    return (
      <div className={`${width} max-w-[calc(100vw-3rem)]`}>
        <div className={`grid ${grid} gap-x-6 gap-y-1`}>
          {section.groups!.map((g) => (
            <div key={g.label}>
              <ColHeader icon={g.icon} label={g.label} />
              {section.items
                .filter((it) => inGroup(it, g.label))
                .map((it) => (
                  <LeafLink key={it.slug} item={leafOf(sectionKey, it)} fns={fns} />
                ))}
            </div>
          ))}
        </div>
        <MegaFooter note={section.tagline} fns={fns} />
      </div>
    );
  }

  if (section.layout === "grid") {
    return (
      <div className="w-[680px] max-w-[calc(100vw-3rem)]">
        <ColHeader label={section.label} />
        <div className="grid grid-cols-2 gap-1">
          {section.items.map((it) => (
            <LeafLink key={it.slug} item={leafOf(sectionKey, it)} fns={fns} />
          ))}
        </div>
        <MegaFooter note={section.tagline} fns={fns} />
      </div>
    );
  }

  if (section.layout === "cards") {
    return (
      <div className="w-[720px] max-w-[calc(100vw-3rem)]">
        <ColHeader label="Platform" />
        <div className="grid grid-cols-2 gap-4">
          {section.items.map((it) => (
            <ProductCard key={it.slug} item={leafOf(sectionKey, it)} fns={fns} />
          ))}
        </div>
        <MegaFooter note={section.tagline} fns={fns} />
      </div>
    );
  }

  // resources
  return (
    <div className="w-[860px] max-w-[calc(100vw-3rem)]">
      <div className="grid grid-cols-[1.25fr_0.9fr] gap-6">
        <div>
          <ColHeader label="Resources" />
          <div className="grid grid-cols-2 gap-1">
            {section.items.map((it) => (
              <LeafLink key={it.slug} item={leafOf(sectionKey, it)} fns={fns} />
            ))}
          </div>
        </div>
        {section.featured ? (
          <Link
            href={section.featured.href}
            onClick={fns.onNavigate}
            className="group/feat relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 p-6 text-white"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-50">
              <Spark className="h-3.5 w-3.5" /> {section.featured.tag}
            </span>
            <h4 className="relative mt-4 font-display text-lg font-bold leading-snug">{section.featured.title}</h4>
            <p className="relative mt-1.5 text-sm text-brand-50/85">{section.featured.desc}</p>
            <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              Read more <ArrowRight className="h-4 w-4 transition-transform group-hover/feat:translate-x-0.5" />
            </span>
          </Link>
        ) : null}
      </div>
      <MegaFooter note={section.tagline} fns={fns} />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<SectionKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<SectionKey | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (k: SectionKey) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(k);
  };
  const scheduleClose = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 140);
  };
  const cancelClose = () => {
    if (timer.current) clearTimeout(timer.current);
  };
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSub(null);
  };

  useEffect(() => {
    setActive(null);
    closeMobile();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        closeMobile();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const fns: Fns = { onNavigate: () => setActive(null), isActive: (href) => pathname === href };
  const sectionActive = (base: string) => pathname.startsWith(base);

  const triggerCls = (hot: boolean) =>
    `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
      hot ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-100 bg-white" onMouseLeave={scheduleClose}>
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <Link href="/" className="flex items-center" aria-label="CheckMed home" onMouseEnter={() => setActive(null)}>
          <CheckMedWordmark className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            onMouseEnter={() => setActive(null)}
            className={triggerCls(pathname === "/")}
          >
            Home
          </Link>

          {sections.map((s) => {
            const isOpen = active === s.key;
            const hot = isOpen || sectionActive(s.base);
            const anchored = s.layout === "list";
            return (
              <div key={s.key} className={anchored ? "relative" : ""}>
                <button
                  type="button"
                  onMouseEnter={() => open(s.key)}
                  onFocus={() => open(s.key)}
                  onClick={() => setActive((cur) => (cur === s.key ? null : s.key))}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  className={triggerCls(hot)}
                >
                  {s.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {anchored && isOpen ? (
                  <div
                    className="absolute right-0 top-full z-50 pt-2.5"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="animate-menu-in w-[300px] rounded-[20px] border border-ink-100 bg-white p-2 shadow-[0_24px_60px_-22px_rgba(8,47,58,0.28)]">
                      {s.items.map((it) => (
                        <LeafLink key={it.slug} item={leafOf(s.key, it)} fns={fns} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex" onMouseEnter={() => setActive(null)}>
          <Link
            href="/company/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-800 transition-colors hover:bg-brand-50 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Centered mega panel (groups / cards / resources) */}
        {active && sections.find((s) => s.key === active)?.layout !== "list" ? (
          <div
            className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-2.5 lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div
              key={active}
              className="animate-menu-in rounded-[20px] border border-ink-100 bg-white p-5 shadow-[0_24px_60px_-22px_rgba(8,47,58,0.28)]"
            >
              <MegaContent sectionKey={active} fns={fns} />
            </div>
          </div>
        ) : null}
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto overscroll-contain border-t border-ink-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[82vh]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          <Link
            href="/"
            onClick={closeMobile}
            className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
              pathname === "/" ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            Home
          </Link>

          {sections.map((s) => (
            <div key={s.key}>
              <button
                type="button"
                onClick={() => setMobileSub((cur) => (cur === s.key ? null : s.key))}
                aria-expanded={mobileSub === s.key}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  sectionActive(s.base) ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-brand-50"
                }`}
              >
                {s.label}
                <ChevronDown
                  className={`h-4 w-4 text-ink-400 transition-transform ${mobileSub === s.key ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSub === s.key ? (
                <div className="pb-1 pl-3">
                  {(s.groups ?? [{ label: "" }]).map((g, gi) => {
                    const items = g.label ? s.items.filter((it) => inGroup(it, g.label)) : s.items;
                    return (
                      <div key={gi} className="py-1">
                        {g.label ? (
                          <p className="px-4 pb-0.5 pt-1 text-xs font-bold uppercase tracking-wider text-ink-400">
                            {g.label}
                          </p>
                        ) : null}
                        {items.map((it) => {
                          const href = itemHref(s.key, it.slug);
                          return (
                            <Link
                              key={it.slug}
                              href={href}
                              onClick={closeMobile}
                              className={`block rounded-xl py-2 pl-6 pr-4 text-[15px] transition-colors ${
                                pathname === href
                                  ? "bg-brand-50 text-brand-700"
                                  : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                              }`}
                            >
                              {it.title}
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ))}

          <Link
            href="/company/contact"
            onClick={closeMobile}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-base font-semibold text-white"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
