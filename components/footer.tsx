import { FaBriefcase } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdSettingsPhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 max-w-6xl mx-auto mb-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FaBriefcase className="h-6 w-6" />
          <span className="text-lg font-bold uppercase">
            TEJ CPA PROFESSIONAL CORPORATION
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <MdSettingsPhone className="h-5 w-5" />
            <span>(416)694-8446</span>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="h-5 w-5" />
            <Link href="mailto:tejcpainfo@gmail.com">tejcpainfo@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
