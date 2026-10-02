import "dotenv/config";

export async function askAI(req, res) {
  try {
    const { question } = req.body;

    if (!question?.trim()) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "Gemini API key is not configured.",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are LearnHub AI Tutor.

Help the student understand their question clearly and simply.

Rules:
- Give a concise but useful explanation.
- Use simple language.
- Give examples when helpful.
- For programming questions, include small code examples when appropriate.
- Do not make up information.
- Stay focused on the student's question.

Student question:
${question.trim()}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);

      return res.status(500).json({
        message:
          data?.error?.message || "Gemini AI request failed.",
      });
    }

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      return res.status(500).json({
        message: "Gemini did not return an answer.",
      });
    }

    res.json({
      answer,
    });
  } catch (error) {
    console.error("AI Tutor Error:", error);

    res.status(500).json({
      message: "AI Tutor is unavailable right now.",
    });
  }
}