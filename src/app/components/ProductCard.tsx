import React from "react";
import { IProduct } from "../types/types";
import { FiTriangle } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  const formatUnit = (unit: string) => {
    if (unit.toLowerCase() === "kg") return "কেজি";
    if (unit.toLowerCase() === "litre") return "লিটার";
    if (unit.toLowerCase() === "dozen") return "ডজন";
    if (unit.toLowerCase() === "piece") return "পিস";
    return unit;
  };

  const isUp = product?.change.dir === "up";

  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-full max-w-sm bg-[#f8faf8] border border-gray-100 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gray-100/80 flex items-center justify-center text-2xl shrink-0">
            {product?.image}
          </div>

          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-900 leading-tight">
              {product.nameBn}
            </h3>
            <span className="text-xs text-gray-500 font-medium mt-0.5">
              প্রতি {formatUnit(product.unit)}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="block text-[11px] text-gray-500 font-medium mb-0.5">
              আজকের দাম
            </span>
            <div className="text-xl font-extrabold text-gray-900">
              {product.today.toLocaleString("bn-BN")}{" "}
              <span className="text-sm font-semibold">টাকা</span>
            </div>
          </div>

          {isUp ? (
            <div className="flex items-center gap-1 bg-[#f0f0f0] text-[#d9383a] px-2.5 py-1 rounded-full text-xs font-bold">
              <FiTriangle className="w-2.5 h-2.5 fill-current" />
              <span>{product?.change.pct.toLocaleString("bn-BN")}%</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-[#f0f0f0] text-success px-2.5 py-1 rounded-full text-xs font-bold">
              <TbTriangleInverted className="w-2.5 h-2.5 fill-current" />
              <span>{product?.change.pct.toLocaleString("bn-BN")}%</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
