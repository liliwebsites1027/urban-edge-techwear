import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProductOfMonth from "@/components/ProductOfMonth";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Hero />
      <ProductShowcase />
      <ProductOfMonth />
      {/* Footer will go next */}
    </main>
  );
}
