import "dotenv/config";

/** @type {import("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL },
};
