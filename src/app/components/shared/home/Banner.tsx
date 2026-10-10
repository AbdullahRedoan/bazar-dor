import React from "react";

const Banner = () => {
    const date = new Date().toLocaleDateString('bn-BN',{
        dateStyle : "full"
    })


  return (
    <div className="w-full flex justify-center items-center">
      {/* Container Banner */}
      <div className="w-full bg-white/80 rounded-2xl border border-gray-100 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-4 text-left">
          {/* Date Badge */}
          <div className="inline-block bg-[#e2f0e8] text-[#1e613b] text-xs font-semibold px-3 py-1.5 rounded-full">
            {date}
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description Text */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button className="bg-[#008a45] hover:bg-[#00783c] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors">
              সব পণ্য দেখুন
            </button>
          </div>
        </div>

        {/* Right Side: Grocery Basket Illustration (SVG) */}
        <div className="w-48 sm:w-60 shrink-0 flex justify-center items-center">
          <svg viewBox="0 0 200 160" className="w-full h-auto">
            {/* Shadow */}
            <ellipse cx="100" cy="148" rx="70" ry="10" fill="#e2e8f0" />

            {/* Fruits & Vegetables */}
            {/* Purple Fruit */}
            <circle cx="65" cy="88" r="14" fill="#a855f7" />

            {/* Red Fruit */}
            <circle cx="85" cy="78" r="22" fill="#ef4444" />
            <path
              d="M 85 56 Q 95 45 102 48"
              stroke="#15803d"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Orange Small Fruit */}
            <circle cx="115" cy="85" r="13" fill="#f97316" />

            {/* Green Large Fruit */}
            <circle cx="138" cy="70" r="24" fill="#22c55e" />
            <path
              d="M 138 46 Q 148 35 155 38"
              stroke="#15803d"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Yellow-Orange Fruit */}
            <circle cx="165" cy="88" r="15" fill="#eab308" />
            <path
              d="M 165 73 Q 172 65 178 68"
              stroke="#15803d"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Wooden Basket */}
            <path
              d="M 52 98 L 148 98 L 138 142 C 138 144, 136 146, 133 146 L 67 146 C 64 146, 62 144, 62 142 Z"
              fill="#b45309"
            />
            <path d="M 50 96 L 150 96 L 150 102 L 50 102 Z" fill="#78350f" />

            {/* Basket Strips */}
            <line
              x1="72"
              y1="102"
              x2="70"
              y2="146"
              stroke="#78350f"
              strokeWidth="2"
            />
            <line
              x1="90"
              y1="102"
              x2="88"
              y2="146"
              stroke="#78350f"
              strokeWidth="2"
            />
            <line
              x1="110"
              y1="102"
              x2="112"
              y2="146"
              stroke="#78350f"
              strokeWidth="2"
            />
            <line
              x1="128"
              y1="102"
              x2="130"
              y2="146"
              stroke="#78350f"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
