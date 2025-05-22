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
      setFade(false); // start fade-out

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setFade(true); // fade-in new image
      }, 500); // match with fade duration
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#010f25] py-10 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Trading <span className="text-cyan-400">Simplified</span>
      </h2>

      <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-cyan-800 h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Trading chart ${currentIndex + 1}`}
          className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default Tradingsimple;
