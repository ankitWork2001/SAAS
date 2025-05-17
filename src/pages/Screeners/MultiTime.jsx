import React from "react";
import multiTimeChart from "../../assets/multitimechart.png"; // Replace with actual image path

const colors = [
  "rgba(138, 92, 255, 0.7)",  // purple (#8a5cff)
  "rgba(255, 255, 90, 0.7)",  // yellow
  "rgba(85, 180, 255, 0.7)",  // blue
  "rgba(62, 207, 255, 0.7)",  // light blue (#3ecfff)
  "rgba(21, 32, 89, 0.7)",    // dark blue (#152059)
];

const rotations = [0, 72, 144, 216, 288];

const orbitKeyframes = `
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(400px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(400px) rotate(-360deg);
  }
}
`;

const MultiTime = () => {
  return (
    <div className="relative w-full py-20 bg-[#010B24] overflow-hidden flex justify-center items-center">
      {/* Orbit animation keyframes */}
      <style>{orbitKeyframes}</style>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.35)] flex flex-col-reverse md:flex-row items-center justify-between px-10 py-16 gap-10 overflow-hidden">
        
        {/* Orbiting colorful glowing orbs behind entire container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          {rotations.map((initialRotation, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "350px",
                height: "200px",
                background: colors[idx],
                filter: "blur(90px)",
                borderRadius: "50% / 50%",
                marginTop: "-100px",
                marginLeft: "-175px",
                transformOrigin: "50% 50%",
                transform: `rotate(${initialRotation}deg) translateX(400px) rotate(-${initialRotation}deg)`,
                animation: "orbit 15s linear infinite",
                animationDelay: `${idx * 3}s`,
                opacity: 0.6,
                boxShadow: `0 0 60px ${colors[idx]}`,
              }}
            />
          ))}
        </div>

        {/* Left image */}
        <div className="flex-1">
          <img
            src={multiTimeChart}
            alt="Multi-Timeframe Chart"
            className="rounded-[20px] w-full h-auto object-contain shadow-lg"
          />
        </div>

        {/* Right Gradient Box */}
        <div className="flex-1 rounded-xl p-6 sm:p-10 bg-gradient-to-br from-[#2e2d47] via-[#4a148c] to-[#0B1437] text-white shadow-lg">
          <p className="text-sm text-gray-300 mb-2">
            Multi-<span className="text-[#8de1ff]">Timeframe</span>{" "}
            <span className="text-[#8a5cff]">Analysis</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Trade <span className="text-white">Any</span>{" "}
            <span className="text-[#8de1ff]">Market,</span>
            <br />
            <span className="text-[#8de1ff]">On Your Terms</span>
          </h2>
          <p className="text-[#D3DCE6] text-base md:text-lg mb-6">
            Harness the power of multi-timeframe analysis with TradeSpark. Scan over
            100,000 assets and customize your view to see only the timeframes that fit
            your strategy. From scalping to swing trading, we help you stay in control.
          </p>
          <button className="bg-white text-[#010B24] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200">
            <span>➜</span> Start Using Screeners Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiTime;
