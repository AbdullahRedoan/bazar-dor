import { FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
    return (
        <header className="w-full bg-[#f6f8f6] border-b border-gray-200/60 py-3.5 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo Section */}
        <div className="flex items-center gap-3">
          {/* Green Shopping Cart Icon Box */}
          <div className="w-11 h-11 bg-[#008a45] rounded-2xl flex items-center justify-center text-white shadow-sm">
            <FiShoppingCart className="w-5 h-5 text-white" />
          </div>

          {/* Title and Date */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
              বাজার দর
            </span>
            <span className="text-xs text-gray-500 font-normal">
              মঙ্গলবার, ৬ অক্টোবর, ২০২৬
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <button className="text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors px-2 py-1">
            সাইন ইন
          </button>

          {/* Sign Up Button */}
          <button className="bg-[#008a45] hover:bg-[#00783c] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-md transition-all">
            সাইন আপ
          </button>
        </div>

      </div>
    </header>
    );
};

export default Navbar;