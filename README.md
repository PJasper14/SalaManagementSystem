# Barangay Sala Management System

A full-stack Barangay Sala information and management site: **Next.js** (React) frontend, **Laravel** API backend, **MySQL** database.

## Features

- Responsive, mobile-first UI with dark mode
- Homepage: Hero, features, announcements, testimonials
- About: History, mission, officials, FAQ
- Services: Service list + request form
- News: List and detail pages (from API)
- Contact form and contact info
- Laravel REST API for news, contact, and service requests

## Project structure

```
SalaManagementSystem/
├── frontend/          # Next.js 15, React, TypeScript, Tailwind
├── backend/           # Laravel API (full app: migrations, models, controllers, routes)
├── PROJECT_BLUEPRINT.md
├── DESIGN_SYSTEM.md
└── README.md
```

## Quick start

### 1. Frontend

```bash
cd frontend
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL=http://localhost:8000
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Backend (Laravel)

The Laravel API lives in **`backend/`** (same level as `frontend/`).

1. `cd backend`

2. Configure `.env`:

   - `DB_*` for MySQL (`sala_db` or your DB name).
   - `FRONTEND_URL=http://localhost:3000` for CORS.

3. CORS: `config/cors.php` already allows `FRONTEND_URL`. Add `FRONTEND_URL` to `.env` if you change the frontend URL.

4. Migrate and seed:

   ```bash
   php artisan migrate
   php artisan db:seed
   ```
   Or seed only news: `php artisan db:seed --class=NewsPostSeeder`

5. Run API:

   ```bash
   php artisan serve
   ```

   API base: [http://localhost:8000](http://localhost:8000). See [backend/README-SALA.md](./backend/README-SALA.md) for details.

### 3. Database

Create a MySQL database (e.g. `sala_db`) and set `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` in Laravel’s `.env`.

## Docs

- **Project plan & structure:** [PROJECT_BLUEPRINT.md](./PROJECT_BLUEPRINT.md)
- **Design system:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Backend setup:** [backend/README-SALA.md](./backend/README-SALA.md)
- **Launch checklist (SEO, performance, a11y):** [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)
- **Debugging & common errors:** [DEBUGGING.md](./DEBUGGING.md)
- **Improvement ideas (prioritized):** [IMPROVEMENTS.md](./IMPROVEMENTS.md)

## Tech stack

| Layer    | Tech |
|----------|------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend  | Laravel (PHP) |
| Database | MySQL |

## License

MIT.
