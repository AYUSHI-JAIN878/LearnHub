import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("learnhub_user")) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("learnhub_user", JSON.stringify(user));
    else localStorage.removeItem("learnhub_user");
  }, [user]);

  async function login(email, password) {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("learnhub_token", data.token);
    setUser(data.user);
    return data;
  }

  async function register(name, email, password) {
    const { data } = await api.post("/auth/register", { name, email, password });
    localStorage.setItem("learnhub_token", data.token);
    setUser(data.user);
    return data;
  }

  function logout() {
    localStorage.removeItem("learnhub_token");
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);