"use client";
import { useCartStore } from "@/store/useCartStore";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { ShieldCheck, CreditCard, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function CheckoutPage() {
  const { items } = useCartStore();
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 25.0;
  const total = subtotal + shipping;

  return (
    <main className="bg-[#f4f4f7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Security Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-black/5 pb-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-4 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span
                className={`${roboto.className} text-[10px] uppercase tracking-widest`}
              >
                Return to Grid
              </span>
            </Link>
            <h1
              className={`${orbitron.className} text-3xl text-black uppercase tracking-[0.2em]`}
            >
              Secure <span className="text-[#02A3DC]">Checkout</span>
            </h1>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-white px-4 py-2 border border-black/5 rounded-sm shadow-sm">
            <Lock size={16} className="text-green-500" />
            <div
              className={`${roboto.className} text-[9px] uppercase leading-tight`}
            >
              <p className="text-black font-bold">SSL Encrypted</p>
              <p className="text-gray-400">Personal data is 100% secured</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Information Entry */}
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-white p-8 border border-black/5 rounded-sm shadow-sm">
              <h2
                className={`${orbitron.className} text-xs uppercase tracking-widest mb-8 flex items-center gap-2`}
              >
                <span className="w-4 h-4 bg-black text-white flex items-center justify-center text-[8px]">
                  01
                </span>
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Full Name", "Email Address", "City", "Country"].map(
                  (label) => (
                    <div key={label} className="space-y-2">
                      <label
                        className={`${roboto.className} text-[9px] text-gray-400 uppercase`}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#fcfcfd] border border-gray-200 p-3 text-black text-xs focus:border-[#02A3DC] outline-none transition-all"
                        placeholder={`Required`}
                      />
                    </div>
                  ),
                )}
              </div>
            </section>

            <section className="bg-white p-8 border border-black/5 rounded-sm shadow-sm">
              <h2
                className={`${orbitron.className} text-xs uppercase tracking-widest mb-8 flex items-center gap-2`}
              >
                <span className="w-4 h-4 bg-black text-white flex items-center justify-center text-[8px]">
                  02
                </span>
                Payment Method
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="border-2 border-[#02A3DC] p-4 flex items-center justify-between rounded-sm bg-[#02A3DC]/5">
                  <div className="flex items-center gap-4">
                    <CreditCard size={20} className="text-[#02A3DC]" />
                    <span
                      className={`${roboto.className} text-xs font-bold uppercase`}
                    >
                      Credit / Debit Card
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full bg-[#fcfcfd] border border-gray-200 p-3 text-black text-xs outline-none"
                />
              </div>
            </section>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[#353535] text-white p-8 rounded-sm sticky top-32 shadow-xl">
              <h2
                className={`${orbitron.className} text-[10px] tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4`}
              >
                Transaction Details
              </h2>

              <div className="space-y-6 mb-8 max-h-62.5 overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-12 h-12 bg-white/10 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`${roboto.className} text-[10px] uppercase font-bold`}
                      >
                        {item.name}
                      </p>
                      <p className="text-[#02A3DC] text-[9px] font-mono">
                        QTY: {item.quantity}
                      </p>
                    </div>
                    <p className="text-[11px] font-mono">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest">
                  <span>Shipping</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 mt-4 border-t border-white/10">
                  <span
                    className={`${orbitron.className} text-xs uppercase text-[#02A3DC]`}
                  >
                    Total Amount
                  </span>
                  <span className="text-2xl font-mono">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#02A3DC] hover:bg-white hover:text-black text-white py-4 flex items-center justify-center gap-3 transition-all duration-300 group">
                <ShieldCheck size={18} />
                <span
                  className={`${orbitron.className} text-[10px] uppercase font-bold tracking-[0.2em]`}
                >
                  Confirm & Pay
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
