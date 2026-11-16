# Security Policy

Report suspected vulnerabilities privately to the repository maintainer, Brajesh Kumar, through https://github.com/Brajesh31. Do not publish exploitable details in a public issue.

Include the affected component, impact, reproduction steps, and suggested mitigation. Use synthetic data and redact credentials.

- Keep Clerk secret keys, Gemini API keys, and database URLs in private server-side configuration.
- Never commit `.env.local`, production database URLs, or credentials.
- Do not use `NEXT_PUBLIC_` for secret values.
- Keep AI and database calls behind server-side boundaries.
- Authorize every record operation against the authenticated user.
- Validate user input and AI-generated output.
- Avoid logging complete interview prompts, answers, or account data.
- Rotate credentials immediately if exposed.
