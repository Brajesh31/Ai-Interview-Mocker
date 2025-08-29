import { pgTable, text, varchar, serial } from 'drizzle-orm/pg-core';

export const interviews = pgTable('mockinterviews', {
    id: serial('id').primaryKey(),
    mockID: varchar('mock_id', { length: 255 }).notNull(),
    jsonMockResp: text('json_mock_resp').notNull(),
    jobPosition: varchar('job_position', { length: 255 }).notNull(),
    jobDescription: varchar('job_description', { length: 255 }).notNull(),
    jobExperience: varchar('job_experience', { length: 255 }).notNull(),
    createdBy: varchar('created_by', { length: 255 }).notNull(),
    createdAt: varchar('created_at', { length: 255 }).notNull(),
});


