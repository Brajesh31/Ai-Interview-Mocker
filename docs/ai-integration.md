# AI integration

## Provider and implementation

The application uses the Google Generative AI JavaScript SDK through `@google/generative-ai`. The provider configuration lives in `utils/GeminiAiModel.js`, which is marked server-only.

The current configured model identifier is `gemini-1.5-flash`. Model availability and lifecycle can change. Confirm that the identifier is still supported by the Google AI account and SDK before deployment. Changing model identifiers should be tested against the application's expected output contract.

## Configuration

Set `GOOGLE_GENERATIVE_AI_API_KEY` in the server environment. Never use a `NEXT_PUBLIC_` prefix and never expose the key in browser bundles, screenshots, logs, or source control.

## Prompt contract

The server action asks the model to return JSON with this structure:

```json
{
  "questions": [
    {
      "question": "Question text",
      "answer": "Suggested answer text"
    }
  ]
}
```

The question count is controlled by `INTERVIEW_QUESTION_COUNT`, bounded from 1 to 30, with a default of 5.

## Response validation

`parseInterviewQuestions` currently:
- Parses plain JSON and JSON wrapped in a Markdown code fence.
- Requires a `questions` array.
- Requires between 1 and 30 entries.
- Normalizes question and answer values to trimmed strings.
- Rejects entries with an empty question or answer.

The helper does not prove that the answer is factually correct, safe, unbiased, or relevant. Human review and product-level evaluation remain necessary.

## Failure and resilience gaps

The current integration does not yet implement a documented retry policy, explicit provider timeout, request-level cancellation, token/cost accounting, durable AI request tracing, or a fallback provider. Do not claim those controls exist.

When improving the integration:
1. Set an explicit request timeout.
2. Bound input and output size.
3. Handle provider quota and transient failures separately.
4. Avoid retrying invalid prompts or invalid credentials indefinitely.
5. Record operational metadata without storing full candidate content in logs.
6. Test malformed, empty, oversized, and unexpected model responses.
7. Re-evaluate model availability before upgrading the SDK or model.
