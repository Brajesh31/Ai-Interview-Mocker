# Server-side API contract

## Overview

The current application exposes interview creation through a Next.js server action. It does not currently expose a documented REST API for interview retrieval, answer submission, evaluation, or history.

## Interview generation

**Implementation:** `generateInterview` in `app/dashboard/actions.js`

**Invocation:** Imported by the dashboard interview creation client component and called as a server action.

### Input

| Field | Type at boundary | Required | Validation |
|---|---|---:|---|
| `jobPosition` | string | Yes | Trimmed, 1-255 characters |
| `jobDescription` | string | Yes | Trimmed, 1-255 characters |
| `jobExperience` | string | Yes | Whole number from 0 through 15 |

The action accepts a JavaScript object with those fields. It does not accept a caller-supplied `createdBy` value.

### Authentication

The action calls Clerk's server-side `auth()`. If there is no authenticated `userId`, it rejects the request before calling Gemini or the database.

### Generation configuration

The action reads `INTERVIEW_QUESTION_COUNT`. The value is parsed as an integer, bounded to 1-30, and defaults to 5 when absent or invalid.

The AI client is configured in `utils/GeminiAiModel.js` and reads `GOOGLE_GENERATIVE_AI_API_KEY`.

### AI response contract

The model is expected to return:

```json
{
  "questions": [
    {
      "question": "A non-empty question",
      "answer": "A non-empty suggested answer"
    }
  ]
}
```

The parser accepts plain JSON or JSON surrounded by a Markdown code fence. It rejects malformed JSON, a missing or empty questions array, more than 30 entries, and entries without both text fields.

### Persistence

After validation, the action inserts one row into `mockinterviews` with:
- Generated `mockID`.
- Serialized question/answer response.
- Role and description values.
- Experience value.
- `createdBy` from Clerk's authenticated `userId`.
- ISO timestamp string.

### Success response

The action returns an object containing the generated identifier:

```json
{
  "mockID": "generated-identifier"
}
```

The identifier must not be treated as an authorization credential. Any future lookup must also verify record ownership.

### Error behavior

The action can reject for missing authentication, invalid input, invalid AI output, provider errors, or database errors. The client currently shows a generic failure message. Provider messages, stack traces, SQL errors, credentials, and full prompt content must not be returned to the browser.

## Not-yet-implemented operations

The repository currently does not provide:
- A route or API to retrieve an interview by identifier.
- An interview-taking session.
- An endpoint/action to submit user answers.
- An evaluation or feedback operation.
- An interview history query.
- User-facing deletion or export operations.

Do not document or consume these as existing endpoints until implementation and authorization tests are merged.
