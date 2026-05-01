"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { SlidersHorizontal, Filter } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

const arrivals = [
  {
    id: "na1",
    name: "Alpha-T Jacket",
    price: "$420",
    img: "/new-arrivals1.png",
  },
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          <div className="flex gap-4 relative" ref={dropdownRef}>
            {/* Filter Toggle */}
            <button
              onClick={() => toggleDropdown("filter")}
              className="flex cursor-pointer items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-#fff hover:text-[#02A3DC] transition-colors"
            >
              <Filter size={14} /> Filter
            </button>

            {/* Sort Toggle */}
            <button
              onClick={() => toggleDropdown("sort")}
              className="flex cursor-pointer items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-#fff hover:text-[#02A3DC] transition-colors"
            >
              <SlidersHorizontal size={14} /> Sort
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 w-48 bg-black/90 border border-white/10 backdrop-blur-xl z-50 p-4 shadow-2xl"
                >
                  <div
                    className={`${roboto.className} flex flex-col gap-3 text-[10px] uppercase tracking-widest text-white/70`}
                  >
                    {activeDropdown === "filter" ? (
                      <>
                        <button className="text-left hover:text-[#02A3DC]">
                          All Tech
                        </button>
                        <button className="text-left hover:text-[#02A3DC]">
                          Outerwear
                        </button>
                        <button className="text-left hover:text-[#02A3DC]">
                          Accessories
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="text-left hover:text-[#02A3DC]">
                          Newest
                        </button>
                        <button className="text-left hover:text-[#02A3DC]">
                          Price: Low-High
                        </button>
                        <button className="text-left hover:text-[#02A3DC]">
                          Price: High-Low
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Product Grid - 2 columns mobile/tablet, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {arrivals.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="block group"
            >
              <motion.div className="cursor-pointer">
                <div className="relative aspect-4/5 bg-black/20 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-[#02A3DC] group-hover:shadow-[0_10px_40px_rgba(2,163,220,0.8)]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                <div className="mt-5 flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                    <h3
                      className={`${roboto.className} text-[10px] md:text-[11px] text-white uppercase tracking-wider font-medium`}
                    >
                      {item.name}
                    </h3>
                    <span
                      className={`${roboto.className} text-[10px] md:text-[11px] text-[#02A3DC] font-bold`}
                    >
                      {item.price}
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/5 mt-2 group-hover:bg-[#02A3DC]/30 transition-colors" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
