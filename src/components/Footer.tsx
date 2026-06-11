import { CheckMedWordmark, Mail, MapPin } from "@/lib/icons";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Teleconsultation", href: "#services" },
      { label: "OPD network", href: "#services" },
      { label: "Diagnostics", href: "#services" },
      { label: "Pharmacy", href: "#services" },
      { label: "Wellness programs", href: "#services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Employers", href: "#solutions" },
      { label: "For Insurers", href: "#solutions" },
      { label: "For Employees", href: "#solutions" },
      { label: "For Providers", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Partners", href: "#partners" },
      { label: "Clients", href: "#clients" },
      { label: "Outcomes", href: "#outcomes" },
      { label: "Book a demo", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center" aria-label="CheckMed home">
              <CheckMedWordmark className="h-9 w-auto" />
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Everything it takes to keep your employees safe from IPD — preventive care, OPD,
              teleconsultation and wellness, all in one platform.
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href="mailto:hello@checkmed.in"
                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors hover:text-brand-700"
              >
                <Mail className="h-4.5 w-4.5 text-brand-600" /> hello@checkmed.in
              </a>
              <p className="flex items-center gap-2.5 text-sm text-ink-600">
                <MapPin className="h-4.5 w-4.5 text-brand-600" /> Sector 35, Chandigarh, India
              </p>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-7 sm:flex-row">
          <p className="text-sm text-ink-400">
            © {new Date().getFullYear()} CheckMed Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-ink-400 transition-colors hover:text-brand-700">
              Privacy
            </a>
            <a href="#" className="text-sm text-ink-400 transition-colors hover:text-brand-700">
              Terms
            </a>
            <a href="#" className="text-sm text-ink-400 transition-colors hover:text-brand-700">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
