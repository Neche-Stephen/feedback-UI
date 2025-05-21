import React from 'react';

export default function KeepEveryone() {
  return (
    <div className="w-full bg-[#012657] pt-16 md:pt-20 px-12 xl:px-0 text-center">
        {/* Heading and text section */}
        <h1 className="text-4xl md:text-[63px] leading-[73px] tracking-[-2.5px] font-semibold text-center text-white mb-3">
          Keep every one in the loop
        </h1>
        
        <p className="max-w-[485px] mx-auto text-lg md:text-xl text-white mb-3 leading-[35px] font-normal">
          All good things starts with a homepage. Get 
          inspired without breaking your wallet.
        </p>
        
        {/* CTA Button */}
        <div className="mb-8">
          <button className="bg-white text-[#282828] rounded-[39px] py-3 px-7 font-medium text-[16px] leading-[28px] tracking-[-0.2px] hover:bg-gray-100 transition-colors">
            Start for free
          </button>
        </div>
        
        {/* Dashboard Image Placeholder */}
        <div className="w-full max-w-[1014px] mx-auto">
          <img 
            src="./assets/home/feedback/dashboard.png"
            alt="Dashboard preview" 
            className="w-full h-auto"
          />
      </div>
    </div>
  );
}