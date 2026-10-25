# AI Interview Mocker

AI Interview Mocker is a Next.js application for creating and practicing AI-assisted technical interviews. It combines Clerk authentication, Gemini-powered generation, and a Neon/Postgres database accessed through Drizzle ORM.

## Features

- Authenticated interview workspace with Clerk.
- AI-assisted interview question and feedback flows.
- React UI built with Next.js App Router and Tailwind CSS.
- PostgreSQL persistence through Neon and Drizzle ORM.
- Local database schema push and Drizzle Studio scripts.

## Requirements

- Node.js 18.18 or newer
- npm
- A Clerk application
- A Google Generative AI key
- A Neon/Postgres connection string

## Setup

```powershell
npm ci
Copy-Item .env.example .env.local
```

Fill in the authentication, AI, and database values in `.env.local`. Never expose server credentials in client components or commit the file.

## Run

```powershell
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```powershell
npm run build
npm start
```

## Database

The project uses Drizzle ORM with Neon/Postgres. Review the schema before applying changes, then use the existing scripts:

```powershell
npm run db:push
npm run db:studio
```

Use a separate development database for local schema changes.

## Development

Keep Clerk and AI credentials server-side, validate user input, and avoid logging interview content or personal information. Test authentication, empty states, AI failures, database failures, and responsive UI behavior. Run `npm run lint` and `npm run build` before submitting changes.

## Ownership and license

Maintained by Brajesh Kumar (`brajesh31`). See [LICENSE](LICENSE), [CONTRIBUTING.md](CONTRIBUTING.md), and [SECURITY.md](SECURITY.md).

Last updated: 2026-10-25 20:06 UTC
