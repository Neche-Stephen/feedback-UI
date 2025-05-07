import React from 'react';

export default function Partners() {
  const companies = [
    {
      name: "Patreon",
      logo: "./assets/home/partners/patreon.png"
    },
    {
      name: "Airbnb",
      logo: "./assets/home/partners/airbnb.png"
    },
    {
      name: "Fiberplane",
      logo: "./assets/home/partners/fiberplane.png"
    },
    {
      name: "Coinbase",
      logo: "./assets/home/partners/coinbase.png"
    },
    {
      name: "Griffin",
      logo: "./assets/home/partners/griffin.png"
    },
    {
      name: "HelpScout",
      logo: "./assets/home/partners/helpscout.png"
    },
    {
      name: "Plaid",
      logo: "./assets/home/partners/plaid.png"
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-full flex items-center justify-center h-12"
              aria-label={`${company.name} logo`}
            >
              <div className="w-24 md:w-28 lg:w-32 text-gray-800">
                <img src={company.logo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}