import React from "react";
import screenerChart from "../../assets/graph12.png";

const colors = [
  "rgba(250, 115, 172, 0.4)", // pink
  "rgba(255, 160, 60, 0.4)",  // orange
  "rgba(85, 180, 255, 0.4)",  // blue
  "rgba(107, 255, 149, 0.4)", // green
  "rgba(214, 123, 255, 0.4)", // violet
  "rgba(249, 255, 142, 0.4)", // yellow
];

const orbs = [
  { size: 150, orbitRadius: 80, speed: 6, top: "20%", left: "30%" },
  { size: 130, orbitRadius: 70, speed: 7, top: "60%", left: "20%" },
  { size: 170, orbitRadius: 90, speed: 5, top: "40%", left: "70%" },
  { size: 140, orbitRadius: 75, speed: 6.5, top: "75%", left: "60%" },
  { size: 120, orbitRadius: 65, speed: 8, top: "25%", left: "80%" },
  { size: 160, orbitRadius: 85, speed: 5.5, top: "55%", left: "50%" },
];

const Screener = () => {
  // Generate keyframes string dynamically for each orb speed
  const generateOrbitKeyframes = (orbitRadius) => `
    @keyframes orbit-${orbitRadius} {
      0% {
        transform: rotate(0deg) translateX(${orbitRadius}px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(${orbitRadius}px) rotate(-360deg);
      }
    }
  `;

  return (
    <div className="relative w-full py-20 bg-[#010B24] flex justify-center items-center overflow-hidden">
      <style>
        {orbs.map(({ orbitRadius }) => generateOrbitKeyframes(orbitRadius)).join("\n")}
      </style>

      {/* Main Card */}
      <div className="relative z-10 w-[92%] max-w-[1240px] rounded-[20px] flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-[#0B1227] via-[#1c1d2e] to-[#391F63] overflow-hidden shadow-xl">

        {/* Orbiting Shadowy Glowing Circles filling inner div */}
        {orbs.map(({ size, orbitRadius, speed, top, left }, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
              background: colors[i % colors.length],
              borderRadius: "50%",
              filter: "blur(30px)",
              opacity: 0.35,
              mixBlendMode: "screen",
              transformOrigin: `-${orbitRadius}px center`,
              animation: `orbit-${orbitRadius} ${speed}s linear infinite`,
              zIndex: 1,
            }}
          />
        ))}

        {/* Text Section */}
        <div className="flex-1 w-full md:w-1/2 text-white z-20 relative">
          <p className="text-sm sm:text-base font-medium text-[#CBD5E1] mb-2">
            <span className="text-[#c4c8f7]">Screeners</span> &{" "}
            <span className="text-[#a98ff8]">Alerts</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white mb-4">
            Discover <span className="text-[#7de2ff]">Winning</span>
            <br />
            Trade <span className="text-[#7deff]">Opportunities</span>
            <br />
            Instantly
          </h2>
          <p className="text-[#D3DCE6] text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            Leverage cutting-edge screeners and real-time alerts powered by
            advanced trading algorithms. Simplify decision-making and uncover top
            trade setups across stocks, crypto, and forex—before the crowd.
          </p>
          <button className="flex items-center gap-2 bg-white text-[#010B24] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-200 text-sm sm:text-base shadow-md">
            <span>➜</span> Unlock Access
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/2 mt-10 md:mt-0 z-20 relative">
          <img
            src={screenerChart}
            alt="Screener Chart"
            className="rounded-[20px] w-full object-contain shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Screener;
