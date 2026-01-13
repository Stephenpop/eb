import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-[#FDFBF7] pt-28 pb-20">
      
      {/* Background word – reduced on mobile */}
      <div className="absolute inset-0 z-0 opacity-[0.025] flex items-center justify-center pointer-events-none">
        <h1 className="text-[40vw] md:text-[30vw] font-bold serif select-none leading-none">
          BLESSING
        </h1>
      </div>

      <div className="z-10 max-w-5xl">
        
        {/* Badge */}
        <motion.span
          initial={isMobile ? false : { opacity: 0, y: 10 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-[9px] font-bold text-[#4A6741]
                     mb-8 block bg-[#4A6741]/5 px-6 py-2 rounded-full
                     w-fit mx-auto border border-[#4A6741]/10"
        >
          Premium Content Architect & Ghostwriter
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl
                     serif font-bold leading-tight md:leading-[0.9]
                     mb-10 tracking-tight"
        >
          The <span className="italic font-normal">Ghost</span> in the <br className="hidden sm:block" />
          Health Narrative.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={isMobile ? false : { opacity: 0 }}
          animate={isMobile ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl
                     text-gray-500 max-w-2xl mx-auto
                     mb-14 font-medium leading-relaxed"
        >
          Bridging rigorous medical analysis with premium brand storytelling.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            className="group bg-[#1A1A1A] text-white px-10 py-5 rounded-full
                       text-[10px] font-bold uppercase tracking-[0.2em]
                       hover:bg-[#4A6741] transition-all
                       flex items-center space-x-3 shadow-xl shadow-black/20"
          >
            <span>View Case Studies</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]
                       border border-gray-200 hover:bg-white hover:border-gray-400 transition-all"
          >
            Read The Journal
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator – desktop only */}
      {!isMobile && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-[#4A6741]/30 hidden md:block"
        >
          <ChevronDown size={32} />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
