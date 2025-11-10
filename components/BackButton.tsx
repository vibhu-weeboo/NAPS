import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="group inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm text-naps-green font-semibold py-2 px-4 rounded-full border border-gray-700 hover:border-naps-green hover:bg-gray-700/80 transition-all duration-300"
      aria-label="Go back to the previous page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
