import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import LoginUser from "./LoginUser";

const Header = () => {
  return (
    <div className="hidden md:flex justify-between  border border-black-700 h-12 mx-1 px-2 bg-white py-1 rounded-[10px] md:my-1">
      <div className="left border-0">
        <BiMenuAltLeft size={35} />
      </div>
      <div className="right border-0 mr-2 rounded-10">
        <LoginUser />
      </div>
    </div>
    // </div>
  );
};

export default Header;
