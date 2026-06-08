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

## Page structure

The landing page (`src/app/page.tsx`) is composed of focused section components
in `src/components/`:

1. **Navbar** — sticky, scroll-aware, with a mobile menu
2. **Hero** — the core message + floating "workforce health" visual
3. **EcosystemStrip** — the partner network (corporates, insurers, TPAs, providers…)
4. **Problem** — why IPD is the most expensive *and* most avoidable moment
5. **HowItWorks** — the continuous prevention loop that ends before the hospital
6. **Features** — a bento grid of every service (teleconsult, OPD, labs, pharmacy, wellness…)
7. **Audiences** — value for employers, insurers, employees and providers
8. **Outcomes** — animated impact counters
9. **Testimonials** — voices from HR, insurers and employees
10. **ContactCTA** — a "book a demo" form
11. **Footer**

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
