# AI Interview Mocker

AI Interview Mocker is a Next.js application for interview preparation. It uses Clerk for authentication, Google Gemini for question generation, and Neon PostgreSQL with Drizzle ORM for persistence.

> **Project status:** This repository contains the interview creation flow and supporting infrastructure. Check the current route implementation before assuming that every interview practice, feedback, or history feature is production-ready.

## Technology stack

- Next.js 15 App Router, React 19, JavaScript
- Clerk authentication
- Google Generative AI SDK
- Neon serverless PostgreSQL and Drizzle ORM
- Tailwind CSS and Radix UI
- Node.js built-in test runner

## Requirements

- Node.js 20 recommended
- npm 9+
- Clerk application credentials
- Google AI API key
- Neon or PostgreSQL connection string

## Local setup

```bash
git clone https://github.com/Brajesh31/Ai-Interview-Mocker.git
cd Ai-Interview-Mocker
npm ci
cp .env.example .env.local
```

On Windows PowerShell, use `Copy-Item .env.example .env.local`.

Configure these values in `.env.local`:

| Variable | Purpose | Exposure |
|---|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | Public |
| `CLERK_SECRET_KEY` | Clerk server authentication | Server only |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Gemini API credential | Server only |
| `DATABASE_URL` | PostgreSQL connection | Server only |
| `INTERVIEW_QUESTION_COUNT` | Generated question count, 1-30, default 5 | Server only |

Never prefix server secrets with `NEXT_PUBLIC_`. Never commit local environment files.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm test` | Run unit tests |
| `npm run db:push` | Apply Drizzle schema to configured database |
| `npm run db:studio` | Open Drizzle Studio |

Open [http://localhost:3000](http://localhost:3000).

## Interview generation flow

1. A signed-in user submits a role, job description/technology stack, and experience.
2. The server action validates input and gets the owner ID from Clerk authentication.
3. Gemini generates the question/answer JSON using a server-side credential.
4. The response structure is validated before persistence.
5. Drizzle writes the interview record to PostgreSQL.
6. The client receives the generated interview ID.

AI output is untrusted input. Validate its structure and never execute generated content.

## Database

The Drizzle schema is in `utils/schema.js`. Use a disposable development database before running `npm run db:push`. Review schema changes and back up production data before applying them.

## Quality checks

```bash
npm ci
npm test
npm run build
```

The CI workflow currently runs dependency installation and unit tests. A green unit-test job does not verify live Clerk, Gemini, or database connectivity.

## Documentation

See [docs/README.md](docs/README.md) for architecture, setup, testing, deployment, security, accessibility, and maintenance guides.

## Contributing and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes. Report security vulnerabilities privately using [SECURITY.md](SECURITY.md). Do not include tokens, database URLs, candidate data, or unredacted logs in public reports.

## Maintainer and license

Maintained by **Brajesh Kumar** ([`@Brajesh31`](https://github.com/Brajesh31)). Distributed under the MIT License. See [LICENSE](LICENSE).
