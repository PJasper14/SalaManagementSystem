# UI/UX improvements — Barangay Sala

Prioritized ideas to add and improve the overall UI/UX. Items marked **Done** are already implemented.

---

## High impact (do first)

### Navigation & wayfinding

| Item | Status | Notes |
|------|--------|------|
| **Active nav link** | Done | Current page highlighted in Navbar and MobileMenu. |
| **Breadcrumbs** | Done | `Breadcrumbs.tsx` on About, Services, News, Contact, Emergency and news article pages. |
| **Section anchors** | Pending | Optional IDs + “On this page” links on long pages (About, Services). |

### Feedback & states

| Item | Status | Notes |
|------|--------|------|
| **Loading skeletons** | Done | Card-style skeletons (image + text lines) on News and Announcements. |
| **Form success feedback** | Done | Checkmark icon + green success box with `aria-live="polite"` on Contact and Service Request forms. |
| **Empty states** | Done | News list shows friendly empty message + CTA to contact when API returns no posts. |
| **API error message** | Done | “Can’t load. Check connection and retry.” with Retry button on News list and Announcements when API fails. |

### Accessibility & comfort

| Item | Status | Notes |
|------|--------|------|
| **Reduced motion** | Done | `prefers-reduced-motion` respected; animations disabled when requested. |
| **Touch targets** | Pending | Ensure nav links and buttons ≥ 44×44px on mobile. |
| **Live regions** | Done | `aria-live="polite"` on form success messages; `role="alert"` on API error blocks. |

---

## Medium impact

### Visual polish

| Item | Notes |
|------|--------|
| **Hover/focus transitions** | Consistent `transition-colors duration-200` on buttons and links. |
| **Card hover** | Slight scale or shadow on feature/news cards (already have shadow on elevated). |
| **Staggered list animation** | Optional fade-in for list items on News/Announcements. |
| **Print styles** | `@media print` for Emergency Hotlines and Contact so they print cleanly. |

### Content & layout

| Item | Notes |
|------|--------|
| **Back-to-top** | Floating button after scrolling down (e.g. after Hero + one section). |
| **News pagination** | Clear “Previous / Page N of M / Next” with disabled state when at ends. |
| **Contact form** | Optional “Clear” button; confirm before leave if form is dirty. |
| **Hero CTA** | Optional quick links (e.g. Emergency, News) below main CTAs. |

### Forms

| Item | Notes |
|------|--------|
| **Field-level API errors** | Show Laravel 422 errors under each field, not only generic message. |
| **Success reset** | After success, scroll to top of form or show summary. |
| **Loading state** | Disable submit button + spinner or “Sending…” (already partially done). |

---

## Lower priority

| Area | Ideas |
|------|--------|
| **Microcopy** | Short helper text under key fields (e.g. “We’ll reply to this email”). |
| **Trust** | Optional “Last updated” on Emergency/Contact; “Secure form” note. |
| **Consistency** | Reuse same section title style (e.g. Section component) on all pages. |
| **Mobile menu** | Animate open/close (slide + fade) for smoother feel. |
| **Images** | Optional blur placeholder while images load (Next.js `blurDataURL`). |

---

## Quick reference

- **Design system:** DESIGN_SYSTEM.md  
- **Launch checklist:** LAUNCH_CHECKLIST.md  
- **General improvements:** IMPROVEMENTS.md  

Implementing the **High impact** items first will improve wayfinding, feedback, and accessibility the most.
