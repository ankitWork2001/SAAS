import React from 'react';
import luxBg from '../../assets/lux-bg.jpg'; // adjust if needed

const Lux = () => {
  return (
    <>
      <section
        className="w-full text-white px-4 py-20"
        style={{
          backgroundImage: [
            // semi‑dark overlay to ensure text legibility
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
            {/* first part white */}
            <span>“LuxAlgo's contributions </span>
            {/* second part gradient */}
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

      {/* Footer Section */}
      <div className="pt-16 pb-10 px-4 md:px-16 border-t border-gray-700 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-300 bg-[#0a1229]">
        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li>Pricing</li>
            <li>Library</li>
            <li>Features</li>
            <li>Toolkits</li>
            <li>Screeners</li>
            <li>AI Backtesting</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Docs</li>
            <li>Blog</li>
            <li>About</li>
            <li>Community</li>
            <li>Affiliates</li>
            <li>Brand</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>Terms of Service</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-3">My Account</h4>
          <ul className="space-y-2">
            <li>Account Settings</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Logo and Social Icons */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-3">
          <div className="text-white text-xl font-bold flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-6" />
            TradeSpark
          </div>
          <div className="flex gap-5 mt-4">
            <img src="/yt.svg" alt="YouTube" className="h-5 cursor-pointer" />
            <img src="/x.svg" alt="X" className="h-5 cursor-pointer" />
            <img src="/discord.svg" alt="Discord" className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lux;
