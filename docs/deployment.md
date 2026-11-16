# Deployment guide

## Deployment requirements

The application requires a Node.js-compatible hosting environment and these services:
- Clerk for user authentication.
- Google Generative AI for interview question generation.
- PostgreSQL, preferably a managed service such as Neon, for persistence.

The repository does not currently include a verified production deployment workflow. Treat these steps as deployment guidance, not proof that a deployment has been completed.

## Build and run

```bash
npm ci
npm run build
npm start
```

Use Node.js 20 for deployment unless the hosting platform's supported runtime matrix and the application dependencies have been verified against another version.

## Environment configuration

Configure the following in the host's secret/environment settings:

| Variable | Required | Notes |
|---|---:|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Public Clerk key for the production Clerk instance |
| `CLERK_SECRET_KEY` | Yes | Private Clerk server key |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes | Private Gemini key |
| `DATABASE_URL` | Yes | Production PostgreSQL URL |
| `INTERVIEW_QUESTION_COUNT` | No | Integer from 1 to 30; defaults to 5 |

Do not add production values to `.env.example`. Configure the production domain, allowed origins, sign-in and sign-up URLs, and redirect URLs in Clerk.

## Database preparation

1. Create a production database and a separate staging database.
2. Confirm the production credential has only the permissions required by the application.
3. Review the Drizzle schema and intended change.
4. Back up production data and verify that the backup can be restored.
5. Apply schema changes through a reviewed deployment procedure.
6. Run a smoke test against the deployed application.

The current schema command uses Drizzle Kit push. Do not execute it against production without reviewing the impact and having a rollback plan.

## Deployment verification

- [ ] The deployment uses the intended commit.
- [ ] Required environment variables are configured.
- [ ] Clerk sign-in and sign-up redirects match the production domain.
- [ ] The dashboard is protected.
- [ ] Interview generation works with a controlled test account.
- [ ] The generated record is stored in the intended database.
- [ ] Error logs contain no credentials or private interview content.
- [ ] A rollback path is available.

## Rollback

Prefer reverting to the last known-good application commit. Database schema rollback must be handled separately and must follow the tested database recovery plan. Rolling back application code does not automatically reverse a schema change.
