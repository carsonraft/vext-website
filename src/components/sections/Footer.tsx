import React from "react";

const Footer = () => {
  const links = [
    "Careers",
    "Business opportunities",
    "Media partnerships",
    "Our Mission",
    "Transparency",
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              loading="lazy"
              src="/lovable-uploads/a63108bd-dc69-4bf8-9da0-0bb501fd98e1.png"
              alt="Footer Logo"
              className="h-12 mb-8"
            />
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-right">
            <p className="font-bold mb-4">VEXT MEDIA 2024</p>
            <img
              loading="lazy"
              src="/lovable-uploads/22bb104d-89b7-47c1-b230-0b286841a663.png"
              alt="Footer Graphic"
              className="inline-block h-12 mb-4"
            />
            <a
              href="mailto:info@vext.media"
              className="block hover:text-gray-300 transition-colors"
            >
              info@vext.media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;