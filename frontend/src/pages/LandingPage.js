import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-blue-50">
      <div className="text-center p-10 bg-white rounded-2xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-indigo-600">VocalPoint</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Record your voice in your native language, contribute to AI datasets,
          and get paid for approved recordings.
        </p>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            Register
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} VocalPoint. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
