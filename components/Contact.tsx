import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A] overflow-hidden relative">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#4A6741]/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Sparkles className="text-[#4A6741]" size={18} />
              <span className="text-[#4A6741] font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                Let's Build Something Great
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Bring your <br />
              <span className="italic text-[#4A6741]">Vision</span> to the Page.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-md">
              Accepting select ghostwriting and content strategy projects for the upcoming quarter.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 text-white">
              <a href={`mailto:${PROFILE.email}`} className="group block">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-1">
                  Email
                </p>
                <p className="text-base sm:text-lg group-hover:text-[#4A6741] transition-colors break-all">
                  {PROFILE.email}
                </p>
              </a>

              <a href={`tel:${PROFILE.phone}`} className="group block">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-1">
                  WhatsApp / Call
                </p>
                <p className="text-base sm:text-lg group-hover:text-[#4A6741] transition-colors">
                  {PROFILE.phone}
                </p>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#1A1A1A]">
              New Project Inquiry
            </h3>

            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                name="name"
                required
                placeholder="Your Full Name"
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-[#FDFBF7] text-sm sm:text-base"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Your Work Email"
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-[#FDFBF7] text-sm sm:text-base"
              />

              <select
                name="service"
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-[#FDFBF7] text-gray-500 text-sm sm:text-base"
              >
                <option>Select Service</option>
                <option>Ghostwriting</option>
                <option>Content Strategy</option>
                <option>Health/Medical Article</option>
              </select>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-5 sm:px-6 py-4 rounded-2xl bg-[#FDFBF7] text-sm sm:text-base"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#1A1A1A] text-white py-4 sm:py-5 rounded-2xl hover:bg-[#4A6741] transition"
              >
                <span className="uppercase tracking-widest text-xs sm:text-sm font-bold">
                  Send Inquiry
                </span>
                <ArrowRight size={18} />
              </button>

              {status && (
                <p
                  className={`text-center text-sm font-bold ${
                    status.includes("successfully")
                      ? "text-[#4A6741]"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
