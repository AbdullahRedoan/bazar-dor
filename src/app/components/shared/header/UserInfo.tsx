"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Signed Out')
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <div>
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2.5 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {user?.image ? (
                  <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gray-200">
                    <Image
                      src={user?.image || ""}
                      alt={user?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="avatar avatar-online avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10  rounded-full">
                      <span className="text-sm">{user?.name[0]}</span>
                    </div>
                  </div>
                )}
                <span className="text-base font-semibold text-gray-900">
                  {user?.name}
                </span>
                <HiChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              <div
                tabIndex={-1}
                className="dropdown-content mt-2 w-72 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 z-50 space-y-4"
              >
                {/* User Info Header */}
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {user?.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium tracking-tight">
                    {user?.email}
                  </p>
                </div>

                {/* Menu Items */}
                <ul className="menu p-0 space-y-3 font-bold text-sm">
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 text-gray-800 hover:text-emerald-700 active:bg-transparent focus:bg-transparent p-0"
                    >
                      <FaUser className="w-4 h-4 text-slate-600" />
                      <span>আমার প্রোফাইল</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 text-red-500 hover:text-red-600 active:bg-transparent focus:bg-transparent p-0 w-full text-left"
                    >
                      <FiLogOut className="w-4 h-4 text-red-500" />
                      <span>সাইন আউট</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href={"/signIn"}>
            <button className="cursor-pointer  text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors px-2 py-1">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/signUp"}>
            <button className="cursor-pointer bg-[#008a45] hover:bg-[#00783c] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-md transition-all">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
