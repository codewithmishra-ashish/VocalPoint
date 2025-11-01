// src/pages/DashboardCompany.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Building2, Download, Globe, DollarSign } from "lucide-react";

const DashboardCompany = () => {
  const { user, logout } = useAuth();
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data — replace with real API later
    const mockDatasets = [
      { id: 1, name: "English US - 10k clips", size: "2.1 GB", status: "Ready" },
      { id: 2, name: "Hindi IN - 5k clips", size: "1.3 GB", status: "Processing" },
      { id: 3, name: "Spanish ES - 8k clips", size: "1.8 GB", status: "Ready" },
    ];

    // Simulate API delay
    const timer = setTimeout(() => {
      setDatasets(mockDatasets);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-blue-400 text-xl animate-pulse">Loading your datasets...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Company Dashboard
          </h1>
          <span className="text-sm text-gray-400">
            {user.profile?.companyName || user.email}
          </span>
        </div>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-medium transition"
        >
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Datasets</p>
              <p className="text-3xl font-bold text-blue-400">{datasets.length}</p>
            </div>
            <Globe size={32} className="text-blue-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Spend</p>
              <p className="text-3xl font-bold text-green-400">$1,240</p>
            </div>
            <DollarSign size={32} className="text-green-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Tasks</p>
              <p className="text-3xl font-bold text-indigo-400">12</p>
            </div>
            <Building2 size={32} className="text-indigo-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Clips Delivered</p>
              <p className="text-3xl font-bold text-purple-400">23,200</p>
            </div>
            <Download size={32} className="text-purple-400 opacity-50" />
          </div>
        </div>
      </div>

      {/* Datasets Table */}
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Download className="text-blue-400" />
          Your Datasets
        </h2>

        {datasets.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No datasets yet. Create your first task!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400 text-sm">
                  <th className="pb-3">Dataset Name</th>
                  <th className="pb-3">Size</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((ds) => (
                  <tr key={ds.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                    <td className="py-4 font-medium">{ds.name}</td>
                    <td className="py-4 text-gray-300">{ds.size}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ds.status === "Ready"
                            ? "bg-green-600/20 text-green-400"
                            : "bg-yellow-600/20 text-yellow-400"
                        }`}
                      >
                        {ds.status}
                      </span>
                    </td>
                    <td className="py-4">
                      {ds.status === "Ready" ? (
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                          <Download size={16} />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500 text-sm">Processing...</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition">
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default DashboardCompany;