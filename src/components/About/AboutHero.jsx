// src/components/AboutHero/AboutHero.jsx

import React from 'react';
import starsBg from '../../assets/stars.jpg';

const AboutHero = () => {
  console.log('starsBg URL:', starsBg);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center text-white px-4 text-center"
      style={{
        backgroundImage: [
          // semi-transparent gradient
          'linear-gradient(180deg, rgba(2,0,20,0.7) 0%, rgba(12,8,36,0.7) 100%)',
          // your stars image
          `url(${starsBg})`
        ].join(', '),
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-5xl mx-auto space-y-8 py-12">
        <h2
          className="text-[35px] font-medium tracking-[-0.055em]"
          style={{
            background: 'linear-gradient(270deg, #3B3B3B 0%, #E3E3E3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter',
          }}
        >
          About
        </h2>
        <h1
          className="text-[40px] font-bold tracking-[0.01em] mx-auto max-w-[864px] leading-snug"
          style={{
            background:
              'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mixBlendMode: 'hard-light',
            fontFamily: 'Inter',
          }}
        >
          Empowering Traders with Smarter Insights
        </h1>
        <p
          className="text-[20px] font-semibold tracking-[0.01em] text-center leading-relaxed"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Inter',
          }}
        >
          Learn how TradeSpark helps traders of all levels stay ahead in the market.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
