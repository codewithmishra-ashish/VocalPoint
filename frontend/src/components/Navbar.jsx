import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            VocalPoint
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-gray-200 hover:text-blue-400 font-medium transition">
            Features
          </a>
          <a href="#how" className="text-gray-200 hover:text-blue-400 font-medium transition">
            How It Works
          </a>
          <a
            href="/login"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-2.5 rounded-full text-white font-semibold shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 hover:text-blue-400"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-xl px-6 py-4 space-y-3">
          <a href="#features" className="block text-gray-200 hover:text-blue-400 font-medium">
            Features
          </a>
          <a href="#how" className="block text-gray-200 hover:text-blue-400 font-medium">
            How It Works
          </a>
          <a
            href="/login"
            className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-2.5 rounded-full text-center text-white font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;