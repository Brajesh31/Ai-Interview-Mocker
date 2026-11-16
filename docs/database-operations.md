# Database operations

## Connection

The application connects to Neon PostgreSQL using `DATABASE_URL`. The connection is created in `lib/db.js`, which imports `server-only` and exposes a Drizzle client with the project schema.

## Schema source

- Schema: `utils/schema.js`
- Drizzle Kit config: `drizzle.config.js`
- Connection variable: `DATABASE_URL`

## Local workflow

1. Create a dedicated development database.
2. Set its connection string in `.env.local`.
3. Review the schema file and the intended change.
4. Run the configured Drizzle command.
5. Verify the table and columns in the development database.
6. Run the application against synthetic data.

Commands:

```bash
npm run db:push
npm run db:studio
```

## Production safety

Do not run schema push commands against production casually. Before a production change:
- Review the SQL/schema impact.
- Take and verify a restorable backup.
- Test against a staging database.
- Plan the deployment order for application and schema changes.
- Prepare a rollback or forward-fix strategy.
- Verify application behavior after deployment.

## Operational safeguards

- Keep database credentials out of source control.
- Use least-privilege database credentials where supported.
- Restrict network access where the hosting platform allows it.
- Avoid logging connection strings or query parameters containing private content.
- Monitor connection and provider errors without logging interview answers.
- Define retention and deletion requirements before production use.
