import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00040F] to-[#000211] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>

      {/* Card Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {/* Card 1 */}
        <img
          src={card1}
          alt="Essential Plan"
          className="w-[320px] md:w-[360px]"
        />

        {/* Card 2 - Middle one, lowered */}
        <img
          src={card2}
          alt="Ultimate Plan"
          className="w-[320px] md:w-[360px] mt-8 md:mt-12"
        />

        {/* Card 3 */}
        <img
          src={card3}
          alt="Premium Plan"
          className="w-[320px] md:w-[360px]"
        />
      </div>
    </div>
  );
};

export default Plans;
