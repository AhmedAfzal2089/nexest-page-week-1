import React from "react";
import FirstLogo from "../client svgs/firstLogo";
import SecondLogo from "../client svgs/secondLogo";
import ThirdLogo from "../client svgs/thirdLogo";
import FourthLogo from "../client svgs/fourthLogo";
import FifthLogo from "../client svgs/fifthLogo";
import SixthLogo from "../client svgs/sixthLogo";
import SeventhLogo from "../client svgs/seventhLogo";

const OurClientSection = () => {
  return (
    <div className="flex flex-col items-center gap-9 px-5">
      <span className="font-bold text-4xl text-gray-600 mt-18">
        Our Clients
      </span>
      <span className="text-gray-500 text-center max-w-md ">
        We have been working with some Fortune 500+ clients
      </span>
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 lg:flex lg:gap-35 lg:flex-wrap lg:justify-center">
        <FirstLogo />
        <SecondLogo />
        <ThirdLogo />
        <FourthLogo />
        <FifthLogo />
        <SixthLogo />
        <SeventhLogo />
      </div>
    </div>
  );
};

export default OurClientSection;
