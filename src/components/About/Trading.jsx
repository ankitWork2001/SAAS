import React, { useState } from 'react';
import bgTrust from '../../assets/Rectangle 60.png';
import bgToolsTeam from '../../assets/Rectangle 61.png';
import bgFollowers from '../../assets/Rectangle 62.png';
import bgHallOfFame from '../../assets/Rectangle 63.png';

const options = [
  {
    id: 1,
    text: `Instead of hyped promises or secret systems, we stand for transparency and trust — redefining what traders should expect from the industry.`,
    bg: bgTrust,
  },
  {
    id: 2,
    text: `We’ve been committed to delivering elite trading tools across top charting platforms — powered by one of the most trusted teams of developers in the industry.`,
    bg: bgToolsTeam,
  },
  {
    id: 3,
    text: `Over time, our tools and insights have earned the trust of 500,000+ traders on TradingView — making us the most followed brand on the platform.`,
    bg: bgFollowers,
  },
  {
    id: 4,
    text: `In 2024, TradingView named us Pine Script Wizard — the first and only company to enter their Hall of Fame, honoring our consistent innovation, volume, and quality.`,
    bg: bgHallOfFame,
  },
];

const Trading = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full bg-[#020014] text-white px-4 sm:px-6 md:px-10 py-20 flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
        style={{
          fontFamily: 'Inter',
          background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mixBlendMode: 'hard-light',
        }}
      >
        Trading’s biggest anomaly
      </h2>
      <p className="text-center max-w-2xl text-base sm:text-lg font-medium mb-12 leading-relaxed" style={{ fontFamily: 'Inter' }}>
        Our contributive approach is how we became the largest brand for trading software plug‑ins & scripts.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {options.map(({ id, text, bg }) => {
          const isHover = hoveredId === id;

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className="w-full min-h-[378px] rounded-[20px] transition-all duration-300 ease-in-out px-4 py-6 flex items-center justify-center text-center"
              style={{
                backgroundImage: isHover
                  ? `url(${bg})`
                  : 'linear-gradient(180deg, #010B24 0%, #340086 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9,
              }}
            >
              <p
                className="text-base sm:text-lg font-semibold leading-snug z-10"
                style={{
                  fontFamily: 'Inter',
                  color: '#FFFFFF',
                }}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trading;
