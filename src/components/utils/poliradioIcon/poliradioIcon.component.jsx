import { useCustomStyles } from "../../../shared/useStyles";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const PoliradioIcon = () => {
  const classes = useCustomStyles();
  return (
    <IconButton
      style={{ backgroundColor: "transparent" }}
      edge="start"
      className={classes.poliradioButton}
      color="inherit"
      aria-label="logo"
      href="https://membri.poliradio.it"
    >
      <SvgIcon className={classes.navbarBrand}></SvgIcon>
    </IconButton>
  );
};

export default PoliradioIcon;
