import React from "react";
import Sidebar from "./Sidebar";
import UserMain from "./UserMain";
import { Box } from "@mui/material";

const UserOperations = () => {
  const myStyles = {
    fontFamily: "'Oswald', sans-serif",
  };

  return (
    <Box className="md:min-h-16 min-h-16 h-auto md:h-auto" style={myStyles}>
      <Box className="md:flex max-w-[100%] h-[100vh] border border-black-700 bg-gray-300 md:">
        <Sidebar />
        <UserMain />
      </Box>
    </Box>
  );
};

export default UserOperations;
