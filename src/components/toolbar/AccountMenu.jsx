import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { AuthStore } from '../../reducers/authReducer';
import { AppAuth } from '../../firebase-init';

const accountStyles = makeStyles(() =>({
  root: {
    flexGrow: 1,
  },
}));


const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = accountStyles();

  const logout = (event) => {
    AppAuth.signOut().then(
      AuthStore.dispatch({ type: 'changeAuth', authenticated: false }),
    );
  };

  // TODO: Implement methods for dropdown menu.

  return (
    <Box>
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
      <Menu>
        <MenuItem>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
