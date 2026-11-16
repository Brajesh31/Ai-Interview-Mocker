import test from "node:test";
import assert from "node:assert/strict";
import { validateInterviewInput, parseInterviewQuestions } from "../lib/interview-validation.js";

test("trims and normalizes valid interview input", () => {
  assert.deepEqual(validateInterviewInput({jobPosition:" Backend Engineer ",jobDescription:" Node, SQL ",jobExperience:"3"}), {jobPosition:"Backend Engineer",jobDescription:"Node, SQL",jobExperience:"3"});
});
test("rejects blank and overlong role details", () => {
  assert.throws(() => validateInterviewInput({jobPosition:" ",jobDescription:"Node",jobExperience:"2"}));
  assert.throws(() => validateInterviewInput({jobPosition:"Dev",jobDescription:"x".repeat(256),jobExperience:"2"}));
});
test("rejects invalid experience", () => {
  for (const jobExperience of ["-1","1.5","16","five",""]) assert.throws(() => validateInterviewInput({jobPosition:"Dev",jobDescription:"Node",jobExperience}));
});
test("parses plain and fenced JSON", () => {
  const payload={questions:[{question:"What is a closure?",answer:"A function with its lexical environment."}]};
  assert.deepEqual(parseInterviewQuestions(JSON.stringify(payload)),payload);
  assert.deepEqual(parseInterviewQuestions("```json\n"+JSON.stringify(payload)+"\n```"),payload);
});
test("rejects malformed, empty, oversized and incomplete AI responses", () => {
  assert.throws(() => parseInterviewQuestions("not json"));
  assert.throws(() => parseInterviewQuestions('{"questions":[]}'));
  assert.throws(() => parseInterviewQuestions(JSON.stringify({questions:Array.from({length:31},()=>({question:"Q",answer:"A"}))})));
  assert.throws(() => parseInterviewQuestions('{"questions":[{"question":"Q","answer":""}]}'));
});
