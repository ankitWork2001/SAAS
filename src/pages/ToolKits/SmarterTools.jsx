import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import girlImg from "../../assets/girl.png";
import silverBar from "../../assets/Background.png";

const SmarterTools = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem("toolsBarAnimationDone") === "true";
    if (done) setAnimationDone(true);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
    sessionStorage.setItem("toolsBarAnimationDone", "true");
  };

  return (
    <section className="relative w-full bg-[#050D26] overflow-hidden py-16 px-6 lg:px-0">
      {/* Background animation bar */}
      <motion.img
        src={silverBar}
        alt="Background"
        initial={animationDone ? { y: -50, opacity: 1 } : { y: 50, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: animationDone ? 0 : 4, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1304px] mx-auto gap-12">
        {/* Girl Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[50%] flex justify-center items-center order-1 lg:order-2"
        >
          <img
            src={girlImg}
            alt="Smiling woman using phone"
            className="w-[80%] max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-contain mx-auto"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full lg:w-[50%] text-center lg:text-left lg:ml-12 order-2 lg:order-1"
        >
          <p className="uppercase text-sm text-[#A6B1D1] tracking-widest mb-4 font-medium">
            Toolkits
          </p>

          <h1 className="font-inter font-bold text-[38px] sm:text-[48px] lg:text-[75px] leading-[110%] lg:leading-[100%] tracking-[1%] text-white">
            <div>Smarter Tools for</div>
            <div
              style={{
                background:
                  "linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "hard-light",
              }}
            >
              Every Trading Style
            </div>
          </h1>

          <p className="font-inter font-medium text-[16px] sm:text-[18px] lg:text-[22px] leading-[150%] tracking-[1%] text-[#C8C8C8] mt-8 lg:mt-12 max-w-[534.6px] mx-auto lg:mx-0">
            Whether you're into price action, trend-following, or divergence setups, TradeSpark's toolkits adapt to your needs. Combine strategies and streamline your analysis—all in one TradingView-compatible script built for precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SmarterTools;
