import React from "react";

export default function Testimonial() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[1112px] mx-auto px-12 xl:px-0 pt-[131px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Testimonial */}
          <div className="flex flex-col">
            <img className="w-14 h-14 mb-[25px]" src="./assets/home/testimonial/testimonial-icon1.svg" alt="" />

            <p className="text-[#171717] text-lg mb-8 leading-[30px] font-normal">
              Cloudhub has emerged as an essential asset for the team at Patreon
              design. Amidst an accelerated expanding organization in which the
              product undergoes rapid changes, Campsite enables us to maintain
              visibility on what's transpiring across various teams — impeccably
              aligning with our pre-existing procedures.
            </p>

            <div className="flex items-center mt-auto">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  src="./assets/home/testimonial/gabriel.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-[#171717] text-[16px] leading-[26px]">Gabriel Valdivia</h4>
                <p className="text-[#737373] text-sm font-normal leading-[22px]">
                  Principal Product Designer, Patreon
                </p>
              </div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="flex flex-col">
          <img className="w-14 h-14 mb-[25px]" src="./assets/home/testimonial/testimonial-icon2.svg" alt="" />

            <p className="text-[#171717] text-lg mb-8 leading-[30px] font-normal">
              Cloudhub has demonstrated exceptional worth in preserving open
              communication among designers regarding their current endeavors, a
              challenge that previously impeded our progress. It continually
              stands as a distinctive platform guiding our dialogue towards
              imagination and consistent review, an element I highly value.
              Moreover, it has accelerated our propensity for early- stage
              feedback beyond my expectations.
            </p>

            <div className="flex items-center mt-auto">
              <div className="w-12 h-12  overflow-hidden">
                <img
                  src="./assets/home/testimonial/usborne.png"
                  alt="Buzz Usborne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-[#171717] text-[16px] leading-[26px]">Buzz Usborne</h4>
                <p className="text-[#737373] text-sm font-normal leading-[22px]">
                  Principal Designer, Buildkite
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
