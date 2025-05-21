import React from 'react';

export default function BetterFeedback() {
  return (
    <div className="bg-[#1671D9] w-full  flex flex-col items-center justify-center pt-20 pb-9 px-4">
      {/* Text Content */}
      <div className="text-center mb-16">
        <p className="text-white text-[16px] font-semibold mb-1">Best time here</p>
        <h1 className="text-white text-4xl md:text-[54px] leading-[63px] tracking-[-1.5px] font-semibold max-w-[842px]">
          Better feedback at the right time.
        </h1>
      </div>
      
      {/* Dashboard Image Placeholder */}
      <div className="w-full max-w-[1014px]">
        <img src="./assets/home/feedback/dashboard.png" alt="" />
      </div>
    </div>
  );
}