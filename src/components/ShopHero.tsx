"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function ShopHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#0a0a0c]">
      {/* Background Image */}
      <Image
        src="/shop-banner.png"
        alt="Urban Edge Shop Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* 
          GRADIENT UPDATE: 
          Changed from "via-[#0a0a0c]/40" to "via-transparent" 
          and adjusted "from-90%" to keep the black shadow strictly at the bottom.
      */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] from-5% via-transparent to-transparent opacity-80" />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
        <div className="space-y-1">
          {/* Reduced size from text-4xl/7xl to text-2xl/5xl */}
          <h1
            className={`${orbitron.className} text-2xl md:text-4xl lg:text-5xl tracking-widest uppercase text-[#02A3DC] leading-tight`}
          >
            Techwear Collection <span className="text-white">2026</span>
          </h1>

          {/* Thinner tactical line */}
          <div className="h-px w-20 bg-[#02A3DC] mt-4 opacity-50" />
        </div>
      </div>

      {/* Tech Accents */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-[8px] font-mono text-white/20 tracking-[0.4em] uppercase vertical-text">
          Protocol: Shop_Interface // v2.0.26
        </p>
      </div>
    </section>
  );
}
