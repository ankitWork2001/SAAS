import React from 'react';
import { ArrowRight } from 'lucide-react';
import mountainBg from '../../assets/mountain-bg.png'; // adjust if needed

const Fuel = () => {
  return (
    <div className="bg-[#0a1229] text-white">
      {/* Hero Section with Mountain Background */}
      <div
        className="text-center pt-20 pb-24 px-4 md:px-16 bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: `url(${mountainBg})`,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Fuel <span className="text-cyan-400">your trading potential</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg max-w-xl mx-auto">
          Get access to the best tools from the world's largest provider of trading indicators.
        </p>
        <button className="mt-6 bg-white text-black font-medium py-2 px-5 rounded-full flex items-center gap-2 mx-auto hover:scale-105 transition">
          <ArrowRight size={18} /> Get 30 Days risk free
        </button>
      </div>

      {/* Footer Section (No background image here) */}
      <div className="pt-16 pb-10 px-4 md:px-16 border-t border-gray-700 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-300">
        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-3">product</h4>
          <ul className="space-y-2">
            <li>Pricing</li>
            <li>Library</li>
            <li>Features</li>
            <li>Toolkits</li>
            <li>Screeners</li>
            <li>AI Backtesting</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Docs</li>
            <li>Blog</li>
            <li>About</li>
            <li>Community</li>
            <li>Affiliates</li>
            <li>Brand</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>Terms of Service</li>
            <li>Disclaimer</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-3">My Account</h4>
          <ul className="space-y-2">
            <li>Account Settings</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Logo and Social Icons */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-3">
          <div className="text-white text-xl font-bold flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-6" />
            TradeSpark
          </div>
          <div className="flex gap-5 mt-4">
            <img src="/yt.svg" alt="YouTube" className="h-5 cursor-pointer" />
            <img src="/x.svg" alt="X" className="h-5 cursor-pointer" />
            <img src="/discord.svg" alt="Discord" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fuel;
