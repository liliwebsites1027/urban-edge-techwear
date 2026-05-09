"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { User } from "@supabase/supabase-js";
import { createClient } from "../../utils/supabase/client";

export default function NavbarWrapper({ user }: { user: User | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.refresh();
        // Automatically move the "waiting" tab to profile once verified
        if (pathname === "/login" || pathname === "/signup") {
          router.push("/profile");
        }
      }
      if (event === "SIGNED_OUT") {
        router.refresh();
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, router, pathname]);

  // Hidden on both Login and Signup to keep auth flow clean
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldHide = hideNavbarRoutes.includes(pathname);

  if (shouldHide) return null;

  return <Navbar user={user} />;
}
