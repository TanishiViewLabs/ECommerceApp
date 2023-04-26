import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { FormGroup, FormLabel } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

function Pricerange() {
  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <FormGroup className="my-3">
      <FormLabel
        id="demo-radio-buttons-group-label"
        className="text-center text-dark"
      >
        PRICE
      </FormLabel>
      <Box sx={{ width: 200 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </FormGroup>
  );
}

export default Pricerange;
