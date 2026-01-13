import React from 'react';
import { Target, Layers, ShieldCheck, TrendingUp, RefreshCcw } from 'lucide-react';

const ProcessPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-4 block">
            How We Collaborate
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl serif font-bold mb-6 md:mb-8 leading-tight">
            The Scientific <br />
            <span className="italic text-[#4A6741]">Ghostwriter</span> Method.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg">
            A meticulous four-phase operation designed to deliver high-authority content without any stress on your end.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Phase 1 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full">
              <div className="bg-[#4A6741] text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-6 lg:mb-10 mx-auto lg:mx-0 shadow-xl">
                <Target size={36} />
              </div>
              <h2 className="serif text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 lg:mb-8 text-center lg:text-left">
                Phase 1: Diagnostic Onboarding
              </h2>
              <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-center lg:text-left">
                Before we write, we diagnose. We use a custom questionnaire to map out your specific lexical preferences, "forbidden" words, and key thought-leadership targets.
              </p>
              <ul className="space-y-2 lg:space-y-4 text-center lg:text-left">
                {['Voice Audit', 'Competitor Landscape Analysis', 'Goal Setting Session'].map(f => (
                  <li key={f} className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3 text-sm font-bold text-[#4A6741]">
                    <div className="w-2 h-2 rounded-full bg-[#4A6741]"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full bg-[#FDFBF7] p-6 md:p-12 rounded-3xl border border-gray-100 mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                className="rounded-2xl shadow-lg mb-4 md:mb-8 w-full"
              />
              <p className="text-xs text-gray-400 italic text-center">
                "The diagnostic phase ensures the writing sounds like you from the very first draft."
              </p>
            </div>
          </div>

          {/* Phase 2 & 3 */}
          <div className="space-y-12 lg:space-y-24">
            {/* Phase 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 w-full bg-[#1A1A1A] p-6 md:p-12 rounded-3xl text-white mx-auto lg:mx-0">
                <h2 className="serif text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 lg:mb-8 text-[#4A6741] text-center lg:text-left">
                  Phase 2: Laboratory Research
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed text-center lg:text-left">
                  Unlike generalist writers, I leverage my medical background to cross-reference facts with peer-reviewed journals. No misinformation. No surface-level content.
                </p>
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
              <div className="order-1 lg:order-2 w-full">
                <div className="bg-[#4A6741] text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-6 lg:mb-10 mx-auto lg:mx-0 shadow-xl">
                  <Layers size={36} />
                </div>
                <h2 className="serif text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 lg:mb-8 text-center lg:text-left">
                  Phase 3: Deep Work Drafting
                </h2>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  I enter a focused state to produce the first draft. We use a cloud-based collaboration tool so you can see progress in real-time or simply wait for the "Eureka!" notification.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Gate */}
          <div className="py-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="w-full md:w-1/3">
                <div className="bg-[#4A6741]/10 text-[#4A6741] w-14 h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-8 mx-auto md:mx-0">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="serif text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 text-center md:text-left">
                  The Quality Gate.
                </h2>
                <p className="text-gray-500 leading-relaxed text-center md:text-left">
                  Every manuscript passes through three separate "filtration" levels before it reaches your desk. This ensures the output is not only error-free but carries the specific "spark" your brand requires.
                </p>
              </div>

              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Technical Audit', 'Voice Sync'].map((level, i) => (
                  <div key={i} className="p-6 md:p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100 w-full">
                    <p className="font-bold text-[#4A6741] mb-1 text-[10px] uppercase tracking-widest">{`Level 0${i + 1}`}</p>
                    <h4 className="serif text-xl font-bold mb-1">{level}</h4>
                    <p className="text-xs text-gray-400">
                      {i === 0 
                        ? 'Verification of all medical citations and lab data.' 
                        : "Comparing the manuscript against your brand's Lexical DNA guide."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Longevity Strategy */}
          <div className="py-24 bg-[#1A1A1A] rounded-[4rem] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#4A6741]/10 blur-[100px] rounded-full"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10 text-center">
              <TrendingUp className="text-[#4A6741] mx-auto mb-6 sm:mb-8" size={48} />
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Content That <span className="italic text-[#4A6741]">Evolves</span>.
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed">
                I don't just provide "posts"; I provide assets. My method includes strategic advice on how to atomize one deep-dive medical article into a month's worth of social authority across LinkedIn, Twitter, and newsletters.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {['Content Atomization', 'Narrative Arcs', 'Authority Building'].map(item => (
                  <div key={item} className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
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
