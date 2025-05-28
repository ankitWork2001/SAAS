
import React from "react";
import Comment from "./Comment";

// Blue star SVG for summary and breakdown
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

const Review1 = () => {
  const comments = [
    {
      name: "Emilia Clarke",
      date: "May 25, 2023",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      comment:
        "Using the Trade Spark Indicators doing a top down analysis from the daily and weekly chart, it has not only helped me understand which way price is going but also helps me get into the trend at the right times catching the pullbacks/retest to..."
    },
    {
      name: "Steve Smith",
      date: "Dec 15, 2023",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      comment:
        "I had the most clear and enlightening experience with lux. I have come from another provider that happened to be more expensive but also more inclined to high level TA which made had a hard time to actually use it properly. With trade..."
    },
    {
      name: "Virat Kohli",
      date: "Aug 2, 2023",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      comment:
        "Ok, Normally I don’t give reviews, but Trade Spark is like nothing else I’ve ever used. Hands down THE BEST indicators... If you think their free ones are amazing, (which is what got me interested) just wait until you buy the premium..."
    }
  ];

  const average = 4.5;
  const totalReviews = 8645;

  return (
    <div className="bg-[#16213a] min-h-screen p-6">
      <h2 className="text-white text-xl font-bold mb-3">Reviews</h2>

      {/* Rating Summary & Breakdown */}
      <div className="bg-[#223354] rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center md:items-start mb-4">
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

      {/* Comments */}
      <div className="bg-[#223354] p-6 rounded-lg space-y-6">
        <ul className="space-y-6">
          {comments.map((item, idx) => (
            <Comment key={idx} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review1;

