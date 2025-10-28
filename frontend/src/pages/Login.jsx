import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Login to LinguaEarn</h2>
      <form className="flex flex-col gap-4 bg-gray-800 p-8 rounded-lg shadow-lg w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
