import React from "react";

const Featured = () => {
  return (
    <section className="relative w-full bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="album-cover relative">
          {/* Base image layer */}
          <img
            loading="lazy"
            src="/lovable-uploads/71d08123-14c8-41ec-8980-839ac359f814.png"
            alt="Featured Background"
            className="w-full h-[600px] object-cover"
          />
          
          {/* Green overlay with pattern */}
          <div 
            className="absolute inset-0 bg-[#8cc63f]/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '8px 8px',
              mixBlendMode: 'multiply'
            }}
          />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center space-x-4 mb-4">
              <img
                loading="lazy"
                src="/lovable-uploads/c92449a2-2564-4fcd-afcf-0268325a9b76.png"
                alt="Artist"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold mb-2 font-handjet">MUSIC</div>
                <h2 className="text-3xl font-bold mb-2 font-instrument">
                  JPEGMAFIA: To Serve & Protect
                </h2>
                <p className="font-handjet">
                  <span className="text-[#C6FF00]">By Sandra Song</span>{" "}
                  vext.media/jpegmafia-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;