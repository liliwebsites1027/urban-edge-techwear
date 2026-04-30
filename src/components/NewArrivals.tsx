"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { SlidersHorizontal, Filter } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

const arrivals = [
  { id: "na1", name: "Alpha-T Coat", price: "$420", img: "/new-arrivals1.png" },
  {
    id: "na2",
    name: "Tactical Rig V1",
    price: "$350",
    img: "/new-arrivals2.png",
  },
  {
    id: "na3",
    name: "Ghost Shell JP",
    price: "$380",
    img: "/new-arrivals3.png",
  },
  {
    id: "na4",
    name: "Core Bomber V2",
    price: "$310",
    img: "/new-arrivals4.png",
  },
];

export default function NewArrivals() {
  const [activeDropdown, setActiveDropdown] = useState<
    "sort" | "filter" | null
  >(null);

  const toggleDropdown = (type: "sort" | "filter") => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  return (
    <section className="bg-[#221036] py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6 relative">
          <h2
            className={`${orbitron.className} text-xl md:text-2xl text-white tracking-[0.2em] uppercase`}
          >
            New Arrivals
          </h2>

          <div className="flex gap-4 relative">
            {/* Filter Button */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("filter")}
                className={`p-2 border cursor-pointer border-white/10 rounded-full transition-all ${activeDropdown === "filter" ? "bg-[#02A3DC] border-[#02A3DC] text-white" : "hover:bg-white hover:text-[#221036] text-white"}`}
              >
                <Filter size={16} />
              </button>

              <AnimatePresence>
                {activeDropdown === "filter" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-40 bg-[#1a0d29] border border-[#02A3DC]/30 p-4 z-50 shadow-2xl"
                  >
                    <p
                      className={`${roboto.className} text-[10px] text-[#02A3DC] mb-3 uppercase tracking-widest`}
                    >
                      Select Size
                    </p>
                    {["Small", "Medium", "Large", "X-Large"].map((size) => (
                      <div
                        key={size}
                        className={`${roboto.className} text-white/60 text-[11px] py-1 hover:text-[#02A3DC] cursor-pointer transition-colors uppercase`}
                      >
                        {size}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sort Button */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("sort")}
                className={`p-2 border cursor-pointer border-white/10 rounded-full transition-all ${activeDropdown === "sort" ? "bg-[#02A3DC] border-[#02A3DC] text-white" : "hover:bg-white hover:text-[#221036] text-white"}`}
              >
                <SlidersHorizontal size={16} />
              </button>

              <AnimatePresence>
                {activeDropdown === "sort" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-48 bg-[#1a0d29] border border-[#02A3DC]/30 p-4 z-50 shadow-2xl"
                  >
                    <p
                      className={`${roboto.className} text-[10px] text-[#02A3DC] mb-3 uppercase tracking-widest`}
                    >
                      Sort By
                    </p>
                    {[
                      "Price: Low to High",
                      "Price: High to Low",
                      "Newest First",
                      "Featured",
                    ].map((option) => (
                      <div
                        key={option}
                        className={`${roboto.className} text-white/60 text-[11px] py-1 hover:text-[#02A3DC] cursor-pointer transition-colors uppercase`}
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((item) => (
            <motion.div key={item.id} className="group cursor-pointer">
              {/* 
                  GLOW FIX: 
                  Increased opacity to 0.8 and removed the negative spread 
                  to ensure the blue glow is vibrant against the purple BG.
              */}
              <div className="relative aspect-[4/5] bg-black/20 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-[#02A3DC] group-hover:shadow-[0_10px_40px_rgba(2,163,220,0.8)]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h3
                    className={`${roboto.className} text-[11px] text-white uppercase tracking-wider font-medium`}
                  >
                    {item.name}
                  </h3>
                  <span
                    className={`${roboto.className} text-[11px] text-[#02A3DC] font-bold`}
                  >
                    {item.price}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white/5 mt-2 group-hover:bg-[#02A3DC]/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
