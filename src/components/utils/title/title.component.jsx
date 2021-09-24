import { Fragment } from "react";
import { useCustomStyles } from "../../../shared/useStyles";
import Typography from "@material-ui/core/Typography";

import Breadcrumb from "./breadcrumb.component";

const Title = ({ name }) => {
  const classes = useCustomStyles();

  return (
    <Fragment>
      <Typography
        color="secondary"
        gutterBottom
        variant="h2"
        className={classes.title}
        align="center"
      >
        {name.toUpperCase()}
      </Typography>
      <Breadcrumb name={name} />
    </Fragment>
  );
};

export default Title;
