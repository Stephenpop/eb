import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutTeaser from '../components/AboutTeaser';
import ProcessTeaser from '../components/ProcessTeaser';
import ContactTeaser from '../components/ContactTeaser';

/* Lazy-loaded heavy sections */
const VoiceSpectrum = lazy(() => import('../components/VoiceSpectrum'));
const EditorialBlueprint = lazy(() => import('../components/EditorialBlueprint'));
const AuthorityStats = lazy(() => import('../components/AuthorityStats'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      {/* HERO (always immediate) */}
      <Hero />

      {/* Marquee – desktop only */}
      <div className="bg-[#1A1A1A] py-12 border-y border-white/5 overflow-hidden">
        <div className="hidden md:flex marquee text-white/20 serif text-6xl md:text-8xl font-bold uppercase select-none italic">
          <span className="px-10">Ghostwriting</span>
          <span className="px-10 text-[#4A6741]">Medical Content</span>
          <span className="px-10">Editorial Strategy</span>
          <span className="px-10 text-[#4A6741]">Wellness</span>
          <span className="px-10">Ghostwriting</span>
          <span className="px-10 text-[#4A6741]">Medical Content</span>
        </div>

        {/* Mobile static text */}
        <div className="md:hidden text-center text-3xl serif italic text-white/30">
          Ghostwriting • Medical Content • Editorial Strategy • Wellness
        </div>
      </div>

      {/* Core above-the-fold sections */}
      <Services />
      <AboutTeaser onNavigate={onNavigate} />

      {/* Lazy-loaded editorial sections */}
      <Suspense fallback={null}>
        <VoiceSpectrum />
        <EditorialBlueprint />
      </Suspense>

      <ProcessTeaser onNavigate={onNavigate} />

      <Suspense fallback={null}>
        <AuthorityStats />
        <Portfolio />
        <Testimonials />
      </Suspense>

      <ContactTeaser onNavigate={onNavigate} />

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Heavy radial gradient disabled on mobile */}
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle,rgba(74,103,65,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
            whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-12"
          >
            <Sparkles size={16} className="text-[#4A6741]" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold">
              Limited Slots for Q2
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl serif font-bold leading-[0.95] mb-16">
            Shall we start the <br />
            <span className="italic text-[#4A6741]">next chapter?</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : undefined}
              whileTap={!isMobile ? { scale: 0.95 } : undefined}
              onClick={() => onNavigate('contact')}
              className="group relative flex items-center justify-center bg-[#4A6741] text-white
                         w-40 h-40 md:w-64 md:h-64 rounded-full text-lg md:text-xl
                         font-bold transition-all shadow-2xl shadow-black/40"
            >
              <div className="absolute inset-0 rounded-full border border-white/20
                              scale-110 opacity-0 group-hover:opacity-100
                              group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col items-center">
                <span>Book Now</span>
                <ArrowUpRight className="mt-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </div>
            </motion.button>

            <div className="text-left max-w-xs">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Translating complex insights into narratives that engage, educate, and sell.
              </p>
              <a
                href="mailto:blessingezenwa0211@gmail.com"
                className="text-[#4A6741] font-bold border-b border-[#4A6741]/20
                           hover:border-[#4A6741] transition-all"
              >
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
