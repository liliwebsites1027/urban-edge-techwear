import { redirect } from "next/navigation";
import { Inter, Roboto_Mono } from "next/font/google";
import {
  Package,
  Ticket,
  LogOut,
  User,
  ChevronRight,
  MapPin,
  CreditCard,
} from "lucide-react";
import { logout } from "@/app/auth/actions";
import { createClient } from "../../../utils/supabase/server";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) redirect("/login");

  return (
    <main
      className={`${inter.className} bg-[#F9F9F9] min-h-screen pt-20 pb-20 px-6`}
    >
      <div className="max-w-2xl mx-auto">
        {/* User Greeting */}
        <header className="mb-10 px-2">
          <h1 className="text-3xl font-light tracking-tight text-black">
            Hello,{" "}
            <span className="font-semibold">{user.email?.split("@")[0]}</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your orders and personal details
          </p>
        </header>

        <div className="grid gap-6">
          {/* Main Account Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50">
              <h2 className="text-xs uppercase font-bold tracking-widest text-gray-400">
                Account Overview
              </h2>
            </div>

            <div className="divide-y divide-gray-50">
              {/* Order Tracking */}
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 text-[#02A3DC] rounded-lg">
                    <Package size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-black">My Orders</p>
                    <p className="text-xs text-gray-400">
                      Track, return, or buy again
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-black transition-colors"
                />
              </button>

              {/* Discounts */}
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Ticket size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-black">
                      Vouchers & Offers
                    </p>
                    <p className="text-xs text-gray-400">
                      You have 1 active discount code
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-black transition-colors"
                />
              </button>

              {/* Addresses */}
              <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-black">
                      Shipping Addresses
                    </p>
                    <p className="text-xs text-gray-400">1 saved location</p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-black transition-colors"
                />
              </button>
            </div>
          </section>

          {/* Security / Logout */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <User size={20} />
              </div>
              <div>
                <p
                  className={`${roboto.className} text-[10px] text-gray-400 uppercase tracking-tighter`}
                >
                  Login Email
                </p>
                <p className="text-sm text-black">{user.email}</p>
              </div>
            </div>

            <form action={logout}>
              <button className="text-xs cursor-pointer font-bold text-red-500 uppercase tracking-widest hover:text-red-700 transition-colors flex items-center gap-2">
                <LogOut size={14} /> Logout
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
