"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Roboto_Mono, Orbitron } from "next/font/google"; // 1. Added Orbitron here
import { useCartStore } from "@/store/useCartStore";
import SearchOverlay from "./SearchOverlay";
import CartSidebar from "./CartSidebar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] }); // 2. Initialized Orbitron

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalItems = useCartStore((state) => state.totalItems());
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isCheckout = pathname === "/checkout";

  const textColor = isCheckout ? "text-zinc-900" : "text-white/90";
  const navLinkColor = isCheckout ? "text-zinc-800" : "text-white/70";

  const scrollToTop = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link
            href="/"
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
            {/* 3. Updated font class below to orbitron.className */}
            <span
              className={`${orbitron.className} uppercase tracking-[0.25em] font-bold text-[10px] mt-2 transition-colors ${textColor}`}
            >
              Urban Edge
            </span>
          </Link>

          <div className="flex items-center gap-10">
            <div
              className={`hidden md:flex items-center gap-12 font-sans text-[13px] font-medium transition-colors ${navLinkColor}`}
            >
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

              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:text-[#02A3DC] cursor-pointer transition-colors tracking-wide uppercase flex items-center gap-2 outline-none"
              >
                My Cart{" "}
                <span
                  className={`text-[10px] font-bold ${mounted && totalItems > 0 ? "text-[#02A3DC]" : "opacity-50"}`}
                >
                  ({mounted ? totalItems : 0})
                </span>
              </button>
            </div>

            <button
              onClick={() => setIsSearchOpen(true)}
              className={`flex items-center justify-center w-10 h-10 rounded-sm transition-all duration-300 group ${
                isCheckout
                  ? "bg-zinc-900 text-white hover:bg-[#02A3DC]"
                  : "bg-white text-black hover:bg-[#02A3DC] hover:text-white"
              }`}
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
