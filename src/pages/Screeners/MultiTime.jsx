import React from "react";
import multiTimeChart from "../../assets/multitimechart.png"; // Replace with actual image path

const colors = [
  "rgba(138, 92, 255, 0.7)",
  "rgba(255, 255, 90, 0.7)",
  "rgba(85, 180, 255, 0.7)",
  "rgba(62, 207, 255, 0.7)",
  "rgba(21, 32, 89, 0.7)",
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
    <div className="relative w-full py-16 sm:py-20 bg-[#010B24] overflow-hidden flex justify-center items-center">
      <style>{orbitKeyframes}</style>

      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0px_0px_60px_rgba(0,0,0,0.35)] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 py-10 sm:py-16 gap-8 sm:gap-10">
        
        {/* Orbiting glowing backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          {rotations.map((initialRotation, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "300px",
                height: "180px",
                background: colors[idx],
                filter: "blur(90px)",
                borderRadius: "50% / 50%",
                marginTop: "-90px",
                marginLeft: "-150px",
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

        {/* Image Section */}
        <div className="flex-1 w-full">
          <img
            src={multiTimeChart}
            alt="Multi-Timeframe Chart"
            className="rounded-[20px] w-full h-auto object-contain shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full rounded-xl p-5 sm:p-10 bg-gradient-to-br from-[#2e2d47] via-[#4a148c] to-[#0B1437] text-white shadow-lg">
          <p className="text-xs sm:text-sm text-gray-300 mb-2">
            Multi-<span className="text-[#8de1ff]">Timeframe</span>{" "}
            <span className="text-[#8a5cff]">Analysis</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            Trade <span className="text-white">Any</span>{" "}
            <span className="text-[#8de1ff]">Market,</span>
            <br />
            <span className="text-[#8de1ff]">On Your Terms</span>
          </h2>
          <p className="text-[#D3DCE6] text-sm sm:text-base md:text-lg mb-6">
            Harness the power of multi-timeframe analysis with TradeSpark. Scan over
            100,000 assets and customize your view to see only the timeframes that fit
            your strategy. From scalping to swing trading, we help you stay in control.
          </p>
          <button className="bg-white text-[#010B24] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200 text-sm sm:text-base">
            <span>➜</span> Start Using Screeners Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiTime;
