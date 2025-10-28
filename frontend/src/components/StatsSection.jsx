import React, { useEffect, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count}{suffix}</>;
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-blue-400">$<Counter end={750} />K+</div>
          <p className="text-gray-400 mt-2">Total Payouts</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-indigo-400"><Counter end={125} />+</div>
          <p className="text-gray-400 mt-2">Languages</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-400"><Counter end={10} />K+</div>
          <p className="text-gray-400 mt-2">Contributors</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-purple-400"><Counter end={4.9} suffix="/5" /></div>
          <p className="text-gray-400 mt-2">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;