
import React from "react";

const Mission = () => {
  return (
    <section className="bg-[#04120B] text-white py-8 w-full">
      <div className="w-full px-4 text-center">
        <div className="relative inline-block">
          <h2 className="inline-block px-4 py-1 rounded-full border border-white text-[24px] font-instrument">OUR MISSION</h2>
        </div>
        <p className="text-white text-center font-['Helvetica_Neue'] text-[30px] font-normal leading-[110%] mt-8 mb-12 max-w-[912px] mx-auto px-4">
          VEXT is a global next-gen youth media platform that curates an array of
          unexpected content, groundbreaking artistry & reader-submitted work to
          nurture productive discussions among a
          <br />
          digital community of progressive creatives.
        </p>
        <div className="flex items-center justify-center overflow-hidden mt-8 h-[100px]">
          <button className="relative bg-[#1a4d1a] border border-[#C6FF00] px-2 py-1 transform -translate-y-[5px] w-full max-w-[315px] mx-auto">
            <div 
              className="absolute inset-0 inline-flex items-center gap-[13.58px] p-[6px] w-full h-[80px]"
              style={{
                backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
                backgroundSize: '100% 100%',
                mixBlendMode: 'multiply',
                opacity: 0.7
              }}
            />
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-[#C6FF00] text-[5rem] font-chivo leading-none">☞</span>
              <span className="text-[50px] font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] uppercase leading-[96%] tracking-[0.02em]">
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
