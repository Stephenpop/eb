
import React from 'react';
import { PROFILE } from '../constants';
import { Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#FDFBF7] pt-32 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-bold serif opacity-[0.02] select-none pointer-events-none translate-y-1/2">
        BLESSING
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
             <button onClick={() => onNavigate('home')} className="serif text-4xl font-bold mb-8">EB<span className="text-[#4A6741]">.</span></button>
             <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
               Bridging the gap between scientific precision and premium storytelling.
             </p>
             <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#4A6741] hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#4A6741] hover:text-white transition-all"><Twitter size={18} /></a>
             </div>
          </div>

          <div>
             <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A6741] mb-8">Navigation</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => onNavigate('home')} className="hover:text-[#4A6741] transition-colors">Home</button></li>
                <li><button onClick={() => onNavigate('about')} className="hover:text-[#4A6741] transition-colors">About Me</button></li>
                <li><button onClick={() => onNavigate('process')} className="hover:text-[#4A6741] transition-colors">How I Work</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-[#4A6741] transition-colors">Consultation</button></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A6741] mb-8">Specialties</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li className="text-gray-400">Ghostwriting</li>
                <li className="text-gray-400">Medical Content</li>
                <li className="text-gray-400">Content Architecture</li>
                <li className="text-gray-400">SEO Strategy</li>
             </ul>
          </div>

          <div>
             <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A6741] mb-8">Office</h4>
             <p className="text-sm font-medium mb-4">{PROFILE.location}</p>
             <a href={`mailto:${PROFILE.email}`} className="text-sm font-bold flex items-center space-x-2 text-[#4A6741]">
                <Mail size={16} />
                <span>Contact Blessing</span>
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100">
           <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">&copy; {new Date().getFullYear()} Ezenwa Blessing. All Rights Reserved.</p>
           <button 
             onClick={scrollToTop}
             className="mt-8 md:mt-0 group flex items-center space-x-4 uppercase text-[10px] font-bold tracking-[0.3em] text-[#1A1A1A]"
           >
             <span>Back to top</span>
             <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center group-hover:bg-[#4A6741] group-hover:text-white transition-all">
                <ArrowUp size={18} />
             </div>
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
