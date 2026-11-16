# Threat model

## Scope

This threat model covers the current interview creation path: a signed-in browser submits role details, a Next.js server action calls Gemini, and the result is stored in PostgreSQL.

It is an engineering working document, not a formal security certification or penetration-test report.

## Assets

- Clerk user identity and session.
- Clerk secret key.
- Gemini API key.
- PostgreSQL connection string.
- User-submitted role descriptions and experience values.
- Generated question and answer content.
- Interview identifiers and ownership metadata.
- GitHub repository and workflow permissions.

## Trust boundaries

1. Browser to server action.
2. Clerk session to application authorization.
3. Application server to Gemini.
4. Gemini response to application parser.
5. Application server to PostgreSQL.
6. GitHub workflow to repository and dependency ecosystem.

## Threats and mitigations

| Threat | Potential impact | Current or required mitigation |
|---|---|---|
| Unauthenticated server action call | Unauthorized AI usage or data creation | Require Clerk user ID inside action |
| Forged owner ID | Cross-account data access | Derive owner from server session, never browser input |
| Prompt injection in role details | Model output manipulation | Treat role details as data and validate output; further prompt hardening is needed |
| Malformed AI response | Invalid records or rendering failures | Parse JSON and validate required fields |
| Oversized user input | Excessive request size or provider cost | Enforce field lengths and numeric bounds |
| Exposed provider key | Unauthorized provider usage and cost | Server-only environment variable; rotate exposed keys |
| Exposed database URL | Unauthorized data access | Server-only connection string and credential rotation |
| Insecure future record lookup | Cross-user disclosure | Require owner predicate on every record query |
| Provider quota exhaustion | Interview creation unavailable | Rate limiting and usage controls are still needed |
| Sensitive logging | Disclosure of role details or answers | Avoid logging prompts, answers, tokens, and connection strings |
| Dependency compromise | Code execution or data exposure | Dependabot review and CodeQL analysis; manual dependency review remains required |

## Security assumptions

- Clerk correctly validates sessions.
- Provider credentials are configured in the intended environment.
- The database is not publicly accessible without authentication.
- Hosting platform environment variables are access-controlled.
- Maintainers review workflow permission changes.

## Residual risks

- No application-level rate limiting is implemented.
- No full integration test verifies wrong-owner access for record reads because the read interface is not implemented.
- The AI response validator checks structure, not truthfulness or harmful content.
- No formal penetration test or independent security audit is documented.
- Retention and deletion behavior is not implemented.
- Production monitoring and alerting are not configured in this repository.

## Review triggers

Update this document when authentication, provider calls, database access, user data collection, CI permissions, or interview retrieval is changed.
