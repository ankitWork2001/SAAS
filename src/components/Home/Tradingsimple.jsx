import React, { useEffect, useState } from 'react';
import graph1 from '../../assets/graph11.png';
import graph2 from '../../assets/graph12.png';
import graph3 from '../../assets/graph13.png';
import graph4 from '../../assets/graph14.png';
import graph5 from '../../assets/graph15.png';
import graph6 from '../../assets/graph16.png';

const images = [graph1, graph2, graph3, graph4, graph5, graph6];

const Tradingsimple = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setFade(true);
      }, 700);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-[#010f25] px-4 text-center"
      style={{ fontFamily: "'Inter', sans-serif", paddingBottom: '40px' }}
    >
      <h2
        className="font-bold mb-6"
        style={{
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '1%',
          background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mixBlendMode: 'hard-light',
          userSelect: 'none',
          marginTop: '-40px',  // negative margin to lift heading up
          marginBottom: '24px',
          width: '367px',
          height: '47px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          top: '-20px'  // further lift if needed
        }}
      >
        Trading Simplified
      </h2>

      <div
        className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]"
        style={{ border: 'none' }}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Trading chart ${currentIndex + 1}`}
          className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </div>
    </div>
  );
};

export default Tradingsimple;
