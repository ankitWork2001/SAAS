import React from 'react';
import starsBg from '../../assets/stars.jpg';

const AboutHero = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center text-white px-4 sm:px-6 md:px-10 text-center"
      style={{
        backgroundImage: [
          'linear-gradient(180deg, rgba(2,0,20,0.7) 0%, rgba(12,8,36,0.7) 100%)',
          `url(${starsBg})`
        ].join(', '),
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-5xl mx-auto space-y-6 py-12 md:py-20">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-medium tracking-tight"
          style={{
            background: 'linear-gradient(270deg, #3B3B3B 0%, #E3E3E3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter',
          }}
        >
          About
        </h2>

        {/* Main Heading */}
        <h1
          className="text-[28px] sm:text-[32px] md:text-[40px] font-bold tracking-tight leading-snug mx-auto max-w-3xl"
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

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-tight mx-auto max-w-2xl"
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
