# ADR 0004: Structured AI response contract

- Status: Accepted
- Date: 2026-11-16

## Context

The application needs generated interview questions and suggested answers in a predictable shape so that it can persist and later render them.

## Decision

Request a JSON object containing a `questions` array. Each entry must include non-empty `question` and `answer` strings. Parse and validate the model output before writing the record.

## Consequences

- Malformed JSON is rejected.
- Missing or empty fields are rejected.
- The response array is bounded.
- The schema can be tested independently of the provider.
- Structural validation does not guarantee factual correctness, relevance, or freedom from bias.

## Revisit when

Revisit the contract if the product adds difficulty levels, question categories, scoring rubrics, user answers, evaluation results, or multiple languages.
