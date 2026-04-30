"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Link
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron, Roboto_Mono } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

const INITIAL_DATA = [
  {
    id: "caps",
    label: "Caps",
    products: [
      { id: "c1", name: "Ghost Comm", price: "$20", img: "/cap1.png" },
      { id: "c2", name: "Neon Shift", price: "$45", img: "/cap2.png" },
      { id: "c3", name: "Ultra Reactor", price: "$75", img: "/cap3.png" },
      { id: "c4", name: "Cargo Tactic", price: "$30", img: "/cap4.png" },
    ],
  },
  {
    id: "sneakers",
    label: "Sneakers",
    products: [
      { id: "s1", name: "Exo-SNK-03", price: "$125", img: "/shoe1.png" },
      { id: "s2", name: "Cyber-SNK", price: "$200", img: "/shoe2.png" },
      { id: "s3", name: "Neon-Reaction", price: "$250", img: "/shoe3.png" },
      { id: "s4", name: "Cargo-Hybrid", price: "$155", img: "/shoe4.png" },
    ],
  },
  {
    id: "eyewear",
    label: "Eyewear",
    products: [
      { id: "e1", name: "Phantom Vision", price: "$50", img: "/glasses1.png" },
      { id: "e2", name: "Neon Shift", price: "$70", img: "/glasses2.png" },
      { id: "e3", name: "Ultra-Reactive", price: "$90", img: "/glasses3.png" },
      { id: "e4", name: "Cargo Vision", price: "$60", img: "/glasses4.png" },
    ],
  },
];

export default function CategorizedProducts() {
  const [categories, setCategories] = useState(INITIAL_DATA);
  const [activeTab, setActiveTab] = useState("caps");

  const handleReorder = (id: string) => {
    setActiveTab(id);
    const itemToMove = categories.find((cat) => cat.id === id);
    if (!itemToMove) return;

    const remaining = categories.filter((cat) => cat.id !== id);
    setCategories([itemToMove, ...remaining]);
  };

  return (
    <section className="bg-[#0a0a0c] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Labels */}
        <div className="flex gap-12 mb-16 border-b border-white/5 pb-4">
          {INITIAL_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleReorder(cat.id)}
              className={`${orbitron.className} cursor-pointer text-xl md:text-2xl uppercase tracking-widest transition-all duration-300 relative pb-4 ${
                activeTab === cat.id
                  ? "text-white"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {cat.label}
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#02A3DC]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Rows of Products */}
        <div className="flex flex-col gap-20">
          <AnimatePresence mode="popLayout">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product) => (
                    /* Wrapped with Link for navigation */
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-square bg-[#111214] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-[#02A3DC] group-hover:shadow-[0_15px_40px_-10px_rgba(2,163,220,0.4)]">
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <h4
                          className={`${roboto.className} text-[12px] text-white/80 uppercase tracking-tighter`}
                        >
                          {product.name}
                        </h4>
                        <span
                          className={`${roboto.className} text-[12px] text-[#02A3DC] font-bold`}
                        >
                          {product.price}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
