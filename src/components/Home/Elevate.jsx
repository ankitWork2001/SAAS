import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/boy.png';
import silverBar from '../../assets/Background.png';

const Elevate = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem('barAnimationDone') === 'true';
    if (done) setAnimationDone(true);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
    sessionStorage.setItem('barAnimationDone', 'true');
  };

  return (
    <section
      className="relative min-h-screen text-white px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[#040A1C]"
      style={{ border: '3px solid #000000' }}
    >
      {/* Background bar */}
      <motion.img
        src={silverBar}
        alt="Background"
        initial={animationDone ? { y: -50, opacity: 1 } : { y: 50, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: animationDone ? 0 : 4, ease: 'easeInOut' }}
        onAnimationComplete={handleAnimationComplete}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Hero Image (Mobile First) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[60%] mb-10 lg:mb-0 flex justify-center relative z-10 order-1 lg:order-2"
      >
        <img src={heroImage} alt="Hero Visual" className="max-h-[600px] object-contain" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl text-center lg:text-left lg:pl-10 xl:pl-20 space-y-6 order-2 lg:order-1"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide">
          <span className="bg-gradient-to-r from-white via-white to-[#0594BB] bg-clip-text text-transparent">
            Elevate Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white to-[#0594BB] bg-clip-text text-transparent">
            Trading Game
          </span>
        </h1>

        <p className="text-[18px] sm:text-[22px] font-medium text-white px-4 py-6 leading-snug tracking-wide">
          Unlock powerful indicators and AI-driven backtesting — trusted by over 15,000 traders to make smarter, faster decisions.
        </p>

        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2 group mx-auto lg:mx-0">
          Get 30 Days Risk Free
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Elevate;
