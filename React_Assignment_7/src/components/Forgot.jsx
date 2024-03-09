import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SignUpImage from "../images/register.png";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "./userStore";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const users = useUserStore((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = users.find((user) => user.email === email);
    const editUrl = "/reset/user?email=" + email;

    if (user) {
      navigate(editUrl);
    } else {
      alert("Invalid email");
    }
  };

  return (
    <Box className="flex h-auto">
      <Box className="flex justify-center items-center h-auto w-[100%] md:w-[100%] ">
        <Paper className="h-auto my-5 lg:w-[30%] md:w-[30%] flex items-center w-full px-4 ">
          <form className="p-4 flex flex-col w-[100%]" onSubmit={handleSubmit}>
            {" "}
            <Box>
              <Typography
                variant="h6"
                className="flex justify-center h-auto w-auto "
              >
                Forgot Your Password ?{" "}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
                className="text-sm "
              >
                Enter Your Email Address
              </Box>
            </Box>
            <label
              htmlFor="email"
              style={{
                width: "100%",
              }}
              className="text-sm py-2 mt-3"
            >
              Email Address
            </label>
            <TextField
              fullWidth
              id="email"
              className="w-[90%] mx-0 my-1 md:w-[60%]"
              // sx={{ width: "60%" }}
              placeholder="Email ID"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              className="my-2 text-sm"
              style={{ backgroundColor: "#461b93" }}
              variant="contained"
            >
              Recover Password
            </Button>
            <Box className="self-center text-sm">
              {" "}
              Return to{" "}
              <a href="/login" className="text-violet-800">
                Login
              </a>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Forgot;
