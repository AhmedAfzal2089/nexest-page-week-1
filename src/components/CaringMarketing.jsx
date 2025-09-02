import React from "react";
import imageOne from "../pngs/caringImageOne/image.png";
import imageTwo from "../pngs/caringImage2nd/image.png";
import imageThree from "../pngs/caringImage3ed/image.png";
const CaringMarketing = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 py-10 px-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-gray-600">
          Caring is the new marketing
        </span>
      </div>
      <div className="text-center max-w-2xl">
        <span className="text-gray-500">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lots more.
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-20">
        <div className="relative">
          <div>
            <img src={imageOne} width={300} alt="image one" />
          </div>
          <div className="bg-slate-100 absolute top-40 left-10 w-3/4 flex flex-col items-center justify-center rounded-2xl p-3">
            <div className="flex flex-col items-center">
              {" "}
              <span className="font-semibold text-gray-500">
                Creating StreamLined
              </span>
              <span className="font-semibold  text-gray-500">
                Safeguarding Processes{" "}
              </span>
              <span className="font-semibold  text-gray-500">with OneRen</span>
            </div>
            <span className="mt-4 text-green-600 font-semibold">
              Read More{" "}
            </span>
          </div>
        </div>
        <div className="relative">
          <div>
            <img src={imageTwo} width={300} alt="image one" />
          </div>
          <div className="bg-slate-100 absolute top-40 left-10 w-3/4 flex flex-col items-center justify-center rounded-2xl p-3">
            <div className="flex flex-col items-center">
              {" "}
              <span className="font-semibold text-gray-500">
                What is Safeguarding
              </span>
              <span className="font-semibold  text-gray-500">
                Responsibilities and how{" "}
              </span>
              <span className="font-semibold  text-gray-500">
                you manage them?
              </span>
            </div>
            <span className="mt-4 text-green-600 font-semibold">
              Read More{" "}
            </span>
          </div>
        </div>
        <div className="relative">
          <div>
            <img src={imageThree} width={300} alt="image one" />
          </div>
          <div className="bg-slate-100 absolute top-40 left-10 w-3/4 flex flex-col items-center justify-center rounded-2xl p-3">
            <div className="flex flex-col items-center">
              {" "}
              <span className="font-semibold text-gray-500">
                Rewamping Membership
              </span>
              <span className="font-semibold  text-gray-500">
                Model with Triathlon{" "}
              </span>
              <span className="font-semibold  text-gray-500">Australia</span>
            </div>
            <span className="mt-4 text-green-600 font-semibold">
              Read More{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaringMarketing;
