require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const geminiai = new GoogleGenAI({});

const aiPrompt = async () => {
  const { text: responseText } = await geminiai.models.generateContent({
    model: `gemini-2.5-flash`,
    contents: `Who is Lebron James?`,
    // disable thinking
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });
  console.log(responseText);
};

aiPrompt();
