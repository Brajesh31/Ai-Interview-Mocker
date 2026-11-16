# Continuous integration and delivery

## Workflows

The repository currently contains three maintained GitHub Actions workflows.

| Workflow | File | Trigger | Purpose |
|---|---|---|---|
| CI | `.github/workflows/ci.yml` | Push and pull request to `main` | Clean dependency install and unit tests |
| Documentation | `.github/workflows/docs.yml` | Markdown changes and relevant config changes | Markdown lint |
| CodeQL | `.github/workflows/codeql.yml` | Push, pull request, weekly schedule | JavaScript/TypeScript static security analysis |

Dependabot is configured in `.github/dependabot.yml` to propose weekly npm and GitHub Actions dependency updates.

## CI workflow

The CI workflow:
1. Checks out the commit.
2. Sets up Node.js 20 and npm caching.
3. Runs `npm ci` using the committed lockfile.
4. Runs `npm test`.

The job uses read-only repository contents permissions and cancels superseded runs for the same workflow/ref group.

## Documentation workflow

The documentation workflow runs Markdown lint when Markdown files or the Markdown lint configuration change. The lint configuration disables a small number of formatting rules to accommodate the current document style. Remaining Markdown lint rules are enforced by the action.

## CodeQL workflow

CodeQL analyzes JavaScript and TypeScript on pushes, pull requests, and a weekly schedule. The job receives only the permissions needed to read source and publish security analysis results.

## What passing checks prove

- CI success proves dependency installation from the lockfile and the current unit tests succeeded.
- Documentation success proves Markdown lint completed successfully for the files selected by the workflow.
- CodeQL success means the configured static analysis job completed. It is not a complete security audit.

None of these checks proves live Clerk, Gemini, or PostgreSQL connectivity, production build success, or deployed user-flow correctness.

## Dependency update review

Review Dependabot pull requests for:
- Breaking changes and provider SDK compatibility.
- Next.js and React peer dependency constraints.
- Authentication and database client behavior.
- Security advisories and transitive dependency changes.

Run the relevant tests and build checks before merging updates.

## Deployment status

There is no verified automatic production deployment workflow in this repository. Deployment remains a separately configured operational process described in [Deployment](deployment.md).

## Workflow maintenance

- Keep permissions minimal.
- Pin actions to stable major versions or immutable SHAs according to repository policy.
- Never expose production secrets to untrusted pull-request code.
- Keep logs free of environment values and user interview content.
- Investigate failed jobs using the exact failing step rather than weakening checks to force a green result.
