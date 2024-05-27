import { FaBriefcase } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdSettingsPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 max-w-6xl mx-auto mb-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FaBriefcase className="h-6 w-6" />
          <span className="text-lg font-bold">Acme Accounting</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <MdSettingsPhone className="h-5 w-5" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="h-5 w-5" />
            <span>info@acmeaccounting.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
