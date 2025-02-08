
import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Sample = () => {
  return (
    <div className="w-full min-h-screen bg-[#221F26]">
      <Header />
      <main className="text-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full aspect-[16/9] bg-black overflow-hidden">
                <img 
                  src="/lovable-uploads/5a1e44df-3f25-4b52-8dc9-33ba570557b0.png"
                  alt="JPEGMAFIA outside a liquor store at night"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-1/4">
                <h1 className="inline-block text-5xl md:text-7xl font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00] text-left leading-tight">
                  <span className="bg-black px-4 py-2 box-decoration-clone">
                    JPEGMAFIA: TO SERVE AND PROTECT
                  </span>
                </h1>
                <h2 className="inline-block text-2xl md:text-3xl font-handjet text-gray-300 text-left mt-4">
                  <span className="bg-black px-4 py-2 box-decoration-clone">
                    How a U.S. Army veteran become one of America's most vocal critics
                  </span>
                </h2>
                <div className="inline-block text-xl font-handjet text-gray-400 text-left mt-2">
                  <span className="bg-black px-4 py-2 box-decoration-clone">
                    By Sandra Song
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-8">
              <div className="prose prose-invert max-w-none mt-8">
                <article className="space-y-6 text-lg font-handjet leading-relaxed">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor aliquet penatibus nibh nisl vulputate? Consequat eleifend eleifend molestie proin aliquam velit. Hendrerit justo dis conubia justo luctus aptent. Tristique scelerisque aliquet; elementum turpis montes aliquam enim. Fringilla nulla sollicitudin blandit a ex fusce. Donec fringilla quisque ad rhoncus convallis potenti. Lacus aenean sociosqu habitant erat porttitor taciti egestas morbi. Magnis condimentum curabitur nam dignissim lacus dis. Lorem magna nascetur faucibus maecenas odio feugiat fames condimentum.
                  </p>
                  
                  <p>
                    Convallis lobortis sodales viverra non hendrerit nec. Sed cubilia imperdiet nostra purus inceptos sem enim. Scelerisque erat hac malesuada porttitor nascetur. Porttitor per iaculis felis quis potenti mus dui nostra. Nibh risus senectus fringilla sociosqu consectetur lacinia aliquet curabitur. Ad mi amet fringilla ultrices dis nunc cubilia libero integer. Netus et curabitur tellus faucibus nisi vel purus tempus. Scelerisque ligula finibus placerat himenaeos eget. Efficitur ad ridiculus nunc libero tempus eros iaculis penatibus venenatis.
                  </p>

                  <div className="my-12 px-8">
                    <div className="w-full h-[300px] relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/cfa4e7f6-6798-4903-8f8d-2404059df604.png"
                        alt="Artistic portrait with neon green and red tones"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  
                  <p>
                    Class proin odio, fringilla ante elit ullamcorper. Magna ullamcorper quisque habitant accumsan nisl pretium primis. Rutrum egestas parturient vitae lorem neque torquent purus odio. Aenean parturient pretium felis sollicitudin nec maecenas mattis montes. Litora etiam suscipit sapien posuere libero netus ipsum. Cubilia eu bibendum iaculis quisque potenti turpis nisl quam class. Enim aptent lorem; dapibus dui tristique donec posuere. Orci a sapien senectus, nibh erat auctor. Dapibus turpis maecenas fusce urna blandit amet placerat dapibus.
                  </p>
                  
                  <p>
                    Dis vestibulum nisi non, turpis ligula mi. Ultrices nostra bibendum fringilla cursus platea hendrerit feugiat aptent. Placerat vulputate volutpat mus torquent convallis ullamcorper netus. Et parturient libero nunc curabitur posuere aptent. Amet vivamus himenaeos efficitur urna primis eu fusce vulputate. Montes fames lorem lobortis amet consectetur ultrices massa ad adipiscing. Penatibus vestibulum tristique suscipit ullamcorper lectus vestibulum praesent gravida. Parturient tristique dui est erat mi elementum quisque porttitor.
                  </p>
                  
                  <p>
                    Imperdiet libero euismod mollis aptent mauris augue maecenas vel. Proin suscipit fames nam pretium euismod eros feugiat vulputate tellus. Accumsan tortor platea libero ad eleifend vitae vestibulum dictum nisl. Sodales justo auctor nulla inceptos ad condimentum. Nulla etiam maximus blandit pulvinar luctus molestie fusce ullamcorper. Sociosqu in facilisis vivamus ipsum a ut interdum ante. Netus luctus fusce dignissim; dis sapien interdum. Imperdiet magnis posuere facilisi mauris magnis ridiculus sem fringilla.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sample;
