"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCoffee, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
      style: {
        background: "#3D2314",
        color: "#FCF9F5",
        border: "1px solid #C19A6B",
      },
    });
  };

  return (
    <section id="contact" className="bg-[#FCF9F5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#3D2314] mb-4"
          >
            Get in{" "}
            <span className="italic font-serif text-[#C19A6B]">Touch</span>
          </motion.h2>
          <p className="text-[#5C3D2E]/80 max-w-lg mx-auto">
            Whether you have a question about our roasts or want to book a
            table, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* --- Contact Information --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-[#F5EBE0] shadow-sm">
              <h3 className="text-2xl font-bold text-[#3D2314] mb-6">
                Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FCF9F5] rounded-xl text-[#C19A6B]">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3D2E]/60 uppercase tracking-widest font-bold">
                      Email Us
                    </p>
                    <p className="text-[#3D2314] font-medium">
                      hello@coffee-time.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FCF9F5] rounded-xl text-[#C19A6B]">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3D2E]/60 uppercase tracking-widest font-bold">
                      Visit Us
                    </p>
                    <p className="text-[#3D2314] font-medium">
                      Downtown District, Biskra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FCF9F5] rounded-xl text-[#C19A6B]">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#5C3D2E]/60 uppercase tracking-widest font-bold">
                      Call Us
                    </p>
                    <p className="text-[#3D2314] font-medium">
                      +213 (0) 555 12 34 56
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle branding element */}
            <div className="p-8 rounded-3xl bg-[#3D2314] text-[#FCF9F5] overflow-hidden relative group">
              <FiCoffee className="absolute -right-4 -bottom-4 text-[#C19A6B]/10 size-40 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h4 className="text-xl font-bold mb-2">Brewing Hours</h4>
              <p className="text-[#FCF9F5]/70 text-sm leading-relaxed">
                Mon - Fri: 07:00 AM - 09:00 PM
                <br />
                Sat - Sun: 08:00 AM - 10:00 PM
              </p>
            </div>
          </motion.div>

          {/* --- Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-[#F5EBE0] shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#3D2314]">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#3D2314]">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3D2314]">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3D2314]">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#3D2314] text-[#FCF9F5] rounded-xl font-bold hover:bg-[#2A180E] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#3D2314]/10"
              >
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
