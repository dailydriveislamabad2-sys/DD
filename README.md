# Daily Drive Calling Sheet — Split Build v33

This build separates the application into:

- `worker.js` — Cloudflare Worker backend/API/authentication
- `public/index.html` — page markup
- `public/css/style.css` — original/base UI CSS
- `public/css/fixes.css` — latest UI/role/Quick Assign/logo fixes
- `public/js/01_base.js` … — original frontend scripts kept in execution order
- `public/js/fixes.js` — latest fixes
- `public/assets/daily-drive.png` — transparent Daily Drive logo
- `db/schema.sql` — D1 schema
- `db/seed.sql` — seed note
- `wrangler.toml` — Worker + Assets + D1 configuration

## Deploy

1. Create or select a Cloudflare D1 database and put its ID into `wrangler.toml`.
2. Set production credentials via Worker environment variables/secrets.
3. Deploy with `npx wrangler deploy`.

The worker still auto-ensures the required D1 tables/columns so the existing database remains compatible.
## Dashboard modularization (V37)
Dashboard UI is isolated in `public/dashboard.html`, `public/css/dashboard.css`, and `public/js/dashboard.js`. Future dashboard-only UI changes should normally require replacing only these dashboard files (plus `public/assets/logout-power.png` if the icon changes). The existing worker/API/D1 and core JS files remain the application base.
