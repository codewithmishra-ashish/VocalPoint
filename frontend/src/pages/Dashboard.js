import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mic, User, LogOut, BarChart2 } from "lucide-react";
import { Chart } from "react-google-charts";

function Dashboard() {
  const navigate = useNavigate();
  const [user] = useState({
    name: "Worker123",
    role: "worker",
    email: "",
    phone: "",
  });


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const profileIncomplete = !user.email || !user.phone;

  // Fake performance data for chart demo
  const data = [
    ["Month", "Approved", "Rejected"],
    ["July", 20, 5],
    ["August", 35, 7],
    ["September", 40, 3],
  ];

  const options = {
    chartArea: { width: "80%" },
    colors: ["#4f46e5", "#dc2626"],
    hAxis: { title: "Month" },
    vAxis: { title: "Recordings" },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md px-8 py-4">
        <h2 className="text-2xl font-bold text-indigo-700">VocalPoint Dashboard</h2>
        <div className="flex items-center gap-4">
          <User className="text-gray-500" />
          <span className="font-medium">{user.name}</span>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-600 font-semibold"
          >
            <LogOut size={18} className="inline mr-1" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        {profileIncomplete && (
          <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg mb-6">
            ⚠️ Your profile is incomplete! Please verify your email and phone
            number to continue earning.
          </div>
        )}

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {user.name} 👋
        </h3>

        <p className="text-gray-600 mb-6">
          Role:{" "}
          <span className="font-semibold text-indigo-700 capitalize">
            {user.role}
          </span>
        </p>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Link
            to="/record"
            className="p-6 bg-indigo-600 text-white rounded-xl shadow hover:shadow-lg text-center font-medium transition"
          >
            <Mic className="mx-auto mb-3" /> Start Recording
          </Link>

          <Link
            to="/profile"
            className="p-6 bg-green-600 text-white rounded-xl shadow hover:shadow-lg text-center font-medium transition"
          >
            <User className="mx-auto mb-3" /> Complete Profile
          </Link>

          {user.role === "company" && (
            <Link
              to="/add-task"
              className="p-6 bg-yellow-500 text-white rounded-xl shadow hover:shadow-lg text-center font-medium transition"
            >
              Add New Task
            </Link>
          )}
        </div>

        {/* Performance Graph */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart2 className="text-indigo-600" /> Performance Overview
          </h4>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
