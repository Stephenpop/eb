import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ContactTeaserProps {
  onNavigate: (page: string) => void;
}

const ContactTeaser: React.FC<ContactTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6">
        <div className="bg-[#1A1A1A] rounded-[4rem] p-8 sm:p-12 md:p-24 relative overflow-hidden group
                        w-full sm:w-[90%] mx-auto"> {/* mobile width adjustment */}
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,103,65,0.2),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4A6741] flex items-center justify-center text-white mb-8 sm:mb-12 shadow-2xl shadow-[#4A6741]/20"
            >
              <MessageCircle size={28} sm={32} />
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl md:text-8xl serif font-bold text-white mb-6 sm:mb-8 leading-snug sm:leading-[1.1]">
              Ready to <span className="italic text-[#4A6741]">amplify</span> your <br/> industry authority?
            </h2>
            
            <p className="text-gray-400 max-w-full sm:max-w-xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg">
              Let’s discuss your next white paper, executive manifesto, or clinical series. Secure your slot for the next quarter.
            </p>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="group bg-white text-black px-8 sm:px-12 py-4 sm:py-6 rounded-full flex items-center space-x-4 sm:space-x-6 hover:bg-[#4A6741] hover:text-white transition-all shadow-2xl"
            >
              <span className="font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs">Start the Conversation</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-all">
                <ArrowRight size={14} sm={16} />
              </div>
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4A6741] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
