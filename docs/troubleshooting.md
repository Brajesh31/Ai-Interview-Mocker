# Troubleshooting

## General diagnosis

1. Reproduce the issue using a development account and synthetic data.
2. Record the route, action, timestamp, Node.js/npm versions, and sanitized error category.
3. Check the environment variable names and service configuration.
4. Check the relevant provider status and application logs.
5. Do not paste credentials, tokens, database URLs, or private interview content into an issue.

## Missing environment variables

Confirm that `.env.local` exists at the project root and contains the required variable names. Restart the development server after changing environment values.

Required variables are documented in [Environment variables](environment-variables.md).

## Clerk authentication errors

Check:
- Publishable and secret keys belong to the same Clerk application.
- The correct development or production instance is selected.
- The deployment hostname is configured in Clerk.
- Sign-in, sign-up, and redirect URLs are correct.
- Middleware protects the intended private route patterns.

Never share a Clerk secret key or session token in a support request.

## Gemini generation errors

Check:
- `GOOGLE_GENERATIVE_AI_API_KEY` is set on the server.
- The key is valid and enabled for the Generative AI API.
- The configured `gemini-1.5-flash` model identifier is still available to the project.
- The account has quota and billing configured where required.
- The response matches the expected JSON shape.

A provider error should not be worked around by exposing the API key to the browser.

## Database errors

Check:
- `DATABASE_URL` points to the intended PostgreSQL database.
- The database is reachable from the current environment.
- The configured credentials have the necessary permissions.
- The Drizzle schema has been applied to the target database.

Use a development database for schema experiments. Do not run schema commands against production without a backup and reviewed change plan.

## npm install or npm ci failures

- Confirm the Node.js and npm versions meet the package requirements.
- Confirm the lockfile is committed and synchronized with `package.json`.
- Use `npm ci` for a clean install when the lockfile is valid.
- Do not delete the lockfile as a first-line fix.
- Inspect the exact npm error before changing dependency versions.

## CI failures

Open the failing GitHub Actions run and identify the failed step. A successful test step does not prove the Next.js build or external service configuration works. Include the run URL and sanitized error excerpt in a maintenance issue.

## Interview creation appears to fail

The form intentionally shows a generic client-side message. Check server logs for the categorized failure without logging user prompts or generated content. Verify authentication first, then Gemini configuration and database connectivity.
