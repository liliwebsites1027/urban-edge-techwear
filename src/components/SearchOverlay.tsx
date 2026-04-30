"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allProducts } from "@/data/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 1. Suggestions logic (No changes needed here)
  const suggestions = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];
    return allProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(trimmed.toLowerCase()) ||
          product.category?.toLowerCase().includes(trimmed.toLowerCase()),
      )
      .slice(0, 5);
  }, [query]);

  // 2. Only use Effect for DOM side-effects (Focus)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-24 left-0 w-full flex justify-center px-6 z-[40] pointer-events-none">
          <motion.div
            // THE FIX: Adding a key based on isOpen resets the 'query' state
            // automatically when the overlay re-mounts/toggles.
            key={isOpen ? "search-open" : "search-closed"}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* INPUT SECTION */}
            <form
              onSubmit={handleSearchSubmit}
              className="px-4 h-14 flex items-center gap-4"
            >
              <Search className="text-gray-500 shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search catalog..."
                className="flex-1 bg-transparent text-gray-900 text-sm outline-none font-sans placeholder:text-gray-400"
              />
              <div className="flex items-center gap-3">
                <div className="h-4 w-[1px] bg-gray-200" />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors group"
                >
                  <X
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
                    size={18}
                  />
                </button>
              </div>
            </form>

            {/* SUGGESTIONS SECTION */}
            {suggestions.length > 0 && (
              <div className="border-t border-gray-100 bg-gray-50/50">
                <div className="p-2">
                  {suggestions.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-2 hover:bg-white rounded-md transition-all border border-transparent hover:border-gray-200"
                    >
                      <div className="relative w-10 h-10 bg-white border border-gray-200 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[12px] font-bold text-gray-900 uppercase truncate">
                          {product.name}
                        </span>
                        <span className="text-[10px] text-[#02A3DC] font-medium uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                      <div className="ml-auto text-[11px] font-mono text-gray-400">
                        $
                        {typeof product.price === "number"
                          ? product.price.toFixed(2)
                          : product.price}
                      </div>
                    </Link>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full p-3 text-[11px] text-center text-gray-500 uppercase tracking-widest font-bold hover:bg-gray-100 hover:text-gray-900 transition-colors border-t border-gray-100"
                >
                  View all results for &ldquo;{query}&ldquo;
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
