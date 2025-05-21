import React from "react";

export default function Works() {
  const features1 = [
    {
      title: "Simple Integration",
      description:
        "Add our lightweight feedback collection script to your extension's uninstall process",
    },
    {
      title: "Customizable Forms",
      description: "Design questions that address your specific concerns",
    },
    {
      title: "Real-time Insights",
      description: "Access feedback through our dashboard or API",
    },
    {
      title: "Actionable Analytics",
      description: "View trends and common issues at a glance",
    },
  ];
  const features2 = [
    {
      title: "Quick & Respectful",
      description: "Brief, non-intrusive questions when they uninstall",
    },
    {
      title: "Multiple Formats",
      description: "Single-click options or free-form feedback",
    },
    {
      title: "Privacy-Focused",
      description: "Optional anonymity and clear data usage policies",
    },
    {
      title: "Direct Impact",
      description: "Assurance that their feedback shapes future development",
    },
  ];
  return (
    <div className=" min-h-screen mt-2 px-4">
      <div className="max-w-6xl mx-auto">
        {/* For Developers Section */}
        <div className="flex flex-col lg:flex-row items-center gap-[7%] mb-9">
          {/* Left Side - image */}
          <div className="lg:w-[43%] mb-8 lg:mb-0">
            <img src="./assets/home/works/feedback-black.png" alt="feedback" />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-[50%]">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#FF591E] via-[#FF591E] to-[#FF591E] text-white font-semibold px-[14px] py-2 rounded-[100px] text-sm leading-[22px]">
                How It Works
              </span>
            </div>

            <h2 className="text-4xl lg:text-[54px] tracking-[-1.5] leading-[63px] font-semibold mb-6">
              For Developers
            </h2>

              {/* Features 1 */}
            <div className="mb-10">
              {features1.map((feature, index) => (
                <div key={index}>
                  <p className="font-normal text-[#6E6E6E] text-[18px] leading-[30px]">
                    <span>{feature.title}:</span> {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <img src="./assets/home/play-icon.svg" alt="" />
              <span className="font-semibold text-[16px] text-[#282828]">
                See how it works
              </span>
            </div>
          </div>
        </div>

        {/* For Users Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-20 gap-[7%]">
          {/* Right Side - image */}
          <div className="lg:w-[43%] mb-8 lg:mb-0">
            <img src="./assets/home/works/feedback-blue.png" alt="feedback" />
          </div>

          {/* Left Side - Content */}
          <div className="lg:w-[50%]">
          <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#FF591E] via-[#FF591E] to-[#FF591E] text-white font-semibold px-[14px] py-2 rounded-[100px] text-sm leading-[22px]">
                How It Works
              </span>
            </div>

            <h2 className="text-4xl lg:text-[54px] tracking-[-1.5] leading-[63px] font-semibold mb-6">For Users</h2>

            
            {/* Features 2 */}
            <div className="mb-10">
              {features2.map((feature, index) => (
                <div key={index}>
                  <p className="font-normal text-[#6E6E6E] text-[18px] leading-[30px]">
                    <span>{feature.title}:</span> {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <img src="./assets/home/play-icon.svg" alt="" />
              <span className="font-semibold text-[16px] text-[#282828]">
                See how it works
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
