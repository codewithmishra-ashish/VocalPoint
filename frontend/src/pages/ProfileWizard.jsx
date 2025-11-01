import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import { User, Mic, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

// 🟩 Step 1 Component
const Step1 = ({ nextStep, formData, updateForm }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
        <Mic size={20} className="text-green-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">Tell us about yourself</h3>
    </div>

    <textarea
      placeholder="Write a short bio (e.g., native speaker, accents, experience)"
      value={formData.bio}
      onChange={updateForm("bio")}
      className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <div className="flex justify-end">
      <button
        onClick={nextStep}
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
      >
        Next
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

// 🟦 Step 2 Component
const Step2 = ({ nextStep, previousStep, formData, updateForm }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
        <CheckCircle size={20} className="text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">Your Voice Profile</h3>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Interests (e.g., podcasts, audiobooks, AI)
      </label>
      <input
        type="text"
        placeholder="Podcasts, storytelling..."
        value={formData.interests}
        onChange={updateForm("interests")}
        className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Accent / Dialect
      </label>
      <select
        value={formData.accent}
        onChange={updateForm("accent")}
        className="w-full p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select accent</option>
        <option value="US English">US English</option>
        <option value="UK English">UK English</option>
        <option value="Indian English">Indian English</option>
        <option value="Australian">Australian</option>
        <option value="Neutral">Neutral</option>
      </select>
    </div>

    <div className="flex justify-between">
      <button
        onClick={previousStep}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
      >
        Next
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

// 🟪 Step 3 Component
const Step3 = ({ previousStep, formData, handleFinish }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
        <CheckCircle size={20} className="text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">Review & Submit</h3>
    </div>

    <div className="bg-gray-800/50 rounded-xl p-5 space-y-4">
      <div>
        <p className="text-sm text-gray-400">Bio</p>
        <p className="text-white">{formData.bio || "Not provided"}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Interests</p>
        <p className="text-white">{formData.interests || "Not provided"}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Accent</p>
        <p className="text-white">{formData.accent || "Not selected"}</p>
      </div>
    </div>

    <div className="flex justify-between">
      <button
        onClick={previousStep}
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <button
        onClick={handleFinish}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
      >
        Get Verified
        <CheckCircle size={18} />
      </button>
    </div>
  </div>
);

const ProfileWizard = () => {
  const { user, completeProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bio: user?.profile?.bio || "",
    interests: user?.profile?.interests || "",
    accent: user?.profile?.accent || "",
  });

  const updateForm = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

    const handleFinish = async () => {
        try {
            console.log("Saving:", { ...formData, isComplete: true }); // ← DEBUG
            await completeProfile({ ...formData, isComplete: true });
            // redirect...
        } catch (err) {
            console.error("Save failed:", err.response?.data || err.message);
            alert(`Save failed: ${err.response?.data?.message || err.message}`);
        }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-800 shadow-2xl">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Complete Your Profile
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Unlock verified badge and start earning!
        </p>

        {/* Step Wizard */}
        <StepWizard isHashKey={false} nav={<div />} className="text-white">
          <Step1 formData={formData} updateForm={updateForm} />
          <Step2 formData={formData} updateForm={updateForm} />
          <Step3 formData={formData} handleFinish={handleFinish} />
        </StepWizard>
      </div>
    </div>
  );
};

export default ProfileWizard;
