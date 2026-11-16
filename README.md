<p align="center">
  <img src="public/logo.svg" alt="AI Interview Mocker logo" width="140" />
</p>

<h1 align="center">AI Interview Mocker</h1>

<p align="center">
  An early-stage AI-assisted interview question generator built with Next.js, Clerk, Google Gemini, and PostgreSQL.
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/Ai-Interview-Mocker/actions/workflows/ci.yml"><img src="https://github.com/Brajesh31/Ai-Interview-Mocker/actions/workflows/ci.yml/badge.svg" alt="CI status" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Node.js-20%2B-green" alt="Node.js 20 or newer" />
  <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js 15" />
</p>

---

## Table of contents

- [Project overview](#project-overview)
- [Current implementation status](#current-implementation-status)
- [Features](#features)
- [Technology stack](#technology-stack)
- [Application flow](#application-flow)
- [Repository structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Environment configuration](#environment-configuration)
- [Available commands](#available-commands)
- [Database setup](#database-setup)
- [AI generation contract](#ai-generation-contract)
- [Testing and quality checks](#testing-and-quality-checks)
- [Security and privacy](#security-and-privacy)
- [Deployment](#deployment)
- [Documentation index](#documentation-index)
- [Known limitations](#known-limitations)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Maintainer and license](#maintainer-and-license)

## Project overview

AI Interview Mocker is an early-stage web application intended to help students and job seekers prepare for interviews. A signed-in user can submit a job role, a short role description or technology stack, and years of experience. The server asks Google Gemini to generate a set of interview questions with suggested answers, validates the returned JSON, and stores the result in PostgreSQL.

The project is built with the Next.js App Router. Clerk provides authentication, the Google Generative AI SDK provides question generation, Neon provides a serverless PostgreSQL database, and Drizzle ORM handles database access.

**Important:** This repository currently implements interview creation and persistence, not a complete interactive mock-interview product. The interview-taking screen, answer submission, scoring, feedback report, and interview history interface are not yet implemented. See [Known limitations](#known-limitations).

## Current implementation status

| Area | Status | Notes |
|---|---|---|
| Clerk sign-in and sign-up pages | Implemented | Requires a configured Clerk application |
| Protected dashboard | Implemented | Middleware protects dashboard routes |
| Interview creation form | Implemented | Role, description/stack, experience |
| Server-side validation | Implemented | Pure validation helpers with automated tests |
| Gemini question generation | Implemented | Requires a valid provider key and supported model |
| AI response validation | Implemented | JSON and question/answer shape validation |
| PostgreSQL persistence | Implemented | Requires configured database and schema |
| Interview-taking route | Not implemented | No session page exists yet |
| Answer submission and scoring | Not implemented | Planned work |
| Feedback report | Not implemented | Planned work |
| Interview history | Not implemented | Planned work |
| User data export/deletion | Not implemented | Retention workflow still needs design |

This table is deliberately explicit. A successful question-generation request should not be confused with a complete interview session.

## Features

### Available in the current codebase

- Clerk-based sign-in and sign-up routes.
- Protected dashboard route.
- Interview creation dialog with labeled inputs.
- Server action for authenticated interview generation.
- Server-side validation for role, description, and experience.
- Gemini response parsing and validation.
- PostgreSQL persistence through Drizzle ORM.
- Node.js unit tests for the validation layer.
- GitHub Actions test workflow and Dependabot configuration.

### Planned, not yet available

- Interactive interview session with one question at a time.
- Recording or submitting user answers.
- AI evaluation of submitted answers.
- Structured feedback and improvement suggestions.
- Interview history and filtering.
- User-controlled deletion and export.
- Usage limits, request quotas, and cost reporting.

## Technology stack

| Layer | Technology | Responsibility |
|---|---|---|
| Framework | Next.js 15 App Router | Routing, server rendering, server actions |
| UI | React 19 | Interactive interface |
| Styling | Tailwind CSS | Layout and styling |
| UI primitives | Radix UI | Accessible dialog and controls |
| Authentication | Clerk | User identity and protected routes |
| AI provider | Google Generative AI SDK | Interview question generation |
| AI model | `gemini-1.5-flash` in current configuration | Text generation; confirm provider availability before deployment |
| Database | Neon PostgreSQL | Persistent interview records |
| ORM | Drizzle ORM | Schema and database operations |
| Tests | Node.js built-in test runner | Pure validation helper tests |
| Automation | GitHub Actions and Dependabot | CI and dependency update proposals |

## Application flow

```text
User
 |
 v
Clerk sign-in
 |
 v
Protected /dashboard
 |
 v
Interview creation form
 |
 v
generateInterview server action
 |---- Verify Clerk user
 |---- Validate submitted values
 |---- Request Gemini JSON
 |---- Validate questions and answers
 |---- Insert record through Drizzle
 |
 v
Return mockID to browser
```

The current flow ends after the record is stored and the identifier is returned. A matching interview-taking route has not yet been implemented.

## Repository structure

```text
.
├── app/
│   ├── (auth)/                 # Clerk sign-in and sign-up routes
│   ├── dashboard/
│   │   ├── _components/       # Dashboard UI components
│   │   ├── actions.js         # Authenticated interview generation
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js                # Current starter landing page
├── components/ui/             # Reusable UI primitives
├── docs/                      # Project and maintainer documentation
├── lib/
│   ├── db.js                  # Server-only database client
│   ├── interview-validation.js
│   └── utils.js
├── public/                    # Static assets
├── test/                      # Node.js tests
├── utils/
│   ├── GeminiAiModel.js       # Server-only Gemini configuration
│   └── schema.js              # Drizzle schema
├── .github/                   # CI, templates, Dependabot
├── drizzle.config.js
├── middleware.js
├── package.json
└── README.md
```

See [Project structure](docs/project-structure.md) for more detail.

## Prerequisites

- Node.js 20 recommended.
- npm 9 or newer.
- A Clerk application.
- A Google AI API key with access to the configured Gemini model.
- A Neon or compatible PostgreSQL database.

Use provider development environments and a non-production database while developing.

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Brajesh31/Ai-Interview-Mocker.git
cd Ai-Interview-Mocker
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Create the local environment file

macOS/Linux:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### 4. Configure provider credentials

Open `.env.local` and replace every placeholder with the corresponding value from Clerk, Google AI, and your database provider. The complete list is in [Environment configuration](#environment-configuration).

### 5. Prepare the development database

Review [Database setup](#database-setup) and [Database operations](docs/database-operations.md). Run schema commands only against a dedicated development database.

### 6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment configuration

| Variable | Required | Purpose | Client-visible? |
|---|---:|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key | Yes |
| `CLERK_SECRET_KEY` | Yes | Clerk server credential | No |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes | Gemini API credential | No |
| `DATABASE_URL` | Yes | PostgreSQL connection string | No |
| `INTERVIEW_QUESTION_COUNT` | No | Requested question count, 1-30, default 5 | No |

Only the Clerk publishable key should use the `NEXT_PUBLIC_` prefix. Never expose a Gemini key, Clerk secret, or database URL to browser code.

Do not commit `.env.local`, provider credentials, real interview records, or private test data. See [.env.example](.env.example) and [docs/environment-variables.md](docs/environment-variables.md).

## Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Build the Next.js application for production |
| `npm start` | Start the production server after a successful build |
| `npm test` | Run Node.js unit tests |
| `npm run lint` | Run the configured Next.js lint command, subject to the repository's lint configuration |
| `npm run db:push` | Apply the Drizzle schema to the configured database |
| `npm run db:studio` | Open Drizzle Studio |

## Database setup

The Drizzle table definition is in `utils/schema.js`. The connection is created in `lib/db.js` and reads the private `DATABASE_URL` environment variable.

For a development database:

```bash
npm run db:push
npm run db:studio
```

Do not run schema push commands against production without a reviewed change, a restorable backup, and a rollback plan. Current schema limitations include a varchar timestamp, experience stored as text, and no explicit unique constraint on `mock_id`. See [Data model](docs/data-model.md) and [Database operations](docs/database-operations.md).

## AI generation contract

The server action requests a JSON object in this shape:

```json
{
  "questions": [
    {
      "question": "Question text",
      "answer": "Suggested answer"
    }
  ]
}
```

The response parser rejects malformed JSON, missing question/answer values, empty arrays, and arrays containing more than 30 entries. Validation checks shape, not factual accuracy. AI-generated material should be reviewed critically.

The current model identifier is configured in `utils/GeminiAiModel.js`. Verify its availability with Google before production deployment. See [AI integration](docs/ai-integration.md).

## Testing and quality checks

Run the automated validation suite:

```bash
npm ci
npm test
```

For a local production build:

```bash
npm run build
```

The GitHub Actions workflow currently installs dependencies and runs the unit tests. It does not yet prove that the production build, Clerk, Gemini, or database integration works. See [Testing strategy](docs/testing.md) and [CI/CD](docs/ci-cd.md).

## Security and privacy

- Keep privileged operations in server-only modules and server actions.
- Authenticate before creating user-owned records.
- Use the authenticated Clerk identity as the record owner.
- Validate both user input and AI-generated output.
- Do not trust a record ID as proof of authorization.
- Avoid logging prompts, generated answers, tokens, or database URLs.
- Use synthetic data during development.
- Rotate any credential that has been exposed.

Interview role details and generated answers may contain personal or sensitive information. The current application does not yet provide a self-service data export or deletion flow. Read [Security](SECURITY.md), [Security and privacy](docs/security-and-privacy.md), and [Privacy](docs/privacy.md).

## Deployment

The application can be built and started on a compatible Node.js host after environment variables and the database are configured:

```bash
npm ci
npm run build
npm start
```

Production Clerk URLs, provider credentials, database access, backups, and schema changes must be configured deliberately. The repository does not currently contain a verified deployment pipeline. Follow [Deployment guide](docs/deployment.md) and [Operations guide](docs/operations.md).

## Documentation index

| Document | Description |
|---|---|
| [Product overview](docs/product-overview.md) | Scope, implemented features, and product principles |
| [User guide](docs/user-guide.md) | Current user workflow and limitations |
| [Application flow](docs/application-flow.md) | Request lifecycle and trust boundaries |
| [Architecture](docs/architecture.md) | Application architecture and server/client responsibilities |
| [Project structure](docs/project-structure.md) | Directory map |
| [Installation](docs/installation.md) | Local setup |
| [Development](docs/development.md) | Coding and development workflow |
| [Authentication](docs/authentication.md) | Clerk configuration and authorization |
| [AI integration](docs/ai-integration.md) | Gemini prompt and response contract |
| [API](docs/api.md) | Server action contract |
| [Data model](docs/data-model.md) | PostgreSQL table definition |
| [Database](docs/database.md) | Schema overview |
| [Database operations](docs/database-operations.md) | Safe schema and database operations |
| [Environment variables](docs/environment-variables.md) | Configuration reference |
| [Testing](docs/testing.md) | Automated and manual verification |
| [CI/CD](docs/ci-cd.md) | GitHub Actions and dependency automation |
| [Deployment](docs/deployment.md) | Production setup |
| [Operations](docs/operations.md) | Monitoring and incident handling |
| [Privacy](docs/privacy.md) | Data categories and retention gaps |
| [Security and privacy](docs/security-and-privacy.md) | Application security controls |
| [Accessibility](docs/accessibility.md) | Interface accessibility expectations |
| [Performance](docs/performance.md) | Performance constraints and measurement plan |
| [Troubleshooting](docs/troubleshooting.md) | Common setup and runtime problems |
| [FAQ](docs/faq.md) | Frequently asked questions |
| [Known limitations](docs/known-limitations.md) | Current product and engineering gaps |\n| [Threat model](docs/threat-model.md) | Application assets, threats, and residual risks |\n| [Data retention](docs/data-retention.md) | Stored data and deletion gaps |\n| [Backup and recovery](docs/backup-and-recovery.md) | Database recovery guidance |\n| [Incident response](docs/incident-response.md) | Incident handling process |\n| [Architecture decisions](docs/adr/README.md) | Architecture decision records |
| [Maintainers](docs/maintainers.md) | Repository maintenance |
| [Release checklist](docs/release-checklist.md) | Release verification |

## Known limitations

The most important current gaps are:
1. The root page is still a starter placeholder.
2. There is no interview-taking route after generation.
3. There is no answer submission, scoring, or feedback flow.
4. There is no interview history interface.
5. There is no user-facing data export or deletion process.
6. AI timeout, retry, quota, and cost controls need further work.
7. CI does not yet run a verified production build or end-to-end tests.

The [Roadmap](ROADMAP.md) tracks planned improvements. Do not treat roadmap items as completed features.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for planned work and [CHANGELOG.md](CHANGELOG.md) for recorded repository changes.

## Contributing

Contributions should include a clear problem statement, focused implementation, appropriate tests, documentation updates, and security/privacy considerations. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Maintainer and license

Maintained by **Brajesh Kumar** ([GitHub: @Brajesh31](https://github.com/Brajesh31)).

This project is distributed under the [MIT License](LICENSE), with copyright attributed to Brajesh Kumar.
