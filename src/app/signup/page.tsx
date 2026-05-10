"use client";
import React, { useState } from "react"; // Added useState
import { signup } from "@/app/auth/actions";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { UserPlus, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile"; // 1. Import Turnstile

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

type SearchParams = Promise<{ message?: string; error?: string }>;

export default function SignupPage(props: { searchParams: SearchParams }) {
  const searchParams = React.use(props.searchParams);
  // 2. State to store the captcha token
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  return (
    <main className="bg-[#f4f4f7] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 border border-black/5 shadow-xl">
        <div className="text-center mb-10">
          <h1
            className={`${orbitron.className} text-black text-2xl uppercase tracking-[0.2em]`}
          >
            Create <span className="text-[#02A3DC]">Identity</span>
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

          <p
            className={`${roboto.className} mt-2 text-[9px] text-gray-400 uppercase tracking-widest`}
          >
            Register for Urban Edge access
          </p>
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
              placeholder="operator@urbanedge.com"
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
              minLength={8}
              maxLength={72}
              placeholder="Min. 8 characters"
              className="w-full bg-[#fcfcfd] border border-gray-200 p-3 text-black text-xs outline-none focus:border-[#02A3DC]"
            />
          </div>

          {/* 3. The Turnstile Component (Invisible) */}
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => setCaptchaToken(token)}
          />

          {/* 4. Hidden input to send the token to the Server Action */}
          <input type="hidden" name="captchaToken" value={captchaToken ?? ""} />

          <button
            formAction={signup}
            disabled={!captchaToken} // Optional: Disable button until verified
            className="w-full bg-[#02A3DC] disabled:bg-gray-400 cursor-pointer text-white py-4 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-[#028bbd] transition-all shadow-[0_0_20px_rgba(2,163,220,0.2)]"
          >
            <UserPlus size={14} /> Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className={`${roboto.className} text-[10px] text-gray-500 hover:text-black uppercase tracking-tighter flex items-center justify-center gap-1`}
          >
            <ArrowLeft size={12} /> Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
