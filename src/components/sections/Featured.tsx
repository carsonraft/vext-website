import React from "react";

const Featured = () => {
  return (
    <section className="relative w-full bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac2fb9747d57c9bf6d901f7902be3bbeaab1fae0e0868a8476e6bfad239a2a5?placeholderIfAbsent=true"
            alt="Featured Background"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center space-x-4 mb-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5fe69e7913ea4b748585069c5a5693bad0e6ad57129e933decf2abe7ebff1dd?placeholderIfAbsent=true"
                alt="Artist"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="text-sm font-bold mb-2">MUSIC</div>
                <h2 className="text-3xl font-bold mb-2">
                  JPEGMAFIA: To Serve & Protect
                </h2>
                <p>
                  <span className="text-[#C6FF00]">By Sandra Song</span>{" "}
                  vext.media/jpegmafia-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;