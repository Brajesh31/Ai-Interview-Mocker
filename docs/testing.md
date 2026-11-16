# Testing Guide

## Current status

No automated test suite is currently configured. Lint and build commands do not replace unit or integration tests.

## Required checks

```bash
npm ci
npm run lint
npm run build
```

Run database checks only against a dedicated development database.

## Manual regression matrix

| Area | Scenario | Expected result |
|---|---|---|
| Public page | Open home page | Page renders without errors |
| Authentication | Sign up with test account | Clerk completes sign-up |
| Authentication | Sign in and sign out | Session changes correctly |
| Route protection | Open dashboard while signed out | Clerk blocks or redirects access |
| Interview creation | Submit valid role, description, and experience | Generation starts with visible loading state |
| Input validation | Submit empty or invalid values | Request is rejected with useful feedback |
| AI integration | Use valid provider credentials | Structured interview response is generated |
| AI failure | Simulate invalid key/provider failure | Safe error is shown and retry is possible |
| Database | Save generated interview | Record is stored in development database |
| Database failure | Simulate unavailable database | Failure is handled without exposing connection details |
| Ownership | Attempt to access another user's record | Access is denied |
| Responsive UI | Test narrow and wide viewports | Layout remains usable |
| Privacy | Inspect browser bundle and logs | Secret keys and private interview data are absent |

## Test priorities

1. Extract question parsing and validation into pure server-side functions.
2. Test malformed AI output and missing fields.
3. Test authentication and ownership checks.
4. Test database failure handling.
5. Add component tests after application logic is independently testable.

Use synthetic data only. Never place real candidate answers, tokens, API keys, or production records in fixtures or CI logs.
