import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Mic, Globe, Wallet } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-indigo-700">VocalPoint</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
          <Link to="/register" className="hover:text-indigo-600">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Empower Voices. Train Smarter AI.
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Join our global community of native speakers contributing real-world
          voice data for the next generation of AI — and get rewarded for every
          verified contribution.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Get Started <ArrowRight size={20} />
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">
          <div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition">
            <Mic size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Record in Your Language</h3>
            <p className="text-gray-600">
              Contribute your natural voice in your local language to help train
              global AI models.
            </p>
          </div>

          <div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition">
            <Globe size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Work from Anywhere</h3>
            <p className="text-gray-600">
              Participate from any country — all you need is a browser and a
              microphone.
            </p>
          </div>

          <div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition">
            <Wallet size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn for Every Task</h3>
            <p className="text-gray-600">
              Receive payouts for each approved recording once your work passes
              quality review.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-indigo-700 text-white text-center py-8 mt-12">
        <p className="text-lg font-medium mb-2">Join the AI Voice Revolution</p>
        <Link
          to="/register"
          className="inline-block mt-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition"
        >
          Sign Up Now
        </Link>
        <p className="mt-6 text-sm opacity-70">
          © {new Date().getFullYear()} VocalPoint. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
