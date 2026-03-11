const axios = require("axios");

const getAIResponse = async (documentText, userQuestion) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: process.env.AI_MODEL || "openai/gpt-oss-20b",
        messages: [
          {
            role: "system",
            content:
              "Answer the user question using only the provided document. If the answer is not found in the document, say 'The document does not contain this information'.",
          },
          {
            role: "user",
            content: `Document Content:\n\n${documentText}\n\nUser Question: ${userQuestion}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error in AI Service:",
      error.response?.data || error.message,
    );
    throw new Error("AI processing failed");
  }
};

module.exports = {
  getAIResponse,
};
