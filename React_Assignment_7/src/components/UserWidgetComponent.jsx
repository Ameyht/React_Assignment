import React from "react";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";
import "./css/Users.css";
import WidgetFoot from "./WidgetFoot";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import DataTable from "./DataTable";
import useUserStore from "./userStore";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import { Box } from "@mui/material";

const UserWidgetComponent = () => {
  // user data
  const [isCard, setIsCard] = useState(false);
  const handleClickTrue = () => {
    // Update the state to true
    setIsCard(true);
  };
  const handleClickFalse = () => {
    // Update the state to true
    setIsCard(false);
  };

  const [user, setUser] = useState();
  const users = useUserStore((state) => state.users);

  const updateSearch = (filteredUsers) => {
    console.log(
      "filteredUsers",
      JSON.stringify(filteredUsers),
      " type of filtered data=>" + typeof filteredUsers
    );
    setUser(filteredUsers);
    console.log(
      "updateSearch user state in userWidget=>" + JSON.stringify(user)
    );
  };

  return (
    <Box>
      <Box className="d-flex justify-between items-center h-[5%] md:h-[7%] mx-2 my-2">
        <Box className="flex items-center left mx-3 border-0 border-black-300 h-[60%] w-[10%] bg-gray">
          <h1 className="text-[20px] font-bold">Users</h1>
        </Box>
        <Box className="flex items-center border-0 border-black-300 md:h-[70%] w-[13rem] bg-gray mr-3">
          {/*  */}
          <Box className="flex items-center md:h-[70%] w-[40%] ">
            <button className="xe" onClick={handleClickTrue}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list-task"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                />
              </svg>
            </button>
            <button className="xe" onClick={handleClickFalse}>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg> */}
              <CgMenuGridO className="h-[1.5rem] w-[1.5rem]" />
            </button>
          </Box>
          {/* Add user button */}
          <Link to="/adduser/Add%20User">
            <button className="flex justify-center items-center border border-purple rounded-2 h-[2.3rem] p-2 bg-purple-700 text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Add User
            </button>
          </Link>
        </Box>
      </Box>
      {isCard ? (
        <Box className="userboard flex flex-col bg-white min-h-16 h-auto md:min-h-[30rem] md:h-auto mx-2 md:mx-4">
          <Box className="left flex justify-between h-14 ">
            <Box className="px-3 col-3 h-[100%] flex items-center text-nowrap">
              <SortBy users={users} updateSearch={updateSearch} />
              <FilterBy users={users} updateSearch={updateSearch} />
            </Box>
            <Box className="col-6 flex justify-end items-center">
              <SearchBox users={users} updateSearch={updateSearch} />
            </Box>
          </Box>
          {/* The main User rendering Logic*/}
          {/* min-h-16 h-auto md:min-h-16 md:h-auto */}
          <Box className="flex-col flex-wrap gap-0 bg-white mx-4 md:flex lg:flex-row ">
            {user
              ? user.map((user, index) => (
                  <Box
                    className=" md:col-md-2 md:h-[6rem] flex-wrap"
                    key={index}
                  >
                    <UserCard {...user} />
                  </Box>
                ))
              : users.map((user, index) => (
                  <Box
                    className=" md:col-md-2 md:h-[6rem] flex-wrap"
                    key={index}
                  >
                    <UserCard {...user} />
                  </Box>
                ))}
          </Box>
          <Box className="flex justify-end bottom-0 border-0  mt-auto">
            <WidgetFoot />
          </Box>
        </Box>
      ) : (
        <Box className="userboard flex flex-col bg-white min-h-16 h-auto md:min-h-[30rem] md:h-auto mx-2 md:mx-4">
          <Box className="left flex justify-between h-14 ">
            <Box className="px-3 col-3 h-[100%] flex items-center text-nowrap">
              <SortBy users={users} updateSearch={updateSearch} />
              <FilterBy users={users} updateSearch={updateSearch} />
            </Box>
            <Box className="col-6 flex justify-end items-center">
              <SearchBox users={users} updateSearch={updateSearch} />
            </Box>
          </Box>
          {/* The main User rendering Logic*/}
          {/* min-h-16 h-auto md:min-h-16 md:h-auto */}
          <DataTable user={user} />
        </Box>
      )}
    </Box>
  );
};

export default UserWidgetComponent;
