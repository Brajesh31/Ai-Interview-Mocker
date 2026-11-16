# Testing strategy and verification

## Automated test suite

The repository uses Node.js's built-in test runner. The current automated tests cover pure validation helpers in `lib/interview-validation.js`.

Run:

```bash
npm ci
npm test
```

Current test cases cover:
- Trimming and normalization of valid role details.
- Empty and overlong role/description values.
- Experience values outside the allowed integer range.
- Parsing plain JSON and JSON inside Markdown code fences.
- Malformed JSON.
- Empty or oversized question arrays.
- Missing question or answer text.

The test suite does not call Clerk, Gemini, Neon, or a deployed application. A passing test run proves only the tested helper behavior.

## Manual integration checklist

| Area | Test | Expected result |
|---|---|---|
| Public route | Open the root URL | Application responds; current page is a starter placeholder |
| Sign-up | Create a development Clerk user | Clerk completes registration |
| Sign-in | Sign in with a test account | Session is established |
| Protected route | Open dashboard signed out | Middleware prevents access |
| Dashboard | Open while signed in | Dashboard and creation form render |
| Form validation | Submit blank values | Browser/server rejects invalid values |
| Experience validation | Submit decimal, negative, or over-15 value | Server rejects the request |
| Authentication | Invoke action without session | Action rejects before provider/database calls |
| AI generation | Submit valid input with valid Gemini key | Gemini returns a response matching the JSON contract |
| Invalid AI output | Simulate malformed response | Response is rejected and not persisted |
| Persistence | Submit a valid response with working DB | One interview record is stored |
| Database failure | Simulate unavailable DB | Client receives generic failure, not connection details |
| Privacy | Inspect browser assets and logs | No private API key or database URL is exposed |

## Build and static checks

The intended local release checks are:

```bash
npm ci
npm test
npm run build
```

The current GitHub Actions workflow runs dependency installation and unit tests. It does not currently run a production build or live integration tests.

## Test data and credentials

- Use synthetic role descriptions and sample answers.
- Use a dedicated development database.
- Use Clerk development credentials.
- Store provider keys in local environment files or CI secrets.
- Never commit test credentials or real candidate interview data.

## Future test coverage

Before calling the application production-ready, add tests for server-action authorization, provider failures, persistence behavior, ownership filtering on future reads, and the end-to-end authenticated user flow.
