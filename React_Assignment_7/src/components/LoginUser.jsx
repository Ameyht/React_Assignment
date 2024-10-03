import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserStore from "./userStore";

const LoginUser = () => {
  const [id, setId] = useState();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get("id");
    setId(Number(id));
    console.log("id:", id);
  }, [location.search]);

  const user = useUserStore((state) => state.getUserById(id));
  console.log("user after login =>", user);
  const firstName = user ? user.firstName : "";
  const lastName = user ? user.lastName : "";
  const role = user ? user.role : "";

  const imageName = firstName.toLowerCase().replace(/\s/g, "") + ".jpeg";
  const imagePath = `../images/${imageName}`;

  return (
    <Box className="flex justify-around w-40 h-11 items-center mr-2 py-0">
      <img src={imagePath} className="w-9 h-9 rounded-[20%]" alt="..." />
      <Box className="flex flex-col items-center h-10">
        <p className="h-5 mx-5px text-[15px]">
          {firstName} {lastName}
        </p>
        <p className="h-3 text-[11px]">{role}</p>
      </Box>
      <Box class="btngrp">
        <Button
          class="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></Button>
        <ul class="dropdown-menu">
          <li className="w-auto">
            <a href="/signup" className="pl-12">
              SignUp
            </a>
          </li>
          <li>
            <a className="pl-12" href="/login">
              SignIn
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default LoginUser;
