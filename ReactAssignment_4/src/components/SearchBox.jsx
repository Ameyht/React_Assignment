import React from "react";
import useUserStore from "./userStore";

const SearchBox = () => {
  return (
    <div className="flex justify-between items-center mx-2 p-1 bg-gray-200 border rounded-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="blueviolet"
        className="bi bi-search"
        viewBox="0 0 16 16"
        alt="search"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
      {/* <span> */}
      <input
        type="text"
        className="hidden md:flex h-5 mx-2 w-40 bg-gray-200 "
        placeholder="Search here..."
        alt="search"
      />
      {/* </span> */}
    </div>
    // </div>
  );
};

export default SearchBox;
