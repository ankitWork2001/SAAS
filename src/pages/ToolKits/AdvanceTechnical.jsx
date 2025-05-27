import React from 'react';
import { ArrowRight } from 'lucide-react';
import chartImage from '../../assets/chart2.png'; // Adjust the path as needed

const AdvanceTechnical = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#010B24] via-[#041433] to-[#0A1A3B] flex items-center justify-center py-16 px-4 md:px-10">
      {/* Animated blurred background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#FF4D4D] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slow rounded-full top-[-100px] sm:top-[-150px] left-[-100px] sm:left-[-150px]"></div>
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#3ECFFF] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slower rounded-full bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1240px] bg-[#010B24] shadow-[20px_20px_100px_0px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-center md:justify-between px-6 sm:px-8 py-10 rounded-[20px] md:h-[566px] gap-8 md:gap-0">
        
        {/* Left: Chart Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img 
            src={chartImage} 
            alt="Technical Chart" 
            className="max-h-[300px] sm:max-h-[400px] md:max-h-[80%] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-0 md:px-6 py-0 md:py-4 text-white space-y-4 text-center md:text-left">
          <p className="text-sm text-gray-400">Signal Engines & Overlays®</p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
            Advanced <span className="text-[#00D1FF]">Technical Analysis</span>, <span className="text-[#00D1FF]">Simplified</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-full md:max-w-none mx-auto md:mx-0">
            S&O is the "gold standard" for technical traders, with a focus on generating the best poUnlock the gold standard of market insights. TradeSpark’s powerful signals and overlays help you track trends, reversals, and momentum with clarity—featuring 6+ algorithms, dynamic overlays.
          </p>
          <button className="mt-4 flex items-center justify-center md:justify-start gap-2 text-white font-medium bg-white/10 border border-white/30 px-5 py-3 rounded-full hover:bg-white/20 transition whitespace-nowrap mx-auto md:mx-0">
            <ArrowRight className="bg-white text-black rounded-full p-1 w-6 h-6" />
            Get 30 Days risk free
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceTechnical;
