# Data retention and deletion

## Current stored data

The current interview creation action stores one record containing:
- Clerk user ID.
- Job role.
- Job description or technology stack.
- Experience value.
- Generated questions and suggested answers.
- Application interview identifier.
- Creation timestamp.

The record is stored in the `mockinterviews` table. See [Data model](data-model.md).

## Current implementation status

The repository does not currently implement:
- User-configurable retention periods.
- Automatic expiry or purge jobs.
- User-facing deletion.
- User-facing export.
- Account deletion integration with Clerk.
- Backup expiry or deletion guarantees.

Do not claim that interview data is automatically deleted when a user deletes their Clerk account.

## Requirements before production use

A production service should define:
1. The purpose and retention period for each stored field.
2. How users request export or deletion.
3. How deletion propagates to primary storage, replicas, logs, and backups.
4. How account deletion is coordinated with Clerk.
5. How long backups are retained and when deleted records age out.
6. How legal holds or security incidents affect deletion.
7. How deletion requests are audited without retaining the deleted content.

## Data minimization

Collect only the role details required for question generation. Do not ask users to submit real candidate names, contact details, employer confidential data, or personal identifiers unless a separately reviewed product requirement exists.

## Testing

Use synthetic data to test deletion and retention behavior. When a deletion workflow is implemented, verify the record is inaccessible immediately and is removed from each storage layer according to the documented retention schedule.
