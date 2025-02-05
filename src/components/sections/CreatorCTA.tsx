import React from "react";

const CreatorCTA = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-black text-white p-8 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b84137ab5933527db9d44267f7e95dcd400a86a39e740bb165fdf45caaa63cd?placeholderIfAbsent=true"
            alt="Creator Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 flex items-center justify-center space-x-4">
            <span className="text-2xl">☞</span>
            <button className="text-xl font-bold hover:underline">
              BECOME A VEXT CREATOR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorCTA;