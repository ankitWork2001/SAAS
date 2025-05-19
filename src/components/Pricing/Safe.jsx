// Safe.jsx
import React from 'react';
import img1 from "../../assets/Group 40.png";
import img2 from "../../assets/Group 41.png";
import img3 from "../../assets/Group 42.png";
import img4 from "../../assets/Group 43.png";
import img5 from "../../assets/Group 44.png";
import check from "../../assets/Frame.png"



const Safe = () => {
  return (
    <div className="h-screen w-screen bg-[#00040F] flex flex-col items-center">
      <div className="relative w-full">
        <h1 className="absolute font-Inter font-bold text-4xl leading-none tracking-wider" style={{
          width: '520px',
          height: '47px',
          top: '47px',
          left: '50%',
          transform: 'translateX(-50%)',
          mixBlendMode: 'hard-light',
          background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Safe and secure checkout
        </h1>
      </div>
      <div className="max-w-4xl mx-auto p-8 pt-40">
        <p className="text-lg text-white text-center mb-8">
          Ask our AI agent to find the best trading strategies and do the work for you. Plug our backtesting software into any platform to automate your trades like a pro.
        </p>
        <div className="flex justify-center mb-8">
          <img src={img1} alt="Stripe" className="w-10 h-10 mx-2" />
          <img src={img1} alt="Visa" className="w-10 h-10 mx-2" />
          <img src={img2} alt="Mastercard" className="w-10 h-10 mx-2" />
          <img src={img3} alt="Amex" className="w-10 h-10 mx-2" />
          <img src={img4} alt="PayPal" className="w-10 h-10 mx-2" />
        </div>
        <div className="flex justify-center items-center mb-8">
          <img src={check} alt="Checkmark" className="w-10 h-10 mr-2" />
          <span className="text-2xl text-white">30-Day money-back Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default Safe;