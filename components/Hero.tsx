
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-[#FDFBF7] pt-32 pb-20">
      <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <h1 className="text-[30vw] font-bold serif select-none leading-none">BLESSING</h1>
      </div>
      
      <div className="z-10 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#4A6741] mb-8 block bg-[#4A6741]/5 px-6 py-2 rounded-full w-fit mx-auto border border-[#4A6741]/10"
        >
          Premium Content Architect & Ghostwriter
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl serif font-bold leading-[1.1] md:leading-[0.9] mb-12 tracking-tight"
        >
          The <span className="italic font-normal">Ghost</span> in the Health Narrative.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed"
        >
          Specialized in bridging the gap between rigorous medical analysis and premium brand storytelling. 
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            className="group bg-[#1A1A1A] text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#4A6741] transition-all flex items-center space-x-3 shadow-2xl shadow-black/20"
          >
            <span>View Case Studies</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-gray-200 hover:bg-white hover:border-gray-400 transition-all"
          >
            Read The Journal
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-[#4A6741]/30 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
