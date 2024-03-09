import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import multikart from "../images/multikart.png";
import { useLocation, useNavigate } from "react-router-dom";
import useUserStore from "./userStore";
import "react-toastify/dist/ReactToastify.css";

const ConfirmReset = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useUserStore((state) => state.users);
  const updateUser = useUserStore((state) => state.updateUser);
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const email = searchParams.get("email");
    const password = searchParams.get("password");
    setEmail(email);
    setPassword(password);
    console.log("email:", email + " password:", password);
  }, [location.search]);

  const user = users.find((user) => user.email === email);
  const id = user ? Number(user.id) : "";
  const handleReset = () => {
    if (!user) return; // If user not found, exit
    const updatedPassword = password;
    updateUser(user.id, { password: updatedPassword });
    toast.success("Password Updated successfully!", {
      position: "top-right",
    });

    setTimeout(() => {
      navigate("/registered");
    }, 5000);
  };

  return (
    <Box
      FullWidth
      style={{ height: "100vh" }}
      className="bg-gray-100 flex justify-center items-center"
    >
      <ToastContainer />
      <Box className="h-auto w-[40%] bg-white">
        <img src={multikart} alt=""></img>
        <Box>
          <Paper
            className="p-3"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography className="my-2">
              {" "}
              Hello {user ? user.firstName : "UserName"},
            </Typography>
            <div className="font-bold my-2 text-sm">
              A request has been received to change Password for your MultiKart
              account
            </div>
            <Box className="w-full flex justify-center ">
              <Button
                // href="/registered"
                onClick={handleReset}
                className="my-2 px-2"
                style={{ backgroundColor: "#461b93" }}
                variant="contained"
              >
                Reset Password
              </Button>
            </Box>
            <Box className="my-3">
              {" "}
              If you did not forgot password you can safely ignore this email
            </Box>
            <Box className="my-2 small-font">
              {" "}
              Thank You,
              <br />
              Multikart Team
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmReset;
