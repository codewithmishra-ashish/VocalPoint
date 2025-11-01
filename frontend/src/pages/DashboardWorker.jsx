// src/pages/DashboardWorker.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Shield, AlertCircle, CheckCircle } from "lucide-react";

const DashboardWorker = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    if (user?.profile?.isComplete) {
      setProfileComplete(true);
    } else if (user && !user.profile?.isComplete) {
      setProfileComplete(false);
    }
  }, [user]);

  const handleCompleteProfile = () => {
    navigate("/profile-wizard");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Worker Dashboard
          </h1>

          {/* Profile Badge */}
          <div className="flex items-center gap-2">
            {profileComplete ? (
              <span className="flex items-center gap-1 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle size={16} />
                Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                <AlertCircle size={16} />
                Profile Incomplete
              </span>
            )}
          </div>
        </div>

        {/* Complete Profile CTA */}
        {!profileComplete && (
          <button
            onClick={handleCompleteProfile}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-5 rounded-full flex items-center gap-2 transition"
          >
            <Shield size={18} />
            Complete Profile
          </button>
        )}
      </header>

      {/* Rest of dashboard */}
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
        <p className="text-gray-300">
          Welcome, {user?.profile?.name || user?.email}! Start earning by recording voice tasks.
        </p>
        {/* Add tasks, earnings, etc. */}
      </div>
    </div>
  );
};

export default DashboardWorker;