require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const geminiai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const aiPrompt = async () => {
  const { text: responseText } = await geminiai.models.generateContent({
    model: `gemini-2.5-flash`,
    contents: `Who is Lebron James?`,
  });
  console.log(responseText);
};

aiPrompt();
