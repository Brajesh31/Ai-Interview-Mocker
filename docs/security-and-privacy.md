# Security and Privacy

- Keep Clerk secret keys, Gemini API keys, and database connection strings server-side.
- Never use a `NEXT_PUBLIC_` prefix for private credentials.
- Rotate credentials that have been committed or exposed.
- Authenticate and authorize every record operation.
- Treat model output as untrusted input and validate its structure before use.
- Avoid logging complete interview prompts, answers, or account data.
- Keep production and development databases separate.
- Review schema changes and backups before production updates.

For suspected credential exposure, revoke or rotate the affected credential first. Then review active code, repository history, and provider logs. Report vulnerabilities privately using [SECURITY.md](../SECURITY.md).
