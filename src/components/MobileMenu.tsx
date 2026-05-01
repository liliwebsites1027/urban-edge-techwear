"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import { Orbitron, Roboto_Mono } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
  totalItems: number;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenCart,
  totalItems,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-70 md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-[85%] max-w-sm h-full bg-[#0a0a0c] border-r border-white/10 flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/urbanedge-logo.png"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span
                  className={`${orbitron.className} text-[10px] tracking-[0.2em] font-bold text-white`}
                >
                  URBAN EDGE
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/40 hover:text-white outline-none cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-8 space-y-10">
              <div className="space-y-6">
                <p
                  className={`${roboto.className} text-[9px] text-white/30 uppercase tracking-[0.5em]`}
                >
                  Navigation
                </p>
                <div
                  className={`${orbitron.className} flex flex-col gap-6 text-xl tracking-tighter`}
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="text-white flex items-center justify-between group"
                  >
                    HOME <ChevronRight size={16} className="text-white/20" />
                  </Link>
                  {/* Added Shop Link */}
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="text-white flex items-center justify-between group"
                  >
                    SHOP <ChevronRight size={16} className="text-white/20" />
                  </Link>
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="text-white flex items-center justify-between group"
                  >
                    ABOUT US{" "}
                    <ChevronRight size={16} className="text-white/20" />
                  </Link>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCart();
                    }}
                    className="text-left text-white flex items-center justify-between group cursor-pointer outline-none"
                  >
                    MY CART{" "}
                    <span className="text-sm font-mono text-[#02A3DC]">
                      [{totalItems}]
                    </span>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <p
                  className={`${roboto.className} text-[9px] text-white/30 uppercase tracking-[0.5em]`}
                >
                  Collections
                </p>
                <div
                  className={`${roboto.className} flex flex-col gap-5 text-xs text-white/50 tracking-widest`}
                >
                  <Link
                    href="/search?q=cyber"
                    onClick={onClose}
                    className="hover:text-white transition-colors uppercase italic"
                  >
                    Cyber
                  </Link>
                  <Link
                    href="/search?q=tactical"
                    onClick={onClose}
                    className="hover:text-white transition-colors uppercase italic"
                  >
                    Tactical
                  </Link>
                  <Link
                    href="/search?q=alpha"
                    onClick={onClose}
                    className="hover:text-white transition-colors uppercase italic"
                  >
                    Alpha
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-white/5 bg-white/1">
              <div className="flex gap-6 mb-6">
                <Link
                  href="#"
                  className="text-[10px] font-mono text-white/40 hover:text-[#02A3DC] uppercase tracking-widest transition-colors"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="#"
                  className="text-[10px] font-mono text-white/40 hover:text-[#02A3DC] uppercase tracking-widest transition-colors"
                >
                  TWITTER
                </Link>
              </div>
              <p className="text-[9px] text-white/20 uppercase tracking-widest leading-loose">
                Operational Systems v2.4
                <br />
                All rights reserved &copy; 2026
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
