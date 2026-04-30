import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProductOfMonth from "@/components/ProductOfMonth";
import VideoAd from "@/components/VideoAd"; // Import the new section

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Hero />
      <ProductShowcase />
      <VideoAd /> {/* Placed below ProductShowcase */}
      <ProductOfMonth />
    </main>
  );
}
