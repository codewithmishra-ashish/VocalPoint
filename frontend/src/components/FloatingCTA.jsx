import React from "react";
import { Mic } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="/login"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl flex items-center space-x-3 hover:scale-110 transition transform animate-pulse"
    >
      <Mic size={24} />
      <span className="font-bold pr-2">Start Recording</span>
    </a>
  );
};

export default FloatingCTA;