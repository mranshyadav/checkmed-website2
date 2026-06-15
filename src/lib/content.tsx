import type { ComponentType, SVGProps } from "react";
import {
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
  Flask,
  Pill,
  FileText,
  Newspaper,
  BookOpen,
  HelpCircle,
  AppWindow,
  LayoutGrid,
  Briefcase,
  Mail,
  Phone,
  Home,
} from "@/lib/icons";

export type Ico = ComponentType<SVGProps<SVGSVGElement>>;

export type Item = {
  slug: string;
  title: string;
  desc: string;
  icon: Ico;
  group?: string;
  intro?: string;
  points?: string[];
  // services extras
  modes?: { icon: Ico; title: string; desc: string }[];
  steps?: { title: string; desc: string }[];
  conditions?: string[];
  // products extras
  kicker?: string;
  platforms?: string[];
  stats?: { k: string; v: string }[];
};

export type SectionKey = "solutions" | "services" | "products" | "resources" | "company";

export type Section = {
  key: SectionKey;
  label: string;
  base: string;
  tagline: string;
  layout: "groups" | "grid" | "cards" | "resources" | "list";
  groups?: { label: string; icon?: Ico }[];
  featured?: { tag: string; title: string; desc: string; href: string };
  items: Item[];
};

export const sections: Section[] = [
  {
    key: "solutions",
    label: "Solutions",
    base: "/solutions",
    tagline: "Aligning every stakeholder around better care.",
    layout: "groups",
    groups: [
      { label: "Businesses", icon: Building },
      { label: "Insurance", icon: Umbrella },
      { label: "Healthcare Partners", icon: Hospital },
    ],
    items: [
      {
        slug: "employee-health-benefits",
        title: "Employee Health Benefits",
        desc: "OPD, teleconsult & wellness for teams",
        icon: HeartPulse,
        group: "Businesses",
        intro:
          "A complete, OPD-first benefits stack your team will actually use — care for the everyday moments, not just the emergencies.",
        points: [
          "Cashless OPD, teleconsult, labs & pharmacy",
          "Family floater options for dependants",
          "Live utilisation & wellbeing dashboards",
          "Turn-key roll-out across every location",
        ],
      },
      {
        slug: "workforce-wellness",
        title: "Workforce Wellness",
        desc: "Preventive programs & on-site camps",
        icon: Activity,
        group: "Businesses",
        intro:
          "Proactive programs that catch risk long before it becomes a claim — and keep people engaged between visits.",
        points: [
          "Annual health check-ups & screenings",
          "On-site camps and wellness days",
          "Chronic-care & lifestyle programs",
          "Personalised nudges that drive engagement",
        ],
      },
      {
        slug: "claims-reduction",
        title: "Claims Reduction",
        desc: "Cut avoidable IPD admissions",
        icon: ChartDown,
        group: "Insurance",
        intro:
          "Resolve issues at the OPD level so they never reach the ward — the single biggest lever on a group health loss ratio.",
        points: [
          "Early symptom routing to the right care",
          "Fewer avoidable IPD admissions",
          "Lower claim severity and frequency",
          "Outcome tracking on every intervention",
        ],
      },
      {
        slug: "risk-underwriting",
        title: "Risk & Underwriting",
        desc: "Early-screening risk insights",
        icon: ShieldHeart,
        group: "Insurance",
        intro:
          "Price risk on real health signals, not just last year's claims — with population data straight from screenings.",
        points: [
          "Population risk profiles from screenings",
          "Cohort-level health trends over time",
          "Engagement data that predicts utilisation",
          "Cleaner renewal conversations",
        ],
      },
      {
        slug: "provider-network",
        title: "Provider Network",
        desc: "Steady, qualified patient flow",
        icon: Stethoscope,
        group: "Healthcare Partners",
        intro:
          "Join a curated network trusted by employers and insurers, with the admin handled for you.",
        points: [
          "Steady, qualified patient flow",
          "Simple digital appointment workflow",
          "Reliable, on-time settlements",
          "Zero acquisition cost for new patients",
        ],
      },
      {
        slug: "care-coordination",
        title: "Care Coordination",
        desc: "Integrated referrals & records",
        icon: Users,
        group: "Healthcare Partners",
        intro:
          "Referrals, records and follow-ups move with the patient — for closed-loop, connected care.",
        points: [
          "Integrated referrals across the network",
          "Shared, secure health records",
          "Automated follow-up scheduling",
          "Closed-loop outcome reporting",
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    base: "/services",
    tagline: "Care your way — consult, test, treat and manage.",
    layout: "grid",
    items: [
      {
        slug: "consultation",
        title: "Consultation",
        desc: "Online, in-person & teleconsultation",
        icon: Stethoscope,
        intro:
          "See a doctor your way — a scheduled video appointment, a physical clinic visit, or an instant teleconsult. Whatever the mode, the same secure record and e-prescription follow you.",
        modes: [
          { icon: Video, title: "Online consultation", desc: "Book a scheduled video appointment with the GP or specialist of your choice, from anywhere." },
          { icon: Stethoscope, title: "In-person consultation", desc: "Visit a doctor at a clinic in our network for a hands-on examination and physical care." },
          { icon: Phone, title: "Teleconsultation", desc: "Need a doctor now? Connect on demand over audio or chat — 24/7, usually within minutes." },
        ],
        points: [
          "GPs and specialists across every major field",
          "Digital e-prescription on every consult",
          "Free follow-ups within the care window",
          "One-tap referrals to labs, pharmacy & specialists",
          "Notes saved to your health record",
          "Available for employees and their families",
        ],
        steps: [
          { title: "Choose your mode", desc: "Online, in-person, or an instant teleconsult." },
          { title: "Pick a doctor / connect", desc: "Select a specialist and slot, or get matched on demand." },
          { title: "Consult", desc: "Talk to the doctor by video, in clinic, or over audio/chat." },
          { title: "Prescription & follow-up", desc: "Get an e-prescription, referrals and a follow-up plan." },
        ],
      },
      {
        slug: "lab-tests",
        title: "Lab Tests",
        desc: "Home visit or centre visit",
        icon: Flask,
        intro:
          "Book individual tests or full-body packages and choose how you're sampled — a free home visit or a walk-in at a partner centre. Same accredited labs, same accuracy, with digital doctor-reviewed reports.",
        modes: [
          { icon: Home, title: "Home visit", desc: "A trained phlebotomist collects your sample at home, free of charge, in a slot you choose." },
          { icon: Building, title: "Centre visit", desc: "Walk in to a nearby NABL-accredited partner lab for collection and a faster turnaround." },
        ],
        points: [
          "NABL-accredited partner labs",
          "Free home sample collection",
          "Individual tests & full-body packages",
          "Digital reports in-app, often within 24 hours",
          "Doctor-reviewed results with clear next steps",
          "Family profiles and full test history",
        ],
        steps: [
          { title: "Choose tests", desc: "Pick a single test or a full-body package." },
          { title: "Home or centre", desc: "Select a free home visit or a partner-centre slot." },
          { title: "Sample collected", desc: "By a certified phlebotomist at home or at the centre." },
          { title: "Reports & review", desc: "Digital reports in-app, reviewed by a doctor." },
        ],
      },
      {
        slug: "pharmacy",
        title: "Pharmacy",
        desc: "Genuine medicines, delivered",
        icon: Pill,
        intro:
          "Get prescribed medicines delivered to your door — genuine, verified and trackable — with automatic refills so ongoing treatment never lapses.",
        points: [
          "Doorstep delivery across serviceable areas",
          "Prescription pulled automatically from your consult",
          "Genuine, verified medicines only",
          "Automatic refill reminders & subscriptions",
          "Live order tracking end to end",
          "Chronic-care packs for long-term therapy",
        ],
        steps: [
          { title: "Share prescription", desc: "Auto-pulled from your CheckMed consult, or upload one." },
          { title: "Confirm order", desc: "Review medicines, quantities and the delivery address." },
          { title: "Doorstep delivery", desc: "Genuine medicines delivered and tracked to your door." },
          { title: "Auto-refills", desc: "Reminders and subscriptions keep ongoing therapy on time." },
        ],
      },
      {
        slug: "health-camps",
        title: "Health Check-up Camps",
        desc: "On-site preventive screenings",
        icon: Calendar,
        intro:
          "Bring preventive care on-site. We run end-to-end health camps for your workforce — vitals, screenings and doctor consults — with a digital report for every employee and aggregate wellbeing insights for HR.",
        points: [
          "On-site setup and logistics handled for you",
          "Full-body & seasonal screening packages",
          "Vitals, BMI and on-site doctor consults",
          "A private digital report for every employee",
          "Aggregate, anonymised wellbeing insights for HR",
          "Flagged risks routed straight into ongoing care",
        ],
        steps: [
          { title: "Plan the camp", desc: "Pick packages, date and locations; we handle logistics." },
          { title: "Screening day", desc: "On-site vitals, tests and doctor consults for your team." },
          { title: "Digital reports", desc: "Each employee gets a private report in the app." },
          { title: "Follow-up", desc: "At-risk employees are guided into consults and care." },
        ],
      },
      {
        slug: "disease-management",
        title: "Disease Management",
        desc: "Programs for chronic conditions",
        icon: HeartPulse,
        intro:
          "Structured, ongoing programs for chronic conditions — pairing a dedicated care manager with monitoring, medication support and lifestyle coaching to keep conditions controlled and complications (and hospitalisations) away.",
        conditions: ["Diabetes", "Hypertension", "Cardiac", "Thyroid", "Asthma & COPD", "Obesity / weight", "Mental health"],
        points: [
          "A dedicated care manager for each member",
          "Regular monitoring and scheduled check-ins",
          "Medication management & refill support",
          "Personalised nutrition & lifestyle coaching",
          "Periodic lab tracking of key markers",
          "Fast escalation to specialists when needed",
        ],
        steps: [
          { title: "Enrol & assess", desc: "A baseline assessment and a clear picture of the condition." },
          { title: "Personalised plan", desc: "A care plan with goals, medication and lifestyle steps." },
          { title: "Monitor & coach", desc: "Regular check-ins and coaching from a dedicated care manager." },
          { title: "Track outcomes", desc: "Keep markers in range and prevent costly complications." },
        ],
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    base: "/products",
    tagline: "One platform for employers, partners and CheckMed.",
    layout: "cards",
    items: [
      {
        slug: "user-dashboard",
        title: "User Dashboard",
        desc: "Web portal + iOS & Android apps for corporate and retail users.",
        icon: AppWindow,
        kicker: "For employees & individuals",
        intro:
          "One portal for every end user — corporate employees and retail members alike — to reach care in a tap. Available on the web and as native iOS and Android apps.",
        platforms: ["Web", "iOS", "Android"],
        points: [
          "Single sign-in for corporate & retail users",
          "Book teleconsults, OPD visits, labs & pharmacy",
          "Family profiles for dependants",
          "Encrypted health records & prescriptions",
        ],
        stats: [
          { k: "Platforms", v: "Web · iOS · Android" },
          { k: "Users", v: "Corporate & retail" },
          { k: "Access", v: "OTP-secured" },
        ],
      },
      {
        slug: "business-portal",
        title: "Business Portal",
        desc: "For corporates who buy CheckMed — onboard staff, manage benefits & usage.",
        icon: Building,
        kicker: "For corporates & HR teams",
        intro:
          "The admin workspace for companies that offer CheckMed to their people — onboard employees, configure benefits, and track utilisation and wellbeing in real time.",
        points: [
          "Bulk onboarding & employee management",
          "Configure benefit plans & eligibility",
          "Live utilisation, engagement & wellbeing dashboards",
          "Invoices, reports & exportable insights",
        ],
        stats: [
          { k: "Roll-out", v: "Days, not months" },
          { k: "Visibility", v: "Real-time" },
          { k: "Coverage", v: "Single or multi-site" },
        ],
      },
      {
        slug: "vendor-portal",
        title: "Vendor Portal",
        desc: "For partners who deliver care — services, bookings & payouts.",
        icon: Hospital,
        kicker: "For service partners",
        intro:
          "The workspace for our partner network — hospitals, clinics, labs and pharmacies — to receive patients, manage their services and get paid, all in one place.",
        points: [
          "Receive a steady, qualified patient flow",
          "Manage services, availability & bookings",
          "Digital case notes & shared records",
          "Track claims and on-time settlements",
        ],
        stats: [
          { k: "Partners", v: "Hospitals · Labs · Pharmacies" },
          { k: "Settlements", v: "On time" },
          { k: "Workflow", v: "Fully digital" },
        ],
      },
      {
        slug: "control-panel",
        title: "Control Panel",
        desc: "CheckMed's command center to run services and operations.",
        icon: LayoutGrid,
        kicker: "For the CheckMed team",
        intro:
          "CheckMed's internal command center — where our team configures services, oversees the partner network and keeps every solution running smoothly.",
        points: [
          "Configure services, plans & solutions",
          "Onboard corporates, vendors & members",
          "Monitor operations & SLAs in real time",
          "Role-based access with a full audit trail",
        ],
        stats: [
          { k: "Scope", v: "End-to-end ops" },
          { k: "Control", v: "Role-based" },
          { k: "Visibility", v: "Real-time" },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    base: "/resources",
    tagline: "Insights to build a healthier workforce.",
    layout: "resources",
    featured: {
      tag: "Featured",
      title: "How a 1,200-person team cut IPD claims by 30%",
      desc: "See the playbook behind the results.",
      href: "/resources/case-studies",
    },
    items: [
      {
        slug: "blogs",
        title: "Blogs",
        desc: "Guides on employee health & benefits",
        icon: Newspaper,
        intro: "Short, practical reads on employee health, benefits design and prevention.",
      },
      {
        slug: "case-studies",
        title: "Case Studies",
        desc: "Real results from CheckMed teams",
        icon: BookOpen,
        intro: "What happens when prevention becomes a system instead of a poster in the pantry.",
      },
      {
        slug: "whitepapers",
        title: "Whitepapers",
        desc: "Deep dives & original research",
        icon: FileText,
        intro: "Long-form evidence for benefits leaders, CFOs and underwriters.",
      },
      {
        slug: "faqs",
        title: "FAQs",
        desc: "Answers to common questions",
        icon: HelpCircle,
        intro: "Quick answers on how CheckMed works for employers, employees and insurers.",
      },
    ],
  },
  {
    key: "company",
    label: "Company",
    base: "/company",
    tagline: "Close to your home, close to your heart.",
    layout: "list",
    items: [
      { slug: "about", title: "About Us", desc: "Our mission and story", icon: Building, intro: "Why CheckMed exists, and the conviction behind it." },
      { slug: "leadership", title: "Leadership Team", desc: "The people behind CheckMed", icon: Users, intro: "Operators, clinicians and engineers who have lived the problem from every side." },
      { slug: "careers", title: "Careers", desc: "Join us — we're hiring", icon: Briefcase, intro: "Build healthcare that works before the ward." },
      { slug: "media", title: "Media Coverage", desc: "CheckMed in the press", icon: Newspaper, intro: "What journalists and analysts are saying about prevention-first employee health." },
      { slug: "contact", title: "Contact Us", desc: "Talk to our team", icon: Mail, intro: "Tell us about your organisation and we'll show you exactly how CheckMed fits." },
    ],
  },
];

/* ----------------------------- helpers ----------------------------- */

export const getSection = (key: SectionKey) => sections.find((s) => s.key === key)!;

export const getItem = (key: SectionKey, slug: string) =>
  getSection(key).items.find((i) => i.slug === slug);

export const itemHref = (key: SectionKey, slug: string) => `${getSection(key).base}/${slug}`;

export const allSlugs = (key: SectionKey) => getSection(key).items.map((i) => ({ slug: i.slug }));
