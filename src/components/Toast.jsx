import { useState } from 'react';

export default function Toast({ message, onClose }){
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 right-0 p-6 mb-4 mr-4 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <p className="text-lg font-bold">{message}</p>
            <button onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 hover:text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};