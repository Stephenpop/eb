
import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Microscope, PenTool, Radio } from 'lucide-react';

const blueprintItems = [
  {
    icon: <FileSearch size={24} />,
    title: "The Hook",
    desc: "Psychological entry points that bypass the reader's resistance and ignite immediate intrigue."
  },
  {
    icon: <Microscope size={24} />,
    title: "Clinical Core",
    desc: "Evidence-based assertions cross-referenced with current medical laboratory findings."
  },
  {
    icon: <PenTool size={24} />,
    title: "Narrative Bridge",
    desc: "Humanizing complex data through metaphorical storytelling that connects with the reader's reality."
  },
  {
    icon: <Radio size={24} />,
    title: "The Resonance",
    desc: "Strategic pacing and phonetic flow designed to linger in the reader's mind long after the page is closed."
  }
];

const EditorialBlueprint: React.FC = () => {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#4A6741] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Architectural Integrity</span>
          <h2 className="text-5xl md:text-8xl serif font-bold mb-8">The <span className="italic text-[#4A6741]">Blueprint.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "Every piece of content is engineered with scientific rigor and editorial soul. This is how we build authority from the first sentence."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blueprintItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] group hover:bg-[#4A6741]/10 transition-all duration-500"
            >
              <div className="text-[#4A6741] mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="serif text-2xl font-bold mb-6">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              
              <div className="mt-12 flex items-center space-x-2">
                <div className="h-px flex-grow bg-white/10"></div>
                <span className="text-[10px] font-bold text-[#4A6741] uppercase tracking-widest">{`Layer 0${idx + 1}`}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialBlueprint;
