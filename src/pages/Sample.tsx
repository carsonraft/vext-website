
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Sample = () => {
  return (
    <div className="w-full min-h-screen bg-[#221F26]">
      <Header />
      <main className="text-white p-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#C6FF00] hover:text-white transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <div className="space-y-8">
            <h1 className="text-6xl font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00]">
              JPEGMAFIA
            </h1>
            
            <div className="bg-[#403E43] p-6 rounded-lg">
              <h2 className="text-2xl font-['EnfiladeTRIALHeadline-Bold'] mb-4">
                Latest Release
              </h2>
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Video Player Placeholder</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg font-handjet">
                Experience the raw energy and experimental sound of JPEGMAFIA, 
                pushing the boundaries of contemporary hip-hop with innovative 
                production and thought-provoking lyricism.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sample;
