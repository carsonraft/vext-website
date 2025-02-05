import React from "react";

const Featured = () => {
  return (
    <section className="relative w-full bg-[#071D07] text-white">
      <div className="w-full">
        <div className="album-cover relative h-[513px]">
          {/* Base image layer */}
          <img
            loading="lazy"
            src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
            alt="JPEGMAFIA Album Cover"
            className="w-full h-full object-cover object-[center_85%]"
          />
          
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 mix-blend-overlay"
            style={{
              backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
              backgroundSize: '100% 100%',
            }}
          />

          {/* Border overlay */}
          <div className="absolute inset-0 border-[11px] border-white mix-blend-soft-light" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <div className="relative">
              {/* Music Tag */}
              <div className="relative w-[112px] h-[40px] mb-4">
                <div className="absolute left-[19px] top-[4px] text-[32px] font-instrument leading-[35.2px]">
                  MUSIC
                </div>
                <div className="absolute inset-0 rounded-[21px] border border-white"></div>
              </div>

              {/* Title */}
              <h2 className="text-[96px] font-enfilade font-bold uppercase leading-[105.6px] break-words mb-2">
                JPEGMAFIA: To Serve & Protect
              </h2>

              {/* Byline */}
              <p className="font-handjet text-base leading-[17.6px]">
                <span className="text-[#C6FF00]">By Sandra Song</span>{" "}
                <span className="text-white">vext.media/jpegmafia-2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;