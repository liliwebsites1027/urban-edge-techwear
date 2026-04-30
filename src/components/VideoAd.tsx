"use client";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function VideoAd() {
  return (
    <section className="relative w-full bg-[#0a0a0c] pt-0 pb-20 px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-white/10 relative group">
        {/* Video Container */}
        <div className="relative aspect-video md:aspect-[21/9] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
          >
            <source src="/glasses.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent">
            <span className="text-[#02A3DC] text-[10px] tracking-[0.5em] uppercase mb-2">
              Coming Soon
            </span>
            <h2
              className={`${orbitron.className} text-3xl md:text-5xl tracking-[0.2em] uppercase text-white`}
            >
              The <span className="text-[#02A3DC]">Spec</span>-01
            </h2>
            <div className="mt-6 h-[1px] w-24 bg-white/20 group-hover:w-48 transition-all duration-500" />
          </div>
        </div>

        {/* Tactical UI Accents */}
        <div className="absolute top-4 left-4 text-[8px] font-mono text-white/30 uppercase tracking-widest">
          System: Active // Visualizing Core
        </div>
        <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/30 uppercase tracking-widest">
          Urban Edge Protocol v.04
        </div>
      </div>
    </section>
  );
}
