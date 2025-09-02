import React from "react";

const BeforeFooter = () => {
  return (
    <div className="flex flex-col p-10 items-center justify-center gap-10 bg-slate-100 mt-15 lg:mt-0">
      <span className="text-4xl font-bold text-gray-600">
        Too make your Company Grow
      </span>
      <span className="text-4xl font-bold text-gray-600"> Contact Us !</span>
      <button className="bg-green-600 text-white p-4 rounded-lg cursor-pointer flex gap-2 items-center justify-center">
        Get a Demo
        <span className="text-white">
          <svg
            width="20"
            height="10"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2502 7.00018L12.7199 4.53045C13.0129 4.23755 13.0129 3.76266 12.7199 3.46976L10.2502 1.00003M12.5003 4.0001L1.5 4.00011"
              stroke="#ABBED1"
              stroke-width="1.1"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default BeforeFooter;
