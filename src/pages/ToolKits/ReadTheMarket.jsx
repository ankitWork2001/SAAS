import React from 'react';
import chartImage from '../../assets/chart.png';

const ReadTheMarket = () => {
  return (
    <div className="relative w-full py-20 bg-[#010B24] overflow-hidden flex justify-center items-center">
      {/* Animated blurred background glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-[600px] h-[600px] bg-[#FF4D4D] blur-[200px] opacity-20 animate-pulse-slow rounded-full top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#3ECFFF] blur-[200px] opacity-20 animate-pulse-slower rounded-full bottom-[-100px] right-[-100px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">
        {/* Left content */}
        <div className="flex-1 text-white">
          <p className="text-[#8896AB] text-lg mb-2">Price Action Tools®</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Read the <span className="text-[#3ECFFF]">Market</span><br />
            Like a <span className="text-[#3ECFFF]">Pro</span>
          </h2>
          <p className="text-[#BCC5D3] text-base md:text-lg mb-6">
            From beginners to pros, TradeSpark’s price action tools reveal what matters most.
            Detect patterns, order blocks, and structure instantly—giving you the edge to spot
            smart money levels and make confident moves.
          </p>
          <button className="bg-white text-[#010B24] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200">
            <span>→</span> Get 30 Days risk free
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src={chartImage}
            alt="Chart"
            className="rounded-[20px] w-full h-auto object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadTheMarket;
