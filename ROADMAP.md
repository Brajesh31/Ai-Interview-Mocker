# Roadmap

This roadmap describes proposed work. Items are not implemented until their code, tests, and user-facing behavior are merged and verified.

## Priority 0: Complete the core interview experience

- [ ] Implement an interview session route keyed by the generated interview identifier.
- [ ] Load interview records only when they belong to the authenticated user.
- [ ] Build a question-by-question practice interface.
- [ ] Add answer submission and session state handling.
- [ ] Persist user answers without exposing other users' records.
- [ ] Add a clear completion state.

## Priority 1: Feedback and history

- [ ] Add an interview history page with pagination.
- [ ] Add AI-assisted answer feedback with an explicit response schema.
- [ ] Distinguish suggested answers from user-submitted answers.
- [ ] Provide feedback on correctness, clarity, relevance, and areas to improve.
- [ ] Allow users to delete their interview records.

## Priority 2: Reliability and security

- [ ] Add server-action integration tests for signed-out requests.
- [ ] Add ownership tests for every record lookup and mutation.
- [ ] Add Gemini request timeouts and transient-failure handling.
- [ ] Add rate limits and per-user usage controls.
- [ ] Add AI request cost and quota visibility.
- [ ] Add database backup and restore automation.
- [ ] Define retention and account-deletion behavior.

## Priority 3: Product quality

- [ ] Replace the starter home page with a finished product landing page.
- [ ] Add loading, empty, retry, and error states across all flows.
- [ ] Improve accessibility and verify keyboard/screen-reader operation.
- [ ] Add responsive end-to-end browser tests.
- [ ] Add a verified production build and deployment pipeline.
- [ ] Add monitoring and alerting without collecting private interview content.

## Prioritization rule

Prioritize security, ownership, and completion of the core interview session before adding cosmetic features or unrelated integrations.
