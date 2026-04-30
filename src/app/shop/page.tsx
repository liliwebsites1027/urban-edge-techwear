import ShopHero from "@/components/ShopHero";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <ShopHero />

      {/* Next elements (Filters, Grid) will go here */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Placeholder for the next step */}
        <div className="text-center text-white/10 text-8xl font-bold opacity-5 uppercase tracking-tighter">
          Systems Loading
        </div>
      </div>
    </main>
  );
}
