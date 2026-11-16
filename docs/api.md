# Server-side operations

## Interview creation

Interview creation is implemented by the `generateInterview` server action in `app/dashboard/actions.js`.

### Input contract
- `jobPosition`: required string, 1-255 characters.
- `jobDescription`: required string, 1-255 characters.
- `jobExperience`: whole number from 0 through 15, received from the form as a string.

### Processing
1. Requires an authenticated Clerk user.
2. Validates and normalizes submitted values.
3. Calls Gemini using a server-side API key.
4. Parses and validates a JSON response containing 1-30 question/answer pairs.
5. Saves the record using the authenticated Clerk user ID as owner.
6. Returns the generated `mockID`.

The client receives a generic error on failure. Do not return provider errors, stack traces, SQL messages, or credentials to the browser.
