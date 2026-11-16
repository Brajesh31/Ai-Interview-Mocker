# Authentication and authorization

## Provider

The application uses Clerk through `@clerk/nextjs`.

Relevant files:

- `middleware.js`: protects dashboard and forum route patterns.
- `app/(auth)/sign-in/[[...sign-in]]/page.jsx`: sign-in route.
- `app/(auth)/sign-up/[[...sign-up]]/page.jsx`: sign-up route.
- `app/layout.js`: Clerk provider.
- `app/dashboard/actions.js`: server-side identity check for interview creation.

## Environment

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: publishable browser key.
- `CLERK_SECRET_KEY`: private server credential.

Set both in the local environment or deployment secret manager. Configure allowed origins, sign-in URLs, sign-up URLs, and post-authentication redirects in the Clerk dashboard to match the deployment.

## Authentication versus authorization

Authentication answers who the current user is. Authorization determines whether that user may access a particular record.

The interview creation action calls Clerk's server-side `auth()` and requires a non-empty `userId`. It stores that identity as `createdBy`. Future record retrieval and mutation actions must filter by both the record identifier and authenticated owner.

Do not trust a `createdBy`, `userId`, or account identifier supplied by a browser request.

## Route protection

The middleware currently protects `/dashboard(.*)` and `/forum(.*)`. Verify that any new private route is added to the matcher. Middleware is not a replacement for authorization checks inside server actions and data-access functions.

## Security checklist

- [ ] Keep `CLERK_SECRET_KEY` server-only.
- [ ] Do not log session tokens.
- [ ] Protect every private page and server operation.
- [ ] Authorize every record read and mutation.
- [ ] Test signed-out and wrong-owner access.
- [ ] Verify production redirect and allowed-origin configuration.
