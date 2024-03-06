import { Box, Button } from "@mui/material";
import React from "react";

const LoginUser = () => {
  return (
    <Box className="flex justify-around w-40 h-11 items-center mr-2 py-0">
      <img
        src="../images/rowan.jpeg"
        className="w-9 h-9 rounded-[20%]"
        alt="..."
      />
      <Box className="flex flex-col items-center h-10">
        <p className="h-5 mx-5px text-[15px]">Franklin jr</p>
        <p className="h-3 text-[11px]">Super Admin</p>
      </Box>
      <Box class="btngrp">
        <Button
          class="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></Button>
        <ul class="dropdown-menu">
          <li>
            <a href="/home">Home</a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default LoginUser;
