import React from "react";
import { Mic, UploadCloud, ShieldCheck, Globe } from "lucide-react";

const FeatureCard = ({ icon, title, desc, delay }) => (
  <div
    className={`group bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center transition-all duration-500 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 animate-fade-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  const list = [
    {
      icon: <Mic size={32} className="text-white" />,
      title: "Any Language, Any Accent",
      desc: "Contribute in your mother tongue—every dialect helps train smarter AI.",
    },
    {
      icon: <UploadCloud size={32} className="text-white" />,
      title: "One-Click Recording",
      desc: "Built-in browser recorder, instant upload, zero software needed.",
    },
    {
      icon: <ShieldCheck size={32} className="text-white" />,
      title: "AI-Powered Quality Check",
      desc: "Automated scoring ensures only clear, authentic clips get paid.",
    },
    {
      icon: <Globe size={32} className="text-white" />,
      title: "Earn From Anywhere",
      desc: "Work remotely, get paid weekly via PayPal, bank, or crypto.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          Why VocalPoint Stands Out
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Simple, fair, and built for global voices.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;