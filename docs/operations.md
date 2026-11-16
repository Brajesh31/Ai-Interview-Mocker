# Operations guide

## Operational dependencies

The current application depends on:
- Next.js runtime and hosting platform.
- Clerk authentication and session service.
- Google Generative AI API.
- Neon/PostgreSQL database.
- GitHub Actions for repository CI.

An outage or configuration error in any external dependency can affect interview creation.

## Signals to monitor

Monitor operational metadata such as:
- Application request error rate and latency.
- Authentication failures and Clerk configuration errors.
- Gemini provider status, quota failures, latency, and malformed response frequency.
- Database connection errors and write failures.
- CI failure rate and dependency update activity.

Do not collect more personal data than needed to diagnose the issue.

## Logging rules

Safe operational logs may include request correlation IDs, route names, status codes, durations, and categorized provider errors.

Do not log:
- Clerk session tokens or secret keys.
- Gemini API keys or database URLs.
- Full prompts containing user-supplied role descriptions.
- Full generated answers or candidate interview content.
- Raw authentication headers or private account details.

Sanitize provider error messages before logging because upstream exceptions can contain request metadata.

## Incident handling

1. Identify the affected dependency and time window.
2. Check sanitized application and provider status information.
3. Avoid copying user content or credentials into tickets.
4. If a credential may be exposed, revoke or rotate it immediately.
5. If the database is affected, preserve evidence and use the backup/restore procedure.
6. Record the root cause and preventive action after recovery.

## Current operational gaps

The repository does not currently include an observability integration, alert rules, automated backup workflow, or tested disaster-recovery runbook. These must be implemented and verified before the service is treated as production-operated.
