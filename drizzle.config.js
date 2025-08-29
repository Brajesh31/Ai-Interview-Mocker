import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

/** @type {import('drizzle-kit').Config} */
export default {
  schema: './utils/schema.js',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://neondb_owner:npg_wYpTuDeq6B7E@ep-noisy-bar-a5owkyyf-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
  }
};