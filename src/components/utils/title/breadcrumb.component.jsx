import { useCustomStyles } from "../../../shared/useStyles";
import { Link } from "react-router-dom";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import NavigateNextIcon from "@material-ui/icons/NavigateNextSharp";

const Breadcrumb = ({ name }) => {
  const classes = useCustomStyles();

  return (
    <div className={classes.breadcrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          color="primary"
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Panoramica
        </Link>
        <Typography color="textSecondary" key={name}>
          {name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
