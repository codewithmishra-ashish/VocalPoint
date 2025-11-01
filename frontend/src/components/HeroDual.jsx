// src/components/HeroDual.jsx
import React from "react";
import { Mic, ArrowRight, Zap, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroDual = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Zap size={16} className="animate-pulse" />
          <span>AI-Powered Voice Data Marketplace</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
            The Future of Voice Data
          </span>
          <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            For AI & Humans
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12">
          Companies get clean, diverse datasets. Gig workers earn real money. Everyone wins.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/register-worker"
            className="group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition hover:scale-105"
          >
            <Users className="mr-2" size={20} />
            Earn as a Contributor
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            to="/register-company"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition hover:scale-105"
          >
            <Building2 className="mr-2" size={20} />
            For Companies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div>Used by 50+ AI labs</div>
          <div>10K+ contributors</div>
          <div>99.9% data accuracy</div>
        </div>
      </div>
    </section>
  );
};

export default HeroDual;