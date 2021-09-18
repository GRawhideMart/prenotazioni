import React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Button, SvgIcon } from "@material-ui/core";
import { Assignment, HomeSharp } from "@material-ui/icons";
import { useSelector } from "react-redux";

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

const Header = () => {
  const style = useSelector((state) => state.styles);
  const classes = style();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbarFlex}>
          <PoliradioIcon style={style} />
          <Button color="secondary" component={LinkComponent} to="/">
            <HomeSharp />
          </Button>
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
          <Button color="secondary" component={LinkComponent} to="/inventario">
            Inventario
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
