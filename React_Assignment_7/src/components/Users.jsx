import React from "react";
import "./css/Users.css";
import { CgMenuGridO } from "react-icons/cg";

const Users = () => {
  return (
    <div className="d-flex justify-between items-center h-[5%] md:h-[7%] mx-2 my-2">
      <div className="flex items-center left mx-3 border-0 border-black-300 h-[60%] w-[10%] bg-gray">
        <h1 className="text-[20px] font-bold">Users</h1>
      </div>
      <div className="flex items-center border-0 border-black-300 md:h-[70%] w-[13rem] bg-gray mr-3">
        {/*  */}
        <div className="flex items-center md:h-[70%] w-[40%] ">
          <button
            className="xe"
            // style={{ backgroundColor: "white" }}
            // onMouseOver={(e) => (e.target.style.backgroundColor = "purple")}
            // onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
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
          <button className="xe">
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
        </div>
        {/* Add user button */}
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
      </div>
    </div>
  );
};

export default Users;
