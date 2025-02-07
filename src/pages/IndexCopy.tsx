
import React from "react";
import Header from "@/components/sections/Header";
import Featured from "@/components/sections/Featured";
import BlastSection from "@/components/sections/BlastSection";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/sections/Footer";

const IndexCopy = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Featured />
        <BlastSection />
        <section className="bg-[#04120B] py-16">
          <div className="container mx-auto px-4">
            <div className="w-[40%] mx-auto relative bg-[#0E370E] text-white p-8 border-2 border-[#C6FF00]">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("/lovable-uploads/61f44b90-009f-4ec4-9efa-91895517632d.png")`,
                  backgroundSize: '40%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  mixBlendMode: 'multiply',
                  opacity: 0.4
                }}
              />
              <div className="relative z-10 flex items-center justify-center">
                <button className="text-6xl font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] hover:underline">
                  ALL OUR WRITING
                </button>
              </div>
            </div>
          </div>
        </section>
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default IndexCopy;
