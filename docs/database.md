# Database

The application uses Neon/Postgres through Drizzle ORM. `drizzle.config.js` and the project schema define the database mapping.

Use `npm run db:push` only against the intended development database and `npm run db:studio` for inspection. Future production schema changes should use reviewed, versioned migrations. Protect database URLs and enforce user ownership on every query.
