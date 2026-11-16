# Release checklist

## Change review

- [ ] The change has a clear scope and user impact.
- [ ] The full diff has been reviewed.
- [ ] No credentials, tokens, or private user records are present.
- [ ] Documentation and environment examples match the implementation.
- [ ] New routes and server actions have authentication and authorization checks.
- [ ] AI output is validated before persistence or rendering.
- [ ] Database changes include a migration and rollback plan.

## Local validation

- [ ] `npm ci` succeeds from a clean checkout.
- [ ] `npm test` passes.
- [ ] `npm run build` succeeds, or the exact blocker is recorded.
- [ ] Relevant manual user flows are tested.
- [ ] Signed-out and wrong-owner access are tested where relevant.
- [ ] Keyboard and responsive behavior are checked.

## Deployment preparation

- [ ] The target commit is known.
- [ ] Production Clerk values and redirect URLs are configured.
- [ ] Gemini API key and model availability are confirmed.
- [ ] Production database URL is configured privately.
- [ ] Database backup is available and restore is understood.
- [ ] Schema changes are reviewed and tested in staging.
- [ ] Rollback plan is ready.

## Post-deployment verification

- [ ] Public route responds.
- [ ] Sign-in and sign-up work.
- [ ] Dashboard access is protected.
- [ ] Interview generation works with a synthetic test account.
- [ ] A record is written to the intended database.
- [ ] Logs contain no secrets or interview content.
- [ ] Deployment and CI status are recorded.

## Release communication

Record the release commit, user-visible changes, known limitations, migration notes, and any follow-up tasks. Do not report an unchecked item as complete.
