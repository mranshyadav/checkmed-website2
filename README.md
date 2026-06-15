# CheckMed — Website

A modern redesign of [checkmed.in](https://checkmed.in) built with **Next.js**.

CheckMed is a corporate health & wellness platform that brings OPD consults,
teleconsultation, diagnostics, pharmacy and preventive wellness into one place —
so employees stay healthy and **out of the in-patient department (IPD)**. The
site leads with that single promise:

> **Everything it takes to keep your employees safe from IPD.**

## Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 15 (App Router)                 |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)    |
| Fonts       | Inter + Sora via `next/font`            |
| Icons       | Hand-built inline SVG set (no runtime dependency) |
| Animation   | CSS keyframes + a small IntersectionObserver reveal hook |

No UI or icon libraries — everything ships as static, prerendered HTML/CSS for a
fast first load.

## Site structure

A multi-page architecture where **every menu item is its own page**. The shared
`Navbar` (mega menus) and `Footer` live in the root layout. Top-level menu names
(Solutions, Services, Products, Resources, Company) **open their menu only** — they
don't navigate; each submenu item links to a dedicated route.

All section/item content lives in one source of truth (`src/lib/content.tsx`,
plus richer datasets in `src/lib/pageData.tsx`). The five `[slug]` routes
generate every page statically (`generateStaticParams`) through one shared
`DetailPage` template, so the pages stay consistent.

| Route | Pages |
| --- | --- |
| `/` | Home (hero, ecosystem, problem, how-it-works, partners, outcomes, clients, testimonials, contact) |
| `/solutions/[slug]` | employee-health-benefits, workforce-wellness, claims-reduction, risk-underwriting, provider-network, care-coordination |
| `/services/[slug]` | opd-benefits, health-camps, teleconsultation, mental-wellness, doctor-consultations, lab-tests, pharmacy, health-records |
| `/products/[slug]` | user-dashboard (web + iOS/Android), business-portal, vendor-portal, control-panel |
| `/resources/[slug]` | blogs, case-studies, whitepapers, faqs |
| `/company/[slug]` | about, leadership, careers, media, contact |

Each detail page shows a hero, its own content, a "More in {section}" sibling
grid for in-section navigation, and a CTA. The navbar highlights the active
section and the active submenu item.

### Design system

Brand tokens (a teal **brand** palette, a clinical **ink** neutral palette and a
**coral** highlight), fonts and animations are defined CSS-first in
`src/app/globals.css` under Tailwind's `@theme`.

Scroll reveals are progressive enhancement: content is fully visible by default
and the entrance animation is only armed by a tiny inline script before first
paint — so the page is never blank without JavaScript or for reduced-motion users.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Notes

Statistics and testimonials in the UI are illustrative placeholders for the
redesign and should be replaced with verified figures before going live.
