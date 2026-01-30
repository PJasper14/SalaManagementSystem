# Debugging & common errors

Use this when something breaks (Prompt 6–style).

---

## Frontend

### `npm install` fails (ENOTCACHED, etc.)

- **Cause:** Network or npm cache config (e.g. `only-if-cached`).
- **Fix:** Run `npm install` without cache restrictions, or clear cache:  
  `npm cache clean --force` then `npm install`.
- **Defensive:** Use a normal npm config; avoid `--prefer-offline` / `only-if-cached` in CI unless you actively cache.

### "Module not found" or `@/` alias errors

- **Cause:** TypeScript/Next.js can’t resolve `@/*` paths.
- **Fix:** Ensure `tsconfig.json` has `"paths": { "@/*": ["./*"] }`. Restart dev server / IDE.

### Build fails: "Invalid hook call" or hooks used outside React

- **Cause:** Using React hooks in a non–React context or in Server Components.
- **Fix:** Keep hooks only in `"use client"` components. Use client components for theme, mobile menu, forms.

### Dark mode flash on load

- **Cause:** Theme class applied only after JS runs.
- **Fix:** The inline `ThemeInit` script runs before paint. Ensure it’s in the initial HTML and runs synchronously; avoid removing it or moving it to a client-only tree.

### Forms submit but UI shows "Something went wrong"

- **Cause:** API returns 4xx/5xx (e.g. 422 validation, 500, CORS).
- **Fix:**  
  1. Check Laravel `APP_URL`, CORS `allowed_origins` (include frontend origin).  
  2. Confirm `NEXT_PUBLIC_API_URL` matches Laravel (e.g. `http://localhost:8000`).  
  3. Inspect Network tab: status code, response body.  
  4. Laravel logs: `storage/logs/laravel.log`.

---

## Backend (Laravel)

### 404 on `/api/news`, `/api/contact`, etc.

- **Cause:** Routes not registered or wrong prefix.
- **Fix:** Confirm `routes/api.php` defines these routes. Laravel serves them under `/api` by default. Run `php artisan route:list` and check.

### 500 on API requests

- **Cause:** Server error (e.g. DB connection, missing env, PHP error).
- **Fix:** Set `APP_DEBUG=true` temporarily, check `storage/logs/laravel.log`, fix `.env` (`DB_*`, `APP_KEY`).

### CORS errors in browser

- **Cause:** Laravel not allowing frontend origin.
- **Fix:** In `config/cors.php`, set `allowed_origins` to include `http://localhost:3000` (or your frontend URL). Set `FRONTEND_URL` in `.env` and use it in config.

### Migration errors ("Table already exists", etc.)

- **Cause:** Migrations run out of order or twice.
- **Fix:** `php artisan migrate:fresh` (wipes DB) or `migrate:rollback` then `migrate`. Ensure migration dates order is correct.

---

## Defensive habits

1. **Env:** Never commit `.env` or `.env.local`; use `.env.example` as a template.  
2. **API base URL:** Always wire frontend to backend via env (`NEXT_PUBLIC_API_URL`).  
3. **CORS:** Restrict `allowed_origins` in production to your real frontend URL(s).  
4. **Logs:** Check Laravel logs and browser Network/Console when debugging API or form issues.
