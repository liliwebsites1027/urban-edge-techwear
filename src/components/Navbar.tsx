import Link from "next/link";
import { Search } from "lucide-react";
import { Roboto_Mono, Orbitron } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-start select-none">
          <div className="w-8 h-8 bg-gradient-to-br from-[#bfff00] via-[#02A3DC] to-[#8b5cf6] rounded-sm flex items-center justify-center font-bold text-[11px] text-black shadow-[0_0_15px_rgba(2,163,220,0.3)]">
            UE
          </div>
          <span
            className={`${robotoMono.className} uppercase tracking-[0.25em] font-bold text-[10px] mt-2 text-white/90`}
          >
            Urban Edge
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-12 font-sans text-[13px] font-medium text-white/70">
            <Link
              href="/"
              className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
            >
              About Us
            </Link>
            <Link
              href="/cart"
              className="hover:text-[#02A3DC] transition-colors tracking-wide uppercase"
            >
              My Cart
            </Link>
          </div>

          {/* Icon-only Search Button */}
          <button className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-sm hover:bg-[#02A3DC] hover:text-white transition-all duration-300 group shadow-lg">
            <Search
              size={18}
              strokeWidth={2.5}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
