# Application flow

## Request lifecycle

```text
Browser
  |
  | Clerk-authenticated session
  v
/dashboard
  |
  | AddNewInterview form
  v
generateInterview server action
  |
  +--> Clerk auth() resolves userId
  |
  +--> validateInterviewInput()
  |
  +--> createInterviewChat()
  |       |
  |       v
  |     Gemini API
  |       |
  |       v
  |     parseInterviewQuestions()
  |
  +--> Drizzle insert
          |
          v
      Neon PostgreSQL
  |
  v
Return mockID to client
```

## Trust boundaries

| Boundary | Input | Required control |
|---|---|---|
| Browser to server action | Form values | Validate types, lengths, and allowed range |
| Clerk session to server | Session identity | Require authenticated user; never accept owner ID from the browser |
| Server to Gemini | Prompt and role details | Keep key server-side; constrain output format and size |
| Gemini to application | Generated text | Treat as untrusted; parse and validate before persistence |
| Server to database | Validated record | Use Drizzle parameterized operations and server-only connection |
| Server response to browser | Interview ID or failure | Return only the minimum required information |

## Ownership

The current create operation sets `createdBy` from the authenticated Clerk `userId`. It does not accept the owner identity from client input.

Any future read, update, delete, export, or history operation must include an ownership predicate. A record identifier by itself is not authorization.

## Failure behavior

- Missing session: reject before calling Gemini or the database.
- Invalid input: reject before spending an AI request.
- Provider error: do not persist a partial result.
- Invalid AI JSON: reject before persistence.
- Database error: return a generic failure to the browser and keep sensitive details out of client-visible errors.

## Current boundary of the flow

The action returns a `mockID`. The repository currently has no matching interview session route. The UI must not imply that a full interview session is available until the corresponding route and workflow have been implemented.
