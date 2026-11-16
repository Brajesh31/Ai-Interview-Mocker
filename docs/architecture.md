# Architecture

The project uses the Next.js App Router.

- `app/`: routes, layouts, pages, and server actions.
- `app/dashboard/_components/`: interactive dashboard components.
- `components/ui/`: reusable Radix-based UI primitives.
- `lib/db.js`: server-only Neon and Drizzle database connection.
- `lib/interview-validation.js`: pure input and AI-response validation.
- `utils/GeminiAiModel.js`: server-only Gemini model configuration.
- `utils/schema.js`: Drizzle PostgreSQL table definitions.
- `test/`: Node.js unit tests.
- `.github/workflows/`: CI automation.

Client components own presentation and browser interaction. Server actions own authorization, validation, external provider calls, and database writes. Do not import database clients or private AI configuration into client components.
