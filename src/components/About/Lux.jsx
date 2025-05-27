import React from 'react';
import luxBg from '../../assets/lux-bg.jpg'; // adjust if needed

const Lux = () => {
  return (
    <>
      <section
        className="w-full text-white px-4 py-20"
        style={{
          backgroundImage: [
            'linear-gradient(180deg, rgba(2,0,20,0.6) 0%, rgba(12,8,36,0.6) 100%)',
            `url(${luxBg})`
          ].join(', '),
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          {/* Quote */}
          <h2
            className="font-bold"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '110%',
            }}
          >
            <span>“LuxAlgo's contributions </span>
            <span
              style={{
                background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              have become favorites of traders and programmers seeking versatile, top‑tier scripts.”
            </span>
          </h2>

          {/* Description */}
          <p
            className="mx-auto text-[18px] leading-relaxed font-medium max-w-3xl"
            style={{
              fontFamily: 'Inter',
              lineHeight: '150%',
            }}
          >
            The LuxAlgo team is a powerhouse in TradingView's ever‑growing landscape of Community scripts, consistently delivering open‑source scripts of remarkable quality and utility that span an impressive spectrum of diverse and original concepts.
          </p>
        </div>
      </section>
    </>
  );
};

export default Lux;
