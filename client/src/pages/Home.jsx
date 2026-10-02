import { ArrowRight, Brain, CheckCircle2, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16} /> AI-powered learning platform</div>
          <h1>Learn smarter.<br /><span>Grow faster.</span><br />Powered by AI.</h1>
          <p>LearnHub combines personalized learning, interactive courses and AI-powered assistance in one modern learning platform.</p>
          <div className="hero-actions">
            <Link to="/courses" className="button">Explore Courses <ArrowRight size={18} /></Link>
            <Link to="/register" className="button button-light">Start Learning</Link>
          </div>
          <div className="hero-note"><span className="avatar">LS</span><div><strong>Learn at your pace</strong><small>Build skills that matter.</small></div></div>
        </div>

        <div className="overview-card">
          <div className="overview-head"><strong>Learning Overview</strong><span className="live"><i /> Live</span></div>
          <div className="progress-ring"><div><strong>72%</strong><small>completed</small></div></div>
          <h3>You're on a roll!</h3>
          <p>Keep your learning momentum going.</p>
          <div className="progress-line"><span /></div>
          <div className="overview-stats"><div><strong>12</strong><small>Courses</small></div><div><strong>8</strong><small>Active</small></div><div><strong>7</strong><small>Day streak</small></div></div>
          <div className="ai-pop"><Sparkles size={18} /><div><strong>AI Tutor</strong><small>Ready to help ✨</small></div></div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading"><div><span className="eyebrow">Why LearnHub</span><h2>Everything you need to keep learning.</h2></div><Link to="/features">Explore features <ArrowRight size={16}/></Link></div>
        <div className="feature-grid">
          <Feature icon={<Brain />} title="AI-powered help" text="Get explanations, examples and learning support whenever you need it." />
          <Feature icon={<BookOpen />} title="Practical courses" text="Learn useful skills through focused lessons and hands-on topics." />
          <Feature icon={<TrendingUp />} title="Track your progress" text="Keep an eye on courses, learning streaks and completed lessons." />
        </div>
      </section>

      <section className="cta">
        <div><h2>Ready to start learning?</h2><p>Choose a course and build your next useful skill.</p></div>
        <Link to="/courses" className="button">Browse Courses <ArrowRight size={18}/></Link>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p><CheckCircle2 className="check" size={18}/></div>;
}