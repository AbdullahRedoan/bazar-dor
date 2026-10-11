import { IProduct } from "@/app/types/types";
import Link from "next/link";
import { FiTriangle } from "react-icons/fi";
import MarqueeText from "react-marquee-text";
// import "MarqueeText/styles.css"

const Marqee = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/products`);
  const data = await res.json();
  const products = data;

  const formatUnit = (unit: string) => {
    if (unit.toLowerCase() === "kg") return "কেজি";
    if (unit.toLowerCase() === "litre" || unit.toLowerCase() === "l")
      return "লিটার";
    return unit;
  };

  return (
    <div className="w-full bg-[#f6f8f6] border-y border-gray-200/60 py-1 px-4">
      <MarqueeText
        direction="right"
        duration={18}
        className="max-w-full mx-auto flex gap-5 items-center justify-start divide-x divide-gray-200 overflow-x-auto"
      >
        {products.map((product: IProduct) => {
          const isUp = product?.change.dir === "up";

          return (
            <Link key={product?.id} href={`/products/${product?.id}`}>
              <div className=" cursor-pointer flex items-center gap-2.5 px-6 whitespace-nowrap first:pl-0 last:pr-0 mx-5">
                {/* Category/Product Icon */}
                <div className="w-7 h-7 rounded-full bg-gray-200/70 flex items-center justify-center text-sm shrink-0 shadow-inner">
                  {product?.image || product?.categoryIcon}
                </div>

                {/* Title & Price */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800">
                  <span>{product?.nameBn}</span>
                  <span className="font-semibold text-gray-700">
                    {product?.today.toLocaleString("bn-BD")} টাকা/
                    {formatUnit(product?.unit)}
                  </span>
                </div>

                {/* Dynamic Percentage Badge (Up = Red, Down = Green) */}
                <div
                  className={`flex items-center gap-1 text-xs font-bold ${
                    isUp ? "text-red-500" : "text-emerald-600"
                  }`}
                >
                  <FiTriangle
                    className={`w-2.5 h-2.5 fill-current ${
                      isUp ? "rotate-0" : "rotate-180"
                    }`}
                  />
                  <span>{product?.change.pct.toLocaleString("bn-BD")}%</span>
                </div>
              </div>
            </Link>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marqee;
