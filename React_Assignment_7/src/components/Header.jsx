import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import LoginUser from "./LoginUser";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box className="hidden md:flex justify-between  border border-black-700 h-12 mx-1 px-2 bg-white py-1 rounded-[10px] md:my-1">
      <Box className="left border-0">
        <BiMenuAltLeft size={35} />
      </Box>
      <Box className="right border-0 mr-2 rounded-10">
        <LoginUser />
      </Box>
    </Box>
    // </div>
  );
};

export default Header;
