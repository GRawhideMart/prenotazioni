import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  poliradioButton: {
    marginRight: theme.spacing(2),
  },
  toolbarFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    flexGrow: 1,
  },
  navbarBrand: {
    backgroundImage: 'url("https://membri.poliradio.it/img/logo.svg")',
    backgroundRepeat: 'no-repeat',
    marginTop: '20px',
    transform: 'scale(1.8)'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar className={classes.toolbarFlex}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon color='secondary' />
          </IconButton>
          <IconButton style={{backgroundColor: 'transparent'}} edge="center" className={classes.poliradioButton} color="inherit" aria-label="menu">
            <SvgIcon className={classes.navbarBrand}></SvgIcon>
          </IconButton>
          <Typography variant="h6" component='h5' className={classes.title} color='secondary'>
            Servizio prenotazioni
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;