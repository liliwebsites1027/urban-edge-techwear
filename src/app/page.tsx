import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Hero />
      <ProductShowcase />
      {/* Product of the Month will follow... */}
    </main>
  );
}
