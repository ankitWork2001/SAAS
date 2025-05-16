import React from "react";
import quicklyChart from "../../assets/quicklychart.png";

const colors = [
  "rgba(250, 115, 172, 0.7)", // pink
  "rgba(255, 160, 60, 0.7)",  // orange
  "rgba(85, 180, 255, 0.7)",  // blue
  "rgba(255, 255, 90, 0.7)",  // yellow
];

const rotations = [0, 90, 180, 270];

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

const Quickly = () => {
  return (
    <div className="relative w-full py-20 bg-[#010B24] overflow-hidden flex justify-center items-center">
      {/* Orbit animation keyframes */}
      <style>{orbitKeyframes}</style>

      {/* Main container with glowing orbs inside */}
      <div className="relative z-10 w-full max-w-[1240px] rounded-[20px] shadow-lg flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10 bg-[#0B1227] overflow-hidden">
        
        {/* Glowing moving orbs behind entire inner container */}
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
                animation: "orbit 8s linear infinite",
                animationDelay: `${idx * 2}s`,
                opacity: 0.6,
                boxShadow: `0 0 60px ${colors[idx]}`,
              }}
            />
          ))}
        </div>

        {/* Left text section */}
        <div className="flex-1 rounded-xl p-6 sm:p-10 bg-gradient-to-br from-[#6a0572] via-[#5a189a] to-[#70e000] text-white shadow-lg relative z-10">
          <p className="text-sm text-gray-300 mb-2">
            Smart <span className="text-[#b388ff]">Sorting</span>{" "}
            <span className="text-[#c0c0ff]">Tools</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Quickly <span className="text-[#8de1ff]">Spot Bullish</span>
            <br />
            or <span className="text-[#8de1ff]">Bearish Trends</span>
          </h2>
          <p className="text-[#D3DCE6] text-base md:text-lg mb-6">
            TradeSpark helps you instantly rank assets by bullish or bearish signals
            using intelligent filters.
          </p>
          <button className="bg-white text-[#010B24] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200">
            <span>➜</span> Get 30 Days risk free
          </button>
        </div>

        {/* Right image section */}
        <div className="flex-1 relative z-10">
          <img
            src={quicklyChart}
            alt="Bullish Bearish Trends Chart"
            className="rounded-[20px] w-full h-auto object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Quickly;
