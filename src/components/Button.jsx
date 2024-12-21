import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[#050523] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
