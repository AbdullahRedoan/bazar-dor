import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f8f6] border-t border-gray-200/60 py-6 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        {/* Left Side Text */}
        <p className="font-normal text-sm text-gray-700">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right Side Text */}
        <p className="font-normal text-sm text-gray-500">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
