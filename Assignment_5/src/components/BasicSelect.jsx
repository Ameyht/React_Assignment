import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [action, setAction] = React.useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <Box sx={{ width: 120, height: 20 }}>
      <FormControl sx={{ width: 80, height: 5 }}>
        <InputLabel id="demo-simple-select-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ height: 40, marginTop: 0 }}
          value={action}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Submit"}>Submit</MenuItem>
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
