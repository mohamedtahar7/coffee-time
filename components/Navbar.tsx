"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiMinus,
  HiPlus,
  HiTrash,
} from "react-icons/hi";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Our Story", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- CART CONTEXT ---
  const {
    cart,
    itemAmount,
    total,
    isOpen,
    setIsOpen,
    increaseAmount,
    decreaseAmount,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarVariants: Variants = {
    closed: {
      x: "100%",
      transition: { type: "spring", damping: 30, stiffness: 300 },
    },
    opened: {
      x: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 },
    },
  };

  const overlayVariants: Variants = {
    closed: { opacity: 0 },
    opened: { opacity: 1 },
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 py-6 transition-all duration-300">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-xl border border-[#F5EBE0]/50"
              : "bg-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="/#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:rotate-[360deg]">
              <img
                src="https://i.postimg.cc/d02ncCqX/coffee-log2o.png"
                alt="Gosto Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={`desktop-nav-${index}`}
                href={link.href}
                className="text-[#3D2314] hover:text-[#C19A6B] font-semibold text-sm transition-colors relative group"
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C19A6B]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-[#3D2314]">
            <button className="hidden md:block hover:text-[#C19A6B] transition-colors">
              <FiSearch size={20} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="hover:text-[#C19A6B] transition-colors relative"
            >
              <FiShoppingBag size={22} />
              {itemAmount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C19A6B] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {itemAmount}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-[#3D2314] p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiOutlineMenuAlt3 size={28} />
            </button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {(isMenuOpen || isOpen) && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={overlayVariants}
            onClick={() => {
              setIsMenuOpen(false);
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-[#3D2314]/40 backdrop-blur-sm z-[60]"
          />
        )}

        {/* --- 1. CART SIDEBAR --- */}
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-[#F5EBE0] flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#3D2314]">Your Bag</h2>
                <p className="text-sm text-[#5C3D2E]/60">{itemAmount} items</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#F5EBE0] rounded-full transition-colors"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 bg-[#F5EBE0] rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-[#3D2314] text-sm md:text-base leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#3D2314]/30 hover:text-red-500 transition-colors"
                        >
                          <HiTrash size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-[#5C3D2E]/60 mb-3">
                        {item.category}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-[#F5EBE0] rounded-lg overflow-hidden">
                          <button
                            onClick={() => decreaseAmount(item.id)}
                            className="p-1 px-2 hover:bg-[#F5EBE0] transition-colors"
                          >
                            <HiMinus size={14} />
                          </button>
                          <span className="px-3 text-sm font-bold">
                            {item.amount}
                          </span>
                          <button
                            onClick={() => increaseAmount(item.id)}
                            className="p-1 px-2 hover:bg-[#F5EBE0] transition-colors"
                          >
                            <HiPlus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-[#3D2314] text-sm">
                          {item.price * item.amount} DZD
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-4 opacity-10">
                    <FiShoppingBag className="w-full h-full" />
                  </div>
                  <p className="text-[#3D2314] font-medium">
                    Your bag is empty
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-2 text-sm text-[#C19A6B] font-bold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {cart.length > 0 && (
              <div className="p-8 bg-[#FCF9F5] border-t border-[#F5EBE0]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#5C3D2E] font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-[#3D2314]">
                    {total} DZD
                  </span>
                </div>
                <Link
                  href={"/checkout"}
                  onClick={() => setIsOpen(false)} // Closes cart on click
                  className="w-full py-4 bg-[#3D2314] text-white rounded-2xl font-bold hover:bg-[#5C3D2E] transition-all shadow-lg shadow-[#3D2314]/20 flex items-center justify-center gap-3"
                >
                  Checkout Now
                </Link>
                <p className="text-center text-[10px] text-[#5C3D2E]/50 mt-4 uppercase tracking-widest">
                  Freshly brewed in Biskra
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* 2. Mobile Menu Sidebar */}
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-[280px] bg-[#F5EBE0] z-[70] shadow-2xl p-10 md:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-[#3D2314]"
            >
              <HiX size={30} />
            </button>

            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={`mobile-nav-${i}`}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-bold text-[#3D2314] flex items-center justify-between group"
                  >
                    {link.name}
                    <span className="text-sm opacity-30 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
