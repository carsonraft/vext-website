
import React from "react";
import Header from "@/components/sections/Header";
import Featured from "@/components/sections/Featured";
import BlastSection from "@/components/sections/BlastSection";
import Mission from "@/components/sections/Mission";
import SkullCTA from "@/components/sections/SkullCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Featured />
        <BlastSection />
        <Mission />
        <SkullCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
