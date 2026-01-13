import React from 'react';
import { PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-3 sm:-inset-4 bg-[#4A6741] opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <img 
              src="/blessing.jpeg" 
              alt="Ezenwa Blessing" 
              className="relative rounded-2xl w-full h-[360px] sm:h-[420px] md:h-[500px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white p-3 sm:p-4 rounded-lg shadow-xl max-w-[85%]">
              <p className="serif text-base sm:text-xl italic text-[#4A6741]">
                "Precision meets Narrative."
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-4 block">
              The Writer Behind The Words
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl serif font-bold mb-6 sm:mb-8 leading-tight">
              Science by Study, <br className="hidden sm:block" />
              Storytelling by Soul.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              {PROFILE.aboutMe}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {PROFILE.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-3 text-sm font-medium border-l-2 border-[#4A6741] pl-4"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-xl border border-[#E2D9C8]">
              <h3 className="serif text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Academic Background
              </h3>
              <p className="text-sm font-semibold text-[#4A6741] mb-1">
                {PROFILE.education.degree}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
                {PROFILE.education.institution} | {PROFILE.education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
