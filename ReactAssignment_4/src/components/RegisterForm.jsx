import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Grid, TextField, Button, Select, MenuItem } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "./userStore";
import { useNavigate } from "react-router-dom";

function RegisterForm({ mode, userData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const addUser = useUserStore((state) => state.addUser);
  const updateUser = useUserStore((state) => state.updateUser);

  const handleRegister = (userData) => {
    addUser(userData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      status: "",
      password: "",
      confirmPassword: "",
    });

    toast.success("User registered successfully!", {
      position: "top-right",
    });
  };

  const handleUpdate = (updatedData) => {
    updateUser(updatedData.id, updatedData);
    toast.success("User Updated successfully!", {
      position: "top-right",
      theme: "colored",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      status: formData.status,
      password: formData.password,
    };

    if (mode === "register") {
      // Handle registration logic
      handleRegister(user);
    } else if (mode === "update") {
      // Handle update logic
      const { confirmPassword, password, ...updatedData } = formData;
      handleUpdate(updatedData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        height: "50%",
        padding: "5px",
      }}
    >
      <ToastContainer />

      <Grid container spacing={1}>
        <Grid item xs={12} className="md:h-[40px]">
          <label
            htmlFor="first_name"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            First Name
          </label>

          <TextField
            id="first_name"
            className="w-[90%] mx-0  md:w-[60%]"
            // sx={{ width: "60%" }}
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            size="small"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="last_name"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Last Name
          </label>
          <TextField
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            id="last_name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            variant="outlined"
            size="small"
            required
          />
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="email"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Email
          </label>
          <TextField
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%", alignSelf: "center" }}
            size="small"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="phone"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Phone
          </label>
          <TextField
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            size="small"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="role"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Role
          </label>
          <Select
            id="role"
            name="role"
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            size="small"
            placeholder="Select Status"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <MenuItem value="empty" disabled>
              Select Role
            </MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Agent">Agent</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="status"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Status
          </label>
          <Select
            id="status"
            name="status"
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            size="small"
            placeholder="Select Status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} className="md:h-[50px]">
          <label
            htmlFor="password"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Password
          </label>
          <TextField
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            size="small"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            type="password"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <label
            htmlFor="confirm_password"
            style={{ width: "5rem", marginRight: "10%", paddingTop: "10px" }}
          >
            Confirm Password
          </label>
          <TextField
            className="w-[90%] mx-0 mt-2 md:w-[60%]"
            // sx={{ width: "60%" }}
            size="small"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            id="confirm_password"
            type="password"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary">
            Save
          </Button>
        </Grid>
        {/* </form> */}
      </Grid>
    </form>
  );
}

export default RegisterForm;
