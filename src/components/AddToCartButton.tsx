"use client";
import { useState } from "react";
import { ShoppingCart, Check, CheckCheck } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: "sm" | "md";
}

export default function AddToCartButton({
  id,
  name,
  price,
  image,
  size = "md",
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  // Check if this specific ID is already in the cart items array
  const isInCart = useCartStore((state) =>
    state.items.some((item) => item.id === id),
  );

  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({ id, name, price, image });

    // Trigger the "Just Added" animation/state
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const iconSize = size === "sm" ? 16 : 18;
  const padding = size === "sm" ? "p-2.5" : "p-3";
  const position = size === "sm" ? "top-3 right-3" : "top-4 right-4";

  return (
    <button
      onClick={handleAdd}
      className={`absolute ${position} z-10 ${padding} rounded-full transition-all duration-300 backdrop-blur-sm shadow-xl border
        ${
          justAdded
            ? "bg-green-500 border-green-500 text-white scale-110"
            : isInCart
              ? "bg-[#02A3DC] border-[#02A3DC] text-white" // Different look if already in cart
              : "bg-black/60 border-white/20 text-white hover:bg-[#02A3DC] hover:border-[#02A3DC]"
        }`}
      aria-label={isInCart ? `${name} is in cart` : `Add ${name} to cart`}
    >
      {justAdded ? (
        <Check size={iconSize} />
      ) : isInCart ? (
        <CheckCheck size={iconSize} /> // "Double check" indicates it's already there
      ) : (
        <ShoppingCart size={iconSize} />
      )}
    </button>
  );
}
