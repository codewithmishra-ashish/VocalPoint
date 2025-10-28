import React from "react";
import { Globe, Shield, Download, Check, ArrowRight } from "lucide-react";

const ForCompanies = () => {
  const benefits = [
    { icon: <Globe className="text-blue-400" />, text: "125+ languages & dialects" },
    { icon: <Shield className="text-blue-400" />, text: "AI + human quality control" },
    { icon: <Download className="text-blue-400" />, text: "Instant API access" },
    { icon: <Check className="text-blue-400" />, text: "GDPR & CCPA compliant" },
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            For AI Companies & Startups
          </h2>
          <p className="text-gray-300 text-lg">High-quality, diverse voice data — on demand.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <p className="text-gray-300 text-lg">{b.text}</p>
              </div>
            ))}
            <a
              href="/enterprise"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Request Dataset Demo
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          {/* Sample Data */}
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Sample Dataset</h3>
            <pre className="text-sm text-gray-400 bg-gray-900 p-4 rounded-lg overflow-x-auto font-mono">
{`{
  "id": "vp-12345",
  "language": "Hindi (India)",
  "duration": 8.2,
  "text": "नमस्ते, यह एक नमूना है।",
  "quality_score": 0.98,
  "contributor_id": "user_789"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;