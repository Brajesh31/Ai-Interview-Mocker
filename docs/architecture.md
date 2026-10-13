# Architecture

The application uses the Next.js App Router for UI and server routes. Clerk provides authentication, Gemini provides AI generation, and Neon/Postgres stores application data through Drizzle ORM.

```text
Browser
  -> Next.js pages/components
  -> authenticated server actions or API routes
      -> Gemini
      -> Drizzle ORM -> Neon/Postgres
```

Keep secrets and external calls server-side. Validate authorization and request data at every persistence or AI boundary.
