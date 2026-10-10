import React from "react";
import { IProduct } from "../types/types";
import { FiTriangle } from "react-icons/fi";

const ProductCard = ({ product }: { product: IProduct }) => {
  const formatUnit = (unit: string) => {
    if (unit.toLowerCase() === "kg") return "কেজি";
    if (unit.toLowerCase() === "litre") return "লিটার";
    if (unit.toLowerCase() === "dozen") return "ডজন";
    if (unit.toLowerCase() === "piece") return "পিস";
    return unit;
  };

  function formatPrice(price: number): string {
  return `${toBengaliNumber(price.toLocaleString('bn-BD'))} টাকা`;
}

  const toBengaliNumber = (num: number | string): string => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .replace(/\d/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
  };

  const isUp = product?.change.dir === "up";
  const formattedPct = toBengaliNumber(Math.abs(product?.change.pct).toFixed(1));

  return (
    <div className="w-full max-w-sm bg-[#f8faf8] border border-gray-100 rounded-3xl p-5 shadow-sm">
      {/* Cooda Gubbaa: Fakkii/Emoji, Maqaa fi Safartuu */}
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-gray-100/80 flex items-center justify-center text-2xl shrink-0">
          🧅
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-bold text-gray-900 leading-tight">
            পেঁয়াজ
          </h3>
          <span className="text-xs text-gray-500 font-medium mt-0.5">
            প্রতি কেজি
          </span>
        </div>
      </div>

      {/* Cooda Jalaa: Gatiyoo Har'aa fi Badge Daballii Gatiyoo */}
      <div className="mt-6 flex items-end justify-between">
        <div>
          <span className="block text-[11px] text-gray-500 font-medium mb-0.5">
            আজকের দাম
          </span>
          <div className="text-xl font-extrabold text-gray-900">
            ৫৪ <span className="text-sm font-semibold">টাকা</span>
          </div>
        </div>

        {/* Badge Daballii Gatiyoo (Diimaa) */}
        <div className="flex items-center gap-1 bg-[#f3f6f3] text-[#d9383a] px-2.5 py-1 rounded-full text-xs font-bold">
          <FiTriangle className="w-2.5 h-2.5 fill-current" />
          <span>১২.৫%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
