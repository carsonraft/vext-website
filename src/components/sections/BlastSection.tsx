import React from "react";

const BlastSection = () => {
  return (
    <section className="bg-[#04120B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8 pl-8">
            <div>
              <h3 className="inline-block px-4 py-1 rounded-full border border-white text-[24px] font-bold mb-4 font-instrument text-white">
                VEXT BLAST
              </h3>
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
            <img
              loading="lazy"
              src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
              alt="Album Cover"
              className="w-3/4 h-auto border-4 border-[#C6FF00]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlastSection;