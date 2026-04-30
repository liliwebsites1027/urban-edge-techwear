"use client";

import { motion } from "framer-motion";
import { Orbitron, Roboto_Mono } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0c] min-h-screen pt-24 md:pt-32 pb-20 px-6 overflow-hidden relative">
      {/* BACKGROUND DECORATION */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`${roboto.className} text-[#02A3DC] text-[10px] tracking-[0.5em] uppercase mb-4`}
            >
              Origin // Protocol
            </div>
            <h1
              className={`${orbitron.className} text-4xl sm:text-5xl md:text-7xl text-white font-black leading-[0.9] uppercase mb-8`}
            >
              The <span className="text-[#02A3DC]">Grid</span> <br />
              Protocol.
            </h1>
            <div className="space-y-6">
              <p
                className={`${roboto.className} text-gray-400 text-sm md:text-base leading-relaxed max-w-md border-l-2 border-[#02A3DC] pl-6`}
              >
                We don&apos;t just design clothing. We engineer urban armor. Our
                mission is to bridge the gap between human capability and
                environmental hostility through modular design and advanced
                textiles.
              </p>
              <p
                className={`${roboto.className} text-gray-500 text-xs md:text-sm max-w-sm pl-7 opacity-70`}
              >
                Urban Edge represents the synthesis of tactical utility and
                cybernetic aesthetics. Every stitch is a line of code in our
                physical reality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative border border-white/10 group overflow-hidden bg-zinc-900/20"
          >
            <Image
              src="/frames.jpeg"
              alt="Techwear Blueprint"
              width={800}
              height={600}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              priority
            />

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 lg:opacity-40" />

            {/* HUD Elements */}
            <div className="absolute top-4 right-4 text-white/20 font-mono text-[8px] uppercase tracking-widest text-right">
              Frame_ID: UE-2026
              <br />
              Status: Rendered
            </div>

            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="bg-[#02A3DC] text-black text-[9px] font-bold px-2 py-1 uppercase tracking-tighter">
                System Active
              </span>
              <span className="bg-white/5 backdrop-blur-md text-white text-[9px] px-2 py-1 uppercase tracking-tighter border border-white/10">
                v2.0.26
              </span>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
          {[
            {
              title: "Modular",
              desc: "Adaptable components engineered for seamless integration across diverse urban environments.",
            },
            {
              title: "Resilient",
              desc: "High-density, weather-sealed textiles designed to withstand the entropy of the modern grid.",
            },
            {
              title: "Synthetic",
              desc: "Next-generation engineered fibers prioritized for peak performance and durability.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="bg-[#0a0a0c] p-8 md:p-12 transition-colors group relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#02A3DC]/30 transition-all group-hover:w-full group-hover:h-full group-hover:border-[#02A3DC]/10" />

              <h3
                className={`${orbitron.className} text-[#02A3DC] text-lg md:text-xl mb-4 flex items-center gap-4`}
              >
                <span className="text-[10px] opacity-40 font-mono">
                  0{i + 1}
                </span>
                {val.title}
              </h3>
              <p
                className={`${roboto.className} text-gray-500 text-xs md:text-sm leading-loose`}
              >
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STATUS FOOTER */}
        <div className="mt-24 md:mt-32 border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2
                className={`${orbitron.className} text-[9px] text-gray-600 tracking-[0.8em] uppercase mb-2`}
              >
                Est. 2026 / Neo-Tokyo Protocol
              </h2>
              <p
                className={`${roboto.className} text-[8px] text-[#02A3DC]/50 uppercase tracking-[0.2em]`}
              >
                Building the future of tactical wear.
              </p>
            </div>

            <div className="flex items-center gap-12 grayscale opacity-30">
              <div className="text-white text-[10px] font-bold border border-white px-2 py-1 uppercase">
                UE-OS
              </div>
              <div className="text-white text-[10px] font-bold border border-white px-2 py-1 uppercase">
                Grid-Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
