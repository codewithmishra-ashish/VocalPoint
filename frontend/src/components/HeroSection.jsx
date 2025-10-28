import React from "react";
import { Mic, ArrowRight, Check } from "lucide-react";  // ← Added 'Check' here

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Power AI with <span className="block mt-2">Your Authentic Voice</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Record short clips in your native language, get instant AI validation, and earn real money—anywhere, anytime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/login"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition hover:scale-105"
          >
            Start Earning Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center border border-gray-600 hover:border-blue-500 text-gray-200 hover:text-blue-400 font-semibold py-4 px-8 rounded-full transition"
          >
            <Mic className="mr-2" size={20} />
            See How It Works
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center">
            <Check className="text-green-400 mr-2" />
            Secure & Encrypted
          </div>
          <div className="flex items-center">
            <Check className="text-green-400 mr-2" />
            Instant Payouts
          </div>
          <div className="flex items-center">
            <Check className="text-green-400 mr-2" />
            100+ Languages
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;