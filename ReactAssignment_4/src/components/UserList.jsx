import React from "react";
import useUserStore from "./userStore";

function UserList() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            UserId : {user.id}
            Name: {user.firstName} {user.lastName} - Email: {user.email}- Phone:{" "}
            {user.phone} -Role: {user.role} -Status: {user.status} -Password:{" "}
            {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
