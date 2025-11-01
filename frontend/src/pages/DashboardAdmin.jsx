import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import API from "../utils/api";
import { io } from "socket.io-client";

const DashboardAdmin = () => {
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [usage, setUsage] = useState([]);
  const [online, setOnline] = useState(0);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    API.get('/admin/stats').then(res => {
      setUsers(res.data.users);
      setUsage(res.data.usage);
      setOnline(res.data.online);
    });
    socket.on('onlineUsers', setOnline);
    return () => socket.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <header className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold text-blue-400">Total Users</h2>
          <p className="text-4xl font-bold text-white">{users.length}</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold text-green-400">Online Now</h2>
          <p className="text-4xl font-bold text-white">{online}</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold text-indigo-400">App Usage Events</h2>
          <p className="text-4xl font-bold text-white">{usage.reduce((sum, u) => sum + u.count, 0)}</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Active Users</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th>Email</th>
              <th>Role</th>
              <th>Profile Complete</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-gray-700">
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.profile.isComplete ? 'Yes' : 'No'}</td>
                <td>{u.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Usage Chart (Mock) */}
      <div className="mt-8 bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-4">App Usage</h2>
        <ul>
          {usage.map(u => (
            <li key={u._id} className="flex justify-between">
              <span>{u._id}</span>
              <span>{u.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdmin;