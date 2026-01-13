
import React from 'react';
import { PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#4A6741] opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <img 
              src="/blessing.jpeg" 
              alt="Ezenwa Blessing" 
              className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-xl">
              <p className="serif text-xl italic text-[#4A6741]">"Precision meets Narrative."</p>
            </div>
          </div>
          
          <div>
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-4 block">The Writer Behind The Words</span>
            <h2 className="text-4xl md:text-5xl serif font-bold mb-8">Science by Study, <br/>Storytelling by Soul.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {PROFILE.aboutMe}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {PROFILE.skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3 text-sm font-medium border-l-2 border-[#4A6741] pl-4">
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FDFBF7] p-8 rounded-xl border border-[#E2D9C8]">
              <h3 className="serif text-xl font-bold mb-4">Academic Background</h3>
              <p className="text-sm font-semibold text-[#4A6741] mb-1">{PROFILE.education.degree}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{PROFILE.education.institution} | {PROFILE.education.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
