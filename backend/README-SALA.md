# Barangay Sala API

This is the Laravel API for the Barangay Sala Management System (migrations, models, API controllers, routes, seeders).

## Quick start

1. **Configure `.env`**
   - Set `DB_CONNECTION=mysql`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` for MySQL.
   - Add `FRONTEND_URL=http://localhost:3000` for CORS (Next.js frontend).

2. **Migrate & seed**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```
   Or seed only news: `php artisan db:seed --class=NewsPostSeeder`

3. **Run the API**
   ```bash
   php artisan serve
   ```
   API base: `http://localhost:8000`. Set `NEXT_PUBLIC_API_URL=http://localhost:8000` in the frontend `.env.local`.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/news` | List news (paginated) |
| GET | `/api/news/{slug}` | Single news post |
| POST | `/api/contact` | Contact form |
| POST | `/api/service-requests` | Service request |
