import React from 'react';

const HeartButton = ({ onClick, isReacted }) => {
  return (
    <button
      onClick={onClick}
      className={`text-2xl transition duration-300 ${
        isReacted ? 'text-red-500' : 'text-gray-500 hover:text-red-400'
      }`}
      aria-label="Heart Button"
    >
      {isReacted ? '❤️' : '🤍'}
    </button>
  );
};

export default HeartButton;
