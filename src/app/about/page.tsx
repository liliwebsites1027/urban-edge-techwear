"use client";

import { motion } from "framer-motion";
import { Orbitron, Roboto_Mono } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0c] min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`${orbitron.className} text-5xl md:text-7xl text-white font-black leading-none uppercase mb-8`}
            >
              The <span className="text-[#02A3DC]">Grid</span> <br />
              Protocol.
            </h1>
            <p
              className={`${roboto.className} text-gray-400 text-sm md:text-base leading-relaxed max-w-md border-l-2 border-[#02A3DC] pl-6`}
            >
              We don&apos;t just design clothing. We engineer urban armor. Our
              mission is to bridge the gap between human capability and
              environmental hostility through modular design and advanced
              textiles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative border border-white/10 group overflow-hidden bg-zinc-900/20"
          >
            {/* 
              Changed fill to standard height/width props to prevent "object-cover" cropping.
              This keeps the original aspect ratio of your sunglasses pic.
            */}
            <Image
              src="/frames.jpeg"
              alt="Techwear Blueprint"
              width={800}
              height={600}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />

            {/* HUD Elements */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="bg-[#02A3DC] text-black text-[9px] font-bold px-2 py-1 uppercase tracking-tighter">
                System Active
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white text-[9px] px-2 py-1 uppercase tracking-tighter border border-white/20">
                v2.0.26
              </span>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5">
          {[
            {
              title: "Modular",
              desc: "Adaptable components for any environment.",
            },
            {
              title: "Resilient",
              desc: "Weather-sealed textiles for the urban grid.",
            },
            {
              title: "Synthetic",
              desc: "Engineered fibers for peak performance.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-[#0a0a0c] p-12 hover:bg-zinc-900/50 transition-colors group"
            >
              <h3
                className={`${orbitron.className} text-[#02A3DC] text-xl mb-4 group-hover:translate-x-2 transition-transform`}
              >
                0{i + 1} {/* Space for comments */} / {val.title}
              </h3>
              <p
                className={`${roboto.className} text-gray-500 text-xs leading-loose`}
              >
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MANIFESTO FOOTER */}
        <div className="mt-32 text-center">
          <h2
            className={`${orbitron.className} text-[10px] text-gray-600 tracking-[1em] uppercase mb-8`}
          >
            Est. 2026 / Neo-Tokyo Protocol
          </h2>
          <div className="h-px w-24 bg-[#02A3DC] mx-auto mb-8" />
        </div>
      </div>
    </main>
  );
}
