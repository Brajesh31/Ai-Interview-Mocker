# Frequently asked questions

## What does the application do?

It helps authenticated users create and practice AI-assisted interviews.

## Which services are required?

Clerk for authentication, Gemini for generation, and Neon/Postgres for persistence.

## Are secrets safe in client components?

No. Keep secret keys and database URLs server-side.

## Can interview content be logged?

Avoid raw content in logs. Treat interview answers and account data as sensitive.
