import React, { useState, useEffect } from 'react';
import trustpilot from '../../assets/Vector.png';

import imgA from '../../assets/A.png';
import imgB from '../../assets/B.png';
import imgC from '../../assets/C.png';
import imgD from '../../assets/D.png';
import imgE from '../../assets/E.png';
import imgF from '../../assets/F.png';

const slides = [
  { img: imgA, name: 'Trader A' },
  { img: imgB, name: 'Trader B' },
  { img: imgC, name: 'Trader C' },
  { img: imgD, name: 'Trader D' },
  { img: imgE, name: 'Trader E' },
  { img: imgF, name: 'Trader F' },
];

const RealTrader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#040A1C] py-16 px-4 text-white flex flex-col items-center min-h-[600px]">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Real Traders, <span className="text-[#00C4FF]">Real Stories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full h-full">
        {/* Left card */}
        <div className="bg-[#0D172B] rounded-xl p-8 shadow-lg flex flex-col justify-between">
          {/* Trustpilot image + text side by side */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={trustpilot} alt="Trustpilot" className="w-32" />
            <span className="text-[#00C4FF] text-2xl font-semibold">Trustpilot</span>
          </div>

          <p className="text-lg mb-6 text-center">Check out our other Reviews!</p>

          <button className="flex items-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-full w-max hover:bg-gray-200 transition mx-auto">
            <span className="text-lg">→</span> See More Review
          </button>
        </div>

        {/* Right card */}
        <div className="bg-[#0D172B] rounded-xl p-8 shadow-lg flex flex-col items-center justify-center">
          <div className="w-full flex-grow mb-4 rounded-lg overflow-hidden flex items-center justify-center" style={{ minHeight: '350px' }}>
            <img
              src={slides[currentIndex].img}
              alt={slides[currentIndex].name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-medium text-white">{slides[currentIndex].name}</h3>
        </div>
      </div>
    </div>
  );
};

export default RealTrader;
