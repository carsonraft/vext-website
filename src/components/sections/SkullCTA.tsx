import React from "react";

const SkullCTA = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8">
          <div className="skull-visual">
            <img
              src="/lovable-uploads/skull.png"
              alt="Neon skull icon"
              className="w-32 h-32"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-instrument">VEXT IS NEXT</h2>
            <p className="text-xl mb-6 font-handjet">
              Introducing a global community of content creators
            </p>
            <a
              href="#"
              className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-bold"
            >
              Join the VEXT Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkullCTA;