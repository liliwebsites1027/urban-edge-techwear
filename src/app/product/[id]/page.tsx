"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts } from "@/data/products";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { ShieldCheck, RotateCcw, Truck } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

// Removed 'async' keyword to fix the Client Component error
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Use React.use() to unwrap the params promise
  const { id } = React.use(params);
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const isVideo = product.img.endsWith(".mp4");

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const getNumericPrice = (price: string | number): number => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^\d.]/g, ""));
    }
    return price;
  };

  return (
    <main className="bg-[#0a0a0c] min-h-screen text-white pt-20 md:pt-24 pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* MEDIA DISPLAY */}
          <div className="relative aspect-4/5 sm:aspect-square bg-[#111214] border border-white/5 flex items-center justify-center overflow-hidden">
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover p-2 md:p-4"
              >
                <source src={product.img} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-4 md:p-12"
                priority
              />
            )}
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex flex-col justify-center">
            <h1
              className={`${orbitron.className} text-2xl md:text-4xl mb-3 md:mb-4 leading-tight tracking-wider uppercase`}
            >
              {product.name}
            </h1>
            <p
              className={`${roboto.className} text-[#02A3DC] text-[10px] md:text-sm mb-4 md:mb-6 uppercase tracking-[0.3em]`}
            >
              {product.category || "Techwear"} Spec // Alpha Series
            </p>
            <span
              className={`${orbitron.className} text-2xl md:text-3xl mb-6 md:mb-8`}
            >
              {typeof product.price === "number"
                ? `$${product.price}`
                : product.price}
            </span>

            <p
              className={`${roboto.className} text-white/60 text-xs md:text-sm leading-relaxed mb-8 md:10 max-w-md`}
            >
              {product.desc ||
                "High-performance gear designed for urban exploration and technical utility."}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-4 mb-8">
              <Link href="/checkout" className="w-full">
                <button className="w-full bg-[#D1E9FF] text-black font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#02A3DC] transition-colors cursor-pointer">
                  Buy Now
                </button>
              </Link>

              <AddToCartButton
                id={product.id}
                name={product.name}
                price={getNumericPrice(product.price)}
                image={product.img}
              >
                Add to cart
              </AddToCartButton>
            </div>

            {/* TRUST INDICATORS */}
            <div
              className={`${roboto.className} space-y-3 text-[10px] text-white/70 uppercase tracking-widest font-medium`}
            >
              <div className="flex items-center gap-3">
                <Truck size={14} className="text-[#02A3DC]" /> Free global
                shipping
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={14} className="text-[#02A3DC]" /> 7-day
                technical inspection return
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={14} className="text-[#02A3DC]" /> 12-month
                hardware warranty
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="space-y-12 border-t border-white/5 pt-12">
          <h3
            className={`${orbitron.className} text-lg md:text-xl uppercase tracking-widest`}
          >
            Related Tactical Gear
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rel) => {
              const isRelVideo = rel.img.endsWith(".mp4");
              return (
                <Link
                  href={`/product/${rel.id}`}
                  key={rel.id}
                  className="group"
                >
                  <div className="relative aspect-square bg-[#111214] border border-white/5 overflow-hidden group-hover:border-[#02A3DC] transition-all">
                    {isRelVideo ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={rel.img} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={rel.img}
                        alt={rel.name}
                        fill
                        className="object-contain p-4 md:p-6 transition-transform group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between text-[10px] md:text-[11px] uppercase tracking-tighter">
                    <span className="text-white/60 truncate">{rel.name}</span>
                    <span className="text-[#02A3DC] font-bold">
                      {typeof rel.price === "number"
                        ? `$${rel.price}`
                        : rel.price}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
