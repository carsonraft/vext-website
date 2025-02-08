
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Sample = () => {
  return (
    <div className="w-full min-h-screen bg-[#221F26]">
      <Header />
      <main className="text-white p-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#C6FF00] hover:text-white transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl font-['EnfiladeTRIALHeadline-Bold'] text-[#C6FF00]">
                JPEGMAFIA: TO SERVE AND PROTECT
              </h1>
              <h2 className="text-2xl font-handjet text-gray-300">
                How a U.S. Army veteran become one of America's most vocal critics
              </h2>
            </div>
            
            <div className="bg-[#403E43] p-6 rounded-lg">
              <h2 className="text-2xl font-['EnfiladeTRIALHeadline-Bold'] mb-4">
                Latest Release
              </h2>
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Video Player Placeholder</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <article className="space-y-6 text-lg font-handjet leading-relaxed">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor aliquet penatibus nibh nisl vulputate? Consequat eleifend eleifend molestie proin aliquam velit. Hendrerit justo dis conubia justo luctus aptent. Tristique scelerisque aliquet; elementum turpis montes aliquam enim. Fringilla nulla sollicitudin blandit a ex fusce. Donec fringilla quisque ad rhoncus convallis potenti. Lacus aenean sociosqu habitant erat porttitor taciti egestas morbi. Magnis condimentum curabitur nam dignissim lacus dis. Lorem magna nascetur faucibus maecenas odio feugiat fames condimentum.
                </p>
                
                <p>
                  Convallis lobortis sodales viverra non hendrerit nec. Sed cubilia imperdiet nostra purus inceptos sem enim. Scelerisque erat hac malesuada porttitor nascetur. Porttitor per iaculis felis quis potenti mus dui nostra. Nibh risus senectus fringilla sociosqu consectetur lacinia aliquet curabitur. Ad mi amet fringilla ultrices dis nunc cubilia libero integer. Netus et curabitur tellus faucibus nisi vel purus tempus. Scelerisque ligula finibus placerat himenaeos eget. Efficitur ad ridiculus nunc libero tempus eros iaculis penatibus venenatis.
                </p>
                
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
      </main>
      <Footer />
    </div>
  );
};

export default Sample;
