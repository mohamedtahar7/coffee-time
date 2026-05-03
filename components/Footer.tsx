"use client";

import React from "react";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FCF9F5] border-t border-[#F5EBE0] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* --- Brand Side --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://i.postimg.cc/d02ncCqX/coffee-log2o.png"
            alt="Gosto Logo"
            className="h-12 w-auto mb-3"
          />
          <p className="text-sm text-[#5C3D2E]/60">Handcrafted in Biskra</p>
        </div>

        {/* --- Social & Copyright --- */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 text-[#3D2314]">
            <a
              href="#"
              className="hover:text-[#C19A6B] transition-colors duration-300"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#C19A6B] transition-colors duration-300"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#C19A6B] transition-colors duration-300"
            >
              <FiTwitter size={20} />
            </a>
          </div>
          <p className="text-xs text-[#5C3D2E]/50 font-medium tracking-wide">
            © {currentYear} Elite Digital DZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
