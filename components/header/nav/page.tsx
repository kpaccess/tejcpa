const Nav = () => {
  return (
    <div className="flex bg-white text-black h-20">
      <div className="flex justify-between items-center w-[90%] m-auto">
        <div>Logo</div>
        <nav>
          <ul className="flex items-center justify-around ">
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Services</li>
            <li className="mx-2">Portfolio</li>
            <li className="mx-2">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
