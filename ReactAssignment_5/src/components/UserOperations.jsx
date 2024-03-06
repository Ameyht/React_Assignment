import React from "react";
import Sidebar from "./Sidebar";
import UserMain from "./UserMain";

const UserOperations = () => {
  const myStyles = {
    fontFamily: "'Oswald', sans-serif",
  };

  return (
    <div className="md:min-h-16 min-h-16 h-auto md:h-auto" style={myStyles}>
      <div className="md:flex max-w-[100%] h-[100vh] border border-black-700 bg-gray-300 md:">
        <Sidebar />
        <UserMain />
      </div>
    </div>
  );
};

export default UserOperations;
