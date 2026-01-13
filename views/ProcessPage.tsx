
import React from 'react';
import { PenTool, Target, Layers, Coffee, ShieldCheck, TrendingUp, RefreshCcw } from 'lucide-react';

const ProcessPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-6 block">How We Collaborate</span>
          <h1 className="text-6xl md:text-8xl serif font-bold mb-8">The Scientific <br/> <span className="italic text-[#4A6741]">Ghostwriter</span> Method.</h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">A meticulous four-phase operation designed to deliver high-authority content without any stress on your end.</p>
        </div>

        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="bg-[#4A6741] text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl">
                  <Target size={36} />
               </div>
               <h2 className="serif text-4xl font-bold mb-8">Phase 1: Diagnostic Onboarding</h2>
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">Before we write, we diagnose. We use a custom questionnaire to map out your specific lexical preferences, "forbidden" words, and key thought-leadership targets.</p>
               <ul className="space-y-4">
                  {['Voice Audit', 'Competitor Landscape Analysis', 'Goal Setting Session'].map(f => (
                    <li key={f} className="flex items-center space-x-3 text-sm font-bold text-[#4A6741]">
                       <div className="w-2 h-2 rounded-full bg-[#4A6741]"></div>
                       <span>{f}</span>
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-[#FDFBF7] p-12 rounded-[3rem] border border-gray-100">
               <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg mb-8" />
               <p className="text-xs text-gray-400 italic">"The diagnostic phase ensures the writing sounds like you from the very first draft."</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 bg-[#1A1A1A] p-12 rounded-[3rem] text-white">
               <h2 className="serif text-4xl font-bold mb-8 text-[#4A6741]">Phase 2: Laboratory Research</h2>
               <p className="text-gray-400 mb-8 leading-relaxed">Unlike generalist writers, I leverage my medical background to cross-reference facts with peer-reviewed journals. No misinformation. No surface-level content.</p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                     <p className="text-2xl font-bold serif">100%</p>
                     <p className="text-[10px] uppercase tracking-widest text-gray-500">Fact-Checked</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                     <p className="text-2xl font-bold serif">SEO</p>
                     <p className="text-[10px] uppercase tracking-widest text-gray-500">Optimized</p>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="bg-[#4A6741] text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl">
                  <Layers size={36} />
               </div>
               <h2 className="serif text-4xl font-bold mb-8">Phase 3: Deep Work Drafting</h2>
               <p className="text-lg text-gray-600 leading-relaxed">I enter a focused state to produce the first draft. We use a cloud-based collaboration tool so you can see progress in real-time or simply wait for the "Eureka!" notification.</p>
            </div>
          </div>

          {/* New Section: The Quality Gate */}
          <div className="py-24 border-t border-gray-100">
             <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xl">
                   <div className="bg-[#4A6741]/10 text-[#4A6741] w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                      <ShieldCheck size={28} />
                   </div>
                   <h2 className="serif text-4xl font-bold mb-6">The Quality Gate.</h2>
                   <p className="text-gray-500 leading-relaxed">
                     Every manuscript passes through three separate "filtration" levels before it reaches your desk. This ensures the output is not only error-free but carries the specific "spark" your brand requires.
                   </p>
                </div>
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100">
                      <p className="font-bold text-[#4A6741] mb-2 uppercase text-[10px] tracking-widest">Level 01</p>
                      <h4 className="serif text-xl font-bold mb-2">Technical Audit</h4>
                      <p className="text-xs text-gray-400">Verification of all medical citations and laboratory data points.</p>
                   </div>
                   <div className="p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100">
                      <p className="font-bold text-[#4A6741] mb-2 uppercase text-[10px] tracking-widest">Level 02</p>
                      <h4 className="serif text-xl font-bold mb-2">Voice Sync</h4>
                      <p className="text-xs text-gray-400">Comparing the manuscript against your brand's Lexical DNA guide.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* New Section: Longevity Strategy */}
          <div className="py-24 bg-[#1A1A1A] rounded-[4rem] text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4A6741]/10 blur-[100px] rounded-full"></div>
             <div className="max-w-5xl mx-auto px-12 relative z-10 text-center">
                <TrendingUp className="text-[#4A6741] mx-auto mb-8" size={48} />
                <h2 className="serif text-4xl md:text-5xl font-bold mb-8">Content That <span className="italic text-[#4A6741]">Evolves</span>.</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                  I don't just provide "posts"; I provide assets. My method includes strategic advice on how to atomize one deep-dive medical article into a month's worth of social authority across LinkedIn, Twitter, and newsletters.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                   {['Content Atomization', 'Narrative Arcs', 'Authority Building'].map(item => (
                     <div key={item} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2">
                        <RefreshCcw size={12} className="text-[#4A6741]" />
                        <span>{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
