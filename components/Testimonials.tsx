import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Blessing has an uncanny ability to take complex medical jargon and turn it into something our readers actually want to read. Her work on our reproductive health series was transformative.",
    author: "Dr. Sarah Mitchell",
    title: "Director at HealthRepro",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "Finding a ghostwriter who can match my specific cadence and intensity was a challenge until I met Blessing. She's now an integral part of my personal brand strategy.",
    author: "Marcus Thorne",
    title: "Health Tech Entrepreneur",
    img: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    quote: "Detail-oriented, scientific, and yet deeply human. Her articles don't just educate; they connect. Highly recommended for any high-authority wellness platform.",
    author: "Elena Vasquez",
    title: "Editor-in-Chief, WellnessDaily",
    img: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-6">
        <div className="relative bg-[#FDFBF7] rounded-[3rem] p-8 sm:p-12 md:p-20 overflow-hidden border border-gray-100 shadow-sm
                        w-full sm:w-[90%] mx-auto"> {/* mobile width adjustment */}
          <Quote className="absolute top-8 left-8 text-[#4A6741]/10 w-24 h-24 sm:w-32 sm:h-32 -rotate-12" />
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <p className="serif text-xl sm:text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-8 sm:mb-12">
                  "{testimonials[index].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <img src={testimonials[index].img} alt={testimonials[index].author} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 border-2 border-[#4A6741]/20 p-1" />
                  <h4 className="font-bold text-base sm:text-lg">{testimonials[index].author}</h4>
                  <p className="text-[9px] sm:text-xs uppercase tracking-widest text-[#4A6741] font-semibold">{testimonials[index].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-6 sm:w-8 bg-[#4A6741]' : 'w-2 sm:w-2 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
