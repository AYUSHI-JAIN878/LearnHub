import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth(); const navigate = useNavigate();
  const [form, setForm] = useState({email:"",password:""}); const [error,setError]=useState("");
  const submit = async e => { e.preventDefault(); setError(""); try { await login(form.email,form.password); navigate("/dashboard"); } catch(err){setError(err.response?.data?.message || "Login failed");} };
  return <AuthPage title="Welcome back" subtitle="Continue your learning journey."><form className="auth-form" onSubmit={submit}>
    {error && <div className="error">{error}</div>}
    <label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label>
    <label>Password<input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label>
    <button className="button">Login</button><p>Don't have an account? <Link to="/register">Create one</Link></p>
  </form></AuthPage>;
}

function AuthPage({title,subtitle,children}){return <section className="auth-page"><div className="auth-card"><div className="eyebrow">LearnHub</div><h1>{title}</h1><p>{subtitle}</p>{children}</div></section>}