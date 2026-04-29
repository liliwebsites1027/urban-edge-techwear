"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Roboto_Mono, Orbitron } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

const products = [
  {
    id: 1,
    name: "NeuroShield Lite Hoodie",
    desc: "Thermal regulation with ultra-light fabric.",
    price: "$185.00",
    img: "/image1.png",
  },
  {
    id: 2,
    name: "AeroGuard Tactical Hoodie",
    desc: "Wind-resistant shell with modular pockets.",
    price: "$210.00",
    img: "/image2.png",
  },
  {
    id: 3,
    name: "CryoShell Expedition Hoodie",
    desc: "Engineered for sub-zero urban environments.",
    price: "$245.00",
    img: "/image3.png",
  },
  {
    id: 4,
    name: "StealthCore Urban Hoodie",
    desc: "Water-repellent finish for daily versatility.",
    price: "$160.00",
    img: "/image4.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#0a0a0c] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${orbitron.className} text-xl md:text-2xl text-white uppercase tracking-wider mb-12`}
        >
          Discover More in our Techwear Winter Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer relative"
            >
              {/* Product Image Container with Hover Glow */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 mb-5 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(2,163,220,0.8)] group-hover:ring-2 group-hover:ring-[#02A3DC]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Product Metadata */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3
                    className={`${robotoMono.className} text-[12px] text-white uppercase tracking-tighter font-bold leading-tight flex-1`}
                  >
                    {product.name}
                  </h3>
                  <span
                    className={`${robotoMono.className} text-[12px] text-[#02A3DC] font-bold`}
                  >
                    {product.price}
                  </span>
                </div>

                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mt-1">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className={`${orbitron.className} border border-white/20 px-16 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500`}
          >
            Shop All
          </button>
        </div>
      </div>
    </section>
  );
}
