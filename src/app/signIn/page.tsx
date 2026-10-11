"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Sign In Successfull!");
    }
    if (error) {
      toast.error(error?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    toast.promise(
    authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    }),
    {
      success: 'গুগল অ্যাকাউন্টে রিডাইরেক্ট করা হচ্ছে!',
      error: 'গুগল সাইন ইন ব্যর্থ হয়েছে!',
    }
  );
  };
  const handleGithubSignIn = async () => {
    toast.promise(
    authClient.signIn.social({
      provider: "github",
      callbackURL: "/"
    }),
    {
      success: 'গিটহাব অ্যাকাউন্টে রিডাইরেক্ট করা হচ্ছে!',
      error: 'গিটহাব সাইন ইন ব্যর্থ হয়েছে!',
    }
  );
  };

  return (
    <div className="min-h-80 bg-[#f1f4f0] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">সাইন ইন</h1>
        <p className="text-sm text-gray-600">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              ইমেইল
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              পাসওয়ার্ড
            </label>
            <input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#008a45] hover:bg-[#00783c] text-white font-medium py-3 rounded-lg shadow-sm transition-colors text-sm mt-2 cursor-pointer "
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative bg-white px-3 text-xs text-gray-500">
            অথবা
          </span>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className=" cursor-pointer flex items-center justify-center gap-2 py-2 md:py-1 pl-2  border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-100/80 transition-colors text-xs font-semibold text-gray-800"
          >
           <FaGoogle className="w-5 h-5"/> 
            Google দিয়ে চালিয়ে যান
          </button>

          {/* GitHub Button */}
          <button 
          onClick={handleGithubSignIn}
            type="button"
            className=" cursor-pointer flex items-center justify-center gap-2 py-2 pl-1 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-100/80 transition-colors text-xs font-semibold text-gray-800"
          >
            <FaGithub className="w-6 h-6"/>

            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center text-xs text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signUp" className="cursor-pointer text-emerald-600 font-medium hover:underline">
            সাইন আপ করুন
          </Link>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-6 text-center">
        <Link href="/" className="text-xs text-gray-500 hover:text-gray-700">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
