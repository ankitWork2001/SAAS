import React from "react";
import tradingTools from "../../assets/graph12.png";

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
    transform: rotate(0deg) translateX(350px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(350px) rotate(-360deg);
  }
}
`;

const Pro = () => {
  return (
    <div className="relative w-full py-16 bg-[#010B24] flex justify-center items-center overflow-hidden">
      <style>{orbitKeyframes}</style>

      <div className="relative z-10 w-full max-w-[1240px] bg-[#0B1227] rounded-[20px] shadow-[0_0_60px_rgba(0,0,0,0.7)] px-6 sm:px-10 py-10 sm:py-16 flex flex-col md:flex-row items-center gap-10 sm:gap-14 overflow-hidden">

        {/* Animated blurred colored orbs */}
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
                filter: "blur(75px)",
                borderRadius: "50% / 50%",
                marginTop: "-100px",
                marginLeft: "-175px",
                transformOrigin: "50% 50%",
                transform: `rotate(${initialRotation}deg) translateX(350px) rotate(-${initialRotation}deg)`,
                animation: "orbit 12s linear infinite",
                animationDelay: `${idx * 2}s`,
                opacity: 0.4,
                boxShadow: `0 0 40px ${colors[idx]}`,
              }}
            />
          ))}
        </div>

        {/* Left Chart Image */}
        <div className="flex-1 w-full relative z-20 mb-6 md:mb-0">
          <img
            src={tradingTools}
            alt="Trading Tools Chart"
            className="rounded-[16px] w-full h-auto object-contain shadow-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="flex-1 text-white relative z-20">
          <p
            className="text-sm mb-1"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #010B24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Pro Toolkits
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            style={{
              background: "linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            Next-{" "}
            <span
              style={{
                background: "linear-gradient(98.15deg, #8DE1FF 0%, #0594BB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Level
            </span>
            <br />
            Trading{" "}
            <span
              style={{
                background: "linear-gradient(98.15deg, #8A5CFF 0%, #3A1F7D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Tools
            </span>
          </h2>

          <p className="text-[#D3DCE6] text-sm sm:text-base md:text-lg mb-6">
            Simplify complex price action, spot high-probability signals, and track
            smart money reversals — all with our advanced TradingView-compatible
            toolkits.
          </p>

          <button className="bg-white text-[#010B24] px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition duration-200 text-sm sm:text-base">
            <span>➜</span> Level Up Your Charts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pro;
