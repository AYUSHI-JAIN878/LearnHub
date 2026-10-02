import { Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fallback = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <img src={course.image || fallback} alt={course.title} />
      <div className="course-content">
        <span className="level-badge">{course.level}</span>
        <p className="category">{course.category}</p>
        <h3>{course.title}</h3>
        <p className="muted course-description">{course.description}</p>
        <div className="course-meta">
          <span><Clock3 size={16} /> {course.duration}</span>
          <span>{course.instructor || "LearnHub Team"}</span>
        </div>
        <Link className="button course-button" to={`/courses/${course._id}`}>View Course <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
}