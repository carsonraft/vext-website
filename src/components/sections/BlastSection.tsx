import React from "react";

const BlastSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-instrument">VEXT BLAST</h3>
              <div className="space-y-4">
                <article className="border-b pb-4">
                  <h4 className="text-xl font-semibold font-instrument">
                    The Rise of Recession Core
                  </h4>
                </article>
                <article className="border-b pb-4">
                  <h4 className="text-xl font-semibold font-instrument">
                    The Rise of Recession Core
                  </h4>
                </article>
              </div>
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src="/lovable-uploads/71d08123-14c8-41ec-8980-839ac359f814.png"
              alt="Vext Desktop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlastSection;