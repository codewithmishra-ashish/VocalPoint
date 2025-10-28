import React, { useState } from "react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-indigo-950">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Be the First to Earn
        </h2>
        <p className="text-gray-300 mb-8">
          Join 5,000+ contributors on the waitlist. Get early access + $10 bonus on signup.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            required
            className="flex-1 px-6 py-4 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold transition transform hover:scale-105"
          >
            {sent ? "Sent!" : "Join Waitlist"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;