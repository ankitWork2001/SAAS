// src/components/Trading/Trading.jsx

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
    <div className="w-full bg-[#020014] text-white px-4 py-20 flex flex-col items-center">
      {/* Heading */}
      <h2
        className="font-bold mb-4 text-center"
        style={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '1%',
          mixBlendMode: 'hard-light',
          background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Trading’s biggest anomaly
      </h2>
      <p
        className="mb-12 text-center max-w-2xl"
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '150%',
        }}
      >
        Our contributive approach is how we became the largest brand for trading software plug‑ins & scripts.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map(({ id, text, bg }) => {
          const isHover = hoveredId === id;

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className="transition-all duration-300 ease-in-out"
              style={{
                width: 274,
                height: 378,
                opacity: 0.6,
                borderRadius: 20,
                backgroundImage: isHover
                  ? `url(${bg})`
                  : 'linear-gradient(180deg, #010B24 0%, #340086 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <p
                className="text-center"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '1%',
                  color: '#FFFFFF',
                  zIndex: 1,
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
