# Frequently asked questions

## What does AI Interview Mocker currently do?

An authenticated user can submit a role, description or technology stack, and experience level. The server requests generated questions and suggested answers from Gemini, validates the response shape, and stores the result in PostgreSQL.

## Can I take the generated interview inside the application?

Not yet. The repository currently has no interview-taking route or answer-submission workflow. The generated record is persisted, but the full practice session is not implemented.

## Does the application evaluate my answers?

No. Automated answer evaluation and feedback reports are planned work, not current functionality.

## Which authentication provider is used?

Clerk. Configure a publishable key and a private secret key from the same Clerk application.

## Which AI provider is used?

The Google Generative AI SDK. The configured model identifier is `gemini-1.5-flash`. Confirm that this model remains available to your Google AI project before deployment.

## Which database is supported?

PostgreSQL. The current setup uses Neon and Drizzle ORM.

## How many questions are generated?

The server reads `INTERVIEW_QUESTION_COUNT`. The value is bounded to 1 through 30 and defaults to 5.

## Why does interview generation fail?

Check the server environment, Clerk authentication, Gemini API access and quota, response format, and database connection. The browser intentionally receives a generic error. See [Troubleshooting](troubleshooting.md).

## Can I use production credentials locally?

Use development credentials and a development database. Do not copy production keys or candidate records into local development.

## Where are automated tests?

In `test/interview-validation.test.js`. Run them with `npm test`. They test validation helpers, not live external services.

## Is the project production-ready?

The repository should be treated as an early-stage project. The complete interview-taking flow, history, feedback, retention controls, and verified production deployment pipeline are not yet implemented.
