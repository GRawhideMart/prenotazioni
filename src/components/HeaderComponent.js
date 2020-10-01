import React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Button, SvgIcon } from "@material-ui/core";
import { Assignment } from "@material-ui/icons";

const PoliradioIcon = ({ style }) => {
  const classes = style();
  return (
    <IconButton
      style={{ backgroundColor: "transparent" }}
      edge="center"
      className={classes.poliradioButton}
      color="inherit"
      aria-label="logo"
      href="https://membri.poliradio.it"
    >
      <SvgIcon className={classes.navbarBrand}></SvgIcon>
    </IconButton>
  );
};

export const LinkComponent = (props) => {
  return <RouterLink {...props} />;
};

const Header = (props) => {
  const classes = props.style();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbarFlex}>
          <PoliradioIcon style={props.style} />
          <Button color="secondary" component={LinkComponent} to="/studio">
            Studio 1
          </Button>
          <Button color="secondary" component={LinkComponent} to="/stanzino">
            Studio 2
          </Button>
          <Button
            color="secondary"
            component={LinkComponent}
            to="/attrezzatura"
          >
            Attrezzatura
          </Button>
          <Avatar className={classes.avatar}>
            <Assignment />
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
