"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import SearchOverlay from "./SearchOverlay";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-start select-none">
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
              <Link
                href="/"
                className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
              >
                About Us
              </Link>
              <Link
                href="/cart"
                className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
              >
                My Cart
              </Link>
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

      {/* The Search Overlay Component */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
