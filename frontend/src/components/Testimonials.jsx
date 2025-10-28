import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Urdu Speaker, Pakistan",
    text: "I earned $120 in my first week just by recording 30 short clips. The AI feedback is instant!",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Spanish Teacher, Mexico",
    text: "Finally, a platform that values native speakers. Payouts are fast and reliable.",
    rating: 5,
  },
  {
    name: "Fatima Diallo",
    role: "Wolof Contributor, Senegal",
    text: "I help train AI in my rare language and get paid weekly. This is life-changing.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-16">
          Loved by Voices Worldwide
        </h2>

        <div className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-10 rounded-3xl border border-gray-800">
          <div className="text-6xl text-blue-400/20 absolute top-4 left-6">“</div>
          <p className="text-xl md:text-2xl text-gray-300 italic mb-8 relative z-10">{t.text}</p>
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-sm text-gray-400">{t.role}</p>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;