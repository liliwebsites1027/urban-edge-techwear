"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Roboto_Mono, Orbitron } from "next/font/google";
import AddToCartButton from "./AddToCartButton";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

const products = [
  {
    id: "p1",
    name: "NeuroShield Lite Hoodie",
    desc: "Thermal regulation.",
    price: 185.0,
    img: "/image1.png",
  },
  {
    id: "p2",
    name: "AeroGuard Tactical Hoodie",
    desc: "Wind-resistant.",
    price: 210.0,
    img: "/image2.png",
  },
  {
    id: "p3",
    name: "CryoShell Expedition Hoodie",
    desc: "Sub-zero tech.",
    price: 245.0,
    img: "/image3.png",
  },
  {
    id: "p4",
    name: "StealthCore Urban Hoodie",
    desc: "Water-repellent.",
    price: 160.0,
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 mb-5 border border-white/5 transition-all duration-500 group-hover:border-[#02A3DC] group-hover:shadow-[0_0_50px_rgba(2,163,220,0.8)]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover opacity-90 transition-opacity duration-500"
                />
                <AddToCartButton
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.img}
                  size="sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3
                    className={`${robotoMono.className} text-[12px] text-white uppercase tracking-tighter font-bold flex-1`}
                  >
                    {product.name}
                  </h3>
                  <span
                    className={`${robotoMono.className} text-[12px] text-[#02A3DC] font-bold`}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mt-1">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
