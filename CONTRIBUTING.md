# Contributing to AI Interview Mocker

Thank you for considering a contribution. This repository is an early-stage application, so accuracy, security, and clear documentation matter more than adding features quickly.

## Contents

- [Before starting](#before-starting)
- [Development setup](#development-setup)
- [Branch and commit conventions](#branch-and-commit-conventions)
- [Implementation expectations](#implementation-expectations)
- [Security and privacy requirements](#security-and-privacy-requirements)
- [Testing requirements](#testing-requirements)
- [Documentation requirements](#documentation-requirements)
- [Pull request checklist](#pull-request-checklist)
- [Review process](#review-process)

## Before starting

1. Read the [README](README.md) and relevant guides in [docs/](docs/README.md).
2. Search existing issues and pull requests to avoid duplicate work.
3. For a significant change, open an issue describing the problem and proposed approach before implementation.
4. Do not start work that requires provider credentials you do not have.
5. Do not use production user data for development or tests.

## Development setup

Requirements:
- Node.js 20 recommended.
- npm 9 or newer.
- Development Clerk credentials for authentication work.
- A development Gemini API key for AI integration work.
- A dedicated development PostgreSQL database for persistence work.

Setup:

```bash
git clone https://github.com/Brajesh31/Ai-Interview-Mocker.git
cd Ai-Interview-Mocker
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, replace the copy command with:

```powershell
Copy-Item .env.example .env.local
```

Fill in the local environment values. Never commit `.env.local`.

## Branch and commit conventions

Use a focused branch for each change. Suggested branch prefixes:
- `feature/` for user-facing capability.
- `fix/` for a defect.
- `docs/` for documentation.
- `test/` for test coverage.
- `chore/` for maintenance and dependency work.

Use clear commit messages, preferably in the Conventional Commits style, such as:
- `feat: add interview history view`
- `fix: enforce interview ownership`
- `docs: explain database setup`
- `test: cover malformed AI output`

Avoid combining unrelated refactors, dependency upgrades, and feature work in one pull request.

## Implementation expectations

### Application architecture
- Keep database connections and provider credentials in server-only modules.
- Keep client components focused on UI and browser interaction.
- Put privileged work behind authenticated server actions or server-side handlers.
- Do not trust browser-supplied user IDs or ownership fields.
- Add explicit ownership predicates to every future record read, update, and delete operation.

### Input and AI output
- Validate all user input on the server, even when browser controls also validate it.
- Bound string lengths and numeric ranges.
- Treat generated AI text as untrusted data.
- Validate the expected JSON shape before storing or rendering generated content.
- Do not execute generated code or treat model output as instructions for privileged operations.

### Database
- Update schema documentation with schema changes.
- Use a development database for experiments.
- Explain migration impact and rollback strategy.
- Do not run schema push commands against production as part of an unreviewed pull request.

### User experience
- Associate form labels with controls.
- Provide visible loading and error states.
- Preserve keyboard accessibility and focus behavior.
- Test narrow and wide viewports.
- Do not claim a feature works unless its full user flow is implemented.

## Security and privacy requirements

- Never commit API keys, database URLs, session tokens, or private environment files.
- Never add secrets to `NEXT_PUBLIC_` variables.
- Never include real candidate answers or account data in fixtures, screenshots, or issues.
- Avoid logging full prompts and generated responses.
- Report suspected vulnerabilities privately using [SECURITY.md](SECURITY.md).

## Testing requirements

Run the checks relevant to your change:

```bash
npm ci
npm test
npm run build
```

The current automated suite covers pure input and response validation helpers. It does not replace integration or end-to-end testing. If a change affects authentication, database access, AI integration, or a user flow, include a manual verification description and explain any test gap.

Do not mark a check as passed if it was not run. If an external credential is unavailable, state which integration could not be verified.

## Documentation requirements

Update documentation when changing:
- Environment variable names or defaults.
- Authentication or route protection.
- AI provider, model, prompt, or output format.
- Database schema or persistence behavior.
- User-visible workflows.
- CI, deployment, or operational behavior.

Keep [README.md](README.md), `.env.example`, and the [documentation index](docs/README.md) synchronized.

## Pull request checklist

- [ ] The change addresses one clearly described problem.
- [ ] Existing behavior is preserved unless the change explicitly alters it.
- [ ] No credentials or private user data are included.
- [ ] Server-side authorization is enforced where required.
- [ ] User input and AI output are validated.
- [ ] Relevant automated tests are added or updated.
- [ ] `npm test` passes.
- [ ] `npm run build` was run, or the reason it could not be run is stated.
- [ ] Documentation and environment examples are updated.
- [ ] Accessibility and responsive behavior were considered.
- [ ] Database impact and rollback requirements are described.

## Review process

Maintainers may request changes, ask for tests, or close a proposal that is out of scope or unsafe. A pull request is not considered complete merely because files were added. It must be reviewed for correctness, maintainability, security, documentation accuracy, and test evidence.
