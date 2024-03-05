import React, { useEffect, useState } from "react";
import "./css/Users.css";
import { Link, useLocation, useParams } from "react-router-dom";
import useUserStore from "./userStore";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoardOperations = () => {
  const [id, setId] = useState();

  const user = useUserStore((state) => state.users);
  // Trim the status property and ensure lowercase comparison
  const activeUsers = user.filter(
    (v) => v.status.trim().toLowerCase() === "active"
  ).length;

  const inActiveUsers = user.filter(
    (v) => v.status.trim().toLowerCase() === "inactive"
  ).length;

  console.log("inActiveUsers " + inActiveUsers);
  const totalUsers = user.length;
  return (
    <div>
      {/* <div className="d-flex md:flex-row flex-col md:justify-between md:items-center h-[10%] md:h-[10%] mx-2 my-2 py-3">
        <div className="flex items-center left mx-3 border-0 border-black-300 h-[60%] w-[10%] bg-gray">
          <h1 className="text-[20px] font-bold">DashBoard</h1>
        </div>
      </div> */}
      <Box
        height={50}
        FullWidth
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        fontSize={23}
      >
        DashBoard
      </Box>

      {/* <div className="userboard bg-white min-h-[30rem] h-auto md:min-h-[30rem] md:h-auto mx-4 md:mx-1 my-2 border border-black">
        <div className="md:flex my-2 mx-2 md:my-2 md:h-auto md:p-2 "></div>
      </div> */}
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        pl={2}
        fontSize={23}
        className="border border-black h-auto w-auto"
      >
        <Stack
          FullWidth
          direction={{ xs: "column", sm: "row" }}
          //   spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item className="h-auto w-auto m-2 pt-3 ">
            <Stack
              direction={{ xs: "row", sm: "row" }}
              height={75}
              justifyContent="space-between"
            >
              <Stack
                direction={{ xs: "column", sm: "column" }}
                justifyContent="space-around"
                className=" px-2"
                align="start"
              >
                <Typography variant="h7" color="black" className="font-bold">
                  Total Users
                </Typography>
                <Typography variant="h6" color="black" className="font-bold">
                  {totalUsers}
                </Typography>
              </Stack>
              <Item
                className="m-3"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#FFE9D3",
                }}
              >
                {/* <PeopleAltRoundedIcon /> */}
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.3rem"
                  width="1.3rem"
                >
                  <path
                    fill="#FF7400"
                    d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM3.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zM12.5 10H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
                  />
                  <path
                    fill="#FF7400"
                    d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  />
                </svg>
              </Item>
            </Stack>
          </Item>
          <Item className="h-auto w-auto m-2 pt-3 ">
            <Stack
              direction={{ xs: "row", sm: "row" }}
              height={75}
              justifyContent="space-between"
            >
              <Stack
                direction={{ xs: "column", sm: "column" }}
                justifyContent="space-around"
                className=" px-2"
                align="start"
              >
                <Typography variant="h7" color="black" className="font-bold">
                  Active Users
                </Typography>
                <Typography variant="h6" color="black" className="font-bold">
                  {activeUsers}
                </Typography>
              </Stack>
              <Item
                className="m-3"
                style={{ borderRadius: "50%", backgroundColor: "#DBFFD9" }}
              >
                {/* <PeopleAltRoundedIcon /> */}
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.3rem"
                  width="1.3rem"
                >
                  <path
                    fill="#0FFF00"
                    d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM3.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zM12.5 10H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
                  />
                  <path
                    fill="#0FFF00"
                    d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  />
                </svg>
              </Item>
            </Stack>
          </Item>
          <Item className="h-auto w-auto m-2 pt-3 border border-red-700">
            <Stack
              direction={{ xs: "row", sm: "row" }}
              height={75}
              justifyContent="space-between"
            >
              <Stack
                direction={{ xs: "column", sm: "column" }}
                justifyContent="space-around"
                className=" px-2"
                align="start"
              >
                <Typography variant="h7" color="black" className="font-bold">
                  InActive Users
                </Typography>
                <Typography variant="h6" color="black" className="font-bold">
                  {inActiveUsers}
                </Typography>
              </Stack>
              <Item
                className="m-3 "
                style={{ borderRadius: "50%", backgroundColor: "#FFD7D7" }}
              >
                {/* <PeopleAltRoundedIcon /> */}
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.3rem"
                  width="1.3rem"
                >
                  <path
                    fill="red"
                    d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM3.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zM12.5 10H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
                  />
                  <path
                    fill="red"
                    d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  />
                </svg>
              </Item>
            </Stack>
          </Item>
        </Stack>
      </Box>
    </div>
  );
};

export default DashBoardOperations;
