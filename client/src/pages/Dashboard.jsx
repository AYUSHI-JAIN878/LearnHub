import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return <section className="dashboard-page container"><div className="dashboard-hero"><span className="eyebrow">Your dashboard</span><h1>Welcome, {user?.name || "Learner"}.</h1><p>Keep building your learning momentum.</p><Link className="button" to="/courses">Explore Courses</Link></div><div className="dashboard-grid"><div className="stat-card"><strong>72%</strong><span>Overall progress</span></div><div className="stat-card"><strong>7</strong><span>Day streak</span></div><div className="stat-card"><strong>12</strong><span>Courses available</span></div></div></section>;
}