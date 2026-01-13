
import React from 'react';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import Portfolio from '../components/Portfolio.tsx';
import Testimonials from '../components/Testimonials.tsx';
import VoiceSpectrum from '../components/VoiceSpectrum.tsx';
import EditorialBlueprint from '../components/EditorialBlueprint.tsx';
import AuthorityStats from '../components/AuthorityStats.tsx';
import AboutTeaser from '../components/AboutTeaser.tsx';
import ProcessTeaser from '../components/ProcessTeaser.tsx';
import ContactTeaser from '../components/ContactTeaser.tsx';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <div className="bg-[#1A1A1A] py-12 border-y border-white/5 overflow-hidden">
        <div className="flex marquee text-white/20 serif text-6xl md:text-8xl font-bold uppercase select-none italic">
          <span className="px-10">Ghostwriting</span>
          <span className="px-10 text-[#4A6741]">Medical Content</span>
          <span className="px-10">Editorial Strategy</span>
          <span className="px-10 text-[#4A6741]">Wellness</span>
          <span className="px-10">Ghostwriting</span>
          <span className="px-10 text-[#4A6741]">Medical Content</span>
          <span className="px-10">Editorial Strategy</span>
          <span className="px-10 text-[#4A6741]">Wellness</span>
        </div>
      </div>

   
      <Services />
      
{/* About Teaser Section */}
      <AboutTeaser onNavigate={onNavigate} />

      {/* Voice and Strategy Sections */}
      <VoiceSpectrum />
      <EditorialBlueprint />
      
      {/* Process Teaser Section */}
      <ProcessTeaser onNavigate={onNavigate} />

      <AuthorityStats />
      
      <Portfolio />
      <Testimonials />

      {/* Contact Teaser Section */}
      <ContactTeaser onNavigate={onNavigate} />
      
      {/* Cinematic Final CTA */}
      <section className="py-32 md:py-48 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(74,103,65,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-12"
          >
            <Sparkles size={16} className="text-[#4A6741]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Limited Slots for Q2</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl serif font-bold leading-[0.9] mb-16">
            Shall we start the <br/> <span className="italic text-[#4A6741]">next chapter?</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="group relative flex items-center justify-center bg-[#4A6741] text-white w-48 h-48 md:w-64 md:h-64 rounded-full text-xl font-bold transition-all shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 rounded-full border border-white/20 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="flex flex-col items-center">
                <span>Book Now</span>
                <ArrowUpRight className="mt-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </div>
            </motion.button>
            
            <div className="text-left max-w-xs">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Directly translating complex insights into narratives that engage, educate, and sell. Let's make your voice heard.
              </p>
              <a href="mailto:blessingezenwa0211@gmail.com" className="text-[#4A6741] font-bold border-b border-[#4A6741]/20 hover:border-[#4A6741] transition-all">
                blessingezenwa0211@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
