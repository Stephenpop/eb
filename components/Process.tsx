
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Feather, RefreshCcw, Check } from 'lucide-react';

const steps = [
  { 
    icon: <Search />, 
    title: "Genetic Discovery", 
    desc: "We dive deep into your brand DNA and technical journals to find the core message." 
  },
  { 
    icon: <Feather />, 
    title: "Voice Mapping", 
    desc: "Drafting the skeleton using your unique syntax to ensure a seamless ghostwriting experience." 
  },
  { 
    icon: <RefreshCcw />, 
    title: "Iterative Polishing", 
    desc: "Two rounds of forensic-level editing to ensure clarity, flow, and SEO dominance." 
  },
  { 
    icon: <Check />, 
    title: "The Handover", 
    desc: "Final delivery of assets with all intellectual property transferred to your name." 
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl serif font-bold mb-6">The Narrative Path.</h2>
          <div className="h-1 w-24 bg-[#4A6741] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-500 italic">
            "Every manuscript follows a rigorous scientific process, ensuring the final piece is as accurate as it is beautiful."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4A6741]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="bg-[#4A6741] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                {step.icon}
              </div>
              
              <h3 className="serif text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A6741]">Stage 0{idx + 1}</span>
                <div className="w-8 h-px bg-[#4A6741]/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
