import { forwardRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

import Close from "@material-ui/icons/CloseSharp";

import { useCustomStyles } from "../../../shared/useStyles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogWrapper = ({ children, title, open, setOpen }) => {
  const classes = useCustomStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default DialogWrapper;
