
import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const RecessionCore = () => {
  return (
    <div className="w-full min-h-screen bg-[#04120B]">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto text-white">
          <h1 className="text-[64px] font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] mb-8">
            THE RISE OF RECESSION CORE
          </h1>
          <div className="relative mb-12">
            <img
              src="/lovable-uploads/809d0904-6ab9-447b-8349-0b59d644dfab.png"
              alt="Recession Core Fashion"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-[#04120B]/30" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              In an era marked by economic uncertainty and shifting cultural values,
              a new aesthetic movement has emerged from the digital underground:
              Recession Core. This isn't just another fleeting internet trend—it's
              a reflection of Gen Z's response to financial instability and
              environmental concerns.
            </p>
            <p>
              At its heart, Recession Core embraces minimalism not as a luxury
              choice, but as a necessity. Thrifted clothes, upcycled accessories,
              and DIY fashion hacks have become badges of honor rather than marks
              of constraint. The movement champions creativity within limitations,
              turning economic challenges into aesthetic victories.
            </p>
            <p>
              Social media platforms have become breeding grounds for Recession
              Core content, with creators sharing tips on budget-friendly fashion,
              sustainable living practices, and anti-consumption philosophies. The
              aesthetic often features muted colors, worn textures, and a
              deliberate rejection of fast fashion's glossy perfection.
            </p>
            <p>
              But Recession Core isn't just about fashion—it's a lifestyle
              statement that questions our relationship with consumption and
              success. As traditional markers of status become increasingly out of
              reach for young people, new values are taking their place. The
              ability to thrive with less, to create rather than consume, and to
              build community through shared economic experiences has become the
              new currency of cool.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RecessionCore;
