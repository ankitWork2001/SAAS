
import React from "react";

// Blue star icon (SVG)
const Star = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="#3b82f6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
  </svg>
);

const breakdown = [70, 20, 5, 3, 2]; // 5-star to 1-star

const Rating = () => {
  const average = 4.5;
  const totalReviews = 8645;

  return (
    <div className="bg-[#19233a] rounded-xl p-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: Average */}
        <div className="flex flex-col items-center md:items-start min-w-[120px]">
          <div className="text-5xl font-bold text-white">{average}</div>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} />
            ))}
          </div>
          <div className="text-gray-300 text-sm mt-2">
            ( {totalReviews.toLocaleString()} reviews )
          </div>
        </div>

        {/* Right: Breakdown */}
        <div className="flex-1 w-full max-w-md">
          <div className="flex flex-col gap-2">
            {[5, 4, 3, 2, 1].map((star, idx) => (
              <div key={star} className="flex items-center gap-2">
                {/* Blue stars */}
                <div className="flex min-w-[80px]">
                  {[...Array(star)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
                </div>
                {/* Bar */}
                <div className="flex-1 bg-white h-3 rounded">
                  <div
                    className="bg-blue-500 h-3 rounded"
                    style={{ width: `${breakdown[idx]}%` }}
                  ></div>
                </div>
                <span className="text-sm text-white ml-2">{breakdown[idx]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;

