import React from "react";
import womanImg from "../../assets/woman-laptop.png"; // Adjust the path as needed

const Screener = () => {
  return (
    <section className="relative w-full bg-[#0B1437] overflow-hidden py-[120px]">
      <div
        className="relative flex flex-col md:flex-row items-start justify-between"
        style={{ width: "1304px", marginLeft: "110px" }}
      >
        {/* Text Block */}
        <div className="z-10" style={{ width: "753px" }}>
          <p className="uppercase text-sm text-[#A6B1D1] tracking-widest mb-4 font-medium">
            Screeners
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
            <div>Discover Smarter</div>
            <div
              style={{
                background: "linear-gradient(98.15deg, #2DB2FF 17.31%, #0594BB 145.03%)",
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
            TradeSpark helps you unlock powerful trading insights across stocks,
            crypto, and forex. Use our advanced tools to filter, analyze, and act
            on high-probability setups. Customize screeners to fit your strategy
            and seize opportunities with confidence.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mt-20 md:mt-0 ml-12">
          <img
            src={womanImg}
            alt="Woman with laptop"
            className="w-[650px] h-auto object-contain" // Matching SmarterTools image sizing
          />
        </div>
      </div>
    </section>
  );
};

export default Screener;
