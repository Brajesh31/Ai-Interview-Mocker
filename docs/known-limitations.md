# Known limitations

This file intentionally records gaps so that the README and release notes do not overstate product readiness.

## User-facing product gaps

- The root page is still a starter placeholder, not a finished product landing page.
- The dashboard currently exposes interview creation but not a completed interview history interface.
- There is no implemented route for taking an interview by the returned `mockID`.
- There is no answer submission or interview session state machine.
- There is no automated answer evaluation or feedback report.
- There is no user-facing export or deletion workflow.

## Engineering gaps

- AI provider timeout, retry, and cost-control policies are not implemented.
- There is no integration test against a mocked Clerk, Gemini, and database boundary.
- There is no end-to-end browser test.
- The database schema lacks a unique constraint for `mock_id` and a dedicated index for `created_by`.
- There is no documented backup automation or tested restore procedure.
- The CI workflow currently validates the unit tests only; it does not prove that the Next.js production build succeeds.
- The project does not yet have a verified production deployment pipeline.

## Release rule

Do not describe an item above as available until the relevant code, tests, documentation, and user flow are all present. Update this document when a limitation is resolved and add evidence to the release checklist.
