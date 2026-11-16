# Project structure

The following tree highlights the principal maintained source and documentation areas. It omits generated and dependency directories.

```text
.
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── AddNewInterview.jsx
│   │   │   └── Header.jsx
│   │   ├── actions.js
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/ui/
├── docs/
├── lib/
│   ├── db.js
│   ├── interview-validation.js
│   └── utils.js
├── public/
├── test/
├── utils/
│   ├── GeminiAiModel.js
│   └── schema.js
├── .github/
├── drizzle.config.js
├── middleware.js
├── package.json
└── README.md
```

## Directory responsibilities

| Path | Responsibility |
|---|---|
| `app/(auth)/` | Clerk sign-in and sign-up pages |
| `app/dashboard/` | Authenticated dashboard and server action |
| `components/ui/` | Reusable UI primitives |
| `lib/` | Server-side infrastructure and pure helpers |
| `utils/` | AI provider and Drizzle schema definitions |
| `test/` | Automated Node.js tests |
| `docs/` | Maintainer and product documentation |
| `.github/` | Issue templates, CI and dependency automation |
| `public/` | Static assets |

The tree reflects the current repository layout. Update it when directories or responsibilities change.
