# Release checklist

## Before merging
- [ ] Review the complete diff for secrets, generated files, and personal records.
- [ ] Run `npm ci` and `npm test`.
- [ ] Run `npm run build` with appropriate test credentials where required.
- [ ] Confirm private credentials and backend modules are not imported by client components.
- [ ] Confirm ownership and authentication checks on data mutations.
- [ ] Check responsive layouts, keyboard operation, loading, and error states.

## Before production deployment
- [ ] Confirm production environment variables in the hosting provider.
- [ ] Confirm database backups and a rollback procedure.
- [ ] Review schema changes before applying them to production.
- [ ] Verify sign-in, interview generation, persistence, and retrieval.
- [ ] Inspect deployment logs for secrets or candidate information.
- [ ] Record the deployed commit and outstanding operational follow-ups.
