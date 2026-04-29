"use client";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

// Direct font integration
const orbitron = Orbitron({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#0a0a0c]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content - Lowered and refined */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full pt-[35vh] md:pt-[45vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} // smooth cubic-bezier
          className="max-w-2xl"
        >
          {/* FONT: ORBITRON (for tech feel) */}
          <h1
            className={`${orbitron.className} text-4xl md:text-5xl font-black uppercase leading-[1] tracking-tighter mb-5 text-white`}
          >
            Urban Edge <br />
            <span className="text-[#02A3DC]">Sneaker</span> <br />
            Collection
          </h1>

          {/* FONT: INTER (for refined tagline) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-sm md:text-base text-gray-200 font-medium tracking-[0.25em] uppercase opacity-95"
          >
            Engineered for motion. Designed for the future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
