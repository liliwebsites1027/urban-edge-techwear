export type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  desc: string;
  category: "hoodie" | "jacket" | "watch" | "eyewear" | "caps" | "sneakers";
};

export const allProducts: Product[] = [
  // Homepage: Shop Showcase (Hoodies)
  {
    id: "p1",
    name: "NeuroShield Lite Hoodie",
    desc: "Thermal regulation.",
    price: 185,
    img: "/image1.png",
    category: "hoodie",
  },
  {
    id: "p2",
    name: "AeroGuard Tactical Hoodie",
    desc: "Wind-resistant.",
    price: 210,
    img: "/image2.png",
    category: "hoodie",
  },
  {
    id: "p3",
    name: "CryoShell Expedition Hoodie",
    desc: "Sub-zero tech.",
    price: 245,
    img: "/image3.png",
    category: "hoodie",
  },
  {
    id: "p4",
    name: "StealthCore Urban Hoodie",
    desc: "Water-repellent.",
    price: 160,
    img: "/image4.png",
    category: "hoodie",
  },

  // Homepage: Product of Month
  {
    id: "f1",
    name: "STRATOSHELL-X Jacket",
    desc: "Engineered for Motion.",
    price: 450,
    img: "/jacket.jpeg",
    category: "jacket",
  },
  {
    id: "f2",
    name: "AEROTIME-X Tactical Chronograph",
    desc: "Precision Built.",
    price: 890,
    img: "/watch.mp4",
    category: "watch",
  },
  {
    id: "f3",
    name: "NEOVISOR-X Modular Frames",
    desc: "Vision Built.",
    price: 210,
    img: "/frames.jpeg",
    category: "eyewear",
  },

  // Shop: New Arrivals
  {
    id: "na1",
    name: "Alpha-T Jacket",
    desc: "High-density tech wool.",
    price: 420,
    img: "/new-arrivals1.png",
    category: "jacket",
  },
  {
    id: "na2",
    name: "Tactical Rig V1",
    desc: "Modular utility vest.",
    price: 350,
    img: "/new-arrivals2.png",
    category: "jacket",
  },
  {
    id: "na3",
    name: "Ghost Shell JP",
    desc: "Ultra-lightweight shell.",
    price: 380,
    img: "/new-arrivals3.png",
    category: "jacket",
  },
  {
    id: "na4",
    name: "Core Bomber V2",
    desc: "Reinforced classic bomber.",
    price: 310,
    img: "/new-arrivals4.png",
    category: "jacket",
  },

  // Shop: Categorized - Caps
  {
    id: "c1",
    name: "Ghost Comm",
    desc: "Signal-blocking fabric.",
    price: 20,
    img: "/cap1.png",
    category: "caps",
  },
  {
    id: "c2",
    name: "Neon Shift",
    desc: "Reactive glow panels.",
    price: 45,
    img: "/cap2.png",
    category: "caps",
  },
  {
    id: "c3",
    name: "Ultra Reactor",
    desc: "Climate-controlled fit.",
    price: 75,
    img: "/cap3.png",
    category: "caps",
  },
  {
    id: "c4",
    name: "Cargo Tactic",
    desc: "Dual hidden compartments.",
    price: 30,
    img: "/cap4.png",
    category: "caps",
  },

  // Shop: Categorized - Sneakers
  {
    id: "s1",
    name: "Exo-SNK-03",
    desc: "Exoskeleton support.",
    price: 125,
    img: "/shoe1.png",
    category: "sneakers",
  },
  {
    id: "s2",
    name: "Cyber-SNK",
    desc: "LED integrated sole.",
    price: 200,
    img: "/shoe2.png",
    category: "sneakers",
  },
  {
    id: "s3",
    name: "Neon-Reaction",
    desc: "Impact-absorbing tech.",
    price: 250,
    img: "/shoe3.png",
    category: "sneakers",
  },
  {
    id: "s4",
    name: "Cargo-Hybrid",
    desc: "All-terrain durability.",
    price: 155,
    img: "/shoe4.png",
    category: "sneakers",
  },

  // Shop: Categorized - Eyewear
  {
    id: "e1",
    name: "Phantom Vision",
    desc: "Anti-glare HUD tech.",
    price: 50,
    img: "/glasses1.png",
    category: "eyewear",
  },
  {
    id: "e2",
    name: "Neon Shift Glasses",
    desc: "Adaptive light tint.",
    price: 70,
    img: "/glasses2.png",
    category: "eyewear",
  },
  {
    id: "e3",
    name: "Ultra-Reactive",
    desc: "Ballistic grade lenses.",
    price: 90,
    img: "/glasses3.png",
    category: "eyewear",
  },
  {
    id: "e4",
    name: "Cargo Vision",
    desc: "Rugged modular frames.",
    price: 60,
    img: "/glasses4.png",
    category: "eyewear",
  },
];
