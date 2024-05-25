const Header = () => {
  return (
    <div className="m-auto h-8 bg-[#3a526a] text-white mt-8 items-center leading-8">
      <div className="flex justify-between align-middle w-[90%] m-auto ">
        <div className="flex justify-between">
          <div>call us 999-999-9999</div>
          <div className="ml-8">Email: support@gmail.com</div>
        </div>

        <div>
          Have any question{" "}
          <button className="uppercase ml-12 bg-green-500 text-white px-4">
            get an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
