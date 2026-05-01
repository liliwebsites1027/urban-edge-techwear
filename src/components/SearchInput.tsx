"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { allProducts } from "@/data/products";

export default function SearchWithSuggestions() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Track focus instead of manual toggle
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 1. Derive suggestions based on query
  const suggestions = useMemo(() => {
    if (query.length < 2) return [];

    return allProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category?.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5);
  }, [query]);

  // 2. Derive dropdown visibility (No useEffect needed!)
  const showDropdown = isFocused && suggestions.length > 0;

  // 3. Handle clicking outside to blur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsFocused(false);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      <form
        onSubmit={handleSearchSubmit}
        className="relative flex items-center"
      >
        <Search className="absolute left-3 text-white/40" size={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="SEARCH GEAR..."
          className="w-full bg-[#111214] border border-white/10 py-2 pl-10 pr-10 text-sm text-white uppercase tracking-widest focus:outline-none focus:border-[#02A3DC] transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 text-white/40 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </form>

      {/* SUGGESTIONS DROPDOWN */}
      {showDropdown && (
        <div className="absolute z-100 w-full mt-2 bg-[#0a0a0c] border border-white/10 shadow-2xl overflow-hidden">
          {suggestions.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={() => {
                setIsFocused(false);
                setQuery("");
              }}
              className="flex items-center gap-4 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
            >
              <div className="relative w-12 h-12 bg-[#111214] border border-white/5 shrink-0">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  {product.name}
                </span>
                <span className="text-[9px] text-[#02A3DC] uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
              <div className="ml-auto text-[10px] font-mono text-white/60">
                {typeof product.price === "number"
                  ? `$${product.price}`
                  : product.price}
              </div>
            </Link>
          ))}

          <button
            onClick={() => router.push(`/search?q=${query}`)}
            className="w-full p-3 text-[10px] text-center text-white/40 uppercase hover:text-[#02A3DC] transition-colors border-t border-white/5 bg-white/2"
          >
            View all results for &quot;{query}&quot;
          </button>
        </div>
      )}
    </div>
  );
}
