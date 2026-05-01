"use client";
import { Check, CheckCheck, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: "sm" | "md";
  children?: React.ReactNode;
}

export default function AddToCartButton({
  id,
  name,
  price,
  image,
  size = "md",
  children,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const items = useCartStore((state) => state.items);

  const isInCart = items.some((item) => item.id === id);

  const handleToggleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInCart) {
      removeItem(id);
    } else {
      addItem({ id, name, price, image });
    }
  };

  // PRODUCT DETAIL PAGE VERSION (Large White Button)
  if (children) {
    return (
      <button
        onClick={handleToggleCart}
        // Fixed height (h-[52px]) prevents height jump when icon/text changes
        className="w-full h-13 bg-white text-black font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-all cursor-pointer flex items-center justify-center gap-2 leading-none border-none outline-none"
      >
        {isInCart ? (
          <>
            <Check size={16} className="shrink-0" />
            <span>Added to cart</span>
          </>
        ) : (
          <span className="flex items-center justify-center gap-2">
            {children}
          </span>
        )}
      </button>
    );
  }

  // GRID/COLLECTION VERSION (Floating Icon)
  const iconSize = size === "sm" ? 16 : 18;
  const padding = size === "sm" ? "p-2.5" : "p-3";
  const position = size === "sm" ? "top-3 right-3" : "top-4 right-4";

  return (
    <button
      onClick={handleToggleCart}
      className={`absolute ${position} z-10 ${padding} rounded-full transition-all duration-300 backdrop-blur-sm shadow-xl border
        ${
          isInCart
            ? "bg-[#02A3DC] border-[#02A3DC] text-white"
            : "bg-black/60 border-white/20 text-white hover:bg-[#02A3DC] hover:border-[#02A3DC]"
        }`}
    >
      {isInCart ? (
        <CheckCheck size={iconSize} />
      ) : (
        <ShoppingCart size={iconSize} />
      )}
    </button>
  );
}
