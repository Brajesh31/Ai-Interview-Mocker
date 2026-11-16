# Environment variables

Copy `.env.example` to `.env.local` for local development and configure production values in the hosting provider's secret manager.

| Name | Required | Purpose |
|---|---:|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Browser-safe Clerk publishable key |
| `CLERK_SECRET_KEY` | Yes | Private Clerk server credential |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes | Private Google Generative AI credential |
| `DATABASE_URL` | Yes | Private PostgreSQL connection string |
| `INTERVIEW_QUESTION_COUNT` | No | Number of questions, bounded to 1-30, defaults to 5 |

Only the Clerk publishable key should use the `NEXT_PUBLIC_` prefix. Never put API keys or database credentials in client-visible variables. Do not commit `.env.local`, paste credentials into issues, or print them in logs.
