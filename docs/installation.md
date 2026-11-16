# Installation and local setup

## Requirements

| Requirement | Recommended | Purpose |
|---|---|---|
| Node.js | 20.x | Next.js runtime and local tooling |
| npm | 9 or newer | Dependency installation and scripts |
| Clerk | Development application | Authentication |
| Google AI | API key with access to configured model | Question generation |
| PostgreSQL | Neon development database | Interview persistence |

## Clone and install

```bash
git clone https://github.com/Brajesh31/Ai-Interview-Mocker.git
cd Ai-Interview-Mocker
npm ci
```

## Configure local environment

Create a local environment file:

macOS/Linux:
```bash
cp .env.example .env.local
```

Windows PowerShell:
```powershell
Copy-Item .env.example .env.local
```

Set the values described in [Environment variables](environment-variables.md). Use development credentials and never commit `.env.local`.

## Prepare the database

1. Create a dedicated development PostgreSQL database.
2. Set `DATABASE_URL` in `.env.local`.
3. Review `utils/schema.js`.
4. Run `npm run db:push` against the development database.
5. Confirm the `mockinterviews` table exists.

Do not use a production database for initial setup or experimentation.

## Start the application

```bash
npm run dev
```

Open http://localhost:3000. Sign in using the configured Clerk development application, then open the dashboard.

## First-run checklist

- [ ] Dependencies installed successfully.
- [ ] Local environment file created.
- [ ] Clerk publishable and secret keys belong to the same application.
- [ ] Clerk redirect URLs include the local origin.
- [ ] Gemini key is configured on the server.
- [ ] Database URL points to a development database.
- [ ] Drizzle schema is applied.
- [ ] Dashboard is protected when signed out.
- [ ] Interview creation can be tested with synthetic input.

## Common setup failures

See [Troubleshooting](troubleshooting.md) for authentication, provider, database, and npm failures.
