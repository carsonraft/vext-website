
import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="relative w-full">
      <div className="w-full">
        <div className="album-cover relative">
          {/* Base image layer with grayscale filter */}
          <img
            loading="lazy"
            src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
            alt="JPEGMAFIA Album Cover"
            className="w-full h-[400px] object-cover object-[center_85%] scale-200 grayscale contrast-120"
          />
          
          {/* Dark green overlay with increased saturation */}
          <div 
            className="absolute inset-0 bg-[#1B5512]"
            style={{ mixBlendMode: 'hard-light', opacity: 0.9 }}
          />

          {/* Additional darkening layer for better contrast */}
          <div 
            className="absolute inset-0 bg-black/30"
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Pattern overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
              backgroundSize: '100% 100%',
              mixBlendMode: 'multiply'
            }}
          />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent text-left">
            <div>
              <h2 className="text-white text-[48px] uppercase leading-[52.8px] tracking-[0.02em] font-['EnfiladeTRIALHeadline-Bold'] break-words relative z-20">
                <Link to="/sample" className="hover:text-[#C6FF00] transition-colors">JPEGMAFIA: TO SERVE & PROTECT</Link>
              </h2>
              <div className="inline-block mt-2">
                <div className="relative px-4 py-0 border border-white rounded-[21px]">
                  <div className="text-white text-[24px] font-instrument leading-[28px] font-normal">MUSIC</div>
                </div>
              </div>
              <p className="font-handjet text-base leading-[17.6px]">
                <span className="text-[#C6FF00]">By Sandra Song</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
