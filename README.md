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

A multi-page architecture. The shared `Navbar` (mega menus) and `Footer` live in
the root layout; every submenu item deep-links to an anchored section on its page
(e.g. `/services#pharmacy`), with smooth scrolling and a fixed-header offset.

| Route | Sections |
| --- | --- |
| `/` | Hero, ecosystem strip, the IPD problem, how it works, clients, testimonials, contact |
| `/solutions` | `#businesses`, `#insurance`, `#healthcare-partners` (each with anchored sub-blocks), partners, outcomes |
| `/services` | `#corporate` & `#individual` with per-service anchors (`#opd-benefits`, `#teleconsultation`, `#pharmacy`…) |
| `/products` | `#employer-dashboard`, `#checkmed-app`, `#provider-portal`, `#insurer-analytics` |
| `/resources` | `#blogs`, `#case-studies`, `#whitepapers`, `#faqs` |
| `/company` | `#about`, `#leadership`, `#careers`, `#media`, `#contact` |

The navbar highlights the active route and the active submenu item (route + hash).

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
