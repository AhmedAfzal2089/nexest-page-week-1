import React from "react";
import HeroImage from "../assets/heroImage";

const HeroSection = () => {
  return (
    <div className="bg-slate-100 w-full lg:h-150 h-120 flex flex-col justify-center items-center px-5 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full gap-10">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-gray-800 font-bold lg:text-7xl text-4xl">
            Lessons and insights
          </span>
          <span className="text-green-600 font-bold lg:text-6xl text-4xl">
            from 8 years
          </span>
          <span className="text-gray-500 max-w-md mx-auto lg:mx-0">
            Where to grow your business as a photographer: site or social media?
          </span>
          <button className="px-6 py-3 bg-green-500 w-fit rounded-md text-white mx-auto lg:mx-0">
            Register
          </button>
        </div>

        <div className="hidden lg:block">
          <HeroImage />
        </div>
      </div>

      <div className="flex gap-2 mt-25">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="w-3 h-3 border-2 border-green-500 rounded-full"></span>
        <span className="w-3 h-3 border-2 border-green-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default HeroSection;
