# Security Policy

## Scope

This policy covers the AI Interview Mocker source code and the repository-maintained workflows. It does not replace the security policies of Clerk, Google, Neon, GitHub, or the hosting provider.

## Reporting a vulnerability

Please report suspected vulnerabilities privately to the maintainer, Brajesh Kumar, through https://github.com/Brajesh31. Do not publish exploit details, credentials, or private user data in a public issue.

Include, where possible:
- Affected route, file, dependency, or workflow.
- Impact and realistic attack scenario.
- Steps to reproduce using synthetic accounts and data.
- Relevant sanitized logs or screenshots.
- Suggested mitigation, if known.

Do not test against other users' accounts or production data without explicit authorization.

## Supported security expectations

The repository should:
- Keep Clerk secret keys, Gemini API keys, and database URLs server-side.
- Avoid exposing secrets through `NEXT_PUBLIC_` environment variables.
- Authenticate users before privileged operations.
- Enforce ownership checks for every user-owned record operation.
- Validate user input and AI-generated content.
- Avoid executing or trusting generated model output.
- Avoid logging tokens, credentials, full prompts, and private interview content.
- Keep dependencies and GitHub Actions maintained.
- Use least-privilege workflow permissions.

## Credential exposure response

If a credential is exposed:
1. Revoke or rotate it at the provider immediately.
2. Replace the value in the hosting environment and any affected secret stores.
3. Review provider access logs for unexpected use.
4. Remove the credential from active source files.
5. Assess repository history and any forks or caches that may retain the value.
6. Document the incident without repeating the secret.

A follow-up commit that deletes a credential does not invalidate the exposed credential.

## Disclosure and remediation

The maintainer will assess reports and coordinate a fix where appropriate. Do not assume a guaranteed response time or publish details before a coordinated fix is available.

## Security limitations

This repository is an early-stage application and has not been represented as independently audited or penetration-tested. Report suspected issues rather than assuming the presence of a control that is not documented and verified.
