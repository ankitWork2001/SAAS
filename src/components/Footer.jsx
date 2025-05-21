import React from 'react';
import { FaYoutube, FaXTwitter, FaDiscord } from 'react-icons/fa6';
import logo from '../assets/logo.png'; // update path as needed

const Footer = () => {
  return (
    <div className="bg-[#040C26] text-white pt-16 pb-10 px-4 md:px-16 text-sm">
      {/* Logo centered above columns */}
      <div className="flex justify-center mb-10">
        <img src={logo} alt="TradeSpark Logo" className="h-24" /> {/* 3x bigger logo */}
      </div>

      {/* Footer Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-300 mb-10">
        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-3">product</h4>
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
            <li>Privacy policy</li>
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
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-white text-xl">
        <FaYoutube className="hover:text-red-500 transition cursor-pointer" size={20} />
        <FaXTwitter className="hover:text-blue-400 transition cursor-pointer" size={20} />
        <FaDiscord className="hover:text-indigo-400 transition cursor-pointer" size={20} />
      </div>
    </div>
  );
};

export default Footer;
