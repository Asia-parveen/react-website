// Card.jsx
import React from "react";

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white hover:opacity-[0.5]">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card content */}
      <div className="p-4 ">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="text-white bg-[#050523] w-full px-4 py-1 rounded-lg text-md hover:bg-[#1c5732]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
