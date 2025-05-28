
import React from "react";

// Blue star icon (SVG)
const Star = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="#3b82f6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
  </svg>
);

const Comment = ({ name, date, stars, comment, avatar }) => (
  <li className="flex gap-4 items-start">
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
    />
    <div>
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-gray-400 text-xs">({date})</span>
      </div>
      <div className="flex mt-1 mb-2">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <div className="text-gray-200 text-sm">{comment}</div>
    </div>
  </li>
);

export default Comment;

