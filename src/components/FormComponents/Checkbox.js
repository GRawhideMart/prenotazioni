import React, { useState } from "react";
import {
  Checkbox as MaterialCheckbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

const Checkbox = (props) => {
  const [checked, setChecked] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setChecked({ [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <MaterialCheckbox
            checked={checked.checked}
            onChange={handleChange}
            name="checked"
            color='primary'
          />
        }
        label="Ho capito"
      />
    </FormGroup>
  );
};

export default Checkbox;
