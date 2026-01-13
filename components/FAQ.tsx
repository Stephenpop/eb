
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How does the ghostwriting process work regarding credits?", a: "By default, I provide a full 'Work for Hire' agreement where 100% of the copyright and intellectual property is transferred to you upon final payment. Your name goes on the byline; mine stays behind the scenes." },
  { q: "Do you specialize only in health content?", a: "While health and medical laboratory sciences are my academic strengths, I am a versatile storyteller. I also handle lifestyle, personal branding, and educational technology content with the same level of research-driven rigor." },
  { q: "What is your typical turnaround time?", a: "For a standard 1,000-word article, turnaround is typically 3-5 business days including research. Express delivery is available for urgent thought-leadership needs." },
  { q: "Can you help with content strategy as well as writing?", a: "Absolutely. Many clients start with a strategy audit where I map out a 3-month narrative arc before we even put digital pen to paper." }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-4 block">Clarity First</span>
          <h2 className="text-4xl serif font-bold">Common Inquiries.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#4A6741] transition-colors"
              >
                <span className="serif text-xl font-semibold">{faq.q}</span>
                {openIdx === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-500 text-sm leading-relaxed">
                      {faq.a}
                    </p>
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

export default FAQ;
