import React from "react";
import Header from "@/components/sections/Header";
import Featured from "@/components/sections/Featured";
import BlastSection from "@/components/sections/BlastSection";
import Mission from "@/components/sections/Mission";
import VextIsNext from "@/components/sections/VextIsNext";
import SkullCTA from "@/components/sections/SkullCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Featured />
        <BlastSection />
        <Mission />
        <VextIsNext />
        <SkullCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;