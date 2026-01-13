
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Hash } from 'lucide-react';

const services = [
  {
    id: 'ghost',
    title: 'The Silent Architect',
    role: 'Ghostwriting',
    description: 'Transforming executive whispers into industry-defining manifestos. I match your syntax, tone, and logic, delivering high-impact content that belongs solely to you.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'health',
    title: 'The Wellness Bridge',
    role: 'Medical Content',
    description: 'Specialized health narratives for wellness brands. I distill Bachelor-level medical laboratory insights into patient-centric stories that inspire action.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'strategy',
    title: 'Narrative Strategy',
    role: 'Content Blueprinting',
    description: 'Mapping your brand’s content trajectory over the next 12 months. Cluster mapping, tone guides, and long-form narrative arcs designed for retention.',
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(74,103,65,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 text-[#4A6741] mb-6">
              <Sparkles size={18} />
              <span className="uppercase tracking-[0.3em] text-xs font-bold">Services & Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl serif font-bold leading-tight">
              The <span className="italic font-normal">Science</span> of Effective Writing.
            </h2>
          </div>
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed mt-4">
            A specialized intersection where medical accuracy meets premium storytelling. Tailored for authority figures and health innovators.
          </p>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row md:items-center gap-8 transition-all duration-700 hover:bg-white/5"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="md:w-1/4">
                <span className="serif text-5xl md:text-6xl text-white/10 group-hover:text-[#4A6741] transition-colors duration-500">
                  {`0${services.indexOf(service) + 1}`}
                </span>
                <p className="text-[#4A6741] text-[10px] font-bold uppercase tracking-widest mt-2">
                  {service.role}
                </p>
              </div>

              <div className="md:w-1/2">
                <h3 className="serif text-3xl md:text-5xl font-bold mb-6 group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>

              <div className="md:w-1/4 flex justify-end">
                <motion.div 
                  className="bg-white/5 p-6 rounded-full group-hover:bg-[#4A6741] transition-all duration-500"
                  animate={{ rotate: hovered === service.id ? 45 : 0 }}
                >
                  <ArrowUpRight size={32} />
                </motion.div>
              </div>

              {/* Hover Image Reveal */}
              <AnimatePresence>
                {hovered === service.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 0.8, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    className="absolute right-32 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block w-72 h-96 rounded-2xl overflow-hidden z-50 border-4 border-[#4A6741]/20 shadow-2xl shadow-black/50"
                  >
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
