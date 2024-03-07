import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SortBy({ users, updateSearch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    if (action === "AtoZ") {
      const filteredUsers = users.slice().sort((a, b) => {
        // Convert both first names to lowercase for case-insensitive sorting
        const firstNameA = a.firstName.toLowerCase();
        const firstNameB = b.firstName.toLowerCase();

        if (firstNameA < firstNameB) {
          return -1; // If firstNameA should appear before firstNameB, return -1
        }
        if (firstNameA > firstNameB) {
          return 1; // If firstNameA should appear after firstNameB, return 1
        }
        return 0; // If firstNameA and firstNameB are equal, return 0
      });

      updateSearch(filteredUsers);
      handleClose();
    } else if ((action = "ZtoA")) {
      const filteredUsers = users.slice().sort((a, b) => {
        const firstnameA = a.firstName.toLowerCase();
        const firstnameB = b.firstName.toLowerCase();

        if (firstnameA > firstnameB) {
          return -1;
        }
        if (firstnameA < firstnameB) {
          return 1;
        }
        return 0;
      });

      updateSearch(filteredUsers);
      handleClose();
    }
  };

  return (
    <div>
      <button
        className="flex items-center bg-gray-200 border border-gray rounded-1 h-7 mr-3 p-2"
        type="button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="blueviolet"
          class="bi bi-sort-up"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
        </svg>
        <h1 className="hidden md:flex md:text-[14px]">Sort By</h1>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleAction("lastupdated")}>
          Last Updates
        </MenuItem>
        <MenuItem onClick={() => handleAction("createdDate")}>
          Created Date
        </MenuItem>
        <MenuItem onClick={() => handleAction("AtoZ")}>A to Z</MenuItem>
        <MenuItem onClick={() => handleAction("ZtoA")}>Z to A</MenuItem>
      </Menu>
    </div>
  );
}
