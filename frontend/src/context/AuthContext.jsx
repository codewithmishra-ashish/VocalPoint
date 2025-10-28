import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Quick mock user load (simulate API call)
      setTimeout(() => {
        setUser({ name: "Aisha Khan", email: "aisha@example.com" });  // ← Mock user
        setLoading(false);
      }, 500);  // ← 0.5s delay for realism
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const mockToken = "mock-jwt-" + Date.now();  // ← Unique token
    localStorage.setItem("token", mockToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${mockToken}`;
    setUser({ name: email.split("@")[0], email });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};