"use client";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#0a0a0c]">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover object-center"
        >
          <source src="/hero-section.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover object-center"
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content - Increased mobile padding (pt-[55vh]) and reduced mobile font (text-3xl) */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-10 w-full pt-[55vh] md:pt-[45vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1
            className={`${orbitron.className} text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-4 text-white drop-shadow-lg`}
          >
            Urban Edge <br />
            <span className="text-[#02A3DC]">Sneaker</span> <br />
            Collection
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-[10px] md:text-base text-gray-200 font-medium tracking-[0.2em] md:tracking-[0.25em] uppercase opacity-95 drop-shadow-md"
          >
            Engineered for motion. <br className="md:hidden" /> Designed for the
            future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
