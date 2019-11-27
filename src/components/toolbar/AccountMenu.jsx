import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from 'react-router-dom';

const accountStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
  },
}));


const AccountMenu = ({ authProps }) => {
  const { AppAuth, authHook } = authProps;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = accountStyles();

  // const logout = (event) => {
  //   AppAuth.signOut().then(
  //     AuthStore.dispatch({ type: 'changeAuth', authenticated: false }),
  //   );
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleClose();
    AppAuth.signOut().then(() => {
      console.log('Sigining out');
      console.log(authHook);
    });
  };

  const returnToLogin = () => (
    <Redirect to="/login" />
  );

  const renderMenu = () => (
    <div className={classes.root}>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'center',
        // }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );

  const render = () => {
    if (authHook) {
      return renderMenu();
    }
    return returnToLogin();
  }

  return (
    <div>
      {render()}
    </div>
  );
};

export default AccountMenu;
