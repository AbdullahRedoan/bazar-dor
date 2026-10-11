import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12 bg-slate-50">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm max-w-md w-full space-y-6">
        
        {/* Animated / Friendly Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="w-28 h-28 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-6xl shadow-inner border border-emerald-100">
            🔍
          </div>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white font-extrabold text-xs px-2.5 py-1 rounded-full shadow">
            404 Error
          </span>
        </div>

        {/* Header & Description */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            পৃষ্ঠাটি পাওয়া যায়নি!
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            আপনি যে পেজ বা পণ্যটি খুঁজছেন তা বাজারে বিদ্যমান নেই, সরিয়ে ফেলা হয়েছে অথবা লিংকটি ভুল।
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="cursor-pointer inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#008744] hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition duration-200"
          >
            <span>🏠</span>
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>

      </div>
    </div>
  );
}