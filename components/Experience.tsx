import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const points = [
    { title: "Health Content Leadership", desc: "Authored 10+ long-form wellness articles averaging 800 words, focusing on reproductive health and nutrition." },
    { title: "SEO Strategy", desc: "Implemented keywords and meta-optimization that significantly boosted reader engagement and visibility." },
    { title: "Community Building", desc: "Organized writing competitions for 20+ emerging writers at Imo State University." },
    { title: "Anonymous Authority", desc: "Mastered the art of ghostwriting with 15+ high-stakes health posts delivered to diverse clients." }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-4 block">
              Proven Track Record
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl serif font-bold mb-8 sm:mb-12 leading-tight">
              Beyond just stringing <br />sentences together.
            </h2>

            <div className="space-y-8 sm:space-y-10">
              {points.map((p, i) => (
                <div key={i} className="flex space-x-4 sm:space-x-6 group">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="text-[#4A6741] group-hover:scale-110 transition-transform" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#4A6741] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visuals */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -top-24 -right-24 w-56 h-56 sm:w-64 sm:h-64 bg-[#4A6741] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-12">
                <div className="h-48 sm:h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="https://picsum.photos/seed/write1/400/600"
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>

                <div className="bg-[#4A6741] p-5 sm:p-8 rounded-2xl">
                  <p className="text-3xl sm:text-4xl font-bold serif mb-1">15+</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold opacity-80">
                    Ghostwritten Posts
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/5 p-5 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-3xl sm:text-4xl font-bold serif mb-1">800+</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold opacity-60">
                    Avg. Words Per Post
                  </p>
                </div>

                <div className="h-56 sm:h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src="https://picsum.photos/seed/write2/400/800"
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
