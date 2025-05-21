import { Box } from "lucide-react";

export default function Visibility() {
  return (
    <div className="w-full pt-20 pb-[198px] px-4 flex flex-col items-center justify-center">

      <img className="w-[62px] h-[61px] mb-7.5" src="./assets/home/visibility/visiblity-icon.png" alt="" />
      
      <h1 className="text-xl md:text-[26px] leading-[40px] font-bold text-center text-[#171717] mb-2">
        Increase your team's visibility and alignment
      </h1>
      
      <p className="text-lg text-[#525252] text-center mb-10 leading-[28px]">
        Start for free, flexible for all teams.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5">
        <button className="text-[#282828] font-semibold text-sm leading-[24px] transition-colors">
          Request a demo
        </button>
        <button className="px-5 py-2.5 bg-[#1671D9] text-white text-sm leading-[24px] font-semibold rounded-[39px] hover:bg-blue-600 transition-colors">
          Start for free
        </button>
      </div>
    </div>
  );
}