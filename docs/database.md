# Database overview

## Provider and ORM

The application uses PostgreSQL, with Neon as the serverless provider, and Drizzle ORM for schema definitions and queries.

- Schema: `utils/schema.js`
- Connection: `lib/db.js`
- Drizzle Kit configuration: `drizzle.config.js`
- Connection variable: `DATABASE_URL`

The database module is marked server-only. Never import it into a client component or expose its connection string to the browser.

## Current table

The schema defines `mockinterviews`. Its fields are documented in [Data model](data-model.md).

The current table stores a serialized JSON response, role details, experience, Clerk user ID, and creation timestamp.

## Commands

```bash
npm run db:push
npm run db:studio
```

Use only a dedicated development database while exploring schema changes.

## Data access rules

- Derive the owner from the authenticated Clerk session.
- Add owner filters to every future read, update, and delete query.
- Never treat `mockID` as an authorization token.
- Use Drizzle's parameterized query methods.
- Avoid logging interview response contents.
- Keep the database URL private.

## Schema limitations

The current schema uses varchar for experience and creation time, has no declared unique constraint for `mock_id`, and has no explicit index for `created_by`. The repository also lacks a tested migration and rollback process.

See [Database operations](database-operations.md) before applying schema changes.
