require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const openaiResponse = async () => {
  const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    reasoning_effort: "none",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Who is lebron James",
      },
    ],
  });

  console.log(response.choices[0].message.content);
};
openaiResponse();
