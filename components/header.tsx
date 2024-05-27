"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";

const Header = () => {
  const path = usePathname();
  return (
    <header className="  px-4 py-8 lg:px-6 h-16 flex items-center justify-between max-w-6xl mx-auto pt-8 mt-8">
      <Link className="flex items-center gap-2" href="#">
        <FaBriefcase className="h-6 w-6" />
        <span className="text-lg font-bold uppercase">
          Tej CPA professional corporation
        </span>
      </Link>

      <button className=" bg-green-600 text-white px-2 py-1 rounded-md">
        <p>416-694-8446</p>
        <p>tejcpainfo@gmail.com</p>
      </button>
    </header>
  );
};

export default Header;
