import React from "react";

const BlastSection = () => {
  return (
    <section className="bg-[#04120B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8 pl-8">
            <div>
              <div className="relative inline-block">
                <h3 className="inline-block px-4 py-1 rounded-full border-[0.25px] border-white text-[24px] font-bold mb-4 font-instrument text-white relative z-10">
                  VEXT BLAST
                </h3>
                <div className="absolute inset-0 rounded-full border-[0.25px] border-white transform translate-x-[5%] -translate-y-[5%] z-0"></div>
              </div>
              <div className="-space-y-4">
                <article className="pl-4 relative">
                  <div className="absolute inset-x-[-100vw] top-2 bottom-2 bg-[#F2FCE2]/5" />
                  <h4 className="text-[48px] font-semibold font-enfilade text-white uppercase relative">
                    The Rise of Recession Core
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] font-semibold font-enfilade text-white uppercase">
                    The Coquette Effect
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] font-semibold font-enfilade text-white uppercase">
                    Measuring Famous Dick Pics Using Trigonometry
                  </h4>
                </article>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-3/4">
              <div className="absolute inset-0 border border-[#C6FF00]/20 bg-[#04120B]/10 transform translate-x-[10%] -translate-y-[5%] z-[1]" />
              <div className="absolute inset-0 border border-[#C6FF00]/80 bg-[#04120B]/30 transform translate-x-[5%] -translate-y-[10%] z-[2]" />
              <img
                loading="lazy"
                src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
                alt="Album Cover"
                className="w-full h-auto border border-[#C6FF00]/10 relative z-[3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlastSection;