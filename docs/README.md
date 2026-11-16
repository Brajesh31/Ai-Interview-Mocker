# Documentation index

This directory contains product, engineering, operations, and maintainer documentation for AI Interview Mocker. Guides describe the repository as it exists today. Features that are not implemented are explicitly identified as limitations or future work.

## Product and user documentation

| Guide | Description |
|---|---|
| [Product overview](product-overview.md) | Purpose, current scope, implemented capabilities |
| [User guide](user-guide.md) | Current dashboard and interview creation workflow |
| [Application flow](application-flow.md) | Request lifecycle, trust boundaries, and failure behavior |
| [Known limitations](known-limitations.md) | Product gaps and engineering limitations |\n| [Threat model](threat-model.md) | Assets, trust boundaries, threats, and residual risks |\n| [Data retention](data-retention.md) | Stored data, retention, export, and deletion gaps |

## Engineering documentation

| Guide | Description |
|---|---|
| [Architecture](architecture.md) | Next.js architecture and server/client boundaries |
| [Project structure](project-structure.md) | Source tree and directory responsibilities |
| [Development](development.md) | Local development conventions |
| [API](api.md) | Interview generation server action contract |
| [Authentication](authentication.md) | Clerk setup, route protection, and authorization |
| [AI integration](ai-integration.md) | Gemini configuration, prompt contract, response validation |
| [Data model](data-model.md) | Current PostgreSQL table and schema limitations |
| [Database](database.md) | Database and Drizzle overview |
| [Database operations](database-operations.md) | Development, migration safety, backups |
| [Environment variables](environment-variables.md) | Complete configuration reference |
| [Testing](testing.md) | Automated tests and manual integration matrix |
| [Accessibility](accessibility.md) | Interface accessibility expectations |
| [Performance](performance.md) | Current performance controls and gaps |\n| [Architecture decision records](adr/README.md) | Recorded architectural decisions |

## Operations and governance

| Guide | Description |
|---|---|
| [Installation](installation.md) | Local setup |
| [Deployment](deployment.md) | Production configuration and verification |
| [CI/CD](ci-cd.md) | GitHub Actions and dependency automation |
| [Operations](operations.md) | Monitoring, logging, incident handling |\n| [Incident response](incident-response.md) | Security and service incident process |\n| [Backup and recovery](backup-and-recovery.md) | Database backup and restore expectations |
| [Privacy](privacy.md) | Data categories, provider sharing, retention gaps |
| [Security and privacy](security-and-privacy.md) | Application security practices |
| [Troubleshooting](troubleshooting.md) | Setup, provider, database, and CI diagnosis |
| [FAQ](faq.md) | Common questions |
| [Maintainers](maintainers.md) | Repository ownership and maintenance |
| [Release checklist](release-checklist.md) | Pre-merge and production release checks |

## Root-level project policies

- [README](../README.md)
- [Contributing](../CONTRIBUTING.md)
- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Security Policy](../SECURITY.md)
- [Support](../SUPPORT.md)
- [Roadmap](../ROADMAP.md)
- [Changelog](../CHANGELOG.md)
- [License](../LICENSE)
- [Citation metadata](../CITATION.cff)

## Documentation maintenance rules

1. Update the relevant guide whenever behavior, configuration, schema, or deployment changes.
2. Keep setup commands aligned with `package.json`.
3. Do not document unimplemented routes or controls as available.
4. Keep environment variable names synchronized with `.env.example`.
5. Use synthetic examples and never include real credentials or user interview data.
6. Review links and the documentation index before merging.
