"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import { useCartStore } from "@/store/useCartStore";
import SearchOverlay from "./SearchOverlay";
import CartSidebar from "./CartSidebar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex flex-col items-start select-none cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/urbanedge-logo.png"
                alt="Urban Edge Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`${robotoMono.className} uppercase tracking-[0.25em] font-bold text-[10px] mt-2 text-white/90`}
            >
              Urban Edge
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-12 font-sans text-[13px] font-medium text-white/70">
              <button
                onClick={scrollToTop}
                className="hover:text-[#02A3DC] cursor-pointer transition-colors tracking-wide uppercase outline-none"
              >
                Home
              </button>
              <Link
                href="/about"
                className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
              >
                About Us
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:text-[#02A3DC] cursor-pointer transition-colors tracking-wide uppercase flex items-center gap-2 outline-none"
              >
                My Cart{" "}
                <span
                  className={`text-[10px] font-bold ${totalItems > 0 ? "text-[#02A3DC]" : "opacity-50"}`}
                >
                  ({totalItems})
                </span>
              </button>
            </div>

            {/* Icon-only Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-sm hover:bg-[#02A3DC] hover:text-white transition-all duration-300 group"
            >
              <Search
                size={18}
                strokeWidth={2.5}
                className="group-hover:scale-110 cursor-pointer transition-transform"
              />
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
