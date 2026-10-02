import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth(); const navigate=useNavigate();
  const [form,setForm]=useState({name:"",email:"",password:""}); const [error,setError]=useState("");
  const submit=async e=>{e.preventDefault();setError("");try{await register(form.name,form.email,form.password);navigate("/dashboard");}catch(err){setError(err.response?.data?.message||"Registration failed");}};
  return <section className="auth-page"><div className="auth-card"><div className="eyebrow">Start learning</div><h1>Create your account</h1><p>Join LearnHub and build useful skills.</p><form className="auth-form" onSubmit={submit}>
    {error&&<div className="error">{error}</div>}
    <label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
    <label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label>
    <label>Password<input type="password" minLength="6" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label>
    <button className="button">Create Account</button><p>Already have an account? <Link to="/login">Login</Link></p>
  </form></div></section>;
}