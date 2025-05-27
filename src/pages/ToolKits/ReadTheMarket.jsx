import React from 'react';
import chartImage from '../../assets/chart.png';

const ReadTheMarket = () => {
  return (
    <div className="relative w-full py-20 bg-[#010B24] overflow-hidden flex justify-center items-center px-4 md:px-0">
      {/* Animated blurred background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#FF4D4D] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slow rounded-full top-[-100px] sm:top-[-150px] left-[-100px] sm:left-[-150px]"></div>
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#3ECFFF] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slower rounded-full bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-12 sm:py-16 gap-8 sm:gap-10">
        
        {/* Left content */}
        <div className="flex-1 text-white max-w-full md:max-w-none">
          <p className="text-[#8896AB] text-base sm:text-lg mb-2">Price Action Tools®</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            Read the <span className="text-[#3ECFFF]">Market</span><br />
            Like a <span className="text-[#3ECFFF]">Pro</span>
          </h2>
          <p className="text-[#BCC5D3] text-sm sm:text-base md:text-lg mb-6 max-w-full">
            From beginners to pros, TradeSpark’s price action tools reveal what matters most.
            Detect patterns, order blocks, and structure instantly—giving you the edge to spot
            smart money levels and make confident moves.
          </p>
          <button className="bg-white text-[#010B24] px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200 whitespace-nowrap">
            <span>→</span> Get 30 Days risk free
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1 w-full max-w-[450px] sm:max-w-[550px] md:max-w-full">
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
