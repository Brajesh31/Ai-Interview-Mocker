# ADR 0001: Next.js App Router

- Status: Accepted
- Date: 2026-11-16

## Context

The application uses Next.js for its web interface and server-side operations. The checked-in routes use the App Router directory structure.

## Decision

Continue using the Next.js App Router for pages, layouts, middleware integration, and server actions.

## Consequences

Positive:
- UI routes and server-side operations live in one application.
- Shared layouts and route-level composition are available.
- Server actions can keep privileged operations out of client components.

Trade-offs:
- Client/server boundaries must be explicit.
- Server actions still require authentication, validation, and authorization.
- The application must not assume that hiding a UI control secures a server operation.

## Revisit when

Reconsider this decision if the product requires a separately deployed API, background job service, or workload that cannot be handled reliably in the Next.js runtime.
