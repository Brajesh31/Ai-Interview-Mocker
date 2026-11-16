# Incident response

## Incident categories

Examples include:
- Suspected credential exposure.
- Unauthorized access to an interview record.
- Clerk authentication outage.
- Gemini API outage or quota exhaustion.
- Database outage or data corruption.
- Unexpected disclosure through application logs.
- Compromised dependency or GitHub Actions workflow.

## Response process

### 1. Triage

Identify the affected service, environment, time window, and user impact. Use sanitized metadata. Do not copy secrets or private interview content into public issues.

### 2. Contain

- Revoke exposed credentials at the provider.
- Restrict affected workflow or account permissions.
- Disable a vulnerable route or operation if necessary.
- Stop destructive database activity when safe.
- Preserve relevant logs and evidence with access controls.

### 3. Recover

Restore valid credentials, revert or patch the affected application, and use the documented database recovery process if needed. Verify the fix with synthetic accounts and records.

### 4. Communicate

Notify affected stakeholders through the operator's approved communication process. Do not speculate about impact before evidence is available.

### 5. Learn

Record the timeline, root cause, impact, containment, recovery, and preventive work. Do not include credentials or unnecessary personal data in the incident report.

## Credential exposure

Deleting a secret from the current source tree is not enough. Rotate it at the provider, replace it in every environment, inspect provider access logs, and assess repository history and forks.

## Current operational limitation

This repository does not include an on-call schedule, alerting system, incident ticket integration, or formal breach-notification procedure. Those operational responsibilities must be defined by the service operator.
