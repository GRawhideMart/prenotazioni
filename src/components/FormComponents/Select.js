import React, { useState } from "react";
import { Select as MaterialSelect, FormControl, InputLabel, makeStyles } from '@material-ui/core'

const options = ["Esterna", "Personale"];
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      }
}))

const Select = () => {
  const [optionName, setOptionName] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setOptionName(value);
  };
  const classes = useStyles();
  return (
    <FormControl row className={classes.formControl}>
      <InputLabel shrink htmlFor="reason-options" color='secondary'>
        Motivo
      </InputLabel>
      <MaterialSelect
        multiple
        native
        value={optionName}
        onChange={handleChangeMultiple}
        inputProps={{
          id: "reason-options",
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select