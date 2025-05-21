import React from "react";
import womanImg from "../../assets/woman-laptop.png"; // Adjust the path as needed

const Screener = () => {
  return (
    <section className="relative w-full bg-[#0B1437] overflow-hidden py-[80px] md:py-[120px] px-6 md:px-0">
      <div
        className="relative flex flex-col md:flex-row items-start justify-between max-w-[1304px] mx-auto"
      >
        {/* Text Block */}
        <div className="z-10 md:w-[58%] w-full">
          <p className="uppercase text-sm text-[#A6B1D1] tracking-widest mb-4 font-medium">
            Screeners
          </p>

          {/* Heading: Two proper lines */}
          <h1
            className="font-inter font-bold text-[42px] md:text-[75px] leading-[1.1] tracking-[0.01em] text-white"
            style={{
              lineHeight: "100%",
            }}
          >
            <div>Discover Smarter</div>
            <div
              style={{
                background:
                  "linear-gradient(98.15deg, #2DB2FF 17.31%, #0594BB 145.03%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "hard-light",
              }}
            >
              Trading with TradeSpark
            </div>
          </h1>

          {/* Description */}
          <p
            className="mt-12 text-[16px] md:text-[22px] leading-[1.5] text-[#C8C8C8] max-w-[534.6px]"
            style={{
              letterSpacing: "0.01em",
            }}
          >
            TradeSpark helps you unlock powerful trading insights across stocks,
            crypto, and forex. Use our advanced tools to filter, analyze, and act
            on high-probability setups. Customize screeners to fit your strategy
            and seize opportunities with confidence.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-12 md:mt-0 md:ml-12 w-full md:w-[42%] flex justify-center md:justify-start">
          <img
            src={womanImg}
            alt="Woman with laptop"
            className="w-[280px] sm:w-[400px] md:w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Screener;
