import type { Metadata } from "next";
import { Roboto_Mono, Orbitron } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import { createClient } from "../../utils/supabase/server";
import NavbarWrapper from "@/components/NavbarWrapper";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch user on the server to satisfy the Navbar's 'user' requirement
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={`${robotoMono.variable} ${orbitron.variable}`}>
      <body className="bg-[#0a0a0c] text-white antialiased flex flex-col min-h-screen">
        {/* Pass user to the wrapper which handles the "hide on login" logic */}
        <NavbarWrapper user={user} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
