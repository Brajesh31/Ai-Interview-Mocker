# API and server boundaries

The app's server boundaries live under the Next.js app routes and server-side modules. They should:

- authenticate with Clerk;
- authorize access to the current user's records;
- validate request bodies and generated AI output;
- return explicit errors for provider and database failures;
- avoid returning credentials or unnecessary private fields.

Document route-specific request and response shapes here whenever they become stable public contracts.
