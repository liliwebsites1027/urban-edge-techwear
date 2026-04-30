"use client";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { Orbitron } from "next/font/google";
import { useCartStore } from "@/store/useCartStore";
import SearchOverlay from "./SearchOverlay";
import CartSidebar from "./CartSidebar";
import MobileMenu from "./MobileMenu"; // Assuming this is your new file name

const orbitron = Orbitron({ subsets: ["latin"] });

// Helper to avoid hydration mismatch
const useIsClient = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
};

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isClient = useIsClient();
  const totalItems = useCartStore((state) => state.totalItems());
  const pathname = usePathname();

  const isCheckout = pathname === "/checkout";
  const textColor = isCheckout ? "text-zinc-900" : "text-white/90";
  const navLinkColor = isCheckout ? "text-zinc-800" : "text-white/70";

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative">
          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 -ml-2 transition-colors ${textColor} outline-none cursor-pointer`}
          >
            <Menu size={24} />
          </button>

          {/* CENTER LOGO (Mobile) / LEFT LOGO (Desktop) */}
          <Link
            href="/"
            className="flex flex-col items-center md:items-start select-none cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0"
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
              className={`${orbitron.className} hidden md:block uppercase tracking-[0.25em] font-bold text-[10px] mt-2 transition-colors ${textColor}`}
            >
              Urban Edge
            </span>
          </Link>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 md:gap-10">
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
                  className={`text-[10px] font-bold ${isClient && totalItems > 0 ? "text-[#02A3DC]" : "opacity-50"}`}
                >
                  ({isClient ? totalItems : 0})
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

      {/* EXTERNAL COMPONENTS */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
        totalItems={isClient ? totalItems : 0}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
