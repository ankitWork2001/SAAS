import React, { useState, useEffect } from 'react';
import chartOverlay from '../../assets/back.png';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import bg4 from '../../assets/bg4.png';
import bg5 from '../../assets/bg5.png';
import bg6 from '../../assets/bg6.png';

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

const Next = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#060b1a] text-white flex items-center justify-center px-6 md:px-20 py-20 overflow-hidden">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`bg-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-sm text-[#9fa3b5] uppercase font-medium">Next-Gen Backtesting</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let AI <span className="text-[#58b9f4]">Craft Your</span><br />
            <span className="text-[#58b9f4]">Next Profitable</span><br />Strategy
          </h1>
          <p className="text-[#b6b9c5] max-w-md">
            Harness the power of AI to discover high-performance trading strategies automatically. 
            Integrate our next-gen backtesting tools into any platform and optimize your trades 
            with confidence and precision.
          </p>
          <button className="flex items-center gap-2 bg-[#d1d5db] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition">
            <span>Unlock Access</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Right Section (Image Overlay) */}
        <div className="relative w-full">
          <img 
            src={chartOverlay} 
            alt="AI Chart Strategy" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Next;
