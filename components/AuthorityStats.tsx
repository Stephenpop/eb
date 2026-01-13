
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'High-Authority Clients', detail: 'Executive Ghostwriting' },
  { value: '800+', label: 'Words Per Manuscript', detail: 'Deep-Dive Research' },
  { value: '2.5k+', label: 'Scientific Citations', detail: 'Evidence-Based Claims' },
  { value: '01', label: 'Primary Mission', detail: 'Humanizing Medicine' }
];

const AuthorityStats: React.FC = () => {
  return (
    <section className="py-40 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h3 className="text-7xl md:text-8xl serif font-bold text-[#1A1A1A] mb-4 flex items-baseline justify-center md:justify-start">
                {stat.value}
                <span className="text-[#4A6741] text-2xl ml-2">.</span>
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A6741] mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm italic">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-white border border-gray-100 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-lg">
              <h4 className="serif text-3xl md:text-4xl font-bold mb-6">The Credibility Quotient.</h4>
              <p className="text-gray-500 leading-relaxed">
                As a student of Medical Laboratory Science, I bridge the gap between "Content" and "Authority". Every claim I ghostwrite is backed by the same rigor used in clinical diagnostics.
              </p>
           </div>
           <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-[#FDFBF7] bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-[#FDFBF7] bg-[#4A6741] flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest">
                +15
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityStats;
