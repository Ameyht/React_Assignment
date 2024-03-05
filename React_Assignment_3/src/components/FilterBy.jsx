import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function FilterBy({ users, updateSearch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    // const action = event.target.value;
    console.log("reached handleAction of Filterby with action ==" + action);
    if (action === "user") {
      const filteredUsers = users.filter((user) =>
        user.role.toLowerCase().includes(action)
      );
      console.log("filteredUsers by user : " + filteredUsers);
      // Call updateSearch function with filtered users
      updateSearch(filteredUsers);
      handleClose();
    } else if (action === "admin") {
      const filteredUsers = users.filter((user) =>
        user.role.toLowerCase().includes(action)
      );
      console.log("filteredUsers by admin : " + filteredUsers);
      // Call updateSearch function with filtered users
      updateSearch(filteredUsers);
    } else {
      const filteredUsers = users.filter((user) =>
        user.role.toLowerCase().includes(action)
      );
      console.log("filteredUsers by admin : " + filteredUsers);
      // Call updateSearch function with filtered users
      updateSearch(filteredUsers);
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
          fill="rgb(124, 17, 224)"
          class="bi bi-funnel-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
        </svg>
        <span className="hidden md:flex md:text-[14px]">Filter By</span>
      </button>
      <Menu
        id="basic-menu"
        // className="md:w-[500px]"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onChange={(event) => handleAction(event)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleAction("user")}>User</MenuItem>
        <MenuItem onClick={() => handleAction("admin")}>Admin</MenuItem>
        <MenuItem onClick={() => handleAction("agent")}>Agent</MenuItem>
      </Menu>
    </div>
  );
}
