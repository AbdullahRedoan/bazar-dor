import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import UserInfo from "./UserInfo";
const Navbar = () => {

  const date = new Date().toLocaleDateString('bn-BN', { dateStyle: 'full' })

  return (
    <header className="w-full bg-[#f6f8f6] border-b border-gray-200/60 py-3.5 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={'/'}>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#008a45] rounded-2xl flex items-center justify-center text-white shadow-sm">
            <FiShoppingCart className="w-5 h-5 text-white" />
          </div>

          {/* Title and Date */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
              বাজার দর
            </span>
            <span className="text-xs text-gray-500 font-normal">
              {date}
            </span>
          </div>
        </div>
        </Link>
      <UserInfo></UserInfo>
      </div>
      <div></div>
    </header>
  );
};

export default Navbar;
