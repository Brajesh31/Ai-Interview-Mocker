# ADR 0003: PostgreSQL persistence with Drizzle

- Status: Accepted
- Date: 2026-11-16

## Context

Generated interview content must persist beyond the request that creates it. The current codebase includes Neon serverless PostgreSQL and Drizzle ORM.

## Decision

Use PostgreSQL as the persistence layer and Drizzle ORM for schema definitions and database operations.

## Consequences

- The database URL is a server-only environment variable.
- The Drizzle schema is maintained in `utils/schema.js`.
- Schema changes require review and a safe migration process.
- Every user-owned query must enforce ownership in the database operation.
- The current single-table JSON response model may need normalization as session and answer workflows are added.

## Revisit when

Revisit the data model when implementing interview sessions, answer history, scoring, feedback, retention, or reporting.
