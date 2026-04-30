"use client";
import Image from "next/image";
import Link from "next/link"; // Added Link
import { motion, Variants, BezierDefinition } from "framer-motion";
import { Roboto_Mono, Orbitron } from "next/font/google";
import AddToCartButton from "./AddToCartButton";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });
const customEase: BezierDefinition = [0.22, 1, 0.36, 1];

const featured = [
  {
    id: "f1",
    type: "image",
    src: "/jacket.jpeg",
    title: "STRATOSHELL-X Jacket",
    desc: "Engineered for Motion.",
    price: 450.0,
  },
  {
    id: "f2",
    type: "video",
    src: "/watch.mp4",
    title: "AEROTIME-X Tactical Chronograph",
    desc: "Precision Built.",
    price: 890.0,
  },
  {
    id: "f3",
    type: "image",
    src: "/frames.jpeg",
    title: "NEOVISOR-X Modular Frames",
    desc: "Vision Built.",
    price: 210.0,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export default function ProductOfMonth() {
  return (
    <section className="bg-[#1a1b1e] py-24 px-6 border-y border-white/5">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
              className="flex flex-col group"
            >
              {/* Image/Video Container with Link */}
              <div className="relative aspect-square overflow-hidden rounded-sm mb-6 border border-white/10 group-hover:border-[#02A3DC] transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(2,163,220,0.8)]">
                <Link
                  href={`/product/${item.id}`}
                  className="block w-full h-full cursor-pointer"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </Link>

                {/* Button stays clickable separately */}
                <AddToCartButton
                  id={item.id}
                  name={item.title}
                  price={item.price}
                  image={item.src}
                />
              </div>

              {/* Text Info wrapped in Link */}
              <Link
                href={`/product/${item.id}`}
                className="space-y-2 cursor-pointer"
              >
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <h3
                    className={`${orbitron.className} text-[13px] text-white uppercase tracking-wider group-hover:text-[#02A3DC] transition-colors`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`${robotoMono.className} text-[12px] text-[#02A3DC] font-bold`}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p
                  className={`${robotoMono.className} text-[10px] text-gray-400 uppercase tracking-widest`}
                >
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
