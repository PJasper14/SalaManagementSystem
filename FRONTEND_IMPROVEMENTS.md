# Frontend improvements — Barangay Sala (SalaManagementSystem)

Summary of what can still be improved in the **frontend** of SalaManagementSystem, on top of what’s already in IMPROVEMENTS.md and UI_UX_IMPROVEMENTS.md.

**Status:** All items below have been implemented.

---

## Already in good shape

- Next.js App Router, TypeScript, Tailwind, DM Sans
- Skip to main content, breadcrumbs, JSON-LD, 404, error boundary, sitemap, robots
- Active nav + `aria-current`, loading skeletons, form success/error, empty states, API error + Retry
- Reduced motion, `aria-live` / `role="alert"`, form labels + `htmlFor`
- News pagination (Previous / Page N of M / Next)
- Mobile menu: `aria-modal`, `aria-label`, close on link click

---

## Implemented (all done)

### High impact

| Item | Where | Notes |
|------|--------|------|
| **Field-level API errors (422)** | `lib/api.ts`, `ContactForm.tsx`, `ServiceRequestForm.tsx` | `ApiError` with `message` and `errors`; forms show API message and field errors. |
| **Touch targets ≥ 44px** | `Navbar.tsx`, `MobileMenu.tsx`, `Button.tsx`, `Input.tsx` | Nav links, menu items, buttons, and hamburger use `min-h-[44px] min-w-[44px]`. |
| **Print styles** | `app/globals.css` | `@media print` hides skip link, header, footer, BackToTop; body background white. |

### Medium impact

| Item | Where | Notes |
|------|--------|------|
| **Section anchors / “On this page”** | `app/about/page.tsx`, `app/services/page.tsx` | Section IDs (`#mission`, `#officials`, `#location`, `#faq`, `#services-list`, `#submit-request`) and “On this page” links. |
| **Back-to-top** | `components/shared/BackToTop.tsx`, `app/layout.tsx` | Floating button after scroll; smooth scroll to top. |
| **Form: show API error message** | `ContactForm.tsx`, `ServiceRequestForm.tsx` | Error state shows `ApiError.message` (e.g. “Too many attempts”). |
| **Mobile menu animation** | `MobileMenu.tsx` | Slide + fade open/close with `transition-transform` and `transition-opacity`. |
| **News article body safety** | `lib/sanitize.ts`, `app/news/[slug]/page.tsx` | `sanitizeHtml()` strips script, iframe, object, embed, `on*` attrs, `javascript:` URLs. |

### Lower priority / polish

| Item | Notes |
|------|--------|
| **Hero CTA** | Quick links “Emergency Hotlines” and “News & Announcements” below main CTAs. |
| **Contact form** | “Clear” button; `beforeunload` when form is dirty. |
| **Card hover** | Elevated cards: `hover:scale-[1.01]` with `motion-reduce:hover:scale-100`. |
| **Staggered list animation** | News list and Announcements use `animate-stagger-item` with delay by index; respects `prefers-reduced-motion`. |
| **Image blur placeholder** | `ImagePlaceholder` uses `placeholder="blur"` and `blurDataURL` for valid image src. |
| **Microcopy** | “We'll reply to this email.” under Email in Contact and Service Request forms. |
| **Trust** | “Last updated” on Emergency and Contact; “Secure form. Your message is sent securely.” on Contact. |

---

## Quick reference

- **General improvements:** IMPROVEMENTS.md  
- **UI/UX list:** UI_UX_IMPROVEMENTS.md  
- **Design:** DESIGN_SYSTEM.md  
- **Launch:** LAUNCH_CHECKLIST.md  
