
import React from "react";

const Footer = () => {
  const links = [
    "CAREERS",
    "BUSINESS OPPORTUNITIES", 
    "MEDIA PARTNERSHIPS",
    "OUR MISSION",
    "TRANSPARENCY",
  ];

  const socialIconsSprite = "/lovable-uploads/46a6b3fb-dee1-4398-8bf1-9230542de1e3.png";
  
  const socialLinks = [
    { 
      name: "Tumblr", 
      url: "https://vextmagazine.tumblr.com",
      handle: "VEXTMAGAZINE",
      position: "0% 0%"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/vext_magazine",
      handle: "@VEXT_MAGAZINE",
      position: "20% 0%"
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/vextmagazine",
      handle: "@VEXTMAGAZINE",
      position: "40% 0%"
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@vextmagazine",
      handle: "@VEXTMAGAZINE",
      position: "60% 0%"
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/vextmagazine",
      handle: "VEXTMAGAZINE",
      position: "80% 0%"
    },
    { 
      name: "Twitch", 
      url: "https://twitch.tv/vextmagazine",
      handle: "@VEXTMAGAZINE",
      position: "100% 0%"
    }
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          <div className="flex justify-center gap-8 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title={link.handle}
              >
                <div 
                  className="w-12 h-12 bg-[length:600%] transition-all duration-200 group-hover:opacity-80"
                  style={{
                    backgroundImage: `url(${socialIconsSprite})`,
                    backgroundPosition: link.position
                  }}
                />
              </a>
            ))}
          </div>

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

