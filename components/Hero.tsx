"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { Slabo_27px } from "next/font/google";
import Link from "next/link";

const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F5EBE0]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#C19A6B]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#3D2314]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left Content: Text & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[1px] bg-[#C19A6B]"></span>
            <span className="text-[#C19A6B] font-bold tracking-[0.3em] text-xs uppercase">
              Est. 2026 • Premium Roast
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`${slabo.className} text-6xl md:text-8xl text-[#3D2314] leading-[1.1] mb-8`}
          >
            Where Every Sip <br />
            <span className="italic text-[#C19A6B]">Tells a Story</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#5C3D2E] text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light"
          >
            Experience the art of slow-roasted perfection. We source our beans
            sustainably to bring you a cup that&apos;s as ethical as it is
            delicious.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <Link
              href="#menu"
              className="px-8 py-4 bg-[#3D2314] text-[#F5EBE0] rounded-full font-bold flex items-center gap-3 hover:bg-[#5C3D2E] transition-all group shadow-xl"
            >
              Order Online
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border border-[#3D2314]/20 text-[#3D2314] rounded-full font-bold flex items-center gap-3 hover:bg-white/50 transition-all group"
            >
              <span className="w-10 h-10 rounded-full bg-[#C19A6B]/20 flex items-center justify-center text-[#C19A6B] group-hover:bg-[#C19A6B] group-hover:text-white transition-colors">
                <FiPlay fill="currentColor" size={12} />
              </span>
              Our Story
            </Link>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex gap-10 border-t border-[#3D2314]/10 pt-8"
          >
            <div>
              <p className="text-2xl font-bold text-[#3D2314]">4.9</p>
              <p className="text-xs text-[#5C3D2E] uppercase tracking-widest mt-1">
                Average Rating
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#3D2314]">15+</p>
              <p className="text-xs text-[#5C3D2E] uppercase tracking-widest mt-1">
                Single Origins
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Main Hero Image Frame */}
          <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-stone-200">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
              alt="Freshly brewed coffee"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Floating Logo Badge */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-4 rounded-full shadow-2xl border-4 border-[#F5EBE0] hidden md:block"
          >
            <img
              src="https://i.postimg.cc/d02ncCqX/coffee-log2o.png"
              alt="Coffee Time Badge"
              className="w-full h-full object-contain p-4"
            />
          </motion.div>

          {/* Floating Card Detail */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-10 -right-5 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[180px] hidden md:block"
          >
            <p className="text-[#C19A6B] text-[10px] font-black uppercase tracking-tighter mb-1">
              Coming Soon
            </p>
            <p className="text-[#3D2314] font-bold text-sm leading-tight">
              New Ethiopian Cold Brew Blend
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-[#3D2314]" />
        <span className="text-[10px] text-[#3D2314] uppercase tracking-[0.2em] font-bold">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
