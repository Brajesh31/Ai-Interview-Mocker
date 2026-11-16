# Product overview

## Purpose

AI Interview Mocker is an early-stage web application intended to help an authenticated user prepare for a job interview by generating role-specific questions and suggested answers with a generative AI model.

The current checked-in implementation is narrower than a complete interview-preparation product. It includes a Clerk-protected dashboard, an interview creation form, a server action that requests question-and-answer content from Gemini, validation of the generated JSON, and persistence of the generated payload to PostgreSQL through Drizzle ORM.

## Implemented capabilities

| Capability | Implementation | Current status |
|---|---|---|
| User authentication | Clerk sign-in/sign-up routes and Clerk middleware | Present |
| Protected dashboard | `/dashboard` route protected by middleware | Present |
| Interview creation form | Dashboard client component | Present |
| Input validation | Server-side pure validation helper | Present |
| AI question generation | Google Generative AI SDK, configured Gemini model | Present, requires credentials |
| AI response validation | JSON parser and question/answer shape checks | Present |
| Interview persistence | Neon PostgreSQL and Drizzle schema | Present, requires database |
| Interview-taking screen | No route is currently implemented | Not implemented |
| Interview scoring or feedback | No scoring workflow is currently implemented | Not implemented |
| Interview history list | No history view is currently implemented | Not implemented |
| User data export/deletion UI | No self-service workflow is currently implemented | Not implemented |

## Primary user flow today

1. The visitor opens the application.
2. The user signs in through Clerk.
3. Clerk middleware protects the dashboard.
4. The user opens the interview creation dialog.
5. The user enters a role, role description/technology stack, and years of experience.
6. The server action validates the input and confirms the Clerk user identity.
7. The server sends a prompt to the configured Gemini model.
8. The response is parsed and checked for question/answer entries.
9. The validated response is stored in the configured PostgreSQL database.
10. The server returns the generated interview identifier.

The current dashboard flow does not yet provide a complete next step for taking the generated interview. Do not advertise the application as having a working interview session, answer evaluation, feedback report, or history feature until those features are implemented and tested.

## Intended audience

The intended users are students, graduates, and job seekers who want practice material tailored to a role or technology stack. This is a product direction, not evidence of a production user base or validated market adoption.

## Product principles

- Make generated material relevant to the supplied role and experience level.
- Keep authentication, AI credentials, and database access on the server.
- Validate AI output before storing or rendering it.
- Make failures understandable without exposing secrets or provider internals.
- Treat interview content as personal data and minimize retention and logging.
- Clearly distinguish implemented capabilities from planned work.

## Related documentation

- [User guide](user-guide.md)
- [Application flow](application-flow.md)
- [Architecture](architecture.md)
- [Known limitations](known-limitations.md)
- [Roadmap](../ROADMAP.md)
