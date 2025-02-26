import React, { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { MessageCircle, ThumbsUp, Plus, Minus } from "lucide-react";

const Sample = () => {
  const [expandedComment, setExpandedComment] = useState<number | null>(null);

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
                <div className="mt-4 relative z-0">
                  <h2 className="inline-block text-2xl md:text-3xl font-handjet text-gray-300 text-left">
                    <span className="bg-black px-4 py-2 box-decoration-clone">
                      How a U.S. Army veteran became one of America's most vocal critics
                    </span>
                  </h2>
                </div>
                <div className="mt-2 relative z-10">
                  <div className="inline-block text-xl font-handjet text-gray-400 text-left">
                    <span className="bg-black px-4 py-2 box-decoration-clone">
                      By Sandra Song
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4 pb-6">
              <div className="prose prose-invert max-w-none mt-8">
                <article className="space-y-6 text-lg font-handjet leading-relaxed">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor aliquet penatibus nibh nisl vulputate? Consequat eleifend eleifend molestie proin aliquam velit. Hendrerit justo dis conubia justo luctus aptent. Tristique scelerisque aliquet; elementum turpis montes aliquam enim. Fringilla nulla sollicitudin blandit a ex fusce. Donec fringilla quisque ad rhoncus convallis potenti. Lacus aenean sociosqu habitant erat porttitor taciti egestas morbi. Magnis condimentum curabitur nam dignissim lacus dis. Lorem magna nascetur faucibus maecenas odio feugiat fames condimentum.
                  </p>

                  <div className="my-8 flex justify-center">
                    <img 
                      src="/lovable-uploads/809d0904-6ab9-447b-8349-0b59d644dfab.png"
                      alt="Artistic portrait with neon green background"
                      className="w-[70%]"
                    />
                  </div>

                  <p>
                    Nisi metus sed nisl vestibulum, vivamus aptent ligula ultrices. Dictum tempor ad nulla turpis aliquet. Ultrices montes eu rutrum bibendum nulla etiam per. Vehicula tempor mauris sit convallis est cursus? Velit penatibus imperdiet torquent montes dictumst. Aptent dis elementum augue pretium eleifend. Arcu elit ullamcorper ridiculus arcu suscipit himenaeos. Cras mattis euismod rutrum imperdiet commodo dui elit. Curabitur ut quam augue suspendisse facilisi mattis pellentesque habitasse.
                  </p>

                  <p>
                    Consequat congue tristique odio, quisque tempor vulputate condimentum hendrerit. Class eget donec tempus auctor; nam ac fusce. Conubia curabitur magna ex velit facilisis suspendisse. Congue senectus facilisis vivamus pharetra dictum quam habitant at. Varius nullam platea bibendum velit at ante volutpat urna. Vestibulum ultricies cras sapien sit aliquam ornare. Tempor nibh fusce etiam nostra neque posuere venenatis massa.
                  </p>

                  <p>
                    Convallis lobortis sodales viverra non hendrerit nec. Sed cubilia imperdiet nostra purus inceptos sem enim. Scelerisque erat hac malesuada porttitor nascetur. Porttitor per iaculis felis quis potenti mus dui nostra. Nibh risus senectus fringilla sociosqu consectetur lacinia aliquet curabitur. Ad mi amet fringilla ultrices dis nunc cubilia libero integer. Netus et curabitur tellus faucibus nisi vel purus tempus. Scelerisque ligula finibus placerat himenaeos eget. Efficitur ad ridiculus nunc libero tempus eros iaculis penatibus venenatis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                    <div className="w-[90%] aspect-square relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/01c5b644-ab4d-4e93-94ca-f342bf38f987.png"
                        alt="Artistic digital painting with sunglasses"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-6 text-left -ml-0">
                      <p>
                        Mattis urna vel ex egestas; varius potenti auctor fusce. Sapien eget nulla blandit ligula mauris et morbi tristique. Dui condimentum mattis ante habitasse; nunc nibh consectetur. Platea adipiscing per vestibulum duis; sodales cursus posuere. Egestas pharetra dictumst facilisis condimentum justo volutpat enim. Sollicitudin feugiat tempus accumsan ultricies bibendum cras duis. Nam euismod gravida fermentum risus vehicula elementum praesent. Integer viverra torquent congue cursus habitasse quisque leo mauris. Phasellus lacinia ultrices donec hendrerit etiam ac.
                      </p>
                      
                      <p>
                        Tristique diam consectetur iaculis class metus montes ante. Vitae netus conubia tincidunt nibh mauris quisque morbi. Praesent rhoncus aenean mus a litora sagittis varius. Egestas pharetra dictumst facilisis condimentum justo volutpat enim. Sollicitudin feugiat tempus accumsan ultricies bibendum cras duis. Nam euismod gravida fermentum risus vehicula elementum praesent. Integer viverra torquent congue cursus habitasse quisque leo mauris. Phasellus lacinia ultrices donec hendrerit etiam ac. Nam euismod gravida fermentum risus vehicula elementum praesent. Integer viverra torquent congue cursus habitasse quisque leo mauris. Phasellus lacinia ultrices donec hendrerit etiam ac.
                      </p>
                    </div>
                  </div>
                  
                  <p>
                    Laoreet maximus ad lacinia neque id conubia vulputate. Fusce scelerisque himenaeos habitant phasellus cras egestas commodo laoreet. Vitae metus felis convallis senectus phasellus, consectetur nibh nulla auctor. Inceptos magna faucibus interdum magna quis ex vulputate sem. Amet nunc mauris penatibus posuere proin. Himenaeos porta volutpat tellus litora; curae cras eleifend.
                  </p>
                  <p className="text-gray-400 text-sm mt-8 mb-12">Originally published 3/2/2025</p>
                </article>
              </div>
            </div>

            <div className="px-4 pb-12">
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  <h2 className="text-2xl font-handjet text-[#C6FF00] text-center">Most Engaged</h2>
                  
                  <div className="space-y-2">
                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-handjet text-gray-300">@user123</span>
                        <div className="flex gap-4 text-gray-400">
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <ThumbsUp size={16} />
                            <span>42</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <MessageCircle size={16} />
                            <span>12</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className={`relative ${expandedComment === 0 ? '' : 'max-h-[48px] overflow-hidden'}`}>
                          <p className="font-handjet text-gray-100">This article perfectly captures the essence of JPEGMAFIA's artistic journey as he learns to criticize the United States, which is my favorite country except all the rest lmao. Any way, what I think is that JPEGMAFIA would be doing better in his career if he chose a file format that is lossless, e.g. PNGMAFIA</p>
                          {expandedComment !== 0 && (
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-black/40 to-black/40" />
                          )}
                        </div>
                        <div className={`mt-2 overflow-hidden transition-all duration-300 ${expandedComment === 0 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <p className="font-handjet text-gray-100">The military background adds such an interesting layer to his perspective, showing how his experiences shaped both his worldview and musical style. His time in the service clearly influenced his approach to structure and discipline in his production techniques, while simultaneously fueling his desire to challenge institutional norms. The way he incorporates these seemingly contradictory elements - military precision and anarchic experimentation - creates something entirely unique in the contemporary music landscape. His production style, particularly in tracks like "Jesus Forgive Me, I Am A Thot" and "1539 N. Calvert," demonstrates this perfect tension between chaos and control. It's fascinating to see how his experiences in the Air Force translated into his approach to music production, where he maintains incredibly tight control over seemingly chaotic elements. This duality is what makes his work so compelling and impossible to replicate.</p>
                        </div>
                        <button 
                          onClick={() => setExpandedComment(expandedComment === 0 ? null : 0)}
                          className="text-sm text-gray-400 hover:text-[#C6FF00] mt-1 flex items-center gap-1"
                        >
                          {expandedComment === 0 ? (
                            <>
                              Show less
                              <Minus size={14} />
                            </>
                          ) : (
                            <>
                              Show more
                              <Plus size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-handjet text-gray-300">@musicfan99</span>
                        <div className="flex gap-4 text-gray-400">
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <ThumbsUp size={16} />
                            <span>38</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <MessageCircle size={16} />
                            <span>8</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="font-handjet text-gray-100">Love how he challenges the status quo.</p>
                        <div className={`mt-2 overflow-hidden transition-all duration-300 ${expandedComment === 1 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <p className="font-handjet text-gray-100">His production techniques are mind-blowing! The way he manipulates samples and creates such complex, layered soundscapes while maintaining a raw, authentic energy is unprecedented. Each track feels like a carefully constructed chaos that somehow makes perfect sense.</p>
                        </div>
                        <button 
                          onClick={() => setExpandedComment(expandedComment === 1 ? null : 1)}
                          className="text-sm text-gray-400 hover:text-[#C6FF00] mt-1 flex items-center gap-1"
                        >
                          {expandedComment === 1 ? (
                            <>
                              Show less
                              <Minus size={14} />
                            </>
                          ) : (
                            <>
                              Show more
                              <Plus size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-handjet text-gray-300">@hiphophead</span>
                        <div className="flex gap-4 text-gray-400">
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <ThumbsUp size={16} />
                            <span>31</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#C6FF00]">
                            <MessageCircle size={16} />
                            <span>5</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="font-handjet text-gray-100">The way he blends experimental sounds with powerful messaging is unmatched.</p>
                        <div className={`mt-2 overflow-hidden transition-all duration-300 ${expandedComment === 2 ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                          <p className="font-handjet text-gray-100">In today's music scene, few artists manage to balance artistic innovation with meaningful commentary the way JPEGMAFIA does. His ability to weave social criticism and personal experiences into such forward-thinking production demonstrates a rare mastery of both form and content.</p>
                        </div>
                        <button 
                          onClick={() => setExpandedComment(expandedComment === 2 ? null : 2)}
                          className="text-sm text-gray-400 hover:text-[#C6FF00] mt-1 flex items-center gap-1"
                        >
                          {expandedComment === 2 ? (
                            <>
                              Show less
                              <Minus size={14} />
                            </>
                          ) : (
                            <>
                              Show more
                              <Plus size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-handjet text-[#C6FF00] text-center">Discussion</h2>
                  <div className="bg-black/40 p-6 rounded-lg">
                    <textarea 
                      placeholder="Join the discussion..."
                      className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white font-handjet resize-none focus:outline-none focus:ring-1 focus:ring-[#C6FF00] min-h-[120px]"
                    />
                    <button className="mt-4 bg-[#C6FF00] text-black px-6 py-2 rounded-lg font-handjet hover:bg-[#d4ff33] transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
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
