# Installation

Requirements: Node.js 18.18 or newer, npm, Clerk, Gemini, and Neon/Postgres credentials.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Use a development database and a non-production Clerk instance for local work.
