export default function Footer() {
  return (
    <footer className="footer">
      <div><strong>LearnHub</strong><span> — Learn useful skills, one lesson at a time.</span></div>
      <div>© {new Date().getFullYear()} LearnHub</div>
    </footer>
  );
}