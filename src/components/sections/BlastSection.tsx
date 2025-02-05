import React from "react";

const BlastSection = () => {
  return (
    <section className="bg-[#04120B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="inline-block px-6 py-2 rounded-full border-2 border-[#C6FF00] text-2xl font-bold mb-4 font-instrument text-white">
                VEXT BLAST
              </h3>
              <div className="space-y-4">
                <article className="border-b pb-4">
                  <h4 className="text-xl font-semibold font-instrument text-white">
                    The Rise of Recession Core
                  </h4>
                </article>
                <article className="border-b pb-4">
                  <h4 className="text-xl font-semibold font-instrument text-white">
                    The Rise of Recession Core
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