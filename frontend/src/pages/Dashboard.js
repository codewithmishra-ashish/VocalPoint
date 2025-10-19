import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/"); // redirect to login if not logged in
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user.name}</h2>
      <p>Role: {user.role}</p>

      {user.role === "worker" && (
        <div>
          <h3>🎙 Worker Dashboard</h3>
          <p>Here you can record voice prompts assigned to you.</p>
          <button onClick={() => navigate("/record")}>Start Recording</button>
        </div>
      )}

      {user.role === "company" && (
        <div>
          <h3>🏢 Company Dashboard</h3>
          <p>Here you can post new tasks for workers.</p>
          <button onClick={() => navigate("/add-task")}>Add New Task</button>
        </div>
      )}

      {user.role === "admin" && (
        <div>
          <h3>🛠 Admin Dashboard</h3>
          <p>Here you can manage users, tasks, and quality checks.</p>
          <button onClick={() => navigate("/admin-panel")}>Open Admin Panel</button>
        </div>
      )}

      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
        style={{ marginTop: "20px", background: "red", color: "white", padding: "8px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
