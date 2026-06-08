import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://checkmed.in";
const description =
  "CheckMed does everything to keep your employees safe from IPD. Preventive care, OPD consults, teleconsultation, health checkups and wellness — so your team stays healthy and out of the hospital.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CheckMed — Keeping employees safe from IPD",
    template: "%s · CheckMed",
  },
  description,
  keywords: [
    "CheckMed",
    "employee health",
    "IPD prevention",
    "OPD benefits",
    "corporate wellness",
    "teleconsultation",
    "health checkups",
    "group health insurance",
    "preventive healthcare India",
  ],
  authors: [{ name: "CheckMed Private Limited" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "CheckMed — Keeping employees safe from IPD",
    description,
    siteName: "CheckMed",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckMed — Keeping employees safe from IPD",
    description,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#06966c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden antialiased">
        {/* Arms scroll-reveal before first paint; absent without JS so content
            is always visible (progressive enhancement). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-on');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
