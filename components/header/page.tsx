import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Nav from "./nav/page";
const Header = () => {
  return (
    <>
      <div className="m-auto bg-[#3a526a] text-white mt-8 items-center leading-8">
        <div className="flex justify-between align-middle w-[90%] m-auto ">
          <div className="flex justify-between">
            <div className="flex items-center">
              <AiOutlinePhone />{" "}
              <span className="ml-3">call us 999-999-9999</span>
            </div>
            <div className="flex items-center ml-8">
              <AiOutlineMail />{" "}
              <span className="ml-3">Email: support@gmail.com</span>
            </div>
          </div>

          <div>
            Have any question{" "}
            <button className="uppercase ml-12 bg-green-500 text-white px-4">
              get an appointment
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Header;
