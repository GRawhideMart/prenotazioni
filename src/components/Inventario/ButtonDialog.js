import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddCircle, Close, DeleteForeverSharp, Edit } from "@material-ui/icons";
import React, { useState, Fragment, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../rtk/slices/inventary.slice";
import { useCustomStyles } from "../../shared/useStyles";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ButtonDialog = ({ type, rowId, description }) => {
  const dispatch = useDispatch();
  const classes = useCustomStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    alert(`This will delete the item with ID ${id} from the database`);
    dispatch(deleteItem(Number(id)));
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
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.dialogAppBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6" className={classes.dialogTitle}>
                {type === "add"
                  ? "Aggiungi Elemento"
                  : `Modifica Elemento - ${description}`}
              </Typography>
            </Toolbar>
          </AppBar>
          {type === "add" && <AddItemForm />}
          {type === "edit" && <EditItemForm rowId={rowId} />}
        </Dialog>
      ) : null}
    </Fragment>
  );
};

export default ButtonDialog;
