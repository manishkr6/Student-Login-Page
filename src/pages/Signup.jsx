import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import styles from "../styles/Auth.module.css";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-900">
      <div className="hidden md:flex w-3/5 h-3/5 shadow-[0px_0px_17px_1px_#3f4c7b] bg-slate-800 rounded-md text-white overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-400">
            Student Signup
          </h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-0 w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[18px] placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-0 w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[18px] placeholder-gray-400"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-0 w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[18px] placeholder-gray-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
            <button
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <p className="mt-8 text-sm text-center">
              Already have an account? {" "}
              <Link className="text-blue-400" to="/">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="../../public/side1.png"
            alt="Signup Illustration"
          />
        </div>
      </div>


      <div className={`md:hidden ${styles.loginBox} text-white`}>
        <div className={styles.imageContainer}>
          <img src="../../public/side1.png" alt="Signup Illustration" />
        </div>
        <div className={styles.formContainer}>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-400">
            Student Signup
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-0 text-[18px] w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-[rgb(107,123,148)] placeholder:text-[19px] placeholder:tracking-wider"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-0 text-[18px] w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-[rgb(107,123,148)] placeholder:text-[19px] placeholder:tracking-wider"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-0 text-[18px] w-full bg-transparent px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-[rgb(107,123,148)] placeholder:text-[19px] placeholder:tracking-wider"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
            <button
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <p className="mt-8 text-white text-1xs text-center">
              Already have an account? {" "}
              <Link className="text-blue-400" to="/">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
