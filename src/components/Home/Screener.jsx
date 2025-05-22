import React from "react";
import screenerChart from "../../assets/graph12.png";

const colors = [
  "rgba(250, 115, 172, 0.7)", // pink
  "rgba(255, 160, 60, 0.7)",  // orange
  "rgba(85, 180, 255, 0.7)",  // blue
];

const rotations = [0, 60, 120]; // Three rotations for three circles

const Screener = () => {
  return (
    <div className="relative w-full py-20 bg-[#010B24] flex justify-center items-center overflow-hidden">
      {/* Disco Light Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        {rotations.map((angle, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "300px",
              height: "300px",
              background: colors[index % colors.length],
              filter: "blur(80px)", // Soften the light for a shady effect
              borderRadius: "50%",
              marginTop: "-150px",
              marginLeft: "-150px",
              transformOrigin: "50% 50%",
              opacity: 0.6,
              mixBlendMode: "screen", // Makes the lights blend like disco lights
            }}
            className="animate-orbit" // Apply the custom orbit animation
          />
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-[92%] max-w-[1240px] rounded-[20px] flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-[#0B1227] via-[#1c1d2e] to-[#391F63] overflow-hidden shadow-xl">
        {/* Text Section */}
        <div className="flex-1 w-full md:w-1/2 text-white z-10">
          <p className="text-sm sm:text-base font-medium text-[#CBD5E1] mb-2">
            <span className="text-[#c4c8f7]">Screeners</span> &{" "}
            <span className="text-[#a98ff8]">Alerts</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white mb-4">
            Discover <span className="text-[#7de2ff]">Winning</span>
            <br />
            Trade <span className="text-[#7de2ff]">Opportunities</span>
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
        <div className="flex-1 w-full md:w-1/2 mt-10 md:mt-0 z-10">
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
