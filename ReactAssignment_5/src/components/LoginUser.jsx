import React from "react";

const LoginUser = () => {
  return (
    <div className="flex justify-around w-40 h-11 items-center mr-2 py-0">
      <img
        src="../images/rowan.jpeg"
        className="w-9 h-9 rounded-[20%]"
        alt="..."
      />
      <div className="flex flex-col items-center h-10">
        <p className="h-5 mx-5px text-[15px]">Franklin jr</p>
        <p className="h-3 text-[11px]">Super Admin</p>
      </div>
      <div class="btngrp">
        <button
          class="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li>
            <a href="/home">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginUser;
