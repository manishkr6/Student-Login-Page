import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load logged-in user from sessionStorage
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email && u.password === password);

    if (existingUser) {
      setUser(existingUser);
      sessionStorage.setItem("loggedInUser", JSON.stringify(existingUser)); // Store session
      toast.success("Login successful!", { position: "top-right" });
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password", { position: "top-right" });
    }
  };

  // Signup function
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      toast.warning("User already exists. Please log in.", { position: "top-right" });
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Store multiple users
    toast.success("Signup successful! Please log in.", { position: "top-right" });
    navigate("/");
  };

  // Logout function
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("loggedInUser"); // Clear session storage
    toast.info("Logged out successfully!", { position: "top-right" });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
