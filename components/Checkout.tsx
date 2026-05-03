"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import {
  FiLock,
  FiChevronLeft,
  FiMapPin,
  FiUser,
  FiPhone,
} from "react-icons/fi";
import Link from "next/link";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, total, itemAmount } = useCart();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Order placed successfully!", {
      description: "We've received your request and are starting the brew.",
      style: {
        background: "#3D2314",
        color: "#FCF9F5",
        border: "1px solid #C19A6B",
      },
    });
  };

  return (
    <section className="bg-[#FCF9F5] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-[#3D2314]/60 hover:text-[#3D2314] font-bold text-sm mb-8 transition-colors group"
        >
          <FiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- LEFT: CHECKOUT FORM --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-[#F5EBE0] shadow-sm">
              <h2 className="text-3xl font-bold text-[#3D2314] mb-8">
                Delivery Details
              </h2>

              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3D2314] flex items-center gap-2">
                      <FiUser className="text-[#C19A6B]" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#3D2314] flex items-center gap-2">
                      <FiPhone className="text-[#C19A6B]" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="05XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#3D2314] flex items-center gap-2">
                    <FiMapPin className="text-[#C19A6B]" /> Delivery Address
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Street name, Building, Apartment"
                    className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#F5EBE0] focus:border-[#C19A6B] focus:outline-none transition-colors text-[#3D2314]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#3D2314] text-white rounded-2xl font-bold hover:bg-[#2A180E] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#3D2314]/10"
                  >
                    Place Order • {total} DZD
                  </button>
                  <p className="flex items-center justify-center gap-2 text-[10px] text-[#5C3D2E]/50 mt-4 uppercase tracking-widest font-bold">
                    <FiLock /> Secure Checkout
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* --- RIGHT: ORDER SUMMARY (STICKY) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-3xl border border-[#F5EBE0] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#F5EBE0] bg-[#FCF9F5]/50">
                <h3 className="text-xl font-bold text-[#3D2314]">
                  Order Summary
                </h3>
                <p className="text-sm text-[#5C3D2E]/60">
                  {itemAmount} items in your bag
                </p>
              </div>

              <div className="p-6 max-h-[400px] overflow-y-auto space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-[#F5EBE0] rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#3D2314] text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#5C3D2E]/60">
                        Qty: {item.amount}
                      </p>
                    </div>
                    <p className="font-bold text-[#3D2314] text-sm">
                      {item.price * item.amount} DZD
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#FCF9F5]/50 border-t border-[#F5EBE0] space-y-3">
                <div className="flex justify-between text-sm text-[#5C3D2E]/70">
                  <span>Subtotal</span>
                  <span>{total} DZD</span>
                </div>
                <div className="flex justify-between text-sm text-[#5C3D2E]/70">
                  <span>Delivery</span>
                  <span className="text-[#C19A6B] font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#F5EBE0]">
                  <span className="text-lg font-bold text-[#3D2314]">
                    Total
                  </span>
                  <span className="text-2xl font-black text-[#3D2314]">
                    {total} DZD
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
