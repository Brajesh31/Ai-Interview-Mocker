# Backup and recovery

## Current status

The repository does not configure automated database backups or demonstrate a tested restore. Backup and recovery must be configured through the database provider and deployment operations before production data is collected.

## Minimum backup policy

The operator should define:
- Backup frequency.
- Retention period.
- Encryption and access controls.
- Geographic or account-level separation where appropriate.
- Recovery point objective (RPO).
- Recovery time objective (RTO).
- Who may request and perform a restore.

Do not invent or advertise specific RPO/RTO values until they are approved and tested.

## Recovery procedure

1. Declare the incident and identify the affected database/environment.
2. Stop destructive operations if it is safe to do so.
3. Identify the last known-good backup or provider recovery point.
4. Restore into an isolated environment first.
5. Verify schema and representative synthetic records.
6. Review data consistency and ownership constraints.
7. Coordinate application connection changes.
8. Resume service only after verification.
9. Record the incident timeline and corrective actions.

## Schema change safety

Before applying a production schema change:
- Review the schema diff.
- Test the change against staging.
- Take a backup and confirm recovery access.
- Plan application/schema deployment order.
- Prepare a rollback or forward-fix path.

## Verification

A backup is not considered reliable until a restore has been tested. Record the date, scope, result, and operator of each restore exercise without copying private interview content into the report.
