# Barangay Sala — Frontend

Next.js 15, React 19, TypeScript, Tailwind CSS.

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

- `NEXT_PUBLIC_API_URL` — Laravel API base (e.g. `http://localhost:8000`)
- `NEXT_PUBLIC_SITE_URL` — Canonical site URL (optional, for SEO)

## Scripts

- `npm run dev` — Development server (default port 3000)
- `npm run build` — Production build
- `npm run start` — Run production build
- `npm run lint` — ESLint

## Structure

- `app/` — App Router pages and layout
- `components/` — Layout, UI, home, forms, shared
- `lib/` — API client, theme, utils
- `hooks/` — useTheme, useMobileMenu

See project root `PROJECT_BLUEPRINT.md` and `DESIGN_SYSTEM.md` for details.
