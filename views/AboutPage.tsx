
import React from 'react';
import { PROFILE } from '../constants';
import { FileText, Award, GraduationCap, MapPin, Microscope, Database, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -inset-10 bg-[#4A6741]/5 rounded-full blur-3xl pointer-events-none"></div>
            <img 
              src="public/blessing.jpeg" 
              alt="Ezenwa Blessing" 
              className="relative z-10 rounded-[3rem] w-full aspect-[4/5] object-cover shadow-2xl" 
            />
            <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-xs border border-gray-100">
               <p className="serif text-2xl font-bold italic mb-2">"Authenticity is the heart of every story."</p>
               <p className="text-xs uppercase tracking-widest text-[#4A6741] font-bold">- Blessing</p>
            </div>
          </div>
          
          <div>
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-6 block">Biography & Mission</span>
            <h1 className="text-5xl md:text-7xl serif font-bold mb-10 leading-tight text-[#1A1A1A]">
              Ezenwa Blessing: The <span className="italic text-[#4A6741]">Voice</span> in the Shadows.
            </h1>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{PROFILE.aboutMe}</p>
              <p>
                My journey began in the medical laboratory, where I learned that the smallest details determine the outcome. Today, I apply that same forensic rigor to my writing. I don't just write; I engineer narratives that achieve specific psychological and commercial results.
              </p>
              <p>
                As a student of Medical Laboratory Science at Imo State University, I bring a unique analytical edge to my work—ensuring that wellness and health content isn't just fluffy, but scientifically sound.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm"><GraduationCap className="text-[#4A6741]" /></div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Education</p>
                   <p className="text-sm font-bold">Imo State University</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm"><MapPin className="text-[#4A6741]" /></div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</p>
                   <p className="text-sm font-bold">Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: The Forensic Methodology */}
        <div className="py-24 border-y border-gray-100 mb-24">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-6 block">The Intersection</span>
                 <h2 className="serif text-4xl md:text-5xl font-bold mb-8">The Forensic <span className="italic">Approach</span> to Content.</h2>
                 <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                   In the lab, there is no room for "maybe." Diagnostics require precision. I bring that exact mindset to every manuscript. Whether it's verifying a clinical claim or analyzing audience sentiment, my process is clinical.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex space-x-4">
                       <Microscope className="text-[#4A6741] shrink-0" size={24} />
                       <div>
                          <p className="font-bold mb-1">Observation</p>
                          <p className="text-sm text-gray-400">Deep-dive research into primary scientific sources and peer-reviewed journals.</p>
                       </div>
                    </div>
                    <div className="flex space-x-4">
                       <Database className="text-[#4A6741] shrink-0" size={24} />
                       <div>
                          <p className="font-bold mb-1">Verification</p>
                          <p className="text-sm text-gray-400">Every statistic and medical claim is cross-referenced for absolute accuracy.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-[3rem] p-12 text-white overflow-hidden relative group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A6741]/20 blur-[60px] group-hover:bg-[#4A6741]/40 transition-all"></div>
                 <h3 className="serif text-3xl font-bold mb-6">"Writing is simply another form of diagnostic testing. We test the hook, the flow, and the impact."</h3>
                 <p className="text-gray-400 italic">- My Philosophy</p>
              </div>
           </div>
        </div>

        {/* New Section: The Lexical DNA */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-4 block">Our Values</span>
              <h2 className="serif text-4xl md:text-5xl font-bold">The Lexical DNA.</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Heart size={32} />, title: "Empathetic Precision", desc: "Science can be cold; storytelling makes it warm. I balance technical data with the human experience." },
                { icon: <Zap size={32} />, title: "Linguistic Agility", desc: "Adapting to your specific brand cadence and vocabulary instantly through meticulous voice mapping." },
                { icon: <Award size={32} />, title: "Absolute Integrity", desc: "Ghostwriting is a silent partnership. Your reputation is protected by my rigorous fact-checking." }
              ].map((val, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all">
                   <div className="text-[#4A6741] mb-6">{val.icon}</div>
                   <h3 className="serif text-2xl font-bold mb-4">{val.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-24">
           <div>
              <h3 className="serif text-3xl font-bold mb-6">Philosophy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">I believe ghostwriting is a sacred trust. To capture your voice, I must first listen to your silence. My work is invisible, but the results are impossible to ignore.</p>
           </div>
           <div>
              <h3 className="serif text-3xl font-bold mb-6">Expertise</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Reproductive health, diagnostic medicine, student wellness, and luxury lifestyle narratives. I thrive in high-stakes environments where accuracy is non-negotiable.</p>
           </div>
           <div>
              <h3 className="serif text-3xl font-bold mb-6">Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">To become the leading voice for medical innovators globally, bridging the gap between ivory tower research and the everyday reader's needs.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
