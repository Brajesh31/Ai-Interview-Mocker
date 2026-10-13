# Troubleshooting

## Missing environment variables

Confirm `.env.local` exists, contains the required values, and restart the development server after changes.

## Authentication problems

Check Clerk publishable and secret keys, allowed origins, redirect URLs, and middleware configuration.

## AI failures

Check the Gemini key, model availability, request limits, timeouts, and server logs without exposing prompts or private content.

## Database failures

Verify `DATABASE_URL`, network access, schema state, and the selected development database. Run schema commands only against the intended environment.
