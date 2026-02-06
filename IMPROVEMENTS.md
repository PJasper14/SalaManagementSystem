# Barangay Sala — Improvement ideas

Prioritized list of what can be improved in the overall project. Items marked **Done** are already implemented.

---

## High impact (do first)

### Frontend

| Item | Status | Notes |
|------|--------|------|
| **Custom 404 page** | Done | `app/not-found.tsx` — friendly “page not found” with link home. |
| **Error boundary** | Done | `app/error.tsx` — catches runtime errors and shows a fallback UI. |
| **Sitemap & robots.txt** | Done | `app/sitemap.ts` and `app/robots.ts` for SEO and crawlers. |
| **Skip to main content** | Done | Add a “Skip to main content” link at top for keyboard/screen reader users. |
| **Breadcrumbs** | Done | `components/ui/Breadcrumbs.tsx` — used on About, Services, News, Contact, Emergency and news article pages; schema.org BreadcrumbList. |
| **Structured data (JSON-LD)** | Done | `layout.tsx` — GovernmentOrganization JSON-LD for Barangay Sala in body. |

### Backend

| Item | Status | Notes |
|------|--------|------|
| **Rate limiting on API** | Pending | Throttle `POST /api/contact` and `POST /api/service-requests` (e.g. 10/min per IP). |
| **Sanitize news body HTML** | Pending | Strip dangerous tags/attributes when saving or outputting `body` (XSS prevention). |
| **Log contact & service requests** | Pending | Log or email on submit so staff can follow up. |

---

## Medium impact

### Frontend

| Item | Notes |
|------|--------|
| **Loading skeletons** | Replace generic spinners with skeleton cards on News list and Announcements. |
| **Form: show API validation errors** | Display Laravel 422 field errors (e.g. “Email already used”) under each field. |
| **Offline / network error message** | If API is down, show a clear message and “Retry” instead of generic error. |
| **Print styles** | CSS `@media print` for Emergency Hotlines and Contact so they print cleanly. |
| **Image optimization** | Use WebP/AVIF where possible; ensure `sizes` on all `<Image>` is accurate. |

### Backend

| Item | Notes |
|------|--------|
| **News image upload** | Allow uploading `image_url` per post (storage + URL in DB). |
| **Simple admin** | Protect routes (e.g. Sanctum or session); CRUD for news, view contact/requests. |
| **Email on contact/request** | Send email to barangay when form is submitted (e.g. Mailgun, SMTP). |

---

## Lower priority / polish

| Area | Ideas |
|------|--------|
| **Testing** | Frontend: key flows (e.g. form submit, nav). Backend: API tests for contact, news, validation. |
| **Analytics** | Add Google Analytics or Plausible (env-based) for traffic. |
| **i18n** | If you need Tagalog/English, add next-intl or similar. |
| **PWA** | Optional: manifest + service worker for “Add to home screen” and offline. |
| **Security headers** | Next.js: Content-Security-Policy, X-Frame-Options in headers. Laravel: same in middleware. |

---

## Quick reference

- **SEO:** LAUNCH_CHECKLIST.md (meta, OG, sitemap, robots).  
- **Bugs / errors:** DEBUGGING.md.  
- **Design:** DESIGN_SYSTEM.md.

Implementing the **High impact** items first will improve UX, SEO, and security the most.
