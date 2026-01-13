
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutTeaserProps {
  onNavigate: (page: string) => void;
}

const AboutTeaser: React.FC<AboutTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#4A6741]/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/blessing.jpeg" 
              alt="Ezenwa Blessing" 
              className="rounded-[2.5rem] w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hidden md:block">
              <Sparkles className="text-[#4A6741] mb-2" size={20} />
              <p className="serif text-lg font-bold">15+ Success Stories</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Global Clients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#4A6741] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">The Person Behind the Pen</span>
            <h2 className="text-5xl md:text-7xl serif font-bold mb-8 leading-tight">
              A Scientist’s Mind. <br/>A <span className="italic text-[#4A6741]">Writer’s Soul.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed italic">
              "I bridge the gap between complex medical analysis and premium brand storytelling. My mission is to ensure that health content isn't just fluffy, but scientifically sound and deeply engaging."
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A6741]"></div>
                <p className="text-sm font-bold uppercase tracking-widest">Medical Lab Science Background</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A6741]"></div>
                <p className="text-sm font-bold uppercase tracking-widest">Executive Voice Mapping Specialist</p>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('about')}
              className="group flex items-center space-x-4 text-[#1A1A1A] hover:text-[#4A6741] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Read Full Biography</span>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#4A6741] group-hover:text-white group-hover:border-transparent transition-all">
                <ArrowRight size={18} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
