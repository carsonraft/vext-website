import React from "react";
import Header from "@/components/sections/Header";
import Featured from "@/components/sections/Featured";
import BlastSection from "@/components/sections/BlastSection";
import Mission from "@/components/sections/Mission";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Featured />
        <BlastSection />
        <Mission />
        <CreatorCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;