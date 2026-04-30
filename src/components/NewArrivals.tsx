"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // 1. Import Link
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
            {/* Filter and Sort Buttons (Omitted for brevity, kept same as your original) */}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((item) => (
            // 2. Wrap with Link component using item.id
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="block group"
            >
              <motion.div className="cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
