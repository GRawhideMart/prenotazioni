import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Assignment from "@material-ui/icons/AssignmentSharp";
import Home from "@material-ui/icons/HomeSharp";

import { useCustomStyles } from "../../../shared/useStyles";

import PoliradioIcon from "../poliradioIcon";
import LinkComponent from "../link";

const Header = () => {
  const classes = useCustomStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbarFlex}>
          <PoliradioIcon />
          <Button color="secondary" component={LinkComponent} to="/">
            <Home />
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
