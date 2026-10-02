import { useParams, useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description:
      "Learn the basics of HTML and CSS and build beautiful responsive webpages.",
    category: "Web Development",
    level: "Beginner",
    lessons: 18,
    duration: "4h 30m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    overview:
      "This course teaches you how websites are created using HTML and CSS. You will learn page structure, styling, layouts, responsive design and modern CSS techniques.",
    topics: [
      "HTML Fundamentals",
      "CSS Fundamentals",
      "Forms and Tables",
      "Flexbox",
      "CSS Grid",
      "Responsive Web Design",
    ],
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description:
      "Understand JavaScript fundamentals, variables, functions, arrays and DOM.",
    category: "Web Development",
    level: "Beginner",
    lessons: 24,
    duration: "6h 20m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Learn JavaScript from the beginning and understand how modern websites become interactive and dynamic.",
    topics: [
      "Variables and Data Types",
      "Functions",
      "Arrays and Objects",
      "Loops",
      "DOM Manipulation",
      "Events",
    ],
  },
  {
    id: 3,
    title: "React.js Complete Guide",
    description:
      "Build modern interactive web applications using React components and hooks.",
    category: "Web Development",
    level: "Intermediate",
    lessons: 32,
    duration: "8h 15m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Build modern frontend applications using React. Learn components, props, state, hooks and routing.",
    topics: [
      "React Components",
      "JSX",
      "Props and State",
      "React Hooks",
      "React Router",
      "API Integration",
    ],
  },
  {
    id: 4,
    title: "Node.js & Express",
    description:
      "Learn backend development with Node.js, Express, REST APIs and MongoDB.",
    category: "Backend Development",
    level: "Intermediate",
    lessons: 28,
    duration: "7h 10m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Learn how to create backend applications and REST APIs using Node.js and Express.",
    topics: [
      "Node.js Basics",
      "Express.js",
      "REST APIs",
      "Middleware",
      "Authentication",
      "MongoDB Integration",
    ],
  },
  {
    id: 5,
    title: "MongoDB Database Basics",
    description:
      "Learn how to store, manage and query application data using MongoDB.",
    category: "Database",
    level: "Beginner",
    lessons: 16,
    duration: "4h 05m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Understand MongoDB and learn how NoSQL databases are used in modern web applications.",
    topics: [
      "MongoDB Introduction",
      "Collections",
      "Documents",
      "CRUD Operations",
      "Queries",
      "MongoDB with Node.js",
    ],
  },
  {
    id: 6,
    title: "Python Programming",
    description:
      "Start programming with Python and learn variables, loops, functions and OOP.",
    category: "Programming",
    level: "Beginner",
    lessons: 30,
    duration: "7h 45m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Start your programming journey with Python and learn the fundamentals needed to build real applications.",
    topics: [
      "Python Basics",
      "Variables",
      "Loops",
      "Functions",
      "Lists and Dictionaries",
      "Object Oriented Programming",
    ],
  },
  {
    id: 7,
    title: "Data Structures & Algorithms",
    description:
      "Master arrays, linked lists, stacks, queues, trees and algorithmic thinking.",
    category: "Computer Science",
    level: "Intermediate",
    lessons: 36,
    duration: "9h 30m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Develop strong problem-solving skills by learning important data structures and algorithms.",
    topics: [
      "Arrays",
      "Linked Lists",
      "Stacks and Queues",
      "Trees",
      "Sorting Algorithms",
      "Searching Algorithms",
    ],
  },
  {
    id: 8,
    title: "Git & GitHub",
    description:
      "Learn version control, Git commands, branches and collaborative development.",
    category: "Development Tools",
    level: "Beginner",
    lessons: 14,
    duration: "3h 20m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Learn Git and GitHub so you can manage your code, track changes and collaborate with other developers.",
    topics: [
      "Git Basics",
      "Repositories",
      "Commits",
      "Branches",
      "Merge and Pull Requests",
      "GitHub",
    ],
  },
  {
    id: 9,
    title: "Full Stack Web Development",
    description:
      "Build complete web applications using React, Node.js, Express and MongoDB.",
    category: "Web Development",
    level: "Advanced",
    lessons: 45,
    duration: "12h 40m",
    instructor: "LearnHub Team",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Learn complete full-stack development by building applications with React, Node.js, Express and MongoDB.",
    topics: [
      "Frontend Development",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Full Stack Project",
    ],
  },
];

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="not-found">
        <h1>Course Not Found</h1>
        <button onClick={() => navigate("/courses")}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <style>{`
        .course-details-page {
          min-height: calc(100vh - 88px);
          background: #f7faf9;
          color: #183247;
          padding-bottom: 70px;
        }

        .details-container {
          width: min(1100px, calc(100% - 40px));
          margin: auto;
        }

        .back-button {
          margin: 28px 0;
          border: none;
          background: transparent;
          color: #078d83;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
        }

        .details-hero {
          background: white;
          border: 1px solid #dce8e5;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(24,50,71,.06);
        }

        .details-image {
          width: 100%;
          height: 360px;
          overflow: hidden;
        }

        .details-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .details-content {
          padding: 35px;
        }

        .details-category {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 999px;
          background: #e8f7f5;
          color: #07877f;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .details-content h1 {
          margin: 0 0 15px;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.1;
          color: #183247;
        }

        .details-description {
          max-width: 850px;
          margin: 0 0 25px;
          color: #647b8d;
          font-size: 18px;
          line-height: 1.6;
        }

        .details-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 10px;
        }

        .meta-box {
          padding: 12px 17px;
          background: #f4f8f7;
          border-radius: 10px;
          color: #425d70;
          font-size: 14px;
          font-weight: 700;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          margin-top: 24px;
        }

        .details-card {
          background: white;
          border: 1px solid #dce8e5;
          border-radius: 18px;
          padding: 28px;
        }

        .details-card h2 {
          margin: 0 0 18px;
          color: #183247;
          font-size: 24px;
        }

        .details-card p {
          color: #647b8d;
          line-height: 1.7;
          margin: 0;
        }

        .topics-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .topics-list li {
          padding: 12px 0;
          border-bottom: 1px solid #edf2f1;
          color: #425d70;
          font-weight: 600;
        }

        .topics-list li:last-child {
          border-bottom: none;
        }

        .enroll-button {
          width: 100%;
          margin-top: 22px;
          padding: 15px;
          border: none;
          border-radius: 11px;
          background: #10948b;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .enroll-button:hover {
          background: #087e76;
        }

        .not-found {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }

        .not-found button {
          border: none;
          padding: 12px 20px;
          border-radius: 9px;
          background: #10948b;
          color: white;
          cursor: pointer;
          font-weight: 700;
        }

        @media (max-width: 750px) {
          .details-grid {
            grid-template-columns: 1fr;
          }

          .details-image {
            height: 250px;
          }

          .details-content {
            padding: 24px;
          }
        }
      `}</style>

      <main className="details-container">
        <button
          className="back-button"
          onClick={() => navigate("/courses")}
        >
          ← Back to Courses
        </button>

        <section className="details-hero">
          <div className="details-image">
            <img src={course.image} alt={course.title} />
          </div>

          <div className="details-content">
            <span className="details-category">
              {course.category}
            </span>

            <h1>{course.title}</h1>

            <p className="details-description">
              {course.description}
            </p>

            <div className="details-meta">
              <div className="meta-box">
                📚 {course.lessons} Lessons
              </div>

              <div className="meta-box">
                ⏱️ {course.duration}
              </div>

              <div className="meta-box">
                🎯 {course.level}
              </div>

              <div className="meta-box">
                👨‍🏫 {course.instructor}
              </div>
            </div>
          </div>
        </section>

        <section className="details-grid">
          <div className="details-card">
            <h2>About this course</h2>

            <p>{course.overview}</p>
          </div>

          <div className="details-card">
            <h2>What you'll learn</h2>

            <ul className="topics-list">
              {course.topics.map((topic, index) => (
                <li key={index}>✓ {topic}</li>
              ))}
            </ul>

            <button
              className="enroll-button"
              onClick={() => alert("Enrollment feature coming soon!")}
            >
              Start Learning
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}