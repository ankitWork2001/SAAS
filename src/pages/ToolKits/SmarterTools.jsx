import React from "react";
import girlImg from "../../assets/girl.png";

const SmarterTools = () => {
  return (
    <section className="relative w-full bg-[#050D26] overflow-hidden py-[120px] px-6 md:px-0">
      <div
        className="relative flex flex-col md:flex-row items-start justify-between max-w-[1304px] mx-auto"
      >
        {/* Text Block */}
        <div className="z-10 w-full md:w-[753px]">
          <p className="uppercase text-sm text-[#A6B1D1] tracking-widest mb-4 font-medium">
            Toolkits
          </p>

          {/* Heading */}
          <h1
            className="font-inter font-bold text-[48px] md:text-[75px] leading-[110%] md:leading-[100%] tracking-[1%] text-white"
          >
            <div>Smarter Tools for</div>
            <div
              style={{
                background: "linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "hard-light",
              }}
            >
              Every Trading Style
            </div>
          </h1>

          {/* Description */}
          <p
            className="font-inter font-medium text-[18px] md:text-[22px] leading-[150%] tracking-[1%] text-[#C8C8C8] mt-12 max-w-[534.6px]"
          >
            Whether you're into price action, trend-following, or divergence setups, TradeSpark's toolkits adapt to your needs. Combine strategies and streamline your analysis—all in one TradingView-compatible script built for precision.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-12 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src={girlImg}
            alt="Smiling woman using phone"
            className="w-full max-w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SmarterTools;
