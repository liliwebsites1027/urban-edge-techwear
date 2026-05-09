"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { headers } from "next/headers";

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Password Validation (8+ chars, 1 number, 1 symbol)
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    redirect(
      "/signup?error=Password must be 8+ characters with a number and symbol.",
    );
  }

  const headerList = await headers();
  const referer = headerList.get("referer");
  const origin = headerList.get("origin"); // Gets the current base URL (localhost or live)
  const { searchParams } = new URL(referer || "");
  const next = searchParams.get("next") ?? "/";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // Logic: Use the current origin as the base, ensuring it points to /auth/callback
      emailRedirectTo: `${origin}/auth/callback?next=${next}`,
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/signup?message=Verification link sent! Check your inbox.");
}

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const headerList = await headers();
  const referer = headerList.get("referer");
  const { searchParams } = new URL(referer || "");
  const next = searchParams.get("next") ?? "/";

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect(next);
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
