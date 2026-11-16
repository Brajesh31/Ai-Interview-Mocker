# Performance considerations

## Current architecture

The dashboard uses a Next.js App Router application. Interview generation is a server action that calls an external AI provider and then writes to PostgreSQL. The overall response time is therefore influenced by provider latency and database latency, not only by Next.js rendering.

## Current controls

The current code bounds role and description length, constrains experience values, bounds the configured question count to 1-30, and validates the returned question list before persistence.

## Gaps to address

The repository does not currently implement:
- A documented AI request timeout.
- Retry/backoff behavior for transient provider errors.
- Per-user request quotas or rate limiting.
- AI token and cost accounting.
- Request cancellation when a user leaves the form.
- A measured performance budget or load-test suite.
- A caching strategy for any read-heavy interview views.

## Measurement plan

Measure:
1. Dashboard initial render.
2. Server action total duration.
3. Gemini provider duration and response size.
4. Database insert duration.
5. Failure rates by categorized dependency.
6. Cost and quota consumption per successful generation.

Do not optimize by logging or retaining full interview prompts and answers. Use synthetic workloads for load testing and avoid sending high-volume test traffic to paid AI credentials without a defined budget.
