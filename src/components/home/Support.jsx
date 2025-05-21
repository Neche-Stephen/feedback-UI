import React from 'react';

export default function Support() {
  // Companies data array - in a real implementation you'd replace these with actual logo URLs
  const companies = [
    { name: "Crowdstrike", placeholder: "./assets/home/support/crowdstrike.png", className: "h-8" },
    { name: "Airbus", placeholder: "./assets/home/support/airbus.png", className: "h-8" },
    { name: "Hays", placeholder: "./assets/home/support/hays.png", className: "h-8" },
    { name: "Sentry", placeholder: "./assets/home/support/sentry.png", className: "h-8" },
    { name: "MedWing", placeholder: "./assets/home/support/medwing.png", className: "h-6" },
    { name: "Cathay Pacific", placeholder: "./assets/home/support/cathay.png", className: "h-7" },
    { name: "Liquid Web", placeholder: "./assets/home/support/liquidweb.png", className: "h-7" },
    { name: "AutoTrader", placeholder: "./assets/home/support/autotrader.png", className: "h-7" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 xl:px-0 pt-20 mb-[119px]">
      <h2 className="text-3xl md:text-[54px] leading-[63px] tracking-[-1.5px] font-semibold text-center text-[#282828] mb-14">
        Loved By Developers At
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className=""
          >
            <img 
              src={company.placeholder} 
              alt={`${company.name} logo`} 
              // className={company.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}