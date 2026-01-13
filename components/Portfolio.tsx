
import React from 'react';
import { PROFILE } from '../constants';
import { ExternalLink, Hash } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="text-[#4A6741] font-bold uppercase tracking-widest text-xs mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-6xl serif font-bold">The Portfolio.</h2>
          </div>
          <p className="max-w-sm text-gray-500 text-sm italic">
            A curation of words that resonated, educated, and converted. From public health blogs to clandestine ghostwriting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFILE.projects.map((project, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#4A6741] transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="bg-[#4A6741]/5 p-3 rounded-2xl">
                  <Hash className="text-[#4A6741]" size={24} />
                </div>
                {project.url && (
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4A6741] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="serif text-2xl font-bold mb-4 group-hover:text-[#4A6741] transition-colors">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 px-3 py-1.5 rounded-full text-gray-500 border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
