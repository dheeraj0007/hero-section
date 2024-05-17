const Navbar = () => {
  return (
    <div className="py-4 px-10 flex justify-between bg-white">
      <h1 className="text-4xl font-semibold pl-5">contiant</h1>
      <ul className="hidden md:flex space-x-10 items-center ">
        <li className="text-gray-500 hover:border-b-2 hover:border-[#8247ff] transform transition-all cursor-pointer">
          Product
        </li>
        <li className="text-gray-500 hover:border-b-2 hover:border-[#8247ff] transform transition-all cursor-pointer">
          Developers
        </li>
        <li className="cursor-pointer text-white bg-[#1f1f1f] py-3 px-4 rounded-full ">
          Log in
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
