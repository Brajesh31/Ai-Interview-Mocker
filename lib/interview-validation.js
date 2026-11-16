export function validateInterviewInput(input) {
  const jobPosition = String(input?.jobPosition ?? "").trim();
  const jobDescription = String(input?.jobDescription ?? "").trim();
  const experience = String(input?.jobExperience ?? "").trim();
  const experienceNumber = Number(experience);

  if (!jobPosition || jobPosition.length > 255) throw new Error("Job role must contain 1 to 255 characters.");
  if (!jobDescription || jobDescription.length > 255) throw new Error("Job description must contain 1 to 255 characters.");
  if (!/^\\d+$/.test(experience) || !Number.isInteger(experienceNumber) || experienceNumber < 0 || experienceNumber > 15) {
    throw new Error("Experience must be a whole number from 0 to 15.");
  }

  return { jobPosition, jobDescription, jobExperience: String(experienceNumber) };
}

export function parseInterviewQuestions(rawText) {
  const cleaned = String(rawText ?? "").replace(/^```(?:json)?\\s*/i, "").replace(/\\s*```$/, "").trim();
  const parsed = JSON.parse(cleaned);

  if (!Array.isArray(parsed?.questions) || parsed.questions.length === 0 || parsed.questions.length > 30) {
    throw new Error("Expected a questions array containing 1 to 30 entries.");
  }
  const questions = parsed.questions.map((entry) => ({
    question: String(entry?.question ?? "").trim(),
    answer: String(entry?.answer ?? "").trim(),
  }));
  if (questions.some(({ question, answer }) => !question || !answer)) {
    throw new Error("Every question must include question and answer text.");
  }
  return { questions };
}
