# Database

The application uses Neon/Postgres through Drizzle ORM. The schema is defined in `utils/schema.js`; Drizzle Kit reads the schema through `drizzle.config.js`.

Use one private server-side environment variable named `DATABASE_URL`. Do not prefix it with `NEXT_PUBLIC_`.

## Schema commands

```bash
npm run db:push
npm run db:studio
```

Use these commands only against a dedicated development database unless a production change has been reviewed and approved.

Every record read, update, and delete must be authorized against the authenticated user. Use parameterized Drizzle operations, define retention behavior, and use reviewed migrations for production schema evolution.

The original repository had duplicate database clients. Consolidate access into the server-only module in `lib/db.js`.
