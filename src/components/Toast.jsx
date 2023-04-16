import React, { useState, useEffect } from 'react';

function Toast({ title, description, duration = 5000, onClose }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);

    const timer = setTimeout(() => {
      setIsShown(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white px-6 py-4 rounded-lg ${
        isShown ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <button
          className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
          onClick={() => {
            setIsShown(false);
            onClose();
          }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="x w-6 h-6">
            <path
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}

export default Toast;