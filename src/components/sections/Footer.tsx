
import React from "react";

const Footer = () => {
  const links = [
    "CAREERS",
    "BUSINESS OPPORTUNITIES", 
    "MEDIA PARTNERSHIPS",
    "OUR MISSION",
    "TRANSPARENCY",
  ];

  const socialIcons = "/lovable-uploads/46a6b3fb-dee1-4398-8bf1-9230542de1e3.png";
  
  const socialLinks = [
    { 
      name: "Tumblr", 
      url: "https://vextmagazine.tumblr.com",
      handle: "VEXTMAGAZINE",
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/vext_magazine",
      handle: "@VEXT_MAGAZINE",
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/vextmagazine",
      handle: "@VEXTMAGAZINE",
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@vextmagazine",
      handle: "@VEXTMAGAZINE",
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/vextmagazine",
      handle: "VEXTMAGAZINE",
    },
    { 
      name: "Twitch", 
      url: "https://twitch.tv/vextmagazine",
      handle: "@VEXTMAGAZINE",
    }
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          <div className="flex justify-center">
            <img 
              src={socialIcons} 
              alt="Social Media Icons"
              className="h-16 transition-opacity duration-200 hover:opacity-80"
            />
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

          <div className="flex justify-between items-center text-gray-400">
            <div className="font-handjet">VEXT MEDIA 2025</div>
            <p>© VEXT MEDIA</p>
            <a href="mailto:INFO@VEXTMAGAZINE.COM" className="font-handjet hover:text-white">INFO@VEXTMAGAZINE.COM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
