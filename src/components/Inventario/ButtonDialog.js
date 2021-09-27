import { Button, IconButton } from "@material-ui/core";
import { AddCircle, DeleteForeverSharp, Edit } from "@material-ui/icons";
import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../rtk/slices/inventary.slice";
import { useCustomStyles } from "../../shared/useStyles";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

import Dialog from "../utils/dialog";

const ButtonDialog = ({ type, rowId, description }) => {
  const dispatch = useDispatch();
  const classes = useCustomStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = (id) => {
    alert(`This will delete the item with ID ${id} from the database`);
    dispatch(removeItem(id));
  };

  return (
    <Fragment>
      {type === "add" ? (
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
      ) : (
        <IconButton
          aria-label={type === "edit" ? "edit" : "delete"}
          className={
            type === "edit"
              ? classes.inventaryEditButton
              : classes.inventaryDeleteButton
          }
          onClick={
            type === "edit" ? handleClickOpen : () => handleDelete(rowId)
          }
        >
          {type === "edit" ? <Edit /> : <DeleteForeverSharp />}
        </IconButton>
      )}

      {type === "add" || type === "edit" ? (
        <Dialog
          open={open}
          setOpen={setOpen}
          title={
            type === "add"
              ? "Aggiungi Elemento"
              : `Modifica Elemento - ${description}`
          }
        >
          {type === "add" && <AddItemForm />}
          {type === "edit" && <EditItemForm rowId={rowId} />}
        </Dialog>
      ) : null}
    </Fragment>
  );
};

export default ButtonDialog;
