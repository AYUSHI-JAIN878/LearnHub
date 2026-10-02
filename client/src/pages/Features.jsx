import { useState } from "react";

const features = [
  {
    id: 1,
    icon: "📚",
    title: "Interactive Courses",
    short: "Learn through structured and practical courses.",
    description:
      "Explore carefully structured courses with lessons, topics and practical learning material. Choose a course and continue learning at your own pace.",
    points: [
      "Structured lessons",
      "Beginner to advanced levels",
      "Practical learning",
      "Course progress tracking",
    ],
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI Learning Assistant",
    short: "Get help when you are stuck while learning.",
    description:
      "Use the LearnHub AI assistant to understand difficult concepts, ask questions and get simple explanations while studying.",
    points: [
      "Ask learning questions",
      "Simple explanations",
      "Concept clarification",
      "Study assistance",
    ],
  },
  {
    id: 3,
    icon: "📈",
    title: "Progress Tracking",
    short: "Keep track of your learning journey.",
    description:
      "Monitor your learning progress and understand how much of your course you have completed.",
    points: [
      "Track completed lessons",
      "Monitor course progress",
      "Continue where you stopped",
      "Learning overview",
    ],
  },
  {
    id: 4,
    icon: "🎯",
    title: "Personalized Learning",
    short: "Learn according to your goals and level.",
    description:
      "Find courses based on your interests, current skill level and learning goals.",
    points: [
      "Beginner friendly courses",
      "Intermediate learning",
      "Advanced topics",
      "Goal-based learning",
    ],
  },
  {
    id: 5,
    icon: "💻",
    title: "Practical Projects",
    short: "Turn what you learn into real projects.",
    description:
      "Practice your skills by working on practical projects related to the concepts you learn.",
    points: [
      "Real-world practice",
      "Project-based learning",
      "Build your portfolio",
      "Apply concepts",
    ],
  },
  {
    id: 6,
    icon: "🏆",
    title: "Achievements",
    short: "Stay motivated as you learn.",
    description:
      "Complete learning milestones and celebrate your progress as you move forward.",
    points: [
      "Learning milestones",
      "Course completion",
      "Achievement tracking",
      "Motivation system",
    ],
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="features-page">
      <style>{`
        .features-page {
          min-height: calc(100vh - 80px);
          background: #f7faf9;
          color: #183247;
          padding: 55px 0 80px;
        }

        .features-container {
          width: min(1160px, calc(100% - 40px));
          margin: auto;
        }

        .features-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px;
        }

        .features-label {
          display: inline-block;
          margin-bottom: 14px;
          color: #078d83;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .features-header h1 {
          margin: 0 0 18px;
          font-size: clamp(38px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -1.5px;
        }

        .features-header p {
          margin: 0;
          color: #6a8192;
          font-size: 18px;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .feature-card {
          background: white;
          border: 1px solid #dce8e5;
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          transition: .25s ease;
          box-shadow: 0 5px 18px rgba(24,50,71,.04);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: #a9d5d0;
          box-shadow: 0 16px 35px rgba(24,50,71,.10);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #e8f7f5;
          font-size: 30px;
          margin-bottom: 20px;
        }

        .feature-card h2 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .feature-card p {
          margin: 0 0 22px;
          color: #6a8192;
          line-height: 1.55;
          font-size: 14px;
        }

        .feature-link {
          color: #078d83;
          font-size: 14px;
          font-weight: 800;
        }

        .feature-details {
          margin-top: 35px;
          background: white;
          border: 1px solid #dce8e5;
          border-radius: 22px;
          padding: 35px;
          box-shadow: 0 10px 30px rgba(24,50,71,.06);
          animation: showDetails .25s ease;
        }

        @keyframes showDetails {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .details-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .details-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .details-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #e8f7f5;
          font-size: 30px;
        }

        .details-title h2 {
          margin: 0;
          font-size: 28px;
        }

        .close-button {
          border: none;
          background: #f1f5f4;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
        }

        .feature-details > p {
          color: #657d8e;
          line-height: 1.7;
          margin: 25px 0;
        }

        .points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .point {
          padding: 14px 16px;
          background: #f5f9f8;
          border-radius: 10px;
          color: #385568;
          font-weight: 600;
        }

        .point span {
          color: #078d83;
          margin-right: 8px;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .features-container {
            width: min(100% - 28px, 1160px);
          }

          .points {
            grid-template-columns: 1fr;
          }

          .feature-details {
            padding: 24px;
          }
        }
      `}</style>

      <main className="features-container">
        <header className="features-header">
          <div className="features-label">LEARNHUB FEATURES</div>

          <h1>Everything you need to learn better.</h1>

          <p>
            LearnHub brings courses, smart learning tools and progress
            tracking together in one simple learning platform.
          </p>
        </header>

        <section className="features-grid">
          {features.map((feature) => (
            <article
              className="feature-card"
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h2>{feature.title}</h2>

              <p>{feature.short}</p>

              <div className="feature-link">
                Explore feature →
              </div>
            </article>
          ))}
        </section>

        {selectedFeature && (
          <section className="feature-details">
            <div className="details-top">
              <div className="details-title">
                <div className="details-icon">
                  {selectedFeature.icon}
                </div>

                <h2>{selectedFeature.title}</h2>
              </div>

              <button
                className="close-button"
                onClick={() => setSelectedFeature(null)}
              >
                ✕
              </button>
            </div>

            <p>{selectedFeature.description}</p>

            <div className="points">
              {selectedFeature.points.map((point) => (
                <div className="point" key={point}>
                  <span>✓</span>
                  {point}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}