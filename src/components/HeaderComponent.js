import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Button, SvgIcon } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';

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
    marginLeft: '8px',
    marginRight: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navbarBrand: {
    backgroundImage: 'url("https://membri.poliradio.it/img/logo.svg")',
    backgroundRepeat: 'no-repeat',
    marginTop: '20px',
    transform: 'scale(1.8)',
    verticalAlign: 'middle'
  },
  avatar: {
    color: '#fff',
    backgroundColor: theme.palette.primary.dark
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar className={classes.toolbarFlex}>
          <IconButton style={{backgroundColor: 'transparent'}} edge="center" className={classes.poliradioButton} color="inherit" aria-label="logo" href='https://membri.poliradio.it'>
            <SvgIcon className={classes.navbarBrand}></SvgIcon>
          </IconButton>
          <Button color='secondary'>
            Studio 1
          </Button>
          <Button color='secondary'>
            Studio 2
          </Button>
          <Button color='secondary'>
            Affitti
          </Button>
          <Avatar className={classes.avatar}>
            <Assignment />
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;