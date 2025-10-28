import React from "react";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    for: "Contributors",
    features: ["10 clips/day", "Weekly payouts", "AI validation"],
    cta: "Start Free",
    color: "green",
  },
  {
    name: "Pro",
    price: "$9/mo",
    for: "Power Contributors",
    features: ["Unlimited clips", "Daily payouts", "Priority tasks", "Mobile app"],
    cta: "Go Pro",
    popular: true,
    color: "emerald",
  },
  {
    name: "Enterprise",
    price: "Custom",
    for: "AI Companies",
    features: ["API access", "Custom datasets", "Dedicated support", "SLA"],
    cta: "Contact Sales",
    color: "blue",
  },
];

const ServiceTiers = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          Plans for Everyone
        </h2>
        <p className="text-gray-400 mb-16">Contributors earn. Companies scale.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-gray-900/80 backdrop-blur-sm border rounded-3xl p-8 transition-all ${
                tier.popular
                  ? "border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105"
                  : "border-gray-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  BEST VALUE
                </div>
              )}

              <div className="text-sm text-gray-400 mb-2">{tier.for}</div>
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <p className="text-4xl font-bold text-white mt-2">{tier.price}</p>

              <ul className="mt-6 space-y-3 text-left text-gray-300">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <Check
                      size={18}
                      className={`mr-2 flex-shrink-0 text-${tier.color}-400`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-bold transition bg-gradient-to-r from-${tier.color}-600 to-${tier.color}-700 hover:from-${tier.color}-700 hover:to-${tier.color}-800 text-white flex items-center justify-center gap-2`}
              >
                {tier.cta}
                {tier.cta.includes("Contact") && <ArrowRight size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;