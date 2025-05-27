// src/components/Market/Market.jsx

import React from 'react';
import iconTools from '../../assets/tools.png';
import iconChart from '../../assets/chart123.png';
import iconMagnifier from '../../assets/magnifier.png';
import iconLaptop from '../../assets/laptop.png';

const cards = [
  { id: 1, image: iconTools, alt: 'Tools Card' },
  { id: 2, image: iconChart, alt: 'Chart Card' },
  { id: 3, image: iconMagnifier, alt: 'Magnifier Card' },
  { id: 4, image: iconLaptop, alt: 'Laptop Card' },
];

const Market = () => {
  return (
    <section className="w-full bg-[#020014] py-20 px-4">
      {/* Heading */}
      <h2
        className="text-center font-bold"
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
        Markets, decoded
      </h2>

      {/* Cards Grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {cards.map(({ id, image, alt }) => (
          <div key={id} className="flex justify-center">
            <img src={image} alt={alt} className="w-full max-w-sm object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Market;
