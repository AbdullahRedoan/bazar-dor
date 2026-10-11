"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Signed Out");
    redirect("/signIn");
  };

  const handleUpdateUser =async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    if(userName?.name === user?.name){
        toast.error('This name is same as  the previous')
    }else{
        const {data, error} = await authClient.updateUser({
      ...userName
    });
    if (data) {
          toast.success("Name Updated Successfully!");
        }
        if (error) {
          toast.error(error?.message);
        }
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f4f0] py-10 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        {/* Top Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-gray-900">
            আমার প্রোফাইল
          </h1>
          <p className="text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Card Banner */}
        <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div>
              {user?.image ? (
                <div className="relative w-15 h-15 rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={user?.image || ""}
                    alt={user?.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="avatar avatar-online avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-15  rounded-2xl">
                    <span className="text-sm">{user?.name[0]}</span>
                  </div>
                </div>
              )}
            </div>
            {/* User Details */}
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-snug">
                {user?.name}
              </h2>
              <p className="text-xs text-gray-400 font-medium tracking-tight mt-0.5">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="w-3.5 h-3.5" />
            <span>সাইন আউট</span>
          </button>
        </div>

        {/* Information Form Card */}
        <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-gray-900">তথ্য</h3>

          <form onSubmit={handleUpdateUser}>
            <div className="space-y-4">
              {/* Name Input Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-700">
                  নাম
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={user?.name}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none"
                />
              </div>

              {/* Update Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#008a45] hover:bg-[#00783c] text-white font-medium text-sm py-2.5 rounded-xl shadow-sm transition-colors"
                >
                  আপডেট
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
