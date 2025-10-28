import React, { useState } from "react";
import { Menu, X, ArrowRight, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              VocalPoint
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#companies" className="text-gray-300 hover:text-blue-400 transition">For Companies</a>
            <a href="#workers" className="text-gray-300 hover:text-blue-400 transition">For Workers</a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition">Pricing</a>
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition">
              Login
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-2xl flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileOpen(false)}>
              <Logo size="md" />
              <span className="text-xl font-bold text-white">VocalPoint</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-6">
              <a
                href="#companies"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-4 bg-gray-900/50 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <Building2 size={24} className="text-blue-400" />
                  <span className="text-lg font-medium text-white">For Companies</span>
                </div>
                <ArrowRight size={20} className="text-gray-500" />
              </a>

              <a
                href="#workers"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-4 bg-gray-900/50 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <Users size={24} className="text-green-400" />
                  <span className="text-lg font-medium text-white">For Workers</span>
                </div>
                <ArrowRight size={20} className="text-gray-500" />
              </a>

              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-4 bg-gray-900/50 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <span className="text-lg font-medium text-white">Pricing</span>
                </div>
                <ArrowRight size={20} className="text-gray-500" />
              </a>

              <div className="pt-6 space-y-3">
                <a
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl transition"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl transition"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;