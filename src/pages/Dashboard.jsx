import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900">
      <div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg text-center w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-yellow-400">
          Welcome, <span className="text-blue-400">{user ? user.name : "Student"}!</span> 🎉
        </h2>
        <p className="text-gray-300 mt-4">
          You are now logged in. Explore your dashboard and manage your account efficiently.
        </p>
        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 transition-transform transform hover:scale-105 text-white py-2 px-6 rounded-md shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
