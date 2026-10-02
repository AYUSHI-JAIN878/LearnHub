
import { useMemo, useState } from "react";

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
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [level, setLevel] = useState("All levels");

  const categories = [
    "All categories",
    ...new Set(coursesData.map((course) => course.category)),
  ];

  const levels = [
    "All levels",
    ...new Set(coursesData.map((course) => course.level)),
  ];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText) ||
        course.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All categories" || course.category === category;

      const matchesLevel =
        level === "All levels" || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, category, level]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All categories");
    setLevel("All levels");
  };

  return (
    <div className="courses-page">
      <style>{`
        .courses-page {
          min-height: calc(100vh - 88px);
          background: #f7faf9;
          color: #183247;
        }

        .courses-container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
          padding: 0 0 70px;
        }

        .courses-hero {
          padding: 2px 0 30px;
        }

        .courses-label {
          display: inline-block;
          margin-bottom: 18px;
          color: #078d83;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .courses-hero h1 {
          margin: 0;
          font-size: clamp(42px, 5vw, 58px);
          line-height: 1.05;
          letter-spacing: -2px;
          color: #183247;
        }

        .courses-subtitle {
          margin: 24px 0 36px;
          font-size: 20px;
          line-height: 1.5;
          color: #648097;
        }

        .filters {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr auto;
          gap: 14px;
          align-items: center;
        }

        .search-input,
        .filter-select {
          width: 100%;
          height: 66px;
          box-sizing: border-box;
          border: 1px solid #d6e3e0;
          border-radius: 14px;
          background: white;
          padding: 0 20px;
          font-size: 17px;
          color: #183247;
          outline: none;
        }

        .search-input:focus,
        .filter-select:focus {
          border-color: #11958c;
          box-shadow: 0 0 0 3px rgba(17,149,140,.1);
        }

        .filter-select {
          cursor: pointer;
        }

        .search-button {
          height: 66px;
          border: none;
          border-radius: 14px;
          padding: 0 27px;
          background: #10948b;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s;
          box-shadow: 0 8px 22px rgba(16,148,139,.16);
        }

        .search-button:hover {
          background: #087e76;
          transform: translateY(-1px);
        }

        .results-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 42px 0 20px;
        }

        .results-count {
          margin: 0;
          font-size: 18px;
          color: #648097;
        }

        .clear-button {
          border: none;
          background: transparent;
          color: #0b8d84;
          font-weight: 700;
          cursor: pointer;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .course-card {
          background: white;
          border: 1px solid #dce8e5;
          border-radius: 18px;
          overflow: hidden;
          transition: .22s ease;
          box-shadow: 0 5px 18px rgba(24,50,71,.04);
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(24,50,71,.10);
          border-color: #b9d9d5;
        }

        /* COURSE IMAGE */
        .course-image {
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #eaf4f2;
        }

        .course-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .35s ease;
        }

        .course-card:hover .course-image img {
          transform: scale(1.05);
        }

        .course-content {
          padding: 22px;
        }

        .course-category {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          background: #e8f7f5;
          color: #07877f;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 13px;
        }

        .course-content h3 {
          margin: 0 0 10px;
          color: #183247;
          font-size: 21px;
          line-height: 1.25;
        }

        .course-description {
          min-height: 68px;
          margin: 0 0 18px;
          color: #6b8193;
          font-size: 14px;
          line-height: 1.55;
        }

        .course-info {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          padding: 15px 0;
          border-top: 1px solid #edf2f1;
          border-bottom: 1px solid #edf2f1;
          color: #647b8d;
          font-size: 13px;
        }

        .course-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .course-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 17px;
        }

        .course-level {
          color: #183247;
          font-size: 13px;
          font-weight: 700;
        }

        .view-course {
          border: none;
          border-radius: 9px;
          padding: 10px 15px;
          background: #10948b;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }

        .empty-state {
          padding: 70px 20px;
          background: white;
          border: 1px dashed #bfd8d4;
          border-radius: 20px;
          text-align: center;
        }

        .empty-icon {
          font-size: 45px;
          margin-bottom: 10px;
        }

        .empty-state h2 {
          margin: 0 0 10px;
          color: #183247;
        }

        .empty-state p {
          margin: 0 0 20px;
          color: #6b8193;
        }

        @media (max-width: 950px) {
          .filters {
            grid-template-columns: 1fr 1fr;
          }

          .search-input {
            grid-column: 1 / -1;
          }

          .search-button {
            width: 100%;
          }

          .course-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .courses-container {
            width: min(100% - 28px, 1160px);
          }

          .courses-hero h1 {
            font-size: 40px;
          }

          .filters {
            grid-template-columns: 1fr;
          }

          .search-input {
            grid-column: auto;
          }

          .course-grid {
            grid-template-columns: 1fr;
          }

          .course-image {
            height: 210px;
          }

          .results-row {
            margin-top: 30px;
          }
        }
      `}</style>

      <main className="courses-container">
        <section className="courses-hero">
          <div className="courses-label">LearnHub Courses</div>

          <h1>Learn something useful.</h1>

          <p className="courses-subtitle">
            Explore practical courses and build momentum one lesson at a time.
          </p>

          <div className="filters">
            <input
              className="search-input"
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="filter-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              {levels.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button className="search-button" onClick={() => {}}>
              Search
            </button>
          </div>
        </section>

        <div className="results-row">
          <p className="results-count">
            Showing {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>

          {(search ||
            category !== "All categories" ||
            level !== "All levels") && (
            <button className="clear-button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <article className="course-card" key={course.id}>
                <div className="course-image">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                  />
                </div>

                <div className="course-content">
                  <span className="course-category">
                    {course.category}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="course-description">
                    {course.description}
                  </p>

                  <div className="course-info">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                  </div>

                  <div className="course-bottom">
                    <span className="course-level">
                      {course.level}
                    </span>

                    <button
                      className="view-course"
                      onClick={() => {
                        window.location.href = `/courses/${course.id}`;
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔎</div>

            <h2>No courses found</h2>

            <p>Try another search or category.</p>

            <button
              className="search-button"
              onClick={clearFilters}
            >
              Show all courses
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
