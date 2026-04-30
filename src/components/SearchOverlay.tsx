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
            // Changed background to white and border to a subtle gray
            className="pointer-events-auto w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="px-4 h-14 flex items-center gap-4">
              {/* Changed icon color to a darker gray for contrast */}
              <Search className="text-gray-500 shrink-0" size={18} />

              <input
                ref={inputRef}
                type="text"
                placeholder="Search catalog..."
                // Changed text to black and placeholder to a darker gray
                className="flex-1 bg-transparent text-gray-900 text-sm outline-none font-sans placeholder:text-gray-400"
              />

              <div className="flex items-center gap-3">
                {/* Divider color updated for light background */}
                <div className="h-4 w-[1px] bg-gray-200" />{" "}
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors group"
                  aria-label="Close search"
                >
                  <X
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
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
