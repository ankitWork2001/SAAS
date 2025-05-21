import React from "react";
import chartImage from "../../assets/chart.png";

const colors = [
  "rgba(255, 80, 80, 0.7)",   // red
  "rgba(255, 255, 90, 0.7)",  // yellow
  "rgba(85, 180, 255, 0.7)",  // blue
];

const rotations = [0, 120, 240];

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

const FindWinning = () => {
  return (
    <div className="relative w-full py-16 md:py-20 bg-[#010B24] overflow-hidden flex justify-center items-center px-4 sm:px-6">
      {/* Orbit animation keyframes */}
      <style>{orbitKeyframes}</style>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-10 py-10 md:py-16 gap-10 overflow-hidden">
        
        {/* Orbiting Orbs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          {rotations.map((deg, idx) => (
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
                transform: `rotate(${deg}deg) translateX(400px) rotate(-${deg}deg)`,
                animation: "orbit 12s linear infinite",
                animationDelay: `${idx * 4}s`,
                opacity: 0.6,
                boxShadow: `0 0 60px ${colors[idx]}`,
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="flex-1 rounded-xl p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#7b1fa2] via-[#512da8] to-[#0B1437] text-white shadow-lg w-full">
          <p className="text-sm text-gray-300 mb-2">
            Toolkit <span className="text-[#8de1ff]">Screening</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
            Find <span className="text-[#8de1ff]">Winning</span><br />
            Setups <span className="text-[#8de1ff]">Faster</span>
          </h2>
          <p className="text-[#D3DCE6] text-base sm:text-lg mb-6">
            Forget the endless search. Instantly scan charts for top trade opportunities using smart filters,
            indicators, and pattern recognition. Whether you're into stocks, crypto, or forex—TradeSpark helps
            you spot high-potential trades in seconds.
          </p>
          <button className="bg-white text-[#010B24] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200">
            <span>➜</span> Get Started Now
          </button>
        </div>

        {/* Chart Image */}
        <div className="flex-1 w-full flex justify-center items-center">
          <img
            src={chartImage}
            alt="Chart"
            className="rounded-[20px] w-full max-w-[500px] h-auto object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FindWinning;
