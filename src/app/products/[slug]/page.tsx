import { IProduct } from "@/app/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiTriangle } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";

const formatUnit = (unit: string) => {
  if (unit?.toLowerCase() === "kg") return "কেজি";
  if (unit?.toLowerCase() === "litre") return "লিটার";
  if (unit?.toLowerCase() === "dozen") return "ডজন";
  if (unit?.toLowerCase() === "piece") return "পিস";
  return unit;
};
const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.API_BASE_URL}/products/${slug}`);
  const product: IProduct = await res.json();

  if (!product || !product.id) {
    notFound();
  }

  const isUp = product?.change?.dir === "up";
  if (!product) {
    return notFound();
  } else {
    return (
      <div className="min-h-screen bg-[#f1f4f0] p-4 sm:p-8 font-sans text-gray-800 flex flex-col items-center">
        <div className="w-full max-w-7xl space-y-6">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              হোম
            </Link>
            <span>&gt;</span>
            <Link
              href={`/products?category=${product?.category}`}
              className="hover:underline"
            >
              {product?.categoryNameBn}
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">{product?.nameBn}</span>
          </nav>

          <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left Side: Image, Title & Subtitles */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gray-100/80 flex items-center justify-center text-3xl shadow-inner border border-gray-200/50 shrink-0">
                {product?.image}
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 leading-tight">
                  {product?.nameBn}
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  প্রতি {formatUnit(product?.unit)} ㆍ {product?.categoryNameBn}
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  গতকালকের তুলনায় আজ দাম{" "}
                  <span className="font-bold text-gray-900">
                    {isUp ? (
                      <span>
                        বেড়েছে ㆍ
                        {(product?.today - product?.yesterday)?.toLocaleString(
                          "bn-BN",
                        )}
                        টাকা
                      </span>
                    ) : (
                      <div>
                        কমেছে{" "}
                        {(product?.yesterday - product?.today).toLocaleString(
                          "bn-BN",
                        )}
                        টাকা
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Today's Price Badge */}
            <div className="bg-[#edf3ed] rounded-xl p-4 text-center min-w-32 w-full md:w-auto">
              <span className="text-xs text-gray-500 block mb-0.5">
                আজকের দাম
              </span>
              <div className="text-2xl font-black text-gray-900 leading-tight">
                {product?.today?.toLocaleString("bn-BN")}
              </div>
              <span className="text-[11px] text-gray-500 block mt-0.5">
                টাকা / {formatUnit(product?.unit)}
              </span>
              <div className="flex items-center justify-center gap-1 text-xs font-bold text-red-500 mt-1">
                <span>
                  {isUp ? (
                    <div className="flex items-center gap-1 bg-[#f0f0f0] text-[#d9383a] px-2.5 py-1 rounded-full text-xs font-bold">
                      <FiTriangle className="w-2.5 h-2.5 fill-current" />
                      <span>
                        {product?.change.pct.toLocaleString("bn-BN")}%
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 bg-[#f0f0f0] text-success px-2.5 py-1 rounded-full text-xs font-bold">
                      <TbTriangleInverted className="w-2.5 h-2.5 fill-current" />
                      <span>
                        {product?.change?.pct?.toLocaleString("bn-BN")}%
                      </span>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Main Outer Card Container */}
          <div className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-6 shadow-sm space-y-8">
            {/* Section: Price Overview Cards */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-gray-900">
                দামের সারসংক্ষেপ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Lowest Price Card */}
                <div className="bg-white/60 border border-gray-100/80 rounded-xl p-4 space-y-2">
                  <span className="text-xs text-gray-500 block">
                    সর্বনিম্ন দাম
                  </span>
                  <div className="text-xl font-bold text-emerald-600">
                    {
                      <span className="font-bold text-3xl">
                        {Math?.min(
                          ...product?.markets?.map((m) => m.min),
                        ).toLocaleString("bn-BN")}
                        <span className="text-sm"> টাকা</span>
                      </span>
                    }
                  </div>
                  <span className="text-[11px] text-gray-400 block">
                    সবচেয়ে কম দামের বাজার
                  </span>
                </div>

                {/* Highest Price Card */}
                <div className="bg-white/60 border border-gray-100/80 rounded-xl p-4 space-y-2">
                  <span className="text-xs text-gray-500 block">
                    সর্বাধিক দাম
                  </span>
                  <div className="text-xl font-bold text-red-500">
                    {
                      <span className="font-bold text-3xl">
                        {Math.max(
                          ...product?.markets?.map((m) => m.max),
                        ).toLocaleString("bn-BN")}
                        <span className="text-sm"> টাকা</span>
                      </span>
                    }
                  </div>
                  <span className="text-[11px] text-gray-400 block">
                    সবচেয়ে বেশি দামের বাজার
                  </span>
                </div>

                {/* Average Price Card */}
                <div className="bg-white/60 border border-gray-100/80 rounded-xl p-4 space-y-2">
                  <span className="text-xs text-gray-500 block">গড় দাম</span>
                  <div className="text-xl font-bold text-emerald-700">
                    <span className="font-bold text-3xl">
                      {(
                        (Math.max(...product?.markets?.map((m) => m.max)) +
                          Math.min(...product?.markets?.map((m) => m.min))) /
                        2
                      ).toLocaleString("bn-BN")}
                      <span className="text-sm"> টাকা</span>
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 block">
                    প্রতি {formatUnit(product?.unit)}-এর হিসাবে
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Market-wise Today's Price Table */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900">
                বাজারভিত্তিক আজকের দাম
              </h2>

              <div className="overflow-x-auto border border-gray-300 rounded-2xl shadow-xl">
                <table className="w-full text-left text-xs border-collapse ">
                  <thead>
                    <tr className="border-b border-gray-200/80 text-gray-500 font-semibold">
                      <th className="py-3 px-4 font-semibold">বাজার</th>
                      <th className="py-3 px-4 font-semibold">বিভাগ</th>
                      <th className="py-3 px-4 font-semibold">সর্বনিম্ন</th>
                      <th className="py-3 px-4 font-semibold">সর্বাধিক</th>
                      <th className="py-3 px-4 font-semibold text-right">গড়</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100/80">
                    {product?.markets?.map((row, index) => {
                      const avg = Math.floor((row.min + row.max) / 2);
                      return (
                        <tr
                          key={index}
                          className="hover:bg-gray-100/50 transition-colors border-b-gray-600 "
                        >
                          <td className="py-3.5 px-4 font-bold text-gray-900">
                            {row.market}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {row.division}
                          </td>
                          <td className="py-3.5 px-4 text-gray-700">
                            {row.min.toLocaleString("bn-BN")} টাকা
                          </td>
                          <td className="py-3.5 px-4 text-gray-700">
                            {row.max.toLocaleString("bn-BN")} টাকা
                          </td>
                          <td className="py-3.5 px-4 font-bold text-gray-900 text-right">
                            {avg.toLocaleString("bn-BN")} টাকা
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetailPage;
