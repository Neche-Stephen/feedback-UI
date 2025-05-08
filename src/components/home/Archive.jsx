import { useState } from 'react';

export default function Archive() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Your Archive of progress
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Box - Projects */}
        <div className="w-full md:w-1/2">
          <img src="./assets/home/archive/project-progress1.png" alt="" />
        </div>
        
        {/* Right Box - Member profiles */}
        <div className="w-full md:w-1/2">
        <img src="./assets/home/archive/project-progress2.png" alt="" />
        </div>
      </div>
    </div>
  );
}