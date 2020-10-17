import React, { useState, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import NoteIcon from "@material-ui/icons/Note";
import Slide from "@material-ui/core/Slide";
import BookForm from "./RentFormComponent";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookButton = ({ isAvailable, classes, onClick }) => {
  return isAvailable ? (
    <Button
      variant="contained"
      color="primary"
      className={classes.requestButton}
      endIcon={<NoteIcon />}
      onClick={onClick}
    >
      Richiedi
    </Button>
  ) : (
    <Button
      variant="disabled"
      color="primary"
      className={classes.requestButton}
    >
      Non disponibile
    </Button>
  );
};

const BookItemComponent = (props) => {
  const { style, isAvailable, item, resetFeedbackForm } = props;
  const classes = style();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BookButton
        isAvailable={isAvailable}
        classes={classes}
        onClick={handleClickOpen}
      />
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
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.dialogTitle}>
              {item}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Invia richiesta
            </Button>
          </Toolbar>
        </AppBar>
        <BookForm resetFeedbackForm={resetFeedbackForm} />
      </Dialog>
    </div>
  );
};

export default BookItemComponent;
