
import React from "react";

const Footer = () => {
  const links = [
    "CAREERS",
    "BUSINESS OPPORTUNITIES", 
    "MEDIA PARTNERSHIPS",
    "OUR MISSION",
    "TRANSPARENCY",
  ];

  const socialIcons = {
    Instagram: "/lovable-uploads/f8c84c73-9dca-45f9-9822-2e247eee8c23.png",
    TikTok: "/lovable-uploads/6ad12031-8485-47c2-9eb3-be2c44ee47f9.png",
    Tumblr: "/lovable-uploads/15a0ed9e-e7c0-4dbd-8424-5beda90c0798.png",
    Twitch: "/lovable-uploads/d205bda6-ecfe-41ee-a4fa-f9b72bf96378.png"
  };
  
  const vextLogo = "/lovable-uploads/048d2e7a-087a-41f1-b355-f0cc7982cc25.png";
  
  const socialLinks = [
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/vextmagazine/",
    },
    { 
      name: "TikTok", 
      url: "https://www.tiktok.com/@vextmagazine",
    },
    { 
      name: "Tumblr", 
      url: "https://www.tumblr.com/vextmagazine",
    },
    { 
      name: "Twitch", 
      url: "https://www.twitch.tv/vextmagazine", 
    }
  ];

  const repeatingText = "MAGAZINE VEXT".repeat(100);

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid gap-2">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="font-handjet text-[#C6FF00] text-2xl">
              {repeatingText}
            </div>
          </div>

          <div className="flex justify-center gap-12">
            {socialLinks.map((social) => (
              <div key={social.name} className="flex flex-col items-center">
                <a 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <img 
                    src={socialIcons[social.name as keyof typeof socialIcons]} 
                    alt={`${social.name} Icon`}
                    className="h-8 w-8"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="overflow-hidden whitespace-nowrap">
            <div className="font-handjet text-[#C6FF00] text-2xl">
              {repeatingText}
            </div>
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

          <div className="flex justify-center items-center gap-4 h-[52px]">
            <div className="font-handjet text-white text-xl flex-1 text-right">VEXT MEDIA 2025</div>
            <img src={vextLogo} alt="VEXT" className="h-[86px] w-[130px]" />
            <a href="mailto:INFO@VEXTMAGAZINE.COM" className="font-handjet text-white text-xl flex-1 text-left hover:opacity-80 transition-opacity">INFO@VEXTMAGAZINE.COM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

