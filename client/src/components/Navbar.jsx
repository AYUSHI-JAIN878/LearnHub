import { Link, NavLink, useNavigate } from "react-router-dom";
import { BookOpen, LogOut, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon"><BookOpen size={19} /></span>
        <span>Learn<span>Hub</span></span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/ai-tutor"><Sparkles size={16} /> AI Tutor</NavLink>
        <NavLink to="/features">Features</NavLink>
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      </nav>

      <div className="nav-actions">
        {user ? (
          <button className="text-button" onClick={signOut}><LogOut size={16} /> Logout</button>
        ) : (
          <>
            <Link className="login-link" to="/login">Login</Link>
            <Link className="button button-small" to="/register">Get Started</Link>
          </>
        )}
      </div>
    </header>
  );
}