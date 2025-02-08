
import React from "react";

const BlastSection = () => {
  return (
    <section className="bg-[#04120B] py-16">
      <div className="container mx-auto px-4 w-[75%]">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8 pl-8">
            <div>
              <div className="relative inline-block">
                <h3 className="inline-block px-4 py-0 rounded-full border-[0.25px] border-white text-[24px] font-instrument mb-4 text-white relative z-10">
                  VEXT BLAST
                </h3>
              </div>
              <div className="-space-y-4">
                <article className="pl-4 relative">
                  <div className="absolute inset-x-[-100vw] top-2 bottom-2 bg-[#F2FCE2]/5" />
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white uppercase">
                    THE RISE OF RECESSION CORE
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    RISE OF THE HEALER-DEALER
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    FATPHOBIA IN Y2K FASHION
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    QUEEN'S GAMBIT IRL
                  </h4>
                </article>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-[46.875%]">
              <div className="absolute inset-0 border border-[#C6FF00]/20 bg-[#04120B]/10 transform translate-x-[6.25%] -translate-y-[3.125%] z-[1]" />
              <div className="absolute inset-0 border border-[#C6FF00]/80 bg-[#04120B]/30 transform translate-x-[3.125%] -translate-y-[6.25%] z-[2]" />
              <img
                loading="lazy"
                src="/lovable-uploads/ea91a4e9-e0f0-4457-be98-74efc1dc89ad.png"
                alt="Fashion Editorial Image"
                className="w-full h-auto border border-[#C6FF00]/70 relative z-[3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlastSection;
