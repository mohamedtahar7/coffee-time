"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const stats = [
    { label: "Years of Craft", value: "10+" },
    { label: "Global Roasts", value: "24" },
    { label: "Happy Mornings", value: "150k" },
  ];

  return (
    <section id="about" className="bg-[#FCF9F5] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <span className="text-[#C19A6B] text-sm font-bold uppercase tracking-[0.3em]">
            Since 2016
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3D2314] mt-4 mb-6">
            The Art of the Perfect <br />
            <span className="italic font-serif text-[#C19A6B]">
              Coffee Moment
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#C19A6B] mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image Side with Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
                alt="Brewing Coffee"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Floating Card */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: -20 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -right-6 md:-right-10 bg-[#3D2314] p-8 rounded-xl shadow-xl z-20 hidden md:block"
            >
              <p className="text-white font-serif italic text-xl">
                "It's more than a drink, <br /> it's a ritual."
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#3D2314]">
              Our Philosophy
            </h3>
            <p className="text-[#5C3D2E] text-lg leading-relaxed">
              We started in 2016 with a simple mission: to bridge the gap
              between traditional roasting heritage and the modern coffee lover.
              Every bean is ethically sourced and roasted in small batches to
              ensure the unique character of its origin shines through.
            </p>
            <p className="text-[#5C3D2E] text-lg leading-relaxed">
              Whether it’s a morning espresso or a slow pour-over on a rainy
              afternoon, we believe every cup tells a story of craftsmanship and
              dedication.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-[#C19A6B]">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#3D2314]/60 font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
