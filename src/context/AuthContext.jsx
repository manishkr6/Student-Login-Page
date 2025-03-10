import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const validate = (email, password, name = null) => {
    if (!email.trim() || !password.trim() || (name !== null && !name.trim())) {
      toast.error("All fields are required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    if (!/\d/.test(password)) {
      toast.error("Password must contain at least one number");
      return false;
    }
    return true;
  };

  const login = (email, password) => {
    if (!validate(email, password)) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email && u.password === password);

    if (existingUser) {
      setUser(existingUser);
      sessionStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const signup = (name, email, password) => {
    if (!validate(email, password, name)) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      toast.warning("User already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Signup successful! Please log in.");
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("loggedInUser");
    toast.info("Logged out successfully");
    navigate("/");
  };

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
};
