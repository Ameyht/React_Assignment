import React from "react";
import Header from "./Header";

import UserWidgetComponent from "./UserWidgetComponent";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box className="md:min-h-16 min-h-16 h-auto md:h-auto w-[100%] border border-blue-300 bg-gray-100 md:w-[84%]">
      <Header />
      <UserWidgetComponent />
    </Box>
  );
};

export default Main;
