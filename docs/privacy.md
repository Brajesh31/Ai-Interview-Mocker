# Privacy and user data

## Data handled by the current implementation

The interview creation flow handles:
- Clerk user identity, represented by the Clerk user ID.
- Job role supplied by the user.
- Job description or technology stack supplied by the user.
- Years of experience supplied by the user.
- Generated interview questions and suggested answers.
- An application interview identifier and creation timestamp.

The current application stores the serialized generated question/answer response and role metadata in the `mockinterviews` table.

## Data sent to external providers

- Clerk processes authentication and account information.
- Google Generative AI receives the prompt used to generate interview content. The prompt includes the role, description/technology stack, and experience value.
- Neon/PostgreSQL stores the generated response and related metadata.

Review the providers' current privacy terms, data-processing terms, and account settings before production use. This document is not a legal privacy notice.

## Data minimization

- Do not request personal details that are not required to generate practice questions.
- Do not place names, phone numbers, email addresses, or real candidate records in prompt examples.
- Do not log full generated answers or prompts by default.
- Use synthetic data for development and testing.
- Limit database access to the application and authorized maintainers.

## Retention and deletion

The repository does not currently implement user-facing data export, retention controls, or account deletion for interview records. A production deployment must define retention periods, deletion behavior, backup retention, and how user data is handled when a Clerk account is deleted.

## User-facing transparency

Before collecting real user data at scale, publish a privacy notice that identifies the operator, data categories, purposes, provider disclosures, retention periods, user choices, and contact route. Do not present this engineering guide as a substitute for that notice.
