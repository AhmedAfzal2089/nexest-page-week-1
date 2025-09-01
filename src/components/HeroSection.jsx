import React from "react";
import HeroImage from "../assets/heroImage";

const HeroSection = () => {
  return (
    <div className="bg-slate-200 w-full lg:h-150 h-120 flex items-center lg:justify-around gap-20 px-5">
      <div className="flex flex-col gap-4">
        <span className="text-gray-800 font-bold lg:text-7xl text-4xl">
          Lessons and insights
        </span>
        <span className="text-green-600 font-bold lg:text-6xl text-4xl">
          from 8 years
        </span>
        <span className="text-gray-500">
          Where to grow your business as a photographer:site or socual media{" "}
        </span>
        <button className="px-15 py-3 bg-green-500 w-25 rounded-md flex justify-center">
          Register
        </button>
      </div>
      <div className="hidden lg:block">
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
