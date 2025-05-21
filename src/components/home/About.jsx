import React from "react";

export default function About() {
  return (
    <div className="bg-[#E3EFFC] w-full flex items-center justify-center py-20">
      <div className=" sm:max-w-[90%] xl:max-w-[1239px] w-full flex flex-col lg:flex-row items-center">
        {/* Left Column */}
        <div className="lg:w-[52%] p-6">
          <button className="bg-[#1671D9] text-white rounded-full px-[14px] py-1 mb-2 hover:bg-[#1671D9] transition-colors">
            Share
          </button>

          <h1 className="text-5xl lg:text-[54px] leading-[63px] tracking-[-1.5px] font-semibold text-[#282828] mb-6">
            For Extension Developers
          </h1>

          <div className="space-y-2 text-[#5F6980] text-[16px] mb-10">
            <div>
              <span className="mr-1 font-semibold">
                Identify Pain Points:
              </span>
              <span className="font-normal">
                Discover why users uninstall your extensions
              </span>
            </div>

            <div>
              <span className="mr-1 font-semibold">
                Improve Retention:
              </span>
              <span className="font-normal">
                Address common issues before other users leave
              </span>
            </div>

            <div>
              <span className="mr-1 font-semibold ">
                Data-Driven Decisions:
              </span>
              <span className="font-normal">
                Make improvements based on real user feedback
              </span>
            </div>

            <div>
              <span className="mr-1 font-semibold ">
                Simple Integration:
              </span>
              <span className="font-normal">
                Easy-to-implement API for collecting uninstall feedback
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6 mb-10">
            <div className="flex items-center">
              <img className="mr-1" src="./assets/home/check-icon.svg" alt="" />
              <span className="text-gray-700">Coded</span>
            </div>

            <div className="flex items-center">
              <img className="mr-1" src="./assets/home/check-icon.svg" alt="" />
              <span className="text-gray-700">100% Secure</span>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src="./assets/home/play-icon.svg" alt="" />
            <span className="font-semibold text-[16px] text-[#282828] ">See how it works</span>
          </div>
        </div>

        {/* Right Column - Code Snippet */}
        <div className="lg:w-[48%] mt-8 lg:mt-0 p-6">
          <img src="./assets/home/api.png" alt="" />
        </div>
      </div>
    </div>
  );
}
