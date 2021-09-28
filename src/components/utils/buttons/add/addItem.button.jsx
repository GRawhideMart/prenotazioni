import Button from "@material-ui/core/Button";
import AddCircle from "@material-ui/icons/AddCircleSharp";
import { useCustomStyles } from "../../../../shared/useStyles";

import React from "react";

const AddButton = ({ handleClickOpen }) => {
  const classes = useCustomStyles();

  return (
    <Button
      endIcon={<AddCircle />}
      variant="contained"
      color="success"
      fullWidth
      className={classes.inventaryAddButton}
      onClick={handleClickOpen}
    >
      Aggiungi
    </Button>
  );
};

export default AddButton;
