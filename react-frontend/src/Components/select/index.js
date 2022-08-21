import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./index.css";

const SelectDrop = (props) => {
  return (
    <div className="selectdrop-container">
      <FormControl fullWidth>
        <InputLabel id={props.title}>
          <span className="input-span">{props.title}</span>
        </InputLabel>
        <Select
          className="select-container"
          labelId={props.title}
          id={props.title}
          value={props.value ? props.value : ""}
          label={props.title}
          onChange={(e) => props.onItemClick(e)}
        >
          {props.items.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDrop;
