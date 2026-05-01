"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-60 cursor-pointer"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0a0a0c] z-70 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col border-l border-white/5"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-[#02A3DC]" />
                <h2 className="text-white uppercase tracking-[0.2em] font-medium text-[11px]">
                  Grid Inventory
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
              >
                <X size={20} className="text-gray-500 group-hover:text-white" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20">
                  <ShoppingBag size={40} className="mb-4 text-white" />
                  <p className="text-white text-[10px] uppercase tracking-widest">
                    Empty Slot
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-20 h-24 bg-zinc-900 border border-white/5 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white text-[11px] uppercase tracking-wider font-bold">
                            {item.name}
                          </h3>
                          <p className="text-[#02A3DC] text-[10px] mt-1 font-mono">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:text-[#02A3DC] transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-[10px] text-white font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:text-[#02A3DC] transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-[#0d0d0f]">
              <div className="flex justify-between mb-8">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                  Subtotal
                </span>
                <span className="text-white text-sm font-sans font-bold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <Link
                href="/checkout"
                onClick={onClose}
                className={`w-full py-4 transition-all duration-300 flex items-center justify-center gap-3 group ${
                  items.length === 0
                    ? "bg-zinc-800 text-zinc-500 pointer-events-none"
                    : "bg-white text-black hover:bg-[#02A3DC] hover:text-white"
                }`}
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.3em]">
                  Initialize Checkout
                </span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
