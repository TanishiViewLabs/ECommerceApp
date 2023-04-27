import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

function Gender() {
  const gender = ["Men", "Women", "Boys", "Girls"];
  return (
    <div>
      <FormControl className="my-3">
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="text-center text-dark"
        >
          GENDER
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
        >
          {gender.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item}
                control={<Radio />}
                label={item}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <hr />
    </div>
  );
}

export default Gender;
