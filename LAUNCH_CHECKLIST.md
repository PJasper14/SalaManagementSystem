# Launch checklist — Barangay Sala

Use this before going live.

## Responsiveness

- [ ] Test breakpoints (e.g. 375, 768, 1024, 1280px); use browser DevTools.
- [ ] Confirm mobile menu, grids, and typography scale correctly.
- [ ] Check touch targets (buttons, links) ≥ 44×44px where possible.

## Images & performance

- [ ] Replace placeholders with real images; use Next.js `Image` for photos.
- [ ] Enable lazy loading for below-the-fold images (`loading="lazy"` or `next/image`).
- [ ] Optimize formats (WebP/AVIF) and sizes; avoid huge originals.

## SEO

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production URL; use in `metadataBase`.
- [ ] Per-page `title` and `description` (already added for main pages).
- [ ] Open Graph tags (layout metadata + page-level overrides where needed).
- [ ] Canonical URLs if you have duplicates (e.g. same content on multiple paths).
- [ ] Simple `sitemap.xml` and `robots.txt` (Next.js or static).

## Performance

- [ ] Production build: `npm run build`; fix any build errors.
- [ ] Minimize main JS/CSS; Next.js handles this in production.
- [ ] Prefer `font-display: swap` for web fonts (DM Sans via `next/font` uses this).
- [ ] Defer non-critical scripts; avoid blocking render.

## Accessibility

- [ ] Keyboard navigation: tab through nav, forms, buttons, links; no traps.
- [ ] Focus visible: ensure `:focus-visible` rings (or equivalent) are clearly visible.
- [ ] Color contrast: aim for ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG AA).
- [ ] Forms: labels, error messages, and `aria-invalid` / `aria-describedby` where relevant.
- [ ] Screen reader: landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`), headings order, alt text for images.

## Cross-browser

- [ ] Test in Chrome, Firefox, Safari, Edge.
- [ ] Check dark mode and reduced motion if you support it.

## Security & config

- [ ] All secrets in `.env` / `.env.local`; never commit them.
- [ ] Laravel: `APP_DEBUG=false`, `APP_ENV=production`, strong `APP_KEY`.
- [ ] CORS restricted to your frontend origin(s) in production.
- [ ] Rate limiting on `/api/contact` and `/api/service-requests` (Laravel middleware).

## Backend

- [ ] MySQL created; migrations run; seed data applied if needed.
- [ ] `php artisan config:cache` and `php artisan route:cache` in production.
- [ ] Logs and error reporting configured (e.g. Laravel logging, tracking).

---

*Reference: PROJECT_BLUEPRINT.md, DESIGN_SYSTEM.md, backend/README-SALA.md.*
