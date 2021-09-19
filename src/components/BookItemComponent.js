import React, { useState, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import BookForm from "./RentFormComponent";
import KeyboardArrowRightRounded from "@material-ui/icons/KeyboardArrowRightRounded";
import { useCustomStyles } from "../shared/useStyles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookButton = ({ isAvailable, classes, onClick }) => {
  return isAvailable ? (
    <Button
      variant="contained"
      color="primary"
      className={classes.requestButton}
      endIcon={<KeyboardArrowRightRounded />}
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

const BookItemComponent = ({ isAvailable, item }) => {
  const classes = useCustomStyles();
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
          </Toolbar>
        </AppBar>
        <BookForm classes={classes} />
      </Dialog>
    </div>
  );
};

export default BookItemComponent;
