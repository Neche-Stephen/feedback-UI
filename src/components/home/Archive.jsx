import { useState } from 'react';

export default function Archive() {
  return (
    <div className="max-w-[1172px] mx-auto pt-[113px] w-full mb-[68px]">
      <h1 className="text-3xl md:text-[54px] leading-[63px] tracking-[-1.5px] font-semibold text-center text-[#282828] mb-10">
        Your Archive of progress
      </h1>
      
      <div className="flex flex-col md:flex-row gap-[2%]">
        {/* Left Box - Projects */}
        <div className="w-full md:w-[49%]">
          <img className='w-full' src="./assets/home/archive/project-progress1.svg" alt="" />
        </div>
        
        {/* Right Box - Member profiles */}
        <div className="w-full md:w-[49%]">
        <img className='w-full' src="./assets/home/archive/project-progress2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}