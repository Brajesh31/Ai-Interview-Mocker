# ADR 0002: Server-only provider and database boundaries

- Status: Accepted
- Date: 2026-11-16

## Context

The application uses private credentials for Gemini and PostgreSQL. Exposing these credentials to browser code would allow unauthorized use or data access.

## Decision

Keep the Gemini SDK configuration and database client in server-only modules. Invoke them from authenticated server-side operations. Client components should call the server action and should not import the database or AI provider modules.

## Consequences

- Secrets remain outside the browser bundle when the boundary is maintained.
- Server actions become the controlled entry point for privileged operations.
- Server actions must authenticate and validate every request.
- Client UI errors should be generic and must not expose provider internals.

## Revisit when

Revisit this decision if provider calls move to a separately authenticated backend service or a dedicated job processor.
