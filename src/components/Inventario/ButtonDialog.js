import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AddCircle,
  Close,
  DeleteForeverSharp,
  EditSharp,
} from "@material-ui/icons";
import React, { useState, Fragment, forwardRef } from "react";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ButtonDialog = ({ style, type, rowId }) => {
  const classes = style();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    alert(`This will delete the item with ID ${id} from the database`);
  };

  return (
    <Fragment>
      <Button
        endIcon={
          type === "add" ? (
            <AddCircle />
          ) : type === "edit" ? (
            <EditSharp />
          ) : (
            <DeleteForeverSharp />
          )
        }
        variant="contained"
        color={
          type === "add" ? "success" : type === "edit" ? "warning" : "error"
        }
        fullWidth={type === "add" ? true : false}
        className={
          type === "add"
            ? classes.inventaryAddButton
            : type === "edit"
            ? classes.inventaryEditButton
            : classes.inventaryDeleteButton
        }
        onClick={
          type === "delete" ? () => handleDelete(rowId) : handleClickOpen
        }
      >
        {type === "add" ? "Aggiungi" : type === "edit" ? "Modifica" : "Elimina"}
      </Button>
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
                {type === "add" ? "Aggiungi Elemento" : "Modifica Elemento"}
              </Typography>
            </Toolbar>
          </AppBar>
          {type === "add" && <AddItemForm style={style} />}
          {type === "edit" && <EditItemForm style={style} rowId={rowId} />}
        </Dialog>
      ) : null}
    </Fragment>
  );
};

export default ButtonDialog;
