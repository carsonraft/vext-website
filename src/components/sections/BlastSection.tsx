
import React from "react";
import { Link } from "react-router-dom";

const BlastSection = () => {
  return (
    <section className="bg-[#04120B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8 pl-8">
            <div>
              <div className="-space-y-4">
                <article className="pl-4 relative">
                  <div className="absolute inset-x-[-100vw] top-2 bottom-2 bg-[#F2FCE2]/5" />
                  <Link to="/recession-core">
                    <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white uppercase hover:text-[#C6FF00] transition-colors">
                      THE RISE OF RECESSION CORE
                    </h4>
                  </Link>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    MY GIRLFRIEND'S HUSBAND'S CYBERTRUCK REVIEW
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    HOW TO ETHICALLY EUTHANIZE YOUR AI WIFE
                  </h4>
                </article>
                <article className="pl-4">
                  <h4 className="text-[48px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] text-white/30 uppercase">
                    THE COQUETTE EFFECT
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
