
import React from "react";

const Mission = () => {
  return (
    <section className="bg-[#04120B] text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="relative inline-block">
          <h2 className="inline-block px-4 py-1 rounded-full border border-white text-[24px] font-instrument">OUR MISSION</h2>
        </div>
        <p className="text-white text-center font-['Helvetica_Neue'] text-[32px] font-normal leading-[110%] mb-8 mt-8 w-[912px] mx-auto">
          VEXT is a global next-gen youth media platform that curates an array of
          unexpected content, groundbreaking artistry & reader-submitted work to
          nurture productive discussions among a digital community of progressive
          creatives.
        </p>
        <div className="flex items-center justify-center">
          <button className="relative bg-[#0E370E] border border-[#C6FF00] px-6 py-3 overflow-hidden transform -translate-y-[5px]">
            {/* Pattern overlay */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
                backgroundSize: '100% 100%',
                mixBlendMode: 'multiply',
                opacity: 0.7
              }}
            />
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-[#C6FF00] text-[6rem] font-chivo leading-none">☞</span>
              <span className="text-[59.258px] font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] uppercase leading-[96%] tracking-[0.02em]">
                BECOME A VEXT CREATOR
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
