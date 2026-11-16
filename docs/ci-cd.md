# Continuous integration and delivery

## Current workflow

The workflow at `.github/workflows/ci.yml` runs on pushes to `main` and pull requests targeting `main`.

Current steps:
1. Check out the repository.
2. Set up Node.js 20.
3. Install dependencies.
4. Run `npm test`.

The workflow has read-only repository permissions and uses concurrency cancellation to avoid wasting runner time on superseded commits.

## What a green run means

A successful run means the configured unit tests passed in the runner environment. It does not prove:
- the production Next.js build succeeds;
- Clerk credentials and redirect settings are valid;
- Gemini credentials and model availability are valid;
- Neon connectivity and schema are correct;
- a deployment is healthy.

## Dependency updates

Dependabot checks npm dependencies and GitHub Actions weekly. Review each update rather than merging blindly. Check release notes and run the test/build process after dependency changes.

## Branch and release policy

- Keep `main` in a releasable state.
- Require review of changes to authentication, database schema, AI prompt handling, and CI permissions.
- Do not put production secrets in repository variables that are exposed to untrusted pull requests.
- Do not grant write permissions to workflows unless the job needs them.
- Inspect workflow logs for accidentally printed environment values.

## Future improvements

A stronger pipeline should add a working production build with safe placeholder configuration, linting, Markdown checks, CodeQL analysis, and deployment verification. Add each check only after confirming it works for this repository.
