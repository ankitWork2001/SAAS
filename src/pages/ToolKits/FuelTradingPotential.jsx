import React from 'react';
import tradingImage1 from '../../assets/trading1.png';
import tradingImage2 from '../../assets/trading2.png';
import screenersImage1 from '../../assets/screener1.png';
import screenersImage2 from '../../assets/screener2.png';
import chartImage1 from '../../assets/chart11.png';
import chartImage2 from '../../assets/chart12.png';

const FuelTradingPotential = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#010B24] via-[#041433] to-[#0A1A3B] flex items-center justify-center">
      {/* Animated blurred background glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-[600px] h-[600px] bg-[#FF4D4D] blur-[200px] opacity-20 animate-pulse-slow rounded-full top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#3ECFFF] blur-[200px] opacity-20 animate-pulse-slower rounded-full bottom-[-100px] right-[-100px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold leading-tight text-white mb-8">
          Fuel your trading potential
        </h2>
        <div className="flex justify-center gap-8 w-full h-[70%]">
          {/* Card 1: Trading */}
          <div className="group w-[30%] h-full bg-[#1A1D23] rounded-[20px] flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Trading</h3>
            <div className="w-full h-[70%] flex items-center justify-center">
              <img 
                src={tradingImage1} 
                alt="Trading Chart" 
                className="w-full h-full object-cover group-hover:hidden"
              />
              <img 
                src={tradingImage2} 
                alt="Trading Chart Hover" 
                className="w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          </div>

          {/* Card 2: Screeners */}
          <div className="group w-[30%] h-full bg-[#1A1D23] rounded-[20px] flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Screeners</h3>
            <p className="text-base text-gray-300 mb-4">
              Scan assets using any features
            </p>
            <div className="w-full h-[70%] flex items-center justify-center">
              <img 
                src={screenersImage1} 
                alt="Screener Image" 
                className="w-full h-full object-cover group-hover:hidden"
              />
              <img 
                src={screenersImage2} 
                alt="Screener Image Hover" 
                className="w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          </div>

          {/* Card 3: Chart */}
          <div className="group w-[30%] h-full bg-[#1A1D23] rounded-[20px] flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Chart</h3>
            <div className="w-full h-[70%] flex items-center justify-center">
              <img 
                src={chartImage1} 
                alt="Chart Image" 
                className="w-full h-full object-cover group-hover:hidden"
              />
              <img 
                src={chartImage2} 
                alt="Chart Image Hover" 
                className="w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelTradingPotential;