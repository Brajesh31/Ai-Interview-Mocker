# Development guide

## Development principles

- Prefer small changes with a clear purpose.
- Preserve the Next.js App Router conventions already used by the project.
- Keep browser components separate from privileged server operations.
- Keep credentials and database access in server-only modules.
- Validate every server action input.
- Validate generated content before persistence or rendering.
- Update documentation whenever behavior or configuration changes.

## Source organization

- `app/`: routes, layouts, and server actions.
- `components/ui/`: reusable UI primitives.
- `lib/`: database connection and pure helpers.
- `utils/`: AI provider configuration and Drizzle schema.
- `test/`: Node.js tests.
- `docs/`: product and engineering documentation.

## Local workflow

```bash
npm ci
npm test
npm run dev
```

Use a dedicated development Clerk application, Gemini key, and database. Do not reuse production records or credentials.

## Client and server boundary

Client components may manage form state and browser interactions. They must not import the database client or private provider configuration. Server actions must independently authenticate the user and validate submitted values. Do not trust an owner ID or record permissions sent from the browser.

## AI changes

When changing the provider, model, prompt, or response format:
1. Update [AI integration](ai-integration.md).
2. Keep the output schema explicit.
3. Add tests for malformed and incomplete responses.
4. Bound input and output size.
5. Handle provider errors without exposing provider details to the client.
6. Confirm the configured model is available before deployment.

## Database changes

When changing `utils/schema.js`:
1. Describe the change in [Data model](data-model.md).
2. Test against a disposable database.
3. Review the generated schema change.
4. Consider existing records and migration compatibility.
5. Define backup and rollback steps before production changes.

## Quality checks

```bash
npm ci
npm test
npm run build
```

The current CI workflow runs tests only. Run a production build locally before proposing a release and report honestly if external configuration prevents it.

## Code style

Follow the surrounding JavaScript/JSX style. Prefer descriptive names, explicit error handling, small functions, and comments that explain non-obvious decisions rather than restating code.

## Pull requests

Follow [CONTRIBUTING.md](../CONTRIBUTING.md) and complete the repository pull request template.
