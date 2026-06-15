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
  Brain,
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
  layout: "groups" | "cards" | "resources" | "list";
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
    tagline: "Cashless, coordinated care — corporate and retail.",
    layout: "groups",
    groups: [{ label: "Corporate Services" }, { label: "Individual Services" }],
    items: [
      {
        slug: "opd-benefits",
        title: "OPD Benefits",
        desc: "Cashless in-clinic consults",
        icon: Stethoscope,
        group: "Corporate Services",
        intro: "Cashless in-clinic consults across a curated network of doctors and clinics.",
        points: ["Cashless at network clinics", "Specialist & GP coverage", "Real-time benefit tracking", "Coverage for dependants"],
      },
      {
        slug: "health-camps",
        title: "Health Check-up Camps",
        desc: "On-site screenings & drives",
        icon: Calendar,
        group: "Corporate Services",
        intro: "On-site screenings and annual check-up drives, organised end to end.",
        points: ["Full-body & seasonal screenings", "On-site logistics handled", "Digital reports for everyone", "Risk follow-up built in"],
      },
      {
        slug: "teleconsultation",
        title: "Teleconsultation",
        desc: "24/7 doctors for your team",
        icon: Video,
        group: "Corporate Services",
        intro: "A qualified doctor on video for your team, any hour of the day.",
        points: ["Avg. 4 minutes to connect", "General & specialist", "e-Prescriptions included", "Unlimited follow-ups"],
      },
      {
        slug: "mental-wellness",
        title: "Mental Wellness (EAP)",
        desc: "Confidential counselling",
        icon: Brain,
        group: "Corporate Services",
        intro: "Confidential counselling and support for stress, sleep and burnout.",
        points: ["1-on-1 sessions with counsellors", "100% confidential", "Manager sensitisation workshops", "Crisis support"],
      },
      {
        slug: "doctor-consultations",
        title: "Doctor Consultations",
        desc: "Talk to a doctor in minutes",
        icon: Video,
        group: "Individual Services",
        intro: "Talk to a doctor in minutes — by video, audio or chat.",
        points: ["24/7 general physicians", "Specialist appointments", "Digital prescriptions", "Follow-up reminders"],
      },
      {
        slug: "lab-tests",
        title: "Lab Tests at Home",
        desc: "Free sample collection",
        icon: Flask,
        group: "Individual Services",
        intro: "Book tests and full-body packages with free home sample collection.",
        points: ["Free home sample pickup", "NABL-grade partner labs", "Reports in the app", "Doctor-reviewed results"],
      },
      {
        slug: "pharmacy",
        title: "Pharmacy Delivery",
        desc: "Medicines to your door",
        icon: Pill,
        group: "Individual Services",
        intro: "Prescribed medicines delivered to your door, with refills on autopilot.",
        points: ["Doorstep delivery", "Automatic refill reminders", "Genuine, verified medicines", "Chronic-care subscriptions"],
      },
      {
        slug: "health-records",
        title: "Health Records",
        desc: "Secure, all in one place",
        icon: FileText,
        group: "Individual Services",
        intro: "Every report, prescription and visit — in one secure, shareable place.",
        points: ["Encrypted health locker", "Share securely with doctors", "Family profiles supported", "Timeline of every visit"],
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
