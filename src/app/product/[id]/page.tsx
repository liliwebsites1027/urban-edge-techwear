import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts } from "@/data/products";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { ShieldCheck, RotateCcw, Truck } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
    <main className="bg-[#0a0a0c] min-h-screen text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* MEDIA DISPLAY */}
          <div className="relative aspect-square bg-[#111214] border border-white/5 flex items-center justify-center overflow-hidden">
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover p-4"
              >
                <source src={product.img} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-12"
                priority
              />
            )}
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex flex-col justify-center">
            <h1
              className={`${orbitron.className} text-4xl mb-4 leading-tight tracking-wider uppercase`}
            >
              {product.name}
            </h1>
            <p
              className={`${roboto.className} text-[#02A3DC] text-sm mb-6 uppercase tracking-[0.3em]`}
            >
              {product.category || "Techwear"} Spec // Alpha Series
            </p>
            <span className={`${orbitron.className} text-3xl mb-8`}>
              {typeof product.price === "number"
                ? `$${product.price}`
                : product.price}
            </span>

            <p
              className={`${roboto.className} text-white/60 text-sm leading-relaxed mb-10 max-w-md`}
            >
              {product.desc ||
                "High-performance gear designed for urban exploration and technical utility."}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-4 mb-8">
              {/* BUY NOW */}
              <Link href="/checkout" className="w-full">
                <button className="w-full bg-[#D1E9FF] text-black font-bold py-4 uppercase tracking-widest text-sm hover:bg-[#02A3DC] transition-colors cursor-pointer">
                  Buy Now
                </button>
              </Link>

              {/* ADD TO CART - RESTORED WITH ORIGINAL STYLING */}
              <AddToCartButton
                id={product.id}
                name={product.name}
                price={getNumericPrice(product.price)}
                image={product.img}
              >
                {/* This allows you to keep your custom button design inside the logic wrapper */}
                <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest text-sm hover:opacity-80 transition-all cursor-pointer">
                  Add to cart
                </button>
              </AddToCartButton>
            </div>

            {/* TRUST INDICATORS */}
            <div
              className={`${roboto.className} space-y-2 text-[10px] text-white/40 uppercase tracking-widest`}
            >
              <div className="flex items-center gap-3">
                <Truck size={14} /> Free global shipping
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={14} /> 7-day technical inspection return
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={14} /> 12-month hardware warranty
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="space-y-12 border-t border-white/5 pt-12">
          <h3
            className={`${orbitron.className} text-xl uppercase tracking-widest`}
          >
            Related Tactical Gear
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
                        className="object-contain p-6 transition-transform group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex justify-between text-[11px] uppercase tracking-tighter">
                    <span className="text-white/60">{rel.name}</span>
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
