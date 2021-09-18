import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrumb = ({ name }) => {
  const style = useSelector((state) => state.styles);
  const classes = style();

  return (
    <div className={classes.breadcrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="primary" href="/">
          Panoramica
        </Link>
        <Typography color="textSecondary" key={name}>
          {name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export const Title = ({ name }) => {
  const style = useSelector((state) => state.styles);
  const classes = style();

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
      <Breadcrumb style={style} name={name} />
    </Fragment>
  );
};

export default Title;
