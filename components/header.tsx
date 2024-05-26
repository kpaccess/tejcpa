import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto border-2 border-red-500 ">
      <div className="flex gap-4">logo</div>
      <nav className="flex gap-4 items-center">
        {/* Navbar menu */}
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <button className="bg-teal-500 p-2 rounded-md ">Contact us</button>
      </nav>
    </div>
  );
};

export default Header;
