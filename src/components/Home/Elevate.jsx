import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/boy.png';

const Elevate = () => {
  // Dynamic bar graph (bottom-centered)
  const chartBars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    height: Math.floor(Math.random() * 120) + 40,
  }));

  // Abstract decorative bars (scattered)
  const abstractBars = [
    { height: 200, top: '10%', left: '5%' },
    { height: 150, top: '30%', left: '15%' },
    { height: 280, top: '5%', left: '25%' },
    { height: 180, top: '35%', left: '35%' },
    { height: 120, top: '50%', left: '45%' },
    { height: 220, top: '20%', left: '55%' },
    { height: 160, top: '40%', left: '65%' },
    { height: 250, top: '10%', left: '75%' },
    { height: 130, top: '30%', left: '85%' },
  ];

  return (
    <section className="relative min-h-screen bg-[#020424] text-white px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">

      {/* Decorative Abstract Bars */}
      <div className="absolute inset-0 z-0">
        {abstractBars.map((bar, index) => (
          <motion.div
            key={`abstract-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="absolute w-[40px] rounded-[30px] bg-gradient-to-b from-gray-200 via-white/20 to-transparent backdrop-blur-sm shadow-lg"
            style={{
              height: `${bar.height}px`,
              top: bar.top,
              left: bar.left,
            }}
          />
        ))}
      </div>

      {/* Bottom Centered Chart Bars */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex gap-1 justify-center items-end px-10 opacity-20">
        {chartBars.map(bar => (
          <motion.div
            key={`chart-${bar.id}`}
            initial={{ height: 0 }}
            animate={{ height: bar.height }}
            transition={{ duration: 1.2, delay: bar.id * 0.05 }}
            className="w-1 rounded bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 shadow-sm"
          />
        ))}
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl text-center lg:text-left lg:pl-10 xl:pl-20 space-y-6 order-2 lg:order-1"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Elevate <span className="text-[#38BDF8]">Your</span><br />
          Trading <span className="text-[#38BDF8]">Game</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium leading-relaxed">
          Unlock powerful indicators and AI-driven backtesting — trusted by over 15,000 traders to make smarter, faster decisions.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition">
          Get 30 Days Risk Free →
        </button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[50%] mb-10 lg:mb-0 flex justify-center relative z-10 order-1 lg:order-2"
      >
        <img src={heroImage} alt="Hero Visual" className="max-h-[500px] object-contain" />
      </motion.div>
    </section>
  );
};

export default Elevate;
