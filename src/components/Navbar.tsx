"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CheckMedWordmark,
  Menu,
  Close,
  ChevronDown,
  ArrowRight,
  Building,
  Umbrella,
  Hospital,
  Users,
  HeartPulse,
  Activity,
  ChartDown,
  ShieldHeart,
  Stethoscope,
  Calendar,
  Video,
  Brain,
  Flask,
  Pill,
  FileText,
  Newspaper,
  BookOpen,
  HelpCircle,
  AppWindow,
  LayoutGrid,
  Spark,
  Briefcase,
  Mail,
} from "@/lib/icons";

type Ico = ComponentType<SVGProps<SVGSVGElement>>;
type Leaf = { icon: Ico; title: string; desc: string; href: string };

/* ----------------------------- menu data ----------------------------- */

const solutions: { label: string; icon: Ico; items: Leaf[] }[] = [
  {
    label: "Businesses",
    icon: Building,
    items: [
      { icon: HeartPulse, title: "Employee Health Benefits", desc: "OPD, teleconsult & wellness for teams", href: "/solutions#employee-health-benefits" },
      { icon: Activity, title: "Workforce Wellness", desc: "Preventive programs & on-site camps", href: "/solutions#workforce-wellness" },
    ],
  },
  {
    label: "Insurance",
    icon: Umbrella,
    items: [
      { icon: ChartDown, title: "Claims Reduction", desc: "Cut avoidable IPD admissions", href: "/solutions#claims-reduction" },
      { icon: ShieldHeart, title: "Risk & Underwriting", desc: "Early-screening risk insights", href: "/solutions#risk-underwriting" },
    ],
  },
  {
    label: "Healthcare Partners",
    icon: Hospital,
    items: [
      { icon: Stethoscope, title: "Provider Network", desc: "Steady, qualified patient flow", href: "/solutions#provider-network" },
      { icon: Users, title: "Care Coordination", desc: "Integrated referrals & records", href: "/solutions#care-coordination" },
    ],
  },
];

const services: { label: string; items: Leaf[] }[] = [
  {
    label: "Corporate Services",
    items: [
      { icon: Stethoscope, title: "OPD Benefits", desc: "Cashless in-clinic consults", href: "/services#opd-benefits" },
      { icon: Calendar, title: "Health Check-up Camps", desc: "On-site screenings & drives", href: "/services#health-camps" },
      { icon: Video, title: "Teleconsultation", desc: "24/7 doctors for your team", href: "/services#teleconsultation" },
      { icon: Brain, title: "Mental Wellness (EAP)", desc: "Confidential counselling", href: "/services#mental-wellness" },
    ],
  },
  {
    label: "Individual Services",
    items: [
      { icon: Video, title: "Doctor Consultations", desc: "Talk to a doctor in minutes", href: "/services#doctor-consultations" },
      { icon: Flask, title: "Lab Tests at Home", desc: "Free sample collection", href: "/services#lab-tests" },
      { icon: Pill, title: "Pharmacy Delivery", desc: "Medicines to your door", href: "/services#pharmacy" },
      { icon: FileText, title: "Health Records", desc: "Secure, all in one place", href: "/services#health-records" },
    ],
  },
];

const products: Leaf[] = [
  { icon: AppWindow, title: "User Dashboard", desc: "Web portal + iOS & Android apps for corporate and retail users.", href: "/products#user-dashboard" },
  { icon: Hospital, title: "Vendor Portal", desc: "For partners who deliver care — services, bookings & payouts.", href: "/products#vendor-portal" },
  { icon: LayoutGrid, title: "Control Panel", desc: "CheckMed's command center to run services and operations.", href: "/products#control-panel" },
];

const resources: { items: Leaf[]; featured: { tag: string; title: string; desc: string; href: string } } = {
  items: [
    { icon: Newspaper, title: "Blogs", desc: "Guides on employee health & benefits", href: "/resources#blogs" },
    { icon: BookOpen, title: "Case Studies", desc: "Real results from CheckMed teams", href: "/resources#case-studies" },
    { icon: FileText, title: "Whitepapers", desc: "Deep dives & original research", href: "/resources#whitepapers" },
    { icon: HelpCircle, title: "FAQs", desc: "Answers to common questions", href: "/resources#faqs" },
  ],
  featured: {
    tag: "Featured",
    title: "How a 1,200-person team cut IPD claims by 30%",
    desc: "See the playbook behind the results.",
    href: "/resources#case-studies",
  },
};

const company: Leaf[] = [
  { icon: Building, title: "About Us", desc: "Our mission and story", href: "/company#about" },
  { icon: Users, title: "Leadership Team", desc: "The people behind CheckMed", href: "/company#leadership" },
  { icon: Briefcase, title: "Careers", desc: "Join us — we're hiring", href: "/company#careers" },
  { icon: Newspaper, title: "Media Coverage", desc: "CheckMed in the press", href: "/company#media" },
  { icon: Mail, title: "Contact Us", desc: "Talk to our team", href: "/company#contact" },
];

const MEGA = ["solutions", "services", "products", "resources"] as const;
type MegaKey = (typeof MEGA)[number];
type Active = MegaKey | "company";

const topNav: { key: string; label: string; href: string; mega?: MegaKey; company?: boolean }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "solutions", label: "Solutions", href: "/solutions", mega: "solutions" },
  { key: "services", label: "Services", href: "/services", mega: "services" },
  { key: "products", label: "Products", href: "/products", mega: "products" },
  { key: "resources", label: "Resources", href: "/resources", mega: "resources" },
  { key: "company", label: "Company", href: "/company", company: true },
];

const megaFooterNote: Record<MegaKey, string> = {
  solutions: "Aligning every stakeholder around better care.",
  services: "Cashless, coordinated care — corporate and retail.",
  products: "One platform for employers, providers and insurers.",
  resources: "Insights to build a healthier workforce.",
};

const splitHref = (href: string): [string, string] => {
  const i = href.indexOf("#");
  return i === -1 ? [href, ""] : [href.slice(0, i) || "/", href.slice(i)];
};

/* --------------------------- shared pieces --------------------------- */

type NavFns = { onNavigate: (href: string) => void; isLeafActive: (href: string) => boolean };

function LeafLink({ item, fns }: { item: Leaf; fns: NavFns }) {
  const Icon = item.icon;
  const active = fns.isLeafActive(item.href);
  return (
    <Link
      href={item.href}
      onClick={() => fns.onNavigate(item.href)}
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

function ColHeader({ icon: Icon, label }: { icon?: Ico; label: string }) {
  return (
    <div className="mb-1 flex items-center gap-2 px-2.5">
      {Icon ? <Icon className="h-4 w-4 text-brand-600" /> : null}
      <span className="text-xs font-bold uppercase tracking-wider text-ink-400">{label}</span>
    </div>
  );
}

function ProductCard({ item, fns }: { item: Leaf; fns: NavFns }) {
  const Icon = item.icon;
  const active = fns.isLeafActive(item.href);
  return (
    <Link
      href={item.href}
      onClick={() => fns.onNavigate(item.href)}
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

function MegaFooter({ note, fns }: { note: string; fns: NavFns }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink-100 px-1 pt-3">
      <span className="text-xs text-ink-400">{note}</span>
      <Link
        href="/company#contact"
        onClick={() => fns.onNavigate("/company#contact")}
        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition-colors hover:text-brand-800"
      >
        Talk to our team <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function MegaContent({ which, fns }: { which: MegaKey; fns: NavFns }) {
  if (which === "solutions") {
    return (
      <div className="w-[820px] max-w-[calc(100vw-3rem)]">
        <div className="grid grid-cols-3 gap-x-6 gap-y-1">
          {solutions.map((col) => (
            <div key={col.label}>
              <ColHeader icon={col.icon} label={col.label} />
              {col.items.map((it) => (
                <LeafLink key={it.title} item={it} fns={fns} />
              ))}
            </div>
          ))}
        </div>
        <MegaFooter note={megaFooterNote.solutions} fns={fns} />
      </div>
    );
  }

  if (which === "services") {
    return (
      <div className="w-[640px] max-w-[calc(100vw-3rem)]">
        <div className="grid grid-cols-2 gap-x-6">
          {services.map((col) => (
            <div key={col.label}>
              <ColHeader label={col.label} />
              {col.items.map((it) => (
                <LeafLink key={it.title} item={it} fns={fns} />
              ))}
            </div>
          ))}
        </div>
        <MegaFooter note={megaFooterNote.services} fns={fns} />
      </div>
    );
  }

  if (which === "products") {
    return (
      <div className="w-[760px] max-w-[calc(100vw-3rem)]">
        <ColHeader label="Platform" />
        <div className="grid grid-cols-3 gap-4">
          {products.map((it) => (
            <ProductCard key={it.title} item={it} fns={fns} />
          ))}
        </div>
        <MegaFooter note={megaFooterNote.products} fns={fns} />
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
            {resources.items.map((it) => (
              <LeafLink key={it.title} item={it} fns={fns} />
            ))}
          </div>
        </div>
        <Link
          href={resources.featured.href}
          onClick={() => fns.onNavigate(resources.featured.href)}
          className="group/feat relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 p-6 text-white"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-50">
            <Spark className="h-3.5 w-3.5" /> {resources.featured.tag}
          </span>
          <h4 className="relative mt-4 font-display text-lg font-bold leading-snug">
            {resources.featured.title}
          </h4>
          <p className="relative mt-1.5 text-sm text-brand-50/85">{resources.featured.desc}</p>
          <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
            Read more <ArrowRight className="h-4 w-4 transition-transform group-hover/feat:translate-x-0.5" />
          </span>
        </Link>
      </div>
      <MegaFooter note={megaFooterNote.resources} fns={fns} />
    </div>
  );
}

/* --------------------------- mobile data --------------------------- */

const mobileMenu: {
  key: string;
  label: string;
  href: string;
  groups?: { label?: string; items: { title: string; href: string }[] }[];
}[] = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "solutions",
    label: "Solutions",
    href: "/solutions",
    groups: solutions.map((s) => ({ label: s.label, items: s.items.map((i) => ({ title: i.title, href: i.href })) })),
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    groups: services.map((s) => ({ label: s.label, items: s.items.map((i) => ({ title: i.title, href: i.href })) })),
  },
  {
    key: "products",
    label: "Products",
    href: "/products",
    groups: [{ items: products.map((i) => ({ title: i.title, href: i.href })) }],
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    groups: [{ items: resources.items.map((i) => ({ title: i.title, href: i.href })) }],
  },
  {
    key: "company",
    label: "Company",
    href: "/company",
    groups: [{ items: company.map((c) => ({ title: c.title, href: c.href })) }],
  },
];

/* ------------------------------- navbar ------------------------------- */

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<Active | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [hash, setHash] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = (k: Active) => {
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

  /* track current hash for submenu active states */
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, [pathname]);

  /* close menus whenever the route changes */
  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
    setMobileSub(null);
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

  const isRouteActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  const isLeafActive = (href: string) => {
    const [p, h] = splitHref(href);
    const pathOk = p === "/" ? pathname === "/" : pathname === p;
    return pathOk && (h ? hash === h : true);
  };

  const onNavigate = (href: string) => {
    setActive(null);
    const [, h] = splitHref(href);
    setHash(h);
  };

  const fns: NavFns = { onNavigate, isLeafActive };

  const triggerCls = (highlighted: boolean) =>
    `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
      highlighted ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-ink-100 bg-white"
      onMouseLeave={scheduleClose}
    >
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <Link
          href="/"
          className="flex items-center"
          aria-label="CheckMed home"
          onMouseEnter={() => setActive(null)}
          onClick={() => onNavigate("/")}
        >
          <CheckMedWordmark className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {topNav.map((it) => {
            if (it.mega) {
              const isOpen = active === it.mega;
              return (
                <Link
                  key={it.key}
                  href={it.href}
                  onMouseEnter={() => openMega(it.mega as MegaKey)}
                  onFocus={() => openMega(it.mega as MegaKey)}
                  onClick={() => onNavigate(it.href)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  className={triggerCls(isOpen || isRouteActive(it.href))}
                >
                  {it.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </Link>
              );
            }
            if (it.company) {
              const isOpen = active === "company";
              return (
                <div key={it.key} className="relative">
                  <Link
                    href={it.href}
                    onMouseEnter={() => openMega("company")}
                    onFocus={() => openMega("company")}
                    onClick={() => onNavigate(it.href)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={triggerCls(isOpen || isRouteActive(it.href))}
                  >
                    {it.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  {isOpen ? (
                    <div
                      className="absolute right-0 top-full z-50 pt-2.5"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="animate-menu-in w-[300px] rounded-[20px] border border-ink-100 bg-white p-2 shadow-[0_24px_60px_-22px_rgba(8,47,58,0.28)]">
                        {company.map((c) => (
                          <LeafLink key={c.title} item={c} fns={fns} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={it.key}
                href={it.href}
                onMouseEnter={() => setActive(null)}
                onClick={() => onNavigate(it.href)}
                className={triggerCls(isRouteActive(it.href))}
              >
                {it.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex" onMouseEnter={() => setActive(null)}>
          <Link
            href="/company#contact"
            onClick={() => onNavigate("/company#contact")}
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

        {/* Mega panel (desktop) — centered, for the four wide menus */}
        {active && (MEGA as readonly string[]).includes(active) ? (
          <div
            className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-2.5 lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div
              key={active}
              className="animate-menu-in rounded-[20px] border border-ink-100 bg-white p-5 shadow-[0_24px_60px_-22px_rgba(8,47,58,0.28)]"
            >
              <MegaContent which={active as MegaKey} fns={fns} />
            </div>
          </div>
        ) : null}
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto overscroll-contain border-t border-ink-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {mobileMenu.map((sec) =>
            sec.groups ? (
              <div key={sec.key}>
                <div
                  className={`flex items-center rounded-xl transition-colors ${
                    isRouteActive(sec.href) ? "bg-brand-50" : "hover:bg-brand-50"
                  }`}
                >
                  <Link
                    href={sec.href}
                    onClick={() => {
                      onNavigate(sec.href);
                      closeMobile();
                    }}
                    className={`flex-1 px-4 py-3 text-base font-medium ${
                      isRouteActive(sec.href) ? "text-brand-700" : "text-ink-800"
                    }`}
                  >
                    {sec.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileSub((s) => (s === sec.key ? null : sec.key))}
                    aria-expanded={mobileSub === sec.key}
                    aria-label={`Toggle ${sec.label} submenu`}
                    className="px-4 py-3 text-ink-400"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSub === sec.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileSub === sec.key ? (
                  <div className="pb-1 pl-3">
                    {sec.groups.map((g, gi) => (
                      <div key={gi} className="py-1">
                        {g.label ? (
                          <p className="px-4 pb-0.5 pt-1 text-xs font-bold uppercase tracking-wider text-ink-400">
                            {g.label}
                          </p>
                        ) : null}
                        {g.items.map((it) => (
                          <Link
                            key={it.title}
                            href={it.href}
                            onClick={() => {
                              onNavigate(it.href);
                              closeMobile();
                            }}
                            className={`block rounded-xl py-2 pl-6 pr-4 text-[15px] transition-colors ${
                              isLeafActive(it.href)
                                ? "bg-brand-50 text-brand-700"
                                : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                            }`}
                          >
                            {it.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={sec.key}
                href={sec.href}
                onClick={() => {
                  onNavigate(sec.href);
                  closeMobile();
                }}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isRouteActive(sec.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {sec.label}
              </Link>
            )
          )}
          <Link
            href="/company#contact"
            onClick={() => {
              onNavigate("/company#contact");
              closeMobile();
            }}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-base font-semibold text-white"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
