# Changelog

All notable repository changes are recorded here. This file tracks committed changes and does not imply that planned work has shipped.

## Unreleased

### Added
- Expanded product, user, architecture, authentication, AI, data model, operations, privacy, deployment, and maintainer documentation.
- Added Node.js unit tests for interview input and generated response validation.
- Added GitHub Actions CI, Dependabot configuration, and issue templates.

### Changed
- Moved interview generation and persistence into an authenticated server action.
- Reworked the interview creation form to use the server action and show a safe failure message.
- Rewrote the README to document actual implementation status and known limitations.
- Updated the npm lockfile metadata and CI installation workflow.

### Fixed
- Corrected validation of numeric experience values.
- Corrected parsing of JSON returned inside Markdown code fences.
- Corrected the post-generation navigation target to avoid linking to an unimplemented interview route.

## Release history

No tagged release history is documented in this repository yet. Add a dated release section only when a release has actually been published.
