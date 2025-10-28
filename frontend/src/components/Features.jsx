import React from "react";
import { Mic, UploadCloud, ShieldCheck, Globe } from "lucide-react";
import { useGSAP } from "../hooks/useGSAP";
import { gsap } from "gsap";

const FeatureCard = ({ icon, title, desc, index }) => {
  const cardRef = React.useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const cx = width / 2;
      const cy = height / 2;
      const rx = ((y - cy) / cy) * 15;
      const ry = ((cx - x) / cx) * 15;

      gsap.to(card, { rotateX: rx, rotateY: ry, scale: 1.05, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: "elastic.out(1,0.3)" });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  });

  return (
    <div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 text-center transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 -z-10" />
      <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-1">
        <div className="w-full h-full rounded-3xl bg-gray-950 flex items-center justify-center">
          {React.cloneElement(icon, { size: 36, className: "text-white" })}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};

const Features = () => {
  const list = [
    { icon: <Mic />, title: "Any Language, Any Accent", desc: "Contribute in your mother tongue—every dialect helps train smarter AI." },
    { icon: <UploadCloud />, title: "One-Click Recording", desc: "Built-in browser recorder, instant upload, zero software needed." },
    { icon: <ShieldCheck />, title: "AI-Powered Quality Check", desc: "Automated scoring ensures only clear, authentic clips get paid." },
    { icon: <Globe />, title: "Earn From Anywhere", desc: "Work remotely, get paid weekly via PayPal, bank, or crypto." },
  ];

  useGSAP(() => {
    gsap.from(".feature-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: "#features", start: "top 80%" },
    });
  });

  return (
    <section id="features" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 relative inline-block">
          Why VocalPoint Stands Out
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">Simple, fair, and built for global voices.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((f, i) => (
            <div key={i} className="feature-card">
              <FeatureCard {...f} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;