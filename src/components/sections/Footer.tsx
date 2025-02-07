
import React from "react";

const Footer = () => {
  const links = [
    "Careers",
    "Business opportunities",
    "Media partnerships",
    "Our Mission",
    "Transparency",
  ];

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/vext_magazine" },
    { name: "Instagram", url: "https://instagram.com/vext_magazine" },
    { name: "YouTube", url: "https://youtube.com/vextmag" },
    { name: "Official Site", url: "https://vextmagazine.com" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          <div className="flex flex-wrap justify-center gap-8 font-handjet text-xl">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center gap-8 font-handjet text-xl">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © VEXT Media 2024 · <a href="mailto:info@vext.media" className="hover:text-white">info@vext.media</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
