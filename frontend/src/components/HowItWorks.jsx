import React from "react";
import { ArrowRight } from "lucide-react";

const Step = ({ num, title, desc, isLast }) => (
  <div className="flex flex-col items-center text-center max-w-xs">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        {num}
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 -translate-y-1/2"></div>
      )}
    </div>
    <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-400">{desc}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    { title: "Sign Up", desc: "Free account in < 30 seconds." },
    { title: "Get Tasks", desc: "Daily voice prompts in your language." },
    { title: "Record", desc: "Speak clearly, hit submit." },
    { title: "Get Paid", desc: "Instant payout on approval." },
  ];

  return (
    <section id="how" className="py-24 bg-gradient-to-b from-gray-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-16">
          Four Steps to Earnings
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {steps.map((s, i) => (
            <Step key={i} num={i + 1} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>

        <a
          href="/login"
          className="mt-16 inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition transform hover:scale-105"
        >
          Start Your First Task
          <ArrowRight className="ml-3" />
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;