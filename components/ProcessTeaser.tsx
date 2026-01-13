import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProcessTeaserProps {
  onNavigate: (page: string) => void;
}

const ProcessTeaser: React.FC<ProcessTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Ambient blur */}
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 md:top-0 md:right-0 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-[#4A6741]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 sm:mb-16 md:mb-20 gap-8">
          <div className="max-w-full sm:max-w-xl">
            <span className="text-[#4A6741] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Our Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl serif font-bold leading-snug sm:leading-tight md:leading-tight">
              The <span className="italic text-[#4A6741]">Precision</span>
              <br className="hidden sm:block" />
              Protocol.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('process')}
            className="self-start lg:self-auto group flex items-center space-x-3 sm:space-x-4 bg-white/5 border border-white/10 px-5 sm:px-7 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition-all text-[10px] sm:text-[10px] font-bold uppercase tracking-widest"
          >
            Explore the Process
            <ArrowRight size={14} sm={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              step: '01',
              title: 'Diagnostic Audit',
              desc: 'Analyzing your current voice and defining the target lexical DNA.',
            },
            {
              step: '02',
              title: 'Deep Extraction',
              desc: 'Forensic-level research into primary medical sources and insights.',
            },
            {
              step: '03',
              title: 'Editorial Polish',
              desc: 'Synthesizing data into a premium, human-centric narrative arc.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-[#4A6741]/5 transition-all w-full"
            >
              <span className="serif text-3xl sm:text-4xl md:text-5xl text-white/10 hover:text-[#4A6741] transition-colors mb-4 sm:mb-6 block">
                {item.step}
              </span>
              <h3 className="serif text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTeaser;
