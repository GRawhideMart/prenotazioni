import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumb = ({ style, name }) => {
    const classes = style();
  
    return (
      <div className={classes.breadcrumb}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="primary" href='/'>
            Panoramica
          </Link>
          <Typography color="textSecondary">{name}</Typography>
        </Breadcrumbs>
      </div>
    );
  }

export const Title = (props) => {
    const { style, name } = props;
    const classes = style();

    return(
        <Fragment>
            <Typography color="secondary" gutterBottom variant="h2" className={classes.title} align='center'>
              {name.toUpperCase()}
            </Typography>
            <Breadcrumb style={style} name={name} />
        </Fragment>
    )
}

export default Title;