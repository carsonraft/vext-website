import React from "react";

const Mission = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 font-instrument">OUR MISSION</h2>
        <p className="text-lg leading-relaxed mb-8">
          VEXT is a global next-gen youth media platform that curates an array of
          unexpected content, groundbreaking artistry & reader-submitted work to
          nurture productive discussions among a digital community of progressive
          creatives.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-bold"
        >
          Become a VEXT Creator
        </a>
      </div>
    </section>
  );
};

export default Mission;