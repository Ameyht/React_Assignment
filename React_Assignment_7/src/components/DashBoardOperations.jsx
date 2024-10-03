import React, { useState } from "react";
import "./css/Users.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useUserStore from "./userStore";
import {
  Box,
  Paper,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const getMuiTheme = createTheme({
  components: {
    MuiBarElement: {
      styleOverrides: {
        root: {
          fill: "blueviolet",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "150px",
          minWidth: "10px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "6px 4px !important",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          top: "-9px !important",
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          overflow: "visible !important",
        },
      },
    },
  },
});

const DashBoardOperations = () => {
  const user = useUserStore((state) => state.users);
  const activeUsers = user.filter(
    (v) => v.status.trim().toLowerCase() === "active"
  ).length;

  const inActiveUsers = user.filter(
    (v) => v.status.trim().toLowerCase() === "inactive"
  ).length;

  console.log("inActiveUsers " + inActiveUsers);
  const totalUsers = user.length;
  return (
    <ThemeProvider theme={getMuiTheme}>
      <Box>
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
          alignItems="center"
          gap={4}
          pl={2}
          fontSize={23}
          className=" h-auto w-auto"
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

          {/* Bar chart Box */}
          <Box className="hidden md:flex">
            <Stack
              FullWidth
              direction={{ xs: "column", sm: "row" }}
              className="mt-3 "
            >
              <Item className="h-auto w-auto m-2 pt-3 ">
                <Stack
                  FullWidth
                  display="flex"
                  direction={{ xs: "row", sm: "row" }}
                  justifyContent="space-between"
                  className=" px-2"
                  align="center"
                >
                  <Typography variant="h7" color="black" className="font-bold">
                    Total Active Users
                  </Typography>
                  <LocalizationProvider
                    overflow="visible !important"
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Select Date"
                        sx={{
                          width: "160px",
                          minWidth: "unset !important",
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>

                {/* <Box> */}
                <BarChart
                  series={[
                    {
                      data: [
                        2335, 3234, 4544, 6524, 3234, 4850, 4334, 5560, 10020,
                        1020, 8909, 2102,
                      ],
                    },
                  ]}
                  height={300}
                  width={600}
                  xAxis={[
                    {
                      data: [
                        "mar23",
                        "Apr23",
                        "May23",
                        "Jun23",
                        "Jul23",
                        "Aug23",
                        "Sep23",
                        "Oct23",
                        "Nov23",
                        "Dec23",
                        "Jan24",
                        "Feb23",
                      ],
                      scaleType: "band",
                    },
                  ]}
                />
                {/* </Box> */}
              </Item>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashBoardOperations;
