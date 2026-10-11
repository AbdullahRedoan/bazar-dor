import Image from "next/image";
import bannerImg from '@/../public/bazar-hero.png';
import Link from "next/link";

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
            <Link
            href='#products'
            ><button className=" cursor-pointer bg-[#008a45] hover:bg-[#00783c] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors">
              সব পণ্য দেখুন
            </button></Link>
          </div>
        </div>

        <div className="w-48 sm:w-60 shrink-0 flex justify-center items-center">
          <Image
            width={300}
            height={300}
            src = {bannerImg}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
