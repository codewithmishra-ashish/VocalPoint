import React from "react";
import { Mic, ArrowRight, Zap} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950">
      {/* Animated Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Zap size={16} className="animate-pulse" />
          <span>AI-Powered Voice Data Platform</span>
        </div>

        {/* GLASSMORPHIC CARD */}
        <div className="animate-fade-in mx-auto max-w-4xl">
          <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-3xl -z-10 rounded-3xl"></div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                Earn Real Money
              </span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                With Your Voice
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Record 10-second clips in your native language. Get paid <span className="text-green-400 font-bold">$0.10–$0.50</span> per approved clip. No experience needed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/login"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition hover:scale-105"
          >
            Start Earning Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center border border-gray-500 hover:border-blue-500 text-gray-100 hover:text-blue-400 font-semibold py-4 px-8 rounded-full transition"
          >
            <Mic className="mr-2" size={20} />
            Try Demo Recorder
          </a>
        </div>

        {/* Live Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">$<span className="counter">750</span>K+</div>
            <p className="text-gray-400 text-sm">Paid to Contributors</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-400"><span className="counter">125</span>+</div>
            <p className="text-gray-400 text-sm">Languages Supported</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400"><span className="counter">10</span>K+</div>
            <p className="text-gray-400 text-sm">Active Voices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;