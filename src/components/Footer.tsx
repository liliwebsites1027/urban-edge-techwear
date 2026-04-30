import Link from "next/link";
import Image from "next/image";
import { Roboto_Mono, Orbitron } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

const socialLinks = [
  { name: "Instagram", src: "/instagram.svg", href: "#" },
  { name: "X", src: "/x.svg", href: "#" },
  { name: "Facebook", src: "/facebook.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black py-24 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start">
            <div className="relative w-12 h-12 bg-black flex items-center justify-center rounded-sm">
              <Image
                src="/urbanedge-logo.png"
                alt="Urban Edge"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              className={`${orbitron.className} uppercase tracking-[0.3em] font-black text-[13px] mt-5`}
            >
              Urban Edge
            </span>
          </div>

          {/* Real SVG Social Logos */}
          <div className="flex gap-6 items-center">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="opacity-40 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Explore Column */}
        <div>
          <h4
            className={`${orbitron.className} text-[11px] font-black uppercase tracking-widest mb-8`}
          >
            Explore
          </h4>
          <ul className={`${robotoMono.className} space-y-4`}>
            {["New Arrivals", "Hoodies", "Jackets", "Accessories"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[10px] uppercase hover:text-[#02A3DC] transition-colors tracking-tighter"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Brand Column */}
        <div>
          <h4
            className={`${orbitron.className} text-[11px] font-black uppercase tracking-widest mb-8`}
          >
            Brand
          </h4>
          <ul className={`${robotoMono.className} space-y-4`}>
            {["Our Story", "Technology", "Contact", "Sustainability"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[10px] uppercase hover:text-[#02A3DC] transition-colors tracking-tighter"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* System Status Column */}
        <div className="flex flex-col">
          <h4
            className={`${orbitron.className} text-[11px] font-black uppercase tracking-widest mb-8`}
          >
            Terminal
          </h4>
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-sm self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span
              className={`${robotoMono.className} text-[9px] uppercase tracking-widest font-bold`}
            >
              Systems Active
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p
          className={`${robotoMono.className} text-[9px] uppercase tracking-widest text-gray-400`}
        >
          © 2026 Urban Edge Industries. Protocol v2.0.4
        </p>
        <p
          className={`${robotoMono.className} text-[9px] uppercase tracking-widest text-gray-400`}
        >
          Designed for the Urban Grid
        </p>
      </div>
    </footer>
  );
}
