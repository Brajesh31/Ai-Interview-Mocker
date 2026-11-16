# Maintainer guide

## Repository ownership

The repository is maintained by Brajesh Kumar. Keep changes attributable, reviewable, and aligned with the actual application.

## Branch and pull request process

- Keep `main` in a working state.
- Use focused branches for larger changes.
- Review application code, tests, docs, and workflow changes together.
- Require additional review for authentication, database schema, AI prompt, and secret-handling changes.
- Do not merge a change with failing checks or unresolved security concerns.

## Routine maintenance

### Weekly
- Review Dependabot pull requests.
- Inspect GitHub Actions failures.
- Check provider announcements for relevant model or SDK changes.

### Before dependency upgrades
- Read the upstream release notes.
- Review breaking changes.
- Update `package-lock.json` with npm.
- Run `npm ci`, `npm test`, and `npm run build`.
- Test the affected integration with development credentials.

### Before releases
- Complete [Release checklist](release-checklist.md).
- Confirm the deployed commit and environment variables.
- Verify the database backup and rollback process.
- Test sign-in and interview generation using a synthetic account.

## Credential incidents

Revoke or rotate exposed credentials at their provider immediately. Then replace the value in active environments, inspect provider logs, assess repository history, and document the incident without repeating the secret.

## Documentation ownership

Keep README, environment examples, architecture notes, API contracts, data model, and troubleshooting guidance synchronized with the implementation. Do not leave contradictory statements such as claiming no tests exist after tests have been added.

## Production-readiness status

Do not represent the project as production-ready until the missing interview-taking workflow, authorization tests, provider resilience, retention controls, deployment pipeline, and backup/restore process have been implemented and verified.
