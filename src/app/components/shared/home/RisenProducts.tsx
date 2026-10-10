import React from "react";
import { FiMapPin, FiTriangle } from "react-icons/fi";

const data = {
  id: 1,
  slug: "sorno-machi-chal",
  nameBn: "স্বর্ণমাছি চাল",
  category: "chal",
  categoryNameBn: "চাল",
  categoryIcon: "🍚",
  unit: "kg",
  image: "🍚",
  today: 148,
  yesterday: 145,
  lastWeek: 142,
  lastMonth: 138,
  change: {
    dir: "up",
    pct: 2.1,
  },
  markets: [
    { market: "কারওয়ান বাজার", division: "ঢাকা", min: 146, max: 165 },
    { market: "গ্রীন মার্কেট, মিরপুর", division: "ঢাকা", min: 143, max: 159 },
    { market: "চৌদগ্রাম বাজার", division: "চট্টগ্রাম", min: 142, max: 163 },
    { market: "আমতলী বাজার", division: "চট্টগ্রাম", min: 138, max: 155 },
    { market: "সদর বাজার", division: "রাজশাহী", min: 134, max: 148 },
    { market: "বাসারহাট বাজার", division: "রাজশাহী", min: 135, max: 152 },
  ],
};

const RisenProducts = () => {


  return (
    <div className="w-full bg-[#f1f4f0] p-4 sm:p-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">
        {/* Top Header: Title, Category, Badge & Historical Prices */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          {/* Main Title & Category */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#f6f8f6] flex items-center justify-center text-3xl shadow-inner border border-gray-200/50">
              {data.image || data.categoryIcon}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  {data.categoryNameBn}
                </span>

                {/* Dynamic Price Change Badge */}
                <div
                  className={`flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    isUp
                      ? "bg-red-50 text-red-600 border-red-100"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100"
                  }`}
                >
                  <FiTriangle
                    className={`w-2.5 h-2.5 fill-current ${
                      isUp ? "rotate-0" : "rotate-180"
                    }`}
                  />
                  <span>{formattedPct}%</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                {data.nameBn}
              </h1>
            </div>
          </div>

          {/* Today's Price Display */}
          <div className="bg-[#f8faf8] border border-gray-100 rounded-xl p-4 flex items-center gap-4 min-w-50">
            <div>
              <span className="text-xs text-gray-500 font-medium block">
                আজকের গড় দাম
              </span>
              <div className="text-2xl font-black text-gray-900">
                ৳{toBengaliNumber(data.today)}{" "}
                <span className="text-xs font-normal text-gray-600">
                  / {formatUnit(data.unit)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Price Comparisons */}
        <div>
          <h2 className="text-sm font-bold text-gray-700 mb-3">
            দামের পরিবর্তন ইতিহাস
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-100 text-center">
              <span className="text-xs text-gray-500 block mb-1">গতকাল</span>
              <span className="text-base font-bold text-gray-800">
                ৳{toBengaliNumber(data.yesterday)}
              </span>
            </div>
            <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-100 text-center">
              <span className="text-xs text-gray-500 block mb-1">
                গত সপ্তাহ
              </span>
              <span className="text-base font-bold text-gray-800">
                ৳{toBengaliNumber(data.lastWeek)}
              </span>
            </div>
            <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-100 text-center">
              <span className="text-xs text-gray-500 block mb-1">গত মাস</span>
              <span className="text-base font-bold text-gray-800">
                ৳{toBengaliNumber(data.lastMonth)}
              </span>
            </div>
            <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100 text-center">
              <span className="text-xs text-emerald-800 font-medium block mb-1">
                আজকের দাম
              </span>
              <span className="text-base font-extrabold text-emerald-700">
                ৳{toBengaliNumber(data.today)}
              </span>
            </div>
          </div>
        </div>

        {/* Division & Market Wise Price Grid */}
        <div>
          <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-1.5">
            <FiMapPin className="text-emerald-600" /> বাজারভিত্তিক বিস্তারিত দর
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.markets.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#f8faf8] border border-gray-100 rounded-xl p-3.5 flex items-center justify-between hover:border-emerald-200 transition-colors"
              >
                <div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {m.market}
                  </h3>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {m.division} বিভাগ
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-gray-800 block">
                    ৳{toBengaliNumber(m.min)} - ৳{toBengaliNumber(m.max)}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    সর্বনিম্ন - সর্বোচ্চ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RisenProducts;
