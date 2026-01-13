
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tones = [
  {
    id: 'academic',
    label: 'Academic',
    text: "The pathophysiological response to chronic cortisol elevation indicates a systemic failure in homeostatic regulation, necessitating a targeted endocrine intervention strategy to mitigate long-term cellular damage."
  },
  {
    id: 'empathetic',
    label: 'Empathetic',
    text: "When stress lingers for too long, your body starts to forget how to find its way back to peace. It's more than just feeling tired; it's a call from within asking for a moment of genuine, deep-seated rest."
  },
  {
    id: 'provocative',
    label: 'Provocative',
    text: "We are glorifying burnout while our biology is screaming for a reboot. If you aren't prioritizing your endocrine health today, you're effectively scheduling a forced breakdown for tomorrow."
  }
];

const VoiceSpectrum: React.FC = () => {
  const [activeTone, setActiveTone] = useState(tones[1]);

  return (
    <section className="py-32 bg-[#FDFBF7] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-[10px] mb-6 block">The Voice Spectrum</span>
            <h2 className="text-5xl md:text-6xl serif font-bold mb-8 leading-tight">Mastering <br/> <span className="italic text-[#4A6741]">Your</span> Cadence.</h2>
            <p className="text-gray-500 mb-12">
              Ghostwriting is the art of linguistic chameleonism. I don't just write; I inhabit your syntax, whether you need clinical precision or visceral storytelling.
            </p>
            
            <div className="flex flex-col space-y-4">
              {tones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setActiveTone(tone)}
                  className={`text-left px-8 py-4 rounded-2xl transition-all border ${
                    activeTone.id === tone.id 
                      ? 'bg-[#1A1A1A] text-white border-transparent' 
                      : 'bg-white border-gray-100 text-gray-400 hover:border-[#4A6741]'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{tone.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100 min-h-[400px] flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#4A6741]/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    key={activeTone.id}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-[#4A6741]"
                  />
               </div>
               
               <AnimatePresence mode="wait">
                 <motion.p
                   key={activeTone.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.5 }}
                   className="serif text-3xl md:text-5xl leading-relaxed text-[#1A1A1A] italic text-center"
                 >
                   "{activeTone.text}"
                 </motion.p>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSpectrum;
