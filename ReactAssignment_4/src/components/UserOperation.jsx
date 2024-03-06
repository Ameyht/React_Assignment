import React, { useEffect, useState } from "react";
import "./css/Users.css";
import RegisterForm from "./RegisterForm";
import UserList from "./UserList";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link, useLocation, useParams } from "react-router-dom";
import useUserStore from "./userStore";
import { Button } from "@mui/material";

const UserOperation = () => {
  const [id, setId] = useState();
  const { value } = useParams();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get("id");
    setId(Number(id));
    console.log("id:", id);
  }, [location.search]);
  const user = useUserStore((state) => state.getUserById(id));
  console.log("user value in addUserComponent:", JSON.stringify(user));

  return (
    <div>
      <div className="d-flex md:flex-row flex-col md:justify-between md:items-center h-[10%] md:h-[10%] mx-2 my-2 py-3">
        <div className="flex items-center left mx-3 h-[60%] w-[10%] bg-gray">
          <h1 className="text-[20px] font-bold">Users</h1>
        </div>
        <div className="mx-3 flex items-center  md:h-[90%] w-[13rem] bg-gray mr-3">
          {/*  */}
          <a href="/home">
            <HomeOutlinedIcon style={{ fontSize: 30, color: "purple" }} />
          </a>
          <div className="flex items-center md:h-[100%] w-[90%] ">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12.5 3.5-4 14"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Users
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12.5 3.5-4 14"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {value}
          </div>
          {/* Add user button */}
        </div>
      </div>

      <div className="userboard bg-white min-h-[30rem] h-auto md:min-h-[30rem] md:h-auto mx-4 md:mx-1 my-2 border border-black">
        <div className="md:flex my-2 mx-2 md:my-2 md:h-auto md:p-2 ">
          {user !== undefined ? (
            <RegisterForm mode="update" userData={user} />
          ) : (
            <RegisterForm mode="register" />
          )}
        </div>
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default UserOperation;
