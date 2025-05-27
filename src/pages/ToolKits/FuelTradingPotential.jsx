import React from 'react';
import tradingImage1 from '../../assets/trading1.png';
import tradingImage2 from '../../assets/trading2.png';
import screenersImage1 from '../../assets/screener1.png';
import screenersImage2 from '../../assets/screener2.png';
import chartImage1 from '../../assets/chart11.png';
import chartImage2 from '../../assets/chart12.png';

const FuelTradingPotential = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#010B24] via-[#041433] to-[#0A1A3B] flex items-center justify-center py-16 px-4 md:px-10">
      {/* Animated blurred background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#FF4D4D] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slow rounded-full top-[-100px] sm:top-[-150px] left-[-100px] sm:left-[-150px]"></div>
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#3ECFFF] blur-[150px] sm:blur-[200px] opacity-20 animate-pulse-slower rounded-full bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1240px] flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white mb-8 text-center">
          Fuel your trading potential
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full">
          {/* Card 1: Trading */}
          <div className="group w-full md:w-[30%] bg-[#1A1D23] rounded-[20px] flex flex-col items-center p-6 h-[400px] md:h-[auto]">
            <h3 className="text-2xl font-bold text-white mb-4">Trading</h3>
            <div className="w-full flex-grow flex items-center justify-center">
              <img 
                src={tradingImage1} 
                alt="Trading Chart" 
                className="w-full h-full object-cover group-hover:hidden rounded-lg"
              />
              <img 
                src={tradingImage2} 
                alt="Trading Chart Hover" 
                className="w-full h-full object-cover hidden group-hover:block rounded-lg"
              />
            </div>
          </div>

          {/* Card 2: Screeners */}
          <div className="group w-full md:w-[30%] bg-[#1A1D23] rounded-[20px] flex flex-col items-center p-6 h-[400px] md:h-[auto]">
            <h3 className="text-2xl font-bold text-white mb-4">Screeners</h3>
            <p className="text-base text-gray-300 mb-4 text-center md:text-left">
              Scan assets using any features
            </p>
            <div className="w-full flex-grow flex items-center justify-center">
              <img 
                src={screenersImage1} 
                alt="Screener Image" 
                className="w-full h-full object-cover group-hover:hidden rounded-lg"
              />
              <img 
                src={screenersImage2} 
                alt="Screener Image Hover" 
                className="w-full h-full object-cover hidden group-hover:block rounded-lg"
              />
            </div>
          </div>

          {/* Card 3: Chart */}
          <div className="group w-full md:w-[30%] bg-[#1A1D23] rounded-[20px] flex flex-col items-center p-6 h-[400px] md:h-[auto]">
            <h3 className="text-2xl font-bold text-white mb-4">Chart</h3>
            <div className="w-full flex-grow flex items-center justify-center">
              <img 
                src={chartImage1} 
                alt="Chart Image" 
                className="w-full h-full object-cover group-hover:hidden rounded-lg"
              />
              <img 
                src={chartImage2} 
                alt="Chart Image Hover" 
                className="w-full h-full object-cover hidden group-hover:block rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelTradingPotential;
