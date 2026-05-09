"use client";
import React from "react";
import { login } from "@/app/auth/actions";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { Lock, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

type SearchParams = Promise<{ message?: string; error?: string }>;

export default function LoginPage(props: { searchParams: SearchParams }) {
  const searchParams = React.use(props.searchParams);

  return (
    <main className="bg-[#f4f4f7] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 border border-black/5 shadow-xl">
        <div className="text-center mb-10">
          <h1
            className={`${orbitron.className} text-black text-2xl uppercase tracking-[0.2em]`}
          >
            Login <span className="text-[#02A3DC]">Access</span>
          </h1>
          {searchParams.error && (
            <p className="mt-4 text-red-600 text-[10px] uppercase font-bold bg-red-50 p-2 border border-red-100">
              {searchParams.error}
            </p>
          )}
          {searchParams.message && (
            <p className="mt-4 text-green-600 text-[10px] uppercase font-bold bg-green-50 p-2 border border-green-100">
              {searchParams.message}
            </p>
          )}
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label
              className={`${roboto.className} text-[9px] text-gray-400 uppercase`}
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              className="w-full bg-[#fcfcfd] border border-gray-200 p-3 text-black text-xs outline-none focus:border-[#02A3DC]"
            />
          </div>

          <div className="space-y-2">
            <label
              className={`${roboto.className} text-[9px] text-gray-400 uppercase`}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              maxLength={72}
              className="w-full bg-[#fcfcfd] border border-gray-200 p-3 text-black text-xs outline-none focus:border-[#02A3DC]"
            />
          </div>

          <button
            formAction={login}
            className="w-full bg-black text-white py-4 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#333] transition-all"
          >
            <LogIn size={14} /> Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/signup"
            className={`${roboto.className} text-[10px] text-gray-500 hover:text-[#02A3DC] uppercase tracking-tighter flex items-center justify-center gap-1 group`}
          >
            New User? Create Account{" "}
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-center gap-2 text-gray-400">
          <Lock size={12} />
          <span
            className={`${roboto.className} text-[8px] uppercase tracking-tighter`}
          >
            Secure Authentication Protocol v1.0
          </span>
        </div>
      </div>
    </main>
  );
}
