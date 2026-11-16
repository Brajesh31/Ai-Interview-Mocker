# Data model

## Current table

The Drizzle schema in `utils/schema.js` defines one PostgreSQL table named `mockinterviews`.

| Property | Database column | Type | Constraints / meaning |
|---|---|---|---|
| `id` | `id` | serial | Primary key |
| `mockID` | `mock_id` | varchar(255) | Application-level interview identifier |
| `jsonMockResp` | `json_mock_resp` | text | Serialized validated question/answer object |
| `jobPosition` | `job_position` | varchar(255) | User-supplied role |
| `jobDescription` | `job_description` | varchar(255) | User-supplied description or stack |
| `jobExperience` | `job_experience` | varchar(255) | Experience value stored as text |
| `createdBy` | `created_by` | varchar(255) | Clerk user ID |
| `createdAt` | `created_at` | varchar(255) | ISO timestamp string |

## Serialization contract

The application serializes an object containing a `questions` array into `json_mock_resp`. Each question entry contains a non-empty `question` and `answer` string.

Consumers must parse the JSON and validate it before rendering. Do not assume database text is valid merely because the current create action validates new writes.

## Important schema limitations

- The table does not currently declare a unique constraint on `mock_id`.
- The schema does not currently define an explicit index on `created_by`.
- The timestamp is stored as a varchar rather than a native timestamp type.
- Experience is stored as varchar rather than an integer.
- There is no separate normalized question, answer, or interview-session table.
- There is no explicit deletion/retention metadata.

These are current observations, not recommendations to change production data immediately. Any schema migration should be reviewed, tested against a disposable database, backed up, and planned for rollback.

## Ownership requirements

Every future lookup or mutation must enforce `created_by = authenticatedUserId` in the database query. Do not load a record by `mock_id` and rely on the UI to hide another user's data.

## Data lifecycle

The repository currently has no self-service retention, export, or account deletion workflow. Define these requirements before collecting real user interview content at scale.
