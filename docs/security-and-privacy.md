# Security and privacy controls

## Security boundaries

The browser is an untrusted environment. Authentication, authorization, provider credentials, and database operations must remain server-side.

## Current controls

- Clerk middleware protects dashboard route patterns.
- The interview creation server action checks for an authenticated Clerk user.
- The owner ID is derived from the server-side session.
- Input validation runs on the server.
- AI response parsing validates the expected questions array.
- Database and Gemini modules import `server-only`.
- Environment examples use server-only names for private credentials.

## Required controls for future features

- Filter every record lookup and mutation by the authenticated owner.
- Add rate limiting and abuse controls to expensive AI operations.
- Add provider timeouts and safe failure handling.
- Define retention, deletion, and export behavior.
- Add integration tests for wrong-owner access.
- Review logs and monitoring for personal data leakage.

## Secrets

Never commit:
- Clerk secret keys.
- Gemini API keys.
- Database URLs.
- Session tokens.
- Production data or private user records.

If a secret is exposed, rotate it at the provider first. Deleting it from the current branch is not sufficient.

## AI-specific risks

Model output is untrusted. Validate the structure, length, and values before storing or rendering it. Do not execute generated code or treat content in role descriptions as privileged instructions. The current validation helper checks JSON shape but does not establish factual accuracy or eliminate bias.

## Privacy

The AI prompt contains role information supplied by the user and is sent to Google Generative AI. Generated question/answer content is persisted in PostgreSQL. Avoid sending personal identifiers or real candidate data. The current application does not implement self-service export or deletion.

For the operational data inventory and retention gaps, see [Privacy](privacy.md). For reporting a vulnerability, see [SECURITY.md](../SECURITY.md).
