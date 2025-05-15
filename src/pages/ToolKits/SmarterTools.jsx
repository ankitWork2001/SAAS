import React from "react";
import girlImg from "../../assets/girl.png"; // adjust the path as needed

const SmarterTools = () => {
  return (
    <section className="relative w-full bg-[#050D26] overflow-hidden py-[120px]">
      <div
        className="relative flex flex-col md:flex-row items-start justify-between"
        style={{ width: "1304px", marginLeft: "110px" }}
      >
        {/* Text Block */}
        <div className="z-10" style={{ width: "753px" }}>
          <p className="uppercase text-sm text-[#A6B1D1] tracking-widest mb-4 font-medium">
            Toolkits
          </p>

          {/* Heading: Two proper lines */}
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "75px",
              lineHeight: "100%",
              letterSpacing: "1%",
              color: "white",
            }}
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
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "150%",
              letterSpacing: "1%",
              color: "#C8C8C8",
              marginTop: "50px",
              width: "534.6px",
            }}
          >
            Whether you're into price action, trend-following, or divergence setups, TradeSpark's toolkits adapt to your needs. Combine strategies and streamline your analysis—all in one TradingView-compatible script built for precision.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-20 md:mt-0 ml-12">
          <img
            src={girlImg}
            alt="Smiling woman using phone"
            className="w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SmarterTools;
