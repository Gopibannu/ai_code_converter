const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function convertCode({
  sourceLanguage,
  targetLanguage,
  code,
  prompt,
}) {
  const systemPrompt = `
You are a code conversion engine.
Rules:
- Output ONLY valid ${targetLanguage} code
- No explanations
- No markdown
- No comments unless required
- Preserve logic exactly
`;

  const userPrompt = `
Convert the following ${sourceLanguage} code to ${targetLanguage}.
${prompt ? `Extra instruction: ${prompt}` : ""}

CODE:
${code}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0,
  });

  let output = response.choices[0]?.message?.content || "";

  // Remove markdown fences if any
  output = output.replace(/```[\s\S]*?```/g, (m) =>
    m.replace(/```/g, "")
  );

  return output.trim();
}

module.exports = { convertCode };