import React from 'react';
import actual from '../../assets/actual.png'; // Adjust path based on your folder structure

const Next = () => {
  return (
    <div className="bg-[#040A1C] min-h-screen flex items-center justify-center px-4 py-8">
      <img
        src={actual}
        alt="Next-Gen Backtesting"
        className="w-full max-w-screen-xl object-cover sm:px-0 px-4" // Using object-cover for better image scaling
      />
    </div>
  );
};

export default Next;
