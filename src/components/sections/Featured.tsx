import React from "react";

const Featured = () => {
  return (
    <section className="relative w-full">
      {/* SVG Filter Definition */}
      <svg width="0" height="0" className="hidden">
        <filter id="green-duotone">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  
                    0.67 0.67 0.67 0 0.6  
                    0.2 0.2 0.2 0 0  
                    0 0 0 1 0"
          />
        </filter>
      </svg>

      <div className="w-full">
        <div className="album-cover relative">
          {/* Base image layer */}
          <img
            loading="lazy"
            src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
            alt="JPEGMAFIA Album Cover"
            className="w-full h-[400px] object-cover object-[center_85%] scale-125"
          />
          
          {/* Color overlay */}
          <div 
            className="absolute inset-0 bg-[#04120B]/70"
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Additional color layer for softer effect */}
          <div 
            className="absolute inset-0 bg-[#04120B]/60"
            style={{ mixBlendMode: 'color' }}
          />

          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 bg-[#8cc63f]/10"
            style={{
              backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
              backgroundSize: '100% 100%',
              mixBlendMode: 'multiply'
            }}
          />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent text-left">
            <div>
              <div className="inline-block">
                <div className="relative px-4 py-0 border border-white rounded-[21px]">
                  <div className="text-white text-[24px] font-instrument leading-[28px] font-normal">MUSIC</div>
                </div>
              </div>
              <h2 className="text-white text-[48px] uppercase leading-[52.8px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] break-words">
                JPEGMAFIA: TO SERVE & PROTECT
              </h2>
              <p className="font-handjet text-base leading-[17.6px]">
                <span className="text-[#C6FF00]">By Sandra Song</span>{" "}
                <span className="text-white">vext.media/jpegmafia-2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#04120B] h-8 w-full"></div>
    </section>
  );
};

export default Featured;