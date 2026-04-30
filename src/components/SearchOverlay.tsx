"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-24 left-0 w-full flex justify-center px-6 z-[40] pointer-events-none">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Pointer events auto allows interaction inside the floating bar
            className="pointer-events-auto w-full max-w-2xl bg-[#111214] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="px-4 h-14 flex items-center gap-4">
              <Search className="text-gray-400 shrink-0" size={18} />

              <input
                ref={inputRef}
                type="text"
                placeholder="Search catalog..."
                className="flex-1 bg-transparent text-white text-sm outline-none font-sans placeholder:text-gray-600"
              />

              <div className="flex items-center gap-3">
                <div className="h-4 w-[1px] bg-white/10" />{" "}
                {/* Simple divider */}
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/5 rounded-md transition-colors group"
                  aria-label="Close search"
                >
                  <X
                    className="text-gray-500 group-hover:text-white transition-colors"
                    size={18}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
