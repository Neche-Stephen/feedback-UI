import React from 'react';

export default function BetterFeedback() {
  return (
    <div className="bg-blue-600 w-full min-h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* Text Content */}
      <div className="text-center mb-10">
        <p className="text-white text-lg mb-2">Best time here</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-4xl">
          Better feedback at the right time.
        </h1>
      </div>
      
      {/* Dashboard Image Placeholder */}
      <div className="w-full max-w-5xl">
        <img src="./assets/home/feedback/dashboard.png" alt="" />
      </div>
    </div>
  );
}