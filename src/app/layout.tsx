import type { Metadata } from "next";
import { Roboto_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Urban Edge | Techwear",
  description: "Engineered for motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${orbitron.variable}`}>
      <body className="bg-[#0a0a0c] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
