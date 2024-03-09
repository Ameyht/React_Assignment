import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SignUpImage from "../images/register.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserStore from "./userStore";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const users = useUserStore((state) => state.users);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const email = searchParams.get("email");
    setEmail(email);
    console.log("email:", email);
  }, [location.search]);

  const user = users.find((user) => user.email === email);
  const userEmail = user ? user.email : "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPassword(password);
      alert("password mismatched: ");
      return;
    } else {
      const editUrl =
        "/confirmreset/user?email=" + userEmail + "&password=" + password;
      navigate(editUrl);
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
                className="flex justify-center h-auto w-auto"
              >
                Reset Your Password ?{" "}
              </Typography>
            </Box>
            <label
              htmlFor="email"
              style={{
                width: "100%",
              }}
              className="text-sm py-2"
            >
              New Password
            </label>
            <TextField
              fullWidth
              id="New Password"
              className="w-[90%] mx-0 my-1 md:w-[60%]"
              // sx={{ width: "60%" }}
              placeholder="New Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              variant="outlined"
              required
            />
            <label
              htmlFor="email"
              style={{
                width: "100%",
              }}
              className="text-sm py-2"
            >
              Confirm Password
            </label>
            <TextField
              fullWidth
              id="Confirm Password"
              className="w-[90%] mx-0 my-1 md:w-[60%]"
              // sx={{ width: "60%" }}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmpassword"
              size="small"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              className="my-2 "
              style={{ backgroundColor: "#461b93" }}
              variant="contained"
            >
              Submit
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

export default Reset;
