# Contributing

Read the README and relevant guides in `docs/` before changing code. Review [SECURITY.md](SECURITY.md) and [docs/security-and-privacy.md](docs/security-and-privacy.md).

## Development setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local`.

Never commit `.env.local`, credentials, production data, or real candidate interview content.

## Change expectations

- Keep changes focused and explain the user-visible outcome.
- Keep secrets, database access, and privileged AI requests server-side.
- Enforce ownership checks for user records.
- Validate model output before persisting it.
- Update documentation when configuration, schema, or behavior changes.
- Do not add generated folders such as `.next/` or `node_modules/`.

## Validation

```bash
npm run lint
npm run build
```

Use synthetic data when testing. Include purpose, implementation notes, configuration changes, schema impact, validation evidence, and security/privacy considerations in pull requests.
