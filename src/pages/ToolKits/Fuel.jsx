import React from 'react';
import { ArrowRight } from 'lucide-react';
import mountainBg from '../../assets/mountain-bg.png'; // adjust if needed

const Fuel = () => {
  return (
    <div className="bg-[#0a1229] text-white">
      {/* Hero Section with Mountain Background */}
      <div
        className="text-center pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-8 md:px-16 bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: `url(${mountainBg})`,
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
          Fuel <span className="text-cyan-400">your trading potential</span>
        </h2>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2 sm:px-0">
          Get access to the best tools from the world's largest provider of trading indicators.
        </p>
        <button className="mt-6 bg-white text-black font-medium py-2 px-5 rounded-full flex items-center gap-2 mx-auto hover:scale-105 transition-transform duration-300">
          <ArrowRight size={18} /> Get 30 Days risk free
        </button>
      </div>
    </div>
  );
};

export default Fuel;
