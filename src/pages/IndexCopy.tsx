
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
            <h2 className="text-[#C6FF00] text-3xl font-['EnfiladeTRIALHeadline-Bold'] text-center mb-8">
              ALL OUR WRITING
            </h2>
          </div>
        </section>
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default IndexCopy;
