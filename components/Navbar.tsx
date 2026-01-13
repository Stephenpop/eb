
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the background is dark (Contact page or Scrolled)
  const isDarkBg = activePage === 'contact' || (activePage === 'home' && isScrolled);
  const textColor = isDarkBg ? 'text-white' : 'text-[#1A1A1A]';

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'process', label: 'How I Work' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? isDarkBg ? 'bg-[#1A1A1A]/90 border-white/5 backdrop-blur-xl' : 'bg-[#FDFBF7]/90 border-gray-100 backdrop-blur-xl' 
          : 'bg-transparent'
      } ${isScrolled ? 'py-4 border-b' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => handleLinkClick('home')} 
            className={`serif text-3xl font-bold tracking-tight flex items-center group transition-colors ${textColor}`}
          >
            <span className="group-hover:text-[#4A6741]">EB</span>
            <span className="text-[#4A6741]">.</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative ${
                  activePage === link.id 
                    ? 'text-[#4A6741]' 
                    : isDarkBg ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#4A6741]"
                  />
                )}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('contact')}
              className={`px-8 py-3 rounded-full transition-all text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center space-x-2 ${
                isDarkBg 
                  ? 'bg-white text-black hover:bg-[#4A6741] hover:text-white' 
                  : 'bg-[#1A1A1A] text-white hover:bg-[#4A6741]'
              }`}
            >
              <span>Consultation</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 z-[101] transition-colors ${isMobileMenuOpen ? 'text-[#1A1A1A]' : textColor}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FDFBF7] z-[90] lg:hidden flex flex-col p-12 overflow-y-auto"
          >
            <div className="mt-24 space-y-6">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block text-4xl md:text-5xl serif font-bold text-left w-full ${
                    activePage === link.id ? 'text-[#4A6741]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-auto pt-12 border-t border-gray-100">
               <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-6">Social Channels</p>
               <div className="flex space-x-6 text-[#1A1A1A] font-bold text-sm">
                  <a href="#">LinkedIn</a>
                  <a href="#">Twitter</a>
                  <a href="#">Medium</a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
