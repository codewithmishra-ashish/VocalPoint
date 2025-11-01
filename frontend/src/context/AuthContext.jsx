// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../utils/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/auth/me")
        .then((res) => setUser(res.data))
        .catch(() => localStorage.removeItem("token"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (data) => {
    const res = await API.post("/auth/register", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const login = async (credentials) => {
    const res = await API.post("/auth/login", credentials);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  // FIXED: correct URL + user._id
  const completeProfile = async (profileData) => {
    if (!user?._id) throw new Error("User not logged in");
    const res = await API.put(`/auth/profile/${user._id}`, profileData);
    setUser((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...res.data.profile, isComplete: true },
    }));
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, completeProfile, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};