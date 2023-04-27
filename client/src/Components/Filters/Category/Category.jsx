import React from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormLabel } from "@mui/material";
function Category() {
  const categories = ["T-shirt", "Shirt", "Jeans"];

  return (
    <div>
      <FormGroup className="my-3">
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="text-center text-dark"
        >
          CATEGORY
        </FormLabel>
        {categories.map((item, index) => {
          return (
            <FormControlLabel key={index} control={<Checkbox />} label={item} />
          );
        })}
      </FormGroup>
      <hr />
    </div>
  );
}

export default Category;
