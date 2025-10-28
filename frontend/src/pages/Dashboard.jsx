import React from "react";
import { useAuth } from "../context/AuthContext";
import { Mic, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Hi, {user?.name}</span>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center space-x-2"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
          <div className="flex items-center space-x-4 mb-6">
            <Mic size={40} className="text-blue-400" />
            <h2 className="text-3xl font-bold">Start Recording</h2>
          </div>
          <p className="text-gray-300 mb-8">
            Record short voice clips in your native language and earn $0.10–$0.50 per approved clip.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105">
            Record Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;