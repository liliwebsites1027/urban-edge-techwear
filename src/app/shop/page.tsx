import ShopHero from "@/components/ShopHero";
import NewArrivals from "@/components/NewArrivals";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <ShopHero />
      <NewArrivals />
      {/* Categories section comes next */}
    </main>
  );
}
