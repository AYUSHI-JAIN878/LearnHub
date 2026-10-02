import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import api from "../services/api";

export default function AITutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (e) => {
    e.preventDefault();

    console.log("ASK AI BUTTON CLICKED");

    if (!question.trim()) {
      alert("Pehle question likho!");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending:", question);

      const response = await api.post("/ai/ask", {
        question: question.trim(),
      });

      console.log("AI RESPONSE:", response.data);

      setAnswer(response.data?.answer || "No answer received.");
    } catch (error) {
      console.error("AI ERROR:", error);

      setAnswer(
        error.response?.data?.message ||
          "AI Tutor se response nahi aa raha."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        background: "#f7faf9",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              margin: "0 auto 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              background: "#e8f7f5",
              color: "#078d83",
            }}
          >
            <Sparkles size={32} />
          </div>

          <h1
            style={{
              margin: "10px 0",
              color: "#183247",
              fontSize: "45px",
            }}
          >
            AI Tutor
          </h1>

          <p style={{ color: "#6a8192", fontSize: "17px" }}>
            Ask anything you are learning and get a simple explanation.
          </p>
        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #dce8e5",
            borderRadius: "20px",
            padding: "25px",
          }}
        >
          <form onSubmit={askAI}>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask your learning question..."
              style={{
                width: "100%",
                minHeight: "150px",
                boxSizing: "border-box",
                padding: "18px",
                border: "1px solid #d6e3e0",
                borderRadius: "12px",
                resize: "vertical",
                fontSize: "16px",
                fontFamily: "inherit",
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: "15px",
                padding: "14px 24px",
                border: "none",
                borderRadius: "10px",
                background: "#10948b",
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Send size={17} />

              {loading ? "Thinking..." : "Ask AI"}
            </button>
          </form>

          {answer && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "#f1f8f7",
                borderRadius: "12px",
                color: "#425d70",
                lineHeight: "1.7",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#078d83",
                }}
              >
                ✨ AI Tutor
              </strong>

              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}