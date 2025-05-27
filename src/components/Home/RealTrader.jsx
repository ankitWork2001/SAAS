import React from 'react';
import trustpilot from '../../assets/Vector.png'; // Trustpilot image
import avatar from '../../assets/ceo.png'; // Replace with your actual avatar image path

const RealTrader = () => {
  return (
    <div className="bg-[#040A1C] py-16 px-4 text-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Real Traders, <span className="text-[#00C4FF]">Real Stories</span>
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Trustpilot Card */}
        <div className="bg-[#0D172B] rounded-xl p-8 shadow-lg flex flex-col justify-between">
          <img src={trustpilot} alt="Trustpilot" className="w-32 mb-4 mx-auto" />
          <p className="text-lg mb-6 text-center">Check out our other Reviews!</p>
          <button className="flex items-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-full w-max hover:bg-gray-200 transition mx-auto">
            <span className="text-lg">→</span> See More Review
          </button>
        </div>

        {/* Review Card */}
        <div className="bg-[#0D172B] rounded-xl p-8 shadow-lg text-center relative overflow-hidden">
          <img
            src={avatar}
            alt="Kevin Ortega"
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-medium">Kevin <span className="text-[#5C6BC0]">Ortega</span></h3>
          <h4 className="font-bold text-xl mt-2 mb-4">
            Lux Algo. Premium indicators.<br />
            Premium Community
          </h4>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lux Algo has really stepped my trading up, there is a setup for any style of
            trading you prefer which is very nice you don't have to put yourself in a box
            metaphorically speaking. The team is constantly taking feedback and improving the...
          </p>
          {/* Stars */}
          <div className="flex justify-center space-x-1 text-[#00C4FF] text-xl">
            {Array(5).fill('★').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTrader;
