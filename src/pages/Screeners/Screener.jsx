import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import womanImg from "../../assets/woman-laptop.png"; // Adjust the path as needed
import silverBar from "../../assets/Background.png"; // You can replace this with your desired background

const Screener = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem("barAnimationDone") === "true";
    if (done) setAnimationDone(true);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
    sessionStorage.setItem("barAnimationDone", "true");
  };

  return (
    <section
      className="relative min-h-screen text-white px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[#040A1C]"
      style={{ border: "3px solid #000000" }}
    >
      {/* Background Bar */}
      <motion.img
        src={silverBar}
        alt="Background"
        initial={animationDone ? { y: -50, opacity: 1 } : { y: 50, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: animationDone ? 0 : 4, ease: "easeInOut" }}
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
        <img
          src={womanImg}
          alt="Woman with laptop"
          className="max-h-[600px] object-contain"
        />
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
            Discover Smarter
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white to-[#0594BB] bg-clip-text text-transparent">
            Trading with TradeSpark
          </span>
        </h1>

        <p className="text-[18px] sm:text-[22px] font-medium text-white px-4 py-6 leading-snug tracking-wide">
          TradeSpark helps you unlock powerful trading insights across stocks,
          crypto, and forex. Use our advanced tools to filter, analyze, and act
          on high-probability setups. Customize screeners to fit your strategy
          and seize opportunities with confidence.
        </p>

        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2 group mx-auto lg:mx-0">
          Start Your Journey Now
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Screener;
