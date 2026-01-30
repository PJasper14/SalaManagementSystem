# Barangay Sala Management System — Project Blueprint

## 1. Project Overview

| Item | Description |
|------|-------------|
| **Project** | Barangay Sala Management System |
| **Goal** | Inform residents and visitors about Barangay Sala: officials, services, news, announcements, and contact. |
| **Audience** | Residents, visitors, and anyone seeking barangay information. |
| **Frontend** | React + Next.js (App Router), TypeScript, Tailwind CSS, UI component library |
| **Backend** | Laravel (REST API) |
| **Database** | MySQL |

---

## 2. Must-Have Features

1. **Responsive design** — Mobile-first, works on all devices.
2. **Hero + CTA** — Clear headline and primary call-to-action on homepage.
3. **About Barangay** — History, mission/vision, officials, location/map.
4. **Services & requests** — List of services (e.g. certificates, permits) and request/contact forms.
5. **News & announcements** — Blog-like section with list and detail pages.
6. **Contact form** — Submit inquiries; later wired to Laravel backend.
7. **Dark mode toggle** — With `localStorage` persistence.
8. **Accessibility & SEO** — Semantic HTML, meta tags, keyboard nav, contrast.

---

## 3. Folder Structure & File Tree

```
SalaManagementSystem/
├── frontend/                    # Next.js app
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx             # Home
│   │   ├── globals.css
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx         # List
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Detail
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/                  # Design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Section.tsx
│   │   │   └── ...
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── Announcements.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ServiceRequestForm.tsx
│   │   └── shared/
│   │       ├── DarkModeToggle.tsx
│   │       ├── FAQAccordion.tsx
│   │       └── SmoothScroll.tsx
│   ├── lib/
│   │   ├── api.ts               # Laravel API client
│   │   ├── theme.ts             # Dark mode + localStorage
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useMobileMenu.ts
│   ├── public/
│   │   └── images/
│   ├── .env.local
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/                     # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       ├── Api/
│   │   │       │   ├── ContactController.php
│   │   │       │   ├── NewsController.php
│   │   │       │   └── ServiceRequestController.php
│   │   │       └── ...
│   │   └── Models/
│   │       ├── Contact.php
│   │       ├── NewsPost.php
│   │       └── ServiceRequest.php
│   ├── config/
│   │   └── cors.php
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── create_news_posts_table.php
│   │   │   ├── create_contacts_table.php
│   │   │   └── create_service_requests_table.php
│   │   └── seeders/
│   ├── routes/
│   │   └── api.php
│   ├── .env
│   └── composer.json
│
├── PROJECT_BLUEPRINT.md         # This file
├── DESIGN_SYSTEM.md             # Design system spec
└── README.md
```

---

## 4. Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, features, announcements, testimonials, CTA |
| `/about` | About | History, mission/vision, officials, location |
| `/services` | Services | List of services, request forms |
| `/news` | News list | Paginated announcements/news |
| `/news/[slug]` | News detail | Single post by slug |
| `/contact` | Contact | Contact form, map/address, hours |

---

## 5. Components Breakdown

### Layout
- **Navbar** — Logo, nav links, dark mode toggle, mobile menu trigger.
- **Footer** — Links, address, social placeholders, copyright.
- **MobileMenu** — Slide-out or dropdown menu for small screens.

### UI (Design system)
- **Button** — Primary, secondary, outline, ghost; sizes sm/md/lg.
- **Card** — Container for features, news previews, testimonials.
- **Input** — Text, email, textarea; error state.
- **Section** — Wrapper with max-width, padding, optional title.
- **Badge** — Tags, categories, status.

### Home
- **Hero** — Headline, subheadline, CTA button(s).
- **FeaturesGrid** — 3–4 feature cards (e.g. Services, News, Contact, About).
- **Announcements** — Latest 3–4 news items with links to `/news` and `/news/[slug]`.
- **Testimonials** — 2–3 quote cards (optional).

### Forms & Shared
- **ContactForm** — Name, email, subject, message; validate, submit to API.
- **ServiceRequestForm** — Service type, details; submit to API.
- **DarkModeToggle** — Toggle theme; persist in `localStorage`.
- **FAQAccordion** — Expand/collapse FAQs (e.g. on Services or About).
- **SmoothScroll** — Smooth scroll to sections (e.g. #services, #contact).

---

## 6. Design System Basics (Summary)

- **Colors**: Primary, secondary, accent, neutrals, semantic (success, error, info). See `DESIGN_SYSTEM.md`.
- **Typography**: Font family, scale (h1–h6, body, small), line heights.
- **Spacing**: 4px base scale (4, 8, 12, 16, 24, 32, 48, 64).
- **Shadows & radius**: Subtle shadows, consistent border-radius (e.g. 8px cards, 6px buttons).

---

## 7. Key User Flows

1. **Home → About**  
   Land on home → click “About” in nav → read history, officials, location.

2. **Home → Services**  
   Home → “Services” → browse services → fill request form → submit.

3. **Home → News → Detail**  
   Home → “News” or “Announcements” → list → click post → read full article.

4. **Home → Contact**  
   Home → “Contact” or CTA → fill form → submit → success message.

5. **Global**  
   Use dark mode toggle anytime; navbar/footer consistent across all pages.

---

## 8. API Endpoints (Laravel)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/news` | List news (paginated) |
| `GET` | `/api/news/{slug}` | Single news post |
| `POST` | `/api/contact` | Submit contact form |
| `POST` | `/api/service-requests` | Submit service request |

---

## 9. Database Tables (MySQL)

- **news_posts** — id, title, slug, excerpt, body, image_url, published_at, created_at, updated_at.
- **contacts** — id, name, email, subject, message, created_at, updated_at.
- **service_requests** — id, service_type, requester_name, requester_email, details, status, created_at, updated_at.

---

## 10. Security & Config

- Store Laravel `APP_KEY`, `DB_*`, `CORS` origins in `.env`.
- Frontend: `NEXT_PUBLIC_API_URL` in `.env.local` for API base URL.
- Use Laravel validation and CORS config for API. Optionally add rate limiting and CSRF where applicable (e.g. non-SPA endpoints).

---

*Next: See `DESIGN_SYSTEM.md` for colors, typography, and component specs.*
