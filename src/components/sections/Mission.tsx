
import React from "react";

const Mission = () => {
  return (
    <section className="bg-[#04120B] text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="relative inline-block">
          <h2 className="inline-block px-4 py-1 rounded-full border border-white text-[24px] font-instrument">OUR MISSION</h2>
        </div>
        <p className="text-lg leading-relaxed mb-8 mt-8">
          VEXT is a global next-gen youth media platform that curates an array of
          unexpected content, groundbreaking artistry & reader-submitted work to
          nurture productive discussions among a digital community of progressive
          creatives.
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-[#011301] border border-[#C6FF00] px-6 py-3">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-[#C6FF00] text-[6rem] font-chivo leading-none">☞</span>
              <a
                href="#"
                className="text-[59.258px] font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] uppercase leading-[96%] tracking-[0.02em]"
              >
                BECOME A VEXT CREATOR
              </a>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
