# User guide

## Current application scope

This guide documents the features currently represented in the repository. It does not describe planned screens as though they already exist.

## Getting access

1. Open the deployed application URL supplied by its operator, or run the application locally using [Installation](installation.md).
2. Use the sign-in or sign-up page provided by Clerk.
3. After successful authentication, open the protected dashboard.

A working Clerk project and correctly configured redirect URLs are required. Local development should use a Clerk development instance rather than production credentials.

## Creating an interview

1. From the dashboard, select **Add New Interview**.
2. Enter the job role or position. The current server-side limit is 255 characters.
3. Enter a concise job description or technology stack. The current server-side limit is 255 characters.
4. Enter whole-number years of experience from 0 through 15.
5. Submit the form.
6. Wait for the server to validate the details, request generated content, validate the response, and store the result.

The number of generated questions is configured by `INTERVIEW_QUESTION_COUNT`. If it is absent or invalid, the server uses five. The configured value is bounded to the range 1 through 30.

## Error handling

The form shows a generic error when generation fails. The error may be caused by invalid input, a missing or invalid Gemini key, provider availability or quota, an invalid model response, or a database failure.

For local troubleshooting, inspect server logs carefully. Do not paste API keys, database URLs, authentication tokens, full prompts, or private interview content into public issues.

## What is not available yet

The current repository does not contain a complete interview-taking screen, answer submission flow, automated scoring, feedback report, or interview history interface. A generated database record alone does not mean those workflows are available.

See [Known limitations](known-limitations.md) for the implementation gaps and [Roadmap](../ROADMAP.md) for planned work.
