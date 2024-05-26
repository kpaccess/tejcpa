"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto py-8 text-white">
      <div className="flex gap-4 ">logo</div>
      <nav className="flex gap-4 items-center ">
        {/* Navbar menu */}
        <Link href="/">Home</Link>
        <Link
          href="/about"
          className={path === "/about" ? " bg-red-500 p-2" : ""}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={path === "/services" ? " bg-red-500 p-2" : ""}
        >
          Services
        </Link>
        <button className="bg-teal-500 px-2 py-1 rounded-md ">
          <Link href="mailto:john@example.com">Contact us</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
