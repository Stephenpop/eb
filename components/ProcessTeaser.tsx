
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Workflow } from 'lucide-react';

interface ProcessTeaserProps {
  onNavigate: (page: string) => void;
}

const ProcessTeaser: React.FC<ProcessTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A6741]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-xl">
            <span className="text-[#4A6741] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Workflow</span>
            <h2 className="text-5xl md:text-7xl serif font-bold">The <span className="italic text-[#4A6741]">Precision</span> <br/>Protocol.</h2>
          </div>
          <button 
            onClick={() => onNavigate('process')}
            className="group flex items-center space-x-6 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Explore the Process</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Diagnostic Audit', desc: 'Analyzing your current voice and defining the target lexical DNA.' },
            { step: '02', title: 'Deep Extraction', desc: 'Forensic-level research into primary medical sources and insights.' },
            { step: '03', title: 'Editorial Polish', desc: 'Synthesizing data into a premium, human-centric narrative arc.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] group hover:bg-[#4A6741]/5 transition-all"
            >
              <span className="serif text-5xl text-white/10 group-hover:text-[#4A6741] transition-colors mb-8 block">{item.step}</span>
              <h3 className="serif text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTeaser;
