# Maintainer guide

## Ownership
The repository is maintained by Brajesh Kumar. Keep changes focused, attributable, and reviewable.

## Branch and pull request process
- Keep `main` deployable.
- Use short-lived branches for significant changes.
- Describe user impact, implementation, validation performed, and configuration changes.
- Do not merge changes with failing required checks or unresolved security concerns.

## Routine maintenance
- Review Dependabot updates weekly.
- Inspect GitHub Actions after dependency and workflow changes.
- Review authentication, AI provider, and database SDK changes before upgrades.
- Keep `package-lock.json` synchronized with `package.json`.
- Check imports and route usage before removing files.

## Credential incidents
If a key is exposed, revoke or rotate it at the provider immediately. Remove it from active code and audit access logs. Deleting a key in a later commit does not make the exposed credential safe.
