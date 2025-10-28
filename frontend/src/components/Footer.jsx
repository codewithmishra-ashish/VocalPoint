import React from "react";
import { Github, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-white">VocalPoint</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Empowering multilingual AI through human voices.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a href="#features" className="text-gray-300 hover:text-blue-400 transition">
            Features
          </a>
          <a href="#how" className="text-gray-300 hover:text-blue-400 transition">
            How It Works
          </a>
          <a href="/privacy" className="text-gray-300 hover:text-blue-400 transition">
            Privacy
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} VocalPoint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;