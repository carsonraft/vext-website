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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94212fb95938ac1bc3f5c55b4df18ce3dc6b2bb35c1104ae5021d6dc21bce305?placeholderIfAbsent=true"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54dc31161bcffbf1acecb0797b30dc2d5ef0e9fc302c1611f06172430feb2f01?placeholderIfAbsent=true"
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