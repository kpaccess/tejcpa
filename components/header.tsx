"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBriefcase } from "react-icons/fa";

const Header = () => {
  const path = usePathname();
  return (
    <header className="bg-gray-900 text-white px-4 py-8 lg:px-6 h-16 flex items-center justify-between max-w-6xl mx-auto pt-8 mt-8">
      <Link className="flex items-center gap-2" href="#">
        <FaBriefcase className="h-6 w-6" />
        <span className="text-lg font-bold">Acme Accounting</span>
      </Link>
      <nav className="hidden lg:flex gap-6 ">
        {/* Navbar menu */}
        <Link
          href="/"
          className={
            path === "/"
              ? " underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            path === "/about"
              ? " underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={
            path === "/services"
              ? " underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }
        >
          Services
        </Link>
        <button className="bg-teal-500 px-2 py-1 rounded-md ">
          <Link href="mailto:john@example.com">Contact us</Link>
        </button>
      </nav>
      <button className="hidden lg:inline-flex">Get a Quote</button>
    </header>
  );
};

export default Header;
