import React from 'react';
import img1 from "../../assets/Group 40.png";
import img2 from "../../assets/Group 41.png";
import img3 from "../../assets/Group 42.png";
import img4 from "../../assets/Group 43.png";
import img5 from "../../assets/Group 44.png";
import check from "../../assets/Frame.png";

const Safe = () => {
  return (
    <div className="min-h-screen w-full bg-[#00040F] flex flex-col items-center px-4">
      {/* Title */}
      <div className="relative w-full text-center mt-12 sm:mt-[47px]">
        <h1
          className="text-2xl sm:text-4xl font-bold font-Inter tracking-wide leading-tight mx-auto"
          style={{
            width: '100%',
            maxWidth: '520px',
            mixBlendMode: 'hard-light',
            background: 'linear-gradient(98.15deg, #FFFFFF 17.31%, #0594BB 145.03%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Safe and secure checkout
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full p-4 sm:p-8 pt-20 sm:pt-40">
        {/* Description */}
        <p className="text-base sm:text-lg text-white text-center mb-6 sm:mb-8 px-2">
          Ask our AI agent to find the best trading strategies and do the work for you. Plug our backtesting software into any platform to automate your trades like a pro.
        </p>

        {/* Payment Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
          <img src={img1} alt="Stripe" className="w-10 h-10" />
          <img src={img1} alt="Visa" className="w-10 h-10" />
          <img src={img2} alt="Mastercard" className="w-10 h-10" />
          <img src={img3} alt="Amex" className="w-10 h-10" />
          <img src={img4} alt="PayPal" className="w-10 h-10" />
        </div>

        {/* Guarantee */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <img src={check} alt="Checkmark" className="w-8 sm:w-10 h-8 sm:h-10" />
          <span className="text-xl sm:text-2xl text-white text-center sm:text-left">
            30-Day money-back Guarantee
          </span>
        </div>
      </div>
    </div>
  );
};

export default Safe;
