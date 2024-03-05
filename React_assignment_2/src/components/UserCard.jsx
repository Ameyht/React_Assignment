import React from "react";

const UserCard = ({ firstName, lastName, email, image, status }) => {
  const name = firstName + " " + lastName;
  return (
    <div className="flex justify-around items-center overflow-hidden w-[19rem] md:w-[18rem] rounded-2 border border-gray bg-gray-100 p-1 h-[4.8rem] mx-3 my-3">
      {/* <div className="h-[100%] w-[100px]"> */}
      <img src={image} className="w-14 h-14 rounded-full" alt="..." />
      {/* </div> */}

      <div className="flex flex-col justify-center p-1">
        <b className="text-[15px]">{name}</b>
        <p className="text-[13px]">{email}</p>

        {status === "Active" ? (
          <p className="flex items-start">
            <svg width="22" height="22">
              <circle
                cx="8"
                cy="10"
                r="7"
                fill="green"
                stroke=""
                strokeWidth="3"
              />
            </svg>
            <b className="text-[13px]">{status}</b>
          </p>
        ) : (
          <p className="flex items-start">
            <svg width="22" height="22">
              <circle
                cx="8"
                cy="10"
                r="7"
                fill="orange"
                stroke=""
                strokeWidth="3"
              />
            </svg>
            <b className="text-[13px]">{status}</b>
          </p>
        )}
      </div>
      <div className="flex items-start h-[100%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
    </div>
  );
};

export default UserCard;
