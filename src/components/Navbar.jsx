import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

// Image imports
import toolkit from '../assets/toolkit.png';
import toolkitHover from '../assets/toolkit-hover.png';
import screener from '../assets/screener.png';
import screenerHover from '../assets/screener-hover.png';
import aibacktest from '../assets/aitest.png';
import aibacktestHover from '../assets/aitest-hover.png';

const featuresData = [
  { title: 'Toolkits', desc: 'Keep it simple & use our pro workflows', defaultImg: toolkit, hoverImg: toolkitHover, path: '/features/toolkits' },
  { title: 'Screeners', desc: 'Scan assets using any features', defaultImg: screener, hoverImg: screenerHover, path: '/features/screeners' },
  { title: 'AI backtesting Assistant', desc: 'Build strategies with our AI platform', defaultImg: aibacktest, hoverImg: aibacktestHover, path: '/features/backtesters' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const featureRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featureRef.current && !featureRef.current.contains(event.target)) {
        setShowFeatures(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-['Inter'] px-4 py-2 lg:px-20 bg-transparent">
      <div className="relative flex items-center justify-between h-[81px]">

        {/* Logo */}
        <Link to="/" className="w-[166px] h-[81px] flex items-center">
          <img src={logo} alt="TradeSpark" className="w-full h-full object-contain" />
        </Link>

        {/* Center Nav */}
        <div
          className="hidden lg:flex absolute rounded-[15px] items-center justify-around shadow-md"
          style={{
            width: 389,
            height: 55,
            top: '50%',
            left: 525,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(128, 128, 128, 0.62)',
          }}
        >
          <div
            className="relative"
            onMouseEnter={() => setShowFeatures(true)}
          >
            <span className="text-white text-[16px] font-medium tracking-[0.01em] leading-[100%] cursor-pointer hover:text-[#38bdf8] transition">
              Features
            </span>
          </div>
          <Link
            to="/pricing"
            className="text-white text-[16px] font-medium tracking-[0.01em] leading-[100%] hover:text-[#38bdf8] transition"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="text-white text-[16px] font-medium tracking-[0.01em] leading-[100%] hover:text-[#38bdf8] transition"
          >
            Help
          </Link>
          <Link
            to="/about"
            className="text-white text-[16px] font-medium tracking-[0.01em] leading-[100%] hover:text-[#38bdf8] transition"
          >
            About
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/login"
            className="w-[99px] h-[37px] text-white border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="w-[99px] h-[37px] bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Features Dropdown */}
      {showFeatures && (
        <div
          ref={featureRef}
          className="absolute top-[100px] left-1/2 transform -translate-x-1/2 flex gap-8 p-8 rounded-3xl shadow-2xl bg-opacity-80 backdrop-blur-xl"
        >
          {featuresData.map((card, idx) => (
            <Link
              key={idx}
              to={card.path}
              className="w-[260px] h-[310px] rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setShowFeatures(false)}
            >
              <img
                src={hoveredCard === idx ? card.hoverImg : card.defaultImg}
                alt={card.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-2 rounded-md shadow-md p-4 space-y-4 text-white text-center bg-gray-800">
          <Link to="/features" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Features</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Pricing</Link>
          <Link to="/support" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Help</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">About</Link>
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/login" className="w-full border border-white py-2 rounded-full hover:bg-white hover:text-black transition">Log in</Link>
            <Link to="/signup" className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-300 transition">Sign in</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
