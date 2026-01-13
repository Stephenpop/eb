import React, { useState } from 'react';
import { Mail, Phone, Download, ArrowRight, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        "https://submify.vercel.app/blessingezenwa0211@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#1A1A1A] text-white min-h-screen relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A6741]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl serif font-bold mb-8 leading-tight">
                Let's <br />
                <span className="italic text-[#4A6741]">Write</span> History.
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                Currently taking bookings for executive ghostwriting and high-authority health content.
              </p>

              <div className="space-y-8 mb-16">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4A6741] transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-500 mb-1">Email</p>
                    <p className="text-xl font-medium truncate max-w-[200px] md:max-w-xs">{PROFILE.email}</p>
                  </div>
                </a>

                <a href={`tel:${PROFILE.phone}`} className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4A6741] transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-500 mb-1">Phone</p>
                    <p className="text-xl font-medium">{PROFILE.phone}</p>
                  </div>
                </a>
              </div>

              <a
                href="/ezenwa-blessing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-white text-black px-8 py-5 rounded-full font-bold hover:bg-[#4A6741] hover:text-white transition-all shadow-xl"
              >
                <Download size={18} />
                <span>Get My Resume</span>
              </a>

              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/ezenwa-blessing-937127353" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-5 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column - Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] text-[#1A1A1A] shadow-2xl w-full"
            >
              <div className="flex items-center space-x-3 mb-10">
                <MessageSquare className="text-[#4A6741]" />
                <h2 className="serif text-3xl md:text-4xl font-bold">New Project</h2>
              </div>

              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Maryjane"
                      className="w-full bg-[#FDFBF7] border-2 border-transparent focus:border-[#4A6741] rounded-[1.5rem] md:rounded-[2rem] px-8 py-4 md:py-5 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="maryjane@gmail.com"
                      className="w-full bg-[#FDFBF7] border-2 border-transparent focus:border-[#4A6741] rounded-[1.5rem] md:rounded-[2rem] px-8 py-4 md:py-5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Subject</label>
                  <select
                    name="subject"
                    className="w-full bg-[#FDFBF7] border-2 border-transparent focus:border-[#4A6741] rounded-[1.5rem] md:rounded-[2rem] px-8 py-4 md:py-5 outline-none transition-all appearance-none text-gray-600"
                  >
                    <option>Select Project Type</option>
                    <option>Ghostwriting Strategy</option>
                    <option>Health/Medical Content</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Your Vision</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe the voice you want to project..."
                    className="w-full bg-[#FDFBF7] border-2 border-transparent focus:border-[#4A6741] rounded-[1.5rem] md:rounded-[2rem] px-8 py-4 md:py-5 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group bg-[#1A1A1A] text-white py-5 md:py-6 rounded-full flex items-center justify-center space-x-4 hover:bg-[#4A6741] transition-all duration-500"
                >
                  <span className="font-bold uppercase tracking-[0.3em] text-xs">Send Message</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>

                {status && (
                  <p
                    className={`text-center text-sm font-bold mt-4 ${
                      status.includes("successfully") ? "text-[#4A6741]" : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
