
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
            <div className="relative bg-[#222222] text-white p-8 rounded-lg border-2 border-[#C6FF00]">
              <h4 className="text-[#333333] mb-4 font-bold">Featured Writing</h4>
              <div className="relative z-10 flex items-center justify-center space-x-4">
                <span className="text-[#C6FF00] text-2xl">☞</span>
                <button className="text-3xl font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] hover:underline">
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
