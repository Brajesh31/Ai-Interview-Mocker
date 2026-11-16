# Architecture decision records

Architecture decision records (ADRs) capture the reasoning behind important technical choices. They describe the current implementation and its trade-offs, not an endorsement that the choices are permanent.

| ADR | Decision |
|---|---|
| [0001](0001-nextjs-app-router.md) | Use the Next.js App Router for the web application |
| [0002](0002-server-only-boundaries.md) | Keep provider credentials and database access server-side |
| [0003](0003-postgresql-persistence.md) | Persist generated interview data in PostgreSQL through Drizzle |
| [0004](0004-ai-response-contract.md) | Validate a structured JSON response from the AI provider |

Create a new ADR when a change materially alters routing, persistence, authentication, provider architecture, or data ownership.
