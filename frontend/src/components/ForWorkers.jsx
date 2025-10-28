import React from "react";
import { DollarSign, Clock, Smartphone, Check, ArrowRight } from "lucide-react";

const ForWorkers = () => {
  const perks = [
    { icon: <DollarSign className="text-green-400" />, text: "$0.10–$0.50 per approved clip" },
    { icon: <Clock className="text-green-400" />, text: "Work anytime, anywhere" },
    { icon: <Smartphone className="text-green-400" />, text: "No app needed — browser only" },
    { icon: <Check className="text-green-400" />, text: "Weekly payouts via PayPal" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            For Gig Workers & Creators
          </h2>
          <p className="text-gray-300 text-lg">Turn your voice into income — in minutes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Earnings */}
          <div className="order-2 md:order-1">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-green-400">How Much Can You Earn?</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>10 clips/day</span>
                  <span className="text-green-400 font-bold">$1–$5/day</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>50 clips/day (Pro)</span>
                  <span className="text-green-400 font-bold">$5–$25/day</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Top 1% earners</span>
                  <span className="text-green-400 font-bold">$500+/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perks */}
          <div className="space-y-6 order-1 md:order-2">
            {perks.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  {p.icon}
                </div>
                <p className="text-gray-300 text-lg">{p.text}</p>
              </div>
            ))}
            <a
              href="/login"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Start Earning Today
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWorkers;