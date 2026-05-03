"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiCoffee, FiPieChart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  image: string;
}

const categories = [
  { id: "all", name: "All Items", icon: <FiCoffee /> },
  { id: "coffee", name: "Hot Coffee", icon: <FiCoffee /> },
  { id: "cold", name: "Iced Drinks", icon: <FiCoffee /> },
  { id: "pastries", name: "Pastries", icon: <FiPieChart /> },
];

const menuItems: MenuItem[] = [
  // --- HOT COFFEE ---
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    category: "coffee",
    price: 450,
    desc: "Floral notes with a distinct citrus finish and light body.",
    image:
      "https://images.unsplash.com/photo-1506372023823-741c83b836fe?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Oat Milk Latte",
    category: "coffee",
    price: 550,
    desc: "Creamy oat milk paired with our signature double espresso.",
    image:
      "https://coffeecopycat.com/wp-content/uploads/2023/05/OatMilkLatte-1200-x-1200.jpg",
  },
  {
    id: 3,
    name: "Classic Cappuccino",
    category: "coffee",
    price: 400,
    desc: "Equal parts espresso, steamed milk, and velvety foam.",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    category: "coffee",
    price: 600,
    desc: "Freshly steamed milk with vanilla-flavored syrup marked with espresso.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=400&auto=format&fit=crop",
  },

  // --- ICED DRINKS ---
  {
    id: 5,
    name: "Midnight Cold Brew",
    category: "cold",
    price: 500,
    desc: "16-hour slow-steeped for maximum smoothness and caffeine kick.",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Iced Matcha Latte",
    category: "cold",
    price: 650,
    desc: "Premium grade Japanese matcha whisked and served over ice.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Spanish Latte Ice",
    category: "cold",
    price: 700,
    desc: "A sweet, creamy iced latte made with condensed milk.",
    image:
      "https://www.brighteyedbaker.com/wp-content/uploads/2024/03/Iced-Spanish-Latte-Recipe.jpg",
  },
  {
    id: 8,
    name: "Passion Fruit Refresher",
    category: "cold",
    price: 550,
    desc: "Zesty and tropical infusion to cool down your afternoon.",
    image:
      "https://nicetartes.com/wp-content/uploads/2024/12/Starbucks-Pineapple-Refresher.jpg",
  },

  // --- PASTRIES ---
  {
    id: 9,
    name: "Almond Croissant",
    category: "pastries",
    price: 350,
    desc: "Flaky, buttery, and topped with plenty of toasted almonds.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Chocolate Pain au Chocolat",
    category: "pastries",
    price: 300,
    desc: "Traditional French pastry with two sticks of dark chocolate.",
    image:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Blueberry Muffin",
    category: "pastries",
    price: 250,
    desc: "Bursting with fresh blueberries and a crunchy crumble top.",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Classic Cheesecake",
    category: "pastries",
    price: 800,
    desc: "Rich and creamy New York style cheesecake on a graham crust.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  const handleAddToBag = (item: MenuItem) => {
    addToCart(item);

    // Updated feedback with visible description text
    toast.success(`${item.name} added to bag`, {
      description: "Item successfully added to your order.",
      duration: 2000,
      style: {
        background: "#3D2314", // Deep brown background
        color: "#FCF9F5", // Cream text for title
        border: "1px solid #C19A6B", // Gold border accent
      },
      classNames: {
        // Force the description to use the cream color with slight opacity
        description: "text-[#FCF9F5]/80",
      },
    });
  };

  return (
    <section id="menu" className="bg-[#FCF9F5] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#3D2314] mb-4"
          >
            Curated{" "}
            <span className="italic font-serif text-[#C19A6B]">Menu</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#3D2314] text-white"
                  : "bg-white text-[#3D2314] hover:bg-[#F5EBE0]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl p-4 shadow-sm group border border-[#F5EBE0]/50"
              >
                <div className="relative h-56 w-full mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full font-bold text-sm">
                    {item.price} DZD
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-lg font-bold text-[#3D2314] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#5C3D2E]/70 mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => handleAddToBag(item)}
                    className="w-full py-3 bg-[#FCF9F5] group-hover:bg-[#3D2314] group-hover:text-white text-[#3D2314] rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <FiPlus /> Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
