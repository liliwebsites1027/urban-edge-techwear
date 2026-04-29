"use client";
import Image from "next/image";
import { motion, Variants, BezierDefinition } from "framer-motion";
import { Roboto_Mono, Orbitron } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

// Define the custom ease as a typed BezierDefinition
const customEase: BezierDefinition = [0.22, 1, 0.36, 1];

const featured = [
  {
    id: 1,
    type: "image",
    src: "/jacket.jpeg",
    title: "STRATOSHELL-X Jacket",
    desc: "Engineered for Motion. Built for Weather.",
    price: "$450.00",
  },
  {
    id: 2,
    type: "video",
    src: "/watch.mp4",
    title: "AEROTIME-X Tactical Chronograph",
    desc: "Precision Built for the Urban Grid.",
    price: "$890.00",
  },
  {
    id: 3,
    type: "image",
    src: "/frames.jpeg",
    title: "NEOVISOR-X Modular Frames",
    desc: "Vision Built for the Digital Frontier.",
    price: "$210.00",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

export default function ProductOfMonth() {
  return (
    <section className="bg-[#1a1b1e] py-24 px-6 border-y border-white/5 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className={`${orbitron.className} text-center text-2xl md:text-3xl text-white uppercase tracking-[0.4em] mb-20`}
        >
          Product of the Month
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-black/40 rounded-sm mb-6 border border-white/10 group-hover:border-[#02A3DC]/50 transition-all duration-700 ease-out shadow-2xl">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-[#02A3DC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <h3
                    className={`${orbitron.className} text-[13px] text-white uppercase tracking-wider group-hover:text-[#02A3DC] transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`${robotoMono.className} text-[12px] text-[#02A3DC] font-bold`}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className={`${robotoMono.className} text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed`}
                >
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
